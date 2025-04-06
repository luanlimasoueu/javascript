var barcodeChart = function() {
	// Chart Variables.Attributes
	var width = 600,
	height = 30,
	margin = {top: 5, right: 5, bottom: 5, left: 5};
	function chart(selection) {
	// Chart creation…
	}
	// Accessor function for the width
	chart.width = function(value) {
	if (!arguments.length) { return width; }
	width = value;
	// Returns the chart to allow method chaining.
	return chart;
	};
	// Accessor functions for the height and the margin…
	return chart;
};

// Create and configure the chart.
var barcode = barcodeChart()
.width(600)
.height(25);