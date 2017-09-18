.. _toolbox-set-read-only:

set-read-only
=============

Toggle read-only mode. In read-only mode, no changes can be made on the server, or a single repo if specified

**Usage:**

.. code-block:: none

  NAME
          toolbox set-read-only - Toggle read-only mode for server or single repository

  SYNOPSIS
          toolbox set-read-only -a <auth> [-h <host>] [-p <port>] [-r <repository>] true|false

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).

          -r <repositoryId>
            Single repository to toggle read-only mode for

          <readOnly>
            Read only mode enabled (true/false)

**Example:**

.. code-block:: none

  $ ./toolbox.sh set-read-only -a su:password true
