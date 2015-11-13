.. _bootservice:

Run XP as a Service
===================

when installing Enonic XP on a standard production server, you will want to set it up as a service, so it automatically starts and stops when the server does.
Basically the installation requirements are similar to the description in :ref:`getting_started`, but you will need a different way to launch it.

Linux
-----

Complete the following tasks ro run XP as a service on Linux:

  1. Install XP according to the :ref:`getting_started_guide`
  
  2. *RECOMMENDED*: Create a user for running xp as a service
  
  :: 
     
	 sudo adduser --home <USER-HOME, e.g /home/xp> --gecos "" --UID <UID, eg 1337> --disabled-password <USER, eg xp>
  
  3. Open the file ``$XP_INSTALL/service/init.d/xp`` and modify the following variables
  
  :: 
    
	# Set according to environment
	XP_INSTALL="/home/xp/distro"
	XP_HOME="/home/xp/xp_home"
	RUNUSER=xp
	XP_LOG=$XP_HOME/logs/xp.out
	
  4. Copy the edited file to ``/etc/init.d/xp``, e.g
  
  :: 
  
     cp distro/service/init.d/xp /etc/init.d/
	 
  5. Edit the file ``$XP_INSTALL/service/xp.conf`` to your liking, e.g
  
  :: 
  
	 ## Location of Java installation
	 export JAVA_HOME="/usr/lib/jvm/java-8-oracle"

	 ## Java options
	 export JAVA_OPTS="-Xms2G -Xmx4G"

	 ## Java debug options
	 # export JAVA_DEBUG_OPTS

	 ## Additional available Enonic XP options
	 # export XP_OPTS
	
  
  6. Copy the edited file to ``/etc/xp.conf``, e.g
  
  :: 
  
    cp distro/service/xp.conf /etc/

  7. Start service: ``service xp start``
  8. Check status of service: ``service xp status``
  9. Stop service: ``service xp stop``

Windows
-------

Info on running XP as a service in windows will come later.
