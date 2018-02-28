.. _localization_schemas:

Localization of Schemas
=======================

The labels and texts used in XP schemas can be localized so that they are displayed in the preferred language according to the user's browser settings.

The schema fields that support localization may have an optional ``i18n="key"`` attribute in the XML schema descriptor.
This `i18n` attribute will contain a key string that refers to the translated texts in the ``i18n/phrases.properties`` bundle files.

The `i18n` attributes are always optional. If the `i18n` attribute is not specified, the value of the XML element will be used.

.. literalinclude:: code/content-type.xml
  :caption: Example of localized Content Type
  :language: xml

.. NOTE::
  The localization of schemas applies to the admin tool apps included in XP: `Home`, `Content Studio`, `Applications` and `Users`.

Supported Fields
----------------

The following schemas and fields support the `i18n` attribute for localization:

- **Input type**: ``label``, ``help-text``
- **Item set**: ``label``, ``help-text``
- **Field set**: ``label``
- **Option set**: ``label``, ``help-text``
- **Content Type**: ``displayName``, ``description``
- **Mixin**: ``displayName``, ``description``, input types
- **Page descriptor**: ``displayName``, input types in config
- **Part descriptor**: ``displayName``, input types in config
- **Layout descriptor**: ``displayName``, input types in config
- **Admin Tool descriptor**: ``displayName``, ``description``
- **Macro**: ``displayName``, ``description``, input types in config

Translations
------------

The translated texts for each of the i18n keys should be placed in the corresponding `phrases.properties` file, in the same application where the schema is defined.

Steps to add the translations for a schema:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Add or edit one file per language supported:

  ``src/main/resources/i18n/phrases_<language-code>.properties``

.. code-block:: none
  :caption: Example files to support English and Norwegian

  src/main/resources/i18n/phrases.properties
  src/main/resources/i18n/phrases_en.properties
  src/main/resources/i18n/phrases_no.properties

2. Add the i18n keys from the schema in each of the phrases.properties files. Each line should have the key, an equals ``=`` sign, and the text in the specific language.

.. code-block:: jproperties
  :caption: phrases_en.properties

  person.display-name=Person
  person.name.label=Name
  person.age.label=Age
  person.photo.label=Photo
  person.photo.help-text=Passport photo

.. code-block:: jproperties
  :caption: phrases_no.properties

    person.display-name=Person
    person.name.label=Navn
    person.age.label=Alder
    person.photo.label=Bilde
    person.photo.help-text=Passbilde

3. It is also recommended to add a `phrases.properties` file (without language suffix) that will be used as default if a translation for the browser language cannot be found.


4. Build and deploy the application. The texts in the schema will appear depending on the language configured in the browser.

See also :ref:`localization_bundle`.