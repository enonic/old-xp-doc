
The Hello Region Page
=====================

Parts start to make sense when placed into a `region`. Regions are "slots" contained within pages or layouts. Pages and layouts may contain multiple regions, and each region must have a unique name.

Let's create a new page component with a single region called "Main". We will later place the "Country" part into this region.

The benefit of a region (see :ref:`apps-page-regions`) is that a page component can be re-used across multiple different pages by simply adding different parts to them as needed.

1. Create a folder called "hello-region" in your project's ``site/pages/`` folder.

2. Add the "Hello region" page descriptor, controller and view files:

.. literalinclude:: code/hello-region-page/region1.xml
  :language: xml
  :caption: Page descriptor - site/pages/hello-region/hello-region.xml

The XML file above is a :ref:`apps-page-descriptor`. Regions and page configurations can be defined here.

.. literalinclude:: code/hello-region-page/region1.js
  :language: javascript
  :caption: Page controller - site/pages/hello-region/hello-region.js

This page controller uses a portal library (see ``lib-portal`` in :ref:`js-libraries`) to get the content and extract
the "main" region which was defined in the descriptor XML file.

.. literalinclude:: code/hello-region-page/region1.html
  :language: html
  :caption: Page view - site/pages/hello-region/hello-region.html

The view file above defines the place on the page where the region will render component parts that are dragged and dropped in the Page Editor.

3. When done - redeploy your app once again!

::

  ./gradlew deploy


.. tip:: You can restart XP in :ref:`gradle_dev_mode` and then the app won't have to be redeployed after making changes.