send
====

This function sends an email message using the mail server configured in the :ref:`configuration-mail`.

.. js:function:: send(params)

  :param object params: JSON with the parameters below.
  :returns: `true` if the message was sent successfully, `false` otherwise.

**Parameters:**

from *(string)*
  The email address, and optionally name of the sender of the message.

to *(string[])*
  The email address(es), and optionally name(s) of the primary message's recipient(s).

cc *(string[])*
  The carbon copy email address(es). Optional.

bcc *(string[])*
  The blind carbon copy email address(es). Optional.

replyTo *(string)*
  The email address that should be used to reply to the message. Optional.

subject *(string)*
  The subject line of the message.

body *(string)*
  The text content of the message.

contentType *(string)*
  Content type of the message body. Optional.

headers *(object)*
  Custom headers in the form of name-value pairs. Optional.

attachments *(array)*
  Attachments to include in the email. Optional.
  Array of objects with properties: ``fileName``, ``data`` (stream) and optionally a ``mimeType``.

The address values can be either a simple email address (e.g. `'name@domain.org'` ) or an address
with a display name. In the latter case the email will be enclosed with angle brackets (e.g. `'Some Name <name@domain.org>'` ).

The parameters ``to``, ``cc`` and ``bcc`` can be passed as a single string or as an array of strings, if there are multiple addresses to specify.

.. TIP::

  The content-type of the email can be specified by using the `contentType` parameter. See example below for sending a message with an HTML body.

**Example:**

.. literalinclude:: code/send.js
    :language: javascript
