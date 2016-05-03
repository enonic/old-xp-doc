.. _toolbox-load:

load
====

Load data from a named system dump into Enonic XP.
The dump read has to be stored in the ``$XP_HOME/data/dump`` directory.
See :ref:`operations-export` for more information on system dump/load.

.. Attention::
 
	Performing a load must never be performed on a repo with existing content, make sure the repo is emptied first!

**Usage:**

.. code-block:: none

  NAME
          toolbox load - Import data from a dump.

  SYNOPSIS
          toolbox load -a <auth> [-h <host>] [-p <port>] -s <source>

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).

          -s <source>
              Dump name.

**Example:**

.. code-block:: none

  $ ./toolbox.sh load -a su:password -s myDump
