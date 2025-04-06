// Visualization Variables
var width = 400,
height = 200,
innerRadius = 30,
outerRadius = 100;
// Append a svg element to the div and set its size.
var svg = d3.select('#radial-chart').append('svg')
.attr('width', width)
.attr('height', height);
// Create the group and translate it to the center.
var g = svg.append('g')
.attr('transform', 'translate(' + [width / 2, height / 2] + ')');

// Compute the radius scale.
var rScale = d3.scale.sqrt()
.domain([0, d3.max(output, function(d) { return d.count; })])
.range([2, outerRadius - innerRadius]);


// Create an arc generator.
var arc = d3.svg.arc()
.innerRadius(innerRadius)
.outerRadius(function(d) {
return innerRadius + rScale(d.count);
});


// Append the paths to the group.
g.selectAll('path')
.data(output)
.enter()
.append('path')
.attr('d', function(d) { return arc(d); })
.attr('fill', 'grey')
.attr('stroke', 'white')
.attr('stroke-width', 1);
