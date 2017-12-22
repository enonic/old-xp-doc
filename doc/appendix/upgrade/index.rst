.. _upgrade_notes:

Upgrade notes - |version|
=========================

.. note:: This documentation describes upgrading from 6.12.x to |version|.

Notable changes
---------------

Fixes to event JS library may break compatibility
*************************************************

There was a bug in XP that made that `event-lib`_ return event data serialized in the wrong format.
What should have been a JSON object was instead a string that looked almost like JSON, but it was not.

The issue has been fixed in this release and the events are now properly formatted as JSON.
But some 3rd party applications and libraries that tried to work around the issue, by parsing the string, might break now.
If you are using `event-lib`_, we recommend to test and verify that everything still works as expected.

This is an example of how the event was serialized in previous versions. The data is from a node event:

.. literalinclude:: code/event_old.json
 :language: json

And this is how it is serialized in 6.13, after the fix:

.. literalinclude:: code/event_new.json
 :language: json

.. _event-lib: http://repo.enonic.com/public/com/enonic/xp/docs/${release}/docs-${release}-libdoc.zip!/module-event.html


Reindexing of pages, parts, layouts and x-data
******************************************

As of |version|, content values in x-data, page-, and component-configs are now indexed "by type", meaning that string-values are automatically fulltext indexed.
Also, html-areas in these configs are now properly stripped for html-tags when indexed as fulltext / n-gram.

Content created with earlier versions of XP does not have the same index settings.
Since the index-configuration of a content is stored within each content version,
each content must be updated (edit and save) to make the new index-values available.

Simply running a reindex will not change the index definitions.

New default cluster settings
****************************

.. note:: This change is only relevant for particular cluster deployments of XP, where multiple nodes are running within the same server (OS/VM).

We have seen incidents where multiple XP instances have been started on the same machine, by accident creating a cluster.
To prevent this, the default cluster settings have been changed to use a specified port rather than a port range.

The cluster settings are available in the config-file: ``com.enonic.xp.elasticsearch.cfg``

As if |version|, if you still want to run more than one instance on the same machine, the setting ``transport.tcp.port`` must be set to a port range, e.g ``9300-9302``

*Changed settings (com.enonic.xp.elasticsearch.cfg):*


``transport.tcp.port``
 * Previous default value: ``9300-9400``
 * New default value: ``9300``

``discovery.zen.ping.unicast.hosts``
 * Previous default value: ``127.0.0.1``
 * New default value: ``127.0.0.1[9300]``



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
