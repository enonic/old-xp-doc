lib-content
===========

This library implements JavaScript bindings for standard content-related
functionality. Add the following into your ``build.gradle`` file in the
``dependencies`` section::

  library 'com.enonic.xp:lib-content:6.0.0-RC1'

To use this library in your JavaScript files, you can require the library
like this::

  var contentLib = require('/lib/xp/content')

Below is a list of methods that are implemented in this library.

.. toctree::
   :maxdepth: 1

   api/get
   api/getChildren
   api/query
   api/delete
   api/create
   api/modify
