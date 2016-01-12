.. _gradle_deploy_app:

Installing an application
=========================

After an application is built with `Gradle <http://gradle.org>`_, it must be deployed to your Enonic XP
installation:

OSX/Linux command to deploy a application (copies the produced artifact to your ``$XP_HOME/deploy`` folder::

.. code-block:: none

  cp build/libs/[artifact].jar $XP_HOME/deploy/.

We have simplified this process by adding a ``deploy`` task to your build.
Instead of manually copying in the deploy folder, you can execute ``gradle deploy`` instead::

.. code-block:: none

   gradle build


Once completed, your XP installation will detect, install and start the files.

For the deploy command to work you have to set ``XP_HOME`` environment variable
(in your shell) to your actual Enonic XP home directory.

Run the following command to set the XP_HOME variable

OSX/Linux::

.. code-block:: none

   export XP_HOME=/path/to/xp-installation/home

Windows::

.. code-block:: none

  set XP_HOME=c:\path\to\xp-installation\home


Continous Deploy
----------------
To continuously build and deploy your application on changes, you can use
`Gradle continuous mode <https://docs.gradle.org/current/userguide/continuous_build.html>`_.
This will watch for changes and run the specified task when something changes.
To use this with ``deploy`` task, you can run the following command::

.. code-block:: none

  gradle -t deploy

This will deploy and reload the application on server when something changes and
is probably the fastest way to develop your application.

The continous deployment mode is most useful when coding Java, or other changes that require a full compile and re-deploy.

For the fastest way of developing standard XP applications and libraries, check out :ref:`gradle_dev_mode`.
