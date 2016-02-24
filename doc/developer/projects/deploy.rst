.. _gradle_deploy_app:

Installing an application
=========================

There are several ways to install applications

* Uploading directly from the "Applications" admin tool - this will install and start the application in the entire cluster
* Use the :ref:`toolbox` command line utility - this will install and start the application in the entire cluster.
* And finally, the developer way - copying the application JAR file to the ``$XP_HOME/deploy`` folder - this will install and start the application on the local node (typically used by developers)

Once an application is placed in this folder, it will be picked up, installed and started by the local instance.
If the application is removed it will be stopped and uninstalled.

OSX/Linux command line to copy the artifact to the deploy folder:

.. code-block:: none

  cp build/libs/[artifact].jar $XP_HOME/deploy/.

For your convenience - we have simplified this process by adding a ``deploy`` task to your build.
Instead of manually copying to the deploy folder, you can simply execute ``gradle deploy``:

.. code-block:: none

  ./gradlew deploy


For the deploy command to work, you have to set the ``XP_HOME`` environment variable
(in your shell) to your actual Enonic XP home directory.

Run the following command to set the XP_HOME variable

OSX/Linux:

.. code-block:: none

   export XP_HOME=/path/to/xp-installation/home

Windows:

.. code-block:: none

  set XP_HOME=c:\path\to\xp-installation\home


Continuous Deploy
-----------------
To continuously build and deploy your application on changes, you can use
`Gradle continuous mode <https://docs.gradle.org/current/userguide/continuous_build.html>`_.
This will watch for changes and run the specified task when something changes.
To use this with the ``deploy`` task, you can run the following command:

.. code-block:: none

  ./gradlew -t deploy

This will deploy and reload the application on the server when something changes in your project.
The continuous deployment mode is most useful when coding Java, or other changes that require a full compile and re-deploy.

For the instant updates of JavaScript code without re-deploying, check out :ref:`gradle_dev_mode`.
