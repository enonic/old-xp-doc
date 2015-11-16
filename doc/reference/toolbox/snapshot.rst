.. _toolbox-snapshot:

snapshot
========

Create a snapshot of all or a single repository while running. The snapshots will be stored in
the ``$XP_HOME/data/snapshot`` directory.

**Usage:**

.. code-block:: none

  NAME
          toolbox snapshot - Stores a snapshot of the current state of the
          repository.

  SYNOPSIS
          toolbox snapshot -a <auth> [-h <host>] [-p <port>] [-r <repository>]

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).

          -r <repository>
              the name of the repository to snapshot (default is all repositories)

**Example:**

.. code-block:: none

  $ ./toolbox.sh snapshot -a su:password
