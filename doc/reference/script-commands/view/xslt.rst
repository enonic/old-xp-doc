.. _script-commands-xslt:

xslt.render
===========

This command renders a view using XSLT.

Arguments:

view *(string)*
  Location of the view. Use ``resolve(..)`` to resolve a view.

model *(object)*
  Model that is passed to the view. This model is converted to XML.

Example:

.. literalinclude:: code/xslt.js
  :language: javascript
