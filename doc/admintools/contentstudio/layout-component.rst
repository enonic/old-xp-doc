.. _cs_layout_component:

Layout component
================

.. NOTE::
   This section is under construction. This information is likely incomplete and possibly inaccurate until this notice is removed.

Layout components are created in the application code. They are reusable, configurable components (similar to Part components) that can be
placed into any region defined in a page component. Layouts themselves define regions where other components can be placed with the
:ref:`page_editor`. The primary purpose of layouts is to enable other components to be placed side-by-side. As of version |version|, a
layout cannot be placed inside another layout.

In the :ref:`page_editor`, drag a Layout component placeholder from the inspect panel to the desired region on the page. The layout
placeholder will now appear as a blue box with a dropdown selector. The same dropdown selector will appear in the inspect panel. Use one of
the selectors to find the desired layout component. Once a layout is selected, its configuration options will appear in the inspect panel.
Some layout components may not have any configuration options.
