Rendering a view
================

If you feel like concatenating strings to create an entire webpage is a
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