.. _apps-basics-building:

Building an application
=======================

The project is built using `Gradle <http://gradle.org>`_. Here is a simple build script to
build an app:

.. literalinclude:: code/build.gradle
   :language: groovy
   :caption: ``build.gradle``

To build the app, write ``gradle build`` on the command line::

  $ gradle build

If ``gradle build`` does not work then try ``./gradlew build`` on Mac or ``gradlew build`` on Windows.

This will produce a jar file inside the ``build/libs`` folder.
That jar file is the build artifact that you can install into Enonic XP by placing it into the $XP_HOME/deploy folder.

If the :term:`$XP_HOME` environment variable is set then you can build and deploy in one step with ``gradle deploy``.

Projects can be automatically built and deployed whenever project files are changed by using ``gradle watch`` in the terminal. This also
requires the $XP_HOME environment variable to be set.

The deployment location can also be set within the build.gradle file. Add ``xpHome`` to the app section of the build.gradle file and set
the file path to the location of the project's XP home folder. See the examples below:

.. code-block:: javascript

    app {
       xpHome = file('/path/to/yor/dir')
    }

Relative paths can also be set. The example below sets $XP_HOME relative to the project directory:

.. code-block:: javascript

  app {
      xpHome = file("{$projectDir}/../../xp6/home")
  }

Setting $XP_HOME in the build.gradle file might not be best practice for projects with multiple developers using version control because
each developer may have their project files and home folders in different locations.

.. note:: Some changes to project files may require a "clean" build with ``gradle clean build``. For example, if the app name is changed or
   sometimes if certain files are deleted.