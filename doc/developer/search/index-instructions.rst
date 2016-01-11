Node Indexing
=============

When nodes are persisted, they will automatically be indexed. If no special indexing instructions are passed with the node, the node will be indexed based on the property types.

Indexing instructions
---------------------

By default, nodes will be indexed using the "type" instruction - using the propertyType to determine how it should be indexed.
Special indexing options may be passed along with the node - forcing special handling of one or more properties. These options are described below:

type (default)
  Indexing is done based on type; e.g numeric values are stored as both string and numeric.

string
  Force indexing as a string-value only, no matter what type of data.

datetime
  Indexed as a datetime-value and string, no matter what type of data. If not able to
  parse value as date-time, no value will be indexed.

numeric
  Indexed as a numeric (double) and string, no matter what type of data. If not able
  to parse value as number, no value will be indexed.

minimal
  Indexed as a string-value only, no matter what type of data.

none
  Value not indexed.

ngram
  nGram-indexed fields are available for search by using the nGram-function. An nGram-analyzed
  field will index all substring values from 2 to 15 characters.

  Consider this value of a property of type ``text-line``::

    "article"

  This is split into the following tokens when analyzed::

    'ar', 'art', 'arti', 'artic', 'articl', 'article'

  For more information about how the nGram-function works, check out
  the nGram-function.

fulltext
  Fulltext-indexed fields are available for search by using the fulltext-function.
  A fulltext-analyzed field will be split into tokens.

  Consider this value of a property of type ``text-line``::

    "This article contains information test-driven development"

  This is split into the following tokens when analyzed::

    'this', 'article', 'contains', 'information', 'about', 'test', 'driven', 'development'

  For more information about how the fulltext-function works, check out the
  fulltext-function.
