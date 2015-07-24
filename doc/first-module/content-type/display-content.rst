Displaying content
==================

Now that a content-type has been defined and a content created, a new component part is needed to display the content.
But first, a person content should be prepared in a specific location so that the code below can be copy/pasted and
work properly. In the admin console content manager app, right-click on the ``my-first-site`` and
select ``new``. Then choose ``folder`` and name it ``People``. Next, create a new person content in the `People` folder with
the first name ``Edvard`` and the last name ``Munch`` and type in anything you like for the bio. Upload any image for the
picture. Notice the path of this content under the display name is ``/my-first-site/people/edvard-munch``.

Now create a new folder in your project under the ``parts`` folder and name it ``person-show``. Now create a part descriptor
file named ``person-show.xml``. This descriptor only needs a display-name for now.

.. literalinclude:: code/part.xml
   :language: xml

Next, create the person-show controller named ``person-show.js``.

.. literalinclude:: code/controller.js
   :language: javascript

Now a simple view file called ``person-show.html`` can be created to render the
content data that is passed from the controller.

.. literalinclude:: code/thymeleaf.html
   :language: html

Rebuild the project and add the ``Person`` part to the page in *live edit*. This is a very simple example and not a very
practical way to retrieve content. Errors would occur if the content name changed (due to the hardcoded content path),
or if any of the content fields were missing values. The descriptor and controller will be modified in the next step to
use a relationship type that will make the code more dynamic and robust.
