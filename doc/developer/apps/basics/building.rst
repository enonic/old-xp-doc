.. _apps-basics-building:

Building an application
=======================

The project is built using `Gradle <http://gradle.org>`_. Here is a simple build script to
build an app:

.. literalinclude:: code/build.gradle
   :language: groovy

To build the app, write ``gradle build`` on the command line::

  $ gradle build

This will produce a jar file that is located inside ``build/libs`` folder.
That jar file is your build artifact you can install into Enonic XP.
