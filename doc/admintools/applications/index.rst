.. _application_tool:

Applications admin tool
=======================

.. NOTE::
   This page is under construction. This information is likely incomplete and possibly inaccurate until this notice is removed.

The Applications admin tool provides an interface to install, uninstall, start and stop applications for an Enonic XP installation. A list
of the installed applications appears in the left panel. Applications in this list can be selected by clicking on them. Information about
a selected app appears in the right panel. This information includes the basics such as version, key and system requirements as well as a
list of schemas for content types, mixins and relationship types, and also a list of descriptors, which are components for pages, parts and
layouts.

.. image:: images/apps-tool.png

Installing an app
-----------------

Two methods of installing apps are available with the Applications tool. Both are initiated by clicking the "Install" button in the toolbar.
A modal window appears with tabs labeled "Enonic Market" and "Upload".

Enonic Market install
`````````````````````

A list of apps on the Enonic Market will appear under the "Enonic Market" tab. Each app in the list has a name, a brief description, version
number and an "Install" link that will download, install and start the app. Installation will occur on all nodes of a clustered environment.
Clicking the name of an app will open a page on the Enonic Market website with more information about the app.

.. image:: images/install-market.png

Upload file install
```````````````````

Applications can also be installed by clicking the "Upload" tab in the "Install Application" modal. This shows a file input where you can
drag and drop an application JAR file, or click the upload button on the right and select an application JAR file from your local
filesystem. The app will be installed and started automatically when the download is complete.

.. image:: images/install-upload.png

Manual installation
```````````````````
A third method of installing apps involves placing the application JAR file into the ``$XP_HOME/deploy`` folder. It is not possible to do
this with the Applications admin tool. Apps installed this way would require the JAR file to be placed in the ``$XP_HOME/deploy`` folder on
each node in a cluster. Locally installed apps will have a blue circle with an "L" on the app icon in the list of installed apps. The
Superhero theme app was installed locally in the image below. Locally installed apps can only be uninstalled by deleting the JAR file in the
``$XP_HOME/deploy`` folder.

.. image:: images/install-local.png