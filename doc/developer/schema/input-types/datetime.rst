.. _datetime_type:

DateTime
--------

A simple field for dates with time.  A pop-up box with a calendar and time selector allows easy editing.
The format is ``yyyy-MM-dd hh:mm`` for example, ``2015-02-09T09:00``. The date-time could be of type
``local`` (no datetime) or with a timezone. This is done using configuration:

.. literalinclude:: code/datetime.xml
   :language: xml

timezone
  ``true`` if timezone information should be used. Default is ``false``.
