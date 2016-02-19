.. _upgrading:

Upgrading to |version|
======================

Enonic XP |version| Java distribution download: https://repo.enonic.com/public/com/enonic/xp/distro/${release}/distro-${release}.zip

Upgrade Steps
=============

There are no breaking changes in this release, but due to internal changes in repository you will have to dump your data, upgrade the dump, and load it into the new version:

  #. Download and install the new release on your chosen infrastructure
  #. Backup your existing data
  #. Dump the repository, see :ref:`toolbox-dump` reference
  #. Stop the server
  #. Move or link (however this is configured) your $XP_HOME (configuration and deployments and data) to the the new Enonic XP installation
  #. Optionally update your system configuration with mail server (See :ref:`configuration-mail`) - introduced in 6.1
  #. Delete the $XP_HOME/repo - folder
  #. Start the new server
  #. Upgrade the dump with the 6.4.0 toolbox upgrade, see :ref:`toolbox-upgrade` reference.
  #. Load the repository-dump you updated, see :ref:`toolbox-load` reference

.. warning:: Remember to update any startup scripts you might have to launch your new installation given a server restart

Upgrading Apps
==============

To take benefit of some of the new application development capabilities such as :ref:`tools` and :ref:`widgets`, developers need to update their application project structure.

* move .../resources/site/assets/ to .../resources/assets/
* move .../resources/site/services/ to .../resources/services/
* move .../resources/site/lib/ to .../resources/lib
* move the optional .../resources/site/views/ to .../resources/views/ if you are using it.

To support backward compatibility, XP will scan for assets/ and services/ - initially on root, then in site. But only the first discovered folder will be used.
For libraries, the lookup pattern for "require" will now include scanning parent folders with lib/ folders until reaching the resources/ folder.

NB! If you have used explicit require references i.e. "/lib/mylib" these files must now be moved to resouces/ root, or referenced relatively instead.

(NB! Applications with updated structure will require minumum XP version 6.4)
