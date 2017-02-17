.. _time_type:

Time
----

A simple field for time.  A pop-up box allows simple selection of a certain time.
The default format is ``hh:mm``.

.. literalinclude:: code/time.xml
   :language: xml

common fields
  All Input Types have these :ref:`Common Fields <input_types_common_fields>`

default
   The format for the default time value can be:

   * Time in 24h format: ``hh:mm``  (e.g. "23:59")
   * Relative time expression (e.g. "+1hour -12minutes")

   A relative time expression is a sequence of one or more time offsets.
   An offset consists of: a plus or minus sign, followed by an integer, followed by a time unit string (e.g. "+3 minutes")

   The time unit can be expressed as a singular unit, plural unit, or initial letter:

   +----------+------------+-----+
   | "hour"   | "hours"    | "h" |
   +----------+------------+-----+
   | "minute" | "minutes"  | "m" |
   +----------+------------+-----+

   An offset can also be the string ``now``, which means current time.