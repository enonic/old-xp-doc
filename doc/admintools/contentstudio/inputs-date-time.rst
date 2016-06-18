.. _editing_input_types_dates:

Date and time input types
=========================

.. NOTE::
   This page is under construction. This information is likely incomplete and possibly inaccurate until this notice is removed.

There are three input types for entering dates and times: **Date**, **Time**, and **DateTime**. Each input has a date/time-picker tool.
Values can also be manually typed into the input fields. The input turns red if the value is not a valid format. These inputs can have
default values (set in the application code) and the defaults can even be relative to the date and time that the form item was created.

Date
----

The date input filed allows text to be entered in the format of YYYY-MM-DD. The input block turns red when the date is entered with an
invalid format. The button on the right opens a date-picker tool. Date inputs can be configured to have a default
value. The default date could even be relative to the current date, for example, one month from the time that the content with thie input
was created.

TIme
----

The time can be entered manually in the 24 hour format HH:MM. Invalid entries will turn the input red. A button in the right of the form
will open a time-picker tool for easily selecting the desired time. The input could be configured with a default value.

DateTime
--------

The DateTime input contains both the date and the time. A value can be entered manually in the format "YYYY-MM-DD HH:MM". A date-time picker
tool can be opened with the button on the right side fo the input.

The input can be configured to include the timezone. The timezone will be the same as that of the Enonic installation server and it is not
editable in the data-time picker tool. However, the timezone can be changed by manually entering a date in ISO 8601 format
2016-06-17T12:59+03:00. A default value can be set