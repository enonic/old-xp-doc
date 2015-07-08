.. _query-language:

Query Language
==============

When finding nodes and content you will be using our query language. It is
based on SQL and looks very similar.


queryExr
--------

Grammar:

.. code-block:: ebnf

  queryExpr = [ constraintExpr ] [ orderExpr ] ;

* If no constraint-expression is given, all documents will match.
* If no order-expression is given, results will be ordered by *timestamp* descending.

Examples:

.. code-block:: sql

  myCategory = 'article'
  myCategory = 'article' ORDER BY title DESC
  ORDER BY title


constraintExpr
--------------

Grammar:

.. code-block:: ebnf

  constraintExpr = compareExpr
                 | logicalExpr
                 | dynamicConstraint
                 | notExpr ;


compareExpr
-----------

Grammar:

.. code-block:: ebnf

  compareExpr   = fieldExpr operator valueExpr ;
  fieldExpr     = propertyPath ;
  operator      = '=', '!=', '>', '>', '<', '<=', 'LIKE', 'NOT LIKE', 'IN', 'NOT IN' ;
  valueExpr     = string | number | valueFunc ;
  valueFunc     = geoPoint | instant | time | dateTime, localDateTime ;
  geoPoint      =  '"' lat ',' lon '"' ;
  instant       = 'instant(' string ')' ;
  time          = 'time(' string ')' ;
  dateTime      = 'dateTime(' string ')' ;
  localDateTime = 'localDateTime(' string ')' ;

Examples:

.. code-block:: sql

  user.myCategory = "articles"
  user.myCategory IN ("articles", "documents")
  user.myCategory != "articles"
  user.myCategory LIKE "*tic*"
  myPriority < 10
  myPriority <= 10
  myPriority > 10
  myPriority < 100
  myPriority != 10
  myInstant = instant('2014-02-26T14:52:30.00Z')
  myInstant <= instant('2014-02-26T14:52:30.00Z')
  myInstant <= dateTime('2014-02-26T14:52:30.00+02:00')
  myTime = time('09:00')
  myLocalDateTime = time('2014-02-26T14:52:30.00')
  myLocation = '59.9127300,10.7460900'
  myLocation IN ('59.9127300,10.7460900','59.2181000,10.9298000')


logicalExpr
-----------

Grammar:

.. code-block:: ebnf

  logicalExpr = constraintExpr operator constraintExpr ;
  operator    = 'AND' | 'OR' ;

Examples:

.. code-block:: sql

  myCategory = "articles" AND myPriority > 10
  myCategory IN ("articles", "documents") OR myPriority <= 10


dynamicConstraint
-----------------

Grammar:

.. code-block:: ebnf

  dynamicConstraint = functionExpr ;

Examples:

.. code-block:: sql

  fulltext('myCategory', 'Searching for fish', 'AND')
  ngram('description', 'fish boat', 'AND')


notExpr
-------

Grammar:

.. code-block:: ebnf

  notExpr = 'NOT' constraintExpr ;

Examples:

.. code-block:: sql

  NOT myCategory = 'article'


orderExpr
---------

Grammar:

.. code-block:: ebnf

  orderExpr = 'ORDER BY' ( fieldOrderExpr | dynamicOrderExpr )
              ( ',' ( fieldOrderExpr | dynamicOrderExpr ) )* ;


fieldOrderExpr
--------------

Grammar:

.. code-block:: ebnf

  fieldOrderExpr = propertyPath [ direction ] ;
  direction>     = 'ASC' | 'DESC' ;

Examples:

.. code-block:: sql

  _name ASC
  _timestamp DESC
  title DESC
  data.myProperty


dynamicOrderExpr
----------------

Grammar:

.. code-block:: ebnf

  dynamicOrderExpr = functionExpr [ direction ] ;
  direction        = 'ASC' | 'DESC' ;

Examples:

.. code-block:: sql

  geoDistance('59.9127300,10.746090')


propertyPath
------------

Grammar:

.. code-block:: ebnf

  propertyPath = pathElement ( '.' pathElement )* ;
  pathElement  = ( [ validJavaIdentifier - '.' ] )* ;

Examples:

.. code-block:: sql

  myProperty
  data.myProperty
  data.myCategory.myProperty

.. TIP::

  Wildcards in propertyPaths are supported in functions ``fulltext`` and
  ``ngram`` only at the moment. When using these functions, expressions
  like this are valid:

  .. code-block:: sql

    myProp*
    *Property
    data.*
    *.myProperty
    data.*.myProperty


functionExpr
------------

Grammar:

.. code-block:: ebnf

  functionExpr = functionName '(' arguments ')' ;


Examples
--------

Find all documents where property 'myCategory' is populated with a value, and
the value does not equals 'article'.

.. code-block:: sql

  myCategory LIKE '*' AND NOT myCategory = 'article'

Find all document where property 'myCategory' is either 'article' or 'document' and title
starts with 'fish'.

.. code-block:: sql

  myCategory IN ('article', 'document') AND ngram('title', 'fish', 'AND')

Find all documents where any fulltext-analyzed property contains 'fish' and 'spot', and order
them ascending by distance from Oslo.

.. code-block:: sql

  fulltext('_allText', 'fish spot', 'AND') ORDER BY
  geoDistance('location', '59.9127300,10.7460900') ASC

Find all documents where any property under data-set 'data' contains 'fish' and 'spot', and order
them ascending by distance from Oslo.

.. code-block:: sql

  fulltext('data.*', 'fish spot', 'AND') ORDER BY
  geoDistance('location', '59.9127300,10.7460900') ASC
