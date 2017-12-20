Release Notes
=============

Enonic XP |version| is a minor release with exciting new features, improvements and fixes.


Stricter default cluster settings
---------------------------------

There has been incidents where several instances of XP has been started on the same machine and by accident creating a cluster.
The default settings has now been changed to prevent this, also meaning that local machine cluster members must be explicitly configured.
The cluster settings are available in the config-file: ``com.enonic.xp.elasticsearch.cfg``
To allow more than one instance running on the same machine, the setting ``transport.tcp.port`` must be set to a port range, e.g ``9300-9302``

*Changed settings (com.enonic.xp.elasticsearch.cfg):*


``transport.tcp.port``
 * Previous default value: ``9300-9400``
 * New default value: ``9300``

``discovery.zen.ping.unicast.hosts``
 * Previous default value: ``127.0.0.1``
 * New default value: ``127.0.0.1[9300]``

Changes in event formatting
---------------------------

There was a bug in XP that made that `event-lib`_ returned event data serialized in the wrong format.
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

Changelog
---------
For a complete list of changes and bugfixes see http://github.com/enonic/xp/releases/tag/v6.13.0
