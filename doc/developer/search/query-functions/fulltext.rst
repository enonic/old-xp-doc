fulltext
========

The fulltext function is searching for words in a field, and calculates relevance scores
for matches based on a set of rules (e.g number of occurences, field-length).

.. TIP::
  Only fields analyzed as text are considered when applying the fulltext-function. This includes,
  as default, all text-based fields in the content-domain.

Syntax
------

.. code-block:: none

  fulltext(<fields>, <search-string>, <operator>)

Fields
------

Fields is a string containing a comma-separated list of fields to include in the search.
Wildcards are supported in field-names.

Some valid string values for "fields" are:

  .. code-block:: javascript

    'displayName' // Search in single field
    'displayName,data.description,data.title' // Search in multiple fields
    'data.*' // Wildcard usage

Note that "data." domain is used to access custom fields from custom content types. Default fields, like displayName, are directly available at the top level (without the "data." prepended).

You can boost  - thus increasing or decreasing hit-score pr field basis - if providing
more than one field to the query by appending a weight-factor: ``^N``::

  fulltext('displayName^5,data.description', 'my search string', 'AND')

Operator
--------

The allowed operators are:

* ``OR`` Matches if any of the words in the search-string matches.
* ``AND`` Matches only if all words in search-string matches.

Search-string syntax
--------------------

The search-string supports a set of operator:

* ``+`` signifies AND operation.
* ``|`` signifies OR operation.
* ``-`` negates a single token.
* ``*`` at the end of a term signifies a prefix query.
* ``(`` and ``)`` signify precedence.
* ``~N`` after a word signifies edit distance (fuzziness) with a number representing `Levenshtein distance`_.
* ``~N`` after a phrase signifies slop amount.

.. _Levenshtein distance: http://en.wikipedia.org/wiki/Levenshtein_distance


Examples
--------

Match if "myField" contains any of the given words.

  .. code-block:: sql

    fulltext("myField", "cheese fish cake onion", "OR")

Match if any field with path starting with "myData.myProperties" contains any of the given words.

  .. code-block:: sql

    fulltext("myData.myProperties.*", "cheese fish cake onion", "OR")

Match if "myField" contains any of the given words and "myCategory" = "soup".

  .. code-block:: sql

    myCategory = "'soup" AND fulltext("myField", "cheese fish cake onion", "OR")

Match if "myField" contains all the given words.

  .. code-block:: sql

    fulltext("myField", "cheese fish cake onion", "AND")

Match if "myField" contains "Levenshtein" with a fuzziness distance of 2.

  .. code-block:: sql

    fulltext("myField", "Levenshtein~2", "AND")

Match if "myField" contains "fish" and not "boat".

  .. code-block:: sql

    fulltext("myField", "fish -boat", "AND")

Match if any field under data-set data contains "fish" and not "boat".

  .. code-block:: sql

    fulltext("data.*", "fish -boat", "AND")
