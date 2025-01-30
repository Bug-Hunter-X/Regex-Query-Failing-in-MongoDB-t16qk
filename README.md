# MongoDB Regex Query Bug
This repository demonstrates a bug encountered when using regular expressions in MongoDB queries. The provided JavaScript code snippet shows a query that should return documents based on a regular expression pattern. However, the query returns no results, even when the pattern matches some documents in the collection.
## Bug Description
A regular expression is used to query documents in a MongoDB collection. The pattern in the regular expression appears to be correct, but the query does not return any results. This happens despite the fact that there are documents in the collection that match the regular expression.
## Solution
The solution involves ensuring the correct options are set in the regular expression. The `i` flag makes the query case-insensitive, while the `$regex` operator is used for pattern matching. In the solution, the code shows a way to construct this regular expression, ensuring it's compatible with the MongoDB query. The solution ensures that any case variations of the string are matched.
## Setup
1.  Clone this repository.
2.  Install the MongoDB Node.js driver: `npm install mongodb`
3.  Set up a MongoDB database and collection.
4.  Populate the collection with sample data.
5.  Run the `bug.js` file to reproduce the bug.
6.  Run the `bugSolution.js` file to see the fix in action.