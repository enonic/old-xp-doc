.. _troubleshooting:

Troubleshooting
===============

This document is an up-to-date list of known problems (and how to fix them)
for our current release and development releases.

Wrong Java version
------------------

Verify that Java 1.8 (update 92 or higher) is installed and that this version is actually used.

Run `java -version` in the shell where you attempt to start Enonic XP::

  $ java -version
  java version "1.8.0_92"
  Java(TM) SE Runtime Environment (build 1.8.0_92-b26)
  Java HotSpot(TM) 64-Bit Server VM (build 25.40-b25, mixed mode)

The boot log will also output the version of Java that was actually used.

If the Java version does not match your expected version, make sure that the ``JAVA_HOME`` environment variable is set correctly.
For OS X and Linux users - execute the following in your command line::

  export JAVA_HOME=`/usr/libexec/java_home -v 1.8`

Optionally add the line to your ``~/.properties`` file to make the change persistent.

Check the :ref:`troubleshooting_java` page for more Java help.

Port 8080 already taken
-----------------------

A lot of different web software defaults to port 8080. If you find that the log
is complaining about this, simply identify the other software you have running on this port
and stop it.

If shutting down other software that uses port 8080 is not an option, you may set a different port for Enonic XP. See :ref:`configuration`.

Unexpected behavior
-------------------

While frequently redeploying an app during development, some instability or unexpected behavior may be noticed. This can be caused by
certain changes to the app files. For example, changing the app name in the build.gradle file, or deleting content import node.xml files.
When this occurs, the project may need a clean build ``gradle clean build``. Sometimes the app JAR file may need to be deleted from the
$XP_HOME/deploy directory as well, and then replaced with the clean build JAR file.

Having two versions of the same app in the $XP_HOME/deploy folder will cause problems.

Cannot login after install
--------------------------

There could be a problem with file permissions on Windows if Enonic XP was unzipped and started from within the "My Documents" folder. This
may allow XP to start, but the users cannot log in. The solution would be to unzip the Enonic XP distribution outside of the "My Documents"
folder, or to manually change the file permissions.


Sending email with lib-mail not working
---------------------------------------

Check the installation's :ref:`configuration-mail`.