.. _bootservice:

Run XP as a Service
===================

when installing Enonic XP on a standard production server, you will want to set it up as a service, so it automatically starts and stops when the server does.
Basically the installation requirements are similar to the description in :ref:`getting_started`, but you will need a different way to launch it.

Linux
-----

Complete the following tasks ro run XP as a service on Linux:

  #. Install XP according to the :ref:`getting_started_guide`
  #. Copy the file $XP_INSTALL/bin/init.d/xp into the servers /etc/init.d/ directory
  #. Copy the file $XP_INSTALL/bin/etc/xp/xp.conf into the servers /etc/xp/xp.conf
  #. Run this command to make xp start automatically

  ::

    chkconfig: 2345 95 05

If you want to tune the default values XP is started, simply edit the boot.cfg

.. literalinclude:: code/xp.conf
   :language: properties
   :caption: ``xp.conf``


Windows
-------

Info on running XP as a service in windows will come later.
