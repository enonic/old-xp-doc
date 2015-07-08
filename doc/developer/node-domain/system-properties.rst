.. _node-domain-system-properties:

System Properties
=================

To reduce complexity, we explicitly dropped the use of namespaces. Thus, in
order to separate system properties from user defined properties, we
reserved ``_`` as a starting character for system properties.

Below are the system properties explained.

_id
  Holds the id of the node, typically generated automatically in the form of a UUID.

_name
  Holds the name of the node. The name must be unique within its scope (all nodes with same parent).

_parentPath
  Reference to parent node path.

_path
  The path is resolved from the node name and parent path.

_timestamp
  The last change to the node version.

_nodeType
  Used to create collections for nodes in a repository.

_versionKey
  The id of the node version.

_state
  Used for keeping state of a node in a branch.

_permissions_read
  The principals that have read access.

_permissions_create
  The principals that have create access.

_permissions_delete
  The principals that have delete access.

_permissions_modify
  The principals that have modify access.

_permissions_publish
  The principals that have publish access.

_permissions_readpermissions
  The principals that have access to read the node permissions.

_permissions_writepermissions
  The principals that have access to change the node permissions.
