.. _faq:

Frequently Asked Questions
==========================

What's the latest release?
--------------------------

The latest release can be found here `latest release changelog <https://github.com/enonic/xp/releases/latest>`_.

Where can I get the source code?
--------------------------------

All source code for Enonic XP is published on GitHub:
 * The back-end: `Enonic XP runtime <https://github.com/enonic/xp>`_
 * The Admin apps: `Enonic XP Apps <https://github.com/enonic/xp-apps>`_
 * Admin lib for common code in admin apps: `Admin UI Library <https://github.com/enonic/lib-admin-ui>`_


Do you publish changelogs?
--------------------------

Yes.  Each project have it's own changelog on GitHub.  Go to the GitHub project page using the links in the last question and click ``Code``.
On the resulting page, a line with links to all commits, branches commits and contributors is show.  Clock on the text that say ``<X> releases``,
and all the releases of that project are listed with links to the changelog.

If you want to see what's coming in the future releases, check out `Discuss <https://discuss.enonic.com/>`_ .
Approximately every other week, our product advisory board meets to discuss what to prioritze in the upcoming releases.
Reports from these meetings are published on Discuss.

How is Enonic XP Licensed
-------------------------
Enonic XP is available under the `AGPL 3 license <http://www.gnu.org/licenses/agpl-3.0.html>`_, with a linking exception.
This basically means that you are free to use and re-distribute Enonic XP according to the AGPL license.
The linking exception ensures that you can build custom applications and libraries on top of Enonic XP and license these however you see fit.
Any changes made to the Enonic XP core platform however must be licensed as APGL.

We encourage the use of FOSS licensing for 3rd party apps and libraries. Libraries in particular should be licensed with a non-intrusive license such as Apache, BSD or MIT.

.. note:: This is a major difference from products such as Drupal and Wordpress where your themes, plugins and modules must be licensed as GPL too.


Enonic XP also consists of many 3rd party software components. The complete list can be found in our `Notice.txt file <https://github.com/enonic/xp/blob/master/NOTICE.txt>`_

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

Enonic also offers software support subscriptions for business critical installations: https://enonic.com/pricing
