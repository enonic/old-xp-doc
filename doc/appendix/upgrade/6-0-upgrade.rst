.. _upgrading_to_6_0_0:

Upgrading to 6.0.0
=================================

TODO intro

Repositories
------------

Any data that was created in version 5.0 must be upgraded to conform to the repository changes in version 6.0.
This part can be skipped when starting with a new installation that doesn't have any data.

The necessary changes to your data can be performed with the ``upgrade`` task in the provided :ref:`toolbox`.

To upgrade your 5.3.1 installation, execute the following steps:

#. Dump your 5.3.1 installation with the toolbox :ref:`toolbox-dump` tool, then stop the 5.3.1 instance.
#. Upgrade the dump with the 6.0.0 toolbox :ref:`toolbox-upgrade`.
#. Start a new 6.0.0 instance of Enonic XP and load the upgraded dump with the toolbox :ref:`toolbox-load` tool.


Module
------
There have been some changes regarding the module structure in 6.0 . A **module** is from now on called an **application**.
In order to convert a 5.x XP module into a 6.0 XP application, follow the steps below:

Some of the files or paths inside an application must be renamed or moved:

* Rename ``src/main/resources/cms`` folder to ``src/man/resources/site``
* Move and rename ``src/main/resources/module.xml`` to ``src/main/resources/site/site.xml``
* Rename page files ``/pages/<name>/page.xml`` to ``/pages/<name>/<name>.xml``
* Rename part files ``/parts/<name>/part.xml`` to ``/parts/<name>/<name>.xml``
* Rename layout files ``/layouts/<name>/layout.xml`` to ``/layouts/<name>/<name>.xml``
* Rename controller files ``/<type>/<name>/controller.js`` to ``/<type>/<name>/<name>.js``
* Rename content type files ``/content-types/<name>/content-type.xml`` to ``/content-types/<name>/<name>.xml``
* Rename content type thumbnails from ``/content-types/<name>/thumb.png`` to ``/content-types/<name>/<name>.png``

In addition, some XML element names must be renamed in the page, part, layout and site XML files:

* Rename the ``<form-item-set>`` element name to ``<item-set>``
* Rename the ``<part-component>`` element name to ``<part>``
* Rename the ``<layout-component>`` element name to ``<layout>``
* Rename the ``<page-component>`` element name to ``<page>``
* Rename the ``<module>`` element name to ``<site>`` in site.xml
* Change input type ``SingleSelector`` to ``RadioButtons`` (or ``ComboBox`` for dropdowns) and remove the ``<selector-type>`` element.
  (i.e. ``<input name="..." type="SingleSelector">``).

Some properties in the Content object, possibly used in JavaScript controllers, have also been renamed:

* Usages of property ``moduleConfig`` of property ``data`` in content site should be replaced with ``siteConfig``
* Usages of property ``moduleKey`` of property ``siteConfig`` in content site should be replaced with ``applicationKey``


Portal
------

Regions
~~~~~~~
In 5.x the regions in a page were identified by their position (1st, 2nd, 3rd...) inside the page or layout.
This was problematic in Live Edit and could even break the rendering in some cases.

Since 6.0, regions will be identified by name. This makes Live Edit more robust and the page structure more flexible for developers,
since they can reorder the page and layout HTML elements without breaking anything.

This change requires a minor update to the existing layout and page HTML view files (Thymeleaf, XSLT). The region definition in the XML file
already had a name, and now the HTML generated in the view must contain an attribute ``data-portal-region`` with that region name.

.. literalinclude:: code/region_5x.html
   :language: html

.. literalinclude:: code/region_60.html
   :language: html


.. IMPORTANT::

  Each **region** HTML root element in pages and layouts must include the ``data-portal-region`` attribute with the region name.

URL functions
~~~~~~~~~~~~~
There is a new ``scale`` parameter in the **image URL** functions that is used for specifying some of the transformations that previously were indicated using the ``filter`` parameter.
The *filter* options that apply some kind of scaling, are now *scale* parameters and they loose the "scale" prefix.
Also note that the ``scale`` parameter is mandatory.

For example: ``filter: 'scalewidth(800); blur(5)'`` becomes ``scale: 'width(800)'; filter: 'blur(5)'``

Thymeleaf example:

.. literalinclude:: code/imageurl_5x.html
   :language: html

.. literalinclude:: code/imageurl_60.html
   :language: html


JavaScript example:

.. literalinclude:: code/imageurl_5x.js
   :language: js

.. literalinclude:: code/imageurl_60.js
   :language: js

.. IMPORTANT:: The new ``scale`` parameter in image URL functions is mandatory. To render an image URL with no scaling, use
  ``scale: '(1,1)'``.


Finally, the parameter ``module`` has been renamed to ``application`` for the JavaScript and view (Thymeleaf, XSLT) functions ``assetUrl`` and ``serviceUrl``


Building applications
---------------------

An application requires some changes in the ``build.gradle`` file:

* The *gradle* plugin has been renamed from ``com.enonic.xp.gradle.module`` to ``com.enonic.xp.app``
* From now on, the gradle build plugin must follow the XP version used (e.g. currently *6.0.0* ).
* Since the Script commands have been replaced with libraries (see below :ref:`6upgrade_javascript_api`) the gradle build must include the library dependencies that are needed.

Example of build.gradle file:

.. literalinclude:: code/build.gradle
   :language: groovy

.. _6upgrade_javascript_api:

JavaScript API
--------------

The Script commands used to access extra functions in the controllers have been replaced by libraries.
The libraries that are needed can be made available for an application using the gradle build.

The Script command calls in the form of ``execute('lib_name.func_name', params)`` should be replaced with calls to functions with the same name in the new corresponding library.

For example:

.. literalinclude:: code/api_60.js
   :language: js


.. IMPORTANT::

  Usages of Script commands in JavaScript controllers must be replaced with calls to functions in the corresponding libraries.


**In order to upgrade 5.x controllers to 6.0 :**

1. Add dependencies for the libraries needed in the build.gradle of the app project, some or all of these:

.. code-block:: groovy

	dependencies {
		include 'com.enonic.xp:lib-portal:6.0.0'
		include 'com.enonic.xp:lib-thymeleaf:6.0.0'
		include 'com.enonic.xp:lib-xslt:6.0.0'
		include 'com.enonic.xp:lib-i18n:6.0.0'
		include 'com.enonic.xp:lib-content:6.0.0'
	}

2. Follow the steps below to use the functions in the different libraries.

Portal library
~~~~~~~~~~~~~~

* Search and replace the following calls in js controllers;

getComponent
@@@@@@@@@@@@

*Search:* ``execute('portal.getComponent]``

*Replace:* ``portal.getComponent()``

getContent
@@@@@@@@@@

*Search:* ``execute('portal.getContent')``

*Replace:* ``portal.getContent()``

getSite
@@@@@@@

*Search:* ``execute('portal.getSite')``

*Replace:* ``portal.getSite()``


* Add a `require` call for the "portal" library at the top of each JavaScript file where a "portal.*" command was used:

.. code-block:: js

	var portal = require('/lib/xp/portal');

* Note that the property ``moduleConfigs`` of content site has been removed. The method ``portal.getSiteConfig()``, which returns the site configuration for this app in the current site, should be used instead.

.. literalinclude:: code/site_config_60.js
   :language: js


Thymeleaf library
~~~~~~~~~~~~~~~~~

* Search and replace the following calls in js controllers;

*Search:* ``execute('thymeleaf.render',``

*Replace:* ``thymeleaf.render(``


* Note that the parameters to render are now 2 separate parameters instead of an object: ``thymeleaf.render(view, model)`` vs ``execute('thymeleaf.render', {view: view, model: params})``

* Add a `require` call for the "thymeleaf" library at the top of each JavaScript file where the "thymeleaf.render" command was used:

.. code-block:: js

    var thymeleaf = require('/lib/xp/thymeleaf');



Content library
~~~~~~~~~~~~~~~

* Search and replace

*Search:* ``execute('content.*',``

*Replace:* ``contentSvc.*(``

(We use a variable named ``contentSvc`` to avoid conflicts with variables representing a Content instance, which are often named ``content``)

* Add `require` call for the "content" library at the top of each JavaScript file where a "content.*" command was used:

.. code-block:: js

   var contentSvc = require('/lib/xp/content');

* ``contents`` in *query* and *getChildren* has been renamed to ``hits``.

Aggregation query
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

The 'date_histogram' and 'date_range' aggregation-types has changed name to 'dateHistogram' and 'dateRange'

* Search and replace in controllers:

*Search:* ``date_histogram``

*Replace:* ``dateHistogram``

* Search and replace in controllers:

*Search:* ``date_range``

*Replace:* ``dateRange``


Aggregation result object
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

The 'doc_count' property of aggregation result objects has been renamed to 'docCount'

* Search and replace in controllers and html;

*Search:* ``doc_count``

*Replace:* ``docCount``



Xslt library
~~~~~~~~~~~~

* Search and replace the following calls in js controllers;

*Search:* ``execute('xslt.render',``

*Replace:* ``xslt.render(``

* Note that the parameters to render are now 2 separate parameters instead of an object: ``xslt.render(view, model)`` vs ``execute('xslt.render', {view: view, model: params})``

* Add `require` call for the "xslt" library at the top of each JavaScript file where the "xslt.render" command was used:

.. code-block:: js

    var xslt = require('/lib/xp/xslt');


i18n library
~~~~~~~~~~~~

* Search and replace the following calls in js controllers;

*Search:* ``execute('i18n.localize',``

*Replace:* ``i18n.localize(``

* Add `require` call for the "i18n" library at the top of each JavaScript file where the "i18n.localize" command was used:

.. code-block:: js

    var i18n = require('/lib/xp/i18n');

Content object structure
------------------------

The structure of some content objects has changed from what they were in Enonic XP versions prior to 6.0.

Image content
~~~~~~~~~~~~~

Image content objects contained ``image-info`` prior to version 6.0.0. This has been updated to camel case ``imageInfo`` for consistency.

* Search and replace in controllers;

*Search:* ``image-info``

*Replace:* ``imageInfo``

Old image object structure:

.. code-block:: js

    ...
    "x": {
        "media": {
            "image-info": {
                "imageHeight": "695",
                "imageWidth": "2000",
                "contentType": "image/jpeg",
                "bytesize": "548842",
                "pixelSize": 1390000
            }
        }
    },
    "page": {}

Image object structure in 6.x:

.. code-block:: js

    ...
    "x": {
        "media": {
            "imageInfo": {
                "imageHeight": "695",
                "imageWidth": "2000",
                "contentType": "image/jpeg",
                "bytesize": "548842",
                "pixelSize": 1390000
            }
        }
    },
    "page": {}


Request object structure
-------------------------

Each handler function in a controller receives a ``request`` object as a parameter.
This request had its attribute ``uri`` renamed to ``url``.


Module object renamed
------------------------
The ``module`` global variable in 5.x has been renamed to ``app``

.. code-block:: js

  var appName = app.name
  var version = app.version
  
* Search and replace in controllers:

*Search:* ``module.name``

*Replace:* ``app.name``
  
 
* Search and replace in controllers:

*Search:* ``module.version``

*Replace:* ``app.version``
  
