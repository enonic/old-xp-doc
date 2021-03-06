.. _content_base_types:

Base Content Types
==================

A set of basic content types are provided with the installation.

Content types have a set of properties you need to know about:

* Content types are named with their application name, i.e. base:folder, where "base" is the application - but also have a nice display name like "Folder"
* ``abstract`` (default: false) means you cannot create content with this content type
* ``final`` (default: false) means it is not possible to create content types that "extend" this
* ``allow-child-content`` (default: true) if false, it will prevent users from creating child items on content of this type. (i.e. prevents creating child items of images)


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

This content type serves as the abstract supertype for all content types that are considered "files" in
their natural habitat. These are listed on the :ref:`content_media_types` page.


Shortcut (base:shortcut)
^^^^^^^^^^^^^^^^^^^^^^^^
* abstract: false
* final: true
* allow-child-content: true

This is used for redirecting a visitor to another content item in the structure.
Optional name-value parameters can be set to be added to the redirect URL.


Structured (base:structured)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* abstract: true
* final: false
* allow-child-content: true

This is possibly the most commonly used base type for creating other content types.
The structured content type is the foundation for basically any other structured content
you can come up with, such as the ``Person`` content in the previous example.


Unstructured (base:unstructured)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

* abstract: false
* final: true
* allow-child-content: true

The unstructured content type is a special content type that permits the creation
of any property or structure without actually defining it first. This is convenient for user generated content from forms on a site.

.. CAUTION::

  There is currently no UI for unstructured content so they will appear empty in the admin console. However, a custom page template that
  supports base:unstructured may easily be created to show name/value pairs.


