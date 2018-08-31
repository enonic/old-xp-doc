geoDistance
============

The geoDistance aggregation needs a defined range to split the documents into buckets.
Only documents with properties of type 'GeoPoint' will be considered in the ``geoDistance`` aggregation buckets.

Here's a list of properties:

field (string)
  The property path.

ranges (range[])
  The range-buckets to create.

range (from: number, to: number)
  Defines a range to create a bucket for. From-value is included in bucket, to is excluded.

unit (string)
  The meassurement unit to use for the ranges.  Legal values are either the full
  name or the abbreviation of the following: km (kilometers), m (meters), cm
  (centimeters), mm (millimeters), mi (miles), yd (yards), ft (feet) or nmi
  (nauticalmiles).

origin (lat: number, lon: number)
  The GeoPoint from which the distance is measured.

Here's an example of the range aggregation:

  .. literalinclude:: code/geo-distance-query.json
     :language: json

The above example gives a result with this structure:

  .. literalinclude:: code/geo-distance-result.json
     :language: json

NOTE: At the time of writing, there is only one way of find out which result belongs to which bucket:
By also sorting the result on geoDistance, and matching the order to the number of each bucket.
In a future version, there will easier ways of doing this.
