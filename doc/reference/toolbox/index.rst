.. _toolbox:

Toolbox CLI
===========

The toolbox is a CLI (command line interface) tool that is used to do
administration tasks. Toolbox executables are located in ``$XP_INSTALL/toolbox``
folder. Use ``toolbox.sh`` for mac/unix environments and ``toolbox.bat``
for windows environments.

To get help for the commands, just type the following::

  $ toolbox.sh

  usage: toolbox <command> [<args>]

  The most commonly used toolbox commands are:
      delete-snapshots   Deletes snapshots, either before a given timestamp or by name.
      dump               Export data from every repository.
      export             Export data for a specified path.
      help               Display help information
      import             Import data from a named export.
      init-app           Initiates an Enonic XP application.
      list-snapshots     Returns a list of existing snapshots with name and status.
      load               Import data from a dump.
      reindex            Reindex content in search indices for the given repository and branches.
      restore            Restores a snapshot of a previous state of the repository.
      snapshot           Stores a snapshot of the current state of the repository.
      upgrade            Upgrade a dump to the current version. The upgraded files will be written to <dumpFolderName>_upgraded_<version>

  See 'toolbox help <command>' for more information on a specific command.

To get help for a specific command, you can type ``toolbox.sh help <command>``, like::

  $ toolbox.sh help import

Here's a list of all the commands that you can do with the toolbox:

.. toctree::
   :maxdepth: 1

   snapshot
   restore
   list-snapshots
   delete-snapshots
   export
   import
   reindex
   dump
   load
   upgrade
   init-app
