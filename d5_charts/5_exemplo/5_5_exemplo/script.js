d3.selectAll('circle')
	.style('fill', '#333')
	.attr('r', 20)
	.on('click', function(e, d) {
		d3.select(this)
			.style('fill', 'orange');
	});


  