reindex
=======

This will reindex the content in the search indices for the given repository and branches.

.. program:: import.sh

.. option:: -?, --help

  Displays a detailed help message.

.. option:: -u <user:password>

  The user / password combination for export resource. Requires role ``ADMIN_LOGIN_ID``.

.. option:: -h <hostname>

  The hostname of the Enonic XP instance. Defaults to ``localhost``.

.. option:: -p <port>

  The http port of the Enonic XP instance. Defaults to ``8080``.

.. option:: -r <repo-id>

  The repository to reindex.

.. option:: -b <branches>

  A comma-separated list of the branches to reindex.

.. option:: -i

  If flag -i is given, the indices will be deleted before being recreated.

.. option:: -n

  Apply pretty print of the snapshot output result. This requires that Python
  is installed on your system.


Example:

.. code-block:: bash

  $ ./reindex.sh -u su:password -r cms-repo -b draft,master -n
