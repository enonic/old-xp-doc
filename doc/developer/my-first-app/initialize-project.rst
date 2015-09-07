Initialize project
==================

Enonic XP includes the :ref:`toolbox` which can perform several useful operations. The :ref:`init_app` operation will initialize a new application project with the standard structures required  (see :ref:`apps-basics-project`).

#. Create a new folder at a suitable location on your filesystem for the application project files.
   e.g. ``/Users/<username>/project/myapp`` This will be the project root.

#. Go to this folder in the terminal and run the following command:

::

[$XP_INSTALL]/toolbox/toolbox.sh init-app -n com.company.myapp

.. tip::

  Only basic characters (a-z, 0-9 and .) should be used for application names, and the name must be globally unique. We recommend following standard Java package naming conventions such as com.mycompany.myapp - but it's all up to you.

Your project folder will now be filled with the standard folder structure for developing an app. Gradle build scripts were also created (see :ref:`building`).
