Monitoring
==========

We provide some basic metrics for monitoring tools easily accessed in
a simple JSON format.

Basic status info
-----------------

To access the monitoring JSON feed you can
point to the following url::

  http://<host>:8080/status

This will give you information about Enonic XP version, JVM metrics, memory
usages and OS information.

.. literalinclude:: code/status.js
  :language: javascript


Cluster status info
-------------------

For clustered nodes, access the following url for details on cluster status::

  http://<host>:8080/status/cluster

.. literalinclude:: code/cluster-status.js
  :language: javascript
  :caption: TODO
