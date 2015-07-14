Project structure
=================

The project structure is similar to Maven. Create the folder structure you
see below. All are folders except for ``site.xml`` and ``build.gradle``::

  my-first-module/
    build.gradle
    src/
      main/
        resources/
          site.xml
          cms/
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
  Gradle script for building the module. This file describes the actual
  build process.

site.xml
  The ``site.xml`` file contains basic information to register the module in
  Enonic XP. Settings for the module can be defined in the ``config`` element
  and the values for these settings can be updated in the administration
  console. An example will be presented later in this document. Leave the
  ``config`` element blank for now.

  .. literalinclude:: code/site.xml
     :language: xml

cms/lib/
  This is the last place the global ``require`` javascript-function looks,
  so it is a good place to put default libraries here.

cms/pages/
  Page definitions should be placed here. They will be used to create page
  templates in the repository.

cms/parts/
  Part definitions should be placed here. Parts are objects that can
  be placed on a page.

cms/layouts/
  Layout definitions should be placed here. Layouts are definitions that
  restricts the placement of parts.

cms/views/
  Views can generally be placed anywhere you want, just keep in mind
  what path to use when resolving them.

cms/assets/
  Public folder for external css, javascript and static images.

cms/content-types/
  Content schemas-types are placed here. Used to create structured content.

cms/mixins/
  Mixin schema-types are placed here. A mixin can be used to add fields to
  a content-type.

cms/relationship-types/
  Relationship-types are placed here. They are used to form relations between
  contents.
