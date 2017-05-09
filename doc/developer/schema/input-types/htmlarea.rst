.. _htmlarea_type:

HtmlArea
--------

A field for inputting multi-line text, with formatting options.

.. literalinclude:: code/htmlarea.xml
   :language: xml

common fields
  All Input Types have these :ref:`Common Fields <input_types_common_fields>`

default
  This element specifies a default value. The value can contain any HTML elements, but tags must be correctly closed since the input type is defined inside an XML.


config
   forced-root-block
      This config setting can be used to override default wrapper element in the root of the HTML Area. By default it's ``<p>`` element. Set this option to "div" to switch to ``<div>``.
   include
      List of space-separated tools to be added to the toolbar (see the tip below).
   exclude
      Use this to hide some of the default tools in the toolbar (see the tip below).


.. tip:: HTML Area is configured with default set of tools but the toolbar can be customized.
   Using the config setting you can exclude specific tools from being shown (use "*" to exclude all tools at once) and/or include those that you want to have in the toolbar.
   Separate tools with a space and use "|" character to group tool buttons together.
   Complete list of supported tools can be found in description of :ref:`editing_input_types_html`.

.. literalinclude:: code/htmlarea-customized.xml
   :language: xml

.. image:: images/htmlarea-customized.jpg



Default configuration of the HTML Area toolbar is shown below:

::

   styleselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | charmap anchor image macro link unlink | table | pastetext



============     ==================================
Name             Description
============     ==================================
styleselect      Text format menu
alignleft        Left align content
aligncenter      Center content
alignright       Right align content
alignjustify     Justify content
anchor           Insert an anchor
bullist          Add a bullet list
numlist          Insert a numbered list
outdent          Decrease indent
indent           Increase indent
charmap          Insert a special character
anchor           Insert an anchor
image            Insert/Edit an image
macro            Insert a macro
link             Insert/Edit a link
unlink           Remove link
table            Table format menu
pastetext        Toggle paste text mode
============     ==================================


These are additional tools supported by HTML Area that can be used in the input config:

=============    =====================================
Name             Description
=============    =====================================
backcolor        Change text background color
blockquote       Add a quote block
bold             Make text bold
copy             Copy selected text into buffer
cut              Cut selected text into buffer
forecolor        Change text color
hr               Insert a horizontal line
italic           Make text italic
ltr              Left-to-right text direction
paste            Paste text from buffer into HTML Area
preview          Preview HTML Area contents
redo             Repeat last action
removeformat     Remove formatting of selected text
rtl              Right-to-left text direction
searchreplace    Find or replace text
strikethrough    Apply strikethrough effect to text
styleselect      Text format menu
subscript        Add subscript effect
superscript      Add superscript effect
underline        Underline text
undo             Undo last action
visualchars      Show hidden characters
visualblocks     Show hidden blocks
=============    =====================================
