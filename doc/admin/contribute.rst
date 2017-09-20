.. _language_contribution:

Contributing to Translations
============================

We would greatly appreciate help with translating our Admin Console to more languages.  Here is a guide on how to contribute:

First, you need to checkout the project from GitHub.  Then, create language files for the specific language you can provide a translation for.
After the translation is done, a pull request should be sent to Enonic, so we can include the file in the next distribution.
The language XP uses in admin is based on settings in the browser.  The browser language setting is automatically picked up, and an attempt to match
the language is made.  If the language of the browser is not supported by XP, it will default to English.

File locations
--------------
XP is split in several different projects.  One basic runtime, some libs and several apps.
The phrases files that contain the translatable text is found in the apps and one lib:

*Admin UI Library:*

The code may be found here: https://github.com/enonic/lib-admin-ui , and checked out from git with ``git clone git@github.com:enonic/lib-admin-ui.git`` .

The file that contains translatable phrases is: ``/src/main/resources/admin/i18n/common.properties``

*XP Apps*

As we keep developing admin tools, we may split this project up further, but for now, all the main admin apps, are all found in the same
GitHub project: https://github.com/enonic/xp-apps/ .  Git project URL: ``git@github.com:enonic/xp-apps.git`` .
The files that contain translatable phrases are:

* ``/modules/app-applications/src/main/resources/admin/i18n/phrases.properties``
* ``/modules/app-contentstudio/src/main/resources/admin/i18n/phrases.properties``
* ``/modules/app-standardidprovider/src/main/resources/admin/i18n/phrases.properties``
* ``/modules/app-users/src/main/resources/admin/i18n/phrases.properties``

Translating files
-----------------
To provide a translationg, please make a copy of each file into the same location, but extend the main filename with ``_<language-code>``.
If, for instance, you want to make a translation to Spanish, the copied files should be called ``common_es.properties`` or ``phrases_es.properties``.
In the copied files, you may now translate all the English text into your preferred language.
When done, please submit a pull request on the project, with the translations.
