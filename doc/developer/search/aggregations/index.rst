.. _search-aggregations:

Aggregations
============

An aggregation is a function, or something that is executed, on a collection of search results. The search-results are defined by the query and query-filter
of the search request.

For instance, consider a query returning all nodes that has a property "price" less than, say, 100$. Now, we want to divide the result nodes into ranges, say
0-25$, 25-50$ and so on. We also would like to know the average price for each category. This could be done by doing multiple separate queries, and calculate the
average manually, but this would be very ineffective and cumbersome. Luckily, aggregations solves these types of problems easily.

In some API functions it's possible to send in a aggregations expression object. This object is either in Java or a JSON like the following:

.. literalinclude:: code/expr.json
   :language: json

There are two different types of aggregations:

* Bucket aggregations: A bucket aggregation places documents matching the query in a collection - a bucket. Each bucket has a key.
* Metrics aggeregations: A metric aggeregation computes metrics over a set of documents.

Typically, you will divide data into buckets, and then use metric aggregations to calculate e.g average values,
sum, etc for each bucket if necessary.

.. toctree::
   :maxdepth: 1

   terms
   range
   date-range
   date-histogram
   stats
