Best Practice
=============

There are a number of both good and bad ways to go about creating libraries.  Here is a list of some things to do, and
some things to avoid:

1. Object oriented fundamentals apply:

   a. Strong cohesion: Keep the components in a lib together, only if they are strongly related.  Split them up in multiple libs if they are not.
   b. Weak coupling: Ideally, a lib should not have any dependencies.  In practice, that is almost impossible, but apart from the XP apis,
      any dependency should raise an alarm, and only be included after careful analysis showing there is no other way.

2. Use names that are self-explanatory.
3. More good practices to come!  ...  :)