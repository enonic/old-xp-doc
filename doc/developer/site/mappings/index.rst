.. _controller_mappings:

Controller Mappings
===================

Controller mappings allow the creation of HTTP endpoints that are bound to a combination of a URL pattern and/or content property.

The mappings can be defined in the ``site.xml`` file (see :ref:`site_descriptor`).

.. literalinclude:: code/site-1.xml
   :language: xml


Multiple mappings can be set for a site.

Each controller mapping has the following properties:

- **Controller**: application path to the JavaScript controller that will handle the request. This attribute is required.
- **Content match**: matching condition to evaluate on the content in the requested path. This element is optional.
- **URL pattern**: regular expression to match against the request URL. This element is optional.
- **Order**: determines which controller will be executed in case there is more than one that matches. The mapping with lowest order value will be executed. Default is ``50``.

Controller
----------

The controller is specified with the ``controller`` attribute in a ``<mapping>`` element.
A controller handles requests in the same way a :ref:`page` or a :ref:`part` controller do.
The controller is a JavaScript file located in the application.

Unlike page and part controllers, a mapping controller is not required to be placed in a specific directory.
In fact, an existing page or service controller can also be used as controller for the mapping.

The controller must export a method for each type of HTTP request that should be handled.
The handle method has the request object as a parameter and returns the response object (see :ref:`http_controllers`).

Example: ``<mapping controller="/site/controller/foo.js">``

Content match
-------------

The ``<match>`` element specifies a condition related to the content corresponding with the requested URL path.

The condition takes the form of a **property path** followed by a **semicolon**, and then an **expected value**.

The property path can be one of the content properties (``_id``, ``_name``, ``_path``, ``type``, ``displayName``, ``hasChildren``, ``language``, ``valid``) or a custom property in the ``data`` or ``x`` part.

Examples:

| ``<match>type:'portal:fragment'</match>``
| ``<match>_path:'/features/.*'</match>``
| ``<match>data.employee.type:'developer'</match>``
| ``<match>data.product.category:42</match>``
| ``<match>x.com-enonic-myapp.menuItem.show:true</match>``

|
The expected value can be either a regular expression to match the property value, or simply a string, number or boolean (``true`` | ``false``)


URL pattern
-----------

The ``<pattern>`` element specifies a regular expression to be matched against the request URL. The part of the URL that is taken into account for the matching is the path.
That means the protocol, host, port, or query parameters are not involved in the matching.

The pattern element may also contain an ``invert`` attribute to indicate that the result of evaluating the regular expression should be negated: ``<pattern invert="true">``

The pattern must be a valid `Java regular expression`_.

.. _Java regular expression: https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html

Examples:

| ``<pattern>/portal/.*/api/.*\.json</pattern>``
| ``<pattern>/portal/draft/.*</pattern>``
| ``<pattern invert="true">.*\/_\/.*</pattern>`` *exclude URLs containing /_/*
| 