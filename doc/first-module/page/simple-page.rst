Creating a simple page
======================

To create a complete page in Enonic XP, we must grasp three different
concepts: the page descriptor, the controller and the view. Start off by making
a new folder in the page directory of the module and name it whatever you
want. Inside this folder, we will place our controller and page descriptor.

The page descriptor is required to register the page and allows us to set up
user input fields to configure the page. It also allows us to describe what
regions are available in this page.

Create a page descriptor by making a file named ``my-first-page.xml`` in
folder ``page/my-first-page``.

.. literalinclude:: code/page-1.xml
   :language: xml
