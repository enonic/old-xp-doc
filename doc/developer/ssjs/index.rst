.. _serverside_javascript:

Serverside Javascript
=====================

Enonic XP primarily uses server-side Javascript for application development.
Our goal is simply that developers from any background - PHP, .net, Java, Python, etc, etc will be able to understand and quickly be productive with Enonic XP.

We are often asked how it compares to NodeJS, here are the main differences:

* Runs inside the Java Virtual Machine using the Nashorn javascript engine, a highly performant, portable and robust platform.
* Multithreaded request-response approach - simplifying software development and utilization of modern multi-core hardware
* Implements central parts of CommonJS module specification (http://wiki.commonjs.org/wiki/Modules/1.1) like RequireJS - but not all
* You can invoke Java directly from your scripts - quickly accessing powerful Java capabilities

This chapter brings you an overview of the core concepts of the XP framework.

.. toctree::
    :maxdepth: 1

    global-objects
    http-request
    http-response
    http-cookies
    http-controllers
    http-filters
    javascript-java-bridge
