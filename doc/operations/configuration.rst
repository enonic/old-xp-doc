.. _configuration:

Configuration
=============

Enonic XP, system modules, and 3rd party modules can easily be configured by editing the files
in the ``$XP_HOME/config/`` directory.

When changing files ending with ``.cfg``, their respective modules will automatically
restart with the new configuration. Files ending with ``.properties`` require a full restart of
Enonic XP to be applied. In a clustered environment each node must be restarted.


System Configuration
--------------------

The default ``system.properties`` are listed below.

.. literalinclude:: code/system.properties
   :language: properties
   :caption: ``$XP_HOME/config/system.properties``


Virtual Host Configuration
--------------------------

Virtual hosts have their own configuration file and settings
are automatically updated upon changes. A sample virtual host configuration
is listed below.

.. literalinclude:: code/vhost.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.web.vhost.cfg``

In this example file, three mappings are configured.

host
  Host-name to match.

source
  Requested path to match.

target
  Path to which the request is sent.

In the second example, mapping "intranet", a site is mapped to the root of the
URL, which would be normal in production environments.

In the third example, the admin site is mapped to ``enonic.com/admin``.

HTTP Port & Web Configuration
-----------------------------

The default http port for Enonic XP is 8080. The port can be changed in the ``org.ops4j.pax.web.cfg`` file and this will override the
setting in the ``system.properties`` file.

.. literalinclude:: code/web.properties
   :language: properties
   :caption: ``$XP_HOME/config/org.ops4j.pax.web.cfg``


.. _configuration-mail:

Mail Configuration
------------------

The mail server used for sending email messages using the :ref:`lib-mail` API can be configured.
A sample mail configuration is listed below.

.. literalinclude:: code/mail.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.mail.cfg``

smtpHost
  Host name of the SMTP server. Default ``localhost``.

smtpPort
  TCP port of the SMTP server. Default ``25``.

smtpAuth
  Enable authentication with the SMTP server. Default ``false``.

smtpUser
  User to be used during authentication with the SMTP server, if 'smtpAuth' is set to true.

smtpPassword
  Password to be used during authentication with the SMTP server, if 'smtpAuth' is set to true.

smtpTLS
  Turn on Transport Layer Security (TLS) security for SMTP servers that require it. Default ``false``.


Elasticsearch Configuration
---------------------------

Elasticsearch settings can be configured.
When changing ``com.enonic.xp.elasticsearch.cfg``, the Elasticsearch node will automatically restart with the new configuration.

.. literalinclude:: code/elasticsearch.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.elasticsearch.cfg``

(node.)name
  Node name. Default ``local-node``.
(node.)client
  Set this node to be a client node which means it will hold no data. Default ``false``.
(node.)data
  Allow this node to allocate data. Default ``true``.
(node.)master
  Allow this node to be eligible as a master node. Default ``true``.
path.data
  Path to directory where to store index data allocated for this node. Default ``${xp.home}/repo/index/data``.
path.work
  Path to temporary files. Default ``${xp.home}/repo/index/work``.
path.conf
  Path to directory containing configuration. Default ``${xp.home}/repo/index/conf``.
path.logs
  Path to log files. Default ``${xp.home}/repo/index/logs``.
path.plugins
  Path to where plugins are installed. Default ``${xp.home}/repo/index/plugins``.
cluster.name
  Cluster name. Default ``mycluster``.
cluster.routing.allocation.disk.threshold_enabled
  Prevent shard allocation on nodes depending on disk usage. Default ``false``.
http.enabled
  Enable the HTTP module. Default ``false``.
network.host
  Set the bind address and the address other nodes will use to communicate with this node. Default ``127.0.0.1``.
transport.tcp.port
  Custom port for the node to node communication. Default ``9300``.
discovery.zen.minimum_master_nodes
  Ensure a node sees N other master eligible nodes to be considered operational within the cluster. Default ``1``.
discovery.zen.ping.multicast.enabled
  Enable multicast ping discovery. Default ``false``.
discovery.zen.ping.unicast.hosts
  List of master nodes in the cluster to perform discovery when new nodes are started. Default ``127.0.0.1, [::1]``.
index.recovery.initial_shards
  Number of shards expected to be found on full cluster restart per index. Default ``quorum``.


Jetty HTTP Configuration
------------------------

Jetty HTTP settings can be configured using ``com.enonic.xp.web.jetty.cfg`` file.

.. literalinclude:: code/jetty.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.web.jetty.cfg``
