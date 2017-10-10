.. _toolbox-vacuum:

vacuum
========

Deletes unused blobs and binaries from blobstore.

.. Attention::

Make sure you have a backup of the installation available before doing a vacuum.

**Usage:**

.. code-block:: none

  NAME
          toolbox vacuum - Deletes unused blobs and binaries from blobstore.

  SYNOPSIS
          toolbox vacuum -a <auth> [-h <host>] [-p <port>]

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).


**Example:**

.. code-block:: none

  $ ./toolbox.sh vacuum -a su:password
