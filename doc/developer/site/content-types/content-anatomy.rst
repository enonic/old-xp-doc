Standard Content Properties
===========================

These are the standard content properties - value type and index options specified in parentheses.

_id (string)
  The content id (this is the same as node id)

_name (string, fulltext, ngram)
  The content name (same as node name)

attachment (propertySet)
  If content contains attachments, a list of attachments with respective properties will be listed here.

type (string)
  The content schema type.

creator (string)
  The user principal that created the content.

createdTime (dateTime)
  The timestamp when the content was created.

data (propertySet)
  Contains all user defined properties as defined by the contentType.

displayName (string, fulltext)
  Name used for display purposes.

language (string)
  The locale-property of the content.

modifiedTime (dateTime)
  Last time the content was modified.

owner (string)
  The user principal that owns the content.

page (propertySet)
  The page property contains page-specific properties, like template and regions.
  This will typically be reference to a page-template that supports the content-type.

publish (propertySet)
  Contains publish-information, e.g ``publish.from``

x (propertySet)
  A property-set containing properties from x-data and mixins.
