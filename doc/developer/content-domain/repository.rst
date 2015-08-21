Content repository
==================

A built-in content repository called ``cms-repo`` is initialized when installing Enonic XP. This
is where content is stored when working with content in the Content Manager application or the content-API.

Inside a repository exists something called branches. A branch is a tree structure containing content.
The ``cms-repo``-repository has two branches:

* ``draft``
* ``master``

When working in Content Manager, the content seen is in the branch ``draft``. Content in
the portal is served from the ``master``-branch.

Moving content from the ``draft`` branch to the ``master``-branch are called publishing.
