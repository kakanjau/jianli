
(function(){

    $(function(){
        // 左侧菜单锚点点击事件
        $('a[href*=#]').click(function() { 
            var me = $(this);
            me.addClass('active');
            me.parent().siblings().children('a').removeClass('active');
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { 
                var $target = $(this.hash); 
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']'); 
                if ($target.length) {
                    scrollTo($target);
                    return false; 
                }
            }
        });


        // 创建工作经验timeline
        var timedate = $('#jobTimeline').data('timedate');
        createStoryJS({
            type: 'timeline',
            width: '100%',
            height: '100%',
            lang: 'zh-cn',
            source: timedate,
            embed_id: 'jobTimeline'           // ID of the DIV you want to load the timeline into
        });


        // 创建个人能力雷达图
        var abilities = $('#skillChart').data('abilities');
        var chartData = {
            labels: [],
            datasets: [
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: []
                }
            ]
        };
        $.each(abilities, function(index, item){
            chartData.labels.push(item.label);
            chartData.datasets[0].data.push(item.data);
        });
        var chartOption = {
            // scaleShowLabels: true
        };
        var ctx = $("#skillChart").get(0).getContext("2d");
        var myNewChart = new Chart(ctx);
        myNewChart.Radar(chartData, chartOption);


        $('body').scrollspy({ 
            target: '.nav-container', 
            offset: 5
        });

        scrollTo($('body'), 0);
    }); 

    function scrollTo($target, time){
        var targetOffset = $target.offset().top; 
        $('html,body').animate({ 
                scrollTop: targetOffset 
            }, 
        time || 500); 
    }
}());