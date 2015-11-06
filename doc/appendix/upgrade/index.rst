.. _upgrading:

Upgrading to |version|
=================================

.. warning:: In order to upgrade, you must already have upgraded to Enonic XP 6.0.0 or newer


Enonic XP |version| download: https://repo.enonic.com/public/com/enonic/xp/distro/6.2.0/distro-6.2.0.zip

There are no breaking changes in this release, so upgrading simply requires you to complete the following steps:

  #. Download and install the new release on your chosen infrastructure
  #. Backup your existing data
  #. Stop the server
  #. Move or link (however this is configured) your $XP_HOME (configuration, deployments and data) to the the new Enonic XP installation
  #. Optionally update your system configuration with mail server (See :ref:`configuration-mail`) - introduced in 6.1
  #. Start the new server

.. warning:: Remember to update any startup scripts you might have to launch your new installation given a server restart
