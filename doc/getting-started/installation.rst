.. _getting-started-installation:

Installation
============

This section describes how to install Enonic XP. If you have any problems,
please look at our :ref:`troubleshooting` section.

Requirements
------------

Enonic XP is a self-contained Java Application with minimal requirements for
infrastructure or other platform services.

General requirements are:

* Any OS supporting Java
* Java 1.8 (update 40 or above, `latest JDK download <http://www.oracle.com/technetwork/java/javase/downloads/index.html>`_)
* Local filesystem
* At least 1 GB of available memory
* HTTP port 8080 should be available (this can be changed if needed, see :ref:`configuration`)

For clustered deployments:

* Shared filesystem (for storing configuration and blobs)
* Open for network communication between the nodes

Download
--------

`Download <http://repo.enonic.com/public/com/enonic/xp/distro>`_
the correct Enonic XP version and unzip it to a suitable location.

Terminal users can do this (actual download URL (version) might be newer than the version mentioned below)::

  $ curl -O http://repo.enonic.com/public/com/enonic/xp/distro/6.0.0-RC1/distro-6.0.0-RC1.zip
  $ unzip distro-6.0.0-RC1.zip
  $ cd enonic-xp-6.0.0-RC1

The top level of the unzipped directory will be referred to as ``$XP_INSTALL``
from now on.

.. note:: **$XP_INSTALL** and **$XP_HOME** are referenced frequently in the documentation. $XP_INSTALL is the
  location of the unzipped XP download. $XP_HOME, by default, is
  the location of the $XP_INSTALL/home folder and it contains directories specific to a single XP instance. The
  home folder can be copied to multiple locations for developers working on multiple isolated projects. The **$XP_HOME
  environment variable** should be set to the home folder of the project to be run.

Start the server
----------------

Now that the software has been downloaded, you're ready to start the
server - start the respective file from command line.

Linux and OS X::

  $ [$XP_INSTALL]/bin/server.sh

Windows::

  $ [$XP_INSTALL]\bin\server.bat

This will start Enonic XP. When successfully started, the following will appear at the end of the log::

  12:53:14.302 INFO  c.e.x.l.framework.FrameworkService - Started Enonic XP in 7378 ms

Log in
------

Point your browser to ``http://localhost:8080``. Log in with username ``su`` and password ``password``.

Congratulations on installing Enonic XP. Check the :ref:`troubleshooting` page, the :ref:`faq`, or the
`community forum <https://discuss.enonic.com/>`_ if you had any problems.
