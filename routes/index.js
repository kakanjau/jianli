var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('basic');
});

/* GET template page. */
router.get('/:template/:jsonId?', function(req, res){
  var jsonData = {
    instruct: {
        name: '乔梁',
        detail: "我正在寻找高级web前端开发工程师的工作。\r\n I'M LOOKING FOR THE WORK OF SENIOR WEB SOFTWEAR ENGINEER."
    },
    aboutMe: {
        detail: "嗨，我叫乔梁，来自河南省三门峡市，现居南京。2010年毕业自南京农业大学计算机科学与技术学院，学士学位。毕业后进入南京富士通南大软件公司(FNST)工作。\r\n\r\n在富士通工作的4年期间，工作内容比较广泛，先后从事C、C++、MATLAB、JSP等语言相关项目的测试和开发工作。我热爱技术开发，曾利用业余时间为项目组开发了一套嵌入式工程在PC平台的自动化单元测试工具，极大的降低了测试的门槛、提高了测试的效率，也曾带领团队学习JSP开发，为日本客户搭建在线数据管理网站。\r\n在从事JSP开发的过程中，我渐渐热爱上了web开发，特别是前端的JavaScript语言。它灵活多变，各种hack技巧让人着迷，近年来丰富的各色框架也让它如虎添翼。新兴的HTML5和移动端web app有着广阔的应用场景。所以我逐渐将个人发展重心转向web端，参与了FNST为长安汽车开发的大型在线零部件管理系统(BOM)。在为期一年的开发过程中，我成为项目组最具经验的前端开发工程师，并负责整个前端的开发工作。\r\n\r\n为了进一步提升自己的互联网开发能力，我从FNST离职进入联创车盟。联创车盟是一家提供汽车O2O生活服务的互联网公司，目前还处于发展期。从内部管理网站到客户服务网站到官网到移动APP以及微信内嵌页面等等，有各方面的web开发需求，我也进一步参与其中，掌握了目前热门的各种js框架和开发理念。\r\n\r\n现在，我希望能在一个纯粹的互联网平台上施展自己的才华。"
    },
    jobExperiences: {
        timedate: {
            "timeline": {
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
                            "media": "http://www.sum.com.tw/car_pics/73004/upload369/2010929175340451.JPG"
                        }
                    }, {
                        "startDate": "2013,7,1",
                        "endDate": "2014,9,24",
                        "headline": "重庆长安汽车BOM在线管理系统开发",
                        "text": "<pre>与日本公司合作完成对长安国产汽车产品线从设计到零部件生产到汽车组装及后期维护的完整线上管理和追踪！\r\n负责网站核心功能模块的前后端开发 \r\n前端：ExtJs3 \r\n后端：SSI(Struts、spring、ibatis) \r\n数据库：oracle</pre>",
                        "asset": {
                            "media": "http://picture.51auto.com/info/20101101/Info201011011705580SLw6.jpg"
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
                            "media": "http://www.shichangbu.com/data/attachment/portal/201502/03/112822c4auru9ktffx6kxk.jpg"
                        }
                    }
                ]
            }
        }
    },
    skill: {
        works:[
            {
                name: "个人博客主页",
                text: "www.qiaokaka.com"
            },{
                name: "github主页",
                text: "https://github.com/kakanjau",
                subwork: [
                    {
                        name: "homepage",
                        text: "nodejs搭建个人博客系统"
                    },{
                        name: "mocha-web",
                        text: "selenium + mocha + nodejs 前端自动测试及web查看结果"
                    },{
                        name: "jianli",
                        text: "在线使用模板创建个人简历"
                    },{
                        name: "evernote-mail",
                        text: "nodejs module，利用evernote的邮件功能，给自己的evernote账户新增文章"
                    }
                ]
            }
        ],
        abilities:[
            {
                label: "javascript",
                data: 81
            },{
                label: "HTML/CSS",
                data: 61
            },{
                label: "nodejs",
                data: 61
            },{
                label: "JAVA",
                data: 51
            },{
                label: "SQL",
                data: 51
            },{
                label: "项目管理",
                data: 61
            },{
                label: "软件测试",
                data: 61
            }
        ]
    },
    contact:{
        phone: "18012950566",
        email: "qiaoliangsmx@163.com"
    }
  };

  var templateUrl = 'template/' + req.params.template;
  if(isMobile(req.header('User-Agent'))){
    templateUrl += '-m';
  }
  res.render(templateUrl, jsonData);
});

function isMobile(userAgent){
    return /iPhone|iPad|iTouch|Android|IEMobile|SymbianOS|ucweb/.test(userAgent);
}

module.exports = router;
