.. _input_types_numbers:

Numbers and GeoPoint input types
================================

There are four ways to input numeric data.  **Double** and **Long** ensures the data is treated as numeric on the back-end as well.
**GeoPoint** is a very special input type for registering a Geo Point world coordinate.
All of these input types have validation rules to ensure correct input.

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