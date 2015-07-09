.. _toolbox-export:

export
======

Extract data for a given repo and content path. The result will be stored in the
``$XP_HOME/data/export`` directory.

**Usage:**

.. code-block:: none

  NAME
          toolbox export - Export node from a branch in a repository.

  SYNOPSIS
          toolbox export -a <auth> [-h <host>] [-p <port>] -s <sourceRepoPath>
                  [--skipids] -t <exportName>

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).

          -s <sourceRepoPath>
              Path of data to export. Format:
              <repo-name>:<branch-name>:<node-path>.

          --skipids
              Flag that skips ids in data when exporting.

          -t <exportName>
              Target name to save export.

**Example:**

.. code-block:: none

  $ ./toolbox.sh export -a su:password -s cms-repo:draft:/ -t myExport
