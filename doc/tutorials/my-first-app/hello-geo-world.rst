Hello Geo World
===============

Going back to your site, you will now see a list of the countries we have added. To make this even more exciting, we will add a City content
type with geo-location and a `City list` part with configuration capabilities.

City content
------------

The next steps will create a content type for adding cities with location coordinates.

1. Create a folder called `city` inside the project's ``site/content-types`` folder.

2. Add the content type file below to your project:

.. literalinclude:: code/content-types/city1.xml
  :language: xml
  :caption: City content type - site/content-types/city/city.xml

The file above defines a `content type` for cities with a required field for the location in latitude and longitude.

3. Copy the image below and save it in the same folder with the City content type. Name it "city.png".

.. image:: images/city.png

City list part
--------------

We need a `part component` to display the city data. It will list the cities and show a Google map of each location.

1. Create a folder called `city-list` inside the project's ``site/parts`` folder.

2. Add the part descriptor file.

.. literalinclude:: code/city-part/city-list.xml
  :language: xml
  :caption: City list part descriptor - site/parts/city-list/city-list.xml

The part descriptor above has a configuration similar to those found in content types.

3. Add the part controller file.

.. literalinclude:: code/city-part/city-list.js
  :language: javascript
  :caption: City list part controller - site/parts/city-list/city-list.js

This controller uses :ref:`page_contributions` to put the Google Maps JavaScript into the head of the document.

4. Add the part view file.

.. literalinclude:: code/city-part/city-list.html
  :language: html
  :caption: City list part view - site/parts/city-list/city-list.html

5. Build and deploy your project one final time with ``./gradlew deploy``.

All of the project's files are now complete. The rest of the steps will be performed in the Content Manager interface.
