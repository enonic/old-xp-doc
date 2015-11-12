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
When changing ``com.enonic.xp.elasticsearch.cfg``, the Elasticsearch node will automatically restart with the new configuration

.. literalinclude:: code/elasticsearch.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.elasticsearch.cfg``


Jetty HTTP Configuration
------------------------

Jetty HTTP settings can be configured using ``com.enonic.xp.web.jetty.cfg`` file.

.. literalinclude:: code/jetty.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.web.jetty.cfg``
