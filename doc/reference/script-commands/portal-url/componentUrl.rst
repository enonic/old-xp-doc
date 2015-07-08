.. _script-commands-componentUrl:

portal.componentUrl
===================

This command generates a URL pointing to a component.

Arguments:

id *(string)*
  Id to the page.

path *(string)*
  Path to the page.

component *(string)*
  Path to the component. If not set, the current path is set.

params *(object)*
  Custom parameters to append to the url.

Example:

.. literalinclude:: code/componentUrl.js
  :language: javascript
