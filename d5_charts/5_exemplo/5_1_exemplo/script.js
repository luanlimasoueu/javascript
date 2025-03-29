/*import { selectAll } from 'https://esm.sh/d3-selection';*/

d3.selectAll('circle')
	.style('fill', 'orange')
	.attr('r', function() {
		return 10 + Math.random() * 40;
	});