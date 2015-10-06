.. _faq:

Frequently Asked Questions
==========================

What's the latest release?
--------------------------

The latest official release is |version|.
More information is available on the `latest release changelog <https://github.com/enonic/xp/releases/latest>`_.

Where can I get the source code?
--------------------------------

All source code for Enonic XP is published on our
`GitHub project page <https://github.com/enonic/xp>`_.

Do you publish changelogs?
--------------------------

Yes. You can go to the
`releases tab on GitHub <https://github.com/enonic/xp/releases>`_
to read the changelog for all versions. If you want to see what's coming,
you can go to our `GitHub wiki page <https://github.com/enonic/xp/wiki>`_.

What is $XP_INSTALL?
--------------------

**$XP_INSTALL** and **$XP_HOME** are referenced frequently in the documentation and it is important
to understand the difference. $XP_INSTALL is the top level directory of the XP installation and it
contains the directories `bin`, `home`, `lib`, `toolbox` and others.

What is $XP_HOME?
-----------------

**$XP_HOME**, by default, is the location of the $XP_INSTALL/home folder which contains the `config`, `deploy`, `repo` and other
directories specific to a single XP instance. The home folder can be copied to multiple locations
for developers working on more than one project.

There are two situations where the **$XP_HOME environment variable** must be set:

#. When developers are working on an application and intend to use `./gradlew deploy`.

#. When a `home` folder other than $XP_INSTALL/home is to be used.

Where can I get help?
---------------------

The `community forum <https://discuss.enonic.com/>`_ would be a good place to start. We also offer
`formal training courses <https://enonic.com/learn>`_.
