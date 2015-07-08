Use the Relationship-Type
=========================

Now the ``Person`` part descriptor can be updated to use the ``Person`` relationship type.

.. literalinclude:: code/part.xml
   :language: xml

Once this is done, you will be able to choose a ``Person`` content for the part in the admin console. But the controller
needs some updating to make it work dynamically. The following example shows how to get the related-person of the content.

.. literalinclude:: code/controller.js
   :language: javascript
