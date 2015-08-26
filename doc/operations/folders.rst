Folder Structure
================

The unpacked Enonic XP distribution will have the following structure (folders with a * will not appear until the installation is started)

::

  enonic-xp-[version]
   |- bin/
   |- home/
     |- config/
     |- data/ *
     |- deploy/
     |- logs/
     |- repo/ *
     |- work/ *
   |- lib/
   |- system/
   |- toolbox/
   |- work/ *

The root installation folder is referred to as ``XP_INSTALL``. Here's an
explanation of all the other folders:

bin/
  Contains the scripts for starting and stopping Enonic XP and setting environment variables.

home/
  Home directory, also called ``XP_HOME``. All files for a specific instance of XP reside here.
  This folder can be copied to other locations for working with multiple projects.

  config/
    Configuration files are placed here, including Virtual Host and system.properties.

  data/
    Additional data like exports, snapshots and dumps. This folder will not appear until certain operations are run.

  deploy/
    Hot deploy directory. Applications are automatically installed upon placing their JAR files in this directory.

  logs/
    Default location for logs.

  repo/
    Repository data (blobs and indexes). This folder will not appear until the installation is started for the first time.

  work/
    Cache and generated bundles are stored here. This folder will not appear until the installation is started the first time.

lib/
  Contains the bootstrap code used to launch Enonic XP.

system/
  System OSGi bundles are placed here.

toolbox/
  Command-line interface tool to manage the server. See :ref:`toolbox`.

work/
  OSGI cache is stored here. This folder will not appear until the installation is started for the first time.