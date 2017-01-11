.. _applications:

Applications
============

Like anything that calls itself an operating system - Enonic XP has Applications.
The applications can be installed and run on a single server, or an entire cluster.

It is important to note that applications are not limited to being "Web Applications" -
they can be running server jobs, provide internal API's to other applications, offer HTTP services, include custom Admin Tools, extend other
tools or applications, or be used to build sites.

Applications may even carry data, for instance, to initialize a repository or populate a new site.

Life Cycle
----------
Applications have the following statuses on its life-cycle:

* installed
* started
* stopped
* uninstalled

When installing applications in an XP cluster - the application is uploaded and stored in the system repository - and then started on all nodes.
If an application contains an initialization script, this script will only be executed on the master node - running only once.

Composition
-----------
An application file is typically a JAR (.jar). This is short for Java Archive.
Enonic XP is built on top of Java and the powerful OSGi framework, so developers with special requirements may utilize capabilities such as
exposing and consuming services from other applications.
However, since Enonic XP is designed to run :ref:`serverside_javascript`, most :ref:`projects` will be completely free of Java.

To speed up development and enable a high degree of re-use, applications can be composed of :ref:`libraries` in addition to your own code.
Libraries can be built almost like you create applications. Libraries (and applications) are shared through Maven repositories.
An example is https://repo.enonic.com.
Anyone may configure and run their own repository - for internal as well as external use.

For your amusement, we can also tell you that Enonic XP itself is composed from more than 50 different applications - making the platform extremely modular.

Other Resources
---------------
To learn more about applications and how they are built - continue reading the :ref:`dev_guide`, but pay special attention to the following chapters:

* :ref:`projects`
* :ref:`libraries`
