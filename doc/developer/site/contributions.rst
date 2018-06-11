.. _page_contributions:

Page Contributions
==================

Page contributions lets your components (**page**, **part**, **layout**) or **macro** contribute to the page's resulting HTML before it's being sent back to the user. Normally, the HTML being sent from any page is only possible to change from the page itself. Contributions can add any HTML (like CSS style, JavaScript, or any other custom HTML) to specific segments of the resulting HTML code.

A few ways to use page contributions are:

* Let a Google Maps part use page contributions to add required JavaScript to the page ``<head>`` section.
* Using a part that requires custom styling add the needed CSS to the ``<head>`` of that page.
* Adding a specific layout to a page will add a custom JavaScript tracker to the end of the ``<body>`` of that page.
* If parts collecting form data is added to a page, let them add a ``<p>`` to the beginning of the ``<body>`` explaining what the data is used for.

Added code from page contributions will be aggregated from all controllers before generated the final HTML. Any duplicate page contributions will be removed, making sure the HTML is not bloated.

To use page contributions, your component needs to return a ``pageContributions`` property in the returned JavaScript object (where you usually return the ``body``. A full return might look like this.

```
return {
  body: '<p>Some code</p>',
  pageContributions: {
    headEnd: "<script>My script</script>"
  }
}
```

Changing the ``headEnd`` to one of the other possible positions, will change where the code you contribute is added into the page's HTML before returning it to the end-user.

There are four positions where contributed content can be inserted in the page:

* ``headBegin``: After the ``<head>`` opening tag.
* ``headEnd``: Before the ``</head>`` closing tag.
* ``bodyBegin``: After the ``<body>`` opening tag.
* ``bodyEnd``: Before the ``</body>`` closing tag.

A simple usage example:

.. literalinclude:: code/page-contribution-simple.json
   :language: json

A more full usage example:

.. literalinclude:: code/page-contribution.json
   :language: json

Some remarks:

* All the ``pageContributions`` fields are optional. The ``pageContributions`` object is optional and each property inside is optional.

* The value for a contribution can be a string or an array of strings.

* The values are unique within an injection point (or tag position). If the same string is contributed from different parts, or from the same part that
  exists multiple times in the page, the value will only be inserted once. E.g. if two parts include a script for jQuery, it will be included once.
  But if one part is contributing to ``headBegin`` and another one contributes the same value to ``bodyEnd``, then it will be inserted in both places.

* If the tag does not exist in the rendered page, the value is ignored. I.e. if there is no ``<head>`` tag, the contributions to ``headBegin`` and
  ``headEnd`` will just be ignored.

* The contributions are inserted in a post-processing step during rendering. That means that there will not be any processing of
  Thymeleaf tags or similar. Contributions are treated as plain text.
