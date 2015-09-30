Create the Hello World Site
===========================

Our next goal is to set up a "Hello World" site in the Content Manager app,
but first we must add some initial configuration to our project.

Site descriptor
---------------

An application can serve many purposes and building sites is just one of them. The ``site.xml`` file is the descriptor that will let Enonic
XP know that this app can be added to a site. Site-wide configurations can be defined in this file but we will leave the config element
empty for now (see :ref:`apps-configure`).

A basic site.xml file was automatically created by the init-project script::

  [project-root]/src/main/resources/site/site.xml

.. note:: All of the files we will be working with are below the "site" directory in the project folder - src/main/resources/site. All file
  paths from now on will begin with "site/".

Page Component
--------------

Page components are the most basic building blocks of websites in Enonic XP (see :ref:`apps-page-index`). They require a JavaScript
controller and optionally an XML descriptor and an HTML view. This first example does not need a descriptor file.

A page controller (see :ref:`apps-page-controller`) is a JavaScript file that handles requests such as GET and POST.
Controllers usually pass JavaScript objects with data to be dynamically rendered in an HTML view. No data is passed in the example below,
but the view file is specified and rendered as static HTML.

1. Create a folder called ``hello`` inside the ``site/pages`` directory.

2. Create the page controller and page view files specified below inside the ``hello`` folder:

.. literalinclude:: code/page-initial/hello.js
  :language: js
  :caption: Hello page controller - site/pages/hello/hello.js

The `view`  below is a simple HTML file. This file will be updated later to handle dynamic content.

.. literalinclude:: code/page-initial/hello.html
  :language: html
  :caption: Hello page view - site/pages/hello/hello.html

3. Once these files are in place, redeploy the app from the terminal with ``./gradlew deploy``.

.. tip:: Each page controller must reside in its own folder under the ``site/pages`` directory. The name of the controller JavaScript file
  must be the same as the directory that contains it. The HTML view file can reside anywhere in the project and have any valid file name.
  This allows view files to be shared between components.

Create Site
-----------

Now that the files are in place, we can create the site in the Administration console :ref:`content-content-manager` admin app. You can
switch between admin apps with the button on the far right of the toolbar that looks like a square made of dots.

#. In your browser, navigate to the Content Manager admin app. (Use the square dots icon in the toolbar to switch between admin apps.)
#. Click "New" and select "Site" from the list of content types. This opens a tab within the page for editing the `site` content.
#. Fill in the form with Display Name: "Hello World".
#. Select your "MyApp" application in the "Applications" dropdown.
#. In the top right corner is a button that looks like a computer screen, click it!
#. In the dropdown on the blue area that now appeared, select the "hello" page.
#. Click the "Save draft" button in the toolbar (top-left).
#. Now close the "Hello World" site editor tab to see the content pane.

When you click on the "Hello World" site content, the preview should look something like this:

.. image:: images/hello-world-site1.png
