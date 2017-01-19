.. _reverse_proxy:

Reverse Proxy Servers
=====================

A common and recommended way to deploy Enonic XP is by using reverse proxy servers.
Adding this layer of services to your network provides additional flexibility beyond what is offered directly by XP.
Some potential benefits are:

* Vhost routing to XP and other systems
* Additional network security
* Certificate and HTTPS handling
* URL rewriting
* Load balancing
* Resource caching
* Logging
* and more

Below we describe how to configure popular web servers as proxies in front of a single Enonic XP node.

Apache
------

.. ATTENTION::
	*Prerequisites*
		* Apache 2.4 downloaded and running on local machine
		* Enonic XP downloaded and started on local machine, using the default port 8080
..

Apache provides a detailed tutorial on setting up proxies here: http://httpd.apache.org/docs/2.4/howto/reverse_proxy.html

Load Mod Proxy
**************

To get started we need to add some selected Apache Proxy Modules.

Add the following line after the other LoadModule directives in your Apache configuration aka httpd.conf

::

	LoadModule proxy_module /usr/lib/apache2/modules/mod_proxy.so
	LoadModule proxy_http_module /usr/lib/apache2/modules/mod_proxy_http.so
	LoadModule proxy_wstunnel_module /usr/lib/apache2/modules/mod_proxy_wstunnel.so


Setup Apache Vhost
******************

.. literalinclude:: code/apachevhost.conf
   :language: properties
   :caption: ``Apache Vhost with Proxy config``

This setup will proxy all requests directly through Apache to XP, also notice the WebSocket directive.
Enonic XP admin UI uses websockets actively, as this is not http traffic, a separate proxy needs to be configured.


Nginx
-----

Work in progress
