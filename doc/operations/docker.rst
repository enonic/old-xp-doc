Docker
======

`Docker`_ allows you to package an application with all of its dependencies
into a standardized unit for software development. We provide standard
images for each version so that it's really easy to start Enonic XP
for development or production.

To start using Docker you will have to set up a Docker host and
install Docker client libraries. Please follow `get started with Docker`_
guide to set up everything you need.

.. _Docker: https://www.docker.com/
.. _get started with Docker: http://docs.docker.com/mac/started/
.. _project page at Docker Hub: https://registry.hub.docker.com/u/enonic/xp-app/

After everything is installed, you can easily start up Enonic XP
on your container host like this::

  docker run -d -p 8080:8080 --name xp-app enonic/xp-app:6.0.0-M1

This will download the Enonic XP image and start it up and map it to
port ``8080`` on your docker-host. To look at the log, use ``docker logs``
command::

  docker logs xp-app

Shutdown your server by executing the ``docker stop`` command::

  docker stop xp-app

And, finally, kill the container if you do not need it anymore. This
will destroy all data on the image as well::

  docker kill xp-app

If you want to see more options for how to use the provided Enonic XP
image, go to our `project page at Docker Hub`_.
