date_range
==========

The date_range aggregation query defines a set of date-ranges that represents a bucket. Only
documents with properties of type 'DateTime' will considered in the ``date_range`` aggregation buckets.
Here's a list of properties:

field (string)
  The property path.

format (string)
  The date-format of which the buckets will be formatted to on return. Default to ``YYYY-MM-DDThh:mm:ssTZD``.

ranges (range[])
  The range-buckets to create.

range (from: number, to: number)
  Defines a range to create a bucket for. From-value is included in bucket, to is excluded. The
  from and to follows a special date-math explained below.

Here's an example of the date_range aggregation:

  .. literalinclude:: code/date-range-query.json
     :language: json

The above example gives a result with this structure:

  .. literalinclude:: code/date-range-result.json
     :language: json


Date-math expression
--------------------

The range fields accepts a date-math expression to calculate the time-spans.

Now minus a day::

  now-1d

The given date minus 3 days plus one minute::

  2014-12-10T10:00:00Z||-3h+1m

Range describing now plus one day and thirty minutes, rounded to minutes::

  now+1d+30m/m
