assetUrl
========

This function generates a URL pointing to a static file.

.. js:function:: assetUrl(params)

  :param object params: Input parameters.
  :returns: the generated URL.

**Parameters:**

path *(string)*
  Path to the asset.

module *(string)*
  Other module to reference to. Defaults to current module.

params *(object)*
  Custom parameters to append to the url.

**Example:**

.. literalinclude:: code/assetUrl.js
   :language: javascript
