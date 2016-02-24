.. _gradle_dev_mode:

Development mode
================

You can start the server in dev-mode to speed up the development process.
When using this mode, you only need to deploy your code once - or when certain situations arise (see below).

Start server using dev-mode::

  $ $XP_INSTALL/bin/server.sh dev

First time you will need to deploy the code (app, lib, etc.) using the ``deploy`` task
(see :ref:`gradle_deploy_app`)::

  $ ./gradlew deploy

After that, you do not need to redeploy your application except...

* when modifying Java code.
* when deleting a page, part or layout component.
* when deleting a content-type, mixin or relationship-type.
* when changing source directories.
* if you have source-transformation tools (typescript, less, sass).

.. warning::

  Do not use dev-mode in production environments. It takes a little more
  time to render pages and caches are sometimes disabled.
