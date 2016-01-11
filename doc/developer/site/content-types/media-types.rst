.. _content_media_types:

Media Content Types
===================

The system ships with a set of pre-defined media content types. 
When files are uploaded in the Content Manager interface or through the content API - 
they will be transformed to one of the following content-types.

Common settings for all the content types listed below.

* super-type: base:media
* abstract: false
* final: true
* allow-child-content: false


.. TIP::

  Enonic XP treats media content pretty much like any other content items - for instance
  the person, but they all have at least one attachment (namely the file).

.. image:: images/upload-button.png

Here are the various media content types that also come installed with Enonic XP:

Text (media:text)
  Plain text files.

Data (media:data)
  Misc binary file formats.

Audio (media:audio)
  Audio files.

Video (media:video)
  Video files.

Image (media:image)
  Bitmap image files.

Vector (media:vector)
  Vector graphic files like .svg.

Archive (media:archive)
  File archives like .zip, tar and jar.

Document (media:document)
  Text documents with advanced formatting, like .doc, .odt and pdf.

Spreadsheet (media:spreadsheet)
  Spreadsheet files.

Presentation (media:presentation)
  Presentation files like Keynote and Powerpoint.

Code (media:code)
  Files with computer code like .c, .pl or .java.

Executable (media:executable)
  Executable application files.

Unknown (media:unknown)
  Everything else.


Portal content types
--------------------

In order to build sites in a secure and fashionable manner, Enonic XP
also ships with a few special purpose content types.


Site (portal:site)
^^^^^^^^^^^^^^^^^^

* super-type: base:structured
* abstract: false
* final: true
* allow-child-content: true

The Site content type allows creating websites. By creating a content of type Site, it will become the root of a website.

This content type provides an special behavior for the content, allowing to select and configure applications for the website.
The types (content types, relationship types and mixins) of the applications selected will be available to be used
inside the website content tree.

.. NOTE::

  The content types of an application can only be used under a content of type Site which has the application selected.

Page Template (portal:page-template)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* super-type: base:structured
* abstract: false
* final: true
* allow-child-content: true

Page templates are the equivalent of "master slides" in keynote and powerpoint.
They enable you to set up pages that will be used when presenting other content types.
From the sample content type above, the page template "Person Show" was taking care of the presentation.


Template folder (portal:template-folder)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* super-type: base:folder
* abstract: false
* final: true
* allow-child-content: ``portal:page-template`` only

This is the special content-type. Every site automatically creates a child
content ``_templates`` of this type.  that every Site has to hold the page templates of
that site.  It may not hold any other content type, and it may not be created manually in any other location.


Shortcut
^^^^^^^^

Intended to be a URL with special functionality, but not ready for real use yet.
The content type name is ``base:shortcut``.


Custom Content Types
--------------------

Custom Content Types can be created using Java or simple xml files - and deployed through applications.

When using xml, each content type must have a separate folder in the application resource structure.
i.e. ``site/content-types/<my-content-type-name>``.

Each folder must then hold a file with the name of the content type and ``.xml`` extension (e.g. ``my-content-type-name.xml``).

This is the basic structure of a ``content-type.xml`` file:

.. literalinclude:: code/content-type.xml
   :language: xml

display-name
  The display name of the content type is used throughout the admin console
  to recognize it. But the technical name is the name of the folder the file is placed in.

super-type
  Many properties are inherited from the super-type. All custom content types
  must either inherit ``base:structured`` directly or indirectly. The icon and the general
  form to edit the fields of the content are important properties that are inherited from ``base:structured``.

is-abstract
  If a content type is abstract, no content of this type may be instantiated. It may still be used as
  a super type for other content types.

is-final
  Final content types may not be used as super types of other content types.

allow-child-content
  If child content is allowed, it is legal to add nodes in the tree below a content of this type.

form
  Fields in the content type are defined as input elements which are placed inside
  the ``form`` element. All legal input types are described below.

input
  ``name`` and ``type`` are mandatory attributes of the input element.
  ``label`` and  ``occurrences`` are mandatory child elements.

config
  Some input types have a complex configuration that is defined inside a
  ``config`` element. It is mandatory for the content types that need it.

content-display-name-script
  The name of a content may be generated by JavaScript from the values in the form.

.. TIP::

  A content type may optionally have its own specific icon. The icon can be assigned to the content type by adding a PNG file with
  the same name, in the content type folder, e.g. ``site/content-types/my-content-type-name/my-content-type-name.png``
