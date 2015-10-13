Install with Docker
===================

We huge devop fans - and devops love `Docker <https://www.docker.com>`_. Docker is the most popular application container platform in the world.
For your convenience, we build Docker images of every Enonic XP release.

.. image:: docker.png

.. content:: Complete the following steps:
   :local:

Install Docker
--------------

Running Enonic XP with Docker actually requires access to a Docker container - now, that's a surprise!

.. note:: **Docker version 1.8.1 or newer is required to complete this guide**

If you don't already have a Docker up and running, we recommend reading the brilliant documentation on how to get started with Docker:

* `Docker for Windows <http://docs.docker.com/windows/started/>`_
* `Docker for OSX <http://docs.docker.com/mac/started/>`_
* `Docker for Linux <http://docs.docker.com/linux/started/>`_


Start Server
------------

.. _docker_project: <https://registry.hub.docker.com/u/enonic/xp-app/>

**Launch Enonic XP on Docker**

With Docker up and running, installing Enonic XP is as smooth as baby skin. Execute the commands below in your terminal/shell to get going.

* Create a storage container for configuration files, applications and data (XP_HOME)

::

  docker run -it --name xp-home enonic/xp-home

* Install and start Enonic XP, mounting the xp-home volume

::

  docker run -d -p 8080:8080 --volumes-from xp-home --name xp-app enonic/xp-app

This will download the latest stable Enonic XP image, start it, and map it to port ``8080`` on your docker-host.
You can optionally add :<versionnumber> at the end of the command to launch a specific version of Enonic XP - i.e.

::

  docker run -d -p 8080:8080 --volumes-from xp-home --name xp-app enonic/xp-app:6.1.0

Check out our `Project page at Docker Hub <docker_project>`_ for more info.


Log In
------

* Point your browser to ``http://<mydockercontainer>:8080``

.. include:: ../login.rst


Install Superhero Blog
----------------------

This is a simple blog, basically emulating Wordpress - even using one of their nice themes. Follow these steps to try it out:

**Deploy App**

* `Download the Superhero Blog Application <https://repo.enonic.com/public/com/enonic/app/superhero/1.0.0/superhero-1.0.0.jar>`_
* Open your terminal/shell and change directory to where the file was downloaded
* Copy the application file into XP_HOME storage volume with the following command

::

  docker cp superhero-1.0.0.jar xp-home:/enonic-xp/home/deploy/.

.. include:: ../start-blogging.rst

Next Steps
----------

.. include:: ../next.rst
