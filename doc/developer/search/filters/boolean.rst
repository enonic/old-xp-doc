boolean
=======

The boolean filter combines functions in logical expressions

must (filter[])
  All functions on the must array must evaluate to true for the filter to match

mustNot (filter[])
  All functions in the mustNot array must evaluate to false for the filter to match

should (filter[])
  One or more of the functions in the should array must evaluate to true for the filter to match

Here's an example of using the boolean filter:

  .. literalinclude:: code/boolean-filter.json
     :language: json
