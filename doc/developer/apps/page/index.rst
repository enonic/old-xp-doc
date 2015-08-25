.. _apps-page-index:

Page
====

A page component is the most basic building block of a site. Each page component must have a JavaScript controller file
and optionally an XML descriptor and an HTML view file. These files can define regions in the page where parts and layouts may be
added, or they can define a simple page without any compositions. Page components can be added to content individually
(via the Content Manager, see :ref:`content-content-manager`) or they can be used to create page templates that automatically render supported content types.

Any number of page templates can be created from a single page component. Thanks to the magic of page templates, even very large
sites will typically have very few page components--perhaps one for all the HTML pages and one for RSS pages.

Pages should be placed in the folder ``site/pages/[page-name]``

.. toctree::
   :maxdepth: 1

   descriptor
   controller
   render-view
   dynamic-content
   regions
