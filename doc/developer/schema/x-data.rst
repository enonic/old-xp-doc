.. _x-data:

X-data
------

**X-data** is a concept similar to :ref:`mixins`. Unlike mixins which are designed to be plugged in on the content-type level (via content type schema),
x-data are plugged in on a site level (via ``site.xml``). By default x-data plugged in via site.xml will automatically appear for all content under this site but it can be configured to
be available only for specific content types and also be optional (in which case it will have to be manually enabled in the Content Wizard).

X-data definition file must be placed in the folder ``site/x-data/[name]`` and named
``[name].xml``. For example, ``site/x-data/us-address/us-address.xml``.

.. literalinclude:: code/x-data.xml
    :language: xml

.. TIP::

  X-data may optionally have its own specific icon. The icon can be assigned to x-data by adding a PNG file with
  the same name, in the x-data folder, e.g. ``site/mixins/us-address/us-address.png``


Enabling x-data for content
```````````````````````````
.. literalinclude:: code/site-with-xdata.xml
   :language: xml
   :caption: site.xml


Configuring x-data
``````````````````

Use regular expressions in the ``allowContentTypes`` attribute of the x-data field inside ``site.xml`` to enable or disable it for specific content type(s).
By default x-data will be added to content items of all types with no option to remove it but you can make it optional by setting ``optional`` attribute to ``true``.
Optional x-data has to be manually enabled inside Content Wizard to be added to the content data.

If ``allowContentTypes`` and ``optional`` attributes are not set, the x-data is assumed to be mandatory and available for all content types.

.. literalinclude:: code/site-with-xdata-2.xml
   :language: xml
   :caption: site.xml


In the example above ``my-x-data-1`` will be enabled for all content types, with no option to disable it in the Content Wizard.
``my-x-data-2`` will be added for all content types with no option to remove it in the Content Wizard, except for content type ``base:folder`` for which it will not be shown at all.
``my-x-data-3`` will be enabled **only** for content type ``base:folder`` and will be optional, meaning user has to manually turn it on in the Content Wizard.


.. TIP::

  Visual differences between mandatory and optional x-data as well as enabled and disabled optional x-data can be seen in the :ref:`content_form` section.
