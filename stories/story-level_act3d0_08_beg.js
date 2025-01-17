var story = [
    [
        "bg_cave_2",
        "char_348_ceylon_8",
        "char_145_prove_1",
        "char_166_skfire_1",
        "char_348_ceylon_7",
        "char_166_skfire_3",
        "bg_cave_4",
        "ac3_volcanoboss",
        "char_348_ceylon_3"
    ],
    [
        "m_dia_mist_loop",
        "m_dia_mist_intro",
        "d_gen_walk_n",
        "m_bat_volcano_loop",
        "m_bat_volcano_intro"
    ],
    [
        "playground.clearDialog();voice.playMusic({intro:'m_dia_mist_intro', key:'m_dia_mist_loop', volume:0.8,crossfade:1});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.7, block:true});background.showImage({image:'bg_cave_2',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:0.7, block:true});delay(1);voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_348_ceylon_8',fadetime:1,block:true});delay(1);playground.drawDialog({name:'锡兰',text:'在火山的另一边，竟然有这样一个洞窟。'});",
        "playground.drawCharacter({name:'char_145_prove_1'});voice.playSound({key:'d_gen_walk_n'});playground.drawDialog({name:'普罗旺斯',text:'这个洞窟原本应该是天然形成的，但是经过了大量人为黑曜石开采，内部已经变成一个很深的矿洞了。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'大家要做好准备，我们要在里面走相当长的一段路。'});",
        "playground.drawDialog({name:'普罗旺斯',text:'我的真正的目的地，就在这个洞窟的深处。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.7, block:true});blocker.blocker({a:0, fadetime:0.7, block:true});background.showImage({image:'bg_cave_2',screenadapt:'coverall', fadetime:1});playground.clearDialog();playground.drawCharacter({});delay(1);playground.drawCharacter({name:'char_166_skfire_1'});playground.drawDialog({name:'天火',text:'在研究室的时候我可是做梦也想不到，有一天我会在度假的时候深入火山深处。'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_145_prove_1',focus:1});playground.drawDialog({name:'锡兰',text:'现在可以好好解释一下了吗，刚才在通信里说的太笼统了，“这次火山爆发是可以阻止的”究竟是怎么回事？'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_145_prove_1',focus:2});playground.drawDialog({name:'普罗旺斯',text:'嗯......解说还是交给天火好了，你来解释吧。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_1',focus:2});playground.drawDialog({name:'天火',text:'这是我和普罗旺斯之前在火山内部探索，然后跟艾雅法拉远程交流得出的结论。'});",
        "playground.drawDialog({name:'天火',text:'提到原理，首先得从这里源石虫的生态说起......不，说不定称呼它们为火山源石虫或者熔岩源石虫更为合适吧。'});",
        "playground.drawDialog({name:'天火',text:'虽然外表与源石虫几乎一样，但是它们以火山为巢穴，以这里特别的黑曜石为食，在汐斯塔的火山内部筑巢生根。'});",
        "playground.drawDialog({name:'天火',text:'这些源石虫居住的地方会非常接近火山的核心，也正好是这种混合了特殊成分的黑曜石大量产生的地方。'});",
        "playground.drawDialog({name:'天火',text:'而这里的人发现了这个特性，利用它们的踪迹来发掘黑曜石。'});",
        "playground.drawCharacter({name:'char_348_ceylon_8'});playground.drawDialog({name:'锡兰',text:'原来如此，我看过一些资料，有些地方的人，是通过生物的一些特性来寻找和发掘资源的。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_3',focus:1});playground.drawDialog({name:'普罗旺斯',text:'人们总是能从和生物的联系中找到规律。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_3',focus:2});playground.drawDialog({name:'天火',text:'问题就在于，这座火山距离上次喷发已经是很久以前了，这里的黑曜石是有限的。'});",
        "playground.drawDialog({name:'天火',text:'过度开采不仅对人们产生了影响，也破坏了源石虫的居住环境。'});",
        "playground.drawDialog({name:'天火',text:'于是它们的行为明显开始躁动起来，估计大量不正常的火山内部活动都是它们开辟居住地的行为导致的。'});",
        "playground.drawDialog({name:'天火',text:'这种行为对源石虫来说是有效扩张居住地的手段，但是对于汐斯塔市来说大概就是灭顶之灾了。'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_3',focus:1});playground.drawDialog({name:'普罗旺斯',text:'......“如果我们不怀抱着敬畏之心对待自然的馈赠，自然必然会赐以惩罚。”'});",
        "playground.drawCharacter({name:'char_348_ceylon_7'});playground.drawDialog({name:'锡兰',text:'那么，我们现在到底是要怎么做呢。'});",
        "playground.drawDialog({name:'锡兰',text:'难道我们还能通过什么手段，将火山堵上吗！？'});",
        "playground.drawCharacter({name:'char_166_skfire_3'});playground.drawDialog({name:'天火',text:'换个说法，应该是，我们需要让这里的主人安稳下来。'});",
        "playground.drawDialog({name:'天火',text:'动作快，我们往深处走吧。'});",
        "playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'d_gen_walk_n'});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_cave_2', screenadapt:'coverall'});blocker.blocker({a:0, fadetime:2, block:true});voice.playSound({key:'d_gen_walk_n'});playground.drawCharacter({name:'char_348_ceylon_7'});playground.drawDialog({name:'锡兰',text:'越来越热了......'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_145_prove_1',focus:2});playground.drawDialog({name:'普罗旺斯',text:'就在前面不远了......'});",
        "playground.drawDialog({name:'普罗旺斯',text:'大家小心！'});",
        "playground.drawCharacter({});background.cameraShake({duration:1, xstrength:4, ystrength:4, vibrato:10, randomness:20, fadeout:true});playground.drawDialog({name:'？？？',text:'——————————！！！'});",
        "playground.drawCharacter({name:'char_348_ceylon_8',name2:'char_145_prove_1',focus:1});playground.drawDialog({name:'锡兰',text:'这声音？听起来.......好像很狂暴。'});",
        "playground.drawCharacter({name:'char_166_skfire_3'});playground.drawDialog({name:'天火',text:'当然了，这些虫的智力程度并不足以让他们以个体行为扩张居住地，那么，必然有一只特别的母虫。'});",
        "playground.drawDialog({name:'天火',text:'它才是这里的主人。'});",
        "playground.drawCharacter({name:'char_166_skfire_3',name2:'char_145_prove_1',focus:2});playground.drawDialog({name:'普罗旺斯',text:'......要从那么多源石虫里找到那什么母虫？'});",
        "playground.drawCharacter({name:'char_166_skfire_3',name2:'char_145_prove_1',focus:1});playground.drawDialog({name:'天火',text:'你在说什么？这可是一只差点引发了火山喷发的熔岩源石虫，它主宰着整座火山！肯定是一眼就能看出来的狠角色啦！'});",
        "playground.drawDialog({name:'天火',text:'被环境因素刺激变异的个体，可能性太多了，说不定可以瞬间融化一整支重装小队喔？'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_166_skfire_3',focus:1});playground.drawDialog({name:'锡兰',text:'你是说，这个让整个岩壁都在隐隐作响的声音，是一只“源石虫”发出的......？'});",
        "playground.drawCharacter({name:'char_348_ceylon_7',name2:'char_166_skfire_3',focus:2});playground.drawDialog({name:'天火',text:'慌什么，有我在这里。就算这些熔岩源石虫再怎么变异也——'});",
        "playground.drawCharacter({name:'char_348_ceylon_8'});playground.drawDialog({name:'锡兰',text:'这，这是？！'});",
        "voice.playMusic({intro:'m_bat_volcano_intro', key:'m_bat_volcano_loop', volume:0.8, crossfade:1.5});playground.drawCharacter({});playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_cave_4'});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_348_ceylon_8',name2:'char_145_prove_1',focus:2});playground.drawDialog({name:'普罗旺斯',text:'怎么回事......难道岩浆已经蔓延出来了吗？！'});",
        "playground.drawCharacter({name:'char_348_ceylon_8',name2:'char_145_prove_1',focus:1});playground.drawDialog({name:'锡兰',text:'不，是那只变异了的源石虫！在洞穴的下方！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});background.cameraShake({duration:1, xstrength:4, ystrength:4, vibrato:10, randomness:20, fadeout:true});playground.drawImage({image:'ac3_volcanoboss',screenadapt:'coverall', fadetime:0});blocker.blocker({a:0, fadetime:3, block:false});background.cameraShake({duration:1, xstrength:4, ystrength:4, vibrato:10, randomness:20, fadeout:true});playground.drawDialog({name:'巨大源石虫',text:'————————！'});",
        "playground.drawDialog({name:'巨大源石虫',text:'————————！'});",
        "playground.drawCharacter({name:'char_166_skfire_3'});playground.drawDialog({name:'天火',text:'温度在升高，这样的热量，作为一只源石虫而言，的确有些超出规格了呢。'});",
        "playground.drawCharacter({name:'char_348_ceylon_8',name2:'char_145_prove_1',focus:2});playground.drawDialog({name:'普罗旺斯',text:'......那真的还能叫虫？那不就是一整座移动的火山吗？'});",
        "playground.drawCharacter({name:'char_166_skfire_3'});playground.drawDialog({name:'天火',text:'嗯......毕竟没有详细的推演，与我推算的变异结果稍微有点差别。'});",
        "playground.drawCharacter({name:'char_145_prove_1'});playground.drawDialog({name:'普罗旺斯',text:'我有点想念艾雅法拉了。'});",
        "playground.drawCharacter({name:'char_348_ceylon_3'});playground.drawDialog({name:'锡兰',text:'小心！它靠近了！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});delay(0.5);playground.drawImage({fadetime:0});blocker.blocker({a:0, fadetime:1, block:false});playground.drawCharacter({});playground.drawDialog({name:'巨大源石虫',text:'————————！'});",
        "background.cameraShake({duration:1, xstrength:4, ystrength:4, vibrato:10, randomness:20, fadeout:true});playground.drawDialog({name:'巨大源石虫',text:'————————————！！！'});",
        "playground.drawCharacter({name:'char_348_ceylon_8'});playground.drawDialog({name:'锡兰',text:'它、它能让地面融化流动？不，不对，墙壁上地面上，布满了这些滚动着的像波浪一样的东西......'});",
        "playground.drawCharacter({name:'char_145_prove_1'});playground.drawDialog({name:'普罗旺斯',text:'离远些，那些全部都是熔岩源石虫，这是足够引发火山运动的数量！'});",
        "playground.drawCharacter({name:'char_166_skfire_1'});playground.drawDialog({name:'天火',text:'那么毫无疑问，目标就是这家伙了。'});",
        "playground.drawDialog({name:'天火',text:'我们只要让它停止躁动，并且改变它行进的路线，应该就能有效的争取到更多让市民做好避难准备的时间了！'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_3',focus:1});playground.drawDialog({name:'普罗旺斯',text:'慢着慢着！只凭我们几个到底怎么解决这座小型火山！？'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_3',focus:2});playground.drawDialog({name:'天火',text:'打啊！还能怎么办？'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_3',focus:1});playground.drawDialog({name:'普罗旺斯',text:'这样庞大的身体要是直接在这里爆炸，真的不会直接引发火山喷发吗！？'});",
        "playground.drawCharacter({name:'char_145_prove_1',name2:'char_166_skfire_3',focus:2});playground.drawDialog({name:'天火',text:'那就麻烦他回到巢穴里去！'});",
        "playground.drawCharacter({name:'char_166_skfire_1'});playground.drawDialog({name:'天火',text:'嗯......'});",
        "playground.drawDialog({name:'天火',text:'总之还是得揍它嘛！！'});"
    ]
];