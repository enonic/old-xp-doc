Content repository
==================

Every content item produced is eventually stored as nodes in the low level storage, read more about the :ref:`node_domain`.

A system standard repository called ``cms-repo`` is initialized when installing Enonic XP. This
is where content is stored when working with content in the Content Studio application or the content-API.

The content-API actively uses the branch capabilities. The ``cms-repo`` has two branches:

* ``draft``
* ``master``

The content seen while working in Content Studio is in the ``draft`` branch. Content in
the portal is served from the ``master`` branch.

Publishing a content moves it from the ``draft`` branch to the ``master`` branch.
