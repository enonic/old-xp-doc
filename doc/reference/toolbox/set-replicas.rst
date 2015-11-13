.. _set-replicas:

set-replicas
============

Set the number of replicas in the cluster.

**Usage:**

.. code-block:: none

    NAME
            toolbox set-replicas - Set the number of replicas in the cluster.

    SYNOPSIS
            toolbox set-replicas -a <auth> [-h <host>] [-p <port>] [--]
                    <numberOfReplicas>

    OPTIONS
            -a <auth>
                Authentication token for basic authentication (user:password).

            -h <host>
                Host name for server (default is localhost).

            -p <port>
                Port number for server (default is 8080).

            --
                This option can be used to separate command-line options from the
                list of argument, (useful when arguments might be mistaken for
                command-line options

            <numberOfReplicas>
                Number of replicas

**Example:**

.. code-block:: none

  $ ./toolbox.sh set-replicas -a su:password 2
