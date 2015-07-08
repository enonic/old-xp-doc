Content Structure
=================

A content has a finite set of possible properties.

_id
  The content id.

_name
  The content name.

_parent
  The parent content path.

attachment
  If content contains attachments, a list of attachment-names and properties.

displayName
  Name used for display purposes.

contentType
  The content schema type.

creator
  The user principal that created the content.

createdTime
  The timestamp when the content was created.

data
  A property-set containing all user defined properties defined in
  the content-type.

x
  A property-set containing properties from mixins.

form
  The form defining the input type elements in the content.

language
  The locale-property of the content.

modifiedTime
  Last time the content was modified.

owner
  The user principal that owns the content.

page
  The page property contains page-specific properties, like template and regions.
  This will typically be reference to a page-template that supports the content-type.

site
  If content of type ``portal:site``, this will contain site-specific information.

thumbnail
  A thumbnail representing the content.

type
  A property used to identify content in a node repository.


When creating a content, all defined properties in the content-type are stored under
the content's data property. These properties will get the prefix ``data``.

For example, a content-type article is defined like this:

.. literalinclude:: code/content-type-article.xml
   :language: xml

The property "title" is now available in queries under the path ``data.title``::

  data.title = 'Fish and cheese'
