function removeCircles() {
	d3.selectAll('circle')
	  .remove();
  }
  
d3.select('button')
	.on('click', removeCircles);
  

  