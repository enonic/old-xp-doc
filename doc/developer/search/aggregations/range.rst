range
=====

The range aggregation query defines a set of ranges that represents a bucket.
Here's a list of properties:

field (string)
  The property path.

ranges (range[])
  The range-buckets to create.

range (from: number, to: number)
  Defines a range to create a bucket for. From-value is included in bucket, to is excluded.

Here's an example of the range aggregation:

  .. literalinclude:: code/range-query.json
     :language: json

The above example gives the following result:

  .. literalinclude:: code/range-result.json
     :language: json
