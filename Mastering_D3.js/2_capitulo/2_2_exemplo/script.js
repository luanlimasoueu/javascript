var data = [
	{name: 'AAPL', mentions: ['...'], byHour: 34.3},
	{name: 'MSFT', mentions: ['...'], byHour: 11.1},
	{name: 'GOOG', mentions: ['...'], byHour: 19.2},
	{name: 'NFLX', mentions: ['...'], byHour: 6.7}
	];

// Create a table element.
var table = d3.select('#chart').selectAll('table')
	.data([data])
	.enter()
	.append('table')
	.attr('class', 'table table-condensed');

// Append the table head and body to the table.
var tableHead = table.append('thead'),
tableBody = table.append('tbody');

tableHead.append('tr').selectAll('th')
.data(['Name', 'Today Mentions', 'mentions/hour'])
.enter()
.append('th')
.text(function(d) { return d; });


var rows = tableBody.selectAll('tr')
.data(data)
.enter()
.append('tr');

rows.append('td')
.text(function(d) { return d.name; });

rows.append('td')
.datum(function(d) { return d.mentions; })

rows.append('td').append('p')
.attr('class', 'pull-right')
.html(function(d) { return d.byHour; });

