
Hello Region Page
-----------------

Component parts must be placed into a `region` on a page or layout. Let's create a new page component with a single region called "Main".
We will later place the "Country" part into this region.

The benefit of a region (see :ref:`apps-page-region`) is that a page component can be re-used across multiple different pages by simply
adding different parts to it as needed.

1. Create a folder called "hello-region" in your project's ``site/pages/`` folder.

2. Add the "Hello region" page descriptor, controller and view files:

.. literalinclude:: code/hello-region-page/region1.xml
  :language: xml
  :caption: Page descriptor - site/pages/hello-region/hello-region.xml

The XML file above is a :ref:`apps-page-descriptor`. Regions and page configurations can be defined here.

.. literalinclude:: code/hello-region-page/region1.js
  :language: javascript
  :caption: Page controller - site/pages/hello-region/hello-region.js

This page controller uses a portal library (see :ref:`libs-portal`) to get the content and extract
the "main" region which was defined in the descriptor XML file.

.. literalinclude:: code/hello-region-page/region1.html
  :language: html
  :caption: Page view - site/pages/hello-region/hello-region.html

The view file above defines the place on the page where the region will render parts that are dragged and dropped in Live Edit.

3. When done - redeploy your app once again!

::

  ./gradlew deploy
