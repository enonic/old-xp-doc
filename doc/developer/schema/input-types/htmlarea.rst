.. _htmlarea_type:

HtmlArea
--------

A field for entering multi-line text with rich-formatting options.

.. literalinclude:: code/htmlarea.xml
   :language: xml

common fields
  All Input Types have these :ref:`Common Fields <input_types_common_fields>`

default
  This element specifies a default value. The value can contain any HTML elements, but tags must be correctly closed since the input type is defined inside an XML.


config
   include
      List of space-separated tools to be added to the toolbar (see the tip below).
   exclude
      Use this to hide some of the default tools in the toolbar (see the tip below).


.. tip:: HTML Area is configured with default set of tools but the toolbar can be customized.
   Using the config setting you can exclude specific tools from being shown (use "*" to exclude all tools at once) and/or include those that you want to have in the toolbar.
   Separate tools with a space and use "|" character to group tool buttons together.
   Complete list of supported tools can be found below.

.. literalinclude:: code/htmlarea-customized.xml
   :language: xml

.. image:: images/htmlarea-customized.jpg



Default configuration of the HTML Area toolbar is shown below:

::

   Styleselect | Bold Italic Underline | Alignleft Aligncenter Alignright Alignjustify | Bullist Numlist Outdent Indent | Charmap Anchor Image Macro Link Unlink | Table



=============    ==================================
Name             Description
=============    ==================================
Styleselect      Text format menu
Bold             Bold text
Italic           Italic text
Underline        Underline text
Alignleft        Left align content
Aligncenter      Center content
Alignright       Right align content
Alignjustify     Justify content
Bullist          Add a bullet list
Numlist          Insert a numbered list
Outdent          Decrease indent
Indent           Increase indent
Charmap          Insert a special character
Anchor           Insert an anchor
Image            Insert/Edit an image
Macro            Insert a macro
Link             Insert/Edit a link
Unlink           Remove link
Table            Table format menu
=============    ==================================


These are additional tools supported by HTML Area that can be used in the input config:

==============   =====================================
Name             Description
==============   =====================================
Backcolor        Background color
Blockquote       Quotation
Code             Wrap text with code tag
Copy             Copy selected text into buffer
CopyFormatting   Copy formatting
CreateDiv        Wrap with div
Cut              Cut selected text into buffer
Font             Font menu
FontSize         Font size menu
HorizontalRule   Insert a horizontal line
Ltr              Text direction left to right
NewPage          Clean editor's content
Preview          Preview HTML Area contents
Redo             Repeat last action
RemoveFormat     Remove formatting
Rtl              Text direction right to left
SelectAll        Select editor's content
Strikethrough    Strikethrough over text
Styles           Text styles menu
Subscript        Subscript text
Superscript      Superscript text
TextColor        Text color
Undo             Undo last action
VisualBlocks     Visualize all block-level elements
==============   =====================================
