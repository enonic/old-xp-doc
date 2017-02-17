.. _date_type:

Date
----

A simple field for dates with a calendar pop-up box in the admin console.
The default format is ``yyyy-MM-dd``.

.. literalinclude:: code/date.xml
   :language: xml

common fields
  All Input Types have these :ref:`Common Fields <input_types_common_fields>`

default
    The format for the default date value can be:

    * Date in ISO 8601 format: ``yyyy-MM-dd``  (e.g. "2016-12-31")
    * Relative date expression (e.g. "+1year -12days")

    A relative date expression is a sequence of one or more date offsets.
    An offset consists of: a plus or minus sign, followed by an integer, followed by a date unit string (e.g. "+3 days")

    The date unit can be expressed as a singular unit, plural unit, or initial letter:

    +--------+---------+-----+
    | "year" | "years" | "y" |
    +--------+---------+-----+
    | "month"| "months"| "M" |
    +--------+---------+-----+
    | "week" | "weeks" | "w" |
    +--------+---------+-----+
    | "day"  | "days"  | "d" |
    +--------+---------+-----+

    An offset can also be the string ``now``, which means current date.