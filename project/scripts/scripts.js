window.onload = function () {
  console.log('js sourced');

  var width = window.innerWidth;
  var height = window.innerHeight;
  console.log(dataStrengths);

  var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

  var dataPeople = [
    {name: "Alec", strengths: ["Learner", "Intellection", "Input", "Ideation", "Relator"]},
    {name: "Pam", strengths: ["Deliberative", "Intellection", "Context", "Competition", "Restorative"]},
    {name: "Mary", strengths: ["Achiever", "Focus", "Input", "Deliberative", "Restorative"]},
    {name: "Scott", strengths: ["Input", "Intellection", "Ideation", "Learner", "Adaptability"]},
    {name: "Zach", strengths: ["Input", "Intellection", "Ideation", "Learner", "Individualization"]},
    {name: "Walter", strengths: ["Deliberative", "Restorative", "Analytical", "Ideation", "Input"]},
    {name: "Howard", strengths: ["Strategic", "Restorative", "Analytical", "Ideation", "Input"]},
  ];

  var peopleArray = [];

  for (var i = 0; i < dataPeople.length; i++) {
    peopleArray.push(dataPeople[i].name)
  };

  var yPeople = d3.scaleBand()
    .domain(peopleArray)
    .range([0, height - 100]);

  var peopleDiv = svg.append("g").attr("id", "people");

  var rectGroup = peopleDiv.selectAll("g").data(dataPeople).enter().append("g")
    .attr("class", function(d) { return d.name })
    .attr("transform", function(d, i) { return "translate(0, " + yPeople(d.name) + ")"});

  var rect = rectGroup.append("rect")
    .attr("class", function(d) { return d.name })
    .attr("x", 200)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 20)
    .attr("fill", "black");

  var text = rectGroup.append("text")
    .text(function(d, i) { return d.name; })
    .attr("x", 210)
    .attr("y", 50)
    .attr("dy", 15)
    .style("fill", "white");

  var strengthsDiv = svg.append("g").attr("id", "strengths");

  var strengthsArray = [];

  for (var i = 0; i < dataStrengths.length; i++) {
    strengthsArray.push(dataStrengths[i].theme)
  };

  var yStrengths = d3.scaleBand()
    .domain(strengthsArray)
    .range([0, height - 100]);

  var textStrengths = strengthsDiv.selectAll("g").data(dataStrengths).enter().append("g")
    .attr("class", function(d) { return d.theme })
    .attr("transform", function(d, i) { return "translate(0, " + yStrengths(d.theme) + ")";});

  var textStr = textStrengths.append("text")
    .text(function(d) {return d.theme})
    .attr("x", width - 200)
    .attr("y", 50)
    .style("fill", "black");

  var connectorGroup = svg.append("g").attr("id", "connectors");

  var connectors = connectorGroup.selectAll("g").data(dataPeople);

  var connectorGroupEnter = connectors.enter();

  // var connectorGroup = connectorGroupEnter.append("g")
  //   .attr("class", function(d, i) { return d.name + "Connect"})
  //   .selectAll("g").data(function(d) {return d.strengths}).enter().append("g")
  //     .attr("class", function(d) {return d});

  var connectorGroup = connectorGroupEnter.append("g")
    .attr("class", function(d, i) { return d.name + "Connect"});

  var specificStrengthsGroup = connectorGroup.selectAll("g").data(function(d) {return d.strengths}).enter().append("g")
    .attr("class", function(d) {return d});

  var counter = 0;

  var connectLine = specificStrengthsGroup.append("path")
    .attr("d", function (d, i) {
      console.log(yPeople(peopleArray[Math.round((counter-2) / 5)]));
      counter++;
      return "M 300 " +
        (60 + yPeople(peopleArray[Math.round((counter - 3) / 5)])) +
        " L " + (width - 205) + " " + (45 + yStrengths(d))
      })
    .style("stroke", "gray")
    .style("stroke-width", "1");


};
