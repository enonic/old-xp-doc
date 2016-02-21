The Country List Part
=====================

Each country content can now be viewed on a page. But the site home page is still a bit empty. This section will have you alter the "hello" page controller and view files to list all of the country contents.

1. Edit the "hello" page controller ``site/pages/hello/hello.js`` and replace the file's contents with the code below:

.. literalinclude:: code/page-list/hello.js
  :language: javascript

2. Now edit the "hello" view file ``site/pages/hello/hello.html`` and replace its contents with the code below:

.. literalinclude:: code/page-list/hello.html
  :language: html

3. If you didn't start XP in :ref:`gradle_dev_mode` then redeploy the app from the command line with ``./gradlew deploy``.

Each country that you created is now listed on the home page and the names are also links to the individual content pages.
