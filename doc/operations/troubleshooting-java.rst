.. _troubleshooting_java:

Troubleshooting Java
====================

.. important:: This documentation is based on OSX, Windows version coming later..

Check current JDK version
-------------------------

To see all installed JDK's on you environment, if any, type the following command in your terminal:

.. code-block:: none

 ~/ $ /usr/libexec/java_home -V
 Matching Java Virtual Machines (4):
     1.8.0_45, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home
     1.8.0_40, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_40.jdk/Contents/Home
     1.8.0_20, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_20.jdk/Contents/Home
     1.7.0_67, x86_64:	"Java SE 7"	/Library/Java/JavaVirtualMachines/jdk1.7.0_67.jdk/Contents/Home
 ~/ $


If you have a JDK equal to or above version 1.8.0_92, but the ``javac -version`` points to another version, proceed to set the JAVA_HOME
environment variable correctly.  If you do not have a JDK equal to or above version 1.8.0_92, then you need to upgrade your JDK.

Setting JAVA_HOME
-----------------

If you don't have a JDK equal to or above version 1.8.0_40, you must install a newer version.

* Go to the `JDK page <http://www.oracle.com/technetwork/java/javase/downloads/index.html>`_ and click the "JDK download"
  button. This button will always link to the latest version.

* Follow the `installation instructions <http://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html>`_.

* After installation, proceed to check that the JAVA_HOME environment variable is set correctly.


To check the current JAVA_HOME environment variable:

.. code-block:: none

 ~/ $ echo $JAVA_HOME
 /Library/Java/JavaVirtualMachines/jdk1.8.0_60.jdk/Contents/Home
 ~/ $

If this is not set correctly, you must set the correct one either for this terminal session, or in your ``.profile`` or ``.bashrc`` for all
terminal sessions.

* To set the correct ``JAVA_HOME`` for the current terminal session; invoke the following command in your terminal. This command will set
  ``JAVA_HOME`` to the newest installed 1.8 JDK-version:

.. code-block:: none

 ~/ $ export JAVA_HOME=`/usr/libexec/java_home -v 1.8`

* To set for all terminal sessions, add the entry to either your ``~/.bash_profile`` or ``~/.profile.``

.. code-block:: none

 $ vim .bash_profile

 export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)

 $ source .bash_profile

 $ echo $JAVA_HOME
 /Library/Java/JavaVirtualMachines/1.8.0_45.jdk/Contents/Home
