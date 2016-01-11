Resolving locale
================

A locale is composed of language, country and variant. Language is required, country and variant are optional.

The string-representation of a locale is::

  LA[_CO][_VA]

where

* ``LA`` = two letter language-code
* ``CO`` = two letter country-code
* ``VA`` = two letter variant-code.

The variant argument is a vendor or browser-specific code. For example; WIN for Windows, MAC for Macintosh, and POSIX
for POSIX. Where there are two variants, separate them with an underscore, and put the most important one first. For
example, a Traditional Spanish collation might construct a locale with parameters for language, country and variant as:
"es", "ES", "Traditional_WIN".

When a localize function is called upon, a locale is resolved to decide which localization to use.

The following is considered, in this order:

* Given as argument to function
* Language specified on site
