.. _set-replicas:

set-replicas
============

Set the number of replicas in the cluster.  For more information on how replicas work and recommended values, see: :ref:`replica-setup`.

**Usage:**

.. code-block:: none

    NAME
            toolbox set-replicas - Set the number of replicas in the cluster.
    
    SYNOPSIS
            toolbox set-replicas -a <auth> [-h <host>] [-p <port>]
                    [--scheme <scheme>] [--] <numberOfReplicas>
    
    OPTIONS
            -a <auth>
                Authentication token for basic authentication (user:password).
    
            -h <host>
                Host name for server (default is localhost).
    
            -p <port>
                Port number for server (default is 8080).
    
            --scheme <scheme>
                Scheme (default is http).
    
            --
                This option can be used to separate command-line options from the
                list of argument, (useful when arguments might be mistaken for
                command-line options
    
            <numberOfReplicas>
                Number of replicas


**Example:**

.. code-block:: none

  $ ./toolbox.sh set-replicas -a su:password 2
