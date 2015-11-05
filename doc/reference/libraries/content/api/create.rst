create
======

This function creates a content.

.. js:function:: create(params)

  :param object params: JSON with the parameters below.
  :returns: the content created as JSON.

**Parameters:**

name *(string)*
  Name of content. Optional, see below.

parentPath *(string)*
  Path to place content under.  Default is '/'.

displayName *(string)*
  Display name.  Default is same as <name>.

requireValid *(boolean)*
  The content has to be valid to be created.  Default is *(true)*.

contentType *(string)*
  Content type to use.

branch *(string)*
  Set by portal, depending on context, to either "draft" or "master". May be overridden, but this is not recommended.
  Default is the current branch set in portal.

language *(string)*
  The language tag representing the content's locale. This parameter is optional.

data *(object)*
  Actual content data.

x *(object)*
  eXtra data to use.


The parameter ``name`` is optional, but if it is not set then ``displayName`` must be specified.
When ``name`` is not set, the system will auto-generate a name based on the ``displayName``, by lower-casing and replacing certain characters.
If there is already a content with the auto-generated name, a suffix will be added to the name in order to make it unique.

.. TIP::

  To create a content where the name is not important and there could be multiple instances under the same parent content, skip the `name` parameter and specify a `displayName` .

**Example:**

.. literalinclude:: code/create.js
  :language: javascript

**Result:**

.. literalinclude:: code/create-result.json
  :language: json

If the content cannot be created because there is already a content with the specified path and name, an exception will be thrown.
This case can be handled in JavaScript by wrapping the call with a ``try catch`` and checking if the error code is "contentAlreadyExists", as in the example below:

**Example:**

.. literalinclude:: code/create-existing.js
  :language: javascript
