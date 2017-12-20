.. _tasks:

Tasks
=====

Tasks allow the asynchronous execution of jobs.
Each task has a name, a JavaScript controller file, and an XML descriptor in the folder ``tasks/[task-name]``


Descriptor
----------

The task descriptor is an XML file that defines configuration parameters for the task.

When parameters are passed to the task controller, they will be validated according to the XML config schema (see :ref:`schemas`).

The `config` element in the descriptor XML is optional. It can be left empty if the task does not take any parameters.

The descriptor file must have the same name as the task, i.e. ``tasks/[task-name]/[task-name].xml``:

.. literalinclude:: code/task.xml
   :language: xml


Controller
----------

A task controller handles the execution of the task.
The controller is a required file written in JavaScript and must have the same name as the task, i.e. ``tasks/[task-name]/[task-name].js``.

A task controller must export a ``run`` function, that will be called when the task is executed.
The ``run`` function will receive the task parameters as a JSON object.

The following is an example of task controller.

.. literalinclude:: code/task.js
   :language: javascript


Using Tasks
-----------

Tasks can be started by calling the ``submitNamed`` function in `lib-task library`_.

.. _lib-task library: http://repo.enonic.com/public/com/enonic/xp/docs/${release}/docs-${release}-libdoc.zip!/module-task.html#.submitNamed

Task Properties
---------------

A running task has the following properties, which can be obtained using the `functions in lib-task library`_

+------------------+--------+--------------------------------------------------------------------------------+
| Name             | Type   | Description                                                                    |
+==================+========+================================================================================+
| id               | string | Task unique id.                                                                |
+------------------+--------+--------------------------------------------------------------------------------+
| name             | string | Task name.                                                                     |
+------------------+--------+--------------------------------------------------------------------------------+
| description      | string | Task description.                                                              |
+------------------+--------+--------------------------------------------------------------------------------+
| state            | string | Task state. Possible values: ``WAITING``, ``RUNNING``, ``FINISHED``, ``FAILED``|
+------------------+--------+--------------------------------------------------------------------------------+
| application      | string | Application containing the callback function to run.                           |
+------------------+--------+--------------------------------------------------------------------------------+
| user             | string | Key of the user that submitted the task.                                       |
+------------------+--------+--------------------------------------------------------------------------------+
| startTime        | string | Time when the task was submitted (in ISO-8601 format).                         |
+------------------+--------+--------------------------------------------------------------------------------+
| progress         | Object | Progress information provided by the running task.                             |
+------------------+--------+--------------------------------------------------------------------------------+
| progress.current | number | Latest progress current numeric value.                                         |
+------------------+--------+--------------------------------------------------------------------------------+
| progress.total   | number | Latest progress target numeric value.                                          |
+------------------+--------+--------------------------------------------------------------------------------+
| progress.info    | string | Latest progress textual information.                                           |
+------------------+--------+--------------------------------------------------------------------------------+

.. _functions in lib-task library: http://repo.enonic.com/public/com/enonic/xp/docs/${release}/docs-${release}-libdoc.zip!/module-task.html

