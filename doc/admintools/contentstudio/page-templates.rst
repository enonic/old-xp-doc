.. _page_templates:

Page Templates
==============

.. NOTE::
   This page is under construction. This information is likely incomplete and possibly inaccurate until this notice is removed.

Page templates are special content that enable other content to be rendered as pages. Page templates must support one or more content types.
When a request endpoint matches a content path, the content's supporting template will be used to render it. The page editor is used to
build page templates by placing the desired components on the page in the desired locations.

Page components
---------------

Page components are defined in the application code and contain the basic HTML structure of all rendered pages. Each page template uses one
page component. They usually contain the page header, footer and menu. Most page components will have one or more regions where other
components (parts, layouts, etc.) can be placed with the page editor. A single page component can be used by any number of page templates.

Creating page templates
-----------------------

Page templates can only be created in the Templates folder. Choose which content types will be rendered by this template with the dropdown
selector labeled **Supports**. A dropdown selector on the right side of the page is used for choosing the page component. Once a page
component is selected, the page preview will be visible in the page editor. Use the **inspect panel** or the **component view** to add
components to the region(s) in the page.

.. note:: More than one page template can support the same content type. In this situation, the template that appears first in the list will
   be used to render the content by default. But individual content can be manually configured to use any template that supports its type.