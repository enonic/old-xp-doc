.. _script-commands-imageUrl:

portal.imageUrl
===============

This command generates a URL pointing to an image.

Arguments:

path *(string)*
  Path to the asset.

module *(string)*
  Other module to reference to.  Default is current module.

params *(object)*
  Custom parameters to append to the url.

Example use in controller:

.. literalinclude:: code/imageUrl.js
  :language: javascript
