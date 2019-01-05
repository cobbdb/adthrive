# CafeMedia Code Challenge

## Instructions
The purpose of this challenge is for us to get a better idea of how you think, organize code, and tackle the problems at
hand. You can assume the latest version of Chrome will be used and can take advantage of any ECMAScript features it supports.
The challenge should be completed with no additional JavaScript libraries and should not take you longer than 4 hours.
Let us know if you have any questions.

You can find the Google GPT Reference [here](https://developers.google.com/doubleclick-gpt/reference)

The included index.html file has a base DFP setup that adds one ad above the header. We'd like you to update the file to:

1. Programatically insert ad slot DIV elements in the main article content between paragraphs after the DOM is ready
    1. There should never be more than one ad visible at a time (excluding the header ad)
    	1. This should be compatible on different platforms, but does not need to be responsive (only take initial page load dimensions into consideration)
    2. Ads should be inserted in a way to maximize the number of ads (max 9)
    3. An ad should never be inserted after a paragraph that only contains an image
    4. The ad unit path should be "/18190176/AdThrive_Content_X/test" where X increments and starts at 1
    5. The DFP ad slots should support sizes of 300x250 and 320x50
2. Make the header ad stick to the top of the window until it has been rendered for 5 seconds or is viewable for 2 seconds, whichever comes first
    1. Hint: You will need to use the googletag.events.SlotRenderEndedEvent and googletag.events.ImpressionViewableEvent events.

## Setup / Running (optional)
To simplify local testing we've included a Node NPM package.json setup to run a local web server.

1. Install Node.js v6 or higher
2. In the root of the project run "npm install" then "npm run server"
3. Open the latest version of Chrome to http://127.0.0.1:8080/

Alternatively, you can use an existing web server, or if you have Python installed you could run "python -m SimpleHTTPServer 8080" to test locally.
