.. _lib-mail:

lib-mail
========

This library implements methods for mail operations. Set the :ref:`configuration-mail` and add the following
into your ``build.gradle`` file in the ``dependencies`` section::

  include 'com.enonic.xp:lib-mail:6.1.0'

To use this library in your JavaScript files, you can require the library
like this::

  var mail = require('/lib/xp/mail')

The methods implemented in this library are listed below.

.. toctree::
   :maxdepth: 1

   api/send
