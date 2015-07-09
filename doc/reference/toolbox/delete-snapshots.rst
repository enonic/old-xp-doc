.. _toolbox-delete-snapshots:

deleteSnapshots
===============

Deletes all snapshots before the given timestamp.

**Usage:**

.. code-block:: none

  NAME
          toolbox delete-snapshots - Deletes snapshots, either before a given
          timestamp or by name.

  SYNOPSIS
          toolbox delete-snapshots -a <auth> -b <before> [-h <host>] [-p <port>]

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -b <before>
              Delete snapshots before this timestamp.

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).

**Example:**

.. code-block:: none

  $ ./toolbox.sh delete-snapshots -a su:password -b 2015-02-14t14:24:20.618z
