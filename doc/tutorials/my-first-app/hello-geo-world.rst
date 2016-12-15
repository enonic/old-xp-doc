Hello Geo World
===============

The home page of the site now shows a list of the countries we have added. To make this even more exciting, we will add a City content
type with geo-location and a `City list` part with configuration capabilities.

City content
------------

The next steps will create a content type for adding cities with location coordinates.

1. Create a folder named `city` inside the project's ``site/content-types`` folder.

2. Add the content type file below to your project. Because the contet type's folder is named "city" the file must be named "city.xml".

.. literalinclude:: code/content-types/city1.xml
  :language: xml
  :caption: City content type - site/content-types/city/city.xml

The file above defines a `content type` for cities with a required field for the location in latitude and longitude.

3. Copy the image below and save it in the same folder with the City content type. Name it "city.png".

.. image:: images/city.png

City list part
--------------

We need a `part component` to display the city data. It will list the cities and show a Google map of each location.

1. Create a folder named `city-list` inside the project's ``site/parts`` folder.

2. Add the part descriptor file. It must be named city-list.xml.

.. literalinclude:: code/city-part/city-list.xml
  :language: xml
  :caption: City list part descriptor - site/parts/city-list/city-list.xml

The part descriptor above has a configuration similar to those found in content types.

3. Add the part controller file. It must be named city-list.js.

.. literalinclude:: code/city-part/city-list.js
  :language: javascript
  :caption: City list part controller - site/parts/city-list/city-list.js

There are a few things to note in this controller file. It gets the part configuration for zoom and map type which were defined in the part
descriptor. It also gets the site configuration for the Google Maps API key which we will define later in the site.xml file.
:ref:`page_contributions` are used to put the Google Maps JavaScript into the head of the document.

4. Add the part view file. It must be named city-list.html to match the "resolve" function in the controller.

.. literalinclude:: code/city-part/city-list.html
  :language: html
  :caption: City list part view - site/parts/city-list/city-list.html

There is just one more file to edit and then all the code for this project will be complete.