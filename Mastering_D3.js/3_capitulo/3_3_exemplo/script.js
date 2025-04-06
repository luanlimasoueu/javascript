
data = {
    "name": "Android Browser",
    "version": 3,
    "platform": "mobile",
    "usage": 0.01,
    "current": "false",
    "index": 0,
    "weight": 0,
    "x": 522.7463498711586,
    "y": 65.54744869936258,
    "px": 522.7463498711586,
    "py": 65.54744869936258
    }
// Select the container div and configure its attributes
var containerDiv = d3.select('#chart')
.style('position', 'relative')
.style('width', width + 'px')
.style('height', height + 'px')
.style('padding', 0)
.style('background-color', '#eeeeec');

// array and set its attributes.
var bubbleDiv = containerDiv.selectAll('div.bubble')
.data(items)
.enter()
.append('div')
.attr('class', 'bubble')
.style('position', 'absolute')
.style('width', '10px')
.style('height', '10px')
.style('background-color', '#222');


// Register a listener function for the force tick event, and
// update the position of each div on tick.
force.on('tick', function() {
    bubbleDiv
    .style('top', function(d) { return (d.y - 5) + 'px'; })
    .style('left', function(d) { return (d.x - 5)+ 'px'; });
    });
