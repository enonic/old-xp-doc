.. _upgrading:

Upgrading to |version|
======================

.. warning:: This documentation describes upgrading from 6.4.2 to |version|.

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

4. Configure XP_HOME
*********************

The next steps depends on your setup:

  **If $XP_HOME outside the $XP_INSTALL - folder:**

  #. Make sure the new installation points to the correct $XP_HOME folder

  **If $XP_HOME inside the $XP_INSTALL - folder:**

  #. Copy your $OLD_XP_INSTALL/home folder to the the new $NEW_XP_INSTALL/ (on all nodes)
 

3. Stop the old installation
****************************

.. not:: It is very important to stop the existing nodes before starting a new on the same machine to avoid issue with notes starting to form a cluster.

4. Start the new installation
*****************************


Storage Configuration changes
-----------------------------

The ``baseDir`` - configuration property on where to store blobs that where previously configured in ``com.enonic.xp.repo.cfg``. 

This has been removed and replaced by a ``baseDir`` property in ``com.enonic.xp.blobstore.file.cfg``. 

If the property has not been changed from the default value (``${xp.home}/repo/blob``) in your system, no action is required. 

See :ref:`storage-config` for more details about configuring storage.

