.. _shell-scripts-import:

import
======

The import will take data from a given export directory and load it into Enonic XP at the desired content path.

.. program:: import.sh

.. option:: -?, --help

  Displays a detailed help message.

.. option:: -u <user:password>

  The user / password combination for export resource. Requires role ``ADMIN_LOGIN_ID``.

.. option:: -s <dir>

  A relative or absolute path to a directory containing an export structure. Example: ``/tmp/exports/myExport``.

.. option:: -t <repo:branch:path>

  The Enonic XP content path to place the imported data. Example: ``cms-repo:draft:/``.

.. option:: -h <hostname>

  The hostname of the Enonic XP instance. Defaults to ``localhost``.

.. option:: -p <port>

  The http port of the Enonic XP instance. Defaults to ``8080``.

.. option:: -i <true|false>

  Include id's of the content in the import.

.. option:: -n

  Apply pretty print of the snapshot output result. This requires that Python
  is installed on your system.


Example:

.. code-block:: bash

  $ ./import.sh -u myUser:abc -s /Users/rmy/tmp/myExports/siteExport \
    -t cms-repo:draft:/content/mySite -n
