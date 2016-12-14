Create the Hello World Site
===========================

.. |monitoricon| image:: images/icon-monitor.png
.. |menuicon| image:: images/icon-menu.png

Our next goal is to set up a "Hello World" site in Content Studio, but first we must add some initial configuration to our project.

Site descriptor
---------------

An application can serve many purposes and building sites is just one of them. The ``site.xml`` file is the descriptor that will let Enonic
XP know that this app can be added to a site. Site-wide configurations can be defined in the config element of this file
(see :ref:`site_descriptor`).

A basic site.xml file was automatically created by the init-project script and we don't need to make any changes for now. ::

  [project-root]/src/main/resources/site/site.xml

Application description and icon
--------------------------------

The ``application.xml`` file at ``[project-root]/src/main/resources/application.xml`` can be edited to provide a suitable description for
your app. Go ahead and give your app a custom description.

The ``application.svg`` file can be replaced with a custom app icon. The description and icon will be visible in the Applications admin
tool.

.. note:: Most of the files we will be working with are below the "site" directory in the project folder - src/main/resources/site. All file
  paths from now on will begin with "site/".

Page Component
--------------

Page components are the most basic building blocks of websites in Enonic XP (see :ref:`page`). They require a JavaScript
controller and optionally an XML descriptor and an HTML view. This first example does not need a descriptor file.

A page controller (see :ref:`page`) is a JavaScript file that handles requests such as GET and POST.
Controllers usually pass data in the form of a JavaScript object to be dynamically rendered in an HTML view. No data is passed in the
example below, but the view file is specified and rendered as static HTML.

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

Now that the files are in place, we can create the site in a browser using the Content Studio admin tool.
Switch between different tools by clicking the menu icon |menuicon| (top right) to open the Launcher panel.

#. In your browser, navigate to the Content Studio tool. (Use the menu icon at the top right)
#. Click "New" and select "Site" from the list of content types (Opens a tab for editing the new site).
#. Fill in the form with Display Name: "Hello World".
#. Select your "MyApp" application in the "Applications" dropdown.
#. If you don't see a blue area on the right of the page then click this button |monitoricon| in the toolbar to open the Page Editor.
#. Use the dropdown in the Page Editor (blue area) to select the "hello" page.
#. Click the "Save draft" button in the toolbar (top-left).
#. Now close the "Hello World" site editor tab to see the content pane.

When you click on the "Hello World" site content, the preview should look something like this:

.. image:: images/hello-world-site1.jpg

This concludes part one of the tutorial. Let's review: You've learned how to initialize a new project with the CLI toolbox init-project.
Then you set the $XP_HOME environment variable and deployed the app with gradle. Next, you created a page component with a JavaScript
controller and an HTML view file. Finally, you created a site in the Content Studio and added the app and page component to the site. This
might seem like a lot of work just to make a static page; but we have laid a solid foundation in preparation for dynamically displaying
structured content in reusable components which you will learn about in the next section.