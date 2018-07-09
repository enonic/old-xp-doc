.. _upgrade_notes:

Upgrade notes - |version|
=========================

.. note:: This documentation describes upgrading from 6.13.x to |version|.

Notable changes
---------------

CKEditor replaces TinyMCE
*************************

CKEditor is the new HTML editor used inside Content Studio.
To ease the transition, TinyMCE is still present and can be used by setting the property ``htmlarea`` in the new config file ``com.enonic.xp.app.contentstudio.cfg``.

.. literalinclude:: code/contentstudio.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.app.contentstudio.cfg``
   
Ignite cluster
**************

Enonic XP now includes Apache Ignite. If your installation is not clustered, you do not need to do anything and may skip this part.

Elasticsearch and Ignite communicate between every Enonic XP node of a cluster.
To simplify the configuration, a file ``com.enonic.xp.cluster.cfg`` has been created to gather the properties common to Ignite and Elasticsearch. 
The configuration files ``com.enonic.xp.elasticsearch.cfg`` and ``com.enonic.xp.ignite.cfg`` contain the properties specific to each system.

.. literalinclude:: code/cluster.properties
   :language: properties
   :caption: ``$XP_HOME/config/com.enonic.xp.cluster.cfg``
   
Remove the following obsolete properties from the file ``com.enonic.xp.elasticsearch.cfg``: node.name, node.local, network.host and discovery.zen.ping.unicast.hosts

See the :ref:`configuration` section for more information about the configuration files.


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
