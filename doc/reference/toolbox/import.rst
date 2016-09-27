.. _toolbox-import:

import
======

Import data from a named export into Enonic XP at the desired content path.
The export read has to be stored in the ``$XP_HOME/data/export`` directory.
See :ref:`operations-export` for more information on content export/import.

**Usage:**

.. code-block:: none

  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).

          -h <host>
              Host name for server (default is localhost).

          -p <port>
              Port number for server (default is 8080).

          -s <exportName>
              A named export to import.

          --skipids
              Flag that skips ids.

          -t <targetRepoPath>
              Target path for import. Format:
              <repo-name>:<branch-name>:<node-path>. e.g 'cms-repo:draft:/'

          -xslParam <xslParam>
              Parameter to pass to the XSL transformations before importing nodes.
              Format: <parameter-name>=<parameter-value> . e.g. 'applicationId=com.enonic.myapp'

          -xslSource <xslSource>
              Path to xsl file (relative to <XP_HOME>/data/export) for applying
              transformations to node.xml before importing.

**Example:**

.. code-block:: none

  $ ./toolbox.sh import -a su:password -s myExport -t cms-repo:draft:/
  $ ./toolbox.sh import -a su:password -s mySiteExport -t cms-repo:draft:/content

.. TIP::
  An **XSL** file and a set of *name=value* parameters can be optionally passed for applying transformations to each ``node.xml`` file, before importing it.

  This option could for example be used for renaming types or fields. The *.xsl* file must be located in the ``$XP_HOME/data/export`` directory.
