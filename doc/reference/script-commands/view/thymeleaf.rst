.. _script-commands-thymeleaf:

thymeleaf.render
================

This command renders a view using thymeleaf.

Arguments:

view *(string)*
  Location of the view. Use ``resolve(..)`` to resolve a view.

model *(object)*
  Model that is passed to the view.

Example:

.. literalinclude:: code/thymeleaf.js
  :language: javascript
