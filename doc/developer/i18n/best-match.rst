Finding best match
==================

When localizing a keyword, a best match pattern will be applied to the resource bundle to select the localized phrase.
If the locale for a request is resolved to "en-US", these files will be considered in given order:

* ``phrases_en_US.properties``
* ``phrases_en.properties``
* ``phrases.properties``

If the locale for a request would have been resolved to ``en``, the ``phrases_en_US.properties`` file would not have been
considered when localizing a keyword.

If the locale does not match a specific file, the default ``phrases.properties`` will be used.

If no matching localization key is found in any of the files in a bundle, a default ``NOT_TRANSLATED`` will be displayed.
