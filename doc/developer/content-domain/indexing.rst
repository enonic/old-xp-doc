Content Indexing
================

All content is indexed when stored. The properties of a content are indexed
based on a set of rules:

* _id = string
* _name = fulltext
* _parent = string
* attachment = string
* displayName = fulltext
* contentType = string
* creator = string
* createdTime = datetime
* data = type
* x = type
* form = none
* language = string
* modifiedTime = datetime
* owner = string
* page = minimal
* page.regions = none
* site = none
* thumbnail = none
* type = string


Rules
-----

When storing a content, the properties are indexed based on a set of rules:

string
  Indexed as a string-value only, no matter what type of data.

datetime
  Indexed as a datetime-value and string, no matter what type of data. If not able to
  parse value as date-time, no value will be indexed.

numeric
  Indexed as a numeric (double) and string, no matter what type of data. If not able
  to parse value as number, no value will be indexed.

minimal
  Indexed as a string-value only, no matter what type of data.

type
  Indexing is done based on type; e.g numeric values are stored as both string and numeric.

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
