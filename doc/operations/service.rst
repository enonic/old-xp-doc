.. _bootservice:

Run XP as a Service
===================

When installing Enonic XP on a standard production server, you will want to set it up to run as a service.

First, make sure the correct version of Java JDK is installed on your system. See :ref:`install_java` for guidance.

Linux
-----

Install with script
*******************

.. ATTENTION:: 
	The script is written for and tested on Ubuntu / CentOS. For other distrubutions, the manual installation may be neccessary.

	*Prerequisites*
		* User with *sudo* rights
		* Java JDK 1.8+ installed
		* ``unzip`` installed
		* ``/lib/lsb/init-functions`` installed
		* ``curl`` installed
..


 #. Download the install-script: :download:`code/install_as_service.sh`
 #. Add execute right to script: ``chmod u+x install_as_services.sh``
 #. Run script: ``sudo ./install_as_service.sh 6.3.0``
 #. Set **JAVA_HOME** and **JAVA_OPTS** variables in ``/etc/xp.conf``
 #. Start service: ``sudo service xp start``
 #. Check log: ``tail -f /home/xp/enonic/xp/logs/server.log``
 
Manual installation
*******************

See :ref:`linux-detailed-service-install`


Windows
-------

Info on running XP as a service in windows will come later.
