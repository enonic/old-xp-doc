Input Types
===========

Each input type holds a specific type of data.  A general input type is defined like this:

.. literalinclude:: code/input-type.xml
   :language: xml

@name
  The ``name`` attribute is the technical name used in templates and result
  sets to refer to this value.

@type
  The type refers to one of the many input types which are explained below.

label
  The label text will become the label for the input field in the editable form of
  the admin console.

immutable
  Immutable is not implemented yet.  Setting this value to ``true`` will cause the value
  in such a field to become a constant when it is implemented.

indexed
  Indexed in not currently in use either.  Thought to indicate if
  the value should be indexed so it may be searchable, but will most likely be removed.

occurrences
  Detailed definition of how many times this field may be repeated inside one content.
  Set ``minimum`` to zero for fields that are not required, and ``maximum`` to zero for
  fields that have no restriction on the number of values.

config
  Optional configuration that is used by some of the input-types. The config
  consists of a number of ordered properties. If it exists multiple properties
  with the same name it will be an array of property values.


CheckBox
--------

A checkbox field has a value if it is checked, or no value if it is not checked.  Therefore, the only values for occurrences
that makes sense is a minimum of zero and a maximum of one.

.. literalinclude:: code/checkbox-type.xml
   :language: xml


ComboBox
--------

A ComboBox needs a list of options.

.. literalinclude:: code/combobox-type.xml
   :language: xml

``option.value`` property
  This property defines the value. It is always associated with ``option.label``.
  There can exist multiple properties with this name to allow for multiple options.

``option.label`` property
    This property defines the label that is visible in the input-type.


Date
----

A simple field for dates with a calendar pop-up box in the admin console.
The default format is ``yyyy-MM-dd``.

.. literalinclude:: code/date-type.xml
   :language: xml

``timezone`` property
  ``true`` if timezone information should be used. Default is ``false``.


DateTime
--------

A simple field for dates with time.  A pop-up box with a calendar and time selector allows easy editing.
The format is ``yyyy-MM-dd hh:mm`` for example, ``2015-02-09T09:00``. The date-time could be of type
``local`` (no datetime) or with timezone. This is done using configuration:

.. literalinclude:: code/datetime-type.xml
   :language: xml

``timezone`` property
  ``true`` if timezone information should be used. Default is ``false``.


Double
------

A double value input-type.


GeoPoint
--------

Stores a GPS coordinate as two comma-separated decimal numbers.

* The first number must be a number between -90 and 90, where a negative number
  indicates a location south of equator and a positive is north of the equator.
* The second number must be a number between -180 and 180, where a negative number indicates
  a location in the western hemisphere and a positive number is a location in the eastern hemisphere.


HtmlArea
--------

A field for entering html in a WYSIWYG HTML editor.


ImageSelector
-------------

An ImageSelector is used to add images to a form.  Existing image content may be selected, or a new image may be uploaded from
the file system.

.. literalinclude:: code/image-selector-type.xml
   :language: xml


Long
----

A simple field for large integers.


ContentSelector
---------------

References to other content are specified by this input type.

.. literalinclude:: code/content-selector-type.xml
   :language: xml

``relationshipType`` property
  This property defines the name of which relationship-type to use.
  Default is ``system:reference``.

``allowContentType`` property
  This property is used to limit the content types that may be selected for this input.
  Use one property for each content type.


RadioButton
-----------

An input type for selecting one of several options, defined in the ``config`` element.

.. literalinclude:: code/radio-button-type.xml
   :language: xml

``option.value`` property
  This property defines the value. It is always associated with ``option.label``.
  There can exists multiple properties with this name to allow for multiple options.

``option.label`` property
  This property defines the label that is visible in the input-type.


Tag
---

An intuitive input format for specifying a set of simple strings.


TextArea
--------

A field for inputting multi-line text.


TextLine
--------

A field for inputting a single line of text.


Time
----

A simple field for time.  A pop-up box allows simple selection of a certain time.
The default format is ``hh:mm``.


Field set
---------

In order to group items visually, a field set may be used.  This is an XML element with a label that will
cause the form in the admin console to group the inputs inside the set under a heading from the label of
the field set.

.. literalinclude:: code/field-set.xml
   :language: xml

@name
  The field set needs a name for reference.

label
  The label will appear as a heading above the inputs that are grouped inside.

items
  The fields inside the set must be listed inside an ``items`` element.


Form item set
-------------

It is possible to group inputs into logical units, either to allow them to repeat as a group, or just to
visually separate items that belong together.  A form item set is included in the content type config
XML, at the level of the input node.  Here is an example of a form item set with a regular input type before and after:

.. literalinclude:: code/item-set.xml
   :language: xml

name
  The set needs a name for reference in result sets.

label
  The set label is printed as a header on the box that will surround the group
  in the input form.

occurrences
  Occurrence configuration can be done at any level.

.. TIP::

  It is also possible to nest form item sets inside each other.  Just include
  the nested set inside the ``items`` element, at the level of the ``input``
  elements, just like at the top level.
