.. _lib-i18n:

lib-i18n
========

This library implements JavaScript bindings for standard i18n-related
functionality. Add the following into your ``build.gradle`` file in the
``dependencies`` section::

  include 'com.enonic.xp:lib-i18n:6.1.0'

To use this library in your JavaScript files, you can require the library
like this::

  var i18n = require('/lib/xp/i18n')

The methods implemented in this library are listed below.

.. toctree::
   :maxdepth: 1

   api/localize
