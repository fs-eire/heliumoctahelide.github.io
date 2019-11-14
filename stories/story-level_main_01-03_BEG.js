var story = [
    [
        "bg_cher_1",
        "char_130_doberm_ex",
        "char_148_nearl_1",
        "char_002_amiya_1",
        "char_002_amiya_7"
    ],
    [
        "m_bat_qiecheng_loop",
        "m_bat_qiecheng_intro"
    ],
    [
        "playground.drawDialog({name:'',text:'时间未知 \\ 天气未知 \\ 能见度 低'});",
        "playground.drawDialog({name:'',text:'切尔诺伯格 行动组E0所在地'});",
        "playground.drawDialog({name:'',text:`Dr.${nickname}营救行动 第三阶段`});",
        "playground.clearDialog();background.showImage({image:'bg_cher_1', width:1, height:1, fadetime:1});voice.playMusic({intro:'m_bat_qiecheng_intro', key:'m_bat_qiecheng_loop', volume:0.8, crossfade:1, delay:0.5});delay(1);playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'还剩不到一个小时，没时间从其他区域绕行了......'});",
        "playground.drawDialog({name:'杜宾',text:'我们浪费的时间越多，天灾在我们头顶发生的可能性就越大。'});",
        "playground.drawDialog({name:'杜宾',text:'必须直接穿过当前区域。'});",
        "playground.drawDialog({name:'杜宾',text:'以我们现在的规模，团队行动难免会被发觉。'});",
        "playground.drawDialog({name:'杜宾',text:'在狭窄的街巷中行动，很容易被埋伏包夹......'});",
        "playground.drawCharacter({name:'char_148_nearl_1', name2:'char_130_doberm_ex', focus:1});playground.drawDialog({name:'临光',text:'怎么办？'});",
        "playground.drawCharacter({name:'char_148_nearl_1', name2:'char_130_doberm_ex', focus:2});playground.drawDialog({name:'杜宾',text:'选择不多......'});",
        "playground.drawDialog({name:'杜宾',text:`Dr.${nickname}，你的想法呢？`});",
        "playground.Decision({options:[['正面碾压过去就好！', '......大概，他们也没法阻拦......', '敌人想组织反击也需要时间。']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'整合运动的个人实力并不能和我们相提并论。'});",
        "playground.drawDialog({name:'杜宾',text:'大多数情况下，都只是在依赖人海战术围攻我们。'});",
        "playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'依靠速度，不断前进，尽量减少一次性交战的人数的话——'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'他们并没有构筑防御工事。'});",
        "playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'如果我们突袭他们的封锁线......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'虽然看上去人数众多，但整合运动这样松散的布置，是拦不住我们的。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'整合运动的通信方式，从过往的战斗来看，是十分原始的。'});",
        "playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'在我们突破敌人的阻碍，当他们开始组织起来，尝试截击我们的时候......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'当整合运动终于集结完毕，我们也早已经到达了下一个区域。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'不错。'});",
        "playground.drawDialog({name:'临光',text:'猛烈冲击，搅乱阵形，破坏火力点，迅速撤退。'});",
        "playground.drawDialog({name:'临光',text:'......杜宾，你在考验我，还是在考验——'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_130_doberm_ex', focus:2});playground.drawDialog({name:'杜宾',text:'肉眼可见的威胁远比进退两难容易处理的多。'});",
        "playground.drawDialog({name:'杜宾',text:`我可以把这看作是Dr.${nickname}的命令吗，阿米娅？`});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_130_doberm_ex', focus:1});playground.drawDialog({name:'阿米娅',text:'局势很明了了。我相信博士的选择......'});",
        "playground.drawCharacter({name:'char_002_amiya_1', name2:'char_130_doberm_ex', focus:2});playground.drawDialog({name:'杜宾',text:'——所谓信任，也不光是一场战役就能轻松建立的。'});",
        "playground.drawDialog({name:'杜宾',text:`我很看好Dr.${nickname}，但阿米娅......`});",
        "playground.drawDialog({name:'杜宾',text:'不要放松警惕。你当然可以借助博士的智慧，但不可以完全依赖他。'});",
        "playground.drawCharacter({name:'char_002_amiya_7', name2:'char_130_doberm_ex', focus:1});playground.drawDialog({name:'阿米娅',text:'——我知道。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'别见外，博士，我没想刁难你。'});",
        "playground.drawDialog({name:'杜宾',text:'只是，希望你能理解——阿米娅需要更多的学习和成长。'});",
        "playground.drawDialog({name:'杜宾',text:'站在我的立场上，你也不会允许阿米娅太依靠别人的。'});",
        "playground.drawDialog({name:'杜宾',text:'不过，我已经认可了你的指挥能力。'});",
        "playground.Decision({options:[['谢谢......']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'也别那么拘谨，我们可已经是共患难的战友了。'});",
        "playground.drawDialog({name:'杜宾',text:'至少在战场，我的生命，已经交给你了。'});",
        "playground.drawDialog({name:'杜宾',text:'闲谈到此为止，抓紧时间。'});",
        "playground.drawCharacter({name:'char_148_nearl_1', name2:'char_130_doberm_ex', focus:1});playground.drawDialog({name:'临光',text:'是的。'});",
        "playground.drawDialog({name:'临光',text:'卡西米尔有句谚语：“喘息时，死亡就会追上你。”'});"
    ]
];