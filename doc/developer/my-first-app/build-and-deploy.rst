.. _building:

Build and Deploy
----------------

Now that we have set up a project, we should test that it builds and deploys successfully. But before deploying the app, the ``$XP_HOME``
environment variable must be set to the path of the home folder of the XP installation.

1. Run the following command in the terminal, replacing [$XP_INSTALL] with your installation location (no brackets): ``export XP_HOME=[$XP_INSTALL]/home``

2. Execute the following command from the project root directory: ``./gradlew deploy``

If you don't already have `Gradle <http://gradle.org>`_ installed, the Gradle wrapper will be download first.
Next it will build the app and then attempt to deploy it to your installation.

The deployment step simply moves the result of the build (the application JAR file) into the ``$XP_HOME/deploy`` directory.
From there, Enonic XP will detect, install and start the application automatically.

You will need to access the Administrative console to check that the app has installed and started.

3. Log in to the Administrative console (http://localhost:8080) with the Administrative user credentials (userid **su** and password
   **password**).

4. Navigate to the Applications App. The application you just deployed should be listed.

5. Click the app listed as "Myapp" to see information about it and confirm that it has started.


.. NOTE::

  You can change the display name of the application by editing the gradle.properties file.
