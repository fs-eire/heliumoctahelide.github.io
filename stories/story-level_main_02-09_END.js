var story = [
    [
        "bg_lungmen_r",
        "char_002_amiya_7",
        "char_1002_nsabr_2",
        "char_107_liskam_1",
        "char_106_franka_1",
        "char_002_amiya_1",
        "char_1500_skulsr",
        "char_010_chen_1",
        "char_012_misa_1",
        "char_1504_cqbw_2"
    ],
    [
        "m_sys_loading_loop",
        "m_sys_loading_intro",
        "b_char_rockexplo",
        "d_gen_soldiersrun"
    ],
    [
        "background.showImage({image:'bg_lungmen_r', width:1, height:1, fadetime:1});voice.playMusic({intro:'m_sys_loading_intro', key:'m_sys_loading_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'这是最后一批追击我们的整合运动了！'});",
        "background.cameraShake({duration:0.5, xstrength:8, ystrength:10, vibrato:30, randomness:90, block:false});playground.drawCharacter({name:'char_1002_nsabr_2'});blocker.blocker({a:1, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});voice.playSound({key:'b_char_rockexplo', volume:0.6});blocker.blocker({a:0, fadetime:1.5, block:false});playground.drawDialog({name:'整合运动',text:'......呃啊！'});",
        "playground.drawCharacter({name:'char_107_liskam_1'});playground.drawDialog({name:'雷蛇',text:'确保！'});",
        "playground.drawDialog({name:'雷蛇',text:'确认安全无虞！'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'敌方的指挥官呢？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:2});playground.drawDialog({name:'雷蛇',text:'——不在这批敌人里。'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_107_liskam_1', focus:1});playground.drawDialog({name:'芙兰卡',text:'一直潜伏着......观察着，尾随着我们。'});",
        "playground.drawDialog({name:'芙兰卡',text:'是想消磨我们的体力，等到稳操胜券后，再发动袭击吗？'});",
        "playground.drawCharacter({name:'char_106_franka_1', name2:'char_002_amiya_1', focus:2});playground.drawDialog({name:'阿米娅',text:'整合运动的敌人非常擅长发动偷袭。'});",
        "playground.drawDialog({name:'阿米娅',text:'这点，我们在切尔诺伯格时就领教过了。'});",
        "playground.drawDialog({name:'阿米娅',text:'暂时撤退——'});",
        "playground.drawCharacter({name:'char_107_liskam_1', name2:'char_002_amiya_1', focus:1});playground.drawDialog({name:'雷蛇',text:'我没法确保撤退路线的安全。'});",
        "playground.drawDialog({name:'雷蛇',text:'如果他们破坏建筑物来封锁路口，我们就危险了。'});",
        "playground.drawCharacter({name:'char_107_liskam_1', name2:'char_002_amiya_7', focus:2});playground.drawDialog({name:'阿米娅',text:'——立刻侦查其他的路线！越隐蔽越好！'});",
        "playground.drawCharacter({name:'char_107_liskam_1'});playground.drawDialog({name:'雷蛇',text:'阿米娅，四点钟方向，那个向下方街道移动的阶梯如何？'});",
        "playground.drawCharacter({name:'char_106_franka_1'});playground.drawDialog({name:'芙兰卡',text:'那里可不好走哦。'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动',text:'啊啊！罗德岛！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'是伏击！小心！'});",
        "playground.clearDialog();playground.drawCharacter({fadetime:0.5});delay(1);voice.playSound({key:'d_gen_soldiersrun'});playground.drawCharacter({name:'char_1500_skulsr'});playground.drawDialog({name:'碎骨',text:'继续给我追。'});",
        "playground.drawDialog({name:'碎骨',text:'别让他们有任何喘息的机会。'});",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_010_chen_1', name2:'char_012_misa_1', focus:2});playground.drawDialog({name:'米莎',text:'......长官。'});",
        "playground.drawDialog({name:'米莎',text:'——贫民区......里有一些被感染的孩子。'});",
        "playground.drawDialog({name:'米莎',text:'如果可以的话......'});",
        "playground.drawDialog({name:'米莎',text:'希望你能......照看他们。'});",
        "playground.drawCharacter({name:'char_010_chen_1', name2:'char_012_misa_1', focus:1});playground.drawDialog({name:'陈',text:'保护龙门是近卫局的责任。'});",
        "playground.drawDialog({name:'陈',text:'感染者，并非是龙门公民。'});",
        "playground.drawCharacter({name:'char_010_chen_1', name2:'char_012_misa_1', focus:2});playground.drawDialog({name:'米莎',text:'......'});",
        "playground.drawCharacter({name:'char_010_chen_1', name2:'char_012_misa_1', focus:1});playground.drawDialog({name:'陈',text:'......'});",
        "playground.drawDialog({name:'陈',text:'但龙门的感染者依然属于龙门。'});",
        "playground.drawDialog({name:'陈',text:'我没任何理由向你保证，但我会尽到我的职责。'});",
        "playground.drawDialog({name:'陈',text:'毕竟——'});",
        "playground.drawCharacter({name:'char_010_chen_1', name2:'char_012_misa_1', focus:2});playground.drawDialog({name:'米莎',text:'他们说过，以前也——'});",
        "playground.drawCharacter({name:'char_010_chen_1', name2:'char_012_misa_1', focus:1});playground.drawDialog({name:'陈',text:'这是我们一直在做的事情。'});",
        "playground.drawCharacter({name:'char_010_chen_1', name2:'char_012_misa_1', focus:2});playground.drawDialog({name:'米莎',text:'......'});",
        "playground.drawDialog({name:'米莎',text:'谢谢你......'});",
        "playground.drawCharacter({name:'char_010_chen_1', name2:'char_012_misa_1', focus:1});playground.drawDialog({name:'陈',text:'......'});",
        "playground.drawDialog({name:'陈',text:'——你知道我们找你的原因吗？'});",
        "playground.drawCharacter({name:'char_010_chen_1', name2:'char_012_misa_1', focus:2});playground.drawDialog({name:'米莎',text:'......我不清楚。'});",
        "playground.drawDialog({name:'米莎',text:'我想不出自己有什么值得你们追缉的理由。'});",
        "playground.drawDialog({name:'米莎',text:'但我觉得，也许......'});",
        "playground.drawDialog({name:'米莎',text:'原因不在我，却在——'});",
        "playground.drawDialog({name:'米莎',text:'——我的父亲身上。'});",
        "playground.drawCharacter({name:'char_010_chen_1', name2:'char_012_misa_1', focus:1});playground.drawDialog({name:'陈',text:'————是的。'});",
        "playground.drawDialog({name:'陈',text:'你的父亲，是切尔诺伯格最著名的科学家。'});",
        "playground.drawDialog({name:'陈',text:'同时，他也是切尔诺伯格重要的政治人物之一。'});",
        "playground.drawDialog({name:'陈',text:'也许，你身上有着......'});",
        "playground.drawDialog({name:'陈',text:'——'});",
        "playground.drawDialog({name:'陈',text:'也许没有。'});",
        "playground.drawDialog({name:'陈',text:'但我们不能允许你落入整合运动之手。'});",
        "playground.drawCharacter({fadetime:1});background.showImage({screenadapt:'coverall', time:2});playground.clearDialog();playground.drawCharacter({name:'char_1504_cqbw_2', fadetime:0.2});delay(1);playground.drawDialog({name:'W',text:'呵呵，找到你们了，龙门近卫局。'});",
        "playground.drawDialog({name:'W',text:'虽然我和你们无冤无仇——'});",
        "playground.drawDialog({name:'W',text:'但我手上有一个很有意思的剧本哦。'});",
        "playground.drawDialog({name:'W',text:'为了让事情变得好玩起来，有必要让你们参与其中呢。'});",
        "playground.drawDialog({name:'W',text:'就让我们开始吧。'});"
    ]
];