var p =  d3.select('body')
		.append('p')

p.html('New paragraph.');  

p.html('blue paragraph').style('color', 'blue');

var data = ['a', 'b', 'c'];

var divChart = d3.select('#chart');

var divItems = divChart.selectAll('div.data-item')
.data(data);

d3.select('#chart').selectAll('div.data-item')
.data(data)
.enter()
.append('div')
.attr('class', 'data-item')
.append('p')
.html(function(d) { return d; });

d3.select('#chart1').selectAll('div.data-item')
.data(data)
.enter()
.append('div')
.attr('class', 'data-item')
.call(function(selection) {
selection.each(function(d) {
d3.select(this).append('p').html(d);
});
});


function initDiv(selection) {
	selection.each(function(data) {
	d3.select(this).append('p')
	.html(data);
	});
	}


d3.select('#chart2').selectAll('div.data-item')
	.data(data)
	.enter()
	.append('div')
	.attr('class', 'data-item')
	.call(initDiv);


var width = 400, height = 40;

function chart(selection) {
	selection.each(function(data) {
	// Select and bind the svg element.
	var div = d3.select(this).attr('class', 'data-item'),
	svg = div.selectAll('svg').data([data]),
	svgEnter = svg.enter();
	// Append the svg and the rectangle on enter.
	svgEnter.append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('rect')
	.attr('width', width)
	.attr('height', height)
	.attr('fill', 'black');
	});
	}


d3.select('#chart3').selectAll('div.data-item')
.data(data)
.enter()
.append('div')
.attr('class', 'data-item')
.call(chart);
