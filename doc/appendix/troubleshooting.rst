.. _troubleshooting:

Troubleshooting
===============

This document is an up-to-date list of known problems (and how to fix them)
for our current release and development releases.

Wrong Java version
------------------

Verify that Java 1.8 (update 40 or higher) is installed and that this version is actually used.

Run `java -version` in the shell where you attempt to start Enonic XP::

  $ java -version
  java version "1.8.0_40"
  Java(TM) SE Runtime Environment (build 1.8.0_40-b26)
  Java HotSpot(TM) 64-Bit Server VM (build 25.40-b25, mixed mode)

The boot log will also output the version of Java that was actually used.

If the Java version does not match your expected version, make sure that ``JAVA_HOME`` is set correctly.
For OS X and Linux users - execute the following in your command line::

  export JAVA_HOME=`/usr/libexec/java_home -v 1.8`

Optionally add the line to your ``~/.properties`` file to make the change persistent.


Port 8080 already taken
-----------------------

A lot of different web software defaults to port 8080. If you find that the log
is complaining about this, simply identify the other software you have running on this port
and stop it.

Optionally, you may set a different port for Enonic XP, but this is the topic
of :ref:`configuration`.
