.. _libraries:

Libraries
=========

Enonic XP provides the concept of libraries in order to speed up development and re-use of functionality and code.
Technically, libraries are very similar to :ref:`applications`, but the main difference is that a library cannot be installed and started by itself.

So, a library may consist of all the same objects you find in applications - such as :ref:`assets`, :ref:`content_types` and :ref:`http_controllers` - things you may need in an application.


Finding Libraries
-----------------

A number of standard and 3rd party libraries are available with the core XP release, check out: :ref:`js-libraries`.
You will also find a wide range of libraries on the Enonic Market - https://enonic.com/market/libraries

Adding libraries
----------------

Libraries are added to your project by simply referring to them in your build script.
Read more about this on our :ref:`projects` documentation.

Best practice
-------------
If you wonder when/how you should create a library, here are some guidelines

* Strong cohesion: Keep the components in a library together only if they are strongly related.  Split them up in multiple libs if they are not.
* Weak coupling: A library should avoid having dependencies. In practice, this will not always be possible, but apart from the XP APIs, other dependencies should raise an alarm, and only be included after careful analysis showing there is no other way.
* Use names that are self-explanatory and follow the java naming conventions - for example com.company.lib.mylib.
