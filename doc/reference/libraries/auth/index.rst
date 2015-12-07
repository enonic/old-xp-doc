.. _lib-auth:

lib-auth
========

This library implements methods for dealing with authentication and the currently authenticated user. Add the following
into your ``build.gradle`` file in the ``dependencies`` section::

  include 'com.enonic.xp:lib-auth:6.2.0'

To use this library in your JavaScript files, you can require the library
like this::

  var auth = require('/lib/xp/auth');

The methods implemented in this library are listed below.

.. toctree::
   :maxdepth: 1

   api/addMembers
   api/changePassword
   api/createGroup
   api/createUser
   api/findPrincipals
   api/generatePassword
   api/getMembers
   api/getMemberships
   api/getPrincipal
   api/getUser
   api/hasRole
   api/login
   api/logout
   api/modifyGroup
   api/modifyUser
   api/removeMembers
