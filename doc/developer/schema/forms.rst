.. _schema_forms:


Forms
=====

The main purpose of the schema concept is to construct forms that can be edited through the admin interface or used programmatically, without coding a custom interface and complex controllers.
A form is basically a composition layouts and input types. When a form is populated and submitted, the result will be a basic property structure that can be stored directly into :ref:`node-domain-nodes`.

Some hands on examples where forms are used in the system are :ref:`content_types` and :ref:`sites`.

Basic Setup
-----------

Forms can be composed through Java or XML, where the latter is the most common.

Below is an example configuration in xml:


.. literalinclude:: code/basic-form.xml
    :language: xml



Adding Mixins
-------------

To simplify maintenance of forms, mixins can be created and injected into a form simply by referencing it.
When the form is rendered, it will in this case simply act as if everything in the mixin was written directly in the form itself.


.. literalinclude:: code/form-with-mixin.xml
    :language: xml
