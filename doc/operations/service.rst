.. _bootservice:

Run XP as a Service
===================

When installing Enonic XP on a standard production server, you will want to set it up to run as a service.

Linux
-----

Install with script
*******************

 #. Download the install-script: :download:`code/install_as_service.sh`
 #. Add execute right to script: ``chmod u+x install_as_services.sh``
 #. Run script: ``sudo ./install_as_service.sh``
 #. Set `JAVA_HOME` in ``/etc/xp.conf``
 #. Start service: ``sudo service xp start``
 
Manual installation
*******************

See :ref:`linux-detailed-service-install`


Windows
-------

Info on running XP as a service in windows will come later.
