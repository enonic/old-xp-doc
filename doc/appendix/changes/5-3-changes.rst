Notable 5.3 Changes
===================

Here's a list of some notable changes. For every change see the `full changelog`_.

.. _full changelog: https://github.com/enonic/xp/releases/tag/v5.3.0

New Toolbox CLI
  We have removed the UNIX shell script tools and replaced it with a
  cross-platform Java tool instead. It has the same functionality but can
  now be used with all supported OS platforms.

Named exports/imports
  Earlier, the export/import used a path where to store/retrieve the data.
  It's now just a name and the export is stored under ``$XP_HOME/data/export``
  directory.
