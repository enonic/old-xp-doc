.. _site_conent:

Site Content
============

Sites are usually created at the root level of the tree grid from a special built-in content type represented by a globe icon. Site contents
have a textarea field for the site description and a dropdown selector for adding and configuring applications. Every site content will have a
**Templates** folder which is automatically created along with the site content.

.. image:: images/sites.jpg

Applications
------------

Applications contain all the code behind a website. Apps are installed with the :ref:`applications` tool and apps are used by adding them to
a Site content. Some apps will have components for building a site and others will only add functionality to existing sites. Sites will need
at least one app that has at least one page component before any rendering can happen.

Edit a Site content and add the desired apps with the **Applications** dropdown selector.
Only users with the role "Administrator" or "Content Manager Administrator" can add an application to a site.
The image below shows the edit view for the Superhero Site content.
This site has two applications: one is the **Superhero theme** which was used to build the site and the other is the
**SumoMe App** that adds some functionality.

.. image:: images/site-apps.jpg

Configuration
-------------

Apps that have been added to a Site are listed in the content edit panel with the display name and app name.
The X icon removes the app from the site and the pencil icon opens the application configuration dialogue with the current values.
Only users with the role "Administrator" or "Content Manager Administrator" can remove an application from a site or edit application
configuration.
The configuration options available are defined in the application code.

.. image:: images/site-app-config.jpg
