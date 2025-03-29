d3.select("circle")  // Selects a circle element
  .on("click", function() {
    d3.select(this)  // `this` refers to the clicked element
      .attr("fill", "red");  // Change its fill color to red
  });
