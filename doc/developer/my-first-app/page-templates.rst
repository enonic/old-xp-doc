The Country Page Template
=========================

.. |cogicon| image:: images/icon-cog.png
.. |monitoricon| image:: images/icon-monitor.png

With our current solution, sadly, we'll have to create a new page for every country we add.
As this is not a very effective way of working with large data sets, we will create a page template to simplify the process.

1. Select the Templates item located below the "Hello World" site in the content pane.
2. Click "New" and select "Page Template".
3. Fill in the form as follows:

  * Display Name: "Country"
  * Supports: "Country" (selected from the list of content types)

4. If the blue Page Editor panel is not displayed on the right, click the |monitoricon| button in the toolbar. Then select the "Hello
   Region" controller with the dropdown.
5. Open the Inspection Panel (activated from the cog button |cogicon| in the toolbar).
6. Under the "Insert" tab, drag and drop a "Part" into the empty region.
7. Select the "country" part from the dropdown. (You may need to close the Inspection Panel to see the dropdown.)
8. Click "Save draft" in the toolbar and close the tab.

Every "Country" content you create will now use this template by default.

.. TIP:: The "Support" property is the key. A page template will support rendering of the content types specified here.

Try this out by creating a few new countries in your site. Make sure you select the "Hello World" site before clicking "New" in the
toolbar. Every content you create will be a child of the content that was selected in the content pane.


Extra task
----------

**Make your Favorite Country use the page template too!**

You might remember that your favorite country was "hardcoded" - so let's change it to use templates as well.

#. In the Content pane, double click the country content to edit it.
#. Click on the page in the Page Editor. A context menu should appear with the name of the country. If the word "country" appears in the box
   then you have selected the part. In that case, click the "Parent" button twice.
#. Open the Inspection Panel (cog button |cogicon|) and select "Automatic" from under the "Renderer" label. (It's under the "Inspect" tab)
#. Save draft and close the tab.

You can select another `Page template` at any time, or even customize the presentation of a single content.
