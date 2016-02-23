Some Pro Tips
=============

Adding libraries to your project
--------------------------------

Why re-invent the wheel for each app you make? Reusable code can be created in libraries and added to any XP project. Some essential tools
can be found in the `Util lib <https://github.com/enonic/lib-util>`_, `Menu lib <https://github.com/enonic/lib-menu>`_,
`RECAPTCHA <https://github.com/enonic/lib-recaptcha>`_ and `Landing page <https://github.com/enonic/lib-landingpage>`_ libraries.

Adding apps to your site
------------------------

A website can be created from a single app. But a site's functionality can be extended by adding other pre-made apps. SEO Meta Fields,
Disqus comments and Google Analytics are just a few of the many apps that can instantly add features to your site. See what's available at
the `Enonic Marketplace <http://market.enonic.com/applications>`_.

Handling Multiple projects
--------------------------

A **best practice** for working on multiple projects would involve keeping a separate XP_HOME folder for each project.
The folder structure for such a setup would look something like this::

  /Users/<name>/development
  /Users/<name>/development/software/<xp-install-version>
  /Users/<name>/development/xp-homes/<project-name>/home
  /Users/<name>/development/projects/<project-name>/<project-source-files>

An actual implementation with projects called my-first-app and company-site would look like this::

  /Users/mla/development/software/enonic-xp-6.3.1
  /Users/mla/development/software/enonic-xp-6.4.0
  /Users/mla/development/xp-homes/my-first-app/home
  /Users/mla/development/xp-homes/company-site/home
  /Users/mla/development/projects/my-first-app/...
  /Users/mla/development/projects/company-site/...

This allows you to have one Enonic XP installation for each version and as many different XP_HOME folders as you need for your projects.
When switching from one project to another, you only have to change the XP_HOME environment variable and then restart the installation of
the Enonic XP version that the project was created for.

Check this `Enonic Labs article <http://labs.enonic.com/articles/working-with-multiple-xp-projects>`_ for a more in-depth process. It also
includes some bash scripting that will help with setting and changing $XP_HOME and starting and stopping XP.

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

This logging function and many other useful functions are included in the `Util library <https://github.com/enonic/lib-util>`_.

Continuous build with Dev Mode or Gradle
----------------------------------------

It can be quite time consuming to frequently use the terminal to redeploy an app during development. Starting Enonic XP in dev-mode
will make most changes to your app code visible immediately on localhost. See the :ref:`gradle_dev_mode` page for more information about
its capabilities and limitations.

Another option is to use  ``./gradlew -t deploy`` in the terminal from the project root. This will automatically build and redeploy your app
every time changes to a file are detected. This method is slower than dev-mode, but it handles some situations that dev-mode doesn't. Gradle
2.7 or newer is required.

Both dev-mode and Gradle continuous-mode require the $XP_HOME environment variable to be set in the terminal window.