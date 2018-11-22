.. _content_form:

Content Form
============

This panel appears on the left side of the page after content is created or while being edited. It is here the form appears in which content data is
entered. The structure and fields in the form are determined by the **content type** which is defined in the application code. The content
editor panel can be collapsed to give the page editor more room by clicking the arrow icon on the top right of the panel.

The top of the content form has the content type icon, the Display Name, and the content path name. The default icon can be replaced
with an image file by clicking on it. As the Display Name is entered, the path name will automatically be filled in with a URL-friendly
version. The path will not update automatically once the content has been published. This is to prevent accidental breaking of external
hard-coded links. The path name can always be changed manually. It is also possible for the Display Name to be generated automatically while
other fields in the form are filled in if the content type was set up that way in the application code.

.. image:: images/wizard-form-1.png

Underneath is a toolbar with clickable navigation steps that correspond to different sections of the content form.
The first one is always content type name, and the last ones are icons for the **Schedule** (only for published content), **Settings** and **Access** wizard steps.
In between, there might be :ref:`x-data` steps enabled for this content.
Clicking on an item in the toolbar will scroll the content form down to the corresponding section.

.. image:: images/wizard-form-2.png

Form fields in the content data section depend on how the content type was set up.


X-data sections will be injected into the content form along with inputs from content type schema.

.. image:: images/wizard-form-x-data.png


Mandatory x-data will be expanded with no option to remove.
Optional x-data are collapsed by default and have to be expanded by clicking "+" icon next to the title.

.. image:: images/wizard-form-x-data-expanded.png

The **Schedule** section is where the period of time, during which a content is available online, can be modified.
This section is only displayed for published content.

The **Settings** section is where the content's Language and Owner are set. The **Language** will be inherited from the parent content if it
was set there. The Owner will be the logged in user who created the content, but it could be changed if the current user has the right
permissions.

The **Access** section is where the content's permissions are set. Content will inherit the permissions of the parent content when
created. Users, Groups and Roles are principals that can be added to the content. Clicking on any item here will expand it and show what
permissions the principal has. Read more about :ref:`content_security`.
