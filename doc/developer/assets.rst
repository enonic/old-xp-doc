.. _assets:

Assets
======

Applications and libraries commonly use files that will be delivered to the client (typically web browsers) without being modified. Examples
are icons, css files, javascript files etc. Enonic XP provides a standard and optimized approach to serving assets across applications.

Developers simply place the files they want to use into their project's /src/main/resources/assets/ folder.
These files can then be dynamically accessed through the asset service. The asset service is typically available through _/asset/<myapp>/path/to/myasset.ext.

The assetUrl() portal function lets you easily create links to assets.

.. js:function:: assetUrl({path [,application] [,type] [,params]})

  :param string path: Path to the asset.
  :param string application: Application where the asset exists. Default is current application.
  :param string type: URL type. Either server (server-relative URL) or absolute. Default is server.
  :param object params: Custom parameters to append to the url.
  :returns: The the relative or absolute URL to the asset.

API
---
The detailed API documentation may be
.. _found here: http://repo.enonic.com/public/com/enonic/xp/docs/${release}/docs-${release}-libdoc.zip!/module-portal.html#.assetUrl .
