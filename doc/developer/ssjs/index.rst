Serverside Javascript
=====================

Enonic XP relies heavily on Serverside Javascripting.  Controllers are standalone JavaScripts executed on the server that processes and
responds to HTTP requests.  **Controllers are very important to understand.**  When developing controllers, there are numerous global
objects and HTTP object available to assist the development process.
When the controllers have done their job, Page Contributions and Response Filters can do post processing of the response to add themes
or other reusable code to multiple responses.
It is also possible to write code in Java, and call that code from JavaScript, anywhere.

.. toctree::
   :maxdepth: 1

   using-controllers
   global-objects
   http-objects
   contributions
   response-filter
   invoking-java
