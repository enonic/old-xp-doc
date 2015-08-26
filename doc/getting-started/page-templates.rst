Page Templates
==============

With our current solution, sadly, you would have to configure a page for every country you create.
As this is not a very effective way of working with large data sets, we will create a page template to simplify the process.

Create Country Template
-----------------------

1. Select the Templates item located below the "Hello World" site in the content pane.
2. Click "New" and select "Page Template".
3. Fill in the form as follows:

  * Display Name: "Country"
  * Supports: "Country" (selected from the list of content types)

4. In the Live Edit panel on the right, select the "Hello Region" controller.
5. Open the context panel (activated from the cog button in the toolbar).
6. Under the "Insert" tab, drag and drop a "Part" into the empty region.
7. Select the "country" part from the dropdown. (You may need to close the context panel to see the dropdown.)
8. Click "Save draft" in the toolbar and close the tab.

Every "Country" content you create will now use this template by default.

.. TIP:: The "Support" property is the key. A page template will support rendering of the content types specified here.

- Try this out by creating a few new countries in your site. Make sure you click the "Hello World" site before clicking "New" in the
  toolbar. Every content you create will exist as a child of the content that is selected in the content pane.

Update Favorite Country
------------------------

You might remember that your favorite country was "hardcoded" - so let's change it to use templates as well.

#. In the Content pane, select the country and click "Edit".
#. In Live Edit view, click on the page. A box should appear with the name of the country. If the word "country" appears in the box then
   you have selected the part. In that case, click the "Parent" button twice.
#. Open the context panel (cog button in the toolbar) and select "Automatic" from under the "Renderer" label. (It's under the "Inspect" tab)
#. Save draft and close the tab.

You can select another `Page template` at any time, or even customize the presentation of a single content.
