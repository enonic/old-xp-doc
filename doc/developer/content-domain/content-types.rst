.. _content-domain-content-types:

Content Types
=============

Content Types provide developers with a rich, flexible and yet simple way to define
interfaces and the resulting data models. Some highlights are:

* A rich set of widgets called Input Types
* Ability to group Input Types for tree-structured data
* Array support for everything
* Automatic generation of content display name from other fields
* Horizontal inheritance through Mixins


Base Content Types
------------------

A set of basic content types are provided with the installation.

Content types have a set of properties you need to know about:

* Content types are named with their module name, i.e. base:folder, where "base" is the module - but also have a nice display name like "Folder"
* ``abstract`` (default: false) means you cannot create content with this content type
* ``final`` (default: false) means it is not possible to create content types that "extend" this
* ``allow-child-content`` (default: true) if false, it will prevent users to create child items of content of this type.. (i.e. prevents creating child items of images)


Folder (base:folder)
^^^^^^^^^^^^^^^^^^^^

* abstract: false
* final: false
* allow-child-content: true

Folders are simply containers for child content, with no other properties than their
name and Display Name. They are helpful in organizing your content.


Media (base:media)
^^^^^^^^^^^^^^^^^^

* abstract: true
* final: false
* allow-child-content: false

This content type serves as the abstract supertype for all content types that in
their natural habitate are considered "files", these are listed below


Unstructured (base:unstructured)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* abstract: false
* final: true
* allow-child-content: true

The unstructured content type is a magical content type that permits the creation
of any property and structure - without actually defining one first.

.. CAUTION::

  There is currently no UI for unstructured content so they will appear
  as empty from the admin console.


Structured (base:structured)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* abstract: true
* final: false
* allow-child-content: true

This is possibly the most commonly used base type for creating other content type.
The structured content type is the foundation for basically any other structured content
you can come up with, such as the ``Person`` content type above.


Media Content Types
^^^^^^^^^^^^^^^^^^^

* super-type: base:media
* abstract: false
* final: true
* allow-child-content: false

These settings apply to all the listed content types.
When uploading a file to Enonic XP it will be transformed to one of the following content-types.

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

The Site content type is the root of a web-site, it's special trick is that you can add
modules to it, and the portal will then be capable of presenting your content.
Also, another important fact is that when a module is added to a site - you will also
be able to create content from that specific module within it.


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

Custom Content Types can be created using Java or simple xml files - and deployed through modules.

When using xml, each content type must have a separate folder in the module resource structure.
i.e. ``cms/content-types/<my-content-type-name>``.

Each folder must then hold a file named ``content-type.xml`` and optionally an icon file, i.e. ``thumb.png``
The icon must be a Portable Network Graphics file (png).  Other file formats will be supported in the future.

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
