.. _upgrading:

Upgrading to |version|
======================

.. warning:: In order to upgrade, you must already have upgraded to Enonic XP 6.0.0 or newer.

.. warning:: Enonic XP 6.3.0 contains an error in its export/dump process. If your installation uses Enonic XP 6.3.0, you must upgrade to Enonic XP 6.3.1 before following the steps listed below. When upgrading from Enonic XP 6.3.0 to 6.3.1, do not dump & load your data.

Enonic XP |version| Java distribution download: https://repo.enonic.com/public/com/enonic/xp/distro/${release}/distro-${release}.zip

Upgrade Steps
-------------

There are no breaking changes in this release, but due to internal changes in repository you will have to dump your data, upgrade the dump, and load it into the new version:

  #. Download Enonic XP (link above)
  #. Backup your existing data
  #. Dump the repository, see :ref:`toolbox-dump` reference
  #. Stop the old server(s) - to avoid new data from coming in.
  #. Setup new XP installation - (for all servers in your entire cluster if you have one)
  #. Move or link (however this is configured) your $XP_HOME folder(s) (configuration, deployment and data) to the the new Enonic XP installation
  #. (OPTION) Empty the $XP_HOME/deploy folder - Only if you want to use the new system deployment tools (Appliations are then installed in the repository, cluster wide)
  #. Delete the folder $XP_HOME/repo (to get a clean repository)
  #. Delete the file $XP_HOME/config/org.apache.felix.fileinstall-deploy.cfg (To support UI-based application installation)
  #. Upgrade the dump with the 6.4.0 toolbox upgrade, see :ref:`toolbox-upgrade` reference.
  #. Start the new server(s)
  #. Load the repository-dump you updated, see :ref:`toolbox-load` reference
  #. (OPTION) If you removed your apps from the deploy/ folder above, re-install them using the Applications UI tool, or use :ref:`toolbox-install-app`

.. warning:: Remember to update any startup scripts you might have to launch your new installation given a server restart

New Project Structure
---------------------

To take benefit of some of the new application development capabilities such as :ref:`tools` and :ref:`widgets`, and align their applications for other future improvements, developers should to update their application project structure.

* move .../resources/site/assets/ to .../resources/assets/
* move .../resources/site/services/ to .../resources/services/
* move .../resources/site/lib/ to .../resources/lib
* move .../resources/site/i18n/ to .../resources/i18n
* Optionally move .../resources/site/views/ to .../resources/views/ - this is an optional folder.

To support backward compatibility, XP will scan for assets/ and services/ - initially on root, then in site. But only the first discovered folder will be used.
For libraries, the lookup pattern for "require" will now include scanning parent folders with lib/ folders until reaching the resources/ folder.

NB! If you have used explicit require references i.e. "/lib/mylib" these files must now be moved to resouces/ root, or referenced relatively instead.

(NB! Applications with updated structure will require minumum XP version 6.4)
