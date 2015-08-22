.. _getting-started-installation:

Installation
============

This section describes how to install Enonic XP. If you have any trouble,
please look at our :ref:`troubleshooting` section.

Requirements
------------

Enonic XP is a self-contained Java Application with minimal requirements for
infrastructure or other platform services.

General requirements are:

* Any OS supporting Java
* Java 1.8 (update 40 or above)
* Local filesystem
* At least 1Gb of available memory

For clustered deployments:

* Shared filesystem (for storing configuration and blobs)
* Open for network communication between the nodes

Download
--------

First off, `download <http://repo.enonic.com/public/com/enonic/xp/distro>`_
the correct Enonic XP version and unzip it to a preferred directory.

Terminal users can do this (actual download URL (version) might not be up to date)::

  $ curl -O http://repo.enonic.com/public/com/enonic/xp/distro/6.0.0-RC1/distro-6.0.0-RC1.zip
  $ unzip distro-6.0.0-RC1.zip
  $ cd enonic-xp-6.0.0-RC1

The top level of the unzipped directory will be referred to as ``$XP_INSTALL``
from now on.

.. note:: **$XP_INSTALL** and **$XP_HOME** are referenced frequently in the documentation and it is important
  to understand the difference. $XP_INSTALL is the top level directory of the XP installation and it
  contains the directories `bin`, `home`, `lib`, `toolbox` and others. While $XP_HOME, by default, is
  the location of the $XP_INSTALL/home folder and it contains the `config`, `deploy`, `repo` and other
  directories specific to a single XP instance. The home folder can be copied to multiple locations
  for developers working on more than one project. The **$XP_HOME environment variable** should be set to
  the home folder of the project to be run.

Start the server
----------------

Now that the software has been downloaded, you're ready to start the
server - start the respective file from command line.

Linux and OS X::

  $ $XP_INSTALL/bin/server.sh

Windows::

  $ $XP_INSTALL\bin\server.bat

This will start Enonic XP. When successfully started, something
like the following will appear at the end of the log::

  12:53:14.302 INFO  c.e.x.l.framework.FrameworkService - Started Enonic XP in 7378 ms

Log in
------

Point your favorite (modern) browser to ``http://localhost:8080``. Log in with
username ``su`` and password ``password``.

Congratulations on installing Enonic XP.
