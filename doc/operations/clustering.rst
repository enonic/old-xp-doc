.. _clustering:

Clustering
==========

Introduction
-------------

System Requirements
*******************

Enonic XP clusters have minimal requirements to infrastructure, it needs:

  * Distributed (or shared) filesystem
  * Load balancer - to make sure traffic is routed to different nodes

.. image:: images/logical-cluster.png

These components are standard ingredients in modern clouds and they are readily available as software as well.
An XP cluster can also be launched on a regular computer for testing or development purposes.


Basic cluster setup on local machine
**************************************

We have tried to make deployment of XP as simple and fail-safe as possible. By default it is configured to run on a local computer and it
will not start looking for nodes in the network until you configure it to do so.

To test a cluster on your local machine, you need to do the following:

 1. **Get two XP installations:** Download an $XP_DISTRO and copy it to a second $XP_DISTRO folder.

Typically, you will already have an XP-installation by now, so just copy the $XP_DISTRO folder to make another node.

 2. **Share data:** Prepare a common place for storing data and configure both XP instances:

In ``$XP_DISTRO/home/config/com.enonic.xp.repo.cfg`` set the following property to point to a common directory:

 ::

    blobStore.dir = /some/common/path

 3. **Give each node its own HTTP-port:** Since you will run two nodes on the same machine, you also need to set two different HTTP-ports to be able to run two instances at once:

In ``$XP_DISTRO/home/config/com.enonic.xp.web.jetty.cfg`` set the following property to different values for the two nodes, typically ``8080`` and ``8090``

 ::

    http.port = somePort

 4. **Start your cluster:** Start both nodes by their respective ``bin/server.sh`` or ``bin/server.bat``. They will connect and you should have a live cluster on your machine. You can check the current cluster info at:

 ::

  http://localhost:8080/status/cluster


.. NOTE::

	By default, if no XP_HOME environment variable is set, the XP_HOME used is the one located in the XP_DISTRO/home folder which will work
	nicely for the above example. If you have set XP_HOME in the shell where you try to start the server, this will override the default settings.
	So for the above test, unset the XP_HOME variable if needed:

	::

	   unset XP_HOME



Cluster configuration
---------------------

There are a well of options at your disposal to configure and tune the cluster behavior. See :ref:`Elasticsearch configuration<storage-config>` for a subset of the available settings.
All settings referred to in this chapter are set in ``$XP_HOME/config/com.enonic.xp.elasticsearch.cfg`` unless otherwise specified.


There are some key elements to consider when setting up a cluster:

 #. Set up a shared storage for the nodes -> :ref:`shared-storage`
 #. Make sure that nodes are connected -> :ref:`network-config`
 #. Distribute the data between the nodes -> :ref:`replica-setup`
 #. Ensure cluster data integrity -> :ref:`cluster-partition-settings`
 #. Ensure cluster stability -> :ref:`cluster-stability-settings`
 #. Make sure nodes recover correctly -> :ref:`node-recovery-settings`
 #. Monitoring the cluster -> :ref:`cluster-monitoring`
 #. Deploying applications -> :ref:`deploying-apps`
 #. Securing data -> :ref:`cluster-backup`


.. _shared-storage:

Shared storage Configuration
----------------------------

For now, the nodes in the cluster need a shared storage to store data as files. Setting this up is highly individual for different operating systems and infrastructures, but as a basic guideline:

  #. Get access to a shared or distributed file system and mount it on the nodes that will be part of the cluster
  #. Configure ``$XP_HOME/config/com.enonic.xp.repo.cfg`` to point to the mounted storage:

  ::

    blobsStore.dir = /path/to/shared/disk/folder


.. _network-config:

Network configuration
----------------------

The nodes in a cluster need to be able to discover and communicate with other nodes in the network. The nodes communicate through TCP.

Each node binds to an IP-address and port, and communicates to other nodes specified in a list of other nodes bind addresses. Verify that your network allows TCP traffic on a specific port or port-range for the nodes to communicate and then configure the nodes to use these addresses.

Settings
*********

network.host
############

The ``network.host`` setting specifies the TCP-address used for node communication. The default value for this is 127.0.0.1, which means that this node will never be able to talk to other nodes.

The ``network.host`` setting can be an explicit *IP-address*, a *host-name* or an *alias*. See the :ref:`storage-config` section for an overview.

transport.tcp.port
##################

The ``transport.tcp.port`` value defines the port that the node will use for communication. This defaults to a range of ports; ``9300-9400``, meaning that it will use the first available port in this range.

discovery.zen.ping.unicast.hosts
################################

The ``discovery.zen.ping.unicast.hosts`` value contains a comma-separated list of nodes that are allowed to join the cluster. Each value is either in the form of ``host:port`` or ``host:port1-port2`` (port-range).


Sample config
*************

.. literalinclude:: code/sample-network-settings.properties
   :language: properties

.. TIP::

   **Why aren't my nodes connecting**

   The most common issue is that the node binds to a different network address than specified in the unicast list.
   When a node starts, the log will show the current bind-address of the node in a message similar to this:

   ::

       09:01:43.282 INFO  org.elasticsearch.http - [loadtest-appserver1] bound_address {inet[/10.0.6.49:9300]}, publish_address {inet[/10.0.6.49:9300]}

   Make sure that the bind-addresses match those specified in the unicast-list. If it still doesn't work, it's time to blame the firewall or consult the :ref:`troubleshooting`

.. _replica-setup:

Replica setup
-------------------

Number of replicas
******************

For a cluster to perform, each node must be able to do its share of work. Enonic XP searches for data in a number of Elasticsearch indices.
An index can have a number of replicas (copies) spread around to the nodes in the cluster, so each node can query its local index for data.

The indices in Enonic XP have one replica configured by default. When a cluster has more than two nodes, this number must be increased to ensure that each node has a replica of the indices.

The number of replicas can be set at runtime with the Toolbox CLI :ref:`set-replicas`, and the recommended settings for replicas is ``number of nodes - 1``

So for a 3 node cluster, the number of replicas should be set to 2.

.. _cluster-partition-settings:

Cluster partition settings
----------------------------------

One of the main motivations of a cluster is to ensure that even if one or several nodes fail, the service you are providing should still be
available. In an ideal world, a 100 node cluster should be fully operational even if 99 nodes are down. But in the real world, we also need
to consider the cluster data integrity. This introduces a common dilemma in clustered environments; how to avoid the dreaded split-brain situation.

In a split-brain scenario, nodes get divided into smaller clusters that don't communicate with each other, and each cluster believing that
the nodes in the other cluster are dead. This can easily happen in a cluster with 4 nodes on two different locations:

<<<Figure>>>

If the nodes on location-1 are disconnected from the master node on location-2, they will regroup and select a new master on location-1 and
still provide service. The nodes on location-2 will assume that the nodes in location-1 are dead, so they will also continue serving
requests. but they have no way of synchronizing data between the locations. This will break the integrity of the cluster and make data invalid.


To avoid this situation, there are a couple of basic properties of a cluster that should be ensured:

 #. Beyond a two node cluster, there should be an odd number of nodes. So 1,2,3,5,7 etc are all acceptable cluster configurations.
 #. When nodes are forming separate smaller clusters, only the cluster-partition with the majority of nodes should be fully operational and accept writes.
 #. The minority cluster partitions can be allowed to serve read-only requests if that is acceptable for the provided service.

Settings
*********

discovery.zen.minimum_master_nodes
##################################

This is the most important setting to set correctly to ensure cluster data integrity. A node will not accept requests before the number of
'minimum_master_nodes' are met. For instance, in a 3 node cluster with 3 master nodes and 'minimum_master_nodes' setting of '2', imagine
that one of the nodes loose connection to the two other nodes. This node will only see one possible master node (itself) and will not accept
requests. The remaining two other nodes will still work, and when the lost node reconnects again, it will get the fresh data from the other
nodes and rejoin the cluster.

.. IMPORTANT::

   As a rule of thumb, this setting should be set to N/2+1, where N is the total number of nodes. So for a 5 node cluster,
   discovery.zen.minimum_master_nodes =    5/2+1 = 3 (rounding down to the nearest integer)

So what about a 2 node cluster? It will be impossible to avoid a possible split-brain scenario with this setup. It's highly recommended to
add one node as a tie-breaker. This node may act as a dedicated master node (with `node.data = false`, see :ref:`cluster-stability-settings`)
which enables it to run on less expensive hardware since it will not handle any external requests.


.. TIP::

    **Why nodes leave the cluster**

    There are 2 main reasons why cluster nodes leave the cluster

     #. Network failure
     #. Node not responding

    *Network failures*


    Network failures are the main reason for cluster stability-issues. The problems could have any number of reasons, from a router breaking
    down to complex scenarios where e.g a firewall cuts the connection in one direction between two nodes

    *Node not responding*


    If a node does not get a response on a ping to the master node within a set timeout, it will consider it as dead and invoke an election
    process. Likewise, the master node expects that a slave node will respond within a certain amount of time. This is usually caused by a
    node doing a stop-the-world garbage collection, and not being able to respond to the request at all for a period of time.


.. _cluster-stability-settings:

Cluster stability settings
---------------------------

In a low load environment, there is probably no need to do a lot of tuning since it will perform acceptable with the default setup. If you
expect heavy load, there are a couple of things to consider when setting up the cluster topology.

Dedicated master nodes
***********************

A cluster consists of a number of nodes sharing data and state between them. A cluster needs to have exactly one node acting as a master-node
at any time. The master-node is responsible for managing the cluster-state. In a busy cluster, the master-nodes will have to do a lot of work
to ensure that all other nodes get the needed information.

Since the cluster stability depends on a healthy master node, it may be a good idea to set aside a number of nodes as *dedicated master nodes*.
These dedicated master nodes should not be handling external requests, but rather concentrate on keeping the cluster nodes in sync and stable.

A node can be configured to be allowed to act as a master-node by the setting ``node.master``.

A dedicated master node should have the following settings:

::

  node.master = true
  node.data = false


Data nodes
**********

Data nodes are the workhorses of the cluster. They will handle the bulk load of the requests, depending on the master node to keep them in
sync. These nodes need the most memory and CPU power.

A dedicated data node should have the following settings:

::

  node.master = false
  node.data = true


.. _node-recovery-settings:

Node recovery settings
-----------------------

Node recovery happens when a node starts or reconnects to the cluster after a e.g a network shortage.

Consider a cluster of 2 nodes. When a node starts for the first time, it will try to connect to a cluster. If no master found, it will elect
itself as master, then proceed to initialize the index-data locally. If it does find an existing master node, it will require the master to
provide it with data. This is all good, but there may occur situations where a new node in an existing cluster starts initializing data
before the nodes with existing data can inform the new node that there is already data in the cluster.


Settings
*********

gateway.recover_after_nodes
#############################

Defaults to 1. Do not start the recovery of local indices before this number of nodes (master or data) has joined the cluster.

gateway.recover_after_master_nodes
##################################

Defaults to 0. Do not start the recovery of local indices before this number of master-nodes is present in the cluster.


Cluster monitoring
------------------

See :ref:`cluster-monitoring`

.. _deploying-apps:

Deploying Apps in cluster
-------------------------

To deploy applications in a cluster you need to deploy the application to every node, as loading and installation of apps is done on a
per-node basis. This also means you can choose what applications to deploy on each node.

.. WARNING::

      Remember that XP only supports running one version of an application at any time.
      So don't leave the old versions of your applications in the deploy directory.

.. _cluster-backup:

Backing up a cluster
--------------------

Backing up a cluster is done in the same way as backing up a single node installation, the only difference is that the
``snapshots.dir``-option should point to a shared file system location, see :ref:`storage-config`.

  #. First, on any cluster node, take a :`toolbox-snapshot` of the indices. This will store a cluster-wide snapshot of all data at a point
     of time. This can be configured to run as an automatic job; Only the diff from the last snapshot will be stored, so the operation is quick.
  #. Second, take a file copy of your blobstore.

  We recommend uisng incremental backup for the blobstore (rsync or similar) as this will only copy the recently changed files.
  The combined data from the snapshots and blobstore copy is all you need in order to restore Enonic XP.


Sample configurations
---------------------

2-node cluster
****************

.. literalinclude:: code/2-node-cluster-config.properties
   :language: properties

3-node cluster
****************

.. literalinclude:: code/3-node-cluster-config.properties
   :language: properties

5-node cluster
****************

.. literalinclude:: code/5-node-cluster-config.properties
   :language: properties

7-node cluster with dedicated roles
************************************

.. literalinclude:: code/7-node-cluster-dedicated.properties
   :language: properties
