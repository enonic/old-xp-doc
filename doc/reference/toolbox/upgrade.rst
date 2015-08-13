.. _toolbox-upgrade:

upgrade
=======

Upgrade a data dump from a previous version to the current version.
The output of the upgrade will be placed alongside the dump that is being upgraded and will have the name <dump-name>_upgraded_<new-version>
unless a target location is specified with -t.

The current version XP installation must be running with the upgraded app deployed.

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

  $ ./toolbox.sh upgrade -d ./data/dump/5.3.1-dump

The output would appear as:

.. code-block:: none

  /data/dump/5.3.1_upgraded_6.0.0/