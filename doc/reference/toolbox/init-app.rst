.. _init-app:

init-app
========

The init-app will initialize a new application with gradle and the application folder strucure.

**Usage:**

.. code-block:: none

NAME
        toolbox init-app - Initiates an Enonic XP application.

SYNOPSIS
        toolbox init-app [(-d <destination> | --destination <destination>)]
                (-n <name> | --name <name>) [(-v <version> | --version <version>)]

OPTIONS
        -d <destination>, --destination <destination>
            Project path.

        -n <name>, --name <name>
            Application name.

        -v <version>, --version <version>
            Version number.

**Example:**

.. code-block:: none

./toolbox.sh init-app -d ~/Dev/xp/apps/myApp -n myApp -v 6.0.0
