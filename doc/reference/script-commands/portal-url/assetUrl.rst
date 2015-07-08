.. _script-commands-assetUrl:

portal.assetUrl
===============

This command generates a URL pointing to a static file.

Arguments:

path *(string)*
  Path to the asset.

module *(string)*
  Other module to reference to. Defaults to current module.

params *(object)*
  Custom parameters to append to the url.

Example use in controller:

.. literalinclude:: code/assetUrl.js
   :language: javascript
