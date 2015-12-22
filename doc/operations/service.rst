.. _bootservice:

Install as service
===================

When installing Enonic XP on a standard production server, you will want to set it up to run as a service.

First, make sure the correct version of Java is installed on your system. See :ref:`install_java` for guidance.

Linux
-----

Install with script
*******************

.. ATTENTION::
	The script is written for and tested on Ubuntu / CentOS. For other distrubutions, the manual installation may be neccessary.

	*Prerequisites*
		* User with *sudo* rights
		* Java JRE 1.8+ installed
		* ``/lib/lsb/init-functions`` installed
..

 #. Download the Enonic XP distribution
 #. Unzip the distributiopn
 #. Run script: ``sudo ./enonic-xp-${release}/service/install_service.sh``
 #. *Optional:* Set **JAVA_HOME** and **JAVA_OPTS** variables in ``/etc/xp.conf``
 #. Start service: ``sudo service xp start``
 #. Check log: ``sudo tail -f /home/xp/enonic/xp/logs/server.log``

Manual installation
*******************

See :ref:`linux-detailed-service-install`

Windows
-------

Info on running XP as a service in windows will come later.
