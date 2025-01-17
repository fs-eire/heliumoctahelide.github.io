var story = [
    [
        "bg_beach",
        "char_002_amiya_summer_2_1",
        "char_002_amiya_summer_2_2",
        "avg_npc_024",
        "char_340_shwaz_3",
        "char_340_shwaz_1",
        "char_348_ceylon_6",
        "char_348_ceylon_8",
        "char_348_ceylon_4",
        "char_340_shwaz_5",
        "bg_bridge",
        "ac3_kv"
    ],
    [
        "m_dia_street_loop",
        "m_dia_street_intro",
        "d_amb_beach",
        "d_gen_walk_n"
    ],
    [
        "voice.playMusic({intro:'m_dia_street_intro', key:'m_dia_street_loop', volume:0.8, crossfade:1.5});background.showImage({image:'bg_beach', fadetime:2,x:-200, y:0,block:true});delay(1);voice.playSound({key:'d_amb_beach', volume:0.7});playground.drawCharacter({name:'char_002_amiya_summer_2_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'阿米娅',text:'博士，这次我可要批评你了。'});",
        "playground.drawDialog({name:'阿米娅',text:'大家身上都多多少少有些轻伤，作为领队你也有责任的！'});",
        "playground.drawDialog({name:'阿米娅',text:'虽然古米已经给他们处理过了，但是下水的话，还是会影响到伤口的。'});",
        "playground.drawDialog({name:'阿米娅',text:'真是的，带队玩耍也别太过火呀......'});",
        "playground.Decision({options:[['抱歉。', '这身泳装很适合你，阿米娅。']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_summer_2_1'});playground.drawDialog({name:'阿米娅',text:'唔，我也不是想破坏博士的好心情......'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_002_amiya_summer_2_2'});playground.drawDialog({name:'阿米娅',text:'是、是这样吗？是暴行姐姐给我挑的这件泳装，我还在害怕博士会不会不喜欢——'});",
        "playground.drawCharacter({name:'char_002_amiya_summer_2_1'});playground.drawDialog({name:'阿米娅',text:`等等！不要想着岔开话题，Dr.${nickname}！`});",
        "playground.Decision({options:[['我们这次可能确实做得有些过火......']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_summer_2_1'});playground.drawDialog({name:'阿米娅',text:'真是的，我也要好好说说赫拉格先生了！'});",
        "playground.drawDialog({name:'阿米娅',text:'明明让他监督你的，结果他也对你们睁一只眼闭一只眼......'});",
        "playground.drawDialog({name:'阿米娅',text:'在没有签订合约前，罗德岛不能插手任何独立城邦的内部问题。'});",
        "playground.drawDialog({name:'阿米娅',text:'要是被卷进城邦本地的麻烦，罗德岛的处境会变得非常艰难，甚至难以脱身。'});",
        "playground.Decision({options:[['其实，我们已经......']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_summer_2_1'});playground.drawDialog({name:'阿米娅',text:'是啊，我知道的。'});",
        "playground.drawDialog({name:'阿米娅',text:'博士可真是做了件很危险的事情。'});",
        "playground.drawCharacter({name:'char_002_amiya_summer_2_2'});playground.drawDialog({name:'阿米娅',text:'——和狂热的歌迷起冲突什么的！博士好歹要有些大人样子呀。'});",
        "playground.drawDialog({name:'阿米娅',text:'再怎么喜欢一支乐队，也要和其他观众和平相处哦，更别说参与斗殴什么的了！'});",
        "playground.Decision({options:[['......？可我们是......']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_summer_2_2'});playground.drawDialog({name:'阿米娅',text:'（嘘！）'});",
        "playground.drawDialog({name:'阿米娅',text:'总之不要再问啦！整件事就是这样了！嗯！'});",
        "playground.drawDialog({name:'阿米娅',text:'下次可要好好注意哦？'});",
        "playground.Decision({options:[['我知道了。']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_summer_2_2'});playground.drawDialog({name:'阿米娅',text:'嗯！'});",
        "playground.drawDialog({name:'阿米娅',text:'博士，快来吧，我在礁石另一边发现了很多好看的贝壳！海滩什么的，好有趣呀！'});",
        "playground.drawDialog({name:'阿米娅',text:'水不凉，嗯......'});",
        "playground.Decision({options:[['（跟着阿米娅走）', '（向阿米娅泼水）', '（拉住阿米娅的手）']]});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'阿米娅',text:'来，博士，这里走！'});",
        "predicate = ['2'];",
        "playground.drawDialog({name:'阿米娅',text:'哎！博士！别这样！'});",
        "playground.drawDialog({name:'阿米娅',text:'可恶！看招！哈哈哈哈......'});",
        "predicate = ['3'];",
        "playground.drawDialog({name:'阿米娅',text:'嘿嘿......'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'avg_npc_024'});playground.drawDialog({name:'赫尔曼',text:`Dr.${nickname}，你来了。`});",
        "playground.drawDialog({name:'赫尔曼',text:'我听锡兰说了你们罗德岛的事情，我很想跟你聊聊。'});",
        "playground.drawDialog({name:'赫尔曼',text:'如何，就陪我出去走走吧。'});",
        "playground.Decision({options:[['......好的。']]});",
        "predicate = ['1'];",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_beach',x:200, y:0});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'avg_npc_024'});playground.drawDialog({name:'赫尔曼',text:'感谢你，罗德岛的博士。'});",
        "playground.drawDialog({name:'赫尔曼',text:'这次如果没有你的帮助，小女的鲁莽行动恐怕只会惨淡收场。'});",
        "playground.Decision({options:[['那不是鲁莽。', '我并没有做太多的事情。', '你应该感谢的人是锡兰才对。']]});",
        "predicate = ['1', '2', '3'];",
        "playground.drawDialog({name:'赫尔曼',text:'克洛宁是我一手栽培起来的，他有野心，但也有这个能力，所以我这些年对他的一些小动作总是睁一只眼闭一只眼。'});",
        "playground.drawDialog({name:'赫尔曼',text:'但是，这几年，他有些走偏了，我对他并不放心。'});",
        "playground.drawDialog({name:'赫尔曼',text:'这一次，借着前往新开发区的机会，我留下黑，也是想让她看看这小子还能不能用。'});",
        "playground.drawDialog({name:'赫尔曼',text:'结果很遗憾。'});",
        "playground.Decision({options:[['为什么和我说这些？']]});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'赫尔曼',text:'......我很喜欢沿着这片海滩散步。'});",
        "playground.drawDialog({name:'赫尔曼',text:'因为，芭芭拉——我的妻子，她就沉睡在这片海里。'});",
        "playground.drawDialog({name:'赫尔曼',text:'我还记得那一天，天气有点热，夕阳很好，就在这里，她和我说，“要是我们能永远生活在这里就好了”。'});",
        "playground.drawDialog({name:'赫尔曼',text:'转眼，就只留下了我一个人。'});",
        "playground.drawDialog({name:'赫尔曼',text:'博士，回头看看。'});",
        "playground.drawDialog({name:'赫尔曼',text:'你能明白吗？这座城市是我为她打造的天堂。'});",
        "playground.drawDialog({name:'赫尔曼',text:'而我为什么要告诉你这些......'});",
        "playground.drawDialog({name:'赫尔曼',text:'因为我看得出，你和我是同一种人。'});",
        "playground.drawDialog({name:'赫尔曼',text:'这个世界上，有些事不是靠好的那些东西就能解决的，有时候，必须借助一些所谓不好的东西。'});",
        "playground.Decision({options:[['我是。', '我不是。', '谁知道呢。']]});",
        "predicate = ['1', '2', '3'];",
        "playground.drawDialog({name:'赫尔曼',text:'对我来说，善良与否在很久以前就没有任何意义了，有的只有结果，有的只有这座城市。'});",
        "playground.Decision({options:[['为什么不告诉锡兰？']]});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'赫尔曼',text:'我不是来寻求理解的，博士。'});",
        "playground.drawDialog({name:'赫尔曼',text:'我如果需要我女儿的理解，我和她就不会是现在这个样子。'});",
        "playground.drawDialog({name:'赫尔曼',text:'而且，告诉了她她就会理解吗？'});",
        "playground.drawDialog({name:'赫尔曼',text:'不会的，她还要很长时间才会理解，这个世界不是她想的那样条理有序。'});",
        "playground.drawDialog({name:'赫尔曼',text:'黑希望她永远不会理解，而我......很遗憾，我失去了选择的机会。'});",
        "playground.drawDialog({name:'赫尔曼',text:'博士，锡兰她想要加入你们，我让黑和她一起去，这些我都允许。'});",
        "playground.drawDialog({name:'赫尔曼',text:'因为这座汐斯塔已经不再是她的天堂了。'});",
        "playground.drawDialog({name:'赫尔曼',text:'我已经看过新的地质报表了。照这样下去，汐斯塔迟早会在迸发的岩浆中落下帷幕。'});",
        "playground.drawDialog({name:'赫尔曼',text:'我们推迟了那一天的到来。对你们今天的努力，我表示感激。'});",
        "playground.drawDialog({name:'赫尔曼',text:'这些年来我一直在寻找彻底解决这件事的办法。我找到了，但代价也很一样巨大。'});",
        "playground.drawDialog({name:'赫尔曼',text:'我一直投入精力的高新区，那将会是一座全新的移动城市，现在看来，那将会成为新的汐斯塔。'});",
        "playground.drawDialog({name:'赫尔曼',text:'我对这里的执着很深，但这并不意味着我会对身旁浅睡的火山熟视无睹。'});",
        "playground.drawDialog({name:'赫尔曼',text:'这次黑曜石节结束后，我们将迁进移动城市；现在的汐斯塔城将会被我们抛弃，迟早淹没在滚热的岩浆中。'});",
        "playground.Decision({options:[['那黑曜石节......']]});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'赫尔曼',text:'据说这片海洋有着它的边界。也有人对我说过，这里不是真正的大海，它的边界也许宽广，却有尽头。'});",
        "playground.drawDialog({name:'赫尔曼',text:'那么我们会环着这片海走下去。或许有一天，我们会真正回到起点。'});",
        "playground.drawDialog({name:'赫尔曼',text:'只是，这座有着美丽海滩和盛大的黑曜石节，以及这座能感受到火山气息的海滨城市本身——'});",
        "playground.drawDialog({name:'赫尔曼',text:'这座有着无数汐斯塔人回忆的汐斯塔，终究是不复存在了。'});",
        "playground.drawDialog({name:'赫尔曼',text:'也许有一天，你可以把我说的这些告诉她。'});",
        "playground.drawDialog({name:'赫尔曼',text:'你也可以永远都不告诉她。'});",
        "playground.drawDialog({name:'赫尔曼',text:'而有一天，当她需要一些帮助时，你可以来找我。'});",
        "playground.drawDialog({name:'赫尔曼',text:'无论汐斯塔在哪里，变换成何种模样，这座城市，永远会是她的后盾。'});",
        "playground.drawDialog({name:'赫尔曼',text:'不——该这么说。只要汐斯塔人还在，汐斯塔就永远在。她们这些年轻人才是真正的汐斯塔。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.5, block:true});playground.drawCharacter({});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'avg_npc_024'});playground.drawDialog({name:'赫尔曼',text:'趁现在，好好享受这次的黑曜石节吧。'});",
        "playground.drawDialog({name:'赫尔曼',text:'至少在找到新的理想场地之前，我们只能搁置和塞壬唱片之间的合作啦。我该去和他们好好谈谈了。'});",
        "playground.drawDialog({name:'赫尔曼',text:'黑似乎也有话想跟你说，她在那边。'});",
        "playground.drawDialog({name:'赫尔曼',text:'如果我说太多，她就更没话可说了。让她自己和你说吧。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_340_shwaz_3',fadetime:1,block:true});voice.playSound({key:'d_gen_walk_n'});delay(1);playground.drawDialog({name:'黑',text:'......老爷。'});",
        "playground.drawCharacter({name:'avg_npc_024'});playground.drawDialog({name:'赫尔曼',text:'别介意。之后是你们年轻人的事情了。'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_340_shwaz_1'});playground.drawDialog({name:'黑',text:'你好。'});",
        "playground.Decision({options:[['你的目的是什么？', '你好，陌生人？', '要不要喝一杯？']]});",
        "predicate = ['1'];",
        "playground.drawDialog({name:'黑',text:'不用紧张，我已经不是你的敌人了。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_340_shwaz_1'});playground.drawDialog({name:'黑',text:'呵，你好，陌生人。'});",
        "predicate = ['3'];",
        "playground.drawDialog({name:'黑',text:'现在就免了。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawDialog({name:'黑',text:'其实，也没有什么特别的。'});",
        "playground.drawDialog({name:'黑',text:'原本我是想教训你一顿的。小姐不该遇到这种危险。'});",
        "playground.drawDialog({name:'黑',text:'但我也要谢谢你。没有你，我和小姐也许永远没法解开误会。'});",
        "playground.drawDialog({name:'黑',text:'我一厢情愿地不想让她触碰这些事情，但也许你才是对的，她有自己的想法，也有自己的责任。'});",
        "playground.Decision({options:[['你不该替她做决定。', '时光无法倒流，她已经是现在这样。', '那真是对不起咯？']]});",
        "predicate = ['1', '2', '3'];",
        "playground.drawDialog({name:'黑',text:'......谢谢你。如果不是你，我所珍视的一切都会被这座火山吞没。'});",
        "playground.drawDialog({name:'黑',text:'我欠了你很多。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_348_ceylon_6'});playground.drawDialog({name:'锡兰',text:'博士！'});",
        "playground.drawCharacter({name:'char_348_ceylon_8'});playground.drawDialog({name:'锡兰',text:'咦，黑也在这儿吗？'});",
        "playground.drawCharacter({name:'char_348_ceylon_8',name2:'char_340_shwaz_1',focus:2});playground.drawDialog({name:'黑',text:'......小姐？'});",
        "playground.drawCharacter({name:'char_348_ceylon_6',name2:'char_340_shwaz_1',focus:1});playground.drawDialog({name:'锡兰',text:'正好，我有一件重要的事要向你们宣布！'});",
        "playground.drawDialog({name:'锡兰',text:'我啊，准备向罗德岛投一份简历。'});",
        "playground.Decision({options:[['？！']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_348_ceylon_6'});playground.drawDialog({name:'锡兰',text:'之前我也说过吧，我本来就对你们公司有意向。'});",
        "playground.Decision({options:[['要加入我们可不轻松。']]});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_348_ceylon_4'});playground.drawDialog({name:'锡兰',text:'嗯哼，我已经问过艾雅法拉小姐和天火小姐了，她们表示以我的能力绝对没有问题的。'});",
        "playground.drawDialog({name:'锡兰',text:'这次事情也让我看到了你们的实力，所以经过深思熟虑，做出了这个决定。'});",
        "playground.drawCharacter({name:'char_348_ceylon_4',name2:'char_340_shwaz_1',focus:2});playground.drawDialog({name:'黑',text:'但是罗德岛不是一家单纯的制药公司......'});",
        "playground.drawCharacter({name:'char_348_ceylon_6',name2:'char_340_shwaz_1',focus:1});playground.drawDialog({name:'锡兰',text:'所以我要你跟我一起去。'});",
        "playground.drawDialog({name:'锡兰',text:'顺便一提，爸爸那边也已经同意了。'});",
        "playground.drawCharacter({name:'char_348_ceylon_6',name2:'char_340_shwaz_5',focus:2});playground.drawDialog({name:'黑',text:'......我知道了，如你所愿，小姐。'});",
        "playground.drawCharacter({name:'char_348_ceylon_6'});playground.drawDialog({name:'锡兰',text:'所以说呢，博士，从今往后，可就要请多关照啦。'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_bridge',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:1, block:true});playground.drawDialog({name:'锡兰',text:'博士，快过来！实验要开始了！'});",
        "playground.drawDialog({name:'锡兰',text:'哎，算了，黑，快去把博士扛过来！'});",
        "playground.drawDialog({name:'黑',text:'.....我想博士也不至于听不到你这能够把天花板震翻的嗓音，小姐。'});",
        "playground.drawDialog({name:'黑',text:'......博士，虽然不知道你还在等什么，不过现在这种状况，小姐是不会在乎你我在想什么的。'});",
        "playground.drawDialog({name:'黑',text:'还是麻烦你自己走过去吧。如果真要我扛着你去的话，可能会不太雅观。'});",
        "playground.Decision({options:[['这就来！', '......', '我会好好盯着她的，放心吧。']]});",
        "predicate = ['1', '2', '3'];",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:3, block:true});background.showImage({});playground.drawCharacter({fadetime:0});playground.drawImage({image:'ac3_kv',x:0, y:0, xscale:1, yscale:1, fadetime:0, screenadapt:'coverall'});blocker.blocker({a:0, fadetime:3, block:false});playground.drawDialog({name:'黑',text:'嗯。'});",
        "playground.drawDialog({name:'黑',text:'小姐请等等，我们这就来。'});",
        "playground.drawDialog({name:'黑',text:'走吧，博士。'});"
    ]
];