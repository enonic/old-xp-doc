.. _events:

Events
======

Events is the publish-subscribe mechanism used by Enonic XP.
Enonic XP or any application can send events or be triggered when a specific type of event is sent.
An event is transmitted to all the matching listeners for the current Enonic XP instance, but can also be distributed to all the nodes of the cluster.

Using the JS library "event", you can make your application listen to core events (an application being started, a node being published, ...).
But you can also define/send/listen your own events to have more loosely coupled components.

Event properties
----------------

All events have the following properties

+------------------+--------+--------------------------------------------------------------------------------+
| Name             | Type   | Description                                                                    |
+==================+========+================================================================================+
| type             | string | Event type.                                                                    |
+------------------+--------+--------------------------------------------------------------------------------+
| timestamp        | long   | Creation time of the event.                                                    |
+------------------+--------+--------------------------------------------------------------------------------+
| distributed      | boolean| True if the event will be distributed. False for non-local event               |
+------------------+--------+--------------------------------------------------------------------------------+
| localOrigin      | boolean| True if the event was created by the current cluster node                      |
+------------------+--------+--------------------------------------------------------------------------------+
| data             | Object | Custom part of an event. Format depending on the event type                    |
+------------------+--------+--------------------------------------------------------------------------------+


Listen to an event type
-----------------------


Build-in event types
--------------------

Built-in event types have been present since the beginning of Enonic XP and exposed through the .
