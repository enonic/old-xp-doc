.. _apps-basics-project:

Project structure
=================

To build applications with Enonic XP, you will typically setup a so-called project. The fastest way to do this is using the init-project feature included in the Enonic XP toolbox utility.

The project structure is a similar to a `Maven <https://maven.apache.org/>`_ projects for those who are familiar with that.

Below is a sample project folder structure - all items are folders, except for ``site.xml`` and ``build.gradle``::

  my-first-app/
    build.gradle
    src/
      main/
        resources/
          site/
            site.xml
            lib/
            pages/
            parts/
            layouts/
            view/
            assets/
            content-types/
            mixins/
            relationship-types/
            services/

Every file and folder has a specific function and meaning.

build.gradle
  `Gradle <https://gradle.org/>`_ script for building the module. This file describes the actual
  build process.

site/site.xml
  The ``site.xml`` file contains basic information for a site created with the application.
  Settings for the application can be defined in the ``config`` element
  and the values for these settings can be updated in the administration
  console.

  .. literalinclude:: ../site/site.xml
     :language: xml

site/lib/
  This is the last place the global ``require`` javascript-function looks,
  so it is a good place to put default libraries here.

site/pages/
  Page definitions should be placed here. They will be used to create page
  templates in the repository (see :ref:`page`).

site/parts/
  Part definitions should be placed here. Parts are objects that can
  be placed on a page (see :ref:`part`).

site/layouts/
  Layout definitions should be placed here. Layouts are definitions that
  restricts the placement of parts (see :ref:`layout`).

site/views/
  Views can generally be placed anywhere you want, just keep in mind
  what path to use when resolving them (see :ref:`view`).

site/assets/
  Public folder for external css, javascript and static images.

site/content-types/
  Content schemas-types are placed here. Used to create structured content (see :ref:`content-domain-content-types`).

site/mixins/
  Mixin schema-types are placed here. A mixin can be used to add fields to
  a content-type (see :ref:`content-domain-mixins`).

site/relationship-types/
  Relationship-types are placed here. They are used to form relations between
  contents (see :ref:`content-domain-relationship-types`).
