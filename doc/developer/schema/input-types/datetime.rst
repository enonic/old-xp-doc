.. _datetime_type:

DateTime
--------

A simple field for dates with time.  A pop-up box with a calendar and time selector allows easy editing.
The format is ``yyyy-MM-dd hh:mm`` for example, ``2015-02-09T09:00``. The date-time could be of type
``local`` (no datetime) or with a timezone. This is done using configuration:

.. literalinclude:: code/datetime.xml
   :language: xml

common fields
  All Input Types have these :ref:`Common Fields <input_types_common_fields>`

timezone
  ``true`` if timezone information should be used. Default is ``false``.

default
    The format for the default date value can be:

    * Combined date and time in ISO 8601 format, with timezone: ``yyyy-MM-ddThh:mm±hh:mm``  (e.g. "2016-12-31T23:59+01:00")
    * Combined date and time in ISO 8601 format, without timezone: ``yyyy-MM-ddThh:mm``  (e.g. "2016-12-31T23:59")
    * Relative datetime expression (e.g. "+1year -12hours")

    Note that the ISO8601 format consists of concatenating a complete date expression, the letter ``T`` as a delimiter, and a valid time expression.

    The timezone offset is a plus or minus sign, followed by an hour offset, followed by a colon, followed by a minute offset.
    A timezone offset of zero can also be represented as 'Z', meaning UTC or Zulu time. It is equivalent to offset `+00:00`.

    A relative date expression is a sequence of one or more datetime offsets.
    An offset consists of: a plus or minus sign, followed by an integer, followed by a date/time unit string (e.g. "+3 days")

    The date unit can be expressed as a singular unit, plural unit, or initial letter:

    +----------+------------+-----+
    | "year"   | "years"    | "y" |
    +----------+------------+-----+
    | "month"  | "months"   | "M" |
    +----------+------------+-----+
    | "week"   | "weeks"    | "w" |
    +----------+------------+-----+
    | "day"    | "days"     | "d" |
    +----------+------------+-----+
    | "hour"   | "hours"    | "h" |
    +----------+------------+-----+
    | "minute" | "minutes"  | "m" |
    +----------+------------+-----+


    An offset can also be the string ``now``, which means current date and time.


Examples:

.. literalinclude:: code/datetime_default.xml
   :language: xml
