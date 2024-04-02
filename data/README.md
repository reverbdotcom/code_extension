# Reverb Data Engineering Coding Extension

This code extension is focused on the issues faced by data engineers at Reverb. There is no one correct approach - the task outline below is meant to start a conversation about domain modeling and tradeoffs.

## Background

The Reverb platform generates event data that data engineers are responsible for collecting, parsing, and analyzing. A simplified version of an event looks like this:

```
{
  "userId": 1,
  "sessionId": "{some-uuid}",
  "timestamp": "2018-01-01T00:00:00.000000",
  "url": "/foo/bar",
  "experiments": "baz"
}
```

In this example, we can see that each event is identified with a unique `userId` and `sessionId`. A user can make multiple, separate page view events within the same session. We can also see that the `timestamp` of the page view is recorded along with the URL, as well as identifiers for any A/B tests the user may be a part of. _Note: While the example here is broken out into multiple lines for readability, event files include one event per line. You can assume that the timestamps increase monotonically._

## Instructions

1. Familiarize yourself with the [data](logs.txt).
1. Familiarize yourself with the [app](python/app/) and [tests](python/test/). This is a Python skeleton app provided for ease, but you are encouraged alter it during the interview as you see fit. 
1. That's it! We'll give you all other information during the coding session.

## Other Notes

1. Our implementations are not 100% complete or refactored in the best possible way.
1. Don't think you have to copy our style in any way. We're open to new ways of doing things as long as we can have a dialogue about it.
1. Our intention is not to trick you or test you; we want to collaborate. So if you have any questions about this, please reach out and ask!

