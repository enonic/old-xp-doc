.. _gradle_dev_mode:

Development mode
================

To speed up the development process you can start the server in dev-mode.
When using this mode you only need to deploy your code once or when you
have modified some Java code.

Start server using dev-mode::

  $ bin/server.sh dev

First time you will need to deploy the code using ``deploy`` task
(see :ref:`gradle_deploy_app`)::

  $ gradle deploy

After that, you do not need to redeploy your application except...

* when modifying Java code.
* when deleting a page, part or layout component.
* when deleting a content-type, mixin or relationship-type.
* when changing source directories.
* if you have source-transformation tools (typescript, less, sass).

.. warning::

  Do not use dev-mode in production environments. It takes a little more
  time to render pages and caches are sometimes disabled.
