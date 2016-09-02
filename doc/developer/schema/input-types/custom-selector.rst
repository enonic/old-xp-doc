.. _customselector_type:

CustomSelector
---------------

Selector input type with custom data source. Application developer must create a service that returns results according to
required JSON format, and then specify the service name in the input config. For information on creating a service see the
:ref:`services` section.

Below is a sample config file:

.. literalinclude:: code/my-custom-selector.xml
   :language: xml

service
  This setting defines name of a javascript service file located under ``/resources/services/[serviceName]/[serviceName].js``

Service file must have a GET handler that returns results in JSON format of the following format:

id
  Unique Id of the option

displayName
  Option title

description (optional)
  Detailed description

iconUrl (optional)
  Path to the thumbnail image file

icon (optional)
  Inline image content (for example, SVG)


Please check our tutorial on the :ref:`custom-selector_tutorial` for detailed information on setting up this input type.