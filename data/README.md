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

1. Familiarize yourself with the data. We've provided a Python skeleton app for ease, however you are encouraged to use the language and frameworks you are most comfortable with.
2. If you bring your own computer to the interview, please ensure you are ready to go by having anything installed beforehand. If you want to use one of Reverb's computers, please tell us which code editor you prefer and which language you will be doing the extension in.
3. That's it! We'll give you all other information during the coding session.

## Words of Wisdom

1. Our implementations are not 100% complete or refactored in the best possible way. None of the code is gospel, so don't think you have to copy our style in any way. We're open to new ways of doing things as long as we can have a dialogue about it.
2. Our intention is not to trick you or test you; we want to collaborate. So if you have any questions about this, please reach out and ask!

