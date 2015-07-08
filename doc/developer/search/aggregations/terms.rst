terms
=====

The 'terms' aggergation places documents into bucket based on property values. Each unique value of a property will
get its own bucket. Here's a list of properties:

field (string)
  The property path.

size (int)
  The number of bucket to return, ordered by the given orderType and orderDirection. Default to ``10``.

order (string)
  How to order the results, type and direction. Default to ``_term ASC``.

  Types:

  * ``_term``: Alphabetic ordering of bucket keys.
  * ``_count``: Numeric ordering of number of document in buckets.

Here's an example of the terms aggregation:

  .. literalinclude:: code/terms-query.json
     :language: json

The above example gives the following result:

  .. literalinclude:: code/terms-result.json
     :language: json
