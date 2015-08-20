.. _apps-page-descriptor:

Descriptor
==========

The page descriptor is an XML file that that is used to define regions and custom input fields for page configuration.
If a page does not require regions or configuration options then the descriptor may be omitted.

The file must be named ``[page-name].xml``. For example, if a page component is named "default" then the file must reside at
``site/pages/default/default.xml``.

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
