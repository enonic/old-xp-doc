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


Virtual Host Configuration
--------------------------

Virtual hosts are configured in the file ``com.enonic.xp.web.vhost.cfg`` and
are automatically updated upon changes. A sample virtual host configuration
is listed below.

.. literalinclude:: code/vhost.properties
   :language: properties

In this example file, three mappings are configured.

host
  Host-name to match.

source
  Requested path to match.

target
  Path to which the request is sent.

In the second example, mapping ``b``, a site is mapped to the root of the
URL, which would be normal in production environments.

In the third example, the admin site is mapped to ``enonic.com/admin``.

Web Configuration
-----------------

The default http port for Enonic XP is 8080. This value can be changed in the file ``org.ops4j.pax.web.cfg``.

.. literalinclude:: code/web.properties
   :language: properties