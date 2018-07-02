.. _geopoint_type:

GeoPoint
--------

Stores a GPS coordinate as two comma-separated decimal numbers.

* The first number must be between -90 and 90, where a negative number
  indicates a location south of equator and a positive is north of the equator.
* The second number must be between -180 and 180, where a negative number indicates
  a location in the western hemisphere and a positive number is a location in the eastern hemisphere.


.. literalinclude:: code/geopoint.xml
   :language: xml

common fields
  All Input Types have these :ref:`Common Fields <input_types_common_fields>`

default
  This element specifies a default string value for the GeoPoint, for example ``51.5,-0.1``.
