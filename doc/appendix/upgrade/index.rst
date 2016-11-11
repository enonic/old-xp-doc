.. _upgrading:

Upgrading to |version|
======================

.. warning:: This documentation describes upgrading from 6.3.1 to |version|. Upgrading directly from 6.3.0 is not supported.

Upgrade Steps
-------------

There are no breaking changes in this release, but due to internal changes in repository you will have to dump your data, upgrade the dump, and load it into the new version:

1. Setup new installation
*************************

  #. Download Enonic XP http://repo.enonic.com/public/com/enonic/xp/distro/${release}/distro-${release}.zip
  #. Setup new XP installations - (for all servers in your entire cluster if you have one)

.. tip:: Remember to update any startup scripts you might have to launch your new installation given a server restart

2. Move configuration
*********************

  #. Copy your $OLD_XP_HOME/config/ and deploy/ folders to the the new $NEW_XP_HOME/ (on all nodes)
  #. Remove the $NEW_XP_HOME/config/org.apache.felix.fileinstall-deploy.cfg file (To support UI-based application installation)

3. Migrate Data
***************

.. tip:: Remember to backup your existing data before starting this step

..

  1. If possible - stop traffic to the servers to avoid new data coming in during this process, or stop the servers after dumping the data.
  2. Dump data from existing server. (:ref:`toolbox-dump`). The dump will be created in $OLD_XP_HOME/data/dump/

::

  toolbox.sh dump -a su:password -t 6.3.1-dump

..

  3. Upgrade the dump with a new XP installation. (:ref:`toolbox-upgrade`).

::

  toolbox.sh upgrade -d [path/to/OLD_XP_HOME]/data/dump/6.3.1-dump

..

  4. Start the new server(s)
  5. Copy the upgraded dump files from the old to the new server, place it in $NEW_XP_HOME/data/dump/. The folder will be named "6.3.1-dump_upgraded_6.4.0"
  6. Load the updated dump (:ref:`toolbox-load`)

::

  toolbox.sh load -a su:password -s 6.3.1-dump_upgraded_6.4.0


4. Install Apps (OPTIONAL)
**************************

This release supports installing applications globally, using the repository.
Follow the steps below if you want to migrate your apps from file.

  #. Make sure the $XP_HOME/deploy folder of the new installation is empty
  #. Install the Applications that was in the $XP_HOME/deploy folder using the Applications UI tool, or :ref:`toolbox-install-app`


New Project Structure (OPTIONAL)
--------------------------------

Developers can update their application project structure to benefit from some of the new application development capabilities such
as :ref:`tools` and :ref:`widgets`, and align their applications for other future improvements,

* move .../resources/site/assets/ to .../resources/assets/
* move .../resources/site/services/ to .../resources/services/
* move .../resources/site/lib/ to .../resources/lib
* Optionally move .../resources/site/views/ to .../resources/views/ - this is an optional folder.

XP is backward compatible, and will scan for assets/ and services/ - initially on root, then in site. But only the first discovered folder will be used.
For libraries, the lookup pattern for "require" will now include scanning parent folders with lib/ folders until reaching the resources/ folder.

NB! If you have used explicit require references i.e. "/lib/mylib" these files must now be moved to resouces/ root, or referenced relatively instead.

(NB! Applications with updated structure will require minimum XP version 6.4)
