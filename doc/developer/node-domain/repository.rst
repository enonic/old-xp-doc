.. _node-domain-repository:

Repository
==========

A repository is silo where nodes can be stored. Data stored in a repository will
typically belong to a common domain. Fetches and searches are by default executed against
a single repository, so it makes sense to keep data from different domains separated in different repositories.

When nodes are stored in the repository, two things happens:

* The node properties are stored in a :ref:`node-domain-blobstore` as a *node-version*.
  A node-version is an entity representing the properties of the node, without name,
  parent and other meta-data.

* The node is inserted into a :ref:`node-domain-branches`. The branch keeps track of a
  tree-structure referring to node-versions.

Built-in repositories
---------------------

Out of the box, Enonic XP ships with two built-in repositories:

* ``system-repo``: The core repository. Here, users and groups, references to other repositories, installed application etc are stored.
* ``cms-repo`` : Content domain data, this is the data managed in the Content Studio app.


Managing repositories
---------------------
Repositories (including :ref:`node-domain-branches`) can be managed in the Repository API. When creating a repository, separate storage- and search-indexes will be created, and references to these repositories stored in the ``system-repo``.
