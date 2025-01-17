var story = [
    [
        "bg_emporium",
        "char_010_chen_1",
        "char_136_hsguma",
        "char_010_chen_5",
        "char_010_chen_4",
        "char_010_chen_2",
        "char_1011_wizard_1",
        "char_1002_nsabr_1",
        "avg_5_5_chen"
    ],
    [
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro",
        "m_bat_epic_loop",
        "m_bat_epic_intro",
        "e_skill_skulsrsword"
    ],
    [
        "blocker.blocker({a:0.6, r:0, g:0, b:0, fadetime:0.6, block:true});background.showImage({image:'bg_emporium', width:1, height:1,screenadapt:'coverall',  fadetime:2});voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(2);playground.drawCharacter({name:'char_010_chen_1',fadetime:2,block:true});delay(2);playground.drawDialog({name:'陈',text:'唔......'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'这是你今天第三次睡醒，早安老陈。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'我昏迷了多久？'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'十几秒。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'——星熊，让开。我来切碎积石。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'不好意思，我不能让。让这么一下，你我可能就都没了。我不要紧。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'你的胳膊。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'不要紧。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'......你撑不了多久！至少有两层楼的废墟压在你的盾上！'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'我不用撑多久。现在你醒了就好办了，蹲下，你要随时准备好冲出去。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'——'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'无论有多重——'});",
        "playground.drawCharacter({name:'char_136_hsguma'});background.cameraShake({duration:1, xstrength:5, ystrength:3, vibrato:30, randomness:50, fadeout:true, block:true});playground.drawDialog({name:'星熊',text:'——只要能被我掀开——'});",
        "background.cameraShake({duration:1, xstrength:5, ystrength:3, vibrato:30, randomness:50, fadeout:true, block:true});playground.drawDialog({name:'星熊',text:'——就也没多重！！啊啊！！'});",
        "background.cameraShake({duration:2, xstrength:8, ystrength:8, vibrato:30, randomness:90, fadeout:true, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'你......'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'哈，哈......哎，推这么一下，这支胳膊居然就真不行了。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:2});playground.drawDialog({name:'陈',text:'你又救了我一次。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_1',focus:1});playground.drawDialog({name:'星熊',text:'很奇怪吗，我救你的次数还少吗？就别郑重其事地说出来了，我听着不舒服。'});",
        "playground.drawDialog({name:'星熊',text:'让我歇一会，我觉得全身骨头都散架了......偶尔也得允许我动弹不得一回吧。'});",
        "voice.stopMusic({fadetime:1});playground.clearDialog();playground.drawCharacter({});playground.drawDialog({name:'整合运动成员',text:'......该死，这都没能干掉近卫局吗！'});",
        "voice.playMusic({intro:'m_bat_epic_intro', key:'m_bat_epic_loop', volume:0.8, crossfade:1.5, delay:0.5});playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_5',focus:2});playground.drawDialog({name:'陈',text:'但敌人不允许。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_5',focus:1});playground.drawDialog({name:'星熊',text:'这就没办法了。看来还是得勉强站起来动一下。'});",
        "playground.drawDialog({name:'星熊',text:'你快去整顿队伍，速度。别被这些人拖住脚步，他们就是干这个的。'});",
        "playground.clearDialog();playground.drawCharacter({name:'char_010_chen_5'});voice.playSound({key:'e_skill_skulsrsword', volume:0.5, delay:0});delay(1);playground.drawDialog({name:'陈',text:'我觉得先处理掉他们也不迟。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_5',focus:1});playground.drawDialog({name:'星熊',text:'你就不能先去看还有什么人受伤了吗？'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_4',focus:2});playground.drawDialog({name:'陈',text:'然后留你一身伤，独自面对整合运动？'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_4',focus:1});playground.drawDialog({name:'星熊',text:'老陈。你以为你在做什么？'});",
        "playground.drawDialog({name:'星熊',text:'两年前在下水，你自己去追的匪首。我腿脚受了伤，但你很信任我，你留下我一个人战斗。你还记得吗？'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_5',focus:2});playground.drawDialog({name:'陈',text:'那次我追了他多长时间？'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_5',focus:1});playground.drawDialog({name:'星熊',text:'三个小时。你可以信任我。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_5',focus:2});playground.drawDialog({name:'陈',text:'现在也一样。'});",
        "playground.drawCharacter({name:'char_010_chen_2'});playground.drawDialog({name:'陈',text:'你们，整合运动！一齐上吧！'});",
        "playground.drawCharacter({name:'char_1011_wizard_1',name2:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'可恶，居然挑衅我们！'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_2',focus:1});playground.drawDialog({name:'星熊',text:'我还能战斗。为什么这次你要留在这里，为什么不去率队夺回近卫局？这难道不才是首要任务吗？'});",
        "playground.drawDialog({name:'星熊',text:'现在和三年前没有区别，你依然扛着只有你才能做的事情！'});",
        "playground.drawDialog({name:'星熊',text:'刚才在木禾仓库也是，你什么时候变得那么婆妈？老陈！'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_5',focus:2});playground.drawDialog({name:'陈',text:'我不觉得保护自己的同事不受暴徒侵害有什么问题。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_5',focus:1});playground.drawDialog({name:'星熊',text:'你变了。以前的你是更刚强的人。'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'char_010_chen_5',focus:2});playground.drawDialog({name:'陈',text:'把你丢在这里？当然可以。只不过我以前权衡的是利弊，但现在，就像你说的那样——'});",
        "playground.drawDialog({name:'陈',text:'把阿米娅他们留在废城这件事，我也一样感到......不适。'});",
        "playground.drawCharacter({name:'char_1011_wizard_1',name2:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'你们会尝到感染者的愤怒的！上啊！'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.6, block:true});playground.drawImage({image:'avg_5_5_chen', fadetime:0, xscale:1, yscale:1});playground.imageTween({image:'avg_5_5_chen', xscaleto:1.15, yscaleto:1.15, duration:20});blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawDialog({name:'陈',text:'也许我确实变了。时间久了，我对龙门的不满越来越少，相信我的人也越来越多。'});",
        "playground.drawDialog({name:'陈',text:'你也不再仅仅是星熊督察了，你是我的朋友，我的搭档，星熊。'});",
        "playground.drawDialog({name:'陈',text:'你的盾，你替我撑了这么久；偶尔也要允许我做一回你的盾牌，星熊。'});",
        "playground.drawDialog({name:'星熊',text:'哗。你说这话脸都不红一下的吗？'});",
        "playground.drawDialog({name:'陈',text:'*龙门粗口*。'});",
        "playground.drawDialog({name:'星熊',text:'哈哈哈。'});",
        "playground.drawDialog({name:'星熊',text:'算了，行吧。行啊，老陈，都听你的。'});"
    ]
];