upgrade
=======

Upgrade a data dump from a previous version to the current version.
The output of the upgrade will be placed at $CURRENT_DIR/upgraded/<dump-name>

**Usage:**

.. code-block:: none

  NAME
          toolbox upgrade - Upgrade a dump.

  SYNOPSIS
          toolbox upgrade -d dump-path -t target-location

  OPTIONS
          -d <dump>
             Directory for dump.

**Example:**

.. code-block:: none

  $ ./toolbox.sh dump -d ./data/dump/5.3.0-dump