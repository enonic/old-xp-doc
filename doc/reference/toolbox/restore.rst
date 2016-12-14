.. _toolbox-restore-snapshot:

restore
=======

Restore a named snapshot.
See :ref:`backup` for more information on snapshots.

**Usage:**

.. code-block:: none

  NAME
          toolbox restore - Restores a snapshot of a previous state of the
          repository.

  SYNOPSIS
          toolbox restore -a <auth> [-h <host>] [-p <port>] [-r <repository>]
                  -s <snapshotName>

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).

          -r <repository>
              The name of the repository to restore. Default is all repositories

          -s <snapshotName>
              The name of the snapshot to restore.

**Example:**

.. code-block:: none

  $ ./toolbox.sh restore -a su:password -s 2015-07-02t11:53:13.224z

**Related:**

 * List available snapshots with names: :ref:`toolbox-list-snapshots`
