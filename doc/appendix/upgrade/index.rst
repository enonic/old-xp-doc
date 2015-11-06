.. _upgrading:

Upgrading to |version|
=================================

.. warning:: In order to upgrade, you must already have upgraded to Enonic XP 6.0.0 or newer


Enonic XP |version| download: https://repo.enonic.com/public/com/enonic/xp/distro/6.2.0/distro-6.2.0.zip

There are no breaking changes in this release, but due to internal changes in repository you will have to dump your data and load them into the new version:

  #. Download and install the new release on your chosen infrastructure
  #. Backup your existing data
  #. Dump the repository, see :ref:`toolbox-dump` reference
  #. Stop the server
  #. Move or link (however this is configured) your $XP_HOME (configuration and deployments and data) to the the new Enonic XP installation
  #. Optionally update your system configuration with mail server (See :ref:`configuration-mail`) - introduced in 6.1
  #. Delete the $XP_HOME/repo - folder
  #. Start the new server
  #. Load the repository-dump you created, see :ref:`toolbox-load` reference

.. warning:: Remember to update any startup scripts you might have to launch your new installation given a server restart
