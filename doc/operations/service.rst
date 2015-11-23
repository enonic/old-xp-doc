.. _bootservice:

Run XP as a Service
===================

when installing Enonic XP on a standard production server, you will want to set it up as a service, so it automatically starts and stops when the server does.
Basically the installation requirements are similar to the description in :ref:`getting_started`, but you will need a different way to launch it.

Linux
-----

Complete the following tasks ro run XP as a service on Linux:

  1. **Create a user for running xp as a service**. 
  
  We recommend to use the name "xp" to stick with the script defaults.
  
  :: 
     
	 ladmin@my-server:/$ sudo adduser --home <USER-HOME, e.g /home/xp> --gecos "" --UID <UID, eg 1337> --disabled-password <USER, eg xp>
  
.. TIP::

   To make access rights setup easier with regards to a shared file setup, we specify UID on the user to make sure the user will have the same UID across different servers in a clustered environment
..
   
   If planning to do the rest of the installation as the xp-user you created, it must be added to the sudo-list:
   
   :: 
  
   	 ladmin@my-server:/$ sudo adduser xp sudo
..  
   
   2. **Download the xp-distribution and install at your preferred location.** 
   
   We recommend to install under ``/opt``, which will be the default location in our scripts. Make sure that the required Java version is installed, consult the :ref:`local_installation` for guidance.
  
.. TIP:: 

   Setting up a symbolic link from a fixed name to the current used version is recommended to be able to switch version without changing any scripts. 
   
   Here is a complete list of commands to install with alias ``xp`` pointing to the installed version:
   
   .. literalinclude:: code/service-install.sh
      :language: bash
   .. 
..

  3. **Configure the service script (OPTIONAL)** 
  
  Open ``$XP_INSTALL/service/init.d/xp`` and modify the following variables according to your environment (*not neccessary if using the dirs and names given above*)
  
  :: 
    
	XP_INSTALL="/opt/xp"
	RUNUSER="xp"
	OUT_LOG="/dev/null"

.. NOTE:: Logging

   The application will log to ``$XP_HOME/logs`` by default. The *OUT_LOG* variable in the service script will decide where to redirect the standard out log of the xp-application. By default, this will be redirected to ``/dev/null``. Set the *OUT_LOG* to e.g ``/var/log/xp/xp.log`` to get a startup-log for the service in addition to the application logging.
   
   Application logging setup are configured in ``$XP_HOME/config/logback.xml``.
..

	
  4. **Install service-script** 
  
  Copy ``$XP_INSTALL/service/init.d/xp`` file to ``/etc/init.d/xp``
  
  :: 
   
	xp@my-server:/opt$ sudo cp /opt/xp/service/init.d/xp /etc/init.d/xp    
	 
	 
  5. **Create XP_HOME** 
  
  Create a XP_HOME - folder that will contain the data-files and configuration of your xp-installation.
  
  ::
  
	xp@my-server:/opt$ mkdir -p /home/xp/enonic/xp
	 
  6. **Copy config from distribution** 
  
  Copy ``$XP_INSTALL/home`` to the ``$XP_HOME`` directory and make sure you have the correct access rights:
  
  ::
  
  	xp@my-server:/opt$ sudo cp -R /opt/xp/home/* /home/xp/enonic/xp/
  	xp@my-server:/opt$ sudo chown -R xp:xp /home/xp/enonic
		 
  7. **Configure the xp application** 
  
  Edit the file ``$XP_INSTALL/service/xp.conf`` to match your setup based on the *XP_HOME* created in the previous point and your Java installation and preferences.
  
   .. literalinclude:: code/xp.conf
      :language: bash
   ..    
  
  8. **Install configuration file** 
  
  Copy the ``$XP_INSTALL/service/xp.conf`` to ``/etc/xp.conf``:
  
  :: 
  
    xp@my-server:/opt$ sudo cp /opt/xp/service/xp.conf /etc/xp.conf

  9. **Start service:** ``service xp start``
  10. **Check service-status:** ``service xp status``
  11. **Stop service:** ``service xp stop``

Windows
-------

Info on running XP as a service in windows will come later.
