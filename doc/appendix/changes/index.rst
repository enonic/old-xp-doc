Release Notes
===================

Enonic XP |version| marks a significant milestone - positioning Enonic XP as a Cloud Application Platform, offering unique benefits over any comparable solution.

Modules are now Application
---------------------------

What we previously called modules are now called applications. An application can be just about anything - from a full fledged Corporate website with self-service to a Google Analytics Integration that can be wired into the previous mentioned site.

To convert an existing module to an application, some changes are needed; please consult the :ref:`upgrading_to_6_0_0` chapter


Powerful tools for developers
-----------------------------
  
  - New tool: `init-app`  will create a new application project structure for you
  - The XML descriptors for `parts` and `pages` are now optional - more intuitive and simpler to use.
  - libraries are now be bundled inside an application, offering both javascript and java in each library.

	
Publishing wizard
-----------------

A publish wizard that will guide you in the process of publishing content and dependencies between branches has been introduced. 

.. image:: images/publish_wiz.png



Page Templates are now optional
-------------------------------

Users may now easily configure pages for any content, by simply selecting the controller directly - so no need to define page templates for everything - example use case: rss-feeds, landing pages, customized presentation for similar content (i.e. folders).


Image crop and focus point edit
-------------------------------

It is now possible to crop an image in the Content Manager application. It is also possible to set a focus point to be retained when cropping images.

.. image:: images/edit_focus.png


JavaScript API changes
----------------------

The Script commands used to access extra functions in the controllers have been replaced by libraries. See :ref:`js-libraries` documentation for reference.


Admin search UI improved
------------------------

The search in the content app has been greatly improved. Especially with regards to partial matching, fulltext matching and scoring.

.. image:: images/search.png