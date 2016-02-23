.. _init_project:

init-project
============

The init-project tool initializes a new application project structure by retrieving a Git repository, removing all references to the Git
repository, and adapting its build file properties (gradle.properties).

**Usage:**

.. code-block:: none

  NAME
          toolbox init-project - Initiates an Enonic XP application project

  SYNOPSIS
          toolbox init-project [-a <authentication>]
              [(-c <checkout> | --checkout <checkout>)]
              [(-d <destination> | --destination <destination>)]
              (-n <name> | --name <name>)
              (-r <repository> | --repository <repository>)
              [(-v <version> | --version <version>)]

  OPTIONS
          -a <authentication>
              Optional authentication token for basic authentication (user:password)

          -c <checkout>, --checkout <checkout>
              Branch or commit to checkout.

          -d <destination>, --destination <destination>
              Optional destination path to create your project, if not specified current
              directory will be used

          -n <name>, --name <name>
              Unique qualifying name that will be given to your application i.e.
              com.company.myapp. NOTE: Choose the name carefully as changing it at a later
              point in time will require updating your content too.

          -v <version>, --version <version>
              Optional version number that will be set in your application project, if not
              used 1.0.0-SNAPSHOT will be set

          -r <repository>, --repository <repository>
              Git repository you wish to use as starting point. Supports both full urls to
              any standard xp git-hosted project, or optionally a GitHub repository path
              (account/repo) - account defaults to "enonic" if not specified


**Examples:**

::

  $ toolbox.sh init-project -d ~/Dev/xp/apps/myApp -n com.company.myapp -v 0.9.0 -r https://github.com/enonic/starter-vanilla.git -c 1.0.0

::

  $ toolbox.sh init-project -n com.company.myapp -v 1.0.0-SNAPSHOT -r enonic/starter-base

::

  $ toolbox.sh init-project -n com.company.myapp -r starter-base
