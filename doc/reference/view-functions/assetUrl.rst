assetUrl
========

This generates a URL pointing to a static file in the site/assets folder, such as CSS, background images, etc.

**Parameters:**

path
  Path to the asset.

application
  Use this when the asset referenced is in another application. Defaults to current application. Use the app name, for example,
  ``com.enonic.blog.superhero``.

type
  URL type. Either ``server`` (server-relative URL) or ``absolute``. Default is ``server``.

params
  Custom parameters to append to the url.

**Usage in Thymeleaf:**

.. literalinclude:: code/assetUrl-thymeleaf.html
   :language: html

**Usage in XSLT:**

.. literalinclude:: code/assetUrl-xslt.xml
   :language: xml
