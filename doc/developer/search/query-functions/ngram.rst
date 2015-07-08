nGram
=====

An n-gram is a sequence of n letters from a string. The nGram-function are used to search for
words or phrases beginning with a given search string. Typically, find-as-you-type searches will use this function.

.. TIP::

  Only fields analyzed as text are considered when applying the ngram-function. This includes,
  as default, all text-based fields in the content-domain.


Syntax
------

.. code-block:: none

  ngram(<field>, <search-string>, <operator>)


Operator
--------

The allowed operators are:

* ``OR`` Matches if any of the words in the search-string matches.
* ``AND`` Matches only if all words in search-string matches.


Examples
--------

Matches if "myField" contains any word beginning with "lev", e.g "Levenshteins Algorithm".

  .. code-block:: sql

    ngram("myField", "lev", "AND")

Matches if "myField" contains words beginning with "lev" and "alg", e.g "Levenshteins Algorithm".

  .. code-block:: sql

    ngram("myField", "lev alg", "AND")

Matches if "myField" contains words beginning with "fish" or "boat", e.g "fishpond" or "boatman".

  .. code-block:: sql

    ngram("myField", "fish boat", "OR")
