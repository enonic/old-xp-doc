Upgrading to 6.0.0
==================

TODO intro

Repositories
------------

Some of the changes to the repositories done in version 6.0 require the data created with version 5.x to be upgraded.
But note that when starting with a new installation, without any data, this part can be skipped.

In the provided toolbox, there is a task ``upgrade`` that will do the necessary changes to your data.

To upgrade your 5.3.1 installation, execute the following steps:

 1. Dump your 5.3.1 installation with the toolbox :ref:`toolbox-dump` tool
 2. Upgrade the dump with toolbox :ref:`toolbox-upgrade`
 3. Load the repository into a new instance of Enonic XP with the toolbox :ref:`toolbox-load` tool


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

In addition, some XML element names must be renamed in the page, part, layout and site XML files:

* Rename the ``<form-item-set>`` element name to ``<item-set>``
* Rename the ``<part-component>`` element name to ``<part>``
* Rename the ``<layout-component>`` element name to ``<layout>``
* Rename the ``<page-component>`` element name to ``<page>``
* Rename the ``<module>`` element name to ``<site>`` in site.xml
* Rename input type ``SingleSelector`` to ``RadioButtons`` (i.e. ``<input name="..." type="SingleSelector">``)

Some properties in the Content object, possibly used in JavaScript controllers, have also been renamed:

* Usages of property ``moduleConfigs`` of content site should be replaced with ``siteConfigs``
* Usages of property ``moduleConfig`` of content site should be replaced with ``siteConfig``
* Usages of property ``moduleKey`` of property ``siteConfig`` in content site should be replaced with ``applicationKey``
.. code-block:: js

    var config = site.moduleConfigs[module.name]; // in 5.x
    var config = site.siteConfigs[module.name];   // in 6.0


Portal
------

Regions
~~~~~~~
In 5.x the regions in a page were identified by their position (1st, 2nd, 3rd...) inside the page or layout.
This was problematic in Live Edit and could break the rendering in some cases.

Since 6.0, regions will be identified by name. This makes Live Edit more robust and also the page structure more flexible for developers,
since they can reorder the page and layout HTML elements without breaking anything.

This change requires a minor update on the existing layout and page HTML view files (Thymeleaf, XSLT). The region definition in the XML file already had a name,
and now the HTML generated in the view must contain an attribute ``data-portal-region`` with that region name.

.. literalinclude:: code/region_5x.html
   :language: html

.. literalinclude:: code/region_60.html
   :language: html


.. IMPORTANT::

  The region HTML root element, in pages and layouts, must include an attribute with the region name.

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

.. IMPORTANT::

  The new ``scale`` parameter in image URL functions is mandatory.


Finally, the parameter ``module`` has been renamed to "application" for the JavaScript and view (Thymeleaf, XSLT) functions ``assetUrl`` and ``serviceUrl``


Building applications
---------------------

The gradle build plugin must follow the version used for building.

.. code-block:: none

	buildscript {
	    repositories {
	        mavenLocal()
	        jcenter()
	        maven {
	            url 'http://repo.enonic.net/public'
	        }
	    }

	    dependencies {
	        classpath 'com.enonic.xp:gradle-plugin:6.0.0-SNAPSHOT'
	    }
	}

	apply plugin: 'com.enonic.xp.app'

	app {
	    name = 'com.enonic.wem.apps.xslt'
	    displayName = 'Xslt Sample App'
	    vendorName = 'Enonic AS'
	    vendorUrl = 'http://enonic.com'
	}


JavaScript API
--------------

The Script commands used to access extra functions in the controllers have been replaced by libraries.
These libraries will be automatically included in the App using the gradle build.

The usages of `execute('lib_name.func_name', params)` should be replaced with calls to functions with the same name in the new corresponding library.

Steps to upgrade:

* Add dependencies for the libraries needed in the build.gradle of the app project, some or all of these:

.. code-block:: none

	dependencies {
	    include 'com.enonic.xp:lib-portal:6.0.0-SNAPSHOT'
	    include 'com.enonic.xp:lib-thymeleaf:6.0.0-SNAPSHOT'
	    include 'com.enonic.xp:lib-xslt:6.0.0-SNAPSHOT'
	    include 'com.enonic.xp:lib-i18n:6.0.0-SNAPSHOT'
	    include 'com.enonic.xp:lib-content:6.0.0-SNAPSHOT'
	}


Portal library
--------------

* Search and replace execute('portal.*Url', with portal.*Url(

This can be done e.g with this Regex from IntelliJ IDEA (Replace in Path):
Text to find:

.. code-block:: none

	execute\('portal\.(.*)Url', 

Replace with:

.. code-block:: none
    
	portal\.$1Url\(

* Search and replace the following calls in js controllers;

+-------------------------------+-------------------------+
| Search                        |  Replace                |
+===============================+=========================+
| execute('portal.getComponent] | portal.getComponent()   |
+-------------------------------+-------------------------+
| execute('portal.getContent')  | portal.getContent()     |
+-------------------------------+-------------------------+
| execute('portal.getSite')     | portal.getSite()        |
+-------------------------------+-------------------------+

* Add a `require` call for the "portal" library at the top of each JavaScript file where a "portal.*" command was used:

.. code-block:: none
    
	var portal = require('/lib/xp/portal');


Thymeleaf library
-----------------

* Search and replace the following calls in js controllers;

+-------------------------------+-------------------------+
| Search                        |  Replace                |
+===============================+=========================+
| execute('thymeleaf.render',   | thymeleaf.render(       |
+-------------------------------+-------------------------+

* Add `require` call for the "thymeleaf" library at the top of each JavaScript file where the "thymeleaf.render" command was used:

.. code-block:: none

    var thymeleaf = require('/lib/xp/thymeleaf');



Content library
---------------

* Search and replace

+-------------------------------+-------------------------+
| Search                        |  Replace                |
+===============================+=========================+
| execute('content.*',          | contentSvc.(            |
+-------------------------------+-------------------------+

(We use a variable named ``contentSvc`` to avoid conflicts with variables representing a Content instance, which are often named ``content``)

It can be done with this Regex from IntelliJ IDEA (Replace in Path):

Text to find:

``execute\('content\.(.*)',``

Replace with:

``contentSvc\.$1\(``
 
* Add `require` call for the "content" library at the top of each JavaScript file where a "content.*" command was used:

.. code-block:: none

   var contentSvc = require('/lib/xp/content');


Xslt library
------------

* Search and replace the following calls in js controllers;

+-------------------------------+-------------------------+
| Search                        |  Replace                |
+===============================+=========================+
| execute('xslt.render',        | xslt.render(            |
+-------------------------------+-------------------------+

* Add `require` call for the "xslt" library at the top of each JavaScript file where the "xslt.render" command was used:

.. code-block:: none

    var xslt = require('/lib/xp/xslt');


i18n library
------------

* Search and replace the following calls in js controllers;

+-------------------------------+-------------------------+
| Search                        |  Replace                |
+===============================+=========================+
| execute('i18n.localize',      | i18n.localize(          |
+-------------------------------+-------------------------+

* Add `require` call for the "i18n" library at the top of each JavaScript file where the "i18n.localize" command was used:

.. code-block:: none

    var i18n = require('/lib/xp/i18n');
