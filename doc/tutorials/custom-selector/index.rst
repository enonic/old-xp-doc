.. _custom-selector_tutorial:

Custom Selector
===============

*This guide will lead you through the required steps to build an input of type Custom Selector.*

1. Create a folder called “my-custom-selector” inside the “site/content-types” folder of your project.


2. In that folder create a configuration schema for the "my-custom-selector" content type.

.. literalinclude:: code/my-custom-selector.xml
    :language: xml


3. Create a folder called “my-custom-selector” (folder name must match the one specified in the config schema) inside the “resources/services” folder of your project.


4. In that folder create a javascript service file called “my-custom-selector.js” (again, the name must match the config schema).


5. Create GET handler in the service file and make sure that it returns JSON in the following format:

    id
      Unique Id of the option

    displayName
      Option title

    description (optional)
      Detailed description

    iconUrl (optional)
      Path to the thumbnail image file

    icon (optional)
      Inline image content (for example, SVG)

Below is a simple service file that returns two items in the result set, one with external thumbnail image, and another one with inline SVG markup:

.. literalinclude:: code/my-custom-selector-service.js
    :language: javascript

And here's a bit more advanced version of the service file that fetches song names from the Spotify API:

.. literalinclude:: code/spotify-service.js
    :language: javascript

.. tip:: You can also refer to service file in another application, for example *com.myapplication.app:myservice*.

.. literalinclude:: code/my-custom-selector-ext-service.xml
    :language: xml