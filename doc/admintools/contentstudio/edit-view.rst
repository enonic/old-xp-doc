.. _edit_view:

Edit View
=========

.. NOTE::
   This page is under construction. This information is likely incomplete and possibly inaccurate until this notice is removed.

The **Edit view** exits as an internal tab within the Content Studio page. It appears when a content is created or edited. Multiple content
tabs can be open at the same time. Users can switch between tabs by clicking them. The :ref:`browse_view` can be reached by clicking the
words "Content Studio" at the top-left of the page the the content tabs will remain where they are. The tab will have a red circle with an
exclamation mark if the content is not valid due to missing required fields. Invalid content can be saved in the **draft** branch but it
cannot be published.

The edit view has several parts. On the left is the content editor panel. The center is where the page editor appears for content that has
a page template. The inspection panel is on the right.

Content editor panel
--------------------

This is where the form appears in which content data is entered. The structure and fields in the form are determined by the **content type**
which is defined in the application code. The panel can be collapsed to give the page editor more room.

The top of the content editor panel has the content type icon, the Display Name, and the content path name. The default icon can be replaced
with an image file by clicking on it. As the Display Name is entered, the path name will automatically be filled in with a URL friendly
version. The path will not update automatically once the content has been published. This is to prevent accidentally broken hard-coded
links. The path name can always be changed manually. It is also possible for the Display Name to be generated automatically while other
fields in the form are filled in if the content type was set up that way in the application code.

Next is a ribbon with buttons that correspond to different sections of the content form. All content will have buttons for the content type
name, **Settings**, and **Security**. Other items may be in the ribbon if x-data was added to the content type in the application code.
Clicking on an item in the ribbon will scroll the content editor panel to the corresponding section of the form.

The content data section is next and the form fields will depend on how the content type was set up.

The **Settings** area is where the content's Language and Owner are set. The **Language** will be inherited from the parent content if it
was set there. The Owner will be the logged in user who created the content, but it could be changed if the current user has the right
permissions.

The **Security** section is where the content's permissions are set. Content will inherit the permissions of the parent content when
created. Users, Groups and Roles can be added to the content. Clicking on any item here will expand the item and show what permissions the
principal has. Read more in the security section.

Page editor panel
-----------------

The page editor is a preview of the content page but components can be added, deleted, and moved around with drag and drop. This only
appears if the content type has a supporting page template, or if a page template was manually assigned to the content.

Inspection panel
----------------

This panel is a multi-function tool that can be toggled open and closed with the cog icon at the right of the toolbar. It is used in
conjunction with the **Page Editor** to add and configure components on the page and to emulate various device sizes.

Components view
---------------

This tool opens in a draggable internal window. It displays a hierarchical tree representation of all the components on the page, including
the page itself. This tool is extremely valuable in situations where an unconfigured component does not render or is very small and
difficult to find in the page editor. Selecting a component in the tree will display its configuration in the inspection panel **Inspect**
tab. The triangle on the right of each component will open a menu of options that can be selected for the component.


.. image:: images/edit-view.jpg

.. toctree::
   :maxdepth: 1

   create-content
   edit-content