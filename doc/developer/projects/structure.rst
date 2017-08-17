.. _project_structure:

Project structure
=================

To build applications with Enonic XP, you will typically setup a project.  The fastest way to do this is using the init-project feature
included in the Enonic XP toolbox utility.

The project structure is a similar to `Maven <https://maven.apache.org/>`_ projects for those who are familiar with that.

Below is a sample project folder structure - all items that end with a slash are folders ::

  my-first-app/
    build.gradle
    src/
      main/
        java/
        resources/
          admin/
            widgets/
            tools/
          application.svg
          application.xml
          assets/
          lib/
          main.js
          services/
          site/
            content-types/
            error/
            filters/
            i18n/
            layouts/
            mixins/
            pages/
            parts/
            site.xml
          views/

Every file and folder has a specific function and meaning.

build.gradle
  `Gradle <https://gradle.org/>`_ script for building the application or library. This file describes the actual
  build process.

src/main/java/
  Optional folder where you place any java code that might be included in the project - following traditional Maven style development.

src/main/resources/
  This is where all non-java code is placed, and thus where you will typically be working with your XP projects.
  All folders described below are relative to this folder

admin/tools
  This is where you place code for admin tools. Tools are administrative user interfaces (apps) running in their own separate browser tab.
  Create tools if you need a back-office utility to manage your applications or similar.

admin/widgets
  Widgets are essentially user interface components that can be embedded within selected tools.
  I.e. you can create a widget that extends the Content Studio detail panel.


application.svg
  Application icon in SVG format.

application.xml
  The XML file contains basic information for the application. Currently a description.

  .. literalinclude:: ./code/application.xml
     :language: xml

assets/
  Public folder for external css, javascript and static images etc. etc.

lib/
  This is the last place the global ``require`` JavaScript-function looks,
  so it is a good place to put default JavaScript files here.

main.js
  This file may be thought of as an app initializer.  It is executed every time the app is started.  (see :ref:`main_initializer`)

services/
  Services are a special type of http controller that will be mounted on a fixed url pattern that looks like this: _/service/<myapp>/<myservice>.
  You may use services like any other JavaScript controller in the system.

site/site.xml
  The ``site.xml`` file contains basic information for a site created with the application.
  Settings for the application can be defined in the ``config`` element
  and the values for these settings can be updated using the Content Studio tool.

  .. literalinclude:: ../site/code/site.xml
     :language: xml

site/content-types/
  Content schemas are placed here. Used to create structured content (see :ref:`content_types`).

site/error/
  Create custom http error pages by placing an error controller in this directory (see :ref:`errors`).

site/filters/
    This is where generic http response filters are placed. Filters can be used for post processing any given request - also across applications added to a site.
    A common use case is adding script tags to pages - but possibilities are virtually endless.

site/i18n/
  This folder will contain application localization files (i18n is short for Internationalization).
  Files placed in this folder must follow Java's standard property file format, one file for each language.
  Here is an example: https://docs.oracle.com/javase/tutorial/i18n/resbundle/propfile.html

site/mixins/
  Mixin schema-types are placed here. A mixin can be used to add common fields to multiple content-types or other schemas (see :ref:`mixins`).

site/pages/
  Page controllers are placed here. They will be used to render pages and page templates (see :ref:`page`).

site/parts/
  Part controllers should be placed here. Parts are dynamically configurable components that can
  be placed on pages (see :ref:`part`).

site/layouts/
  Layout controllers should be placed here. Layouts are similar to parts, but in addition have one or more regions.
  Regions enable placement of other components inside the layout. (see :ref:`layout`).

views/
  Views are any kind of files that are used for rendering. The folder is optional, as view files can
   be placed anywhere you want, just keep in mind what path to use when resolving them (see :ref:`views`).
