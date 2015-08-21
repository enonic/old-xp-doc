Notable 6.0 Changes
===================

Here's a list of some notable changes.

- **Module is now application**

What we previously called module is now called application. An application can be just about anything - from a full fledged Corporate website with self-service to a Google Analytics Integration that can be wired into the previous mentioned site.

To convert an existing module to an application, some changes are needed; please consult the :ref:`upgrading_to_6_0_0` chapter

----

- **Simplified application development**
  
  - `init-app`-task in toolbox will create a new application project structure for you
  
  - The XML descriptors for `parts` and `pages` are now optional

----
	
- **Publish wizard**

A publish wizard that will guide you in the process of publishing content and dependencies between branches has been introduced. 

.. image:: images/publish_wiz.png

----

- **Image crop and focus point edit**

It is now possible to crop an image in the Content Manager application. It is also possible to set a focus point to be retained when cropping images.

.. image:: images/edit_focus.png

----

- **JavaScript API changes**

The Script commands used to access extra functions in the controllers have been replaced by libraries. See :ref:`js-libraries` documentation for reference.
  
----

- **Content app search improved**

The search in the content app has been greatly improved. Especially with regards to partial matching, fulltext matching and scoring.

.. image:: images/search.png

