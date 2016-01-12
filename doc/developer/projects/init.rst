Project Initialization
======================

The fastest way to get started with any XP project, is using a starter project.
The starter-base project on GitHub - https://github.com/enonic/starter-base is often used.

To get going, we recommend using the :ref:`init_project` script that is a part of the Enonic XP installation.

Move to an empty folder and execute the command below to get your very own project initialized.

.. code-block:: none

   toolbox.sh init-project -d <projectFolder> -n com.mycompany.mylib -r enonic/starter-base

The init-project command simply clones the entire git project to your local folder, then removes all references to it.
It also updates your build script files by adding your special name to the project.

Once this is done, you must clean up and adapt the code to your own requirements.

You may in principle apply this command to any standard XP application or library project!
