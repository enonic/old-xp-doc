.. _clustering-intro:

Introduction to Clustering
==========================

Planning to go big are you? You've come to the right place...

We're fed up struggling with endless database tuning and infrastructure configuration make things scale. With XP we want to make scaling dead-simple.
The distributed NoSQL architecture of Enonic XP enables you to launch multiple instances of an installation, with minimal effort.
The instances then join together and forms a cluster, giving you:

  * Fault tolerance - if a node fails, other nodes will still ensure that your system is up and running. 
  * Performance - For every node added, the performance increases

As a result, the applications you build on XP instantly have cloud-style scalability.

.. WARNING::

      To deploy Enonic XP in a cluster you will need access to a shared or distributed filesystem, in addition to computing nodes.


System Requirements
-------------------

Enonic XP clusters have minimal requirements to infrastructure, it needs:

  * Distributed (or shared) filesystem
  * Load balancer - to make sure traffic is routed to different nodes

.. image:: images/logical-cluster.png

These components are standard ingredients in modern clouds - and easily available as software as well.
If you want, a XP cluster can be launched on a regular computer - typically used for testing or development purposes.



Basic cluster setup
-------------------

We have tried to make deployment of XP as simple and fail-safe as possible.
By default is configured to run on a local computer -
and it will not start looking for nodes in the network before you configures it to do so


Cluster on local machine
#########################################

To set up a cluster on your local machine, there are two configuration properties that needs to be set:

 1. $XP_HOME/config/com.enonic.xp.repo.cfg: 
 
 :: 
 
    blobStore.dir = /some/common/path
 
 2. $XP_HOME/config/com.enonic.xp.web.jetty.cfg: 
 
 :: 
 
    http.port = somePort

The `blobStore.dir` must point to a directory where both node can access the blobstore files

The `http.port` must be set to different values for each node. The default is 8080, select e.g 8090 for next node etc.



Cluster in network
#############################

To enable clustering on two computers via the network you need to do the following:

Set up a shared file system
***************************

  #. Get access to a shared or distributed file system and mount it on the nodes that will be part of the cluster (this is highly individual for different operating systems and infrastructures)
  #. $XP_HOME/config/com.enonic.xp.repo.cfg

  ::

    blobstore.path = /path/to/shared/disk/folder


Specify cluster network
***********************

 #. Find the IP addresses of the computers that will join the cluster
 #. Edit $XP_HOME/config/com.enonic.xp.elasticsearch.cfg

 ::

    discovery.zen.ping.unicast.hosts = <ip-address1>, <ip-address2>, etc
    network.host = <ip-address of local node or network interface alias, i.e. _en0_>

.. NOTE::

      If you set an ip-address in the network.host setting you must update the config file for each individual node.


Start the nodes
***************

  #. Copy the configuration settings to each node in your cluster and start the nodes
  #. Check cluster status by accessing the following url (works on any node)

  ::

    http://<host>:<port>/status/cluster (default port is 8080)


Congratulations, you should now have an Enonic XP cluster at your disposal. You can access any of the nodes both for using the admin interface or accessing web applications.



Deploying Apps in cluster
-------------------------

To deploy applications in a cluster you need to deploy the application to every node, as loading and installation of apps is done on a per-node basis.
This also means you can choose what applications to deploy on each node.

.. WARNING::

      Remember that XP only support running one version of an application at any time.
      So don't leave the old versions of your applications in the deploy directory.


Backing up a cluster
--------------------

Backing up a cluster is done in the same way as backing up a single node installation

  #. First, on any cluster node, execute NNNN This will output YYYY
  #. Secondly, take a copy of your blobstore - this will xxx.

  We recommend uing incremental backup for the blobstore (rsync or similar) as this will only copy the recently changed files.
  The combined data from YY and blobstore copy is all you need in order to restore Enonic XP.


How XP Clustering works
-----------------------

There are basically four main components involved to make an Enonic XP cluster work.

  * The Cluster Manager - System that keeps track of what nodes are available at any time
  * Cluster transport - System to transport events and data between the cluster nodes
  * Search engine index - Ensures all indexed data is replicated across nodes (stored on local disk)
  * Blobstore - System that organizes and persist files - Binary Large ObjectS (stored on shared disk)


These components work together to ensure the nodes communicate and share data between each other.
