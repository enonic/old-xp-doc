The Country List Part
=====================

Each country content can now be viewed on a page. But the site home page is still a bit empty. This section will have you alter the "hello"
page controller and view files to list all of the country contents.

1. Edit the "hello" page controller ``site/pages/hello/hello.js`` and replace the file's contents with the code below:

.. literalinclude:: code/page-list/hello.js
  :language: javascript

2. Now edit the "hello" view file ``site/pages/hello/hello.html`` and replace its contents with the code below:

.. literalinclude:: code/page-list/hello.html
  :language: html

3. If you didn't start XP in :ref:`gradle_dev_mode` then redeploy the app from the command line with ``./gradlew deploy``.

Each country that you created is now listed on the home page and the names are also links to the individual content pages.

This concludes part 2 of the tutorial. Let's review what you've learned. First you created a content type by defining the data structure for
countries in the ``country.xml`` file. Then you created a custom part component to display the country data. Next you created a new page
component with a region. In the Content Studio, you created some "country" contents and added the page and put the country part in the
region. Then you made a page template to automatically render a page for all the country content. Finally, you modified the first page
component to show a list of the countries on the home page.

In the next section you will add cities to the site and learn how to make configurable parts.