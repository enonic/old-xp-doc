.. _upgrading:

Upgrading to |version|
=================================

.. warning:: In order to upgrade, you must already have upgraded to Enonic XP 6.0.0 or newer


Enonic XP |version| universal release download: https://repo.enonic.com/public/com/enonic/xp/distro/6.1.0/distro-6.1.0.zip

There are no breaking changes in this release, so upgrading simply requires you to complete the following steps:

  #. Download and install the new release on your chosen infrastructure
  #. Stop your existing server
  #. Move/copy/link the contents of your $XP_HOME folder (configuration, deployments and data) into the the new Enonic XP installation
  #. Update your system configuration with mail server (See :ref:`configuration-mail`)
  #. Start the new server


.. warning:: Remember to update any startup scripts you might have to launch your new installation given a server restart
