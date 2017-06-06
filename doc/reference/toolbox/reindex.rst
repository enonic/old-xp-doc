reindex
=======

Reindex the content in the search indices for the given repository and branches.
This is usually required after upgrades, and may be useful in many other situation.

**Usage:**

.. code-block:: none

  NAME
          toolbox reindex - Reindex content in search indices for the given
          repository and branches.

  SYNOPSIS
          toolbox reindex -a <auth> -b <branches>... [-h <host>] [-i] [-p <port>]
                  -r <repository>

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -b <branches>
              A comma-separated list of branches to be reindexed.

          -h <host>
              Host name for server (default is localhost).

          -i
              If flag -i given true, the indices will be deleted before recreated.

          -p <port>
              Port number for server (default is 8080).

          -r <repository>
              The name of the repository to reindex.

**Example:**

.. code-block:: none

  $ ./toolbox.sh reindex -a su:password -b draft,master -i -r cms-repo
