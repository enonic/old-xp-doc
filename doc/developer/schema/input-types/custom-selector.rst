.. _customselector_type:

CustomSelector
---------------

Selector input type with user-defined data source.

Below is a sample config file:

.. literalinclude:: code/customselector.xml
   :language: xml

service
  This setting defines name of a javascript service file located under ``/resources/services/[serviceName]/[serviceName].js``

Below is the service file for the configuration above, located at ``/resources/services/customSelector/customSelector.js``:

.. literalinclude:: code/customselector-service.js
    :language: javascript

Note the call to ``helper.createresults`` method: this will ìnject properties required for paging, sorting and filtering of results.

Response JSON format:

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