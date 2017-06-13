.. _cs_widgets:

Widgets
=======

Widgets are apps that add functionality to the Content Studio. As of version |version|, widgets are limited to the :ref:`detail_panel` where
they display custom information about whichever content is selected in the tree view. Installed widgets are listed in a dropdown selector at
the top of the panel.

.. tip:: Widgets are user-definable. Read more about how to create your own :ref:`widgets`.

In addition to the details panel, there are two built-in widgets.

.. _version_history:

Version history
---------------

Every time a content is saved with changes, a new version is created. The **Version history** widget displays a list of each version for a
selected content. This widget also allows the user to switch between versions of a content.

Each version item in the list displays the name of the user who made the changes and the length of time since the change was made. If the
content has been published then the published version will be marked as "Online" with a green heading.

Selecting one of the version items will expand it to reveal the timestamp, version id, and the display name of the content.

.. image:: images/version-history.jpg

Active version and online version
*********************************

Every content has one **active version**. A published content will also have an online version. The active version is the one shown in the
preview and the one that will be loaded into the content editor when the content is edited. When a content is published, the active version
is the one that goes online so it will be both the active and online version.

The active version can be changed by restoring a different version. If the active version is older than the published version, it will be
listed as "Out-of-date". The active version will be listed as "Modified" if it is newer than the online version.

Restoring a version
*******************

Any version can be set as the **active version** by selecting it and clicking the button labeled "Restore this version". Doing so will not
change the published (online) version. This means that a previously published version of the content will remain online when a version is
restored. A content must be published before the restored (active) version goes online.

.. _dependencies_widget:

Dependencies
------------

Content can be configured to use content of other types. For example, an article content might use a ContentSelector for adding pre-defined
categories. The dependencies widget makes it easy to find all the content that uses, or is used by, the selected content.

Select the Dependencies widget in the details panel and then select a content in the tree grid. The icon, name, and path of the selected
content will appear in the center of the details panel. An icon for each type of inbound dependency is listed at the top-left. Icons for
each type of outbound dependency are listed at the bottom-right. Next to each content type icon is the number of dependent items of that
type.

.. image:: images/dependencies-widget.jpg

**Inbound** dependencies are other content items that use the selected content. **Outbound** dependencies are the content items that are
used by the selected content. For example, the image above shows a Post content named March Madness. This Post has five inbound Comment
items that reference the March Madness post. The Post itself references one image content, one Author content, and two Category contents.
Therefore, the image, Author and Categories are outbound.

Inbound and outbound content can be viewed by clicking the respective buttons at the top and bottom of the dependencies widget. This will
open the search panel on the left and filter the tree grid to show only the selected dependency type.
