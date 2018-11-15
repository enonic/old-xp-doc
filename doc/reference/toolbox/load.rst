.. _toolbox-load:

load
====

Load data from a named system dump into Enonic XP.
The dump read has to be stored in the ``$XP_HOME/data/dump`` directory.
See :ref:`operations-export` for more information on system dump/load.

.. Attention::
 
	A load will delete all existing repositories before loading the repositories present in the system-dump

**Usage:**

.. code-block:: none

  NAME
          toolbox load - Import data from a dump.
  
  SYNOPSIS
          toolbox load -a <auth> [-h <host>] [-p <port>] -s <source>
                  [--scheme <scheme>] [-y]
  
  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).
  
          -h <host>
              Host name for server (default is localhost).
  
          -p <port>
              Port number for server (default is 8080).
  
          -s <source>
              Dump name.
  
          --scheme <scheme>
              Scheme (default is http).
  
          -y
              Automatic yes to prompts; assume “Yes” as answer to all prompts and
              run non-interactively.

**Example:**

.. code-block:: none

  $ ./toolbox.sh load -a su:password -s myDump
