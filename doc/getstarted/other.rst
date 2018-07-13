.. _local_installation:

For Developers
==============

This section describes how to install Enonic XP on any operating system.
This is also the recommended approach for setting up a development environment.
If you have any problems, please look at our :ref:`troubleshooting` section.

**Watch this video**

.. raw:: html

  <div style="position: relative; padding-bottom: 56.25%; /* 16:9 */ padding-top: 25px; margin-bottom: 25px; height: 0;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/Sr7X9cmOvhw?rel=0" frameborder="0" allowfullscreen></iframe>
  </div>


.. contents:: or complete the following steps:
  :local:


.. _install_java:

Install Java
------------

.. warning:: To run Enonic XP, you need Java 8 (also known as Java 1.8). Install Java Development Kit (JDK) 1.8.92 or newer. Java 9 is not supported and XP will not start on it!

**Check JDK Version**

If you're not sure what JDK version you have (or even if you have one), run the following in your terminal/shell:

::

  javac -version

This should produce a response such as: "javac 1.8.0_112"

Having problems with your existing Java installation? Check out our :ref:`troubleshooting_java` documentation.


**Optionally Install Java**

If it turns out you're on the wrong java version, follow these steps

* Download it from http://www.oracle.com/technetwork/java/javase/downloads/index.html - The page starts with the latest Java version.
  Please find the Java 8 section, a little further down the page, and download the Java 8 JDK.

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

.. include:: login.rst

Add Sample Apps
---------------

.. include:: tour.rst


Visit Enonic Market
-------------------

.. include:: install-app.rst


Next Steps
----------

.. include:: next.rst


Troubleshooting
---------------
Verify that you comply with the minimum requirements for running XP on your local machine

.. note:: **General Requirements**

   * Any OS supporting the required version of Java (Mac, Linux, Windows etc)
   * At least 1 GB of available memory
   * HTTP port 8080 should be available (this can be changed if needed, see :ref:`configuration`)
