Building the module
===================

The project is built using Gradle. Here is a simple build script to
build a module.

.. literalinclude:: code/build.gradle
   :language: groovy

To build your module, write ``gradle build`` on the command line::

  $ gradle build

This will produce a jar file that is located inside ``build/libs`` folder.
That jar file is your build artifact you can install into Enonic XP.
