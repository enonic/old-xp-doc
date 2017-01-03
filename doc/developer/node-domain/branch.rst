.. _node-domain-branches:

Branches
=========

A branch is a set of data in a :ref:`node-domain-repository`. The data is organized hierarchically with path, unique in the branch.
This means that the fully qualified location of a data object in Enonic XP consists of:

* repo
* branch
* path

All repositories have a default branch called ``master``. Any number of branches could be added to facilitate your data.
E.g; in the content-repository, used for managing content in the Content Studio, there are two branches:

* ``draft`` (data as seen in the Content Studio)
* ``master`` (the data served in the portal)


Synchronizing branches
-----------------------

Often, you want to manage the same data-entities in different versions in different branches, and synchronize the data between them.

In the content-api, this operation is called to "publish" the data, which synchronizes the data between two branches.
In the node-api, its also possible to get the diff between two repositories, and a push operation to push differences from one branch to another.
These operations will ensure that references and dependencies are maintained, e.g its not possible to push a child-node to a branch if the parent does not exist in the target branch, so the parent node will also be pushed to the target branch.


Example:
#########

Consider the 'Oslo' and 'Enonic' nodes from earlier sections:

.. image:: images/nodes.png

There will be two *node-versions* in the repository stored in the blobstore:

.. image:: images/node-versions.png

A node-version is a representation of a node's properties. A node-version has no knowledge of name, parent or other meta-data: just the properties of a node.
At the same time, the targeted branch (named 'draft' in this example) gets two entries:

.. image:: images/branch_initial.png

The node-versions are now a part of a tree-structure, based on the node's name and parent.
If we *push* the content of branch 'draft' to the default branch 'master', we end up with something like this:

.. image:: images/branch_push.png

At the moment, there are two branches pointing to the same node-versions. This means that a single node version can exist in several branches with different structures.
Now, consider that the 'oslo' - node is updated and stored to the 'draft'-branch, resulting in a new node-version with the same id and an updated pointer from the branch:

.. image:: images/branch_diff.png

The two branches now point to different node-versions of the 'oslo' node.
Again, doing a push-operation from 'draft' to 'master' will result in both nodes pointing to the same node-versions:

.. image:: images/branch_push_2.png
