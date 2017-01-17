.. _input_types_numbers:

Numbers and GeoPoint input types
================================

There are three input types for entering dates and times: **Date**, **Time**, and **DateTime**. Each input has a date/time-picker tool.
Values can also be manually typed into the input fields. The input turns red if the value is not a valid format. These inputs can have
default values (set in the application code) and the defaults can even be relative to the date and time that the form item was created.

.. image:: images/inputs-numbers.jpg

TextLine with RegExp
--------------------

A TextLine input can be configured with a regular expression in the application code to allow only numbers.

Double
------

A double is a number with a decimal point.

Long
----

A long is a large number. The maximum value that can be entered as a long is 8999999999999999.

GeoPoint
--------

A Geo Point stores geographical coordinates with the latitude and longitude separated by a comma.