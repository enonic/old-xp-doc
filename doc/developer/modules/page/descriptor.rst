Descriptor
==========

The page descriptor is required to register the page and allows us to set up custom input fields to configure the page.
It also allows us to describe what regions are available in this page.
The file must be named ``[page-name].xml``.

.. literalinclude:: code/page-1.xml
   :language: xml

display-name
  A simple human readable display name.

config
  The ``config`` element is where input fields are defined for configurable data that
  may be used on the page.

regions
  This is where regions are defined. Various component parts can be dragged and dropped into
  regions on the page.
  
