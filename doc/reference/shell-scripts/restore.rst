.. _shell-scripts-restore:

restore
=======

This script restore a named snapshot.

.. program:: restore.sh

.. option:: -?, --help

  Displays a detailed help message.

.. option:: -u <user:password>

  The user / password combination for export resource. Requires role ``ADMIN_LOGIN_ID``.

.. option:: -s <snapshot-name>

  The snapshot to restore. This name could be acquired from either the result of the
  snapshot-command, or the output of the listSnapshot-command.

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

  $ ./restore.sh -u su:password -r cms-repo \
    -s cms-repo2015-02-14t14:24:20.618z -n
