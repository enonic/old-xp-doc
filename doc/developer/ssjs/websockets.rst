.. _websockets:

Websockets
==========

.. WARNING::
  Websocket support is experimental.

Websocket support allows a service to act as a websocket channel that
you can connect to from a web-browser.

A ``get`` method must be implemented to handle initialization
of the websocket.

.. literalinclude:: code/websockets-1.js
    :language: javascript

A websocket event handler named ``webSocketEvent`` is required. It will be called for every websocket event from a client. See example below.

.. literalinclude:: code/websockets-2.js
    :language: javascript

Below is an example of a simple chat. A library called ``lib-websocket`` has functions for sending messages back and adding/removing clients
in groups. Adding to groups allows for multicast message sending.

.. literalinclude:: code/websockets-3.js
    :language: javascript
