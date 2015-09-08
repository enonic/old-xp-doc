Overview
========

When searching in Enonic XP, you are searching for nodes, or content if working in the context of the CMS content API.
This documentation is general and intended for the nodes-domain, but except for some built-in
property-values and the addition of some convenience parameters in the content domain, everything is valid for both domains.

In general, the search-APIs deal with a number of basic parameters:

* start
* count
* query
* filter
* aggregations


Start & count
-------------

When searching, the result will contain a number of matching nodes. This number if given by the
provided ``count`` parameter in the query. The result will also contain a value indicating the total
number of hits for the search: ``total``. The ``start`` parameter indicates from what position in the
result set we should start retrieving results.

Lets consider a search matching 1000 documents. Usually, one does not retrieve all these results at once,
but rather a subset of the result - and fetch the next subset of the result if necessary. This type of
data-retrieving is called paging.

Typically, one will decide the number of wanted results for each iteration, e.g 100:

* start = 0
* count = 100

Then, for the next iteration, we will start from the first result not retrieved in the first iteration:

* start = 100
* count = 100

The ``total`` return field can be used to create page-navigation for the search result, by dividing
the ``total`` hits by the page-size (``count``) to get the needed number of pages.


Query
-----

The query-part of a search is where the constraints are defined. If query parameter is empty, all nodes in
the repository will match. The query is defined in :ref:`query_language` section.

The results matching the query constraint will be assigned a score. This is imperative for fulltext-type queries.
The score of a matching documents depends on how the constraint is defined, e.g which fulltext-like function
is used. See the :ref:`search-query-functions` section for details.


Filter & query-filter
---------------------

A filter also applies constraints. The difference between a filter-constraint and a query-constraint,
is that the hits matching the filter are not scored. Scoring hits is a costly operation, and makes no sense
for typical filter constraints like "price > 10", so its a good way of optimizing searches by appending
non-fulltext operations to the filter-constraint instead of the query-constraint.

There are also two different kinds of filters. A *query-filter* is a part of the query-constraint,
meaning that aggregations results are also affected by these constraints. A *filter* on the other hand, is not
considered in the aggregations calculations, meaning that applying a filter will not impact the aggregation result.


Aggregations
------------

An aggregation is a function, or something that is executed, on a collection of search results.
The search-results are defined by the query and query-filter of the search request. See the
:ref:`search-aggregations` section for details.
