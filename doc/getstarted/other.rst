.. _local_installation:

Other operating systems
=======================

This section describes how to install Enonic XP on your own computer, without the Mac or Windows installer. This is also the preferred
method of environment setup for developers who will be running multiple projects with various XP versions and XP_HOME locations. If you
have any problems, please look at our :ref:`troubleshooting` section.

.. note:: **General Requirements**

   * Any OS supporting Java (Mac, Linux, Windows etc)
   * Java JDK 1.8 (update 92 or newer)
   * At least 1 GB of available memory
   * HTTP port 8080 should be available (this can be changed if needed, see :ref:`configuration`)


.. _install_java:

Install Java
------------

.. warning:: To run Enonic XP, you need Java Development Kit (JDK) 1.8.40 JDK or newer.

**Check JDK Version**

If you're not sure what JDK version you have (or even if you have one), run the following in your terminal/shell:

::

  javac -version

This should produce a response such as: "javac 1.8.0_60"

Having problems with your existing Java installation? Check out our :ref:`troubleshooting_java` documentation.


**Optionally Install Java**

If it turns out you're on the wrong java version, follow these steps

* Download it from http://www.oracle.com/technetwork/java/javase/downloads/index.html

.. image:: images/java-download.png

* Follow the instructions for your respective operating system


Download Enonic XP
------------------

Enonic XP is available in a simple universal distribution file - running on all plaforms (Windows, Linux, OSX etc)

* `Download Enonic XP distribution <https://enonic.com/try-now#download-now>`_
* Unzip the file to a suitable location

Command-line version (OSX/Linux only)::

  curl -O http://repo.enonic.com/public/com/enonic/xp/distro/${release}/distro-${release}.zip
  unzip distro-${release}.zip
  cd enonic-xp-${release}


Next - let's get the server started


Start the server
----------------

Now that the software has been downloaded, you're ready to start the
server - start the respective file from command line.

Linux and OS X::

  [XP Installation Folder]/bin/server.sh

Windows::

  [XP Installation Folder]\bin\server.bat

This will start Enonic XP. When successfully started, the following will appear at the end of the log::

  12:53:14.302 INFO  c.e.x.l.framework.FrameworkService - Started Enonic XP in 7378 ms


Log In
------

* Point your browser to ``http://localhost:8080``
* Log in with username ``su`` and password ``password``.

After logging in you should see the following screen, with the launcher panel to the right:

.. image:: images/admin.jpg

Install Superhero Blog
----------------------

.. include:: install-app.rst

.. include:: start-blogging.rst

Next Steps
----------

.. include:: next.rst
