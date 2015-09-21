.. _superhero_docker:

Install Superhero Blog
======================

This is a simple blog, basically emulating Wordpress - even using one of their nice themes. Follow these steps to try it out:

**Deploy App**

* `Download the Superhero Blog Application <https://repo.enonic.com/public/com/enonic/app/superhero/1.0.0/superhero-1.0.0.jar>`_
* Open your terminal/shell and change directory to where the file was downloaded
* Copy the application file into XP_HOME storage volume with the following command

::

  docker cp superhero-1.0.0 xp-home:/enonic-xp/home/deploy/.

.. include:: ../start-blogging.rst
