.. _toolbox-export:

export
======

Extract data from a given repository, branch and content path.
The result will be stored in the ``$XP_HOME/data/export`` directory.
This is useful to move a part of a site from one installation to another.
See :ref:`operations-export` for more information on content export/import.

.. Attention::

	Exporting content will not include the version history of the content, just the current version.

**Usage:**

.. code-block:: none

  NAME
          toolbox export - Export data for a specified path.
  
  SYNOPSIS
          toolbox export -a <auth> [-h <host>] [-p <port>] -s <sourceRepoPath>
                  [--scheme <scheme>] [--skipids] -t <exportName>
  
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
  
          --scheme <scheme>
              Scheme (default is http).
  
          --skipids
              Flag that skips ids in data when exporting.
  
          -t <exportName>
              Target name to save export.

**Example:**

.. code-block:: none

  $ ./toolbox.sh export -a su:password -s cms-repo:draft:/ -t myExport
  $ ./toolbox.sh export -a su:password -s cms-repo:draft:/content/my-site -t mySiteExport
