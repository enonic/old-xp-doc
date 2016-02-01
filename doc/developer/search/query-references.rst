Querying references
===================

References to other nodes are stored in a property named ``_references``. This could be used to find incoming references to a node.


Find all nodes referring to the node with id = 'abc':

  .. code-block:: sql

    _references = 'abc'
