.. _page:

Page
====

A page component is the most basic building block of a site. Each page component must have a JavaScript controller file
and optionally an XML descriptor and an HTML view file. These files can define regions in the page where parts and layouts may be
added, or they can define a simple page without any compositions. Page components can be added to content individually
through the Content Studio interface or they can be used to create page templates that automatically render supported content types.

Any number of page templates can be created from a single page component. Thanks to the magic of page templates, even very large
sites will typically have very few page components--perhaps one for all the HTML pages and one for RSS pages.

Pages should be placed in the folder ``site/pages/[page-name]``

.. _apps-page-descriptor:

Descriptor
----------

The page descriptor is an XML file that is used to define regions and custom input fields for page configuration.
If a page does not require regions or configuration options then the descriptor may be omitted.

The file must be named ``[page-name].xml``. For example, if a page component is named "default" then the file must reside at
``site/pages/default/default.xml``.

.. literalinclude:: code/page-1.xml
   :language: xml

display-name
  A simple human readable display name.

display-name\@i18n
  The key to look up the display-name text in the localization bundles. Optional. (See also :ref:`localization_schemas`)

config
  The ``config`` element is where input fields are defined for configurable data that
  may be used on the page.

regions
  This is where regions are defined. Various component parts can be dragged and dropped into
  regions on the page.


.. _apps-page-controller:

Controller
----------

A page controller handles requests to the page. The controller is a required file written in JavaScript and must be
named ``[page-name].js``. A controller exports a method for each type of HTTP request that should be handled.
The handle method has the request object as a parameter and returns the response object (see :ref:`http_controllers`).

.. literalinclude:: code/controller-1.js
   :language: javascript

Here's a simple controller that acts on the ``GET`` request method.

.. literalinclude:: code/controller-2.js
   :language: javascript


Render-view
-----------

If you feel like concatenating strings to create an entire web page is a
little too much hassle, Enonic XP also supports views. A view is rendered
using a rendering engine; we currently support XSLT, Mustache and Thymeleaf
rendering engines. This example will use Thymeleaf.

To make a view, create a file ``my-first-page.html`` in the ``view`` folder.

.. literalinclude:: code/thymeleaf-1.html
   :language: html

In our ``[page-name].js`` file, we will need to parse the view to a string for
output. Here is where the Thymeleaf engine comes in. Using the Thymeleaf
rendering engine is easy; here is how we do it.

.. literalinclude:: code/controller-3.js
   :language: javascript

Unlike controllers and descriptors, view files can reside anywhere in your project
and have any valid file name. This allows for code reuse as
multiple page components can share the same view. If the view file is in the same
folder as the page controller then it can be resolved with only the file name
``resolve('file-name.html')``. Otherwise, the full path should be used, starting
with a '/' as in the example above.


Dynamic-content
---------------

We can send dynamic content to the view from the controller via the ``model``
parameter of the ``render`` function. We then need to use the rendering engine
specific syntax to render it. The controller file above passed a variable
called ``name`` and here is how to extract its value in the view using
Thymeleaf syntax.

.. literalinclude:: code/thymeleaf-2.html
   :language: html

More on how to use Thymeleaf can be found in
`the official Thymeleaf documentation`_.

.. _the official Thymeleaf documentation: http://www.thymeleaf.org/doc/usingthymeleaf.html


.. _apps-page-regions:

Regions
-------

To be able to add components like images, component parts, or text to our page via the Page Editor drag and drop
interface, we need to create at least one region. Regions can be declared in the page descriptor.
Each region will be referenced by name.

.. literalinclude:: code/page-2.xml
   :language: xml

You will also need to handle regions in the controller.

.. literalinclude:: code/controller-4.js
   :language: javascript

To make the Page Editor understand that an element is a region, we need an attribute
called ``data-portal-component-type`` with the value ``region`` in our HTML.

.. literalinclude:: code/thymeleaf-3.html
   :language: html

We can now use the Page Editor drag and drop interface to drag components into
our page.
