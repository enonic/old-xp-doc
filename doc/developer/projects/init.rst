Project Initialization
======================

The fastest way to get started with any XP project is to use a starter project.
The starter-vanilla project on GitHub - https://github.com/enonic/starter-vanilla is often used.

To get going, we recommend using the :ref:`init_project` script that is a part of the Enonic XP installation.

In the terminal, move to the XP installation's toolbox folder. Copy/paste the command below and specify an empty folder for -d and an
appropriate app name for -n. Then execute the command to get your very own project initialized.

.. code-block:: none

   toolbox.sh init-project -d <projectFolder> -n com.mycompany.myApp -r enonic/starter-vanilla

The init-project command simply clones the entire Git project (to the local folder that was specified with -d), then removes the Git references.
It also updates your build script files by adding the specified app name (-n) to the project.

Once this is done, you must clean up and adapt the code to your own requirements.

You may, in principle, apply this command to any standard XP application or library project!
