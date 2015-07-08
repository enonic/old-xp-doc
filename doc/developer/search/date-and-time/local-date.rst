LocalDate
=========

LocalDate represents a date without time-zone in the ISO-8601 calendar, e.g ``2015-03-19``.
LocalDate-properties are stored as a ISO LocalDate-formatted string in the index, thus all searches are done against string-values.

LocalDate string-format::

  yyyy-MM-dd

Given a node with a property named 'myLocalDate' of type ``localDate`` and value ``2015-03-19``, all of the following queries will match::

  myLocalDate = '2015-03-19'
  myLocalDate > '2015-03-18'
  myLocalDate <= '2015-03-19'
