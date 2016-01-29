.. _node-domain-value-types:

Value Types
===========

At the core of the node domain are value types. Every property to be stored in a node must have a value type.
The value type enables the system to interpret and handle each piece of data specially - applying to both validation and indexing.

All value-types support arrays of values. All elements in an array must be of the same
value-type.

Below is a complete list of all supported value-types.

String
  A character string.

  Index value-type
    ``String``

  Example
    ``'myString'``

BinaryReference
  Reference to a binary object.

  Index value-type
    ``String``

  Example
    ``'my-binary-ref'``

Boolean
  A value representing ``true`` or ``false``.

  Index value-type
    ``String``

  Example
    ``true``

Double
  Double-precision 64-bit IEEE 754 floating point.

  Index value-type
    ``Double``

  Example
    ``11.5``


GeoPoint
  Represents a geographical point, given in latitude and longitude.

  Index value-type
    ``GeoPoint``

  Example
    ``'59.9090442,10.7423389'``

Instant
  A single point on the time-line.

  Index value-type
    ``Instant``

  Example
    ``2015-03-16T10:00:02Z``

LocalTime
  A time representation without timezone.

  Index value-type
    ``String``

  Example
    ``10:00:03``

LocalDateTime
  A date-time representation without timezone.

  Index value-type
    ``String``

  Example
    ``2015-03-16T10:00:02``

Long
  64-bit two's complement integer.

  Index value-type
    ``Double``

  Example
    ``1234``

Reference
  Holds a reference to other nodes in the same repository.

  Index value-type
    ``String``

  Example
    ``'0b7f7720-6ab1-4a37-8edc-731b7e4f439e'``

Set
  A special value type that holds properties as it's value, allowing
  nested levels of properties, creating tree structures within a single node.

  Index value-type
    N/A


XML
  Accepts a String containing valid XML.

  Index value-type
    ``String``

  Example
    ``'<property>myPropertyValue</property>'``
