.. _toolbox-dump:

dump
====

Export data from an entire system.
The result will be stored in the ``$XP_HOME/data/dump`` directory.
See :ref:`operations-export` for more information on system dump/load.

.. Attention::
 
	Performing a dump will delete version history for all data (used for version history restoration).

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
