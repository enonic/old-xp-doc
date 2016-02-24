.. _faq:

Frequently Asked Questions
==========================

What's the latest release?
--------------------------

The latest release can be found here `latest release changelog <https://github.com/enonic/xp/releases/latest>`_.

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

What software is bundled with Enonic XP, and which legal licenses do they use?
------------------------------------------------------------------------------

Enonic XP version 6.4 are bundled with the following software:

 * `Apache Felix Framework 5.2.0 <https://felix.apache.org>`_ and sub projects, using the `Apache License 2.0 <https://felix.apache.org/license.html>`_
 * `OSGi Spcification 6.0 <https://www.osgi.org>`_, using `their own license <https://www.osgi.org/developer/specifications/licensing/>`_
 * `Apache Commons IO 2.4 <https://commons.apache.org/proper/commons-io/>`_, using the `Apache License 2.0 <http://www.apache.org/licenses/LICENSE-2.0>`_
 * `Apache Commons Lang 2.4 <https://commons.apache.org/proper/commons-lang/>`_, using the `Apache License 2.0 <http://www.apache.org/licenses/LICENSE-2.0>`_
 * `Apache Commons Codec 1.10 <https://commons.apache.org/proper/commons-codec/>`_, using the `Apache License 2.0 <http://www.apache.org/licenses/LICENSE-2.0>`_
 * `Logback 1.1.2 <http://logback.qos.ch>`_, using a `dual-license under the EPL v1.0 and the LGPL 2.1 <http://logback.qos.ch/license.html>`_
 * `SLF4J (Simple Logging Facade 4 Java) 1.7.10 <http://slf4j.org>`_, using the `MIT license <http://slf4j.org/license.html>`_
 * `Jansi 1.11 from Fuse Source <http://jansi.fusesource.org>`_, using the `AGPL-1.0 License <https://www.openhub.net/licenses/affero>`_
 * `Javax Mail 1.4.7 <http://www.oracle.com/technetwork/java/javamail/index.html>`_, using several licenses listed here:
   `https://java.net/projects/javamail/pages/License <https://java.net/projects/javamail/pages/License>`_ - The Demo programs are not bundled
   with Enonic XP, so the BSD license does not apply.
 * `Google Guava 18.0 <https://code.google.com/p/guava-libraries/>`_, using the `Apache License 2.0 <http://www.apache.org/licenses/LICENSE-2.0>`_
 * `Jackson JSON processor 2.6.2 <http://wiki.fasterxml.com/JacksonHome/>`_, using the `Apache License 2.0 <http://www.apache.org/licenses/LICENSE-2.0>`_
 * `Apache Tika 1.6 <https://tika.apache.org>`_, using the `Apache License 2.0 <http://www.apache.org/licenses/LICENSE-2.0>`_
 * `JParSec 2.1.0 <https://github.com/jparsec/jparsec>`_, using the `GNU General Public License 3.0 <https://www.gnu.org/licenses/gpl-3.0.de.html>`_
 * `ElasticSearch 1.5.2 <https://www.elastic.co/products/elasticsearch>`_, using the `Apache License 2.0 <http://www.apache.org/licenses/LICENSE-2.0>`_
 * `RESTEasy 3.0.8 <http://resteasy.jboss.org>`_, using the `GNU General Public License 2.0 <https://www.gnu.org/licenses/old-licenses/lgpl-2.0.html>`_
 * `ATTO Parser 1.3.0 <https://github.com/tpolecat/atto>`_, using the `MIT License <https://github.com/tpolecat/atto/blob/master/LICENSE>`_
 * `OkHttp 2.5.0 <http://square.github.io/okhttp/>`_, using the `Apache License 2.0 <http://www.apache.org/licenses/LICENSE-2.0>`_


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
