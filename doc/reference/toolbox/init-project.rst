.. _init_project:

init-project
========

The init-project tool initializes a new application project structure by retrieving a Git repository and adapting its gradle.properties.

**Usage:**

.. code-block:: none

  NAME
          toolbox init-project - Initiates an Enonic XP application project.

  SYNOPSIS
          toolbox init-project [-a <authentication>]
              [(-d <destination> | --destination <destination>)]
              (-n <name> | --name <name>)
              (-r <repository> | --repository <repository>)
              [(-v <version> | --version <version>)]

  OPTIONS
          -a <authentication>
              Authentication token for basic authentication (user:password).

          -d <destination>, --destination <destination>
              Destination path.

          -n <name>, --name <name>
              Application name.

          -r <repository>, --repository <repository>
              Git repository.

          -v <version>, --version <version>
              Version number.

**Examples:**

.. code-block:: none

  $ ./toolbox.sh init-project -d ~/Dev/xp/apps/myApp -n com.company.myapp -v 6.0.0 -r https://github.com/enonic/starter-base.git

  $ ./toolbox.sh init-project -n com.company.myapp -v 1.0.0-SNAPSHOT -r enonic/starter-base
