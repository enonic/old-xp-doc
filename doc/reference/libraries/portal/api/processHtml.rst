processHtml
===========

This function replaces abstract internal links contained in an HTML
text by generated URLs.

.. js:function:: processHtml(params)

  :param object params: Input parameters.
  :returns: the processed HTML.

**Parameters:**

value *(string)*
  Html value string to process.

type *(string)*
  URL type. Either "server" (server-relative URL) or "absolute". Default is "server"

**Example**:

.. literalinclude:: code/processHtml.js
   :language: javascript

**Result:**

.. literalinclude:: code/processHtml-result.html
   :language: html
