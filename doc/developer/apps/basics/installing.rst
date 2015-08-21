Installing an application
=========================

After an application is built with `Gradle <http://gradle.org>`_, it must be deployed to your Enonic XP
installation:

To deploy a application, copy the produced artifact to your
``$XP_HOME/deploy`` folder::

  $ cp build/libs/[artifact].jar $XP_HOME/deploy/.

We have simplified this process by adding a ``deploy`` task to your build.
Instead of manually copying in the deploy folder, you can execute
``gradle deploy`` instead::

  $ gradle deploy

For this to work you have to set ``XP_HOME`` environment variable
(in your shell) to your actual Enonic XP home directory.

To continuously build and deploy your application on changes, you can use
the ``gradle watch`` task. This will watch for changes and deploy the changes
to Enonic XP. The server will then pick up the changes and reload the application.
This is probably the fastest way to develop your application::

  $ gradle watch
