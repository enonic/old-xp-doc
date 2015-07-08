DateTime / Instant
==================

DateTime represents a date-time with time-zone in the ISO-8601 calendar, e.g ``2015-03-19T11:39:49+02:00``.
Its possible to query properties of with value-type `DateTime` both as an ISO instant and as ISO dateTime, using the provided
built-in functions ``instant`` and ``dateTime``.

Instant string-format (instant always given in UTC-time)::

  yyyy-MM-ddTHH:mm[:ss[.SSS]Z

Instant string value examples::

  2015-03-19T16:30:20Z
  2015-03-19T16:30:20.123Z

DateTime string-format (`Z` for UTC, else offset in hours and minutes)::

  yyyy-MM-ddTHH:mm[:ss[.SSS](Z|+hh:mm|-hh:mm)

DateTime string value examples::

  2015-03-19T16:30:20Z
  2015-03-19T16:30:20+01:00
  2015-03-19T16:30:20-01:30
  2015-03-19T16:30:20.123-01:30

Given a node with a property named 'myDateTime' of type ``dateTime`` and value ``2015-03-19T10:25:00+02:00``,
all of the following queries will match::

  myDateTime = instant('2015-03-19T08:25:00Z')
  myDateTime = dateTime('2015-03-19T08:25:00Z')
  myDateTime = dateTime('2015-03-19T10:25:00+02:00')
  myDateTime = dateTime('2015-03-19T11:25:00+03:00')
