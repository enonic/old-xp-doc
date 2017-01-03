.. _js-libraries:

Javascript Libraries
====================

This section describes the various standard libraries shipped with Enonic XP. The libraries are
included in your application through the Gradle build script like this::

  dependencies {
    include 'com.enonic.xp:<name>:${release}'
  }

Where ``name`` is the name of the library. Here's a list of available libraries:

* lib-auth
* lib-cache
* lib-content
* lib-context
* lib-event
* lib-http-client
* lib-i18n
* lib-io
* lib-mail
* lib-mustache
* lib-node
* lib-portal
* lib-repo
* lib-task
* lib-thymeleaf
* lib-xslt
* lib-websocket

To include both ``lib-mail`` and ``lib-content`` you can add both inside the
dependency list like this::

  dependencies {
    include 'com.enonic.xp:lib-mail:${release}'
    include 'com.enonic.xp:lib-content:${release}'
  }

.. note::

  The server-side JavaScript reference documentation can be accessed using
  the following links:

  * `Read in your browser`_
  * `Download as zip`_

.. _Download as zip: http://repo.enonic.com/public/com/enonic/xp/docs/${release}/docs-${release}-libdoc.zip
.. _Read in your browser: http://repo.enonic.com/public/com/enonic/xp/docs/${release}/docs-${release}-libdoc.zip!/index.html
