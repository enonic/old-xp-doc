range
=====

The range functions test each value in the given field for a given range. 


Syntax
------

.. code-block:: none

  range(<field>, <from>, <to>, [<includeFrom>], [<includeTo>])

The ``from`` and ``to`` values must be of the same type.

``includeFrom`` and ``includeTo`` are optional with default value 'false', meaning that the actual values for the ``from`` and ``to`` are not included as matches.

Unbounded ranges can be queried by providing an empty string as argument.


Examples
--------

Matches all that have a version-string in the range, including '6.3.0'

  .. code-block:: sql

    range('version', '6.3.0', '6.4.0', 'true', 'false')

  .. code-block:: sql

    range('publishFrom', instant('2015-08-01T09:00:00Z'), instant('2015-08-01T11:00:00Z') )

Matches all that have values between 2.0 and 3.0, including 2.0

  .. code-block:: sql

    range('myValue', 2.0, 3.0, 'true', 'false' )

Matches all that have publishFrom-date newer that the given date.

  .. code-block:: sql
  
	range('publishFrom', instant('2015-08-01T09:00:00Z'), '')
	
Matches all that have publishTo-date older that the given date. 

  .. code-block:: sql
  
  	range('publishTo', '', instant('2015-08-01T09:00:00Z'))