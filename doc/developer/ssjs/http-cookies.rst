HTTP Cookies
============

There are two ways that Http Cookie values can be set in responses (see examples).

* If the value is a string (1) then the cookie is created using default settings.
* If the value is an object (2) then it will try to apply the settings. Every field is optional except "value".

Here's an example of how the cookies should be set:

.. literalinclude:: code/cookies.js
    :language: javascript

Settings
--------

Overview of full JS object and the settings can be found here. A full in-depth into how each parameter works can be found in the `Java documentation for Cookies`_. Also, `general knownledge of Cookies`_ and their limitations is adviced.

value (required)
  The value to store in the cookie. The example (2) in the code above would store a cookie looking like this ``complex: value``.

path
  The paths on the site this cookie should be available from (and all containing paths).  
  
  *Default:* ``empty`` - the entire site can read the cookie.
  
domain
  Add additional sites that should be able to read the cookie.  
  
  *Default:* ``empty`` - only the server that creates the cookie can read it.

comment
  A comment describing the cookie.  
  
  *Default:* ``null``.

maxAge
  Number of **seconds** before the browser is allowed to delete the cookie.  
  
  *Default:* ``-1`` - the cookie will live until the browser's main process is stopped (when closing all browser windows, crashing, etc).
  
secure
  Control if the cookie should only be accepted to be created and read over https and similar secure protocols.  

  *Default:* ``false``

httpOnly
  Control if the cookie is available for scripts or not. If `true`, only the serverside code can read the cookie.  
    
  *Default:* ``false`` - also client-side scripts can read the cookie.

.. _Java documentation for Cookies: http://docs.oracle.com/javaee/6/api/javax/servlet/http/Cookie.html
.. _general knownledge of Cookies: https://en.wikipedia.org/wiki/HTTP_cookie
