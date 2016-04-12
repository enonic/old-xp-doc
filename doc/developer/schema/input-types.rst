.. _input_types:


Input Types
===========

Input types are specified by XML snippets and used in combinations to build forms. An input type has both a front-end and a back-end.
Each input type will return a property with a specific value type.

The following XML configuration is common for all input types:

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

occurrences
  Detailed definition of how many times this field may be repeated inside one content.
  Set ``minimum`` to zero for fields that are not required, and ``maximum`` to zero for
  fields that have no restriction on the number of values.
  This element is optional, if omitted the default will be ``minimum="0"`` and ``maximum="1"``.

config
  Optional configuration that is used by some of the input-types. The config
  consists of elements with optional attributes. Each element/attribute name
  with dashes is automatically camel-cased
  (``relationship-type`` -> ``relationshipType``).

default
  Optional element which contains default value for particular input type. Currently supported by some input types.
  See value formats in the corresponding input type description. Invalid values are ignored.


**Input types**


AttachmentUploader
------------------

This field enables uploading of one or more files that will be stored as attachments to the current node/content.
This is different from media content where each media is a separate node that can be linked to.

.. literalinclude:: code/attachmentUploader-type.xml
   :language: xml


CheckBox
--------

A checkbox field has a value if it is checked, or no value if it is not checked.  Therefore, the only values for occurrences
that makes sense is a minimum of zero and a maximum of one.

.. literalinclude:: code/checkbox-type.xml
   :language: xml

default
  This element specifies default value. Use "checked" string to check it, otherwise it will be unchecked.

.. _combobox:


ComboBox
--------

A ComboBox needs a list of options.

.. literalinclude:: code/combobox-type.xml
   :language: xml

option
  This element defines the option label. The ``value`` attribute defines the
  actual value to set when this option is selected. Multiple ``option``
  settings are ordered.

default
  This element specifies default value. It should be equal to one of the ``option`` value.


Date
----

A simple field for dates with a calendar pop-up box in the admin console.
The default format is ``yyyy-MM-dd``.

.. literalinclude:: code/date-type.xml
   :language: xml

timezone
  ``true`` if timezone information should be used. Default is ``false``.

default
  The format for the default date can be:

  * yyyy-MM-dd    (e.g. "2011-09-12")

  * Relative date expression. A relative time expression can be a sequence of one or more date offsets.
  An offset is: a plus or minus sign '+' | '-' , followed by an integer, followed by a ``date unit`` string (e.g. "+3 days")
  The ``date unit`` can be expressed as a singular unit, plural unit, or initial letter:
       "year" | "years" | "y" |
       "month" | "months" | "M" |
       "week" | "weeks" | "w" |
       "day" | "days" | "d"

  An offset can also be the string ``now``, which means current date.

DateTime
--------

A simple field for dates with time.  A pop-up box with a calendar and time selector allows easy editing.
The format is ``yyyy-MM-dd hh:mm`` for example, ``2015-02-09T09:00``. The date-time could be of type
``local`` (no datetime) or with a timezone. This is done using configuration:

.. literalinclude:: code/datetime-type.xml
   :language: xml

timezone
  ``true`` if timezone information should be used. Default is ``false``.


Double
------

A double value input-type.

default
  This element specifies default value, accepts doubles only.


GeoPoint
--------

Stores a GPS coordinate as two comma-separated decimal numbers.

* The first number must be between -90 and 90, where a negative number
  indicates a location south of equator and a positive is north of the equator.
* The second number must be between -180 and 180, where a negative number indicates
  a location in the western hemisphere and a positive number is a location in the eastern hemisphere.


HtmlArea
--------

A field for inputting multi-line text, with formatting options.

default
  This element specifies default value, accepts any valid html.


Long
----

A simple field for large integers.

default
  This element specifies default value, accepts longs only.


.. _radiobutton:

RadioButton
-----------

An input type for selecting one of several options, defined in the ``config`` element.

.. literalinclude:: code/radio-button-type.xml
   :language: xml

option
  This element defines the option label. ``value`` attribute defines the
  actual value to set when this option is selected. Multiple ``option``
  settings are ordered.

default
  This element specifies default value. It should be equal to one of the ``option`` value.


Tag
---

An intuitive input format for specifying a set of simple strings.


TextArea
--------

A field for inputting multi-line text.

default
  This element specifies default string value.


TextLine
--------

A field for inputting a single line of text.

.. literalinclude:: code/textline-type.xml
   :language: xml

regexp
  A regular expression that restricts the valid values for the input. Optional, if not set any text is a valid value.

default
  This element specifies default string value.

Time
----

A simple field for time.  A pop-up box allows simple selection of a certain time.
The default format is ``hh:mm``.

default
  The format for the default date can be:

  * ``hh:mm``    (e.g. "23:59")

  * Relative time expression. A relative time expression can be a sequence of one or more time offsets.
  An offset is: a plus or minus sign '+' | '-' , followed by an integer, followed by a ``time unit`` string (e.g. "+3 minutes")
  The ``time unit`` can be expressed as a singular unit, plural unit, or initial letter:
          "hour" | "hours" | "h" |
          "minute" | "minutes" | "m"

  An offset can also be the string ``now``, which means current time.
