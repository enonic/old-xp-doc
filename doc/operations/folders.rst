Folder Structure
================

The unpacked Enonic XP distribution will have the following structure::

  enonic-xp-[version]
   |- bin/
   |- home/
     |- config/
     |- deploy/
     |- logs/
   |- lib/
   |- system/
   |- tools/
   |- repo/
   |- data/

Root installation folder is referred to as ``XP_INSTALL``. Here's an
explanation of all the other folders:

bin/
  Contains the scripts for starting and stopping Enonic XP.

home/
  Home directory, also called ``XP_HOME``.

  config/
    Configuration files are placed here, including system.properties.

  deploy/
    Hot deploy directory. Place modules to install in this directory.

  logs/
    Default location for logs.

lib/
  Contains the bootstrap code used to launch Enonic XP.

system/
  System OSGi bundles are placed here.

tools/
  Scripts for misc operational activities like backup and export. See
  :ref:`shell-scripts`.

repo/
  Repository data (blobs and indexes).

data/
  Additional data like exports, snapshots and dumps.
