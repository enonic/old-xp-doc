.. _site_fragments:

Fragment
========

Fragments are **reusable page components**. A fragment can be created from an instance of one of the other 4 page component types: *Part*, *Layout*, *Text* or *Image*.

When created the fragment will be stored in a content of type ``portal:fragment``, including the component's config. This content can then be edited independent of where it is included.

At the same time, a *fragment* component can be inserted in any other page or layout from the same site. This is done in *Page Editor*. A *fragment* component acts as a placeholder for the referenced fragment content.
At the moment of rendering the page, the fragment is replaced by the specific component from which the fragment was created.

Unlike pages, parts and layouts, fragment components do not require creating a descriptor in the application, since they are only placeholders for other components.

View
----

Content of type ``portal:fragment`` can be edited in *Page Editor* as if it was a regular page.
By default the components will be rendered inside a plain empty HTML page.
But it is also possible to create a custom renderer with the application styles and layout.

To create a custom renderer for the ``portal:fragment`` content, configure a controller mapping in ``site.xml``:

.. literalinclude:: code/site.xml
    :language: xml

This mapping indicates that it will handle content of type ``portal:fragment``, but exclude URL paths containing "/_/".
The last part is necessary to avoid the renderer being triggered during some operations while the fragment is edited in *Page Editor*.

The mapping points to a controller that will handle the rendering. The controller is just like any other page or part controller (See :ref:`http_controllers` and :ref:`controller_mappings` for details).

The custom view that will render ``portal:fragment`` content is like any other :ref:`page` view, with one difference.
A page has *regions*, but a fragment has only a component without any regions defined. To specify the component to be rendered we need to specify ``data-portal-component="fragment"`` instead of the component path.

.. literalinclude:: code/fragment-view.html
   :language: html

