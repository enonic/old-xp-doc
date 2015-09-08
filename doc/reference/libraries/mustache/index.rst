.. _lib-mustache:

lib-mustache
============

This library implements JavaScript bindings for Mustache template
processing. Add the following into your ``build.gradle`` file in the
``dependencies`` section::

  library 'com.enonic.xp:lib-mustache:6.1.0'

To use this library in your JavaScript files, you can require the library
like this::

  var mustache = require('/lib/xp/mustache')

The methods implemented in this library are listed below.

.. toctree::
   :maxdepth: 1

   api/render
