var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET template page. */
router.get('/:template/:jsonId?', function(req, res){
  var jsonData = {
    instruct: {
        name: '陆婷杨',
        detail: "我正在寻找高级软件测试的工作。\r\n I'M LOOKING FOR THE WORK OF SENIOR SOFTWARE TESTING."
    },
    aboutMe: {
        detail: "嗨，我叫陆廷扬，来自江苏扬中，2010年6月毕业于南京工程学院的计算机科学与技术专业。毕业后一直从事软件测试，热爱软件测试工作，对工作认真负责，能独立思考和解决问题。勇于尝试、有较强创新的能力；自学能力强，能够在较短的时间内熟悉公司业务。有良好的团队合作意识，能够主动承担责任和压力。\r\n2010年6月份就职于华通科技有限公司的软件测试工作，华通科技作为中兴发展有限公司全资子公司，我在里面主要负责网管双机机架环境进行系统测试,系统子模块包括告警管理、性能管理、跟踪管理、安全日志管理等。搭建测试环境，根据软件功能需求编写测试场景和测试用例，并能用自动化测试工具对软件产品进行测试。参与评审测试用例并有效执行用例，记录、跟踪Bug。验证并整理故障单完善测试用例覆盖率以备回归测试。根据测试结果提交测试报告。编写、维护测试工作的相关文档。对文档人员编写的文档进行测试。\r\n2013年3月到至今就职于伊时代信息科技股份有限公司的高级软件测试职位。我主要负责测试项目的管理及进度的把控，建立软件测试的标准规范和流程，持续提升测试团队的工作效率和质量，确保项目过程质量控制和产品质量的能力。对需求功能进行分析，分布任务并制定测试计划、方案，编写有效用例，参与评审和修改用例，独立完成Android、IOS应用测试任务，验证回归BUG，每轮测试后编写测试报告，发布到各应用平台以供给用户使用，执行版本控制和演示程序的准备，对用户体验方面的问题比较敏感并且拥有自己的见解。执行软件产品的性能测试和分析，评测系统性能瓶颈，风险和安全隐患。"
    },
    jobExperiences: {
    }
  };
  console.log(jsonData);
  res.render('template/' + req.params.template, jsonData);
});

module.exports = router;
