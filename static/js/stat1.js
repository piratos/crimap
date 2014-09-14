var baseConfig = {
    credits: {
        enabled: false
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
    },        
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage}%</b>',
        percentageDecimals: 1
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                color: '#000000',
                connectorColor: '#000000',
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y;
                }
            }
        }
    }
};

function plot_sex_stat(baseConfig){
    var data_sexe = null;
         $.ajax({
        url: '/crime/stat/?sexe=0',
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            data_sexe = data;
        }
         });
    var sexd = {
        title: {
            text: ''
        },
        series: [{
            name: 'pourcentage',
            type: 'pie',
            data: data_sexe
        }]};
    data_sexe = sexd
    $('#container_sex').highcharts(
                $.extend(baseConfig, data_sexe)
            );

}

function plot_type_stat(baseConfig){
    var data_type = null;
         $.ajax({
        url: '/crime/stat/?type=0',
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            data_type = data;
        }
         });
    var typed = {
        title: {
            text: ''
        },
        series: [{
            name: 'pourcentage',
            type: 'pie',
            data: data_type
        }]};
    data_type = typed
    $('#container_type').highcharts(
                $.extend(baseConfig, data_type)
            );

}