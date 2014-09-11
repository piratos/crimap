$(document).ready(function(){
  $.get('/crime/cdata/', {}, function(data){
    var cal = new CalHeatMap();
    cal.init({
	    itemSelector: "#calender",
	    domain: "year",
	    range: 3,data: data,
        cellSize: 20,
	    start: new Date(2014, 7),
        nextSelector: "#next",
        previousSelector: "#prev",
	    onClick: function(date, nb){
                $('#calender1').empty();
                var cal = new CalHeatMap();
                cal.init({
	                itemSelector: "#calender1",
	                domain: "month",
	                range: 12,data: data,
                    cellSize: 20,
	                start: date,
                    nextSelector: "#next1",
                    previousSelector: "#prev1",
	                onClick: function(date, nb) {
                        $('#calender2').empty();
                        var cal = new CalHeatMap();
                        cal.init({
                            itemSelector: "#calender2",
                            domain: "day",
                            range: 30,data:data,
                            cellSize: 20,
                            start: date,
                            nextSelector: "#next2",
                            previousSelector: "#prev2",
                            onClick: function(){}
                        });
	            }
        });
    }
    });
  });
});