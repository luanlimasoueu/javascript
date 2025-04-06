// Create the svg element
var svg = d3.select('#chart').append('svg')
.attr('width', width + 2 * margin)
.attr('height', height + 3 * margin);

// Create a color scale with the same range that the slider
var cScale = d3.scale.linear()
.domain(domain)
.range(['#edd400', '#a40000']);



var rectangle = svg.append('rect')
.attr('x', margin)
.attr('y', 2 * margin)
.attr('width', width)
.attr('height', height)
.attr('fill', cScale(value));

// Create and configure the slider control.
var slider = sliderControl()
.domain(domain)
.width(width)
.onSlide(function(selection) {
selection.each(function(d) {
rectangle.attr('fill', cScale(d));
});
});

var gSlider = svg.selectAll('g').data([value])
.enter().append('g')
.attr('transform', 'translate(' + [margin, margin] + ')')
.call(slider);
