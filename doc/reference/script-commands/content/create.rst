content.create
==============

This command creates a content.

name *(string)*
  Name of content.

parentPath *(string)*
  Path to place content under.  Default is '/'.

displayName *(string)*
  Display name.  Default is same as <name>.

requireValid *(boolean)*
  The content has to be valid to be created.  Default is *(true)*.

contentType *(string)*
  Content type to use.

data *(object)*
  Actual content data.

x *(object)*
  eXtra data to use.

branch *(string)*
  Set by portal, depending on context, to either "draft" or "master". May be overridden, but this is not recommended.
  Default is the current branch set in portal.

Example:

.. literalinclude:: code/create.js
  :language: javascript

Result:

.. literalinclude:: code/create-result.json
  :language: json
