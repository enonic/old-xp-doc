Release Notes
=============

Enonic XP |version| is a minor release, with several new feature and fixes - there are no breaking changes


Custom error-pages
------------------
You can now easily create error pages in javascript, handling any http errors.
It's as simple as creating an error.js file, exporting for instance handle404() or handleError() functions.

See :ref:`error_page` for more details


Response Filters
----------------
You can now create response filters using Javascript. This is a powerful feature that enable developers to wire into any
request for a site - and optionally manipulate it. The response filters will work across different applications when installed on a site.

Example use-cases:
* Create application that automatically adds script elements to all pages
* Replace a certain text string for any page
* Automatically add custom headers to specific pages

See :ref:`response_filters` for more details

Perfect caching
---------------
Asset, image and attachment served over HTTP now implement so-called perfect cache.
In short, this means that these resources have header tags that enable "infinite" caching, so proxies and browsers can cache them locally - resulting in improved performance for the end user.

The downside of this is normally associated with problems with old items hanging around in the various clients. The perfect cache implementation however always creates new urls if an item is changed, effectively preventing this problem.

Images and attachments that are not publicly accessible (restricted access) are served with "private" headers, effectively preventing proxies from caching them, and exposing the data to the wrong users.

No configuration or changes to your code is required

HTTP Compression
----------------
All items served over HTTP are now automatically Gzipped to optimize performance and network bandwidth.

No configuration or changes to  your code is required


Minor improvements
------------------

* Enabled request log configuration
* Listing of attachments in Content Detail panel
* Lib-auth - New function generatePassword()
* Lib-auth - New function changePassword()
* Content API - name value is now optional
* Init-project - Projects are created even if target folder contains files
* Added "Settings" button to context menu
* Media content's attachment name does not change if modified
* Simple modular JSON status API now available
* Styled component placeholders with errors in Live Edit
* Fixed layout of "More" and "Actions" fold buttons in Admin
* Tighter integration with bundled HTTP server - Jetty


Bugfixes
--------

* Page Component View - State of context menu's dropdown icon doesn't change
* Page Component View - Toggle state of the "Inspect panel" button in toolbar when the context window is open
* Publish a content with an invalid reference fails with exception
* Component View not displayed if a descriptor is missing or has an error
* Content wizard toolbar - "Component view" and "Inspection panel" buttons are visible when LiveEdit is hidden
* Page Component View - Item context menu is shown after the view was closed
* Hide icon for collapsing content wizard when LiveEdit is inactive
* Detail panel - Missing display name for unnamed content
* Details Panel is empty when content have been selected and published
* ContentDeleteDialog - Wrong number of items to delete
* Attachment type for the same attachment differs depending of upload method
* Fix delete confirmation message for unnamed content
* Details panel has empty content on first open with selected item
* Multiple duplicated requests when selecting content in Content Manager
* Page Component View - Context menu should be closed when pressing Application Home
* LiveEdit - Error when opening Superhero for edit in XP admin
* Impossible to delete not valid content that has "modified" status
* Controller get/post without a return giving 405
* Component View - Fix presentation of page in tree
* Grid not refreshed when content deleted
* Enable Apply button in Edit Permissions dialog when overwrite child permissions is selected
* Incorrect appearance of Spinner when site-wizard was opened
* ContentVersionFactory - Incorrect ContentVersionId
* Three requests to WidgetDescriptorService made upon app page loaded
* ContentBrowse-toolbar - 'More' and 'Refresh' buttons location problem
* Image name and path remains visible after unselecting item in ImageSelector
* Created content not displayed after the page redirection
* Site Wizard - Preview-button on toolbar should be disabled when site has no templates
* App gradle-plugin not working for Gradle 2.8
* Content with invalid fields is marked as valid
* Content still selected after clicking the remove button in the browse panel
* Detail panel - Contents disappear after modifying an item
