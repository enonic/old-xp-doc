Upgrading to 6.0.0
===================

Repositories
------------

There are changes to the repositories in version 6.0

In the provided toolbox, there are a task ´´upgrade´´ that will do the necessary changes to your data.

To upgrade your 5.3.1 installation, execute the following steps:

 1. Dump your 5.3.1 installation by the toolbox ´´dump´´ tool
 2. Upgrade the dump with toolbox ´´upgrade´´
 3. Load the repository into a new instance of Enonix XP.


Portal
------

* Regions are identified by name instead of position.
* Add mandatory "scale" parameter to image URL function.
* Remove "scale" prefix in scale functions e.g. scaleblock() -> block().
* Separate scale from filters in image URL, new format: /_/image/inline/<imageid>/<scale>/contentname.format?filter=xxx
e.g _/image/inline/234234234/wide-400-200/mer.jpg?filter=blur(10)


Module
------

* Rename module.xml to site.xml.
* Rename module element name to site in site.xml.
* Rename src/main/resources/cms folder to src/main/resources/site.
* Rename form-item-set to item-set element.
* Rename part-component element name to part .
* Rename layout-component element name to layout.
* Rename page-component element name to page.
* Rename files /pages/<name>/page.xml to /pages/<name>/<name>.xml.
* Rename files /parts/<name>/part.xml to /parts/<name>/<name>.xml.
* Rename files /layouts/<name>/layout.xml to /layouts/<name>/<name>.xml.
* Rename files /<type>/<name>/controller.js to /<type>/<name>/<name>.js.
* Rename property "moduleConfigs" of content sites to "siteConfigs".
* Rename property "moduleConfig" of content sites to "siteConfig".
* Rename property "moduleKey" of property set siteConfig to "applicationKey".
* Rename input type "ModuleConfigurator" to "SiteConfigurator".
* Rename input type "SingleSelector" to "RadioButtons".


Building modules
----------------

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
------------------

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
----------------

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
------------------

* Search and replace the following calls in js controllers;

+-------------------------------+-------------------------+
| Search                        |  Replace                |
+===============================+=========================+
| execute('xslt.render',        | xslt.render(            |
+-------------------------------+-------------------------+

* Add `require` call for the "xslt" library at the top of each JavaScript file where the "xslt.render" command was used:

.. code-block:: none

    var xslt = require('/lib/xp/xslt');


I18n library
------------------

* Search and replace the following calls in js controllers;

+-------------------------------+-------------------------+
| Search                        |  Replace                |
+===============================+=========================+
| execute('i18n.localize',      | i18n.localize(          |
+-------------------------------+-------------------------+

* Add `require` call for the "i18n" library at the top of each JavaScript file where the "i18n.localize" command was used:

.. code-block:: none

    var i18n = require('/lib/xp/i18n');
