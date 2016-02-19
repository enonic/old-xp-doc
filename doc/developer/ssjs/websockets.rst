.. _websockets:

Websockets
==========

.. WARNING::
  Websocket support is experimental.

Websocket support allows a service to act as a websocket channel that
you can connect to from a web-browser.

First, you will need to implement a ``get`` method to handle initialization
of the websocket.

.. literalinclude:: code/websockets-1.js
    :language: javascript

Next is to create a websocket event handler shown in the next example. This
will be called for every websocket events from a client.

.. literalinclude:: code/websockets-2.js
    :language: javascript

To create a simple chat you will need to use ``lib-websocket`` to be able
to send messages back and add/remove clients in groups. Adding to groups
allows for multicast message sending.

.. literalinclude:: code/websockets-3.js
    :language: javascript
