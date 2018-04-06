.. _upgrade_notes:

Upgrade notes - |version|
=========================

.. warning:: This documentation describes upgrading from 6.11.x to |version|.


.. NOTE:: Enonic XP |version| now requires minimum Java 1.8.92


Upgrade Steps
-------------

1. Backup the installation
**************************

Backup you current installation. This is described in :ref:`backup`.

You could also do a :ref:`toolbox-dump` of the system, but then you will lose versions if you have to reload it.

2. Install new version
**********************

Download Enonic XP http://repo.enonic.com/public/com/enonic/xp/distro/${release}/distro-${release}.zip and install according to your setup.

.. tip:: Remember to update any startup scripts you might have to launch your new installation given a server restart

3. Configure XP_HOME
*********************

The next step depends on your setup. Do you have your **$XP_HOME** folder outside or inside the **$XP_INSTALL** folder?

**Outside the $XP_INSTALL - folder:**

Make sure the new installation points to the correct $XP_HOME folder.

**Inside the $XP_INSTALL - folder:**

Copy your $OLD_XP_INSTALL/home folder to the the new $NEW_XP_INSTALL/ (on all nodes).


4. Stop the old installation
****************************


5. Start the new installation
*****************************

6. Configure apps to build with 6.12
************************************

In 6.12 we have made several structural changes to Enonic XP.  This affects how you build your own apps with Gradle.

The Gradle plugin for building Enonic applications are not included in the distribution anymore.
This helps us improve the build tools without waiting for a new release of XP every time.
Here is how to make build scripts work for 6.12.x:

Before you would probably have something like this in the beginning of your build.gradle file:

.. literalinclude:: code/old.build.gradle

Now you can write the same block as:

.. literalinclude:: code/new.build.gradle

PS: This requires Gradle 4.0 or later.

All the rest will be the same. You can look at https://github.com/enonic/starter-vanilla for an example of how to use plugin.

7. Admin UI config file is renamed
**********************************

If you have used the Admin UI config-file in 6.11 (to disable the Welcome Tour), the name of that file has changed in 6.12. In order for XP to pick that up you will need to:

Rename the file ``com.enonic.xp.admin.ui.cfg`` in the ``$XP_HOME/config/`` directory to ``$XP_HOME/config/com.enonic.xp.app.main.cfg``. The settings in that file have not changed.
