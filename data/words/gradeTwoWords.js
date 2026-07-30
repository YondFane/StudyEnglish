// 高二
const datas = [{
    B: "blouse",
    C: "['blaʊz]",
    D: "n.女衬衫",
    E: "bl+ou+se",
    F: "bl61(象形)+ou偶(拼音)+se色(拼音)",
    G: "61个偶人穿着彩色的女衬衫",
    H: "She was wearing a skirt and blouse.",
    I: "她穿着裙子和衬衫。"
}, {
    B: "dustbin",
    C: "['dʌs(t)bɪn]",
    D: "n.垃圾箱",
    E: "dust+b+in",
    F: "dust灰尘(熟词)+b男孩(编码boy)+in里面(熟词)",
    G: "灰尘被男孩扫进垃圾箱里面了",
    H: "It's a dustbin.",
    I: "这是一个垃圾箱。"
}, {
    B: "journalist",
    C: "[ˈdʒɜ:nəlɪst]",
    D: "n.记者，新闻工作者",
    E: "j+our+na+list",
    F: "j周杰伦(编码Jay)+our我们的(熟词)+na那(拼音)+list清单(熟词)",
    G: "周杰伦把我们的那张清单给了记者",
    H: "He wants to be a journalist.",
    I: "他想成为一名记者。"
}, {
    B: "press",
    C: "[pres]",
    D: "vi./vt.按，压，逼迫；n.按，印刷，新闻",
    E: "pr+e+ss",
    F: "pr仆人(拼音)+e鹅(编码)+ss两个美女(编码)",
    G: "仆人抱着鹅被两个美女按住了",
    H: "He presses his back agianst the door.",
    I: "他后背紧紧靠在门上。"
}, {
    B: "stove",
    C: "[stəʊv]",
    D: "n.炉",
    E: "sto+ve",
    F: "sto石头(谐音)+ve维E(熟词)",
    G: "石头和维E在炉子里",
    H: "There is a big stove in the room.",
    I: "房里有个很大的火炉。"
}, {
    B: "throat",
    C: "[θrəʊt]",
    D: "n.喉咙，咽喉",
    E: "th+ro+at",
    F: "th土豪(拼音)+ro肉(拼音)+at在(熟词)",
    G: "土豪吃肉时卡在了喉咙",
    H: "My throat hurts.",
    I: "我喉咙痛。"
}, {
    B: "section",
    C: "['sekʃən]",
    D: "n.部分，节，切下的块",
    E: "se+c+tion",
    F: "se色(拼音)+c看见(编码see)+tion婶(谐音)",
    G: "一部分色狼看见了婶婶",
    H: "They moulded a complete new bow section for the boat.",
    I: "他们为这艘船铸造了一个完整的新船头。"
}, {
    B: "skin",
    C: "[skɪn]",
    D: "n.皮肤，皮",
    E: "sk+in",
    F: "sk烧烤(拼音)+in在里面(熟词)",
    G: "烧烤时烧到了里面的皮肤",
    H: "Her skin is white.",
    I: "她的皮肤很白。"
}, {
    B: "editor",
    C: "['edɪtə(r)]",
    D: "n.编辑",
    E: "edit+or",
    F: "edit编辑(熟词)+or偶人(拼音)",
    G: "在编辑部偶人找到了编辑",
    H: "He is an editor.",
    I: "他是一个编辑。"
}, {
    B: "efficient",
    C: "[ɪ'fɪʃ(ə)nt]",
    D: "adj.效率高的，有能力的",
    E: "ef+fi+cien+t",
    F: "ef恶妇(拼音)+fi肥(谐音)+cien慈恩(拼音)+t伞(编码)",
    G: "效率高的恶妇边吃肥肉边给慈恩做伞",
    H: "How can we be more efficient?",
    I: "我们怎么才能更有效率呢？"
}, {
    B: "kingdom",
    C: "['kɪŋdəm]",
    D: "n.王国",
    E: "king+do+m",
    F: "king国王(熟词)+do做(熟词)+m麦当劳(编码)",
    G: "王国里的国王在做麦当劳早餐",
    H: "In a kingdom by the sea.",
    I: "在大海边一个王国里。"
}, {
    B: "aid",
    C: "[eɪd]",
    D: "n.帮助，援助，助手",
    E: "ai+d",
    F: "ai爱(拼音)+d弟(编码)",
    G: "我爱弟弟所以要帮助他",
    H: "They are foreign aid workers.",
    I: "他们是国外救援人员。"
}, {
    B: "Roman",
    C: "[rɔmə]",
    D: "n.（古）罗马人；adj.（古）罗马的",
    E: "ro+man",
    F: "ro肉(拼音)+man男人(熟词)",
    G: "爱吃肉的男人是罗马人",
    H: "Here is a book about Roman history.",
    I: "这是一本关于古罗马历史的书。"
}, {
    B: "fold",
    C: "[fəʊld]",
    D: "vt.折叠，合拢",
    E: "cold",
    F: "cold冷的",
    G: "太冷了，把被子折叠起来真蠢",
    H: "He folded the paper carefully.",
    I: "他把纸小心地折起来。"
}, {
    B: "fax",
    C: "[fæks]",
    D: "n./vt.传真",
    E: "fox",
    F: "fox狐狸",
    G: "一个狐狸在发传真",
    H: "Mary sent a fax to her office yesterday.",
    I: "玛丽昨天向她的办公室发了一封传真。"
}, {
    B: "opportunity",
    C: "[ɒpə'tjuːnɪtɪ]",
    D: "n.时机，机会",
    E: "op+port+unity",
    F: "op阿婆(谐音)+port港口(熟词)+unity联合(熟词)",
    G: "阿婆在港口联合起来等待时机",
    H: "There is an opportunity for me to go abroad.",
    I: "我得到了一个出国的机会。"
}, {
    B: "radiation",
    C: "[reɪdɪ'eɪʃ(ə)n]",
    D: "n.辐射，发光，放射物",
    E: "radi+ation",
    F: "radi(o)收音机(熟词)+ation爱神(谐音)",
    G: "收音机向爱神发出辐射",
    H: "The radiation is bad for our body.",
    I: "辐射对我们的身体有害。"
}, {
    B: "negative",
    C: "['negətɪv]",
    D: "adj.消极的，否定的，[数]负的",
    E: "ne+ga+tive",
    F: "ne哪(吒)(拼音)+ga咖(拼音)+tive踢我(谐音)",
    G: "消极的哪吒丢了咖喱后一直踢我",
    H: "Watching TV will have negative effect on your eyes.",
    I: "看电视对眼睛有消极影响。"
}, {
    B: "positive",
    C: "['pɒzətɪv]",
    D: "adj.积极的，乐观的，有益的",
    E: "po+sit+ive",
    F: "po婆(拼音)+sit坐(熟词)+ive伊芙(谐音)",
    G: "婆婆坐下看伊芙积极地演说",
    H: "He has a positive attitude towards life.",
    I: "他对生活持有积极的态度。"
}, {
    B: "imitate",
    C: "['ɪmɪteɪt]",
    D: "vt.模仿，仿效",
    E: "im+it+ate",
    F: "im姨母(谐音)+it它(熟词)+ate吃(熟词)",
    G: "姨母模仿它吃饭",
    H: "Parrots imitate human speech.",
    I: "鹦鹉模仿人说话。"
}, {
    B: "concentrate",
    C: "['kɒnsntreɪt]",
    D: "vi./vt.集中，聚集",
    E: "con+cent+rate",
    F: "con康(谐音)+cent一分钱(熟词)+rate速度(熟词)",
    G: "集中精力的康熙造一分钱的速度加快",
    H: "I can't concentrate on my work with all that noise.",
    I: "那么吵，我没法集中精力。"
}, {
    B: "mild",
    C: "[maɪld]",
    D: "adj.温和的，和缓的，温柔的",
    E: "wild",
    F: "wild野蛮的",
    G: "温和的她被山(m)里的野蛮人揍了",
    H: "This cheese has a soft, mild flavour.",
    I: "这种奶酪味道淡而不腻。"
}, {
    B: "union",
    C: "['ju:njən]",
    D: "n.联合，联盟，结合",
    E: "onion",
    F: "onion洋葱",
    G: "联合国所有的桶(u)里面放满洋葱",
    H: "She was admitted as a member of the union.",
    I: "她被接纳为联盟的一员。"
}, {
    B: "unite",
    C: "[ju:'naɪt]",
    D: "vt./vi.团结，联合",
    E: "unit",
    F: "unit单位",
    G: "这个单位的鹅(e)很团结",
    H: "Care must be taken to unite with all those that can be united with.",
    I: "必须注意团结一切可以团结的人。"
}, {
    B: "royal",
    C: "['rɒɪəl]",
    D: "adj.王室的，皇家的，高贵的",
    E: "roy+al",
    F: "roy罗伊(熟词Roy)+al阿狸(拼音)",
    G: "罗伊发现阿狸有王室血统",
    H: "News is flying about concerning a royal wedding.",
    I: "有关皇室婚礼的消息不胫而走。"
}, {
    B: "conclude",
    C: "[kən'klu:d]",
    D: "vt.推断，决定，结束",
    E: "con+clu+de",
    F: "con肯(谐音)+clu粗鲁(拼音)+de的(拼音)",
    G: "推断林肯是粗鲁的人",
    H: "What can you conclude from these pictures?",
    I: "你从这些图片中能得出什么结论?"
}, {
    B: "construction",
    C: "[kən'strʌkʃ(ə)n]",
    D: "n.建筑物，建设",
    E: "construc+tion",
    F: "construc(t)修建(熟词)+tion神(谐音)",
    G: "古代修建的神庙是受保护的建筑物",
    H: "The local government raised lots of money for the hospital construction.",
    I: "地方政府为建设医院筹措了巨额款项。"
}, {
    B: "radium",
    C: "['reɪdɪəm]",
    D: "n.[化学]镭",
    E: "ra+diu+m",
    F: "ra瑞(谐音)+diu丢(拼音)+m麦当劳(编码)",
    G: "瑞瑞把镭丢在麦当劳了",
    H: "Radium can be used to treat cancer.",
    I: "镭可以用来治疗癌症。"
}, {
    B: "unforgettable",
    C: "[ˌʌnfəˈgetəbl]",
    D: "adj.难忘的，永远记得的",
    E: "un+forget+table",
    F: "un联合国(编码)+forget忘记(熟词)+table桌子(熟词)",
    G: "联合国开会忘记放桌子让人很难忘",
    H: "A visit to the Museum is an unforgettable experience.",
    I: "参观博物馆是一段令人难忘的经历。"
}, {
    B: "defeat",
    C: "[dɪ'fi:t]",
    D: "vt.打败",
    E: "de+f+eat",
    F: "de弟(谐音)+f佛(编码)+eat吃(熟词)",
    G: "弟弟打败佛后大吃一顿",
    H: "He will not admit defeat.",
    I: "他不会承认失败。"
}, {
    B: "scientific",
    C: "[saɪən'tɪfɪk]",
    D: "adj.科学的",
    E: "scienti+f+ic",
    F: "scienti(st)科学家(熟词)+f佛(编码)+icIC卡(编码)",
    G: "科学家在佛的IC卡里装了科学的导航",
    H: "We will have to adopt a more scientific approach in the future.",
    I: "我们将来得采用更科学的方法。"
}, {
    B: "port",
    C: "[pɔ:t]",
    D: "n.港口，港口城市",
    E: "po+rt",
    F: "po婆+rt热天",
    G: "婆婆在热天里晕倒在港口",
    H: "The ship reached port the next morning.",
    I: "船第二天到达港口。"
}, {
    B: "province",
    C: "['prɒvɪns]",
    D: "n.省，行政区",
    E: "pro+vince",
    F: "pro飘柔(拼音)+vince文斯(谐音)",
    G: "这个省的飘柔被文斯承包了",
    H: "I come from Guangdong province.",
    I: "我来自广东省。"
}, {
    B: "handle",
    C: "['hænd(ə)l]",
    D: "vt.处理，操纵；n.把手，柄",
    E: "hand+le",
    F: "hand手(熟词)+le了(拼音)",
    G: "用手处理就好了",
    H: "Please fit a new handle on my case.",
    I: "请给我的箱子配一个新把手。"
}, {
    B: "housewife",
    C: "[ˈhaʊswaɪf]",
    D: "n.家庭主妇",
    E: "house+wife",
    F: "house房子+wife妻子",
    G: "只要有房子妻子就甘当家庭主妇",
    H: "My mother is a housewife.",
    I: "我的母亲是一位家庭主妇。"
}, {
    B: "instruct",
    C: "[ɪn'strʌkt]",
    D: "vt.指导，通知",
    E: "in+stru+ct",
    F: "in里面(熟词)+stru死抓(谐音)+ct(传统)",
    G: "指导里面的人要死抓传统",
    H: "The family has instructed solicitors to sue Thomson for compensation.",
    I: "那家人已经指示律师起诉汤姆森，要求赔偿。"
}, {
    B: "link",
    C: "[lɪŋk]",
    D: "vt.连接，联系",
    E: "pink",
    F: "pink粉色",
    G: "连接双节棍(l)的是粉色链条",
    H: "The computers are linked to a network.",
    I: "这些计算机被联到一个网络上。"
}, {
    B: "movement",
    C: "['mu:vm(ə)nt]",
    D: "n.移动，运动，动作",
    E: "move+ment",
    F: "move移动(熟词)+ment门徒(拼音)",
    G: "正在移动的是门徒",
    H: "They disintegrated the labour movement.",
    I: "他们瓦解了工人运动。"
}, {
    B: "splendid",
    C: "['splendɪd]",
    D: "adj.极好的，壮丽的，辉煌的",
    E: "sp+lend+id",
    F: "sp食品(拼音)+lend出租(熟词)+id身份证(编码)",
    G: "食品出租只需要身份证是极好的",
    H: "My kid sister has a splendid memory.",
    I: "我小妹记忆力极好。"
}, {
    B: "statue",
    C: "['stætʃu:]",
    D: "n.雕像，塑像，铸像",
    E: "st+atu+e",
    F: "st石头(拼音)+atu阿土(拼音)+e鹅(编码)",
    G: "石头砸坏了阿土的鹅雕像",
    H: "In the centre of the paving stood a statue.",
    I: "铺面的中央是一尊雕塑。"
}, {
    B: "chart",
    C: "[tʃɑ:t]",
    D: "n.图表",
    E: "cha+rt",
    F: "cha茶+rt软糖",
    G: "喝着茶吃着软糖绘制图表",
    H: "With this chart，you can see what they mean.",
    I: "下面这个图可以让你看清上述的意思。"
}, {
    B: "demand",
    C: "[dɪˈmɑ:nd]",
    D: "vt.强烈要求；n.需要，要求",
    E: "de+man+d",
    F: "de弟(谐音)+man男人(熟词)+d狗(编码dog)",
    G: "强烈要求弟弟和男人把狗带走",
    H: "She demanded a room all to herself.",
    I: "她强烈要求自己一个人住一个房间。"
}, {
    B: "error",
    C: "['erə]",
    D: "n.错误，误差，过失",
    E: "e+rr+or",
    F: "e鹅(编码)+rr两根草(编码)+or否则(熟词)",
    G: "鹅必须吃两根草否则它会犯错",
    H: "How can she explain away her error.",
    I: "她是怎样把错误解释过去的？"
}, {
    B: "firmly",
    C: "[ˈfɜ:mlɪ]",
    D: "adv.坚固地，稳定地",
    E: "firm+ly",
    F: "firm坚固的(熟词)+ly老爷(拼音)",
    G: "坚固的房子是老爷造的",
    H: "Tuck the sheets in firmly.",
    I: "掖紧被子。"
}, {
    B: "absorb",
    C: "[əb'sɔ:b]",
    D: "vt.吸引（注意），吸收（液体、气体等）",
    E: "ab+so+rb",
    F: "ab阿伯(拼音)+so如此(熟词)+rb日本(拼音)",
    G: "阿伯如此帅在日本吸引了一批粉丝",
    H: "His mind was like a sponge, ready to absorb anything.",
    I: "他的脑子跟海绵似的，什么都能吸收。"
}, {
    B: "apply",
    C: "[ə'plaɪ]",
    D: "vt.申请，涂，敷，应用",
    E: "apple",
    F: "apple苹果",
    G: "我想申请一个苹果",
    H: "These regulations apply to everyone , without exception.",
    I: "这些规章对谁都适用，没有例外。"
}, {
    B: "appointment",
    C: "[ə'pɒɪntm(ə)nt]",
    D: "n.任命，约定，任命的职位",
    E: "ap+point+ment",
    F: "ap阿婆(拼音)+point指(熟词)+ment门徒(拼音)",
    G: "阿婆指着要任命那个门徒",
    H: "The news of his appointment filtered out before it was officially advertised.",
    I: "关于他的任命尚未正式宣布，消息就已经泄露了出去。"
}, {
    B: "arrange",
    C: "[əˈreɪndʒ]",
    D: "vt.筹备，安排，整理",
    E: "ar+rang+e",
    F: "ar矮人(拼音)+rang让(拼音)+e鹅(编码)",
    G: "矮人让鹅筹备婚礼",
    H: "It is not for me to arrange such matters.",
    I: "我无权安排这些事情。"
}, {
    B: "alike",
    C: "[ə'laɪk]",
    D: "adj.相同的，相似的；adv.以同样的方式，类似于",
    E: "a+like",
    F: "a苹果(编码)+like喜欢(熟词)",
    G: "种类相同的苹果我都喜欢",
    H: "The twins are so alike that I can't tell which is which.",
    I: "这对双胞胎一模一样，我分辨不出谁是谁。"
}, {
    B: "collection",
    C: "[kə'lekʃn]",
    D: "n.收集，收藏品，珍藏",
    E: "collect+i+on",
    F: "collect收集(熟词)+i蜡烛(编码)+on在上面(熟词)",
    G: "把收集来的蜡烛放在上面",
    H: "It's a stamp collection.",
    I: "这是一批硬币收藏品。"
}, {
    B: "capsule",
    C: "['kæpsju:l]",
    D: "n.胶囊",
    E: "cap+sule",
    F: "cap帽子(熟词)+sule酥了(拼音)",
    G: "吃了胶囊，带上帽子，整个人都酥了",
    H: "This capsule is to be taken every four hours.",
    I: "这种胶囊每隔四小时服一次。"
}, {
    B: "deadline",
    C: "['dedlaɪn]",
    D: "n.最后期限",
    E: "dead+line",
    F: "dead死亡的+line线",
    G: "最后期限不还钱将会走上死亡线",
    H: "In this case, you'll want to set yourself a deadline.",
    I: "在这种情况下，你要为自己设定一个最后期限。"
}, {
    B: "deadly",
    C: "['dedlɪ]",
    D: "adj.致命的，非常的，死一般的",
    E: "dead+ly",
    F: "dead死亡的(熟词)+ly老爷(拼音)",
    G: "死亡的老爷受了致命的伤",
    H: "The accident subjected her to a deadly blow.",
    I: "这次意外使她受到致命的打击。"
}, {
    B: "dispose",
    C: "[dɪ'spəʊz]",
    D: "vi./vt.处理，处置",
    E: "dis+pose",
    F: "dis的士(拼音)+pose摆姿势(熟词)",
    G: "的士司机把旧车处理掉后摆姿势",
    H: "They have no way to dispose of the hazardous waste they produce.",
    I: "他们没有办法处理掉自己产生的有害废料。"
}, {
    B: "expose",
    C: "[ɪk'spəʊz]",
    D: "vt.使曝光，揭露，揭发",
    E: "ex+pose",
    F: "ex前夫+pose姿势",
    G: "前夫摆的姿势被曝光了",
    H: "The Budget does expose the lies ministers were telling a year ago.",
    I: "预算案无疑揭穿了部长们一年前所说的谎话。"
}, {
    B: "gifted",
    C: "[ˈgɪftɪd]",
    D: "adj.有天赋的",
    E: "gift+ed",
    F: "gift礼物(熟词)+ed二弟(拼音)",
    G: "制作礼物方面二弟很有天赋",
    H: "She is a naturally gifted sportswoman.",
    I: "她是一位具有天赋的女运动员。"
}, {
    B: "greedy",
    C: "[ˈgri:di]",
    D: "adj.贪婪的，贪吃的",
    E: "gree+dy",
    F: "gree(n)绿色的(熟词)+dy地狱(拼音)",
    G: "贪婪的人眼睛发绿的会下地狱",
    H: "I have never seen anyone so greedy before.",
    I: "我以前从未见过如此贪婪的人。"
}, {
    B: "heal",
    C: "[hi:l]",
    D: "vi./vt.（使）康复，（使）化解",
    E: "he+al",
    F: "he他(熟词)+al阿狸(拼音)",
    G: "他使阿狸",
    H: "The wound has not yet healed.",
    I: "伤口尚未愈合。"
}, {
    B: "inform",
    C: "[ɪnˈfɔ:m]",
    D: "vt.通知，告知",
    E: "in+form",
    F: "in里面+form表格",
    G: "通知你填房间里的表格",
    H: "Why wasn't I informed about this earlier?",
    I: "为什么不早点儿将这事通知我？"
}, {
    B: "plus",
    C: "[plʌs]",
    D: "prep.加上，和；adj.加的，正的",
    E: "pl+us",
    F: "pl疲劳(拼音)+us我们(熟词)",
    G: "疲劳的我们在做加法",
    H: "What is six plus four?",
    I: "6加4等于几？"
}, {
    B: "spin",
    C: "[spɪn]",
    D: "n.旋转，疾驰；vt.旋转，纺纱",
    E: "sp+in",
    F: "sp赛跑(拼音)+in里面(熟词)",
    G: "赛跑前在里面旋转热身",
    H: "The boat started to spin around in the water.",
    I: "船开始在水中打旋。"
}, {
    B: "sprain",
    C: "[spreɪn]",
    D: "vt.扭伤",
    E: "sp+rain",
    F: "sp赛跑(拼音)+rain雨(熟词)",
    G: "赛跑时在雨里扭伤了",
    H: "He fell and sprained his ankle.",
    I: "他摔了一跤，扭伤了脚踝。"
}, {
    B: "tightly",
    C: "[ˈtaɪtlɪ]",
    D: "adv.牢牢地，紧地",
    E: "tight+ly",
    F: "tight牢的(熟词)+ly老爷(拼音)",
    G: "他牢牢地抓住了老爷",
    H: "He held on tightly to her arm.",
    I: "他紧紧抓住她的手臂。"
}, {
    B: "typewriter",
    C: "[ˈtaɪpraɪtə(r)]",
    D: "n.打字机",
    E: "type+writer",
    F: "type打字+writer作家",
    G: "要打字的作家买了台打字机",
    H: "He still uses an old typewriter.",
    I: "他还在用一部旧打字机。"
}, {
    B: "analyse",
    C: "['æn(ə)laɪz]",
    D: "vt.分析",
    E: "ana+ly+se",
    F: "ana阿娜+ly老爷+se色",
    G: "分析阿娜从老爷那偷来的色谱",
    H: "Next, you need to analyse all the data.",
    I: "接下来，你需要分析所有数据。"
}, {
    B: "clarify",
    C: "['klærɪfaɪ]",
    D: "vt.澄清，阐明",
    E: "cla+ri+fy",
    F: "cla吃辣+ri日+fy风衣",
    G: "爱吃辣的日本人穿着风衣澄清了绯闻",
    H: "I am happy to clarify any points that are still unclear.",
    I: "我很高兴就一些不是很明了的问题来澄清一下。"
}, {
    B: "organ",
    C: "['ɔːg(ə)n]",
    D: "n.器官，机构",
    E: "or+gan",
    F: "or偶人+gan干",
    G: "偶人的器官干了",
    H: "Do you think it a good idea to use cloned human for organ transplant?",
    I: "你认为将克隆人类用于器官移植是个好的想法吗？"
}, {
    B: "roughly",
    C: "[ˈrʌflɪ]",
    D: "adv.粗糙地，粗略地",
    E: "rou+gh+ly",
    F: "rou肉+gh干活+ly老爷",
    G: "粗糙的肉被干活的老爷吃了",
    H: "He knew roughly what was about to be said.",
    I: "他大概知道要说些什么。"
}, {
    B: "stab",
    C: "[stæb]",
    D: "vt./vi.刺，戳，刺伤",
    E: "st+ab",
    F: "st尸体+ab阿爸",
    G: "尸体被阿爸刺穿了",
    H: "I found a stab wound on his leg.",
    I: "我在他的腿上发现一处刺伤。"
}, {
    B: "adjustment",
    C: "[əˈdʒʌstmənt]",
    D: "n.调整，调节",
    E: "ad+just+ment",
    F: "ad阿弟(拼音)+just刚才(熟词)+ment门徒(拼音)",
    G: "阿弟刚才帮门徒调整了计划",
    H: "She made a few minor adjustments to the focus of her camera.",
    I: "她稍微调了调相机的焦距。"
}, {
    B: "admirable",
    C: "[ˈædmərəbl]",
    D: "adj.值得赞扬的，令人钦佩的",
    E: "admir+able",
    F: "admir(e)称赞+able有能力的",
    G: "称赞有能力的人是值得赞扬的",
    H: "He is an admirable character.",
    I: "他是个令人钦佩的人物。"
}, {
    B: "announce",
    C: "[ə'naʊns]",
    D: "vt.宣布，通告",
    E: "an+noun+ce",
    F: "an一(熟词)+noun名词(熟词)+ce册(拼音)",
    G: "宣布出版一个名词册子",
    H: "They announced the winner of the game.",
    I: "他们宣布了比赛的冠军。"
}, {
    B: "approve",
    C: "[ə'pruːv]",
    D: "vt.批准，赞成，为…提供证据；vi.批准，赞成，满意",
    E: "ap+prove",
    F: "ap阿婆(拼音)+prove证明(熟词)",
    G: "阿婆的证明得到了他批准",
    H: "They stacked the committee to approve their expenditure.",
    I: "他们暗中做手脚使委员会批准了他们的费用支出。"
}, {
    B: "assignment",
    C: "[əˈsaɪnmənt]",
    D: "n.任务，分配",
    E: "assign+ment",
    F: "assign分配(熟词)+ment门徒(拼音)",
    G: "分配门徒做任务",
    H: "He worked hard at the assignment.",
    I: "他认真地完成分派的任务。"
}, {
    B: "basin",
    C: "[ˈbeɪsn]",
    D: "n.盆，盆地",
    E: "bas+in",
    F: "bas巴士(拼音)+in里面(熟词)",
    G: "巴士里面有个盆",
    H: "Place the eggs and sugar in a large basin.",
    I: "把鸡蛋和糖放在一个大碗里。"
}, {
    B: "blister",
    C: "[ˈblɪstə]",
    D: "n.水泡；vi./vt.使起泡",
    E: "b+list+er",
    F: "b6(象形)+list清单(熟词)+er儿(拼音)",
    G: "写完6个清单儿子的手起了水泡",
    H: "His new shoes raised blisters on his feet.",
    I: "他的新鞋把他的脚磨起了水泡。"
}, {
    B: "button",
    C: "[ˈbʌtn]",
    D: "n.纽扣，按钮",
    E: "but+ton",
    F: "but但是+ton吨",
    G: "但是就算有几吨纽扣都没用",
    H: "He pushed the play button again and ran the tape.",
    I: "他又按下了播放键播放磁带。"
}, {
    B: "clue",
    C: "[klu:]",
    D: "n.线索，提示",
    E: "blue",
    F: "blue蓝色",
    G: "蓝色的线索",
    H: "The police followed home the clue and finally caught the culprit.",
    I: "警察根据线索追根到底，终于抓住了这个罪犯。"
}, {
    B: "communism",
    C: "[ˈkɒmjunɪzəm]",
    D: "n.共产主义",
    E: "com+muni+sm",
    F: "com(e)来(熟词)+muni穆尼(拼音)+sm神马(拼音)",
    G: "来看穆尼骑着神马宣扬共产主义",
    H: "Our ultimate aim is to realize communism.",
    I: "我们的最终目的是实现共产主义。"
}, {
    B: "convenience",
    C: "[kənˈvi:nɪəns]",
    D: "n.便利，方便",
    E: "convenien+ce",
    F: "convenien(t)方便的(熟词)+ce厕(拼音)",
    G: "方便的公厕给游客提供了很大便利",
    H: "They may use a credit card for convenience.",
    I: "为了方便，他们可以使用信用卡。"
}, {
    B: "cure",
    C: "[kjʊə]",
    D: "vt./vi.治疗，治愈；n.痊愈，治愈",
    E: "cute",
    F: "cute可爱",
    G: "可爱的小草(r)治愈了我",
    H: "But does it cure your depression?",
    I: "但是它不能治疗抑郁吗？"
}, {
    B: "currency",
    C: "[ˈkʌrənsɪ]",
    D: "n.货币，通货",
    E: "curren+cy",
    F: "curren(t)现在的(熟词)+cy餐饮(拼音)",
    G: "货币都流向了现在的餐饮业",
    H: "You need hard currency to get anything halfway decent.",
    I: "你得有硬通货才能买到还算不错的东西。"
}, {
    B: "deliberately",
    C: "[dɪˈlɪbərətlɪ]",
    D: "adv.故意地",
    E: "deliberate+ly",
    F: "deliberate故意的(熟词)+ly老爷(拼音)",
    G: "故意地打了老爷一顿",
    H: "Are you deliberately trying to hurt me?",
    I: "你是故意要让我难过吗？"
}, {
    B: "edition",
    C: "[ɪ'dɪʃn]",
    D: "n.版（本），版次",
    E: "edit+i +on",
    F: "edit编辑+i我(I)+on在...上",
    G: "编辑完我就在网上更新了版本",
    H: "The French edition came out in early 1992.",
    I: "法文版于1992年初出版。"
}, {
    B: "enthusiastic",
    C: "[ɪnˌθju:zɪ'æstɪk]",
    D: "adj.热情的，热心的",
    E: "ent+husi+as+tic",
    F: "ent恩特(拼音)+husi胡四(拼音)+as作为(熟词)+tic体操(拼音)",
    G: "恩特和胡四作为体操员都很热情",
    H: "Here the crowd was thickest and most enthusiastic.",
    I: "这里的人群最密集，热情也最高。"
}, {
    B: "exhausted",
    C: "[ɪgˈzɔ:stɪd]",
    D: "adj.精疲力竭的，疲惫不堪的",
    E: "exhaust+ed",
    F: "exhaust耗尽(熟词)+ed耳朵(拼音)",
    G: "耗尽精力治耳朵使我精疲力竭",
    H: "By the time they reached the summit they were exhausted.",
    I: "他们登到山顶时，已经精疲力竭了。"
}, {
    B: "fasten",
    C: "['fɑːs(ə)n]",
    D: "vt.使固定，集中于，扎牢",
    E: "fast+en",
    F: "fast快的(熟词)+en摁(拼音)",
    G: "快摁住它才可以使它固定",
    H: "Fasten your seat belt.",
    I: "系好你的安全带。"
}, {
    B: "firm",
    C: "[fɜ:m]",
    D: "n.公司；adj.结实的，坚固的，坚定的",
    E: "film",
    F: "film电影",
    G: "全公司的人都在草地上(r)看电影",
    H: "The firm's employees were expecting large bonuses.",
    I: "这家公司的雇员期待着发放大笔奖金。"
}, {
    B: "flashback",
    C: "[ˈflæʃbæk]",
    D: "n.闪回，倒叙",
    E: "flash+back",
    F: "flash闪光+back背",
    G: "一道闪光闪到背后就闪回了",
    H: "The flashback technique is used in this film.",
    I: "这部电影采用的是倒插笔手法。"
}, {
    B: "foresee",
    C: "[fɔ:'si:]",
    D: "vt.预知，预见",
    E: "fore+see",
    F: "fore在前面+see看",
    G: "提前看看就能预知未来",
    H: "Finally, I foresee a day when I can stay at home all day.",
    I: "最后，当我整天呆在家里时，我都能预见一天。"
}, {
    B: "furnished",
    C: "[ˈfɜ:nɪʃt]",
    D: "adj.带家具的，配好装备的",
    E: "furnish+ed",
    F: "furnish布置(熟词)+ed二弟(拼音)",
    G: "经过布置后二弟的房子是带家具的",
    H: "Eleanor moved into a small furnished apartment.",
    I: "埃莉诺搬进了一间配有家具的小公寓里。"
}, {
    B: "germ",
    C: "[dʒɜːm]",
    D: "n.细菌，胚芽，萌芽",
    E: "term",
    F: "term学期",
    G: "一学期过后教室里有很多细菌",
    H: "The germ of an idea took root in Rosemary's mind.",
    I: "罗斯玛丽心里萌生了一个念头。"
}, {
    B: "imaginary",
    C: "[ɪ'mædʒɪn(ə)rɪ]",
    D: "adj.虚构的，假想的",
    E: "imagin+a+ry",
    F: "imagin(e)想象(熟词)+a一(熟词)+ry人妖(拼音)",
    G: "想象一个人妖是虚构的",
    H: `The unicorn is an imaginary beast.  
`,
    I: "独角兽是幻想出来的动物。"
}, {
    B: "imaginative",
    C: "[ɪ'mædʒɪnətɪv]",
    D: "adj.富有想象的，虚构的",
    E: "imagin+ative",
    F: "imagin(e)想象+ative爱踢我",
    G: "富有想象力的他总是爱踢我",
    H: "Scott was an imaginative writer.",
    I: "司格特是位富于想象力的作家。"
}, {
    B: "instant",
    C: "[ˈɪnstənt]",
    D: "n.瞬间，片刻；adj.立即的，立刻的",
    E: "in+st+ant",
    F: "in里面(熟词)+st石头(拼音)+ant蚂蚁(熟词)",
    G: "里面的石头把蚂蚁瞬间砸死了",
    H: "The film was an instant success.",
    I: "这部电影一上映即获得成功。"
}, {
    B: "investigate",
    C: "[ɪn'vestɪgeɪt]",
    D: "vt./vi.调查，研究",
    E: "invest+i+gate",
    F: "invest投资+i我(I)+gate大门",
    G: "为调查投资人，我把大门锁了",
    H: "The two officials were being investigated.",
    I: "两名官员正在接受调查。"
}, {
    B: "label",
    C: "[ˈleibl]",
    D: "n.标签",
    E: "lab+el",
    F: "lab实验室(熟词)+el饿狼(拼音)",
    G: "实验室被饿狼贴了标签",
    H: "He looked at the label on the bottle.",
    I: "他仔细地看着瓶上的标签。"
}, {
    B: "lack",
    C: "[læk]",
    D: "vt./vi.没有，缺乏；n.缺乏，短缺的东西",
    E: "la+ck",
    F: "la辣(拼音)+ck厨师(熟词cook)",
    G: "没有辣椒让厨师很发愁",
    H: "Despite his lack of experience, he got the job.",
    I: "他虽然经验不足，但还是获得了这份工作。"
}, {
    B: "layer",
    C: "[ˈleɪə(r)]",
    D: "n.层，层次",
    E: "lay+er",
    F: "lay放置(熟词)+er儿(拼音)",
    G: "分层放置好儿子的衣服",
    H: "Everything was covered with a fine layer of dust.",
    I: "每件物品上面都覆盖着一层细细的灰尘。"
}, {
    B: "meanwhile",
    C: "[ˈmi:nwaɪl]",
    D: "adv.同时，其间",
    E: "mean+while",
    F: "mean意思+while当...时候",
    G: "同时，说单词时也要说意思",
    H: "I continued working, meanwhile, he went out shopping.",
    I: "我继续工作,这期间他出去买东西。"
}, {
    B: "mildly",
    C: "[ˈmaɪldlɪ]",
    D: "adv.温和地，轻微地",
    E: "mild+ly",
    F: "mild温和的(熟词)+ly老爷(拼音)",
    G: "要温和地和老爷说话",
    H: "He put the case very mildly.",
    I: "他把情况说得十分婉转。"
}, {
    B: "moveable",
    C: "['mu:vəbl]",
    D: "n.可移动的，活动的",
    E: "move+able",
    F: "move移动+able可以",
    G: "移动那些可以移动的东西",
    H: "The walls inside the museum are moveable.",
    I: "博物馆的内墙是可以移动的。"
}, {
    B: "nationwide",
    C: "[ˌneɪʃnˈwaɪd]",
    D: "adj.全国范围的，全国性的",
    E: "nation+wide",
    F: "nation国家+wide宽的",
    G: "国家在全国范围内建设宽阔的马路",
    H: "A nationwide survey found that some people think too much about life.",
    I: "一个全国性调查发现一些人对生活思考太多。"
}, {
    B: "nosebleed",
    C: "[ˈnəʊzbli:d]",
    D: "n.流鼻血，鼻出血",
    E: "nose+bleed",
    F: "nose鼻+bleed流血",
    G: "我流鼻血了",
    H: "Whenever I have a cold I get a nosebleed.",
    I: "每次我感冒都会流鼻血。"
}, {
    B: "optimistic",
    C: "[ˌɒptɪ'mɪstɪk]",
    D: "adj.乐观的，乐观主义的",
    E: "op+tim+is+tic",
    F: "op藕片(拼音)+tim蒂姆(熟词Tim)+is是(熟词)+tic体操(拼音)",
    G: "吃藕片的蒂姆是一名乐观的体操员",
    H: "He is known for his optimistic can-do attitude.",
    I: "他因乐观敢闯而闻名。"
}, {
    B: "outbreak",
    C: "['aʊtbreɪk]",
    D: "n.（战争的）爆发，（疾病的）发作",
    E: "out+break",
    F: "out出去+break打破",
    G: "战争爆发，出去就会被打破头",
    H: "The cholera outbreak has been contained.",
    I: "霍乱的爆发已被遏制住。"
}, {
    B: "photographer",
    C: "[fəˈtɒgrəfə(r)]",
    D: "n.摄影师",
    E: "photo+graph+er",
    F: "photo照片(熟词)+graph图表(熟词)+er儿(拼音)",
    G: "摄影师在照片上画个图表给儿子",
    H: "He wants to be a photographer.",
    I: "他想成为一名摄影师。"
}, {
    B: "physician",
    C: "[fɪ'zɪʃ(ə)n]",
    D: "n.[医]医师，内科医师",
    E: "physi+ci+an",
    F: "physi(cs)物理(熟词)+ci刺(拼音)+an一(熟词)",
    G: "医师在物理书上刺了一根针",
    H: "The old physician was unfrocked by the Medical Association.",
    I: "这位老医生被医师公会除名。"
}, {
    B: "poison",
    C: "['pɒɪz(ə)n]",
    D: "n.毒药，毒物",
    E: "po+i+son",
    F: "po婆(谐音)+i我(熟词I)+son儿子(熟词)",
    G: "婆婆给我和儿子下毒药",
    H: "He  wanted to  walk  down  these  poison.",
    I: "他想通过散步消除这些毒素。"
}, {
    B: "postage",
    C: "[ˈpəʊstɪdʒ]",
    D: "n.邮费，邮资",
    E: "post+age",
    F: "post邮件+age年龄",
    G: "发邮件时按年龄收邮费",
    H: "This dictionary is 100 yuan, postage included.",
    I: "这本词典连邮费共100元。"
}, {
    B: "privately",
    C: "['praɪvɪtlɪ]",
    D: "adv.私下地，秘密地",
    E: "private+ly",
    F: "private私人的(熟词)+ly老爷(拼音)",
    G: "我私人的东西被老爷私下拿走了",
    H: "Most local radio stations are privately-owned.",
    I: "大多数地方电台为私人所有。"
}, {
    B: "ray",
    C: "[reɪ]",
    D: "n.射线，光线",
    E: "day",
    F: "day天",
    G: "那天小草(r)发出了射线",
    H: "A ray of sunshine shone through a gap in the clouds.",
    I: "一缕阳光透过云隙照射下来。"
}, {
    B: "settlement",
    C: "['set(ə)lm(ə)nt]",
    D: "n.定居，解决",
    E: "settle+ment",
    F: "settle解决(熟词)+ment门徒(拼音)",
    G: "解决了门徒定居的问题",
    H: "We hope for a lasting settlement of all these troubles.",
    I: "我们希望这些纠纷能获得永久的解决。"
}, {
    B: "swallow",
    C: "['swɒləʊ]",
    D: "vi.吞下，咽下；vt.忍受，吞没",
    E: "sw+allow",
    F: "sw是我(拼音)+allow允许(熟词)",
    G: "是我允许他吞下这把剑的",
    H: "You are asked to swallow a capsule containing vitamin B.",
    I: "你要服一粒维生素B胶囊。"
}, {
    B: "tablet",
    C: "['tæblət]",
    D: "n.药片，碑，匾",
    E: "tab+let",
    F: "tab标签+let让",
    G: "看标签能让人知道如何服用药片",
    H: "Take two tablets with water.",
    I: "用水送服两片药。"
}, {
    B: "technical",
    C: "[ˈteknɪkl]",
    D: "adj.技术（上）的，技巧方面的",
    E: "te+ch+ni+cal",
    F: "te特(拼音)+ch吃(拼音)+ni泥(拼音)+cal(l)打电话(熟词)",
    G: "特务吃泥时打电话求技术支持",
    H: "I have also learned a lot of technical skills.",
    I: "我还要学到很多的技术技能。"
}, {
    B: "technically",
    C: "[ˈteknɪklɪ]",
    D: "adv.技术上，工艺上",
    E: "technical+ly",
    F: "technical技术的(熟词)+ly老爷(拼音)",
    G: "懂技术的老爷技术上很牛",
    H: "He is a technically accomplished musician.",
    I: "他是一位技艺娴熟的音乐家。"
}, {
    B: "tense",
    C: "[tens]",
    D: "adj.紧张的，拉紧的",
    E: "ten+se",
    F: "ten十(熟词)+se色(拼音)",
    G: "五光十色的场面让他觉得紧张",
    H: "It is difficult to be natural when one is tense.",
    I: "人在紧张的时候很难泰然自若。"
}, {
    B: "tight",
    C: "[taɪt]",
    D: "adj.紧的，牢的，紧密的",
    E: "light",
    F: "light灯",
    G: "把灯头拧紧一点",
    H: "Hold tight, I'm going to let go.",
    I: "你抓紧，我就要放手了。"
}, {
    B: "timetable",
    C: "['taɪmteɪbl]",
    D: "n.时间表，时刻表",
    E: "time+table",
    F: "time时间+table桌子",
    G: "时间表就是把时间刻在桌子上",
    H: "We have to fit the special train into the timetable.",
    I: "我们必须得把这专列安排进火车行车时刻表。"
}, {
    B: "tolerate",
    C: "[ˈtɒləreɪt]",
    D: "vt.忍受，容忍",
    E: "to+le+rate",
    F: "to到(熟词)+le了(拼音)+rate等级(熟词)",
    G: "我忍受他已经到了一定等级",
    H: "I will not tolerate that sort of behaviour in my class.",
    I: "在我的课堂上我不会容许那种行为。"
}, {
    B: "uncertain",
    C: "[ʌnˈsɜ:tn]",
    D: "adj.无把握的，不确切的",
    E: "un+certain",
    F: "un不(词缀)+certain确定的(熟词)",
    G: "不确定的事做了也是无把握的",
    H: "He was uncertain about his brother's intentions.",
    I: "他拿不准他哥哥的意图是什么。"
}, {
    B: "unwilling",
    C: "[ʌn'wɪlɪŋ]",
    D: "adj.不乐意的，不愿意的",
    E: "un+willing",
    F: "un不(词缀)+willing乐意的(熟词)",
    G: "不乐意去上学",
    H: "What part of our plan are we each unwilling to change?",
    I: "在我们的计划中，有哪部分是我们各自不愿意改变的？"
}, {
    B: "update",
    C: "[ˌʌpˈdeɪt]",
    D: "vt.更新，使现代化",
    E: "up+date",
    F: "up向上+date日期",
    G: "向上看到日期更新了",
    H: "They decided to update the computer systems.",
    I: "他们决定更新计算机设备。"
}, {
    B: "cholera",
    C: "['kɒlərə]",
    D: "n.[内科]霍乱",
    E: "ch+ol+era",
    F: "ch吃(拼音)+ol职场女性(熟词officelady)+era时代(熟词)",
    G: "吃货职场女性在霍乱时代存活下来了",
    H: "The cholera outbreak has been contained.",
    I: "霍乱的爆发已被遏制住。"
}, {
    B: "accusation",
    C: "[ˌækju:ˈzeɪʃn]",
    D: "n.指责，谴责，指控",
    E: "accus+ation",
    F: "accus(e)指责(熟词)+ation阿婶(谐音)",
    G: "指责阿婶偷东西",
    H: "The accusation is wholly without foundation.",
    I: "这项指控完全没有依据。"
}, {
    B: "architecture",
    C: "['ɑ:kɪtektʃə]",
    D: "n.建筑学，建筑风格，结构",
    E: "ar+chi+tec+ture",
    F: "ar矮人(拼音)+chi吃(拼音)+tec特产(拼音)+ture扯(谐音)",
    G: "矮人边吃特产边扯着建筑学图纸看",
    H: "Architecture is his line.",
    I: "搞建筑是他的本行。"
}, {
    B: "certainty",
    C: "['sɜ:t(ə)ntɪ]",
    D: "n.确实的事，必然",
    E: "certain+ty",
    F: "certain一定的(熟词)+ty踢(谐音)",
    G: "狗一定会踢球，这是确实的事",
    H: "Her return to the team now seems a certainty.",
    I: "她的归队现在似乎已成定局。"
}, {
    B: "concise",
    C: "[kən'saɪs]",
    D: "adj.简明的，简洁的",
    E: "con+cise",
    F: "con一起(词缀)+cise晒死(谐音)",
    G: "一起晒死，简明粗暴",
    H: "The explanation in this dictionary is concise and to the point.",
    I: "这部词典里的释义简明扼要。"
}, {
    B: "conflict",
    C: "['kɒnflɪkt]",
    D: "n.冲突，争执，争论",
    E: "con+fli+ct",
    F: "con康(谐音)+fli奋力(拼音)+ct冲突(拼音)",
    G: "康熙奋力化解冲突",
    H: "He is constantly conflicting with the authorities.",
    I: "他总是和当局过不去。"
}, {
    B: "constantly",
    C: "[ˈkɒnstəntlɪ]",
    D: "adv.不断地",
    E: "con+st+ant+ly",
    F: "con康(谐音)+st石头(拼音)+ant蚂蚁(熟词)+ly梨(谐音)",
    G: "康熙看到石头上的蚂蚁不断地爬向梨",
    H: "Language is constantly and gradually evolving.",
    I: "语言在不断地缓慢发展。"
}, {
    B: "cooperative",
    C: "[kəʊ'ɒpərətɪv]",
    D: "adj.合作的",
    E: "co+opera+tive",
    F: "co一起(词缀)+opera歌剧(熟词)+tiveTV(谐音)",
    G: "一起合作的歌剧在TV上播出",
    H: "We want it to be a positive and cooperative relationship.",
    I: "我们希望它是一种积极的、合作的关系。"
}, {
    B: "delight",
    C: "[dɪˈlaɪt]",
    D: "n.快乐，高兴，喜悦；vt.使高兴，使欣喜",
    E: "de+light",
    F: "de弟(谐音)+light灯(熟词)",
    G: "弟弟打着灯很快乐",
    H: "I read your letter with great delight.",
    I: "我非常愉快地读了你的来信。"
}, {
    B: "delighted",
    C: "[dɪˈlaɪtɪd]",
    D: "adj.欣喜的，快乐的",
    E: "de+light+ed",
    F: "de弟(谐音)+light灯(熟词)+ed二弟(拼音)",
    G: "弟弟看到灯被二弟修好很欣喜",
    H: "I know she will be delighted to see you.",
    I: "我知道她见到你会很高兴的。"
}, {
    B: "demanding",
    C: "[dɪˈmɑ:ndɪŋ]",
    D: "adj.要求很高的，费力的",
    E: "demand+ing",
    F: "demand要求(熟词)+ing鹰(谐音)",
    G: "要求很高的鹰饿死了",
    H: "This job is very demanding.",
    I: "这项工作很费力。"
}, {
    B: "deny",
    C: "[dɪ'naɪ]",
    D: "vt.拒绝给予",
    E: "de+ny",
    F: "de弟(谐音)+ny奶油(拼音)",
    G: "拒绝给弟弟吃奶油",
    H: "He didn't deny the facts.",
    I: "他没有否认这些事实。"
}, {
    B: "department",
    C: "[dɪˈpɑ:tmənt]",
    D: "n.部门，部，处",
    E: "de+part+ment",
    F: "de弟(谐音)+part部分(熟词)+ment门徒(拼音)",
    G: "弟弟带着部分门徒去部门办公室",
    H: "He moved to the sales department.",
    I: "他转到了销售部。"
}, {
    B: "enquiry",
    C: "[ɪn'kwaɪərɪ]",
    D: "n.询问，询盘",
    E: "en+qu+iry",
    F: "en摁(拼音)+qu去(拼音)+iry爱人妖(谐音)",
    G: "去摁住他问他是不是爱上人妖了。",
    H: "The charges arise out of a long-running fraud enquiry by Merseyside police.",
    I: "这些指控是默西赛德郡警方对诈骗案进行长期调查后提出的。"
}, {
    B: "essential",
    C: "[ɪ'senʃ(ə)l]",
    D: "adj.必不可少的，本质的",
    E: "es+sen+tial",
    F: "es二十(拼音)+sen森(拼音)+tial守(谐音)",
    G: "雇佣二十个森林守卫是必不可少的",
    H: "I do not know whether you realize it, but this condition is essential to us.",
    I: "我不知道你是否了解，但是，这个条件对我们是必要的。"
}, {
    B: "infection",
    C: "[ɪnˈfekʃn]",
    D: "n.传染病，传染，感染",
    E: "infec+tion",
    F: "infec(t)传染(熟词)+tion神(谐音)",
    G: "传染病传染给了神",
    H: "The infection may last for up to three months.",
    I: "感染可能持续长达三个月。"
}, {
    B: "infectious",
    C: "[ɪn'fekʃəs]",
    D: "adj.传染的，传染性的",
    E: "infec+ious",
    F: "infec(t)感染(熟词)+tious蛇死(谐音)",
    G: "被传染病感染的蛇死了",
    H: "Measles is an infectious disease.",
    I: "麻疹是种传染病。"
}, {
    B: "institution",
    C: "[ɪnstɪ'tjuːʃ(ə)n]",
    D: "n.制度，建立",
    E: "ins+ti+tu+tion",
    F: "ins隐士(谐音)+ti踢(拼音)+tu兔(拼音)+tion神(谐音)",
    G: "隐士建立制度：踢走兔子的人可以当神",
    H: "There was never an official institution of censorship in Albania.",
    I: "在阿尔巴尼亚从未设立过官方审查制度。"
}, {
    B: "investigation",
    C: "[ɪnˌvestɪ'geɪʃ(ə)n]",
    D: "n.调查，调查研究",
    E: "invest+i+gation",
    F: "invest投资(熟词)+i我(熟词I)+gation给神(谐音)",
    G: "调查投资人时我给了神一笔钱",
    H: "This matter bears investigation.",
    I: "这件事情需要调查。"
}, {
    B: "motivation",
    C: "[məʊtɪ'veɪʃ(ə)n]",
    D: "n.动机",
    E: "mo+ti+vation",
    F: "mo魔(拼音)+ti踢(拼音)+vation蛙神(谐音)",
    G: "魔鬼踢了蛙神是别有动机的",
    H: "Do you have the motivation?",
    I: "你有实现它的动力吗？"
}, {
    B: "navigation",
    C: "[nævɪ'geɪʃ(ə)n]",
    D: "n.航行，航海",
    E: "na+vi+ga+tion",
    F: "na娜(拼音)+vi胜利(谐音V)+ga咖(拼音)+tion婶(谐音)",
    G: "娜娜航行胜利归来后把咖喱送给婶婶",
    H: "Navigation is difficult on this river because of the hide rock.",
    I: "因为有暗礁，在这条河上航行很困难。"
}, {
    B: "neighbourhood",
    C: "['neɪbəhʊd]",
    D: "n.附近，邻近，居住区",
    E: "neighbour+hood",
    F: "neighbour邻居(熟词)+hood虎的(谐音)",
    G: "附近的邻居都是老虎的后裔",
    H: "It seemed like a good neighbourhood to raise my children.",
    I: "它看起来像是一个有利于我的孩子们成长的理想居住区。"
}, {
    B: "previous",
    C: "['pri:vɪəs]",
    D: "adj.先前的，以前的；adv.在前",
    E: "pre+vi+ous",
    F: "pre仆人(拼音)+vi胜利(谐音V)+ous藕丝(拼音)",
    G: "仆人给先前获胜的人喂藕丝",
    H: "She has a teenage daughter from a previous marriage.",
    I: "她前一段婚姻有一个十几岁的女儿。"
}, {
    B: "profession",
    C: "[prə'feʃ(ə)n]",
    D: "n.职业，专业，声明",
    E: "pro+fession",
    F: "pro飘柔(拼音)+fession飞神(谐音)",
    G: "他的职业是卖飘柔的飞神",
    H: "She was at the very top of her profession.",
    I: "她是她那个行业中的佼佼者。"
}, {
    B: "responsible",
    C: "[rɪ'spɒnsəbl]",
    D: "adj.有责任的，负责的",
    E: "respons+ible",
    F: "respons(e)答复(熟词)+ible阿伯(谐音)",
    G: "我有责任答复阿伯",
    H: "Our duty is to hold ourselves responsible to the people.",
    I: "我们的责任，是向人民负责。"
}, {
    B: "surrounding",
    C: "[səˈraʊndɪŋ]",
    D: "adj.周围的",
    E: "sur+round+ing",
    F: "sur俗人(拼音)+round圆(熟词)+ing鹰(谐音)",
    G: "俗人画个圆圈住鹰周围的土地",
    H: "He didn't pay much attention to his surroundings.",
    I: "他没有多注意他周围的环境。"
}, {
    B: "temporary",
    C: "['temprərɪ]",
    D: "adj.临时的，短暂的，暂时的",
    E: "tem+po+ra+ry",
    F: "tem特卖(拼音)+po婆(拼音)+ra拉(谐音)+ry人妖(拼音)",
    G: "特卖会上婆婆拉着的人妖是临时雇员",
    H: "Our temporary difficulties will soon ravel.",
    I: "我们的暂时困难将很快得到解决。"
}, {
    B: "Viking",
    C: "[ˈvaɪkɪŋ]",
    D: "n.北欧海盗，斯堪的纳维亚人",
    E: "Vi+king",
    F: "Vi歪(谐音)+king国王(熟词)",
    G: "歪脖子的国王是北欧海盗",
    H: "Six hundred Viking boats attacked Hamburg, which was set on fire.",
    I: "600艘海盗船袭击汉堡，汉堡惨遭焚烧。"
}, {
    B: "acquire",
    C: "[ə'kwaɪə(r)]",
    D: "vt.获得，得到",
    E: "ac+qui+re",
    F: "acAC米兰(编码)+qui快(谐音)+re热(拼音)",
    G: "AC米兰球员快速进球获得热烈的欢呼",
    H: "Students examined how children acquire language.",
    I: "学生们仔细研究儿童如何习得语言。"
}, {
    B: "amateur",
    C: "[ˈæmətə(r)]",
    D: "n.业余爱好者，外行；adj.业余的",
    E: "ama+te+ur",
    F: "ama阿妈(拼音)+te特(拼音)+ur你的(编码)",
    G: "业余爱好者的阿妈特别喜欢你的作品",
    H: "Angela says she longs to join an amateur dramatics class.",
    I: "安杰拉说她渴望参加业余戏剧班。"
}, {
    B: "aspect",
    C: "[ˈæspekt]",
    D: "n.方面，朝向，面貌",
    E: "as+pet+c",
    F: "as像(熟词)+pet宠物(熟词)+c耳朵(编码)",
    G: "从这方面看这像宠物的耳朵",
    H: "He has made progress in every aspect.",
    I: "他在各方面都有进步。"
}, {
    B: "assess",
    C: "[əˈses]",
    D: "vt.评估，估计，估价",
    E: "ass+e+ss",
    F: "ass驴子(熟词)+e衣服(编码)+ss两个美女(编码)",
    G: "驴在评估衣服穿在两个美女中的哪个身上更好看",
    H: "They assess his house at 15,000 yuan.",
    I: "他们给他房子的估价为15，000元。"
}, {
    B: "assist",
    C: "[ə'sɪst]",
    D: "vt.帮助，协助，援助",
    E: "ass+is+t",
    F: "ass蠢笨的人(熟词)+is是(熟词)+t特(编码)",
    G: "帮助这个蠢笨的人的是特务",
    H: "She had to assist him in opening the gate.",
    I: "她不得不帮他开门。"
}, {
    B: "backward",
    C: "['bækwəd]",
    D: "adj./adv.向后的（地），相反的（地），退步的（地）",
    E: "back+war+d",
    F: "back背(熟词)+war战争(熟词)+d弟(编码)",
    G: "腹背受敌的战争迫使弟弟向后撤退",
    H: "He cut the ball so that it bounded almost backward.",
    I: "他斜削这个球，使其几乎向后弹起。"
}, {
    B: "bravery",
    C: "['breɪvərɪ]",
    D: "n.勇气，勇敢",
    E: "br+a+very",
    F: "br病人(拼音)+a苹果(编码)+very非常(熟词)",
    G: "病人吃完苹果后非常有勇气",
    H: "The story tells of the bravery of a little girl.",
    I: "这个故事讲的是一个小女孩的勇敢事迹。"
}, {
    B: "brightness",
    C: "['braɪtnɪs]",
    D: "n.明亮，亮度，聪颖",
    E: "bright+ne+ss",
    F: "bright明亮的(熟词)+ne哪(吒)(拼音)+ss两个美女(编码)",
    G: "明亮的阳光下哪吒爱上了两个美女",
    H: "A torch symbolizes the brightness of the future.",
    I: "火炬象征光明。"
}, {
    B: "bruise",
    C: "[bruːz]",
    D: "n.擦伤，挫伤，青肿；vt.使受瘀伤，使受挫伤",
    E: "b+rui+se",
    F: "b蜜蜂(编码)+rui蕊(拼音)+se色(拼音)",
    G: "蜜蜂给花蕊上色时擦伤了",
    H: "Her feelings bruise easily.",
    I: "她的感情易受伤害。"
}, {
    B: "Cambridge",
    C: "['kæmbrɪdʒ]",
    D: "n.剑桥",
    E: "c+am+bridge",
    F: "C看见(编码see)+am是(熟词)+bridge桥(熟词)",
    G: "在剑桥我看见的是一座桥",
    H: "He asked me to go to Cambridge with him.",
    I: "他要我和他一起去剑桥。"
}, {
    B: "cautious",
    C: "['kɔ:ʃəs]",
    D: "adj.谨慎的，十分小心的",
    E: "ca+u+tious",
    F: "ca擦(拼音)+u桶(编码)+tious蛇死(谐音)",
    G: "谨慎一点擦桶，不要被蛇咬死",
    H: "The government has been cautious in its response to the report.",
    I: "政府对此报道反应谨慎。"
}, {
    B: "char",
    C: "[tʃɑ:]",
    D: "vt.烧焦",
    E: "cha+r",
    F: "cha茶(拼音)+r草(编码)",
    G: "把泡茶的草烧焦了",
    H: "The meat was slightly charred.",
    I: "肉有些焦了。"
}, {
    B: "characteristic",
    C: "[kærəktə'rɪstɪk]",
    D: "adj.典型的；n.特征",
    E: "character+is+t+ic",
    F: "character性格(熟词)+is是(熟词)+t踢(编码)+ic(e)冰块(熟词)",
    G: "他典型的性格特征是喜欢踢冰块",
    H: "This characteristic marks her off from her sister.",
    I: "这个特征使她与姐姐有所区别。"
}, {
    B: "choke",
    C: "[tʃəuk]",
    D: "vt./vi.（使）窒息",
    E: "ch+o+ke",
    F: "ch吃(拼音)+o蛋(编码)+ke咳(拼音)",
    G: "吃蛋时咳嗽，差点窒息而死",
    H: "Very small toys can choke a baby.",
    I: "很小的玩具可使婴儿窒息。"
}, {
    B: "complex",
    C: "[ˈkɒmpleks]",
    D: "adj.复杂的",
    E: "com+pl+ex",
    F: "com公司(编码)+pl胖了(拼音)+ex前夫(熟词)",
    G: "在公司看到胖了的前夫内心很复杂",
    H: "What he said was too complex for me to understand.",
    I: "他说的太复杂了，我无法了解。"
}, {
    B: "conclusion",
    C: "[kən'klu:ʒ(ə)n]",
    D: "n.结论，结束",
    E: "con+c+lusion",
    F: "con啃(谐音)+c耳朵(编码)+lusion路人(谐音)",
    G: "啃耳朵的路人得出了结论",
    H: "We made a conclusion in the meeting.",
    I: "我们在会议上得出一个结论。"
}, {
    B: "construct",
    C: "[kən'strʌkt]",
    D: "vt.修建，建设",
    E: "con+st+ru+ct",
    F: "con啃(谐音)+st石头(拼音)+ru儒(拼音)+ctCT(编码)",
    G: "啃石头的侏儒修建房子时做CT检查",
    H: "A new office building is being constructed in this city.",
    I: "这个城市正在建造一座新办公楼。"
}, {
    B: "contribute",
    C: "[kən'trɪbju:t]",
    D: "vt./vi.贡献，捐献，捐助",
    E: "con+tr+i+bute",
    F: "con啃(谐音)+tr土人(拼音)+i蜡烛(编码)+bute布特(拼音)",
    G: "爱啃土人蜡烛的布特做了大贡献",
    H: "How do you plan to contribute?",
    I: "你打算如何做出贡献？"
}, {
    B: "credit",
    C: "['kredɪt]",
    D: "n.信用，信誉，贷款",
    E: "c+red+it",
    F: "c看见(编码see)+red红(熟词)+itIT(编码)",
    G: "看见穿红衣的IT男盗刷信用卡",
    H: "When poor people need credit, mail order is the key source.",
    I: "穷人需要赊购时，邮购是主要的方式。"
}, {
    B: "dilemma",
    C: "[dɪ'lemə]",
    D: "n.困境，窘境",
    E: "di+l+emma",
    F: "di弟(拼音)+l棍子(编码)+emma艾玛(熟词Emma)",
    G: "弟弟用棍子逼得艾玛陷入窘境",
    H: "They try to find a way out of their dilemma.",
    I: "他们试图摆脱困境。"
}, {
    B: "disposal",
    C: "[dɪ'spəʊzl]",
    D: "n.处理，清除",
    E: "dis+pos+al",
    F: "dis的士(拼音)+posPOS机(编码)+al暗流(拼音)",
    G: "的士司机把POS机丢进暗流里处理掉",
    H: "This is mainly due to the improper disposal of rubbish by people.",
    I: "这主要是因为人们对垃圾的不正确的处理。"
}, {
    B: "ecology",
    C: "[ɪ'kɒlədʒɪ]",
    D: "n.生态，生态学",
    E: "e+co+lo+gy",
    F: "e鹅(编码)+co可乐(熟词coke)+lo10(象形)+gy鸡(谐音)",
    G: "鹅喝可乐杀10只鸡平衡生态",
    H: "She hopes to study ecology at college.",
    I: "她希望上大学读生态学。"
}, {
    B: "efficiency",
    C: "[ɪ'fɪʃ(ə)nsɪ]",
    D: "n.效率，功效",
    E: "efficien+c+y",
    F: "efficien(t)效率高的(熟词)+c耳朵(编码)+y树枝(编码)",
    G: "效率高的掏耳朵方法是用树枝",
    H: "We were most impressed with your efficiency.",
    I: "你的效率给我们留下很深刻的印象。"
}, {
    B: "enormous",
    C: "[ɪ'nɔ:məs]",
    D: "adj.庞大的，巨大的",
    E: "e+norm+ous",
    F: "e鹅(编码)+norm规范(熟词)+ous殴死(拼音)",
    G: "这只庞大的鹅制定的规范想让大家殴死他",
    H: "But we can not ignore its enormous vitality for its simplicity.",
    I: "可不因为它的简单而忽略了它巨大的生命力。"
}, {
    B: "etc",
    C: "[ɪt'setərə]",
    D: "abbr.等等，诸如此类",
    E: "et+c",
    F: "et外星人(编码)+c耳朵(编码)",
    G: "外星人长了长耳朵、圆耳朵等等",
    H: "They export a lof of fruit, like apples, oranges, lemons, etc.",
    I: "他们进口许多水果，比如苹果、柑橘和柠檬等。"
}, {
    B: "expertise",
    C: "[ˌekspɜ:ˈti:z]",
    D: "n.专门知识（技能等），专家意见",
    E: "expert+is+e",
    F: "expert专家(熟词)+is是(熟词)+e鹅(编码)",
    G: "专家是具备养鹅的专门技能的",
    H: "She has considerable expertise in French history.",
    I: "她研究法国历史有很深的造诣。"
}, {
    B: "guilty",
    C: "['gɪltɪ]",
    D: "adj.内疚的，有罪的",
    E: "gui+l+ty",
    F: "gui鬼(拼音)+l木棍(编码)+ty踢(拼音)",
    G: "鬼把木棍踢走很内疚",
    H: "I feel so guilty and angry about the whole issue.",
    I: "我对整件事深感内疚和气愤。"
}, {
    B: "hover",
    C: "['hɒvə]",
    D: "vi.盘旋，翱翔；n.徘徊，盘旋",
    E: "h+over",
    F: "h椅子(编码)+over上方(熟词)",
    G: "老鹰在椅子上方盘旋",
    H: "Beautiful butterflies hovered above the wild flowers.",
    I: "美丽的蝴蝶在野花上方盘旋。"
}, {
    B: "idiomatic",
    C: "[ˌɪdiəˈmætɪk]",
    D: "adj.惯用的，合乎语言习惯的",
    E: "idiom+at+ic",
    F: "idiom习语(熟词)+at在(熟词)+icIC卡(编码)",
    G: "惯用的习语写在IC卡上",
    H: "In our reading we should always be alert for idiomatic expressions.",
    I: "我们在阅读过程中应经常注意惯用法。"
}, {
    B: "interviewee",
    C: "[ˌɪntəvju:ˈi:]",
    D: "n.参加面试者，接受采访者",
    E: "interview+ee",
    F: "interview采访(熟词)+ee两只鹅(编码)",
    G: "参加面试者要采访这两只鹅",
    H: "Is there any interviewee who is qualified?",
    I: "参加面试的人中有没有合适的？"
}, {
    B: "involve",
    C: "[ɪnˈvɒlv]",
    D: "vt.牵涉，涉及，包括，使参与（卷入）...",
    E: "in+vol+ve",
    F: "in里面(熟词)+vol我(谐音)+ve维E(编码)",
    G: "在里面我把维E偷了会牵涉谁？",
    H: "Don't involve me in your quarrel.",
    I: "不要把我卷进你们的争吵中。"
}, {
    B: "jet",
    C: "[dʒet]",
    D: "n.喷气式飞机",
    E: "j+et",
    F: "j钩子+et外星人",
    G: "喷气式飞机上的钩子勾住了外星人",
    H: "Her private jet landed successfully.",
    I: "她的私人喷气式飞机成功着陆。"
}, {
    B: "kettle",
    C: "['ket(ə)l]",
    D: "n.壶",
    E: "ke+tt+le",
    F: "ke可(拼音)+tt两把伞(编码)+le乐(拼音)",
    G: "水壶可以把两把伞逗乐",
    H: "The kettle is boiling.",
    I: "水开了。"
}, {
    B: "liquid",
    C: "[ˈlɪkwɪd]",
    D: "n.液体",
    E: "liqu+id",
    F: "liqu离去(拼音)+id身份(编码)",
    G: "离去前把身份证丢在液体里",
    H: "Mercury is a liquid at room temperature.",
    I: "水银在室温下为液体。"
}, {
    B: "longitude",
    C: "[ˈlɒŋgɪtju:d]",
    D: "n.经度，经线",
    E: "long+i+tude",
    F: "long长的(熟词)+i蜡烛(编码)+tude兔的(拼音)",
    G: "经度116的长城上有只蜡烛是兔子的",
    H: "The two countries are on the same geographical longitude.",
    I: "这两个国家处于同一地理经度。"
}, {
    B: "loop",
    C: "[lu:p]",
    D: "n.圈，环",
    E: "loo+p",
    F: "loo100(象形)+p皮鞋(编码)",
    G: "100双皮鞋可以绕地球一圈",
    H: "Mrs.Morrell reached for a loop of garden hose.",
    I: "莫雷尔夫人伸手去拿一圈橡胶软管。"
}, {
    B: "manufacture",
    C: "[mænjʊˈfæktʃə]",
    D: "vt./n.制造，加工",
    E: "man+u+fac+ture",
    F: "man人(熟词)+u桶(编码)+fac发财(拼音)+ture尺(谐音)",
    G: "制造工人制桶发财后改卖尺子",
    H: "This method of manufacture evolved out of a long  process of trial.",
    I: "这种制造方法是在长期试验过程中逐步形成的。"
}, {
    B: "mask",
    C: "[mɑ:sk]",
    D: "n.面具，面罩，伪装",
    E: "m+ask",
    F: "m麦当劳(编码)+ask问(熟词)",
    G: "带着面具在麦当劳问路",
    H: "The bank robbers wore masks throughout the raid.",
    I: "劫匪抢劫银行过程中始终戴着面罩。"
}, {
    B: "nerve",
    C: "[nɜ:v]",
    D: "n.神经，胆量",
    E: "ne+r+ve",
    F: "ne哪(吒)(拼音)+r草(编码)+ve维E(编码)",
    G: "发神经的哪吒在草堆里找维E",
    H: "Every nerve in her body was tense.",
    I: "她的每一根神经都绷得紧紧的。"
}, {
    B: "Norman",
    C: "[ˈnɔ:mən]",
    D: "n.诺曼人，诺曼语；adj.诺曼的，诺曼语的",
    E: "No+r+man",
    F: "No不(熟词)+r草(编码)+man男人(熟词)",
    G: "不吃草的男人不是诺曼人",
    H: "The old Norman church was taken down in 1819.",
    I: "老旧的诺曼式教堂在1819年被拆除了。"
}, {
    B: "ointment",
    C: "[ˈɔɪntmənt]",
    D: "n.药膏，油膏",
    E: "o+in+t+ment",
    F: "o洞(编码)+in里(熟词)+t伞(编码)+ment门徒(拼音)",
    G: "洞里打着伞的门徒卖膏药",
    H: "You might put some ointment on that.",
    I: "你应该在上面涂一点药膏。"
}, {
    B: "pedal",
    C: "[ˈpedl]",
    D: "n.踏板，脚蹬",
    E: "pe+da+l",
    F: "pe体育课(编码)+da大(拼音)+l棍子(编码)",
    G: "体育课上用大棍子做成了踏板",
    H: "Your foot falls off the pedal and you stall the car.",
    I: "你的脚离开踏板，汽车便会熄火。"
}, {
    B: "pessimistic",
    C: "[ˌpesɪ'mɪstɪk]",
    D: "adj.悲观的，厌世的",
    E: "pes+simi+st+ic",
    F: "pes配送(拼音)+simi四米(拼音)+st石头(拼音)+icIC卡(编码)",
    G: "悲观的配送员走了四米后在石头旁捡到IC卡",
    H: "I am deeply pessimistic about the future.",
    I: "对将来我深感悲观。"
}, {
    B: "postcode",
    C: "[ˈpəʊstkəʊd]",
    D: "n.邮政编码",
    E: "post+code",
    F: "post邮件+code编码",
    G: "在邮件的编码框填邮政编码",
    H: "Please add the postcode.",
    I: "请把邮编补上。"
}, {
    B: "pump",
    C: "[pʌmp]",
    D: "n.泵，抽水机；vt.（用泵）抽（水）",
    E: "pum+p",
    F: "pum扑面(拼音)+p屁(编码)",
    G: "扑面而来的屁把泵炸了",
    H: "The pump sucked water from the basement.",
    I: "水泵把地下室里的水抽出来了。"
}, {
    B: "ribbon",
    C: "['rɪbən]",
    D: "n.丝带，带状物",
    E: "rib+bo+n",
    F: "rib日本(拼音)+bo伯(拼音)+n门(编码)",
    G: "住在日本的伯伯在门上系丝带",
    H: "The ribbon doesn't tie well.",
    I: "这缎带不好打结。"
}, {
    B: "sceptical",
    C: "[ˈskeptɪkl]",
    D: "adj.怀疑的（美skeptical）",
    E: "s+ce+pti+cal",
    F: "s美女(编码)+ce厕(拼音)+pti菩提(拼音)+cal(l)打电话(熟词)",
    G: "怀疑美女在厕所吃菩提打电话",
    H: "Many experts remain sceptical about his claims.",
    I: "很多专家对他的主张仍然持怀疑态度。"
}, {
    B: "scheme",
    C: "[ski:m]",
    D: "vt.&vi.策划，图谋；n.",
    E: "s+che+me",
    F: "s美女(编码)+che车(拼音)+me我(熟词)",
    G: "美女开着车找我策划",
    H: "He cannot reveal how much money is involved in the scheme.",
    I: "他不能透露该计划投入了多少钱。"
}, {
    B: "severe",
    C: "[sɪ'vɪə(r)]",
    D: "adj.严重的，剧烈的，苛刻的",
    E: "se+ve+re",
    F: "se色(拼音)+ve维E(编码)+re热(拼音)",
    G: "色狼吃完维E后身体发热很严重",
    H: "She has contracted a severe fever.",
    I: "她感染上了严重的热病。"
}, {
    B: "sideways",
    C: "[ˈsaɪdweɪz]",
    D: "adv.往(向、从)一侧，侧着，侧面朝前",
    E: "side+way+s",
    F: "side侧面(熟词)+way路(熟词)+s美女(编码)",
    G: "侧面的路上有美女从一侧走过",
    H: "She sat sideways on the chair.",
    I: "她侧坐在椅子上。"
}, {
    B: "sleeve",
    C: "[sli:v]",
    D: "n.袖子",
    E: "sl+ee+ve",
    F: "sl色狼(拼音)+ee两只鹅(编码)+ve维E(编码)",
    G: "色狼吃了两只鹅后把维E藏在袖子里",
    H: "He rolled up his sleeves and washed his hands.",
    I: "他挽起袖子洗了洗手。"
}, {
    B: "squeeze",
    C: "[skwiːz]",
    D: "n.压榨，紧握；vt.挤，紧握",
    E: "s+quee+ze",
    F: "s蛇(编码)+quee(n)女王(熟词)+ze择(拼音)",
    G: "蛇女王选择压榨平民",
    H: "It was a squeeze in the car with five of them.",
    I: "车里坐了他们5个人，很拥挤。"
}, {
    B: "steward",
    C: "[ˈstju:əd]",
    D: "n.乘务员，服务员",
    E: "st+e+war+d",
    F: "st石头(拼音)+e鹅(编码)+war战争(熟词)+d狗(编码dog)",
    G: "乘务员抱起石头上的鹅加入战争救了狗",
    H: "He works as a steward in this airline company.",
    I: "他在这家航空公司担任乘务工作。"
}, {
    B: "stewardess",
    C: "[ˌstju:əˈdes]",
    D: "n.女乘务员",
    E: "steward+e+ss",
    F: "steward乘务员(熟词)+e鹅(编码)+ss两个美女(编码)",
    G: "女乘务员把鹅卖给了两个美女",
    H: "Maybe America stewardess is one of the hottest.",
    I: "可能美国空姐是最火辣的空姐之一。"
}, {
    B: "surroundings",
    C: "[səˈraʊndɪŋz]",
    D: "n.周围的事物，环境",
    E: "sur+round+ing+s",
    F: "sur俗人(拼音)+round圆(熟词)+ing鹰(谐音)+s蛇(编码)",
    G: "俗人画个圆圈住鹰与蛇周围的事物",
    H: "They live in very comfortable surroundings.",
    I: "他们生活的环境很舒适。"
}, {
    B: "suspect",
    C: "[ˈsʌspekt]",
    D: "vt.怀疑，认为；n.嫌疑犯，被怀疑者",
    E: "sus+pe+ct",
    F: "sus苏苏(拼音)+pe体育课(编码)+ctCT(编码)",
    G: "老师怀疑苏苏翘了体育育课去做CT检查",
    H: "They tailed after the suspect.",
    I: "他们跟踪那个嫌疑犯。"
}, {
    B: "swell",
    C: "[swel]",
    D: "vi./vt.（使）膨胀，隆起",
    E: "s+well",
    F: "s美女(编码)+well好(熟词)",
    G: "内心膨胀的美女觉得自己很好",
    H: "Her leg has swollen badly.",
    I: "她的腿肿得很厉害。"
}, {
    B: "switch",
    C: "[swɪtʃ]",
    D: "n.开关，转换；vt.转换",
    E: "s+witch",
    F: "s蛇(编码)+witch女巫(熟词)",
    G: "蛇打开了女巫的开关",
    H: "Where is the light switch?",
    I: "电灯开关在哪儿?"
}, {
    B: "swollen",
    C: "[ˈswəʊlən]",
    D: "adj.肿胀的，膨胀的",
    E: "s+wo+ll+en",
    F: "s美女(编码)+wo我(拼音)+ll11(象形)+en摁(拼音)",
    G: "美女把我的11个伤口摁肿胀了",
    H: "My eyes were so swollen that I could hardly see.",
    I: "我的眼睛肿得很厉害，几乎看不到东西。"
}, {
    B: "thorough",
    C: "[ˈθʌrə]",
    D: "adj.彻底的，详尽的",
    E: "th+o+rough",
    F: "th土豪(拼音)+o蛋(编码)+rough粗糙的(熟词)",
    G: "土豪敷了鸡蛋皮肤彻底变粗糙了",
    H: "We are making a thorough investigation.",
    I: "我们正在进行彻底调查。"
}, {
    B: "thrill",
    C: "[θrɪl]",
    D: "vt.使激动，使胆战心惊",
    E: "th+r+ill",
    F: "th土豪(拼音)+r草(编码)+ill病(熟词)",
    G: "土豪吃草生病了使我很激动",
    H: "It gave me a big thrill to meet my favourite author in person.",
    I: "能见到我最喜欢的作者本人使我感到兴奋不已。"
}, {
    B: "typist",
    C: "[ˈtaɪpɪst]",
    D: "n.打字员",
    E: "typ+is+t",
    F: "typ(e)打字(熟词)+is是(熟词)+t伞(编码)",
    G: "打字员打字时是打着伞的",
    H: "I'm quite a fast typist.",
    I: "我打字相当快。"
}, {
    B: "unbearable",
    C: "[ʌnˈbeərəbl]",
    D: "adj.不能容忍的，难以忍受的",
    E: "un+bear+able",
    F: "un联合国(编码)+bear熊(熟词)+able能(熟词)",
    G: "在联合国熊能检举不能容忍的行为",
    H: "The heat was unbearable.",
    I: "酷热无法忍受。"
}, {
    B: "variety",
    C: "[vəˈraɪətɪ]",
    D: "n.变化，多样（化），多变（性）",
    E: "v+ar+ie+ty",
    F: "v胜利(编码)+ar矮人(拼音)+ie浏览器(编码)+ty太阳(拼音)",
    G: "胜利后矮人在浏览器上看太阳的变化",
    H: "Dealing with customers adds variety to the job.",
    I: "因要同顾客打交道，工作显得丰富多彩。"
}, {
    B: "victim",
    C: "['vɪktɪm]",
    D: "n.受害者，遇害者，遇难者",
    E: "vi+c+tim",
    F: "vi胜利(谐音V)+c看见(编码see)+tim提姆(熟词Tim)",
    G: "比赛胜利后看见提姆成了受害者",
    H: "Qu Yuan suffered banishment as the victim of a court intrigue.",
    I: "屈原成为朝廷中钩心斗角的牺牲品，因而遭到放逐。"
}, {
    B: "vital",
    C: "['vaɪtl]",
    D: "adj.至关重要的，必要的",
    E: "v+it+al",
    F: "v胜利(编码)+itIT(编码)+al阿狸(编码)",
    G: "胜利前IT男为阿狸赢取了至关重要的一票",
    H: "The port is vital to supply relief to millions of drought victims.",
    I: "这个港口对向数百万旱灾灾民提供救援物资是至关重要的。"
}, {
    B: "Wales",
    C: "[weɪlz]",
    D: "n.威尔士（英）",
    E: "wa+le+s",
    F: "wa娃(拼音)+le乐(拼音)+s美女(编码)",
    G: "威尔士的娃娃都喜欢快乐的美女",
    H: "England，Scotland and Wales compose the island of Great Britain.",
    I: "英格兰、苏格兰和威尔士组成大不列颠岛国。"
}, {
    B: "watery",
    C: "[ˈwɔ:tərɪ]",
    D: "adj.（似）水的",
    E: "water+y",
    F: "water水(熟词)+y弹弓(编码)",
    G: "喝水时用弹弓打到了似水的眼睛",
    H: "A watery light began to show through the branches.",
    I: "一缕微弱的光线透过树枝。"
}, {
    B: "wrist",
    C: "[rɪst]",
    D: "n.手腕",
    E: "w+ri+st",
    F: "w皇冠(编码)+ri日(拼音)+st石头(拼音)",
    G: "戴皇冠的日本人被石头砸断了手腕",
    H: "He caught her by the wrist.",
    I: "他抓住她的手腕。"
}, {
    B: "pan",
    C: "[pæn]",
    D: "n.平底锅",
    E: "pan",
    F: "pan盘",
    G: "盘子放在平底锅上面",
    H: "The eggs were frying in the pan.",
    I: "鸡蛋正在平底锅里煎。"
}, {
    B: "combination",
    C: "[ˌkɔmbiˈneiʃən]",
    D: "n.联合，结合，组合，[化学]化合",
    E: "com+bi+nation",
    F: "com(e)来(熟词)+bi笔(拼音)+nation国家(熟词)",
    G: "我们来用笔画一个联合国",
    H: "What an unusual combination of flavours!",
    I: "多么与众不同的混合风味啊！"
}, {
    B: "accurate",
    C: "['ækjʊrət]",
    D: "adj.精确的",
    E: "ac+cu+rate",
    F: "ac艾克(谐音)+cu醋(拼音)+rate速度(熟词)",
    G: "精确的算出艾克买醋的速度",
    H: "Broadcast news was accurate and reliable but deadly dull.",
    I: "新闻广播准确可靠但却非常枯燥。"
}, {
    B: "consist",
    C: "[kənˈsist]",
    D: "vi.由…组成，在于，符合",
    E: "con+si+st",
    F: "con看(谐音)+si四(拼音)+st石头(拼音)",
    G: "看看这个东西是由四块石头",
    H: "A healthy diet should consist of wholefood.",
    I: "健康饮食应由全天然食物构成。"
}, {
    B: "constant",
    C: "['kɒnst(ə)nt]",
    D: "adj.不变的，恒定的，",
    E: "con+st+ant",
    F: "con看(谐音)+st石头(拼音)+ant蚂蚁(熟词)",
    G: "看石头上的蚂蚁一直不变",
    H: "It's a constant struggle to try to keep them up to par.",
    I: "要让他们达标，需要不断努力。"
}, {
    B: "consistent",
    C: "[kən'sɪst(ə)nt]",
    D: "adj.一致的，始终如一的",
    E: "consi+s+tent",
    F: "consi康熙(谐音)+s蛇(编码)+tent帐篷(熟词)",
    G: "康熙需要与蛇在帐篷里保持一致的姿势",
    H: "He was rational and consistent in the conduct of his affairs.",
    I: "他处理私事时头脑清楚，始终如一。"
}, {
    B: "ankle",
    C: "['æŋk(ə)l]",
    D: "n.踝关节，踝",
    E: "an+kle",
    F: "an一(熟词)+kle可乐(拼音)",
    G: "被一瓶可乐砸中了踝关节",
    H: "He had wrenched his ankle badly from the force of the fall.",
    I: "他因摔倒而严重扭伤了脚踝。"
}, {
    B: "bandage",
    C: "['bændɪdʒ]",
    D: "vt.用绷带包扎；n.绷带",
    E: "band+age",
    F: "band乐队+age年龄",
    G: "乐队成员年龄大了，受伤就用绷带包扎",
    H: "The bandage must be put on when the blister breaks.",
    I: "水疱一旦破了就必须用绷带包扎起来。"
}, {
    B: "barrier",
    C: "['bærɪə]",
    D: "n.障碍物，屏障，界线，vt.把…关入栅栏",
    E: "bar+ri+er",
    F: "bar酒吧(熟词)+ri日(拼音)+er儿(拼音)",
    G: "酒吧老板每日让儿子在门口设障碍物",
    H: "The Yangtze river is a natural barrier to the north-east.",
    I: "长江是东北方向的一道天然屏障。"
}, {
    B: "infect",
    C: "[ɪnˈfekt]",
    D: "vt.感染，传染",
    E: "in fact",
    F: "in fact事实上",
    G: "事实上他被感染了非典",
    H: "A single mosquito can infect a large number of people.",
    I: "一只蚊子就能传染很多人。"
}, {
    B: "accomplish",
    C: "[ə'kʌmplɪʃ]",
    D: "vt.完成，实现，达到",
    E: "ac+com+pli+sh",
    F: "ac艾克(谐音)+com(e)来(熟词)+pli霹雳(拼音)+sh是(拼音)",
    G: "艾克过来跳霹雳舞是为了完成任务",
    H: "To accomplish his own end, he placed collective interests in the back of his mind.",
    I: "为了达到个人目的，他把集体利益置之脑后。"
}, {
    B: "accuse",
    C: "[ə'kju:z]",
    D: "vt.指责，指控，谴责",
    E: "ac+cu+se",
    F: "ac艾克(谐音)+cu粗(拼音)+se色(拼音)",
    G: "艾克指责这个粗人好色",
    H: "I hate it when people accuse us of that.",
    I: "我讨厌别人就那件事指责我们。"
}, {
    B: "representative",
    C: "[ˌreprɪ'zentətɪv]",
    D: "n.代表；adj.代表性的",
    E: "re+present+at+ive",
    F: "re热(拼音)+present礼物(熟词)+at在(熟词)+ive伊芙(谐音)",
    G: "代表把装满热狗的礼物送给在房里的伊芙",
    H: "He is a representative for the shipping company.",
    I: "他是轮船公司的一个代表。"
}, {
    B: "revolutionary",
    C: "[revə'lu:ʃənərɪ]",
    D: "adj.革命的，创新的；n.革命者，革新者",
    E: "revolution+a+ry",
    F: "revolution革命(熟词)+a一(熟词)+ry人妖(拼音)",
    G: "革命运动中一个人妖叛变了",
    H: "On 6 July a People's Revolutionary Government was constituted.",
    I: "7月6日，人民革命政府正式成立。"
}, {
    B: "submit",
    C: "[səb'mɪt]",
    D: "vi.服从；vt.使服从",
    E: "sub+mi+t",
    F: "sub苏伯(拼音)+mi秘(拼音)+t特(编码)",
    G: "苏伯秘密地服从了特务",
    H: "He was losing the fight but he would not submit.",
    I: "他战败了，但不屈服。"
},
// 1
{
    B: "salty",
    C: "[ˈsɔ:ltɪ]",
    D: "adj.咸的",
    E: "s+al+ty",
    F: "s蛇(编码)+al阿狸(拼音)+ty太阳(拼音)",
    G: "蛇被阿狸放在太阳下晒咸了",
    H: "The soup had a very salty taste.",
    I: "汤的味道很咸。"
}, {
    B: "forever",
    C: "[fər'evə(r)]",
    D: "adv.永远",
    E: "for+ever",
    F: "for为了+ever永远",
    G: "他努力是为了永远和你在一起",
    H: "I'll love you forever!",
    I: "我永远爱你！"
}, {
    B: "steady",
    C: "['stedɪ]",
    D: "adj.坚定的，稳定的",
    E: "s+tea+dy",
    F: "s美女(编码)+tea茶(熟词)+dy导演(拼音)",
    G: "坚定的美女把茶泼向导演",
    H: "Our ship began to steady again after a storm.",
    I: "暴风雨过后，我们的轮船又开始变得平稳了。"
}, {
    B: "exhibition",
    C: "[ˌeksɪ'bɪʃn]",
    D: "n.展览会，展览，陈列",
    E: "ex+hi+bition",
    F: "ex前夫(熟词)+hi嗨(熟词)+bition比神(谐音)",
    G: "展览会上前夫很嗨，比神还开心",
    H: "This is the exhibition center.",
    I: "这里是展览中心。"
}, {
    B: "kitten",
    C: "[ˈkɪt(ə)n]",
    D: "n.小猫",
    E: "k+it+ten",
    F: "k机关枪(编码)+itIT(编码)+ten十(熟词)",
    G: "小猫用机关枪射了IT男十次",
    H: "Don't starve the kitten.",
    I: "别饿着小猫。"
}, {
    B: "helmet",
    C: "['helmɪt]",
    D: "n.头盔",
    E: "he+l+met",
    F: "he他(熟词)+l棍子(编码)+met遇见(熟词)",
    G: "他拿着棍子遇见一个戴头盔的人",
    H: "The hamlet can protect the head.",
    I: "头盔可以保护头部。"
}, {
    B: "shadow",
    C: "[ˈʃædəʊ]",
    D: "n.阴影，影子",
    E: "sha+do+w",
    F: "sha杀(拼音)+do做(熟词)+w皇冠(编码)",
    G: "杀手在阴影里做皇冠",
    H: "The trees throw a shadow on the grass.",
    I: "树木在草地上投下了阴影。"
}, {
    B: "ashamed",
    C: "[ə'ʃeɪmd]",
    D: "adj.惭愧的，感到难为情的，耻于……的",
    E: "a+shamed",
    F: "ash灰(熟词)+am是(熟词)+ed过去（词缀）",
    G: "灰是我穿越到过去沾回来的，真惭愧啊",
    H: "What is there to be ashamed of confessing one 's errors.",
    I: "承认自己的错误有什么可羞惭的。"
}, {
    B: "average",
    C: "['ævərɪdʒ]",
    D: "adj.平均的，平常的，典型的",
    E: "a+ve+rage",
    F: "a一(熟词)+ve维E(编码)+rage愤怒(熟词)",
    G: "平均一颗维E打倒一只愤怒小鸟",
    H: `The average commuter journey there is five hours long.  
`,
    I: "那里的通勤一族平均上下班要花5个小时。"
}, {
    B: "effect",
    C: "[ɪ'fekt]",
    D: "n.效果",
    E: "e+ff+ect",
    F: "e鹅(编码)+ff两把斧头(编码)+ect二餐厅(拼音)",
    G: "鹅拿着两把斧头去二餐厅当厨师的效果如何",
    H: "The whole effect is cool.",
    I: "整体效果很好。"
}, {
    B: "relaxation",
    C: "[ˌri:lækˈseɪʃn]",
    D: "n.松弛，放松",
    E: "relax+ation",
    F: "relax放松(熟词)+ation阿婶(谐音)",
    G: "做完放松运动的阿婶，皮肤不再松弛",
    H: "Focus on the feeling of relaxation.",
    I: "全身心体会放松的感觉。"
}, {
    B: "tremble",
    C: "['tremb(ə)l]",
    D: "vi.颤抖",
    E: "tr+em+ble",
    F: "tr土人+em噩梦+ble病了",
    G: "土人在噩梦里病了颤抖起来",
    H: "His hands tremble from overdrink.",
    I: "他的双手因饮酒过度而颤抖。"
}, {
    B: "chemist",
    C: "['kemɪst]",
    D: "n.化学家",
    E: "che+mi+st",
    F: "che车+mi米+st石头",
    G: "化学家车上有米和石头",
    H: "She worked as a research chemist.",
    I: "她曾经是化学研究员。"
}, {
    B: "translation",
    C: "[trænsˈleɪʃn]",
    D: "n.翻译，译文",
    E: "translat+i+on",
    F: "translat(e)翻译(熟词)+i蜡烛(编码)+on在上面(熟词)",
    G: "做翻译时把蜡烛放在上面",
    H: "Much of the wit is lost in translation.",
    I: "很多诙谐的成分都在翻译中丢失了。"
}, {
    B: "pollution",
    C: "[pə'lu:ʃn]",
    D: "n.污染",
    E: "po+llu+tion",
    F: "po婆(拼音)+llu路(谐音)+tion婶(谐音)",
    G: "婆婆在路上看到婶婶在搞污染",
    H: "The level of pollution in the river was falling.",
    I: "这条河中的污染水平在下降。"
}, {
    B: "district",
    C: "['dɪstrɪkt]",
    D: "n.区域，区，行政区",
    E: "dis+tr+i+ct",
    F: "dis的士(拼音)+tr土人(拼音)+i爱(编码)+ct餐厅(拼音)",
    G: "开的士的土人爱去这个区域的餐厅吃饭",
    H: "I drove around the business district.",
    I: "我开车在商业区转了转。"
}, {
    B: "anxious",
    C: "['æŋkʃəs]",
    D: "adj.忧虑的，不安的",
    E: "an+xiou+s",
    F: "an一(熟词)+xiou秀(谐音)+s美女(编码)",
    G: "一个秀气的美女满心忧虑",
    H: "A friend of mine is a very anxious person.",
    I: "我的一个朋友是个非常容易焦虑不安的人。"
}, {
    B: "rainbow",
    C: "['reɪnbəʊ]",
    D: "n.彩虹",
    E: "rain+bow",
    F: "rain雨+bow弯",
    G: "雨后出现了弯弯的彩虹",
    H: "I saw the beautiful rainbow after the rain.",
    I: "雨后我看见美丽的彩虹。"
}, {
    B: "hurricane",
    C: "['hʌrɪk(ə)n]",
    D: "n.飓风，暴风",
    E: "hurr+i+can+e",
    F: "hurr(y)匆忙(熟词)+i我(编码I)+can罐子(熟词)+e鹅(编码)",
    G: "飓风袭来，匆忙中我把罐子里的鹅放走了",
    H: "Hurricane Betty is now approaching the coast of Florida.",
    I: "飓风贝蒂正在逼近佛罗里达海岸。"
}, {
    B: "fountain",
    C: "['faʊntən]",
    D: "n.喷泉",
    E: "mountain",
    F: "mountain山",
    G: "用斧头(f)在山里砍出一股喷泉",
    H: "There is a fountain at the centre of the park.",
    I: "公园正中有一个喷泉。"
}, {
    B: "pattern",
    C: "['pætn]",
    D: "n.图案",
    E: "pa+tt+ern",
    F: "pa趴(拼音)+tt两把伞(编码)+ern儿女(拼音)",
    G: "趴在地上打两把伞的儿女在画图案",
    H: "He cuts out a pattern of dragon.",
    I: "他剪出了一个龙的图案。"
}, {
    B: "packet",
    C: "['pækɪt]",
    D: "n.背包",
    E: "pa+ck+et",
    F: "pa趴(拼音)+ck仓库(拼音)+et外星人(编码)",
    G: "趴在仓库和外星人找背包",
    H: "Elinor bought her a packet of biscuits.",
    I: "埃莉诺给她买了一袋饼干。"
}, {
    B: "branch",
    C: "[brɑ:ntʃ]",
    D: "n.树枝，分支",
    E: "bran+ch",
    F: "bran不然+ch吃",
    G: "只有努力不然只能吃树枝了",
    H: "There is a snake on the branch.",
    I: "树枝上有条蛇。"
}, {
    B: "quantity",
    C: "['kwɒntətɪ]",
    D: "n.数量",
    E: "quan+ti+ty",
    F: "quan全+ti踢+ty太阳",
    G: "把全部数量的球踢到太阳上",
    H: "We have only a small quantity of water.",
    I: "我们只剩少量的水了。"
}, {
    B: "tick",
    C: "[tɪk]",
    D: "vt.打上钩，标记号",
    E: "ti+ck",
    F: "ti踢(拼音)+ck蛋糕(熟词cake)",
    G: "踢掉一个蛋糕，就打上钩",
    H: "He put a tick by her name on the list.",
    I: "在名单上他在她的名字旁打了一个勾。"
}, {
    B: "rhyme",
    C: "[raɪm]",
    D: "n.韵律，押韵词",
    E: "rh+y+me",
    F: "rh如花(拼音)+y衣叉(编码)+me我(熟词)",
    G: "如花拿着衣叉和我一起跳韵律操",
    H: "All of the poems are written in traditional metres and rhyme schemes.",
    I: "所有的诗都按传统的韵律和韵脚而作。"
}, {
    B: "shoot",
    C: "[ʃu:t]",
    D: "n.射击；vt.射击，拍摄，发芽",
    E: "sh+oo+t",
    F: "sh上海(拼音)+oo望远镜(象形)+t伞(编码)",
    G: "在上海拿着望远镜用伞射击",
    H: "The police had orders to shoot anyone who attacked them.",
    I: "警察接到命令可以枪击任何攻击他们的人。"
}, {
    B: "fossil",
    C: "['fɒs(ə)l]",
    D: "n.化石，僵化的事物",
    E: "fo+ss+il",
    F: "fo佛(拼音)+ss两条蛇(编码)+il(l)生病(熟词)",
    G: "佛发现两条蛇生病后变成化石",
    H: "At this distance of time it is difficult to date the fossil.",
    I: "时间隔得这么久了，很难确定这化石的年代。"
}, {
    B: "exchange",
    C: "[ɪks'tʃeɪndʒ]",
    D: "n.交流",
    E: "ex+change",
    F: "ex儿媳(拼音)+change改变(熟词)",
    G: "交流过后，儿媳改变了很多",
    H: "Our school has an exchange with a French school.",
    I: "我们学校与法国的一所学校进行交流。"
}, {
    B: "faithfully",
    C: "['feɪθfəlɪ]",
    D: "adv.忠实地，忠诚地",
    E: "faith+fully",
    F: "faith忠诚+fully充分地",
    G: "他的忠诚被充分地利用了",
    H: "He loves her faithfully.",
    I: "他忠实地爱着她。"
}, {
    B: "wave",
    C: "[weɪv]",
    D: "n.海浪，波浪；vt.挥，波动",
    E: "wa+ve",
    F: "wa娃(拼音)+ve维E(编码)",
    G: "娃娃在海浪上吃维E",
    H: "Children were playing in the waves.",
    I: "孩子们在波浪中嬉戏。"
}, {
    B: "state",
    C: "[steɪt]",
    D: "n.国家，州",
    E: "st+ate",
    F: "st石头(拼音)+ate吃(熟词)",
    G: "整个国家的石头都被吃完了",
    H: "She teaches in a state university.",
    I: "她在一所州立大学任教。"
}, {
    B: "possession",
    C: "[pə'zeʃn]",
    D: "n.财产，拥有",
    E: "pos+se+ssion",
    F: "posPOS机(编码)+se瑟(拼音)+ssion神(谐音)",
    G: "POS机里得瑟的神夺走了全部财产",
    H: "People had lost their homes and all their possessions.",
    I: "人们失去了自己的家园和所有的财物。"
}, {
    B: "embarrassed",
    C: "[ɪm'bærəst]",
    D: "adj.尴尬的，窘迫的",
    E: "em+bar+rass+ed",
    F: "em恶魔(拼音)+bar酒吧(熟词)+(g)rass草(熟词)+ed二弟(拼音)",
    G: "恶魔在酒吧吃草，二弟很尴尬",
    H: "He looked a bit embarrassed.",
    I: "他看起来有点尴尬。"
}, {
    B: "flood",
    C: "[flʌd]",
    D: "n.洪水，水灾",
    E: "food",
    F: "food食物",
    G: "洪水冲走了我们所有的食物",
    H: "Flood struck the town this summer.",
    I: "今年夏天该城遭受水灾。"
}, {
    B: "melt",
    C: "[melt]",
    D: "vi.熔化，融化，溶解",
    E: "meat",
    F: "meat肉",
    G: "棍子(l)上晒的肉熔化了",
    H: "If you warm ice it will melt into water.",
    I: "如果你把冰加热，它会融化成水。"
}, {
    B: "stress",
    C: "[stres]",
    D: "n.强调，压力",
    E: "st+re+ss",
    F: "st尸体(拼音)+re惹(拼音)+ss两条蛇(象形)",
    G: "警察多次强调尸体的味道惹来了两条蛇",
    H: "Katy could think clearly when not under stress.",
    I: "在没有精神压力的情况下凯蒂思路清晰。"
}, {
    B: "pianist",
    C: "[ˈpɪənɪst]",
    D: "n.钢琴家，钢琴演奏者",
    E: "pian+is+t",
    F: "pian骗(拼音)+is是(熟词)+t特(编码)",
    G: "骗了钢琴家的是特务",
    H: "He is a talented painist.",
    I: "他是一位有天赋的钢琴家。"
}, {
    B: "predict",
    C: "[prɪˈdɪkt]",
    D: "vt.预言，预告，预测",
    E: "pre+di+ct",
    F: "pre仆人(拼音)+di弟(拼音)+ctCT(编码)",
    G: "仆人预言弟弟在做CT检查",
    H: "It's hard to predict how things will turn out.",
    I: "事情还不定怎样呢。"
}, {
    B: "suit",
    C: "[su:t]",
    D: "n.一套外衣，套装；vt.适合，使适宜",
    E: "su+it",
    F: "su苏(拼音)+it它(熟词)",
    G: "苏苏送给它一套外衣",
    H: "He bought a suit.",
    I: "他买了一套外衣。"
}, {
    B: "uncomfortable",
    C: "[ʌn'kʌmftəbl]",
    D: "adj.不安的，不舒服的，不自在的",
    E: "un+comfortable",
    F: "un不(词缀)+comfortable舒服的(熟词)",
    G: "不舒服的时候就会感觉很不安",
    H: "I sometimes feel uncomfortable after eating in the evening.",
    I: "我晚上吃完饭有时会觉得不舒服。"
}, {
    B: "consequence",
    C: "['kɒnsɪkwəns]",
    D: "n.后果，结果，重要性",
    E: "con+sequence",
    F: "con康(谐音)+sequence一系列(熟词)",
    G: "后果就是康师傅一系列产品的下架",
    H: "The practice had far-reaching environmental consequence.",
    I: "这种做法有着深远的环境方面的影响。"
}, {
    B: "environmental",
    C: "[ɪnˌvaɪrən'mentl]",
    D: "adj.环保的，自然环境的，生态环境的",
    E: "environment+al",
    F: "environment环境(熟词)+al阿狸(拼音)",
    G: "热爱环境的阿狸宣扬环保的理念",
    H: "We need to solve our environmental problems.",
    I: "我们需要解决环境问题。"
}, {
    B: "warmth",
    C: "[wɔ:mθ]",
    D: "n.温暖，暖和",
    E: "warm+th",
    F: "warm热情的(熟词)+th土豪(拼音)",
    G: "热情的土豪让人感觉很温暖",
    H: "We felt the warmth of the sun.",
    I: "我们感受到太阳的温暖。"
}, {
    B: "clay",
    C: "[kleɪ]",
    D: "n.黏土",
    E: "c+lay",
    F: "c月(编码)+lay放置(熟词)",
    G: "把黏土做的月牙放置在那里",
    H: "Bricks are made from clay.",
    I: "砖是用黏土制成的。"
}, {
    B: "lung",
    C: "[lʌŋ]",
    D: "n.肺，肺脏",
    E: "lun+g",
    F: "lun伦(拼音)+g哥(编码)",
    G: "周杰伦的哥哥得了肺病",
    H: "Smoking is bad for our lungs.",
    I: "吸烟对我们的肺部有害。"
}, {
    B: "pill",
    C: "[pɪl]",
    D: "n.药片，药丸",
    E: "p+ill",
    F: "p屁(编码)+ill病(熟词)",
    G: "吃完药片后放屁说明病好了",
    H: "Take a pill every three hours.",
    I: "每三小时吃一粒药。"
}, {
    B: "male",
    C: "[meɪl]",
    D: "n.男人；adj.男性的，雄的",
    E: "ma+le",
    F: "ma马+le乐",
    G: "男人骑马很快乐",
    H: "This rabbit is male.",
    I: "这只兔子是雄性的。"
}, {
    B: "equipment",
    C: "[ɪ'kwɪpmənt]",
    D: "n.装备，设备",
    E: "equip+ment",
    F: "equip配备(熟词)+ment门徒(拼音)",
    G: "这些装备是配备给门徒的",
    H: "It's a useful piece of equipment for the kitchen.",
    I: "这是一件有用的厨房设备。"
}, {
    B: "section",
    C: "['sekʃən]",
    D: "n.部分，节，切下的块",
    E: "se+c+tion",
    F: "se色(拼音)+c看见(编码see)+tion婶(谐音)",
    G: "一部分色狼看见了婶婶",
    H: "They moulded a complete new bow section for the boat.",
    I: "他们为这艘船铸造了一个完整的新船头。"
}, {
    B: "boot",
    C: "[buːt]",
    D: "n.靴子，踢，汽车行李箱；vt.引导，踢，解雇，使穿靴",
    E: "boo+t",
    F: "boo600(象形)+t伞(编码)",
    G: "我把600把伞塞进靴子里面",
    H: "I wear a pair of black boots.",
    I: "我穿了一双黑色靴子。"
}, {
    B: "disappointed",
    C: "[ˌdɪsə'pɔɪntɪd]",
    D: "adj.失望的，沮丧的",
    E: "dis+appoint+ed",
    F: "dis的士(拼音)+appoint任命(熟词)+ed二弟(拼音)",
    G: "在的士上接受任命的二弟很失望",
    H: "She felt disappointed after the exam.",
    I: "考完试后她感到很失望。"
}, {
    B: "contribution",
    C: "[kɒntrɪ'bju:ʃ(ə)n]",
    D: "n.贡献，捐赠",
    E: "contribut+i+on",
    F: "contribut(e)捐赠(熟词)+i蜡烛(编码)+on在...上(熟词)",
    G: "把捐赠的蜡烛放在桌上做贡献",
    H: "This invention made a major contribution to road safety.",
    I: "这项发明对道路安全作出了卓越贡献。"
}, {
    B: "nuclear",
    C: "[ˈnjuːklɪə]",
    D: "adj.原子能的",
    E: "nu+clear",
    F: "nu奴(拼音)+clear清楚的(熟词)",
    G: "奴隶很清楚原子能的原理",
    H: "Is nuclear energy clean enery?",
    I: "核能是清洁能源吗？"
}, {
    B: "typical",
    C: "['tɪpɪkl]",
    D: "adj.代表性的，典型的",
    E: "typ+ic+al",
    F: "typ(e)类型(熟词)+icIC(编码)+al阿狸(拼音)",
    G: "不同类型的IC卡是阿狸代表性的藏品",
    H: "This meal is typical of local cookery.",
    I: "这是当地代表性的饭菜。"
}, {
    B: "display",
    C: "[dɪ'spleɪ]",
    D: "n./vt.展览，陈列",
    E: "di+s+play",
    F: "di弟(拼音)+s蛇(编码)+play玩(熟词)",
    G: "展览时弟弟拿着蛇在玩",
    H: "His paintings are on display in the museum.",
    I: "他的绘画作品现陈列在博物馆中。"
}, {
    B: "disagreement",
    C: "[ˌdɪsə'gri:mənt]",
    D: "n.分歧，意见不一",
    E: "disagree+ment",
    F: "disagree不一致(熟词)+ment门徒(拼音)",
    G: "我和观点不一致的门徒产生分歧",
    H: "I had a disagreement with my boss.",
    I: "我和我老板有分歧。"
}, {
    B: "evaluate",
    C: "[ɪ'væljueɪt]",
    D: "vt./vi.评估，估价，评价",
    E: "eva+lu+ate",
    F: "eva伊娃(熟词Eva)+lu鹿(拼音)+ate吃(熟词)",
    G: "伊娃评估三鹿奶粉不能吃",
    H: "Don't evaluate people by their clothes.",
    I: "不要根据衣着来评价人。"
}, {
    B: "mild",
    C: "[maɪld]",
    D: "adj.温和的，和缓的，温柔的",
    E: "wild",
    F: "wild野蛮的",
    G: "温和的她被山(m)里的野蛮人揍了",
    H: "This cheese has a soft, mild flavour.",
    I: "这种奶酪味道淡而不腻。"
}, {
    B: "poetry",
    C: "['pəʊətrɪ]",
    D: "n.诗，诗歌，诗作",
    E: "poet+ry",
    F: "poet诗人(熟词)+ry人妖(拼音)",
    G: "诗人在为人妖写诗",
    H: "He is fond of Chinese classic poetry.",
    I: "他喜欢中国古典诗歌。"
}, {
    B: "diploma",
    C: "[dɪ'pləʊmə]",
    D: "n.毕业证书",
    E: "dip+lo+ma",
    F: "dip地铺(拼音)+lo10(象形)+ma妈妈(拼音)",
    G: "地铺下的10张纸是妈妈的毕业证书",
    H: "Mike got a college diploma.",
    I: "Mike获得了大学毕业证书。"
}, {
    B: "blank",
    C: "[blæŋk]",
    D: "adj.茫然的，空白的",
    E: "black",
    F: "black黑色的",
    G: "她黑色的眼睛茫然地看着门(n)外",
    H: "Please fill the blanks.",
    I: "请填好空格。"
}, {
    B: "masterpiece",
    C: "['mɑ:stəpi:s]",
    D: "n.杰作，绝无仅有的人",
    E: "master+piece",
    F: "master大师+piece件",
    G: "大师创作出了一件杰作",
    H: "The book would be his masterpiece.",
    I: "这本书将是他的杰作。"
}, {
    B: "civilization",
    C: "[ˌsɪvəlaɪ'zeɪʃn]",
    D: "n.文明社会，文明，文化",
    E: "civil+iz+ation",
    F: "civil公民的(熟词)+iz艾滋(谐音)+ation爱神(谐音)",
    G: "文明社会公民的艾滋病被爱神治好了",
    H: "The Chinese civilization is one of the oldest in the world.",
    I: "中国文化是世界上最古老的文化之一。"
}, {
    B: "precious",
    C: "['preʃəs]",
    D: "adj.贵重的，珍贵的",
    E: "pre+cious",
    F: "pre仆人(拼音)+cious舍死(谐音)",
    G: "仆人舍死保护贵重物品",
    H: "The crown was set with precious jewels.",
    I: "王冠上镶嵌着珍贵的宝石。"
}, {
    B: "carve",
    C: "[kɑ:v]",
    D: "vt.雕刻",
    E: "car+ve",
    F: "car汽车(熟词)+ve维E(编码)",
    G: "汽车上的维E是雕刻出来的",
    H: "When he was ten, he began to carve.",
    I: "当他10岁的时候，他开始雕塑。"
}, {
    B: "marble",
    C: "[ˈmɑ:bl]",
    D: "n.大理石",
    E: "mar+bl+e",
    F: "mar骂人(拼音)+bl61(象形)+e鹅(编码)",
    G: "爱骂人的61只鹅站在大理石上",
    H: "The house's staircase is made from marble.",
    I: "这座房子的楼梯由大理石制成。"
}, {
    B: "Egyptian",
    C: "[ɪ'dʒɪpʃn]",
    D: "adj.埃及的，埃及人的",
    E: "Egypt+i+an",
    F: "Egypt埃及(熟词)+i蜡烛(编码)+an一个(熟词)",
    G: "埃及的蜡烛变成了一个神",
    H: "I am an Egyptian.",
    I: "我是埃及人。"
}, {
    B: "aim",
    C: "[eɪm]",
    D: "vi./vt.瞄准，（向某方向）努力；n.目标，目的",
    E: "a+im",
    F: "a苹果(编码)+im我是(熟词I'm)",
    G: "我是在瞄准苹果",
    H: "Her aim was good and she hit the lion with her first shot.",
    I: "她瞄得准，第一枪就打中了狮子。"
}, {
    B: "eventually",
    C: "[ɪ'ventʃuəlɪ]",
    D: "adv.最后，终于",
    E: "event+u+all+y",
    F: "event事情(熟词)+u桶(编码)+all所有的(熟词)+y树杈(编码)",
    G: "最后这件事情导致桶里所有的树杈都泡烂了",
    H: "Eventually he changed his mind.",
    I: "最终他改变了主意。"
}, {
    B: "compass",
    C: "['kʌmpəs]",
    D: "n.指南针，罗盘，圆规；vt.包围",
    E: "com+pa+ss",
    F: "com(e)来(熟词)+pa怕(拼音)+ss两条蛇(编码)",
    G: "来拿着指南针你就不怕那两条蛇了",
    H: "Please lend me your compass.",
    I: "请借给我你的指南针。"
}, {
    B: "attempt",
    C: "[əˈtempt]",
    D: "n.努力，尝试，企图；vt.尝试，企图",
    E: "at+tem+pt",
    F: "at在(熟词)+tem特卖(拼音)+pt葡萄(拼音)",
    G: "努力在特卖会上抢购葡萄",
    H: "They made no attempt to escape.",
    I: "他们没有企图逃跑。"
}, {
    B: "violinist",
    C: "[ˌvaɪəˈlɪnɪst]",
    D: "n.小提琴演奏者",
    E: "violin+is+t",
    F: "violin小提琴(熟词)+is是(熟词)+t伞(编码)",
    G: "小提琴演奏者是要在伞下表演的",
    H: "The violinist gave a masterful performance.",
    I: "小提琴家进行了一场精彩的演奏。"
}, {
    B: "emotion",
    C: "[ɪ'məʊʃ(ə)n]",
    D: "n.情感，情绪",
    E: "e+motion",
    F: "e鹅(编码)+motion动作(熟词)",
    G: "情感受创的鹅动作缓慢",
    H: "Almost the first lesson they learn is how to dissociate emotion from reason.",
    I: "如何将理智和情感分开几乎可以说是他们所上的第一课。"
}, {
    B: "obesity",
    C: "[əʊ'biːsəti]",
    D: "n.过度肥胖",
    E: "ob+esi+ty",
    F: "ob欧巴+esi饿死+ty太阳",
    G: "过度肥胖的欧巴饿死在太阳下",
    H: "A diet that is high in fat can lead to obesity.",
    I: "食用高脂肪食物会导致肥胖症。"
}, {
    B: "etc",
    C: "[ɪt'setərə]",
    D: "abbr.等等，诸如此类",
    E: "et+c",
    F: "et外星人(编码)+c耳朵(编码)",
    G: "外星人长了长耳朵、圆耳朵等等",
    H: "They export a lof of fruit, like apples, oranges, lemons, etc.",
    I: "他们进口许多水果，比如苹果、柑橘和柠檬等。"
}, {
    B: "candidate",
    C: "[ˈkændɪdeɪt]",
    D: "n.候选人，候补者",
    E: "can+did+ate",
    F: "can能+did做+ate吃",
    G: "候选人既能做又能吃",
    H: "Most of them balloted against the candidate of president of the club.",
    I: "他们大多数人投票反对俱乐部主席候选人。"
}, {
    B: "document",
    C: "['dɒkjumənt]",
    D: "n.证件，文件",
    E: "do+cu+ment",
    F: "do做(熟词)+cu粗(拼音)+ment门徒(拼音)",
    G: "做粗辣条的门徒是没证件的",
    H: "The policeman wanted to see all our documents.",
    I: "警察想查看我们所有的证件。"
}, {
    B: "abuse",
    C: "[ə'bju:s]",
    D: "vt./n.滥用，妄用，虐待",
    E: "ab+use",
    F: "ab阿爸(拼音)+use用(熟词)",
    G: "阿爸滥用职权",
    H: "What she did was an abuse of her position as manager.",
    I: "她的所作所为是滥用经理职权。"
}, {
    B: "appoint",
    C: "[əˈpɔɪnt]",
    D: "vt.委派，任命",
    E: "ap+point",
    F: "ap阿婆(拼音)+point指(熟词)",
    G: "阿婆指着你委派任务",
    H: "In consideration of your extensive experience in the field, we are glad to appoint you as our agent.",
    I: "考虑到你们在这一业务范围的丰富经验，我们很高兴指定你们为我们的代理。"
}, {
    B: "ash",
    C: "[æʃ]",
    D: "n.灰烬，灰",
    E: "a+sh",
    F: "a啊(拼音)+sh尸(谐音)",
    G: "啊的一声，尸体变成灰烬了",
    H: "The bodies buried in the fine ash slowly decayed.",
    I: "埋在灰烬里的尸体慢慢地腐烂了。"
}, {
    B: "ban",
    C: "[bæn]",
    D: "vt.禁止，取缔；n.禁令，禁忌",
    E: "ban",
    F: "颁",
    G: "有关部门颁布了条文禁止酒驾",
    H: "The film came under the ban of censor.",
    I: "该影片被审查官员禁止上映。"
}, {
    B: "cement",
    C: "[sɪˈment]",
    D: "n.水泥",
    E: "ce+ment",
    F: "ce厕+ment门徒",
    G: "厕所里门徒在搅拌水泥",
    H: "Mix the sand and cement.",
    I: "将沙和水泥和在一起。"
}, {
    B: "data",
    C: "['deɪtə]",
    D: "n.数据，资料",
    E: "da+ta",
    F: "da打+ta他",
    G: "弄乱我的数据打他",
    H: "He settled down by his desk and began to compute the precise data.",
    I: "他在书桌边坐下来，开始计算确切的数据。"
}, {
    B: "famine",
    C: "['fæmɪn]",
    D: "n.饥荒，严重缺乏",
    E: "fa+mine",
    F: "fa发(拼音)+mine我的(熟词)",
    G: "闹饥荒时政府将灾粮发放到我的家里",
    H: "Many people starved to death in the famine.",
    I: "许多人饿死于此次饥荒。"
}, {
    B: "cigar",
    C: "[sɪ'gɑ:]",
    D: "n.雪茄",
    E: "cig+ar",
    F: "cig刺骨+ar矮人",
    G: "刺骨的寒风中矮人点了一根雪茄",
    H: "He was sitting alone smoking a big cigar.",
    I: "他一个人坐着，抽着一支大雪茄。"
}, {
    B: "fuel",
    C: "['fju:əl]",
    D: "vt.给…加燃料；n.燃料",
    E: "fu+el",
    F: "fu夫+el饿狼",
    G: "夫人负责给饿狼的车",
    H: "They ran out of fuel.",
    I: "他们的燃料用完了。"
}, {
    B: "gum",
    C: "[gʌm]",
    D: "n.树胶",
    E: "gum",
    F: "古木",
    G: "古老的木头上长满树胶",
    H: "In the past 50 years, drought has taken a toll on the forests and on the production of gum.",
    I: "在过去150年里，干旱已经对森林和树胶产品造成了损害。"
}, {
    B: "load",
    C: "[ləʊd]",
    D: "n.负担，负荷物",
    E: "lo+ad",
    F: "lo10(象形)+ad阿弟(拼音)",
    G: "他负担不起10个阿弟的生活费",
    H: "High blood pressure imposes an extra load on the heart.",
    I: "高血压会给心脏增加额外的负担。"
}, {
    B: "minimum",
    C: "[ˈmɪnɪməm]",
    D: "adj.最小的，最低的",
    E: "mini+mum",
    F: "mini迷你+mum妈妈",
    G: "迷你妈妈是最小的",
    H: "He was only five feet nine, the minimum height for a policeman.",
    I: "他只有5.9英尺高，这是警察身高要求的底线。"
}, {
    B: "quit",
    C: "[kwɪt]",
    D: "vt.放弃，离开，抛弃",
    E: "qu+it",
    F: "qu娶(拼音)+it它(熟词)",
    G: "放弃娶它",
    H: "We decided it was time to quit the city.",
    I: "当时我们决定，该离开城市生活了。"
}, {
    B: "range",
    C: "[reɪn(d)ʒ]",
    D: "n.范围，幅度；vi.（在...内）变动，平行",
    E: "ran+ge",
    F: "ran跑(熟词)+ge哥(拼音)",
    G: "在这个范围里跑步哥哥就不开心",
    H: "The hotel offers a wide range of facilities.",
    I: "这家酒店提供各种各样的设施。"
}, {
    B: "refresh",
    C: "[rɪ'freʃ]",
    D: "vt.消除…的疲劳，更新，使…恢复",
    E: "re+fresh",
    F: "re热(拼音)+fresh新鲜(熟词)",
    G: "热天新鲜的食物能消除疲劳",
    H: "A cool drink refreshed me after my long walk.",
    I: "走了很长的一段路之后，一杯冷饮使我恢复了精神。"
}, {
    B: "spaceman",
    C: "['speɪsmæn]",
    D: "n.宇航员，航天专家",
    E: "space+man",
    F: "space太空+man男人",
    G: "太空中的男人是宇航员",
    H: "There are five spacemen in the spaceship.",
    I: "宇宙飞船里有五个飞行员。"
}, {
    B: "sponsor",
    C: "['spɒnsə(r)]",
    D: "n.赞助商，赞助者；vt.赞助",
    E: "sp+on+s+or",
    F: "sp赛跑(拼音)+on在…上(熟词)+s5(象形)+or偶人(拼音)",
    G: "本次赛跑的赞助商在台上和5个偶人跳舞",
    H: "Mr. Robert Brown was announced as the sponsor.",
    I: "罗勃特·布朗先生被宣布为赞助人。"
}, {
    B: "tease",
    C: "[ti:z]",
    D: "vi/vt.戏弄，取笑，招惹",
    E: "tea+se",
    F: "tea茶(熟词)+se色(拼音)",
    G: "喝茶的色狼在戏弄美女",
    H: "It was mean of you to tease the little boy.",
    I: "你戏弄那个小男孩，你真坏。"
}, {
    B: "thunderstorm",
    C: "['θʌndəstɔ:m]",
    D: "n.雷暴，雷雨",
    E: "thunder+storm",
    F: "thunder雷声+storm暴风雨",
    G: "雷暴中的雷声比暴风雨还恐怖",
    H: "Thunderstorm is common in summer.",
    I: "雷雨在夏天很常见。"
}, {
    B: "weaken",
    C: "['wi:kən]",
    D: "vi.（对某事的决心）减弱；vt.（使）变弱",
    E: "weak+en",
    F: "weak虚弱的(熟词)+en摁(拼音)",
    G: "虚弱的身体被摁住，起床的决心就减弱了",
    H: "His strength has weakened.",
    I: "他的体力下降了。"
}, {
    B: "withdraw",
    C: "[wɪðˈdrɔː]",
    D: "vi./vt.撤销，收回",
    E: "with+draw",
    F: "with和+draw画画",
    G: "和我一起去画画的计划撤销了",
    H: "Government troops were forced to withdraw.",
    I: "政府部队被迫撤走了。"
}, {
    B: "withdrawal",
    C: "[wɪðˈdrɔ:əl]",
    D: "n.撤回，收回，戒毒（或脱瘾）过程",
    E: "with+draw+al",
    F: "with和(熟词)+draw画(熟词)+al阿狸(拼音)",
    G: "和我一起画画的阿狸撤回了桌上的零食",
    H: "The charity says it wants a withdrawal of the comments.",
    I: "该慈善机构称希望收回所作评论。"
}, {
    B: "adolescent",
    C: "[ˌædə'lesnt]",
    D: "adj.青少年，青春的，青春期的",
    E: "ado+les+cent",
    F: "ado阿斗(拼音)+les勒索(拼音)+cent一分钱(熟词)",
    G: "青少年阿斗勒索了我一分钱",
    H: "An adolescent is often caught up in fantastic thoughts.",
    I: "青少年常常沉溺于奇异的想法。"
}, {
    B: "signature",
    C: "['sɪgnətʃə]",
    D: "n.签名",
    E: "sig+nature",
    F: "sig四哥(拼音)+nature自然(熟词)",
    G: "四哥在大自然中留下了签名",
    H: "You must ink over your signature. Pencil writing is not allowed.",
    I: "你必须把签名用墨水描一下。铅笔书写是不允许。"
}, {
    B: "circular",
    C: "['sɜ:kjələ(r)]",
    D: "adj.圆形的，环形的，圆的",
    E: "cir+cu+lar",
    F: "cir此人+cu粗+lar腊肉",
    G: "此人把粗腊肉摆成圆形",
    H: "The earth moves in an approximately circular orbit around the sun.",
    I: "地球在一个近似正圆的轨道上绕着太阳运行。"
}, {
    B: "bad-tempered",
    C: "[ˌbædˈtempəd]",
    D: "adj.易怒的，脾气暴躁的",
    E: "bad+temper+ed",
    F: "bad坏(熟词)+temper脾气(熟词)+ed二弟(拼音)",
    G: "坏脾气的二弟很易怒",
    H: "I am bad-tempered, and easily angered.",
    I: "我脾气暴躁，动辄生气。"
}, {
    B: "balcony",
    C: "['bælkənɪ]",
    D: "n.阳台，包厢，戏院楼厅",
    E: "bal+co+ny",
    F: "bal巴黎(拼音)+co可乐(熟词coke)+ny女友(拼音)",
    G: "我在巴黎的阳台上喝着可乐陪着女友",
    H: "There were tubs of flowers on the balcony.",
    I: "阳台上有一盆盆的花。"
}, {
    B: "breathless",
    C: "[ˈbreθlɪs]",
    D: "adj.气喘吁吁的，屏息的",
    E: "breath+less",
    F: "breath呼吸+less少",
    G: "呼进去的空气太少会让人气喘吁吁",
    H: "He arrived breathless at the top of the stairs.",
    I: "他爬上楼梯顶时气喘吁吁的。"
}, {
    B: "bride",
    C: "[braɪd]",
    D: "n.新娘",
    E: "b+ri+de",
    F: "b6(象形)+ri日(拼音)+de的(拼音)",
    G: "这里有6个日本的新娘",
    H: "The bride looked radiant.",
    I: "新娘看上去满面春风。"
}, {
    B: "tough",
    C: "[tʌf]",
    D: "adj.困难的，坚硬的",
    E: "tou+gh",
    F: "tou偷+gh规划",
    G: "想偷走规划书是很困难的事",
    H: "Conditions are rather tough here.",
    I: "这里条件比较艰苦。"
}, {
    B: "commitment",
    C: "[kə'mɪtm(ə)nt]",
    D: "n.承诺，信奉，责任",
    E: "commit+ment",
    F: "commit犯罪(熟词)+ment门徒(拼音)",
    G: "犯罪的门徒承诺洗心革面",
    H: "It is an open question how long that commitment can last.",
    I: "这一承诺能维持多久还不确定。"
}, {
    B: "delicate",
    C: "[ˈdelɪkət]",
    D: "adj.娇弱的，易碎的，精美的",
    E: "de+li+cate",
    F: "de得(拼音)+li力(拼音)+cate凯特(熟词Cate)",
    G: "得到力气的凯特太娇弱",
    H: "Any of these delicate processes could have stalled.",
    I: "这些微妙的过程都可能出现故障。"
}, {
    B: "humanistic",
    C: "[ˌhju:mə'nɪstɪk]",
    D: "adj.人道主义的",
    E: "human+is+tic",
    F: "human人类(熟词)+is是(熟词)+tic提倡(拼音)",
    G: "人类是提倡人道主义的",
    H: "Roman republican law upheld a humanistic view of marriage.",
    I: "罗马共和国的法律对婚姻坚持人道主义的观点。"
}, {
    B: "measurement",
    C: "['meʒəmənt]",
    D: "n.测量，尺寸，长度",
    E: "measure+ment",
    F: "measure测量(熟词)+ment门徒(拼音)",
    G: "测量门徒的身高",
    H: "We took lots of measurements.",
    I: "我们得到了许多测量结果。"
}, {
    B: "metropolitan",
    C: "[metrə'pɒlɪt(ə)n]",
    D: "adj.大都市的，宗主国的；n.大城市人，大主教",
    E: "metro+poli+tan",
    F: "metro地铁(熟词)+poli破例(拼音)+tan弹(拼音)",
    G: "在大都市的地铁上破例允许弹琴",
    H: "He is currently being held in a metropolitan correctional center.",
    I: "他现在被关在一个大城市的改造中心。"
}, {
    B: "molten",
    C: "['məʊltən]",
    D: "adj.熔化的，熔融的",
    E: "mol+ten",
    F: "mol摸了(拼音)+ten十(熟词)",
    G: "他摸了十种快要熔化的金属",
    H: "The molten metal is poured into the mould.",
    I: "把熔化的金属倒入铸模。"
}, {
    B: "needle",
    C: "['ni:dl]",
    D: "n.针，编织针，注射针",
    E: "need+le",
    F: "need需要(熟词)+le乐(拼音)",
    G: "他需要边喝可乐边缝针",
    H: "She sewed it with needle and thread.",
    I: "她用针线把它缝了起来。"
}, {
    B: "nursery",
    C: "[ˈnɜ:sərɪ]",
    D: "n.托儿所",
    E: "nurse+ry",
    F: "nurse护士(熟词)+ry人妖(拼音)",
    G: "托儿所的护士是人妖",
    H: "There is a nursery nearby.",
    I: "附近有一处保育所。"
}, {
    B: "pregnant",
    C: "[ˈpregnənt]",
    D: "adj.怀孕的",
    E: "pr+eg+nant",
    F: "pr仆人+eg俄国+nant难题",
    G: "怀孕的仆人在俄国遇到了难题",
    H: "My wife is pregnant.",
    I: "我妻子怀孕了。"
}, {
    B: "scholar",
    C: "['skɒlə(r)]",
    D: "n.学者（尤指文学方面）",
    E: "schol+ar",
    F: "scho(o)l学校(熟词)+ar矮人(拼音)",
    G: "学校里的矮人学者只吃一个鸡蛋",
    H: "Mr Smith is a visiting scholar from the UK.",
    I: "史密斯先生是英国的访问学者。"
}, {
    B: "scholarship",
    C: "[ˈskɒləʃɪp]",
    D: "n.奖学金，学问，学术成就",
    E: "scholar+ship",
    F: "scholar学者+ship船",
    G: "获得奖学金的学者都坐船出国了",
    H: "I made up my mind to apply for a scholarship.",
    I: "我决定申请奖学金。"
}, {
    B: "stem",
    C: "[stem]",
    D: "n.干，茎",
    E: "st+em",
    F: "st石头+em恶魔",
    G: "石头被恶魔绑在树干上",
    H: "Don't eat the stem of a mushroom.",
    I: "不要吃蘑菇的梗。"
}, {
    B: "strengthen",
    C: "['streŋθn]",
    D: "vt.加强，巩固；vi.变强，变坚挺",
    E: "st+reng+then",
    F: "st石头(拼音)+reng扔(拼音)+then然后(熟词)",
    G: "石头扔几次然后就会变坚硬",
    H: "We must strengthen our unity in the face of powerful enemies.",
    I: "大敌当前，我们必须加强团结。"
}, {
    B: "syllable",
    C: "[ˈsɪləbl]",
    D: "n.音节",
    E: "sy+ll+able",
    F: "sy实验(拼音)+ll11(象形)+able有能力的(熟词)",
    G: "实验室里有11个有能力的人在学习音节",
    H: "Please accent the first syllable.",
    I: "请重读第一个音节。"
}, {
    B: "technique",
    C: "[tekˈni:k]",
    D: "n.技术，方法，技能",
    E: "te+ch+ni+que",
    F: "te特+ch吃+ni泥+que缺",
    G: "特务吃泥缺乏技术",
    H: "The war rusted his technique.",
    I: "战争使他的技术荒废了。"
}, {
    B: "trend",
    C: "[trend]",
    D: "n.倾向，动态",
    E: "tr+end",
    F: "tr土人(拼音)+end结束(拼音)",
    G: "土人们的聚会有结束的倾向",
    H: "The youth like to follow the latest trends in fashion.",
    I: "年轻人喜好追求最新的流行款式。"
}, {
    B: "unfit",
    C: "[ʌnˈfɪt]",
    D: "adj.不健康的，不合适的，不合格的",
    E: "un+fit",
    F: "un不(词缀)+fit合适(熟词)",
    G: "不合适的饮食会导致身体不健康",
    H: "The water is unfit for drinking.",
    I: "这水不宜饮用。"
}, {
    B: "renaissance",
    C: "[rɪˈneɪsns]",
    D: "n.复兴，新生，复活",
    E: "renai+ss+ance",
    F: "renai热奶(拼音)+ss55(象形)+ance暗厕(拼音)",
    G: "复兴时期人们把热奶倒进55个黑暗厕所",
    H: "Some of the Renaissance buildings are gorgeous.",
    I: "一些文艺复兴时期的建筑美得令人惊叹。"
}, {
    B: "database",
    C: "['deɪtəbeɪs]",
    D: "n.数据库，资料库",
    E: "data+base",
    F: "data数据+base基础",
    G: "数据库以数据为基础",
    H: "I discovered some new information in the database.",
    I: "我在资料库里发现了一些新信息。"
}, {
    B: "glance",
    C: "[glɑːns]",
    D: "n.一瞥，一滑，闪光",
    E: "g+lan+ce",
    F: "g9(象形)+lan蓝(拼音)+ce厕(拼音)",
    G: "瞥见有9个蓝色的厕所",
    H: "He stole a glance at the clock behind her.",
    I: "他偷偷地看了一眼她背后的钟。"
}, {
    B: "abnormal",
    C: "[æb'nɔːml]",
    D: "adj.变态的，反常的，不规则的",
    E: "a+b+normal",
    F: "a一个(熟词)+b不(拼音)+normal正常的(熟词)",
    G: "一个不正常的人就是变态的人",
    H: "There is nothing abnormal about Sophie.",
    I: "索菲没有什么不正常的地方。"
}, {
    B: "abstract",
    C: "['æbstrækt]",
    D: "n.抽象，摘要，抽象的概念",
    E: "ab+str+act",
    F: "ab阿爸(拼音)+str街道(熟词street)+act表演(熟词)",
    G: "阿爸在街道上表演很抽象",
    H: "Astronomy is an abstract subject.",
    I: "天文学是一门深奥的学科。"
}, {
    B: "bronze",
    C: "[brɒnz]",
    D: "n.古铜色，青铜；adj.青铜色的",
    E: "br+on+ze",
    F: "br病人(拼音)+on在上面(熟词)+ze则(拼音)",
    G: "病人在上面则被晒成了古铜色",
    H: "Her hair shone bronze and gold.",
    I: "她的头发泛着黄褐色的金光。"
}, {
    B: "addicted",
    C: "[əˈdɪktɪd]",
    D: "adj.上了瘾的，入了迷的",
    E: "add+ic+ted",
    F: "add增加(熟词)+ic(e)冰(熟词)+ted泰德(熟词Ted)",
    G: "不断增加冰块的泰德已经上瘾了",
    H: "She had become addicted to golf.",
    I: "她已经迷上高尔夫球了。"
}, {
    B: "alongside",
    C: "[əlɒŋ'saɪd]",
    D: "prep.在…旁边；adv.在旁边",
    E: "along+side",
    F: "along沿着+side边",
    G: "沿着河边走就是在河",
    H: "They campaigned alongside the friendly forces.",
    I: "他们与友军并肩作战。"
}, {
    B: "automatic",
    C: "[ˌɔ:tə'mætɪk]",
    D: "adj.自动化的，自动的",
    E: "auto+ma+tic",
    F: "auto汽车(熟词)+ma妈(拼音)+tic体操(拼音)",
    G: "驾驶自动化汽车的妈妈撞到体操运动员",
    H: "They shot him at point blank range with an automatic rifle.",
    I: "他们用自动步枪近距离开枪射杀了他。"
}, {
    B: "automatically",
    C: "[ˌɔ:tə'mætɪklɪ]",
    D: "adv.自动地，无意识地",
    E: "auto+mati+cal+ly",
    F: "auto自动的(熟词)+mati马蹄(拼音)+cal(l)召唤(熟词)+ly老爷(拼音)",
    G: "玩具发出自动的马蹄声在召唤老爷",
    H: "Automatically Tommy's hand went to his forehead.",
    I: "汤米不由自主地用手去摸额头。"
}, {
    B: "bunch",
    C: "[bʌn(t)ʃ]",
    D: "n.捆，束，串",
    E: "bun+ch",
    F: "bun小圆面包(熟词)+ch吃(拼音)",
    G: "一捆小圆面包被我吃了",
    H: "Check out the worst one of the bunch.",
    I: "从这一群人中找出最糟的一个。"
}, {
    B: "bungalow",
    C: "['bʌŋgələʊ]",
    D: "n.平房，小屋",
    E: "bun+ga+low",
    F: "bun小圆面包(熟词)+ga咖(拼音)+low低(熟词)",
    G: "平房里的圆面包蘸的咖喱很低价",
    H: "A bungalow is a type of house.",
    I: "小平房是房子中的一种类型。"
}, {
    B: "consequently",
    C: "['kɒnsɪkwəntlɪ]",
    D: "adv.因此，所以",
    E: "consequent+ly",
    F: "consequent随之发生的(熟词)+ly老爷(拼音)",
    G: "因此随之发生的问题难住了老爷",
    H: "Her mother was seriously ill. Consequently, she left school.",
    I: "她母亲病重，因此她辍学了。"
}, {
    B: "conventional",
    C: "[kənˈvenʃənl]",
    D: "adj.传统的，常规的，因循守旧的",
    E: "convention+al",
    F: "convention传统(熟词)+al阿狸(拼音)",
    G: "这是一只思想很传统的阿狸",
    H: "She's very conventional in her views.",
    I: "她的观点很守旧。"
}, {
    B: "diverse",
    C: "[daɪ'və:s]",
    D: "adj.多种多样的，不同的",
    E: "di+verse",
    F: "di弟(拼音)+verse诗篇(熟词)",
    G: "弟弟创作的诗篇是多种多样的",
    H: "Davies has managed to pursue his diverse interests in parallel with his fast-moving career.",
    I: "戴维斯在事业突飞猛进的同时并未放弃自己广泛的兴趣爱好。"
}, {
    B: "electrical",
    C: "[ɪ'lektrɪkl]",
    D: "adj.与电有关的，用电的",
    E: "electric+al",
    F: "electric电动的(熟词)+al阿狸(拼音)",
    G: "电动车上的阿狸在做与电有关的实验",
    H: "Their inventions have contributed to the development of electrical engineering.",
    I: "他们的发明有助于电气工程学的发展。"
}, {
    B: "educator",
    C: "['edʒʊkeɪtə]",
    D: "n.教育家，教育工作者，教师",
    E: "educat+or",
    F: "educat(e)教育(熟词)+or偶人(拼音)",
    G: "喜欢教育别人的偶人成了教育家",
    H: "As an educator, I want to see my students succeed.",
    I: "作为一名教师，我想看到我的学生获得成功。"
}, {
    B: "geology",
    C: "[dʒɪˈɒlədʒɪ]",
    D: "n.地质学",
    E: "ge+olo+gy",
    F: "ge哥(拼音)+olo010(象形北京区号)+gy公园(拼音)",
    G: "哥哥在北京的公园研究地质学",
    H: "It is a problem that relates to geology.",
    I: "那是一个与地质学有关的问题。"
}, {
    B: "geometry",
    C: "[dʒɪˈɒmɪtrɪ]",
    D: "n.几何（学）",
    E: "geo+me+try",
    F: "geo土地(词缀)+me我(熟词)+try努力(熟词)",
    G: "在这片土地上我努力学习几何",
    H: "She is fond of geometry.",
    I: "她喜欢几何。"
}, {
    B: "judgement",
    C: "['dʒʌdʒm(ə)nt]",
    D: "n.判断力，审判，评价",
    E: "judge+ment",
    F: "judge法官(熟词)+ment门徒(拼音)",
    G: "法官说门徒有自己的判断力",
    H: "All action is based on judgement.",
    I: "一切行动均以判断为基础。"
}, {
    B: "permanent",
    C: "['pɜ:mənənt]",
    D: "adj.永久的，永恒的，持久的",
    E: "per+man+ent",
    F: "per每(熟词)+man男人(熟词)+ent恩特(拼音)",
    G: "每个男人包括恩特都想有永久的生命",
    H: "Is this your permanent address?",
    I: "这是你永久住址吗？"
}, {
    B: "preference",
    C: "['prefrəns]",
    D: "n.偏爱，优先，优先权",
    E: "prefer+ence",
    F: "prefer更喜欢(熟词)+ence摁厕(拼音)",
    G: "受到偏爱的他更喜欢将人摁在厕所里",
    H: "It’s a matter of personal preference.",
    I: "这是个人好恶的问题。"
}, {
    B: "realistic",
    C: "[ˌri:ə'lɪstɪk]",
    D: "adj.实事求是的",
    E: "real+is+tic",
    F: "real真的(熟词)+is是(熟词)+tic体操(拼音)",
    G: "真正实事求是的是体操员",
    H: "But I have to be realistic.",
    I: "但我必须面对现实。"
}, {
    B: "resolve",
    C: "[rɪ'zɒlv]",
    D: "vt.决心，",
    E: "re+solve",
    F: "re热(拼音)+solve解决(熟词)",
    G: "太热了我要下决心",
    H: "This did not shake his resolve.",
    I: "这事并未动摇他的决心。"
}, {
    B: "rhythmic",
    C: "[ˈrɪðmɪk]",
    D: "adj.有节奏的，有规律的",
    E: "rhythm+ic",
    F: "rhythm节奏+ic(e)冰",
    G: "打节奏的声音太大把冰震裂了",
    H: "Her breathing became more rhythmic.",
    I: "她的呼吸变得更有规律了。"
}, {
    B: "sculptor",
    C: "[ˈskʌlptə]",
    D: "n.雕刻家",
    E: "sculpt+or",
    F: "sculpt雕刻(熟词)+or偶人(拼音)",
    G: "雕刻家雕刻了一个偶人",
    H: "The sculptor worked the clay into the shape of a woman.",
    I: "雕刻家将泥土捏成一个妇女的形状。"
}, {
    B: "stressful",
    C: "[ˈstresfl]",
    D: "adj.紧张的，产生压力的",
    E: "stress+ful",
    F: "stress压力+ful(l)全部",
    G: "压力全部积压在一起会让人精神紧张",
    H: "Teaching can be a tiring and stressful job.",
    I: "当教师是件辛苦紧张的工作。"
}, {
    B: "widespread",
    C: "['waɪdspred]",
    D: "adj.广泛的，分布广的，普遍的",
    E: "wide+spread",
    F: "wide广泛的+spread传播",
    G: "普通话得到了广泛的传播",
    H: "There are reports of widespread flooding in northern China.",
    I: "有报道说中国北部到处洪水泛滥。"
}, {
    B: "absolute",
    C: "[ˈæbsəlju:t]",
    D: "adj.绝对的，完全的；n.绝对，绝对事物",
    E: "ab+solute",
    F: "ab阿爸(拼音)+solute溶解物(熟词)",
    G: "阿爸是溶解物？绝对不信",
    H: "I think he's an absolute stinker to do that to her.",
    I: "我认为他那样对待她真太缺德了。"
}, {
    B: "phenomenon",
    C: "[fɪ'nɒmɪnən]",
    D: "n.现象",
    E: "phe+no+men+on",
    F: "phe骗喝(拼音)+no没有(熟词)+men男人(熟词)+on上线(熟词)",
    G: "骗喝现象中没有男人上线",
    H: "How do you  explain  this  phenomenon?",
    I: "这种现象怎样解释？"
}, {
    B: "guarantee",
    C: "[ˌgærənˈti:]",
    D: "vt./n.保证",
    E: "gua+ran+tee",
    F: "gua瓜(拼音)+ran跑(熟词)+t(r)ee树(熟词)",
    G: "瓜保证能跑到树下",
    H: "The makers guarantee this special glass against breakage.",
    I: "制造商保证这种特制玻璃不会打碎。"
}, {
    B: "accustom",
    C: "[əˈkʌstəm]",
    D: "vt.使习惯于",
    E: "a+c+custom",
    F: "a一(熟词)+c月(编码)+custom顾客(熟词)",
    G: "这是习惯一个人看月亮的顾客",
    H: `You must learn to accustom yourself to hard work.  
`,
    I: "你必须学会习惯于艰苦的工作。"
}, {
    B: "accustomed",
    C: "[ə'kʌstəmd]",
    D: "adj.习惯的，通常的",
    E: "ac+custom+ed",
    F: "acAC米兰(编码)+custom习惯(熟词)+ed二弟(拼音)",
    G: "AC米兰球员习惯二弟的照料",
    H: "She has got accustomed to this sort of work.",
    I: "她对这种工作已习惯了。"
}, {
    B: "actual",
    C: "['æktʃuəl]",
    D: "adj.实际的，实在的",
    E: "act+u+al",
    F: "act行动(熟词)+u桶(编码)+al阿狸(拼音)",
    G: "实际上我采取行动用桶捞出了阿狸",
    H: "The actual cost was higher than we expected.",
    I: "实际成本比我们预计的要高。"
}, {
    B: "allergic",
    C: "[əˈlɜ:dʒɪk]",
    D: "adj.对…过敏的，过敏性的",
    E: "all+erg+ic",
    F: "all所有的(熟词)+erg二哥(拼音)+icIC卡(编码)",
    G: "所有的二哥都对IC卡",
    H: "I am allergic to cat hair.",
    I: "我对猫毛过敏。"
}, {
    B: "appeal",
    C: "[ə'piːl]",
    D: "vi.呼吁，恳求",
    E: "ap+pea+l",
    F: "ap阿婆(拼音)+pea豌豆(熟词)+l棍子(编码)",
    G: "阿婆吃着豌豆拿着棍子呼吁",
    H: "Police have appealed for witnesses to come forward.",
    I: "警方呼吁证人挺身而出。"
}, {
    B: "appliance",
    C: "[ə'plaɪəns]",
    D: "n.（家用）电器，器具，应用",
    E: "app+lian+ce",
    F: "app手机应用(编码)+lian连(拼音)+ce册(拼音)",
    G: "手机应用里连电器的说明手册都能看到",
    H: "Don't turn on any electric appliance without permission.",
    I: "不得擅自开启电器设备。"
}, {
    B: "appropriate",
    C: "[ə'prəʊpriət]",
    D: "adj.适当的，恰当的，合适的",
    E: "app+ro+pri+ate",
    F: "app手机应用(编码)+ro人偶(拼音)+pri平日(拼音)+ate吃(熟词)",
    G: "玩手机应用的人偶平日用适当的方法骗吃",
    H: "Our boat would not have been appropriate for ocean voyaging.",
    I: "我们的船只本不适合海上航行。"
}, {
    B: "arouse",
    C: "[əˈraʊz]",
    D: "vt.唤醒，引起，激起",
    E: "a+rou+se",
    F: "a苹果(编码)+rou肉(拼音)+se色(拼音)",
    G: "苹果肉的颜色唤醒了他",
    H: "At dawn the farmers began to arouse.",
    I: "黎明时农民们开始醒来。"
}, {
    B: "avenue",
    C: "['ævənju:]",
    D: "n.大街，街道，林荫道",
    E: "a+ve+nu+e",
    F: "a一(熟词)+ve维E(编码)+nu奴(拼音)+e鹅(编码)",
    G: "吃了一瓶维E的奴才赶着鹅在大街走",
    H: "Walk along Second Avenue and you can see it on the right.",
    I: "沿着第二大街走，然后你能看到它在右边。"
}, {
    B: "await",
    C: "[əˈweɪt]",
    D: "vt.等候，期待",
    E: "a+wait",
    F: "a苹果(编码)+wait等待(熟词)",
    G: "期待苹果成熟，等待摘取果实",
    H: "We await your decision.",
    I: "我们期待你作出决定。"
}, {
    B: "bare",
    C: "[beə(r)]",
    D: "adj.裸露的，无遮盖的，光秃秃的；vt.揭开，脱掉（衣服）",
    E: "b+are",
    F: "bar酒吧(熟词)+e衣(编码)",
    G: "给酒吧里穿着裸露的女士披上衣服",
    H: "He was standing there, completely bare.",
    I: "他站在那里，一丝不挂。"
}, {
    B: "bathe",
    C: "[beɪð]",
    D: "vi.洗澡，游泳",
    E: "bath+e",
    F: "bath浴缸(熟词)+e鹅(编码)",
    G: "给浴缸里的鹅洗澡",
    H: "Have you bathed the baby yet?",
    I: "你给婴儿洗澡了吗？"
}, {
    B: "brass",
    C: "[brɑ:s]",
    D: "n.黄铜器，黄铜",
    E: "br+a+ss",
    F: "br病人(拼音)+a苹果(编码)+ss两条蛇(编码)",
    G: "病人吃苹果时看到两条蛇钻进了黄铜器",
    H: "The price of brass is rising.",
    I: "铜价在涨。"
}, {
    B: "bridegroom",
    C: "[ˈbraɪdgrʊ:m]",
    D: "n.新郎",
    E: "bride+g+room",
    F: "bride新娘(熟词)+g哥(编码)+room房间(熟词)",
    G: "新娘在哥哥的房间里找到了新郎",
    H: "Let's all toast the bride and bridegroom.",
    I: "让我们为新郎新娘干杯。"
}, {
    B: "circumstance",
    C: "['sɜ:kəmstəns]",
    D: "n.环境，条件，状况",
    E: "circum+s+tance",
    F: "circum周围(词缀)+s美女(编码)+tance探测(拼音)",
    G: "周围的美女在探测环境",
    H: "Don't deceive under any circumstance.",
    I: "在任何情况下都不要行骗。"
}, {
    B: "coffin",
    C: "['kɒfɪn]",
    D: "n.棺材，棺木",
    E: "co+ff+in",
    F: "co可乐(熟词coke)+ff两把斧头(编码)+in在里面(熟词)",
    G: "喝完可乐拿两把斧头在里面砍棺材",
    H: "The coffin was lowered into the grave.",
    I: "棺材被放进了坟墓。"
}, {
    B: "cottage",
    C: "[ˈkɒtɪdʒ]",
    D: "n.小屋，村舍",
    E: "co+tt+age",
    F: "co可乐(熟词coke)+tt两把伞(编码)+age年龄(熟词)",
    G: "在小屋里喝可乐时打着两把伞的人年龄很大",
    H: "The cottage was cold and damp.",
    I: "这小屋又冷又湿。"
}, {
    B: "crane",
    C: "[kreɪn]",
    D: "n.吊车，起重机，鹤",
    E: "cr+an+e",
    F: "cr粗人(拼音)+an一(熟词)+e鹅(编码)",
    G: "粗人把一只鹅挂在吊车上",
    H: "This machine is called a crane.",
    I: "这种机器叫做起重机。"
}, {
    B: "crater",
    C: "['kreɪtə]",
    D: "n.火山口，坑",
    E: "cr+ate+r",
    F: "cr超人(拼音)+ate吃(熟词)+r草(编码)",
    G: "超人在火山口吃草",
    H: "Flames blazed out from the crater.",
    I: "火焰从火山口猛烈地。"
}, {
    B: "desperate",
    C: "['despərət]",
    D: "adj.绝望的，拼命的",
    E: "de+s+per+ate",
    F: "de的(拼音)+s美女(编码)+per每(熟词)+ate吃(熟词)",
    G: "绝望的美女每天都拒绝吃药",
    H: "They admit they are now desperate for a lucky break.",
    I: "他们承认现在急盼幸运之神的降临。"
}, {
    B: "diversity",
    C: "[daɪ'və:sətɪ]",
    D: "n.多种多样，多样性",
    E: "diver+sit+y",
    F: "diver潜水员(熟词)+sit坐(熟词)+y衣叉(编码)",
    G: "潜水员坐在衣叉上看到多种多样的鱼",
    H: "His object is to gather as great a diversity of material as possible.",
    I: "他的目标就是尽可能多地搜集各种材料。"
}, {
    B: "dread",
    C: "[dred]",
    D: "vi./vt.害怕，畏惧",
    E: "d+read",
    F: "d弟(编码)+read阅读(熟词)",
    G: "弟弟害怕阅读书籍",
    H: "It was the dread of all animals.",
    I: "这是一切动物都害怕的东西。"
}, {
    B: "droop",
    C: "[dru:p]",
    D: "vi.萎靡，低垂，凋萎",
    E: "dr+oo+p",
    F: "dr敌人(拼音)+oo两个蛋(编码)+p屁(编码)",
    G: "萎靡的敌人吃完两个鸡蛋后放了个屁",
    H: "Don't let your spirits droop.",
    I: "不要萎靡不振。"
}, {
    B: "due",
    C: "[dju:]",
    D: "adj.欠款的，预定的，到期的",
    E: "du+e",
    F: "du堵(拼音)+e鹅(编码)",
    G: "堵住卖鹅的人逼他交欠款",
    H: "They were due to pay the balance on delivery.",
    I: "他们应该在货到时支付余额。"
}, {
    B: "economical",
    C: "[ˌɪkə'nɔmɪkəl]",
    D: "adj.节约的，经济的，合算的",
    E: "econom+ic+al",
    F: "econom(y)经济(熟词)+icIC卡(编码)+al阿狸(拼音)",
    G: "经济萧条时卖IC卡的阿狸生活很节约",
    H: "I want most economical packing.",
    I: "我要最经济的包装。"
}, {
    B: "Egypt",
    C: "['i:dʒɪpt]",
    D: "n.埃及（东北非国家）",
    E: "E+gy+pt",
    F: "E鹅(编码)+gy公园(拼音)+pt葡萄(拼音)",
    G: "鹅在埃及的公园里吃葡萄",
    H: "She is planning a long holiday in Egypt and America.",
    I: "她计划去埃及和美国度长假。"
}, {
    B: "fahrenheit",
    C: "['færənhaɪt]",
    D: "adj.华氏的，华氏温标的",
    E: "fah+ren+he+it",
    F: "fah法海(拼音)+ren扔(拼音)+he他(熟词)+itIT(编码)",
    G: "法海扔给他一个IT男做的华氏的温度计",
    H: "So this is how to get Celsius from Fahrenheit.",
    I: "所以这个是怎么从华氏温度获得摄氏温度。"
}, {
    B: "faith",
    C: "[feɪθ]",
    D: "n.信仰，信念，信任",
    E: "fa+i+th",
    F: "fa发(拼音)+i蜡烛(编码)+th土豪(拼音)",
    G: "免费发蜡烛的土豪有信仰",
    H: "They stood steadfast on their faith.",
    I: "他们坚守他们的信念。"
}, {
    B: "fitness",
    C: "[ˈfɪtnəs]",
    D: "n.健康",
    E: "fit+ne+ss",
    F: "fit适合(熟词)+ne哪(吒)(拼音)+ss两个美女(编码)",
    G: "适合哪吒的两个美女很健康",
    H: "Hamilton suggests you change how you think about fitness.",
    I: "哈密顿建议你改变关于健康的观念。"
}, {
    B: "flesh",
    C: "[fleʃ]",
    D: "n.肉，肌体，肉体",
    E: "fl+e+sh",
    F: "fl俘虏(拼音)+e鹅(编码)+sh上海(拼音)",
    G: "俘虏把鹅肉运到了上海",
    H: "A fat man has much more flesh than a thin man.",
    I: "胖人较瘦人肉多。"
}, {
    B: "fluid",
    C: "['flu:ɪd]",
    D: "n.液体，流体",
    E: "flu+id",
    F: "flu流感(熟词)+id身份(编码)",
    G: "流感时期连身份证都要用液体消毒",
    H: "Make sure that you drink plenty of fluids.",
    I: "你务必要保证摄入足够的水分。"
}, {
    B: "fog",
    C: "[fɒg]",
    D: "n.雾",
    E: "fo+g",
    F: "fo佛(拼音)+g哥(编码)",
    G: "佛像前的雾让哥哥迷路了",
    H: "The crash happened in thick fog.",
    I: "浓雾中发生了撞车。"
}, {
    B: "fragrant",
    C: "[ˈfreɪgrənt]",
    D: "adj.香的，令人愉快的",
    E: "fr+ag+r+ant",
    F: "fr夫人(拼音)+ag阿哥(拼音)+r草(编码)+ant蚂蚁(熟词)",
    G: "夫人喂阿哥吃草蚂蚁闻到了香味",
    H: "How fragrant the flowers are!",
    I: "这些花真香！"
}, {
    B: "gallery",
    C: "[ˈgæl(ə)rɪ]",
    D: "n.画廊",
    E: "ga+ll+e+ry",
    F: "ga嘎(拼音)+ll11(象形)+e鹅(编码)+ry人妖(拼音)",
    G: "嘎嘎叫的11只鹅和人妖一起走进画廊",
    H: "Today his picture goes on show at the National Portrait Gallery.",
    I: "今天他的画作在国家肖像美术馆展出。"
}, {
    B: "illegal",
    C: "[ɪˈli:gəl]",
    D: "adj.违法的，非法的",
    E: "ill+e+gal",
    F: "ill生病的(熟词)+e鹅(编码)+gal咖喱(拼音)",
    G: "生病的鹅违法卖咖喱",
    H: "Such an illegal act should not be treated lightly.",
    I: "这样的违法行为不可等闲视之。"
}, {
    B: "impressionism",
    C: "[ɪm'preʃənɪzəm]",
    D: "n.印象派，印象主义",
    E: "impression+is+m",
    F: "impression印象(熟词)+is是(熟词)+m麦当劳(编码)",
    G: "印象派画家最爱吃的是麦当劳",
    H: "Manet is a painter of impressionism.",
    I: "莫奈是印象派画家。"
}, {
    B: "impressionist",
    C: "[ɪmˈpreʃənɪst]",
    D: "n.印象派艺术家；adj.印象派的",
    E: "impression+is+t",
    F: "impression印象(熟词)+is是(熟词)+t伞(编码)",
    G: "印象派艺术家最爱画的是伞",
    H: "She is usually labelled as an impressionist.",
    I: "人们通常把她称为印象派艺术家。"
}, {
    B: "individual",
    C: "[ɪndɪ'vɪdjʊ(ə)l]",
    D: "adj.个人的，个别的，独特的；n.个人，个体",
    E: "in+divid+u+al",
    F: "in里面(熟词)+divid(e)划分(熟词)+u你(编码you)+al暗恋(拼音)",
    G: "这里面划分出的是你暗恋时的个人消费",
    H: "The interests of the collective lie before the interests of the individual.",
    I: "集体利益重于个人利益。"
}, {
    B: "landscape",
    C: "[ˈlændskeɪp]",
    D: "n.景色，风景",
    E: "land+s+cap+e",
    F: "land土地(熟词)+s美女(编码)+cap帽子(熟词)+e鹅(编码)",
    G: "在景色优美的土地上美女的帽子被鹅抢了",
    H: "The boy painted a landscape on paper.",
    I: "这个男孩子在纸上画了一张风景画。"
}, {
    B: "librarian",
    C: "[laɪˈbreərɪən]",
    D: "n.图书馆馆长，图书管理员",
    E: "librar+i+an",
    F: "librar(y)图书馆(熟词)+i爱(编码)+an一(熟词)",
    G: "图书管馆长爱一个人独处",
    H: "The librarians catalogued the new books.",
    I: "图书管理人员把新书编成目录。"
}, {
    B: "nicotine",
    C: "[ˈnɪkəti:n]",
    D: "n.尼古丁，[化]烟碱",
    E: "ni+co+tin+e",
    F: "ni你(拼音)+co可乐(熟词coke)+tin罐头(熟词)+e鹅(编码)",
    G: "你放在可乐罐头里的尼古丁被鹅吃了",
    H: "Nicotine is the most widely used drug of abuse.",
    I: "尼古丁是滥用最广泛使用的药物。"
}, {
    B: "novelist",
    C: "['nɒvəlɪst]",
    D: "n.小说家",
    E: "novel+is+t",
    F: "novel小说(熟词)+is是(熟词)+t特(编码)",
    G: "小说家原来是特务",
    H: "Helen is a very well-known novelist in Australia.",
    I: "海伦是澳大利亚非常著名的小说家。"
}, {
    B: "observatory",
    C: "[əb'zɜ:vətrɪ]",
    D: "n.天文台，气象台，观象台",
    E: "observ+at+o+ry",
    F: "observ(e)观察(熟词)+at在(熟词)+o洞(编码)+ry人妖(拼音)",
    G: "在天文台观察到躲在山洞里的人妖",
    H: "My house was close to the observatory.",
    I: "我的房子离天文台很近。"
}, {
    B: "panic",
    C: "['pænɪk]",
    D: "vt./vi.惊慌；n.恐慌，惊慌",
    E: "pan+ic",
    F: "pan盘(拼音)+icIC卡(编码)",
    G: "盘丝洞中的IC卡让他很惊慌",
    H: "There was a last-minute panic when nobody could find the tickets.",
    I: "票找不到时，大家出现了紧急关头的恐慌。"
}, {
    B: "random",
    C: "['rændəm]",
    D: "adj.随机的，任意的；n.随意",
    E: "ran+do+m",
    F: "ran然(拼音)+do做(熟词)+m麦当劳(编码)",
    G: "然后，我们做的菜都在麦当劳里随机发放了",
    H: "The competitors will be subject to random drug testing.",
    I: "参赛者将要接受随机药检。"
}, {
    B: "ridiculous",
    C: "[rɪ'dɪkjələs]",
    D: "adj.荒谬的，可笑的",
    E: "rid+icu+l+ous",
    F: "rid(e)骑(熟词)+icu重症监护室(编码)+l1(象形)+ous藕丝(拼音)",
    G: "骑车去重症监护室取1根藕丝很荒谬",
    H: "She broke in with a ridiculous objection.",
    I: "她突然插嘴提了个可笑的异议。"
}, {
    B: "sexual",
    C: "['sekʃuəl]",
    D: "adj.性的，性行为的，性别的",
    E: "sex+u+al",
    F: "sex性(熟词)+u你(编码you)+al暗恋(拼音)",
    G: "广大女性对你的暗恋使你很骄傲",
    H: "Girls generally reach sexual maturity two years earlier than boys.",
    I: "通常女孩性发育成熟要比男孩早两年。"
}, {
    B: "shot",
    C: "[ʃɒt]",
    D: "n.射击，枪炮声",
    E: "s+hot",
    F: "s美女(编码)+hot热(熟词)",
    G: "射击后的美女浑身发热",
    H: "A man fired a volley of shots at them.",
    I: "一名男子向他们射出了一排子弹。"
}, {
    B: "sparrow",
    C: "[ˈspærəʊ]",
    D: "n.麻雀",
    E: "spa+r+row",
    F: "spa水疗(熟词)+r草(编码)+row排(熟词)",
    G: "麻雀做完水疗后在草地上站成一排",
    H: "There are many sparrows on the tree.",
    I: "树上有很多麻雀。"
}, {
    B: "spill",
    C: "[spɪl]",
    D: "vi.溢出；vt.使溢出",
    E: "s+pill",
    F: "s蛇(编码)+pill药丸(熟词)",
    G: "蛇偷吃溢出来的药丸",
    H: "Don't spill the soup.",
    I: "别把汤洒了。"
}, {
    B: "squire",
    C: "[ˈskwaɪə(r)]",
    D: "n.乡绅",
    E: "squ+i+re",
    F: "squ失去(拼音)+i爱(编码)+re热(拼音)",
    G: "乡绅失去爱人后没了热情",
    H: "I told him the squire was the most liberal of men.",
    I: "我告诉他乡绅是世界上最宽宏大量的人。"
}, {
    B: "superb",
    C: "[su:ˈpɜ:b]",
    D: "adj.杰出的，卓越的，极好的",
    E: "super+b",
    F: "super超级(熟词)+b男孩(编码boy)",
    G: "超级男孩很杰出",
    H: "She looked superb.",
    I: "她看上去棒极了。"
}, {
    B: "sweat",
    C: "[swet]",
    D: "n.汗；vi.出汗",
    E: "s+w+eat",
    F: "s美女(编码)+w皇冠(编码)+eat吃(熟词)",
    G: "出汗的美女戴着皇冠吃东西",
    H: "Already they were sweating as the sun beat down upon them.",
    I: "在阳光的强烈照射下他们已经汗流浃背。"
}, {
    B: "threat",
    C: "[θret]",
    D: "n.威胁，恐吓",
    E: "th+r+eat",
    F: "th土豪(拼音)+r草(编码)+eat吃(熟词)",
    G: "威胁土豪把草吃了",
    H: "Some couples see single women as a threat to their relationships.",
    I: "有些夫妇把单身女人看成是对他们婚姻的威胁。"
}, {
    B: "tornado",
    C: "[tɔ:'neɪdəʊ]",
    D: "n.龙卷风，旋风",
    E: "to+r+na+do",
    F: "to到(熟词)+r草(编码)+na那(拼音)+do干(熟词)",
    G: "到草原那边干活的老伯遇上龙卷风",
    H: "A tornado whirled into the town last week.",
    I: "龙卷风上周袭击了这座城市。"
}, {
    B: "tsunami",
    C: "[tsu:ˈnɑ:mɪ]",
    D: "n.海啸，地震海啸",
    E: "t+sun+ami",
    F: "t伞(编码)+sun太阳(熟词)+ami阿米(拼音)",
    G: "伞下晒太阳的阿米遇到了海啸",
    H: "Powerful quake sparks tsunami warning in Japan.",
    I: "大地震触发了日本的海啸预警。"
}, {
    B: "unconscious",
    C: "[ʌn'kɒnʃəs]",
    D: "adj.失去知觉的，未察觉的",
    E: "un+conscious",
    F: "un联合国(编码)+conscious意识到的(熟词)",
    G: "联合国意识到他已失去知觉",
    H: "She is unconscious of the effect she has on people.",
    I: "她没有察觉自己对大众的影响。"
}, {
    B: "utter",
    C: "['ʌtə(r)]",
    D: "vt.说，发出（声音）；adj.完全的，彻底的",
    E: "u+tt+er",
    F: "u你(编码you)+tt偷偷(拼音)+er儿子(拼音)",
    G: "你偷偷跑去找儿子说了什么",
    H: "It takes two of us to discover truth : one to utter it and one to understand it.",
    I: "真理是需要我们两个人来发现的：一个人来讲说它，一个人来了解它。"
}, {
    B: "figure",
    C: "['fɪgə]",
    D: "vi.计算；n.数字，人物，图形",
    E: "finger",
    F: "finger手指",
    G: "用手指来计算出来",
    H: "He has kept the figure of Buddha for luck.",
    I: "为了图吉利他一直保存着这尊佛像。"
}, {
    B: "abortion",
    C: "[ə'bɔ:ʃn]",
    D: "n.人工流产，堕胎",
    E: "abor+tion",
    F: "abor(t)流产(熟词)+tion婶(谐音)",
    G: "在做人工流产手术的是婶婶",
    H: "Abortion is still one of the hot button issues of US life.",
    I: "堕胎仍是美国人日常生活中的一个敏感议题。"
}, {
    B: "absolutely",
    C: "['æbsəluːtlɪ]",
    D: "adv.完全地，绝对地",
    E: "ab+solu+tely",
    F: "ab阿伯(拼音)+solu摄录(谐音)+tely塔里(谐音)",
    G: "阿伯把塔里的风光完全地摄录下来",
    H: "It was absolutely the worst food I have ever had.",
    I: "这绝对是我吃过的最糟糕的食物。"
}, {
    B: "adolescence",
    C: "[ˌædəˈlesəns]",
    D: "n.青少年；adj.青年期的",
    E: "ado+les+c+ence",
    F: "ado艾德(谐音)+les勒索(拼音)+c看见(编码see)+ence摁死(谐音)",
    G: "艾德勒索人时看见被摁死的青少年",
    H: "He displayed all the awkwardness of adolescence.",
    I: "他表现出了青春期的各种羞涩不安。"
}, {
    B: "adopt",
    C: "[əˈdɒpt]",
    D: "vt.收养，采用，采纳",
    E: "ad+opt",
    F: "ad阿弟(拼音)+opt我怕他(谐音)",
    G: "被收养的阿弟说我怕他",
    H: "This is the attitude that everyone should adopt towards their frustrations.",
    I: "这也是每个人面对挫折时应该采取的态度。"
}, {
    B: "advocate",
    C: "['ædvəkeɪt]",
    D: "vt.拥护，提倡，主张",
    E: "ad+vo+cate",
    F: "ad阿弟(拼音)+vo我(谐音)+cate凯特(谐音)",
    G: "阿弟拥护我和凯特",
    H: "He is a strident advocate of nuclear power.",
    I: "他是发展核能的坚定拥护者。"
}, {
    B: "aggressive",
    C: "[ə'gresɪv]",
    D: "adj.好斗的，挑衅的，侵略的",
    E: "agg+res+sive",
    F: "agg阿哥哥(拼音)+res热水(拼音)+sive媳妇(谐音)",
    G: "好斗的阿哥哥用热水烫媳妇",
    H: "The female of the species is very aggressive.",
    I: "这个物种的雌性是非常好斗的。"
}, {
    B: "alcohol",
    C: "['ælkəhɒl]",
    D: "n.酒，酒精，含酒精的饮料",
    E: "al+co+hol",
    F: "al阿狸(拼音)+co可乐(熟词coke)+hol获(谐音)",
    G: "阿狸买可乐获奖中了一瓶酒",
    H: "Is it possible for cars to run on pure alcohol?",
    I: "轿车可能以纯酒精作燃料吗？"
}, {
    B: "anxiety",
    C: "[æŋ'zaɪətɪ]",
    D: "n.焦虑，渴望",
    E: "an+xie+ty",
    F: "an一个(熟词)+xie谢(拼音)+ty踢(谐音)",
    G: "他有点焦虑，说了个谢字后就踢飞我了",
    H: "His illness was aggravated by anxiety.",
    I: "他的病情因焦虑而加重。"
}, {
    B: "appendix",
    C: "[əˈpendɪks]",
    D: "n.阑尾，附录，附属物",
    E: "ap+pen+dix",
    F: "ap阿婆(拼音)+pen钢笔(熟词)+dix底下(谐音)",
    G: "阿婆用钢笔切除了底下的阑尾",
    H: `I have recently had my appendix removed.  
`,
    I: "我最近切除了阑尾。"
}, {
    B: "appreciation",
    C: "[əˌpri:ʃɪ'eɪʃn]",
    D: "n.欣赏，感激，感谢",
    E: "app+reci+ation",
    F: "app应用(编码)+reci热词(拼音)+ation爱神(谐音)",
    G: "APP上的热词获得爱神的欣赏",
    H: "Brian whistled in appreciation.",
    I: "布赖恩吹口哨以示赞赏。"
}, {
    B: "brimful",
    C: "[ˈbrɪmfʊl]",
    D: "adj.满到边际的，盈满的",
    E: "br+im+ful",
    F: "br病人(拼音)+im姨母(谐音)+ful(l)满的(熟词)",
    G: "病人的姨母拿着一杯满到边际的咖啡",
    H: "She was brimful of energy and enthusiasm.",
    I: "她精力充沛，热情洋溢。"
}, {
    B: "catastrophe",
    C: "[kə'tæstrəfɪ]",
    D: "n.灾难，大祸，惨败",
    E: "catas+tro+phe",
    F: "catas科泰斯(谐音)+tro戳(谐音)+phe皮盒(拼音)",
    G: "灾难来了，科泰斯还在戳皮盒",
    H: "A catastrophe  is brewing.",
    I: "一场灾祸正在酿成。"
}, {
    B: "championship",
    C: "['tʃæmpɪənʃɪp]",
    D: "n.冠军称号，竞标赛",
    E: "champion+ship",
    F: "champion产品(谐音)+ship船(熟词)",
    G: "产品船获得冠军称号",
    H: "He went on to take the championship.",
    I: "他继而夺取冠军宝座。"
}, {
    B: "coincidence",
    C: "[kəʊˈɪnsɪdəns]",
    D: "n.巧合（的事），（事情、口味、故事等）相合",
    E: "coin+ci+dence",
    F: "coin硬币(熟词)+ci刺(拼音)+dence等死(谐音)",
    G: "巧合的是没有硬币刺客只能等死",
    H: "It can scarcely be coincidence.",
    I: "它不太可能是巧合。"
}, {
    B: "comprehension",
    C: "[ˌkɒmprɪˈhenʃn]",
    D: "n.理解力",
    E: "com+pre+hen+sion",
    F: "com公司(编码)+pre仆人(拼音)+hen很(拼音)+sion神(谐音)",
    G: "公司的仆人很羡慕神的理解力",
    H: "The problem is above beyond my comprehension.",
    I: "这个问题超出我的理解力。"
}, {
    B: "concrete",
    C: "[ˈkɒŋkri:t]",
    D: "adj.具体的",
    E: "con+cre+te",
    F: "con康(谐音)+cre粗人(拼音)+te特(拼音)",
    G: "康熙描述粗人时特具体",
    H: "There were no concrete proposals on the table.",
    I: "没有具体的提议可供讨论。"
}, {
    B: "contemporary",
    C: "[kənˈtemprərɪ]",
    D: "adj.当代的，同时代的",
    E: "con+temporary",
    F: "con肯(谐音)+temporary临时的(熟词)",
    G: "当代人肯定都爱做临时工",
    H: "His work is very contemporary.",
    I: "他的作品与现实生活非常接近。"
}, {
    B: "contradictory",
    C: "[ˌkɒntrəˈdɪktərɪ]",
    D: "adj.引起矛盾的，好反驳的",
    E: "con+tra+dic+tory",
    F: "con康(谐音)+tra突然(拼音)+dic迪克(谐音)+(s)tory故事(熟词)",
    G: "康熙突然让迪克讲故事引起矛盾",
    H: "The argument is internally contradictory.",
    I: "论据本身自相矛盾。"
}, {
    B: "controversial",
    C: "[ˌkɒntrəˈvɜ:ʃl]",
    D: "adj.争论的，争议的",
    E: "con+tr+over+sial",
    F: "con康(谐音)+tr土人(拼音)+over在...之上(熟词)+sial收(谐音)",
    G: "康熙和土人在税收上是有争论的",
    H: "The topic of argument is controversial.",
    I: "这个议题是很有争议的。"
}, {
    B: "convey",
    C: "[kənˈveɪ]",
    D: "vt.表达，运送",
    E: "con+ve+y",
    F: "con啃(谐音)+ve维E(编码)+y衣叉(编码)",
    G: "啃完维E拿着衣叉表达观点",
    H: "I can't convey my feelings in words.",
    I: "我无法用言语来表达我的情感。"
}, {
    B: "critic",
    C: "['krɪtɪk]",
    D: "n.评论家，批评家",
    E: "cr+it+ic",
    F: "cr超人(拼音)+it它(熟词)+icIC卡(谐音)",
    G: "评论家说超人拿了它的IC卡",
    H: "He became a fierce critic of the tobacco industry.",
    I: "他成了烟草业的强烈反对者。"
}, {
    B: "darkness",
    C: "[ˈdɑ:knɪs]",
    D: "n.黑暗，漆黑",
    E: "dark+ness",
    F: "dark黑暗(熟词)+ness你死(谐音)",
    G: "在一片黑暗中你死了",
    H: "He lay in the darkness, pretending to sleep.",
    I: "他躺在黑暗中，假装睡觉。"
}, {
    B: "effectively",
    C: "[ɪ'fektɪvlɪ]",
    D: "adv.有效地",
    E: "effective+ly",
    F: "effective有效的(熟词)+ly梨(谐音)",
    G: "对止咳最有效的是梨",
    H: "You dealt with the situation very effectively.",
    I: "你应付那种局面很有一套。"
}, {
    B: "evident",
    C: "[ˈevɪdənt]",
    D: "adj.明显的，明白的",
    E: "e+vi+dent",
    F: "e鹅(编码)+vi胜利(谐音V)+dent等他(拼音)",
    G: "很明显鹅胜利后会等他",
    H: "His footprints were clearly evident in the heavy dust.",
    I: "厚厚的尘土中他的脚印清晰易见。"
}, {
    B: "existence",
    C: "[ɪg'zɪst(ə)ns]",
    D: "n.存在，实在",
    E: "ex+is+tence",
    F: "ex前妻(熟词)+is有(熟词)+tence疼死(谐音)",
    G: "前妻有病时疼死了，这是真实存在的",
    H: "Public worries about accidents are threatening the very existence of the nuclear power industry.",
    I: "公众对事故的担忧正威胁着核能工业的生存。"
}, {
    B: "female",
    C: "[ˈfiːmeɪl]",
    D: "adj.女性的，雌的",
    E: "fe+male",
    F: "fe非(谐音)+male男性(熟词)",
    G: "非男性就是女性",
    H: "I realize there's no consensus on what are male or female values.",
    I: "我意识到人们对什么是男性价值观和什么是女性价值观并无共识。"
}, {
    B: "flexible",
    C: "[ˈfleksibl]",
    D: "adj.灵活的",
    E: "fl+ex+ible",
    F: "fl俘虏(拼音)+ex前妻(熟词)+ible阿伯(谐音)",
    G: "俘虏的前妻发现阿伯很灵活",
    H: "He shopped around for a firm that would be flexible.",
    I: "他到处寻觅一家可灵活变通的公司。"
}, {
    B: "foster",
    C: "['fɒstə]",
    D: "vt.养育，培养",
    E: "fo+st+er",
    F: "fo佛(拼音)+st石头(拼音)+er儿(谐音)",
    G: "佛在石头上养育了儿子",
    H: "Little Jack was placed with foster parents.",
    I: "小杰克和养父母住在一起。"
}, {
    B: "graph",
    C: "[græf]",
    D: "n.图表，曲线图",
    E: "g+ra+ph",
    F: "g哥哥(拼音)+ra拉(谐音)+ph屁孩(拼音)",
    G: "哥哥拉着屁孩一起画图表",
    H: "Here is a graph showing the relationship between sales and costs.",
    I: "这幅图表明了销售和成本之间的关系。"
}, {
    B: "immune",
    C: "[ɪ'mju:n]",
    D: "adj.免疫的",
    E: "im+mune",
    F: "im姨母(谐音)+mune木讷(拼音)",
    G: "姨母木讷得对一切都失去了免疫力",
    H: "Yoga can be used to strengthen the immune system.",
    I: "瑜伽能增强人体免疫系统。"
}, {
    B: "imperative",
    C: "[ɪm'perətɪv]",
    D: "adj.不可避免的，必要的；n.必要的事",
    E: "im+pera+tive",
    F: "im姨母(谐音)+pera怕热(谐音)+tive踢我(谐音)",
    G: "姨母怕热时踢我是不可避免的",
    H: "The most important political imperative is to limit the number of US casualties.",
    I: "现在的头等政治大事就是要控制美国人的伤亡人数。"
}, {
    B: "injection",
    C: "[ɪn'dʒekʃn]",
    D: "n.注射",
    E: "in+jec+tion",
    F: "in里面(熟词)+jec杰克(谐音)+tion婶(谐音)",
    G: "房间里面杰克的婶婶在注射药物",
    H: "The injection sent his leg into spasm.",
    I: "一针打下去，他的腿就痉挛了。"
}, {
    B: "leopard",
    C: "['lepəd]",
    D: "n.美洲豹，豹",
    E: "leo+pa+rd",
    F: "leo利奥(谐音)+pa怕(拼音)+rd热的(拼音)",
    G: "利奥怕热带的美洲豹",
    H: "But the President  was sympathetic to the plight of the leopard.",
    I: "尽管如此，总统对雪豹的下落还是十分。"
}, {
    B: "mentally",
    C: "[ˈmentəlɪ]",
    D: "adv.精神上，智力上",
    E: "ment+al+ly",
    F: "ment门徒(拼音)+al阿狸(拼音)+ly梨(谐音)",
    G: "有精神病的门徒抢走阿狸的梨",
    H: "I'm mentally prepared for the competition.",
    I: "我已经为比赛做了心里准备。"
}, {
    B: "mockingbird",
    C: "[ˈmɒkɪŋbɜ:d]",
    D: "n.嘲鸠",
    E: "moc+king+bird",
    F: "moc默克(谐音)+king国王(熟词)+bird鸟(熟词)",
    G: "默克国王养了只嘲鸠鸟",
    H: "Mama's going to buy you a mockingbird.",
    I: "妈妈给你买一只嘲鸠鸟。"
}, {
    B: "perspective",
    C: "[pə'spektɪv]",
    D: "n.态度，观点，思考方法",
    E: "per+spe+ct+ive",
    F: "per每(熟词)+spe索赔(拼音)+ct餐厅(拼音)+ive伊芙(谐音)",
    G: "每个人都就索赔方案向餐厅代表伊芙表明态度",
    H: "We should view this from the perspective of those involved.",
    I: "我们应从涉及到的人的角度看这个问题。"
}, {
    B: "persuasion",
    C: "[pə'sweɪʒn]",
    D: "n.说服，信服",
    E: "per+su+asion",
    F: "per每(熟词)+su诉(拼音)+asion爱人(谐音)",
    G: "他说服了每个投诉他爱人的人",
    H: "He decided to leave only after much persuasion.",
    I: "经过多方劝说，他才决定离开。"
}, {
    B: "potential",
    C: "[pəˈtenʃl]",
    D: "n.可能性，潜能",
    E: "po+ten+tial",
    F: "po婆(拼音)+ten十(熟词)+tial手(谐音)",
    G: "婆婆有长十只手的可能性",
    H: "John seemed as horrified as I about his potential for violence.",
    I: "约翰似乎和我一样害怕他自己会使用暴力。"
}, {
    B: "repetition",
    C: "[repɪ'tɪʃ(ə)n]",
    D: "n.重复，背诵，副本",
    E: "re+pet+ition",
    F: "re热(拼音)+pet宠物(熟词)+ition衣神(谐音)",
    G: "热热热宠物重复地说给衣神听",
    H: "And the  best  way  to  do that is  through  repetition.",
    I: "要做成那样的最好办法就是通过重复的方式。"
}, {
    B: "reputation",
    C: "[ˌrepju'teɪʃn]",
    D: "n.名誉，名声",
    E: "re+puta+tion",
    F: "re热(拼音)+puta葡挞(拼音)+tion神(谐音)",
    G: "热天偷吃葡挞的神损害了名誉",
    H: "He  tried  to  lie away her  reputation.",
    I: "他极力以谎言毁损她的名誉。"
}, {
    B: "revolve",
    C: "[rɪˈvɒlv]",
    D: "vi./vt.（使）旋转",
    E: "re+vol+ve",
    F: "re热(拼音)+vol我(谐音)+ve维E(编码)",
    G: "热天我吃了维E后开始旋转",
    H: "The Earth revolves around the sun.",
    I: "地球围绕太阳转。"
}, {
    B: "slippery",
    C: "['slɪp(ə)rɪ]",
    D: "adj.滑的",
    E: "s+lip+pery",
    F: "s美女(编码)+lip嘴唇(熟词)+pery怕热(谐音)",
    G: "美女涂嘴唇时怕热滑倒了",
    H: "The tiled floor was wet and slippery.",
    I: "瓷砖地面又湿又滑。"
}, {
    B: "sorrow",
    C: "['sɒrəʊ]",
    D: "n.悲哀，悲痛",
    E: "so+rrow",
    F: "so所以(熟词)+rrow肉(谐音)",
    G: "因为悲伤所以吃肉",
    H: "Her coming charmed away all his sorrow.",
    I: "她的到来驱散了他的一切悲痛。"
}, {
    B: "subscribe",
    C: "[səb'skraɪb]",
    D: "vi.订阅，捐款；vt.签署，赞成，捐助",
    E: "sub+scribe",
    F: "sub下面(词缀)+scribe撕开吧(谐音)",
    G: "下面把订阅的书籍撕开吧",
    H: "Which journals does the library subscribe to?",
    I: "图书馆订有哪些报刊？"
}, {
    B: "vary",
    C: "['veərɪ]",
    D: "vi.变化，变异；vt.改变，使多样化",
    E: "va+ry",
    F: "va哇(谐音)+ry人妖(拼音)",
    G: "哇！人妖在变化",
    H: "Cherries vary in colour from almost black to yellow.",
    I: "樱桃的颜色由近乎黑到黄各不相同。"
}, {
    B: "visual",
    C: "['vɪʒuəl]",
    D: "adj.视觉的，视力的，可见的",
    E: "vi+su+al",
    F: "vi胜利(谐音V)+su酥(拼音)+al暗恋(拼音)",
    G: "有视觉障碍的他胜利做出酥饼给暗恋的人吃",
    H: "He took a quick visual examination.",
    I: "他很快地目测了一下。"
}, {
    B: "volcano",
    C: "[vɔlˈkeinəu]",
    D: "n.火山",
    E: "vol+can+o",
    F: "vol我(谐音)+can能(熟词)+o洞(编码)",
    G: "我能让山洞变成火山",
    H: "A volcano spouts flame and lava.",
    I: "火山喷出火焰和岩浆。"
}, {
    B: "heading",
    C: "[ˈhedɪŋ]",
    D: "n.标题，题词，题名",
    E: "head+ing",
    F: "head头(熟词)+ing鹰(谐音)",
    G: "带头的鹰上了新闻标题",
    H: "I'd like the heading to be in a different typeface from the text.",
    I: "我希望标题和正文使用不同的字体。"
}, {
    B: "hectare",
    C: "['hekteə(r)]",
    D: "n.公顷",
    E: "he+ct+are",
    F: "he他(熟词)+ct餐厅(拼音)+are是(熟词)",
    G: "他的餐厅占地是有一公顷的",
    H: `The lands were to be sold at $ 2.50 per hectare.  
`,
    I: "土地的售价为每公顷2.50美元。"
}, {
    B: "questionnaire",
    C: "[ˌkwestʃə'neə]",
    D: "n.问卷，调查表",
    E: "question+naire",
    F: "question问题(熟词)+naire耐热(拼音)",
    G: "问卷的问题是关于材料的耐热性",
    H: "Headteachers will be asked to fill in a questionnaire.",
    I: "校长们将被要求完成一份问卷调查。"
}, {
    B: "disco",
    C: "['dɪskəʊ]",
    D: "n.迪斯科舞厅",
    E: "dis+co",
    F: "dis的士(拼音)+co可乐(熟词coke)",
    G: "的士司机喝着可乐在迪斯科舞厅跳舞",
    H: "This disco magnetized young people.",
    I: "这种迪斯科舞会吸引着年轻人。"
}, {
    B: "greenhouse",
    C: "['gri:nhaʊs]",
    D: "n.温室，造成温室效应的",
    E: "green+house",
    F: "green绿色+house房子",
    G: "绿色的房子被改造成温室",
    H: "Our greenhouse is nothing compared with yours.",
    I: "我们这个温室比起你们那个简直是小巫见大巫。"
}, {
    B: "growth",
    C: "[grəʊθ]",
    D: "n.生长，发展，增长",
    E: "grow+th",
    F: "grow生长(熟词)+th土豪(拼音)",
    G: "吃了生长激素后土豪长高了",
    H: "The novel portrays the growth of a fighter.",
    I: "这本小说描写了一个战士的成长。"
}, {
    B: "aids",
    C: "[eɪdz]",
    D: "n.（缩）艾滋病",
    E: "aid+s",
    F: "aid帮手(熟词)+s死(拼音)",
    G: "帮手得了艾滋病死了",
    H: "He died from an aids-related disease.",
    I: "他死于与艾滋病相关的疾病。"
}, {
    B: "motor",
    C: "['məʊtə]",
    D: "n.发动机，马达，汽车；adj.汽车的，机动的",
    E: "mot+or",
    F: "mot魔头+or偶人",
    G: "魔头抢走偶人的发动机",
    H: "Let me motor your daughter (to) home.",
    I: "让我开汽车送你女儿回家。"
}, {
    B: "environmentalist",
    C: "[ɪnˌvaɪrən'ment(ə)lɪst]",
    D: "n.环保主义者，研究环境问题的专家",
    E: "environment+a+list",
    F: "environment环境+a一+list清单",
    G: "环保主义者为环境保护列了一个清单",
    H: "The ban and environmentalist campaigns have merely served to raise prices and along with the dish's prestige.",
    I: "禁采令和环保人士发动的战役只不过提升了发财的价格以及这道菜的名声。"
}, {
    B: "outer",
    C: "['aʊtə(r)]",
    D: "adj.外面的，外部的",
    E: "out+er",
    F: "out外(熟词)+er儿(拼音)",
    G: "外面的世界吸引着儿子",
    H: "He heard a voice in the outer room.",
    I: "他听到外屋有人说话。"
}, {
    B: "slogan",
    C: "['sləʊgən]",
    D: "n.标语，口号",
    E: "slog+an",
    F: "slog5109(象形)+an一(熟词)",
    G: "5109个字合成一句标语",
    H: "The Socialists tried to trump this with their slogan.",
    I: "社会党党员设法用他们的口号把它压过去。"
}, {
    B: "microwave",
    C: "['maɪkrəweɪv]",
    D: "n.微波炉；vt.用微波炉加热",
    E: "micro+wave",
    F: "micro极小的+wave海浪",
    G: "微波炉被极小的海浪卷走了",
    H: "Never microwave egg in the shell.",
    I: "勿将带壳的鸡蛋放入微波炉内加热。"
}, {
    B: "celsius",
    C: "['selsɪəs]",
    D: "n.摄氏度；adj.摄氏的",
    E: "cel+si+us",
    F: "cel(l)细胞(熟词)+si死(拼音)+us我们(熟词)",
    G: "细胞死后我们才能测量是多少摄氏度",
    H: "Night temperatures can drop below 15 degrees celsius.",
    I: "夜间气温会降到15摄氏度以下。"
}, {
    B: "drought",
    C: "[draʊt]",
    D: "n.干旱，缺乏",
    E: "dr+ought",
    F: "dr敌人(拼音)+ought应该(熟词)",
    G: "敌人应该积极抵抗干旱",
    H: `The crops died during the drought.
`,
    I: "干旱期间庄稼都枯死了。"
}, {
    B: "oppose",
    C: "[ə'pəʊz]",
    D: "vt./vi.反对，阻挠",
    E: "op+pose",
    F: "op藕片(拼音)+pose姿势(熟词)",
    G: "她反对拍照时用藕片摆姿势",
    H: "Many parents oppose bilingual education in schools.",
    I: "很多家长反对学校实行双语教育。"
}, {
    B: "opposed",
    C: "[ə'pəʊzd]",
    D: "adj.反对的，不赞成的，对抗的，相反的",
    E: "oppose+ed",
    F: "oppose反对(熟词)+ed二弟(拼音)",
    G: "他反对的是二弟不上大学这事儿",
    H: "We ate in the restaurant, as opposed to the bistro.",
    I: "我们是在餐厅吃的饭，而不是在小饭馆。"
}, {
    B: "renewable",
    C: "[rɪ'nju:əbl]",
    D: "adj.可再生的，可更新的，可恢复的",
    E: "renew+able",
    F: "renew更新+able能",
    G: "更新目录后能找到可再生资源的名字",
    H: "People with expertise in one field, such as renewable energy, may have a bias towards it.",
    I: "在某个领域，如可再生能源方面拥有专业知识的人或许对此有偏见。"
}, {
    B: "sex",
    C: "[seks]",
    D: "n.性别，两性之一，性活动",
    E: "six",
    F: "six六",
    G: "检查六只鹅(e)的性别",
    H: "They sat me down and had a serious discussion about sex.",
    I: "他们让我坐下，然后和我严肃地探讨了有关性的话题。"
}, {
    B: "committee",
    C: "[kəˈmiti]",
    D: "n.委员会",
    E: "com+mi+ttee",
    F: "com(e)来(熟词)+mi米(拼音)+ttee两把伞两只鹅(编码)",
    G: "拿着米两把伞和两只鹅送去委员会办公室",
    H: "This committee will enable decisions to be made democratically.",
    I: "该委员会将实现民主决议过程。"
}, {
    B: "erupt",
    C: "[ɪ'rʌpt]",
    D: "vi./vt.（火山）爆发，喷出，突然发生",
    E: "er+up+t",
    F: "er耳(拼音)+up起来(熟词)+t特(编码)",
    G: "耳朵竖起来的特务听到火山爆发的声音",
    H: "Heavy fighting erupted there today after a two-day ceasefire.",
    I: "在停火两天后，今天那里爆发了激烈的战斗。"
}, {
    B: "eruption",
    C: "[ɪ'rʌpʃn]",
    D: "n.爆发，喷发",
    E: "erupt+i+on",
    F: "erupt爆发(熟词)+i骨头(编码)+on在...上面(熟词)",
    G: "火山爆发后尸骨都堆在山上面",
    H: "A few days later, Vesuvius was in violent eruption.",
    I: "几天之后，维苏威火山猛烈爆发了。"
}, {
    B: "methane",
    C: "['mi:θeɪn]",
    D: "n.甲烷，沼气",
    E: "me+than+e",
    F: "me我(熟词)+than比...(熟词)+e鹅(编码)",
    G: "我吸的甲烷比鹅吸的多",
    H: "What do we know about methane?",
    I: "关于甲烷我们知道什么？"
}, {
    B: "volcanic",
    C: "[vɒl'kænɪk]",
    D: "adj.火山的，火山引起的",
    E: "volcan+ic",
    F: "volcan(o)火山(熟词)+icIC卡(编码)",
    G: "火山的喷发使IC卡熔化了",
    H: "Over 200 people have been killed by volcanic eruptions.",
    I: "火山喷发已导致200多人丧生。"
}, {
    B: "consume",
    C: "[kən'sjuːm]",
    D: "vt.消耗，消费，使…著迷",
    E: "con+sum+e",
    F: "con看(谐音)+sum全部(熟词)+e鹅(编码)",
    G: "看全部的鹅消耗了多少",
    H: "Classically, overweight people underestimate the volume of food that they consume.",
    I: "一般来说，超重的人往往低估自己摄入食物的量。"
}, {
    B: "diagram",
    C: "['daɪəgræm]",
    D: "n.图表，简图，图解",
    E: "dia+gram",
    F: "dia戴尔(谐音)+gram语法(熟词grammar)",
    G: "戴尔电脑能把语法弄成图表",
    H: "Draw a simple diagram of the leaf structure.",
    I: "为树叶的结构画一张简单的图。"
}, {
    B: "inject",
    C: "[ɪn'dʒekt]",
    D: "vt.注射，注入",
    E: "in+jec+t",
    F: "in里面(熟词)+jec杰克(谐音)+t特(编码)",
    G: "房里的杰克被特务注射了毒药",
    H: "His son was injected with strong drugs.",
    I: "他的儿子被注射了强效的药。"
}, {
    B: "lava",
    C: "['lɑ:və]",
    D: "n.熔岩，岩浆，火山岩",
    E: "la+va",
    F: "la拉(拼音)+va我(谐音)",
    G: "他拉着我躲过了火山熔岩",
    H: "A volcano spouts flame and lava.",
    I: "火山喷出火焰和岩浆。"
}, {
    B: "tendency",
    C: "['tendənsɪ]",
    D: "n.趋向，趋势，倾向",
    E: "tend+en+cy",
    F: "tend趋向(熟词)+en恩(拼音)+cy创业(拼音)",
    G: "很多人趋向与恩熙合伙创业",
    H: "For your information, the tendency of this market is still uncertain.",
    I: "对于你的数据，这一个市场的趋向仍然不确定。"
}, {
    B: "endless",
    C: "['endlɪs]",
    D: "adj.连续的，无止境的",
    E: "end+less",
    F: "end结束+less无",
    G: "结束加个否定的后缀就说明不结束连续不断",
    H: "The endless noise is driving me crazy.",
    I: "这种无休止的噪音使我受不了啦。"
}, {
    B: "fragile",
    C: "['frædʒaɪl]",
    D: "adj.脆弱的，脆的，易碎的",
    E: "f+rag+i+le",
    F: "f佛(编码)+rag破布(熟词)+i蜡烛(编码)+le了(拼音)",
    G: "易碎的佛像被破布里的蜡烛点燃了",
    H: "This kind of paper is too fragile.",
    I: "这纸太脆。"
}, {
    B: "possess",
    C: "[pə'zes]",
    D: "vt.拥有，具备",
    E: "po+ss+e+ss",
    F: "po婆(拼音)+ss两个美女(编码)+e鹅(编码)+ss两个美女(编码)",
    G: "婆婆拥有两个美女，鹅也拥有两个美女",
    H: "Some animals possess the characteristic of man.",
    I: "有些动物具有人类的特征。"
}, {
    B: "tend",
    C: "[tend]",
    D: "vi.趋向，倾向；vt.照料，照管",
    E: "ten+d",
    F: "ten十(熟词)+d狗(编码)",
    G: "照顾十只狗是一种趋势",
    H: "Artistic and intellectual people tend towards left-wing views.",
    I: "搞艺术的人和知识分子容易持“左倾”观点。"
}, {
    B: "transform",
    C: "[træns'fɔ:m]",
    D: "vt.改变，转换，改造",
    E: "tran+s+form",
    F: "tran突然(拼音)+s蛇(编码)+form形状(熟词)",
    G: "突然蛇的形状改变了",
    H: "Let us transform this nation.",
    I: "让我们转变这个国家。"
},
// 2
{
    B: "grey",
    C: "[greɪ]",
    D: "adj.灰色的，灰白的",
    E: "gr+ey",
    F: "gr工人+ey鳄鱼",
    G: "工人吃了鳄鱼变灰色",
    H: "He was a tall, thin man with grey hair.",
    I: "他是个瘦高个，头发灰白。"
}, {
    B: "opposite",
    C: "['ɒpəzɪt]",
    D: "adj.对面的，相对的，对立的",
    E: "oppo+sit+e",
    F: "oppooppo手机(编码)+sit坐(熟词)+e鹅(编码)",
    G: "对面的oppo手机上坐了一只鹅",
    H: "We have the opposite opinions.",
    I: "我们持相反的意见。"
}, {
    B: "sharp",
    C: "[ʃɑ:p]",
    D: "adj.锐利的，尖利的",
    E: "sha+rp",
    F: "sha沙+rp肉片",
    G: "拿着锐利的刀在沙滩上切肉片",
    H: "He bought a sharp knife yesterday.",
    I: "昨天他买了把锐利的刀。"
}, {
    B: "noisy",
    C: "['nɒɪzɪ]",
    D: "adj.吵闹的，嘈杂的",
    E: "no+is+y",
    F: "no不(熟词)+is是(熟词)+y弹弓(编码)",
    G: "吵闹的不是玩弹弓的孩子",
    H: "This room is too noisy.",
    I: "这屋里太闹。"
}, {
    B: "tortoise",
    C: "['tɔ:təs]",
    D: "n.龟，陆龟",
    E: "tor+to+is+e",
    F: "tor拖(谐音)+to到(熟词)+is是(熟词)+e鹅(编码)",
    G: "被拖到乌龟面前的是鹅",
    H: "A tortoise has a shell on his back.",
    I: "乌龟背上有硬壳。"
}, {
    B: "aquarium",
    C: "[ə'kweərɪəm]",
    D: "n.水族馆，水族箱",
    E: "a+qua+riu+m",
    F: "a一(熟词)+qua犬(拼音)+riu蕊儿(谐音)+m山(编码)",
    G: "水族馆里一只柴犬吓得蕊儿跑进山里",
    H: "The aquarium has many tanks of fish.",
    I: "那家水族馆有许多装在水箱中的鱼类。"
}, {
    B: "battery",
    C: "['bætrɪ]",
    D: "n.[电]电池，蓄电池",
    E: "bat+te+ry",
    F: "bat蝙蝠(熟词)+te特(拼音)+ry人妖(拼音)",
    G: "蝙蝠特工偷了人妖的电池",
    H: "The battery is flat.",
    I: "电池没电了。"
}, {
    B: "cage",
    C: "[keɪdʒ]",
    D: "n.鸟笼，兽槛",
    E: "c+age",
    F: "c看见(编码see)+age年龄(熟词)",
    G: "看见被关在鸟笼里的人年龄很大",
    H: "The canary has escaped from the cage.",
    I: "那只金丝雀已从笼子里跑掉了。"
}, {
    B: "community",
    C: "[kə'mju:nətɪ]",
    D: "n.社区",
    E: "co+mm+unity",
    F: "co可乐(熟词coke)+mm美眉(拼音)+unity团结(熟词)",
    G: "喝着可乐的美眉团结起来形成社区",
    H: "People are kind in our community.",
    I: "我们社区的人很友好。"
}, {
    B: "exit",
    C: "['eksɪt]",
    D: "n.出口，",
    E: "ex+it",
    F: "ex儿媳(拼音)+it它(熟词)",
    G: "儿媳带着它从出口",
    H: "There's a fire exit by the downstairs ladies room.",
    I: "楼下女洗手间旁边有个消防出口。"
}, {
    B: "requirement",
    C: "[rɪˈkwaɪəmənt]",
    D: "n.需要，要求",
    E: "require+ment",
    F: "require需要(熟词)+ment门徒(拼音)",
    G: "这里需要门徒的帮助",
    H: "I have no special requirement.",
    I: "我没有特殊的要求。"
}, {
    B: "talent",
    C: "['tælənt]",
    D: "n.天才，才能，天资",
    E: "ta+lent",
    F: "ta他(拼音)+lent借给(熟词)",
    G: "他借给天才很多钱",
    H: "He never prostituted his great acting talent by appearing in television advertisement.",
    I: "他决不把他杰出的表演才能滥用在做电视广告上。"
}, {
    B: "videophone",
    C: "['vɪdɪəʊfəʊn]",
    D: "n.可视电话",
    E: "video+phone",
    F: "video录像+phone电话",
    G: "可以看录像的电话就是可视电话",
    H: "In the future, shopping can be done by videophone.",
    I: "在将来,购买东西能在可视电话中进行。"
}, {
    B: "Shark",
    C: "[ʃɑ:k]",
    D: "n.鲨鱼",
    E: "shar+k",
    F: "shar杀人+k狂",
    G: "鲨鱼是个杀人狂",
    H: "The shark dived down and swam under the boat.",
    I: "鲨鱼急速潜入水中，在船下游动。"
}, {
    B: "Turtle",
    C: "['tɜ:tl]",
    D: "n.海龟，乌龟",
    E: "tur+tle",
    F: "tur土人+tle逃了",
    G: "海龟让土人逃了",
    H: "The turtle doesn't run so quickly as the hare.",
    I: "乌龟没有兔子跑得那么快。"
}, {
    B: "outgoing",
    C: "['aʊtgəʊɪŋ]",
    D: "adj.外向的，友好的，外出的",
    E: "out+go+ing",
    F: "out出去(熟词)+go走(熟词)+ing鹰(谐音)",
    G: "朝外面走去的老鹰很外向",
    H: "She's very outgoing.",
    I: "她很外向。"
}, {
    B: "comfort",
    C: "['kʌmfət]",
    D: "n.安慰，舒适；vt.安慰",
    E: "com+fo+rt",
    F: "com公司(编码)+fo佛(拼音)+rt软糖(拼音)",
    G: "公司里的佛发软糖给人安慰",
    H: "It's a comfort talking to you.",
    I: "跟你聊一聊我好受多了。"
}, {
    B: "desire",
    C: "[dɪzaɪ[]",
    D: "vt.渴望，要求；n.愿望",
    E: "de+sir+e",
    F: "de德(拼音)+sir先生(熟词)+e鹅(拼音)",
    G: "德国先生渴望吃鹅肉",
    H: "Most children have a great desire for knowledge.",
    I: "多数孩子有很强的求知欲。"
}, {
    B: "seed",
    C: "[si:d]",
    D: "vt.播种；n.种子",
    E: "see+d",
    F: "see看(熟词)+d弟(编码)",
    G: "看到弟弟在播种",
    H: "Men mowed the wide lawns and seeded them.",
    I: "人们割了大片草地的草，然后在上面播种。"
}, {
    B: "seal",
    C: "[si:l]",
    D: "n.海豹，密封，印章；vt.密封，盖章",
    E: "sea+l",
    F: "sea海(熟词)+l里(拼音)",
    G: "海里有一只海豹",
    H: "Soldiers there are going to seal the airport off.",
    I: "那里的士兵将封锁机场。"
}, {
    B: "narrow",
    C: "['nærəʊ]",
    D: "adj.狭窄的",
    E: "na+r+row",
    F: "na那(拼音)+r草(编码)+row排(熟词)",
    G: "那边狭窄的地方小草长成了一排",
    H: "The little village has very narrow streets.",
    I: "小村子里的街道很窄。"
}, {
    B: "receiver",
    C: "[rɪ'si:və(r)]",
    D: "n.接受者",
    E: "rece+ive+r",
    F: "rece热厕(拼音)+ive衣服(谐音)+r草(编码)",
    G: "接受者在很热的厕所里脱衣服吃草",
    H: "Men measure a gift by its value to the receiver.",
    I: "人们衡量一件礼物的价值是以对接受者的用处为标准。"
}, {
    B: "operate",
    C: "['ɒpəreɪt]",
    D: "vt.操作",
    E: "op+er+ate",
    F: "op藕片(拼音)+er儿(拼音)+ate吃(熟词)",
    G: "拿藕片给儿子吃他才肯操作机器",
    H: "Can you operate the machine?",
    I: "你能操作这台机器吗？"
}, {
    B: "part-time",
    C: "[pɑ:ttaɪm]",
    D: "adj.兼职的",
    E: "part+time",
    F: "part部分+time时间",
    G: "我们可以用少部分的时间去兼职",
    H: "He did part-time work as an usher in a theatre.",
    I: "他在一家戏院兼职当引座员。"
}, {
    B: "disabled",
    C: "[dɪs'eɪbld]",
    D: "adj.有残疾的，丧失能力的",
    E: "dis+able+d",
    F: "dis的士(拼音)+able能够(熟词)+d弟(编码)",
    G: "的士能够为有残疾的弟弟提供方便",
    H: "We shouldn't make fun of the disabled.",
    I: "我们不应该捉弄残疾人。"
}, {
    B: "dive",
    C: "[daɪv]",
    D: "vi.潜水",
    E: "di+ve",
    F: "di弟(拼音)+ve维E(编码)",
    G: "弟弟吃完维E去跳水",
    H: "He tried to escape by diving into a river.",
    I: "他企图跳入河中逃跑。"
}, {
    B: "scare",
    C: "[skeə(r)]",
    D: "vt.使害怕，使恐惧",
    E: "sc+are",
    F: "sc四川(拼音)+are是(熟词)",
    G: "四川地震是使人",
    H: "I feel scared.",
    I: "我感到很害怕。"
}, {
    B: "click",
    C: "[klɪk]",
    D: "vt.使发出咔哒声",
    E: "clock",
    F: "clock钟",
    G: "时钟发出咔哒声",
    H: "The cameras clicked away.",
    I: "照相机咔嚓咔嚓地不停拍照。"
}, {
    B: "net",
    C: "[net]",
    D: "n.网",
    E: "n+et",
    F: "n门(编码)+et外星人(熟词)",
    G: "门口的网上有个外星人",
    H: "My mother bought a lot of net curtains.",
    I: "我妈妈买了很多网眼帘布。"
}, {
    B: "bubble",
    C: "['bʌbl]",
    D: "n.汽泡，泡",
    E: "bu+bbl+e",
    F: "bu不(拼音)+bbl661(象形)+e鹅(编码)",
    G: "不是让661只鹅吹出汽泡",
    H: "Some bubbles formed on the surface.",
    I: "表面上形成一些泡沫。"
}, {
    B: "state",
    C: "[steɪt]",
    D: "n.国家，州",
    E: "st+ate",
    F: "st石头(拼音)+ate吃(熟词)",
    G: "整个国家的石头都被吃完了",
    H: "She teaches in a state university.",
    I: "她在一所州立大学任教。"
}, {
    B: "relationship",
    C: "[rɪ'leɪʃnʃɪp]",
    D: "n.关系，联系",
    E: "re+lation+ship",
    F: "re热(拼音)+lation雷神(谐音)+ship船(熟词)",
    G: "大热天雷神坐船拉关系",
    H: "A good relationship is built on trust.",
    I: "好的关系是建立在信任的基础上的。"
}, {
    B: "graduation",
    C: "[ˌgrædʒuˈeɪʃn]",
    D: "n.毕业典礼",
    E: "gr+adu+ation",
    F: "gr工人(拼音)+adu阿杜(拼音)+ation阿婶(谐音)",
    G: "工人阿杜参加阿婶的毕业典礼",
    H: "At my brother's high school graduation the students recited a poem.",
    I: "在我弟弟的高中毕业典礼上，学生们朗诵了一首诗。"
}, {
    B: "congratulation",
    C: "[kənˌgrætʃʊˈleɪʃn]",
    D: "n.祝贺",
    E: "con+gr+atu+lation",
    F: "con啃(谐音)+gr工人(拼音)+atu爱徒(拼音)+lation雷神(谐音)",
    G: "祝贺啃老工人的爱徒雷神进步了",
    H: "Congratulations on your exam results!",
    I: "祝贺你考出了好成绩！"
}, {
    B: "lecture",
    C: "['lektʃə(r)]",
    D: "n.演讲，讲座",
    E: "le+c+ture",
    F: "le乐(拼音)+c耳朵(编码)+ture扯(谐音)",
    G: "演讲中余文乐的耳朵被扯了",
    H: "He larded his lecture with many jokes.",
    I: "他在讲座中加进了许多笑话。"
}, {
    B: "idiom",
    C: "['ɪdɪəm]",
    D: "n.习语，成语",
    E: "i+di+om",
    F: "i我(熟词I)+di弟(拼音)+om欧美(拼音)",
    G: "我弟弟喜欢用欧美的习语",
    H: "Proverbs and idioms may become worn with overuse.",
    I: "谚语和习语会由于使用过多而变得俗套。"
}, {
    B: "eyesight",
    C: "['aɪsaɪt]",
    D: "n.眼力，视觉",
    E: "eye+sight",
    F: "eye眼睛+sight景象",
    G: "眼力好，眼睛才能看到远处的景象",
    H: "A person with good eyesight can distinguish distant object.",
    I: "视力好的人能看清远处的东西。"
}, {
    B: "fellow",
    C: "['feləʊ]",
    D: "n.男子，同伴",
    E: "yellow",
    F: "yellow黄色的",
    G: "黄色皮肤的男子是谁",
    H: "I can't tolerate tha rude fellow.",
    I: "我不能容忍那个粗鲁的家伙。"
}, {
    B: "conduct",
    C: "['kɒndʌkt]",
    D: "n.行为，举止",
    E: "con+du+ct",
    F: "con啃(谐音)+du赌(拼音)+ct餐厅(拼音)",
    G: "啃鸡翅的赌徒在餐厅的行为很怪异",
    H: "I blushed for your degraded conduct.",
    I: "我为你的卑劣行为感到脸红。"
}, {
    B: "agent",
    C: "['eɪdʒənt]",
    D: "n.经纪人，代理人",
    E: "age+nt",
    F: "age年龄(熟词)+nt难题(拼音)",
    G: "经纪人年龄大善于解决难题",
    H: "Our agent in New York deals with all US sales.",
    I: "我们在纽约的代理商经办在整个美国的销售。"
}, {
    B: "weekly",
    C: "['wɪ:klɪ]",
    D: "adj./adv.每周（的）",
    E: "week+ly",
    F: "week周(熟词)+ly梨(谐音)",
    G: "每周都要吃一个梨",
    H: "He writes a weekly letter to his parents.",
    I: "他每周给父母写一封信。"
}, {
    B: "fiction",
    C: "['fɪkʃ(ə)n]",
    D: "n.小说，虚构",
    E: "f+ic+tion",
    F: "f佛(编码)+icIC卡(编码)+tion神(谐音)",
    G: "小说里的佛用IC卡灭了神",
    H: "The line between fact and fiction is becoming blurred.",
    I: "事实和虚构之间的界限正变得模糊起来。"
}, {
    B: "haircut",
    C: "['heəkʌt]",
    D: "n.发型，理发",
    E: "hair+cut",
    F: "hair头发+cut剪",
    G: "把头发剪出个新发型",
    H: "I've had a really awful haircut.",
    I: "我的发型真难看。"
}, {
    B: "tutor",
    C: "['tju:tə]",
    D: "n.导师，助教",
    E: "tut+or",
    F: "tut秃头+or偶人",
    G: "导师是秃头偶人",
    H: "Most parents have no time to tutor their children.",
    I: "大部分家长没有时间辅导孩子。"
}, {
    B: "annoyed",
    C: "[ə'nɔɪd]",
    D: "adj.颇为生气的，恼怒的",
    E: "annoy+ed",
    F: "annoy惹怒(熟词)+ed二弟(拼音)",
    G: "颇为生气的他惹怒了二弟",
    H: "I was annoyed that they hadn't turned up.",
    I: "我恼怒的是他们没有露面。"
}, {
    B: "parrot",
    C: "['pærət]",
    D: "n.鹦鹉",
    E: "carrot",
    F: "carrot胡萝卜",
    G: "吃完胡萝卜的鹦鹉放了屁(p)",
    H: "The parrot flew away.",
    I: "鹦鹉飞走了。"
}, {
    B: "awful",
    C: "['ɔːfʊl]",
    D: "adj.极坏的，可怕的，使人敬畏的",
    E: "aw+ful",
    F: "aw阿伟+ful服了",
    G: "阿伟这么坏我真是服了",
    H: "It's awful, isn't it?",
    I: "糟糕透了，不是吗？"
}, {
    B: "textbook",
    C: "['teksbʊk]",
    D: "n.课本，教科书",
    E: "text+book",
    F: "text文本+book书",
    G: "课本是文本类的书",
    H: "I gave the textbook back to him.",
    I: "我将手机还给他了。"
}, {
    B: "reflect",
    C: "[rɪ'flekt]",
    D: "vt./vi.反映，反射，表达",
    E: "re+fle+ct",
    F: "re再(词缀)+fle服了(拼音)+ctCT(编码)",
    G: "再服了一剂药才能做CT反映了什么？",
    H: "People who lead busy lives have no time to stop and reflect.",
    I: "忙忙碌碌的人们无暇停下来反思。"
}, {
    B: "congratulate",
    C: "[kən'grætʃuleɪt]",
    D: "vt.祝贺，庆贺",
    E: "cong+rat+u+late",
    F: "cong聪(拼音)+rat老鼠(熟词)+u你(编码you)+late迟(熟词)",
    G: "聪明的老鼠向你发来了迟来的祝贺",
    H: "She congratulated him with a hug.",
    I: "她拥抱着祝贺他。"
}, {
    B: "staff",
    C: "[stɑ:f]",
    D: "n.职员，参谋",
    E: "st+a+ff",
    F: "st石头(拼音)+a苹果(编码)+ff两把斧头(编码)",
    G: "职员能把石头和苹果用两把斧头劈开",
    H: "He bucked at the suggestion to reduce his staff.",
    I: "他反对减少他的人员的建议。"
}, {
    B: "politics",
    C: "['pɒlətɪks]",
    D: "n.政治（学）",
    E: "poli+tic+s",
    F: "poli魄力(拼音)+tic体操(拼音)+s美女(编码)",
    G: "有魄力的体操美女政治上占优势",
    H: "He doesn't like office politics.",
    I: "他不喜欢办公室政治。"
}, {
    B: "fingernail",
    C: "['fɪŋgəneɪl]",
    D: "n.手指甲",
    E: "finger+nail",
    F: "finger手指+nail钉子",
    G: "手指上的钉子穿透了手指甲",
    H: "She had long fingernails.",
    I: "她留着长长的指甲。"
}, {
    B: "teamwork",
    C: "['ti:mwɜ:k]",
    D: "n.配合，协作",
    E: "team+work",
    F: "team团队+work工作",
    G: "互相配合才能做好团队工作",
    H: "Teamwork is very important.",
    I: "团队协作非常重要。"
}, {
    B: "suitable",
    C: "['su:təbl]",
    D: "adj.适合的，适宜的",
    E: "suit+able",
    F: "suit套装+able能",
    G: "适合的套装能提升气质",
    H: "The desk is suitable for him.",
    I: "这张桌子很适合他。"
}, {
    B: "holy",
    C: "['həʊlɪ]",
    D: "adj.神圣的，圣洁的，至善的；n.神圣的东西",
    E: "hold",
    F: "hold拿着",
    G: "拿着神圣的东西",
    H: "Church is a holy place.",
    I: "教堂是一个神圣的地方。"
}, {
    B: "roof",
    C: "[ru:f]",
    D: "n.屋顶，车顶",
    E: "r+oo+f",
    F: "r草+oo望远镜+f斧头",
    G: "在草地上拿望远镜看到斧头在屋顶上",
    H: "Tim climbed on to the roof.",
    I: "蒂姆爬到屋顶上。"
}, {
    B: "lap",
    C: "[læp]",
    D: "n.大腿的上方，跑道的一圈，重叠部分，（人坐着时）",
    E: "l+ap",
    F: "l棍子(编码)+ap阿婆(拼音)",
    G: "拿着棍子的阿婆把手放在大腿的上方",
    H: "You must sit on my lap.",
    I: "你必须坐在我的大腿上。"
}, {
    B: "neat",
    C: "[ni:t]",
    D: "adj.整齐的，<口>好的，匀称的",
    E: "n+eat",
    F: "n门(编码)+eat吃(熟词)",
    G: "穿着整齐的人在门外吃肉",
    H: "The room is neat.",
    I: "这个房间是整齐的。"
}, {
    B: "seaside",
    C: "['si:saɪd]",
    D: "n./adj.海边（的），海滨（的）",
    E: "sea+side",
    F: "sea海+side边",
    G: "他喜欢在海边玩耍",
    H: "I went to spend a few days at the seaside.",
    I: "我去海边玩了几天。"
}, {
    B: "minibus",
    C: "['mɪnɪbʌs]",
    D: "n.小的公共汽车，面包车；vi.乘中客车",
    E: "mini+bus",
    F: "mini小的+bus公共汽车",
    G: "面包车就是小的公共汽车",
    H: "The children go to school in a minibus.",
    I: "孩子们乘小型公共汽车上学。"
}, {
    B: "digital",
    C: "['dɪdʒɪtl]",
    D: "adj.数码的，数字的",
    E: "dig+it+al",
    F: "dig挖(熟词)+it它(熟词)+al阿狸(拼音)",
    G: "猫咪挖出它的数码相机给阿狸",
    H: "My mother bought me a digital watch.",
    I: "我妈妈给我买了一块电子手表。"
}, {
    B: "telescope",
    C: "['telɪskəʊp]",
    D: "n.望远镜",
    E: "te+le+scope",
    F: "te特(拼音)+le乐(拼音)+scope范围(熟词)",
    G: "特务乐得把全国范围的望远镜买走了",
    H: "Then I'll have to get a telescope.",
    I: "那我要去买望远镜了。"
}, {
    B: "hearing",
    C: "['hɪərɪŋ]",
    D: "n.听力，听觉",
    E: "hear+ing",
    F: "hear听见(熟词)+ing鹰(谐音)",
    G: "能听见鹰的声音代表听力好",
    H: "Her hearing is poor.",
    I: "她的听觉不灵。"
}, {
    B: "interpreter",
    C: "[ɪn'tə:prɪtə]",
    D: "n.作口译的人",
    E: "inter+pre+ter",
    F: "inter英特(谐音)+pre仆人(拼音)+ter天鹅肉(拼音)",
    G: "作口译的人请英特和仆人吃天鹅肉",
    H: "She acted as our interpreter.",
    I: "她给我们当翻译。"
}, {
    B: "imagination",
    C: "[ɪˌmædʒɪ'neɪʃn]",
    D: "n.想像（力），创造力，幻想物",
    E: "imagin+ation",
    F: "imagin(e)想象(熟词)+ation爱神(谐音)",
    G: "无法想象爱神的想象力有多强",
    H: "My son has a rich imagination.",
    I: "我的儿子很有想象力。"
}, {
    B: "grand",
    C: "[grænd]",
    D: "adj.宏伟的，豪华的，极重要的",
    E: "gr+and",
    F: "gr工人(拼音)+and和(熟词)",
    G: "这栋宏伟的大楼是工人和我建造的",
    H: "The grand building in the center of the town is my school.",
    I: "城中心宏伟的建筑是我的学校。"
}, {
    B: "motherland",
    C: "['mʌðəlænd]",
    D: "n.祖国",
    E: "mother+land",
    F: "mother母亲+land土地",
    G: "像母亲一样生养我的土地就是祖国",
    H: "We are proud of our motherland.",
    I: "我们为祖国感到自豪。"
}, {
    B: "empire",
    C: "['empaɪə(r)]",
    D: "n.帝国",
    E: "em+pi+re",
    F: "em恶魔(拼音)+pi派(谐音)+re热(拼音)",
    G: "恶魔派热血青年去灭了帝国",
    H: "He built this empire.",
    I: "他建造了这个帝国。"
}, {
    B: "literature",
    C: "['lɪtrətʃə(r)]",
    D: "n.文学（作品），文献，著作",
    E: "lit+era+ture",
    F: "lit照亮的(熟词light)+era时代(熟词)+ture扯(谐音)",
    G: "被文学照亮的时代最喜欢扯淡",
    H: "He was passionate about all literature.",
    I: "他热爱所有的文学作品。"
}, {
    B: "bark",
    C: "[bɑːk]",
    D: "n.树皮，深青棕色，狗叫声",
    E: "bar+k",
    F: "bar酒吧(熟词)+k机关枪(编码)",
    G: "酒吧里的机关枪是用树皮做的",
    H: "The bark of some trees can be used as medicine.",
    I: "有些树皮可以作药材。"
}, {
    B: "tomb",
    C: "[tu:m]",
    D: "n.坟墓",
    E: "tom+b",
    F: "tom汤姆(熟词Tom)+b蜜蜂(编码bee)",
    G: "汤姆把蜜蜂埋进坟墓",
    H: "Wreaths were laid at the martyr's tomb.",
    I: "烈士墓前安放着花圈。"
}, {
    B: "comb",
    C: "[kəʊm]",
    D: "vt.梳头发；n.梳子，蜂巢",
    E: "com+b",
    F: "com公司(编码)+b笔(编码)",
    G: "他在公司拿笔梳头发",
    H: "Your hair needs a good comb.",
    I: "你的头发得好好梳一梳。"
}, {
    B: "otherwise",
    C: "['ʌðəwaɪz]",
    D: "conj.否则，不然；adv.用别的方法",
    E: "other+wise",
    F: "other其他的+wise聪明的",
    G: "除非其他的人都很聪明否则就会失败",
    H: "I'd better write it down, otherwise I'll forget it.",
    I: "我最好把它写下来，否则我会忘了的。"
}, {
    B: "profit",
    C: "['prɒfɪt]",
    D: "n.利润，利益",
    E: "pro+fit",
    F: "pro飘柔(拼音)+fit合适(熟词)",
    G: "现在卖飘柔最合适有利润",
    H: "The company made a healthy profit on the deal.",
    I: "公司在这笔生意中获利颇丰。"
}, {
    B: "rugby",
    C: "['rʌgbɪ]",
    D: "n.（英式）橄榄球",
    E: "Ru+g+by",
    F: "Ru如(拼音)+g哥(编码)+by旁边(熟词)",
    G: "打橄榄球的如花把哥哥打飞到旁边",
    H: "When I used to play rugby, I would get nailed almost every game.",
    I: "我以前在玩橄榄球的时候，几乎每一次都会受伤。"
}, {
    B: "shore",
    C: "[ʃɔ:]",
    D: "n.海滨，岸",
    E: "short",
    F: "short短的",
    G: "鹅(e)穿短裤去海滨玩",
    H: "Our boat was headed for shore.",
    I: "我们的船朝岸边驶去。"
}, {
    B: "concept",
    C: "['kɒnsept]",
    D: "n.观念，概念",
    E: "con+ce+pt",
    F: "con看(谐音)+ce厕(拼音)+pt葡萄(拼音)",
    G: "看厕所长出葡萄是一个新观念",
    H: "But it illustrates the concept well.",
    I: "但它很好地说明了概念。"
}, {
    B: "encouragement",
    C: "[ɪn'kʌrɪdʒmənt]",
    D: "n.鼓励，奖励",
    E: "encourage+ment",
    F: "encourage鼓励(熟词)+ment门徒(拼音)",
    G: "受到鼓励的门徒很开心",
    H: "Thanks for your advice and encouragement.",
    I: "谢谢你的建议和鼓励。"
}, {
    B: "academic",
    C: "[ˌækə'demɪk]",
    D: "adj.学术的，学院的；n.高等院校教师，高校科研人员",
    E: "ac+ade+mic",
    F: "acAC米兰(编码)+ade阿德(拼音)+mic麦克风(熟词)",
    G: "AC米兰的阿德拿着麦克风做学术讲座",
    H: "His supervisor took pride in him for his academic attainments.",
    I: "他的导师为他在学术上的造诣而为他感到骄傲。"
}, {
    B: "arrangement",
    C: "[ə'reɪndʒmənt]",
    D: "n.安排，排列",
    E: "arrange+ment",
    F: "arrange安排(熟词)+ment门徒(拼音)",
    G: "他在安排门徒的工作",
    H: "I agree to this arrangement.",
    I: "我同意这个安排。"
}, {
    B: "aware",
    C: "[əˈweə(r)]",
    D: "adj.意识到的，知道的",
    E: "a+ware",
    F: "a一个+ware器皿",
    G: "迟早你会意识到拥有一个器皿的重要性",
    H: "He was acutely aware of the odour of cooking oil.",
    I: "他闻到一股浓浓的油烟味。"
}, {
    B: "giant",
    C: "['dʒaɪənt]",
    D: "adj.巨大的；n.巨人，伟人",
    E: "g+i+ant",
    F: "g鸽(编码)+i蜡烛(编码)+ant蚂蚁(熟词)",
    G: "巨大的鸽子拿蜡烛烧蚂蚁",
    H: "Newton was an intellectual giant.",
    I: "牛顿是一个智力巨人。"
}, {
    B: "donate",
    C: "[dəʊ'neɪt]",
    D: "vt.捐赠",
    E: "do+nate",
    F: "do都+nate那特",
    G: "书本都是那个特务捐赠的",
    H: "Others donated secondhand clothes.",
    I: "其他人捐赠了一些旧衣服。"
}, {
    B: "leap",
    C: "[li:p]",
    D: "vi.跳跃",
    E: "leaf",
    F: "leaf叶",
    G: "叶子穿着p(皮鞋)在跳跃",
    H: "A dolphin leapt out of the water.",
    I: "海豚跃出水面。"
}, {
    B: "firm",
    C: "[fɜ:m]",
    D: "n.公司；adj.结实的，坚固的，坚定的",
    E: "film",
    F: "film电影",
    G: "全公司的人都在草地上(r)看电影",
    H: "The firm's employees were expecting large bonuses.",
    I: "这家公司的雇员期待着发放大笔奖金。"
}, {
    B: "harpoon",
    C: "[hɑ:'pu:n]",
    D: "n.（捕鲸鱼用的）鱼叉",
    E: "h+ar+poon",
    F: "h椅子(编码)+ar矮人(拼音)+(s)poon勺子(熟词)",
    G: "椅子上的矮人把勺子变成鱼叉",
    H: "The harpoon drove deep into the body of the whale.",
    I: "鱼叉深深地扎进鲸鱼体内。"
}, {
    B: "eel",
    C: "[i:l]",
    D: "n.鳗，鳝",
    E: "ee+l",
    F: "ee两只鹅(编码)+l1(象形)",
    G: "两只鹅抢1条鳗鱼",
    H: "She bought some eels for dinner.",
    I: "她买回一些鳗鱼做晚餐。"
}, {
    B: "tasty",
    C: "['teɪstɪ]",
    D: "adj.好吃的，可口的",
    E: "tast+y",
    F: "tast(e)品尝(熟词)+y树杈(编码)",
    G: "品尝后觉得树杈很好吃",
    H: "I thought the food was very tasty.",
    I: "我觉得这食物很可口。"
}, {
    B: "awesome",
    C: "['ɔ:səm]",
    D: "adj.令人畏惧的，使人敬畏的",
    E: "a+we+some",
    F: "a苹果(编码)+we我们(熟词)+some一些(熟词)",
    G: "毒苹果令我们中的一些人",
    H: "An awesome task lies ahead of them.",
    I: "摆在他们面前的是一项令人望而生畏的艰巨任务。"
}, {
    B: "geographical",
    C: "[dʒɪə'græfɪkl]",
    D: "adj.地理（学）的",
    E: "ge+o+graph+ical",
    F: "ge哥(拼音)+o蛋(编码)+graph图表(熟词)+ical一口(谐音)",
    G: "学地理学的哥哥吃鸡蛋时在图表上吐了一口",
    H: "The current survey will have a wider geographical spread.",
    I: "当前的调查将在更广泛的地域范围內进行。"
}, {
    B: "inn",
    C: "[ɪn]",
    D: "n.客栈",
    E: "in+n",
    F: "in里面(熟词)+n门(编码)",
    G: "客栈里面的门坏了",
    H: "He slept the night in a roadside inn.",
    I: "他在一家路边客栈过的夜。"
}, {
    B: "envy",
    C: "['envɪ]",
    D: "n.羡慕，妒忌",
    E: "e+nv+y",
    F: "e鹅(编码)+nv女(拼音)+y弹弓(编码)",
    G: "鹅羡慕女人可以玩弹弓",
    H: "I envy her ability to talk to people she's never met before.",
    I: "她与人初次见面就能侃侃而谈，这真让我羡慕。"
}, {
    B: "aside",
    C: "[ə'saɪd]",
    D: "adv.向一边，在一边",
    E: "a+side",
    F: "a苹果(编码)+side边(熟词)",
    G: "苹果被旁边的人挪向一边",
    H: "He pulled the curtain aside.",
    I: "他把窗帘拉开。"
}, {
    B: "alphabetical",
    C: "[ˌælfə'betɪkl]",
    D: "adj.字母（表）的，按字母（表）顺序的",
    E: "alphabet+ic+al",
    F: "alphabet字母表(熟词)+icIC卡(编码)+al阿狸(拼音)",
    G: "写满字母表的IC卡被阿狸偷了",
    H: "The names on the list are in alphabetical order.",
    I: "名单上的名字是按字母顺序排列的。"
}, {
    B: "navy",
    C: "['neɪvɪ]",
    D: "n.海军，海军部队",
    E: "na+v+y",
    F: "na拿(拼音)+v维生素(编码)+y弹弓(编码)",
    G: "海军拿维生素打弹弓",
    H: "My brother is an officer in the Navy.",
    I: "我兄弟是海军军官。"
}, {
    B: "theoretical",
    C: "[ˌθɪə'retɪkl]",
    D: "adj.理论（上）的，假设的",
    E: "theor+et+ical",
    F: "theor(y)理论(熟词)+et外星人(编码)+ical一口(谐音)",
    G: "理论上外星人可以一口吃掉我",
    H: "It's a theoretical matter as well as a practical one.",
    I: "这不仅是个实践问题，也是个理论问题。"
}, {
    B: "witness",
    C: "['wɪtnəs]",
    D: "n.目击者，证人，证据；vt.目击，证明，为…作证",
    E: "w+it+ne+ss",
    F: "w皇冠(编码)+itIT(编码)+ne哪(拼音)+ss俩美女(编码)",
    G: "戴皇冠IT男是哪吒撞伤俩美女的目击者",
    H: "Anyone who witnessed the attack should call the police.",
    I: "目睹这次袭击的人都应向警方报告。"
}, {
    B: "oar",
    C: "[ɔ:]",
    D: "n.桨，橹",
    E: "o+ar",
    F: "o洞(编码)+ar矮人(拼音)",
    G: "洞里的矮人在划桨",
    H: "She dipped her oars into the water and pulled.",
    I: "她把桨放到水中划起来。"
}, {
    B: "vivid",
    C: "['vɪvɪd]",
    D: "adj.逼真的，生动的，清晰的",
    E: "vivi+d",
    F: "vivi薇薇(谐音)+d狗(编码dog)",
    G: "薇薇画的狗很逼真",
    H: "He sketched the situation in a few vivid words.",
    I: "他用几句生动的语言简述了局势。"
}, {
    B: "rectangular",
    C: "[rek'tæŋgjʊlə]",
    D: "adj.长方形的，矩形的",
    E: "rectang+u+lar",
    F: "rectang(le)长方形(熟词)+u桶(编码)+lar腊肉(拼音)",
    G: "长方形的桶里有一块腊肉",
    H: "He put a rectangular box on the table.",
    I: "他把一个长方形的盒子放在桌子上。"
}, {
    B: "jar",
    C: "[dʒɑ:]",
    D: "n.罐，广口瓶",
    E: "j+ar",
    F: "j钩子(编码)+ar矮人(拼音)",
    G: "用钩子的矮人勾到了罐子",
    H: "The jar contained candies.",
    I: "这罐子里装有糖。"
}, {
    B: "sniff",
    C: "[snɪf]",
    D: "vt./vi.嗅，闻，用鼻子吸",
    E: "s+ni+ff",
    F: "s蛇(编码)+ni你(拼音)+ff两把斧头(编码)",
    G: "嗅到蛇的味道后你用两把斧头砍死它",
    H: "Dogs love sniffing each other.",
    I: "狗喜欢相互嗅闻。"
}, {
    B: "catalogue",
    C: "['kætəlɒg]",
    D: "n.目录",
    E: "cat+a+lo+gue",
    F: "cat猫(熟词)+a苹果(编码)+lo10(象形)+gue孤儿(拼音)",
    G: "目录上写着猫、苹果和10个孤儿",
    H: "The catalogue is under revision.",
    I: "目录册正在修订之中。"
}, {
    B: "sew",
    C: "[səʊ]",
    D: "vi.（用针线）缝；vt.缝制，缝合",
    E: "se+w",
    F: "se色(拼音)+w皇冠(编码)",
    G: "色狼把珍珠缝在皇冠上",
    H: "She has been sewing all morning.",
    I: "她早上一直在做针线活。"
}, {
    B: "trunk",
    C: "[trʌŋk]",
    D: "n.树干，躯干，大衣箱",
    E: "t+run+k",
    F: "t伞(编码)+run跑(熟词)+k机关枪(编码)",
    G: "打着伞跑去拿机关枪打树干",
    H: "The trunk of this tree is four meters thick.",
    I: "这棵树的树干有四米粗。"
}, {
    B: "Tanzania",
    C: "[ˌtænzə'nɪ:ə]",
    D: "n.坦桑尼亚（东非国家）",
    E: "Tan+zan+i+a",
    F: "Tan摊(拼音)+zan赞(拼音)+i我(熟词I)+a苹果(编码)",
    G: "坦桑尼亚的摊贩称赞我会选苹果",
    H: "The Group of Experts was also able to visit the United Republic of Tanzania .",
    I: "专家组还访问了坦桑尼亚联合共和国。"
}, {
    B: "economic",
    C: "[ˌɪi:kə'nɒmɪk]",
    D: "adj.经济学的，经济的",
    E: "e+co+no+mic",
    F: "e鹅(编码)+co可乐(熟词coke)+no没有(熟词)+mic麦克风(熟词)",
    G: "鹅买可乐就没有钱买麦克风符合经济学原理",
    H: "The pace of economic growth is picking up.",
    I: "经济增长的步伐正在加快。"
}, {
    B: "bump",
    C: "[bʌmp]",
    D: "n.肿块，隆起物，撞击；vi.碰撞，撞击",
    E: "bum+p",
    F: "bum棒(谐音)+p屁(编码)",
    G: "用棒子把我的屁股打出个肿块",
    H: "I  tried to avoid  her, but it was just my luck to bump into her.",
    I: "我不想见她，偏撞上她了。"
}, {
    B: "access",
    C: "['ækses]",
    D: "n.通道，入径；vt.到达，进入",
    E: "ac+ce+ss",
    F: "acAC米兰(编码)+ce厕(拼音)+ss两条蛇(编码)",
    G: "AC米兰球员去厕所时被两条蛇堵住通道",
    H: "Villagers say the fence would restrict public access to the hills.",
    I: "村民们说这个围栏将限制公众进入山区。"
}, {
    B: "approval",
    C: "[ə'pru:vl]",
    D: "n.赞成，认可",
    E: "app+ro+val",
    F: "app手机应用(编码)+ro入(谐音)+val我(谐音)",
    G: "通过手机应用进入需要我赞成",
    H: "Sam always tried hard to win his father's approval.",
    I: "山姆总是尽一切努力赢得父亲的赞许。"
}, {
    B: "sympathy",
    C: "['sɪmpəθɪ]",
    D: "n.同情，同感，慰问",
    E: "s+ym+path+y",
    F: "s美女(编码)+ym姚明(拼音)+path路(熟词)+y树杈(编码)",
    G: "同情美女的姚明在路边帮她捡树杈",
    H: "She expressed her deepest sympathy for him.",
    I: "她向他表达她最深的同情。"
}, {
    B: "favour",
    C: "['feɪvə]",
    D: "n.偏爱，赞同，善行",
    E: "fa+v+our",
    F: "fa发(拼音)+v维生素(编码)+our我们的(熟词)",
    G: "研发维生素是我们的偏好",
    H: "A teacher should not favour any of his pupils.",
    I: "教师不应该偏爱任何一个学生。"
}, {
    B: "scan",
    C: "[skæn]",
    D: "vt.扫描，细看，浏览",
    E: "s+can",
    F: "s蛇(编码)+can能(熟词)",
    G: "蛇能扫描",
    H: "I just had a quick scan through your book again.",
    I: "我只是又快速浏览了一遍你的书。"
}, {
    B: "clerk",
    C: "[klɑ:k]",
    D: "n.售货员，职员，旅馆接待员",
    E: "cl+er+k",
    F: "cl处理(拼音)+er儿(拼音)+k机关枪(编码)",
    G: "售货员处理了儿子的机关枪",
    H: "The clerk checked us in and gave us our key.",
    I: "接待员给我们办理了入住手续，然后给了我们钥匙。"
}, {
    B: "biography",
    C: "[baɪ'ɒgrəfɪ]",
    D: "n.传记",
    E: "bi+o+graphy",
    F: "bi逼(拼音)+o蛋(编码)+graphy写(词缀)",
    G: "逼着鸡蛋写传记",
    H: "This book is a carefully documented biography.",
    I: "这是一本文献佐证翔实可靠的传记。"
}, {
    B: "junior",
    C: "['dʒuːnɪə]",
    D: "adj.年少的，资历较浅的",
    E: "jun+i+or",
    F: "jun菌(拼音)+i骨头(编码)+or偶人(拼音)",
    G: "细菌用骨头把年少的偶人砸死了",
    H: "Tom is my junior.",
    I: "汤姆是我的晚辈。"
}, {
    B: "flee",
    C: "[fli:]",
    D: "vi.逃走",
    E: "fl+ee",
    F: "fl俘虏(拼音)+ee两只鹅(编码)",
    G: "俘虏赶着两只鹅逃走了",
    H: "I would like them to leave right away, but they refuse to flee.",
    I: "我宁愿他们能立即离开，但他们却拒绝逃离。"
}, {
    B: "depth",
    C: "[depθ]",
    D: "n.深度，深处",
    E: "de+p+th",
    F: "de德(拼音)+p皮鞋(编码)+th土豪(拼音)",
    G: "德国的皮鞋被土豪拿来测量深度",
    H: "He was in the depth of despair.",
    I: "他处于绝望的深渊。"
}, {
    B: "steep",
    C: "[stɪ:p]",
    D: "adj.陡峭的，险峻的",
    E: "st+ee+p",
    F: "st石头(拼音)+ee两只鹅(编码)+p皮(编码)",
    G: "陡峭的石头旁两只鹅在吃瓜皮",
    H: "A car is climbing the steep hill slowly.",
    I: "一辆汽车正在陡峭的山坡上缓缓爬行。"
}, {
    B: "fortnight",
    C: "['fɔ:tnaɪt]",
    D: "n.两星期",
    E: "for+t+night",
    F: "for为了(熟词)+t特(编码)+night晚上(熟词)",
    G: "两星期内为了抓特务每晚都不睡",
    H: "He will stay for a fortnight.",
    I: "他将住上两星期。"
}, {
    B: "bucket",
    C: "['bʌkɪt]",
    D: "n.水桶，吊桶，提桶",
    E: "bu+ck+et",
    F: "bu不(拼音)+ck厨师(熟词cook)+et外星人(编码)",
    G: "水桶不是厨师的就是外星人的",
    H: "She poured the bucket of dirty water down the drain.",
    I: "她把那桶脏水倒进下水道。"
}, {
    B: "relevant",
    C: "['relɪv(ə)nt]",
    D: "adj.有关的，切题的",
    E: "rele+v+ant",
    F: "rele热了(拼音)+v维生素(编码)+ant蚂蚁(熟词)",
    G: "热了的维生素与蚂蚁是有关的吗？",
    H: "Consider also whether you have all of the relevant information.",
    I: "还要考虑你是否拥有所有的相关信息。"
}, {
    B: "angle",
    C: "['æŋg(ə)l]",
    D: "n.角，角度",
    E: "an+gl+e",
    F: "an一(熟词)+gl91(象形)+e鹅(编码)",
    G: "一个91度的角是鹅画的",
    H: "The boat is now leaning at a 30 degree angle.",
    I: "这条船现在正以30度角倾斜着。"
}, {
    B: "distribution",
    C: "[dɪstrɪ'bju:ʃ(ə)n]",
    D: "n.分配，分布",
    E: "distribut+i+on",
    F: "distribut(e)分配(熟词)+i蜡烛(编码)+on在...上(熟词)",
    G: "把分配好的蜡烛放在桌上",
    H: "The map shows the distribution of this species across the world.",
    I: "地图上标明了这一物种在全世界的分布情况。"
}, {
    B: "financial",
    C: "[faɪ'nænʃəl]",
    D: "adj.金融的，财政的",
    E: "f+in+an+cial",
    F: "f佛(编码)+in里(熟词)+an一(熟词)+cial守(谐音)",
    G: "佛在金融公司里做一名守卫",
    H: "The strength of our country bulwarked us through the financial crisis.",
    I: "我国的实力使我们得以安然渡过这次金融危机。"
}, {
    B: "queue",
    C: "[kju:]",
    D: "n.队；vi.排队等候",
    E: "que+u+e",
    F: "que瘸(拼音)+u桶(编码)+e鹅(编码)",
    G: "瘸子提着桶里的鹅排队",
    H: "We had to queue for tickets.",
    I: "我们不得不排队买票。"
}, {
    B: "cafeteria",
    C: "[kæfɪ'tɪərɪə]",
    D: "n.自助餐厅",
    E: "cafe+teri+a",
    F: "cafe咖啡馆(熟词)+teri特日(拼音)+a苹果(编码)",
    G: "自助餐厅的咖啡馆在特殊日子只卖苹果",
    H: "Deposit  your  lunch  tray at the cafeteria  door.",
    I: "把你的午餐托盘放在自助餐馆门口。"
}, {
    B: "recommend",
    C: "[ˌrekə'mend]",
    D: "vt.推荐，介绍，劝告",
    E: "re+com+mend",
    F: "re热(拼音)+com计算机(编码)+mend修理(熟词)",
    G: "推荐把发热的计算机送来修理",
    H: "Can you recommend a good hotel?",
    I: "你能推荐一家好的饭店吗？"
}, {
    B: "substitute",
    C: "['sʌbstɪtju:t]",
    D: "vt.用…代替；n.代替人",
    E: "sub+s+titu+te",
    F: "sub苏伯(拼音)+s美女(编码)+titu踢土(拼音)+te特(拼音)",
    G: "苏伯用美女",
    H: "Nothing could substitute for mother's milk.",
    I: "什么也替代不了母乳。"
}, {
    B: "essay",
    C: "['eseɪ]",
    D: "n.散文，随笔",
    E: "e+s+say",
    F: "e鹅(编码)+s蛇(编码)+say说(熟词)",
    G: "鹅和蛇说的话成了散文",
    H: "She cobbled together an essay in half an hour.",
    I: "她用半小时胡乱拼凑了一篇文章。"
}, {
    B: "apology",
    C: "[ə'pɒlədʒɪ]",
    D: "n.道歉，谢罪，辩护",
    E: "apo+log+y",
    F: "apo阿婆(拼音)+log109(象形)+y衣叉(编码)",
    G: "阿婆拿109个衣叉来向他道歉",
    H: "He accepted the apology with great generosity.",
    I: "他宽宏大量地接受了道歉。"
}, {
    B: "site",
    C: "[saɪt]",
    D: "n.场地，地点，场所",
    E: "sit+e",
    F: "sit坐(熟词)+e鹅(编码)",
    G: "场地上坐着一只鹅",
    H: "The site is cleared for development.",
    I: "那块地方已清理出来以备开发。"
}, {
    B: "abundant",
    C: "[ə'bʌndənt]",
    D: "adj.大量的，充足的，丰富的",
    E: "ab+un+dant",
    F: "ab阿伯(拼音)+un联合国(编码)+dant蛋挞(拼音)",
    G: "阿伯在联合国生产了大量的蛋挞",
    H: "Our country has a vast territory and abundant resources.",
    I: "我国土地辽阔，资源丰富。"
}, {
    B: "govern",
    C: "[ˈgʌvn]",
    D: "vt./vi.管理，统治，支配",
    E: "g+over+n",
    F: "g哥(编码)+over超过(熟词)+n门(编码)",
    G: "哥哥的身高超过门后开始管理我家",
    H: "Who are the men who really govern in this country?",
    I: "谁是这个国家的真正统治者？"
}, {
    B: "adequate",
    C: "['ædɪkwət]",
    D: "adj.充足的，适当的",
    E: "ade+qu+ate",
    F: "ade阿德(拼音)+qu去(拼音)+ate吃(熟词)",
    G: "阿德去吃饭的理由很充足",
    H: "He had not an adequate arena for the exercise of his talents.",
    I: "他没有充分发挥其才能的场所。"
}, {
    B: "jog",
    C: "[dʒɒg]",
    D: "vt/vi.慢跑，轻推；n.慢跑，轻推",
    E: "dog",
    F: "dog狗",
    G: "被钩子(j)勾住鼻子的狗在慢跑",
    H: "I got up early the next morning to jog.",
    I: "第二天早晨我一大早起来去慢跑。"
}, {
    B: "ridge",
    C: "[rɪdʒ]",
    D: "n.山脊，脊，埂",
    E: "ri+dge",
    F: "ri日+dge大哥",
    G: "日落时大哥爬上了山脊",
    H: "Every man who could fight was now committed to defend the ridge.",
    I: "每个能够参加战斗的男子现在都决心要保卫这条山脊。"
}, {
    B: "loan",
    C: "[ləʊn]",
    D: "n.贷款，暂借；vt.借出",
    E: "lo+an",
    F: "lo10(象形)+an一(熟词)",
    G: "贷款10亿元还一百年都还不完",
    H: "My bank manager offered to make me a loan.",
    I: "我的银行经理主动为我提供贷款。"
}, {
    B: "inneed",
    C: "[in,ni:d]",
    D: "在危难中，在危急中",
    E: "in+need",
    F: "in在里面+need需要",
    G: "在里面有需要了就是出于危难中了",
    H: "They are the ones who help you out when you are in need.",
    I: "他们就是那些在你有需要时会帮忙的人。"
}, {
    B: "seedling",
    C: "['sɪ:dlɪŋ]",
    D: "n.树苗，秧苗",
    E: "seed+ling",
    F: "seed种子(熟词)+ling岭(拼音)",
    G: "种子在山岭里长成了树苗",
    H: "Don’t walk on the seedlings.",
    I: "勿踏秧苗。"
}, {
    B: "blowhole",
    C: "['bləʊhəʊl]",
    D: "n.（鲸头顶的）呼吸孔，喷水孔",
    E: "blow+hole",
    F: "blow吹+hole洞",
    G: "呼吸孔里的杂物被吹进洞里",
    H: "The whale expelled water from his blowhole.",
    I: "鲸鱼从鼻孔排出水。"
}, {
    B: "purchase",
    C: "[ˈpɜ:tʃəs]",
    D: "n.购买，买；vt.买",
    E: "pur+chase",
    F: "pur向前(词缀)+chase追赶(熟词)",
    G: "向前追赶着去购买",
    H: "Keep your receipt as proof of purchase .",
    I: "保存好收据作为购货凭证。"
}, {
    B: "urge",
    C: "[ə:dʒ]",
    D: "vt.鼓励，激励",
    E: "ur+ge",
    F: "ur你的(编码your)+ge哥(拼音)",
    G: "我被你的哥哥鼓励着",
    H: "They urged parliament to approve plans for their reform programme.",
    I: "他们敦促议会批准他们的改革方案。"
}, {
    B: "revise",
    C: "[rɪ'vaɪz]",
    D: "vt.修改，校订，修订",
    E: "re+vi+se",
    F: "re再(词缀)+vi歪(谐音)+se色(拼音)",
    G: "再次修改剧本后歪脖子色狼死了",
    H: "In the light of these changes, we must revise our plan.",
    I: "鉴于这些变化，我们必须修正我们的计划。"
}, {
    B: "contradict",
    C: "[ˌkɒntrəˈdɪkt]",
    D: "vt.反驳，驳斥",
    E: "con+tr+adi+ct",
    F: "con康(谐音)+tr土人(拼音)+adi阿弟(拼音)+ct餐厅(拼音)",
    G: "健康的土人反驳阿弟在餐厅说的话",
    H: "They contradict each other all the time.",
    I: "他们总是相互抵触。"
}, {
    B: "infantile",
    C: "['ɪnf(ə)ntaɪl]",
    D: "adj.婴儿的，幼稚的，初期的",
    E: "infant+i+le",
    F: "infant婴儿(熟词)+i蜡烛(编码)+le乐(拼音)",
    G: "婴儿看到蜡烛就乐了",
    H: "This kind of humour is infantile and boring.",
    I: "这种幽默既幼稚又无聊。"
}, {
    B: "annoy",
    C: "[ə'nɒɪ]",
    D: "vt.使恼怒，打搅",
    E: "an+no+y",
    F: "an一个(熟词)+no不(熟词)+y叉子(编码)",
    G: "一个不能用的叉子使妈妈恼怒",
    H: "We can annoy the enemy by air raids.",
    I: "我们可以用空袭骚扰敌人。"
}, {
    B: "slug",
    C: "[slʌg]",
    D: "n.鼻涕虫，（酒的）一大口",
    E: "s+lug",
    F: "s美女(编码)+lug录歌(拼音)",
    G: "美女带着鼻涕虫去录歌",
    H: "He took another slug of whisky.",
    I: "他又喝了一点威士忌。"
}, {
    B: "Peru",
    C: "[pə'rʊ]",
    D: "n.秘鲁",
    E: "Per+u",
    F: "Per每(熟词)+u桶(编码)",
    G: "每个桶都产自秘鲁",
    H: `It sounds as though you enjoyed Peru.
`,
    I: "这听起来好像你喜欢秘鲁。"
}, {
    B: "draft",
    C: "[drɑ:ft]",
    D: "vt.起草；n.草稿，汇票",
    E: "dra+ft",
    F: "dra(w)画(熟词)+ft福特(拼音)",
    G: "叫福特起草本书序言",
    H: "She produced an initial draft of the plan.",
    I: "她已写出该计划的初稿。"
}, {
    B: "disobey",
    C: "[ˌdɪsə'beɪ]",
    D: "vt./vi.违抗，不服从",
    E: "dis+obey",
    F: "dis不(词缀)+obey服从(熟词)",
    G: "不服从我就是违抗命令",
    H: "They were threatened with punishment if they disobeyed.",
    I: "他们受到恐吓，如若违抗就会受到惩罚。"
}, {
    B: "assessment",
    C: "[ə'sesmənt]",
    D: "n.评价，评定",
    E: "assess+ment",
    F: "assess评估(熟词)+ment门徒(拼音)",
    G: "评估完门徒的工作后要给出评价",
    H: "The Defense Secretary gave an upbeat assessment of the war so far.",
    I: "国防部长对目前的战事给予了乐观的评价。"
}, {
    B: "offshore",
    C: "['ɒfʃɔ:]",
    D: "adj.近海（的），离岸（的）",
    E: "off+shore",
    F: "off离开+shore岸",
    G: "近海的的鸟类都飞离了海岸",
    H: "The fish stayed 50 yards offshore, well out of range.",
    I: "这种鱼生活在离岸50码的地方，完全钓不到。"
}, {
    B: "grill",
    C: "[grɪl]",
    D: "n.烤架，大平底锅；vt.烧烤，灸烤",
    E: "gr+ill",
    F: "gr工人(拼音)+ill生病(熟词)",
    G: "吃完烤架上的肉工人生病了",
    H: "Grill the meat for 20 minutes each side.",
    I: "将肉的每一面各烤20分钟。"
}, {
    B: "leftover",
    C: "['leftəʊvə]",
    D: "n.剩饭，剩余物，残留物；adj.剩余的",
    E: "left+over",
    F: "left离开+over结束",
    G: "吃完剩饭再离开电影就结束了",
    H: "Leftover chicken makes a wonderful salad.",
    I: "剩下的鸡肉可做成一盘美味色拉。"
}, {
    B: "paperwork",
    C: "['peɪpəwə:k]",
    D: "n.文书工作",
    E: "paper+work",
    F: "paper纸+work工作",
    G: "文书工作是写在纸上的工作",
    H: "She is the best girl for the paperwork.",
    I: "她是最适合做这项文书工作的女孩。"
}, {
    B: "tailor",
    C: "['teɪlə]",
    D: "n.裁缝；vt.剪裁，缝制（衣服）",
    E: "tail+or",
    F: "tail尾巴(熟词)+or偶人(拼音)",
    G: "裁缝把尾巴缝在偶人上",
    H: "The tailor has cut my coat very well.",
    I: "裁缝把我的外衣裁得很好。"
}, {
    B: "adapt",
    C: "[ə'dæpt]",
    D: "vi.适应；vt.使适应，改编",
    E: "a+da+pt",
    F: "a一个(熟词)+da大(拼音)+pt葡萄(拼音)",
    G: "你要适应每天吃一颗大葡萄",
    H: "When you go to a new country, you must adapt yourself to new manners and customs.",
    I: "当你新到一个国家时，你必须使自己适应新的风俗习惯。"
}, {
    B: "software",
    C: "['sɒf(t)weə]",
    D: "n.软件",
    E: "soft+ware、",
    F: "soft软的+ware物品",
    G: "柔软的物品可以做成软件",
    H: "There are many sorts of software in my computer.",
    I: "我的计算机里有很多软件。"
}, {
    B: "resign",
    C: "[rɪ'zaɪn]",
    D: "vt.使顺从，使听任于",
    E: "re+sign",
    F: "re热(拼音)+sign签字(熟词)",
    G: "顺从他的意思在热狗上签字",
    H: "He was forced to resign due to ill health.",
    I: "由于健康原因他被迫辞职。"
}, {
    B: "assistance",
    C: "[ə'sɪst(ə)ns]",
    D: "n.辅助设备，援助，帮助",
    E: "ass+is+tance",
    F: "ass驴(熟词)+is是(熟词)+tance探测(拼音)",
    G: "屁股是用来做探测的辅助设备",
    H: "He called and called but no one came to his assistance.",
    I: "他一再呼喊，但没有人来帮助他。"
}, {
    B: "household",
    C: "[ˈhaʊshəʊld]",
    D: "n.家庭，户",
    E: "house+hold",
    F: "house房子+hold容纳",
    G: "房子容纳了一家人",
    H: "She raged against her husband for some household affairs.",
    I: "她为一些家庭琐事对丈夫大发雷霆。"
}, {
    B: "bonus",
    C: "['bəʊnəs]",
    D: "n.奖金，红利",
    E: "bon+us",
    F: "bon(e)骨头+us我们",
    G: "把骨头给我们当奖金用",
    H: "In addition to his salary ,he has a bonus of 25 yuan per month.",
    I: "除工资外，他每月还有二十五元钱奖金。"
}, {
    B: "affection",
    C: "[ə'fekʃn]",
    D: "n.钟爱，喜爱，爱情",
    E: "affect+i+on",
    F: "affect影响+i我(I)+on上",
    G: "对他的钟爱影响了我在是非问题上的判断",
    H: "She has tried hard to win his affection.",
    I: "她努力地去博取他的爱意。"
}, {
    B: "pause",
    C: "[pɔ:z]",
    D: "n./vi.暂停，中止",
    E: "pa+use",
    F: "pa怕(拼音)+use使用(熟词)",
    G: "怕使用过量就暂停使用",
    H: "She spoke for three quarters of an hour without so much as a pause.",
    I: "她一连说了45分钟，连停都没停一下。"
}, {
    B: "Antarctic",
    C: "[ænt'ɑːktɪk]",
    D: "adj.南极的",
    E: "Ant+arctic",
    F: "Ant蚂蚁+arctic北极",
    G: "蚂蚁从北极爬到南极",
    H: `In the Antarctic, the temperature rarely rises above freezing point.  
`,
    I: "在南极,温度很少升到零度以上。"
}, {
    B: "rectangle",
    C: "['rektæŋg(ə)l]",
    D: "n.长方形，矩形",
    E: "re+ct+angle",
    F: "re热(拼音)+ct餐厅(拼音)+angle角(熟词)",
    G: "热天餐厅一角是长方形",
    H: "Try to put them back to make a rectangle.",
    I: "试着把这些板块拼回一个长方形。"
}, {
    B: "platform",
    C: "['plætfɔ:m]",
    D: "n.讲台，平台，（火车站的）月台",
    E: "plat+form",
    F: "plat(e)盘子+form形状",
    G: "讲台上的盘子形状奇特",
    H: "Our train departs from platform 3.",
    I: "本次列车从3号站台发车。"
}, {
    B: "evil",
    C: "['iːv(ə)l]",
    D: "adj.邪恶的，不幸的",
    E: "live",
    F: "live居住",
    G: "这里居住着个邪恶的人",
    H: "We are still being attacked by the forces of evil.",
    I: "我们仍在遭受邪恶力量的攻击。"
}, {
    B: "toast",
    C: "[təʊst]",
    D: "vt.烤，烘；n.烤面包片，吐司",
    E: "to+a+st",
    F: "to去(熟词)+a一(熟词)+st石头(拼音)",
    G: "去一块大石头上烤面包",
    H: "Toast the bread lightly on both sides.",
    I: "面包两边要稍微烤一下。"
}, {
    B: "security",
    C: "[sɪ'kjʊərətɪ]",
    D: "n.安全，",
    E: "secur+ity",
    F: "secur(e)安全的+(c)ity城市",
    G: "安全的城市有安全",
    H: "The exact locations are being kept secret for reasons of security.",
    I: "确切地点因为安全原因要保密。"
}, {
    B: "drill",
    C: "[drɪl]",
    D: "vi./vt.钻孔，",
    E: "dr+ill",
    F: "dr大人(拼音)+ill病(熟词)",
    G: "负责训练",
    H: "Jack used a drill to bore a hole in the wall above the fireplace.",
    I: "杰克用钻子在壁炉上方的墙上钻孔。"
}, {
    B: "destination",
    C: "[,destɪ'neɪʃ(ə)n]",
    D: "n.终点，目的地",
    E: "de+sti+nation",
    F: "de德(谐音)+sti尸体(拼音)+nation国家(熟词)",
    G: "终点是德国人尸体所在的国家",
    H: "Finally, they got to the destination.",
    I: "最后，他们到达了目的地。"
}, {
    B: "abandon",
    C: "[ə'bændən]",
    D: "vt.抛弃，丢弃，放弃",
    E: "a+bandon",
    F: "a一个(熟词)+bandon笨蛋(谐音)",
    G: "一个笨蛋被女朋友抛弃",
    H: "Their decision to abandon the trip was made because of financial constraints.",
    I: "他们决定放弃这次出游是因为财力有限。"
}, {
    B: "abolition",
    C: "[ˌæbə'lɪʃn]",
    D: "n.废除，废止",
    E: "abo+lition",
    F: "abo阿伯(拼音)+lition李婶(谐音)",
    G: "阿伯把李婶定下的制度废除了",
    H: "They declared for the abolition of slavery.",
    I: "他们声明赞成废除奴隶制度。"
}, {
    B: "ambition",
    C: "[æm'bɪʃn]",
    D: "n.野心，雄心，志向",
    E: "am+bi+tion",
    F: "am上午(熟词)+bi笔(拼音)+tion神(谐音)",
    G: "野心勃勃地准备在上午抓笔神",
    H: "She is a woman of driving ambition.",
    I: "她是个很有雄心的女人。"
}, {
    B: "psychology",
    C: "[saɪ'kɒlədʒɪ]",
    D: "n.心理（学）",
    E: "psy+ch+olo+gy",
    F: "psy赛(谐音)+ch吃(拼音)+olo010(象形北京区号)+gy鸡(谐音)",
    G: "心理学课上比赛吃北京烤鸡",
    H: "She has a background in child psychology.",
    I: "她受过儿童心理学的教育。"
}, {
    B: "fulfilling",
    C: "[fʊl'fɪlɪŋ]",
    D: "adj.令人满意的，令人愉快的",
    E: "ful+fill+ing",
    F: "ful俘虏(拼音)+fill装满(熟词)+ing鹰(谐音)",
    G: "俘虏满意的把装满鹰的笼子放了",
    H: "I found it all very fulfilling.",
    I: "我发觉一切都令人感到非常满意的。"
}, {
    B: "accessible",
    C: "[ək'sesəbl]",
    D: "adj.可进入的，可接近的，可使用的",
    E: "access+i+ble",
    F: "access入口(熟词)+i我(熟词I)+ble伯(谐音)",
    G: "找到入口后我和伯伯才可进入",
    H: "The Centre is easily accessible to the general public.",
    I: "该中心普通大众可随意进入。"
}, {
    B: "impair",
    C: "[ɪm'peə(r)]",
    D: "vt.削弱，损伤",
    E: "im+pair",
    F: "im姨母(谐音)+pair一双(熟词)",
    G: "姨母只靠一双手就能削弱对方的实力",
    H: "She suffers from impaired hearing.",
    I: "她听力受损。"
}, {
    B: "dignity",
    C: "['dɪgnətɪ]",
    D: "n.尊严，高贵的品质",
    E: "dig+ni+ty",
    F: "dig挖(熟词)+ni泥(拼音)+ty踢(谐音)",
    G: "挖泥时踢人会有失尊严",
    H: "She still has her dignity.",
    I: "她仍然保持着自己的尊严。"
}, {
    B: "satisfaction",
    C: "[ˌsætɪs'fækʃn]",
    D: "n.满意，满足，令人满意的事物",
    E: "sat+is+fac+tion",
    F: "sat坐(熟词)+is是(熟词)+fac发财(拼音)+tion神(谐音)",
    G: "坐着是会发财的，神表示很满意",
    H: "She obtained great satisfaction from helping other people.",
    I: "她帮助别人，由此获得了巨大的满足。"
}, {
    B: "cushion",
    C: "['kʊʃn]",
    D: "n.垫子，靠垫，隔垫",
    E: "cu+shion",
    F: "cu粗(拼音)+shion神(谐音)",
    G: "粗鲁的神一屁股坐在垫子上",
    H: "He lay on the sofa with a cushion under his head.",
    I: "他躺在沙发上，头下枕着靠垫。"
}, {
    B: "anecdote",
    C: "[ˈænɪkdəʊt]",
    D: "n.趣闻，轶事",
    E: "anec+do+te",
    F: "anec艾尼克(谐音)+do逗(谐音)+te特(拼音)",
    G: "艾尼克讲趣闻逗特务开心",
    H: `He introduced his speech with a humorous anecdote.  
`,
    I: "他讲了一则幽默轶事作为讲演的引子。"
}, {
    B: "iceberg",
    C: "['aɪsbɜ:g]",
    D: "n.冰山",
    E: "ice+berg",
    F: "ice冰(熟词)+berg渤哥(谐音)",
    G: "冰山上的冰被渤哥吃了",
    H: "The ship ran upon the iceberg.",
    I: "轮船撞到冰山上。"
}, {
    B: "dimension",
    C: "[dɪ'menʃn]",
    D: "n.方面，维（数），侧面",
    E: "di+men+sion",
    F: "di弟(拼音)+men门(拼音)+sion神(谐音)",
    G: "弟弟看到门神好的方面",
    H: "His personality has several dimensions.",
    I: "他是个有多重性格的人。"
}, {
    B: "anniversary",
    C: "[ˌænɪ'vɜ:sərɪ]",
    D: "n.周年纪念日",
    E: "anni+ver+sa+ry",
    F: "anni安妮(拼音)+ver我(谐音)+sa撒(拼音)+ry人妖(拼音)",
    G: "安妮和我出席了小撒和人妖的周年纪念日",
    H: "It was the fortieth anniversary of the death of the composer.",
    I: "这是该作曲家逝世40周年纪念日。"
}, {
    B: "transfusion",
    C: "[træns'fju:ʒn]",
    D: "n.输血",
    E: "trans+fu+sion",
    F: "trans穿丝(谐音)+fu夫(拼音)+sion忍(谐音)",
    G: "穿丝绸衣服的夫人忍痛去输血",
    H: "She suffered kidney failure and needed a blood transfusion.",
    I: "她得了肾衰竭，需要输血。"
}, {
    B: "foundation",
    C: "[faʊn'deɪʃn]",
    D: "n.地基，基础",
    E: "found+ation",
    F: "found创立(熟词)+ation爱神(谐音)",
    G: "公司创立前由爱神负责打地基",
    H: "Best friends are the foundation of my life.",
    I: "最好的朋友是我生命的基础。"
}, {
    B: "migration",
    C: "[maɪ'greɪʃn]",
    D: "n.移居，迁徙，迁居",
    E: "mi+gr+ation",
    F: "mi米(拼音)+gr国人(拼音)+ation爱神(谐音)",
    G: "米国人带爱神移居海外了",
    H: "Swallows begin their migration south in autumn.",
    I: "燕子在秋季开始向南方迁移。"
}, {
    B: "vaccination",
    C: "[ˌvæksɪ'neɪʃn]",
    D: "n.接种疫苗",
    E: "va+cc+in+ation",
    F: "va娃(谐音)+cc草丛(拼音)+in里(熟词)+ation爱神(谐音)",
    G: "娃娃在草丛里给爱神打接种疫苗",
    H: "Vaccination and other prophylactic measures can be carried out.",
    I: "可以采取疫苗接种和其他预防措施。"
}, {
    B: "entry",
    C: "['entrɪ]",
    D: "n.进入，入口处",
    E: "en+try",
    F: "en俺(谐音)+try尝试(熟词)",
    G: "俺尝试进入里面",
    H: "Entry to this competition is by invitation only.",
    I: "只有受邀请才能参加本次竞赛。"
}, {
    B: "abolish",
    C: "[ə'bɒlɪʃ]",
    D: "vt.废除",
    E: "a+bo+lish",
    F: "a一(熟词)+bo拨(谐音)+lish律师(谐音)",
    G: "一拨律师要求废除这个法律",
    H: `Dr. Proudie would abolish all forms and ceremonies.  
`,
    I: "普劳迪博士要废除各种仪式与礼节。"
}, {
    B: "absurd",
    C: "[əb'sɜːd]",
    D: "adj.荒唐的，荒谬的",
    E: "ab+surd",
    F: "ab阿爸(拼音)+surd色的(谐音)",
    G: "阿爸色色的真是荒唐",
    H: `It is ridiculously absurd to believe that the number 13 is unlucky.  
`,
    I: "相信数字13是个不吉祥的数字是荒唐可笑的。"
}, {
    B: "declare",
    C: "[dɪ'kleə(r)]",
    D: "vt.宣称，宣布，声明",
    E: "de+cl+are",
    F: "de弟(谐音)+cl粗鲁(拼音)+are是(熟词)",
    G: "他宣称弟弟太粗鲁是不对的",
    H: "America declared war on Japan in 1941.",
    I: "1941年美国对日本宣战。"
}, {
    B: "divorce",
    C: "[dɪ'vɔ:s]",
    D: "vt.使离婚，使分离",
    E: "di+vorce",
    F: "di弟(拼音)+vorce我死(谐音)",
    G: "弟弟在我死后离婚了",
    H: "Everyone remarked on her divorce",
    I: "人人都在议论她的离婚"
}, {
    B: "conservation",
    C: "[ˌkɒnsə'veɪʃn]",
    D: "n.保护，保存",
    E: "con+serv+ation",
    F: "con康(谐音)+serv(e)服务(熟词)+ation爱神(谐音)",
    G: "保护康熙的服务员是爱神",
    H: "There was a time when conservation meant keeping people away from nature.",
    I: "曾经有一段时间，保护环境就是意味着不让人们接触大自然。"
}, {
    B: "target",
    C: "[ˈtɑ:ɡit]",
    D: "n.（射击的）靶子，（服务的）对象，目标；vt.瞄准",
    E: "tar+get",
    F: "tar他(谐音)+get得到(熟词)",
    G: "他得到了射击的靶子",
    H: "I aimed the gun carefully at the target.",
    I: "我小心地用枪瞄准了目标。"
}, {
    B: "shallow",
    C: "['ʃæləʊ]",
    D: "adj.浅的",
    E: "shall+ow",
    F: "shall应该(熟词)+ow藕(谐音)",
    G: "应该将藕放在浅滩处",
    H: "Put the milk in a shallow dish.",
    I: "将牛奶倒入一个浅盘里。"
}, {
    B: "pension",
    C: "['penʃ(ə)n]",
    D: "n.退休金，抚恤金",
    E: "pen+sion",
    F: "pen笔(熟词)+sion神(谐音)",
    G: "笔神在发养老金",
    H: "He is moving ever closer to drawing his pension.",
    I: "他就要领取养老金了。"
}, {
    B: "participate",
    C: "[pɑː'tɪsɪpeɪt]",
    D: "v.参加，参与",
    E: "parti+cip+ate",
    F: "parti派对(谐音party)+cip瓷瓶(拼音)+ate吃(熟词)",
    G: "参加party的人用瓷瓶吃东西",
    H: "Over half the population of this country participate in sport.",
    I: "这个国家一半以上的人口参加体育锻炼。"
}, {
    B: "privilege",
    C: "['prɪvəlɪdʒ]",
    D: "n.特权，优惠",
    E: "pri+vi+lege",
    F: "pri仆人(谐音)+vi胜利(谐音V)+lege乐歌(拼音)",
    G: "仆人胜利获得快乐唱歌的特权",
    H: "I hope to have the privilege of working with them again.",
    I: "但愿有幸与他们再度合作。"
}, {
    B: "political",
    C: "[pə'lɪtɪkl]",
    D: "adj.政治的，政党的",
    E: "poli+tic+al",
    F: "poli破例(拼音)+tic题刻(谐音)+al阿狸(拼音)",
    G: "破例题刻的文字彰显了阿狸的政治抱负",
    H: "Henry was forced to leave his motherland for political reasons.",
    I: "由于政治原因，亨利被迫离开了他的祖国。"
}, {
    B: "clinic",
    C: "['klɪnɪk]",
    D: "n.诊所",
    E: "cl+in+ic",
    F: "cl赤裸(拼音)+in里面(熟词)+icIC卡(谐音)",
    G: "诊所里，病人赤裸地在里面刷IC卡",
    H: "He went to a clinic to cure his drinking and overeating.",
    I: "他去诊所戒酒并控制饮食。"
}, {
    B: "visa",
    C: "['vi:zə]",
    D: "n.签证",
    E: "vi+sa",
    F: "vi胜利(谐音V)+sa萨(拼音)",
    G: "胜利后萨达姆获得签证",
    H: "The visa expires next month.",
    I: "签证下月到期。"
}, {
    B: "qualification",
    C: "[ˌkwɒlɪfɪ'keɪʃn]",
    D: "n.资历，资格",
    E: "qu+ali+fication",
    F: "qu去(拼音)+ali阿狸(拼音)+fication会开心(谐音)",
    G: "他有资格去找阿狸肯定会开心",
    H: "Jack has obtained a medical qualification.",
    I: "杰克取得了行医资格证书。"
}, {
    B: "preparation",
    C: "[ˌprepəˈreɪʃn]",
    D: "n.准备，预备",
    E: "prepar+ation",
    F: "prepar(e)准备(熟词)+ation爱神(谐音)",
    G: "准备好就去找爱神",
    H: "He didn't do enough preparation for his exam, and failed.",
    I: "他考试前没有充分准备,，结果不及格。"
}, {
    B: "revision",
    C: "[rɪˈvɪʒn]",
    D: "n.复习，复查，修正",
    E: "re+vi+sion",
    F: "re热(拼音)+vi胜利(谐音V)+sion人(谐音)",
    G: "热天获得胜利的人在复习功课",
    H: "She did some revision for the exam.",
    I: "她温习功课准备考试。"
}, {
    B: "enterprise",
    C: "['entəpraɪz]",
    D: "n.事业，事业线",
    E: "enter+pri+se",
    F: "enter进入(熟词)+pri扑来(谐音)+se色(拼音)",
    G: "事业进入发展期却被扑来的色狼毁了",
    H: "He is bound to succeed in his enterprise.",
    I: "他在事业上一定会成功。"
}, {
    B: "seminar",
    C: "['seminɑ:]",
    D: "n.研讨会",
    E: "sem+in+ar",
    F: "sem山姆(谐音)+in里面(熟词)+ar矮人(拼音)",
    G: "研讨会上山姆走进里面成了矮人",
    H: "By the way, how did your seminar go?",
    I: "对了，你的研讨会进行得怎样？"
}, {
    B: "optional",
    C: "['ɒpʃənl]",
    D: "adj.可以选择的，非强制的",
    E: "op+tion+al",
    F: "op阿婆(谐音)+tion婶(谐音)+al暗恋(拼音)",
    G: "阿婆和婶婶是可以选择的暗恋对象",
    H: "The goods are optional, but only one.",
    I: "这些物品是可以任选的，但只能选一个。"
}, {
    B: "parallel",
    C: "['pærəlel]",
    D: "n.平行线，可相比拟的事物",
    E: "para+ll+el",
    F: "para拍了(谐音)+ll11(象形)+el饿狼(拼音)",
    G: "在平行线上拍了11只饿狼",
    H: "Parallel lines will never meet no matter how far extended.",
    I: "无论延伸多长，平行线永不相交。"
}, {
    B: "accompany",
    C: "[ə'kʌmpənɪ]",
    D: "vt.陪伴，伴奏",
    E: "a+c+company",
    F: "a苹果(编码)+c月(编码)+company公司(熟词)",
    G: "苹果陪伴月亮去公司",
    H: "He took time out from campaigning to accompany his mother to dinner.",
    I: "他从竞选活动中挤出一点时间陪母亲吃饭。"
}, {
    B: "hut",
    C: "[hʌt]",
    D: "n.棚屋，小屋",
    E: "hu+t",
    F: "hu虎(拼音)+t伞(编码)",
    G: "棚屋里的老虎打着伞",
    H: "The poor old man lived in a little wooden hut.",
    I: "那个贫穷的老人住在一间小木屋内。"
}, {
    B: "syndrome",
    C: "['sɪndrəʊm]",
    D: "n.综合病征，综合症状",
    E: "syn+d+ro+me",
    F: "syn新(谐音)+d狗(编码dog)+ro肉(拼音)+me我(熟词)",
    G: "吃的新鲜狗肉缓解了我的综合病症",
    H: "The syndrome is more likely to strike those whose immune systems are already below par.",
    I: "这种综合征更容易对那些免疫系统已经低于正常水平的人构成威胁。"
}, {
    B: "ambitious",
    C: "[æm'bɪʃəs]",
    D: "adj.有野心的，有雄心的，规模宏大的",
    E: "am+bit+i+ous",
    F: "am上午(熟词)+bit一点(熟词)+i蜡烛(编码)+ous藕丝(拼音)",
    G: "有野心的他在上午拿一点蜡烛换藕丝",
    H: "The ambitious young man used his friends to further his career.",
    I: "这位野心勃勃的年轻人利用朋友来推动他的事业的发展。"
}, {
    B: "dictation",
    C: "[dɪk'teɪʃn]",
    D: "n.口授，听写（的文字）",
    E: "di+ct+ation",
    F: "di弟(拼音)+ctCT(编码)+ation爱神(谐音)",
    G: "弟弟边做CT边向爱神口授秘诀",
    H: "The teacher gave me a dictation.",
    I: "老师给我进行听写。"
}, {
    B: "clumsy",
    C: "['klʌmzɪ]",
    D: "adj.笨拙的，笨手笨脚的",
    E: "clu+m+sy",
    F: "clu粗鲁(拼音)+m山(编码)+sy声音(拼音)",
    G: "笨拙粗鲁的他在山里找鸟的声音",
    H: "He is clumsy with his hands.",
    I: "他的一双手很笨。"
}, {
    B: "microscope",
    C: "['maɪkrəskəʊp]",
    D: "n.显微镜",
    E: "micro+s+cope",
    F: "micro极小的(熟词)+s蛇(编码)+cope处理(熟词)",
    G: "极小的蛇要放在显微镜下处理",
    H: "Here is a section of the potato as seen through a microscope.",
    I: "这是显微镜下看到的土豆的一个切片。"
}, {
    B: "tank",
    C: "[tæŋk]",
    D: "n.（成液体、气体的）大容器，缸，大桶",
    E: "tan+k",
    F: "tan弹(拼音)+k机关枪(编码)",
    G: "容器里弹出一把机关枪",
    H: "Two water tanks provide a total capacity of 400 litres.",
    I: "两个水缸的总容量为400升。"
}, {
    B: "bowling",
    C: "['bəʊlɪŋ]",
    D: "n.保龄球",
    E: "bo+w+ling",
    F: "bo伯(拼音)+w皇冠(编码)+ling龄(拼音)",
    G: "伯伯戴着皇冠打保龄球",
    H: "I go bowling for relaxation.",
    I: "我打保龄球是为了消遣。"
}, {
    B: "handy",
    C: "['hændɪ]",
    D: "adj.有用的，方便的",
    E: "hand+y",
    F: "hand手(熟词)+y衣叉(编码)",
    G: "手上的衣叉是有用的",
    H: "The book gives handy hints on looking after indoor plants.",
    I: "这本书提供了关于如何照料室内花草的有用信息。"
}, {
    B: "apron",
    C: "['eɪprən]",
    D: "n.围裙",
    E: "ap+r+on",
    F: "ap阿婆(拼音)+r草(编码)+on在...上(熟词)",
    G: "阿婆站在草地上穿围裙",
    H: "A maid in a white apron opened the door.",
    I: "一个身着白围裙的女佣开了门。"
}, {
    B: "suck",
    C: "[sʌk]",
    D: "vt./vi.吮吸",
    E: "duck",
    F: "duck鸭子",
    G: "美女(s)养的鸭子在吮吸水",
    H: "Plants suck moisture from the earth.",
    I: "植物从土壤中吸收水分。"
}, {
    B: "disability",
    C: "[ˌdɪsə'bɪlətɪ]",
    D: "n.伤残，无力，无能",
    E: "dis+ablility",
    F: "dis的士(拼音)+ablility能力(熟词)",
    G: "伤残的的士司机能力有限",
    H: "Facilities for people with disabilities are still insufficient.",
    I: "供伤残人士使用的设施仍然匮乏。"
}, {
    B: "absence",
    C: "['æbsəns]",
    D: "n.缺席，不在",
    E: "ab+sen+ce",
    F: "ab阿伯+sen森+ce测",
    G: "阿伯在森林测量时发现领导缺席了",
    H: "The team was crippled by his absence.",
    I: "他的缺席使这支球队的实力削弱。"
}, {
    B: "slavery",
    C: "['sleɪvərɪ]",
    D: "n.奴隶制",
    E: "sl+a+very",
    F: "sl司令(拼音)+a一(熟词)+very非常(熟词)",
    G: "司令废除了一项非常残酷的奴隶制",
    H: "They were delivered from slavery.",
    I: "他们从奴役中被解放出来。"
}, {
    B: "architect",
    C: "['ɑ:kɪtekt]",
    D: "n.建筑师，设计师，创立者",
    E: "ar+chi+te+ct",
    F: "ar矮人+chi池+te特+ct餐厅",
    G: "建筑师矮人在池边建造了个奇特的餐厅",
    H: "The building was constructed from the design of that architect.",
    I: "这幢大楼是按那位建筑师的设计建造的。"
}, {
    B: "basement",
    C: "['beɪsmənt]",
    D: "n.地下室",
    E: "base+ment",
    F: "base底部(熟词)+ment门徒(拼音)",
    G: "地下室的底部关押着一个门徒",
    H: "They live in a basement flat in London.",
    I: "他们住在伦敦的一所地下公寓里。"
}, {
    B: "italics",
    C: "[ɪ'tælɪks]",
    D: "n.（pl.）斜体（字）",
    E: "it+ali+cs",
    F: "it它(熟词)+ali阿狸(拼音)+cs厕所(拼音)",
    G: "它看到阿狸在厕所写斜体字",
    H: "This sentence is printed in italics.",
    I: "这个句子是用斜体排印的。"
}, {
    B: "makeup",
    C: "['meɪkʌp]",
    D: "n.化妆品",
    E: "make+up",
    F: "make做+up在上面",
    G: "化妆品刚做好就拿到网站上面卖",
    H: "Makeup accents her good looks.",
    I: "化妆使她显得更加美丽。"
}, {
    B: "bedding",
    C: "['bedɪŋ]",
    D: "n.寝具，铺盖",
    E: "bed+ding",
    F: "bed床(熟词)+ding钉(拼音)",
    G: "在床上用钉子固定寝具",
    H: "Bedding is sheets, blankets, and covers that are used on beds.",
    I: "寝具是指床上用的床单，毛毯和被子。"
}, {
    B: "drag",
    C: "[dræg]",
    D: "vt.拖，拉，扯",
    E: "dr+ag",
    F: "dr敌人+ag阿哥",
    G: "敌人把阿哥拖走了",
    H: "I really had to drag myself out of bed this morning.",
    I: "今天早上我真是硬撑着从床上爬了起来。"
}, {
    B: "cell",
    C: "[sel]",
    D: "n.细胞，小房间，单人牢房",
    E: "ce+ll",
    F: "ce册(拼音)+ll11(象形)",
    G: "册子上有11个关于细胞的常识",
    H: "Cells divide and form new cells.",
    I: "细胞分裂然后生成新细胞。"
}, {
    B: "seaweed",
    C: "['si:wi:d]",
    D: "n.海草，海藻",
    E: "sea+we+ed",
    F: "sea海(熟词)+we我们(熟词)+ed耳朵(拼音)",
    G: "在海里我们的耳朵被海草缠住了",
    H: "The seaweed felt cold and slimy.",
    I: "海藻摸起来冷冰冰黏糊糊的。"
}, {
    B: "shopkeeper",
    C: "['ʃɔpˌki:pə]",
    D: "n.店主",
    E: "shop+keeper",
    F: "shop商店+keeper保管人",
    G: "商店的保管人就是店主",
    H: "They told the shopkeeper to keep the change.",
    I: "他们告诉店主不用找钱了。"
}, {
    B: "numb",
    C: "[nʌm]",
    D: "adj.失去知觉的，麻木的",
    E: "nu+mb",
    F: "nu奴+mb面包",
    G: "奴隶吃完面包后失去知觉了",
    H: "I feel numb.",
    I: "我感觉很麻木。"
}, {
    B: "counter",
    C: "['kaʊntə(r)]",
    D: "n.柜台，计数器",
    E: "count+er",
    F: "count数(熟词)+er儿(拼音)",
    G: "在柜台边数数的是我儿子",
    H: "You will find sausages on the meat counter.",
    I: "你会在肉柜台找到香肠。"
}, {
    B: "affair",
    C: "[ə'feə(r)]",
    D: "n.事务，事情，暧昧关系",
    E: "af+fair",
    F: "af阿芙(拼音)+fair公平(熟词)",
    G: "阿芙会公平地处理纠纷事务",
    H: "He does not want to interfere in the internal affairs of another country.",
    I: "他不想干涉他国的内部事务。"
}, {
    B: "armchair",
    C: "['ɑ:mtʃeə(r)]",
    D: "n.扶手椅，单座沙发",
    E: "arm+chair",
    F: "arm胳膊+chair椅子",
    G: "坐扶手椅时可把胳膊搭在椅子上",
    H: "She was sitting in an armchair.",
    I: "她坐在扶手椅中。"
}, {
    B: "thinking",
    C: "['θɪŋkɪŋ]",
    D: "n.思考，思想",
    E: "thin+king",
    F: "thin瘦的+king国王",
    G: "瘦瘦的国王在思考",
    H: "The book discusses the impact of Christian thinking on western society.",
    I: "这本书探讨了基督教思想对西方社会的影响。"
}, {
    B: "baleen",
    C: "[bə'lɪ:n]",
    D: "n.鲸须",
    E: "ba+le+en",
    F: "ba爸+le乐+en摁",
    G: "爸爸乐得摁住鲸须不放",
    H: "Large baleen whales are of special concern.",
    I: "大型鲸须鲸是最受关注的物种。"
}, {
    B: "yell",
    C: "[jel]",
    D: "vi.大叫，呼喊；n.喊声，叫声",
    E: "well",
    F: "well好的",
    G: "拿着弹弓(y)大喊大叫是不好的",
    H: "I'm sorry I yelled at you last night.",
    I: "很抱歉昨天晚上我冲着你大吼大叫的。"
}, {
    B: "weed",
    C: "[wi:d]",
    D: "n.杂草，野草；vi.除草",
    E: "we+ed",
    F: "we我们(熟词)+ed二弟(拼音)",
    G: "我们逼着二弟除杂草",
    H: "There are so many weeds in his field!",
    I: "他的田里有那么多野草！"
}, {
    B: "broom",
    C: "[bru:m]",
    D: "n.扫帚",
    E: "b+room",
    F: "b6(象形)+room房间(熟词)",
    G: "6个房间的扫帚都不见了",
    H: "She is sweeping with a broom.",
    I: "她在用扫帚扫地。"
}, {
    B: "Kenya",
    C: "['kenjə]",
    D: "n.肯尼亚（非洲国家）",
    E: "Ken+ya",
    F: "ken啃+ya鸭",
    G: "在肯尼亚啃鸭脖",
    H: "I was traveling in Kenya then.",
    I: "那时，我在肯尼亚旅行。"
}, {
    B: "Bangladesh",
    C: "[ˌbɑ:ŋglə'deʃ]",
    D: "n.孟加拉国（亚洲国家）",
    E: "Bang+lade+sh",
    F: "Bang棒+lade辣得+sh上海",
    G: "孟加拉国的冰棒辣得上海人直哭",
    H: "Bangladesh now has a population of about 110 million.",
    I: "孟加拉国现有大约1.1亿人口。"
}, {
    B: "alarm",
    C: "[ə'lɑ:m]",
    D: "n.警报，惊恐；vt.使惊恐，使警觉，惊动",
    E: "al+arm",
    F: "al阿狸(拼音)+arm手臂(熟词)",
    G: "阿狸用手臂拉响警报",
    H: "There is growing public alarm at this increase in crime.",
    I: "公众对犯罪率的增大日益不安。"
}, {
    B: "annual",
    C: "['ænjʊəl]",
    D: "adj.每年的，年度的；n.年报，年鉴",
    E: "an+nu+al",
    F: "an一(熟词)+nu怒(拼音)+al阿狸(拼音)",
    G: "每年都有一件事会惹怒阿狸",
    H: "What's your annual salary?",
    I: "你的年薪是多少？"
}, {
    B: "drift",
    C: "[drɪft]",
    D: "n./vi.漂流，漂移，趋势",
    E: "dr+i+ft",
    F: "dr敌人(拼音)+i我(熟词I)+ft斧头(拼音)",
    G: "敌人发现我拿着斧头在漂流",
    H: "We proceeded to drift on up the river.",
    I: "我们继续向河流的上游漂流。"
}, {
    B: "adjust",
    C: "[ə'dʒʌst]",
    D: "vt./vi.调整，校准",
    E: "ad+just",
    F: "ad广告+just刚刚",
    G: "广告刚刚被调整了",
    H: "They will adjust their bequests in the light of yours.",
    I: "他们将根据你的赠予调整自己的遗产分配。"
}, {
    B: "tractor",
    C: "['træktə]",
    D: "n.拖拉机",
    E: "tr+act+or",
    F: "tr土人(拼音)+act扮演(熟词)+or偶人(拼音)",
    G: "土人扮演成偶人开拖拉机",
    H: "He enjoys driving tractors.",
    I: "他喜欢开拖拉机。"
}, {
    B: "abigail",
    C: "['æbɪˌgel]",
    D: "n.丫头，使女",
    E: "abi+gail",
    F: "abi阿碧+gail改了",
    G: "阿碧改了丫头的衣服",
    H: "David got married with an abigail.",
    I: "大卫和一个侍女结婚了。"
}, {
    B: "accommodation",
    C: "[əˌkɒmə'deɪʃn]",
    D: "n.住宿，住处，和解",
    E: "accommodat+i+on",
    F: "accommodat(e)为...提供住宿+i我(I)+on上",
    G: "为我提供住宿的是上级公司的人",
    H: "Have you found accommodation?",
    I: "找到住处没有?"
}, {
    B: "cuisine",
    C: "[kwɪ'zɪ:n]",
    D: "n.菜肴，烹饪（风味）",
    E: "cui+si+ne",
    F: "cui催+si死+ne呢",
    G: "做菜肴时真是被催死了呢",
    H: "The cuisine of Japan is low in fat.",
    I: "日式烹饪的特点是低脂肪。"
}, {
    B: "chapter",
    C: "[tʃæptə(r)]",
    D: "n.（书中的）章，篇，回",
    E: "cha+pt+er",
    F: "cha查+pt葡萄+er儿",
    G: "这一章查明了葡萄是儿子偷吃的",
    H: "I took the title of this chapter from one of my favorite books.",
    I: "我这章的标题来自我最喜欢的一本书。"
}, {
    B: "snorkel",
    C: "['snɔ:kl]",
    D: "n.（潜水艇/潜水者）通气管；vi.戴潜水通气管潜泳",
    E: "sn+or+kel",
    F: "sn少女+or偶人+kel可乐",
    G: "少女把偶人的可乐扔进了潜水艇通气管",
    H: "We went snorkelling, and then returned for lunch.",
    I: "我们去潜泳了，然后回来吃午饭。"
}, {
    B: "elegant",
    C: "['elɪg(ə)nt]",
    D: "adj.优雅的，高雅的",
    E: "elephant",
    F: "elephant大象",
    G: "大象很优雅",
    H: "Now you have an elegant way to determine both the content and the style of each cell in the table.",
    I: "现在，您已经掌握了一种优雅的方式，确定表中每个单元格的内容和样式。"
}, {
    B: "pile",
    C: "[paɪl]",
    D: "n.堆，摞，叠；vi./vt.堆起，堆积",
    E: "pi+le",
    F: "pi疲+le了",
    G: "处理一堆文件我就疲劳了",
    H: "The leaves had been swept into huge piles.",
    I: "树叶被扫成了一大堆一大堆的。"
}, {
    B: "bound",
    C: "[baʊnd]",
    D: "vt.使跳跃，束缚；adj.有义务的，受约束的",
    E: "pound",
    F: "pound英镑",
    G: "这么多英镑使我高兴地跳跃起来",
    H: "The newly emerging forces are bound to defeat what is corrupt.",
    I: "新生力量必然战胜腐朽。"
}, {
    B: "tide",
    C: "[taɪd]",
    D: "n.潮流，趋势，潮汐；vt.随潮漂流",
    E: "ride",
    F: "ride骑",
    G: "骑自行车是一种潮流",
    H: "Our boat gently dropped down with the tide.",
    I: "我们的小船慢慢随潮顺流而下。"
}, {
    B: "pure",
    C: "[pjʊə]",
    D: "adj.纯洁的，纯粹的，纯的",
    E: "cure",
    F: "cure治愈",
    G: "纯洁的爱能治愈一切",
    H: "This is pure drinking water.",
    I: "这是纯净的饮用水。"
}, {
    B: "remote",
    C: "[rɪ'məʊt]",
    D: "adj.遥远的，偏僻的",
    E: "re+mote",
    F: "re热+mote模特",
    G: "天太热，模特去遥远的地方避暑",
    H: "Mail comes to this remote village only once a week.",
    I: "邮车每周只到这个偏僻的村庄一次。"
}, {
    B: "supplement",
    C: "[ˈsʌpliment]",
    D: "vt.增补，补充；n.补充，补充物",
    E: "sup+ple+ment",
    F: "sup酥皮+ple胖了+ment门徒",
    G: "吃酥皮变胖了的门徒还要增补食物",
    H: "She supplements her diet with eggs and fruit.",
    I: "她以鸡蛋和水果来补充饮食。"
}, {
    B: "plough",
    C: "[plaʊ]",
    D: "vi.耕（地），犁（地）",
    E: "pl+ou+gh",
    F: "pl胖了+ou偶+gh规划",
    G: "胖了的偶人在规划耕地方案",
    H: "Farmers plough in autumn or spring.",
    I: "农民在秋天或春天犁田。"
}, {
    B: "routine",
    C: "[ru:'ti:n]",
    D: "adj.常规的，日常的，例行的",
    E: "routi+ne",
    F: "routi肉体+ne哪",
    G: "这具常规的肉体肯定不是哪吒",
    H: "She was bored with the deadening routine of her life.",
    I: "她厌倦了自己生活令人窒息的一成不变。"
}, {
    B: "annoyance",
    C: "[ə'nɔɪəns]",
    D: "n.烦恼",
    E: "annoy+an+ce",
    F: "annoy烦恼(熟词)+an一(熟词)+ce厕(拼音)",
    G: "烦恼的他呆在一个厕所里",
    H: "To her annoyance the stranger did not go away.",
    I: "让她烦恼的是，那个陌生人并没有走。"
}, {
    B: "mainstream",
    C: "['meɪnstri:m]",
    D: "n.主流，主要倾向",
    E: "main+stream",
    F: "main主要的+stream河流",
    G: "主流文化发源于主要河流",
    H: "This is the director's first mainstream Hollywood film.",
    I: "这是该导演在好莱坞的首部主流影片。"
}, {
    B: "companion",
    C: "[kəm'pænɪən]",
    D: "n.伙伴，同伴",
    E: "compan+i+on",
    F: "compan(y)公司+i我(I)+on在..上",
    G: "小伙伴在公司是我的上司",
    H: "She went travelling with a female companion.",
    I: "她和一个女同伴去旅行了。"
}, {
    B: "wheelchair",
    C: "['wi:ltʃeə]",
    D: "n.轮椅",
    E: "wheel+chair",
    F: "wheel轮子+chair椅子",
    G: "把轮子装在椅子下做轮椅",
    H: "He spent the last ten years of his life in a wheelchair.",
    I: "他在轮椅上渡过了人生的最后十年。"
}, {
    B: "earphone",
    C: "['ɪəfəʊn]",
    D: "n.耳机",
    E: "ear+phone",
    F: "ear耳朵+phone手机",
    G: "戴上耳机耳朵就能听到手机的声音",
    H: "So it may be better if you can use an earphone or bluetooth instead of using your mobile directly.",
    I: "所以，用耳机或蓝牙来避免直接使用手机或许会好些。"
}, {
    B: "outwards",
    C: "['aʊtwədz]",
    D: "adv.向外",
    E: "out+war+ds",
    F: "out出去(熟词)+war战争(熟词)+ds的士(拼音)",
    G: "出去参加战争的的士司机向外跑了",
    H: "The top door opened outwards.",
    I: "顶上的门朝外开。"
}, {
    B: "overweight",
    C: "[ˌəʊvə'weɪt]",
    D: "adj.体重超常的，超重的",
    E: "over+weight",
    F: "over超过+weight重量",
    G: "吃了超重的食物就会体重超常",
    H: "He used to be very overweight.",
    I: "他曾经体重超常。"
}, {
    B: "necklace",
    C: "['nekləs]",
    D: "n.项链",
    E: "neck+lace",
    F: "neck脖子+lace蕾丝",
    G: "脖子上戴了一个蕾丝项链",
    H: "This necklace has been handed down in my family.",
    I: "这串项链是我家祖上传下来的。"
}, {
    B: "framework",
    C: "['freɪmwɜ:k]",
    D: "n.框架，构架，结构",
    E: "frame+work",
    F: "frame框架+work作品",
    G: "框架里面的作品是我做的",
    H: "They established a basic framework of ground rules for discussions.",
    I: "他们建立了讨论的基本准则的基本框架。"
}, {
    B: "meantime",
    C: "['mi:ntaɪm]",
    D: "adv.同时，其间",
    E: "mean+time",
    F: "mean意思+time时间",
    G: "在理解意思的同时要把控时间",
    H: "In the meantime the war of nerves seems likely to continue.",
    I: "与此同时，心理战似乎还可能继续。"
}, {
    B: "overboard",
    C: "['əʊvəbɔ:d]",
    D: "adv.越过船舷进入水中",
    E: "over+board",
    F: "over上面+board木板",
    G: "经过上面的木板越过船舷进入水中",
    H: "A sailor fell overboard and was rescued.",
    I: "一个船员从船上落入水中，被救了上来。"
}, {
    B: "flashlight",
    C: "['flæʃlaɪt]",
    D: "n.手电筒，闪光灯信号，闪光灯",
    E: "flash+light",
    F: "flash闪光+light灯",
    G: "闪光是手电筒发出的",
    H: "Do you have a flashlight?",
    I: "你有没有手电筒？"
}, {
    B: "clam",
    C: "[klæm]",
    D: "n.蛤",
    E: "cl+am",
    F: "cl吃了(拼音)+am早上(熟词)",
    G: "吃了早上买的蛤",
    H: "Give me a clam soup.",
    I: "给我一个蛤蜊汤。"
}, {
    B: "refund",
    C: "['ri:fʌnd]",
    D: "vt.退还，偿还；n.退款",
    E: "re+fund",
    F: "re热(拼音)+fund基金(熟词)",
    G: "热门的基金不能退还",
    H: "Ask for a refund if the goods are faulty.",
    I: "商品如有缺陷，可要求退款。"
}, {
    B: "pensioner",
    C: "['penʃnə]",
    D: "n.领养老金者",
    E: "pension+er",
    F: "pension养老金(熟词)+er儿(拼音)",
    G: "领养老金者把养老金给了儿子",
    H: "Students and pensioners are entitled to a discount.",
    I: "学生和退休人员可享受折扣。"
}, {
    B: "airmail",
    C: "['eəmeɪl]",
    D: "n.航空邮件",
    E: "air+mail",
    F: "air空中+mail邮件",
    G: "航空邮件就是在空中传递的邮件",
    H: "If you send it by airmail, it'll be very expensive.",
    I: "如果空邮，价格就会很贵。"
}, {
    B: "autonomous",
    C: "[ɔ:ˈtɒnəməs]",
    D: "adj.自治的，独立的，自主的",
    E: "auto+no+mous",
    F: "auto自己(词缀)+no没有(熟词)+mous谋杀(拼音)",
    G: "在自治区自己居然没有被谋杀",
    H: "Each of the U.S. states has an autonomous government.",
    I: "美国的每个州都有一个自治政府。"
}, {
    B: "oilfield",
    C: "[ˈɔɪlfi:ld]",
    D: "n.油田",
    E: "oil+field",
    F: "oil油+field田",
    G: "油田里可以提取到很多石油",
    H: "The Daqing Oilfield is one of the richest oilfields in our country.",
    I: "大庆油田是我国最富的油田之一。"
}, {
    B: "Inca",
    C: "['ɪŋkə]",
    D: "n.印加人，印加",
    E: "In+ca",
    F: "In在里面(熟词)+ca擦(拼音)",
    G: "那个印加人在里面擦手",
    H: "They say the find may solve some of the mysteries surrounding the Inca civilization.",
    I: "他们称此次发现也许会解开印加文明之谜。"
}, {
    B: "onwards",
    C: "[ˈɒnwədz]",
    D: "adv.向前地，前进地",
    E: "on+war+ds",
    F: "on在上面(熟词)+war战争(熟词)+ds的士(拼音)",
    G: "在上面参加战争的的士司机向前逃了",
    H: "The bus continued onward.",
    I: "公共汽车继续往前开。"
}, {
    B: "mailbox",
    C: "['meɪlbɒks]",
    D: "n.信箱，邮筒",
    E: "mail+box",
    F: "mail信件+box箱子",
    G: "信箱里的信件都放在箱子里了",
    H: "He stopped at the mailbox and dropped the letter in.",
    I: "他在邮筒前停了下来，把信投了进去。"
}, {
    B: "biochemistry",
    C: "[ˌbaɪəʊ'kemɪstrɪ]",
    D: "n.生物化学",
    E: "bio+chemistry",
    F: "bio生物(词缀)+chemistry化学(熟词)",
    G: "生物和化学都没有生物化学难",
    H: "She studies biochemistry, or the science of life.",
    I: "她学生物化学，也就是生命科学。"
},
// 3
{
    B: "bear",
    C: "[beə]",
    D: "n.熊",
    E: "b+ear",
    F: "b男孩(编码boy)+ear耳朵(熟词)",
    G: "男孩的耳朵被熊咬了",
    H: "It's a bear.",
    I: "这是一只熊。"
}, {
    B: "crossing",
    C: "['krɒsɪŋ]",
    D: "n.人行横道，十字路口",
    E: "cross+ing",
    F: "cross交叉(熟词)+ing鹰(谐音)",
    G: "人行横道交叉口有只鹰",
    H: "There is a cat on the crossing.",
    I: "人行横道上有一只猫。"
}, {
    B: "turkey",
    C: "['tɜ:kɪ]",
    D: "n.火鸡",
    E: "tur+key",
    F: "tur土人(拼音)+key钥匙(熟词)",
    G: "土人把钥匙藏在火鸡里",
    H: "I want to eat a turkey sandwich.",
    I: "我想吃一个火鸡三明治。"
}, {
    B: "opera",
    C: "['ɒp(ə)rə]",
    D: "n.歌剧，歌剧团，歌剧院",
    E: "op+era",
    F: "op藕片(拼音)+era时代(熟词)",
    G: "吃着藕片看旧时代的歌剧",
    H: "Are you an opera lover?",
    I: "你是歌剧的爱好者吗？"
}, {
    B: "sharpener",
    C: "['ʃɑ:pənə]",
    D: "n.卷笔刀",
    E: "shar+pen+er",
    F: "shar杀人(拼音)+pen钢笔(熟词)+er儿子(拼音)",
    G: "杀人的钢笔被儿子塞进了卷笔刀",
    H: "Who else has a pencil sharpener?",
    I: "还有谁有卷笔刀?"
}, {
    B: "onion",
    C: "['ʌnjən]",
    D: "n.洋葱",
    E: "on+i+on",
    F: "on上(熟词)+i蜡烛(编码)+on上(熟词)",
    G: "把桌上的蜡烛放在洋葱上",
    H: "There is too much onion in the salad.",
    I: "沙拉中洋葱头太多了。"
}, {
    B: "ferry",
    C: "['ferɪ]",
    D: "n.渡船，摆渡",
    E: "f+er+ry",
    F: "f斧头(编码)+er儿(拼音)+ry人妖(拼音)",
    G: "斧头是儿子和人妖坐渡船带来的",
    H: "It is windy today, so it would be difficult to put the ferry boat across.",
    I: "今天刮风，要摆渡到对岸不容易。"
}, {
    B: "Italian",
    C: "[ɪ'tæljən]",
    D: "adj.意大利的；n.意大利人，意大利语",
    E: "It+a+lian",
    F: "It它(熟词)+a苹果(编码)+lian脸(拼音)",
    G: "它吃的苹果像意大利人的脸",
    H: "Italian is hard to learn.",
    I: "意大利语很难学。"
}, {
    B: "Arctic",
    C: "['ɑːktɪk]",
    D: "n.北极；adj.极冷的",
    E: "ar+ct+ic",
    F: "ar矮人(拼音)+ctCT(编码)+icIC卡(编码)",
    G: "在北极矮人拍CT要刷IC卡",
    H: "The Arctic remains the domain of the polar bear.",
    I: "北极仍是北极熊的领地。"
}, {
    B: "assume",
    C: "[əˈsju:m]",
    D: "vt.假定，设想，承担，装出",
    E: "ass+u+me",
    F: "ass驴(熟词)+u你(编码)+me我(熟词)",
    G: "这头笨驴把你假定成我了",
    H: "We can safely assume that the situation will continue.",
    I: "我们很有把握地认为，形势会继续这样。"
}, {
    B: "bother",
    C: "['bɒðə]",
    D: "vt.打扰，烦扰",
    E: "b+other",
    F: "b蜜蜂(编码bee)+other其他的(熟词)",
    G: "用蜜蜂去打扰其他的同学",
    H: "I can't  bother  her with my  little  affairs.",
    I: "我不能为我的这些琐碎事去麻烦她。"
}, {
    B: "claim",
    C: "[kleɪm]",
    D: "n/vt.声称，要求，主张",
    E: "cl+aim",
    F: "cl长隆(拼音)+aim目标(熟词)",
    G: "他声称去长隆度假是他的目标",
    H: "He claims a 70 to 80 per cent success rate.",
    I: "他声称成功率有七到八成。"
}, {
    B: "powder",
    C: "['paʊdə]",
    D: "n.粉末",
    E: "po+w+de+r",
    F: "po婆(拼音)+w皇冠(编码)+de德(拼音)+r草(编码)",
    G: "婆婆的皇冠被郭德纲用草碾成粉末",
    H: "The  face  powder  adheres  well.",
    I: "这种扑面粉附着力强。"
}, {
    B: "thief",
    C: "[θɪ:f]",
    D: "n.小偷，贼",
    E: "th+ie+f",
    F: "th土豪(拼音)+ie浏览器(编码)+f斧(编码)",
    G: "小偷看到土豪打开浏览器买斧头",
    H: "The thieves snatched the camera.",
    I: "窃贼偷走了相机。"
}, {
    B: "handful",
    C: "['hændfʊl]",
    D: "n.一把，少量",
    E: "hand+ful",
    F: "hand手+ful(l)满的",
    G: "手里满满地抓了一把沙子",
    H: "They constitute but a handful of the number.",
    I: "他们只不过是其中的一小撮。"
}, {
    B: "customs",
    C: "['kʌstəmz]",
    D: "n.海关，关税，进口税",
    E: "cus+tom+s",
    F: "cus猝死(拼音)+tom汤姆(熟词Tom)+s蛇(编码)",
    G: "在海关猝死的汤姆是被蛇咬死的",
    H: "The officials passed me through customs.",
    I: "官员们让我通过了海关。"
}, {
    B: "convenient",
    C: "[kən'vi:nɪənt]",
    D: "adj.方便的",
    E: "con+veni+ent",
    F: "con肯(谐音)+veni维尼(谐音)+ent恩特(拼音)",
    G: "肯定是维尼熊为恩特提供方便的条件",
    H: "It is very convenient for me to ride a bike.",
    I: "对我而言，骑自行车很方便。"
}, {
    B: "cookie",
    C: "['kʊkɪ]",
    D: "n.饼干，小甜点",
    E: "cook+ie",
    F: "cook煮饭(熟词)+ie浏览器(编码)",
    G: "煮饭时边看浏览器边吃饼干",
    H: "I like eating cookies.",
    I: "我喜欢吃饼干。"
}, {
    B: "stocking",
    C: "['stɒkɪŋ]",
    D: "n.长袜",
    E: "sto+c+king",
    F: "sto石头(谐音)+c耳朵(编码)+king国王(熟词)",
    G: "石头和耳朵在国王的长袜里",
    H: "I like wearing stockings.",
    I: "我喜欢穿长袜。"
}, {
    B: "wire",
    C: "['waɪə(r)]",
    D: "n.电线",
    E: "wine",
    F: "wine酒",
    G: "喝了酒别去修电线",
    H: "He twisted the wire into a U shape.",
    I: "他把金属丝拗成了一个U字形。"
}, {
    B: "cable",
    C: "['keɪbl]",
    D: "n.电缆",
    E: "ca+b+le",
    F: "ca擦(拼音)+b6(象形)+le了(拼音)",
    G: "电缆被擦6遍了",
    H: "A thin cable carries the signal to a computer.",
    I: "一根细电缆将信号传送给一台计算机。"
}, {
    B: "receptionist",
    C: "[rɪ'sepʃənɪst]",
    D: "n.接待员",
    E: "reception+i+st",
    F: "reception接待(熟词)+i爱(编码)+st石头(拼音)",
    G: "这个接待员爱吃石头",
    H: "I want to be a receptionist when I grow up.",
    I: "我长大后想做一名接待员。"
}, {
    B: "practical",
    C: "['præktɪkl]",
    D: "adj.有用的",
    E: "pr+act+i+cal",
    F: "pr仆人(拼音)+act行动(熟词)+i我(熟词I)+cal(l)打电话(熟词)",
    G: "仆人行动时给我打电话是有用的",
    H: "My father wants to buy a practical car.",
    I: "我父亲想买一辆实用小汽车。"
}, {
    B: "wallet",
    C: "['wɒlɪt]",
    D: "n.钱包",
    E: "wa+ll+et",
    F: "wa娃(拼音)+ll11(象形)+et外星人(编码)",
    G: "女娃拿走了11个外星人的钱包",
    H: "He picked up a wallet.",
    I: "他拾到一个钱包。"
}, {
    B: "file",
    C: "[faɪl]",
    D: "n.档案",
    E: "fire",
    F: "fire火",
    G: "大火把档案烧毁了",
    H: "I looked your address up in the personnel file.",
    I: "我在人事档案里找到了你的地址。"
}, {
    B: "feather",
    C: "[ˈfeðə(r)]",
    D: "n.羽毛",
    E: "weather",
    F: "weather天气",
    G: "天气不好鸟的羽毛都湿了",
    H: "It's a peacock feather.",
    I: "这是一根孔雀羽毛。"
}, {
    B: "product",
    C: "['prɒdʌkt]",
    D: "n.产品，制品",
    E: "pro+du+ct",
    F: "pro飘柔(拼音)+du毒(拼音)+ctCT(编码)",
    G: "飘柔的产品毒死了做CT的人",
    H: "The new products sell well.",
    I: "新产品卖得很好。"
}, {
    B: "album",
    C: "['ælbəm]",
    D: "n.相册，影辑",
    E: "al+bum",
    F: "al(l)所有的(熟词)+bum不卖(拼音)",
    G: "所有的店都不卖专辑和相册",
    H: "He stuck her photos in the album.",
    I: "他把她的相片全都贴在了相册里。"
}, {
    B: "punctuation",
    C: "[ˌpʌŋktʃuˈeɪʃn]",
    D: "n.标点符号",
    E: "pun+ctu+ation",
    F: "pun胖(谐音)+ctu赤兔(拼音)+ation爱神(谐音)",
    G: "胖赤兔发现爱神的作文没标点",
    H: "He was known for his poor grammar and punctuation.",
    I: "他不通语法和乱用标点是出了名的。"
}, {
    B: "nowhere",
    C: "['nəʊhweə]",
    D: "adv.哪里都不，无处",
    E: "no+where",
    F: "no不+where哪里",
    G: "哪里都不如广州美",
    H: "These young people have nowhere to go.",
    I: "这些年轻人无处可去。"
}, {
    B: "object",
    C: "['ɒbdʒekt]",
    D: "vi.反对，拒绝；n.目标，物体",
    E: "ob+jec+t",
    F: "ob欧巴(拼音)+jec杰克(谐音)+t伞(编码)",
    G: "反对欧巴给杰克打伞",
    H: "He made it his object in life to find the island.",
    I: "他把找到那座岛屿当成自己的人生目标。"
}, {
    B: "cream",
    C: "[kri:m]",
    D: "n.奶油，面霜",
    E: "dream",
    F: "dream梦想",
    G: "梦想吃到做成耳朵(c)状的奶油",
    H: "Do you like cream in your coffee?",
    I: "你的咖啡要加奶油吗？"
}, {
    B: "medium",
    C: "['mi:dɪəm]",
    D: "adj.中等的，中号的；n.媒介，手段，方法",
    E: "me+diu+m",
    F: "me我(熟词)+diu丢(拼音)+m山(编码)",
    G: "中等身材的我爱把垃圾丢到山里",
    H: "I would class my garden as medium in size.",
    I: "我的花园只能算是中等大小。"
}, {
    B: "glue",
    C: "[glu:]",
    D: "n.胶水，胶；vt.粘贴，粘合",
    E: "blue",
    F: "blue蓝色",
    G: "哥哥(g)用胶水粘蓝色的窗花",
    H: "This glue makes a good firm bond.",
    I: "这种胶水粘得很结实。"
}, {
    B: "delete",
    C: "[dɪ'lɪ:t]",
    D: "vt.删除，删去",
    E: "de+le+te",
    F: "de得+le乐+te特",
    G: "得到可乐配方后特务删除了记录",
    H: "His name will be deleted from the list.",
    I: "将会把他的名字从名单上删除。"
}, {
    B: "yogurt",
    C: "['jəʊgət]",
    D: "n.酸奶，酸乳酪",
    E: "yo+gu+rt",
    F: "yo哟+gu古+rt人头",
    G: "哟！古代的人头上放着酸奶",
    H: "This yogurt is past its sell-by date.",
    I: "酸奶已经过期了。"
}, {
    B: "uncomfortable",
    C: "[ʌn'kʌmftəbl]",
    D: "adj.不安的，不舒服的，不自在的",
    E: "un+comfortable",
    F: "un不(词缀)+comfortable舒服的(熟词)",
    G: "不舒服的时候就会感觉很不安",
    H: "I sometimes feel uncomfortable after eating in the evening.",
    I: "我晚上吃完饭有时会觉得不舒服。"
}, {
    B: "fascinating",
    C: "['fæsɪneɪtɪŋ]",
    D: "adj.迷人的，吸引人的",
    E: "fas+ci+na+ting",
    F: "fas发烧+ci刺+na那+ting停",
    G: "发烧的刺客在那停下等迷人的美女",
    H: "The style of the book is fascinating.",
    I: "这本书的风格很吸引人。"
}, {
    B: "thankful",
    C: "['θæŋkfl]",
    D: "adj.感谢的，感激的",
    E: "thank+ful",
    F: "thank感谢(熟词)+ful俘虏(拼音)",
    G: "感谢俘虏的帮助",
    H: "We should be thankful.",
    I: "我们应该感恩的。"
}, {
    B: "lantern",
    C: "['læntən]",
    D: "n.灯笼，提灯",
    E: "lan+tern",
    F: "lan烂(拼音)+tern疼(谐音)",
    G: "灯笼烂了好心疼",
    H: "I made a lantern.",
    I: "我做了个灯笼。"
}, {
    B: "musical",
    C: "['mju:zɪk(ə)l]",
    D: "adj.音乐的，悦耳的",
    E: "musi+cal",
    F: "musi牧师(拼音)+cal(l)打电话(熟词)",
    G: "牧师打电话的声音很悦耳",
    H: "She has a musical voice.",
    I: "她的声音很悦耳。"
}, {
    B: "Korea",
    C: "[kə'rɪə]",
    D: "n.韩国，朝鲜",
    E: "Ko+re+a",
    F: "Ko击倒(编码)+re热(拼音)+a苹果(编码)",
    G: "在韩国被击倒后要吃热苹果",
    H: "She is from Korea.",
    I: "她来自韩国。"
}, {
    B: "merry",
    C: "['merɪ]",
    D: "adj.高兴的，愉快的",
    E: "me+rr+y",
    F: "me我(熟词)+rr两棵草(编码)+y衣叉(编码)",
    G: "我在两棵草下找到了衣叉太高兴了",
    H: "Merry Christmas, everyone.",
    I: "祝大家圣诞快乐！"
}, {
    B: "triangle",
    C: "['traɪæŋgl]",
    D: "n.三角形",
    E: "tr+i+angle",
    F: "tr土人(拼音)+i蜡烛(编码)+angle角(熟词)",
    G: "土人用蜡烛摆出一个三角形",
    H: "He drew a triangle on the paper.",
    I: "他在纸上画了个三角形。"
}, {
    B: "skateboard",
    C: "['skeɪtbɔ:d]",
    D: "n.滑板",
    E: "skate+board",
    F: "skate滑冰+board板",
    G: "滑冰的时候冲上滑板",
    H: "I want to buy a skateboard.",
    I: "我想买一个滑板。"
}, {
    B: "strike",
    C: "[straɪk]",
    D: "vt./vi.罢工，打，撞击；n.罢工",
    E: "st+ri+ke",
    F: "st杀头+ri日+ke客",
    G: "杀头那日刺客都罢工了",
    H: "Staff at the hospital went on strike.",
    I: "医院的员工罢工了。"
}, {
    B: "court",
    C: "[kɔ:t]",
    D: "n.法院，法庭，朝廷",
    E: "cou+rt",
    F: "cou凑+rt软糖",
    G: "凑够软糖才能上法院",
    H: "She will appear in court tomorrow.",
    I: "她明天出庭。"
}, {
    B: "Korean",
    C: "[kə'rɪən]",
    D: "n.韩国人，朝鲜人，朝鲜/韩语；adj.韩国（人/语）的，朝鲜（人/语）的",
    E: "Ko+rean",
    F: "Ko击倒(编码)+rean瑞恩(谐音)",
    G: "被击倒在地的瑞恩是韩国人",
    H: "I love Korean food.",
    I: "我喜欢吃韩国菜了"
}, {
    B: "decoration",
    C: "[dekə'reɪʃ(ə)n]",
    D: "n.装饰",
    E: "decorat+i+on",
    F: "decorat(e)装饰(熟词)+i蜡烛(编码)+on上面(熟词)",
    G: "最美的装饰是把蜡烛放墙上",
    H: "The decorations on the wall are beautiful.",
    I: "墙上的装饰很漂亮。"
}, {
    B: "waist",
    C: "[weɪst]",
    D: "n.腰，腰部",
    E: "wai+st",
    F: "wai外+st石头",
    G: "他的腰被门外的石头砸了",
    H: "Her waist is very good.",
    I: "她的腰很好。"
}, {
    B: "reform",
    C: "[rɪ'fɔ:m]",
    D: "n.改革，改造，改良；vt./vi.改革，革新",
    E: "re+form",
    F: "re重新(词缀)+form表格(熟词)",
    G: "重新看表格上的改革方案",
    H: "The law needs to be reformed.",
    I: "法律需要进行改革。"
}, {
    B: "spit",
    C: "[spɪt]",
    D: "vi.吐口水，吐痰",
    E: "sp+it",
    F: "sp赛跑(拼音)+it它(熟词)",
    G: "赛跑的时候它会吐口水",
    H: "It's bad to spit.",
    I: "吐痰是不好的行为。"
}, {
    B: "media",
    C: "['mi:dɪə]",
    D: "n.媒体，传播媒介",
    E: "me+di+a",
    F: "me我(熟词)+di地(拼音)+a苹果(编码)",
    G: "媒体拍摄我在菜地种苹果树的过程",
    H: "The problem has been discussed in the media.",
    I: "这个问题已经有媒体讨论过了。"
}, {
    B: "effective",
    C: "[ɪ'fektɪv]",
    D: "adj.有效的",
    E: "effect+i+ve",
    F: "effect影响(熟词)+i蜡烛(编码)+ve维E(编码)",
    G: "这影响了蜡烛和维E的有效性",
    H: "The order was no longer effective.",
    I: "这项命令已不再生效。"
}, {
    B: "properly",
    C: "['prɒpəlɪ]",
    D: "adv.适当地，恰当地",
    E: "proper+ly",
    F: "proper适当的(熟词)+ly理由(拼音)",
    G: "请适当地解释一下理由吧",
    H: "Explain it properly in English, please.",
    I: "请用英语把它恰当地解释一下。"
}, {
    B: "moral",
    C: "['mɒr(ə)l]",
    D: "n.品德，道德，寓意；adj.道德的，品行端正的",
    E: "mor+al",
    F: "mor末日(拼音)+al阿狸(拼音)",
    G: "末日来临时阿狸表现出高尚的品德",
    H: "This is a moral problem.",
    I: "这是道德层面的问题。"
}, {
    B: "significance",
    C: "[sɪg'nɪfɪk(ə)ns]",
    D: "n.重要性，意义，意思",
    E: "sign+if I can+ce",
    F: "sign标记(熟词)+ifIcan如果我能(熟词)+ce厕(拼音)",
    G: "重要的是做标记时如果我能上厕所就好了",
    H: "What is the significance of this speech?",
    I: "这个讲座有什么意义?"
}, {
    B: "straw",
    C: "[strɔ:]",
    D: "n.稻草，吸管；adj.无价值的",
    E: "st+raw",
    F: "st石头(拼音)+raw未加工的(熟词)",
    G: "稻草上的石头是未加工过的",
    H: "Children enjoy drinking juice through a straw.",
    I: "孩子喜欢用吸管喝果汁。"
}, {
    B: "classic",
    C: "['klæsɪk]",
    D: "adj.经典的，最优秀的；n.名著，经典著作",
    E: "class+ic",
    F: "class班+ic(e)冰",
    G: "班长爱看电影中船撞冰山的经典桥段",
    H: "The piece of music is classic.",
    I: "这首歌很经典。"
}, {
    B: "elect",
    C: "[ɪ'lekt]",
    D: "adj.选出的，当选的，卓越的",
    E: "ele+ct",
    F: "ele饿了+ct餐厅",
    G: "饿了去餐厅选出好吃的",
    H: "I elect him my monitor.",
    I: "我选他当班长。"
}, {
    B: "professor",
    C: "[prə'fesə]",
    D: "n.教授",
    E: "pro+fe+ss+or",
    F: "pro飘柔(拼音)+fe肥(谐音)+ss两个美女(编码)+or偶人(拼音)",
    G: "教授用完飘柔把肥胖的两个美女和偶人熏死了",
    H: "His grand-father was a professor.",
    I: "他的爷爷曾是一名教授。"
}, {
    B: "reasonable",
    C: "['rɪ:znəbl]",
    D: "adj.合情合理的，讲道理的，公道的",
    E: "reason+able",
    F: "reason理由+able能",
    G: "合情合理的理由才能使人信服",
    H: "His demand is reasonable.",
    I: "他的要求合情合理。"
}, {
    B: "retire",
    C: "[rɪ'taɪə]",
    D: "vi.退休，离开",
    E: "re+tire",
    F: "re再(词缀)+tire疲劳(熟词)",
    G: "再这样疲劳我就退休",
    H: "She retires from the company.",
    I: "她离开公司了。"
}, {
    B: "horrible",
    C: "[ˈhɒrəb(ə)l]",
    D: "adj.可怕的，极讨厌的",
    E: "ho+rr+ible",
    F: "ho猴(拼音)+rr两根小草(编码)+ible阿伯(谐音)",
    G: "猴子拿着两根草，阿伯觉得很可怕",
    H: "Loneliness can be horrible, but it need not remain that way.",
    I: "孤独可能会很可怕，但也并非一定如此。"
}, {
    B: "interrupt",
    C: "[ˌɪntə'rʌpt]",
    D: "vt./vi.打断...讲话，打岔，暂时中断或中止",
    E: "inter+ru+pt",
    F: "inter英特(谐音)+ru儒(拼音)+pt葡萄(拼音)",
    G: "英特打断侏儒时他正在吃葡萄",
    H: "He tried to speak, but she interrupted him.",
    I: "他想说话，但被她打断了。"
}, {
    B: "twin",
    C: "[twɪn]",
    D: "n.双胞胎之一；adj.成对的，双重的，孪生之一的；vt.使相连",
    E: "t+win",
    F: "t特(编码)+win赢(熟词)",
    G: "特务赢了双胞胎中的",
    H: "Sarah was looking after the twins.",
    I: "萨拉当时正在照管那对双胞胎。"
}, {
    B: "forehead",
    C: "['fɔ:rɪd]",
    D: "n.额头",
    E: "fore+head",
    F: "fore在前面+head头",
    G: "前面的头部就是额头",
    H: "He touched the boy's forehead. It was burning hot.",
    I: "他摸了摸男孩的额头，烧得烫手。"
}, {
    B: "altogether",
    C: "[ˌɔ:ltə'geðə(r)]",
    D: "adv.完全，全部，总之",
    E: "al+together",
    F: "al阿狸(拼音)+together一起(熟词)",
    G: "完全不想和阿狸坐一起",
    H: "Altogether we caught ten golden monkeys.",
    I: "我们一共捉到10只金丝猴。"
}, {
    B: "arrow",
    C: "['ærəʊ]",
    D: "n.箭，箭头",
    E: "ar+row",
    F: "ar矮人(拼音)+row一排(熟词)",
    G: "矮人背着一排弓箭",
    H: "The pickerel would occasionally arrow the surface.",
    I: "小狗鱼偶尔会箭一般地跃出水面。"
}, {
    B: "unable",
    C: "[ʌn'eɪbl]",
    D: "adj.不能…的，无法…的",
    E: "un+able",
    F: "un不(词缀)+able能(熟词)",
    G: "他是不能动弹",
    H: "I am simply unable to call to mind his name.",
    I: "我实在想不起来他的名字了。"
}, {
    B: "means",
    C: "[mi:nz]",
    D: "n.方法，手段",
    E: "me+an+s",
    F: "me我(熟词)+an一(熟词)+s美女(编码)",
    G: "我有一个追美女的方法",
    H: "Is there any means of contacting him?",
    I: "有没有什么办法和他取得联系？"
}, {
    B: "fairly",
    C: "['feəlɪ]",
    D: "adv.公平地，相当地",
    E: "fair+ly",
    F: "fair公平的(熟词)+ly老爷(拼音)",
    G: "公平的老爷公平地分家产",
    H: "He has always treated me very fairly.",
    I: "他待我一直很公平。"
}, {
    B: "Italy",
    C: "['ɪtəlɪ]",
    D: "n.意大利",
    E: "I+ta+ly",
    F: "I我(熟词I)+ta他(拼音)+ly老爷(拼音)",
    G: "我和他的老爷在意大利",
    H: "He was born in Italy.",
    I: "他出生于意大利。"
}, {
    B: "angle",
    C: "['æŋg(ə)l]",
    D: "n.角，角度",
    E: "an+gl+e",
    F: "an一(熟词)+gl91(象形)+e鹅(编码)",
    G: "一个91度的角是鹅画的",
    H: "The boat is now leaning at a 30 degree angle.",
    I: "这条船现在正以30度角倾斜着。"
}, {
    B: "differ",
    C: "['dɪfə]",
    D: "vt.使…不同，使…相异",
    E: "di+ff+er",
    F: "di弟(拼音)+ff两把斧头(编码)+er儿(拼音)",
    G: "弟弟送了两把不同的斧头给儿子",
    H: "These two regions differ greatly in climate.",
    I: "这两个地区气候差异很大。"
}, {
    B: "Alaska",
    C: "[əˈlæskə]",
    D: "n.阿拉斯加",
    E: "Al+ask+a",
    F: "Al(l)所有+ask问+a一个",
    G: "所有人都为了一个阿拉斯加去问每个路过的人",
    H: "Once they went camping with friends who had moved to Alaska.",
    I: "有一次，他们和几个搬到阿拉斯加的朋友去野营。"
}, {
    B: "tram",
    C: "[træm]",
    D: "n.（有轨）电车",
    E: "tr+am",
    F: "tr土人(拼音)+am是(熟词)",
    G: "土人是有轨电车的司机",
    H: "I don't know which tram I should get now.",
    I: "我不知道现在应该乘哪辆电车。"
}, {
    B: "apparently",
    C: "[ə'pærəntlɪ]",
    D: "adv.显然地，显而易见地",
    E: "ap+parent+ly",
    F: "ap阿婆(拼音)+parent父母(熟词)+ly老爷(拼音)",
    G: "显然是阿婆的父母带走了老爷",
    H: "Apparently this is only an illusion.",
    I: "显然这只是一个错觉。"
}, {
    B: "bakery",
    C: "['beɪk(ə)rɪ]",
    D: "n.面包房，面包厂",
    E: "bake+ry",
    F: "bake烤(熟词)+ry人妖(拼音)",
    G: "在面包房里烤面包的是人妖",
    H: "A bakery is a place where bread and cakes are made.",
    I: "面包房是制作面包和蛋糕的地方。"
}, {
    B: "hire",
    C: "['haɪə]",
    D: "vt./n.雇用，租用",
    E: "fire",
    F: "fire火",
    G: "雇佣的杀手放火烧了椅子(h)",
    H: "We have hired four lawyers.",
    I: "我们已经雇佣了4名律师。"
}, {
    B: "seagull",
    C: "['si:gʌl]",
    D: "n.海鸥",
    E: "sea+gu+ll",
    F: "sea海(熟词)+gu骨(拼音)+ll11(象形)",
    G: "海鸥扔进海里的骨头有11根",
    H: "Seagulls live near the sea.",
    I: "海鸥生活在近海的地方。"
}, {
    B: "punishment",
    C: "['pʌnɪʃm(ə)nt]",
    D: "n.惩罚，处罚",
    E: "punish+ment",
    F: "punish惩罚(熟词)+ment门徒(拼音)",
    G: "惩罚门徒不守门规",
    H: "What is the punishment for murder?",
    I: "谋杀应处以什么刑罚？"
}, {
    B: "justice",
    C: "['dʒʌstɪs]",
    D: "n.正义，公平",
    E: "just+ice",
    F: "just仅仅+ice冰",
    G: "仅仅用冰块就能维持正义",
    H: "We must hold to the principles of justice.",
    I: "我们必须信守正义的原则。"
}, {
    B: "grasp",
    C: "[grɑ:sp]",
    D: "vt./n.抓住，掌握，领会",
    E: "grass",
    F: "grass草",
    G: "穿着皮(p)鞋的他一把抓住草",
    H: "If you grasp this rope, I will pull you up.",
    I: "如果你抓住这根绳子，我可把你拉起来。"
}, {
    B: "thoughtful",
    C: "['θɔ:tfʊl]",
    D: "adj.深思的，关切的，体贴的",
    E: "thought+ful",
    F: "thought想法(熟词)+ful俘虏(拼音)",
    G: "有想法的俘虏在深思",
    H: "She had always been silent and thoughtful.",
    I: "她一直是个沉静和深思的孩子。"
}, {
    B: "exact",
    C: "[ɪg'zækt]",
    D: "adj.准确的，精确的",
    E: "ex+act",
    F: "ex前夫+act行动",
    G: "前夫行动的时间很准确",
    H: "I don't remember the exact words.",
    I: "我不记得确切的话语。"
}, {
    B: "cutting",
    C: "['kʌtɪŋ]",
    D: "n.剪纸，剪枝，剪报",
    E: "cut+ting",
    F: "cut剪(熟词)+ting亭(拼音)",
    G: "把剪纸贴在亭子里",
    H: "The notice boards crowded with newspaper cuttings.",
    I: "布告栏贴满了剪报。"
}, {
    B: "somatic",
    C: "[səʊ'mætɪk]",
    D: "adj.躯体的，肉体的",
    E: "so+ma+tic",
    F: "so50(象形)+ma马(拼音)+tic体操(拼音)",
    G: "50只马通过做体操锻炼躯体的灵活性",
    H: "The hurt is just somatic. The hurt is just somatic.",
    I: "这种伤害只是肉体上的。"
}, {
    B: "correction",
    C: "[kə'rekʃ(ə)n]",
    D: "n.改正，纠正，修正",
    E: "correct+i+on",
    F: "correct改正+i我(I)+on上面",
    G: "改正后的答案被我写在纸上了",
    H: "I feel it necessary to make a correction.",
    I: "我认为有必要修正一下。"
}, {
    B: "expectation",
    C: "[ˌekspekˈteɪʃn]",
    D: "n.期待，预料，期望",
    E: "expect+ation",
    F: "expect期待(熟词)+ation爱神(谐音)",
    G: "很期待爱神的到来",
    H: 'Write the figure "7" on the board.',
    I: "把数字7写在黑板上。"
}, {
    B: "seize",
    C: "[si:z]",
    D: "vt.抓住，捉住，夺",
    E: "se+i+ze",
    F: "se色(拼音)+i我(熟词I)+ze责(拼音)",
    G: "抓住色狼后我不停地责备他",
    H: "She tried to seize the gun from him.",
    I: "她试图夺他的枪。"
}, {
    B: "freezing",
    C: "['fri:zɪŋ]",
    D: "adj.严寒的，冰冻的",
    E: "freez+ing",
    F: "freez(e)结冰(熟词)+ing鹰(谐音)",
    G: "严寒的天气到处都结冰冻死了老鹰",
    H: "The cinema was freezing.",
    I: "电影院太冷了。"
}, {
    B: "rainfall",
    C: "['reɪnfɔ:l]",
    D: "n.降雨",
    E: "rain+fall",
    F: "rain雨+fall落",
    G: "雨水落下形成降雨",
    H: "Rainfall has been below average.",
    I: "降雨量低于平均水平。"
}, {
    B: "innocent",
    C: "['ɪnəsnt]",
    D: "adj.清白的，无罪的，天真的",
    E: "in+no+cent",
    F: "in里面+no没有+cent一分钱",
    G: "兜里没有一分钱的人是清白的",
    H: "The court found her innocent of the crime.",
    I: "法庭判她无罪。"
}, {
    B: "dynamic",
    C: "[daɪ'næmɪk]",
    D: "adj.有活力的，动力的",
    E: "dy+na+mic",
    F: "dy大姨(拼音)+na拿(拼音)+mic麦克风(熟词)",
    G: "大姨拿麦克风又唱又跳好有活力",
    H: "South Asia continues to be the most dynamic economic region in the world.",
    I: "南亚仍然是世界上经济最活跃的地区。"
}, {
    B: "reproduce",
    C: "[,ri:prə'dju:s]",
    D: "vt.复制，再现的形象或声音",
    E: "re+produce",
    F: "re再(词缀)+produce生产(熟词)",
    G: "复制就是再次生产同样的产品",
    H: "She took the car without permission.",
    I: "她未经许可擅自使用了汽车。"
}, {
    B: "shilling",
    C: "['ʃɪlɪŋ]",
    D: "n.先令",
    E: "shi+ll+ing",
    F: "shi石(拼音)+ll11(象形)+ing鹰(谐音)",
    G: "石头上的11先令被老鹰吃了",
    H: "You could get a pint of beer for a shilling.",
    I: "花一先令就可以买到一品脱啤酒。"
}, {
    B: "scraper",
    C: "['skreɪpə(r)]",
    D: "n.刮刀，刮削器",
    E: "scr+ap+er",
    F: "scr四川人+ap阿婆+er儿",
    G: "四川人给阿婆的儿子买了刮刀",
    H: "We removed the loose paint with a scraper.",
    I: "我们用刮刀将剥起的漆铲去。"
}, {
    B: "cattle",
    C: "['kætl]",
    D: "n.牛（总称）",
    E: "cat+tle",
    F: "cat猫(熟词)+tle踢了(拼音)",
    G: "牛把猫踢了",
    H: "He has twenty head of cattle on the farm.",
    I: "他在农场养了20头牛。"
}, {
    B: "brake",
    C: "[breɪk]",
    D: "n.刹车，制动器；vt./vi.刹住（车）",
    E: "bra+ke",
    F: "bra胸罩(熟词)+ke客(拼音)",
    G: "从天而降的胸罩让客人刹车了",
    H: "He suddenly  stepped on the brake and the car stopped at once.",
    I: "他突然间踩下了制动踏板，车子一下子就停了下来。"
}, {
    B: "woollen",
    C: "['wʊlən]",
    D: "adj.纯毛的，毛纺的",
    E: "wool+len",
    F: "wool羊毛(熟词)+len冷(拼音)",
    G: "穿了纯毛的羊毛衣还觉得冷",
    H: "She likes to wear woolen socks in winter.",
    I: "冬天她喜欢穿羊毛袜。"
}, {
    B: "fate",
    C: "[feɪt]",
    D: "n.命运",
    E: "late",
    F: "late迟到",
    G: "迟到会改变你的命运",
    H: "Her fate rests with her father.",
    I: "她的命运全在父亲的手中。"
}, {
    B: "objection",
    C: "[əb'dʒekʃ(ə)n]",
    D: "n.异议，反对，拒绝的理由",
    E: "ob+jec+tion",
    F: "ob欧巴(拼音)+jec杰克(谐音)+tion婶(谐音)",
    G: "欧巴对杰克的婶婶有异议",
    H: "I no longer have any objection to your going to see her.",
    I: "我不会再因为你去见她而不高兴。"
}, {
    B: "flour",
    C: "['flaʊə]",
    D: "n.面粉",
    E: "fl+our",
    F: "fl俘虏(拼音)+our我们的(熟词)",
    G: "俘虏偷吃了我们的面粉",
    H: "He added some flour to thicken the soup.",
    I: "他加了一些面粉使汤浓些。"
}, {
    B: "drawback",
    C: "['drɔ:bæk]",
    D: "n.缺点，不利条件",
    E: "draw+back",
    F: "draw画+back后面",
    G: "画到后面的时候才发现画中的缺点",
    H: "He felt the apartment's only drawback was that it was too small.",
    I: "他觉得这个公寓唯一的缺点就是太小了。"
}, {
    B: "fade",
    C: "[feɪd]",
    D: "vi.褪色，凋谢，逐渐消失",
    E: "fa+de",
    F: "fade发的",
    G: "发的红旗褪色了",
    H: "The colour in this material does not fade.",
    I: "这布料不褪色。"
}, {
    B: "bead",
    C: "[bi:d]",
    D: "n.小珠子，滴",
    E: "head",
    F: "head头",
    G: "头上有6(b)颗小珠子",
    H: "He wiped away the beads of sweat on his forehead.",
    I: "他擦去了额头上的汗珠。"
}, {
    B: "straightforward",
    C: "[streɪt'fɔ:wəd]",
    D: "adj.简单的，直接的，坦率的",
    E: "straight+forward",
    F: "straight直的+forward向前",
    G: "直线向前才是最简单的办法",
    H: "The instructions are fairly straightforward.",
    I: "这说明相当简单。"
}, {
    B: "embryo",
    C: "['embrɪəʊ]",
    D: "n.胚胎，胚，萌芽时期",
    E: "em+br+yo",
    F: "em恶魔+br病人+yo有",
    G: "恶魔发现病人肚里有胚胎",
    H: "The department's plans for enlargement are still in embryo.",
    I: "部门扩展的计划仍处于萌芽时期。"
}, {
    B: "adore",
    C: "[ə'dɔ:(r)]",
    D: "vi.崇拜，爱戴",
    E: "ado+re",
    F: "ado阿斗+re惹",
    G: "阿斗英勇救人惹人崇拜",
    H: "We adore them for their generosity.",
    I: "我们钦佩他们的慷慨。"
}, {
    B: "stainless",
    C: "['steɪnləs]",
    D: "adj.不锈的，无锈的，没有污点的",
    E: "stain+less",
    F: "stain污点+less较少的",
    G: "不锈钢餐具的污点比较少",
    H: "I have a set of stainless knives and forks.",
    I: "我有一套不锈钢刀叉。"
}, {
    B: "abrupt",
    C: "[əˈbrʌpt]",
    D: "adj.突然的",
    E: "ab+ru+pt",
    F: "ab阿伯+ru入+pt葡萄",
    G: "阿伯突然的进入了葡萄园",
    H: "I don't know the cause of his abrupt leave.",
    I: "我不知道他突然离去的原因。"
}, {
    B: "merrily",
    C: "['merəlɪ]",
    D: "adv.高兴地，愉快地",
    E: "merr+i+ly",
    F: "merr(y)高兴的(熟词)+i我(熟词I)+ly梨(谐音)",
    G: "高兴时我爱吃梨",
    H: "Birds were singing merrily.",
    I: "鸟儿在快活地歌唱。"
}, {
    B: "greengrocer",
    C: "['gri:ngrəʊsə(r)]",
    D: "n.蔬菜水果商，（pl）蔬菜水果店",
    E: "green+grocer",
    F: "green绿色+grocer食品商",
    G: "出售绿色蔬果的食品商就是蔬菜水果商",
    H: "We often go to the greengrocer.",
    I: "我们经常光顾这家蔬菜水果店。"
}, {
    B: "courtroom",
    C: "['kɔ:tru:m]",
    D: "n.审判室，法庭",
    E: "court+room",
    F: "court法院+room房间",
    G: "法院把一个房间改建成审判室",
    H: "The courtroom was in an uproar.",
    I: "法庭上一片哗然。"
}, {
    B: "occasionally",
    C: "[ə'keɪʒnəlɪ]",
    D: "adv.不时地，偶然地",
    E: "occasion+al+ly",
    F: "occasion场合(熟词)+al阿狸(拼音)+ly梨(谐音)",
    G: "不时地在公共场合看到阿狸吃梨",
    H: "I enjoy the occasional glass of wine.",
    I: "我喜欢偶尔喝一杯葡萄酒。"
}, {
    B: "helicopter",
    C: "['helɪkɒptə(r)]",
    D: "n.直升机",
    E: "heli+co+pt+er",
    F: "heli河里(拼音)+co可乐(熟词coke)+pt葡萄(拼音)+er儿(拼音)",
    G: "河边的可乐和葡萄汁被儿子用直升机运走了",
    H: "He flew helicopters during the Gulf War.",
    I: "海湾战争中他开直升机。"
}, {
    B: "tetrahedron",
    C: "[,tetrə'hi:drən]",
    D: "n.四面体",
    E: "te+tr+ahed+ron",
    F: "te特(拼音)+tr土人(拼音)+ahe(a)d在前面(熟词)+ron容(拼音)",
    G: "特务走在土人前面容易撞上四面体",
    H: "This is a toy in the shape of a tetrahedron.",
    I: "这是个四面体的玩具。"
}, {
    B: "invaluable",
    C: "[ɪn'væljuəbl]",
    D: "adj.极宝贵的，无价的",
    E: "in+valuable",
    F: "in无(前缀)+valuable有价值的(熟词)",
    G: "极宝贵的东西是无法估计价值的",
    H: "The painting is invaluable.",
    I: "这幅画是非常珍贵的。"
}, {
    B: "refrigerator",
    C: "[rɪ'frɪdʒəreɪtə]",
    D: "n.冰箱",
    E: "re+frige+rat+or",
    F: "re热(拼音)+fri(d)ge冰箱(熟词)+rat老鼠(熟词)+or偶人(拼音)",
    G: "热冰箱里装着老鼠和偶人",
    H: "There are plenty of sodas in the refrigerator.",
    I: "冰箱里有很多碳酸饮料。"
}, {
    B: "extension",
    C: "[ɪks'tenʃn]",
    D: "n.电话分机，延伸，扩大",
    E: "ex+ten+sion",
    F: "ex前夫(熟词)+ten十(熟词)+sion神(谐音)",
    G: "前夫毁了十个神的电话分机",
    H: "She can get me on extension 308.",
    I: "她打308分机就能联系到我。"
}, {
    B: "adaptation",
    C: "[ædæp'teɪʃn]",
    D: "n.适应（性），改编本",
    E: "adapt+ation",
    F: "adapt适应(熟词)+ation爱神(谐音)",
    G: "我适应了爱神的再次来临",
    H: "He made a quick adaptation to the new environment.",
    I: "他很快适应了新的环境。"
}, {
    B: "outcome",
    C: "['aʊtkʌm]",
    D: "n.结果，结局，后果",
    E: "out+come",
    F: "out出局+come来",
    G: "出局的他来看比赛的最终结果",
    H: "The outcome was still in doubt.",
    I: "结果仍不确定。"
}, {
    B: "upper",
    C: "['ʌpə(r)]",
    D: "adj.上面的，上边的；n.鞋帮",
    E: "up+per",
    F: "up在上面+per每",
    G: "在上面的每个人都在喊累",
    H: "Passengers may smoke only on the upper deck of the bus.",
    I: "乘客只能在公共汽车的上层吸烟。"
}, {
    B: "nail",
    C: "[neɪl]",
    D: "n.钉子，指甲",
    E: "tail",
    F: "tail尾巴",
    G: "狗尾巴撞到门(n)上的钉子",
    H: "He hammered the nail into the branch.",
    I: "他把钉子钉到了树枝上。"
}, {
    B: "disk",
    C: "[dɪsk]",
    D: "n.磁盘",
    E: "desk",
    F: "desk桌子",
    G: "我(i)看到桌子上有张磁盘",
    H: `The program takes up 2.5 megabytes of disk space.
`,
    I: "这个程序占用2.5兆的磁盘空间。"
}, {
    B: "bathtub",
    C: "['bɑ:θtʌb]",
    D: "n.浴缸，澡盆",
    E: "bath+tub",
    F: "bath洗澡+tub澡盆",
    G: "宝宝洗澡的澡盆放浴缸了",
    H: "She pulled out the plug of the bathtub.",
    I: "她拔下浴缸的塞子。"
}, {
    B: "heartily",
    C: "['hɑ:tɪlɪ]",
    D: "adv.尽情地，热心地，痛快地",
    E: "heart+i+ly",
    F: "heart心脏(熟词)+i我(熟词I)+ly老爷(拼音)",
    G: "心脏在我老爷身上尽情地跳动",
    H: "He laughed heartily.",
    I: "他开怀大笑。"
}, {
    B: "overlook",
    C: "[ˌəʊvə'lʊk]",
    D: "vt.俯视，忽视，不理会",
    E: "over+look",
    F: "over在…上+look看",
    G: "俯视就是站在上面往下看",
    H: "We should not overlook this possibility.",
    I: "我们不应该忽视这个可能性。"
}, {
    B: "archaeologist",
    C: "[ˌɑ:kiˈɒlədʒɪst]",
    D: "n.考古学家",
    E: "archaeo+logist",
    F: "archaeo考古+logist学家",
    G: "考古学家被困在墓穴中",
    H: "As an archaeologist my work is rooted in the past.",
    I: "作为一名考古学家，我的工作是基于历史的。"
}, {
    B: "excavate",
    C: "['ekskəveɪt]",
    D: "vt.挖掘，发掘",
    E: "ex+cav+ate",
    F: "ex前夫+cav(e)洞穴+ate吃",
    G: "前夫在洞里吃挖掘出来的肉",
    H: "They plan to excavate a large hole.",
    I: "他们计划挖个大洞。"
}, {
    B: "regardless",
    C: "[rɪ'gɑ:dləs]",
    D: "adv.不管，不顾",
    E: "regard+less",
    F: "regard认为+less较少的",
    G: "不管怎样我都认为他分到的梨较少",
    H: "Get the money, regardless!",
    I: "不管怎样,拿钱再说!"
}, {
    B: "beast",
    C: "[bi:st]",
    D: "n.野兽",
    E: "b+east",
    F: "b6(象形)+east向东(熟词)",
    G: "6只野兽向东走去",
    H: `There are wild beasts in the mountains.
`,
    I: "山中有野兽。"
}, {
    B: "centimetre",
    C: "['sentɪmi:tə(r)]",
    D: "n.厘米",
    E: "cent+i+metre",
    F: "cent分+i我(I)+metre米",
    G: "身无分文的我住在一厘米大的盒子里",
    H: "One centimetre equals to 0.01 metre.",
    I: "一厘米等于0.01米。"
}, {
    B: "sharpen",
    C: "['ʃɑ:pən]",
    D: "vi./vt.尖锐，（使）锋利，清晰",
    E: "shar+pen",
    F: "shar杀人(拼音)+pen钢笔(熟词)",
    G: "能杀人的钢笔很尖锐",
    H: "He started to sharpen his knife.",
    I: "他开始磨刀。"
}, {
    B: "ample",
    C: "[ˈæmpl]",
    D: "adj.宽敞的，足够的",
    E: "apple",
    F: "apple苹果",
    G: "我在宽敞的房间里吃苹果",
    H: "Agriculture has developed rapidly , thus providing light industry with ample raw materials.",
    I: "农业迅速发展，从而为轻工业提供了充足的原料。"
}, {
    B: "worship",
    C: "['wə:ʃip]",
    D: "vt.崇拜；vi.做礼拜",
    E: "wor+ship",
    F: "wo我(拼音)+r叉(象形)+ship船(熟词)",
    G: "我叉着船去找崇拜的人",
    H: "I enjoy going to church and worshipping God.",
    I: "我喜欢去教堂做礼拜。"
}, {
    B: "Denmark",
    C: "['denma:k]",
    D: "n.丹麦（北欧国家）",
    E: "Den+mark",
    F: "Den等(拼音)+mark成绩(熟词)",
    G: "我在丹麦等成绩",
    H: "Denmark was his favorite European country.",
    I: "丹麦是他最喜欢的欧洲国家。"
}, {
    B: "Hollywood",
    C: "['hɔlɪwud]",
    D: "n.好莱坞，美国电影业",
    E: "Holly+wood",
    F: "Holly霍莉+wood木材",
    G: "霍莉在好莱坞卖木材",
    H: "But maybe we can get you to Hollywood.",
    I: "不过也许我们能帮你进入好莱坞。"
}, {
    B: "Cambodian",
    C: "[kæm'bəʊdɪən]",
    D: "n.柬埔寨人，柬埔寨语",
    E: "Cam+bodian",
    F: "Cam看(谐音)+bodian波点(拼音)",
    G: "柬埔寨人喜欢看有波点的服装",
    H: "The Cambodian issue is very definitely a side issue.",
    I: "柬埔寨问题肯定只是一个枝节问题。"
}, {
    B: "immigrate",
    C: "['ɪmɪgreɪt]",
    D: "vi.移入（外国定居）",
    E: "im+mi+gr+ate",
    F: "im姨母(谐音)+mi米(拼音)+gr国人(拼音)+ate吃(熟词)",
    G: "姨母和米国人吃完饭后移入外国定居了",
    H: "They plan to immigrate to Finland next year.",
    I: "他们计划明年移居芬兰。"
}, {
    B: "vice",
    C: "[vaɪs]",
    D: "n./adj.副职，代理",
    E: "rice",
    F: "rice米饭",
    G: "获胜(v)的副总统不爱吃米饭",
    H: "He becomes the new vice-captain.",
    I: "他成为新的副队长。"
}, {
    B: "nephew",
    C: "['nefju:]",
    D: "n.侄子，外甥",
    E: "ne+ph+ew",
    F: "ne哪(吒)+ph屁孩+ew俄文",
    G: "侄子教哪吒这个屁孩学俄文",
    H: "I am planning a 25th birthday party for my nephew.",
    I: "我在为侄子筹划他25岁的生日聚会。"
}, {
    B: "indicate",
    C: "['ɪndɪkeɪt]",
    D: "vt.暗示，指出，表明",
    E: "in+di+cate",
    F: "in里面(熟词)+di弟(拼音)+cate凯特(熟词Cate)",
    G: "暗示里面的弟弟爱上了凯特",
    H: "Surveys indicate that supporters of the treaty are still in the majority.",
    I: "调查表明，该条约的支持者仍然占大多数。"
}, {
    B: "luggage",
    C: "['lʌgɪdʒ]",
    D: "n.行李，（<美>baggage）",
    E: "lu+gg +age",
    F: "lu露(拼音)+gg99(象形)+age年龄(熟词)",
    G: "露露99岁高龄了还独自搬行李",
    H: "Leave your luggage in the hotel.",
    I: "将您的行李放在酒店。"
}, {
    B: "conductor",
    C: "[kən'dʌktə]",
    D: "n.售票员",
    E: "conduct+or",
    F: "conduct引导(熟词)+or偶人(拼音)",
    G: "售票员引导偶人下车",
    H: "The conductor sold me the ticket on the train.",
    I: "售票员在火车上售票给我。"
}, {
    B: "shortly",
    C: "['ʃɔ:tlɪ]",
    D: "adv.立刻，不久",
    E: "short+ly",
    F: "short短的(熟词)+ly老爷(拼音)",
    G: "穿短裤的老爷被发现后立刻逃跑了",
    H: "I will be ready shortly.",
    I: "我立刻就能准备好。"
}, {
    B: "bison",
    C: "['baɪs(ə)n]",
    D: "n.欧洲野牛，北美野牛",
    E: "bi+son",
    F: "bi鼻(拼音)+son儿子(熟词)",
    G: "欧洲野牛的鼻子被儿子牵着",
    H: "Populations of the European bison are both recovering.",
    I: "现在，欧洲野牛数量都重新得到了恢复。"
}, {
    B: "calf",
    C: "[kɑ:f]",
    D: "n.小牛，牛犊",
    E: "call",
    F: "call打电话",
    G: "小牛拿着斧头(f)打电话",
    H: "His calf was stolen.",
    I: "他的小牛被偷了。"
}, {
    B: "resist",
    C: "[rɪ'zɪst]",
    D: "vt.抵抗，对抗",
    E: "resi+st",
    F: "resi热死+st石头",
    G: "就算热死也要举起石头抵抗",
    H: "They need to resist this pressure.",
    I: "他们需要抵抗这种压力。"
}, {
    B: "quagga",
    C: "['kwægə]",
    D: "n.白氏斑马（已灭绝）",
    E: "qu+ag+ga",
    F: "qu取+ag阿哥+ga咖",
    G: "白氏斑马取走了阿哥的咖喱",
    H: "Quagga is a extinct species.",
    I: "白氏斑马已经灭绝。"
}, {
    B: "dye",
    C: "[daɪ]",
    D: "vt.给…染色，染；n.染色剂",
    E: "eye",
    F: "eye眼睛",
    G: "弟弟(d)在给眼睛",
    H: "She had dyed black hair.",
    I: "她将黑头发染了色。"
}, {
    B: "hatch",
    C: "[hætʃ]",
    D: "vt./vi.孵出，孵卵，孵化",
    E: "catch",
    F: "catch抓住",
    G: "猫抓了椅子(h)下刚孵出的小鸡",
    H: "The eggs hatch after a week.",
    I: "这些蛋一周后孵化。"
}, {
    B: "amphibious",
    C: "[æm'fɪbɪəs]",
    D: "adj.两栖（类）的",
    E: "am+phibi+ous",
    F: "am上午(熟词a.m.)+phibi菲比(谐音)+ous藕丝(拼音)",
    G: "两栖类动物上午给菲比喂藕丝",
    H: "Amphibious animals can live both on land and in water.",
    I: "两栖类动物可以在陆地上和水里生活。"
}, {
    B: "courtyard",
    C: "['kɔ:tjɑ:d]",
    D: "n.院子，庭院，天井",
    E: "court+yard",
    F: "court法院+yard院子",
    G: "法院的院子里有鸡鸭",
    H: "They walked through the arch and into the courtyard.",
    I: "他们穿过拱门走进院子。"
}, {
    B: "referee",
    C: "[ˌrefəˈri:]",
    D: "n.裁判员，仲裁者",
    E: "refer+ee",
    F: "refer参考(熟词)+ee两只鹅(编码)",
    G: "裁判员参考了两只鹅的意见",
    H: `He was sent off for arguing with the referee.
`,
    I: "他因为和裁判发生争执而被罚出场。"
}, {
    B: "sob",
    C: "[sɒb]",
    D: "vi.啜泣，抽噎；n.啜泣（声），抽噎（声）",
    E: "so+b",
    F: "so50(象形)+b男孩(编码boy)",
    G: "听到50个男孩在啜泣",
    H: `He started to sob uncontrollably.
`,
    I: "他不由自主地抽噎起来。"
}, {
    B: "acute",
    C: "[ə'kjuːt]",
    D: "adj.严重的，[医]急性的，敏锐的",
    E: "a+cute",
    F: "a苹果(编码)+cute可爱的(熟词)",
    G: "吃了苹果后他装可爱的毛病更严重了",
    H: "Statistically, ninety-eight percent of all acute sunstroke cases are fatal.",
    I: "据统计，急性中暑病例中有98%是致命的。"
}, {
    B: "scrape",
    C: "[skreɪp]",
    D: "vt./vi./n.刮，擦",
    E: "scrap+e",
    F: "scrap碎片(熟词)+e鹅(编码)",
    G: "玻璃碎片把鹅刮伤了",
    H: "She carefully scraped away the top layer of paint.",
    I: "她仔细地刮去最外面的那层漆。"
}, {
    B: "botany",
    C: "['bɒtənɪ]",
    D: "n.植物学",
    E: "bo+tan+y",
    F: "bo伯(拼音)+tan谈(拼音)+y树杈(编码)",
    G: "老伯在谈关于树杈的植物学",
    H: "He studied botany at university.",
    I: "他在大学学习植物学。"
}, {
    B: "vein",
    C: "[veɪn]",
    D: "n.血管，叶脉，[地质]岩脉；vt.使成脉络，象脉络般分布于",
    E: "vei+n",
    F: "vei为(拼音)+n门(编码)",
    G: "为了知道血管在哪，他踏破图书馆的大门",
    H: "Many veins are found just under the skin.",
    I: "许多静脉血管就在皮肤下面。"
}, {
    B: "disgusting",
    C: "[dɪs'gʌstɪŋ]",
    D: "adj.使人反感的，令人厌恶的",
    E: "disgust+ing",
    F: "disgust反感(熟词)+ing鹰(谐音)",
    G: "鹰的叫声使人反感",
    H: `Smoking is a disgusting habit.
`,
    I: "吸烟是一个不良嗜好。"
}, {
    B: "hardship",
    C: "[ˈhɑ:dʃɪp]",
    D: "n.困难，困苦",
    E: "hard+ship",
    F: "hard困难+ship船",
    G: "遇到困难的他坐船离开",
    H: "They have already survived considerable hardship.",
    I: "他们已历经了千辛万苦。"
}, {
    B: "commercial",
    C: "[kə'mɜːʃ(ə)l]",
    D: "adj.商业的，营利的，靠广告收入的",
    E: "com+mercial",
    F: "com(e)来(熟词)+mercial摸蛇(谐音)",
    G: "来摸蛇可以商业化营利",
    H: "There has always been a difference between community radio and commercial radio.",
    I: "社区广播电台和商业广播电台一直是有区别的。"
}, {
    B: "loaf",
    C: "[ləʊf]",
    D: "n.一条（面包）；vi.游手好闲，无所事事，闲荡",
    E: "lo+af",
    F: "lo10(象形)+af爱妃(拼音)",
    G: "10个人送给爱妃一条面包",
    H: "I want a loaf of bread.",
    I: "我想要一条面包。"
}, {
    B: "distinguish",
    C: "[dɪ'stɪŋgwɪʃ]",
    D: "vt./vi.辨别，区别，看清",
    E: "dis+tin+guish",
    F: "dis的士(拼音)+tin罐头(熟词)+guish鬼神(拼音)",
    G: "的士司机用罐头瓶当照妖镜辨别鬼神",
    H: "We can distinguish one kind of substance from another by its properties.",
    I: "我们可以根据物质的特性把一种物质与另一种物质辨别。"
}, {
    B: "string",
    C: "[strɪŋ]",
    D: "n.细绳，线，弦",
    E: "str+ing",
    F: "str街道(熟词street)+ing鹰(谐音)",
    G: "街道上的鹰被绳子拴着",
    H: "The kidnapper strangled the child with a piece of string.",
    I: "绑票的人用一根绳子把这孩子勒死。"
}, {
    B: "shabby",
    C: "['ʃæbɪ]",
    D: "adj.寒酸的，破旧的",
    E: "sha+bb+y",
    F: "sha傻(拼音)+bb66(象形)+y树杈(编码)",
    G: "衣着破旧的傻子捡了66根树杈",
    H: "He walked into a tiny, shabby room.",
    I: "他走进了一个狭小破旧的房间。"
}, {
    B: "messy",
    C: "['mesɪ]",
    D: "adj.凌乱的，散乱的",
    E: "me+ssy",
    F: "me我(熟词)+ssy刷刷牙(拼音)",
    G: "到处都很凌乱，但我还是想刷刷牙",
    H: "Life is a messy and tangled business.",
    I: "生活就是一件既混乱又复杂的事情。"
}, {
    B: "radioactive",
    C: "[ˌreɪdɪəʊ'æktɪv]",
    D: "adj.放射性的",
    E: "radio+active",
    F: "radio无线电+active活跃的",
    G: "具有放射性的无线电波很活跃",
    H: "People should keep away from the radioactive waste.",
    I: "人们应远离放射性废物。"
}, {
    B: "occur",
    C: "[ə'kɜ:]",
    D: "vi.出现，发生，存在",
    E: "o+ccur",
    F: "o山洞(编码)+ccur客(谐音)",
    G: "山洞出现的客人是猩猩",
    H: "It occurred to me that I could have the book sent to me.",
    I: "我想到可以让人把书寄给我。"
}, {
    B: "Hispanic",
    C: "[hɪ'spænɪk]",
    D: "adj.西班牙的，西班牙语国家的",
    E: "His+pan+ic",
    F: "His他的(熟词)+pan平底锅(熟词)+icIC卡(编码)",
    G: "他的平底锅是用西班牙的IC卡买的",
    H: "His family tried to assimilate into the white and Hispanic communities.",
    I: "他一家人试图融入白人和西班牙裔社区。"
}, {
    B: "jurassic",
    C: "[dʒʊ'ræsɪk]",
    D: "adj.侏罗纪的；n.侏罗纪",
    E: "jur+ass+ic",
    F: "jur巨人(拼音)+ass屁股(熟词)+icIC卡(编码)",
    G: "侏罗纪的巨人屁股上有张IC卡",
    H: "Jurassic Park is my favourite film.",
    I: "《侏罗纪公园》是我最喜欢的电影。"
}, {
    B: "rod",
    C: "[rɒd]",
    D: "n.杆，竿，棒",
    E: "ro+d",
    F: "ro肉(拼音)+d弟(编码)",
    G: "肉被弟弟挂在杆上",
    H: "He gave his father a fishing-rod as a birthday present.",
    I: "他为他父亲买了钓鱼杆作为生日礼物。"
}, {
    B: "competent",
    C: "['kɒmpɪt(ə)nt]",
    D: "adj.有能力的，胜任的，能干的",
    E: "com+pet+e+nt",
    F: "com(e)来(熟词)+pet宠物(熟词)+e鹅(编码)+nt难题(拼音)",
    G: "他很有能力可以来教宠物鹅做难题",
    H: "He is not competent the task of teaching English.",
    I: "他不能胜任英语教学工作。"
}, {
    B: "fateful",
    C: "['feɪtfl]",
    D: "adj.命运的，重大的",
    E: "fate+ful",
    F: "fate命运(熟词)+ful俘虏(拼音)",
    G: "这是个命运坎坷的俘虏",
    H: "The Middle East stands at a fateful crossroads.",
    I: "中东站在一个决定命运的十字路口。"
}, {
    B: "whistle",
    C: "['wɪsl]",
    D: "vi.吹口哨，发出汽笛声；n.口哨声，汽笛声",
    E: "wh+is+tle",
    F: "wh王后(拼音)+is是(熟词)+tle踢了(拼音)",
    G: "吹口哨的王后是被他踢了一脚",
    H: "As he washed he whistled a tune.",
    I: "他边洗边用口哨吹着小曲。"
}, {
    B: "troublesome",
    C: "['trʌblsəm]",
    D: "adj.使人心烦的，带来麻烦的",
    E: "trouble+some",
    F: "trouble麻烦+some一些",
    G: "处理使人心烦的事总会麻烦一些",
    H: "He is a troublesome person.",
    I: "他是一个讨厌的人。"
}, {
    B: "gutter",
    C: "['gʌtə]",
    D: "n.排水沟，阴沟，贫民区",
    E: "butter",
    F: "butter黄油",
    G: "把黄油丢进排水沟",
    H: "Did you fix the gutter?",
    I: "你修过排水槽了吗？"
}, {
    B: "amazement",
    C: "[ə'meɪzmənt]",
    D: "n.惊愕，惊讶",
    E: "amaze+ment",
    F: "amaze吃惊(熟词)+ment门徒(拼音)",
    G: "吃惊的门徒感觉很惊愕",
    H: "I stared at her in amazement.",
    I: "我惊愕地瞪眼看着她。"
}, {
    B: "disapprove",
    C: "[ˌdɪsə'pru:v]",
    D: "vi/vt.反对，不赞成，认为不好",
    E: "dis+approve",
    F: "dis不(词缀)+approve同意(熟词)",
    G: "不同意就是反对",
    H: "She replied that she disapproved.",
    I: "她回答说她不赞成。"
}, {
    B: "believer",
    C: "[bɪ'lɪ:və]",
    D: "n.信徒，教徒",
    E: "believ+er",
    F: "believ(e)相信(熟词)+er儿(拼音)",
    G: "他相信儿子是个忠诚的信徒",
    H: "I'm a passionate believer in public art.",
    I: "我是公共艺术的狂热信徒。"
}, {
    B: "teapot",
    C: "['tɪ:pɒt]",
    D: "n.茶壶",
    E: "tea+pot",
    F: "tea茶+pot容器",
    G: "装茶的容器是茶壶",
    H: "The teapot dropped out of her hand.",
    I: "茶壶从她手中掉了下来。"
}, {
    B: "wax",
    C: "[wæks]",
    D: "vt.给…上蜡；n.蜡，蜡状物",
    E: "max",
    F: "max最大的",
    G: "给最大的",
    H: "We'd have long talks while she helped me wax the floor.",
    I: "她帮我给地板打蜡时我们谈了很久。"
}, {
    B: "seashell",
    C: "['sɪ:ʃel]",
    D: "n.海贝壳",
    E: "sea+shell",
    F: "sea海+shell贝壳",
    G: "海边的海贝壳很多",
    H: "She walks along the beach, collecting seashell.",
    I: "她沿海滩收集海贝壳。"
}, {
    B: "ripen",
    C: "['raɪpən]",
    D: "vt./vi.成熟，使...成熟",
    E: "ri+pen",
    F: "ri日(拼音)+pen钢笔(熟词)",
    G: "日本钢笔的设计很成熟",
    H: "Time will soon ripen.",
    I: "时机将很快成熟。"
}, {
    B: "somehow",
    C: "['sʌmhaʊ]",
    D: "adv.以...方式，不知怎么地",
    E: "some+how",
    F: "some一些+how怎样",
    G: "一些人不知道以怎样的",
    H: "We must stop him from seeing her somehow.",
    I: "不管怎么着，我们都不能让他见她。"
}, {
    B: "kindergarten",
    C: "['kɪndəgɑ:tn]",
    D: "n.幼儿园",
    E: "kind+erg+art+en",
    F: "kind友好的(熟词)+erg二哥(拼音)+art美术(熟词)+en摁(拼音)",
    G: "友好的二哥在教美术时被摁在幼儿园里",
    H: "She's in kindergarten now.",
    I: "她目前在上幼儿园。"
}, {
    B: "radioactivity",
    C: "[ˌreɪdɪəʊæk'tɪvətɪ]",
    D: "n.放射性",
    E: "radio+activity",
    F: "radio收音机+activity活动",
    G: "收音机活动时具有放射性",
    H: "Some rare metals have radioactivity.",
    I: "某些稀有金属具有放射性。"
}, {
    B: "division",
    C: "[dɪ'vɪʒn]",
    D: "n.分配，划分，分割",
    E: "di+vi+sion",
    F: "di弟(拼音)+vi胜利(谐音V)+sion忍(谐音)",
    G: "弟弟胜利后将忍者的领地分配出去",
    H: "We need a fair division of time and resources.",
    I: "我们需要对时间和资源进行合理分配。"
}, {
    B: "melon",
    C: "['melən]",
    D: "n.瓜",
    E: "me+lon",
    F: "me我(熟词)+lon龙(拼音)",
    G: "我看到龙在空中吃瓜",
    H: "Would you like some melon?",
    I: "你要吃点瓜吗？"
}, {
    B: "pulse",
    C: "[pʌls]",
    D: "n.脉搏，节拍；vi.强烈而有规律地跳动",
    E: "purse",
    F: "purse钱包",
    G: "丢了1(l)个钱包吓得她脉搏都停了",
    H: "Mike's pulse was racing.",
    I: "迈克脉搏跳得很快。"
}, {
    B: "cheekbone",
    C: "['tʃɪ:kbəʊn]",
    D: "n.颧骨",
    E: "cheek+bone",
    F: "cheek脸颊+bone骨头",
    G: "脸颊上的骨头叫颧骨",
    H: "She was very beautiful, with high cheekbones.",
    I: "她颧骨高高的，非常漂亮。"
}, {
    B: "arrowhead",
    C: "['ærəʊhed]",
    D: "n.箭头",
    E: "arrow+head",
    F: "arrow箭+head头",
    G: "丘比特把箭头对准我的头",
    H: "Each arrowhead represents an interface.",
    I: "每个箭头表示一个接口。"
}, {
    B: "axe",
    C: "[æks]",
    D: "n.斧子，斧",
    E: "are",
    F: "are是",
    G: "剪刀(x)是用斧子砍坏的",
    H: "Be careful with that sharp axe.",
    I: "那把斧子很锋利，你要当心。"
}, {
    B: "gaily",
    C: "['geɪlɪ]",
    D: "adv.快乐地，轻松地",
    E: "gai+ly",
    F: "gai钙+ly老爷",
    G: "经常补钙的老爷活得很快乐",
    H: "The children sing gaily.",
    I: "孩子们快乐地唱着。"
}, {
    B: "skilful",
    C: "['skɪlfl]",
    D: "adj.熟练的，有技巧的",
    E: "skil+ful",
    F: "skil(l)技术(熟词)+ful俘虏(拼音)",
    G: "技术好的俘虏逃狱很熟练",
    H: "My old brother is a skilful paddler.",
    I: "我哥哥是个技术娴熟的桨手。"
}, {
    B: "craftsmanship",
    C: "['krɑ:ftsmənʃɪp]",
    D: "n.手艺，技艺，精工细作",
    E: "crafts+man+ship",
    F: "crafts手艺+man男人+ship船",
    G: "手艺精湛的男人在造船",
    H: "The work is perfect in craftsmanship.",
    I: "这副作品技艺完美。"
}, {
    B: "illustrate",
    C: "['ɪləstreɪt]",
    D: "vt.图解，",
    E: "ill+us+tr+ate",
    F: "ill生病的(熟词)+us我们(熟词)+tr土人(拼音)+ate吃(熟词)",
    G: "生病的我们用图解",
    H: "Let me give another example to illustrate this difficult point.",
    I: "让我举另一个例子来阐明这个难点。"
}, {
    B: "distinct",
    C: "[dɪ'stɪŋ(k)t]",
    D: "adj.明显的，",
    E: "instinct",
    F: "instinct本能",
    G: "动物与植物的本能是有明显",
    H: "These animals have a distinct instinct of protecting themselves from being extinct.",
    I: "这些动物有一种明显的本能,能保护自己不灭绝。"
}, {
    B: "immigrant",
    C: "['ɪmɪgr(ə)nt]",
    D: "adj.移民的，迁入的",
    E: "im+mi+grant",
    F: "im姨母(谐音)+mi米(拼音)+grant准许(熟词)",
    G: "姨母卖了米才被准许移民",
    H: "This country has large numbers of expatriates or immigrant populations.",
    I: "这个国家有大量被放逐者或移民。"
}, {
    B: "majority",
    C: "[mə'dʒɒrɪtɪ]",
    D: "n.多数，多年，成年",
    E: "major+ity",
    F: "major主要的(熟词)+ity一体(谐音)",
    G: "主要的人结为一体成了多数",
    H: "Three of the justices dissented from the majority decision.",
    I: "三名法官不同意大多数人的裁决。"
}, {
    B: "federal",
    C: "['fed(ə)r(ə)l]",
    D: "adj.联邦的，同盟的",
    E: "fed+er+al",
    F: "fed喂养(熟词)+er儿(拼音)+al阿狸(拼音)",
    G: "联邦的人要带走正在喂养儿子的阿狸",
    H: "The federal government hiked the tax on hard liquor.",
    I: "联邦政府提高了烈性酒的税率。"
}, {
    B: "percentage",
    C: "[pəˈsentɪdʒ]",
    D: "n.百分比，百分率",
    E: "percent+age",
    F: "percent百分比+age年龄",
    G: "用百分比统计年龄",
    H: "This area has a high percentage of unemployed men.",
    I: "这个地区失业人数的比例很高。"
}, {
    B: "aircraft",
    C: "['eəkrɑːft]",
    D: "n.飞机，航空器",
    E: "air+craft",
    F: "air空气+craft航空器",
    G: "在空气中飞行的航空器就是飞机",
    H: "All aircraft at London Airport were grounded by fog yesterday.",
    I: "昨天由于大雾伦敦机场所有飞机停飞。"
}, {
    B: "pole",
    C: "[pəʊl]",
    D: "n.地级，电极，磁极",
    E: "po+le",
    F: "po破+le了",
    G: "地级上破了个洞",
    H: "For six months of the year, there is hardly any light at the poles.",
    I: "在南北极，每年有6个月时间几乎没有光照。"
}, {
    B: "apparent",
    C: "[ə'pær(ə)nt]",
    D: "adj.显然的，",
    E: "ap+parent",
    F: "ap阿婆(拼音)+parent父母(熟词)",
    G: "阿婆父母显然",
    H: "When the synthetic is contrasted with the natural one, the difference is very apparent.",
    I: "把人工制品与天然品一比，其差别是很明显。"
}, {
    B: "insert",
    C: "[ɪn'sɜ:t]",
    D: "vt.嵌入，插入；n.插入物",
    E: "in+se+rt",
    F: "in里面(熟词)+se色(拼音)+rt人头(拼音)",
    G: "里面黑色的人头都被嵌入在墙壁里了",
    H: "Insert coins into the slot and press for a ticket.",
    I: "把硬币放进投币口，按钮取票。"
}, {
    B: "undertake",
    C: "[ˌʌndəˈteik]",
    D: "vt.着手做，",
    E: "under+take",
    F: "under下+take拿",
    G: "把一件事情拿下来就是同意",
    H: "He undertook to edit the text himself.",
    I: "他答应亲自编辑正文的内容。"
}, {
    B: "breakthrough",
    C: "['breɪkθru:]",
    D: "n.突破，突破性进展",
    E: "break+through",
    F: "break破坏+through通过",
    G: "障碍破坏后可以通过，取得了突破性进展",
    H: "God willing, there will be a breakthrough.",
    I: "如果一切顺利，将会取得突破性的进展。"
}, {
    B: "procedure",
    C: "[prə'si:dʒə(r)]",
    D: "n.程序，手续，过程",
    E: "pro+ce+dure",
    F: "pro飘柔+ce测+dure毒热",
    G: "用飘柔测毒热症的症状有三道程序",
    H: "Did you follow the emergency procedure when you hear the alarm?",
    I: "你听到警告时是按照应急步骤操作的吗？"
}, {
    B: "carrier",
    C: "[ˈkærɪə]",
    D: "n.货架，载体，运送者",
    E: "car+ri+er",
    F: "car小车(熟词)+ri日(拼音)+er儿(拼音)",
    G: "小车上面的货架是日本人送给儿子的",
    H: "He stooped to pick up the carrier bag of groceries.",
    I: "他俯下身去提装着食品杂货的购物袋。"
}, {
    B: "cast",
    C: "[kɑ:st]",
    D: "vt.抛，投，投射（光、影、视线等）",
    E: "ca+st",
    F: "ca擦+st石头",
    G: "擦亮石头然后抛得远远的",
    H: "She cast a welcoming smile in his direction.",
    I: "她向他微笑以示欢迎。"
}, {
    B: "conservative",
    C: "[kən'sɜ:vətɪv]",
    D: "adj.保守的，守旧的；n.保守的人",
    E: "con+serv+ative",
    F: "con肯(谐音)+serv(e)服务(熟词)+ative爱踢我(谐音)",
    G: "林肯的服务员爱踢保守的我",
    H: "He listed himself as a conservative.",
    I: "他自称是一个保守主义者。"
}, {
    B: "forbid",
    C: "[fəˈbɪd]",
    D: "vt.禁止，不许",
    E: "for+bid",
    F: "for为了+bid投标",
    G: "为了投标禁止你们乱动",
    H: "They'll forbid you to marry.",
    I: "他们不会准许你结婚。"
}, {
    B: "accumulate",
    C: "[ə'kjuːmjʊleɪt]",
    D: "vi.累积，积聚",
    E: "ac+cumu+late",
    F: "acAC米兰(编码)+cumu粗木(拼音)+late迟到(熟词)",
    G: "AC米兰球员被罚扛粗木头因为迟到累计多次",
    H: "How can I accumulate enough cash to get out of debt?",
    I: "我怎么才能攒足钱还清债务呢？"
}, {
    B: "chorus",
    C: "['kɔ:rəs]",
    D: "n.合唱队",
    E: "ch+or+us",
    F: "ch吃(拼音)+or或者(熟词)+us我们(熟词)",
    G: "合唱队吃饭去了，或者我可以顶替他们",
    H: 'The chorus was singing "The Ode to Joy".',
    I: "合唱团在唱《欢乐颂》。"
}, {
    B: "assumption",
    C: "[ə'sʌm(p)ʃ(ə)n]",
    D: "n.假定，设想，担任，采取",
    E: "assum+ption",
    F: "assum(e)假定(熟词)+ption婆神(谐音)",
    G: "假定她是婆婆化作的神",
    H: "This project was predicated on the assumption that the economy was expanding.",
    I: "这一计划是以经济发展的设想为依据的。"
}, {
    B: "regulation",
    C: "[regjʊ'leɪʃ(ə)n]",
    D: "n.管理，规则，校准；adj.规定的，平常的",
    E: "regula+tion",
    F: "regula(r)经常的(熟词)+tion神(谐音)",
    G: "经常看到神仙在制定管理规则",
    H: "Infringement of the regulation is punishable by a fine.",
    I: "违反规则应处以罚款。"
}, {
    B: "nonsense",
    C: "[ˈnɔnsəns]",
    D: "n.胡说，冒失的行动",
    E: "non+sense",
    F: "non无(词缀)+sense意义(熟词)",
    G: "无意义的话就是胡说",
    H: "You mustn't chatter nonsense on serious diplomatic occasions.",
    I: "在严肃的外交场合你可不能唠唠叨叨地胡说。"
}, {
    B: "popularity",
    C: "[pɒpjʊ'lærətɪ]",
    D: "n.流行，受人喜爱",
    E: "popular+i+ty",
    F: "popular流行的(熟词)+i我(熟词I)+ty踢(谐音)",
    G: "唱流行歌曲的我被踢傻了",
    H: "The new product jumped into popularity.",
    I: "新产品一下子流行开来。"
}, {
    B: "vain",
    C: "[veɪn]",
    D: "adj.徒劳的，无效的，自负的",
    E: "rain",
    F: "rain雨",
    G: "下雨了，一切胜利(v)都变成了徒劳",
    H: "The drafting committee worked through the night in a vain attempt to finish on schedule.",
    I: "起草委员会为按计划完成草案已通宵加班，但结果仍是徒劳。"
}, {
    B: "merely",
    C: "['mɪəlɪ]",
    D: "adv.只是，仅仅，只不过",
    E: "me+re+ly",
    F: "me我(熟词)+re热(拼音)+ly理由(拼音)",
    G: "我热的理由只是想离开",
    H: "She noticed him merely with a nod.",
    I: "她仅以点头向他。"
}, {
    B: "restore",
    C: "[riˈstɔ:]",
    D: "vt.修复，归还，使恢复",
    E: "re+store",
    F: "re再(词缀)+store商店(熟词)",
    G: "再给商店修复一下",
    H: "Troops were sent to the islands to restore order last November.",
    I: "去年11月，军队被派往这些岛屿以恢复秩序。"
}, {
    B: "patent",
    C: "['peɪtnt]",
    D: "n.专利证书，专利权",
    E: "parent",
    F: "parent父亲(或母亲)",
    G: "特务给父亲颁发专利证书",
    H: "P&G applied for a patent on its cookies.",
    I: "宝洁公司为它的饼干申请专利权。"
}, {
    B: "perfume",
    C: "['pə:fju:m]",
    D: "n.香水，香味",
    E: "per+fu+me",
    F: "per每(熟词)+fu父(拼音)+me我(熟词)",
    G: "每天父亲都给我喷香水",
    H: "As she went past there was a gust of strong perfume.",
    I: "她走过时有一股浓烈的香水味。"
}, {
    B: "cube",
    C: "[kju:b]",
    D: "n.立方体，立方",
    E: "cu+be",
    F: "cu粗(拼音)+be是(熟词)",
    G: "这块粗辣条是立方体形状的",
    H: "The box was cube-shaped.",
    I: "那盒子是立方形的。"
}, {
    B: "passive",
    C: "['pæsɪv]",
    D: "adj.被动的，消极的",
    E: "pa+ssive",
    F: "pa怕(拼音)+ssive媳妇(谐音)",
    G: "怕媳妇的人很被动",
    H: "This  is  why it is easier to  be  passive  and  keep  quiet.",
    I: "这就是保持沉默和被动要更容易做到的原因。"
}, {
    B: "criterion",
    C: "[kraɪ'tɪərɪən]",
    D: "n.（批评/做决定）标准，准则",
    E: "cri+ter+ion",
    F: "cri次日(拼音)+ter天鹅肉(拼音)+(l)ion狮子(熟词)",
    G: "次日天鹅肉被狮子选为择食标准",
    H: "Practice is the sole criterion of truth.",
    I: "实践是检验真理的唯一标准。"
}, {
    B: "valid",
    C: "['vælɪd]",
    D: "adj.有效的，正当的，合理的",
    E: "va+lid",
    F: "va娃(谐音)+lid立冬(拼音)",
    G: "娃娃的护照直到立冬之前都是有效的",
    H: "Most designers share the unspoken belief that fashion is a valid form of visual art.",
    I: "绝大多数设计师都默认这样一种观点，即时装是视觉艺术的一种有效形式。"
}, {
    B: "ripe",
    C: "[raip]",
    D: "adj.成熟的，醇美可口的",
    E: "rice",
    F: "rice稻谷",
    G: "稻谷成熟了",
    H: "The conditions are ripe for the spread of disease.",
    I: "这种疾病传播的条件已经成熟。"
}, {
    B: "identification",
    C: "[aɪ,dentɪfɪ'keɪʃ(ə)n]",
    D: "n.识别，鉴定，身份证明",
    E: "identif+ic+ation",
    F: "identif(y)识别(熟词)+icIC卡(谐音)+ation爱神(谐音)",
    G: "识别出IC卡是爱神的",
    H: "Early identification of a disease can prevent death and illness.",
    I: "病症的及早诊断可避免死亡与病痛。"
}, {
    B: "dial",
    C: "['daɪəl]",
    D: "vt.给…打电话；vi.拨号",
    E: "di+al",
    F: "di弟+al阿狸",
    G: "弟弟给阿狸打电话",
    H: "It is possible to dial direct to many countries.",
    I: "可以直拨到很多国家。"
}, {
    B: "microphone",
    C: "['maɪkrəfəʊn]",
    D: "n.麦克风，话筒",
    E: "micro+phone",
    F: "micro极小的+phone电话",
    G: "极小的电话都有麦克风",
    H: "I have my microphone with me.",
    I: "我身上带着麦克风。"
}, {
    B: "multiple",
    C: "['mʌltɪpl]",
    D: "adj.多种多样的，涉及多人的，有多种用途的",
    E: "multi+ple",
    F: "multi多(词缀)+ple破了(拼音)",
    G: "多种多样的衣服都破了",
    H: "He gave the cause of death as multiple injuries.",
    I: "他说多处受伤导致了死亡。"
}, {
    B: "associate",
    C: "[ə'səʊʃɪeɪt]",
    D: "vt.联系，联想",
    E: "a+sso+ci+ate",
    F: "a一(熟词)+sso550(象形)+ci刺(拼音)+ate吃(熟词)",
    G: "一只550斤重的刺猬和吃货有联系",
    H: "I always associate the smell of those flowers with my childhood.",
    I: "我一闻到这种花香，就联想起我的童年。"
}, {
    B: "caption",
    C: "['kæpʃ(ə)n]",
    D: "n.标题，字幕",
    E: "cap+tion",
    F: "cap帽子(熟词)+tion神(谐音)",
    G: "戴帽子的神在看标题",
    H: "There is a caption under the movie.",
    I: "电影下边附有字幕。"
}, {
    B: "hesitate",
    C: "['hezɪteɪt]",
    D: "vi./vt.犹豫，踌躇，不愿意",
    E: "he+sit+ate",
    F: "he他+sit坐+ate吃",
    G: "他犹豫要不要坐着吃东西",
    H: "I will not hesitate to take unpopular decisions.",
    I: "我会毫不犹豫地作出并不受欢迎的决定。"
}, {
    B: "handkerchief",
    C: "['hæŋkətʃɪf]",
    D: "n.手帕，手绢，纸巾",
    E: "hand+ker+chief",
    F: "hand手(熟词)+ker客人(拼音)+chief主要(熟词)",
    G: "他手上的客人主要是做手帕生意",
    H: "He took out a handkerchief and blew his nose.",
    I: "他掏出一块手帕，擤了擤鼻子。"
}, {
    B: "disguise",
    C: "[dɪs'gaɪz]",
    D: "vt.假装，掩饰，隐瞒",
    E: "dis+gui+se",
    F: "dis的士+gui鬼+se色",
    G: "假装开的士的鬼是色狼",
    H: "He made no attempt to disguise his agitation.",
    I: "他毫不掩饰自己的焦虑不安。"
}, {
    B: "brilliant",
    C: "['brɪlj(ə)nt]",
    D: "adj.才华横溢的，明亮的，闪耀的",
    E: "br+ill+i+ant",
    F: "br病人(拼音)+ill病的(熟词)+i我(熟词I)+ant蚂蚁(熟词)",
    G: "太有才华了！病人的病被我用蚂蚁治好了",
    H: "Her  brilliant  performance redeemed the concert from complete failure.",
    I: "她的精彩表演使这场音乐会免遭彻底失败。"
}, {
    B: "remark",
    C: "[rɪ'mɑ:k]",
    D: "n.评论，言论；vi/vt.谈论，说起",
    E: "re+mark",
    F: "re再(词缀)+mark标记(熟词)",
    G: "再次在原文标记读者的评论",
    H: "She flew at him for making a very anti-British remark.",
    I: "她攻击他激烈的反英言论。"
}, {
    B: "betray",
    C: "[bɪ'treɪ]",
    D: "vt.背叛，出卖",
    E: "be+tray",
    F: "be有+tray托盘",
    G: "背叛我的人有个托盘",
    H: "Their betray disorganized the party.",
    I: "他们的背叛瓦解了该党。"
}, {
    B: "extraordinary",
    C: "[ɪkˈstrɔ:dnri]",
    D: "adj.特别的，不平常的，非凡的",
    E: "extra+ordinary",
    F: "extra额外的+ordinary普通的",
    G: "比普通的额外多一点就是特别的",
    H: "I am an extraordinary person.",
    I: "我是一个非凡的人。"
}, {
    B: "condemn",
    C: "[kən'dem]",
    D: "vt.谴责，判刑，定罪",
    E: "conde+mn",
    F: "conde康德(谐音)+mn美女(拼音)",
    G: "谴责康德调戏美女",
    H: "Some praise him, whereas others condemn him.",
    I: "有些人赞扬他，而有些人谴责他。"
}, {
    B: "ambassador",
    C: "[æm'bæsədə]",
    D: "n.大使，使节",
    E: "am+bas+sad+or",
    F: "am上午(熟词a.m.)+bas巴士(拼音)+sad悲伤(熟词)+or偶人(拼音)",
    G: "大使上午在巴士上安慰悲伤的偶人",
    H: "I was carrying dispatches from the ambassador.",
    I: "我正拿着大使的急件。"
}, {
    B: "status",
    C: "[ˈsteitəs]",
    D: "n.地位，状态，情形",
    E: "st+at+us",
    F: "st石头(拼音)+at在(熟词)+us我们(熟词)",
    G: "石头在我们心中的地位很高",
    H: "He has risen to gain the status of a national hero.",
    I: "他已被推崇为民族英雄。"
}, {
    B: "superior",
    C: "[sjuˈpiəriə]",
    D: "adj.上级的，优秀的；n.上级，",
    E: "super+ior",
    F: "super超级(熟词)+ior爱偶人(谐音)",
    G: "优秀的",
    H: "We overwhelmed the enemy by superior forces.",
    I: "我们以优势兵力打垮了敌军。"
}, {
    B: "antique",
    C: "[æn'tɪ:k]",
    D: "n.古董，文物；adj.（因古老稀少而）珍贵的，古时的",
    E: "ant+i+que",
    F: "ant蚂蚁(熟词)+i我(熟词I)+que雀(拼音)",
    G: "跟着蚂蚁我找到一个孔雀状的古董",
    H: "I don'tknow anything about this antique stuff.",
    I: "我对于这种古玩物件一无所知。"
}, {
    B: "alphabet",
    C: "['ælfəbet]",
    D: "n.字母表，字母系统，入门，初步",
    E: "al+pha+bet",
    F: "al阿狸(拼音)+pha发(谐音)+bet打赌(熟词)",
    G: "阿狸发现有人在打赌能否记住字母表",
    H: "There are 26 letters in the English alphabet.",
    I: "英语字母表中有26个字母。"
}, {
    B: "alternative",
    C: "[ɔ:l'tɜ:nətɪv]",
    D: "adj.可供替代的，可供选择的；n.可供选择的事物",
    E: "alter+native",
    F: "alter改变+native当地人",
    G: "可供替代的食物改变了当地人的口味",
    H: "He said there is no alternative for him but to maintain order under any circumstances.",
    I: "他说，他没有任何选择，在任何情况下他只有去维持秩序。"
}, {
    B: "tentative",
    C: "['tentətɪv]",
    D: "adj.犹豫的，试验性的；n.假设，试验",
    E: "ten+tative",
    F: "ten十(熟词)+tative他踢我(谐音)",
    G: "第十次他踢我时犹豫了",
    H: "My first attempts at complaining were rather tentative.",
    I: "我刚开始投诉时很犹豫不决。"
}, {
    B: "mat",
    C: "[mæt]",
    D: "n.垫子，席子",
    E: "fat",
    F: "fat胖的",
    G: "胖猫睡在山(m)里的垫子上",
    H: "The food is served on polished tables with mats.",
    I: "饭菜摆放在擦得铮亮、铺着衬垫的餐桌上。"
}, {
    B: "quilt",
    C: "[kwɪlt]",
    D: "n.被子，棉被",
    E: "qu+i+lt",
    F: "qu去(拼音)+i我(熟词I)+lt辣条(拼音)",
    G: "他去我家时把辣条塞到被子里",
    H: `Mary saved up pieces of cloth to make a quilt.
`,
    I: "玛丽存了几块布留作棉被用。"
}, {
    B: "primitive",
    C: "['prɪmətɪv]",
    D: "adj.原始的，粗糙的",
    E: "pr+imi+tive",
    F: "pr仆人(拼音)+imi宫殿正门(象形)+tive踢我(谐音)",
    G: "原始社会的仆人在宫殿正门踢我",
    H: "It's using some rather primitive technology.",
    I: "它使用的是非常原始的技术。"
}, {
    B: "botanical",
    C: "[bə'tænɪkl]",
    D: "adj.植物学的，与植物学有关的",
    E: "bo+ta+ni+cal",
    F: "bo伯+ta他+ni你+cal擦了",
    G: "老伯他帮你擦了植物学的实验仪器",
    H: "The area is of great botanical interest.",
    I: "这一领域有重大的植物学研究价值。"
}, {
    B: "analysis",
    C: "[ə'nælɪsɪs]",
    D: "n.分析，分解，验定",
    E: "an+al+ys+is",
    F: "an暗(拼音)+al阿狸(拼音)+ys医生(拼音)+is是(熟词)",
    G: "暗中阿狸分析医生是坏人",
    H: "His analysis really hit home. I had never seen myself in that light.",
    I: "他的分析的确击中要害，我自己从未有过那样的见解。"
}, {
    B: "scratch",
    C: "[skrætʃ]",
    D: "n.抓痕，擦伤",
    E: "sc+rat+ch",
    F: "sc商场(拼音)+rat老鼠(熟词)+ch菜花(拼音)",
    G: "商场里的老鼠在菜花上留下了抓痕",
    H: "Knives will scratch the worktop.",
    I: "小刀会在工作台上留下划痕。"
}, {
    B: "wrinkle",
    C: "['rɪŋkl]",
    D: "n.皱纹，妙计",
    E: "wr+ink+le",
    F: "wr蛙人(拼音)+ink墨水(熟词)+le了(拼音)",
    G: "蛙人用墨水洗了脸皱纹就没了",
    H: "His face was covered with wrinkles.",
    I: "他的脸上布满了皱纹。"
}, {
    B: "applaud",
    C: "[ə'plɔːd]",
    D: "vi.喝彩",
    E: "appl+aud",
    F: "appl(e)苹果(熟词)+aud奥迪(谐音)",
    G: "吃着苹果在奥迪车里喝彩",
    H: "I applaud you for being yourself.",
    I: "做你自己，我会为你鼓掌。"
}, {
    B: "accelerate",
    C: "[əkˈseləreɪt]",
    D: "vt.加速，促进",
    E: "ac+celer+rate",
    F: "ac艾克(谐音)+celer折了(谐音)+rate速度(熟词)",
    G: "艾克折了一条腿，速度反而更快，加速前进",
    H: "We need to accelerate the pace of change in our backward country.",
    I: "我们应当为落后的祖国加快变革的脚步。"
}, {
    B: "arrest",
    C: "[ə'rest]",
    D: "vt.逮捕，吸引；n.逮捕，拘留",
    E: "ar+rest",
    F: "ar矮人(拼音)+rest休息(熟词)",
    G: "矮人在休息时被逮捕了",
    H: "You could get arrested for doing that.",
    I: "你干那种事可能要遭逮捕。"
}, {
    B: "eyebrow",
    C: "['aɪbraʊ]",
    D: "n.眉毛",
    E: "eye+brow",
    F: "eye眼睛+brow额头",
    G: "眉毛长在眼睛和额头中间",
    H: "Her eyebrow is well penciled.",
    I: "她的眉毛画得很好。"
}, {
    B: "accuracy",
    C: "['ækjərəsɪ]",
    D: "n.准确（性），精确（程度）",
    E: "ac+cu+racy",
    F: "ac艾克(谐音)+cu粗(拼音)+racy若曦(谐音)",
    G: "目标准确的艾克虽粗鲁但追到了若曦",
    H: `Convinced of the accuracy of the data, they stuck to their opinion.  
`,
    I: "由于深信数据准确无误，他们坚持自己的意见。"
}, {
    B: "strait",
    C: "[streɪt]",
    D: "n.海峡",
    E: "s+tr+ait",
    F: "s美女(编码)+tr土人(拼音)+ait爱特(拼音)",
    G: "海峡两岸的美女和土人都爱特务",
    H: "The sea narrows into a strait.",
    I: "海变窄形成海峡。"
}, {
    B: "wharf",
    C: "[wɔ:f]",
    D: "n.码头",
    E: "wh+ar+f",
    F: "wh王后(拼音)+ar矮人(拼音)+f斧头(编码)",
    G: "王后把矮人的斧头扔在了码头",
    H: "Our ship is on to the wharf.",
    I: "我们的船靠向码头。"
}, {
    B: "complicated",
    C: "['kɒmplɪkeɪtɪd]",
    D: "adj.复杂的，难懂的",
    E: "com+pli+cat+ed",
    F: "com公司(编码)+pli破例(拼音)+cat猫(熟词)+ed二弟(拼音)",
    G: "复杂的公司破例让猫进了二弟办公室",
    H: "This problem is very complicated.",
    I: "这个问题很复杂。"
}, {
    B: "impact",
    C: "['ɪmpækt]",
    D: "n.撞击，冲击，巨大的影响",
    E: "im+pa+ct",
    F: "im姨母(谐音)+pa爬(拼音)+ctCT(编码)",
    G: "受撞击的姨母爬上了CT机",
    H: "What impact does it have on your life?",
    I: "它对你的生活有什么影响？"
}, {
    B: "compulsory",
    C: "[kəm'pʌls(ə)rɪ]",
    D: "adj.义务的，必须做的，强制的",
    E: "com+pu+lso+ry",
    F: "com公司(编码)+pu铺(拼音)+lso150(象形)+ry人妖(拼音)",
    G: "公司店铺的150个人妖义务加班",
    H: "Britain did not introduce compulsory primary education until 1880.",
    I: "直到1880年，英国才开始实行初等义务教育。"
}, {
    B: "owe",
    C: "[əʊ]",
    D: "vt.欠（账，钱，人情等），归功于",
    E: "o+we",
    F: "o洞(编码)+we我们(熟词)",
    G: "躲进山洞是因为我们欠了钱",
    H: "I owe him nothing.",
    I: "我不欠他什么。"
}, {
    B: "cubic",
    C: "['kju:bɪk]",
    D: "adj.立方形的，立方的",
    E: "cu+b+ic",
    F: "cu粗(拼音)+b男孩(编码boy)+icIC卡(编码)",
    G: "粗鲁的男孩用IC卡做了一个立方形",
    H: "What’s the cubic capacity of the engine?",
    I: "那个发动机的容积是多少？"
}, {
    B: "classify",
    C: "['klæsɪfaɪ]",
    D: "vt.分类，编排，归类",
    E: "class+i+fy",
    F: "class班级(熟词)+i蜡烛(编码)+fy费用(拼音)",
    G: "把班级里的蜡烛按费用分类",
    H: "Classify them by branch, region, and year.",
    I: "将他们按照支行、地区和年分类。"
}, {
    B: "curtsy",
    C: "['kɜ:tsɪ]",
    D: "vi.行屈膝礼；n.（女子行的）屈膝礼",
    E: "cur+t+sy",
    F: "cur粗人(拼音)+t特(编码)+sy声音(拼音)",
    G: "行屈膝礼的粗人听到特务的声音",
    H: `She gave a curtsy.
`,
    I: "她行了个屈膝礼。"
}, {
    B: "compromise",
    C: "['kɒmprəmaɪz]",
    D: "n./vi.妥协，折衷",
    E: "com+promise",
    F: "com公司(编码)+promise承诺(熟词)",
    G: "公司承诺必要时会做出妥协",
    H: "I am not making any more compromises.",
    I: "我不会做出任何妥协。"
}, {
    B: "laundry",
    C: "['lɔ:ndrɪ]",
    D: "n.洗衣店，洗衣房，（洗好的或待洗的）衣服",
    E: "la+un+dry",
    F: "la拉(拼音)+un联合国(编码)+dry干的(熟词)",
    G: "洗衣店的人被拉去联合国烘干衣服",
    H: "He'd put his dirty laundry in the clothes basket.",
    I: "他会把自己的脏衣服扔进洗衣篮里。"
}, {
    B: "vest",
    C: "[vest]",
    D: "n.背心，内衣",
    E: "ve+st",
    F: "ve维E(编码)+st石头(拼音)",
    G: "穿着背心把维E扔在石头上",
    H: "You'd better wear a vest under a coat.",
    I: "你最好把马甲穿在上衣里面。"
}, {
    B: "archaeology",
    C: "[ˌɑ:ki'ɒlədʒɪ]",
    D: "n.考古学",
    E: "archa+e+olo+gy",
    F: "archa矮人茶(拼音)+e鹅(编码)+olo010(象形北京区号)+gy公园(拼音)",
    G: "矮人喝茶时看到鹅在北京公园研究考古学",
    H: "She teaches archaeology at the university.",
    I: "她在大学里教考古学。"
}, {
    B: "starvation",
    C: "[stɑ:'veɪʃn]",
    D: "n.挨饿，饿死",
    E: "star+v+ation",
    F: "star星星(熟词)+v维生素(编码)+ation爱神(谐音)",
    G: "星星上的维生素太少，爱神只能挨饿",
    H: "The animals had died of starvation.",
    I: "动物因饥饿而死亡。"
}, {
    B: "excavation",
    C: "[ˌekskə'veɪʃn]",
    D: "n.挖掘，发掘",
    E: "excavat+i+on",
    F: "excavat(e)挖掘(熟词)+i蜡烛(编码)+on上面(熟词)",
    G: "把挖掘出来的蜡烛挂在墙上",
    H: `The excavations are open to the public.
`,
    I: "发掘现场对公众开放。"
}, {
    B: "prehistoric",
    C: "[prɪ:hɪ'stɒrɪk]",
    D: "adj.史前的",
    E: "pre+histor+ic",
    F: "pre仆人(拼音)+histor(y)历史(熟词)+icIC卡(编码)",
    G: "仆人在历史书里发现一张史前的IC卡",
    H: "They have found prehistoric remains.",
    I: "他们发现了史前遗迹。"
}, {
    B: "ministry",
    C: "['mɪnɪstrɪ]",
    D: "n.（政府的）部，（全体）教师，牧师的职责",
    E: "mini+s+try",
    F: "mini迷你裙(熟词)+s美女(编码)+try试图(熟词)",
    G: "穿迷你裙的美女试图在商务部谋职",
    H: "Under the ministry there are six departments.",
    I: "部下面设6个司。"
}, {
    B: "adventurer",
    C: "[əd'ventʃərə]",
    D: "n.冒险家",
    E: "adventure+r",
    F: "adventure冒险(熟词)+r草(编码)",
    G: "冒险家拿着一把草",
    H: "Don't break in when the adventurer is telling his own story.",
    I: "冒险家讲他自己的经历时，别打断他。"
}, {
    B: "despite",
    C: "[dɪ'spaɪt]",
    D: "prep.不管，尽管",
    E: "de+s+pite",
    F: "de弟(谐音)+s美女(编码)+pite皮特(拼音)",
    G: "不管弟弟多爱美女，皮特就是不同意",
    H: "I failed the test despite studying all night.",
    I: "尽管整夜学习，我还是考试不及格。"
}, {
    B: "immigration",
    C: "[ɪmɪ'ɡreɪʃn]",
    D: "n.移民入境，移民",
    E: "immigrat+i+on",
    F: "immigrat(e)移民(熟词)+i蜡烛(编码)+on在上面(熟词)",
    G: "移民入境时要把蜡烛放头上",
    H: "The government has decided to tighten its immigration policy.",
    I: "政府决定实施更加严格的移民政策。"
}, {
    B: "socialist",
    C: "['səuʃəlɪst]",
    D: "n.社会主义者，社会党人；adj.社会主义者的",
    E: "social+i+st",
    F: "social社会的(熟词)+i蜡烛(编码)+st石头(拼音)",
    G: "社会主义者用蜡烛换来石头",
    H: "China is a socialist country.",
    I: "中国是一个社会主义国家。"
}, {
    B: "socialism",
    C: "['səuʃəlɪzəm]",
    D: "n.社会主义",
    E: "social+i+sm",
    F: "social社会的(熟词)+i蜡烛(编码)+sm四米(拼音)",
    G: "社会主义社会的蜡烛有四米长",
    H: "They declared for socialism.",
    I: "他们表示拥护社会主义。"
}, {
    B: "shave",
    C: "[ʃeɪv]",
    D: "vi./vt.刮，剃",
    E: "sha+ve",
    F: "sha傻(拼音)+ve维E(编码)",
    G: "傻子刮完胡子后吃维E",
    H: "Many women shave their legs.",
    I: "很多女性都刮腿毛。"
}, {
    B: "claw",
    C: "[klɔ:]",
    D: "n.脚爪，爪",
    E: "c+law",
    F: "c看见(编码see)+law法律(熟词)",
    G: "看见法律书上有脚爪印",
    H: "The cat tried to cling to the edge by its claws.",
    I: "猫试图用爪子抓住边缘。"
}, {
    B: "walnut",
    C: "['wɔ:lnʌt]",
    D: "n.胡桃木，胡桃",
    E: "w+al+nut",
    F: "w皇冠(编码)+al阿狸(拼音)+nut坚果(熟词)",
    G: "胡桃木上的皇冠被阿狸拿去换坚果",
    H: "This bed is made of walnut.",
    I: "这床是胡桃木做的。"
}, {
    B: "merciful",
    C: "['mə:sɪfl]",
    D: "adj.仁慈的，宽大的，慈悲的",
    E: "m+erci+ful",
    F: "m山(编码)+erci二次(拼音)+ful俘虏(拼音)",
    G: "在山里第二次被捕的俘虏很仁慈",
    H: "We can only hope the court is merciful.",
    I: "我们唯有寄希望于法庭的宽大处理。"
}, {
    B: "phonetics",
    C: "[fə'netɪks]",
    D: "n.语音学",
    E: "phone+tic+s",
    F: "phone电话(熟词)+tic提出(拼音)+s美女(编码)",
    G: "打电话时提出让美女教他语音学",
    H: "Phonetics is the science of sounds.",
    I: "语音学是一门语音的科学。"
}, {
    B: "colonel",
    C: "['kə:nl]",
    D: "n.上校（陆军）",
    E: "col+one+l",
    F: "col丛林(拼音)+one一(熟词)+l棍子(编码)",
    G: "上校在丛林里举着一根棍子",
    H: "Nothing remained of the colonel.",
    I: "上校身后毫无遗物。"
}, {
    B: "mistaken",
    C: "[mɪ'steɪkən]",
    D: "adj.不正确的，（见解或判断上错误的）错误的",
    E: "mistake+n",
    F: "mistake错误(熟词)+n门(编码)",
    G: "走进错误的门说明方向是不正确的",
    H: "I'm afraid you are mistaken.",
    I: "恐怕你搞错了。"
}, {
    B: "duchess",
    C: "['dʌtʃəs]",
    D: "n.公爵夫人，女公爵",
    E: "du+che+ss",
    F: "du赌(拼音)+che车(拼音)+ss两个美女(编码)",
    G: "打赌车上两个美女是公爵夫人",
    H: "The Duchess's glare was glacial.",
    I: "公爵夫人冷漠地看着。"
}, {
    B: "authentic",
    C: "[ɔ:'θentɪk]",
    D: "adj.真实的，真正的，可信的",
    E: "au+then+tic",
    F: "au澳大利亚(编码)+then然后(熟词)+tic提出(拼音)",
    G: "到了澳大利亚然后提出真实的想法",
    H: "They have to look authentic.",
    I: "它们必须得看上去像真的。"
}, {
    B: "Buddhism",
    C: "['bʊdɪzəm]",
    D: "n.佛教",
    E: "Buddh+is+m",
    F: "Buddh(a)佛(熟词)+is是(熟词)+m山(编码)",
    G: "佛是在山上建立佛教的",
    H: "John has converted to Buddhism.",
    I: "约翰改信佛教。"
}, {
    B: "Buddhist",
    C: "['bʊdɪst]",
    D: "n.佛教徒；adj.佛教的",
    E: "Buddh+is+t",
    F: "Buddh(a)佛(熟词)+is是(熟词)+t踢(编码)",
    G: "佛是被佛教徒踢走的",
    H: "His grandfather is a Buddhist.",
    I: "他的爷爷是一个佛教徒。"
}, {
    B: "vowel",
    C: "['vaʊəl]",
    D: "n.元音，元音字母",
    E: "v+ow+el",
    F: "v胜利(编码)+ow欧文(拼音)+el饿狼(拼音)",
    G: "取得胜利后欧文教饿狼读元音",
    H: "A vowel can form a syllable by itself.",
    I: "元音能单独构成音节。"
}, {
    B: "systematic",
    C: "[ˌsɪstə'mætɪk]",
    D: "adj.系统的，有条理的，按既定计划的",
    E: "system+at+ic",
    F: "system系统(熟词)+at在(熟词)+icIC卡(编码)",
    G: "这个方案将系统地应用在IC卡上",
    H: "They had not found any evidence of a systematic attempt to rig the ballot.",
    I: "他们没有发现任何证据证明有人企图全面操纵投票。"
}, {
    B: "academy",
    C: "[ə'kædəmɪ]",
    D: "n.研究院，学会，专科院校",
    E: "ac+ade+my",
    F: "acAC米兰(编码)+ade阿德(拼音)+my我的(熟词)",
    G: "AC米兰的阿德是我的研究院同学",
    H: "The findings appear in the Proceedings of the National Academy of Sciences.",
    I: "这项研究的成果会在国家科学学会汇刊上发表。"
}, {
    B: "spear",
    C: "[spɪə(r)]",
    D: "n.枪，矛",
    E: "s+pear",
    F: "s美女(编码)+pear梨(熟词)",
    G: "美女边吃梨边耍枪",
    H: "He thrust her with a spear.",
    I: "他用枪刺她。"
}, {
    B: "dizzy",
    C: "['dɪzɪ]",
    D: "adj.晕眩的，混乱的，使人发晕或困惑的",
    E: "di+zz+y",
    F: "di弟(拼音)+zz22(象形)+y树杈(编码)",
    G: "弟弟被22根树杈砸晕眩了",
    H: "Climbing so high made me feel dizzy.",
    I: "爬那么高使我感到头晕目眩。"
}, {
    B: "hammer",
    C: "['hæmə(r)]",
    D: "n.锤子，铁锤",
    E: "ham+me+r",
    F: "ham火腿(熟词)+me我(熟词)+r草(编码)",
    G: "吃着火腿的我在草地上玩锤子",
    H: "I have no hammer.",
    I: "我没有锤子。"
}, {
    B: "catholic",
    C: "['kæθlɪk]",
    D: "n.天主教徒，罗马天主教；adj.天主教的，宽宏大量的",
    E: "ca+th+o+lic",
    F: "ca擦(拼音)+th土豪(拼音)+o蛋(编码)+lic立刻(谐音)",
    G: "天主教徒命令擦桌子的土豪拿着蛋立刻滚",
    H: "He was a Catholic but didn't  practise his religion.",
    I: "他那时是天主教徒，但并不实践信仰。"
}, {
    B: "rail",
    C: "[reɪl]",
    D: "n.铁路，扶手，（护栏的）横条",
    E: "r+ail",
    F: "r草(编码)+ail矮了(拼音)",
    G: "铁路旁的小草变矮了",
    H: "He traveled by rail to his home town.",
    I: "他坐火车回到了他的家乡。"
}, {
    B: "boom",
    C: "[bu:m]",
    D: "vt.繁荣，使兴旺",
    E: "boo+m",
    F: "boo600(象形)+m麦当劳(编码)",
    G: "这条街来了600家麦当劳，真繁荣啊",
    H: "Living standards improved rapidly during the post-war boom.",
    I: "在战后那段繁荣昌盛的时期里，生活水平得到了迅速提高。"
}, {
    B: "racial",
    C: "['reɪʃ(ə)l]",
    D: "adj.种族的，人种的",
    E: "r+a+cial",
    F: "r草(编码)+a苹果(编码)+cial蛇(谐音)",
    G: "草、苹果和蛇是不同种族的",
    H: "He was a victim of racial prejudice.",
    I: "他是种族歧视的受害者。"
}, {
    B: "slip",
    C: "[slɪp]",
    D: "vi.滑动，滑落，忽略",
    E: "s+lip",
    F: "s美女(编码)+lip嘴唇(熟词)",
    G: "美女涂嘴唇时滑倒了",
    H: "He had slipped on an icy pavement.",
    I: "他在一条结了冰的人行道上滑了一跤。"
}, {
    B: "miserable",
    C: "['mɪz(ə)rəb(ə)l]",
    D: "adj.痛苦的，悲惨的",
    E: "mise+r+able",
    F: "mise米色(拼音)+r草(编码)+able能(熟词)",
    G: "米色的草能消除痛苦的心情",
    H: "He told me a miserable story.",
    I: "他给我讲了个悲惨的故事。"
}, {
    B: "mourn",
    C: "[mɔ:n]",
    D: "vt.服丧，哀痛；vi.表示深深的遗憾，哀悼",
    E: "mou+r+n",
    F: "mou谋(拼音)+r草(编码)+n门(编码)",
    G: "张艺谋拿着草在门口服丧",
    H: "We mourn over the child's death.",
    I: "我们悲悼这孩子的死。"
}, {
    B: "authority",
    C: "[ɔ:'θɒrətɪ]",
    D: "n.当权，权威，当局",
    E: "author+it+y",
    F: "author作家(熟词)+itIT(编码)+y树杈(编码)",
    G: "当权者流放作家和IT男去捡树杈",
    H: "They disclaimed the authority of the president.",
    I: "他们不承认总统的权威。"
}, {
    B: "nucleus",
    C: "['nju:klɪəs]",
    D: "n.核，原子核",
    E: "nu+c+le+us",
    F: "nu奴(拼音)+c看见(编码see)+le了(拼音)+us我们(熟词)",
    G: "奴隶看见了我们的核导弹",
    H: "These young people formed the nucleus of the club.",
    I: "这些年轻人成了俱乐部的核心。"
}, {
    B: "obtain",
    C: "[əb'teɪn]",
    D: "vi.获得，流行；vt.获得",
    E: "ob+tai+n",
    F: "ob欧巴(拼音)+tai太(拼音)+n门(编码)",
    G: "欧巴太帅，进门就获得雷鸣掌声",
    H: "It is difficult to  obtain  reliable  evidence.",
    I: "很难获得可靠的证据。"
}, {
    B: "attain",
    C: "[ə'teɪn]",
    D: "vt.获得，到达",
    E: "at+tai+n",
    F: "at在(熟词)+tai泰(拼音)+n门(编码)",
    G: "在泰山上获得入门资格",
    H: "She attained rank of deputy director.",
    I: "她获得了副主任的头衔。"
}, {
    B: "initial",
    C: "[ɪ'nɪʃəl]",
    D: "n.大写首字母；adj.最初的",
    E: "i+ni+tial",
    F: "i蜡烛(编码)+ni你(拼音)+tial手(谐音)",
    G: "用蜡烛在你手上写大写首字母I",
    H: "This is a letter paper personalized with his initials.",
    I: "这是一张有他姓名首字母的信纸。"
}, {
    B: "jelly",
    C: "[dʒelɪ]",
    D: "n.果冻，果冻状物",
    E: "j+el+ly",
    F: "j钩子(编码)+el饿狼(拼音)+ly老爷(拼音)",
    G: "钩子上的果冻被饿狼和老爷抢走了",
    H: "The jelly firmed quickly.",
    I: "果冻迅速坚硬起来。"
}, {
    B: "caution",
    C: "['kɔ:ʃ(ə)n]",
    D: "n.谨慎，小心，警示；vt.警告",
    E: "ca+u+tion",
    F: "ca擦(拼音)+u桶(编码)+tion神(谐音)",
    G: "谨慎一点以防撞到擦桶的神",
    H: "I suggest you use caution with this one.",
    I: "对于这个方法我建议谨慎使用。"
}, {
    B: "recognition",
    C: "[rekəg'nɪʃ(ə)n]",
    D: "n.认出，识别，承认",
    E: "re+co+g+nition",
    F: "re热(拼音)+co可乐(熟词coke)+g哥(编码)+nition你婶儿(谐音)",
    G: "偷喝了热可乐的哥们被你婶儿一眼认出",
    H: "She gained only minimal recognition for her work.",
    I: "她的工作仅仅得到极少的赞誉。"
}, {
    B: "directory",
    C: "[dɪ'rekt(ə)rɪ]",
    D: "adj.指导的",
    E: "director+y",
    F: "director导演(熟词)+y树杈(编码)",
    G: "导演拿着树杈在指导演员",
    H: "To prevent this , you should build them in another directory prefix.",
    I: "要防止这种情况，您应该在另一个目录前缀中构建它们。"
}, {
    B: "jam",
    C: "[dʒæm]",
    D: "n.果酱，拥挤，堵塞",
    E: "j+am",
    F: "j钩子(编码)+am是(熟词)",
    G: "钩子是在果酱里",
    H: "There is a traffic jam in downtown area.",
    I: "市中心交通拥挤。"
}, {
    B: "dot",
    C: "[dɒt]",
    D: "n.小圆点，点",
    E: "do+t",
    F: "do做(熟词)+t伞(编码)",
    G: "她做的伞上有很多小圆点",
    H: "Soon they were only dots above the hard line of the horizon.",
    I: "很快他们就成了地平线上的几个小点了。"
}, {
    B: "current",
    C: "['kʌr(ə)nt]",
    D: "adj.现在的，流通的，通用的",
    E: "cu+r+rent",
    F: "cu醋(拼音)+r草(编码)+rent出租(熟词)",
    G: "现在的醋和小草都用于出租",
    H: "We always regard him as a friend, but he showed his colours in the current emergency.",
    I: "我们一贯把他看作朋友，但在当前的紧急关头中，他原形毕露了。"
}, {
    B: "stable",
    C: "['steɪb(ə)l]",
    D: "adj.稳定的，牢固的；n.马厩，牛棚",
    E: "s+table",
    F: "s美女(编码)+table桌子(熟词)",
    G: "美女躺在桌子上保持稳定",
    H: "The stable situation of our country today was hard won.",
    I: "我们今天稳定的形势是来之不易。"
}, {
    B: "version",
    C: "['vɜ:ʃn]",
    D: "n.说法，版本，描述",
    E: "ve+r+sion",
    F: "ve维E(编码)+r草(编码)+sion神(谐音)",
    G: "有一种说法是吃了维E和草就可以变女神",
    H: "So what else can we do with this version?",
    I: "用这个版本我们是否可以做些其他的呢？"
}, {
    B: "competence",
    C: "['kɒmpɪt(ə)ns]",
    D: "n.能力",
    E: "compete+n+ce",
    F: "compete比赛(熟词)+n门(编码)+ce厕(拼音)",
    G: "能力优者比赛前在门口抢厕所",
    H: "We can certify for him competence as an editor.",
    I: "我们可以保证他能胜任编辑。"
}, {
    B: "personnel",
    C: "[pɜːsə'nel]",
    D: "n.人事部门，全体人员；adj.人员的，有关人事的",
    E: "person+n+el",
    F: "person人(熟词)+n门(编码)+el饿狼(拼音)",
    G: "人事部门的人进门就发现了饿狼",
    H: "I looked your address up in the personnel file.",
    I: "我在人事档案里找到了你的地址。"
}, {
    B: "plot",
    C: "[plɒt]",
    D: "n.阴谋，故事情节，小块土地；vt.密谋，标出",
    E: "p+lot",
    F: "p停车场(编码)+lot很多(熟词)",
    G: "躲在停车场策划了很多阴谋",
    H: "There was a grass plot in the garden.",
    I: "花园里有一片草地。"
}, {
    B: "garment",
    C: "['gɑ:m(ə)nt]",
    D: "vt.给…穿衣服；n.衣服，外表，外观",
    E: "g+ar+ment",
    F: "g哥(编码)+ar矮人(拼音)+ment门徒(拼音)",
    G: "哥哥给矮人门徒",
    H: "This garment must be dry-cleaned only.",
    I: "这件衣服只可干洗。"
}, {
    B: "acquaintance",
    C: "[ə'kweɪntəns]",
    D: "n.熟人，了解，相识",
    E: "ac+qua+in+tance",
    F: "acAC米兰(编码)+qua全(拼音)+in里(熟词)+tance探测(拼音)",
    G: "在AC米兰的熟人全部帮他去洞里探测",
    H: "Tom bumped into a casual acquaintance in town.",
    I: "汤姆在镇上偶然遇见了一个熟人。"
}, {
    B: "fortune",
    C: "['fɔ:tʃu:n]",
    D: "n.大笔的钱，机会，运气",
    E: "for+tun+e",
    F: "for为了(熟词)+tun吞(拼音)+e鹅(编码)",
    G: "为了得到大笔的钱他表演吞鹅",
    H: "The fortune will come to you.",
    I: "这一大笔钱将归你所有。"
}, {
    B: "rob",
    C: "[rɒb]",
    D: "vt.抢劫，盗窃，剥夺",
    E: "r+ob",
    F: "r草(编码)+ob欧巴(拼音)",
    G: "躺在草坪上的欧巴被抢劫了",
    H: "Police said Stefanovski had robbed a man just hours earlier.",
    I: "警察说斯泰凡诺夫斯基就在几个小时前抢劫了一名男子。"
}];

export default datas;
