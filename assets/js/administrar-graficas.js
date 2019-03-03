 $(document).ready(function () {
     var jsonData = [{
             "Reporte": "Solicitud",
             "Cantidad": 26
         },
         {
             "Reporte": "Asignados",
             "Cantidad": 12
         },
         {
             "Reporte": "Finalizados",
             "Cantidad": 10
         },
         {
             "Reporte": "Cancelados",
             "Cantidad": 6
         }
     ];

     var svgWidth = 600;
     var svgHeight = 300;

     var heightPad = 50;
     var widthPad = 50;

     var svg = d3.select("#containerChart")
         .append("svg")
         .attr("width", svgWidth + (widthPad * 2))
         .attr("height", svgHeight + (heightPad * 2))
         .append("g")
         .attr("transform", "translate(" + widthPad + "," + heightPad + ")");

     //Set up scales
     var xScale = d3.scale.ordinal()
         .domain(jsonData.map(function (d) {
             return d.Reporte;
         }))
         .rangeRoundBands([0, svgWidth], .1);

     var yScale = d3.scale.linear()
         .domain([0, 26])
         .range([svgHeight, 0]);

     // Create bars
     svg.selectAll("rect")
         .data(jsonData)
         .enter().append("rect")
         .attr("x", function (d) {
             return xScale(d.Reporte) + widthPad;
         })
         .attr("y", function (d) {
             return yScale(d.Cantidad);
         })
         .attr("height", function (d) {
             return svgHeight - yScale(d.Cantidad);
         })
         .attr("width", xScale.rangeBand())
         .attr("fill", "green");

     // Y axis
     var yAxis = d3.svg.axis()
         .scale(yScale)
         .orient("left");

     svg.append("g")
         .attr("class", "axis")
         .attr("transform", "translate(" + widthPad + ",0)")
         .call(yAxis)
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", -50)
         .style("text-anchor", "end")
         .text("Cantidad de Reportes");

     // X axis
     var xAxis = d3.svg.axis()
         .scale(xScale)
         .orient("bottom");

     svg.append("g")
         .attr("class", "axis")
         .attr("transform", "translate(" + widthPad + "," + svgHeight + ")")
         .call(xAxis)
         .append("text")
         .attr("x", svgWidth / 2 - widthPad)
         .attr("y", 50)
         .text("Estatus del Reporte de Mantenimiento");

 });