.. _cs_layout_component:

Layout component
================

Layout components are reusable, configurable components (similar to Part components) that can be placed into any region defined in a page
component. Layouts themselves define regions where other components can be placed with the :ref:`page_editor`. The primary purpose of a
layout is to enable other components to be placed side-by-side. As of version |version|, a layout cannot be placed inside another layout.
There are no built-in layouts. Each one is custom made in the application code. Layouts are typically created for two or three columns and
have configuration options for column widths.

In the :ref:`page_editor`, drag a Layout component placeholder from the inspect panel to the desired region on the page. The layout
placeholder will now appear as a blue box with a dropdown selector. The same dropdown selector will appear in the inspect panel. Use one of
the selectors to find the desired layout component. Once a layout is selected, the actual layout rendering will replace the placeholder and
its configuration options will appear in the inspect panel. Some layout components may not have any configuration options.

.. image:: images/layouts.jpg

While editing a page, it may be difficult to select a layout to access its configuration. In this case,  the :ref:`components_view` can help
to select the layout. Alternatively, a part within the layout can be selected and then that part's parent can be selected from the
right-click context menu. Continue selecting the parent component until the layout is the selected component.