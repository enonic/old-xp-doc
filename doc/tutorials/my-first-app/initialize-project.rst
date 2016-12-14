Initialize project
==================

Enonic XP includes the :ref:`toolbox` which can perform several useful operations. The :ref:`init_project` operation will clone an existing
project from a repository source, such as `GitHub <https://github.com>`_. The starter-vanilla project will initialize a new application with
the standard structures required (see :ref:`projects`).

#. Create a new folder at a suitable location on your filesystem for the application project files.
   e.g. ``/Users/<username>/projects/myapp`` This will be the project root.

#. Change directory in the terminal to this project root. ``cd /Users/<username>/projects/myapp``

#. Run the following command, replacing [$XP_INSTALL] with the path to your unzipped XP installation:

::

[$XP_INSTALL]/toolbox/toolbox.sh init-project -n com.company.myapp -r starter-vanilla -c v1.1.0

For example, if your XP installation is at ``/Users/enonic/installs/enonic-xp-6.9.0`` then you would enter:

::

/Users/enonic/installs/enonic-xp-6.9.0/toolbox/toolbox.sh init-project -n com.company.myapp -r starter-vanilla -c v1.1.0

.. tip::

  Only basic characters (a-z, 0-9 and .) may be used for application names, and the name must be globally unique. We recommend following
  standard Java package naming conventions such as com.mycompany.myapp.

Your project folder will now be filled with the standard folder structure for developing an app.
