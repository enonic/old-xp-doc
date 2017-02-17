.. _customselector_type:

CustomSelector
--------------

Selector input type with custom data source. Application developers must create a service that returns results according to the
required JSON format, and then specify the service name in the input config. For information on creating a service see the
:ref:`services` section.

Below there are two sample usages of CustomSelector input type:

.. literalinclude:: code/my-custom-selector.xml
   :language: xml

common fields
  All Input Types have these :ref:`Common Fields <input_types_common_fields>`

service
  The name of a JavaScript service file, located under ``/resources/services/[serviceName]/[serviceName].js``.
  You can also refer to a service file in another application, for example *com.myapplication.app:myservice*.

option
  Parameter to pass to the service. Option parameters allow customizing a CustomSelector to be used in different contexts.
  There can be multiple options or none. The options will be included in the HTTP request to the service as name-value query parameters.

Service Request
~~~~~~~~~~~~~~~

In addition to the option values, if set on the input type ``<config>``, the service will receive the following query parameters in the HTTP request:

ids
  Array of item ids already selected in the CustomSelector. The service is expected to return the items with the specified ids.

start
  Index of the first item expected. Used for pagination of the results.

count
  Maximum number of items expected. Used for pagination of the results.

query
  String with the search text typed by the user in the CustomSelector input field.


Service Response
~~~~~~~~~~~~~~~~

The service controller must have a GET handler that returns results in JSON format.
The JSON object returned must include ``total`` and ``count`` properties as numbers, and ``hits`` containing an array of items.
Each item in the hits property must have the following fields:

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

Example of JSON response from a CustomSelector service:

.. literalinclude:: code/custom-selector-response.json
   :language: json



Please check our tutorial on how to :ref:`custom-selector_tutorial`.