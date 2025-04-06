// Width and height of the figure.
var width = 600, height = 150;
// Create the svg element.
var svg = d3.select('#chart').append('svg')
.attr('width', width)
.attr('height', height);
// Append a grey circle in the middle.
var circle = svg.append('circle')
.attr('cx', width / 2)
.attr('cy', height / 2)
.attr('r', 30)
.attr('fill', '#555');

function dragListener(d) {
    // Get the current position of the circle
    var cx = +d3.select(this).attr('cx'),
    cy = +d3.select(this).attr('cy');
    // Set the new position of the circle.
    d3.select(this)
    .attr('cx', cx + d3.event.dx)
    .attr('cy', cy + d3.event.dy);
    }

// Create and configure a drag behavior.
var drag = d3.behavior.drag().on('drag', dragListener);

// Add dragging handling to the circle.
circle.call(drag);


