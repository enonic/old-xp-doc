.. _toolbox-snapshot:

snapshot
========

Create a snapshot of all or a single repository while running. The snapshots will be stored in
the directory given in ``snapshots.dir`` option in the :ref:`repo-configuration` (default ``$xp_home/snapshots``).
Note that the first snapshot only stores markers in the repository for the current state.
Subsequent snapshots stores the changes since the last snapshot.
See :ref:`backup` for more information on snapshots.

.. Attention::

	For a clustered installation, the snapshot-location must be on a shared file-system.

**Usage:**

.. code-block:: none

  NAME
          toolbox snapshot - Stores a snapshot of the current state of the
          repository.
  
  SYNOPSIS
          toolbox snapshot -a <auth> [-h <host>] [-p <port>] [-r <repository>]
                  [--scheme <scheme>]
  
  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).
  
          -h <host>
              Host name for server (default is localhost).
  
          -p <port>
              Port number for server (default is 8080).
  
          -r <repository>
              the name of the repository to snapshot.
  
          --scheme <scheme>
              Scheme (default is http).

**Example:**

.. code-block:: none

  $ ./toolbox.sh snapshot -a su:password


**Related:**

 * List available snapshots with names: :ref:`toolbox-list-snapshots`
 * Restore snapshot: :ref:`toolbox-restore-snapshot`
