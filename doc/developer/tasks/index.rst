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
