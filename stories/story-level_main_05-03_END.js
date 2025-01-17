var story = [
    [
        "char_1002_nsabr_1",
        "char_136_hsguma",
        "bg_uptown_2",
        "char_015_lmg",
        "char_010_chen_1",
        "bg_storehouse",
        "char_010_chen_4",
        "bg_5_3end1",
        "avg_npc_013",
        "bg_5_3end2"
    ],
    [
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro",
        "d_gen_walk_n",
        "d_gen_soldiersrun",
        "d_gen_transmissionget"
    ],
    [
        "voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.8, crossfade:1.5, delay:0.5});delay(1);playground.drawCharacter({name:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'为什么都跑了！'});",
        "playground.drawDialog({name:'整合运动成员',text:'用法术攻击她啊！为什么要逃跑？！'});",
        "playground.drawDialog({name:'整合运动成员',text:'别，别跑！她，她过来了！拦住她啊？'});",
        "playground.drawDialog({name:'整合运动成员',text:'其他人都去哪了？为什么......'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_136_hsguma',fadetime:1,block:true});delay(1);playground.drawDialog({name:'星熊',text:'只剩你了。'});",
        "playground.drawCharacter({name:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'呃，呃......'});",
        "playground.drawDialog({name:'整合运动成员',text:'鬼......救，救命......'});",
        "playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'......就这样也想阻拦我？'});",
        "playground.drawCharacter({name:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'不，我，不......'});",
        "playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'就这样——也想阻拦我？'});",
        "playground.drawCharacter({name:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'饶了我，饶了我吧！'});",
        "playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'你不配被这面般若享用。'});",
        "playground.drawCharacter({name:'char_1002_nsabr_1'});playground.drawDialog({name:'整合运动成员',text:'咿，咿咿咿咿！！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2,block:true});delay(0.3);playground.drawCharacter({});background.showImage({screenadapt:'coverall', image:'bg_uptown_2'});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_015_lmg'});playground.drawDialog({name:'近卫局成员',text:'丢，我们甚至还没来得及发动攻击。'});",
        "playground.drawDialog({name:'近卫局成员',text:'一个人，两分半钟，她根本是一个人解决了所有整合运动。'});",
        "playground.drawDialog({name:'近卫局成员',text:'真是条恶鬼。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'char_015_lmg',focus:1});playground.drawDialog({name:'陈',text:'庆幸你没在五年前遇见她吧。我也很久没见她这样了。'});",
        "playground.drawDialog({name:'陈',text:'其他逃窜的整合运动呢？'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'char_015_lmg',focus:2});playground.drawDialog({name:'近卫局成员',text:'已被各小队分头抓获。'});",
        "playground.drawDialog({name:'近卫局成员',text:'......陈sir，星熊督察她好像在向你招手。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1,block:true});playground.drawCharacter({});delay(0.3);voice.playSound({key:'d_gen_soldiersrun',volume:0.5});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'医师，跟我来！'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'char_136_hsguma',focus:1});playground.drawDialog({name:'陈',text:'星熊，你刚才还向那些整合运动问了什么？'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'char_136_hsguma',focus:2});playground.drawDialog({name:'星熊',text:'问他们仓库是不是陷阱。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'char_136_hsguma',focus:1});playground.drawDialog({name:'陈',text:'如果全部都是爆破物的话——'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'char_136_hsguma',focus:2});playground.drawDialog({name:'星熊',text:'我就把他们一个一个丢进去。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'char_136_hsguma',focus:1});playground.drawDialog({name:'陈',text:'所以呢？'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'char_136_hsguma',focus:2});playground.drawDialog({name:'星熊',text:'没有。阿发被埋伏了以后才逃进去的。整合运动他们原本就埋伏在附近。'});",
        "playground.drawDialog({name:'星熊',text:'老陈，你拉右边门。我拉左边。'});",
        "playground.clearDialog();background.cameraShake({duration:0.5, xstrength:5, ystrength:3, vibrato:30, randomness:90, fadeout:true, block:true});delay(1);playground.drawCharacter({name:'char_010_chen_1',name2:'char_136_hsguma',focus:1});playground.drawDialog({name:'陈',text:'......似乎被卡住了，怎么拉也没反应。等我划个口子出来。'});",
        "playground.drawCharacter({name:'char_136_hsguma'});playground.drawDialog({name:'星熊',text:'算了，我撕开就行。'});",
        "playground.drawDialog({name:'星熊',text:'（咆哮）！'});",
        "playground.drawCharacter({});playground.clearDialog();background.cameraShake({duration:1, xstrength:5, ystrength:3, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'开了！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2,block:true});delay(0.3);playground.drawCharacter({});background.showImage({screenadapt:'coverall', image:'bg_storehouse',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_010_chen_4'});playground.drawDialog({name:'陈',text:'XR02，告诉我你的位置！XR02！'});",
        "voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({name:'char_010_chen_4'});playground.drawDialog({name:'陈',text:'！'});",
        "playground.drawDialog({name:'陈',text:'XR02！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'线人',text:'陈sir......我听见战斗的声音，仓库大门似乎也......破了。可能是整合运动。我会处理好自己......'});",
        "playground.drawCharacter({name:'char_010_chen_4'});playground.drawDialog({name:'陈',text:'不，那是我！你别挂断！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'线人',text:'是陈sir吗？那太好了......我在......最里面。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2,block:true});delay(0.3);playground.drawCharacter({});playground.drawImage({image:'bg_5_3end1',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:2, block:true});playground.imageTween({xfrom:0, yfrom:0, xto:0, yto:0, xscalefrom:1, yscalefrom:1, xscaleto:1.15, yscaleto:1.15, duration:15, block:false});playground.drawDialog({name:'陈',text:'你的伤......你的眼睛怎么回事？'});",
        "playground.drawDialog({name:'线人',text:'不小心中了法术。没事，不妨碍，我，咳，给你东西。'});",
        "playground.drawDialog({name:'陈',text:'医师，给他止血！'});",
        "playground.drawDialog({name:'线人',text:'不。陈sir，不用了。我知道......'});",
        "playground.drawDialog({name:'陈',text:'多话！'});",
        "playground.drawDialog({name:'线人',text:'是真的。看到我中了几箭了吗？我瞎了，也不想再动了。痛，我够了。我很累。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2,block:true});delay(0.3);playground.drawCharacter({});playground.drawImage({});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_010_chen_4',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'拿好，陈sir......S249TA，F106。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'49. 位置我记住了。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'纸上是细节。整合运动渗透感染者聚落后的情报，没有发给其他头目，单线传递......一定是特殊目标。你得看看，越快越好。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'好。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'咳......我可是，花了很大功夫才拿到......算了，陈sir，我没想到会有这天。'});",
        "playground.drawDialog({name:'线人',text:'虽然我起到作用了，可我没想到会是以这种方式。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'我们都没想到。因为你的努力，我们才有机会阻止敌人。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'哈哈，咳，我没喜欢过龙门，龙门也没喜欢过我。'});",
        "playground.drawDialog({name:'线人',text:'但现在，我居然给整个龙门做了点什么，一个街头仔能做到这步，值喇。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'中水三杰也算街头仔？'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'有鬼姐在，我永远都是街头仔。'});",
        "playground.drawDialog({name:'线人',text:'......'});",
        "playground.drawDialog({name:'线人',text:'......陈sir，鬼姐她还好吗？还在当差吗？'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'还在。我和她搭档很长时间了。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'陈sir，鬼姐她......太耿直了。她在会里的时候没人，咳咳，敢动她。'});",
        "playground.drawDialog({name:'线人',text:'但她斗不过龙门的大人物。你一定得看好她。'});",
        "playground.drawDialog({name:'线人',text:'鬼姐绝对不能丢架，龙门那些趾高气扬的富人别想因为她的出身欺侮她！'});",
        "playground.drawDialog({name:'线人',text:'我只求你这一件事。就这一件。咳......'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'不会的。星熊很强，没人能动得了她。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'双拳难敌四手。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'整个近卫局都撑她。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'那好，太好了，鬼姐，有陈sir在，我们都放心了。'});",
        "playground.drawDialog({name:'线人',text:'陈sir，你还在吗？'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'在。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'我算不算是个好人？'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'几年前，不好说。但现在你确实是。你是龙门引以为豪的好公民。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'哈哈哈，咳，哈哈......矿石病衰仔也能是好人了？'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'有些龙门人会纠结矿石病，但你不如问问龙门城。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'怎么，我问它，它难道还会回答吗？'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'哈，我替它回答吧。'});",
        "playground.drawDialog({name:'陈',text:'“我不在乎。”'});",
        "playground.drawDialog({name:'陈',text:'阿发，你一直是、也永远是个龙门人。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'谢谢你，陈sir. 谢谢你。'});",
        "playground.drawDialog({name:'线人',text:'陈sir，有两句话，我想你带给鬼姐。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'陈',text:'你自己和她说。'});",
        "playground.drawCharacter({name:'char_010_chen_1',name2:'avg_npc_013',focus:2});playground.drawDialog({name:'线人',text:'什么意思？你是说......'});",
        "playground.drawCharacter({name:'avg_npc_013'});playground.drawDialog({name:'线人',text:'......大姐？'});",
        "playground.drawCharacter({name:'char_136_hsguma',name2:'avg_npc_013',focus:1});playground.drawDialog({name:'星熊',text:'啊。在这儿。'});",
        "playground.drawCharacter({name:'avg_npc_013'});playground.drawDialog({name:'线人',text:'陈sir，你该早说。'});",
        "playground.drawCharacter({name:'char_010_chen_1'});playground.drawDialog({name:'陈',text:'她自己不出声。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2,block:true});delay(0.3);playground.drawCharacter({});playground.drawImage({image:'bg_5_3end2',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:2, block:true});playground.drawDialog({name:'线人',text:'大姐，我做得好吗？'});",
        "playground.drawDialog({name:'星熊',text:'还不够。你得活下来才算做得好。'});",
        "playground.drawDialog({name:'线人',text:'对唔住，哈哈......能被大姐背一回，我已经值了。'});",
        "playground.drawDialog({name:'星熊',text:'你想去哪？你从来都不肯告诉我你是从哪来的。'});",
        "playground.drawDialog({name:'线人',text:'就龙门。其实吧，我根本没去过其他城市。如果可以的话，把我的骨灰埋在以前那个地方就行。'});",
        "playground.drawDialog({name:'星熊',text:'总坛？可......那地方已经彻底荒废了。一塌糊涂，我都不知道该怎么打扫。'});",
        "playground.drawDialog({name:'线人',text:'没关系的。只要和其他人......放在一起。'});",
        "playground.drawDialog({name:'星熊',text:'好。'});",
        "playground.drawDialog({name:'线人',text:'大姐......虽然我们一直都怕你，但我们其实......都撑你。'});",
        "playground.drawDialog({name:'线人',text:'一直......都......撑你......'});",
        "playground.drawDialog({name:'星熊',text:'我也是。'});"
    ]
];