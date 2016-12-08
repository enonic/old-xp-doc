.. _serverside_javascript:

Serverside JavaScript
=====================

Enonic XP primarily uses server-side JavaScript for application development.
Our goal is to enable any developer - PHP, .net, Java, Python, etc, etc to quickly be productive with Enonic XP.

Here are some highlights on how it works:

* Runs on the Java Virtual Machine using the Nashorn JavaScript engine, a high performance, portable and robust platform.
* Multithreaded request-response approach - simplifying software development and utilization of modern multi-core hardware
* Implements central parts of CommonJS module specification (http://wiki.commonjs.org/wiki/Modules/1.1) like RequireJS - but not all
* You can invoke Java directly from your scripts - quickly accessing powerful Java libraries

Beyond simply executing JavaScript on the server, the XP framework provides a range of capabilities, primarily associated with HTTP.
Read more below to learn about the basic concepts.

.. toctree::
    :maxdepth: 1

    http-controllers
    global-objects
    main
    http-request
    http-response
    http-cookies
    websockets
    javascript-java-bridge
