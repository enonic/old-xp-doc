.. _toolbox-install-app:

install-app
===========

Installs an application on all nodes.

**Usage:**

.. code-block:: none

  NAME
          toolbox install-app - Install an application from URL or file
  
  SYNOPSIS
          toolbox install-app -a <auth> [-f <file>] [-h <host>] [-p <port>]
                  [--scheme <scheme>] [-u <url>]
  
  OPTIONS
          -a <auth>
              Authentication token for basic authentication (user:password).
  
          -f <file>
              Application file
  
          -h <host>
              Host name for server (default is localhost).
  
          -p <port>
              Port number for server (default is 8080).
  
          --scheme <scheme>
              Scheme (default is http).
  
          -u <url>
              The URL of the application

**Example:**

.. code-block:: none

  $  ./toolbox.sh install-app -a su:password -u http://repo.enonic.com/public/com/enonic/app/superhero/1.2.0/superhero-1.2.0.jar
  
  $ ./toolbox.sh install-app -a su:password -f /Users/rmy/Dev/apps/superhero/build/libs/superhero-1.2.0-SNAPSHOT.jar