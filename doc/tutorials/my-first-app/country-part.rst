
Create the Country Part
=======================

We also need a way to display the data from our Country content type. This time, rather than making another page controller, we will create
a :ref:`part` component. Parts are reusable components that can be added to "regions" in pages or layout components - more on this later.

#. Create a folder called "country" inside the "parts" folder in your project.
#. Add the part **controller** and **view** files below to the "country" folder:

.. literalinclude:: code/country-part/country1.js
  :language: javascript
  :caption: Country part controller - site/parts/country/country.js

The part controller file above handles the GET request and passes the country content data to the view file which is shown below.

.. literalinclude:: code/country-part/country1.html
  :language: html
  :caption: Country part view - site/parts/country/country.html
