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
