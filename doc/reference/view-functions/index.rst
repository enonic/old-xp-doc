View Functions
==============

Both Thymeleaf and XSLT supports a set of view functions. All the functions
are described here with examples. All view functions described here
has the same parameters described in the associated :ref:`script-commands`
but transformed into an array instead with the following conventions:

#. All parameters is not prefixed by anything. ``params.a`` is just `a`.
#. Every other parameter is prefixed by ``_``. ``key`` will be ``_key``.

.. toctree::
   :maxdepth: 1

   assetUrl
   attachmentUrl
   componentUrl
   imageUrl
   pageUrl
   serviceUrl
   imagePlaceholder
   localize
   processHtml
