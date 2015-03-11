
(function(){
    $(function(){
        // scrollTo($('body'), 0);

        $('a[href*=#]').click(function() { 
            var me = $(this);
            me.parent().addClass('current');
            me.parent().siblings().removeClass('current');
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { 
                var $target = $(this.hash); 
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']'); 
                if ($target.length) {
                    scrollTo($target);
                    return false; 
                }
            }
        });


        var timeData = {
            timeline: {
                "headline":"工作经验",
                "type":"default",
                "text":"work experience",
                "startDate":"2010,3,20",
                "maptype": "toner-lines",
                "date": [
                    {
                        "startDate":"2010,3,20",
                        "endDate":"2014,9,24",
                        "headline":"入职南京富士通南大(FNST)",
                        "text":"<pre>南京富士通南大软件技术有限公司（Nanjing Fujitsu Nanda Software Technology Co., Ltd）是世界500强企业、国际著名的IT解决方案和服务提供商日本富士通株式会社和中国著名大学南京大学合资组建的软件技术公司，是富士通软件事业集团的全球软件产品研发中心之一。</pre>",
                        "asset": {
                            "media":"http://jd.zynews.com/uploadfile/2012/12/29/6155291741191.jpg"/*,
                            "credit":"Credit Name Goes Here",
                            "caption":"Caption text goes here"*/
                        }
                    }, {
                        "startDate": "2010,6,30",
                        "endDate": "2013,6,30",
                        "headline": "日本ISUZU柴油发动机ECU开发",
                        "text": "<pre>1. 瑞萨单片机C语言程序开发 \r\n2. MATLAB GUI程序开发 \r\n3. WPF程序开发 \r\n4. JSP网站开发 \r\n\r\n拥有丰富的测试、开发和领导组织经验</pre>",
                    }, {
                        "startDate": "2012,12,26",
                        "endDate": "2013,3,24",
                        "headline": "赴日现场开发",
                        "text": "<pre>日本横滨市Transtron公司现场开发作业</pre>",
                        "asset": {
                            "media": "http://sh.yun.ftn.qq.com/ftn_handler/91dec22eaba41ac30be3e1f39d7bc79fdf404f8963baf3122e108c6f1318a70e/?fname=%e5%8c%97%e6%b5%b7%e9%81%93%e4%ba%94%e5%8d%81%e9%93%83%e9%a3%9f%e5%a0%82.jpg&cn=0&cv=30111&size=640*640"
                        }
                    }, {
                        "startDate": "2013,7,1",
                        "endDate": "2014,9,24",
                        "headline": "重庆长安汽车BOM在线管理系统开发",
                        "text": "<pre>与日本公司合作完成对长安国产汽车产品线从设计到零部件生产到汽车组装及后期维护的完整线上管理和追踪！\r\n负责网站核心功能模块的前后端开发 \r\n前端：ExtJs3 \r\n后端：SSI(Struts、spring、ibatis) \r\n数据库：oracle</pre>",
                        "asset": {
                            "media": "http://pic31.nipic.com/20130710/10756792_111714354375_2.jpg"
                        }
                    }, {
                        "startDate": "2014,9,25",
                        "endDate": "now",
                        "headline": "入职联创车盟",
                        "text": "<pre>联创车盟（AA China）2004年7月成立于北京，隶属于南京联创科技集团。联创车盟定位“全国汽车服务网络提供商”，设有全国呼叫中心，并建立道路救援网、汽车服务网络、电子商务网络和汽车物联网络，提供以道路救援、出行保障、汽车服务业务为主的全方位汽车服务，客户覆盖金融、保险、电信、汽车等行业与个人车主。</pre>",
                        "asset": {
                            "media": "http://p2.55tuanimg.com/static/store/2013/02/03/d7df4c15fa6bcb174d5bf2ecf5d76376.jpg"
                        }
                    }, {
                        "startDate": "2014,9,25",
                        "endDate": "now",
                        "headline": "互联网开发",
                        "text": "<pre>从事互联网相关产品开发\r\n包括：\r\n桌面官网、移动端商城、APP内嵌webview、后台管理网站\r\n\r\n开发框架包括：\r\nangularJs\r\nExtJs\r\nbackbone\r\ngrunt、bower、requireJs\r\nnodejs\r\nselenium</pre>",
                        "asset": {
                            "media": "http://f.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=37213cc2e3fe9925cb0c6e560c9339e2/4d086e061d950a7b0f006ac309d162d9f2d3c9fb.jpg"
                        }
                    }
                ]
            }
        };
        createStoryJS({
            type: 'timeline',
            width: '100%',
            height: '100%',
            lang: 'zh-cn',
            source: timeData,
            embed_id: 'jobTimeline'           // ID of the DIV you want to load the timeline into
        });


        var chartData = {
            labels: ["javascript", "HTML/CSS", "nodejs", "JAVA", "SQL", "项目管理", "软件测试"],
            datasets: [
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [81, 61, 61, 51, 51, 61, 61]
                }
            ]
        };
        var chartOption = {
            // scaleShowLabels: true
        };
        var ctx = $("#skillChart").get(0).getContext("2d");
        var myNewChart = new Chart(ctx);
        myNewChart.Radar(chartData, chartOption);
    }); 

    function scrollTo($target, time){
        var targetOffset = $target.offset().top; 
        $('html,body').animate({ 
                scrollTop: targetOffset 
            }, 
        time || 500); 
    }
}());