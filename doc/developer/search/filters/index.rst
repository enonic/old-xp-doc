Query Filters
===============

A query filter works a bit different than the query-expression. When searching with query-expressions, steps like ordering and scoring is done to produce the result. These are relatively costly operations.
A filter is doing none of these steps, it's only filtering the result from the query-expression, and is thus the most efficient way of limiting hits based on simple comparison statements.

The query filters are applied as a root level property in query-api's, here is an example from using the content-API

  .. literalinclude:: code/content-api-query.js
     :language: js

If specifying several filters on the filter object root level, the filters are joined automatically with a boolean "must" clause, meaning all filters must match.

Supported query filters:

.. toctree::
   :maxdepth: 1

   exists
   notExists
   hasValue
   ids
   boolean
