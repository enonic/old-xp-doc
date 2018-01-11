Indexing
========

When nodes are persisted, the node properties will automatically be indexed and available for queries. A value is indexed based on an 'Index Instruction'. This instruction decides what value types a property value will be indexed into.

By default, values will be indexed by "type", meaning that string-values will be indexed as 'fulltext', other as 'string' + value-type (e.g numeric and string for properties of type Double)

Index value-types
-----------------

A single value can be indexed as several different types, based on the Index instructions and the type of value.

string
  The string-representation of a value. All indexed values are indexed as string, this is the minimal base.

numeric
  A double-representation of value.

datetime
  A date-time representation of a value

ngram
    nGram-indexed fields are available for search by using the nGram-function. An nGram-analyzed
    field will index all substring values from 2 to 15 characters.

    Consider this value of a property of type ``text-line``::

        "article"

    This is split into the following tokens when analyzed::

        'ar', 'art', 'arti', 'artic', 'articl', 'article'

    For more information about how the nGram-function works, check out the nGram-function.

analyzed
    Analyzed fields are available for search by using the fulltext-function.
    An analyzed field will be split into tokens.

    Consider this value of a property of type ``text-line``::

        "This article contains information test-driven development"

    This is split into the following tokens when analyzed::

			'this', 'article', 'contains', 'information', 'about', 'test', 'driven', 'development'

    For more information about how the fulltext-function works, check out the fulltext-function.

paths
		The path-elements (separated by default path-separator '/') are indexed as tokens.

A value will only be indexed as the applicable types, e.g only numeric values will be stored with a numeric representation.

.. NOTE::

	Internally, the different value-types are indexed as e.g ``myValue._numeric``, ``myValue._ngram``, ``myValue._analyzed`` etc.

	The different values are then used based on the context, e.g when using the ngram-query function, only values with the ._ngram-prefix will be queried, meaning that a value that is not indexed as "ngram" will not be included in the result.

	This context is applied behind the scenes, and the only thing to consider for users are how the data is indexed.


Indexing instructions
---------------------

By default, nodes will be indexed using the "type" instruction - using the propertyType to determine how it should be indexed.
Special indexing options may be passed along with the node (e.g in the Node API) - forcing special handling of one or more properties. These options are described below:

type (default)
  Indexing is done based on type; e.g numeric values are indexed as both string and numeric.

minimal
  Value is indexed as a string-value only, no matter what type of data.

none
  Value is not indexed.

fulltext
  Values are stored as 'ngram', 'analyzed' and also added to the _allText-field

path
	Values are stored as 'path' type and applicable for the pathMatch-function
