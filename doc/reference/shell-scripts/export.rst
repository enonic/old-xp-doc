.. _shell-scripts-export:

export
======

This will extract data for a given content path and store it in the specified directory.

.. program:: export.sh

.. option:: -?, --help

  Displays a detailed help message.

.. option:: -u <user:password>

  The user / password combination for export resource. Requires role ``ADMIN_LOGIN_ID``.

.. option:: -s <repo:branch:path>

  The source repo-path of the data to be exported. If given a folder name, the folder and all children will be included
  in the export. Example: ``cms-repo:draft:/``.

.. option:: -t <dir>

  The absolute path to save the export files. Example: ``/tmp/exports/myExport``.

.. option:: -h <hostname>

  The hostname of the Enonic XP instance. Defaults to ``localhost``.

.. option:: -p <port>

  The http port of the Enonic XP instance. Defaults to ``8080``.

.. option:: -i <true|false>

  Include id's of the content in the export.

.. option:: -n

  Apply pretty print of the snapshot output result. This requires that Python
  is installed on your system.


Example:

.. code-block:: bash

  $ ./export.sh -u myUser:abc -s cms-repo:draft:/content/mySite \
    -t /Users/rmy/tmp/myExports/siteExport -n
