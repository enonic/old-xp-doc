Querying paths
==============

All nodes have 3 system-properties concerning the node placement in a branch, all of type ``String``:

* ``_name``: The node name without path.
* ``_parentPath``: The parent node path.
* ``_path``: The full path of the node.


Finds node with path ``/content/mySite/myCategory/myContent``.

  .. code-block:: sql

    _path = '/content/mySite/myCategory/myContent'

Finds all nodes with name ``myContent`` in a folder named ``myCategory``,
e.g ``/content/test/thisIsMyCategory/myContent`` and ``/content/myCategory/myContent``.

  .. code-block:: sql

    _name = 'myContent' AND _parentPath LIKE '*myCategory'

Finds all nodes under the path ``/content/mySite/myCategory`` including children of children.

  .. code-block:: sql

    _path LIKE '/content/mySite/myCategory/*'

Finds only first level children under the path ``/content/mySite/myCategory``.

  .. code-block:: sql

    _parentPath = '/content/mySite/myCategory'
