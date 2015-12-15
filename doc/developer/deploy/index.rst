.. _gradle_deploy_app:

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
`Gradle continuous mode <https://docs.gradle.org/current/userguide/continuous_build.html>`_.
This will watch for changes and run the specified task when something changes.
To use this with ``deploy`` task, you can run the following command::

  $ gradle --continuous deploy

Or the short version::

  $ gradle -t deploy

This will deploy and reload the application on server when something changes and
is probably the fastest way to develop your application.

To speed up development, please see :ref:`gradle_dev_mode`.
