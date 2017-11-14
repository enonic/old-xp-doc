.. _toolbox-dump:

dump
====

toolbox dump - Export data from every repository.
The result will be stored in the ``$XP_HOME/data/dump`` directory.

**Usage:**

.. code-block:: none

  NAME
        toolbox dump - Export data from every repository.

  SYNOPSIS
        toolbox dump -a <auth> [-h <host>] [--max-version-age <maxAge>]
                [--max-versions <maxVersions>] [-p <port>] [--scheme <scheme>]
                [--skip-versions] -t <target>

  OPTIONS
        -a <auth>
            Authentication token for basic authentication (user:password).

        -h <host>
            Host name for server (default is localhost).

        --max-version-age <maxAge>
            Max age of versions to include, in days, in addition to current version

        --max-versions <maxVersions>
            Max number of versions to dump in addition to current version

        -p <port>
            Port number for server (default is 8080).

        --scheme <scheme>
            Scheme (default is http).

        --skip-versions
            Dont dump version-history, only current versions included

        -t <target>
            Dump name.

**Example:**

.. code-block:: none

  $ ./toolbox.sh dump -a su:password -t myDump
