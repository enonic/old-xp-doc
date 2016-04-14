.. _content_media_types:

Media Content Types
===================

The system ships with a set of pre-defined media content types.
When files are uploaded in the Content Studio interface or through the content API -
they will be transformed to one of the following content-types.

Common settings for all the content types listed below.

* super-type: base:media
* abstract: false
* final: true
* allow-child-content: false


.. TIP::

  Enonic XP treats media content pretty much like any other content items - for instance
  the person, but they all have at least one attachment (namely the file).

.. image:: images/upload-button.png

Here are the various media content types that also come installed with Enonic XP:

Text (media:text)
  Plain text files.

Data (media:data)
  Miscellaneous binary file formats.

Audio (media:audio)
  Audio files.

Video (media:video)
  Video files.

Image (media:image)
  Bitmap image files.

Vector (media:vector)
  Vector graphic files like .svg.

Archive (media:archive)
  File archives like .zip, tar and jar.

Document (media:document)
  Text documents with advanced formatting, like .doc, .odt and pdf.

Spreadsheet (media:spreadsheet)
  Spreadsheet files.

Presentation (media:presentation)
  Presentation files like Keynote and Powerpoint.

Code (media:code)
  Files with computer code like .c, .pl or .java.

Executable (media:executable)
  Executable application files.

Unknown (media:unknown)
  Everything else.
