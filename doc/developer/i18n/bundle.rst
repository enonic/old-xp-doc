Resource Bundle
===============

The resource-bundle consists of a collection of files containing the phrases to be used for localization. The
resource-bundle should be placed in a folder named ``i18n`` under the application ``site`` folder.

Each locale to be localized should be represented by a single resource, e.g this could be a structure for an app supporting

* 'English' (default)
* 'English US'
* 'Norwegian'
* 'Norwegian Nynorsk'

.. code-block:: none

  site/i18n/phrases.properties
  site/i18n/phrases_en_us.properties
  site/i18n/phrases_no.properties
  site/i18n/phrases_no_nn.properties

The filename of a resource determines what locale it represents::

  phrases[_languagecode][_countrycode][_variant].properties

.. CAUTION::

  The filename should be in lowercase.

The ``languagecode`` is a valid ISO Language Code. These are the two-letter codes as
defined by ISO-639. You can find a full list of these codes at a number of sites, such as: http://www.loc.gov/standards/iso639-2/php/English_list.php.

The ``countrycode`` is a valid ISO Country Code. These are the two-letter codes as defined by ISO-3166. You can find a full list of
these codes at a number of sites, such as: http://www.iso.ch/iso/en/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html

A sample phrases.properties file would look like this::

  user.greeting = Hello, {0}!
  complex_message = Good to see you. How are you doing?
  message_url = http://localhost:8080/{0}
  message_multi_placeholder = My name is {0} and I live in {1}
  message_placeholder = Hello, my name is {0}.
  med_\u00e6_\u00f8_\u00e5 = This contains the norwegian characters æ, ø and å


Placeholders
------------

Placeholders are marked with ``{<number>}``. The given number corresponds with the function argument named ``values`` and
the placement of the parameter. See below for an example.


Encoding and special characters
-------------------------------

The encoding of localization resource bundle files must be ISO-8859-1, also known as Latin-1. All non-Latin-1 characters
*in property-keys* must be entered using Unicode escape characters, e.g \u00E6 for the Norwegian letter 'æ'. The values may
also be encoded, but this is not required.
