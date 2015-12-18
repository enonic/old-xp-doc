.. _toolbox-restore-snapshot:

restore
=======

Restore a named snapshot.

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
              The name of the repository to restore.

          -s <snapshotName>
              The name of the snapshot to restore.

**Example:**

.. code-block:: none

  $ ./toolbox restore -a su:password -r cms-repo \
    -s cms-repo2015-07-02t11:53:13.224z
