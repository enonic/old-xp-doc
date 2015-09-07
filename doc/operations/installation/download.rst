.. _download_xp:

Download Enonic XP
------------------

`Download <https://enonic.com/try-now#t-Download-now>`_
the latest Enonic XP release version and unzip it to a suitable location.

Terminal users can do this (actual download URL (version) might be newer than the version mentioned below)::

  $ curl -O http://repo.enonic.com/public/com/enonic/xp/distro/6.0.0-RC1/distro-6.0.0-RC1.zip
  $ unzip distro-6.0.0-RC1.zip
  $ cd enonic-xp-6.0.0-RC1

The top level of the unzipped directory will be referred to as ``$XP_INSTALL``
from now on.

.. note:: :term:`$XP_INSTALL` and :term:`$XP_HOME` are referenced frequently in the documentation. $XP_INSTALL is the
  location of the unzipped XP download. $XP_HOME, by default, is
  the location of the $XP_INSTALL/home folder and it contains directories specific to a single XP instance. The
  home folder can be copied to multiple locations for developers working on multiple projects to keep them isolated. The **$XP_HOME
  environment variable** should be set to the home folder of the project to be run.



