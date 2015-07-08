geoDistance
===========

The geoDistance-function enables you to order the results according to distance
to a given geo-point.

.. TIP::
  Documents with no geo-point property with the given path will be ordered
  last if matching the query.


Syntax
------

.. code-block:: none

  geoDistance(<field>, <location>)


Field
  Field-argument accepts a path to a property containing geoPoint data.

Location
  The location is a geoPoint from which the distance factor should be calculated,
  formatted as "latitude,longitude".


Examples
--------

Order by distance from "shopLocation" to the fixed location.

  .. code-block:: sql

    ORDER BY geoDistance("shopLocation", "59.9127300,10.7460900")
