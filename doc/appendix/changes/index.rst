Release Notes
===================

Enonic XP |version| is a minor release, with several new feature and fixes - there are no breaking changes


Content Detail panel UI
-----------------------

Access contextual content metadata and advanced options directly from the content browse view.
In upcoming versions this panel will include more information and capabilities.

.. image:: images/detail-panel.png
  :alt: Detail panel can be seen to the right

Impoved UI Responsiveness
-------------------------

The Content Manager browse view has been enhanced for mobile, i.e. for showing preview and detail panel instantly when cliked - similar to reading mail on iOS.
Also, the content editor panel has improved support for mobile devices.

.. image:: images/mobile.jpg
:alt: Browse view, Preview and Detail view

Improved Site config UI
-----------------------

Site application configurations are now edited from a modal dialogue. This simplifies the main site form and also makes it easier to configure applications installed on sites.

.. image:: images/site-config.png


Insert from context menu
------------------------

Using the page editor and context menus - users can now insert new components directly from this menu. New components will be placed below the selected component.
If a region is selected the component will be placed on top of the region.

.. image:: images/insert-context-menu.png


Improved Component Panel
------------------------

The component panel now supports all operations insert, reorder (drag'n drop), delete, reset etc. Simplifying editing of complex pages.

.. image:: images/component-panel.png


Improved Image editor
---------------------

The image editor has been improved to make use of the entire viewport

.. image:: images/image-editor.png


New API capabilities
--------------------

The Serverside Javascript controllers and API have been improved as follows:

**Lib-mail**

  Mail server can now be added as a system setting - this can be utilized from the new Javascript library.
  Enables sending mail directly from Javascript controller - detailed documentation. Read more about :ref:`lib-mail`

**Lib-auth**

  Enables logging in users and getting users and roles through Enonic XP's native identity system. Read more about :ref:`lib-auth`

**Post text bodies to JS Controllers**

  Javascript controllers now support text-based body elements in post requests - this enables posting JSON strings in the body for instance - a popular way to pass complex objects to the server. Read more about :ref:`request`

**Set cookies in JS controller response**

  Developers can now set cookies directly from the JS controller. Read more about :ref:`cookies`


New Project Init Tool
--------------------------

The project initialization tool has been rewritten, and now supports ripping any valid Enonic XP application project directly from any Git installation, and GitHub specifically.
This is also accompanied with a new starter app: starter-base, available on GitHub https://github.com/enonic/starter-base.

Read more about :ref:`init_project`

Faster and safer Node Persistance
==================================

The node persistance layer has been completely rewritten in order to improve both speed and robustness. Single node write operations now are now only limited by disk-write speed.

Minor improvements
------------------
  * Refactored portal to use standard servlets
  * Style component placeholders with errors in Live Edit
  * Import of an existing node should update the node permissions
  * Enable refreshing of grid in case of event-problems
  * Publish button should be enabled without saving
  * Make require(..) function in javascript look for index.js in a folder
  * Toolbar Overflow menu - Improved design consistency
  * Remove/fix annoying splash screen from content browse
  * Support for Javascript Date-type in views
  * Set UTF-8 as default file encoding at startup
  * Implement Thymeleaf fragment support
  * Admin UI - Improve loading of background image
  * Wizard - Improve handling of "name" field for mobile clients
  * Deprecate Gradle watch task in favour of new continuous mode
  * Use HttpMethod enum in PortalRequest.getMethod
  * Use MediaType object in PortalResponse
  * Use HttpStatus enum in PortalResponse
  * Content Manager BrowsePanel - Use same ratio for panel widths as in WizardPanel
  * Serverside Image caching - ByteSource & Lazy loading
  * Replace jmustache in admin/portal with simple replacer

Bugfixes
--------
  * Image Selector - When doing DND two blue bubbles appears
  * Cropping is not reset when replacing image in Image Editor
  * Children not ordered properly after sorting
  * Publishing Wizard ResolveSyncWork fails on nodes not in source repo
  * Date format does not work for aggregations in lib-content
  * ContentTreeGrid - Spinner shown when selecting content
  * Launcher fails for certain JDK versions
  * Adding layout if name is changed crashes the layout selector
  * Possible to create two nodes with same path with different case
  * Preview without saving draft not working
  * Security - Permissions not propagating correctly to child items
  * Grid not refreshed, when content deleted
  * Image editor - Autofocus does not work properly after canvas resize
  * Other files listed as Parts and Page Templates in App Manager
  * Live-edit frame occupies full screen when browser window is maximized
  * NullPointerException retrieving principals right after deleting a user
  * Can't publish changed sorting of menu items
  * Page Editor - Inserting new components does not put inspect panel in focus
  * Content Browse - When in mobile browse view, the main colum is broken
  * Bad notification message when content saved with a name that is already in use
  * Inline mixin in site.xml does not work
  * Some math operations using lib-content throws an exception
  * Behavior of validation for content in the Wizard and Grid are different
  * Component View not displayed if a descriptor is missing or has an error
  * Bad validation for content with type geopoint
  * Content grid triggers request for deleted items
  * Language combobox - search does not work when full string is typed
  * Grid in browse-panel not refreshed when content deleted
  * Live Edit - Clicking directly on large components, page leaving context menu outside viewport
  * Spinner is shown infinitely when existing content under a site is opened
  * Image Editor - Fix canvas resizing control
  * Site Wizard - Preview-button on toolbar should be disabled when site has no templates
