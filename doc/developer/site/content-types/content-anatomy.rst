Standard Content Properties
===========================

* _id = string
* _name = fulltext
* _parent = string
* attachment = string
* displayName = fulltext
* contentType = string
* creator = string
* createdTime = datetime
* data = type
* x = type
* form = none
* language = string
* modifiedTime = datetime
* owner = string
* page = minimal
* page.regions = none
* site = none
* thumbnail = none
* type = string



A content has a set of standard properties (sorted alphabetically below).

_id
  The content id (same as node id)

_name
  The content name (same as node name)

_parent
  The parent content path (same as node parent)

attachment
  If content contains attachments, a list of attachment-names and properties.

contentType
  The content schema type.

creator
  The user principal that created the content.

createdTime
  The timestamp when the content was created.

data
  A property-set containing all user defined properties defined in
  the content-type.

displayName
  Name used for display purposes.

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
  If contentType is ``portal:site``, this will contain site-specific information.

thumbnail
  A thumbnail representing the content.

type
  A property used to identify content in a node repository.

x
  A property-set containing properties from mixins, also known as xtra data.
