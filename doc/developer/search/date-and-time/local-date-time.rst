LocalDateTime
=============

LocalDateTime represents a date-time without time-zone in the ISO-8601 calendar, e.g ``2015-03-19T11:39:49``.
LocalDateTime-properties are stored as a ISO LocalDateTime-formatted string in the index, thus all searches are done against string-values.

LocalDateTime string-format::

  yyyy-MM-ddTHH:mm[:ss[.SSS]]

Since the queries are matching string-values, the input dateTime in query must either adhere the same string-format restrictions,
or be wrapped in a function ``dateTime`` which accepts a dateTime-formatted string as input.

Given a node with a property named 'myLocalDateTime' of type ``localDateTime`` and value ``2015-03-19T10:30:00``, all of the following queries will match::

  myLocalDateTime = '2015-03-19T10:30:00'
  myLocalDateTime = dateTime('2015-03-19T10:30')
  myLocalDateTime < dateTime('2015-03-19T10:30:00.001')
