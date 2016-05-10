Querying paths
==============

All nodes have three system-properties concerning the node placement in a branch, all of type ``String``:

* ``_name``: The node name without path.
* ``_parentPath``: The parent node path.
* ``_path``: The full path of the node.

See the query-function :ref:`pathMatch` for advanced path-matching

.. NOTE::

	When working with content, all paths are under a special root containing content; `/content`.
	
	While this mostly is explicit when working in the content-domain, this has to be dealt with when using paths in query-expressions and functions since you are actually querying nodes.
	

Examples
--------

Finds node with path ``/content/mySite/myCategory/myContent``.

  .. code-block:: sql

    _path = '/content/mySite/myCategory/myContent'

Finds all nodes with name ``myContent`` in a folder named ``myCategory``
e.g ``/content/test/thisIsMyCategory/myContent`` and ``/content/myCategory/myContent``.

  .. code-block:: sql

    _name = 'myContent' AND _parentPath LIKE '*myCategory'

Finds all nodes under the path ``/content/mySite/myCategory`` including children of children.

  .. code-block:: sql

    _path LIKE '/content/mySite/myCategory/*'

Finds only first level children under the path ``/content/mySite/myCategory``.

  .. code-block:: sql

    _parentPath = '/content/mySite/myCategory'
