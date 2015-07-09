Backup and Restore
==================

Backing up your Enonic XP data is vital for any installation. There are several ways to secure your data.

* *Export/import:* see :ref:`operations-export`.
* *Snapshot/restore:*: see below.
* *Backup ``$XP_HOME/repo``-folder*: Only for non-clustered environments.

All the data in an Enonic XP installation is stored in ``$XP_HOME/repo``. This directory has two folders: ``blob`` and ``index``. The ``blob``
folder contains all files needed by the system to manage your data, while the ``index`` folder contains the Elasticsearch index folders. These
are dependent on each other in the sense that one is not much use without the other.

.. CAUTION::

  Technical details: When fetching data in Enonic XP, the index is scanned and a set of "blob-keys" are returned. These blob-keys
  refer to files in the `blob` folder where the actual contents are fetched. Each file in the `blob` folder is a binary blob or a serialized
  "node", which is the low level structure of your data.

That leaves us with ensuring that two elements are safely stored for retrieval in an emergency:

* ``$XP_HOME/repo/blobs``
* ``$XP_HOME/repo/index``


Backing up indexes
------------------

Backing up the indices is a bit more complex than just copying the index-folder since it involves floating data with state, especially in a
clustered environment. We have a number of rest-resources available at your disposal for snapshot operations:

``http://<your-installation>/admin/rest/repo/snapshot``
  Stores a snapshot of the current indices state.

``http://<your-installation>/admin/rest/repo/list``
  Returns a list of available snapshots for the installation.

``http://<your-installation>/admin/rest/repo/restore``
  Restore a snapshot of the indices state.

``http://<your-installation>/admin/rest/repo/delete``
  Deletes a single or a group of snapshots.


Snapshot
--------

The snapshot rest-service accepts a JSON in this format:

.. code-block:: json

  {
    "repositoryId": "<repository-id>"
  }

A snapshot of the given repository will be created for later retrieval. Each subsequent snapshot will store the changes between this snapshot
and the last snapshot of the given repository. This means that only changed data are stored when doing subsequent snapshots. The snapshots
will be stored in ``$XP_HOME/data/snapshot``. A name of the snapshot will be given at snapshot-time, and returned in the snapshot-result.

To ease the process, we have provided a :ref:`toolbox-snapshot` tool.


Restore
-------

The restore rest-service accepts a JSON in this format:

.. code-block:: json

  {
    "snapshotName": "<snapshot-name>",
    "repository" : "<repository-id>"
  }

The indices will be closed for the duration of a restore operation, meaning that no request will be accepted while the restore in running.
To ease the process, we have provided a :ref:`toolbox-restore` tool.

.. WARNING::

  Restoring a snapshot will restore data to the exact state of the indices at the
  snapshot-time, meaning all other changes will be lost.


Delete
------

The delete rest-service accepts a JSON in this format:

.. code-block:: json

  {
    "snapshotNames": ["name1", "name2"],
    "before" : "<timestamp>"
  }

Deletes either all snapshots before timestamp, or given snapshots by name. To ease the process, we have provided a
:ref:`toolbox-delete-snapshots` tool.
