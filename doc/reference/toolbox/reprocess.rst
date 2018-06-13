.. _toolbox-reprocess:

reprocess
=========

Reprocesses content in the repository and **regenerates metadata for the media attachments**.
Only content of a media type (super-type = `base:media`) are processed.

Unless the `--skip-children` flag is specified, it processes all descendants of the specified content path.

This command should be used after migrating content from Enonic CMS using the cms2xp_ tool.

.. _cms2xp: https://github.com/enonic/cms2xp

**Usage:**

.. code-block:: none

  NAME
          toolbox reprocess - Reprocesses content in the repository.
  
  SYNOPSIS
          toolbox reprocess -a <auth> [-h <host>] [-p <port>]
                  -s <sourceBranchPath> [--scheme <scheme>] [--skip-children]
  
  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).
  
          -h <host>
              Host name for server (default is localhost).
  
          -p <port>
              Port number for server (default is 8080).
  
          -s <sourceBranchPath>
              Target content path to be reprocessed. Format:
              <branch-name>:<content-path>. e.g 'draft:/'
  
          --scheme <scheme>
              Scheme (default is http).
  
          --skip-children
              Flag to skip processing of content children.

**Example:**

.. code-block:: none

  $ ./toolbox.sh reprocess -a su:password -s draft:/
