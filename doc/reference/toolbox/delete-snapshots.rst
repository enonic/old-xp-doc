.. _toolbox-delete-snapshots:

delete-snapshots
================

Deletes all snapshots before the given timestamp.
See :ref:`backup` for more information on snapshots.

**Usage:**

.. code-block:: none

  NAME
          toolbox delete-snapshots - Deletes snapshots, either before a given
          timestamp or by name.
  
  SYNOPSIS
          toolbox delete-snapshots -a <auth> -b <before> [-h <host>] [-p <port>]
                  [--scheme <scheme>]
  
  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).
  
          -b <before>
              Delete snapshots before this timestamp.
  
          -h <host>
              Host name for server (default is localhost).
  
          -p <port>
              Port number for server (default is 8080).
  
          --scheme <scheme>
              Scheme (default is http).

**Example:**

.. code-block:: none

  $ ./toolbox.sh delete-snapshots -a su:password -b 2015-02-14t14:24:20.618z
