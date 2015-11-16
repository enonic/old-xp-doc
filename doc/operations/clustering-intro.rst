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


How XP Clustering works
-----------------------

There are basically four main components involved to make an Enonic XP cluster work.

  * The Cluster Manager - System that keeps track of what nodes are available at any time
  * Cluster transport - System to transport events and data between the cluster nodes
  * Search engine index - Ensures all indexed data is replicated across nodes (stored on local disk)
  * Blobstore - System that organizes and persist files - Binary Large ObjectS (stored on shared disk)


These components work together to ensure the nodes communicate and share data between each other.


Basic cluster setup on local machine
--------------------------------------

We have tried to make deployment of XP as simple and fail-safe as possible.
By default is configured to run on a local computer -
and it will not start looking for nodes in the network before you configures it to do so

To test a cluster on your local machine, your need to set a common place for storing data:

In ``$XP_HOME/config/com.enonic.xp.repo.cfg`` set the following property to point to a common directory: 
 
 :: 
 
    blobStore.dir = /some/common/path
 
Since you will run two nodes on the same machine, you also need to set two different HTTP-ports to be able to run two instances at once:

In ``$XP_HOME/config/com.enonic.xp.web.jetty.cfg`` set the following property to different values for the two nodes, typically ``8080`` and ``8090``
 
 :: 
 
    http.port = somePort


Start the nodes, they will connect and you should have a live cluster on your machine. You can check the current cluster info at:

http://localhost:8080/status/cluster

To set up a real cluster, proceed to the :ref:`cluster-setup` chapter.


