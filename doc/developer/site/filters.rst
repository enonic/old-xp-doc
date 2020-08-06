.. _response_filters:

Response Filters
================

Note: Response filters are deprecated.  In 7.0, they are replaced by `Response Processors <https://developer.enonic.com/docs/xp/stable/cms/response-processors>`_

Response filters are scripts, similar to controllers, that allow customizing or adapting the response of page controllers.
Notice that this actually applies to pages from any application added to the site.

The page and component controllers are processed during rendering and then the response filters will be executed afterward.

To add a response filter, create a folder ``site/filters`` in the application and place a ``[filter-name].js`` file within this folder.
A filter must export a method named ``responseFilter``.
This method receives the request and response objects as parameters and must return a response object (see :ref:`http_controllers`).

Here is an example of a ``[filter].js`` file:

.. literalinclude:: code/filter.js
   :language: javascript
   :caption: site/filters/trackingScript.js

In addition, the filter must be declared in the ``site.xml`` descriptor by adding a ``<response-filter>`` element within the ``<filters>`` element, with ``@name`` and ``@order`` attributes.

.. literalinclude:: code/filter-site.xml
   :language: xml
   :caption: site/site.xml


Response filters may change any of the values of the response object, that includes: HTTP status code, response body, HTTP headers, cookies and page contributions.

It is also possible to return the response object received without any changes.

Execution order
---------------
An application can contain multiple filters declared in ``site.xml``. Multiple applications can be selected for a Site.
When a page is rendered, all the filters declared in all the applications selected for the site will be executed.
The order in which the filters are executed depends on the filters ``order`` (as defined in ``site.xml``) and the order of the applications configured on the Site.

The filters with a **lower order** will be executed **first**.
In case there are several filters with the same ``order`` number,
the position of the applications (as configured for a Site in Content Studio) determines the order of execution.


The filter-chain execution can be interrupted from either a controller or a filter by setting the ``applyFilters`` field in the response.
When this value is set to ``false`` all of the remaining filters will be skipped. (See :ref:`http-response`).
