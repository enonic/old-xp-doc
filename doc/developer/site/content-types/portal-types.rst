 .. _content_portal_types:

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

This content type provides a special behavior for the content, allowing to select and configure applications for the website.
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

This is a special content-type. Every site automatically creates a child
content of this type named ``_templates``.  The templates folder holds all the page templates of
that site.  It may not hold any other content type, and it may not be created manually in any other location.

Fragment (portal:fragment)
^^^^^^^^^^^^^^^^^^^^^^^^^^

* super-type: base:structured
* abstract: false
* final: true
* allow-child-content: true

The Fragment content type represents a **reusable page component**. A content of this type contains a page component(*Part*, *Layout*, *Text*, *Image*) that can be re-used in other pages.
But it only needs to be maintained in one place.

To create a content of type ``portal:fragment`` edit an existing page with *Page Editor*, select the context menu of an existing component in the page, and then clicking on "Create Fragment".
Once created, the fragment content can be referenced in other pages by inserting a *Fragment component* in the page.

A Fragment content can be edited with *Page Editor* and the changes applied to the component will immediately be available in the pages that include the fragment.
When a page containing fragment a component is rendered, the components of the ``portal:fragment`` content pointed by the fragment component are rendered in the place of the fragment component.

There is a default page for rendering and edit fragments.
The default page does not have any styles defined, but it is possible to render it with the application theme and styles by defining a controller mapping with ``<match>type:'portal:fragment'</match>`` (See :ref:`controller_mappings`).