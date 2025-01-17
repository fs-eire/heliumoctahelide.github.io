var story = [
    [
        "avg_40_2",
        "bg_cher_6",
        "char_002_amiya_7",
        "char_193_frostl_1",
        "char_219_meteo_1",
        "char_219_meteo_3",
        "char_002_amiya_1",
        "char_1505_frstar_1",
        "char_1002_nsabr_1",
        "char_1002_nsabr_2",
        "char_002_amiya_6"
    ],
    [
        "m_bat_frostnova_loop",
        "m_bat_frostnova_intro",
        "d_gen_surfacefrozen",
        "g_ui_stagepush"
    ],
    [
        "voice.playMusic({intro:'m_bat_frostnova_intro', key:'m_bat_frostnova_loop', volume:0.8, crossfade:1, delay:0.5});delay(1);voice.playSound({key:'d_gen_surfacefrozen', volume:0.8});playground.drawImage({image:'avg_40_2', fadetime:1, block:true});background.cameraShake({duration:-1, xstrength:5, ystrength:5, vibrato:15, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'杰西卡',text:'温度......急剧下降？'});",
        "blocker.blocker({a:0.05, r:1, g:1, b:1, fadetime:0.5, block:true});playground.drawDialog({name:'杰西卡',text:'地面结霜了......'});",
        "blocker.blocker({a:0.1, r:1, g:1, b:1, fadetime:0.5, block:true});playground.drawDialog({name:'杰西卡',text:'好冷......'});",
        "playground.drawDialog({name:'杰西卡',text:'怎么会......就连那个整合运动的标志都被......怎么会......！'});",
        "playground.drawDialog({name:'杰西卡',text:'火焰熄灭了......乌云覆盖住了天空......'});",
        "voice.playSound({key:'d_gen_surfacefrozen', volume:0.8});playground.drawDialog({name:'杰西卡',text:'啊啊......！'});",
        "blocker.blocker({a:0.2, r:1, g:1, b:1, fadetime:1, block:true});playground.drawDialog({name:'阿米娅',text:'别慌张！'});",
        "playground.drawDialog({name:'阿米娅',text:'黑钢干员杰西卡！'});",
        "playground.drawDialog({name:'杰西卡',text:'......'});",
        "playground.drawDialog({name:'杰西卡',text:'是！'});",
        "playground.drawDialog({name:'阿米娅',text:'保持阵形！'});",
        "playground.drawDialog({name:'杰西卡',text:'明白！'});",
        "playground.drawDialog({name:'陨星',text:'你在做什么，霜叶！'});",
        "voice.playSound({key:'d_gen_surfacefrozen', volume:0.8});playground.clearDialog();background.cameraShake({duration:1, xstrength:5, ystrength:5, vibrato:15, randomness:90, fadeout:true, block:false});playground.drawImage({fadetime:1, block:true});blocker.blocker({a:0, fadetime:0.2, block:true});background.showImage({image:'bg_cher_6', width:1, height:1, fadetime:1, block:true});playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'她......正在剥夺这片区域的热量！'});",
        "playground.drawDialog({name:'阿米娅',text:'居然能有这么广的范围吗！'});",
        "playground.drawCharacter({name:'char_193_frostl_1'});playground.drawDialog({name:'霜叶',text:'......哈，雪怪们的公主......'});",
        "playground.drawDialog({name:'霜叶',text:'头次见到......比我体温还低的人呢。'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'霜叶！'});",
        "playground.drawCharacter({name:'char_193_frostl_1', name2:'char_219_meteo_1', focus:1});playground.drawDialog({name:'霜叶',text:'陨星......其实我......也想要......'});",
        "playground.drawDialog({name:'霜叶',text:'通过迂回来......来给你们创造空间......'});",
        "playground.drawCharacter({name:'char_193_frostl_1', name2:'char_219_meteo_3', focus:2});playground.drawDialog({name:'陨星',text:'你......'});",
        "playground.drawCharacter({name:'char_193_frostl_1', name2:'char_219_meteo_3', focus:1});playground.drawDialog({name:'霜叶',text:'可是......我的身体......已经冻僵了。'});",
        "playground.drawDialog({name:'霜叶',text:'我的脚......动不了了。'});",
        "playground.drawCharacter({name:'char_193_frostl_1', name2:'char_219_meteo_3', focus:2});playground.drawDialog({name:'陨星',text:'霜叶！！'});",
        "playground.drawCharacter({name:'char_193_frostl_1'});playground.drawDialog({name:'霜叶',text:'阿米娅，带她们突破包围。'});",
        "playground.drawDialog({name:'霜叶',text:'再过不到一分钟，敌人的指挥官......可能会冻上整个广场。'});",
        "playground.drawDialog({name:'霜叶',text:'我的命，可别浪费了。'});",
        "background.cameraShake({duration:1, xstrength:8, ystrength:10, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_002_amiya_1', name2:'char_219_meteo_3', focus:2});playground.drawDialog({name:'陨星',text:'阿米娅......我们不能......我不能！'});",
        "playground.drawCharacter({name:'char_002_amiya_7', name2:'char_219_meteo_3', focus:1});playground.drawDialog({name:'阿米娅',text:'我明白。'});",
        "playground.drawDialog({name:'阿米娅',text:'我不会丢下霜叶的。'});",
        "playground.drawDialog({name:'阿米娅',text:'我是不会——丢下任何人的！'});",
        "playground.drawDialog({name:'阿米娅',text:'我来封锁敌方小队的行动！'});",
        "playground.drawDialog({name:'阿米娅',text:'陨星——去把霜叶救回来！！'});",
        "playground.drawCharacter({name:'char_002_amiya_7', name2:'char_219_meteo_3', focus:2});playground.drawDialog({name:'陨星',text:'明白！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'博士！拜托你指挥各个小队！'});",
        "playground.drawCharacter({name:'char_002_amiya_7', focus:-1});playground.Decision({options:[['不用你说！', '（点头）', '好的！']]});",
        "predicate = ['1', '2', '3'];",
        "playground.clearDialog();blocker.blocker({a:1, initr:2, r:0, g:0, b:0, fadetime:0.2, block:true});playground.drawCharacter({fadetime:0});blocker.blocker({a:0, fadetime:0.2, block:true});playground.drawCharacter({name:'char_193_frostl_1'});playground.drawDialog({name:'霜叶',text:'————'});",
        "playground.drawDialog({name:'霜叶',text:'想了想，这法术......'});",
        "playground.drawDialog({name:'霜叶',text:'我只用过一次呢。'});",
        "playground.drawDialog({name:'霜叶',text:'——“凡有血气......”'});",
        "blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.1, block:true});blocker.blocker({a:0, r:1, g:1, b:1, fadetime:0.1, block:true});delay(1);playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'呵。'});",
        "playground.drawDialog({name:'霜星',text:'想用冰对抗冰......吗。'});",
        "playground.drawCharacter({name:'char_193_frostl_1'});playground.drawDialog({name:'霜叶',text:'唔......！'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'舌头，是不是不听使唤了？'});",
        "playground.drawCharacter({name:'char_193_frostl_1'});playground.drawDialog({name:'霜叶',text:'你......'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'————'});",
        "playground.drawDialog({name:'霜星',text:'雪怪小队，各自散开就位。'});",
        "playground.drawCharacter({name:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'是。'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'我的兄弟们......'});",
        "playground.drawDialog({name:'霜星',text:'去摧毁他们的掩体，冻结他们的血液吧。'});",
        "playground.drawCharacter({name:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'明白。'});",
        "playground.clearDialog();playground.drawCharacter({});delay(0.5);playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'“——我知道你在想什么。”'});",
        "playground.drawCharacter({name:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'咒语？'});",
        "playground.drawDialog({name:'整合运动成员',text:'罗德岛的兔子......'});",
        "playground.drawDialog({name:'整合运动成员',text:'黑色的......线？......那是什么东西？'});",
        "playground.drawDialog({name:'整合运动成员',text:'是，是什么法术——'});",
        "playground.drawDialog({name:'整合运动成员',text:'等，等等，那东西跃过了......掩体？！'});",
        "playground.drawDialog({name:'整合运动成员',text:'别——'});",
        "playground.drawDialog({name:'整合运动成员',text:'——啊啊啊啊！！！！'});",
        "background.cameraShake({duration:1, xstrength:8, ystrength:10, vibrato:30, randomness:90, block:true});playground.drawDialog({name:'整合运动成员',text:'我，我的身体！好烫......！好烫！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'陨星！'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'我知道！'});",
        "playground.drawDialog({name:'陨星',text:'就拜托你，继续制造空隙了！'});",
        "playground.drawCharacter({name:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'不不......不......好冷......！'});",
        "playground.drawDialog({name:'整合运动成员',text:'呃啊......好疼，好疼呀！'});",
        "playground.drawDialog({name:'整合运动成员',text:'......喀......别，别再......'});",
        "playground.drawCharacter({name:'char_1505_frstar_1',name2:'char_1002_nsabr_2',focus:1});playground.drawDialog({name:'霜星',text:'——！'});",
        "playground.drawDialog({name:'霜星',text:'快点！别再让普通的整合运动同胞们受伤！'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'了解！'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'这种源石技艺......很强大。'});",
        "playground.drawDialog({name:'霜星',text:'——'});",
        "playground.drawCharacter({name:'char_193_frostl_1'});playground.drawDialog({name:'霜叶',text:'唔......啊......'});",
        "playground.drawDialog({name:'霜叶',text:'你这家伙......别想......再前进了......'});",
        "playground.drawDialog({name:'霜叶',text:'呃......'});",
        "playground.drawDialog({name:'霜叶',text:'......'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'不会让你有释放法术的机会的，小妹妹。'});",
        "playground.drawDialog({name:'霜星',text:'就这样，稍微睡一会儿吧。'});",
        "playground.drawDialog({name:'霜星',text:'等一下再来结束你的痛苦。'});",
        "playground.drawCharacter({name:'char_219_meteo_1'});playground.drawDialog({name:'陨星',text:'可，可恶......！'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'......'});",
        "playground.drawDialog({name:'霜星',text:'那么，你就是阿米娅吧。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'......！'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'——'});",
        "playground.drawDialog({name:'霜星',text:'你的眼神，很棒。'});",
        "playground.drawDialog({name:'霜星',text:'确实是属于战士的眼神。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'......'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'......抱歉。'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'你......为什么......'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'......♬'});",
        "playground.drawDialog({name:'霜星',text:'——♪——♬——'});",
        "voice.playSound({key:'d_gen_surfacefrozen', volume:0.8});blocker.blocker({a:0.3, r:255, g:255, b:255, fadetime:3, block:true});playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'——！'});",
        "playground.drawDialog({name:'阿米娅',text:'怎么回事？'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'——♬——♬——'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'......下雪了？'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});blocker.blocker({a:1, r:255, g:255, b:255, fadetime:3, block:true});playground.drawDialog({name:'霜星',text:'......♪'});",
        "playground.drawDialog({name:'霜星',text:'“沉睡啊，沉睡吧，'});",
        "playground.drawDialog({name:'霜星',text:'刺猬玩偶与小熊们”......'});",
        "voice.playSound({key:'d_gen_surfacefrozen', volume:0.8});playground.drawCharacter({name:'char_219_meteo_3'});playground.drawDialog({name:'陨星',text:'这个怪异的旋律......'});",
        "playground.drawDialog({name:'陨星',text:'——她在施术！'});",
        "playground.drawCharacter({name:'char_1505_frstar_1'});playground.drawDialog({name:'霜星',text:'“沉进静静的黑色......♩'});",
        "playground.drawDialog({name:'霜星',text:'......我，破烂的人偶与娃娃♬”'});",
        "voice.playSound({key:'d_gen_surfacefrozen', volume:0.8});blocker.blocker({a:0.5, r:255, g:255, b:255, fadetime:1, block:true});playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'——'});",
        "playground.drawDialog({name:'阿米娅',text:'凭空诞生的黑色冰晶，数量又增多了？'});",
        "playground.drawCharacter({name:'char_219_meteo_3'});playground.drawDialog({name:'杰西卡',text:'冰晶缓缓降落在地面上了！'});",
        "playground.drawCharacter({name:'char_219_meteo_3'});playground.drawDialog({name:'陨星',text:'糟糕，冰晶与地面的接触面......结冰了？'});",
        "playground.drawDialog({name:'陨星',text:'黑色的冰面......'});",
        "playground.drawDialog({name:'陨星',text:'居然......在蔓延？！'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'冰晶正在迅速侵蚀周边的地形！'});",
        "voice.playSound({key:'d_gen_surfacefrozen', volume:0.8});playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'别让她唱完！！'});",
        "playground.drawCharacter({name:'char_002_amiya_7', focus:-1});playground.Decision({options:[['罗德岛，全力进攻！']]});",
        "predicate = ['1'];"
    ]
];