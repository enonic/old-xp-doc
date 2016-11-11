.. _macros:

Macros
======

.. WARNING::
  Macros are experimental.

Macros are instructions that allow adding extra functionality or include dynamic content in the Html Editor.

The Html Editor is used when editing :ref:`htmlarea_type` input fields, or while editing a :ref:`cs_text_component` in Page Editor.

There are two built-in macros included in XP. But its real power comes from macros provided by applications.
When an application that contains macros is added to a site, they will be available for any HtmlArea or Text component inside the site.


Macro instruction
-----------------

A macro instruction is similar to an HTML or XML tag but using square brackets instead of angle brackets.
It has a name, a set of attributes, and optionally a body.

.. literalinclude:: code/instruction.html
  :language: html

Macro instructions can be added anywhere in an HTML page, usually inside a content's HtmlArea field.

During the rendering of the page the macros are resolved and executed. Then the result from executing the macro replaces the instruction text.
In addition, a macro can also add styles or scripts to the page, by setting :ref:`page_contributions` in its response.

A user can add macro instructions by typing the square bracket tags, as the examples above.
But more frequently it will click on the `Insert macro` button and select one of the macros available.

Descriptor
----------

A macro descriptor is an xml file that allows assigning a user-friendly name, and a description to the macro.
It also has a configuration to define the types and names of the macro parameters.

display-name
  A simple human readable display name.

description
  A description to show in the Insert macro dialog in Content Studio.

config
  The ``config`` element is a form where each input element corresponds to a macro parameter. The macro body is represented with an input named ``"body"``.

.. NOTE::

  The config form does not support nested elements, so :ref:`item_sets` are not allowed in the macro config form.
  Also the :ref:`htmlarea_type` input type is not allowed in the config form, since it may contain macros itself.


Its path follows the pattern ``site/macros/<macroName>/<macroName>.xml``

.. literalinclude:: code/macro.xml
  :language: xml


Although not strictly required, it is recommended to create a descriptor, as it provides the required details for adding macros through the UI in Content Studio.

Controller
----------
The functionality of a macro is implemented in a JavaScript controller, inside an application.

Its path follows the pattern ``site/macros/<macroName>/<macroName>.js``

A macro controller must export a single ``macro`` function that takes a ``context`` parameter and returns a response object (see :ref:`http-response`).

The ``context`` parameter is a Javascript object with the following properties:

name
  a string containing the macro name.

body
  a string containing the body of the macro instruction.

params
  an object with key-value pairs containing the macro parameters. The values are the strings from the macro instruction attributes.

document
  a string with the HTML document that contains the current macro. The document contains the raw source HTML, before any macro instructions have been executed,
  and before image or content URLs have been resolved. The document is only an input parameter to the macro, it cannot be modified.

request
  the request object.

.. literalinclude:: code/macro.js
  :language: javascript

Note that only the ``body`` and ``pageContributions`` fields of the response are relevant for macro controllers.

.. TIP::

  A macro controller can also use libraries, like any other JavaScript controller.


Built-in macros
---------------

There are currently 2 built-in macros that are included in XP and available for any site:

disable
  The contents (body) of this macro will not be evaluated as macros. That allows rendering another macro instruction as text without executing it.
  It is useful for documenting macros, for example. This macro has no parameters.

embed
  It allows embedding an `<iframe>` element in an HTML area. This is a generic way for embedding content from an external source (e.g. YouTube videos).
  This macro has no parameters.


Examples:

.. literalinclude:: code/builtin.html
  :language: html


.. NOTE::

  A macro may optionally have its own specific icon. The icon can be assigned to the macro by adding a PNG or SVG file with
  the same name, in the macro folder, e.g. ``site/macros/myMacro/myMacro.svg``
