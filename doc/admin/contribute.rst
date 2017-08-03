.. _language_contribution:

Contributing to Translations
============================

We would greatly appreciate help with translating our Admin Console to more languages.  Here is a guide on how to contribute:

First, you need to checkout the project from GitHub.  The project is here: https://github.com/enonic/xp , and the project URL is: ``git@github.com:enonic/xp.git``

The original English language files are these:

* ``/modules/lib/lib-admin/src/main/resources/admin/i18n/common.properties``
* ``/modules/core/core-i18n/src/test/resources/com/enonic/xp/core/impl/i18n/phrases.properties``
* ``/modules/app/app-applications/src/main/resources/admin/i18n/phrases.properties``
* ``/modules/app/app-contentstudio/src/main/resources/admin/i18n/phrases.properties``
* ``/modules/app/app-standardidprovider/src/main/resources/admin/i18n/phrases.properties``
* ``/modules/app/app-users/src/main/resources/admin/i18n/phrases.properties``

Make a copy of each file into the same location, but extend the main-name with ``_<language-code>``.
If, for instance, you want to make a translation to Spanish, the copied files should be called ``common_es.properties`` or ``phrases_es.properties``.
In the copied files, you may now translate all the English text into your preferred language.
When done, please submit a pull request on the project, with the translations.