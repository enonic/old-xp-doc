.. _main_initializer:

Main Initializer
================

When an application starts it can trigger some code. If you add a ``main.js`` file to the root of your application
(``/src/main/resources/``) this file is executed when the application starts. Here it's possible to add various initialization code or
add event listeners to listen for events.

Simple example:

.. literalinclude:: code/main-1.js
    :language: javascript

Running code on stop:

.. literalinclude:: code/main-2.js
    :language: javascript
