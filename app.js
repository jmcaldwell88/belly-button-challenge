d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  console.log(data);
}).catch(function(error) {
  console.log(error);
});

d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  

  var otuIds = data.otu_ids.slice(0, 10).reverse();
  var sampleValues = data.sample_values.slice(0, 10).reverse();
  var otuLabels = data.otu_labels.slice(0, 10).reverse();
  
  
  var trace = {
    x: sampleValues,
    y: otuIds.map(id => `OTU ${id}`),
    text: otuLabels,
    type: "bar",
    orientation: "h"
  };
  
  
  var data = [trace];
  
  var layout = {
    title: "Top 10 OTUs",
    xaxis: { title: "Sample Values" },
    yaxis: { title: "OTU IDs" },
    margin: { t: 50, l: 150 }
  };
  

  Plotly.newPlot("plot", data, layout);
  
  var dropdown = d3.select("#dropdown");
  
  data.otu_ids.forEach((id, index) => {
    dropdown.append("option")
      .attr("value", index)
      .text(`OTU ${id}`);
  });
  
  
  dropdown.on("change", function() {
    
    var selectedIndex = dropdown.property("value");
    
    trace.x = data.sample_values[selectedIndex];
    trace.y = `OTU ${data.otu_ids[selectedIndex]}`;
    trace.text = data.otu_labels[selectedIndex];
    
    Plotly.redraw("plot");
  });
  
}).catch(function(error) {
  console.log(error);
});

var otuIds = [1, 2, 3, 4, 5];
var sampleValues = [10, 20, 30, 40, 50];
var otuLabels = ["label1", "label2", "label3", "label4", "label5"];

var trace = {
  x: otuIds,
  y: sampleValues,
  text: otuLabels,
  mode: 'markers',
  marker: {
    size: sampleValues,
    color: otuIds,
    colorscale: 'Viridis',
    showscale: true
  }
};


var layout = {
  title: 'Bubble Chart',
  xaxis: { title: 'OTU IDs' },
  yaxis: { title: 'Sample Values' }
};

var data = [trace];

Plotly.newPlot('myDiv', data, layout);
