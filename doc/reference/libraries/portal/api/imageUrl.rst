imageUrl
========

This function generates a URL pointing to an image.

.. js:function:: imageUrl(params)

  :param object params: Input parameters.
  :returns: the generated URL.

**Parameters:**

id *(string)*
  ID of the image content.

scale *(string)*
  Required. Options are width(px), height(px), block(width,height) and square(px). See the :ref:`reference-image-scaling` page for more
  information.

filter *(string)*
  A number of filters are available to alter the image appearance, for example, blur(3), grayscale(), rounded(5), etc. All filter options
  are listed on the :ref:`reference-image-styling` page.

type *(string)*
  URL type. Either "server" (server-relative URL) or "absolute". Default is "server"

params *(object)*
  Custom parameters to append to the url.

**Example:**

.. literalinclude:: code/imageUrl.js
  :language: javascript
