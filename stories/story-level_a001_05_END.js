var story = [
    [
        "bg_caveentrance",
        "char_220_grani_5",
        "avg_npc_007",
        "char_220_grani_1",
        "char_263_skadi_2",
        "char_220_grani_3",
        "char_220_grani_2",
        "bg_cave_2",
        "char_1002_nsabr_1",
        "char_1002_nsabr_2",
        "avg_npc_010_2"
    ],
    [
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro",
        "b_char_defboost",
        "e_skill_skulsrsword",
        "d_sp_ballista",
        "d_gen_walk_n",
        "d_gen_soldiersrun",
        "m_bat_indust_loop",
        "m_bat_indust_intro"
    ],
    [
        "background.showImage({image:'bg_caveentrance', fadetime:1});voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.6, crossfade:1.5});delay(1);voice.playSound({key:'b_char_defboost'});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'呃......！'});",
        "playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'赏金猎人',text:'你，你这个碍事的混蛋小子！'});",
        "playground.drawDialog({name:'赏金猎人',text:'都、都头破血流成这样了，还敢在这挡我们的好事——！'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'区区这点伤，连日常训练都算不上！'});",
        "playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'b_char_defboost'});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});voice.playSound({key:'b_char_defboost'});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'赏金猎人',text:'咕——'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'还剩多少人？'});",
        "playground.drawDialog({name:'格拉尼',text:'算了，记不清了，反正已经全都挡住——'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.5, block:true});voice.playSound({key:'e_skill_skulsrsword',volume:0.5,block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});blocker.blocker({a:0, fadetime:0.5, block:true});playground.clearDialog();playground.drawCharacter({name:'char_220_grani_1'});delay(0.7);background.cameraShake({duration:3, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'发、发生地震了？'});",
        "playground.clearDialog();voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:1, r:0.95, g:0.95, b:0.95, fadetime:0.2, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:1.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'欸？那边的山岩怎么崩塌了？'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:0, fadetime:0.5, block:true});playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_263_skadi_2',fadetime:1});delay(3);playground.drawDialog({name:'斯卡蒂',text:'......'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:0, fadetime:0.5, block:true});playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'骗人的吧？她居然打破了那么厚的石壁？'});",
        "playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:0, fadetime:0.5, block:true});playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'赏金猎人',text:'入口被打开了一条新的路！赶紧进去！'});",
        "voice.playSound({key:'d_gen_soldiersrun'});playground.drawCharacter({});playground.clearDialog();playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'糟了，那些人一定会从斯卡蒂打出的通道涌进来！'});",
        "playground.drawDialog({name:'格拉尼',text:'得赶快去帮可——'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'斯卡蒂',text:'站住。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'斯卡蒂——'});",
        "playground.drawCharacter({name:'char_220_grani_1'});voice.playSound({key:'e_skill_skulsrsword',volume:0.5,block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'......'});",
        "playground.drawDialog({name:'格拉尼',text:'居然能直接破坏山体，强行穿过去，罗德岛的异闻果然是真的啊。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'斯卡蒂',text:'那个女孩在哪？'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'我不能告诉你。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'斯卡蒂',text:'盯上那东西的人不止我一个。'});",
        "playground.drawDialog({name:'斯卡蒂',text:'难道我非要把你好好教训一顿，你才不会碍事？'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'你突然就要带走可萝尔，我怎么也不能轻易把她交给你啊！'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'斯卡蒂',text:'你要......阻碍罗德岛的任务？'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'你也没告诉我罗德岛给你分配了什么任务啊！'});",
        "playground.drawDialog({name:'格拉尼',text:'除非你......'});",
        "playground.drawCharacter({name:'char_220_grani_5'});voice.playSound({key:'e_skill_skulsrsword',volume:0.5,block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_1',focus:2});playground.drawDialog({name:'格拉尼',text:'不要突然攻击同伴啊！'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_1',focus:1});playground.drawDialog({name:'斯卡蒂',text:'谁是你的同伴？'});",
        "playground.drawDialog({name:'斯卡蒂',text:'我最后一次问，带我去见那个女孩。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'只要她还是我的委托人，我就绝不会这么做。'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'斯卡蒂',text:'......'});",
        "playground.clearDialog();playground.drawCharacter({name:'char_263_skadi_2'});voice.playSound({key:'e_skill_skulsrsword',volume:0.5,block:true});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_220_grani_5'});voice.playSound({key:'b_char_defboost'});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'呜呃......'});",
        "playground.drawDialog({name:'格拉尼',text:'可恶，她只是用剑随手碰了下我的枪而已啊，可我的胳膊好像要断了......'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'斯卡蒂',text:'只凭你这种能力，你真的认为自己保护得了她？'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'能不能做到，和去不去做是两回事！'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:1});playground.drawDialog({name:'斯卡蒂',text:'————'});",
        "voice.stopMusic({fadetime:2});playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_5',focus:2});playground.drawDialog({name:'格拉尼',text:'嗯？先等等！'});",
        "playground.drawDialog({name:'格拉尼',text:'小心！'});",
        "playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'b_char_defboost'});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:1, r:0.95, g:0.95, b:0.95, fadetime:0.2, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:30, fadeout:true, block:true});voice.playMusic({intro:'m_bat_indust_intro', key:'m_bat_indust_loop', volume:0.6, crossfade:1.5});playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'赏金猎人',text:'嘁，这下总该打中了吧！'});",
        "playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'粗暴的赏金猎人',text:'好像有，不对，好像没有！那家伙还好好的！'});",
        "playground.drawCharacter({});playground.clearDialog();playground.drawCharacter({name:'char_263_skadi_2',fadetime:1});playground.drawDialog({name:'斯卡蒂',text:'......又来？'});",
        "playground.drawCharacter({name:'avg_npc_007',name2:'avg_npc_007',focus:1});playground.drawDialog({name:'赏金猎人',text:'呃......！'});",
        "playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'粗暴的赏金猎人',text:'灾、灾星！把上尉打伤的，就是你吧！你今天就别想从这里——'});",
        "playground.drawCharacter({name:'char_220_grani_3'});playground.drawDialog({name:'格拉尼',text:'好机会，趁现在！'});",
        "playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'赏金猎人',text:'你也别想过去！'});",
        "playground.drawCharacter({name:'char_220_grani_2'});playground.drawDialog({name:'格拉尼',text:'你们还是想想办法先拦住她吧！'});",
        "playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'b_char_defboost'});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});blocker.blocker({a:0, r:0.95, g:0.95, b:0.95, fadetime:0.25, block:true});background.cameraShake({duration:0.6, xstrength:5, ystrength:8, vibrato:30, randomness:90, block:true});playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'赏金猎人',text:'——咦？'});",
        "playground.drawDialog({name:'赏金猎人',text:'什么情况？！那个小个子，从我们头上跳过去了？'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_2',focus:2});playground.drawDialog({name:'格拉尼',text:'斯卡蒂，我先走一步了！'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_2',focus:1});playground.drawDialog({name:'斯卡蒂',text:'你......'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_2',focus:2});playground.drawDialog({name:'格拉尼',text:'不好意思！等你想清楚，准备告诉我事实了，我再考虑可萝尔的事！'});",
        "playground.drawCharacter({name:'char_263_skadi_2',name2:'char_220_grani_2',focus:1});playground.drawDialog({name:'斯卡蒂',text:'站住，你去哪里！'});",
        "playground.drawCharacter({name:'char_220_grani_3'});playground.drawDialog({name:'格拉尼',text:'抱歉！'});",
        "voice.playSound({key:'d_gen_soldiersrun',volume:0.5});playground.drawCharacter({name:'avg_npc_007',name2:'avg_npc_007',focus:2});playground.drawDialog({name:'粗暴的赏金猎人',text:'你怎么就放她走了！'});",
        "playground.drawCharacter({name:'avg_npc_007',name2:'avg_npc_007',focus:1});playground.drawDialog({name:'赏金猎人',text:'她跑得太快了，我们追不上她啊！'});",
        "playground.drawCharacter({name:'char_263_skadi_2'});playground.drawDialog({name:'斯卡蒂',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_007'});playground.drawDialog({name:'粗暴的赏金猎人',text:'没事，这不是还有一个吗。'});",
        "playground.drawDialog({name:'粗暴的赏金猎人',text:'你个子那么大，不可能也跳过去吧？'});",
        "playground.drawCharacter({name:'char_263_skadi_2'});playground.drawDialog({name:'斯卡蒂',text:'你们完蛋了。'});",
        "playground.drawCharacter({});playground.clearDialog();voice.stopMusic({fadetime:3});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.clearDialog();background.showImage({});background.showImage({image:'bg_cave_2', fadetime:1});voice.stopMusic({fadetime:1});blocker.blocker({a:0, fadetime:2, block:true});voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_220_grani_5',fadetime:2});voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.6, crossfade:1.5});delay(2);playground.drawDialog({name:'格拉尼',text:'岔路好多啊。这里就是可萝尔所说的墓穴了吧。'});",
        "playground.drawDialog({name:'格拉尼',text:'呃，赏金猎人——'});",
        "playground.drawCharacter({});playground.drawDialog({name:'赏金猎人',text:'咕......救命......'});",
        "playground.drawDialog({name:'赏金猎人',text:'......'});",
        "playground.drawCharacter({name:'char_220_grani_1'});playground.drawDialog({name:'格拉尼',text:'太惨了吧？'});",
        "playground.drawDialog({name:'格拉尼',text:'就像是被罗德岛号来回碾压过好几遍......'});",
        "playground.drawDialog({name:'格拉尼',text:'可、可斯卡蒂不是还没进来吗？'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'这个看上去像炸开的洞是？'});",
        "playground.drawDialog({name:'格拉尼',text:'也就是说——'});",
        "voice.stopMusic({fadetime:2});playground.drawDialog({name:'格拉尼',text:'你已经想明白了。'});",
        "delay(0.5);playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'d_gen_soldiersrun',volume:0.5});playground.drawCharacter({name:'char_1002_nsabr_1',name2:'char_1002_nsabr_2',fadetime:1,block:true});delay(2);playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n'});delay(1);playground.drawCharacter({name:'avg_npc_010_2',fadetime:2});delay(3);playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawDialog({name:'？？？',text:'我哪里演得不好吗？'});",
        "playground.drawCharacter({name:'char_220_grani_5'});playground.drawDialog({name:'格拉尼',text:'你果然是————'});"
    ]
];