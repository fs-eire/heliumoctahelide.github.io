var story = [
    [
        "bg_forest",
        "avg_npc_010",
        "char_220_grani_3",
        "avg_npc_003",
        "char_220_grani_1",
        "char_263_skadi_1",
        "char_220_grani_2",
        "char_263_skadi_2",
        "char_220_grani_4",
        "char_220_grani_5",
        "avg_npc_008",
        "avg_npc_007"
    ],
    [
        "m_dia_street_loop",
        "m_dia_street_intro",
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro",
        "d_gen_walk_n",
        "e_skill_skulsrsword",
        "m_bat_indust_loop",
        "m_bat_indust_intro",
        "d_gen_soldiersrun",
        "e_atk_arrow_h",
        "b_char_defboost"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();playground.drawCharacter({});background.showImage({});delay(2);playground.drawDialog({name:'赏金猎人',text:'咕......'});",
        "playground.drawDialog({name:'赏金猎人',text:'你，你把我的同伴，全干掉了？'});",
        "delay(1);playground.clearDialog();playground.drawCharacter({});playground.drawDialog({name:'赏金猎人',text:'......别、别过来啊！求你了！'});",
        "playground.drawDialog({name:'赏金猎人',text:'我、我把金币都给你！我把我的武器给你！你要什么我都——'});",
        "playground.drawDialog({name:'？？？',text:'那个女孩子在哪里。'});",
        "playground.drawDialog({name:'赏金猎人',text:'你在说什么——？？'});",
        "playground.drawDialog({name:'赏金猎人',text:'别靠近我——！'});",
        "playground.drawDialog({name:'赏金猎人',text:'你这个——'});",
        "playground.clearDialog();delay(1);playground.drawDialog({name:'',text:'晴 \\ 能见度 14公里'});",
        "playground.drawDialog({name:'',text:'塔拉特山前森林'});",
        "background.showImage({image:'bg_forest', fadetime:2});delay(1);voice.playMusic({intro:'m_dia_street_intro', key:'m_dia_street_loop', volume:0.6,crossfade:1});playground.drawCharacter({name:'avg_npc_010',fadetime:1});delay(1);playground.drawDialog({name:'大鲍勃',text:'......这块石头......'});",
        "playground.drawDialog({name:'大鲍勃',text:'你们两个，跟上。小心脚底，跟着我的脚印走，手也不要到处摸。'});",
        "playground.drawDialog({name:'大鲍勃',text:'这片森林，恐怕比你我想的还要危险。'});",
        "playground.drawCharacter({name:'char_220_grani_3'});playground.drawDialog({name:'格拉尼',text:'石头上是不是刻了什么？'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_3',focus:1});playground.drawDialog({name:'大鲍勃',text:'这是赏金猎人留下的符号。不按照符号指示行动的话，就会踩进设置好的陷阱。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_3',focus:2});playground.drawDialog({name:'格拉尼',text:'我们要直接躲开陷阱吗？'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'看我的吧。'});",
        "playground.drawDialog({name:'大鲍勃',text:'——绊索加捕兽夹，老土的小把戏。'});",
        "blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1.5, block:true});playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:0, fadetime:1.5, block:true});playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'树丛恰好挡住了摆锤，一旦贸然前进就会被击中。'});",
        "playground.drawDialog({name:'大鲍勃',text:'那里，可萝尔小姐，小心点。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:2});playground.drawDialog({name:'可萝尔',text:'嗯，嗯？'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:1});playground.drawDialog({name:'大鲍勃',text:'你再向前走一步，大概就会掉进满是尖头的深坑了。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'avg_npc_003',focus:2});playground.drawDialog({name:'可萝尔',text:'啊......！'});",
        "playground.drawCharacter({name:'char_220_grani_3'});playground.drawDialog({name:'格拉尼',text:'不愧是赏金猎人，很擅长这些嘛。'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'那当然，毕竟我以前——'});",
        "playground.drawDialog({name:'大鲍勃',text:'......'});",
        "playground.drawDialog({name:'大鲍勃',text:'想要绕开陷阱是不现实的。果然，还是要全部解除掉才方便行动。'});",
        "playground.drawDialog({name:'大鲍勃',text:'毕竟他们最危险的道路，马上就会变成对我们来说最安全的那种了。'});",
        "playground.drawDialog({name:'大鲍勃',text:'走吧。'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.6, block:true});voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.6, crossfade:1.5});playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'停下。'});",
        "playground.drawDialog({name:'大鲍勃',text:'不太对劲。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_1',focus:2});playground.drawDialog({name:'格拉尼',text:'是陷阱？'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_1',focus:1});playground.drawDialog({name:'大鲍勃',text:'不。'});",
        "playground.drawDialog({name:'大鲍勃',text:'沾血的符号......'});",
        "playground.drawDialog({name:'大鲍勃',text:'“——怪物？”'});",
        "playground.drawDialog({name:'大鲍勃',text:'这什么意思？这么多年来，我都没见过有人用过这个符号。'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_1',focus:2});playground.drawDialog({name:'格拉尼',text:'......啊。'});",
        "playground.drawDialog({name:'格拉尼',text:'不会吧......'});",
        "playground.drawCharacter({});playground.drawDialog({name:'赏金猎人',text:'怪物，怪物！'});",
        "playground.drawDialog({name:'赏金猎人',text:'别，别过来！'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_263_skadi_1',fadetime:1});delay(2);playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'......'});",
        "playground.drawCharacter({name:'char_263_skadi_1'});playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawCharacter({name:'char_220_grani_2'});playground.drawDialog({name:'格拉尼',text:'真的是你啊！'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_3',focus:2});playground.drawDialog({name:'格拉尼',text:'斯卡蒂，你是斯卡蒂，没错吧？'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_3',focus:1});playground.drawDialog({name:'斯卡蒂',text:'——原来滴水村村长是和你在一起？'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_1',focus:2});playground.drawDialog({name:'格拉尼',text:'啊，什么？你认识可萝尔.....'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_1',focus:1});playground.drawDialog({name:'斯卡蒂',text:'把她交给我。现在。'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'格拉尼，她的眼神，不太对啊。'});",
        "playground.drawCharacter({name:'char_220_grani_4'});playground.drawDialog({name:'格拉尼',text:'那可不行，我们应该谈——'});",
        "playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'欸，欸？'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({});voice.playSound({key:'e_skill_skulsrsword',volume:0.5,block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'呜啊！'});",
        "voice.playMusic({intro:'m_bat_indust_intro', key:'m_bat_indust_loop', volume:0.6, crossfade:1.5});playground.drawCharacter({name:'char_263_skadi_2'});playground.drawDialog({name:'斯卡蒂',text:'这只是警告。'});",
        "playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'不，可萝尔小姐，鲍勃大叔.....'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_1',focus:1});playground.drawDialog({name:'大鲍勃',text:'她，她怎么会攻击你？'});",
        "playground.drawDialog({name:'大鲍勃',text:'你不是认识她，她怎么就——'});",
        "playground.drawCharacter({name:'avg_npc_010',name2:'char_220_grani_1',focus:2});playground.drawDialog({name:'格拉尼',text:'别问那么多了！快，快跑！'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'e_skill_skulsrsword',volume:0.5,block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.clearDialog();voice.playSound({key:'d_gen_soldiersrun',volume:0.6});blocker.blocker({a:0, fadetime:2, block:true});delay(1);playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'哈，哈，她还在追着我们跑吗？？'});",
        "playground.drawCharacter({name:'avg_npc_003'});playground.drawDialog({name:'可萝尔',text:'格，格拉尼，我，我跑不动了......'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'那个女人，真的，是怪物吧？她甚至，都没在喘气啊！'});",
        "playground.drawCharacter({});playground.drawCharacter({name:'char_263_skadi_2',fadetime:1});delay(2);voice.playSound({key:'d_gen_walk_n'});playground.drawDialog({name:'斯卡蒂',text:'为什么我要陪你们浪费时间？'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'e_skill_skulsrsword',volume:0.5,block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'她真的要砍了我，啊不，她要拿可萝尔小姐干什么！'});",
        "playground.drawCharacter({name:'avg_npc_003'});playground.drawDialog({name:'可萝尔',text:'她的眼睛，好，好红.....格，格拉尼！'});",
        "playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'不行了不行了，为什么还会有这种事啊！'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'停！'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'埋伏！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'“上尉”',text:'就是现在！放箭！'});",
        "blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'e_atk_arrow_h'});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'e_atk_arrow_h'});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_263_skadi_2'});playground.drawDialog({name:'斯卡蒂',text:'嗯？'});",
        "playground.drawCharacter({name:'avg_npc_008'});playground.drawDialog({name:'“上尉”',text:'就是她，那个突袭我们的灾星！快，快射她！'});",
        "blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'e_atk_arrow_h'});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'e_atk_arrow_h'});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'你们给我住手！'});",
        "playground.drawCharacter({name:'avg_npc_008'});playground.drawDialog({name:'“上尉”',text:'你小子想干什么？'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'虽然不知道为什么她要追我，但好歹也是我的同事！'});",
        "playground.drawCharacter({name:'avg_npc_008'});playground.clearDialog();voice.playSound({key:'b_char_defboost'});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawDialog({name:'“上尉”',text:'为、为什么要坏我的事！混账——！'});",
        "playground.drawCharacter({name:'char_263_skadi_2'});playground.drawDialog({name:'斯卡蒂',text:'......'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'趁现在，快点走！'});",
        "playground.drawCharacter({name:'avg_npc_010'});playground.drawDialog({name:'大鲍勃',text:'——向东突围！走！'});",
        "playground.drawCharacter({name:'avg_npc_007',name2:'avg_npc_007'});playground.drawDialog({name:'赏金猎人',text:'别想逃出去！受死吧怪物！！'});",
        "playground.drawCharacter({name:'char_263_skadi_2'});playground.drawDialog({name:'斯卡蒂',text:'（阿戈尔语）滚开!'});"
    ]
];