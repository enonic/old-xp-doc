.. _upgrade_notes:

Upgrade notes - |version|
=========================

.. warning:: This documentation describes upgrading from 6.8.x to |version|.


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


Strict Virtual Hosting
----------------------

If the virtual hosting is enabled (see :ref:`configuration-vhost`),
a request on a resource not included by any virtual host mapping will return a 404. 

If you are using the Toolbox CLI, you will want to make sure that the path "/api" is included. 

.. literalinclude:: code/vhost.properties
   :language: properties
   

Content Manager Expert
----------------------

A new role "cms.expert", allowing access to advanced features in :ref:`content_studio`, has been created.
This role needs to be created manually for existing installations using the tool :ref:`users_tool`.
(See :ref:`roles` for more information).   


Lazy session creation
---------------------

Starting from 6.9.2, sessions are now lazy created.
You should not expect the cookie 'JSESSIONID' to be set if not necessary.