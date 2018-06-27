Indexed content properties
==========================

All user defined properties are indexed and available for queries. 

In addition there are a number of standard content-properties available for search:

_alltext
    A collection of all fulltext-analyzed fields (textLine, textArea, htmlArea) in a content in one property

_id
	Holds the id of the content, typically generated automatically in the form of a UUID.

_manualordervalue
	The order value used when child-content is ordered manually

_name
	Holds the name of the content

_parentPath
	Reference to parent content path.

_path
	The content path

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
	The principals that have access to read the content permissions.

_permissions_writepermissions
	The principals that have access to change the content permissions.

_references
	Outgoing references to other content. 

_score
	Calculated relevance for a hit

_state
	Used for keeping state of a content in a branch.

_timestamp
	The last change to the content version.

_versionKey
	The id of the node version.
  
attachment.size
	If any attachments, contains an array of attachment sizes

attachment.label
	If any attachments, contains an array of attachment labels

attachment.mimetype
	If any attachments, contains an array of attachment mime-types

attachment.name
	If any attachments, contains an array of attachment name

attachment.binary
	If any attachments, contains an array of attachment file-name

attachment.text
	If any attachments, contains the extracted text of e.g pdf-files

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
  	
page.region.component.textcomponent.text
	This property contains all values in the text-components added to pages

publish.from
	The time when the content was first published. This timestamp will be the set both in draft and master branch.

type
  	The content-type name

x
  	A property-set containing properties from x-data (this also includes mixins).
