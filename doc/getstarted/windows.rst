.. _install_windows:

Windows
=======

This section describes the easiest way to install Enonic XP on a Windows computer.

.. tip:: The Java JDK is not required to run XP with this installer, but developers will need the JDK to build applications for Enonic XP.

.. note:: **General Requirements**

   * Windows 7 or newer
   * At least 1 GB of available memory
   * HTTP port 8080 should be available (this can be changed if needed, see :ref:`configuration`)


Download
--------

Visit the Enonic XP `download page <https://enonic.com/downloads>`_ and select the **WINDOWS** tab. Click the **Download now** button and
save the .exe file to a convenient location.

.. image:: images/download-windows.jpg

Run the installer
-----------------

Open the file when it is finished downloading and follow the instructions to install Enonic XP.

.. image:: images/1win-wiz-start.png

Click "Next" to begin the Setup Wizard.

.. image:: images/2win-welcome.png

Select a convenient location to install Enonic XP. The default location is in ``C:\Program Files (x86)\``

.. image:: images/3win-placement.png

Make your Start Menu folder and shortcuts selections. Leave the boxes checked for the defaults.

.. image:: images/4win-start-menu-install.png

Click "Finish" to close the installer.

.. image:: images/6win-completed.png

Now find the Enonic XP Start Menu shortcut and click to start it.

A window will open with the log and some buttons. XP will continue to run while this window is open. The **Home Directory** button will open
the XP home folder where the installation's files can be found. The **Launch Browser** button will open the Enonic XP administration
interface in the default browser. The admin UI can also be reached at http://localhost:8080

.. image:: images/windows-start2.jpg

Log In
------

* Click the **Launch Browser** button or point your browser to ``http://localhost:8080``
* Log in with username ``su`` and password ``password``.

After logging in you should see the following screen, with the launcher panel to the right:

.. image:: images/admin.jpg

Install Superhero Blog
----------------------

.. include:: install-app.rst

.. include:: start-blogging.rst

Next Steps
----------

.. include:: next.rst
