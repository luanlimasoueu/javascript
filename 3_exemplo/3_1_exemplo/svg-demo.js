const HEIGHT = 300;
const WIDTH = 400;
const score = 7; // out of 10
const barHeight = HEIGHT * (score / 10);
const barWidth = 50;
 
// Find the DOM element with an id of "chart" and set its width and height.
// This happens to be an svg element.
const svg = d3.select('#chart').attr('width', WIDTH).attr('height', HEIGHT);
 
// Append a group element to the svg and add a CSS class of "bar".
const group = svg.append('g').attr('class', 'bar');
 
// Append a rect element to the group and set its properties.
// The background color of an SVG element is set using the "fill" property.
group
  .append('rect')
  .attr('height', barHeight)
  .attr('width', barWidth)
  .attr('x', 0)
  .attr('y', HEIGHT - barHeight)
  .attr('fill', 'cornflowerblue');
 
// Append a text element to the group and set its properties.
group
  .append('text')
  .text(score)
  .attr('x', barWidth / 2) // center horizontally in bar
  .attr('y', HEIGHT - barHeight + 20); // just below top