.. _configuration:

Configuration
=============

Enonic XP and 3rd party applications can easily be configured by editing the files
in the ``$XP_HOME/config/`` directory.

When changing files ending with ``.cfg``, it's respective application will automatically
restart with the new configuration. Files ending with ``.properties`` require a full restart of
Enonic XP to be applied. In a clustered environment, configuration files must be distributed to all nodes where it is relevant.


System Properties
-----------------

The  ``$XP_HOME/config/system.properties`` file must always be placed in this location. Any changes to this file will require a full restart of the node to take effect
The standard version of this file is listed below.

.. literalinclude:: code/system.properties
   :language: properties
   :caption: ``$XP_HOME/config/system.properties``


With Enonic XP versjon 6.9 a simple but powerful feature called "Config Paths" was introduced.
In addition to the default ``$XP_HOME/config/`` directory, you may now instruct XP to scan multiple different folders when looking for config files.

This provides great flexibility and can simplify configuration management. For instance:

* Allowing selected users to manage application config, but not system configuration
* Overriding standard config on selected nodes only

If multiple paths are listed, each directory will be scanned in the defined order, and the first file found of each configuration, will be used.

Below is an example usage of config path where it will scan three directories in the defined order.

::

  xp.config.paths = ${xp.home}/config,/usr/local/xp/${node.group},/etc/xp/config


Please note that ${xp.home}/config is no longer required to be in the path.


.. _configuration-vhost:

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

userStore
  Key of the user store associated to this virtual host (see :ref:`id_providers`).

In the second example, mapping "intranet", a site is mapped to the root of the
URL, which would be normal in production environments.

In the third example, the admin site is mapped to ``enonic.com/admin``.


.. _configuration-mail:

Mail Configuration
------------------

The mail server used for sending email messages can be configured.
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


.. _repo-configuration:

Repo Configuration
------------------

snapshots.dir
  Where to store snapshots

.. literalinclude:: code/repo.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.repo.cfg``


.. _storage-config:

Storage Configuration
---------------------

**Blobstore Configuration**

Main blobstore configuration is configured in ``com.enonic.xp.blobstore.cfg``.

.. literalinclude:: code/com.enonic.xp.blobstore.cfg
  :language: properties
  :caption: ``$XP_HOME/config/com.enonic.xp.blobstore.cfg``

provider
 	The blobstore provider to be used for storing. Default value is ``file``. Other providers will be available in future versions / enterprise-edition. Each provider will have a separate configuration file named ``com.enonic.xp.blobstore.<providername>.cfg``

cache
	Enable or disable memory caching of blobs fetched from the blobstore. Default true

cache.sizeThreshold
    The maximum size for objects to be cached, defaults to 1MB. You will usually avoid filling up the cache with large blobs, but rather cache smaller objects that are used often. The size notation accepts a number plus byte-size idenfier (``b``/``kb``/``mb``/``gb``/``tb``/``pb``)

cache.memoryCapacity
	The maximum memory footprint of the blob cache. Defaults to 100MB. The size notation accepts a number plus byte-size idenfier  (``b``/``kb``/``mb``/``gb``/``tb``/``pb``)

**File blobstore configuration**

.. literalinclude:: code/com.enonic.xp.blobstore.file.cfg
  :language: properties
  :caption: ``$XP_HOME/config/com.enonic.xp.blobstore.file.cfg``

baseDir
 	Base-directory for storing blobs. Defaults to ``${xp.home}/repo/blob``.

readThrough.provider = none
	Readthrough provider name, if enabled. A readthrough provider stores and fetches blobs through an intermediate blobstore. Typically used for providers using a remote blobstore where caching as local files will improve performance.

readThrough.enabled = false
	Enable or disable readthough provider usage. Default to false.

readThrough.sizeThreshold = 100mb
    The maximum size for objects to be stored in the readthrough provider, defaults to 100MB. The size notation accepts a number plus byte-size idenfier (``b``/``kb``/``mb``/``gb``/``tb``/``pb``)


.. _es-config:

Elasticsearch configuration
---------------------------

The cluster functionallity is facilitated by Elasticsearch, so all relevant Elasticsearch settings are available.

When changing ``com.enonic.xp.elasticsearch.cfg``, the  node will automatically restart with the new configuration.

.. literalinclude:: code/elasticsearch.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.elasticsearch.cfg``

node.name
  Node name. Default ``local-node``.
node.master
  Allow this node to be eligible as a master node. Default ``true``.
node.data
  Allow data to be distributed to this node. Default ``true``.
path
  Path to directory where elasticsearch stores files. Default ``${xp.home}/repo/index``. Should be on a local file-system, not sharded.
path.data
  Path to directory where to store index data allocated for this node. Default ``$path/data``.
path.work
  Path to temporary files. Default ``${xp.home}/repo/index/work``.
path.conf
  Path to directory containing configuration. Default ``$path/conf``.
path.logs
  Path to log files. Default ``${xp.home}/repo/index/logs``.
path.plugins
  Path to where plugins are installed. Default ``$path/plugins``.
cluster.name
  Cluster name. Default ``mycluster``.
cluster.routing.allocation.disk.threshold_enabled
  Prevent shard allocation on nodes depending on disk usage. Default ``false``.
http.enabled
  Enable the HTTP module. Default ``false``.
network.host
  Set the bind address and the address other nodes will use to communicate with this node. Default ``127.0.0.1``. Can be an explicit *IP-address*, a *host-name* or an *alias*. See the section below for an overview of aliases.
transport.tcp.port
  Custom port for the node to node communication. Defaults to the range ``9300-9400``.
gateway.expected_nodes
  Number of nodes expected to be in the cluster to start the recovery immediately. Default ``1``.
gateway.recover_after_time
  Time to wait until recovery happens once the nodes are met. Default ``5m``.
gateway.recover_after_nodes
  Number of nodes expected to be in the cluster to start the recovery after gateway.recover_after_time. Default ``1``.
discovery.zen.minimum_master_nodes
  Ensure a node sees N other master eligible nodes to be considered operational within the cluster. Default ``1``.
discovery.zen.ping.multicast.enabled
  Enable multicast ping discovery. Default ``false``.
discovery.zen.ping.unicast.hosts
  List of master nodes in the cluster to perform discovery when new nodes are started. Default ``127.0.0.1, [::1]``.
index.recovery.initial_shards
  Number of shards expected to be found on full cluster restart per index. Default ``quorum``.


.. _network-host-aliases:

*Network host aliases*

* ``_local_`` : Will be resolved to the local ip address.
* ``_non_loopback_`` : The first non loopback address.
* ``_non_loopback:ipv4_`` : The first non loopback IPv4 address.
* ``_non_loopback:ipv6_`` : The first non loopback IPv6 address.
* ``_[networkInterface]_`` : Resolves to the ip address of the provided network interface. For example ``_en0_``
* ``_[networkInterface]:ipv4_`` : Resolves to the ipv4 address of the provided network interface. For example ``_en0:ipv4_``
* ``_[networkInterface]:ipv6_`` : Resolves to the ipv6 address of the provided network interface. For example ``_en0:ipv6_``


Admin UI Configuration
----------------------

The Admin UI can be configured in the ``com.enonic.xp.app.main.cfg`` file.  For now, the only option here, is to turn off the XP Tour for all users.

.. literalinclude:: code/com.enonic.xp.app.main.cfg
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.app.main.cfg``


Jetty HTTP Configuration
------------------------

Jetty HTTP settings can be configured using ``com.enonic.xp.web.jetty.cfg`` file.

.. literalinclude:: code/jetty.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.web.jetty.cfg``

Media Configuration
-------------------

If you need extra media-type (MIME type) mappings you can add them
in ``com.enonic.xp.media.cfg``.

.. literalinclude:: code/com.enonic.xp.media.cfg
  :language: properties
  :caption: ``$XP_HOME/config/com.enonic.xp.media.cfg``

OSGi Shell Configuration
------------------------

To enable or configure OSGi shell, use ``com.enonic.xp.server.shell.cfg`` file.

.. literalinclude:: code/server-shell.properties
  :language: properties
  :caption: ``$XP_HOME/config/com.enonic.xp.server.shell.cfg``

DoS Filter Configuration
------------------------

The DoS (denial of service) filter can be configured using
``com.enonic.xp.web.dos.cfg`` file.

.. literalinclude:: code/com.enonic.xp.web.dos.cfg
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.web.dos.cfg``

Market Configuration
--------------------

The market-place for installing applications can be configured using the ``com.enonic.xp.market.cfg`` file

.. literalinclude:: code/com.enonic.xp.market.cfg
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.market.cfg``

UDC Configuration
-----------------

UDC (Usage Data Collector) is collecting anonymous usage data 10 minutes
after startup and every 24 hours. It is only used for finding out what platforms
to focus on and improve platform stability. To switch this off, you can
configure it sing the ``com.enonic.xp.server.udc.cfg`` file

.. literalinclude:: code/com.enonic.xp.server.udc.cfg
  :language: properties
  :caption: ``$XP_HOME/config/com.enonic.xp.server.udc.cfg``

Standard ID Provider
--------------------

Standard ID Provider, in charge of the login for admin by default, has a "Create Admin User" mode for new installations under specific conditions.
When this mode is enabled, you also have the possibility to postpone the admin user creation and login without a user. 
You may turn off this capability.

.. literalinclude:: code/com.enonic.xp.app.standardidprovider.cfg
  :language: properties
  :caption: ``$XP_HOME/config/com.enonic.xp.app.standardidprovider.cfg``
