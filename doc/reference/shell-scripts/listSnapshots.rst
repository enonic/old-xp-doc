listSnapshots
=============

This will list all the snapshots for the installation.

.. program:: listSnapshots.sh

.. option:: -?, --help

  Displays a detailed help message.

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

  $ ./listSnapshots.sh -u su:password -n
