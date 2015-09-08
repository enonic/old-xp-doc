.. _lib-thymeleaf:

lib-thymeleaf
=============

This library implements JavaScript bindings for Thymeleaf template
processing. Add the following into your ``build.gradle`` file in the
``dependencies`` section::

  library 'com.enonic.xp:lib-thymeleaf:6.0.0'

To use this library in your JavaScript files, you can require the library
like this::

  var thymeleaf = require('/lib/xp/thymeleaf')

Thymeleaf also supports a set of :ref:`view-functions`. 
The methods implemented in this library are listed below.

.. toctree::
   :maxdepth: 1

   api/render
