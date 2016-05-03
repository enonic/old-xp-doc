.. _upgrading:

Upgrading to |version|
======================

.. warning:: This documentation describes upgrading from 6.5.3 to |version|.

Upgrade Steps
-------------

1. Backup the installation
**************************

Backup you current installation. This is described in :ref:`backup`. 

You could also do a :ref:`toolbox-dump` of the system, but then you will loose versions if you have to reload it.

2. Install new version
******************************

  #. Download Enonic XP https://repo.enonic.com/public/com/enonic/xp/distro/${release}/distro-${release}.zip and install according to your setup.
  
.. tip:: Remember to update any startup scripts you might have to launch your new installation given a server restart

3. Configure XP_HOME
*********************

The next steps depends on your setup:

  **If $XP_HOME outside the $XP_INSTALL - folder:**

  #. Make sure the new installation points to the correct $XP_HOME folder

  **If $XP_HOME inside the $XP_INSTALL - folder:**

  #. Copy your $OLD_XP_INSTALL/home folder to the the new $NEW_XP_INSTALL/ (on all nodes)
 

4. Stop the old installation
****************************


5. Start the new installation
*****************************


Cluster now defaults to false
-----------------------------

To prevent unintentional forming of cluster when two xp-instances are started on the same machine, the cluster discovery is now turned off by default.
To enable clustering, an option in ``$XP_DISTRO/home/config/com.enonic.xp.elasticsearch.cfg`` must be set:

:: 
 
  node.local = false 

See :ref:`clustering` for more details about configuring clustering.

