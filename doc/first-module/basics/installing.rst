Installing the module
=====================

After a module is built with Gradle, it must be deployed to your Enonic XP
installation. There is not much of a module to build at this point, but you
will want to build and check your project after each step of this tutorial.
You can refer back to this section whenever you are ready.

To deploy your module, copy the produced artifact to your
``$XP_HOME/deploy`` folder::

  $ cp build/libs/my-first-module-1.0.0.jar $XP_HOME/deploy/.

We have simplified this process by adding a ``deploy`` task to your build.
Instead of manually copying in the deploy folder, you can execute
``gradle deploy`` instead::

  $ gradle deploy

For this to work you have to set ``XP_HOME`` environment variable
(in your shell) to your actual Enonic XP home directory.

To continuously build and deploy your module on changes, you can use
the ``gradle watch`` task. This will watch for changes and deploy the changes
to Enonic XP. The server will then pick up the changes and reload the module.
This is probably the fastest way to develop your module::

  $ gradle watch
  
