Querying existing / missing values
==================================

There are two ways of querying missing values:


By filter
---------

The exists- and notExists-filters is the recommended and most efficient way of query for missing values

    .. literalinclude:: filters/code/exists-filter.json
     :language: json

    .. literalinclude:: filters/code/notExists-filter.json
     :language: json

    See the :ref:`exists`-filter and :ref:`not-exists`-filter

By query
--------

This method is not as efficient as using a filter, but if you need to do this within a query-expression, you could use the "LIKE" function with an all-expression:

* Exists:

  .. code-block:: sql

    myValue LIKE "*"

* Not-exists:

  .. code-block:: sql

    publish.first NOT LIKE "*"

