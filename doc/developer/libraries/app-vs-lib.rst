App vs Lib
==========

In order to allow reuse of code, Enonic XP has a introduced libraries, normally called just libs.  These are very similar to applications,
normally called just apps, but they have very different usage, so it is important to know the difference:

An app, is a bundle of components that can be deployed in Enonic XP, and provide an immediate user experience.

A lib is technically an app, but without the ``site.xml`` file.  Because of this, a lib can not be deployed.
By itself, it does not do anything.  It consists of one or more reusable components, put together in a bundle to provide useful
functionality for apps and other libs.

So, a lib may consist of all the same objects you find in an app: content-types, mixins, pages, parts, scripts and everything else you
want to develop an app, but they are made for reuse.