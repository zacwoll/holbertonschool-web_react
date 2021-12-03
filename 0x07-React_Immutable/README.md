# 0x07 React Imm

## Learning Objectives
- Immutable objects. Who, what, when, where, and why?
- How to use the Immutable.js library to bring immutability to Javascript
- The differences between List and Map
- How to use Merge, Concat, and Deep Merging
- What a lazy Seq is

### Designing a Normalized State
The basic concepts of normalizing data are:
- Each type of data gets its own "table" in the state
- Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.
- Any references to individual items should be done by storing the item's ID.
- Arrays of Ids should be used to indicate ordering.