.. _id_providers:

ID Providers
============

.. WARNING::
  ID Providers support is experimental.

An ID Provider is a pluggable authentication module, contained inside an application.
Install an existing ID Provider or write your own, configure it and associate it to a user store.

To create an ID provider, you must create a new folder in your project structure, i.e.  ``idprovider``.
Then you must place a descriptor and a controller there.

Descriptor
----------

The ID Provider descriptor is a required XML file used to define the mode and the configuration required by the provider.
The descriptor file must have the following path: ``idprovider/idprovider.xml``:

.. literalinclude:: code/descriptor.xml
   :language: xml

mode
  Specifies how the provider uses the user store.

  LOCAL: Both the users and groups are stored locally in the user store.

  EXTERNAL: Both the users and groups are stored in a remote system.
  The user store is only a snapshot view of this remote system and therefore the users and groups are not editable in the admin tool :ref:`users_tool`.

  MIXED: The users are stored in a remote system and the groups in the user store.
  The users in the user store are only a snapshot view of this remote system and therefore the users are not editable in the admin tool :ref:`users_tool`.

config
  Specifies the input fields of the configuration required by the ID provider.


Controller
----------

The controller is a required file written in JavaScript and must have the following path: ``idprovider/idprovider.js``:

.. literalinclude:: code/controller.js
   :language: javascript

handle401
  Optional function rendered in the case of a 401 error.
  This function typically produces a login or error page.

get/post/...
  Functions rendered. An ID provider controller exports a method for each type of HTTP request that should be handled.
  The portal function ``idProviderUrl()`` will create a dynamic URL to this function.

login
  Function rendered.
  The portal function ``loginUrl()`` will create a dynamic URL to this function.

logout
  Function rendered.
  The portal function ``logoutUrl()`` will create a dynamic URL to this function.

autoLogin
  Optional function executed if the current user is unauthenticated.
  This functions allows you to, for example, handle web tokens or other request headers.


Set up an ID Provider
---------------------

To set up an ID Provider, you must follow the 3 steps below:

#. An application containing an ID Provider must be installed and started (Use the admin tool :ref:`application_tool`).
#. The application must be associated to a user store and configured (Use the admin tool :ref:`users_tool` and edit the user store to guard).
#. The user store must be associated to a virtual host in the virtual host configuration file (see :ref:`configuration-vhost`).
