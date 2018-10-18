.. _events:

Events
======

Events is the publish-subscribe mechanism used by Enonic XP.
It allows Enonic XP or any application to send events and be triggered when a specific type of event is sent.
These events are distributed in the current Enonic XP instance but can also be propagated to the entire Enonic XP cluster.

With Enonic XP 6.9 came the Javascript library "event" allowing your application to be triggered on core events (an application being started, a node being published, ...).
But also to define/send/listen your own events to have a more loosely coupled components.

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
| distributed      | boolean| TBD                                                                            |
+------------------+--------+--------------------------------------------------------------------------------+
| localOrigin      | boolean| TBD                                                                            |
+------------------+--------+--------------------------------------------------------------------------------+
| data             | Object | Custom part of an event. Format depending on the event type                    |
+------------------+--------+--------------------------------------------------------------------------------+


Listen to an event type
-----------------------


Build-in event types
--------------------

Built-in event types have been present since the beginning of Enonic XP and exposed through the .
