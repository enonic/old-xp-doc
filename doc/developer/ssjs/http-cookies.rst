HTTP Cookies
============

There are two ways that Http Cookie values can be set in responses.

* If the value is a string then the cookie is created using default settings.
* If the value is an object then it will try to apply the settings. Every field is optional except "value".

Here's an example of how the cookies should be set:

.. literalinclude:: code/cookies.js
    :language: javascript
