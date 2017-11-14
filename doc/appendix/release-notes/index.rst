Release Notes
=============

Enonic XP |version| is a minor release with exciting new features, improvements and fixes.


Stricter default cluster settings
---------------------------------

There has been incidents where several instances of XP has been started on the same machine and by accident creating a cluster.
The default settings has now been changed to prevent this, also meaning that local machine cluster members must be explicitly configured.
The cluster settings are available in the config-file: ``com.enonic.xp.elasticsearch.cfg``
To allow more than one instance running on the same machine, the setting ``transport.tcp.port`` must be set to a port range, e.g ``9300-9302``

*Changed settings (com.enonic.xp.elasticsearch.cfg):*


``transport.tcp.port``
 * Previous default value: ``9300-9400``
 * New default value: ``9300``

``discovery.zen.ping.unicast.hosts``
 * Previous default value: ``127.0.0.1``
 * New default value: ``127.0.0.1[9300]``


Changelog
---------
For a complete list of changes and bugfixes see http://github.com/enonic/xp/releases/tag/v6.13.0
