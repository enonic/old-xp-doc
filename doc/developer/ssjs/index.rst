.. _serverside_javascript:

Serverside Javascript
=====================

Enonic XP relies heavily on Serverside Javascripting.  Controllers are standalone JavaScripts executed on the server that processes and
responds to HTTP requests.  **Controllers are very important to understand.**  When developing controllers, there are numerous global
objects and HTTP objects available to assist the development process.
When the controllers have done their job, Page Contributions and Response Filters can do post processing of the response to add themes
or other reusable code to multiple responses.
All the different JavaScripts, may invoke code written in Java, if that is desired.

.. toctree::
    :maxdepth: 1

    using-controllers
    global-objects
    http-objects
    contributions
    response-filter
    invoking-java


There is also our reference documentation with a number of libraries and other functions that may be quite useful: :ref:`api_ref_guide`
