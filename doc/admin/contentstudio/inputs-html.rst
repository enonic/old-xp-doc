.. _editing_input_types_html:

Html Area input type
====================

There are three input types for entering text. The Text Line and Text Area are covered in the :ref:`editing_standard_input_types` page. This
section will cover the HtmlArea.


The HtmlArea is a special input type that allows text to be formatted in various ways. Code and iFrames can be embedded with macros. Images
and content links can also be inserted. The editing features of the HtmlArea are the same for the Text component, except that the toolbar
for the text component appears at the top of the page.

.. image:: images/input-htmlarea.png

Toolbar
-------

The toolbar has buttons for various formatting options as well as inserting things like pictures, links, special characters and more.

Paragraph Format menu
+++++++++++++++++++++

Paragraph Format menu contains options for styles that can be applied to the entire paragraph, for example to create heading elements or snippets of code.


Inline Format
+++++++++++++

The next group of icons represent inline styles which can be combined in the same paragraph, for example bold, italic, strikethrough etc.


Alignment
+++++++++

The next four icons can be used to change alignment of selected element: left-align, center, right-align or justify.

Lists
+++++

The next two icons will turn text into a bullet list or a numbered list. Pressing "enter/return" will make a new list item and pressing it a
second time will end the list. Use shift + enter/return to make a new line within the list item. A sub-list can be created with the indent
button.

Indent
++++++

The next buttons will decrease and increase indent for the selected text. These buttons will also increase or decrease the level of a list
item.

Special character
+++++++++++++++++

This button opens a menu with 250 special characters. Selecting one will insert it at the cursor's location.


Anchor
++++++

Anchors enable pointing to a specfic position on a page via context link. If a link references an anchor on the same page then the page will scroll up
or down to the location of the anchor. The anchor button in the toolbar opens the **Insert Anchor** dialog where the name of the anchor is
entered. The anchor name will be used as the value of the "id" attribute, so it should be lower case without spaces.

Insert/Edit image
+++++++++++++++++

This button opens the **Insert Image** dialog. An existing image content can be selected from the "Image" selector, or a new image can be
uploaded by clicking the upload button. Once an image is selected, some formatting options appear. The image can be floated to the left or
right so that text wraps around it. The image can also be centered or set to full width. A checkbox allows you to keep the image at its
original size. A **Cropping effect** selector has options for various aspect ratios. A caption can be entered at the bottom.

Insert macro
++++++++++++

This button opens the **Insert Macro** dialog, which contains a selector for choosing a macro. Macros allow all sorts of things to be
inserted into the input, such as iframes, YouTube videos, Twitter Tweets, etc. There two built-in macros and others can be added with
applications. Once a macro is selected, a form appears with inputs for the macro's configuration settings.

Insert/Edit Link
++++++++++++++++

This button opens the **Insert Link** dialog. You can select existing text in the HTML Area before opening the dialog or write it directly
inside the dialog. You can link to a content item, external URL, trigger download or a new email.

Unlink
++++++++++++++++
Pressing this button will remove a link from an element.

Table
++++++++++++++++
This button expands a dropdown menu enabling you to insert a new table, manage table properties or add/delete columns/rows in existing table.


.. tip:: Although HTML Area comes with default toolbar, it can be customized to exclude specific (or all) tools and/or include other tools that are supported.
   Read about this in description of :ref:`htmlarea_type` input config.


.. tip:: Read about keyboard shortcuts supported in the HTML Area in our :ref:`Keyboard shortcuts<htmlarea_shortcuts>` section.
