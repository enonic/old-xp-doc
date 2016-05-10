.. _pathMatch:

pathMatch
=========

The path-match matches a path in a same branch, scoring the paths closest to the given query path first. Also, a number of minimum matching elements that must match could be set. 


Syntax
------

.. code-block:: sql

  pathMatch(<field>, <path>, [<minimum_elements_must_match>])

If not given, the default mimum-must-match value will be 1.

Examples
--------

Given these contents:

.. code-block:: sql
  
  /content/mySite
  /content/mySite/fish
  /content/mySite/fish/onion
  /content/mySite/cheese
  /content/mySite/cheese/jam
  /content/myOtherSite


.. code-block:: sql
  
  pathMatch('_path', '/content/mySite/fish/onion/mayonnaise', 2)
  
This will return (orded by `_score`):

 1. `/content/mySite/fish/onion`
 2. `/content/mySite/fish`
 3. `/content/mySite/cheese/jam`
 4. `/content/mySite/cheese`
 5. `/content/mySite`
