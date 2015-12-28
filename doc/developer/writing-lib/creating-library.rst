Creating a library
==================

This is a small project that can be reused for your own libraries.

Setting up the project
----------------------

The best way to get started with any XP project, is using the starter-base project on GitHub.  Set it up with the init-project command in
the toolbox, but delete the site.xml file that is added in the ``src/main/resources/site`` folder.

.. code-block:: none

   toolbox.sh init-project -d <projectFolder> -n com.mycompany.mylib -r enonic/starter-base

Building with gradle
~~~~~~~~~~~~~~~~~~~~

In the ``gradle.properties`` file.  Set ``xpVersion`` to the version of Enonic XP you are working with, and look over the other ones to
make sure they are correct.

In ``build.gradle``, there have been added several dependencies that are very useful, but for this little example project, the only one we
need, is ``"com.enonic.xp:lib-portal:${xpVersion}"`` .

The project is now ready to build with one simple command: ``./gradlew build`` .

Example library
---------------

In this example, we will create support for redirection of URLs.  For this, we need a content-type, and a simple JavaScript.

The content-type, let's just call it url, defines the URLs that the code may redirect to, so in the ``content-types`` directory, add a new
directory and name it ``url`` .  Then, in this directory, create the content type:

.. literalinclude:: code/url.xml
   :language: xml
   :caption: src/main/resources/site/content-types/url/url.xml

To make it easier to notice when creating a new content in Enonic XP, add this icon, ``url.png`` in the same directory:

.. image:: code/url.png

Now, we need the JavaScript.  Since we are talking about a redirect here, the script must be placed on a page.  So, in the ``pages``
directory, we add a folder: ``url-redirects`` .  In this, we need the page descriptor:

.. literalinclude:: code/url-redirect.xml
    :language: xml
    :caption: src/main/resources/site/pages/url-redirect/url-redirect.xml

Then, we add the code that does the actual redirect:

.. literalinclude:: code/url-redirect.js
    :language: javascript
    :caption: src/main/resources/site/pages/url-redirect/url-redirect.js


This library can now be included in any app where you might want redirect functionality, or in other libs that can build more advanced
functions based on this simple example.





