.. _toolbox:

Toolbox CLI
===========

.. NOTE:: If you have enabled the :ref:`configuration-vhost`, ``/api`` has to be accessible for the toolbox CLI to communicate with the server

The toolbox is a CLI (command line interface) tool that is used to do
administration tasks. Toolbox executables are located in ``$XP_INSTALL/toolbox``
folder. Use ``toolbox.sh`` for mac/unix environments and ``toolbox.bat``
for windows environments.

To get help for the commands, just type the following::

	$ ./toolbox.sh
	usage: toolbox <command> [<args>]

	The most commonly used toolbox commands are:
		delete-snapshots   Deletes snapshots, either before a given timestamp or by name.
    		dump               Export data from every repository.
    		export             Export data for a specified path.
    		help               Display help information
    		import             Import data from a named export.
    		init-project       Initiates an Enonic XP application project.
    		install-app        Install an application from URL or file
    		list-snapshots     Returns a list of existing snapshots with name and status.
    		load               Import data from a dump.
    		reindex            Reindex content in search indices for the given repository and branches.
    		reprocess          Reprocesses content in the repository.
    		restore            Restores a snapshot of a previous state of the repository.
    		set-read-only      Toggle read-only mode for server or single repository
    		set-replicas       Set the number of replicas in the cluster.
    		snapshot           Stores a snapshot of the current state of the repository.
    		upgrade            Upgrade a dump to the current version. The upgraded files will be written to <dumpFolderName>_upgraded_<version>
    		vacuum             Removes unused blobs and binaries from blobstore

		See 'toolbox help <command>' for more information on a specific command.

To get help for a specific command, you can type ``toolbox.sh help <command>``, like::

  $ toolbox.sh help import

Here's a list of all the commands that you can do with the toolbox:

.. toctree::
   :maxdepth: 1

   delete-snapshots
   dump
   export
   import
   init-project
   install-app
   list-snapshots
   load
   reindex
   reprocess
   restore
   set-read-only
   set-replicas
   snapshot
   upgrade
   vacuum


