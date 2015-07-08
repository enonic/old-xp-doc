Content vs Node
===============

The foundation of Enonic XP is the :ref:`node-domain`. In this domain, very general data
can be stored and retrieved through the node-API. A node is schema-less, and contains a minimal set of set properties.

A content is a basically a node with a schema and a rich API on top of the node-domain. The
schema is defined through :ref:`content-domain-content-types`.

Content nodes are stored in a provided :ref:`node-domain-repository` called ``cms-repo``, and can be managed
in the Enonic XP Content Manager application.
