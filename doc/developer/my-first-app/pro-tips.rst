Some Pro Tips
=============

Handling Multiple projects
--------------------------

A **best practice** for working on multiple projects would involve keeping a separate XP_HOME folder for each project.
The folder structure for such a set up would look something like this::

  /Users/<name>/development
  /Users/<name>/development/software/<xp-install-version>
  /Users/<name>/development/xp-homes/<project-name>/home
  /Users/<name>/development/projects/<project-name>/<project-source-files>

An actual implementation with projects called my-first-app and company-site would look like this::

  /Users/mla/development/software/enonic-xp-5.3.0
  /Users/mla/development/software/enonic-xp-6.0.0
  /Users/mla/development/xp-homes/my-first-app/home
  /Users/mla/development/xp-homes/company-site/home
  /Users/mla/development/projects/my-first-app/...
  /Users/mla/development/projects/company-site/...

This allows you to have one Enonic XP installation for each version and as many different XP_HOME folders as you need for your projects.
When switching from one project to another, you only have to change the XP_HOME environment variable and then restart the installation of
the Enonic XP version that the project was created for.


Logging JSON objects
--------------------

While developing an app, it can be helpful to see the structure of objects returned by library functions. The best way to do
this is to set up a utilities JavaScript file in the project lib folder. Add the following function to the utilities file:

::

  site/lib/utilities.js

.. code-block:: javascript

  exports.log = function (data) {
    log.info('Utilities log %s', JSON.stringify(data, null, 4));
  };

Call the log function in any controller like the example below and then check the log after refreshing the page.

.. code-block:: javascript

  var util = require('utilities');

  var content = portal.getContent();
  util.log(content);


Using Gradle watch
------------------

It can be quite time consuming to frequently switch to the terminal to redeploy an app during development. Try using ``./gradlew watch``
in the terminal (from the project root) to **automatically redeploy** your app every time a change to a file is detected. The $XP_HOME
environment variable must be set in the terminal window.
