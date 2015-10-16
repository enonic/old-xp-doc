.. _cookies:

Cookies
=======

Http Cookie values can be set in responses using two different ways.

* If the value is just a string, then the cookie is created using default settings.
* If the value is an object, then it will try to set the settings. Every field is optional except value.

Here's an example of how the cookies should be set:

.. literalinclude:: code/cookies.js
   :language: javascript
