Defining a Relationship-Type
============================

Relationship-types allow you to create inputs that accept content as the value. These inputs can be used in content-types,
module configurations, or the descriptors for component parts and pages. This section will explain how to set up a
relationship type and modify the ``Person`` component part so that you can pick any ``Person`` content in the admin console
and it will display correctly.

First create a folder in the ``relationship-types`` folder called ``related-person``. Now make a file here called
``related-person.xml``.

.. literalinclude:: code/relationship-type.xml
   :language: xml
