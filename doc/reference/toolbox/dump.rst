dump
====

Export data from  every repository branch. This is used to backup the entire
repository when doing an upgrade. The result will be stored in
the ``$XP_HOME/data/dump`` directory.

**Usage:**

.. code-block:: none

  NAME
          toolbox dump - Export data from every repository.

  SYNOPSIS
          toolbox dump -a <auth> [-h <host>] [-p <port>] -t <target>

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).

          -t <target>
              Dump name.

**Example:**

.. code-block:: none

  $ ./toolbox.sh dump -a su:password -t myDump
