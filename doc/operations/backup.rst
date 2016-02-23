.. _backup:

Backup and Restore
==================

Backing up your data is vital for any installation.

All the data in an Enonic XP installation is stored in ``$XP_HOME/repo``. This directory has two folders: ``blob`` and ``index``.

The ``blob`` folder contains all files needed by the system to manage your data, while the ``index`` folder contains the Elasticsearch index folders. These
are dependent on each other in the sense that one is not much use without the other.

That leaves us with ensuring that two elements are safely stored for retrieval in an emergency:

* ``$XP_HOME/repo/blobs``
* ``$XP_HOME/repo/index``

Backup vs Export
----------------
The export/import-API enables you to dump your data to a serialized format. The serialized data could then be imported into another instance. This is very useful, but is not optimal for a backup/restore scheme since it requires some work to get things up and running again, especially when working with big installations with a lot of data. The backup/restore-process described below on the other hand, should enable a quick and safe way to get your system back to operation when in a hurry.

See :ref:`operations-export` for more information on export/import.

Backing up blobs
------------------
The blobs are just files on a filesystem. This should be backed up by your preferred way of doing file-backups.

The folder to backup is:

* ``$XP_HOME/repo/blobs``

Backing up indexes
------------------

Backing up the indices is a bit more complex than just copying the index-folder since it involves floating data with state, especially in a
clustered environment. To help you out, we have a snapshot-API. A snapshot is exactly that; a snapshot of the indices state at a point of time.
There are 4 rest-resources at your disposal.

``http://<your-installation>/admin/rest/repo/snapshot``
  Stores a snapshot of the current indices state.

``http://<your-installation>/admin/rest/repo/list``
  Returns a list of available snapshots for the installation.

``http://<your-installation>/admin/rest/repo/restore``
  Restore a snapshot of the indices state.

``http://<your-installation>/admin/rest/repo/delete``
  Deletes a snapshot or a group of snapshots.


Snapshot
*********

The snapshot rest-service accepts a JSON in this format:

.. code-block:: json

  {
    "repositoryId": "<repository-id>"
  }

A snapshot of the given repository will be created for later retrieval. Each subsequent snapshot will store the changes between this snapshot
and the last snapshot of the given repository. This means that only changed data are stored when doing subsequent snapshots. The default
location where snapshots are stored is ``$xp_home/snapshots``. A name of the snapshot will be given at snapshot-time, and returned in the
snapshot-result.

To ease the process, we have provided a :ref:`toolbox-snapshot` tool.


Restore
*********

The restore rest-service accepts a JSON in this format:

.. code-block:: json

  {
    "snapshotName": "<snapshot-name>",
    "repository" : "<repository-id>"
  }

The indices will be closed for the duration of a restore operation, meaning that no request will be accepted while the restore in running.
To ease the process, we have provided a :ref:`toolbox-restore-snapshot` tool.

.. WARNING::

  Restoring a snapshot will restore data to the exact state of the indices at the
  snapshot-time, meaning all other changes will be lost.


Delete
*********

The delete rest-service accepts a JSON in this format:

.. code-block:: json

  {
    "snapshotNames": ["name1", "name2"],
    "before" : "<timestamp>"
  }

Deletes either all snapshots before timestamp, or given snapshots by name. To ease the process, we have provided a
:ref:`toolbox-delete-snapshots` tool.
