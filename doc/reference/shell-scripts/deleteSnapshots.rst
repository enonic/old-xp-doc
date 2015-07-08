.. _shell-scripts-deleteSnapshots:

deleteSnapshots
===============

Deletes all snapshots before the given timestamp.

.. program:: deleteSnapshots.sh

.. option:: -?, --help

  Displays a detailed help message.

.. option:: -b <timestamp>

  Deletes all snapshots before the given timestamp. Example: ``2015-02-14t14:24:20.618z``.

.. option:: -u <user:password>

  The user / password combination for export resource. Requires role ``ADMIN_LOGIN_ID``.

.. option:: -h <hostname>

  The hostname of the Enonic XP instance. Defaults to ``localhost``.

.. option:: -p <port>

  The http port of the Enonic XP instance. Defaults to ``8080``.

.. option:: -n

  Apply pretty print of the snapshot output result. This requires that Python
  is installed on your system.


Example:

.. code-block:: bash

  $ ./deleteSnapshots.sh -u su:password -b 2015-02-14t14:24:20.618z -n
