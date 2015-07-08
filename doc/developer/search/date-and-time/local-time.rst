LocalTime
=========

LocalTime represents a time without time-zone in the ISO-8601 calendar, e.g ``11:39:49``.
LocalTime-properties are stored as a ISO LocalTime-formatted string in the index, thus all searches are done against string-values.

LocalTime string-format::

  HH:mm[:ss[.SSS]]

LocalTime string value examples::

  09:30
  10:00
  10:00:30
  10:00:30.142

Since the queries are matching string-values, the input time in query must either adhere the same string-format restrictions,
or be wrapped in a function ``time`` which accepts a time-formatted string as input.

Given a node with a property named 'myLocalTime' of type ``localTime`` and value = ``09:36:00``, all the following queries will match::

  myLocalTime > '09:00'
  myLocalTime = '09:36'
  myLocalTime = '09:36:00'
  myLocalTime LIKE '09:*'
  myLocalTime < '09:36:01'
  myLocalTime < '09:36:00.1'

This must be wrapped in time-function since its not padded with a leading 0::

  myLocalTime > time('9:00')

If optional fractions of seconds are given, the string format will also contain this even if 0, and expression
will not match unless wrapped in time-function::

  myLocalTime = time('09:36:00.0')

Even if the string-matching will do the job 99% of the time, the safest bet is to always go with
the time-function when applicable.
