stats
=====

The stats-aggregations calculates the following statistics for the parent-aggregation buckets:

* avg
* min
* max
* count
* sum

Here's a list of properties:

field (string)
  The property path.

Here's an example of the stats aggregation:

  .. literalinclude:: code/stats-query.json
     :language: json

The above example gives the following result:

  .. literalinclude:: code/stats-result.json
     :language: json
