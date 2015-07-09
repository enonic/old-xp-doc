.. _lib-i18n:

lib-i18n
========

This library implements JavaScript bindings for standard i18n-related
functionality. Add the following into your ``build.gradle`` file in the
``dependencies`` section::

  library 'com.enonic.xp:lib-i18n:6.0.0-SNAPSHOT'

To use this library in your JavaScript files, you can require the library
like this::

  var lib = require('/lib/xp/i18n')

Below is a list of methods that's implemented in this library.

.. toctree::
   :maxdepth: 1

   api/localize
