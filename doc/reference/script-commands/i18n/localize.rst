.. _script-commands-localize:

i18n.localize
=============

This command localizes a phrase.

key *(string)*
  The property key.

locale *(string)*
  A string-representation of a locale. If the locale is not set, the
  site language is used.

values *(string[])*
  Optional placeholder values.

Example:

.. literalinclude:: code/localize.js
   :language: javascript
