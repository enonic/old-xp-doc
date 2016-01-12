.. _assets:

Assets
======

Commonly used for both applications and libraries are files that are to be delivered to the client (typically web browser) without being modified. Examples are, icons, css files, javascript files etc.
Enonic XP provides a standard and optimized approach to serving assets across applications.

Developers simply place the files they want to use into their projects /src/main/resources/assets/ folder.
These files can then be dynamically accessed through the asset service, available on any url pattern using _/asset/<myapp>/path/to/myasset.ext.

The portal functions let you easily create links to assets.
