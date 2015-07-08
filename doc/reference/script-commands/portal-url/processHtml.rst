.. _script-commands-processHtml:

portal.processHtml
==================

This command replaces abstract internal links contained in an HTML
text by generated URLs.

Argument:

value *(string)*
  Html value string to process.

Example use in controller:

.. literalinclude:: code/processHtml.js
   :language: javascript

Result:

.. literalinclude:: code/processHtml-result.html
   :language: html
