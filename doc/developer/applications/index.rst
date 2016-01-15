.. _applications:

Applications
============

Enonic XP supports the concept of Applications - almost like a regular operating system.

Applications are self-contained, and have the following life-cycle:

* installed
* started
* stopped
* uninstalled.

Applications are basically containers of functionality and code, but may even include data - for instance to be imported when the application is started.

An application can have just about any kind of purpose. :ref:`sites` for instance can be created from one (or more) applications. Applications that have site support will explicitly declare this in their project structure.

You may add :ref:`libraries` to your applications and speed up development by re-using code across projects and organizations.

An application artifact (file) is typically a JAR file (.jar). This is short for Java Archive.
Enonic XP is build on top of Java and the OSGi framework, so developers with special requirements may utilize this capability.
However, since Enonic XP is designed to run :ref:`serverside_javascript` most :ref:`projects` will be completely free of Java.
