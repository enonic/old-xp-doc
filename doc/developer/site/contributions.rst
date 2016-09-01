.. _page_contributions:

Page Contributions
==================

Page contributions are fragments of HTML that a component (**page**, **part**, **layout**) or **macro** can contribute to the page in which it is contained.
The idea is to allow components to add JavaScript or CSS stylesheets globally in the page, although it is not restricted to scripts or styles.

Page contributions help with solving 2 problems:

* Allow components to insert scripts or styles in specific positions in the page where it is often required.

  For example, a component providing web analytics might require that a script is inserted at the end
  of the page ``<body>``. Or a stylesheet needed for a component must be inserted in the ``<head>`` tag.

* Avoid duplicating script libraries or stylesheets required for a component. Even if the same component
  is included multiple times in a page, the library script contributed will only be added once.

Any page, part, layout or macro controller can contribute content to the page. The values from all component contributions
will be included in the final rendered page. Duplicated values will be ignored. There are four positions where
contributed content can be inserted in the page:

* ``headBegin``: After the ``<head>`` opening tag.
* ``headEnd``: Before the ``</head>`` closing tag.
* ``bodyBegin``: After the ``<body>`` opening tag.
* ``bodyEnd``: Before the ``</body>`` closing tag.

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

.. WARNING:: **Avoid String - Array conflicts in response filters**

   When there is a single contribution for a placeholder, like headEnd, it will be a string. But adding to it in a response filter will require
   an array. It is best to always check if it is an array before adding a value.

   .. literalinclude:: code/page-contributions-example.js
      :language: js