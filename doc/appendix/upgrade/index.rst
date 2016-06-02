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

Download Enonic XP https://repo.enonic.com/public/com/enonic/xp/distro/${release}/distro-${release}.zip and install according to your setup.
  
.. tip:: Remember to update any startup scripts you might have to launch your new installation given a server restart

3. Configure XP_HOME
*********************

The next step depends on your setup. Do you have your **$XP_HOME** folder outside or inside the **$XP_INSTALL** folder?

**My $XP_HOME is outside the $XP_INSTALL - folder:**  
Make sure the new installation points to the correct $XP_HOME folder

**My $XP_HOME inside the $XP_INSTALL - folder:**  
Copy your $OLD_XP_INSTALL/home folder to the the new $NEW_XP_INSTALL/ (on all nodes)
 

4. Stop the old installation
****************************


5. Start the new installation
*****************************


6. Reindex your data
*****************************

Since there are changes to the index-structure, you will have to reindex your data. Your site will not be available while you do the reindex.
Both branches in ``cms-repo`` and the master branch of ``system-repo`` must be reindexed, and the "-i" index option must be enabled:

:: 

  ./toolbox.sh reindex -a su:password -r cms-repo -b draft,master -i
  ./toolbox.sh reindex -a su:password -r system-repo -b master -i


The reindex is usually processing around 500-1000 contents pr second.


Cluster now defaults to false
-----------------------------

To prevent unintentional forming of cluster when two xp-instances are started on the same machine, the cluster discovery is now turned off by default.
To enable clustering, an option in ``$XP_DISTRO/home/config/com.enonic.xp.elasticsearch.cfg`` must be set:

:: 
 
  node.local = false 

See :ref:`clustering` for more details about configuring clustering.


Content Studio detail panel widgets
-----------------------------------

The widgets displayed in the "Content Studio" detail panel are no longer able to retrieve the selected content using the Javascript library "portal" like a page or a part.

Instead, the widget controller will receive the ID of the selected content as a parameter "contentId".
The controller can then use the Javascript library "content" to retrieve the selected content.
Two new functions have also been added to the Javascript library "content": getSite and getSiteConfig

If you have installed widgets, please install a version compatible with Enonic XP 6.6

If you have developed a widget, please update your code to use the "content" library instead. Below are some examples:
                                                               
.. literalinclude:: code/content-studio-widget-upgrade-1.js
   :language: javascript                                                               
.. literalinclude:: code/content-studio-widget-upgrade-2.js
   :language: javascript                                                               
.. literalinclude:: code/content-studio-widget-upgrade-3.js
   :language: javascript

