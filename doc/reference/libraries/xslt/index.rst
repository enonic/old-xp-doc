.. _lib-xslt:

lib-xslt
========

This library implements JavaScript bindings for XSLT template
processing. Add the following into your ``build.gradle`` file in the
``dependencies`` section::

  library 'com.enonic.xp:lib-xslt:6.0.0-M1'

To use this library in your JavaScript files, you can require the library
like this::

  var xsltLib = require('/lib/xp/xslt')

XSLT also supports a set of :ref:`view-functions`.
Below is a list of methods that's implemented in this library.

.. toctree::
   :maxdepth: 1

   api/render
