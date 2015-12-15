.. _linux-detailed-service-install:

Linux detailed instructions
----------------------------

.. ATTENTION::

	This guide is written for and tested using Ubuntu / CentOS - details may differ on other distrubutions.
..

Complete the following tasks ro run XP as a service on Linux:

  1. **Create a user for running xp as a service**.

  We recommend to use the name "xp" to stick with the script defaults.

  *Ubuntu*

  ::

  	sudo adduser --home /home/xp --gecos "" --UID <some integer> --disabled-password xp

  *CentOS*

  ::

	sudo adduser -d /home/xp -m -r -u <some integer> xp

.. TIP::

   To make access rights setup easier with regards to a shared file setup in a clustered environment, specify UID on the user to make sure the user will have the same UID across different servers.
..


   2. **Download the xp-distribution and install at your preferred location.**

   We recommend to install under ``/opt/enonic``, which will be the default location in our scripts. Make sure that the required Java version is installed, consult the :ref:`install_java`-section for guidance.

.. TIP::

   Setting up a symbolic link from a fixed name to the current used version is recommended to be able to switch version without changing any scripts.
..

   Here is a complete list of commands to install with alias ``xp`` pointing to the installed version::

		 cd /opt

		 sudo mkdir enonic

		 cd enonic

		 sudo curl -O http://repo.enonic.com/public/com/enonic/xp/distro/${release}/distro-${release}.zip

		 sudo unzip -qq distro-${release}.zip

		 sudo ln -s enonic-xp-${release} xp

		 sudo rm distro-${release}.zip

		 ls -la
		 total 91208
		 drwxr-xr-x  3 root root     4096 Nov 23 10:09 ./
		 drwxr-xr-x 23 root root     4096 Dec  5  2012 ../
		 drwxr-xr-x  8 root root     4096 Nov 23 10:10 enonic-xp-${release}/
		 lrwxrwxrwx  1 root root       24 Nov 23 10:10 xp -> enonic-xp-${release}/

..


  3. **Install service-script**

  If you followed the naming scheme above, just copy the service-script at ``$XP_INSTALL/service/init.d/xp`` to ``/etc/init.d/xp``

  ::

	sudo cp /opt/enonic/xp/service/init.d/xp /etc/init.d/xp

  If you choose to diverge from the recommended setup, edit the ``$XP_INSTALL/service/init.d/xp`` to match your configuration.

  .. NOTE:: Logging

     The application will log to ``$XP_HOME/logs`` by default. The *OUT_LOG* variable in the service script will decide where to redirect the standard out log of the xp-application. By default, this will be redirected to ``/dev/null``. Set the *OUT_LOG* to e.g ``/var/log/xp/xp.log`` to get a startup-log for the service in addition to the application logging.

     Application logging setup are configured in ``$XP_HOME/config/logback.xml``.
  ..


  4. **Create XP_HOME**

  Create a XP_HOME - folder that will contain the data-files and configuration of your xp-installation.

  ::

	sudo mkdir -p /home/xp/enonic/xp

  5. **Copy config from distribution**

  Copy ``$XP_INSTALL/home`` to the ``$XP_HOME`` directory and make sure *xp* have the correct access rights:

  ::

  	sudo cp -R /opt/enonic/xp/home/* /home/xp/enonic/xp/
  	sudo chown -R xp:xp /home/xp/enonic

  6. **Configure the xp application**

  Copy the ``$XP_INSTALL/service/xp.conf`` to ``/etc/xp.conf``:

  ::

    sudo cp /opt/enonic/xp/service/xp.conf /etc/xp.conf

  Then edit ``/etc/xp.conf`` to match your setup, e.g:

   .. literalinclude:: code/xp.conf
      :language: bash
   ..


  7. **Start service:**

  Ok, your should be ready to go, start the service with the service start command:

  ::

  	sudo service xp start

  8. **Check service-status:**

  ::

  	sudo service xp status

  9. **Stop service:**

  ::

  	sudo service xp stop
