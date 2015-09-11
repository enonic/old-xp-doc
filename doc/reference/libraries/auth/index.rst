.. _lib-auth:

lib-auth
========

This library implements methods for authentication. Add the following
into your ``build.gradle`` file in the ``dependencies`` section::

  library 'com.enonic.xp:lib-auth:6.1.0'

To use this library in your JavaScript files, you can require the library
like this::

  var auth = require('/lib/xp/auth')

The methods implemented in this library are listed below.

.. toctree::
   :maxdepth: 1

   login
   logout
   getUser
   hasRole
