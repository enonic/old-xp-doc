.. _publish:

Publishing content
==================

.. NOTE::
   This page is under construction. This information is likely incomplete and possibly inaccurate until this notice is removed.

**Publishing** is a simple but important concept for working with content in Enonic XP. The basic principal of publishing is that it makes
content viewable to others outside of the Content Studio.

Draft and master branch
-----------------------

All content created with the Content Studio exists in the **draft** branch with the status **offline**. Content in the draft branch can be
edited, changed, and previewed until it is ready to go online. When a content is published, it is copied from the **draft** branch to the
**master** branch. Only content in the master branch can be accessed by others outside of the Content Studio, subject to the contents'
security settings.

Content status
--------------

Published content will have the status **online** while content that has not yet been published will be **offline**. When changes to a
published content are saved, its status will be **modified** and this content will need to be published again before the changes will be
visible outside of the Content Studio. When a published content is "deleted" then its status will be **pending delete** and it will still be
visible outside of the Content Studio. Content that is pending delete must be published before it is actually removed from the master
branch.

.. warning:: Once a content is published, it cannot be taken offline without deleting it. If deleting the content is not a good option, it
   could be moved to an archive folder outside of the site content. Or the content security could be altered to make it visible only to
   administrators.

Publishing wizard
-----------------

Content is published through the **Publishing Wizard** dialogue. When a content is selected for publishing, its parents and all the related
content will be published with it. For example, in the image below, a **Post** content named "March madness" was selected for publishing.
This post has two related **Category** contents and a related **Author** content. Therefore, the categories and author will be published
with the March Madness post and the parent folders of the categories and author will also be published. All items that will be published
with the selected content are listed in the publishing wizard.

.. image:: images/publishing-wizard.jpg

If the selected content has children then these items can be included by checking the box labeled "Include child items". The total number of
items that will be published is displayed on the **Publish** button.