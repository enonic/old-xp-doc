.. _libs-portal:

lib-portal
==========

This library implements JavaScript bindings for portal related functions
Add the following into your ``build.gradle`` file in the
``dependencies`` section::

  library 'com.enonic.xp:lib-portal:6.0.0-M1'

To use this library in your JavaScript files, you can require the library
like this::

  var portalLib = require('/lib/xp/portal')

Below is a list of methods that's implemented in this library.

.. toctree::
   :maxdepth: 1

   api/assetUrl
   api/attachmentUrl
   api/componentUrl
   api/imageUrl
   api/pageUrl
   api/serviceUrl
   api/processHtml
   api/getComponent
   api/getContent
   api/getSite
   api/getSiteConfig
