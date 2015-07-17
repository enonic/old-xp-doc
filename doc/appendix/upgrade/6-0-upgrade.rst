Upgrading to 6.0.0
===================

Repositories
------------

There are changes to the repositories in version 6.0

In the provided toolbox, there are a task ´´upgrade´´ that will do the necessary changes to your data.

To upgrade your 5.3 installation, execute the following steps:

 1. Dump your 5.3 installation by the toolbox ´´dump´´ tool
 2. Upgrade the dump with toolbox ´´upgrade´´
 3. Load the repository into a new instance of Enonix XP.


Portal
------

Module
------

Building modules
----------------

JavaScript API
--------------


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

Search and replace the following calls in js controllers;

+-------------------------------+-------------------------+
| Search                        |  Replace                |
+===============================+=========================+
| execute('portal.getComponent] | portal.getComponent()   |
+-------------------------------+-------------------------+
| execute('portal.getContent')  | portal.getContent()     |
+-------------------------------+-------------------------+
| execute('portal.getSite')     | portal.getSite()        |
+-------------------------------+-------------------------+

Add a `require` call for the "portal" library at the top of each JavaScript file where a "portal.*" command was used:

.. code-block:: none
    
	var portal = require('/lib/xp/portal');


Thymeleaf library
------------------

Search and replace the following calls in js controllers;

+-------------------------------+-------------------------+
| Search                        |  Replace                |
+===============================+=========================+
| execute('thymeleaf.render',   | thymeleaf.render(       |
+-------------------------------+-------------------------+

Add `require` call for the "thymeleaf" library at the top of each JavaScript file where the "thymeleaf.render" command was used:

.. code-block:: none

    var thymeleaf = require('/lib/xp/thymeleaf');



Content library
----------------

Search and replace 

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
 
Add `require` call for the "content" library at the top of each JavaScript file where a "content.*" command was used:

.. code-block:: none

   var contentSvc = require('/lib/xp/content');

