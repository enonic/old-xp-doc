.. _script-commands-mustache:

mustache.render
===============

This command renders a view using mustache.

Arguments:

view *(string)*
  Location of the view. Use ``resolve(..)`` to resolve a view.

model *(object)*
  Model that is passed to the view.

Example:

.. literalinclude:: code/mustache.js
  :language: javascript
