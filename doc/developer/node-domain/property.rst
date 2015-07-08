.. _node-domain-property:

Property
========

Properties represent a placement of data in a node - following the simple
``key = value`` pattern. A property has a path. Elements in the path are separated by ``.`` (dot).
Every property has also a type. See the complete list of :ref:`node-domain-value-types`.

.. code-block:: none

  myProperty
  data.myProperty
  cars.brands.skoda

For a property to be able to hold other properties, it has to be of type ``Set``.
In the above samples, ``data``, ``cars`` and ``brands`` are properties of type ``Set``.

Some characters are illegal in a property key. Here's a list of illegal characters:

* ``_`` is illegal as the first character, because it is a reserved prefix for :ref:`node-domain-system-properties`.
* ``.`` is illegal as any character, since it is the path separator.
* ``[`` and ``]`` are also illegal as any character.  These are used as array index indicators.

Here's an example of some properties:

.. code-block:: none

  first-name = "Thomas"
  cities = ["Oslo", "San Francisco"]
  city.location = geoPoint('37.785146,-122.39758')
  person.age = 39
  person.birth-date = localDate("1975-17-10")
