Start Server
============

.. _docker_project: <https://registry.hub.docker.com/u/enonic/xp-app/>


**Launch Enonic XP on Docker**

With Docker up and running, installing Enonic XP is as smooth as baby skin. Execute the commands below in your terminal/shell to get going

Create storage container for configuration files, applications and data (XP_HOME)

::

  docker run -it --name xp-home enonic/xp-home

Install and start Enonic XP, mounting the xp-home volume

::

  docker run -d -p 8080:8080 --volumes-from xp-home --name xp-app enonic/xp-app

This will download the latest stable Enonic XP image, start it, and map it to port ``8080`` on your docker-host.
You can optionally add :<versionnumber> at the end of the command to launch a specific version of Enonic XP - i.e.

::

  docker run -d -p 8080:8080 --volumes-from xp-home --name xp-app enonic/xp-app:6.1.0


**Some other Nice to know docker terminal commands:**

Look at the logs

::

	docker logs xp-app

Shutdown server

::

	docker stop xp-app

Start server (if you have an existing container running)

::

	docker stop xp-app


Delete the container if you do not need it anymore. NB! Home folder with data is preserved

::

	docker rm xp-app

Check out our `Project page at Docker Hub <docker_project>`_ for more info.
