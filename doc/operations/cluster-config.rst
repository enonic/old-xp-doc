.. _cluster-setup:

Cluster setup
=============

There are a well of options at your disposal to configure and tune the cluster behaviour. See :ref:`configuration-cluster` for a subset of the available settings.
All settings referred to in this chapter is set in ``$XP_HOME/config/com.enonic.xp.elasticsearch.cfg``


There are some key elements to consider when setting up a cluster:

 #. Make sure that nodes are connected -> :ref:`network-config`
 #. Distribute the data between the nodes -> :ref:`replica-setup`
 #. Ensure cluster data integrity -> :ref:`cluster-partition-settings`
 #. Ensure cluster stability -> :ref:`cluster-stability-settings`
 #. Make sure nodes recovers correctly -> :ref:`node-recovery-settings`
 

.. _network-config:
 
Network configuration
----------------------

The nodes in a cluster needs to be able to discover and communicate with other nodes in the network. The nodes communicate through TCP.

Each node binds to an IP-address and port, and communicates to other nodes specified in a list of other nodes bind addresses.

Settings
*********

network.host
############

The ``network.host`` setting specifies the TCP-address used for node communication. The default value for this is 127.0.0.1, which means that this node will never be able to talk to other nodes.

The ``network.host`` setting can be an explicit *IP-address*, a *host-name* or an *alias*. See the :ref:`network-host-aliases` 

transport.tcp.port
##################

The ``transport.tcp.port`` value defines the port that the node will use for communication. This defaults to a range of ports; ``9300-9400``, meaning that it will use the first available port in this range.

discovery.zen.ping.unicast.hosts
################################

The ``discovery.zen.ping.unicast.hosts`` value contains a comma-separated list of nodes that are allowed to join the cluster. Each value is either in form of ``host:port`` or ``host:port1-port2`` (port-range).


.. NOTE::

   **Why arent my nodes connecting**

   The most common issue is that the node binds to another network address than specified in the unicast list.
   When a node starts, the log will show the current bind-address of the node is a message similar to this:

   ::

       09:01:43.282 INFO  org.elasticsearch.http - [loadtest-appserver1] bound_address {inet[/10.0.6.49:9300]}, publish_address {inet[/10.0.6.49:9300]}

   Make sure that the bind-addresses matches the ones specified in the unicast-list.

.. _replica-setup:
 
Replica setup
-------------------

Number of replicas
******************

For a cluster to perform, all nodes must be able to do its share of work. Enonic XP searches for data in a number of Elasticsearch indices. An index can have a number of replicas (copies) spread around to the nodes in the cluster, so each node can query its local index when needing data.

By default, the indices in Enonic XP has one replica configured. When having a cluster with more than two nodes, this number has to be increased to ensure that each node has a replica of the indices.

The number of replicas can be set runtime with the Toolbox CLI :ref:`set-replicas`, and the recommended settings for replicas is ``number of nodes - 1``
 
So for a 3 nodes cluster, the number of replicas should be set to 2.

.. NOTE:: 

    The number of replicas in your cluster should be tuned to play along with your ``index.recovery.initial_shards``-setting, see the `Node recovery settings`_ section


.. _cluster-partition-settings:

Cluster partition settings
----------------------------------

One of the main motivations of a cluster is to ensure that even if one or several nodes fails, the service you are providing should still be available.  In an ideal world, a 100 nodes cluster should be fully operational even if 99 nodes are down.
But in the real world, we also need to consider the cluster data integrity. This introduces a common dilemma in clustered environments; how to avoid the dreaded split-brain situation.

In a split-brain scenario, nodes gets divided into smaller clusters that dont communicate with each other, and each cluster beliving that the nodes in the other cluster are dead. This can easily happen having a cluster with 4 nodes on two different locations:

<<<Figure>>>

If the nodes on location-1 are disconnected from the master node on location-2, they will regroup and select a new master on location-1 and still provide service. 
The nodes on location-2 will just assume that the nodes in location-1 is dead, so they will also continue serving request, but they have no way of syncronizing data between the locations. This will break the integrity of the cluster and make data invalid.


To avoid this situation, there are a couple of basic properties of a cluster that should be ensured:

 #. Beyond a two node cluster, there should be an odd number of nodes. So 1,2,3,5,7 etc are all acceptable cluster configurations. 
 #. When nodes are forming separate smaller clusters, only the cluster-partition with the majority of nodes should be fully operational and accept writes.
 #. The minority cluster partitions can be allowed to serve read-only requests if that is acceptable for the provided service


.. NOTE::

    **Reasons for nodes leaving the cluster**
  
    There are 2 main reasons why cluster nodes leaves the cluster
	
     #. Network failure
     #. Node not responding
     
    *Network failures*
   
    
    Network failures are the main reason for cluster stability-issues. The problems could having any number of reasons, from a router breaking down to complex scenarios where e.g a firewall cuts the connection in one direction between two nodes
    
    *Node not responding*
    
    
    If a node does not get a response on a ping to the master node within a set timeout, it will consider it as dead, and invoke an election process. Likewise, the master node expects that a slave node respons within a certain amount of time.
    This is usually caused by a node doing a stop-the-world garbage collection, and not beeing able to respond to the request at all for a period of time.

.. _cluster-stability-settings:

Cluster stability settings
---------------------------

In a low load environment, there is probably no need reason to do a lot of tuning since it will performe acceptable with the default setup. If you expect heavy load, there are a couple of things to consider when setting up the cluster topology.

Dedicated master nodes
***********************

A cluster consists of a number of nodes sharing data and state between them. A cluster needs to have exactly one node acting as a master-node at any time. The master-node is reponsible for managing the cluster-state.
In a busy cluster, the master-nodes will have to do a lot of work to ensure that all other nodes gets the needed information.

Since the cluster stability depends on a healthy master node, it may be a good idea to set aside a number of nodes as *dedicated master nodes*. These dedicated master nodes should not be handling external requests, but rather concentrate on keeping the cluster nodes in sync and stable.

A node can be configured to be allowed to act as a master-node or not by the setting ``node.master``. 

A dedicated master node should have the following settings:

:: 

  node.master = true
  node.data = false 


Data nodes
**********

Data nodes are the workhorses of the cluster. They will handle the bulk load of the requests, depending on the master node to keep them in sync. These nodes needs the most memory and CPU power.

A dedicated data node should have the following settings:

:: 

  node.master = false
  node.data = true


.. _node-recovery-settings:

Node recovery settings
-----------------------

Yadayada

Sample configurations
---------------------

2-nodes cluster
****************

3-nodes cluster with no dedicated master-nodes
**********************************************

.. literalinclude:: code/3-node-cluster-config.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.elasticsearch.cfg``

3-nodes cluster with two dedicated master-nodes
***********************************************












