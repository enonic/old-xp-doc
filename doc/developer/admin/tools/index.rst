.. _tools:

Admin Tools
===========

.. WARNING::
  Admin Tool support is experimental.

Admin Tools are independent "back office" user interfaces designed to manage Enonic XP or installed applications.
Each tool will run in it's own browser tab - here are some of the reasons for this:

* Faster user interfaces and better deep-linking support
* Developers can use their favorite front-end frameworks
* Simplified debugging

**Standard Tools**

Enonic XP is shipped with the following tools by default:

* :ref:`home_tool` (The default tool)
* :ref:`application_tool` (Install, stop, start and uninstall applications)
* :ref:`content_studio` (Create and manage content and sites)
* :ref:`users_tool` (Create, setup and manage users, groups and roles)

**Launcher**

Navigation between the various Admin Tools is done via the "Launcher Panel", accessible via the "burger" icon in the top right corner.
This icon and the Launcher panel should be available across all Admin Tools.

.. image:: images/launcher.jpg



To create a new Admin Tool, you must create a new folder in your project structure, i.e.  ``admin/tools/[tool-name]``.
Then you must place a descriptor, an icon and a controller there.


Descriptor
----------

The tool ``descriptor`` defines the basic info to be displayed in the launcher and which roles are required to access the tool.

The descriptor file must have the same name as the tool, i.e. ``admin/tools/[tool-name]/[tool-name].xml``:

.. literalinclude:: code/descriptor.xml
   :language: xml

.. TIP::

  The tool `display-name` and `description` can be provided in multiple languages. See :ref:`localization_schemas` for details.


Icon
----

You should add an SVG icon to the tool. This will be displayed in the launcher panel together with the info from the descriptor.
The icon file must have the same name as the tool, i.e. ``admin/tools/[tool-name]/[tool-name].svg``:


Controller
----------

To drive the tool, we will need a **controller** (See :ref:`http_controllers`). The controller typically produces the initial tool html.
Depending on the tool implementation it may also handle sub-requests from the tool.

The controller must have the same name as the tool, i.e. ``admin/tools/[tool-name]/[tool-name].js``:

.. literalinclude:: code/controller.js
   :language: javascript


Adding the Launcher Panel menu
------------------------------

Adding the Launcher Panel menu to a custom admin tool requires a few steps.

1. Add a reference to lib-admin-ui to the ``dependencies`` section in build.gradle file of your project:

``include "com.enonic.lib:lib-admin-ui:1.1.0"``


2. Add references to XP Admin UI's libraries and stylesheets to your view file - they are required for the Launcher Panel to function properly:

.. literalinclude:: code/admin_references.html
    :language: html


3. Add a reference to the Launcher bundle which will inject the "burger" icon and the Launcher panel into your page.

.. literalinclude:: code/launcher-reference.html
    :language: html


4. In the <body> section of the view add a Javascript snippet where you define a global object variable called "CONFIG" with properties ``launcherUrl``, ``adminUrl`` and ``appId``. ``appId`` is needed to correctly identify your tool inside the Launcher panel.


.. literalinclude:: code/config.html
    :language: html


5. Finally, make sure that all parameters used in the view are passed from the view controller:

.. literalinclude:: code/launcher-controller.js
    :language: javascript

Entire view:

.. literalinclude:: code/view.html
    :language: html


.. TIP::

  Feel free to use our `admin tool starter <https://github.com/enonic/starter-admin-tool>`_ to help you speed up the process of setting up your own tool.
