Adding dynamic content
======================

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
