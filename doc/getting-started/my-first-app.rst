My First App
************
*This guide will lead you through the required steps to build the  "Hello World" app for Enonic XP*

.. WARNING:: WORK IN PROGRESS

.. NOTE:: To complete this tutorial, you will need
  **A local running installation of Enonic XP (with the $XP_HOME environment variable defined)**
  and a **Text editor of your choice (e.g. Atom)**

  All terminal actions assume you're using OSX or Linux


.. contents:: Table of Contents
  :depth: 1
  :local:

Initialize project
==================

In order to get started quickly, a tool exists to create the basic project structure you need.


Init App
--------
Find a suitable location on your filesystem where you want to place the code for your application, and create an empty folder.
e.g. /Users/<username>/project/myapp

Included with Enonic XP is the :ref:`toolbox`.
It includes an option to initialize an application with all the standard structures typically required for an app.

Run the following command while located in your target folder::

  $XP_INSTALL/toolbox/toolbox.sh init-app -n com.company.myapp

.. tip:: Only basic characters (a-z, 0-9 and .) should be used for application names. We recommend following standard Java package naming
  conventions. To see all options available with the init script, Run: ``$XP_INSTALL/toolbox/toolbox.sh help init-app``


The init-app script will create a standard project structure for your app and configure Gradle build scripts.

Investigate the build.gradle file located on your projects root for more details.

MISSING LINK to build.gradle doc


Build and Deploy
----------------
Now that we have set up a project, we should test that it builds and deploys successfully.

.. note:: The $XP_HOME environment variable must be set to the path of the home folder of the XP installation.
  For example, ``$ export XP_HOME=/Users/<name>/enonic-xp-6.0.0/home``

Simply execute the following command from the project root directory::

  ./gradlew deploy

If you don't already have gradle installed, the gradle wrapper will download this first.
Next it will build the app and then attempt to deploy it.

The deployment step simply moves the result of the build, (the application jar file) into the ``$XP_HOME/deploy`` directory.
From there, Enonic XP will detect, install and start the application automatically.

Log in to the Administrative console using the Administrative user, and navigate to the Applications App. The default username is “su” and the password is “password”.
Check that the application you just deployed is listed, and that it has started.

Hello World Site
================

Our next goal is to set up a "Hello World" site in the XP administration console,
but first we must add some initial configuration to our project.

Site descriptor
---------------

An application can serve many purposes and building sites is just one of them. The ``site.xml`` file is the descriptor that will let Enonic
XP know that this app can be added to a site. Site-wide configurations can be defined in this file but we will leave the config element
empty for now.

A basic site.xml file is automatically created by the app-init script::

  src/main/resources/site/site.xml

Page Component
---------------

A page component is used to create page templates in the administration console. Any number of page templates can be created
from a single page component. Each page component requires two files: a JavaScript controller and an HTML
view file (an XML descriptor is optional).

Create a folder called ``hello`` inside the ``src/main/resources/site/pages`` directory. Then create the two files
specified below inside the ``hello`` folder:

The **page controller** is a JavaScript file that passes dynamic values to the view file. No values are passed in this example, but
the view file is specified and rendered with the Thymeleaf templating engine.

``src/main/resources/site/pages/hello/hello.js``

.. literalinclude:: code/page-initial/hello.js
   :language: js

The view is a simple HTML file. Later, Thymeleaf will be used to make the page dynamic.

``src/main/resources/site/pages/hello/hello.html``

.. literalinclude:: code/page-initial/hello.html
   :language: html


Once these files are in place, redeploy the app::

  ./gradlew deploy

.. tip:: Each page component must reside in its own folder under the ``site/pages`` directory. The name of the XML and JS files must be the
  same as the directory that contains them. The HTML view file can reside anywhere in the project and have any valid file name. This allows
  the view files to be shared between components. Just make sure to specify the full path of the view file in the controller when the view
  is not in the same directory.

Create Site
-----------

Log in to the Administrative console using the Administrative user, and navigate to the Content Manager App. The default username is "su"
and the password is "password".

#. Click ``New`` and select "Site" from the list of content types
#. Fill in the form with Display Name: "Hello World"
#. Select your "MyApp" application in the ``Site config`` dropdown
#. Click the ``Save draft`` button on the top-left.
#. Now close the site tab to see the content pane.

Now that a ``Site`` content has been created, a built-in ``Templates`` folder appears below it in the content pane. At least one page
template must be created here before any pages can be viewed.

#. Click on the small triangle to left of the globe icon to open the site content tree.
#. Click on the ``Templates`` icon and click ``New``.
#. Name the template "Hello" in the <Display Name> field.
#. In the dropdown field labeled "Supports", select the Site content type.
#. In the Live Edit panel (to the right), select "Hello" as your page controller.
#. Click ``Save draft``

You should now have a site that looks something like this:

.. image:: images/hello-world-site1.png


Adding Countries
================

In order to make our "World" slightly more interesting, we need some data
- or more specifically countries.

Country Content Type
--------------------

To add structured data (such as countries), we need so-called content types.
The content type defines the form (and underlying schema) of items you manage.

Create a folder called "country" inside the "content-types" folder of your project. Then add the following file to this folder::

  src/main/resources/site/content-types/country/country.xml

.. literalinclude:: code/content-types/country1.xml
  :language: xml

Country Part
------------

We also need a way to present a country - because every country wants to be seen.
This time, rather than just making another page controller - we will create a part.
Parts are reusable components that can be added to pages with "regions" - more on this below.

Create a folder called "country" inside the "parts" folder in your project. Then add the following files in the "country" folder::

  src/main/resources/site/parts/country/country.xml
  src/main/resources/site/parts/country/country.js
  src/main/resources/site/parts/country/country.html


Hello Region Page
-----------------

To wrap things up, lets create a new page controller with a single region called "Main".
We will later place the "Country" part into this region.

The benefit of regions is that a page controller can be re-used across multiple different pages,
simply by adding different parts to it as needed.

Add the following files to your project::

  src/main/resources/site/page/hello-region/hello-region.js
  src/main/resources/site/page/hello-region/hello-region.html

When done - redeploy your app once again!::

  ./gradlew deploy


Add Favorite Country
--------------------

Now that the "Country" content type is installed,
we can create new countries using the Content Manager.

#. Select the "Hello World" site from the navigation tree
#. Choose ``New``, and select "Country" from the list of content types.
#. Fill the form with the details of your favorite country and press save.

TODO IMAGE

Similar to the site, we must also configure a view for the country

#. From the Live Edit panel to the right, select "Hello Region" (this "pretty" name comes from the page xml configuration file).
#. Save

You should now have a page that renders your favorite country, something like this:

MISSING IMAGE


Page Templates
==============

With our current solution, sadly you will have to configure a page for every country you create.
As this is not a very effective way of working with large data sets, we will create a page template to simplify the process


Create Country Template
-----------------------

#. Select the Templates item, located below the "Hello World" site
#. Click ``New`` and select "Page Template"
#. Fill in the form as follows:

  * Display Name: "Country"
  * Supports: "Country" (selected from the list of content types)

#. In Live Edit panel, select the "Hello Region" controller
#. Open the context panel (activated from the rightmost button in the toolbar)
#. Drag a part into the empty region and select the "country" controller
#. Save

Now, every "Country" you create in the structure will use this template by default.

.. TIP:: The "Support" property is the key here. A page template will support rendering of the content types specified here.

Try this out by creating a few new countries in your site.

Update Favorite Country
------------------------

You might remember that your favorite country was "hardcoded" - so lets change it to use templates too.

To update your favorite country to use this template too:

#. Select the country and click ``Edit``
#. In Live Edit view, select the entire page (if you select the part first, simply click ``parent``"`` twice to select the page)
#. Open the context panel (top right in toolbar), and select "Automatic" from the Page Template selector
#. Save

You can at any time select another Page template, or even customize the presentation of a single item.

Hello Geo World
===============

Going back to your site, you will now see a list of the countries we have added.
To make this even more exiting, we will add some geo-location info and configuration capabilities to the site.

Cities
------

Add the following files to your project::

  src/main/resources/site/part/city-list/city-list.js
  src/main/resources/site/part/city-list/city-list.html
  src/main/resources/site/part/city-list/city-list.xml
  src/main/resources/site/assets/googlemaps??.js
  src/main/resources/site/content-type/city/city.xml
  src/main/resources/site/content-type/city/city.png

Build and deploy your project one final time.

To make use of the changes, do the following

#. Add the "City List" part to your "Country" page template
#. Create some Cities below a selected country (below are some sample data you may use)

When visiting a country page, the browser will now requested your location.
You should then see something like this:

MISSING Image (name of country at top, + google map with cities, also present the city which is closest to you using geo-distance sorting)



If you think the location question is noisy,
We added a simple configuration button to the part (using the city-list.xml file)
- so you can turn this feature on/off. Simply select the part in live edit, open the context panel and toggle on/off.

MISSING Image to turn feature on/off (radiobuttons?)


**MISSING SAMPLE DATA**


Go Online
=========

Now, that your "Hello World" is complete, it's time to go live.

#. Select the "Hello World" site in the navigation
#. Click ``Publish`` from the toolbar
#. Remember to check the ``Include children`` checkbox
#. After verifying everything in the Publishing Wizard window - click ``Publish``!

When clicking publish, all the selected items and changes are "cloned" from draft and into the master branch.

You will always see the draft items using the preview function of the Content Manager.
If you have placed your site on root level, you can also see your live site at this url: http://localhost:8080/portal/master/hello-word


Great job - you just created your first App for Enonic XP
- The Enonic team congratulates you - we look forward to see all the brilliant things you will make and are always looking for feedback.

Next steps
==========

IN PROGRESS

This tutorial only covered the basics of app development.

Multiple projects
-----------------

A **best practice** for working on multiple projects would involve keeping a separate XP_HOME folder for each project.
The folder structure for such a set up would look something like this::

  /Users/<name>/development
  /Users/<name>/development/software/<xp-install-version>
  /Users/<name>/development/xp-homes/<project-name>/home
  /Users/<name>/development/projects/<project-name>/<project-source-files>

An actual implementation with projects called my-first-app and company-site would look like this::

  /Users/mla/development/software/enonic-xp-5.3.0
  /Users/mla/development/software/enonic-xp-6.0.0
  /Users/mla/development/xp-homes/my-first-app/home
  /Users/mla/development/xp-homes/company-site/home
  /Users/mla/development/projects/my-first-app/...
  /Users/mla/development/projects/company-site/...

This allows you to have one Enonic XP installation for each version and as many different XP_HOME folders as you need for your projects.
When switching from one project to another, you only have to change the XP_HOME environment variable and then restart the installation of
the Enonic XP version that the project was created for.