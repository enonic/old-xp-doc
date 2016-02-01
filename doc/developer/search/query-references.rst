Querying references
===================

References to other nodes are stored in a property named ``_references``. This could be used to find incoming references to a node.

Examples:
---------

Find all nodes referring to the node with nodeId = 'myNodeId':

  .. code-block:: sql

    _references = 'myNodeId'
