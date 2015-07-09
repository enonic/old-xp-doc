.. _lib-thymeleaf:

lib-thymeleaf
=============

This library implements JavaScript bindings for Thymeleaf template
processing. Add the following into your ``build.gradle`` file in the
``dependencies`` section::

  library 'com.enonic.xp:lib-thymeleaf:6.0.0-SNAPSHOT'

To use this library in your JavaScript files, you can require the library
like this::

  var lib = require('/lib/xp/thymeleaf')

Thymeleaf also supports a set of :ref:`view-functions`. 
Below is a list of methods that's implemented in this library.

.. toctree::
   :maxdepth: 1

   api/render
