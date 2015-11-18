.. _toolbox-list-snapshots:

list-snapshots
==============

List all the snapshots for the installation.

**Usage:**

.. code-block:: none

  NAME
          toolbox list-snapshots - Returns a list of existing snapshots with name
          and status.

  SYNOPSIS
          toolbox list-snapshots -a <auth> [-h <host>] [-p <port>]

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).

**Example:**

.. code-block:: none

  $ ./toolbox.sh list-snapshots -a su:password
