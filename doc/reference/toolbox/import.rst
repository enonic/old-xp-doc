.. _toolbox-import:

import
======

Import data from a named export and load it into Enonic XP at the desired content path.

**Usage:**

.. code-block:: none

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).

          -s <exportName>
              A named export to import.

          --skipids
              Flag that skips ids.

          -t <targetRepoPath>
              Target path for import. Format:
              <repo-name>:<branch-name>:<node-path>. e.g 'cms-repo:draft:/'

**Example:**

.. code-block:: none

  $ ./toolbox.sh import -a su:password -s myExport -t cms-repo:draft:/
