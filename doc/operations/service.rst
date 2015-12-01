.. _bootservice:

Run XP as a Service
===================

When installing Enonic XP on a standard production server, you will want to set it up to run as a service.

Linux
-----

Install with script
*******************

.. ATTENTION:: 
	The script is written for and tested on Ubuntu / CentOS. For other distrubutions, the manual installation may be neccessary.
..

 #. Download the install-script: :download:`code/install_as_service.sh`
 #. Add execute right to script: ``chmod u+x install_as_services.sh``
 #. Run script: ``sudo ./install_as_service.sh 6.3.0``
 #. Set `JAVA_HOME` in ``/etc/xp.conf``
 #. Start service: ``sudo service xp start``
 #. See log: ``tail -f /home/xp/enonic/xp/logs/server.log``
 
Manual installation
*******************

See :ref:`linux-detailed-service-install`


Windows
-------

Info on running XP as a service in windows will come later.
