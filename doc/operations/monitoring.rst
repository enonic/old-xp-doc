.. _monitoring:

Monitoring
==========

We provide some basic metric tools for monitoring which are easily accessed in
a simple JSON format. To access the monitoring JSON feed you can point to
the following url::

  http://localhost:8080/status

This will give you a list of status-reporters. Each reporter has a name and
can be accessed using the following pattern::

  http://localhost:8080/status/<name>

Here's a list of all the status pages and what is shows:

  ``cluster``
    Information of the current cluster. Local-node and members.

  ``dump.deadlocks``
    This will try to detect thread deadlocks and show them if any.

  ``dump.threads``
    Dumps all current thread-states.

  ``index``
    Shows ElasticSearch index status.

  ``jvm.gc``
    Information about JVM GC status.

  ``jvm.info``
    General JVM information (version, vendor, uptime).

  ``jvm.memory``
    JVM memory information (heap and non-heap).

  ``jvm.os``
    Information about OS (name, version, architecture).

  ``jvm.properties``
    Shows all JVM properties.

  ``jvm.threads``
    JVM thread stats (count, peak, total).

  ``metrics``
    Shows metrics. The information can be filtered using ``?filter=...``.

  ``osgi.bundle``
    Information about all OSGi bundles.

  ``osgi.component``
    Information about registered SCR OSGi components.

  ``osgi.service``
    Shows all OSGi services registered.

  ``server``
    Information about the server (version, build).


.. _cluster-monitoring:

Cluster monitoring
-------------------------

There are two tools at your disposal for monitoring the health of the cluster and indices:

Cluster health
***************

::

  http://<host>:<port>/status/cluster

Which should give you a response like this:

.. literalinclude:: code/cluster-state-response.json
   :language: json

This view gives a brief overview of the nodes in the cluster. For convenience, the current local node to which the request was made has a
separate entry in addition to being in the list of members.

The "state" property is the most important:

 * **Green**: Cluster is operational and all configured replicas are distributed to a node
 * **Yellow**: Cluster is operational, but there are replicas that are not distributed to any node
 * **Red**: Cluster is not operational

To see the details about how the replicas are distributed, let's continue to the ``Index stats`` report:

Index stats
*************

::

  http://<host>:<port>/status/index

Which should give you a response like this:

.. literalinclude:: code/index-stats-response.json
   :language: json

This gives an overview of how the indices are distributed and what state the index parts (**shards**) are currently in. A shard could be
either ``PRIMARY`` or ``REPLICA`` (copy of a primary shard). These are the possible states:

 * **total**: Total number of index parts (e.g two repositories with two indices with one replica for each index)
 * **started**: Shards that are currently assigned to a node
 * **unassigned**: Shards waiting to be distributed to a node. Typically a setup with a number of replicas where one or more nodes are not running
 * **relocating**: Shards that are currently moving from one node to another
 * **initializing** Shards that are currently being recovered from disk at startup.

 The ``shards`` section gives a more detailed overview on the shard distribution.
