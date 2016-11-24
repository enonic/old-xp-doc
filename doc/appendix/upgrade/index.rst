.. _upgrade_notes:

Upgrade notes - |version|
=========================

.. warning:: This documentation describes upgrading from 6.7.x to |version|.


.. NOTE:: Enonic XP |version| now requires minimum Java 1.8.92


Upgrade Steps
-------------

1. Backup the installation
**************************

Backup you current installation. This is described in :ref:`backup`.

You could also do a :ref:`toolbox-dump` of the system, but then you will loose versions if you have to reload it.

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



Stricter Site config validation
-------------------------------

Validation of application configuration forms in a site has been improved.
When the application configuration is updated while editing a site in `Content Studio`, an extra validation has been added to the server.
This means that there are potentially some existing invalid values that were accepted before, but will cause the Site content to be marked
as invalid after the upgrade.

If updating a site makes it invalid after the upgrade, double-check the config in ``site.xml`` for the applications in the site.
