Build script
============

We have standardized on Gradle as the main build tool. This is a highly flexible Java-based utility that build on the popular Maven project tools and code repository structures.
Enonic provides a Gradle plugin that simplifies the build process, if you used the starter-base project to initialize your project, you will have all the basic tools you need to get going.

Running a build
---------------

If you have not installed Gradel, the fastest way to get going is to execute the gradle wrapper script.

Move into your project root folder and execute the following command:

OSX/Linux:

.. code-block:: none

   ./gradlew build

Windows:

.. code-block:: none

   gradlew.bat build


The gradle wrapper will download all necessary files to run gradle and produce the project artifacts. These will typically be placed in the projects build/libs/ folder.


gradle.properties
-----------------
Your project should contain a ``gradle.properties`` file.  Set ``xpVersion`` to the version of Enonic XP you are working with, and look over the other settings to
make sure they are correct.


build.gradle
------------
The ``build.gradle`` file defines all the dependencies to other libraries.

There are three standard scopes (keywords) used in the dependency list

* Compile (default gradle scope, compiles library and adds it to class path - standard for pure Java libraries)
* Include (XP custom scope that merges the /src/main/resources folder in the library with your project - any code in your project overwrites the library files)
* Webjar (Extracts the content of the specified Webjar - http://www.webjars.org/ - placing it into the assets folder, using the version number as root folder)


gradle deploy
-------------

To have Gradle automatically deploy new applications to your XP intallation you have to specify an environment variable that tells Gradle where to place the artifact (application file).

OSX/Linux:

.. code-block:: none

   export XP_HOME=/path/to/xp-installation/home

Windows:

.. code-block:: none

  set XP_HOME=c:\path\to\xp-installation\home


When done, if you have installed Gradle, run the following commands to build and deploy the file

OSX/Linux:

.. code-block:: none

   gradle deploy

Windows:

.. code-block:: none

   gradlew.bat build


Once completed, your XP installation will detect, install and start the files.
