.. _shell-scripts-snapshot:

snapshot
========

This script will create a snapshot of a single repository while running. The snapshots
will be stored in the ``$XP_HOME/snapshots`` directory.

.. program:: snapshot.sh

.. option:: -?, --help

  Displays a detailed help message.

.. option:: -u <user:password>

  The user / password combination for export resource. Requires role ``ADMIN_LOGIN_ID``.

.. option:: -r <repo-id>

  The repository to snapshot.

.. option:: -h <hostname>

  The hostname of the Enonic XP instance. Defaults to ``localhost``.

.. option:: -p <port>

  The http port of the Enonic XP instance. Defaults to ``8080``.

.. option:: -n

  Apply pretty print of the snapshot output result. This requires that Python
  is installed on your system.


Example:

.. code-block:: bash

  $ ./snapshot.sh -u su:password -r cms-repo -n
