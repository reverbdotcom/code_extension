# Reverb Data Engineering Coding Challenge
This technical challenge is focused on the issues faced by data engineers at Reverb. There is no one correct approach - the task outline below is meant to start a conversation about domain modeling and tradeoffs.

## Background
The Reverb platform generates an immense amount of log data that data engineers are responsible for collecting, parsing, and analyzing. The containins page view logs that look like this:

{
  "userId": 1,
  "sessionId": "{some-uuid}",
  "timestamp": "2018-01-01T00:00:00.000000",
  "url": "/foo/bar",
  "experiments": "baz"
}
In this example line, we can see that each log is identified with a unique userId and sessionId. A user can make multiple separate page views within the same session. We can also see that the timestamp of the page view is recorded along with the URL, as well as identifiers for any A/B tests the user may be a part of. Note that while the example here is broken out into multiple lines for readability, that in the file these logs are written 1 per line. You can assume that the timestamps increase monotonically.

## Instructions

1. Familiarize yourself with the data
2. If you bring your own computer to the interview, please ensure you are ready to go by having anything installed beforehand that will be able to process and analyze this data
3. That's it! We'll give you all other information during the coding session.

## Our criteria
We believe in transparency, so here's the criteria we'll be using to evaluate each session:

Functionality — Does your program work?
Modeling — Do your data structures fit the business objects in the problem and is the program's control flow clear?
Language Use — Do you make good use of the features available in the language you chose?
Testing — Did you include tests that explain and reinforce the design of your code?
Good luck!
