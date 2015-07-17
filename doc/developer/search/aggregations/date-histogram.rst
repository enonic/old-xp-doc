date_histogram
==============

The date-histogram aggregation query defines a set of bucket based on a given time-unit. For instance,
if querying a set of log-events,  a ``date_historgram`` aggregations query with interval ``h`` (hour) will divide each log
event into a bucket for each hour in the time-span of the matching events. Here's a list of properties:

field (string)
  The property path.

interval (string)
  The time-unit interval for creating bucket. Supported time-unit notations:

  * ``y`` = Year
  * ``M`` = Month
  * ``w`` = Week
  * ``d`` = Day
  * ``h`` = Hour
  * ``m`` = Minute
  * ``s`` = Second

format (string)
  Output format of date string.

minDocCount (int)
  Only include bucket in result if number of hits <= ``minDocCount``.

Here's an example of the date_histogram aggregation:

  .. literalinclude:: code/date-histogram-query.json
     :language: json

The above example gives a result with this structure:

  .. literalinclude:: code/date-histogram-result.json
     :language: json
