// 中考核心单词
const datas = [{
    B: "mouth",
    C: "[maʊθ]",
    D: "n.口，嘴",
    E: "mou+th",
    F: "mou谋+th土豪",
    G: "谋杀土豪的事要封口",
    H: "His mouth is full of rice.",
    I: "他满嘴都是米饭。"
}, {
    B: "clean",
    C: "[kli:n]",
    D: "vt.清洁；adj.清洁的",
    E: "cle+an",
    F: "cle冲了(拼音)+an一(熟词)",
    G: "冲了一桶水清洁水池",
    H: "He cleans the floor every day.",
    I: "他每天清洁地板。"
}, {
    B: "friend",
    C: "[frend]",
    D: "n.朋友，助手，赞助者",
    E: "fr+i+end",
    F: "fr夫人(拼音)+i我(熟词I)+end最后(熟词)",
    G: "夫人和我最后成为了朋友",
    H: "She is my good friend.",
    I: "她是我的好朋友。"
}, {
    B: "mother",
    C: "['mʌðə]",
    D: "n.妈妈，母亲",
    E: "mot+her",
    F: "mot模特(拼音)+her她的(熟词)",
    G: "这个模特是她的妈妈",
    H: "His mother is from England.",
    I: "他妈妈来自英国。"
}, {
    B: "night",
    C: "[naɪt]",
    D: "n.晚上，夜晚",
    E: "ni+ght",
    F: "ni你+ght歌好听",
    G: "晚上你唱的的歌真好听",
    H: "I phoned him up last night.",
    I: "昨晚我给他打了电话。"
}, {
    B: "nose",
    C: "[nəʊz]",
    D: "n.鼻子，嗅觉",
    E: "no+se",
    F: "no不(熟词)+se色(拼音)",
    G: "不要让色狼亲吻你的鼻子",
    H: "The elephant has a long nose.",
    I: "大象的鼻子很长。"
}, {
    B: "play",
    C: "[pleɪ]",
    D: "n.戏剧，玩；vt.玩耍，游戏，扮演",
    E: "pl+ay",
    F: "pl漂亮+ay阿姨",
    G: "漂亮的阿姨在演戏剧",
    H: "Let's play a game.",
    I: "我们一起玩个游戏吧。"
}, {
    B: "ruler",
    C: "['ru:lə]",
    D: "n.尺",
    E: "ru+l+er",
    F: "ru入+l了+er儿",
    G: "拿着尺进入了儿子的房间",
    H: "I can't find my ruler.",
    I: "我找不到我的尺子了。"
}, {
    B: "strong",
    C: "[strɒŋ]",
    D: "adj.强壮的",
    E: "st+rong",
    F: "st石头+rong容",
    G: "强壮的人搬起石头很容易",
    H: "He is a strong man.",
    I: "他是个身体强壮的人。"
}, {
    B: "teacher",
    C: "['ti:tʃə]",
    D: "n.教师",
    E: "tea+ch+er",
    F: "tea茶(熟词)+ch菜花(拼音)+er儿(拼音)",
    G: "教师喝完茶拿菜花给儿子",
    H: "He is a teacher.",
    I: "他是一名教师。"
}, {
    B: "that",
    C: "[ðæt]",
    D: "pron.那，那个；adj.那，那个",
    E: "th+at",
    F: "th土豪(拼音)+at在(熟词)",
    G: "土豪在那",
    H: "That girl is my sister.",
    I: "那个女孩是我妹妹。"
}, {
    B: "this",
    C: "[ðɪs]",
    D: "pron.这",
    E: "th+is",
    F: "th土豪(拼音)+is是(熟词)",
    G: "土豪就是这个人",
    H: "This is your coat.",
    I: "这是你的外套。"
}, {
    B: "uncle",
    C: "['ʌŋkl]",
    D: "n.叔叔，伯父，舅舅",
    E: "un+cle",
    F: "un不(词缀)+cle吃了(拼音)",
    G: "叔叔不吃了",
    H: "He is my uncle.",
    I: "他是我叔叔。"
}, {
    B: "what",
    C: "[wɒt]",
    D: "pron.什么，多少",
    E: "wh+at",
    F: "wh王后(拼音)+at在(熟词)",
    G: "王后在做什么",
    H: "What is this?",
    I: "这是什么？"
}, {
    B: "children",
    C: "['tʃɪldrən]",
    D: "n.儿童",
    E: "chi+ld+ren",
    F: "chi吃+ld冷冻+ren人",
    G: "爱吃冷冻饮品的人是儿童",
    H: "Children shouldn't tell lies.",
    I: "小孩子不应该说谎。"
}, {
    B: "head",
    C: "[hed]",
    D: "n.头，头部",
    E: "he+ad",
    F: "he他(熟词)+adAD钙奶(谐音)",
    G: "他把AD钙奶放头上",
    H: "He has small eyes and a big head.",
    I: "他有小眼睛和大脑袋。"
}, {
    B: "picture",
    C: "['pɪktʃə]",
    D: "n.图画，照片",
    E: "pic+ture",
    F: "pic皮层(拼音)+ture扯(谐音)",
    G: "皮层扯下来就看到图画了",
    H: "This is a nice picture.",
    I: "这是一张漂亮的图片。"
}, {
    B: "good",
    C: "[gʊd]",
    D: "adj.好的，优良的",
    E: "goo+d",
    F: "goo900(象形)+d弟(编码)",
    G: "有900个弟弟是好的",
    H: "The piano was in good condition.",
    I: "这台钢琴状况良好。"
}, {
    B: "let",
    C: "[let]",
    D: "vt.让，允许",
    E: "l+et",
    F: "l棍子+et外星人",
    G: "让棍子打飞外星人",
    H: "Let's go home!",
    I: "让我们回家吧！"
}, {
    B: "morning",
    C: "['mɔ:nɪŋ]",
    D: "n.早晨，黎明",
    E: "mo+r++ning",
    F: "mo蘑(拼音)+r草(编码)++ning拧(拼音)",
    G: "早晨起来把蘑菇旁的草拧掉",
    H: "I get up early every morning.",
    I: "我每天早上都起得早。"
}, {
    B: "nice",
    C: "[naɪs]",
    D: "adj.好看的，令人愉快的",
    E: "n+ice",
    F: "n门(编码)+ice冰(熟词)",
    G: "门上结冰了，真好看",
    H: ` "That's a nice dress," said Michael. `,
    I: "“那件衣服很好看，”迈克尔说。"
}, {
    B: "use",
    C: "[ju:z]",
    D: "vt.使用，行使，运用",
    E: "us+e",
    F: "us我们(熟词)+e鹅(编码)",
    G: "这家店使用我们的鹅做原料",
    H: "Can I use your phone?",
    I: "我可以用一下你的电话吗？"
}, {
    B: "it",
    C: "[ɪt]",
    D: "pron.它",
    E: "i+t",
    F: "i蜡烛+t伞",
    G: "它给蜡烛撑伞挡风",
    H: "It is a cat.",
    I: "它是一只猫。"
}, {
    B: "she",
    C: "[ʃi:]",
    D: "pron.她的（she的宾格）",
    E: "she",
    F: "蛇",
    G: "她在玩蛇",
    H: "She speaks well of you all the time.",
    I: "她一直在说你的好话。"
}, {
    B: "thank",
    C: "[θæŋk]",
    D: "vt.感谢；n.谢谢",
    E: "th+a+nk",
    F: "th土豪(拼音)+a一个(熟词)+nk耐克(拼音)",
    G: "感谢土豪给我一双耐克鞋",
    H: "Thank you for taking me home.",
    I: "感谢你送我回家。"
}, {
    B: "do",
    C: "[du:]",
    D: "vt.做，干",
    E: "d弟+o洞",
    F: "d弟+o洞",
    G: "弟弟挖洞做什么",
    H: "She shows me how to do it.",
    I: "她告诉我怎样做这事。"
}, {
    B: "like",
    C: "[laɪk]",
    D: "vt.喜欢，想",
    E: "like",
    F: "like理科",
    G: "我喜欢理科",
    H: "I like playing basketball.",
    I: "我喜欢打篮球。"
}, {
    B: "telephone",
    C: "['telɪfəʊn]",
    D: "n.电话",
    E: "tele+ph+one",
    F: "tele特乐(拼音)+ph屁孩(拼音)+one一个(熟词)",
    G: "特别快乐的屁孩打了一个电话",
    H: "He is answering the telephone.",
    I: "他正在接电话。"
}, {
    B: "birthday",
    C: "['bɜ:θdeɪ]",
    D: "n.生日",
    E: "birth+day",
    F: "birth出生+day天",
    G: "出生那天就是生日",
    H: "Happy birthday to you!",
    I: "祝你生日快乐！"
}, {
    B: "get",
    C: "[get]",
    D: "vt.得到，获得",
    E: "ge+t",
    F: "ge哥(拼音)+t伞(编码)",
    G: "哥得到一把伞",
    H: "I get a new job.",
    I: "我得到一份新工作。"
}, {
    B: "go",
    C: "[gəʊ]",
    D: "vi.走",
    E: "g+o",
    F: "g哥+o洞",
    G: "哥哥走到了洞里",
    H: "You can go now.",
    I: "你现在可以走了。"
}, {
    B: "look",
    C: "[lʊk]",
    D: "vi.看起来，看，注意",
    E: "loo+k",
    F: "loo100(象形)+k机关枪(编码)",
    G: "100支机关枪看起来很壮观",
    H: "She looks like her mother.",
    I: "她看起来像她妈妈。"
}, {
    B: "orange",
    C: "['ɒrɪn(d)ʒ]",
    D: "n.橙色，橙；adj.橙色的",
    E: "o+rang+e",
    F: "o蛋(编码)+rang让(拼音)+e鹅(编码)",
    G: "吃了鸡蛋让鹅变成了橙色",
    H: "I like drinking orange juice.",
    I: "我喜欢喝橙汁。"
}, {
    B: "want",
    C: "[wɒnt]",
    D: "vt.要",
    E: "wan+t",
    F: "wan玩(拼音)+t伞(编码)",
    G: "宝宝想要玩伞",
    H: "I want some bananas.",
    I: "我想要一些香蕉。"
}, {
    B: "we",
    C: "[wi:]",
    D: "pron.我们",
    E: "w+e",
    F: "w皇冠+e鹅",
    G: "皇冠和鹅是我们的",
    H: "We are friends.",
    I: "我们是朋友。"
}, {
    B: "where",
    C: "[weə]",
    D: "pron.哪里；adv.在哪儿",
    E: "w+here",
    F: "w皇冠(编码)+here这(熟词)",
    G: "皇冠在哪里？在这里",
    H: "Where is my pen?",
    I: "我钢笔在哪里？"
}, {
    B: "white",
    C: "[waɪt]",
    D: "adj.白色的",
    E: "wh+i+te",
    F: "wh王后(拼音)+i蜡烛(编码)+te特(拼音)",
    G: "王后的蜡烛特别白",
    H: "Snow is white.",
    I: "雪是白色的。"
}, {
    B: "yellow",
    C: "['jeləʊ]",
    D: "adj.黄色的；n.黄色",
    E: "ye+llo+w",
    F: "ye爷(拼音)+llo110(象形)+w皇冠(编码)",
    G: "爷爷打110说皇冠变成黄色的了",
    H: "This T-shirt is yellow.",
    I: "这件T恤是黄色的。"
}, {
    B: "close",
    C: "[kləuz]",
    D: "vt.关闭",
    E: "c+lo+se",
    F: "c看见(编码see)+lo10(象形)+se色(拼音)",
    G: "看见10个色狼被关在里面",
    H: "Just close up the shop. ",
    I: "把店关了就好了。"
}, {
    B: "build",
    C: "[bɪld]",
    D: "vt.建造，建立",
    E: "bu+i+ld",
    F: "bu部(拼音)+i骨头(编码)+ld楼顶(拼音)",
    G: "部长要求用骨头建造楼顶",
    H: "We will build a house.",
    I: "我们将建一个房子。"
}, {
    B: "between",
    C: "[bɪ'twi:n]",
    D: "prep.在…之间",
    E: "be+tw+ee+n",
    F: "be是(熟词)+tw跳舞(拼音)+ee两只鹅(编码)+n门(编码)",
    G: "是谁在跳舞？原来是两只鹅在门",
    H: "I sit between my mom and dad.",
    I: "我在妈妈和爸爸中间坐着。"
}, {
    B: "all",
    C: "[ɔːl]",
    D: "adj.所有的，全部的",
    E: "a+ll",
    F: "a苹果(编码)+ll11(象形)",
    G: "所有的苹果共11个",
    H: "All boys like playing football.",
    I: "所有男孩子都喜欢踢足球。"
}, {
    B: "after",
    C: "['ɑ:ftə]",
    D: "prep.在...后面；adv.后来",
    E: "af+t+er",
    F: "af阿芙(拼音)+t伞(编码)+er儿(拼音)",
    G: "阿芙打着伞走在儿子",
    H: "He leaves after lunch.",
    I: "他在午饭后离开。"
}, {
    B: "job",
    C: "[dʒɒb]",
    D: "n.工作，任务",
    E: "j+ob",
    F: "j钩子(编码)+ob欧巴(拼音)",
    G: "做钩子是欧巴的工作",
    H: "Many people have lost their jobs.",
    I: "很多人失去了工作。"
}, {
    B: "live",
    C: "[lɪv]",
    D: "vi.活，居住",
    E: "li+ve",
    F: "li李(拼音)+ve维E(编码)",
    G: "李先生吃了维生素E后活得很久",
    H: "I live with my family.",
    I: "我和家人住在一起。"
}, {
    B: "music",
    C: "['mju:zɪk]",
    D: "n.音乐",
    E: "mu+si+c",
    F: "mu母(拼音)+si四(拼音)+c月(编码)",
    G: "母亲早上四点在月光下听音乐",
    H: "He is interested in music.",
    I: "他对音乐有兴趣。"
}, {
    B: "learn",
    C: "[lɜ:n]",
    D: "vt.学习，获悉；vi.了解，习得",
    E: "l+ear+n",
    F: "l棍子(编码)+ear耳朵(熟词)+n门(编码)",
    G: "悟空把棍子插进耳朵在门口学习",
    H: "He learned to wash the clothes.",
    I: "他学会了洗衣服。"
}, {
    B: "cook",
    C: "[kʊk]",
    D: "n.厨师；vi.烧菜",
    E: "c+oo+k",
    F: "c耳朵(编码)+oo望远镜(象形)+k国王(编码)",
    G: "厨师的耳朵上挂着望远镜给国王做菜",
    H: "He is a cook.",
    I: "他是个厨师。"
}, {
    B: "factory",
    C: "['fækt(ə)rɪ]",
    D: "n.工厂，制造场所",
    E: "fact+or+y",
    F: "fact事实(熟词)+or偶人(拼音)+y树枝(编码)",
    G: "事实上，偶人用树枝盖了间工厂",
    H: "Some officials will look over our factory this Friday.",
    I: "本周五一些官员将察看我们的厂子。"
}, {
    B: "when",
    C: "[wen]",
    D: "conj.当...时候",
    E: "w+hen",
    F: "w皇冠(编码)+hen很(拼音)",
    G: "当你戴皇冠",
    H: "I will call you when I get home.",
    I: "当我到家的时候我就给你打电话。"
}, {
    B: "wrong",
    C: "[rɒŋ]",
    D: "adj.错误的，有毛病的",
    E: "w+rong",
    F: "w皇冠(编码)+rong容(拼音)",
    G: "戴着皇冠容易犯错误",
    H: "My answer is wrong.",
    I: "我的答案是错的。"
}, {
    B: "love",
    C: "[lʌv]",
    D: "n.爱；vt.喜欢",
    E: "lo+ve",
    F: "lo10(象形)+ve维E(编码)",
    G: "我爱同时吃10颗维E",
    H: "I love my home.",
    I: "我爱我家。"
}, {
    B: "child",
    C: "[tʃaɪld]",
    D: "n.小孩，儿童",
    E: "chi+ld",
    F: "chi吃+ld冷冻",
    G: "小孩爱吃冷冻饮品",
    H: "He is my child.",
    I: "他是我的孩子。"
}, {
    B: "tell",
    C: "[tel]",
    D: "vt./vi.告诉，说，讲述",
    E: "te+ll",
    F: "te特(拼音)+ll筷子(象形)",
    G: "告诉我特别的筷子在哪",
    H: "The boy is telling stories.",
    I: "那个男孩在讲故事。"
}, {
    B: "read",
    C: "[ri:d]",
    D: "vt.阅读",
    E: "re+ad",
    F: "re热(拼音)+adAD钙奶(谐音)",
    G: "阅读时爱喝热的AD钙奶",
    H: "I'm reading a book.",
    I: "我正在读一本书。"
}, {
    B: "make",
    C: "[meɪk]",
    D: "vt./vi.使得",
    E: "ma+ke",
    F: "ma妈+ke渴",
    G: "天热使得妈妈渴了",
    H: "My sister often makes me happy.",
    I: "我姐姐经常逗我开心。"
}, {
    B: "help",
    C: "[help]",
    D: "vt.求助，帮助",
    E: "he+lp",
    F: "he他(熟词)+lp老婆(拼音)",
    G: "他向他老婆求助",
    H: "He always helps with the housework.",
    I: "他总是帮着做家务。"
}, {
    B: "computer",
    C: "[kəm'pjuːtə]",
    D: "n.电脑，计算机",
    E: "com+put+er",
    F: "com(e)来(熟词)+put放(熟词)+er儿(拼音)",
    G: "电脑搬过来放在儿子房间",
    H: "Mike likes to play computer games.",
    I: "Mike喜欢玩电脑游戏。"
}, {
    B: "come",
    C: "[kʌm]",
    D: "vi.来，开始，出现",
    E: "co+me",
    F: "co可乐(coke)+me我",
    G: "谁来买可乐给我喝？",
    H: "I come from China.",
    I: "我来自中国。"
}, {
    B: "study",
    C: "['stʌdɪ]",
    D: "n.书房，学习；vt.学习",
    E: "stu+dy",
    F: "stu试图+dy毒药",
    G: "试图把毒药放在书房",
    H: "He likes to study.",
    I: "他喜欢学习。"
}, {
    B: "story",
    C: "['stɔ:rɪ]",
    D: "n.故事，小说",
    E: "sto+ry",
    F: "sto石头+ry人妖",
    G: "石头上坐着的人妖在讲故事",
    H: "My father tells me a story.",
    I: "父亲给我讲了个故事。"
}, {
    B: "right",
    C: "[raɪt]",
    D: "adj.右边的，正确的",
    E: "rig+ht",
    F: "rig日光+ht海滩",
    G: "日光照在海滩的右边",
    H: "Keep on the right side of the road.",
    I: "靠马路的右边行走。"
}, {
    B: "anything",
    C: "['enɪθɪŋ]",
    D: "pron.任何事",
    E: "any+thing",
    F: "any任何的+thing事情",
    G: "任何事都可以解决",
    H: "We can't do anything.",
    I: "我们什么也做不了。"
}, {
    B: "playground",
    C: "['pleɪgraʊnd]",
    D: "n.操场",
    E: "play+ground",
    F: "play玩+ground地面",
    G: "在操场上玩地面打滚",
    H: "The children are playing in the playground.",
    I: "孩子们正在在操场玩耍。"
}, {
    B: "much",
    C: "[mʌtʃ]",
    D: "adj.许多的；adv.很，非常",
    E: "mu+ch",
    F: "mu母+ch吃",
    G: "母亲吃了许多的菜",
    H: "I have much homework everyday.",
    I: "我每天都有很多作业。"
}, {
    B: "library",
    C: "['laɪbrərɪ]",
    D: "n.图书馆，藏书室",
    E: "lib+ra+ry",
    F: "lib李白(拼音)+ra拉(谐音)+ry人妖(拼音)",
    G: "李白拉人妖去图书馆",
    H: "And you know what they have in the library?",
    I: "你们知道图书馆里有什么吗？"
}, {
    B: "bathroom",
    C: "['bɑːθruːm]",
    D: "n.浴室",
    E: "ba+th+room",
    F: "ba爸(拼音)+th土豪(拼音)+room房间(熟词)",
    G: "爸爸和土豪洗澡的房间就是浴室",
    H: "He cleaned the bathroom this morning.",
    I: "他早上打扫卫生间了。"
}, {
    B: "Chinese",
    C: "[,tʃai'ni:z]",
    D: "n.中国人；adj.中国人的",
    E: "Chi+ne+se",
    F: "Chi吃+ne呢+se色",
    G: "中国人吃饭呢，很有特色",
    H: "You are a Chinese.",
    I: "你是中国人。"
}, {
    B: "minute",
    C: "['mɪnɪt]",
    D: "n.分钟，分",
    E: "mi+nu+te",
    F: "mi米+nu努+te天鹅",
    G: "我每分钟都要拿米努力地喂天鹅",
    H: "Wait for a minute.",
    I: "稍等一分钟。"
}, {
    B: "beautiful",
    C: "['bju:tɪful]",
    D: "adj.美丽的",
    E: "beau+ti+ful",
    F: "beau碧悠(谐音)+ti提(拼音)+ful肤(谐音)",
    G: "达能碧悠酸奶能提亮肤色，让你变美丽的",
    H: "Alice is a beautiful girl.",
    I: "Alice是一个美丽的女孩。"
}, {
    B: "welcome",
    C: "['welkəm]",
    D: "n./v.欢迎",
    E: "we+l+come",
    F: "we我们(熟词)+l棍子(编码)+come来(熟词)",
    G: "我们拿着棍子来欢迎你",
    H: "You are always welcome to our house.",
    I: "欢迎你随时到我们家。"
}, {
    B: "them",
    C: "[ðem]",
    D: "pron.他们，她们，它们",
    E: "the+m",
    F: "the这个(熟词)+m麦当劳(编码)",
    G: "这个麦当劳是他们的",
    H: "I can't find them.",
    I: "我找不到他们了。"
}, {
    B: "see",
    C: "[si:]",
    D: "vt.看，看见，理解",
    E: "s+ee",
    F: "s蛇+ee眼睛",
    G: "蛇的眼睛看着我",
    H: "It's great to see you.",
    I: "见到你真是太好了。"
}, {
    B: "open",
    C: "['əʊp(ə)n]",
    D: "vi./vt.打开，公开",
    E: "o+pen",
    F: "o蛋(编码)+pen钢笔(熟词)",
    G: "打开鸡蛋用钢笔搅拌",
    H: "Open the door, please!",
    I: "请开门！"
}, {
    B: "nurse",
    C: "[nɜ:s]",
    D: "n.护士",
    E: "nu+r+se",
    F: "nu奴(拼音)+r草(编码)+se色(拼音)",
    G: "奴隶除草时看见色狼跟踪护士",
    H: "Amy wants to be a nurse.",
    I: "艾米想成为一名护士。"
}, {
    B: "next",
    C: "[nekst]",
    D: "adj.下一个的，其次的",
    E: "n+e+xt",
    F: "n门(编码)+e鹅(编码)+xt心态(拼音)",
    G: "下一个门口的鹅心态很好",
    H: "Let's plan a big party next week！",
    I: "我们下周组织一次盛大的派对吧！"
}, {
    B: "news",
    C: "[nju:z]",
    D: "n.新闻，消息",
    E: "new+s",
    F: "new新的(熟词)+s美女(编码)",
    G: "新的美女在播报新闻",
    H: "What is the news?  ",
    I: "有什么新闻？"
}, {
    B: "floor",
    C: "[flɔː]",
    D: "n.地面，地板，楼层",
    E: "f+loo+r",
    F: "f斧头(编码)+loo100(象形)+r小草(编码)",
    G: "斧头把100根小草除掉了露出地面",
    H: "They played cards on the floor.",
    I: "他们在地板上玩牌。"
}, {
    B: "eat",
    C: "[iːt]",
    D: "vt.吃，喝，腐蚀，烦扰",
    E: "e+at",
    F: "e鹅(编码)+at在(熟词)",
    G: "鹅在吃东西",
    H: "I don't eat meat.",
    I: "我不吃肉。"
}, {
    B: "holiday",
    C: "['hɒlɪdeɪ]",
    D: "n.假日，节日，休息日",
    E: "holi+day",
    F: "holi厚礼(拼音)+day天(熟词)",
    G: "收厚礼的那天就是假日",
    H: "I want to go on holiday.",
    I: "我想去度假。"
}, {
    B: "fast",
    C: "[fɑ:st]",
    D: "adj.快速的",
    E: "fa+st",
    F: "fa发+st石头",
    G: "老师发了石头就快速地跑了",
    H: "I took a fast train.",
    I: "我坐上了快速列车。"
}, {
    B: "try",
    C: "[traɪ]",
    D: "vi./n.尝试；vt.试图，努力",
    E: "tr+y",
    F: "tr土人(拼音)+y树杈(编码)",
    G: "尝试多次的土人爬上了树杈",
    H: "I will try my best to help you.",
    I: "我会尽力帮助你。"
}, {
    B: "spring",
    C: "[sprɪŋ]",
    D: "n.春天；adj.春天的",
    E: "sp+r+ing",
    F: "sp山坡(拼音)+r草(编码)+ing鹰(谐音)",
    G: "春天山坡上全是草和鹰",
    H: "I like spring.",
    I: "我喜欢春天。"
}, {
    B: "never",
    C: "['nevə]",
    D: "adv.从不",
    E: "ne+ve+r",
    F: "ne哪(吒)(拼音)+ve维E(编码)+r草(编码)",
    G: "哪吒从不吃维E也不吃草",
    H: "You never help me.",
    I: "你从不帮我。"
}, {
    B: "king",
    C: "[kɪŋ]",
    D: "n.国王",
    E: "k+ing",
    F: "k机关枪(编码)+ing鹰(谐音)",
    G: "国王拿机关枪打老鹰",
    H: "The king has three sons.",
    I: "这个国王有三个儿子。"
}, {
    B: "free",
    C: "[fri:]",
    D: "adj.空闲的",
    E: "fr+ee",
    F: "fr夫人(拼音)+ee两只鹅(编码)",
    G: "空闲的夫人养了两只鹅",
    H: "She spent her free time shopping.",
    I: "她空闲的时候就去购物。"
}, {
    B: "fly",
    C: "[flaɪ]",
    D: "vi.飞越，飞行；n.飞行，苍蝇",
    E: "f+ly",
    F: "f斧头(编码)+ly老爷(拼音)",
    G: "斧头被老爷扔飞了",
    H: "The bird is flying.",
    I: "小鸟在飞。"
}, {
    B: "feel",
    C: "[fi:l]",
    D: "vt.摸，感觉，认为；n.感觉，触摸",
    E: "f+ee+l",
    F: "f斧头(编码)+ee眼睛(象形)+l棍子(编码)",
    G: "斧头用眼看，棍子用手摸",
    H: "The metal felt smooth and cold.",
    I: "这种金属摸起来冰冷而光滑。"
}, {
    B: "park",
    C: "[pɑ:k]",
    D: "n.公园，停车场",
    E: "pa+rk",
    F: "pa爬+rk入口",
    G: "爬过入口到公园",
    H: "We have a walk in the park.",
    I: "我们在公园散步。"
}, {
    B: "basketball",
    C: "['bɑ:skɪtbɔ:l]",
    D: "n.篮球",
    E: "basket+ball",
    F: "basket篮子+ball球",
    G: "篮子里的篮球爆炸了",
    H: "They will play basketball after class.",
    I: "他们放学后打篮球。"
}, {
    B: "jump",
    C: "[dʒʌmp]",
    D: "vt.跳",
    E: "ju+mp",
    F: "ju巨+mp孟婆",
    G: "巨重的孟婆跳进水里",
    H: "He jumped out of a third-floor window. ",
    I: "他从3楼的窗户跳了出去。"
}, {
    B: "parent",
    C: "['peər(ə)nt]",
    D: "n.父（母）亲",
    E: "pa+re+nt",
    F: "pa怕+re热+nt难题",
    G: "父母亲很怕热也是一大难题",
    H: "Our parents are great.",
    I: "我们的父母都很伟大。"
}, {
    B: "housework",
    C: "['haʊswɜ:k]",
    D: "n.家务",
    E: "house+work",
    F: "house房子+work工作",
    G: "在房子里面除了继续工作就只能做家务",
    H: "We will get up early and do some housework. ",
    I: "我们会早起并且做点家务。"
}, {
    B: "think",
    C: "[θɪŋk]",
    D: "vt./vi.想",
    E: "th+in+k",
    F: "th土豪(拼音)+in里面(熟词)+k机关枪(编码)",
    G: "土豪想买里面的机关枪",
    H: "I think you are right.",
    I: "我想你是对的。"
}, {
    B: "fun",
    C: "[fʌn]",
    D: "adj.有趣",
    E: "fu+n",
    F: "fu父(拼音)+n门(编码)",
    G: "父亲画的门很有趣",
    H: "It was a fun evening. ",
    I: "那个晚上令人愉快。"
}, {
    B: "visit",
    C: "['vɪzɪt]",
    D: "vt./vi.参观",
    E: "v+i+sit",
    F: "v胜利(编码)+i我(熟词I)+sit坐(熟词)",
    G: "取得胜利后我可以坐在车里参观长城",
    H: "Welcome to visit my room.",
    I: "欢迎随时来参观我的房间。"
}, {
    B: "keep",
    C: "[ki:p]",
    D: "vt.保持",
    E: "k+ee+p",
    F: "k国王(编码king)+ee眼睛(象形)+p皮鞋(编码)",
    G: "国王的眼睛盯着皮鞋，保持沉默",
    H: "Keep smiling!",
    I: "要保持笑容！"
}, {
    B: "sunny",
    C: "['sʌnɪ]",
    D: "adj.阳光充足的",
    E: "sun+ny",
    F: "sun孙(拼音)+ny你(谐音)",
    G: "孙子和你都喜欢阳光充足的天气",
    H: "It is sunny today.",
    I: "今天的天气非常晴朗。"
}, {
    B: "wear",
    C: "[weə(r)]",
    D: "vt.戴，穿",
    E: "w+ear",
    F: "w皇冠(编码)+ear耳朵(熟词)",
    G: "你看他的皇冠在耳朵上面戴着呢",
    H: "I will wear this ring.",
    I: "我将会戴这个戒指。"
}, {
    B: "change",
    C: "[tʃeindʒ]",
    D: "v.变化，改变",
    E: "chang+e",
    F: "chang嫦+e娥",
    G: "嫦娥的变化太大了",
    H: "I want to change my hair style.",
    I: "我想改变发型。"
}, {
    B: "milk",
    C: "[mɪlk]",
    D: "n.牛奶",
    E: "mi+lk",
    F: "mi蜜+lk两块",
    G: "蜜蜂拿着两块钱买牛奶",
    H: "Tom drinks milk everyday.",
    I: "汤姆每天都喝牛奶。"
}, {
    B: "drink",
    C: "[drɪŋk]",
    D: "vt.喝，饮，吸收；n.饮料",
    E: "dr+ink",
    F: "dr大人(拼音)+ink墨水(熟词)",
    G: "大人把墨水喝了",
    H: "Can I have a drink ?",
    I: "给我来一杯饮料好吗？"
}, {
    B: "walk",
    C: "[wɔ:k]",
    D: "v.走路，走过",
    E: "wa+lk",
    F: "wa娃+lk路口",
    G: "娃在路口学走路",
    H: "He walks to school.",
    I: "他走路去上学。"
}, {
    B: "both",
    C: "[bəʊθ]",
    D: "adj.两个（都）",
    E: "bo+th",
    F: "bo伯+th土豪",
    G: "伯伯和土豪两个都没来",
    H: "I liked them both.",
    I: "他俩我都喜欢。"
}, {
    B: "weather",
    C: "['weðə]",
    D: "n.天气，气候",
    E: "w+eat+her",
    F: "w我(拼音)+eat吃(熟词)+her她的(熟词)",
    G: "天气很好，我去吃她的喜酒",
    H: "The weather is bad.",
    I: "天气很差。"
}, {
    B: "different",
    C: "['dɪf(ə)r(ə)nt]",
    D: "adj.与众不同的，不同的",
    E: "differ+ent",
    F: "differ不同(熟词)+ent恩特(拼音)",
    G: "衣着与众不同的恩特很显眼",
    H: "They are different.",
    I: "他们是不同的。"
}, {
    B: "delicious",
    C: "[dɪ'lɪʃəs]",
    D: "adj.美味的，可口的",
    E: "deli+ci+ous",
    F: "deli德利+ci刺+ous藕丝",
    G: "德利用刺刀吃美味的藕丝",
    H: "The beef tastes delicious.",
    I: "牛肉尝起来很美味。"
}, {
    B: "country",
    C: "['kʌntrɪ]",
    D: "n.国家，乡下，乡村，故乡",
    E: "coun+try",
    F: "coun康(谐音)+try尝试(熟词)",
    G: "康复后尝试回到自己的国家",
    H: "I love my country.",
    I: "我爱我的祖国。"
}, {
    B: "finish",
    C: "['fɪnɪʃ]",
    D: "vt.完成，结束，用完",
    E: "fini+sh",
    F: "fini菲尼(谐音)+sh上海(拼音)",
    G: "菲尼在上海完成了任务",
    H: "Do not do anything else until you finish them. ",
    I: "在你完成它们之前不要去做任何其他的事情。"
}, {
    B: "wait",
    C: "[weɪt]",
    D: "vt./vi.等待，等候；n.等待",
    E: "wai+t",
    F: "wai外(拼音)+t伞(编码)",
    G: "外星人打着伞等待",
    H: "They wait for me at the gate.",
    I: "他们在大门口等我。"
}, {
    B: "sweet",
    C: "[swi:t]",
    D: "n.糖果，甜味；adj.甜的",
    E: "sw+ee+t",
    F: "sw室外(拼音)+ee两只鹅(编码)+t伞(编码)",
    G: "室外的两只鹅吃了伞里的糖果",
    H: "Wish you have a sweet dream.",
    I: "祝你做个甜美的梦。"
}, {
    B: "sure",
    C: "[ʃʊə]",
    D: "adj.确定的；adv.当然，的确",
    E: "su+r+e",
    F: "su苏(拼音)+r草(编码)+e鹅(编码)",
    G: "苏确定草被鹅吃了",
    H: "Are you sure about that?",
    I: "这事你确定吗？"
}, {
    B: "start",
    C: "[stɑ:t]",
    D: "n.开始，起点；vi.开始，启动，出发",
    E: "star+t",
    F: "star明星(熟词)+t伞(编码)",
    G: "明星拿着伞出发了",
    H: "I started to eat my breadfast.",
    I: "我开始吃早餐。"
}, {
    B: "quickly",
    C: "[ˈkwɪklɪ]",
    D: "adv.迅速地，飞快地",
    E: "qu+ic+kly",
    F: "qu去(拼音)+icIC卡(编码)+kly壳里(谐音)",
    G: "迅速地跑去把IC卡插进壳里",
    H: "Please do it quickly. ",
    I: "请快速地完成任务。"
}, {
    B: "main",
    C: "[meɪn]",
    D: "adj.主要的",
    E: "mai+n",
    F: "mai买(拼音)+n门(编码)",
    G: "主要的任务就是买一扇门",
    H: "What are the main rivers of your country?	",
    I: "你们国家的主要河流有哪些?"
}, {
    B: "coffee",
    C: "['kɒfɪ]",
    D: "n.咖啡，咖啡豆，咖啡色",
    E: "co+ff+ee",
    F: "co可乐(熟词coke)+ff两把斧头(编码)+ee眼睛(象形)",
    G: "卖可乐的人拿着两把斧头眼睛盯着顾客的咖啡",
    H: "I want a cup of coffee.",
    I: "我想要一杯咖啡。"
}, {
    B: "cloudy",
    C: "['klaʊdɪ]",
    D: "adj.多云的，阴天的",
    E: "c+loudy",
    F: "c月牙(编码)+loudy老弟(谐音)",
    G: "阴天的时候月牙被老弟射下来了",
    H: "It is cloudy today.",
    I: "今天天气多云。"
}, {
    B: "cloud",
    C: "[klaʊd]",
    D: "n.云，阴云，云状物",
    E: "c+loud",
    F: "c月牙(编码)+loud大声的(熟词)",
    G: "云对月牙说的话很大声",
    H: "There is a lot of cloud today.",
    I: "今天多云。"
}, {
    B: "busy",
    C: "['bɪzɪ]",
    D: "adj.忙碌的",
    E: "bus+y",
    F: "bus公交车(熟词)+y鸭(编码)",
    G: "公交车上的鸭子跑来跑去真忙",
    H: "She is very busy but she always finds time to help other people. ",
    I: "她很忙，可是她总会抽时间去帮助别人。"
}, {
    B: "bread",
    C: "[bred]",
    D: "n.面包",
    E: "b+read",
    F: "b男孩(编码boy)+read读(熟词)",
    G: "男孩边读书边吃面包",
    H: "All of them like eating bread.",
    I: "他们都喜欢吃面包。"
}, {
    B: "before",
    C: "[bɪ'fɔ:]",
    D: "adv.以前，在前；prep.在…之前，先于",
    E: "be+for+e",
    F: "be是(熟词)+for为了(熟词)+e鹅(编码)",
    G: "以前癞蛤蟆内讧是为了天鹅肉",
    H: "I have seen the movie before.",
    I: "我以前曾经看过这部电影。"
}, {
    B: "maybe",
    C: "[ˈmeɪbɪ]",
    D: "adv.可能",
    E: "ma+y+be",
    F: "ma妈(拼音)+y衣叉(编码)+be是(熟词)",
    G: "妈妈拿着衣叉可能是要打我",
    H: "Maybe he'll come, maybe he won't.",
    I: "他可能来，也可能不来。"
}, {
    B: "sky",
    C: "[skaɪ]",
    D: "n.天空",
    E: "sk+y",
    F: "sk上课(拼音)+y衣叉(编码)",
    G: "上课的时候看见衣叉漂浮在天空",
    H: "The sky is blue.",
    I: "天空是蓝色的。"
}, {
    B: "through",
    C: "[θru:]",
    D: "prep.穿过，通过",
    E: "th+rou+gh",
    F: "th土豪+rou肉+gh刚好",
    G: "土豪减掉100斤肉才能刚好穿过去",
    H: "We passed through that bridge.",
    I: "我们通过了那座桥。"
}, {
    B: "left",
    C: "[left]",
    D: "n.左边；adj.左边的",
    E: "le+ft",
    F: "le乐+ft斧头",
    G: "快乐地拿起左边斧头",
    H: "She quickly faced to left.",
    I: "她迅速将脸转向左边。"
}, {
    B: "bank",
    C: "[bæŋk]",
    D: "n.银行",
    E: "ban+k",
    F: "bank办卡",
    G: "要办卡找银行",
    H: "I need to go to bank now.",
    I: "我现在需要去银行。"
}, {
    B: "call",
    C: "[kɔːl]",
    D: "n.电话，呼叫；vt./vi.呼叫；",
    E: "ca+ll",
    F: "ca擦(拼音)+ll11(象形)",
    G: "擦干手机给11个人打电话",
    H: "You must call me this afternoon.",
    I: "下午，你必须打电话给我。"
}, {
    B: "answer",
    C: "['ɑ:nsə]",
    D: "vt/vi.回复，回答",
    E: "an+sw+er",
    F: "an一(熟词)+sw上网(拼音)+er儿子(拼音)",
    G: "一个人上网时，儿子回复了我",
    H: "I can answer your questions.",
    I: "我能回答你的这些问题。"
}, {
    B: "light",
    C: "[laɪt]",
    D: "n.电灯，光亮",
    E: "night",
    F: "night晚上",
    G: "晚上可以用电灯把房间照亮",
    H: "The light does not work.",
    I: "电灯坏了。"
}, {
    B: "arrive",
    C: "[ə'raɪv]",
    D: "vi.到达",
    E: "ar+rive",
    F: "ar矮人(拼音)+rive(r)河(熟词)",
    G: "矮人到达河边",
    H: "I arrived this morning.",
    I: "我今天早晨到。"
}, {
    B: "yourself",
    C: "[jɔ:'self]",
    D: "pron.你自己",
    E: "your+se+lf",
    F: "your你的(熟词)+se色(拼音)+lf礼服(拼音)",
    G: "你的有颜色的礼服你自己穿吧",
    H: "You can do it by yourself.",
    I: "你能自己做好它。"
}, {
    B: "forget",
    C: "[fə'get]",
    D: "vt.忘记，忘掉",
    E: "for+get",
    F: "for为+get得到",
    G: "为了得到就要忘记",
    H: "I will never forget you.",
    I: "我永远也不会忘记你。"
}, {
    B: "nothing",
    C: "['nʌθɪŋ]",
    D: "pron.没有什么",
    E: "no+thing",
    F: "no没有+thing事情",
    G: "没有什么事情比这件事重要",
    H: "There was nothing in her bag.",
    I: "她的包里什么都没有。"
}, {
    B: "problem",
    C: "['prɒbləm]",
    D: "n.问题，难题",
    E: "pro+bl+em",
    F: "pro飘柔(拼音)+bl61(象形)+em恶魔(拼音)",
    G: "飘柔洗发水解决了61个恶魔的问题",
    H: "That's your problem, not mine.",
    I: "那是你的问题，不是我的。"
}, {
    B: "surprise",
    C: "[sə'praɪz]",
    D: "n.惊讶，意外；v.使惊奇；adj.惊讶的",
    E: "sur+prise",
    F: "sur俗人(拼音)+prise价格(形似price)",
    G: "俗人觉得价格便宜的让人很意外",
    H: "To his surprise , he swept through the exit easily.",
    I: "令他惊奇的是，他竟然轻易地出境了。"
}, {
    B: "supermarket",
    C: "['su:pəmɑ:kɪt]",
    D: "n.超级市场",
    E: "super+market",
    F: "super超级+market市场",
    G: "超级市场里有奥特曼",
    H: "The supermarket is near my house.",
    I: "超市就在我的房子附近。"
}, {
    B: "around",
    C: "[ə'raʊnd]",
    D: "prep.在…周围",
    E: "a+round",
    F: "a一个+round圆",
    G: "围绕在一个圆圈的周围",
    H: "They walk around the house.",
    I: "他们绕着房子周围走。"
}, {
    B: "hospital",
    C: "['hɒspɪt(ə)l]",
    D: "n.医院",
    E: "hos+pi+tal",
    F: "hos霍斯(谐音)+pi批(拼音)+tal他了(拼音)",
    G: "在医院，霍斯批评他了",
    H: "I'm going to the hospital to visit my brother.",
    I: "我要去医院探望我弟弟。"
}, {
    B: "believe",
    C: "[bɪ'liːv]",
    D: "vt/vi.相信",
    E: "beli+eve",
    F: "beli比利(谐音)+eve眼睛(象形)",
    G: "相信比利的眼睛",
    H: "I believe you can do it.",
    I: "我相信你能做这件事情。"
}, {
    B: "stand",
    C: "[stænd]",
    D: "vi.站立，位于；vt.使站立",
    E: "st+an+d",
    F: "st石头(拼音)+an一(熟词)+d狗(编码dog)",
    G: "站立在石头上的是一只狗",
    H: "Please stand up.",
    I: "请站起来。"
}, {
    B: "leave",
    C: "[li:v]",
    D: "vt.离开，留下",
    E: "le+a+ve",
    F: "le乐(拼音)+a苹果(编码)+ve维E(编码)",
    G: "快乐地吃了苹果和维E就离开了",
    H: "Don't leave me alone.",
    I: "别留下我一个人。"
}, {
    B: "excited",
    C: "[ɪk'saɪtɪd]",
    D: "adj.兴奋的，激动的，活跃的",
    E: "ex+cite+d",
    F: "ex前夫(熟词)+cite赛题(谐音)+d弟(编码)",
    G: "前夫拿来赛题，弟弟看了很兴奋",
    H: "We were all excited by the news",
    I: "我们都为这消息感到兴奋"
}, {
    B: "date",
    C: "[deɪt]",
    D: "n.日期，约会，年代，枣椰子",
    E: "d+ate",
    F: "d狗(编码)+ate吃(熟词)",
    G: "按日期给狗吃不同的东西",
    H: "What's the date today?",
    I: "今天是几号？"
}, {
    B: "begin",
    C: "[bɪ'gɪn]",
    D: "vt/vi.开始",
    E: "be+g+in",
    F: "be有(熟词)+g鸽(编码)+in在里面(熟词)",
    G: "一开始有鸽子在鸟笼里",
    H: "I begin to do my homework at 12.",
    I: "12点我开始写作业。"
}, {
    B: "Australia",
    C: "[ɒ'streɪlɪə]",
    D: "n.澳大利亚",
    E: "A+us+tr+alia",
    F: "A苹果(编码)+us我们(熟词)+tr土人(拼音)+alia阿狸啊(拼音)",
    G: "在澳大利亚苹果被我们的土人给了阿狸啊",
    H: "He is from Australia.",
    I: "他来自澳大利亚。"
}, {
    B: "careful",
    C: "['keəfl]",
    D: "adj.小心，谨慎",
    E: "car+e+ful",
    F: "car汽车(熟词)+e鹅(编码)+ful服了(拼音)",
    G: "这么小心汽车还是把鹅撞了，真服了他",
    H: "You must be careful.",
    I: "你一定要小心点。"
}, {
    B: "hotel",
    C: "[həʊ'tel]",
    D: "n.酒店，旅馆，饭店",
    E: "ho+t+el",
    F: "ho猴(拼音)+t踢(编码)+el饿狼(拼音)",
    G: "酒店里有一只猴子在踢饿狼",
    H: "I took a rest in the hotel.",
    I: "我在酒店休息。"
}, {
    B: "exciting",
    C: "[ɪkˈsaɪtɪŋ]",
    D: "adj.激动的，兴奋的",
    E: "e+x+ci+ting",
    F: "e鹅(编码)+x剪刀(编码)+ci次(拼音)+ting挺(拼音)",
    G: "鹅拿着剪刀自己去了次动物园还挺激动地",
    H: "The race itself is very exciting.",
    I: "比赛本身非常刺激。"
}, {
    B: "city",
    C: "['sɪtɪ]",
    D: "n.城市",
    E: "ci+ty",
    F: "ci刺+ty太阳",
    G: "在城市里刺客怕见到太阳",
    H: "We all live in this city.",
    I: "我们都在这座城市生活。"
}, {
    B: "moon",
    C: "[mu:n]",
    D: "n.月亮，卫星",
    E: "mo+on",
    F: "mo默(拼音)+on在上面(熟词)",
    G: "月亮默默地在上面挂着",
    H: "Last night there was a full moon.",
    I: "昨晚是满月。"
}, {
    B: "office",
    C: "['ɒfɪs]",
    D: "n.办公室，政府机关",
    E: "off+ice",
    F: "off离开+ice冰",
    G: "离开结冰的办公室",
    H: "My mother works in the office.",
    I: "我妈妈在办公室里面工作。"
}, {
    B: "student",
    C: "['stju:dənt]",
    D: "n.学生",
    E: "stu+de+nt",
    F: "stu试图+de得+nt牛头",
    G: "学生试图得到牛头",
    H: "The studens are having an English class.",
    I: "学生们正在上英语课。"
}, {
    B: "store",
    C: "[stɔ:(r)]",
    D: "n.（大型）百货商店",
    E: "story",
    F: "story故事",
    G: "这个故事发生在百货商店",
    H: "This is a store.",
    I: "这是一个百货商店。"
}, {
    B: "nearby",
    C: "[ˌnɪə'baɪ]",
    D: "adj.在附近的",
    E: "near+by",
    F: "near近+by被",
    G: "近处的黄金都被附近的大妈抢光了",
    H: "He works in the nearby police station.",
    I: "他在附近的警察局工作。"
}, {
    B: "share",
    C: "[ʃeə(r)]",
    D: "vt.分享",
    E: "shape",
    F: "shape形状",
    G: "他把不同形状的饼干分享给大家",
    H: "I share my happiness with my friends.",
    I: "我和朋友们分享我的快乐。"
}, {
    B: "afraid",
    C: "[ə'freɪd]",
    D: "adj.害怕的",
    E: "a+fr+aid",
    F: "a一(熟词)+fr夫人(拼音)+aid帮助(熟词)",
    G: "感到害怕的一位夫人在寻求帮助",
    H: "Alice is afraid of dogs.",
    I: "Alice害怕狗。"
}, {
    B: "surprised",
    C: "[sə'praɪzd]",
    D: "adj.感到惊讶的，出人意料的",
    E: "sur+pri+sed",
    F: "sur俗人(拼音)+pri扑来(谐音)+sed蛇胆(拼音)",
    G: "俗人扑来吃蛇胆，我感到很惊讶",
    H: "I was surprised at the birthday present.",
    I: "这生日礼物让我感到很惊讶。"
}, {
    B: "America",
    C: "[ə'merɪkə]",
    D: "n.美国，美洲",
    E: "Am+er+ic+a",
    F: "Am上午(熟词)+er儿(拼音)+icIC卡(谐音)+a苹果(编码)",
    G: "上午儿子用IC卡在苹果上画美国地图",
    H: "I may go to America.",
    I: "我也许会去美国。"
}, {
    B: "angry",
    C: "['æŋgrɪ]",
    D: "adj.生气的",
    E: "an+gr+y",
    F: "an一个(熟词)+gr工人(拼音)+y衣叉(编码)",
    G: "一个工人把衣叉扔了因为很生气",
    H: "I am very angry with you.",
    I: "我生你的气了。"
}, {
    B: "give",
    C: "[gɪv]",
    D: "vt.给，产生",
    E: "g+ive",
    F: "g哥(编码)+ive衣服(谐音)",
    G: "哥哥把衣服给我了",
    H: "Give this letter to your mother.",
    I: "把这封信给你的母亲。"
}, {
    B: "hear",
    C: "[hɪə]",
    D: "vt.听，听到，听说",
    E: "h+ear",
    F: "h椅子(编码)+ear耳朵(熟词)",
    G: "坐在椅子上竖起耳朵听",
    H: "I can't hear your voice.",
    I: "我听不到你的声音。"
}, {
    B: "other",
    C: "['ʌðə]",
    D: "adj.其他的，另外的",
    E: "o+the+r",
    F: "o圈(编码)+the这个(熟词)+r草(编码)",
    G: "呼啦圈上除了这根草没其他的",
    H: "I have no other ideas.",
    I: "我没有其他主意了。"
}, {
    B: "simple",
    C: "['sɪmpl]",
    D: "adj.简单的",
    E: "sim+pl+e",
    F: "sim四米(拼音)+pl漂亮(拼音)+e鹅(编码)",
    G: "这只四米长的漂亮鹅生活很简单",
    H: "The answer is really quite simple.",
    I: "实际上答案相当简单。"
}, {
    B: "finally",
    C: "['faɪnəlɪ]",
    D: "adv.最后，终于，决定性地",
    E: "fin+all+y",
    F: "fin贩(谐音)+all所有的(熟词)+y衣叉(编码)",
    G: "最后小贩卖光了所有的衣叉",
    H: "Finally, after an hour, I went up to Jeremy's room. ",
    I: "一个小时后，我终于去了杰里米的房间。"
}, {
    B: "yesterday",
    C: "['jestədeɪ]",
    D: "n.昨天；adv.昨天",
    E: "yes+ter+day",
    F: "yes是(熟词)+ter特热(拼音)+day天(熟词)",
    G: "昨天是特热的一天",
    H: "They were happy yesterday.",
    I: "他们昨天很开心。"
}, {
    B: "actor",
    C: "['æktə(r)]",
    D: "n.演员",
    E: "act+or",
    F: "act表演(熟词)+or偶人(拼音)",
    G: "正在表演的偶人是演员",
    H: "I want to be an actor.",
    I: "我想当一名演员。"
}, {
    B: "musician",
    C: "[mju:'zɪʃ(ə)n]",
    D: "n.音乐家",
    E: "music+i+an",
    F: "music音乐+i我(I)+an一个",
    G: "这音乐是我认识的一个音乐家写的",
    H: "He grew up to be a great musician.",
    I: "他长大后成了伟大的音乐家。"
}, {
    B: "successful",
    C: "[sək'sesfl]",
    D: "adj.获得成功的",
    E: "success+ful",
    F: "success成功+ful(l)满的",
    G: "获得成功的人总是幸福满满",
    H: "He is a successful business man.",
    I: "他是个成功的商人。"
}, {
    B: "movie",
    C: "['mu:vɪ]",
    D: "n.电影，电影院",
    E: "move+i",
    F: "move移动+i我(I)",
    G: "我看电影时从旁边的座位移到中间",
    H: "Both of us like this movie.",
    I: "我们都很喜欢这部电影。"
}, {
    B: "history",
    C: "['hɪst(ə)rɪ]",
    D: "n.历史，历史学",
    E: "hi+story",
    F: "hi嗨+story故事",
    G: "很嗨的故事才能成为历史",
    H: "I am interested in history.",
    I: "我对历史感兴趣。"
}, {
    B: "only",
    C: "['əʊnlɪ]",
    D: "adv.只，仅仅；adj.唯一的，仅有的",
    E: "on+ly",
    F: "on在上面(熟词)+ly梨(谐音)",
    G: "只有上面有梨",
    H: "I have only one apple.",
    I: "我只有一个苹果。"
}, {
    B: "Africa",
    C: "['æfrɪkə]",
    D: "n.非洲",
    E: "Af+ri+ca",
    F: "Af爱妃+ri日+ca擦",
    G: "非洲的爱妃日日擦地板",
    H: "He comes from Africa.",
    I: "他来自非洲。"
}, {
    B: "choose",
    C: "[tʃuːz]",
    D: "vi./vt.挑选，选择",
    E: "choo+se",
    F: "choo出(谐音)+se色(拼音)",
    G: "挑选出色的人才",
    H: "Danny, come here and choose your ice cream. ",
    I: "丹尼，到这儿来挑你喜欢吃的冰淇淋。"
}, {
    B: "difficult",
    C: "['dɪfɪkəlt]",
    D: "adj.困难的",
    E: "di+ffi+cu+lt",
    F: "di弟(拼音)+ffi肥(谐音)+cu粗(拼音)+lt辣条(拼音)",
    G: "弟弟喂肥婆吃粗辣条太困难",
    H: "The exam was difficult.",
    I: "试卷很难。"
}, {
    B: "company",
    C: "['kʌmp(ə)nɪ]",
    D: "n.公司，陪伴，同伴",
    E: "com+p+any",
    F: "com(e)来(熟词)+p皮鞋(编码)+any任何(熟词)",
    G: "来买皮鞋的任何人都能进公司",
    H: "She joined the company in 2002.",
    I: "她于2002年加入这家公司。"
}, {
    B: "person",
    C: "['pɜ:sn]",
    D: "n.人",
    E: "p+er+son",
    F: "p皮鞋(编码)+er耳(拼音)+son儿子(熟词)",
    G: "穿皮鞋带耳机的儿子是一个人",
    H: "He is a nice person.",
    I: "他是一个很好的人。"
}, {
    B: "danger",
    C: "['deɪndʒə(r)]",
    D: "n.危险，风险",
    E: "dang+er",
    F: "dang挡+er儿",
    G: "他帮儿子挡住了危险",
    H: "When I hear music, I fear no danger. ",
    I: "当我听音乐时，我不再害怕危险。"
}, {
    B: "once",
    C: "[wʌns]",
    D: "adv.曾经，一次",
    E: "on+ce",
    F: "on在上面(熟词)+ce厕(拼音)",
    G: "我曾经爬到厕所上",
    H: "My daughter comes to visit me once every week.",
    I: "我女儿每周来看我一次。"
}, {
    B: "nature",
    C: "['neɪtʃə(r)]",
    D: "n.自然界，大自然",
    E: "na+ture",
    F: "na那(拼音)+ture真的(熟词)",
    G: "自然界那只恐龙是真的",
    H: "You cannot go against nature.  ",
    I: "你不能违背自然的规律。"
}, {
    B: "tall",
    C: "[tɔːl]",
    D: "adj.高的，长的",
    E: "ta+ll",
    F: "ta他(拼音)+ll11(象形)",
    G: "他11岁时就很高了",
    H: "How tall are you?",
    I: "你身高多少？"
}, {
    B: "small",
    C: "[smɔ:l]",
    D: "adj.小的，少的",
    E: "sm+all",
    F: "sm数码(拼音)+all都是(熟词)",
    G: "数码相机都是很小的",
    H: "This coat is too small for me.",
    I: "这件上衣对我来说太小了。"
}, {
    B: "notebook",
    C: "['nəʊtbʊk]",
    D: "n.笔记本",
    E: "note+book",
    F: "note笔记+book书",
    G: "他喜欢用笔记本把书上的东西记下来",
    H: "Copy this page in your notebook.",
    I: "把这一页抄到你的笔记本上。"
}, {
    B: "breakfast",
    C: "['brekfəst]",
    D: "n.早餐",
    E: "break+fast",
    F: "break休息+fast快速的",
    G: "休息完后快速吃早餐",
    H: "It is time to have breakfast.",
    I: "到时间吃早餐了。"
}, {
    B: "over",
    C: "['əʊvə]",
    D: "prep.在…之上，越过；adv.结束",
    E: "o+ve+r",
    F: "o蛋(编码)+ve唯一(谐音)+r草(编码)",
    G: "鸡蛋是唯一在草",
    H: "The bridge is over the river.",
    I: "桥在河上面。"
}, {
    B: "helpful",
    C: "['helpfl]",
    D: "adj.有用的，有帮助的",
    E: "help+ful",
    F: "help帮助(熟词)+ful俘虏(拼音)",
    G: "这个有用的工具帮助俘虏成功逃走",
    H: "This textbook is helpful for my study.",
    I: "这本教材对我的学习很有帮助。"
}, {
    B: "any",
    C: "['enɪ]",
    D: "adj.任何的",
    E: "an+y",
    F: "an一个(熟词)+y衣叉(编码)",
    G: "任何一个衣叉都不能用",
    H: "I'm not making any answers.",
    I: "我不做任何回答。"
}, {
    B: "there",
    C: "[ðeə]",
    D: "adv.在那里",
    E: "t+here",
    F: "t伞(编码)+here这里(熟词)",
    G: "在那里有伞而这里没有",
    H: "Put the chair there.",
    I: "把椅子放在那儿。"
}, {
    B: "move",
    C: "[mu:v]",
    D: "vt./vi.移动，（使）感动，变化；n.行动，改变",
    E: "mo+ve",
    F: "mo模(拼音)+ve维E(编码)",
    G: "模特把放维E的柜子移动了",
    H: "We must move at once in this matter.             					 ",
    I: "对这件事我们必须立刻采取行动。"
}, {
    B: "Canadian",
    C: "[kə'neɪdɪən]",
    D: "n.加拿大人；adj.加拿大（人）的",
    E: "Can+a+dian",
    F: "Can能(熟词)+a苹果(编码)+dian电(拼音)",
    G: "加拿大人能用苹果发电",
    H: "She is a Canadian.",
    I: "她是一名加拿大人。"
}, {
    B: "price",
    C: "[praɪs]",
    D: "n.价格，价值",
    E: "pr+ice",
    F: "pr仆人(拼音)+ice冰块(熟词)",
    G: "仆人在算冰块的价格",
    H: "Children over five must pay full price for the ticket.",
    I: "五岁以上的儿童须买全票。"
}, {
    B: "subway",
    C: "['sʌbweɪ]",
    D: "n.地铁，地下铁路",
    E: "sub+way",
    F: "sub苏伯(拼音)+way路(熟词)",
    G: "苏伯找到了去地铁站的路",
    H: "I have to go home by subway. ",
    I: "我得乘地铁回家去了。"
}, {
    B: "well",
    C: "[wel]",
    D: "adv.满意地，很好地；adj.良好的，健康的",
    E: "we+ll",
    F: "we我们(熟词)+ll梯子(象形)",
    G: "我们对这个梯子很满意",
    H: "He speaks English very well.",
    I: "他英语很好。"
}, {
    B: "ask",
    C: "[ɑːsk]",
    D: "vt/vi.问",
    E: "as+k",
    F: "as像..一样(熟词)+k机关枪(编码)",
    G: "问问题的时候就像开了机关枪一样",
    H: "Now let me ask you a question, for a change.  ",
    I: "现在换我来问你一个问题吧。"
}, {
    B: "deep",
    C: "[diːp]",
    D: "n.深处，深渊；adj.深的，低沉的，深奥的",
    E: "d+ee+p",
    F: "d狗(编码)+ee眼睛(象形)+p皮鞋(编码)",
    G: "狗眼睛看着皮鞋掉进深处",
    H: "The water is only a few inches deep.",
    I: "这水只有几英寸深。"
}, {
    B: "if",
    C: "[ɪf]",
    D: "conj.如果",
    E: "i+f",
    F: "i蜡烛+f斧头",
    G: "如果蜡烛被斧头砍了会怎样",
    H: "You can stay for the weekend if you like.",
    I: "你如果愿意就留在这里过周末吧。"
}, {
    B: "wake",
    C: "[weɪk]",
    D: "vi.醒来，叫醒",
    E: "wa+ke",
    F: "wa娃+ke渴",
    G: "娃渴了就醒来了",
    H: "Mum wakes me up in the morning.",
    I: "早上妈妈叫醒我。"
}, {
    B: "sleep",
    C: "[slɪ:p]",
    D: "vi.睡觉，睡；n.睡眠",
    E: "sheep",
    F: "sheep绵羊",
    G: "绵羊在睡觉",
    H: "They were exhausted from lack of sleep.",
    I: "由于缺乏睡眠，他们非常疲惫。"
}, {
    B: "buy",
    C: "[baɪ]",
    D: "vt.购买",
    E: "bu+y",
    F: "bu补+y药",
    G: "购买补药",
    H: "Xiao Hong is going to buy a book about sports.",
    I: "小红打算买一本故事书。"
}, {
    B: "dream",
    C: "[driːm]",
    D: "n.梦，梦想，愿望；vi./vt.梦想，做梦，梦见",
    E: "dr+e+am",
    F: "dr大人(拼音)+e鹅(编码)+am早上(熟词)",
    G: "大人抱着鹅在早上做梦",
    H: "Goodnight. Sweet dreams.",
    I: "晚安。祝你做个好梦。"
}, {
    B: "long",
    C: "[lɒŋ]",
    D: "adj.长的，过长的",
    E: "long",
    F: "long隆",
    G: "长隆欢乐世界的过山车很长",
    H: "This ruler is very long.",
    I: "这把尺子很长。"
}, {
    B: "now",
    C: "[naʊ]",
    D: "n.现在",
    E: "no+w",
    F: "no没有(熟词)+w皇冠(编码)",
    G: "现在我没有皇冠了",
    H: "It's raining now.",
    I: "现在正在下雨。"
}, {
    B: "they",
    C: "[ðeɪ]",
    D: "pron.他们，她们，它们",
    E: "the+y",
    F: "the这(熟词)+y树杈(编码)",
    G: "这个特大的树杈挡住了他们",
    H: "They are dogs.",
    I: "它们是小狗。"
}, {
    B: "know",
    C: "[nəʊ]",
    D: "vt.认识，知道",
    E: "k+now",
    F: "k国王(编码king)+now现在(熟词)",
    G: "国王现在已经认识你了",
    H: "I don't know what he was talking about.",
    I: "我不知道他在谈什么。"
}, {
    B: "listen",
    C: "['lɪs(ə)n]",
    D: "vi.听，倾听",
    E: "lis+ten",
    F: "lis力士(拼音)+ten十(熟词)",
    G: "力士一共10人在听课",
    H: "I like listening to music.",
    I: "我喜欢听音乐。"
}, {
    B: "people",
    C: "['pi:p(ə)l]",
    D: "n.民族，种族",
    E: "pe+op+le",
    F: "pe赔+op藕片+le了",
    G: "这个民族赔了藕片又折了兵",
    H: "There are 56 peoples in China.",
    I: "中国有56个民族。"
}, {
    B: "phone",
    C: "[fəʊn]",
    D: "n.电话，耳机",
    E: "ph+one",
    F: "ph屁孩(拼音)+one一个(熟词)",
    G: "屁孩一个人在打电话",
    H: "I have to make a phone call.",
    I: "我得打个电话。"
}, {
    B: "allow",
    C: "[ə'laʊ]",
    D: "vt.允许，给予，认可；vi.容许，考虑",
    E: "al+low",
    F: "al阿狸(拼音)+low低(熟词)",
    G: "允许阿狸跳得这么低",
    H: "Smoking is not allowed here.",
    I: "这里不准吸烟。"
}, {
    B: "alone",
    C: "[ə'ləʊn]",
    D: "adv.独自",
    E: "al+one",
    F: "al阿狸(拼音)+one一个(熟词)",
    G: "阿狸一个人独自站在路边",
    H: "He lives alone.",
    I: "他独居独处。"
}, {
    B: "amazing",
    C: "[ə'meɪzɪŋ]",
    D: "adj.令人大为惊奇的（事物）",
    E: "ama+z+ing",
    F: "ama阿妈(拼音)+z鸭子(编码)+ing鹰(谐音)",
    G: "阿妈养的鸭子被鹰吃了真是令人惊奇",
    H: "It was amazing how much we managed to do in a day.",
    I: "真想不到我们在一天之内做了这么多事情。"
}, {
    B: "anyone",
    C: "['enɪwʌn]",
    D: "pron.任何人，任何一个",
    E: "any+one",
    F: "any任何的+one一个",
    G: "任何人都可以任选一个",
    H: "Is anyone there?",
    I: "有人吗？"
}, {
    B: "cancel",
    C: "['kæns(ə)l]",
    D: "vt.取消，废除",
    E: "can+cel",
    F: "can能(熟词)+cel厕里(拼音)",
    G: "他能取消厕所里纸巾收费的规定",
    H: "Is it too late to cancel my order?",
    I: "我现在取消订单是不是太晚了？"
}, {
    B: "care",
    C: "[keə]",
    D: "vi.照顾，关注",
    E: "c+are",
    F: "c耳朵(编码)+are是(熟词)",
    G: "耳朵不好的人是需要多照顾的",
    H: "I just care for my homework.",
    I: "我只是关心我的作业。"
}, {
    B: "copy",
    C: "['kɒpɪ]",
    D: "vi./vt.抄写",
    E: "co+py",
    F: "co可乐(熟词coke)+py朋友(拼音)",
    G: "喝可乐的这个朋友在抄写我的作业",
    H: "She copied the phone number into her address book.",
    I: "她把那个电话号码抄写在自己的通讯录上。"
}, {
    B: "cover",
    C: "['kʌvə]",
    D: "vi.覆盖，代替；vt.包括，采访",
    E: "c+over",
    F: "c月牙(编码)+over上方(熟词)",
    G: "月牙在上方被覆盖了",
    H: "She covered her face with her hands.",
    I: "她双手掩面。"
}, {
    B: "empty",
    C: "['emptɪ]",
    D: "adj.空的",
    E: "em+p+ty",
    F: "em恶魔(拼音)+p皮鞋(编码)+ty踢(谐音)",
    G: "恶魔穿皮鞋踢空的盒子",
    H: "It's an empty box.",
    I: "这是一个空箱子。"
}, {
    B: "guitar",
    C: "[gɪ'tɑ:]",
    D: "n.吉他，六弦琴",
    E: "gui+t+ar",
    F: "gui鬼+t弹+ar矮人",
    G: "鬼弹矮人的吉他",
    H: "My sister gives me a guitar.",
    I: "我姐姐给了我一把吉他。"
}, {
    B: "height",
    C: "[haɪt]",
    D: "n.高度",
    E: "h+eight",
    F: "h椅子(编码)+eight八(熟词)",
    G: "椅子的高度相当于八只兔子",
    H: "Sunflowers can grow to a height of fifteen feets.",
    I: "向日葵能长到15英尺高。"
}, {
    B: "hers",
    C: "[hɜ:z]",
    D: "pron.她的（所有格）",
    E: "he+rs",
    F: "he他(熟词)+rs认识(拼音)",
    G: "他认识她的所有朋友",
    H: "This bag is hers.",
    I: "这个包是她的。"
}, {
    B: "his",
    C: "[hɪz]",
    D: "pron.他的",
    E: "h+is",
    F: "h椅子(编码)+is是(熟词)",
    G: "椅子是他的",
    H: "His father is an engineer.",
    I: "他的父亲是位工程师。"
}, {
    B: "kill",
    C: "[kɪl]",
    D: "vt.杀死",
    E: "k+ill",
    F: "k国王(编码king)+ill病(熟词)",
    G: "国王生病被杀了",
    H: "The police killed the thief.",
    I: "警察把小偷杀了。"
}, {
    B: "nearly",
    C: "['nɪəlɪ]",
    D: "adv.几乎，",
    E: "near+ly",
    F: "near附近的(熟词)+ly梨(谐音)",
    G: "这附近的梨几乎都",
    H: "I was nearly asleep.",
    I: "我差不多都睡着了。"
}, {
    B: "pay",
    C: "[peɪ]",
    D: "vt./vi.（paid，paid）付费",
    E: "pa+y",
    F: "pa趴(拼音)+y树杈(编码)",
    G: "他趴在树杈上付费",
    H: "We paid £35 for each ticket.",
    I: "我们每张票付了35英镑。"
}, {
    B: "point",
    C: "[pɒɪnt]",
    D: "n.目标，要点",
    E: "po+in+t",
    F: "po破(拼音)+in在里面(熟词)+t伞(编码)",
    G: "袋子破了，里面的伞成了小偷的目标",
    H: "That is just the point.  ",
    I: "那正是要点。"
}, {
    B: "quick",
    C: "[kwɪk]",
    D: "adj.迅速的，快的；n.核心",
    E: "qu+ic+k",
    F: "qu取(拼音)+icIC卡(编码)+k机枪(编码)",
    G: "迅速地取了IC卡买机关枪",
    H: "Be quick or you'll be late.",
    I: "动作快点，不然得迟到了。"
}, {
    B: "radio",
    C: "['reɪdɪəʊ]",
    D: "n.收音机，无线电广播",
    E: "ra+di+o",
    F: "ra瑞(谐音)+di弟(拼音)+o蛋(编码)",
    G: "瑞瑞的弟弟用鸡蛋换了一部收音机",
    H: "I listen to the radio on the way to work.",
    I: "我在上班的路上听广播。"
}, {
    B: "station",
    C: "['steɪʃn]",
    D: "n.车站；vt.驻扎，安置",
    E: "st+a+tion",
    F: "st石头(拼音)+a苹果(编码)+tion婶(谐音)",
    G: "石头上的苹果被阿婶带到了车站",
    H: "I live near the station.",
    I: "我住在车站附近。"
}, {
    B: "teach",
    C: "[ti:tʃ]",
    D: "v.教，教授",
    E: "tea+ch",
    F: "tea茶(熟词)+ch吃(拼音)",
    G: "教茶道的人是个吃货",
    H: "He teaches us English.",
    I: "他教我们英语。"
}, {
    B: "useful",
    C: "['ju:sfl]",
    D: "adj.有用的，可用的，有助益的",
    E: "use+ful",
    F: "use用(熟词)+ful俘虏(拼音)",
    G: "有用的线索助他抓到俘虏",
    H: "The slow cooker is very useful for people who go out all day.",
    I: "慢炖锅对于整天都不在家的人来说很有用。"
}, {
    B: "voice",
    C: "[vɒɪs]",
    D: "n.声音，嗓音",
    E: "vo+ice",
    F: "vo我(谐音)+ice冰(熟词)",
    G: "我的声音像冰一样冷",
    H: "I hate his voice.",
    I: "我讨厌他的声音。"
}, {
    B: "tourist",
    C: "['tʊərɪst]",
    D: "n.游客，旅游者，观光者",
    E: "tour+i+st",
    F: "tour旅行(熟词)+i蜡烛(编码)+st石头(拼音)",
    G: "游客旅行时带着蜡烛和石头",
    H: "Blackpool is the top tourist attraction in England.",
    I: "布莱克浦是英国的顶级旅游胜地。"
}, {
    B: "customer",
    C: "['kʌstəmə]",
    D: "n.顾客，家伙",
    E: "custom+er",
    F: "custom风俗(熟词)+er儿(拼音)",
    G: "顾客把家乡风俗讲给儿子听",
    H: "There are many customers in the store.",
    I: "商店里有很多顾客。"
}, {
    B: "address",
    C: "[ə'dres]",
    D: "n.地址",
    E: "ad+dress",
    F: "ad阿弟(拼音)+dress衣服(熟词)",
    G: "阿弟的衣服上写着地址",
    H: "Is that your home address?",
    I: "这是你的住址吗？"
}, {
    B: "friendship",
    C: "['frendʃɪp]",
    D: "n.友谊，友情",
    E: "friend+ship",
    F: "friend朋友+ship船",
    G: "朋友们在船上建立了深厚的友谊",
    H: "Your friendship is very important to me.",
    I: "你的友情对我非常重要。"
}, {
    B: "engineer",
    C: "[ˌendʒɪ'nɪə(r)]",
    D: "n.工程师",
    E: "engine+er",
    F: "engine引擎(熟词)+er儿(拼音)",
    G: "做引擎的儿子是工程师",
    H: "He dreams to be an engineer.",
    I: "他梦想成为一名工程师。"
}, {
    B: "area",
    C: "['eərɪə]",
    D: "n.地区",
    E: "are+a",
    F: "are是+a一",
    G: "这是一个地区",
    H: "There is no water in this area.",
    I: "这个地区没有水。"
}, {
    B: "chance",
    C: "[tʃɑ:ns]",
    D: "n.机会",
    E: "chan+ce",
    F: "chan缠+ce册",
    G: "缠着册子的蛇找机会咬人",
    H: "I need a chance.",
    I: "我需要一个机会。"
}, {
    B: "end",
    C: "[end]",
    D: "n.结束，目标，尽头",
    E: "en+d",
    F: "en摁(拼音)+d狗(编码dog)",
    G: "结束时摁倒了狗",
    H: "The meeting is the end.",
    I: "会议结束了。"
}, {
    B: "menu",
    C: "['menju:]",
    D: "n.菜单",
    E: "me+nu",
    F: "me我(熟词)+nu怒(拼音)",
    G: "我愤怒地扔掉菜单",
    H: "Can we see the menu, please?",
    I: "我们能看看菜单吗？"
}, {
    B: "habit",
    C: "['hæbɪt]",
    D: "n.习惯",
    E: "hab+it",
    F: "hab哈巴(拼音)+it它(熟词)",
    G: "这条哈巴狗它习惯吃骨头",
    H: "The man is always poking about in the office, and that is a bad habit",
    I: "这个人经常在办公室打听别人的事，那是一种坏习惯"
}, {
    B: "offer",
    C: "['ɒfə(r)]",
    D: "vi./vt.主动提出",
    E: "o+ff+er",
    F: "o蛋(编码)+ff两把斧头(编码)+er儿(拼音)",
    G: "吃着鸡蛋拿着两把斧头的儿子主动提出要帮忙",
    H: "My father offers to take us to the airport. ",
    I: "我父亲提出送我们去机场。"
}, {
    B: "future",
    C: "['fjuːtʃə]",
    D: "n.前途，未来",
    E: "fu+tu+re",
    F: "fu父+tu兔+re热",
    G: "父亲养的兔子热卖了，很有前途",
    H: "We discussed about our future plans.",
    I: "我们讨论了我们的将来计划。"
}, {
    B: "success",
    C: "[sək'ses]",
    D: "n.成功",
    E: "suc+ce+ss",
    F: "suc素菜(拼音)+ce厕(拼音)+ss两条蛇(编码)",
    G: "吃素菜的人在厕所抓到两条蛇后获得成功",
    H: "It will be a success.",
    I: "这件事将会成功。"
}, {
    B: "choice",
    C: "[tʃɒɪs]",
    D: "n.选择",
    E: "ch+o+ice",
    F: "ch吃(拼音)+o蛋(编码)+ice冰(熟词)",
    G: "你选择吃鸡蛋还是吃冰呢？",
    H: "He had no choice but to leave.",
    I: "除了离去，他别无选择。"
}, {
    B: "chat",
    C: "[tʃæt]",
    D: "vi.聊天，闲聊",
    E: "cha+t",
    F: "cha茶(拼音)+t伞(编码)",
    G: "喝茶时在伞下聊天",
    H: "He chats with his mother every day.",
    I: "他每天都跟他妈妈聊天。"
}, {
    B: "custom",
    C: "['kʌstəm]",
    D: "n.风俗，习惯",
    E: "cus+tom",
    F: "cus粗俗(拼音)+tom汤姆(熟词Tom)",
    G: "粗俗的汤姆不遵守当地风俗",
    H: "We both love that traditional custom.",
    I: "我们都喜欢那个传统风俗。"
}, {
    B: "mark",
    C: "[mɑ:k]",
    D: "vi./vt.做标记；n.标志，符号",
    E: "ma+rk",
    F: "ma妈+rk入口",
    G: "妈妈在入口处做了",
    H: "He made marks with a pencil.",
    I: "他用铅笔做了记号。"
}, {
    B: "level",
    C: "['lev(ə)l]",
    D: "n.水平，标准；vt.使同等，弄平",
    E: "l+eve+l",
    F: "l1(象形)+eve眼睛(象形)+l棍子(编码)",
    G: "有1双大眼睛的他拿着棍子站在水平线上",
    H: "She has a high level in writing.",
    I: "她有很高的写作水平。"
}, {
    B: "method",
    C: "['meθəd]",
    D: "n.方法",
    E: "me+th+od",
    F: "me我(熟词)+th土豪(拼音)+od欧弟(拼音)",
    G: "我有制服土豪欧弟的方法",
    H: "They are using a new method.",
    I: "他们正在使用一个新方法。"
}, {
    B: "active",
    C: "['æktɪv]",
    D: "adj.积极的，活跃的，主动的",
    E: "act+i+ve",
    F: "act表演(熟词)+i我(熟词I)+ve维E(编码)",
    G: "表演时我在积极地推销维E",
    H: "You have an active mind.",
    I: "你的思想很积极。"
}, {
    B: "central",
    C: "['sentrəl]",
    D: "adj.中央的，在中心的",
    E: "c+ent+r+al",
    F: "c看见(编码see)+ent进入(熟词enter)+r草(编码)+al阿狸(拼音)",
    G: "我们看见了进入草地中央的阿狸",
    H: "He stands in the central of park.",
    I: "他站在公园的中央。"
}, {
    B: "total",
    C: "['təʊt(ə)l]",
    D: "adj.总额",
    E: "to+tal",
    F: "to去+tal(l)高的",
    G: "去高处算总额",
    H: "The total is 30.",
    I: "总数是30。"
}, {
    B: "include",
    C: "[ɪn'klu:d]",
    D: "vt.包括",
    E: "in+clu+de",
    F: "in里面(熟词)+clu刻录(拼音)+de的(拼音)",
    G: "里面刻录的光盘包括哪些内容？",
    H: "This book includes much useful information.",
    I: "这本书包含许多有用信息。"
}, {
    B: "Australian",
    C: "[ɒ'streɪlɪən]",
    D: "n.澳大利亚人；adj.澳大利亚的，澳大利亚人的",
    E: "A+us+tr+alian",
    F: "A苹果(编码)+us我们(熟词)+tr突然(拼音)+alian阿莲(拼音)",
    G: "澳大利亚人送苹果给我们时突然砸到阿莲",
    H: "Her father is an Australian.",
    I: "她父亲是个澳大利亚人。"
}, {
    B: "Canada",
    C: "['kænədə]",
    D: "n.加拿大",
    E: "Can+ada",
    F: "Can能(熟词)+ada阿达(拼音)",
    G: "在加拿大能找到阿达",
    H: "We are going to visit Canada on holiday.",
    I: "假期我们打算去加拿大。"
}, {
    B: "newspaper",
    C: "['nju:zpeɪpə(r)]",
    D: "n.报纸",
    E: "news+paper",
    F: "news新闻+paper纸",
    G: "报纸是一种把新闻写在纸上的刊物",
    H: "Which newspaper do you read regularly? ",
    I: "平常你看什么报纸？"
}, {
    B: "age",
    C: "[eɪdʒ]",
    D: "n.年龄",
    E: "age",
    F: "阿哥",
    G: "阿哥年龄很大",
    H: "He is at the age of six.",
    I: "他六岁。"
}, {
    B: "kilometer",
    C: "['kɪləˌmi:tə]",
    D: "n.千米",
    E: "kilo+meter",
    F: "kilo千+meter米",
    G: "一千米就是一公里",
    H: "He lives one kilometer away from the school.",
    I: "他家离学校有一千米。"
}, {
    B: "own",
    C: "[əʊn]",
    D: "adj.自己的，特有的；vt.拥有",
    E: "owe",
    F: "owe欠",
    G: "自己欠的债自己还",
    H: "You own your body.",
    I: "你拥有你自己的身体。"
}, {
    B: "outside",
    C: "[aʊt'saɪd]",
    D: "adv.在…外面",
    E: "out+side",
    F: "out外的+side方面",
    G: "外面的世界很精彩",
    H: "All the outside doors have locks.",
    I: "所有外面的门都上了锁。"
}, {
    B: "order",
    C: "['ɔ:də(r)]",
    D: "n.订货",
    E: "or+d+er",
    F: "or偶人(拼音)+d弟(编码)+er儿(拼音)",
    G: "偶人是弟弟给儿子的订货",
    H: "They made an order of 1,000 books.",
    I: "他们订了1，000本书。"
}, {
    B: "rule",
    C: "[ru:l]",
    D: "n.规则",
    E: "ru+le",
    F: "ru入+le了",
    G: "入了门就要懂规则",
    H: "The game has many rules.",
    I: "这个游戏有很多规则。"
}, {
    B: "aloud",
    C: "[ə'laʊd]",
    D: "adv.大声地，出声地",
    E: "a+loud",
    F: "a一+loud响亮的",
    G: "大声地发出一个响亮的笑声",
    H: "He read the letter aloud to us.",
    I: "他把信大声念给我们听。"
}, {
    B: "lock",
    C: "[lɒk]",
    D: "vi./vt.（用锁）锁上，锁",
    E: "look",
    F: "look看",
    G: "我看到门锁上了",
    H: "Lock up all the doors before you go out.",
    I: "出门之前锁上所有的门。"
}, {
    B: "knowledge",
    C: "['nɒlɪdʒ]",
    D: "n.知识",
    E: "know+le+dge",
    F: "know知道(熟词)+le了(拼音)+dge大哥(拼音)",
    G: "我知道了大哥是怎么学习知识的",
    H: "Knowledge is power.",
    I: "知识就是力量。"
}, {
    B: "note",
    C: "[nəʊt]",
    D: "n.笔记，记录",
    E: "not+e",
    F: "not不(熟词)+e鹅(拼音)",
    G: "笔记不是鹅写的",
    H: "He takes notes in class.",
    I: "他上课记笔记。"
}, {
    B: "anytime",
    C: "['enɪˌtaɪm]",
    D: "adv.在任何时候",
    E: "any+time",
    F: "any任何的+time时间",
    G: "任何时候都可以来找我",
    H: "We don't play with fire anytime.",
    I: "任何时候都不要玩火。"
}, {
    B: "nobody",
    C: "['nəʊbədɪ]",
    D: "pron.没有人",
    E: "no+body",
    F: "no不+body身体",
    G: "没有人不爱惜自己的身体",
    H: "Nobody asked his opinion.",
    I: "没人征求他的意见。"
}, {
    B: "text",
    C: "[tekst]",
    D: "n.文本",
    E: "next",
    F: "next下一个",
    G: "下一个文本是我做的",
    H: "The text is very easy.",
    I: "这个文本很简单。"
}, {
    B: "weekday",
    C: "['wi:kdeɪ]",
    D: "n.工作日",
    E: "week+day",
    F: "week星期+day天",
    G: "一个星期有5天是工作日",
    H: "Don't you go to the office on weekday? ",
    I: "难道你工作日不上班吗？"
}, {
    B: "tour",
    C: "[tʊə]",
    D: "n.旅行，旅游",
    E: "t+our",
    F: "t雨伞(编码)+our我们的(熟词)",
    G: "雨伞是我们的旅行必需品",
    H: "He took a tour in Guangzhou.",
    I: "他在广州旅游。"
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
    B: "luck",
    C: "[lʌk]",
    D: "n.幸运，运气",
    E: "duck",
    F: "duck鸭子",
    G: "那只鸭子很幸运",
    H: " With luck, we will be there by tomorrow.",
    I: "幸运的话，我们明天将到达那儿。"
}, {
    B: "organize",
    C: "['ɔ:gənaɪz]",
    D: "vi.组织，筹备",
    E: "or+gan+ize",
    F: "or偶人(拼音)+gan感(拼音)+ize艾滋(谐音)",
    G: "组织活动时偶人感染了艾滋病",
    H: "They organized a meeting between teachers and students. ",
    I: "他们组织了一次师生之间的会议。"
}, {
    B: "accept",
    C: "[ə'ksept]",
    D: "vt.接受",
    E: "ac+ce+pt",
    F: "ac艾克(谐音)+ce厕(拼音)+pt葡萄(拼音)",
    G: "艾克在厕所吃葡萄是可以接受的",
    H: "She decided not to accept the job.",
    I: "她决定不接受这项工作。"
}, {
    B: "birth",
    C: "[bɜ:θ]",
    D: "n.出生",
    E: "bir+th",
    F: "bir必然+th土豪",
    G: "他出生时必然是土豪",
    H: "The birth of a live healthy baby is a truly blessed event.",
    I: "一个健康活泼的婴儿的出生真是一件可喜的事情。"
}, {
    B: "weight",
    C: "[weɪt]",
    D: "n.重量",
    E: "w+eight",
    F: "w皇冠(编码)+eight八(熟词)",
    G: "皇冠的重量是八斤",
    H: "Bananas are sold by weight.",
    I: "香蕉按重量出售。"
}, {
    B: "message",
    C: "['mesɪdʒ]",
    D: "n.消息，启示",
    E: "me+ss+age",
    F: "me我(熟词)+ss两个美女(编码)+age年龄(熟词)",
    G: "我发消息给两个美女问年龄",
    H: "You have one new message.",
    I: "你有一条新消息。"
}, {
    B: "lazy",
    C: "['leɪzɪ]",
    D: "adj.懒惰的",
    E: "crazy",
    F: "crazy疯狂的",
    G: "我很懒，但我很疯狂",
    H: "My brother is very lazy.",
    I: "我弟弟十分懒惰。"
}, {
    B: "view",
    C: "[vju:]",
    D: "vt.看，观看",
    E: "vi+e+w",
    F: "vi胜利(谐音V)+e鹅(编码)+w皇冠(编码)",
    G: "看见胜利的鹅戴上了皇冠",
    H: "This article converted him to our point of view.",
    I: "这篇文章使他倾向我们的观点。"
}, {
    B: "set",
    C: "[set]",
    D: "vt.设置，安排",
    E: "sit",
    F: "sit坐",
    G: "他坐在那里设置机关",
    H: "Set the volume as high as possible.",
    I: "将音量尽量调大。"
}, {
    B: "anybody",
    C: "['enɪbɒdɪ]",
    D: "pron.任何人",
    E: "any+body",
    F: "any任何的+body人",
    G: "任何人都会吃饭",
    H: "Is there anybody who can help me?",
    I: "有人能帮我吗？"
}, {
    B: "save",
    C: "[seɪv]",
    D: "vi.节省，挽救；vt.保存，解救",
    E: "sa+ve",
    F: "sa撒(拼音)+ve维E(谐音)",
    G: "不要撒维E了，要节省",
    H: "It will save a ton of money. ",
    I: "这会节省很多钱。"
}, {
    B: "differently",
    C: "['dɪfrəntlɪ]",
    D: "adv.不同地，相异地",
    E: "different+ly",
    F: "different不同的(熟词)+ly梨(谐音)",
    G: "不同的梨尝起来口味不同",
    H: "Parents and children think differently on this question.",
    I: "家长和孩子对这个问题的看法不同。"
}, {
    B: "mutton",
    C: "['mʌt(ə)n]",
    D: "n.羊肉",
    E: "mut+ton",
    F: "mut木头(拼音)+ton吨(熟词)",
    G: "木头上放着几吨羊肉",
    H: "We had roast mutton for dinner.",
    I: "我们晚餐吃烤羊肉。"
}, {
    B: "Internet",
    C: "['ɪntənet]",
    D: "n.互联网，因特网",
    E: "Inter+net",
    F: "Inter相互之间+net网",
    G: "互相连接的网络形成互联网",
    H: "You can find the answer on the Internet. ",
    I: "你可以在互联网上找到答案。"
}, {
    B: "calendar",
    C: "['kælɪndə]",
    D: "n.日历，日程表；vt.将…排入日程表",
    E: "ca+lend+ar",
    F: "ca擦(拼音)+lend借出(熟词)+ar矮人(拼音)",
    G: "把日历擦干净后借给矮人",
    H: "There is a calendar on the wall.",
    I: "墙上挂着一个日历。"
}, {
    B: "add",
    C: "[æd]",
    D: "vt/vi.增加，添加",
    E: "a+dd",
    F: "a一个(熟词)+dd弟弟(拼音)",
    G: "我又增加了一个弟弟",
    H: "Add the grated cheese to the sauce.  ",
    I: "把磨碎的干酪加到调味汁里。"
}, {
    B: "anymore",
    C: "['enɪmɔ:]",
    D: "adv.再也（不），（不）再",
    E: "any+more",
    F: "any任何+more更多",
    G: "吃饱后任何人再也不能吃更多了",
    H: "People are not interested in movies anymore.  ",
    I: "人们不再对电影感兴趣了。"
}, {
    B: "bottle",
    C: "['bɒt(ə)l]",
    D: "n.瓶子，瓶",
    E: "bo+ttle",
    F: "bo60(象形)+ttle太太乐(拼音)",
    G: "有60颗太太乐鸡精在瓶子里",
    H: "Her dad bought a bottle of coke just now.",
    I: "她爸刚才买了一瓶可乐。"
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
    B: "basic",
    C: "['beɪsɪk]",
    D: "adj.基本的",
    E: "ba+s+ic",
    F: "ba爸(拼音)+s美女(编码)+icIC卡(谐音)",
    G: "爸爸帮美女刷IC卡是最基本的",
    H: "Drums are basic to African music.",
    I: "鼓是非洲音乐的基本乐器。"
}, {
    B: "say",
    C: "[seɪ]",
    D: "vt.说，讲；vi.讲，表示",
    E: "s+a+y",
    F: "s美女+a苹果+y衣叉",
    G: "美女吃着苹果拿着衣叉说话",
    H: "It is hard to say. ",
    I: "这很难说。"
}, {
    B: "late",
    C: "[leɪt]",
    D: "adj.迟的，晚的",
    E: "la+ke",
    F: "la拉+ke客",
    G: "他拉客人来的迟了点",
    H: "I was late for class yesterday.",
    I: "我昨天上课迟到了。"
}, {
    B: "borrow",
    C: "['bɒrəʊ]",
    D: "vt./vi.借",
    E: "b+or+row",
    F: "b笔(编码)+or偶人(拼音)+row排(熟词)",
    G: "笔被偶人排成排借走了",
    H: "Can I borrow a kiss?",
    I: "我能借个吻吗？"
}, {
    B: "million",
    C: "['mɪljən]",
    D: "n.百万",
    E: "mi+l+lion",
    F: "mi蜜(拼音)+l棍子(编码)+lion狮子(熟词)",
    G: "蜜蜂用棍子勒索狮子一百万",
    H: "I would give it to the charity if I had a million dollars.",
    I: "如果我有一百万美元的话，我将把它捐给慈善机构。"
}, {
    B: "college",
    C: "['kɒlɪdʒ]",
    D: "n.大学，学院",
    E: "col+lege",
    F: "col丛林+lege乐哥",
    G: "丛林来的乐哥考上大学了",
    H: "He's hoping to go to college next year.",
    I: "他希望明年上大学。"
}, {
    B: "block",
    C: "[blɒk]",
    D: "n.街区，块",
    E: "blo+ck",
    F: "blo610(象形)+ck蛋糕(熟词cake)",
    G: "做了610块蛋糕在街区卖",
    H: "He walked around the block three times.",
    I: "他绕着这个街区转了3圈。"
}, {
    B: "page",
    C: "[peɪdʒ]",
    D: "n.页，记录",
    E: "pa+ge",
    F: "pa趴+ge鸽",
    G: "这页纸上趴着一只鸽子",
    H: "Copy  this  page  in  your  notebook.",
    I: "把这一页抄到你的笔记本上。"
}, {
    B: "public",
    C: "['pʌblɪk]",
    D: "n.民众，大众，平民；adj.公众的，公共的",
    E: "pub+li+c",
    F: "pub酒馆(熟词)+li里(拼音)+c看(编码see)",
    G: "民众去酒馆里看表演",
    H: `You should not humiliate her in public.
                    					 `,
    I: "你不应该在公共场合出她的丑。"
}, {
    B: "latest",
    C: "['leɪtɪst]",
    D: "adj.最近的，最新的",
    E: "la+test",
    F: "la蜡(拼音)+test测验(熟词)",
    G: "蜡笔小新在最近的测验中拿了第一",
    H: "In order to prove his point he showed them the latest sales figures.",
    I: "为了证明他的观点，他给他们看了最新的销售数字。"
}, {
    B: "latter",
    C: "['lætə(r)]",
    D: "n.后者，末位；adj.后者的，后面的",
    E: "letter",
    F: "letter信",
    G: "两张信纸中后者有苹果(a)的图案",
    H: "This article focuses on the latter.",
    I: "这篇文章的重点在后者。"
}, {
    B: "outline",
    C: "['aʊtlaɪn]",
    D: "n.轮廓",
    E: "out+line",
    F: "out外面+line线",
    G: "外面的线就是轮廓",
    H: "She pencilled the rough outline of the mountain in front of her house.",
    I: "她用铅笔画出房屋前的山的轮廓图。"
}, {
    B: "Spanish",
    C: "['spænɪʃ]",
    D: "n.西班牙人，西班牙语；adj.西班牙的，西班牙人的",
    E: "Spa+ni+sh",
    F: "Spa水疗(熟词)+ni你(拼音)+sh上海(拼音)",
    G: "西班牙人做完水疗和你去上海",
    H: "His mother tongue is Spanish.",
    I: "他的母语是西班牙语。"
}, {
    B: "equal",
    C: "['i:kwəl]",
    D: "adj.平等的，相等的",
    E: "e+qu+al",
    F: "e鹅(编码)+qu去(拼音)+al阿狸(拼音)",
    G: "鹅去找阿狸谈人人平等的条件",
    H: "They are now trying to compete on an equal footing.",
    I: "他们现在想要公平竞争。"
}, {
    B: "African",
    C: "['æfrɪk(ə)n]",
    D: "adj.非洲的，非洲人的；n.非洲人",
    E: "Af+ri+can",
    F: "Af爱妃(拼音)+ri日(拼音)+can罐头(熟词)",
    G: "非洲的爱妃日日吃罐头",
    H: "I live in an African country.",
    I: "我住在一个非洲国家。"
}, {
    B: "beg",
    C: "[beg]",
    D: "vi.乞求，请求",
    E: "be+g",
    F: "be是(熟词)+g哥(编码)",
    G: "正在乞求原谅的是哥哥",
    H: "We are not going to beg for help anymore.",
    I: "我们将不再请求帮助。"
}, {
    B: "visitor",
    C: "['vɪzɪtə(r)]",
    D: "n.游客，来访者，参观者",
    E: "visit+or",
    F: "visit探望(熟词)+or偶人(拼音)",
    G: "游客来探望偶人",
    H: "The other day we had some visitors from Switzerland.",
    I: "前几天我们接待了几位来自瑞士的参观者。"
}, {
    B: "watch",
    C: "[wɒtʃ]",
    D: "v.观察，观看",
    E: "wa+tch",
    F: "wa娃(拼音)+tch吃(谐音)",
    G: "观察娃吃东西",
    H: "I like watching TV.",
    I: "我喜欢看电视。"
}, {
    B: "lunch",
    C: "[lʌntʃ]",
    D: "n.午餐",
    E: "lun+ch",
    F: "lun论+ch吃",
    G: "讨论午餐吃什么",
    H: "Lunch is almost ready.",
    I: "午餐快准备好了。"
}, {
    B: "so",
    C: "[səʊ]",
    D: "adv.很",
    E: "so",
    F: "【象形法】50",
    G: "50条蛇很多",
    H: "Thank you for looking after us so well.",
    I: "感谢你们对我们照顾得如此周到。"
}, {
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: ""
}, {
    B: "thin",
    C: "[θɪn]",
    D: "adj.瘦的",
    E: "th+in",
    F: "th土豪(拼音)+in在里面(熟词)",
    G: "土豪在监狱里变瘦了",
    H: "He was a tall, thin man.",
    I: "他又高又瘦。"
}, {
    B: "tidy",
    C: "['taɪdɪ]",
    D: "adj.整洁的，整齐的",
    E: "ti+dy",
    F: "ti提+dy导游",
    G: "提起导游，都说他很整洁",
    H: "Please tidy away before you leave.",
    I: "请你离开之前把一切整理。"
}, {
    B: "pretty",
    C: "['prɪtɪ]",
    D: "adj.漂亮的",
    E: "pre+tty",
    F: "pre仆人(拼音)+tty踢(谐音)",
    G: "漂亮的仆人不会踢人",
    H: "You are so pretty.",
    I: "你太漂亮了。"
}, {
    B: "cute",
    C: "[kju:t]",
    D: "adj.可爱的，漂亮的，聪明的",
    E: "cut+e",
    F: "cut切割(熟词)+e鹅(编码)",
    G: "可爱的人切割鹅",
    H: "It's cute.",
    I: "它很可爱。"
}, {
    B: "meet",
    C: "[mi:t]",
    D: "vt.遇见，满足",
    E: "me+et",
    F: "me我(熟词)+et外星人(编码)",
    G: "我和外星人遇见了",
    H: "I meet her in the street.",
    I: "我在街上遇见她。"
}, {
    B: "rabbit",
    C: "['ræbɪt]",
    D: "n.兔子，野兔",
    E: "ra+bb+it",
    F: "ra拉(谐音)+bb宝宝(拼音)+itIT(编码)",
    G: "拉着宝宝的IT男和兔子玩",
    H: "He runs like a rabbit.",
    I: "他跑起来像一只兔子。"
}, {
    B: "lady",
    C: "['leɪdɪ]",
    D: "n.女士，女子",
    E: "la+dy",
    F: "la拉+dy大爷",
    G: "女士拉住了大爷",
    H: "She's a very sweet old lady. ",
    I: "她是一位很和蔼的老太太。"
}, {
    B: "funny",
    C: "['fʌnɪ]",
    D: "adj.有趣的，好笑的，滑稽的",
    E: "fu+nny",
    F: "fu父(拼音)+nny你(谐音)",
    G: "父亲给你讲的故事很有趣",
    H: "She's got funny eyes and a big nose. ",
    I: "她有一双古怪的眼睛和一个大鼻子。"
}, {
    B: "guess",
    C: "[ges]",
    D: "vt.猜测",
    E: "gu+e+ss",
    F: "gu古(拼音)+e鹅(编码)+ss55(象形)",
    G: "我猜测古代的鹅有55种",
    H: "I don't really know. I'm just guessing.",
    I: "我并不知道，我只是猜测。"
}, {
    B: "hat",
    C: "[hæt]",
    D: "n.帽子",
    E: "h+at",
    F: "h椅子(编码)+at在(熟词)",
    G: "椅子在帽子旁边",
    H: "I have a red hat.",
    I: "我有一顶红帽子。"
}, {
    B: "clothes",
    C: "[kləʊ(ð)z]",
    D: "n.衣服",
    E: "c+lo+th+es",
    F: "c看见(编码see)+lo10(象形)+th土豪(拼音)+es恶俗(拼音)",
    G: "看见10个土豪穿着恶俗的衣服",
    H: "Your clothes fit well. ",
    I: "你的衣服很合身。"
}, {
    B: "winner",
    C: "['wɪnə]",
    D: "n.赢家，胜利者",
    E: "win+n+er",
    F: "win胜利(熟词)+n门(编码)+er儿(拼音)",
    G: "胜利通过这扇门的儿童就是赢家",
    H: "In this competition, China is the winner.",
    I: "在这次比赛中，中国是赢者。"
}, {
    B: "kitchen",
    C: "['kɪtʃɪn]",
    D: "n.厨房，炊具",
    E: "k+it+chen",
    F: "k国王(编码king)+it它(熟词)+chen尘(拼音)",
    G: "国王看到它把灰尘扫进了厨房",
    H: "Mom is cooking in the kitchen.",
    I: "妈妈在厨房做饭。"
}, {
    B: "pair",
    C: "[peə]",
    D: "n.一双，一对，一副",
    E: "p+air",
    F: "p皮鞋(编码)+air空气(熟词)",
    G: "一双皮鞋飞在空中",
    H: "I have a pair of new shoes.",
    I: "我有一双新鞋。"
}, {
    B: "wall",
    C: "[wɔ:l]",
    D: "n.墙壁",
    E: "wa+ll",
    F: "wa娃(拼音)+ll梯子(象形)",
    G: "娃用梯子爬到墙壁上",
    H: "They are drawing on the wall.",
    I: "他们在墙上画画。"
}, {
    B: "hundred",
    C: "['hʌndrəd]",
    D: "n.百；adj.百个",
    E: "wait",
    F: "hund混蛋(拼音)+red红色(熟词)",
    G: "一百个混蛋都穿着红色的衣服",
    H: "She must be over a hundred.",
    I: "她肯定有一百多岁了。"
}, {
    B: "expensive",
    C: "[ɪk'spensɪv]",
    D: "adj.昂贵的，花钱多的，价格高的",
    E: "wait",
    F: "ex前夫(熟词)+pen钢笔(熟词)+sive西服(谐音)",
    G: "前夫把昂贵的钢笔藏在西服里",
    H: "The dress she bought was very expensive.",
    I: "她买的那条裙子十分昂贵。"
}, {
    B: "blouse",
    C: "['blaʊz]",
    D: "n.女衬衫",
    E: "bl+ou+se",
    F: "bl61(象形)+ou偶(拼音)+se色(拼音)",
    G: "61个偶人穿着彩色的女衬衫",
    H: "She was wearing a skirt and blouse.",
    I: "她穿着裙子和衬衫。"
}, {
    B: "grow",
    C: "[grəʊ]",
    D: "vi.生长，发展",
    E: "g+row",
    F: "g9(象形)+row排(熟词)",
    G: "9排树正在生长",
    H: "Children grow so quickly. ",
    I: "孩子们长得很快。"
}, {
    B: "meal",
    C: "[mi:l]",
    D: "n.一顿饭，一餐",
    E: "me+al",
    F: "me我(熟词)+al阿狸(拼音)",
    G: "我和阿狸吃了一顿饭",
    H: "Mother cooked us a good meal.  ",
    I: "妈妈给我们做了一顿可口的饭。"
}, {
    B: "sweater",
    C: "['swetə(r)]",
    D: "n.厚运动衫，毛线衫",
    E: "sweat+er",
    F: "sweat汗(熟词)+er耳(拼音)",
    G: "汗从耳旁流下浸湿了厚运动衫",
    H: "She wears a sweater.",
    I: "她穿了一件毛衣。"
}, {
    B: "understand",
    C: "[ʌndə'stænd]",
    D: "vt.明白，理解",
    E: " ",
    F: "under在下面+stand站",
    G: "他在台下面站着才想明白",
    H: "I don't understand this passage.",
    I: "我不理解这篇文章。"
}, {
    B: "reporter",
    C: "[rɪ'pɔ:tə]",
    D: "n.记者",
    E: "re+port+er",
    F: "re热(拼音)+port港口(熟词)+er儿(拼音)",
    G: "记者在大热天去港口采访了儿子",
    H: "He wants to be a reporter.",
    I: "他想成为一名记者。"
}, {
    B: "building",
    C: "['bɪldɪŋ]",
    D: "n.建筑物",
    E: "build+ing",
    F: "build建造(熟词)+ing鹰(谐音)",
    G: "建造建筑物时吓走了鹰",
    H: "Can you see that tall building?  ",
    I: "你能看见那高楼吗?"
}, {
    B: "policeman",
    C: "[pə'li:smən]",
    D: "n.男警察",
    E: "police+man",
    F: "police警察+man男人",
    G: "警察局外的男人杀了一个男警察",
    H: "My father is a policeman.",
    I: "我的爸爸是一名警察。"
}, {
    B: "sick",
    C: "[sɪk]",
    D: "adj.有病的，恶心的",
    E: "si+ck",
    F: "si死(拼音)+ck厨师(熟词cook)",
    G: "死了的厨师是有病的",
    H: "Her mother's very sick.",
    I: "她母亲病得很厉害。"
}, {
    B: "science",
    C: "['saɪəns]",
    D: "n.科学",
    E: "sc+i+en+ce",
    F: "sc四川(拼音)+i我(熟词I)+en摁(拼音)+ce厕(拼音)",
    G: "四川人把我摁在厕所做科学实验",
    H: "I like science.",
    I: "我喜欢科学。"
}, {
    B: "machine",
    C: "[mə'ʃɪ:n]",
    D: "n.机器",
    E: "ma+chi+ne",
    F: "ma妈+chi吃+ne呢　",
    G: "这台机器在给妈妈做吃的呢",
    H: "They have tested the new machine.",
    I: "他们已经测试了新机器。"
}, {
    B: "lesson",
    C: "['les(ə)n]",
    D: "n.课，教训",
    E: "le+ss+on",
    F: "le乐(拼音)+ss两条蛇(编码)+on在...上(熟词)",
    G: "快乐的两条蛇坐在椅子上听课",
    H: "She gives piano lessons.",
    I: "她教授钢琴课。"
}, {
    B: "draw",
    C: "[drɔː]",
    D: "vt.画，拉，吸引",
    E: "dr+a+w",
    F: "dr大人(拼音)+a一个(熟词)+w皇冠(编码)",
    G: "画画的大人",
    H: "I like to draw pictures.",
    I: "我喜欢画画。"
}, {
    B: "August",
    C: "[ɔ:'gəst]",
    D: "n.八月",
    E: "au+gu+st",
    F: "au我(谐音)+gu姑(拼音)+st沙滩(拼音)",
    G: "八月份我和姑姑一起去沙滩",
    H: "August is my favorite month.",
    I: "八月是我最喜欢的月份。"
}, {
    B: "already",
    C: "[ɔːl'redɪ]",
    D: "adv.已经",
    E: "al+ready",
    F: "al阿狸(拼音)+ready准备(熟词)",
    G: "阿狸已经准备好了",
    H: "Is it 10 o'clock already?",
    I: "已经10点钟了？"
}, {
    B: "present",
    C: "['preznt]",
    D: "n.目前",
    E: "pre+sent",
    F: "pre仆人(拼音)+sent送(熟词)",
    G: "目前仆人已经被送走了",
    H: "I am happy at present.",
    I: "我目前很快乐。"
}, {
    B: "December",
    C: "[dɪ'sembə]",
    D: "n.十二月",
    E: "Dece+mb+er",
    F: "Dece第三(谐音)+mb面包(拼音)+er儿(拼音)",
    G: "第三块面包是儿子在十二月买的",
    H: "I keep forgetting it's December. ",
    I: "我总是忘了现在是12月了。"
}, {
    B: "Christmas",
    C: "['krɪsməs]",
    D: "n.圣诞节",
    E: "Christ+mas",
    F: "Christ克里斯特(谐音)+mas马上(拼音)",
    G: "克里斯特马上准备圣诞节礼物",
    H: "Merry Christmas!",
    I: "圣诞快乐！"
}, {
    B: "November",
    C: "[nə(ʊ)'vembə]",
    D: "n.十一月",
    E: "No+ve+mb+er",
    F: "No没有(熟词)+ve维E(编码)+mb面包(拼音)+er儿(拼音)",
    G: "十一月没有维E和面包给儿子吃",
    H: "Today is Friday, November ninth.",
    I: "今天是11月9日，星期五。"
}, {
    B: "clever",
    C: "['klevə]",
    D: "adj.聪明的",
    E: "cle+ve+r",
    F: "cle可乐(谐音)+ve维E(谐音)+r草(编码)",
    G: "聪明的人喝着可乐吃着VE在草地上玩",
    H: "Tom is a clever boy.",
    I: "汤姆是个聪明的孩子。"
}, {
    B: "celebration",
    C: "[selɪ'breɪʃ(ə)n]",
    D: "n.庆祝，祝贺",
    E: "celebrat+i+on",
    F: "celebrat(e)庆祝(熟词)+i蜡烛(编码)+on上(熟词)",
    G: "庆祝时需把蜡烛点上",
    H: "We had a birthday celebration yesterday.",
    I: "昨天我们有场生日庆祝会。"
}, {
    B: "candle",
    C: "['kænd(ə)l]",
    D: "n.蜡烛",
    E: "can+dl+e",
    F: "can餐(拼音)+dl灯笼(拼音)+e鹅(编码)",
    G: "餐桌上的灯笼点着鹅形的蜡烛",
    H: "I bought a candle yesterday.",
    I: "昨天我买了一支蜡烛。"
}, {
    B: "April",
    C: "['eɪprəl]",
    D: "n.四月",
    E: "ap+ri+l",
    F: "ap阿婆(拼音)+ri日(拼音)+l棍子(编码)",
    G: "四月份阿婆每日拿着棍子",
    H: "We can see many flowers in April.",
    I: "四月份我们能看见很多花。"
}, {
    B: "Halloween",
    C: "[ˌhæləʊ'i:n]",
    D: "n.万圣节前夕",
    E: "hall+ow+ee+n",
    F: "hall大厅(熟词)+ow欧文(拼音)+ee两只鹅(编码)+n门(编码)",
    G: "大厅里的欧文看两只鹅在门外过万圣节",
    H: "We need some chocolate and some pumpkins for Halloween. ",
    I: "在万圣节前夕，我们需要一些巧克力和南瓜。"
}, {
    B: "hard",
    C: "[hɑ:d]",
    D: "adj.困难的，硬的，努力的",
    E: "h+ar+d",
    F: "h椅子(编码)+ar矮人(拼音)+d弟(编码)",
    G: "椅子太高，矮人弟弟爬上去很困难的",
    H: "My brother studies very hard.",
    I: "我弟弟学习很努力。"
}, {
    B: "place",
    C: "[pleɪs]",
    D: "n.地方，住所",
    E: "pl+a+ce",
    F: "pl跑了(拼音)+a一(熟词)+ce蛇(谐音)",
    G: "这个地方跑了一条蛇",
    H: "This is a beautiful place.",
    I: "这是一个漂亮的地方。"
}, {
    B: "hope",
    C: "[həʊp]",
    D: "n.希望，期望；vt.希望，期望",
    E: "ho+p+e",
    F: "ho猴(拼音)+p皮(编码)+e鹅(编码)",
    G: "猴子希望抓到那只穿皮鞋的鹅",
    H: "I hope you can help me.",
    I: "我希望你能帮助我。"
}, {
    B: "season",
    C: "['si:zən]",
    D: "n.季节，时期",
    E: "sea+son",
    F: "sea大海+son儿子",
    G: "这个季节大海卷走了他儿子",
    H: "Spring is my favourite season. ",
    I: "春天是我最喜欢的季节。"
}, {
    B: "degree",
    C: "[dɪ'griː]",
    D: "n.程度，等级，学位，度",
    E: "de+gr+ee",
    F: "de弟(谐音)+gr工人(拼音)+ee眼睛(象形)",
    G: "弟弟和工人的眼睛近视程度很高",
    H: "To some degree, you are right.",
    I: "在某种程度上，你是对的。"
}, {
    B: "palace",
    C: "['pælɪs]",
    D: "n.宫殿，豪华住宅",
    E: "place",
    F: "place地方",
    G: "这个地方是宫殿",
    H: "They entered the palace.",
    I: "他们走进宫殿。"
}, {
    B: "shine",
    C: "[ʃaɪn]",
    D: "vi.闪耀，发出光；n.光亮，光泽",
    E: "shi+ne",
    F: "shi是+ne哪(吒)",
    G: "是哪吒在发光闪耀",
    H: "Throw them up and let something shine.",
    I: "用力丢出去让它们发光。"
}, {
    B: "weekend",
    C: "[ˌwi:kˈend]",
    D: "n.周末",
    E: "week+end",
    F: "week周+end尽头",
    G: "一周走到尽头就是周末",
    H: "I will meet you at weekend.",
    I: "我们周末见面。"
}, {
    B: "rain",
    C: "[reɪn]",
    D: "n.雨，下雨",
    E: "ra+in",
    F: "ra瑞(谐音)+in里面(熟词)",
    G: "瑞瑞在雨里",
    H: "Come in out of the rain. ",
    I: "快进来，不要在外面淋雨。"
}, {
    B: "pancake",
    C: "['pænkeɪk]",
    D: "n.薄饼，烙饼",
    E: "pan+cake",
    F: "pan盘(拼音)+cake蛋糕(熟词)",
    G: "盘里有蛋糕和薄饼",
    H: "I want a vegetable pancake. ",
    I: "我要一份蔬菜薄饼。"
}, {
    B: "enjoy",
    C: "[ɪn'dʒɒɪ]",
    D: "vt.享受，欣赏",
    E: "en+joy",
    F: "en鹰(谐音)+joy快乐(熟词)",
    G: "鹰在享受快乐",
    H: "I enjoy reading every day.",
    I: "每天我都享受阅读。"
}, {
    B: "cinema",
    C: "['sɪnəmə]",
    D: "n.电影院",
    E: "cine+ma",
    F: "cine悉尼(谐音)+ma吗(拼音)",
    G: "这个电影院是悉尼的吗？",
    H: "I prefer going to the cinema to watching TV.",
    I: "我更喜欢看电影而不是看电视。"
}, {
    B: "stamp",
    C: "[stæmp]",
    D: "n.邮票，印章",
    E: "sta+mp",
    F: "sta是他+mp名片",
    G: "邮票是他的名片",
    H: "He likes collecting stamps.",
    I: "他喜欢收集邮票。"
}, {
    B: "most",
    C: "[məʊst]",
    D: "adv.最多，最",
    E: "mo+st",
    F: "mo摸+st石头",
    G: "我摸石头是最多的",
    H: "He gets the most money.",
    I: "他拿到最多的钱。"
}, {
    B: "chocolate",
    C: "['tʃɒklɪt]",
    D: "n.巧克力",
    E: "cho+co+late",
    F: "cho餐后(拼音)+co可乐(熟词coke)+late晚的(熟词)",
    G: "餐后他喝巧克力味的可乐到很晚",
    H: "Woud you like to  eat a bar of chocolate?",
    I: "你想吃一条巧克力吗？"
}, {
    B: "western",
    C: "['westən]",
    D: "adj.西方的",
    E: "west+er+n",
    F: "west西(熟词)+er儿(拼音)+n门(编码)",
    G: "去西天取经的儿子找不到西方的门",
    H: "I want to go to western countries.",
    I: "我想要去西方国家。"
}, {
    B: "turn",
    C: "[tɜ:n]",
    D: "vt.转动，使旋转；vi.转向，转变",
    E: "tur+n",
    F: "tur土人(拼音)+n门(编码)",
    G: "土人的门转动了",
    H: "Turn left after two minutes.",
    I: "两分钟后向左转。"
}, {
    B: "taste",
    C: "[teɪst]",
    D: "n.味道，品味；vi.尝起来",
    E: "ta+st+e",
    F: "ta他(拼音)+st石头(拼音)+e鹅(编码)",
    G: "他用石头打死鹅后品尝味道",
    H: "It tastes good.",
    I: "味道不错。"
}, {
    B: "speak",
    C: "[spi:k]",
    D: "vt.说话，陈述，发言",
    E: "sp+e+ak",
    F: "sp视频(拼音)+e鹅(编码)+akAK47(编码)",
    G: "视频里的鹅拿着AK47说话",
    H: "Do you speak English?",
    I: "你会说英语吗？"
}, {
    B: "snowy",
    C: "['snəʊɪ]",
    D: "adj.下雪的，有雪的",
    E: "snow+y",
    F: "snow雪(熟词)+y树杈(编码)",
    G: "下雪的时候雪会堆在树杈上",
    H: "It's snowy today.",
    I: "今天下雪。"
}, {
    B: "snow",
    C: "[snəʊ]",
    D: "n.雪，下雪；vt.降雪",
    E: "s+now",
    F: "s蛇(编码)+now现在(熟词)",
    G: "蛇现在在雪里爬",
    H: "The first snow came a month earlier than usual.",
    I: "第一场雪比往年提早了一个月。"
}, {
    B: "smell",
    C: "[smel]",
    D: "n.气味",
    E: "s+me+ll",
    F: "s美女(编码)+me我(熟词)+ll11(象形)",
    G: "在美女身上，我闻到了11种气味",
    H: "The smell of bread is good.",
    I: "面包的味道很香。"
}, {
    B: "sandwich",
    C: "[ˈsænwɪtʃ]",
    D: "n.三明治",
    E: "san+dw+i+ch",
    F: "san三(拼音)+dw动物(拼音)+i蜡烛(编码)+ch吃(拼音)",
    G: "三个动物拿着蜡烛吃三明治",
    H: "I like to eat sandwiches.",
    I: "我喜欢吃三明治。"
}, {
    B: "salty",
    C: "[ˈsɔ:ltɪ]",
    D: "adj.咸的",
    E: "s+al+ty",
    F: "s蛇(编码)+al阿狸(拼音)+ty太阳(拼音)",
    G: "蛇被阿狸放在太阳下晒咸了",
    H: "The soup had a very salty taste. ",
    I: "汤的味道很咸。"
}, {
    B: "quite",
    C: "[kwaɪt]",
    D: "adv.很，相当，完全",
    E: "qu+i+te",
    F: "qu取(拼音)+i蜡烛(编码)+te特(拼音)",
    G: "取蜡烛时特务很小心",
    H: "I am quite tired. ",
    I: "我很累了。"
}, {
    B: "far",
    C: "[fɑ:]",
    D: "adj.远的，久远的",
    E: "f+ar",
    F: "f斧头(编码)+ar矮人(拼音)",
    G: "斧头被矮人扔了好远",
    H: "He lives far away from his school.",
    I: "他住的地方离学校远。"
}, {
    B: "dessert",
    C: "[dɪ'zɜːt]",
    D: "n.餐后甜点，甜点心",
    E: "de+ss+ert",
    F: "de弟(谐音)+ss两个美女(编码)+ert儿童(拼音)",
    G: "弟弟和两个美女喂儿童吃甜点",
    H: "Eat some dessert after dinner.",
    I: "晚餐后吃一些甜点。"
}, {
    B: "fresh",
    C: "[freʃ]",
    D: "adj.新鲜的，淡的",
    E: "fr+e+sh",
    F: "fr夫人(拼音)+e鹅(编码)+sh上海(拼音)",
    G: "夫人抱着鹅在上海呼吸新鲜的空气",
    H: "The apple is very fresh.",
    I: "这个苹果很新鲜。"
}, {
    B: "thing",
    C: "[θɪŋ]",
    D: "n.东西",
    E: "th+in+g",
    F: "th土豪(拼音)+in里面(熟词)+g哥(编码)",
    G: "土豪在里面给哥哥买东西",
    H: "My sister give me a thing on my birthday.",
    I: "生日时姐姐给了我一个东西。"
}, {
    B: "market",
    C: "['mɑ:kɪt]",
    D: "n.市场，行情",
    E: "ma+rk+et",
    F: "ma妈(拼音)+rk入口(拼音)+et外星人(编码)",
    G: "妈妈在入口处向外星人了解市场行情",
    H: "This is one of the best televisions on the market.",
    I: "这是市场上最好的电视机之一。"
}, {
    B: "climb",
    C: "[klaɪm]",
    D: "vi./vt.爬，攀登",
    E: "cli+mb",
    F: "cli吃力+mb面包",
    G: "吃力地啃着面包爬山",
    H: "I like climbing the mountain.",
    I: "我喜欢爬山。"
}, {
    B: "hurt",
    C: "[hɜ:t]",
    D: "vt.受伤，使疼痛",
    E: "hu+rt",
    F: "hu虎+rt肉体",
    G: "老虎的的肉体受伤了",
    H: "He was hurt.",
    I: "他受伤了。"
}, {
    B: "candy",
    C: "['kændɪ]",
    D: "n.糖果",
    E: "can+dy",
    F: "can能(熟词)+dy毒药(拼音)",
    G: "糖果吃多了可能变成毒药",
    H: "Every child likes candy.",
    I: "每个孩子都喜欢糖果。"
}, {
    B: "beach",
    C: "[bi:tʃ]",
    D: "n.海滩",
    E: "be+a+ch",
    F: "be是(熟词)+a一(熟词)+ch吃(拼音)",
    G: "正在海滩上休息的是一个吃货",
    H: "We spent the day on the beach. ",
    I: "我们在海滩度过了一整天。"
}, {
    B: "stranger",
    C: "['streɪndʒə(r)]",
    D: "n.陌生人",
    E: "st+ran+ger",
    F: "st石头(拼音)+ran跑(熟词)+ger个人(拼音)",
    G: "这个陌生人拿着石头跑的时候碰到一个人",
    H: "He is a stranger to me.",
    I: "他对我来说是一个陌生人。"
}, {
    B: "island",
    C: "['aɪlənd]",
    D: "n.岛",
    E: "is+land",
    F: "is是+land陆地",
    G: "岛是一块小陆地",
    H: "We spent a day on the island.",
    I: "我们在这个岛上度过了一天。"
}, {
    B: "straight",
    C: "[streɪt]",
    D: "adj.笔直的，直的；adv.径直地",
    E: "str+aight",
    F: "str街道(熟词street)+aight八(形似eight)",
    G: "街道上的八条路是笔直的",
    H: "He brushed straight by without even looking at me.",
    I: "他径直擦身而过，甚至不看我。"
}, {
    B: "safety",
    C: "['seɪftɪ]",
    D: "n.安全",
    E: "safe+ty",
    F: "safe安全(熟词)+ty踢(谐音)",
    G: "一定要安全地踢球",
    H: "It's very important to teach the children about road safety.",
    I: "把交通安全常识教给孩子们是非常重要的。"
}, {
    B: "autumn",
    C: "['ɔːtəm]",
    D: "n.秋天",
    E: "au+tu+mn",
    F: "au我(谐音)+tu突(拼音)+mn美女(拼音)",
    G: "秋天，我突然遇见一美女",
    H: "In autumn the days begin to draw in.  ",
    I: "到了秋天，白天开始渐渐短起来。"
}, {
    B: "invitation",
    C: "[ˌɪnvɪˈteɪʃn]",
    D: "n.邀请",
    E: "invit+ation",
    F: "invit(e)邀请(熟词)+ation爱神(谐音)",
    G: "邀请爱神跳舞",
    H: "Thank you for your kind invitation.",
    I: "谢谢你的盛情邀请。"
}, {
    B: "valley",
    C: "['vælɪ]",
    D: "n.山谷，流域，溪谷",
    E: "v+all+ey",
    F: "v维生素(编码)+all所有(熟词)+ey鳄鱼(拼音)",
    G: "维生素被所有的鳄鱼在山谷里吃掉了",
    H: "He has a large farm near the valley.",
    I: "他在山谷旁拥有一个大农场。"
}, {
    B: "trip",
    C: "[trɪp]",
    D: "n.旅行",
    E: "tr+ip",
    F: "tr土人(拼音)+ipIP地址(编码)",
    G: "土人用IP地址查询旅行位置",
    H: "They took a trip to Japan last year.",
    I: "他们去年去日本旅行。"
}, {
    B: "travel",
    C: "['træv(ə)l]",
    D: "n.旅行；vt.旅行，游历",
    E: "tr+a+vel",
    F: "tr土人(拼音)+a苹果(编码)+vel我(谐音)",
    G: "土人吃完苹果和我去旅行",
    H: "I love travelling.",
    I: "我热爱旅游。"
}, {
    B: "train",
    C: "[treɪn]",
    D: "n.火车",
    E: "t+rain",
    F: "t伞(编码)+rain雨(熟词)",
    G: "我打着伞在雨中等火车",
    H: "The train is coming.",
    I: "火车正开过来。"
}, {
    B: "meeting",
    C: "['mɪ:tɪŋ]",
    D: "n.会议",
    E: "me+e+ting",
    F: "me我(熟词)+e鹅(编码)+ting听(拼音)",
    G: "我带着鹅听这个会议",
    H: "We have a meeting.",
    I: "我们开个会。"
}, {
    B: "feed",
    C: "[fi:d]",
    D: "vt.（fed，fed）给（人或动物）食物，喂养",
    E: "f+e+ed",
    F: "f拐杖(编码)+e鹅(编码)+ed耳朵(拼音)",
    G: "给食物时，我的拐杖打到了鹅的耳朵",
    H: "Will you feed my cat for me?",
    I: "请帮我喂我的猫好吗？"
}, {
    B: "fall",
    C: "[fɔ:l]",
    D: "n.秋天，下降，",
    E: "f+all",
    F: "f斧头(编码)+all全部(熟词)",
    G: "秋天，斧头全部从",
    H: "My favoriate season is fall.",
    I: "我最喜欢的季节是秋天。"
}, {
    B: "direction",
    C: "[də'rekʃn]",
    D: "n.方向",
    E: "direct+i+on",
    F: "direct直接(熟词)+i蜡烛(编码)+on上(熟词)",
    G: "直接把蜡烛放在上面可以照明方向",
    H: "Has the wind changed direction?",
    I: "风向变了吗？"
}, {
    B: "cross",
    C: "[krɒs]",
    D: "vi.交叉；n.交叉，十字",
    E: "cr+o+ss",
    F: "cr超人(拼音)+o蛋(编码)+ss两条蛇(编码)",
    G: "超人使蛋里的两条蛇交叉在一起",
    H: "I cross the road.",
    I: "我穿过了马路。"
}, {
    B: "cut",
    C: "[kʌt]",
    D: "vi./vt.割",
    E: "cu+t",
    F: "cu粗(拼音)+t伞(编码)",
    G: "粗伞柄割到了手",
    H: "She cut her finger on a piece of glass.",
    I: "一块玻璃把她的手指头划破了。"
}, {
    B: "traffic",
    C: "['træfɪk]",
    D: "n.交通",
    E: "tr+a+ff+ic",
    F: "tr土人(拼音)+a一(熟词)+ff两斧头(编码)+icIC卡(编码)",
    G: "土人一人扛两斧头捡IC卡时阻碍了交通",
    H: "He is a traffic police.",
    I: "他是一名交通警察。"
}, {
    B: "prefer",
    C: "[prɪ'fɜ:]",
    D: "vt.宁愿，更喜欢",
    E: "pre+f+er",
    F: "pre仆人(拼音)+f佛(编码)+er儿(拼音)",
    G: "仆人宁愿选佛像也不选儿子",
    H: "Do you prefer apples or bananas?",
    I: "你更喜欢苹果还是香蕉?"
}, {
    B: "kid",
    C: "[kɪd]",
    D: "n.小孩子",
    E: "k+i+d",
    F: "k机关枪(编码)+i我(熟词I)+d弟(编码)",
    G: "小孩子用机关枪打我弟弟",
    H: "She's a clever kid.",
    I: "她是个聪明的孩子。"
}, {
    B: "dangerous",
    C: "[ˈdeɪndʒərəs]",
    D: "adj.危险的",
    E: "dang+e+rous",
    F: "dang当(拼音)+e鹅(编码)+rous肉丝(拼音)",
    G: "当鹅吃了肉丝时你就危险了",
    H: "This is a dangerous place.",
    I: "这是个危险的地方。"
}, {
    B: "special",
    C: "['speʃl]",
    D: "adj.特别的",
    E: "sp+e+cial",
    F: "sp赛跑(拼音)+e衣(编码)+cial手(谐音)",
    G: "赛跑时的衣服和手套都是特别制作的",
    H: "You're very special to me.",
    I: "你对我来说很特别。"
}, {
    B: "underground",
    C: "[ˈʌndəgraʊnd]",
    D: "n.地铁",
    E: "under+ground",
    F: "under在下面+ground地面",
    G: "地铁在地面的底下",
    H: "The underground is ideal for getting to work in Milan.",
    I: "在米兰，乘地铁去上班非常便捷。"
}, {
    B: "invite",
    C: "[ɪn'vaɪt]",
    D: "vt.招待，邀请",
    E: "in+vite",
    F: "in在…里面(熟词)+vite怀特(谐音)",
    G: "在屋里招待怀特",
    H: "I invited him to my 12th birthday party.",
    I: "我邀请他参加我的12岁生日派对。"
}, {
    B: "gift",
    C: "[gɪft]",
    D: "n.礼物，赠品",
    E: "g+i+ft",
    F: "g哥(拼音)+i我(编码I)+ft福特(拼音)",
    G: "哥哥送我的礼物是一辆福特车",
    H: "People give me many gifts in my birthday.",
    I: "生日时人们送很多礼物给我。"
}, {
    B: "last",
    C: "[lɑ:st]",
    D: "v.持续",
    E: "la+st",
    F: "la拉+st石头",
    G: "他拉着一车石头持续了一天",
    H: "The marriage had lasted for less than two years.",
    I: "这段婚姻维持了不到两年。"
}, {
    B: "rest",
    C: "[rest]",
    D: "n.休息，静止",
    E: "re+st",
    F: "re热+st沙滩",
    G: "在热沙滩上休息",
    H: "I need rest.",
    I: "我需要休息。"
}, {
    B: "ride",
    C: "[raɪd]",
    D: "vt.骑马，乘车",
    E: "ri+de",
    F: "ri日+de德",
    G: "在日本和德国没人骑马",
    H: "Can you ride? ",
    I: "你会骑马吗？"
}, {
    B: "take",
    C: "[teɪk]",
    D: "vt.带着，拿，获得",
    E: "ta+ke",
    F: "ta他+ke课",
    G: "把他的课本带去",
    H: "Take the book to Tom.",
    I: "把这本书带给汤姆。"
}, {
    B: "pick",
    C: "[pɪk]",
    D: "vt./vi.挑选，采摘",
    E: "pi+ck",
    F: "pi批+ck仓库",
    G: "一批人去仓库挑选",
    H: "Pick a number from one to twenty.",
    I: "从一至二十中挑选一个数。"
}, {
    B: "better",
    C: "['betə]",
    D: "adj.更好的",
    E: "be+tt+er",
    F: "be是(熟词)+tt兔兔(拼音)+er耳(拼音)",
    G: "更好的是兔兔的耳朵",
    H: "We will have a better life.",
    I: "我们会有更好的生活。"
}, {
    B: "sell",
    C: "[sel]",
    D: "vt./vi.出售",
    E: "se+ll",
    F: "se色(拼音)+ll11(象形)",
    G: "红色的衣服11块钱出售",
    H: "The shop sells fruits.",
    I: "这个商店出售水果。"
}, {
    B: "hurry",
    C: "[ˈhʌrɪ]",
    D: "n.匆忙，急忙",
    E: "hur+ry",
    F: "hur唬人+ry人妖",
    G: "匆忙唬人的是人妖",
    H: "Dave was in a hurry to get back to work.  ",
    I: "戴夫急于回到工作岗位。"
}, {
    B: "cheap",
    C: "[tʃiːp]",
    D: "adj.便宜的",
    E: "che+ap",
    F: "che车(拼音)+ap苹果(熟词apple)",
    G: "车上的苹果很便宜",
    H: "The car is very cheap.",
    I: "这辆车非常便宜。"
}, {
    B: "comfortable",
    C: "['kʌmftəbl]",
    D: "adj.舒适的，舒服的",
    E: "com+for+table",
    F: "com公司(company)+for为了+table桌子",
    G: "公司为员工买了桌子让办公更舒适",
    H: "I have a comfortable house.",
    I: "我有一个舒适的家。"
}, {
    B: "crowded",
    C: "['kraʊdɪd]",
    D: "adj.拥挤的，塞满的",
    E: "crowd+ed",
    F: "crowd拥挤(熟词)+ed二弟(拼音)",
    G: "拥挤的车二弟挤不上",
    H: "It's crowded here.",
    I: "这里很拥挤。"
}, {
    B: "dragon",
    C: "['dræg(ə)n]",
    D: "n.龙，凶暴的人，凶恶的人",
    E: "dr+a+gon",
    F: "dr大人(拼音)+a一个(熟词)+gon宫(拼音)",
    G: "大人在一个宫殿里看到了龙",
    H: "I like the dragon movie very much.",
    I: "我非常喜欢有关龙的电影。"
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
    B: "wonderful",
    C: "[ˈwʌndəfl]",
    D: "adj.极好的，美妙",
    E: "wonder+ful",
    F: "wonder王的(谐音)+ful俘虏(拼音)",
    G: "王的俘虏最后的晚餐是极好的",
    H: "It is a wonderful  holiday.",
    I: "这是个美好的假期。"
}, {
    B: "bring",
    C: "[brɪŋ]",
    D: "vt.带来，促使，引起",
    E: "br+ing",
    F: "br病人(拼音)+ing蝇(谐音)",
    G: "病人带来了苍蝇",
    H: "Bring  her to my house tomorrow.",
    I: "明天把她带来我家。"
}, {
    B: "fat",
    C: "[fæt]",
    D: "adj.肥的，胖的；n.脂肪",
    E: "fa+t",
    F: "fa发(拼音)+t特(编码)",
    G: "发现特务超级肥",
    H: "The lady took out a fat purse from her handbag.",
    I: "这名女士从手提袋中拿出一个鼓鼓的钱包。"
}, {
    B: "field",
    C: "[fi:ld]",
    D: "n.田地，草地，领域",
    E: "f+ie+ld",
    F: "f佛(编码)+ie浏览器(编码)+ld懒得(拼音)",
    G: "佛打开浏览器后懒得去外面的田地了",
    H: "I am running in the field.",
    I: "我在田地里奔跑。"
}, {
    B: "slow",
    C: "[sləʊ]",
    D: "adj.慢的；vt./vi.变慢，放慢",
    E: "s+lo+w",
    F: "s蛇(编码)+lo10(象形)+w皇冠(编码)",
    G: "蛇扛戴着10个皇冠爬得很慢",
    H: "The lorry was travelling at 20mph in the slow lane. ",
    I: "卡车在慢车道上以20英里的时速行驶。"
}, {
    B: "until",
    C: "[ən'tɪl]",
    D: "conj.到......时，直到......为止",
    E: "u+n+til",
    F: "u你(编码you)+n门(编码)+til踢了(拼音)",
    G: "你到门口的",
    H: "Until 2005 she was a teacher.",
    I: "直到2005年之前，她一直是名教师。"
}, {
    B: "year",
    C: "[jɪə(r)]",
    D: "n.年，年纪",
    E: "y+ear",
    F: "y弹弓(编码)+ear耳朵(熟词)",
    G: "去年他被弹弓射到耳朵",
    H: "She worked in China for two years.",
    I: "她在中国工作两年了。"
}, {
    B: "matter",
    C: "['mætə]",
    D: "n.问题，物质，事件；vi.有关系，要紧",
    E: "ma+tt+er",
    F: "ma妈(拼音)+tt两把伞(编码)+er儿(拼音)拆词",
    G: "妈妈拿着两把伞去解决儿子的麻烦事",
    H: "What's the matter with you?",
    I: "你怎么了？"
}, {
    B: "quiet",
    C: "['kwaɪət]",
    D: "adj.安静的，安宁的",
    E: "qu+i+et",
    F: "qu区(拼音)+i我(熟词I)+et外星人(熟词)",
    G: "在安静的小区里我看见了外星人",
    H: "It is quiet at night.",
    I: "晚上很安静。"
}, {
    B: "cry",
    C: "[kraɪ]",
    D: "vi.哭，",
    E: "c+ry",
    F: "c月(编码)+ry人妖(拼音)",
    G: "月光下人妖在哭",
    H: "She is crying.",
    I: "她在哭。"
}, {
    B: "secret",
    C: "['si:krɪt]",
    D: "n.秘密，机密；adj.秘密的，机密的",
    E: "se+cr+et",
    F: "se色(拼音)+cr超人(拼音)+et外星人(熟词)",
    G: "色狼发现了超人和外星人的秘密",
    H: "Can you keep a secret?",
    I: "你能保守秘密吗？"
}, {
    B: "ill",
    C: "[ɪl]",
    D: "adj.生病的，坏的",
    E: "i+ll",
    F: "i我(熟词I)+ll11(象形)",
    G: "我11岁的时候生病了",
    H: "My grandfather is ill.",
    I: "我爷爷生病了。"
}, {
    B: "health",
    C: "[helθ]",
    D: "n.卫生，健康",
    E: "he+al+th",
    F: "he他(熟词)+al暗流(拼音)+th土豪(拼音)",
    G: "他在暗流里把土豪洗得很卫生",
    H: "Exercise is good for your health. ",
    I: "运动对你的身体很有好处。"
}, {
    B: "countryside",
    C: "['kʌntrɪsaɪd]",
    D: "n.乡村",
    E: "country+side",
    F: "country国家+side面",
    G: "这个乡村在这个国家的最左面",
    H: "Mike will go to the countryside.",
    I: "Mike将会去农村。"
}, {
    B: "polite",
    C: "[pə'laɪt]",
    D: "adj.有礼貌的",
    E: "police",
    F: "police警察",
    G: "警察是有礼貌的人",
    H: "I think English men are very polite.",
    I: "我认为英国人很有礼貌。"
}, {
    B: "mean",
    C: "[mi:n]",
    D: "n.意思，意味；v.意味，意思",
    E: "me+an",
    F: "me我+an一个",
    G: "我一个人在这里有什么意思",
    H: 'In French,"monsieur" means "Sir".',
    I: "在法语中，monsieur的意思是先生。"
}, {
    B: "leader",
    C: "['li:də]",
    D: "n.领导者，首领",
    E: "le+ad+er",
    F: "le乐(拼音)+adAD钙奶(谐音)+er儿(拼音)",
    G: "快乐地喝着AD钙奶的儿子居然是领导者",
    H: "She's a born leader.",
    I: "她是个天生的领导者。"
}, {
    B: "magic",
    C: "['mædʒɪk]",
    D: "n.魔法，巫术",
    E: "mag+ic",
    F: "mag马褂(拼音)+icIC卡(编码)",
    G: "用魔法把马褂变成IC卡",
    H: "He knows magic.",
    I: "他懂魔法。"
}, {
    B: "none",
    C: "[nʌn]",
    D: "pron.没有一个，毫无",
    E: "n+one",
    F: "n门(编码)+one一个(熟词)",
    G: "门太窄没有一个人能通过",
    H: "None of us knew how to get there.",
    I: "我们没有人知道去那儿的路。"
}, {
    B: "forest",
    C: "['fɒrɪst]",
    D: "n.森林",
    E: "fo+rest",
    F: "fo佛(拼音)+rest休息(熟词)",
    G: "在森林里，佛休息了一下",
    H: "A path winds through the forest.",
    I: "一条小路蜿蜒穿过森林。"
}, {
    B: "carry",
    C: "['kærɪ]",
    D: "vt.运送，携带，提",
    E: "car+ry",
    F: "car车(熟词)+ry人妖(拼音)",
    G: "车里的人妖正在运送货物",
    H: "They use a lorry to carry coals.",
    I: "他们用卡车运煤。"
}, {
    B: "patient",
    C: "['peɪʃnt]",
    D: "adj.有耐心的，能容忍的",
    E: "pa+ti+ent",
    F: "pa趴+ti踢+ent恩特",
    G: "他有耐心地趴在地上踢恩特",
    H: "She is a patient English teacher.",
    I: "她是个有耐心的英语老师。"
}, {
    B: "leaf",
    C: "[li:f]",
    D: "n.树叶",
    E: "le+af",
    F: "le乐+af爱妃",
    G: "快乐的爱妃坐在树叶上",
    H: "The fall of one leaf is enough to tell coming of autumn. ",
    I: "一叶知秋。"
}, {
    B: "such",
    C: "[sʌtʃ]",
    D: "adj.如此的，这样的",
    E: "su+ch",
    F: "su苏+ch吃",
    G: "苏苏为啥吃得如此急",
    H: "It is such a quiet place.",
    I: "这是个如此安静的地方。"
}, {
    B: "capital",
    C: "['kæpɪt(ə)l]",
    D: "n.首都，",
    E: "cap+it+al",
    F: "cap帽子(熟词)+it它(熟词)+al阿狸(拼音)",
    G: "把帽子让它和阿狸带到首都去需要",
    H: "Beijing is the capital of China.",
    I: "北京是中国的首都。"
}, {
    B: "appear",
    C: "[ə'pɪə]",
    D: "vi.出现，似乎",
    E: "app+ear",
    F: "appAPP+ear耳朵",
    G: "APP界面上画的耳朵出现了",
    H: "A woman appeared at the far end of the street.",
    I: "一个女人在街那端出现了。"
}, {
    B: "careless",
    C: "['keələs]",
    D: "adj.粗心的",
    E: "care+less",
    F: "care关心+less较少的",
    G: "他是个粗心的人对我们的关心是较少的",
    H: "He is so careless.",
    I: "他太粗心了。"
}, {
    B: "invent",
    C: "[ɪn'vent]",
    D: "vt.发明",
    E: "event",
    F: "event大事",
    G: "这项发明对我们来说是件大事",
    H: "He invented a lot of useful things.",
    I: "他发明了很多有用的东西。"
}, {
    B: "pollute",
    C: "[pə'lu:t]",
    D: "vt.污染",
    E: "po+llu+te",
    F: "po婆(拼音)+llu路(谐音)+te特(拼音)",
    G: "婆婆在路上看到特严重的污染",
    H: "The waste water pollutes the environment.",
    I: "这些污水污染了环境。"
}, {
    B: "remember",
    C: "[rɪˈmembə(r)]",
    D: "vt.记住",
    E: "re+member",
    F: "re热(拼音)+member成员(熟词)",
    G: "记住别热到成员们了",
    H: "I can't remember what I said. ",
    I: "我记不起来自己说了什么。"
}, {
    B: "probably",
    C: "['prɒbəblɪ]",
    D: "adv.很可能",
    E: "pro+bab+ly",
    F: "pro飘柔+bab爸爸+ly理由",
    G: "飘柔很可能是爸爸每天洗头的理由",
    H: "It will probably rain tomorrow.",
    I: "明天很有可能会下雨。"
}, {
    B: "waterfall",
    C: "['wɔ:təfɔ:l]",
    D: "n.瀑布",
    E: "water+fall",
    F: "water水+fall掉下来",
    G: "水从高处掉下来形成了瀑布",
    H: "Let's have our picnic by the waterfall.",
    I: "咱们在瀑布旁野餐吧！"
}, {
    B: "manner",
    C: "[ˈmænə(r)]",
    D: "n.礼貌，举止，方式",
    E: "man+n+er",
    F: "man男人(熟词)+n门(编码)+er儿(拼音)",
    G: "男人在门口教儿子礼貌用语",
    H: "Do it in this manner.",
    I: "用这种方式来做。"
}, {
    B: "laugh",
    C: "[lɑ:f]",
    D: "vi.笑",
    E: "la+u+gh",
    F: "la拉(拼音)+u桶(编码)+gh古惑(拼音)",
    G: "拉着桶的古惑仔在哈哈大笑",
    H: "I love it when I hear you laugh. ",
    I: "我喜欢听你笑。"
}, {
    B: "land",
    C: "[lænd]",
    D: "n.陆地，国土",
    E: "l+an+d",
    F: "l棍子(编码)+an一(熟词)+d狗(编码dog)",
    G: "棍子被一只狗叼到陆地上",
    H: "We can't swim on dry land.	",
    I: "在陆地上我们游不了泳。"
}, {
    B: "die",
    C: "[daɪ]",
    D: "vi.死亡，凋零，熄灭",
    E: "di+e",
    F: "di弟(拼音)+e鹅(编码)",
    G: "弟弟的鹅死了",
    H: "she died in 1987.",
    I: "她是1987年去世的。"
}, {
    B: "bridge",
    C: "[brɪdʒ]",
    D: "n.桥",
    E: "br+id+ge",
    F: "br病人(拼音)+id身份证(编码)+ge哥(拼音)",
    G: "病人的身份证被哥哥在桥上捡到了",
    H: "I lost near the bridge.",
    I: "我在桥附近迷路了。"
}, {
    B: "seat",
    C: "[si:t]",
    D: "n.座位，席位",
    E: "s+eat",
    F: "s美女(编码)+eat吃(熟词)",
    G: "美女坐在座位上吃东西",
    H: "He rose from his seat and made for the door.",
    I: "他从席位上起身向门口走去。"
}, {
    B: "silly",
    C: "['sɪlɪ]",
    D: "adj.可笑的",
    E: "s+ill+y",
    F: "s蛇(编码)+ill生病(熟词)+y树杈(编码)",
    G: "蛇一生病就爬树杈是很可笑的",
    H: "I feel silly in these clothes.",
    I: "穿上这些衣服，我觉得很可笑。"
}, {
    B: "another",
    C: "[ə'nʌðə(r)]",
    D: "adj.另一，又一",
    E: "a+not+her",
    F: "a苹果(编码)+not不(熟词)+her她的(熟词)",
    G: "这个苹果不是她的另一个才是",
    H: "Please give me another one.",
    I: "请给我另一个。"
}, {
    B: "upset",
    C: "[ʌpset]",
    D: "adj.沮丧的，沮丧的",
    E: "up+set",
    F: "up在上面+set装置",
    G: "在上面放着装置真是令人沮丧",
    H: "He is upset.",
    I: "他很难过。"
}, {
    B: "balloon",
    C: "[bə'luːn]",
    D: "n.气球",
    E: "ba+lloo+n",
    F: "ba爸(拼音)+lloo1100(象形)+n门(象形)",
    G: "爸爸把1100个门都挂上了气球",
    H: "It's a balloon. ",
    I: "这是一个气球。"
}, {
    B: "sharpener",
    C: "['ʃɑ:pənə]",
    D: "n.卷笔刀",
    E: "shar+pen+er",
    F: "shar杀人(拼音)+pen钢笔(熟词)+er儿子(拼音)",
    G: "杀人的钢笔被儿子塞进了卷笔刀",
    H: "Who else has a pencil sharpener? ",
    I: "还有谁有卷笔刀?"
}, {
    B: "mouse",
    C: "[maʊs]",
    D: "n.老鼠，鼠标",
    E: "mou+se",
    F: "mou谋+se蛇",
    G: "老鼠要谋杀蛇",
    H: "Micky mouse is very lovely.",
    I: "米老鼠很可爱。"
}, {
    B: "friendly",
    C: "['fren(d)lɪ]",
    D: "adj.友好的，无害的",
    E: "friend+ly",
    F: "friend朋友(熟词)+ly老爷(拼音)",
    G: "朋友的老爷很友好的",
    H: "She is very friendly.",
    I: "她非常友好。"
}, {
    B: "cousin",
    C: "['kʌz(ə)n]",
    D: "n.堂兄弟姊妹，表兄弟姊妹",
    E: "co+us+in",
    F: "co可乐(coke)+us我们+in里面",
    G: "堂兄弟姊妹们喝着可乐与我们在里面聊天",
    H: "She's my cousin.",
    I: "她是我的表妹。"
}, {
    B: "spoon",
    C: "[spu:n]",
    D: "n.调羹，匙",
    E: "sp+oo+n",
    F: "sp视频(拼音)+oo望远镜(象形)+n门(编码)",
    G: "从视频中的望远镜可以看到门上挂着调羹",
    H: "I have a spoon.",
    I: "我有一个调羹。"
}, {
    B: "just",
    C: "[dʒʌst]",
    D: "adv.刚刚，只是，仅仅",
    E: "ju+st",
    F: "ju锯+st石头",
    G: "我刚刚锯断了那块石头",
    H: "This is the thing you just left.",
    I: "这是您刚才忘在这里的东西。"
}, {
    B: "pack",
    C: "[pæk]",
    D: "n.背包，包装；vt.包装",
    E: "pa+ck",
    F: "pa趴+ck仓库",
    G: "趴在仓库找背包",
    H: "These books need to be packed into a box.",
    I: "这些书得装进箱子里。"
}, {
    B: "dollar",
    C: "['dɒlə]",
    D: "n.美元",
    E: "do+ll+ar",
    F: "do做(熟词)+ll11(象形)+ar矮人(拼音)",
    G: "做11个矮人可以获得一美元",
    H: "Do you have a dollar?",
    I: "你有一美元吗？"
}, {
    B: "mine",
    C: "[maɪn]",
    D: "pron.我的；n.矿，矿藏",
    E: "mi+ne",
    F: "mi米+ne呢",
    G: "我的米呢",
    H: "This schoolbag is mine.",
    I: "这个书包是我的。"
}, {
    B: "horse",
    C: "[hɔ:s]",
    D: "n.马",
    E: "h+or+se",
    F: "h椅子(编码)+or偶人(拼音)+se色(拼音)",
    G: "坐在椅子上的偶人喜欢白色的马",
    H: "I like riding horse.",
    I: "我喜欢骑马。"
}, {
    B: "hard-working",
    C: "[hɑ:d'wɜ:kɪŋ]",
    D: "adj.勤勉的，工作努力的",
    E: "hard+working",
    F: "hard努力的+working工作",
    G: "勤勉的人经常努力地工作",
    H: "She is an amazing hard-working woman as I am.  ",
    I: "她和我一样，是个工作十分努力的女人。"
}, {
    B: "tired",
    C: "[taɪəd]",
    D: "adj.厌倦的，疲倦的",
    E: "ti+red",
    F: "ti提(拼音)+red红色(熟词)",
    G: "厌倦地提起红色的东西",
    H: "I feel tired.",
    I: "我感到很疲倦。"
}, {
    B: "sing",
    C: "[sɪŋ]",
    D: "v.唱歌；n.演唱",
    E: "s+ing",
    F: "s美女(编码)+ing鹰(谐音)",
    G: "美女学老鹰唱歌",
    H: "I can't sing.",
    I: "我不会唱歌。"
}, {
    B: "strict",
    C: "[strɪkt]",
    D: "adj.严格的，严厉的",
    E: "st+ri+ct",
    F: "st尸体(拼音)+ri日(拼音)+ctCT(编码)",
    G: "尸体在日光下用CT机严格检查",
    H: "The teacher is strict.",
    I: "这个老师很严格。"
}, {
    B: "shy",
    C: "[ʃaɪ]",
    D: "adj.腼腆的",
    E: "sh+y",
    F: "sh上海(拼音)+y树杈(编码)",
    G: "上海人躲在树杈后面，很腼腆",
    H: "She is a shy girl.",
    I: "她是个害羞的女孩。"
}, {
    B: "exercise",
    C: "['eksəsaɪz]",
    D: "n.练习，运动",
    E: "ex+er+cise",
    F: "ex前任(熟词)+er儿(拼音)+cise塞子(谐音)",
    G: "前任带着儿子拿塞子做练习",
    H: "She exercises two or three times a week .",
    I: "她每周锻炼两三次。"
}, {
    B: "usually",
    C: "['juʒuəlɪ]",
    D: "adv.通常",
    E: "us+u+all+y",
    F: "us我们(熟词)+u桶(编码)+all全部(熟词)+y衣叉(编码)",
    G: "通常我们用桶装全部的衣叉",
    H: "He usually goes home by bike.",
    I: "他通常骑自行车回家。"
}, {
    B: "letter",
    C: "['letə(r)]",
    D: "n.字母",
    E: "latter",
    F: "latter后面的",
    G: "a后面的那个字母是e吗？",
    H: 'The word "write" has a letter "w" in it.',
    I: "“write”这个单词中有一个字母“w”。"
}, {
    B: "vacation",
    C: "[və'keɪʃn]",
    D: "vi.度假；n.假期，假日，休假",
    E: "va+ca+tion",
    F: "va娃(谐音)+ca擦(拼音)+tion神(谐音)",
    G: "娃娃擦掉口水后和神一起去度假了",
    H: "They will go to Hong Kong on their vacation.",
    I: "他们将会去香港度假。"
}, {
    B: "which",
    C: "[wɪtʃ]",
    D: "pron.哪一个，哪一些",
    E: "wh+i+ch",
    F: "wh王后(拼音)+i爱(编码)+ch吃(拼音)",
    G: "王后爱吃哪一个",
    H: "Which is better?",
    I: "哪一个更好呢？"
}, {
    B: "national",
    C: "['næʃnəl]",
    D: "adj.国家的，",
    E: "na+tion+al",
    F: "na那(拼音)+tion神(谐音)+al阿狸(拼音)",
    G: "那个国家的神是阿狸",
    H: "I want you to see some of our national parks.",
    I: "我想让你去参观一下我们的国家公园。"
}, {
    B: "fisherman",
    C: "['fɪʃəmən]",
    D: "n.渔民",
    E: "fish+er+man",
    F: "fish鱼(熟词)+er饵(拼音)+man男人(熟词)",
    G: "拿着鱼饵的男人是个渔民",
    H: "Peter has become a judge but John remains a fisherman. ",
    I: "彼得当了法官，但约翰仍是个渔民。"
}, {
    B: "tonight",
    C: "[tə'naɪt]",
    D: "n.今晚；adv.在今晚",
    E: "to+night",
    F: "to到+night晚上",
    G: "到了晚上才想起今晚有约",
    H: "I'm at home tonight.",
    I: "我今晚在家。"
}, {
    B: "dictionary",
    C: "['dɪkʃ(ə)n(ə)rɪ]",
    D: "n.字典，词典",
    E: "diction+a+ry",
    F: "diction迪克神(谐音)+a一(熟词)+ry人妖(拼音)",
    G: "迪克神叫一个人妖去买字典",
    H: "I have a dictionary.",
    I: "我有一本字典。"
}, {
    B: "pull",
    C: "[pʊl]",
    D: "vt./vi.拉动",
    E: "pu+ll",
    F: "pu扑(拼音)+ll11(象形)",
    G: "扑过去11次才把他拉动",
    H: "You push and I'll pull.",
    I: "你推，我拉。"
}, {
    B: "follow",
    C: "['fɒləʊ]",
    D: "vt.跟随",
    E: "fo+llo+w",
    F: "fo佛(拼音)+llo110(象形)+w皇冠(编码)",
    G: "跟随佛的110个皇冠丢了",
    H: "He followed her into the house.",
    I: "他跟随她走进房屋。"
}, {
    B: "Germany",
    C: "['dʒɜ:mənɪ]",
    D: "n.德国，德意志",
    E: "Ge+r+many",
    F: "Ge哥(拼音)+r草(编码)+many很多(熟词)",
    G: "哥用草折磨很多德国人",
    H: "She comes from Germany.",
    I: "她来自德国。"
}, {
    B: "coach",
    C: "[kəʊtʃ]",
    D: "n.教练，长途客车，四轮大马车；vt./vi.训练，辅导",
    E: "co+a+ch",
    F: "co可乐(熟词coke)+a苹果(编码)+ch吃(拼音)",
    G: "喝完可乐又吃苹果的吃货是个教练",
    H: "Her coach encouraged her to keep on running.",
    I: "她的教练在鼓励她继续不断奔跑。"
}, {
    B: "attention",
    C: "[ə'tenʃ(ə)n]",
    D: "n.注意，注意力",
    E: "at+ten+tion",
    F: "at在(熟词)+ten十(熟词)+tion神(谐音)",
    G: "请注意这里有十个神",
    H: "Later he turned his attention to the desperate state of housing in the city.",
    I: "后来他把注意力转向了该市极为严重的住房状况。"
}, {
    B: "sit",
    C: "[sɪt]",
    D: "vt.坐，位于；vt.使就坐",
    E: "s+i+t",
    F: "s美女+i蜡烛+t伞",
    G: "美女拿着蜡烛打着伞坐着",
    H: "I sit on the chair.",
    I: "我坐在椅子上。"
}, {
    B: "smart",
    C: "[smɑ:t]",
    D: "adj.聪明的，机敏的",
    E: "sm+art",
    F: "sm什么(拼音)+art艺术(熟词)",
    G: "聪明的人什么艺术都会",
    H: "He is a smart businessman.",
    I: "他是一个精明能干的生意人。"
}, {
    B: "become",
    C: "[bɪ'kʌm]",
    D: "vi.成为，变得，变成",
    E: "be+come",
    F: "be是+come来",
    G: "我是来这里后才成为老师的",
    H: "I will become a man.",
    I: "我会成为一个大人的。"
}, {
    B: "magazine",
    C: "[ˌmægə'zi:n]",
    D: "n.杂志",
    E: "mag+a+zine",
    F: "mag马哥(拼音)+a一(熟词)+zine字呢(拼音)",
    G: "马哥的杂志里只有一个字呢",
    H: "He works for a magazine.",
    I: "他在杂志社工作。"
}, {
    B: "basket",
    C: "['bɑːskɪt]",
    D: "n.篮子",
    E: "ba+sk+et",
    F: "ba爸(拼音)+sk上课(拼音)+et外星人(编码)",
    G: "爸爸上课时看到一个外星人在篮子里",
    H: "I have a basket.",
    I: "我有一个篮子。"
}, {
    B: "part",
    C: "[pɑ:t]",
    D: "n.部分",
    E: "par+t",
    F: "par怕热(拼音)+t伞(编码)",
    G: "部分同学怕热打着伞",
    H: "I didn't like the first part of the book. ",
    I: "我不喜欢这本书的第一部分。"
}, {
    B: "manager",
    C: "['mænɪdʒə]",
    D: "n.经理",
    E: "man+ag+er",
    F: "man男人(熟词)+ag阿哥(拼音)+er儿(拼音)",
    G: "经理说那个男人是阿哥的儿子",
    H: "I wish to speak to the manager. ",
    I: "我想找经理谈谈。"
}, {
    B: "act",
    C: "[ækt]",
    D: "vi.表演，行动",
    E: "a+ct",
    F: "a一个(熟词)+ctCT(编码)",
    G: "表演一个做CT检查的场景",
    H: "She wants to act with her mum.",
    I: "她想与妈妈一起表演。"
}, {
    B: "agree",
    C: "[ə'gri:]",
    D: "vt.承认，同意，赞成",
    E: "ag+r+ee",
    F: "ag阿哥(拼音)+r草(编码)+ee两只鹅(象形)",
    G: "阿哥承认草下有两只鹅",
    H: "I agreed with you.",
    I: "我同意你的观点。"
}, {
    B: "almost",
    C: "['ɔ:lməʊst]",
    D: "adv.差不多，几乎",
    E: "al+most",
    F: "al阿狸(拼音)+most大部分的(熟词)",
    G: "阿狸差不多吃了大部分的肉",
    H: "I like almost all of them.",
    I: "我差不多所有的都喜欢。"
}, {
    B: "article",
    C: "['ɑːtɪk(ə)l]",
    D: "n.文章，论文，物品",
    E: "art+ic+le",
    F: "art艺术(熟词)+icIC卡(编码)+le乐(拼音)",
    G: "艺术生的IC卡被乐乐写满文章",
    H: "This is a newspaper article.",
    I: "这是报纸上的文章。"
}, {
    B: "badly",
    C: "['bædlɪ]",
    D: "adv.严重地",
    E: "bad+ly",
    F: "bad霸道+ly老爷",
    G: "霸道的老爷病得很严重",
    H: "I was angry because I played so badly.",
    I: "我生气因为我弹得这么糟。"
}, {
    B: "beat",
    C: "[bi:t]",
    D: "vt.打败（某人），赢",
    E: "b+eat",
    F: "b蜜蜂(编码bee)+eat吃(熟词)",
    G: "蜜蜂吃了蜂蜜能打败熊二",
    H: "My dad sometimes beats my younger brother.",
    I: "我爸爸有时打我弟弟。"
}, {
    B: "blind",
    C: "[blaɪnd]",
    D: "n.盲人；adj.失明的",
    E: "bl+in+d",
    F: "bl61(象形)+in在里面(熟词)+d狗(编码dog)",
    G: "61个盲人在里面牵着狗",
    H: "He is a blind man. ",
    I: "他是一名盲人。"
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
    B: "bright",
    C: "[braɪt]",
    D: "adj.明亮的，聪明的",
    E: "b+right",
    F: "b男孩(编码boy)+right右边的(熟词)",
    G: "男孩右边的房间很明亮",
    H: "This is a bright room.",
    I: "这是一间明亮的屋子。"
}, {
    B: "cancer",
    C: "['kænsə]",
    D: "n.癌症",
    E: "can+ce+r",
    F: "can能(熟词)+ce测(拼音)+r小草(编码)",
    G: "他能测出小草有没有得癌症",
    H: "His brother has cancer.",
    I: "他哥得了癌症。"
}, {
    B: "catch",
    C: "[kætʃ]",
    D: "vt.抓住，接住",
    E: "cat+ch",
    F: "cat猫(熟词)+ch吃(拼音)",
    G: "猫吃了鱼被抓住了",
    H: "Where did you catch the fish?",
    I: "这条鱼你在哪儿抓的？"
}, {
    B: "cause",
    C: "[kɔːz]",
    D: "n.原因，起因",
    E: "ca+use",
    F: "ca钙+use使用",
    G: "钙使用过量是得病的原因",
    H: "Smoking is the biggest cause.",
    I: "吸烟是最大的原因。"
}, {
    B: "certainly",
    C: "['sə:tənlɪ]",
    D: "adv.必定，当然，行（用于回答）",
    E: "certain+ly",
    F: "certain确定(熟词)+ly老爷(拼音)",
    G: "我确定老爷必定会打胜仗",
    H: "The news certainly got her down. ",
    I: "这样的新闻必然使他伤心。"
}, {
    B: "clear",
    C: "[klɪə]",
    D: "adj.清楚的",
    E: "cle+ar",
    F: "cle可乐(谐音)+ar矮人(拼音)",
    G: "喝了可乐，矮人就听的清楚了",
    H: "Is that clear? ",
    I: "我讲清楚了吗？"
}, {
    B: "command",
    C: "[kə'mɑːnd]",
    D: "vi.指挥，命令，控制",
    E: "com+man+d",
    F: "com(e)来(熟词)+man男人(熟词)+d狗(编码dog)",
    G: "来了一个男人牵着狗在做指挥",
    H: "You should subject yourself to my command.",
    I: "你必须听从我的命令。"
}, {
    B: "common",
    C: "['kɒmən]",
    D: "adj.普通的，共同的，一般的",
    E: "co+mm+on",
    F: "co可乐(熟词coke)+mm美眉(拼音)+on在...之上(熟词)",
    G: "普通的可乐是美眉在上面买的",
    H: "This is a common notebook.",
    I: "这是一本普通的笔记本。"
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
    B: "compare",
    C: "[kəm'pɛə]",
    D: "n.比较",
    E: "com+pa+re",
    F: "com(e)来(熟词)+pa怕(拼音)+re热(拼音)",
    G: "来比较一下谁比较怕热",
    H: "We compared the two reports carefully.",
    I: "我们仔细地比较了两个报告。"
}, {
    B: "complain",
    C: "[kəm'pleɪn]",
    D: "vi.抱怨，投诉，发牢骚",
    E: "com+plain",
    F: "com计算机(编码)+plain简单的(熟词)",
    G: "我抱怨计算机太简单了",
    H: "He started to complain , I brought him up.",
    I: "他开始抱怨起来，于是我立即制止他。"
}, {
    B: "complete",
    C: "[kəm'pli:t]",
    D: "adj.完整的，整个的",
    E: "com+ple+te",
    F: "com计算机(编码)+ple赔了(拼音)+te特(拼音)",
    G: "完整的计算机坏了，赔了特别多的钱",
    H: "The list may not be complete. ",
    I: "这个单子可能不完整。"
}, {
    B: "connect",
    C: "[kə'nekt]",
    D: "vi./vt.（使）连接",
    E: "con+ne+ct",
    F: "con啃(谐音)+ne哪(吒)(拼音)+ctCT(编码)",
    G: "啃骨头的哪吒把CT机连接上了",
    H: "The two subjects are closely connected.",
    I: "这两门学科紧密相连。"
}, {
    B: "deaf",
    C: "[def]",
    D: "adj.聋的，不愿听的",
    E: "leaf",
    F: "leaf叶子",
    G: "弟(d)弟耳朵聋后听不见叶子落下的声音",
    H: "A deaf person can't hear.",
    I: "耳聋者听不见。"
}, {
    B: "decide",
    C: "[dɪ'saɪd]",
    D: "vt.决定",
    E: "de+ci+de",
    F: "de弟(谐音)+ci刺(拼音)+de德(拼音)",
    G: "弟弟当了刺客后决定去德国",
    H: "The boy decides to study English.",
    I: "这个男孩决定学习英语。"
}, {
    B: "discuss",
    C: "[dɪ'skʌs]",
    D: "n.讨论，商量",
    E: "dis+cu+ss",
    F: "dis的士(拼音)+cu醋(拼音)+ss两个美女(编码)",
    G: "他们在讨论的士上喝醋的两个美女",
    H: "We will discuss the question at the meeting.",
    I: "我们将在会议上讨论那个问题。"
}, {
    B: "documentary",
    C: "[ˌdɒkju'mentrɪ]",
    D: "n.纪录片；adj.记录的，文书的，纪实的",
    E: "document+ar+y",
    F: "document文件(熟词)+ar矮人(拼音)+y树杈(编码)",
    G: "纪录片的文件是矮人用树杈写的",
    H: "In his documentary，Alice acted as a doctor.",
    I: "在他的纪录片，Alice扮演一个医生。"
}, {
    B: "drop",
    C: "[drɒp]",
    D: "vt.滴，使降低",
    E: "dr+op",
    F: "dr大人+op藕片",
    G: "大人吃藕片时在上面滴了水",
    H: "There is a drop of blue ink on the paper.",
    I: "纸上有一滴蓝墨水。"
}, {
    B: "encourage",
    C: "[ɪn'kʌrɪdʒ]",
    D: "vt.鼓励，怂恿，激励，支持",
    E: "en+cou+rage",
    F: "en摁(拼音)+cou凑(拼音)+rage暴怒(熟词)",
    G: "摁着他的头凑过去鼓励他控制住心中的暴怒",
    H: "Her parents encouraged her in her studies.",
    I: "她的父母鼓励她好好学习。"
}, {
    B: "energy",
    C: "['enədʒɪ]",
    D: "n.能量",
    E: "en+erg+y",
    F: "en俺(谐音)+erg二哥(拼音)+y衣叉(编码)",
    G: "俺二哥拿着衣叉充满了能量",
    H: "She's always full of energy .",
    I: "她总是充满活力。"
}, {
    B: "enter",
    C: "['entə(r)]",
    D: "vt./vi.进入",
    E: "en+t+er",
    F: "en摁(拼音)+t特(编码)+er儿(拼音)",
    G: "他摁着特务的儿子进入房间",
    H: "Knock before you enter.",
    I: "进来前先敲门。"
}, {
    B: "exactly",
    C: "[ɪg'zæktlɪ]",
    D: "adv.精确地，准确地",
    E: "ex+act+ly",
    F: "ex儿媳(拼音)+act行动(熟词)+ly老爷(拼音)",
    G: "儿媳的行动和老爷的安排精确地吻合",
    H: "The train arrived at exactly 8 o'clock.",
    I: "火车八点钟准时到达。"
}, {
    B: "fail",
    C: "[feɪl]",
    D: "vt./vi.失败，不及格",
    E: "f+ail",
    F: "f佛(编码)+ail矮了(拼音)",
    G: "失败后佛变矮了",
    H: "I was fail in the exam.",
    I: "我考试不及格。"
}, {
    B: "fill",
    C: "[fɪl]",
    D: "vt.填写，装满，填充",
    E: "f+ill",
    F: "f佛(编码)+ill病(熟词)",
    G: "佛病了要填写病历",
    H: "Please fill this glass for me.",
    I: "请把这个杯子给我倒满。"
}, {
    B: "fit",
    C: "[fɪt]",
    D: "adj.健康的，健壮的",
    E: "f+it",
    F: "f拐杖+itIT",
    G: "拄着拐杖的IT男很健康",
    H: " She made a New Year's resolution to get fit. ",
    I: "她的新年决心是要保持身材健美。"
}, {
    B: "frighten",
    C: "['fraɪt(ə)n]",
    D: "vt.使惊吓，恐吓",
    E: "f+right+en",
    F: "f佛(编码)+right右边(熟词)+en摁(拼音)",
    G: "受惊吓的佛把右边的人摁着打",
    H: "The noise frightened the child.",
    I: "喧哗声使小孩惊恐万分。"
}, {
    B: "frightened",
    C: "[ˈfraɪtnd]",
    D: "adj.害怕的，惊吓的",
    E: "f+right+en+ed",
    F: "f斧(编码)+right右边(熟词)+en摁(拼音)+ed耳朵(拼音)",
    G: "斧头掉下来右边孩子害怕地摁住耳朵",
    H: "He was frightened.",
    I: "他受到了惊吓。"
}, {
    B: "happen",
    C: "['hæp(ə)n]",
    D: "vi.碰巧，发生，偶然遇到",
    E: "h+ap+pen",
    F: "h椅子(编码)+ap阿婆(拼音)+pen钢笔(熟词)",
    G: "我碰巧看到是坐在椅子上的阿婆捡了钢笔",
    H: "These events were clearly predestined to happen.",
    I: "这些事件是不可避免要发生的。"
}, {
    B: "hardly",
    C: "[ˈhɑ:dlɪ]",
    D: "adv.几乎不",
    E: "hard+ly",
    F: "hard难(熟词)+ly老爷(拼音)",
    G: "这题很难老爷几乎不会做",
    H: "I can hardly  express  my  gratitude to you for  your  help",
    I: "对于你的帮助，我几乎难以表达我的谢意"
}, {
    B: "hate",
    C: "[heɪt]",
    D: "vt.恨，厌恶，憎恶",
    E: "gate",
    F: "gate门",
    G: "他很恨这扇门",
    H: "He 's always holding up my father to scorn, which made me hate him.",
    I: "他总是举出我父亲加以嘲笑，这使我十分厌恶他。"
}, {
    B: "highway",
    C: "['haɪweɪ]",
    D: "n.（尤指城市间的）公路",
    E: "high+way",
    F: "high高的+way道路",
    G: "高处的那条道路是通向北京的公路",
    H: "He barreled along the highway.          					 ",
    I: "他沿公路高速行驶。"
}, {
    B: "hit",
    C: "[hɪt]",
    D: "vt.（用手或器具）打，击",
    E: "h+it",
    F: "h椅子(编码)+it它(熟词)",
    G: "椅子掉下来打到它",
    H: "He hit the bird with a stone.",
    I: "他用一颗石头打了鸟。"
}, {
    B: "hold",
    C: "[həʊld]",
    D: "vt.握住，拿住，保留；vi.拿住，赞成",
    E: "h+old",
    F: "h椅子(编码)+old老(熟词)",
    G: "椅子上的老人握住拐杖在打盹",
    H: "He holds a gun in his hand.",
    I: "他手里持有一把枪。"
}, {
    B: "impossible",
    C: "[ɪmˈpɒsəbl]",
    D: "adj.不可能的，做不到的，难以忍受的",
    E: "im+possible",
    F: "im不(前缀)+possible可能的(熟词)",
    G: "天不可能下红雨",
    H: "Nothing is impossible. ",
    I: "万事皆有可能。"
}, {
    B: "improve",
    C: "[ɪm'pru:v]",
    D: "vt.改进",
    E: "im+prove",
    F: "im姨母(谐音)+prove证明(熟词)",
    G: "姨母证明了他做出了改进",
    H: "Please do not be mad at me, for I have tried to improve.",
    I: "请不要对我发脾气，因为我有试著改进。"
}, {
    B: "instruction",
    C: "[ɪn'strʌkʃn]",
    D: "n.指标",
    E: "instruct+i+on",
    F: "instruct通知+i我(I)+on在...上面",
    G: "领导通知我在下月的工作上必须达到指标",
    H: "You must read the instruction carefully before you use this machine.",
    I: "使用这台机器前，你必须细读指示。"
}, {
    B: "international",
    C: "[ɪntə'næʃ(ə)n(ə)l]",
    D: "adj.国际的，两国（或以上）国家的",
    E: "inter+nation+al",
    F: "inter英特(谐音)+nation国家(熟词)+al阿狸(拼音)",
    G: "国际巨星英特娶了我国的阿狸",
    H: "This is an international acitivity.",
    I: "这是一次国际性活动。"
}, {
    B: "interview",
    C: "['ɪntəvju:]",
    D: "n.采访",
    E: "inter+view",
    F: "inter相互(词缀)+view看(熟词)",
    G: "采访的时候要相互看",
    H: "The star will give an interview on Friday.",
    I: "这位明星将在周五接受采访。"
}, {
    B: "lonely",
    C: "['ləʊnlɪ]",
    D: "adj.孤独的，寂寞的",
    E: "l+one+ly",
    F: "l棍子(编码)+one一(熟词)+ly老爷(拼音)",
    G: "拿着棍子的一个老爷很孤独",
    H: "I am lonely without you.",
    I: "没有你的我是孤独的。"
}, {
    B: "luckily",
    C: "['lʌkɪlɪ]",
    D: "adv.幸运地，侥幸，幸而",
    E: "luck+i+ly",
    F: "luck幸运(熟词)+i蜡烛(编码)+ly老爷(拼音)",
    G: "幸运得到蜡烛的老爷很开心",
    H: "Luckily I had some money with me.",
    I: "幸好我身上带了点钱。"
}, {
    B: "neither",
    C: "['naɪðə(r)]",
    D: "conj./adv.两者都不，既不…也不",
    E: "n+either",
    F: "n门(编码)+either两者中的任一个(熟词)",
    G: "门上两张贴画中的任何一张他都不喜欢",
    H: "Neither answer is correct.",
    I: "两个答案都不对。"
}, {
    B: "noisy",
    C: "['nɒɪzɪ]",
    D: "adj.喧闹的，嘈杂的",
    E: "no+is+y",
    F: "no不(熟词)+is是(熟词)+y鸭(拼音)",
    G: "在喧闹的不是鸭子",
    H: "This room is too noisy. ",
    I: "这屋里太闹。"
}, {
    B: "pleased",
    C: "[pli:zd]",
    D: "adj.高兴，满意，愉快",
    E: "please+d",
    F: "please请(熟词)+d弟(编码)",
    G: "今天请弟弟来玩，他很高兴",
    H: "I shall be very pleased to help you.",
    I: "能来帮助你我将会很高兴。"
}, {
    B: "popular",
    C: "['pɒpjʊlə]",
    D: "adj.流行的，通俗的",
    E: "po+pu+l+ar",
    F: "po婆(拼音)+pu扑(拼音)+l棍子(编码)+ar矮人(拼音)",
    G: "听着流行音乐的婆婆扑向拿着棍子的矮人",
    H: "Football is a very popular sport in China.",
    I: "足球在中国是一项很流行的体育活动。"
}, {
    B: "possible",
    C: "['pɒsɪb(ə)l]",
    D: "adj.可能的",
    E: "pos+sible",
    F: "posPOS机(编码)+sible四伯(谐音)",
    G: "POS机砸到四伯是很有可能的",
    H: "It is possible to get there by bus.",
    I: "可以乘公共汽车到那里。"
}, {
    B: "practice",
    C: "['præktɪs]",
    D: "n.练习",
    E: "pr+act+ice",
    F: "pr仆人(拼音)+act表演(熟词)+ice冰(熟词)",
    G: "正在练习的仆人表演吃冰",
    H: "You need more practices.",
    I: "你还需要多练习。"
}, {
    B: "president",
    C: "['prezɪd(ə)nt]",
    D: "n.总统，董事长，校长",
    E: "pre+side+nt",
    F: "pre仆人(拼音)+side旁边(熟词)+nt难题(拼音)",
    G: "总统的仆人站在旁边出难题",
    H: "President Obama has planned to visit the country next month.",
    I: "奥巴马总统计划于下月访问该国。"
}, {
    B: "pressure",
    C: "[ˈpreʃə(r)]",
    D: "n.压力， 压（力）",
    E: "pre+s+sure",
    F: "pre仆人(拼音)+s美女(编码)+sure的确(熟词)",
    G: "仆人在美女旁边的确不会有压力",
    H: "The pressure of work was too great for him.",
    I: "工作的压力使他承受不了。"
}, {
    B: "private",
    C: "['praɪvət]",
    D: "adj.私人的，私有的，私下的",
    E: "pri+va+te",
    F: "pri扑来(谐音)+va娃(谐音)+te特(拼音)",
    G: "扑过来的娃娃很特别是私人的",
    H: "Those are my father's private papers.",
    I: "那些都是我父亲的私人文件。"
}, {
    B: "produce",
    C: "[prə'dju:s]",
    D: "vt./vi.生产，产生",
    E: "pro+du+ce",
    F: "pro飘柔+du堵+ce厕",
    G: "生产飘柔时堵了厕所",
    H: "We need to produce more shoes.",
    I: "我们需要多生产鞋子。"
}, {
    B: "progress",
    C: "['prəʊgres]",
    D: "n.进步，进展",
    E: "pro+gre+ss",
    F: "pro飘柔(拼音)+gre工人(拼音)+ss55(象形)",
    G: "用了飘柔的工人进步了55名",
    H: "All these things cramped his progress.",
    I: "这一切妨碍了他的进步。"
}, {
    B: "protect",
    C: "[prə'tekt]",
    D: "vt.保护",
    E: "pro+te+ct",
    F: "pro飘柔+te特+ct春天",
    G: "保护头发用飘柔特别是在春天里",
    H: "Policeman will protect us. ",
    I: "警察会保护我们的。"
}, {
    B: "prove",
    C: "[pru:v]",
    D: "vt./vi.证明，证实，证明是",
    E: "pro+ve",
    F: "pro飘柔(拼音)+ve维E(编码)",
    G: "专家证明飘柔含有维E成分",
    H: "What are you trying to prove?",
    I: "你想证明什么？"
}, {
    B: "quietly",
    C: "['kwaɪətlɪ]",
    D: "adv.安静地",
    E: "quiet+ly",
    F: "quiet安静(熟词)+ly老爷(拼音)",
    G: "在安静的地方老爷在安静地看书",
    H: "He lives quietly in the country in a village near Lahti. ",
    I: "他在拉赫蒂附近的一个乡村里过着平静的日子。"
}, {
    B: "reach",
    C: "[ri:tʃ] ",
    D: "vt./vi.到达，抵达",
    E: "beach",
    F: "beach沙滩",
    G: "我们到达了沙滩",
    H: "They will reach Guangzhou at two o'clock.  ",
    I: "他们将在两点到达广州。"
}, {
    B: "refuse",
    C: "[rɪ'fju:z]",
    D: "vt./vi.拒绝",
    E: "re+fuse",
    F: "re热+fuse肤色",
    G: "他拒绝去热的地方因为会影响肤色",
    H: "He refused to go to school in the morning.",
    I: "他拒绝在早上去学校。"
}, {
    B: "relaxed",
    C: "[rɪ'lækst]",
    D: "adj.放松的，",
    E: "relax+ed",
    F: "relax放松(熟词)+ed耳朵(拼音)",
    G: "放松耳朵，整个人都",
    H: "As soon as I had made the final decision, I felt a lot more relaxed.",
    I: "我一作出最后的决定就感到轻松多了。"
}, {
    B: "requirement",
    C: "[rɪˈkwaɪəmənt]",
    D: "n.需要，要求",
    E: "require+ment",
    F: "require需要(熟词)+ment门徒(拼音)",
    G: "这里需要门徒的帮助",
    H: "I have no special requirement. ",
    I: "我没有特殊的要求。"
}, {
    B: "reward",
    C: "[riˈwɔ:d]",
    D: "n./vt.赏金，报酬，报答",
    E: "re+ward",
    F: "re热(拼音)+ward病房(熟词)",
    G: "太热了我们去病房领赏金吧",
    H: "He will expect some reward after working so hard. ",
    I: "他工作很努力，会得到报偿的。"
}, {
    B: "seem",
    C: "[si:m]",
    D: "vi.好像，似乎",
    E: "see+m",
    F: "see看见(熟词)+m麦当劳(编码)",
    G: "好像在山上看见有麦当劳",
    H: "You seem happy.",
    I: "你好像挺高兴。"
}, {
    B: "strange",
    C: "[streɪndʒ]",
    D: "adj.奇怪的",
    E: "str+an+ge",
    F: "str街道(熟词street)+an一(熟词)+ge哥(拼音)",
    G: "街道上一个哥哥很奇怪",
    H: "He got up a strange affection for the little girl.",
    I: "他对这个小姑娘产生了一种奇怪的感情。"
}, {
    B: "suffer",
    C: "['sʌfə(r)]",
    D: "vi.（因疾病）受苦，受磨难",
    E: "su+ff+er",
    F: "su苏(拼音)+ff两个拐杖(编码)+er儿(拼音)",
    G: "苏送了2个拐杖给因疾病受苦的儿子",
    H: "You must suffer from the test.",
    I: "你必须经受考验。"
}, {
    B: "suggest",
    C: "[sə'dʒest]",
    D: "vt.建议，提议",
    E: "sugg+e+st",
    F: "sugg苏哥哥(拼音)+e鹅(编码)+st石头(拼音)",
    G: "苏哥哥的鹅给石头提建议",
    H: "I suggest that we wait a while.",
    I: "我建议我们等一会。"
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
    B: "teenager",
    C: "['ti:neɪdʒə]",
    D: "n.少年，青少年",
    E: "t+ee+nager",
    F: "t伞(编码)+ee眼睛(象形)+nager那个人(拼音)",
    G: "少年打着伞，眼睛看不到那个人",
    H: "He is a teenager.",
    I: "他是个青少年。"
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
    B: "throw",
    C: "[θrəʊ]",
    D: "vt./vi.扔，抛，猛推；n.扔，抛，投（球）",
    E: "th+row",
    F: "th土豪(拼音)+row排(熟词)",
    G: "土豪往前排扔纸条",
    H: "He spent hours throwing a tennis ball against a wall",
    I: "他好几个小时都对着一堵墙掷网球。"
}, {
    B: "usual",
    C: "['ju:ʒuəl]",
    D: "adj.通常的，寻常的",
    E: "us+u+al",
    F: "us我们(熟词)+u你(编码you)+al阿狸(拼音)",
    G: "通常我们喜欢去你家找阿狸玩",
    H: "It's weekend,but I go to school as usual.",
    I: "现在是周末，但是我还是像往常一样去上学。"
}, {
    B: "weak",
    C: "[wi:k]",
    D: "adj.弱的",
    E: "week",
    F: "week星期",
    G: "他已经虚弱了一个星期了",
    H: "She is very weak.",
    I: "她现在很虚弱。"
}, {
    B: "whether",
    C: "['weðə(r)]",
    D: "conj.是否",
    E: "w+he+th+er",
    F: "w皇冠(编码)+he他(熟词)+th土豪(拼音)+er儿(拼音)",
    G: "戴着皇冠的他是否是土豪的儿子",
    H: "Please let me know whether you agree with me.",
    I: "请告诉我你是否赞同我。"
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
    B: "spider",
    C: "['spaɪdə]",
    D: "n.蜘蛛，设圈套者",
    E: "sp+id+er",
    F: "sp赛跑(拼音)+id身份证(编码)+er儿(拼音)",
    G: "蜘蛛赛跑的时候身份证掉了被儿子捡了",
    H: "The little girl thinks spiders are terrible creatures.",
    I: "小女孩认为蜘蛛是一种可怕的生物。"
}, {
    B: "Butterfly",
    C: "['bʌtəflaɪ]",
    D: "n.蝴蝶",
    E: "butter+fly",
    F: "butter黄油+fly飞",
    G: "蝴蝶在黄油上飞",
    H: "It's a butterfly.",
    I: "这是一只蝴蝶。"
}, {
    B: "member",
    C: "['membə(r)]",
    D: "n.成员",
    E: "me+mb+er",
    F: "me我(熟词)+mb面包(拼音)+er儿(拼音)",
    G: "家庭成员中吃我面包最多的是儿子",
    H: "He is a member of the football club.",
    I: "他是足球俱乐部的一员。"
}, {
    B: "monitor",
    C: "['mɒnɪtə]",
    D: "n.班长，监视器；vt.监控，监视，监督",
    E: "moni+t+or",
    F: "moni模拟(拼音)+t伞(编码)+or偶人(拼音)",
    G: "班长把模拟题给打伞的偶人做",
    H: "My computer monitor is broken.",
    I: "我电脑的显示器坏了。"
}, {
    B: "feeling",
    C: "['fi:lɪŋ]",
    D: "n.情感，感觉",
    E: "feel+ing",
    F: "feel感受(熟词)+ing鹰(谐音)",
    G: "他能感受到老鹰的情感",
    H: "Do you know my feeling?",
    I: "你明白我的感觉吗？"
}, {
    B: "crowd",
    C: "[kraʊd]",
    D: "n.人群",
    E: "cr+ow+d",
    F: "cr超人(拼音)+ow欧文(拼音)+d狗(编码dog)",
    G: "人群中那个超人抢走了欧文的狗",
    H: "A large crowd waits at the bus stop.",
    I: "一大群人在公共汽车站等候。"
}, {
    B: "artist",
    C: "['ɑ:tɪst]",
    D: "n.艺术家",
    E: "art+is+t",
    F: "art艺术(熟词)+is是(熟词)+t伞(编码)",
    G: "艺术家是艺术的保护伞",
    H: "He is an artist.",
    I: "他是一个艺术家。"
}, {
    B: "lawyer",
    C: "['lɔ:jə]",
    D: "n.律师",
    E: "law+y+er",
    F: "law法律(熟词)+y弹弓(编码)+er儿(拼音)",
    G: "上法律课玩弹弓的儿子当了律师",
    H: "The lawyer was paid a huge salary.",
    I: "那位律师薪酬很高。"
}, {
    B: "soldier",
    C: "['səʊldʒə(r)]",
    D: "n.士兵",
    E: "sold+i+er",
    F: "sold卖(熟词)+i蜡烛(编码)+er儿(拼音)",
    G: "士兵偷卖蜡烛给儿子",
    H: "The soldier is very brave.",
    I: "这个战士很勇敢。"
}, {
    B: "earthquake",
    C: "['ə:θkweɪk]",
    D: "n.地震",
    E: "earth+quake",
    F: "earth地球+quake震动",
    G: "地球震动是地震",
    H: "An earthquake hit the city.",
    I: "这座城市发生了地震。"
}, {
    B: "memory",
    C: "['mem(ə)rɪ]",
    D: "n.记忆，记忆力",
    E: "me+mo+ry",
    F: "me我(熟词)+mo默(拼音)+ry日语(拼音)",
    G: "我默默地记忆日语",
    H: "I have a bad memory for names.",
    I: "我不善于记名字。"
}, {
    B: "population",
    C: "[pɒpjʊ'leɪʃ(ə)n]",
    D: "n.人口",
    E: "po+pu+lation",
    F: "po婆(拼音)+pu扑(拼音)+lation雷神(谐音)",
    G: "在众多人口的地方婆婆扑倒了雷神",
    H: "The population is increasing at about 6% per year.",
    I: "人口以每年约6%的速度增加。"
}, {
    B: "concert",
    C: "['kɒnsət]",
    D: "n.音乐会，一致，和谐",
    E: "con+ce+rt",
    F: "con看(谐音)+ce厕所(拼音)+rt软糖(拼音)",
    G: "看，厕所里的软糖在开音乐会",
    H: "It's a classical concert.",
    I: "这是一场古典音乐会。"
}, {
    B: "peace",
    C: "[pi:s]",
    D: "n.宁静，平静",
    E: "pea+ce",
    F: "pea豌豆(熟词)+ce厕(拼音)",
    G: "豌豆掉进厕所的声音打破了这片宁静",
    H: "Leave her in peace.",
    I: "让她平静一下。"
}, {
    B: "difference",
    C: "['dɪfrəns]",
    D: "n.不同之处",
    E: "differen+ce",
    F: "differen(t)不同的(熟词)+ce厕(拼音)",
    G: "不同的厕所肯定有它的不同之处",
    H: "There is a difference between you and me.",
    I: "你和我之间有一点不同。"
}, {
    B: "conversation",
    C: "[ˌkɒnvə'seɪʃn]",
    D: "n.谈话",
    E: "con+ve+rs+ation",
    F: "con康(拼音)+ve维E(编码)+rs肉丝(拼音)+ation爱神(谐音)",
    G: "康熙吃着维E和肉丝找爱神谈话",
    H: "I tried to make conversation.",
    I: "我设法找些话题。"
}, {
    B: "discussion",
    C: "[dɪ'skʌʃn]",
    D: "n.讨论，详述",
    E: "discuss+i+on",
    F: "discuss讨论(熟词)+i骨头(编码)+on在...上(熟词)",
    G: "他们在讨论骨头该不该放在桌上",
    H: "We held a long discussion about this problem.",
    I: "关于这个问题我们进行了长时间的讨论。"
}, {
    B: "accident",
    C: "['æksɪdənt]",
    D: "n.事故，意外",
    E: "ac+ci+dent",
    F: "ac艾克(谐音)+ci刺(拼音)+dent等他(拼音)",
    G: "艾克知道刺客在等他发生事故",
    H: "I saw a car accident.",
    I: "我看见一场车祸。"
}, {
    B: "business",
    C: "['bɪznəs]",
    D: "n.生意，商业",
    E: "bus+in+e+ss",
    F: "bus巴士(熟词)+in里(熟词)+e衣(编码)+ss两位美女(编码)",
    G: "巴士里穿运动衣的两位美女在谈生意",
    H: "She works in the computer business.",
    I: "她从事电脑业。"
}, {
    B: "sentence",
    C: "['sent(ə)ns]",
    D: "vt.判决，宣判",
    E: "sen+ten+ce",
    F: "sen森(拼音)+ten十(熟词)+ce厕(拼音)",
    G: "森林里的十个人在厕所被宣判死刑",
    H: "She was sentenced to nine years in prison.",
    I: "她被判处9年监禁。"
}, {
    B: "introduction",
    C: "[ˌɪntrə'dʌkʃn]",
    D: "n.引言",
    E: "introduc+tion",
    F: "introduc(e)介绍(熟词)+tion神(谐音)",
    G: "引言介绍的是一位神仙",
    H: "The instruction of this book is very short.",
    I: "这本书的引言很短。"
}, {
    B: "behavior",
    C: "[bɪ'heɪvjə]",
    D: "n.行为，举止",
    E: "behav+i+or",
    F: "behav(e)表现(熟词)+i爱(编码)+or偶人(拼音)",
    G: "他表现出爱偶人的行为举止",
    H: "Her behaviour is often very bad. ",
    I: "她的行为举止常常很糟糕。"
}, {
    B: "admire",
    C: "[əd'maɪə]",
    D: "vt.钦佩，赞美；vi.钦佩，称赞",
    E: "ad+mi+re",
    F: "ad阿弟+mi米+re热",
    G: "阿弟把米加热了赢得赞美",
    H: "I admire her hard-working spirit.",
    I: "我钦佩她的苦干精神。"
}, {
    B: "provide",
    C: "[prə'vaɪd]",
    D: "vt./vi.提供",
    E: "pro+vi+de",
    F: "pro飘柔(拼音)+vi歪(谐音)+de的(拼音)",
    G: "免费提供的飘柔洗发液是歪的",
    H: "The school provides us with milk.",
    I: "学校为我们提供牛奶。"
}, {
    B: "waste",
    C: "[weɪst]",
    D: "vt./n.浪费，滥用，糟蹋；adj.荒芜的，废弃的，丢弃的",
    E: "was+te",
    F: "was是(熟词)+te特(拼音)",
    G: "浪费是特别可耻的",
    H: "Let's not waste an opportunity to see the children .",
    I: "咱们别错过了看孩子们的机会。"
}, {
    B: "receive",
    C: "[rɪ'si:v]",
    D: "vt./vi.收到",
    E: "re+ce+i+ve",
    F: "re热(拼音)+ce厕(拼音)+i我(熟词I)+ve维E(编码)",
    G: "热天在厕所我收到了他送的维E",
    H: "I receive a present from my father.",
    I: "我收到我爸爸送的礼物。"
}, {
    B: "depend",
    C: "[dɪ'pend]",
    D: "vi.依靠",
    E: "de+p+end",
    F: "de弟(谐音)+p皮鞋(编码)+end尽头(熟词)",
    G: "他依靠弟弟的皮鞋走到了尽头",
    H: "He depends on his parent.",
    I: "他依靠父母。"
}, {
    B: "translate",
    C: "[træns'leɪt]",
    D: "vt./vi.翻译，理解，转化",
    E: "trans+late",
    F: "trans转换(词缀)+late晚的(熟词)",
    G: "做语言转换的翻译家很晚才睡",
    H: "Only a small number of Kadare's books have been translated into English.",
    I: "卡达雷的书仅有一小部分译成了英文。"
}, {
    B: "praise",
    C: "[preɪz]",
    D: "n.赞扬，称赞",
    E: "pr+aise",
    F: "pr仆人+aise哀色",
    G: "得到赞扬，仆人却面露哀色",
    H: "They always sing his praises.",
    I: "他们总是对他大加赞扬。"
}, {
    B: "bury",
    C: "['berɪ]",
    D: "vt.埋葬，掩埋",
    E: "bu+ry",
    F: "bu不+ry容易",
    G: "埋葬尸体不容易",
    H: "Soldiers helped to bury the dead in large communal graves.",
    I: "士兵们协助将死者埋葬在大型公共墓地里。"
}, {
    B: "express",
    C: "[ɪk'spres]",
    D: "vt.表露，表达",
    E: "ex+press",
    F: "ex儿媳(拼音)+press压(熟词)",
    G: "儿媳表露出受压迫的情绪",
    H: "Her eyes expressed deep sadness.",
    I: "她眼神中流露出深切的悲伤。"
}, {
    B: "mention",
    C: "['menʃn]",
    D: "vt./n.提到，说起",
    E: "men+tion",
    F: "men门(拼音)+tion神(谐音)",
    G: "聊天中提到，打开这个门会看到神",
    H: "She did not mention your name.",
    I: "她没有提到你的名字。"
}, {
    B: "search",
    C: "[sɜ:tʃ]",
    D: "vi./vt.搜寻，查找",
    E: "se+ar+ch",
    F: "se色+ar矮人+ch吃",
    G: "蓝色矮人在搜寻吃的",
    H: "The dog is searching for food.",
    I: "狗正在找吃的。"
}, {
    B: "reply",
    C: "[rɪ'plaɪ]",
    D: "vt.回答",
    E: "re+ply",
    F: "re热+ply彭丽媛",
    G: "天气热得彭丽媛不想回答问题",
    H: "She smiled, but didn't reply. ",
    I: "她微微一笑，但未作答。"
}, {
    B: "solve",
    C: "[sɒlv]",
    D: "vt.解决，处理",
    E: "sol+ve",
    F: "sol501(象形)+ve维E(编码)",
    G: "501颗维E解决所有问题",
    H: "Who can solve this problem?",
    I: "谁能解决这个问题？"
}, {
    B: "require",
    C: "[rɪ'kwaɪə(r)]",
    D: "vt.需要，依靠",
    E: "requ+i+re",
    F: "requ热区(拼音)+i我(熟词I)+re热(拼音)",
    G: "在热带地区我热得需要空调",
    H: "Will you require coffee?",
    I: "你需要咖啡吗？"
}, {
    B: "consider",
    C: "[kən'sɪdə(r)]",
    D: "vi./vt.思考，认为，觉得",
    E: "con+side+r",
    F: "con看(谐音)+side旁边(熟词)+r草(编码)",
    G: "看，旁边的小草在思考",
    H: "We're considering buying a new car.",
    I: "我们在考虑买一辆新车。"
}, {
    B: "regret",
    C: "[rɪ'gret]",
    D: "vt.后悔，懊悔",
    E: "re+gr+et",
    F: "re惹(拼音)+gr工人(拼音)+et外星人(编码)",
    G: "惹怒工人的外星人后悔了",
    H: " I might well regret it later. ",
    I: "我很可能以后会对此后悔的。"
}, {
    B: "perhaps",
    C: "[pə'hæps]",
    D: "adv.可能，大概",
    E: "p+erha+ps",
    F: "p皮鞋(编码)+erha二哈(拼音)+psPS(谐音)",
    G: "可能穿皮鞋的二哈懂PS",
    H: "Perhaps my mother is right.",
    I: "可能我妈妈说的是对的。"
}, {
    B: "flight",
    C: "[flaɪt]",
    D: "n.班机，飞行",
    E: "f+light",
    F: "f佛(编码)+light灯(熟词)",
    G: "佛带着一盏灯坐班机",
    H: "He missed the last flight.",
    I: "他错过了最后一班飞机。"
}, {
    B: "advice",
    C: "[əd'vaɪs]",
    D: "n.建议",
    E: "ad+v+ice",
    F: "adAD钙奶(谐音)+v维生素(编码)+ice冰(熟词)",
    G: "喝AD钙奶时要加维生素和冰是我的建议",
    H: "My teacher gives me some advice.",
    I: "我的老师给我一些建议。"
}, {
    B: "drawer",
    C: "[drɔ:(r)]",
    D: "n.抽屉，开票人",
    E: "draw+er",
    F: "draw画(熟词)+er儿(拼音)",
    G: "画被儿子放进抽屉里了",
    H: "He jumbled up everything in the drawer to find his key.",
    I: "他为了找到他的钥匙把整个抽屉都翻乱了。"
}, {
    B: "culture",
    C: "['kʌltʃə(r)]",
    D: "n.文化",
    E: "cul+ture",
    F: "cul粗鲁(拼音)+ture扯(谐音)",
    G: "粗鲁地拉扯显得没文化",
    H: "I like Japanese culture.",
    I: "我喜欢日本文化。"
}, {
    B: "courage",
    C: "['kʌrɪdʒ]",
    D: "n.勇气，勇敢",
    E: "c+our+age",
    F: "c看见(编码see)+our我们的(熟词)+age时代(熟词)",
    G: "看见我们这个时代的人很有勇气",
    H: "He showed great courage.",
    I: "他表现得十分勇敢。"
}, {
    B: "development",
    C: "[dɪ'veləpm(ə)nt]",
    D: "n.发展，",
    E: "develop+ment",
    F: "develop发展(熟词)+ment门徒(拼音)",
    G: "发展",
    H: "What are your plans for the development of your company?",
    I: "你打算怎样来发展壮大自己的公司？"
}, {
    B: "background",
    C: "['bækgraʊnd]",
    D: "n.背景，出身背景，学历",
    E: "back+ground",
    F: "back回+ground地面",
    G: "故事的背景从太空回到了地面",
    H: "There is a bird in the background.",
    I: "背景有一只鸟。"
}, {
    B: "course",
    C: "[kɔ:s]",
    D: "n.课程",
    E: "c+our+se",
    F: "c看见(编码see)+our我们的(熟词)+se色(拼音)",
    G: "看见我们出色完成了课程",
    H: "She takes a course in art.",
    I: "她攻读美术课程。"
}, {
    B: "metal",
    C: "['met(ə)l]",
    D: "n.金属，合金",
    E: "me+tal",
    F: "me我(熟词)+tal偷(谐音)",
    G: "我偷了好多金属",
    H: "Gold and silver are precious metals.",
    I: "金、银都是贵重金属。"
}, {
    B: "journey",
    C: "['dʒɜ:nɪ]",
    D: "n.旅行，旅程",
    E: "j+our+ney",
    F: "j周杰伦(编码Jay)+our我们的(熟词)+ney泥(谐音)",
    G: "周杰伦带着我们的泥人去旅行",
    H: "When are you going to start on your journey? ",
    I: "你们哪天去旅行啊？"
}, {
    B: "program",
    C: "['prəʊɡræm]",
    D: "n.计划，程序",
    E: "pro+gr+am",
    F: "pro飘柔(拼音)+gr工人(拼音)+am上午(熟词)",
    G: "用飘柔的工人上午没计划了",
    H: "This computer program is very important.",
    I: "这套电脑程序非常重要。"
}, {
    B: "celebrate",
    C: "['selɪbreɪt]",
    D: "vt.庆祝",
    E: "cele+br+ate",
    F: "cele测了(拼音)+br病人(拼音)+ate吃(熟词)",
    G: "测了体温后病人开始吃东西庆祝出院",
    H: "We are celebrating his birthday.",
    I: "我们正在为他庆祝生日。"
}, {
    B: "score",
    C: "[skɔ:(r)]",
    D: "n.得分",
    E: "s+co+re",
    F: "s美女(编码)+co可乐(熟词coke)+re热(拼音)",
    G: "得分后美女喝可乐都觉得热",
    H: "This is the highest score of this game.",
    I: "这是本次比赛最高得分。"
}, {
    B: "operation",
    C: "[ˌɒpə'reɪʃn]",
    D: "n.手术，",
    E: "operat+i+on",
    F: "operat(e)操作+i我(I)+on在...上",
    G: "手术的",
    H: "The operation has given me a new lease of life.  ",
    I: "手术使我重获新生。"
}, {
    B: "pollution",
    C: "[pə'lu:ʃn]",
    D: "n.污染",
    E: "po+llu+tion",
    F: "po婆(拼音)+llu路(谐音)+tion婶(谐音)",
    G: "婆婆在路上看到婶婶在搞污染",
    H: "The level of pollution in the river was falling. ",
    I: "这条河中的污染水平在下降。"
}, {
    B: "sight",
    C: "[saɪt]",
    D: "n.视力，景象；vt.看见，发现",
    E: "right",
    F: "right右",
    G: "美女(s)右眼视力很好",
    H: "The Atlantic coast is within sight of the hotel. ",
    I: "从宾馆可以看见大西洋海岸。"
}, {
    B: "pride",
    C: "[praɪd]",
    D: "n.自豪，骄傲；vt.以…而自豪，得意于…",
    E: "p+ride",
    F: "p皮(编码)+ride骑车(熟词)",
    G: "穿着新皮鞋骑车让他很自豪",
    H: "I take a pride in my work.",
    I: "我为自己的工作感到骄傲。"
}, {
    B: "prize",
    C: "[praɪz]",
    D: "n.奖赏",
    E: "pr+i+ze",
    F: "pr仆人(拼音)+i我(熟词I)+ze责(拼音)",
    G: "奖赏仆人是我的责任",
    H: "He won first prize at the piano competition.",
    I: "他获得了本次钢琴比赛的一等奖。"
}, {
    B: "shame",
    C: "[ʃeɪm]",
    D: "n.羞愧 ，羞辱",
    E: "sha+me",
    F: "sha傻(拼音)+me我(熟词)",
    G: "欺负傻子的我感到很羞愧",
    H: "She was red with shame.",
    I: "她羞愧地红了脸。"
}, {
    B: "relation",
    C: "[rɪ'leɪʃ(ə)n]",
    D: "n.关系，交往",
    E: "rela+tion",
    F: "rela热辣(拼音)+tion婶(谐音)",
    G: "穿着热辣的大婶和你是什么关系",
    H: "They  redetermined  the  relation  between  them",
    I: "他们重新确定了他们之间的关系"
}, {
    B: "material",
    C: "[mə'tɪərɪəl]",
    D: "n.材料，原料",
    E: "ma+te+ri+al",
    F: "ma妈+te特+ri日+al阿狸",
    G: "妈妈特意去日本找阿狸买材料",
    H: "The material is soft.",
    I: "这种材料很柔软。"
}, {
    B: "attitude",
    C: "['ætɪtjuːd]",
    D: "n.态度，看法",
    E: "at+titu+de",
    F: "at在(熟词)+titu踢土(拼音)+de的(拼音)",
    G: "在踢土的人态度很差",
    H: "Her attitude was reckless.",
    I: "她的态度是轻率的。"
}, {
    B: "excellent",
    C: "['eks(ə)l(ə)nt]",
    D: "adj.优秀的，卓越的，极好的",
    E: "excel+le+nt",
    F: "excel表格(熟词)+le了(拼音)+nt难题(拼音)",
    G: "他很优秀用excel表解决了所有难题",
    H: "He is an excellent scientist.",
    I: "他是一位杰出的科学家。"
}, {
    B: "outgoing",
    C: "['aʊtgəʊɪŋ]",
    D: "adj.外向的，友好的，外出的",
    E: "out+go+ing",
    F: "out出去(熟词)+go走(熟词)+ing鹰(谐音)",
    G: "朝外面走去的老鹰很外向",
    H: "She's very outgoing. ",
    I: "她很外向。"
}, {
    B: "intelligent",
    C: "[ɪn'telɪdʒ(ə)nt]",
    D: "adj.智能的，聪明的",
    E: "in+tell+i+gent",
    F: "in里面(熟词)+tell告诉(熟词)+i我(熟词I)+gent跟头(拼音)",
    G: "里面的智能机器人告诉我它会翻跟头",
    H: "Susan is a very bright and intelligent woman.",
    I: "苏珊是一个非常聪明伶俐的女人。"
}, {
    B: "wise",
    C: "[waɪz]",
    D: "adj.智慧的",
    E: "wine",
    F: "wine酒",
    G: "喝了这个酒让人充满了智慧",
    H: "It is a wise choice.",
    I: "这是个明智的选择。"
}, {
    B: "importance",
    C: "[ɪm'pɔ:tns]",
    D: "n.重要性",
    E: "im+port+ance",
    F: "im姨母(谐音)+port港口(熟词)+ance暗厕(拼音)",
    G: "姨母在港口才意识到暗厕的重要性",
    H: "He is a man of great importance. ",
    I: "他是一位非常重要的人物。"
}, {
    B: "alive",
    C: "[ə'laɪv]",
    D: "adj.活着的",
    E: "a+live",
    F: "a一个+live活的",
    G: "找到一个活着的人",
    H: "I'm still alive after the fire.",
    I: "火灾后我还活着。"
}, {
    B: "serious",
    C: "['sɪəriəs]",
    D: "adj.严重的",
    E: "se+ri+ou+s",
    F: "se色(拼音)+ri日(拼音)+ou藕(拼音)+s蛇(编码)",
    G: "色狼在日本吃藕时被蛇严重地伤害了",
    H: "This is a serious problem.",
    I: "这个问题很严重。"
}, {
    B: "nervous",
    C: "['nɜ:vəs]",
    D: "adj.紧张的",
    E: "n+er+v+ous",
    F: "n门(编码)+er儿(拼音)+v胜利(编码)+ous欧式(拼音)",
    G: "门口的儿子获得胜利后紧张的来到了那件欧式餐厅",
    H: "I am nervous.",
    I: "我很紧张。"
}, {
    B: "anxious",
    C: "['æŋkʃəs]",
    D: "adj.忧虑的，不安的",
    E: "an+xiou+s",
    F: "an一(熟词)+xiou秀(谐音)+s美女(编码)",
    G: "一个秀气的美女满心忧虑",
    H: "A friend of mine is a very anxious person. ",
    I: "我的一个朋友是个非常容易焦虑不安的人。"
}, {
    B: "sleepy",
    C: "['sli:pɪ]",
    D: "adj.困乏的，欲睡的，死气沉沉的",
    E: "sleep+y",
    F: "sleep睡(熟词)+y树杈(编码)",
    G: "困乏的他直接睡在树杈上",
    H: "She was still tired and sleepy when he woke her. ",
    I: "他叫醒她的时候，她仍然又累又困。"
}, {
    B: "asleep",
    C: "[ə'slɪ:p]",
    D: "adj.睡着的",
    E: "a+sleep",
    F: "a苹果(编码)+sleep睡(熟词)",
    G: "吃着苹果睡着了",
    H: "I waited until they were all fast asleep.",
    I: "我一直等到他们全都睡着。"
}, {
    B: "silent",
    C: "['saɪlənt]",
    D: "adj.无声无息，沉默的，无言的",
    E: "sile+nt",
    F: "sile撕了+nt那天",
    G: "他无声无息地撕了那天放门口的伞",
    H: "He spoke no English and was silent during the visit.",
    I: "他不会说英语，整个参观过程都无声无息。"
}, {
    B: "pleasant",
    C: "['pleznt]",
    D: "adj.和善的，友好的，文雅的",
    E: "pleas+ant",
    F: "pleas(e)请+ant蚂蚁",
    G: "请那只和善的蚂蚁进来",
    H: "The walk was very pleasant.",
    I: "这次散步非常愉快。"
}, {
    B: "eastern",
    C: "['i:st(ə)n]",
    D: "adj.东部的，东方的",
    E: "east+er+n",
    F: "east东(熟词)+er儿(拼音)+n门(编码)",
    G: "在东部地区的儿子开门迎接我",
    H: "He wants to spend his holiday in eastern Europe.",
    I: "他想要去东欧度假。"
}, {
    B: "northern",
    C: "['nɔ:ð(ə)n]",
    D: "adj.北方的，北部的，来自北方的",
    E: "north+ern",
    F: "north北方(熟词)+ern儿女(拼音)",
    G: "北方的儿女都人高马大",
    H: "He has traveled in northern countries. ",
    I: "他在北部一些国家旅游过。"
}, {
    B: "similar",
    C: "['sɪmələ(r)]",
    D: "adj.相像的",
    E: "simi+l+ar",
    F: "simi四米(拼音)+l棍子(编码)+ar矮人(拼音)",
    G: "在四米长的棍子旁，我就跟矮人很相像",
    H: "The brothers look very similar.",
    I: "弟兄几个长得很像。"
}, {
    B: "able",
    C: "['eɪbl]",
    D: "adj.能够，有才能的",
    E: "ab+le",
    F: "ab阿爸+le乐",
    G: "我能够让阿爸快乐",
    H: "You are able to draw a picture. ",
    I: "你能够画一张画的。"
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
    B: "certain",
    C: "['sɜ:tn]",
    D: "adj.确定的，肯定的",
    E: "c+ertai+n",
    F: "c看见(编码see)+ertai尔泰(拼音)+n门(编码)",
    G: "确定看见尔泰进了那张门",
    H: "It is certain that they will agree.",
    I: "他们肯定会同意。"
}, {
    B: "valuable",
    C: "['væljuəbl]",
    D: "adj.宝贵的，很有用的",
    E: "valu+able",
    F: "valu(e)价值+able能够",
    G: "宝贵的东西价值能够保值",
    H: "This old table is a valuable piece of furniture.",
    I: "这张旧桌子是一件很珍贵的家具。"
}, {
    B: "social",
    C: "['səʊʃl]",
    D: "adj.社会的，社交的，交际的；n.联谊会，联欢会",
    E: "so+cial",
    F: "so50(象形)+cial手(谐音)",
    G: "社会活动还缺50个人手",
    H: "We ought to organize more social events.",
    I: "我们应当组织更多的社交活动。"
}, {
    B: "whole",
    C: "[həʊl]",
    D: "adj.全部的",
    E: "who+le",
    F: "who谁(熟词)+le乐(拼音)",
    G: "全部的人里谁最快乐",
    H: "This is the whole story.",
    I: "这就是全部的故事。"
}, {
    B: "medical",
    C: "['medɪkl]",
    D: "adj.医疗的",
    E: "me+di+cal",
    F: "me我(熟词)+di弟(拼音)+cal擦了(拼音)",
    G: "我弟弟擦坏了医疗仪器",
    H: "His brother studies in a medical school.",
    I: "他哥哥在一个医学院上学。"
}, {
    B: "fluent",
    C: " ['flu:ənt]",
    D: "adj.流利的，流畅的",
    E: "flue+nt",
    F: "flue烟道(熟词)+nt奶糖(拼音)",
    G: "吃了烟道里的奶糖就能流利说英语",
    H: "Please use fluent English to encourage others!",
    I: "请用流利的英语去鼓励别人！"
}, {
    B: "manage",
    C: "['mænɪdʒ]",
    D: "vt.完成，解决，对付",
    E: "man+age",
    F: "man男人+age年龄",
    G: "男人的年龄决定完成任务的效率",
    H: `You will perhaps manage things better than I could.
`,
    I: "说不定你处理起事情来比我还高明。"
}, {
    B: "destroy",
    C: "[dɪ'strɔɪ]",
    D: "vt.毁灭，摧毁",
    E: "de+st+roy",
    F: "de的+st石头+roy容易",
    G: "他的石头很容易毁灭地球",
    H: "The building was destroyed by fire.",
    I: "这栋建筑物被大火烧毁了。"
}, {
    B: "burn",
    C: "[bɜːn]",
    D: "vt./vi.燃烧",
    E: "bu+rn",
    F: "bu不+rn惹你",
    G: "你怒火燃烧不敢惹你",
    H: "here was a fire burning in the fireplace.",
    I: "壁炉里有火正燃着。"
}, {
    B: "argue",
    C: "['ɑ:gju:]",
    D: "vt./vi.争论，讨论，辩论",
    E: "ar+gu+e",
    F: "ar矮人(拼音)+gu鼓(拼音)+e鹅(编码)",
    G: "矮人敲鼓与鹅争论",
    H: "The children are always arguing. ",
    I: "孩子们老是吵个不休。"
}, {
    B: "attack",
    C: "[ə'tæk]",
    D: "n.攻击，抨击，疾病发作",
    E: "at+ta+ck",
    F: "at在(熟词)+ta他(拼音)+ckCK品牌店(熟词)",
    G: "在他的CK品牌店里攻击他",
    H: "We reopened an attack against our enemy last week.",
    I: "上周我们向敌人重新发动了一次进攻。"
}, {
    B: "increase",
    C: "[ɪn'kri:s]",
    D: "vt.（使）增加，增长，增多",
    E: "in+cr+ease",
    F: "in里面(熟词)+cr超人(拼音)+ease使安心(熟词)",
    G: "增加里面的超人数量能使我们安心",
    H: "The price of oil increased.",
    I: "石油价格上涨了。"
}, {
    B: "design",
    C: "[dɪ'zaɪn]",
    D: "vt.图案，构思；n.设计，设计",
    E: "d+e+sign",
    F: "d狗(编码)+e鹅(编码)+sign记号(熟词)",
    G: "狗和鹅都在这个记号的图案上",
    H: "There are many designs on the wall.",
    I: "墙上有很多图案。"
}, {
    B: "behave",
    C: "[bɪ'heɪv]",
    D: "vi.表现",
    E: "be+have",
    F: "be是+have有",
    G: "孩子表现很差是有原因的",
    H: "Your  mother  will  blow  you up if  you  don't  behave  better.",
    I: "如果你不规矩一些，你母亲会责骂你。"
}, {
    B: "cabbage",
    C: "[ˈkæbɪdʒ]",
    D: "n.洋白菜",
    E: "ca+bb+age",
    F: "ca擦+bb爸爸+age阿哥",
    G: "擦完桌子爸爸和阿哥吃洋白菜",
    H: "I like eating cabbages.",
    I: "我喜欢吃洋白菜。"
}, {
    B: "lemon",
    C: "['lemən]",
    D: "n.柠檬",
    E: "le+mon",
    F: "le乐(拼音)+mon星期一(熟词)",
    G: "快乐的星期一要吃柠檬",
    H: "The lemon cake is delicious.",
    I: "柠檬饼的味道很好。"
}, {
    B: "paper",
    C: "['peɪpə]",
    D: "n.纸，论文",
    E: "pa+per",
    F: "pa爬(拼音)+per每个(熟词)",
    G: "爬过来的每个人都拿着纸",
    H: "I'll get a pencil and paper.  ",
    I: "我去拿铅笔和纸。"
}, {
    B: "album",
    C: "['ælbəm]",
    D: "n.唱片专辑，",
    E: "al+bum",
    F: "al(l)所有的(熟词)+bum不卖(拼音)",
    G: "所有的店都不卖专辑和",
    H: "He stuck her photos in the album.",
    I: "他把她的相片全都贴在了相册里。"
}, {
    B: "chalk",
    C: "[tʃɔːk]",
    D: "n.粉笔",
    E: "ch+al+k",
    F: "ch吃(拼音)+al阿狸(拼音)+k国王(编码)",
    G: "吃货阿狸吃了国王的粉笔",
    H: "The teacher writes words on the  blackboard  with a chalk.",
    I: "老师用粉笔在黑板上写单词。"
}, {
    B: "uniform",
    C: "['ju:nɪfɔ:m]",
    D: "n.制服，校服；adj.统一的",
    E: "uni+form",
    F: "uni一(词缀)+form外形(熟词)",
    G: "制服都是一样的外形",
    H: "The police wear blue uniforms.",
    I: "警察穿着蓝色的制服。"
}, {
    B: "fire",
    C: "['faɪə]",
    D: "n.火，火灾",
    E: "f+i+re",
    F: "f佛(编码)+i蜡烛(编码)+re惹(拼音)",
    G: "佛撞倒蜡烛惹起大火",
    H: "Don't leave a child alone in a room with an open fire.",
    I: "房间里有裸露的明火时，不要让孩子独处其中。"
}, {
    B: "record",
    C: "['rekɔ:d]",
    D: "n./vt./vi.记录，录音",
    E: "re+co+rd",
    F: "re热(拼音)+co可乐(熟词coke)+rd热度(拼音)",
    G: "记录热可乐的热度",
    H: "You can record my words. ",
    I: "你可以录下我说的话。"
}, {
    B: "India",
    C: "['ɪndɪə]",
    D: "n.印度（南亚国家）",
    E: "In+di+a",
    F: "In里(熟词)+di弟(拼音)+a一(熟词)",
    G: "在印度国土里，弟弟只身一人",
    H: "He comes from India.",
    I: "他来自印度。"
}, {
    B: "Europe",
    C: "['jʊrəp]",
    D: "n.欧洲",
    E: "E+u+rope",
    F: "E梳子(编码)+u你(编码you)+rope绳子(熟词)",
    G: "梳子是你用绳子捆着带去欧洲的",
    H: "He comes from Europe.",
    I: "他来自欧洲。"
}, {
    B: "temple",
    C: "[ˈtempl]",
    D: "n.庙宇，寺院",
    E: "te+m+ple",
    F: "te特(拼音)+m麦当劳(编码)+ple劈了(拼音)",
    G: "特别的麦当劳叔叔劈了一座庙",
    H: "We went to the temple of Atlantis and saw it by moonlight.",
    I: "我们去了亚特兰蒂斯神殿，在月光下游览了一番。"
}, {
    B: "lab",
    C: "[læb]",
    D: "n.实验室，研究室",
    E: "lab",
    F: "lab喇叭",
    G: "实验室有喇叭",
    H: "Our school has a lab.",
    I: "我们学校有一个实验室。"
}, {
    B: "transport",
    C: "[ˈtrænspɔ:t]",
    D: "n./vt.运输",
    E: "trans+port",
    F: "trans穿越(词缀)+port港口(熟词)",
    G: "穿越港口去搞运输",
    H: "We reduce the traffic required to transport staff and customers to these locations.",
    I: "我们将降低将职员和顾客运输到这些场所的交通流量。"
}, {
    B: "truck",
    C: "[trʌk]",
    D: "n.卡车",
    E: "tru+ck",
    F: "tru拖入(拼音)+ck厨师(熟词cook)",
    G: "卡车被拖入厨师的家",
    H: "My father has a truck.",
    I: "我爸爸有一辆卡车。"
}, {
    B: "stick",
    C: "[stɪk]",
    D: "n.棍；vt.粘贴",
    E: "st+ic+k",
    F: "st石头(拼音)+icIC卡(谐音)+k机关枪(编码)",
    G: "拿着棍子把石头上的IC卡和机关枪打烂了",
    H: "He beat the boy with a stick.",
    I: "他用棍子打男孩。"
}, {
    B: "boring",
    C: "['bɔːrɪŋ]",
    D: "adj.无聊的，乏味的",
    E: "bo+ring",
    F: "bo伯(拼音)+ring戒指(熟词)",
    G: "脖子上的",
    H: "The work is boring.	",
    I: "这项工作很无聊。	"
}, {
    B: "rocket",
    C: "['rɒkɪt]",
    D: "n.火箭",
    E: "rock+et",
    F: "rock摇滚+et外星人",
    G: "在火箭上看到了唱摇滚的外星人",
    H: "He is fond of making model rockets.",
    I: "他很喜欢制作模型火箭。"
}, {
    B: "grammar",
    C: "['græmə(r)]",
    D: "n.语法",
    E: "gr+am+mar",
    F: "gr工人(拼音)+am早上(熟词)+mar骂人(拼音)",
    G: "工人早上骂人时用了语法知识",
    H: "Teacher taught us the grammar.",
    I: "老师教我们语法。"
}, {
    B: "relative",
    C: "['relətɪv]",
    D: "n.亲戚",
    E: "re+lat+ive",
    F: "re热(拼音)+lat(e)迟到(熟词)+ive衣服(谐音)",
    G: "亲戚在热天迟到时没穿衣服",
    H: "Get a relative to look after the children. ",
    I: "找一个亲戚来照看孩子。"
}, {
    B: "natural",
    C: "['nætʃrəl]",
    D: "adj.自然的，天然的",
    E: "natur+al",
    F: "natur(e)自然(熟词)+al暗流(拼音)",
    G: "大自然中的暗流是自然形成的",
    H: "Natural beauty is the best.",
    I: "自然美就是最好的。"
}, {
    B: "report",
    C: "[rɪ'pɔ:t]",
    D: "n.报告",
    E: "re+port",
    F: "re又(词缀)+port港口(熟词)",
    G: "又去港口做报告了",
    H: "He wrote a report  last night.",
    I: "他昨晚写了一份报告。"
}, {
    B: "recent",
    C: "['ri:snt]",
    D: "adj.近来的",
    E: "re+cent",
    F: "re又(词缀)+cent一分钱(熟词)",
    G: "他近来又捐了一分钱",
    H: "The recent fire in this house was terrible.",
    I: "这个房子近期发生的火灾很恐怖。"
}, {
    B: "ring",
    C: "[rɪŋ]",
    D: "vt.铃响",
    E: "r+ing",
    F: "r草(编码)+ing鹰(谐音)",
    G: "铃响后草原上的老鹰飞走了",
    H: "Any minute now, that phone is going to ring. ",
    I: "那部电话随时可能响。"
}, {
    B: "kick",
    C: "[kɪk]",
    D: "vt.踢",
    E: "k+i+ck",
    F: "k机关枪(编码)+i我(熟词I)+ck厨师(熟词cook)",
    G: "扛着机枪的我被厨师踢了一脚",
    H: "He kicked the ball into the hole.",
    I: "他把球踢进洞里了。"
}, {
    B: "grade",
    C: "[greɪd]",
    D: "n.年级",
    E: "gr+ad+e",
    F: "gr工人(拼音)+ad阿弟(拼音)+e鹅(编码)",
    G: "工人看见阿弟抱着鹅走进二年级",
    H: "Sam is in the second grade.",
    I: "萨姆读二年级。"
}, {
    B: "skill",
    C: "[skɪl]",
    D: "n.技术",
    E: "s+kill",
    F: "s蛇(编码)+kill杀死(熟词)",
    G: "蛇杀死猎物需要技术",
    H: "I have no skill at swimming.",
    I: "我不会游泳。"
}, {
    B: "actually",
    C: "['æktʃuəlɪ]",
    D: "adv.事实上",
    E: "act+u+all+y",
    F: "act表演(熟词)+u桶(编码)+all所有的(熟词)+y树杈(编码)",
    G: "事实上表演者用桶装了所有的树杈",
    H: "What did she actually say?",
    I: "她到底是怎么说的？"
}, {
    B: "furniture",
    C: "['fɜ:nɪtʃə]",
    D: "n.家具，设备，储藏物",
    E: "fur+ni+ture",
    F: "fur皮毛(熟词)+ni你(拼音)+ture扯(谐音)",
    G: "家具上的皮毛被你扯掉了",
    H: "Each piece of furniture in their home suited the style of the house. ",
    I: "他们家里的每件家具都和房子的风格相得益彰。"
}, {
    B: "remain",
    C: "[rɪ'meɪn]",
    D: "vi./n.剩余物，保持，剩余",
    E: "re+main",
    F: "re热(拼音)+main主要的(熟词)",
    G: "热量主要的来源就是这些剩余物",
    H: "Only a bowl and a pair of chopsticks remained on the table.",
    I: "桌子上只剩下一个碗和一双筷子。"
}, {
    B: "harmful",
    C: "['hɑ:mfl]",
    D: "adj.不利的，不良的， 对…有害的",
    E: "harm+ful",
    F: "harm伤害(熟词)+ful俘虏(拼音)",
    G: "伤害俘虏对我们是不利的",
    H: "It is harmful to health to eat too much.",
    I: "吃得太多对健康会有害。"
}, {
    B: "major",
    C: "['meɪdʒə(r)]",
    D: "adj.主要的",
    E: "maj+or",
    F: "maj马夹+or偶人",
    G: "马夹是偶人主要的衣服",
    H: "We have met major problems.",
    I: "我们遇上了大问题。"
}, {
    B: "lift",
    C: "[lɪft]",
    D: "n.电梯，升降机",
    E: "life",
    F: "life生活",
    G: "生活中我们经常使用电梯",
    H: "They took the lift to the fourth floor. ",
    I: "他们坐电梯到了四楼。"
}, {
    B: "fight",
    C: "[faɪt]",
    D: "vi.与…作斗争",
    E: "right",
    F: "right正确的",
    G: "我们要找到正确方法与它",
    H: "We had to fight the enemy at once.",
    I: "我们必须立刻和敌人战斗。"
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
    B: "moment",
    C: "['məʊmənt]",
    D: "n.瞬间，片刻",
    E: "mom+ent",
    F: "mom妈妈(熟词)+ent恩特(谐音)",
    G: "瞬间，妈妈把恩特关进了黑屋",
    H: "At the last moment the player hit the ball.",
    I: "在最后一刻，那位运动员终于打中了一球。"
}, {
    B: "disagree",
    C: "[ˌdɪsə'gri:]",
    D: "vi.不同意",
    E: "dis+agree",
    F: "dis不(词缀)+agree同意(熟词)",
    G: "不同意就举手",
    H: "I disagree with my parents.",
    I: "我不同意父母的观点。"
}, {
    B: "lively",
    C: "['laɪvlɪ]",
    D: "adj.生动活泼的",
    E: "live+ly",
    F: "live生活(熟词)+ly老爷(拼音)",
    G: "生活幸福的老爷很活泼",
    H: "She is a lively girl.",
    I: "她是一位活泼的姑娘。"
}, {
    B: "continue",
    C: "[kən'tɪnju:]",
    D: "vi./vt.继续",
    E: "con+ti+nue",
    F: "con啃(谐音)+ti踢(拼音)+nue虐(拼音)",
    G: "继续啃它，踢它，虐待它",
    H: "The rain continued to fall all afternoon.",
    I: "这场雨整整一下午都下个不停。"
}, {
    B: "identity",
    C: "[aɪ'dentətɪ]",
    D: "n.身份",
    E: "i+denti+ty",
    F: "i我(熟词I)+denti等梯(拼音)+ty踢(谐音)",
    G: "我的身份证在等电梯时被踢走了",
    H: "The identity of the killer is still unknown.",
    I: "杀手的身份仍然是未知的。"
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
    B: "brain",
    C: "[breɪn]",
    D: "n.头脑，脑",
    E: "b+rain",
    F: "b6(象形)+rain雨(熟词)",
    G: "淋了6次雨头脑坏了",
    H: "She has an amazing brain.",
    I: "她智力惊人。"
}, {
    B: "keyboard",
    C: "['ki:bɔ:d]",
    D: "n.键盘",
    E: "key+board",
    F: "key钥匙+board板",
    G: "钥匙放在键盘板上",
    H: "I bought a keyboard in the supermarket yesterday. ",
    I: "昨天我在超市买了个键盘。"
}, {
    B: "human",
    C: "['hju:mən]",
    D: "adj.人的",
    E: "hu+man",
    F: "hu狐(拼音)+man人(熟词)",
    G: "狐狸是人的好朋友",
    H: "Eating is a basic human need.",
    I: "吃饭是人的基本需要。"
}, {
    B: "suggestion",
    C: "[sə'dʒestʃən]",
    D: "n.建议",
    E: "su+gg+es+tion",
    F: "su苏(拼音)+gg哥哥(拼音)+es饿死(拼音)+tion婶(谐音)",
    G: "把苏哥哥饿死是婶婶提的建议",
    H: "This is my suggestion.",
    I: "这是我的建议。"
}, {
    B: "spelling",
    C: "['spelɪŋ]",
    D: "n.拼字，拼写，拼法",
    E: "spe+ll+ing",
    F: "spe四伯(谐音)+ll11(象形)+ing鹰(谐音)",
    G: "四伯教11只鹰拼字",
    H: "His spelling is very bad.",
    I: "他的拼写能力很差。"
}, {
    B: "mind",
    C: "[maɪnd]",
    D: "n.头脑",
    E: "m+in+d",
    F: "m山(编码)+in里面(熟词)+d弟(编码)",
    G: "山里的阿弟头脑灵活",
    H: "What's on your mind?",
    I: "你想什么呢？"
}, {
    B: "Italian",
    C: "[ɪ'tæljən]",
    D: "n.意大利人",
    E: "It+a+lian",
    F: "It它(熟词)+a苹果(编码)+lian脸(拼音)",
    G: "它吃的苹果像意大利人的脸",
    H: "Italian is hard to learn.",
    I: "意大利语很难学。"
}, {
    B: "side",
    C: "[saɪd]",
    D: "n.侧面",
    E: "side",
    F: "side死的",
    G: "侧面那个人是死的",
    H: "My room is at the side of the house.",
    I: "我的房间在这座房屋的侧面。"
}, {
    B: "realize",
    C: "['ri:əlaɪz]",
    D: "vt.认识到",
    E: "real+i+ze",
    F: "real真实(熟词)+i我(熟词I)+ze责(拼音)",
    G: "认识到真实的事实是我的责任",
    H: "He realized he was wrong.",
    I: "他认识到自己错了。"
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
    B: "control",
    C: "[kən'trəʊl]",
    D: "vt.控制",
    E: "con+tr+ol",
    F: "con从(拼音)+tr土人(拼音)+ol01(象形)",
    G: "从土人那取得了01号地区控制权",
    H: "He lost control of his car.",
    I: "他的汽车失控了。"
}, {
    B: "yet",
    C: "[jet]",
    D: "adv.尚未",
    E: "yes",
    F: "yes是",
    G: "是的他尚未成功",
    H: "I haven't received a letter from him yet.",
    I: "我还尚未收到他的信呢。"
}, {
    B: "since",
    C: "[sɪns]",
    D: "prep.从…以后",
    E: "s+in+ce",
    F: "s蛇(编码)+in里面(熟词)+ce厕(拼音)",
    G: "从那",
    H: "It is ten years since she left me.",
    I: "她已经离开我十年了。"
}, {
    B: "worth",
    C: "[wɜ:θ]",
    D: "adj.值得的",
    E: "wo+r+th",
    F: "wo我(拼音)+r小草(编码)+th土豪(拼音)",
    G: "我把小草给了土豪是值得的",
    H: "The book is worth 100 yuan.",
    I: "这本书值100元。"
}, {
    B: "unless",
    C: "[ən'les]",
    D: "conj.除非",
    E: "u+n+less",
    F: "u你(编码you)+n门(编码)+less较少的(熟词)",
    G: "除非你到门口，不然就只有较少的钱",
    H: "I'm not happy unless I ride or drive every day.",
    I: "只有每天骑车或开车我才会开心。"
}, {
    B: "notice",
    C: "['nəʊtɪs]",
    D: "n.通告",
    E: "not+ice",
    F: "not不+ice冰",
    G: "做通告时不能吃冰",
    H: "We did not notice this matter until yesterday.",
    I: "直到昨天我们才注意到这件事。"
}, {
    B: "born",
    C: "[bɔ:n]",
    D: "v.出世",
    E: "b+or+n",
    F: "b蜜蜂(编码bee)+or偶人(拼音)+n门(编码)",
    G: "蜜蜂飞过时偶人在门口出世了",
    H: "Their first child was born last year.",
    I: "他们的第一个孩子是去年出世的。"
}, {
    B: "instead",
    C: "[ɪn'sted]",
    D: "adv.代替",
    E: "in+s+tea+d",
    F: "in里面(熟词)+s美女(编码)+tea茶(熟词)+d弟(编码)",
    G: "代替里面的美女喝茶的是弟弟",
    H: "I went to the party instead of my sister.",
    I: "我代替我妹妹去了派对。"
}, {
    B: "fantastic",
    C: "[fæn'tæstɪk]",
    D: "adj.不可思议的，奇异的，空想的",
    E: "fan+ta+st+ic",
    F: "fan翻(拼音)+ta他(拼音)+st石头(拼音)+icIC卡(谐音)",
    G: "翻着跟头的他把石头变成了IC卡真是不可思议",
    H: "This plan is really fantastic!",
    I: "这个计划简直太棒了！"
}, {
    B: "stupid",
    C: "['stju:pɪd]",
    D: "adj.愚蠢的，笨的",
    E: "stu+pi+d",
    F: "stu试图(拼音)+pi批(拼音)+d弟(编码)",
    G: "试图批评弟弟的行为是愚蠢的",
    H: "He is stupid.",
    I: "他很愚蠢。"
}, {
    B: "trick",
    C: "[trɪk]",
    D: "n.计谋",
    E: "tr+ic+k",
    F: "tr土人(拼音)+icIC卡(谐音)+k机关枪(编码)",
    G: "土人刷IC卡买机关枪是一个计谋",
    H: "This is a good trick.",
    I: "这是一个好计谋。"
}, {
    B: "steal",
    C: "[sti:l]",
    D: "vt.偷",
    E: "st+e+al",
    F: "st石头(拼音)+e鹅(编码)+al阿狸(拼音)",
    G: "石头房里面的鹅被阿狸偷了",
    H: "He stole a bike.",
    I: "他偷了一辆自行车。"
}, {
    B: "spell",
    C: "[spel]",
    D: "vt.用字母拼",
    E: "sp+e+ll",
    F: "sp赛跑(拼音)+e鹅(编码)+ll筷子(象形)",
    G: "赛跑时鹅用筷子做字母拼写",
    H: "How do you spell your name?",
    I: "你的名字怎么拼？"
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
    B: "several",
    C: "['sevrəl]",
    D: "det.几个",
    E: "se+ve+r+al",
    F: "se色(拼音)+ve维E(编码)+r草(编码)+al阿狸(拼音)",
    G: "几个色狼吃了维E在草丛中追阿狸",
    H: "We have several cars. ",
    I: "我们有几部汽车。"
}, {
    B: "introduce",
    C: "[ˌɪntrə'dju:s]",
    D: "vt.介绍",
    E: "in+tr+o+duce",
    F: "in里面(熟词)+tr土人(拼音)+o蛋(编码)+duce堵厕(拼音)",
    G: "里面的土人自我介绍时拿鸡蛋堵了厕所",
    H: "She introduced me to her friend.",
    I: "她把我介绍给她的朋友。"
}, {
    B: "communicate",
    C: "[kə'mju:nɪkeɪt]",
    D: "vi.交流，通讯，传达",
    E: "com+muni+cate",
    F: "com计算机(编码)+muni穆尼(拼音)+cate凯特(熟词Cate)",
    G: "通过计算机穆尼和凯特进行交流",
    H: "Group members have to communicate with each other through role-play.",
    I: "小组成员必须通过角色扮演互相交流。"
}, {
    B: "guest",
    C: "[gest]",
    D: "n.客人",
    E: "guess",
    F: "guess猜测",
    G: "客人的心思是很难猜的",
    H: "She was a guest at the wedding.",
    I: "她是参加婚礼的客人。"
}, {
    B: "educational",
    C: "[ˌedʒu'keɪʃənl]",
    D: "adj.有关教育的",
    E: "education+al",
    F: "education教育(熟词)+al阿狸(拼音)",
    G: "爸爸在教育阿狸的时候看了有关教育的书",
    H: "I approve of his educational policies.",
    I: "我赞成他的有关教育的政策。"
}, {
    B: "competition",
    C: "[ˌkɔmpɪ'tɪʃən]",
    D: "n.比赛",
    E: "competition",
    F: "com公司(熟词)+pet宠物(熟词)+i我(熟词I)+tion神(谐音)",
    G: "公司的宠物和我的女神在比赛",
    H: "I hope you will win in the competition next week.",
    I: "我希望下周你会赢得竞赛。"
}, {
    B: "create",
    C: "[krɪ'eɪt]",
    D: "vt.创造",
    E: "cr+eat+e",
    F: "cr超人(拼音)+eat吃(熟词)+e鹅(编码)",
    G: "超人吃了鹅才能创造",
    H: "Children created a picture for their teacher.",
    I: "孩子们为他们的老师创作了一幅图。"
}, {
    B: "mystery",
    C: "['mɪstrɪ]",
    D: "n.神秘",
    E: "my+st+ery",
    F: "my我的(熟词)+st石头(拼音)+ery二爷(拼音)",
    G: "我的那块石头在二爷看来很神秘",
    H: "It was a place of deep mystery.",
    I: "这是一个极其神秘的地方。"
}, {
    B: "stage",
    C: "[steɪdʒ]",
    D: "n.步骤，段，步",
    E: "st+age",
    F: "st尸体(拼音)+age年龄(熟词)",
    G: "他分步骤推算出尸体的年龄",
    H: "The disease is still in its primary stage.",
    I: "这疾病仍然在初发阶段。"
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
    B: "scissors",
    C: "['sɪzəz]",
    D: "n.剪刀",
    E: "sc+is+so+rs",
    F: "sc四川(拼音)+is是(熟词)+so这样(熟词)+rs认识(拼音)",
    G: "四川人是这样认识剪刀的",
    H: "I can't find my scissors.",
    I: "我找不到我的剪刀了。"
}, {
    B: "raise",
    C: "[reɪz]",
    D: "vt.养育，提高，升起",
    E: "rai+se",
    F: "rai瑞(谐音)+se色(拼音)",
    G: "养育了瑞瑞的色狼",
    H: "She raised four kids by herself.",
    I: "她独自养育了四个孩子。"
}, {
    B: "expression",
    C: "[ɪk'spreʃn]",
    D: "n.表情，神色",
    E: "ex+pr+es+sion",
    F: "ex儿媳(拼音)+pr仆人(拼音)+es饿死(拼音)+sion神(谐音)",
    G: "儿媳的表情告诉我们仆人饿死了那个神",
    H: "All their expressions were not true.	",
    I: "他们所有的表情都不是真的。"
}, {
    B: "although",
    C: "[ɔ:l'ðəu]",
    D: "conj.虽然，尽管",
    E: "al+though",
    F: "al阿狸(拼音)+though肉(谐音)",
    G: "虽然阿狸很可爱但她的肉好吃吗",
    H: "Although the sun was shining, it wasn't very warm.",
    I: "尽管太阳高照，却不很暖和。"
}, {
    B: "hang",
    C: "[hæŋ]",
    D: "vt.悬挂，吊",
    E: "hang",
    F: "hang行",
    G: "银行里悬挂了很多吊坠",
    H: "Hang up your coat on the hook.",
    I: "把你的大衣挂在衣钩上。"
}, {
    B: "explain",
    C: "[ɪkˈspleɪn]",
    D: "vt.解释，说明",
    E: "ex+plain",
    F: "ex儿媳(拼音)+plain平原(熟词)",
    G: "解释儿媳住在平原的原因",
    H: "I don't understand this, please explain.	",
    I: "我不明白这点,请解释一下。"
}, {
    B: "excuse",
    C: "[ɪk'skju:z]",
    D: "n.辩解，借口",
    E: "ex+cu+se",
    F: "ex儿媳+cu醋+se色",
    G: "儿媳对醋的颜色改变无力辩解",
    H: "Excuse me.",
    I: "对不起。"
}, {
    B: "prepare",
    C: "[prɪˈpeə(r)]",
    D: "vt.准备",
    E: "pre+pare",
    F: "pre仆人+pare怕热",
    G: "那个仆人很怕热准备去避暑",
    H: " I'll prepare some drinks and sandwiches.",
    I: "我会准备一些饮料和三明治。"
}, {
    B: "recently",
    C: "['ri:sntlɪ]",
    D: "adv.最近，不久前",
    E: "re+cent+ly",
    F: "re热(拼音)+cent一分钱(熟词)+ly梨(谐音)",
    G: "最近天热，一分钱就可以买到一个梨",
    H: "He was in Guangzhou recently.",
    I: "他最近去过广州。"
}, {
    B: "communication",
    C: "[kəˌmju:nɪ'keɪʃn]",
    D: "n.交流，交际",
    E: "com+muni+cation",
    F: "com(e)来(熟词)+muni慕尼(拼音)+cationK神(谐音)",
    G: "来慕尼黑和K神交流",
    H: "Doctors do not always have good communication skills.",
    I: "医生不一定都具备良好的交际能力。"
}, {
    B: "satisfy",
    C: "[ˈsætɪsfaɪ]",
    D: "vt.使满足，使满意",
    E: "sat+is+fy",
    F: "sat坐(熟词)+is是(熟词)+fy风衣(拼音)",
    G: "坐在那里很满足的人是穿着风衣的",
    H: "We always satisfy our customers with good service.",
    I: "我们总是以良好的服务来满足顾客。"
}, {
    B: "nod",
    C: "[nɒd]",
    D: "vi.点头",
    E: "n+o+d",
    F: "n门+o蛋+d弟",
    G: "在门口吃鸡蛋的弟弟不停地点头",
    H: "She looked up and nodded for me to come in.",
    I: "她抬起头，点头示意让我进来。"
}, {
    B: "reason",
    C: "['ri:zn]",
    D: "n.理由，原因",
    E: "re+a+son",
    F: "re热(拼音)+a苹果(编码)+son儿子(熟词)",
    G: "爱在热天吃苹果，儿子的理由是什么",
    H: "They had reason to believe there could be trouble.",
    I: "他们有理由相信可能会遇到麻烦。"
}, {
    B: "alien",
    C: "['eɪlɪən]",
    D: "n.外星人，外国人",
    E: "al+i+en",
    F: "al阿狸(拼音)+i骨头(编码)+en摁(拼音)",
    G: "阿狸抢来的骨头被外星人摁住了",
    H: "Jim is an alien in this film. ",
    I: "吉姆在这部电影里是个外星人。"
}, {
    B: "fear",
    C: "[fɪə(r)]",
    D: "n.害怕，惧怕",
    E: "f+ear",
    F: "f斧头(编码)+ear耳朵(熟词)",
    G: "害怕斧头砍掉耳朵",
    H: "I hide behind the door with fear.",
    I: "我害怕地躲在门后。"
}, {
    B: "shake",
    C: "[ʃeɪk]",
    D: "vt./vi.（shook，shaken）握手，摇头",
    E: "sh+a+ke",
    F: "sh上海(拼音)+a苹果(编码)+ke可(拼音)",
    G: "在上海吃完苹果才可以握手",
    H: "He used to shake his head and he would just smile.",
    I: "他会摇摇头并轻轻一笑。"
}, {
    B: "symbol",
    C: "['sɪmbl]",
    D: "n.符号",
    E: "s+ym+bol",
    F: "s美女(编码)+ym幽默(拼音)+bol601(象形)",
    G: "美女幽默地说出了第601个符号的意义",
    H: "What's the chemical symbol for water?",
    I: "水的化学符号是什么？"
}, {
    B: "cruel",
    C: "[kru:əl]",
    D: "adj.残忍的，残酷的",
    E: "cr+u+el",
    F: "cr超人(拼音)+u你(编码you)+el饿了(拼音)",
    G: "超人说你饿了的时候很残忍",
    H: "It's cruel to say that.",
    I: "那样说话是残忍的。"
}, {
    B: "relax",
    C: "[rɪˈlæks]",
    D: "vt.休息，放松",
    E: "rela+x",
    F: "rela热辣(拼音)+x剪刀(编码)",
    G: "跳完热辣剪刀舞后开始休息",
    H: "You need to relax yourself.",
    I: "你需要放松一下自己。"
}, {
    B: "spread",
    C: "[spred]",
    D: "vt./vi.张开",
    E: "sp+re+ad",
    F: "sp赛跑+re热+ad阿弟",
    G: "赛跑时热得阿弟张开了双臂",
    H: "The bird spreads its wings.",
    I: "这只鸟张开了翅膀。"
}, {
    B: "joy",
    C: "[dʒɒɪ]",
    D: "n.欢乐，快乐",
    E: "j+o+y",
    F: "j周杰伦(Jay)+o鸡蛋+y树杈",
    G: "周杰伦把鸡蛋叉在树杈上很欢乐",
    H: "I shouted with joy.",
    I: "我高兴得叫了起来。"
}, {
    B: "wave",
    C: "[weɪv]",
    D: "n.海浪，波浪；vt.挥，波动",
    E: " wa+ve",
    F: "wa娃(拼音)+ve维E(编码)",
    G: "娃娃在海浪上吃维E",
    H: "Children were playing in the waves.",
    I: "孩子们在波浪中嬉戏。"
}, {
    B: "review",
    C: "[rɪ'vju:]",
    D: "n.复习，回顾，评论",
    E: "re+view",
    F: "re再(词缀)+view看(熟词)",
    G: "复习就要再看一遍",
    H: "Review all the notes you need to cover for each course. ",
    I: "把每一门课程需要掌握的笔记都复习一下。"
}, {
    B: "research",
    C: "[rɪ'sɜ:tʃ]",
    D: "n.搜寻，研究，调查",
    E: "re+search",
    F: "re再(词缀)+search搜寻(熟词)",
    G: "调查时要再次搜寻",
    H: "What have their researches shown?",
    I: "他们的研究证明了什么？"
}, {
    B: "deal",
    C: "[di:l]",
    D: "n.协定，交易",
    E: "de+al",
    F: "de弟(谐音)+al阿狸(拼音)",
    G: "弟弟和阿狸达成协定",
    H: "This is the deal.",
    I: "这是达成的协议。"
}, {
    B: "trust",
    C: "[trʌst]",
    D: "n.信任，信赖",
    E: "tr+us+t",
    F: "tr土人(拼音)+us我们(熟词)+t特(编码)",
    G: "土人对我们特别信任",
    H: "He betrayed my trust in him.",
    I: "他辜负了我对他的信任。"
}, {
    B: "request",
    C: "[rɪ'kwest]",
    D: "n.要求，请求",
    E: "requ+e+st",
    F: "requ热区(拼音)+e鹅(编码)+st尸体(拼音)",
    G: "要求热带地区的鹅看守尸体",
    H: "He came at my request.",
    I: "他应我的请求而来。"
}, {
    B: "serve",
    C: "[sɜ:v]",
    D: "vt./vi.招待，提供",
    E: "s+er+ve",
    F: "s蛇(编码)+er儿(拼音)+ve维E(编码)",
    G: "蛇招待儿子吃维E",
    H: "Do they serve meals in the bar? ",
    I: "这家酒吧提供饭菜吗？"
}, {
    B: "mistake",
    C: "[mɪˈsteɪk]",
    D: "n.错误",
    E: "mis+take",
    F: "mis(s)女士+take带走",
    G: "女士带走犯错误的学生",
    H: "You have made so many mistakes in your homework.",
    I: "你在家庭作业里犯了很多错误。"
}, {
    B: "humorous",
    C: "['hju:mərəs]",
    D: "adj.幽默的，滑稽有趣的",
    E: "humo+rous",
    F: "humo胡某+rous肉丝",
    G: "幽默的胡某爱吃肉丝",
    H: "He was quite humorous, and I liked that about him.  ",
    I: "他很幽默，我喜欢他这一点。"
}, {
    B: "forward",
    C: "['fɔ:wəd]",
    D: "adv.向前",
    E: "for+ward",
    F: "for为了(熟词)+ward我的(谐音)",
    G: "为了我的将来，奋力向前",
    H: "He took two steps forward.",
    I: "他向前走了两步。"
}, {
    B: "graduation",
    C: "[ˌgrædʒuˈeɪʃn]",
    D: "n.毕业典礼",
    E: "gr+adu+ation",
    F: "gr工人(拼音)+adu阿杜(拼音)+ation阿婶(谐音)",
    G: "工人阿杜参加阿婶的毕业典礼",
    H: "At my brother's high school graduation the students recited a poem.  ",
    I: "在我弟弟的高中毕业典礼上，学生们朗诵了一首诗。"
}, {
    B: "iron",
    C: "['aɪən]",
    D: "n.铁器；vt.（用熨斗）熨",
    E: "i+ron",
    F: "i蜡烛(编码)+ron熔(拼音)",
    G: "铁器上的蜡烛熔化了",
    H: "This is iron.",
    I: "这是铁器。"
}, {
    B: "correct",
    C: "[kə'rekt]",
    D: "adj.正确的，准确无误的",
    E: "co+rre+ct",
    F: "co可乐(熟词coke)+rre热热(拼音)+ctCT(编码)",
    G: "喝完可乐热热身再做CT检查才是正确的",
    H: "That is correct.",
    I: "没错。"
}, {
    B: "suppose",
    C: "[sə'pəʊz]",
    D: "vt.认为，假设，猜想，料想",
    E: "sup+pos+e",
    F: "sup苏萍(拼音)+posPOS机(编码)+e鹅(编码)",
    G: "苏萍认为POS机在鹅手里",
    H: "Who do you suppose will replace her on the show?",
    I: "你觉得谁会代替她参加这场演出？"
}, {
    B: "pity",
    C: "['pɪtɪ]",
    D: "n.可惜，遗憾",
    E: "pi+ty",
    F: "pi皮+ty太阳",
    G: "皮鞋被太阳晒爆了好可惜",
    H: "Oh, what a pity.",
    I: "哎呀，真可惜。"
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
    B: "rise",
    C: "[raɪz]",
    D: "vi.增强，上升",
    E: "ri+se",
    F: "ri日+se色",
    G: "日光的颜色增强了",
    H: "The earth rises in the east.",
    I: "太阳从东边升起。"
}, {
    B: "whatever",
    C: "[wɒt'evə]",
    D: "pron.任何事物，一切事情",
    E: "what+ever",
    F: "what什么+ever曾经",
    G: "任何事物不管是什么都会变成曾经",
    H: "You can do whatever you like.",
    I: "你可以做你喜欢的任何事情。"
}, {
    B: "besides",
    C: "[bɪ'saɪdz]",
    D: "prep.此外，除…之外（还）",
    E: "be+sides",
    F: "be作为+sides方面",
    G: "此外作为老师他还有别的方面的优势",
    H: "I've got no family besides my parents.",
    I: "除了父母，我没有其他亲人。"
}, {
    B: "wealth",
    C: "[welθ]",
    D: "n.财富",
    E: "health",
    F: "health健康",
    G: "得到了财富却失去了健康",
    H: "Loss of health is more serious than loss of wealth.",
    I: "健康的丧失比财富的损失更为重要。"
}, {
    B: "concern",
    C: "[kən'sɜ:n]",
    D: "n.担心，忧虑",
    E: "con+ce+rn",
    F: "con肯(谐音)+ce厕(拼音)+rn热奶(拼音)",
    G: "担心小肯在厕所喝热奶",
    H: "These problems concern all of us.",
    I: "这些问题涉及到每一个人。"
}, {
    B: "stare",
    C: "[steə]",
    D: "vi.盯着看，凝视，盯住",
    E: "st+are",
    F: "st石头(拼音)+are是(熟词)",
    G: "盯着石头",
    H: "She stared him into silence.",
    I: "她把他盯得不吭声了。"
}, {
    B: "official",
    C: "[ə'fɪʃ(ə)l]",
    D: "n.官员；adj.官方的",
    E: "off+i+cial",
    F: "off离开(熟词)+i我(熟词I)+cial守(谐音)",
    G: "官员离开我守的地方",
    H: "Is this news official?",
    I: "这个消息是官方的吗？"
}, {
    B: "voyage",
    C: "['vɔɪɪdʒ]",
    D: "n.航行",
    E: "vo+ya+ge",
    F: "vo我(谐音)+ya押(拼音)+ge哥(拼音)",
    G: "我押着哥哥去航行",
    H: "On this account we should be more cautious on this voyage.",
    I: "以此，我们应该在这次航行中格外小心谨慎。"
}, {
    B: "screen",
    C: "[skri:n]",
    D: "n.银幕，屏幕，屏风",
    E: "s+cr+ee+n",
    F: "s蛇(编码)+cr残忍(拼音)+ee眼睛(编码)+n门(编码)",
    G: "银幕上的蛇残忍地用眼睛把门击穿",
    H: "She first appeared on the screen ten years ago.",
    I: "十年前，她第一次出现在银幕上。"
}, {
    B: "gentle",
    C: "['dʒentl]",
    D: "adj.文雅的， 温和的",
    E: "gen+t+le",
    F: "gen跟(拼音)+t特(编码)+le勒(拼音)",
    G: "那个文雅的人跟踪特务，想勒索他",
    H: "Jane is of such a gentle nature.",
    I: "简的性格十分温柔。"
}, {
    B: "risk",
    C: "[rɪsk]",
    D: "n.危险，冒险",
    E: "ri+s+k",
    F: "ri日(拼音)+s蛇(编码)+k枪(编码)",
    G: "日光下的蛇身上有枪看着很危险",
    H: "Don't take any risks.",
    I: "不要冒险行事。"
}, {
    B: "regular",
    C: "['regjələ(r)]",
    D: "adj.整齐规律的， 规则的",
    E: "re+gu+lar",
    F: "re热+gu谷+lar腊肉",
    G: "热天山谷中摆着很多整齐规律的腊肉",
    H: "He made a regular visit to his parents.",
    I: "他定期看望父母亲。"
}, {
    B: "foreign",
    C: "['fɒrɪn]",
    D: "adj.外国的，外交的",
    E: "fo+rei+gn",
    F: "fo佛(拼音)+rei瑞(谐音)+gn钙奶(拼音)",
    G: "外国的佛喂瑞瑞喝钙奶",
    H: "It's not easy to learn a foreign language well.",
    I: "学好一门外语并不容易。"
}, {
    B: "object",
    C: "['ɒbdʒekt]",
    D: "vi.反对，拒绝；n.目标，物体",
    E: "ob+jec+t",
    F: "ob欧巴(拼音)+jec杰克(谐音)+t伞(编码)",
    G: "反对欧巴给杰克打伞",
    H: "He made it his object in life to find the island.  ",
    I: "他把找到那座岛屿当成自己的人生目标。"
}, {
    B: "schedule",
    C: "['ʃedju:l]",
    D: "n.日程安排",
    E: "s+che+dule",
    F: "s美女(编码)+che车(拼音)+dule堵了(拼音)",
    G: "美女的车堵了误了日程安排",
    H: "It is the mother who is expected to reorganize her busy schedule.",
    I: "应该让母亲来重新安排自己紧张的日程。"
}, {
    B: "proper",
    C: "['prɒpə]",
    D: "adj.正确的，恰当的",
    E: "pro+p+er",
    F: "pro飘柔(拼音)+p皮(编码)+er儿(拼音)",
    G: "用飘柔擦皮鞋是儿子正确的选择",
    H: "He helped to put things in their proper place.",
    I: "他帮忙把东西放置在正确的位置上。"
}, {
    B: "dead",
    C: "[ded]",
    D: "adj.死去的， 完全的",
    E: "de+a+d",
    F: "de得(拼音)+a苹果(编码)+d狗(编码dog)",
    G: "获得苹果的狗被毒死了",
    H: "My mother's dead.",
    I: "我母亲不在了。"
}, {
    B: "contest",
    C: "['kɒntest]",
    D: "n.争辩，竞赛，争夺",
    E: "con+test",
    F: "con看(谐音)+test测试(熟词)",
    G: "争辩看哪个测试更好",
    H: "Tom aced out his opponent in the contest.",
    I: "汤姆在比赛中胜过自己的对手。"
}, {
    B: "broccoli",
    C: "['brɒkəlɪ]",
    D: "n.西兰花，花椰菜",
    E: "b+roc+co+li",
    F: "b男孩(编码boy)+roc肉肠(拼音)+co可乐(熟词coke)+li里(拼音)",
    G: "男孩把泡肉肠的可乐倒入西兰花里",
    H: "Give me some more broccoli.",
    I: "再给我一些花椰菜。"
}, {
    B: "question",
    C: "['kwestʃ(ə)n]",
    D: "n.问题，疑问",
    E: "que+s+tion",
    F: "que缺(拼音)+s美女(编码)+tion神(谐音)",
    G: "问题是缺少美女和神",
    H: "Do you have any question?",
    I: "你还有什么问题吗？"
}, {
    B: "plural",
    C: "['plʊərəl]",
    D: "n.复数形式，复数；adj.复数的",
    E: "plu+r+al",
    F: "plu铺路(拼音)+r草(编码)+al阿狸(拼音)",
    G: "铺路时看到草地上的阿狸在背单词的复数形式",
    H: "This noun has an irregular plural form.",
    I: "这个名词的复数形式不规则。"
}, {
    B: "survey",
    C: "['sɜ:veɪ]",
    D: "vt./n.调查，审视，测量",
    E: "sur+ve+y",
    F: "sur俗人(拼音)+ve维E(编码)+y树杈(编码)",
    G: "俗人吃了维E后爬上树杈调查情况",
    H: "I will make a survey.",
    I: "我将会做一个调查。"
}, {
    B: "very",
    C: "['verɪ]",
    D: "adv.很，非常",
    E: "ve+ry",
    F: "ve维E(编码)+ry人妖(拼音)",
    G: "维E使人妖变得很漂亮",
    H: "My mother is very beautiful.",
    I: "我妈妈非常漂亮。"
}, {
    B: "favorite",
    C: "['feɪvərɪt]",
    D: "adj.最喜爱的；n.喜欢的事物，特别喜欢的人",
    E: "favor+it+e",
    F: "fa发(拼音)+vo我(谐音)+rite日特(拼音)",
    G: "我最喜爱的它是一只鹅",
    H: "My favorite color is red.",
    I: "我最喜欢的颜色是红色。"
}, {
    B: "North",
    C: "[nɔ:θ]",
    D: "n.北方，北",
    E: "No+r+th",
    F: "No不(熟词)+r热(拼音)+th土豪(拼音)",
    G: "不热的时候土豪都去北方",
    H: "I come from the north. ",
    I: "我是北方人。"
}, {
    B: "painting",
    C: "['peɪntɪŋ]",
    D: "n.画，绘画",
    E: "paint+ing",
    F: "paint画(熟词)+ing鹰(谐音)",
    G: "这幅画画的是鹰",
    H: "This painting is expensive.",
    I: "这幅画很贵。"
}, {
    B: "porridge",
    C: "['pɒrɪdʒ]",
    D: "n.粥",
    E: "po+rri+dge",
    F: "po婆+rri日日+dge大哥",
    G: "婆婆日日为大哥煲粥",
    H: "She spooned out bowls of porridge.",
    I: "她用匙舀出了几碗粥。"
}, {
    B: "crime",
    C: "[kraɪm]",
    D: "n.犯罪，罪行",
    E: "cr+i+me",
    F: "cr超人(拼音)+i蜡烛(编码)+me我(熟词)",
    G: "超人拿蜡烛阻止我犯罪",
    H: "The most crime happens where the most money is.",
    I: "大多数的犯罪发生在最有钱的地方。"
}, {
    B: "ivory",
    C: "['aɪv(ə)rɪ]",
    D: "n.象牙",
    E: "i+vo+ry",
    F: "i爱(编码)+vo我(谐音)+ry人妖(拼音)",
    G: "爱我的人妖在买象牙",
    H: "It is carved from ivory.",
    I: "它是用象牙雕成的。	"
}, {
    B: "police",
    C: "[pə'li:s]",
    D: "n.警察，警方",
    E: "po+l+ice",
    F: "po婆(拼音)+l棍子(编码)+ice冰(熟词)",
    G: "警察阻止了婆婆用棍子铲冰",
    H: "The police will find him.",
    I: "警察会找到他的。"
}, {
    B: "quarter",
    C: "['kwɔ:tə]",
    D: "n.季度，四分之一",
    E: "qu+ar+t+er",
    F: "qu去(拼音)+ar矮人(拼音)+t伞(编码)+er儿(拼音)",
    G: "每个季度都会去矮人那拿伞儿",
    H: "Cut the apple into quarters.",
    I: "把苹果切成四瓣。"
}, {
    B: "describe",
    C: "[dɪs'kraɪb]",
    D: "vt.描绘，描述，形容",
    E: "de+sc+ri+be",
    F: "de德(拼音)+sc市场(拼音)+ri日(拼音)+be是(熟词)",
    G: "德国市场是日本人描绘的那样么？",
    H: "It is very difficult to describe my joy in words.",
    I: "我的快乐难以用语言来形容。"
}, {
    B: "handsome",
    C: "['hænsəm]",
    D: "adj.英俊的",
    E: "hand+some",
    F: "hand手+some一些",
    G: "手里有一些英俊的帅哥的资料",
    H: "My brother is a handsome boy.",
    I: "我哥哥长得很英俊。"
}, {
    B: "curly",
    C: "['kə:lɪ]",
    D: "adj.（头发）卷曲的，鬈曲的，拳曲状的",
    E: "cur+ly",
    F: "cur粗人+ly老爷",
    G: "粗人的头发被老爷烫卷曲了",
    H: "The wrong shampoo can leave curly hair in a tangled mess. ",
    I: "不合适的洗发水会使卷发纠结成乱糟糟的一团。"
}, {
    B: "neighborhood",
    C: "['neɪbəhʊd]",
    D: "n.附近，街坊，街区",
    E: "neighbor+hood",
    F: "neighbor邻居(熟词)+hood虎的(谐音)",
    G: "附近的邻居爱去有老虎的森林玩",
    H: "It is a neighborhood beset by all the usual inner-city problems.  ",
    I: "这是个为各种内城常见问题所困扰的社区。"
}, {
    B: "creative",
    C: "[kri:'eɪtɪv]",
    D: "adj.有创造力的，创造性的，独创的",
    E: "creat+ive",
    F: "creat(e)创作(熟词)+ive衣服(谐音)",
    G: "有创造力的设计师创作了这件衣服",
    H: "Creative work appealed to him irresistibly.",
    I: "搞创造对他有无法抗拒的吸引力。"
}, {
    B: "prediction",
    C: "[prɪ'dɪkʃ(ə)n]",
    D: "n.预言，预报，预告",
    E: "pre+dic+tion",
    F: "pre仆人(拼音)+dic迪克(谐音)+tion神(谐音)",
    G: "仆人谋杀迪克是神留下的预言",
    H: "This great prediction is coming true.",
    I: "这一伟大的预言正在成为现实。"
}, {
    B: "opening",
    C: "[ˈəʊpnɪŋ]",
    D: "n.开端，（出入的）通路，开口",
    E: "open+ing",
    F: "open打开(熟词)+ing鹰(谐音)",
    G: "打开门的鹰有了新的开端",
    H: "They returned to take part in the season's opening game.",
    I: "他们回来参加本赛季的开幕赛。"
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
    B: "planet",
    C: "['plænɪt]",
    D: "n.行星",
    E: "plane+t",
    F: "plane飞机(熟词)+t伞(编码)",
    G: "飞机被降落伞带到这颗行星上了",
    H: "How do you distinguish between a star and a planet?",
    I: "你如何区分恒星和行星？"
}, {
    B: "primary",
    C: "['praɪm(ə)rɪ]",
    D: "adj.初级的",
    E: "pr+i+mary",
    F: "pr仆人(拼音)+i蜡烛(编码)+mary玛丽(熟词)",
    G: "仆人点着蜡烛教玛丽学初级英语",
    H: "Our primary concern must be the children.",
    I: "我们首先要关心的必须是儿童。"
}, {
    B: "advise",
    C: "[əd'vaɪz]",
    D: "vt./vi.建议",
    E: "ad+vise",
    F: "ad广告(编码)+vise外资(谐音)",
    G: "建议在广告中引进外资",
    H: "I advised my sister not to play with fire.",
    I: "我建议我妹妹不要玩火。"
}, {
    B: "hole",
    C: "[həʊl]",
    D: "n.洞，孔，洞穴；vt./vi.打洞",
    E: "ho+le",
    F: "ho猴+le乐",
    G: "洞里的猴子很快乐",
    H: "I've a hole in my left sock.",
    I: "我左脚袜子上有个洞。"
}, {
    B: "halfway",
    C: "[ˌhɑ:fˈweɪ]",
    D: "adv.半路地，在中途，在中间",
    E: "half+way",
    F: "half半+way道路",
    G: "车子开到半路抛锚了",
    H: "Her zipper stuck halfway up.          					 ",
    I: "他的拉锁拉上一半时卡住了。"
}, {
    B: "meaningless",
    C: "['mi:nɪŋləs]",
    D: "adj.无意义的",
    E: "meaning+less",
    F: "meaning意义(熟词)+less没有(词缀)",
    G: "无意义的事没有人会去做",
    H: "The meaningless abstraction bespattered political and theoretical books.                ",
    I: "那些毫无意义的抽象语言有损于政治理论书籍的价值。"
}, {
    B: "understanding",
    C: "[ˌʌndə'stændɪŋ]",
    D: "adj.善解人意的；n.",
    E: "understand+ing",
    F: "understand理解(熟词)+ing鹰(谐音)",
    G: "善解人意的他能",
    H: "They have to have a basic understanding of computers in order to use the advanced technology.",
    I: "要想利用先进技术，他们必须先对计算机有个基本的了解。"
}, {
    B: "beginning",
    C: "[bɪ'gɪnɪŋ]",
    D: "n.开始，开头，开端",
    E: "begin+ning",
    F: "begin开始(熟词)+ning宁(拼音)",
    G: "战争一开始就打破村庄的安宁",
    H: "At the beginning I have a little nervous.",
    I: "最初我有一点紧张。"
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
    B: "Malaysia",
    C: "[mə'leɪzɪə]",
    D: "n.马来西亚",
    E: "Ma+lay+sia",
    F: "Ma妈(拼音)+lay躺(熟词)+sia西雅(熟词Sia)",
    G: "妈妈在马来西亚照顾躺在病床上的西雅",
    H: "He settled in Malaysia. ",
    I: "他定居马来西亚。"
}, {
    B: "glad",
    C: "[glæd]",
    D: "adj.高兴的，乐意的",
    E: "gl+ad",
    F: "gl91(象形)+adAD钙奶(谐音)",
    G: "高兴地喝了91瓶AD钙奶",
    H: "I'm so glad for you.",
    I: "我真为你高兴。"
}, {
    B: "comfortably",
    C: "['kʌmftəblɪ]",
    D: "adv.舒服地，轻松地，容易地",
    E: "comfort+ab+ly",
    F: "comfort舒服(熟词)+ab阿爸(拼音)+ly老爷(拼音)",
    G: "为了舒服地睡觉阿爸叫老爷关了窗",
    H: "He reclined comfortably on a sofa reading a newspaper",
    I: "他舒服地斜躺在沙发上看报"
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
    B: "character",
    C: "['kærəktə]",
    D: "n.性格，",
    E: "ch+ar+act+er",
    F: "ch吃(拼音)+ar矮人(拼音)+act表演(熟词)+er儿子(拼音)",
    G: "吃货矮人在表演儿子性格",
    H: "The boy has a strong character.",
    I: "这男孩个性很强。"
}, {
    B: "performer",
    C: "[pə'fɔ:mə]",
    D: "n.表演者，演出者",
    E: "per+former",
    F: "per普洱(拼音)+former以前的(熟词)",
    G: "喝普洱茶的人以前是表演者",
    H: "He's a brilliant performer. ",
    I: "他是个出色的演员。"
}, {
    B: "truly",
    C: "['tru:lɪ]",
    D: "adv.真实地，",
    E: "tru+ly",
    F: "tru(e)真实的(熟词)+ly老爷(拼音)",
    G: "真实的老爷待人很",
    H: "She was a truly great actress.",
    I: "她确实是一名很了不起的演员。"
}, {
    B: "resolution",
    C: "[ˌrezə'lu:ʃn]",
    D: "n.决心，坚决，坚定",
    E: "re+solution",
    F: "re热(拼音)+solution解决办法(熟词)",
    G: "决心找出应对热天的解决办法",
    H: "She showed great resolution in dealing with the Americans.",
    I: "她在对付美国人方面显得非常果断。"
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
    B: "monster",
    C: "['mɒnstə]",
    D: "n.怪物，巨人，残忍的人；adj.巨大的，庞大的",
    E: "mons+ter",
    F: "mons忙死(谐音)+ter天鹅肉(拼音)",
    G: "怪物忙死了还要吃天鹅肉",
    H: "The film will be a monster hit.",
    I: "这部电影将会非常卖座。"
}, {
    B: "murder",
    C: "['mɜ:də(r)]",
    D: "n./vt.谋杀，凶杀",
    E: "murd+er",
    F: "murd默德(熟词Murd)+er儿(拼音)",
    G: "默德的儿子被谋杀了",
    H: "This was only one of many murder cases he judged.",
    I: "这仅仅是他审理的众多谋杀案件中的一件。"
}, {
    B: "advantage",
    C: "[əd'vɑ:ntɪdʒ]",
    D: "n.优势",
    E: "ad+v+ant+age",
    F: "ad阿弟(拼音)+v胜利(编码)+ant蚂蚁(熟词)+age年龄(熟词)",
    G: "阿弟能胜利抓到蚂蚁是占了年龄优势",
    H: "I have a big advantage for this job.",
    I: "就这项工作而言我有一个很大的优势。"
}, {
    B: "collect",
    C: "[kə'lekt]",
    D: "adj.共同的，集体的；n.集团",
    E: "colle+ct",
    F: "colle可乐(谐音)+ctCT(编码)",
    G: "收集可乐做CT",
    H: "I like collecting stamps.",
    I: "我喜欢集邮。"
}, {
    B: "comment",
    C: "['kɒment]",
    D: "n.评论，意见，批评",
    E: "com+ment",
    F: "com公司(编码)+ment门徒(拼音)",
    G: "公司禁止门徒写评论",
    H: "Mike made no comment on the report. ",
    I: "Mike没有对这个报告作出评价。"
}, {
    B: "cruise",
    C: "[kru:z]",
    D: "n./vt.乘船游览，巡游",
    E: "c+rui+se",
    F: "c看见(编码see)+rui瑞(拼音)+se色(拼音)",
    G: "乘船游览时看见瑞瑞被色狼调戏",
    H: "I'd love to go on a round-the-world cruise.",
    I: "我很想乘船周游世界。"
}, {
    B: "envelope",
    C: "['envələʊp]",
    D: "n.信封，塑料封皮",
    E: "en+ve+lo+pe",
    F: "en恩(拼音)+ve维E(编码)+lo10(象形)+pe体育课(编码)",
    G: "恩熙把信封里的维E分别送给10位体育老师",
    H: "The envelope was marked “Personal”.",
    I: "信封上标着“私人信件”。"
}, {
    B: "fiction",
    C: "['fɪkʃ(ə)n]",
    D: "n.小说，虚构",
    E: "f+ic+tion",
    F: "f佛(编码)+icIC卡(编码)+tion神(谐音)",
    G: "小说里的佛用IC卡灭了神",
    H: "The line between fact and fiction is becoming blurred. ",
    I: "事实和虚构之间的界限正变得模糊起来。"
}, {
    B: "hamster",
    C: "['hæmstə(r)]",
    D: "n.仓鼠",
    E: "ham+s+ter",
    F: "ham火腿(熟词)+s美女(编码)+ter特(谐音)",
    G: "吃火腿的美女特喜欢仓鼠",
    H: `The hamster had got through the wire at the front of its cage.  
`,
    I: "仓鼠从其笼子前部的栅栏处钻出去了。"
}, {
    B: "modest",
    C: "['mɒdɪst]",
    D: "adj.谦虚的",
    E: "mo+d+est",
    F: "mo默(拼音)+d狗(编码)+est最(词缀)",
    G: "他默默地说：狗是最谦虚的",
    H: "This headmaster is very modest.",
    I: "这位校长很谦虚。"
}, {
    B: "particularly",
    C: "[pə'tɪkjʊləlɪ] ",
    D: "adv.特别，尤其",
    E: "part+icu+lar+ly",
    F: "part部分(熟词)+icu重症监护室(编码)+lar腊肉(拼音)+ly老爷(拼音)",
    G: "部分重症监护室病人特别喜欢吃腊肉的老爷",
    H: "He was not a particularly good shot because of his eyesight.",
    I: "他视力不好，算不上是一个出色的射手。"
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
    B: "rating",
    C: "['reɪtɪŋ]",
    D: "n.级别，收视率",
    E: "rat+ing",
    F: "rat老鼠(熟词)+ing鹰(谐音)",
    G: "老鼠和鹰不是同一级别的",
    H: "The show has gone up in the ratings.",
    I: "这个节目的收视率上升了。"
}, {
    B: "disappointing",
    C: "[ˌdɪsə'pɔɪntɪŋ]",
    D: "adj.令人失望的，令人沮丧的",
    E: "disappoint+ing",
    F: "disappoint使失望(熟词)+ing鹰(谐音)",
    G: "这件事使鹰很失望",
    H: "The wine was excellent, but the food was disappointing.",
    I: "酒棒极了，但是饭菜却让人不敢恭维。"
}, {
    B: "equator",
    C: "[ɪ'kweɪtə]",
    D: "n.赤道",
    E: "equat+or",
    F: "equat(e)等同(熟词)+or偶人(拼音)",
    G: "在赤道上生活等同于让偶人热死",
    H: "The United States is north of the equator. 					",
    I: "美国位于赤道以北。"
}, {
    B: "fortunately",
    C: "['fɔ:tʃənətlɪ]",
    D: "adv.幸运地",
    E: "fortunate+ly",
    F: "fortunate幸运的(熟词)+ly老爷(拼音)",
    G: "幸运的老爷幸运地中奖了",
    H: "Fortunately, you have the power to change all that.",
    I: "幸运的是，你还有能力去改变所有这一切。"
}, {
    B: "etiquette",
    C: "['etɪket]",
    D: "n.规矩，礼节，礼仪",
    E: "eti+que+tt+e",
    F: "eti挨踢(谐音)+que雀(拼音)+tt两把伞(编码)+e鹅(编码)",
    G: "不懂规矩挨踢的孔雀用两把伞打鹅",
    H: "This was such a great breach of etiquette, he hardly knew what to do.",
    I: "这是严重失礼的行为，他几乎手足无措。"
}, {
    B: "following",
    C: "['fɒləʊɪŋ]",
    D: "n.拥护者，支持者；adj.接下来的",
    E: "follow+ing",
    F: "follow跟随(熟词)+ing鹰(谐音)",
    G: "跟随而来的鹰是他的拥护者",
    H: "We went to dinner the following Monday evening.",
    I: "接下来那个周一的晚上，我们一起去吃了晚餐。"
}, {
    B: "collector",
    C: "[kə'lektə]",
    D: "n.收藏家，收集者",
    E: "collect+or",
    F: "collect收集(熟词)+or偶人(拼音)",
    G: "这名收藏家厌倦了收集偶人",
    H: "An art historian and collector, he was also a practising architect.",
    I: "他身为艺术历史学家和收藏家，同时也是一名从业建筑师。"
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
    B: "statement",
    C: "[ˈsteitmənt]",
    D: "n.声明，陈述，叙述",
    E: "state+ment",
    F: "state国家(熟词)+ment门徒(拼音)",
    G: "国家的门徒在发表声明",
    H: "We attached no significance to his statement.",
    I: "我们认为他的声明毫无意义。"
}, {
    B: "term",
    C: "[tɜ:m]",
    D: "n.术语，学期",
    E: "te+rm",
    F: "te特+rm热门",
    G: "这术语特别热门",
    H: "I am not familiar with chemical terms.",
    I: "我不熟悉化学术语。"
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
    B: "adult",
    C: "['ædʌlt]",
    D: "n.成年人；adj.成年的，成熟的",
    E: "a+du+lt",
    F: "a一(熟词)+du肚(拼音)+lt老头(拼音)",
    G: "这个成年人变成一个大肚腩的老头",
    H: "The average adult man burns 1,500 to 2,000 calories per day.",
    I: "普通成年男子每天消耗的热量为1，500到2，000卡路里。"
}, {
    B: "amusement",
    C: "[ə'mju:zm(ə)nt]",
    D: "n.娱乐（活动），消遣",
    E: "amuse+ment",
    F: "amuse娱乐(熟词)+ment门徒(拼音)",
    G: "娱乐活动是门徒的最爱",
    H: "I play the piano just for my own amusement.",
    I: "我弹钢琴纯粹是自娱自乐。"
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
    B: "Asian",
    C: "['eiʃən]",
    D: "n.亚洲人；adj.亚洲的，亚洲人的",
    E: "As+i+an",
    F: "As像..一样+i我(I)+an一个",
    G: "他和我一样是一个亚洲人",
    H: "An Asian is a person born or living in Asia.",
    I: "亚洲人是指出生或居住在亚洲的人。"
}, {
    B: "attendant",
    C: "[ə'tend(ə)nt]",
    D: "n.服务员，侍者；adj.伴随的",
    E: "at+ten+dant",
    F: "at在(熟词)+ten十(熟词)+dant蛋挞(拼音)",
    G: "服务员在桌子上放了十个蛋挞",
    H: "My friend is an attendant.",
    I: "我的朋友是一名服务员。"
}, {
    B: "criticize",
    C: "['krɪtɪsaɪz]",
    D: "vt.评论，批评",
    E: "critic+ize",
    F: "critic评论家(熟词)+ize艾滋(谐音)",
    G: "评论家在评论艾滋病",
    H: "Would you like to read and criticize my new novel?",
    I: "您愿意阅读并评论一下我的新小说？"
}, {
    B: "elevator",
    C: "['elɪveɪtə]",
    D: "n.电梯",
    E: "ele+vator",
    F: "ele饿了(拼音)+vator维特(谐音)",
    G: "饿了的维特坐在电梯里",
    H: "I go up by the elevator.",
    I: "我搭电梯上去。"
}, {
    B: "globe",
    C: "[gləʊb]",
    D: "n.地球，地球仪",
    E: "glo+be",
    F: "glo910(象形)+be(e)蜜蜂(熟词)",
    G: "910只蜜蜂飞遍地球",
    H: "We use a globe in our geography class.",
    I: "我们在地理课上使用地球仪。"
}, {
    B: "graduate",
    C: "['grædʒʊət]",
    D: "n.毕业生，研究生",
    E: "gr+adu+ate",
    F: "gr工人(拼音)+adu阿杜(拼音)+ate吃(熟词)",
    G: "工人阿杜吃完这顿就是毕业生了",
    H: "In 1973, the first Open University graduates received their degrees.  ",
    I: "1973年，第一批开放大学的毕业生获得了学位。"
}, {
    B: "noon",
    C: "[nu:n]",
    D: "n.中午，正午",
    E: "no+on",
    F: "no不+on上面",
    G: "中午很热不能在上面",
    H: "It is past noon.",
    I: "现在已过中午。"
}, {
    B: "poster",
    C: "['pəʊstə]",
    D: "n.海报，招贴",
    E: "post+er",
    F: "post邮件(熟词)+er儿(拼音)",
    G: "邮件里是儿子的海报",
    H: "I want to buy some posters.",
    I: "我想去买些海报。"
}, {
    B: "semester",
    C: "[sɪ'mestə(r)]",
    D: "n.学期，半学年",
    E: "se+me+s+ter",
    F: "se色(拼音)+me我(熟词)+s5(象形)+ter天鹅肉(拼音)",
    G: "这学期色狼请我吃了5吨天鹅肉",
    H: "I'm going to take a course in applied mathematics this semester. ",
    I: "我这学期打算学习应用数学课程。"
}, {
    B: "sincerely",
    C: "[sɪn'sɪəlɪ]",
    D: "adv.真诚地，真挚地",
    E: "sincere+ly",
    F: "sincere真诚的(熟词)+ly老爷(拼音)",
    G: "这是一位真诚的老爷",
    H: "I sincerely hope that you can be here.",
    I: "我衷心希望你能来。"
}, {
    B: "strategy",
    C: "['strætədʒɪ]",
    D: "n.战略，策略",
    E: "str+ate+gy",
    F: "str石头人(拼音)+ate吃(熟词)+gy公园(拼音)",
    G: "石头人吃饭后去公园制定战略",
    H: "What should our marketing strategy have achieved?",
    I: "我们的销售策略应该取得了哪些成果呢？"
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
    B: "dormitory",
    C: "['dɔ:mətrɪ]",
    D: "n.宿舍，集体寝室",
    E: "dor+mi+to+ry",
    F: "dor多(谐音)+mi米(拼音)+to去(熟词)+ry人妖(拼音)",
    G: "多米居然去了人妖的宿舍",
    H: "The girls planned a midnight feast in the dormitory.",
    I: "那些女生计划在宿舍里举办一个午夜聚餐。"
}, {
    B: "banker",
    C: "['bæŋkə(r)]",
    D: "n.银行家，银行高级职员",
    E: "bank+er",
    F: "bank银行(熟词)+er儿(拼音)",
    G: "在银行工作的儿子成了银行家",
    H: "He has applied to the banker for a loan.",
    I: "他向银行家请求贷款。"
}, {
    B: "senior",
    C: "[ˈsi:nɪə(r)]",
    D: "adj.年长的，高年级的，高级的",
    E: "sen+i+or",
    F: "sen森(拼音)+i我(熟词I)+or偶人(拼音)",
    G: "森林里我遇到一个年长的偶人",
    H: "She is a senior patient.",
    I: "她是一位高龄患者。"
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
    B: "pierce",
    C: "[pɪəs]",
    D: "vt.刺穿，洞察，响彻",
    E: "pier+ce",
    F: "pier皮尔+ce厕",
    G: "皮尔把厕所的墙刺穿了",
    H: ` The knife did not pierce very deeply. 
`,
    I: "刀扎得不很深。"
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
    B: "burial",
    C: "['berɪəl]",
    D: "n.葬礼，埋葬",
    E: "buri+al",
    F: "buri不日+al阿狸",
    G: "不日，阿狸参加了葬礼",
    H: "The estimated  time of burial was placed in the early  Tang.",
    I: "埋藏的时间估计在唐朝早期。"
}, {
    B: "license",
    C: "['laɪsns]",
    D: "vt.批准，许可，发许可证给；n.执照，许可证，特许",
    E: "li+ce+nse",
    F: "li里+ce厕+nse暖色",
    G: "批准里面的厕所装修成暖色调",
    H: "Please show me your driving license.",
    I: "请出示你的驾驶执照。"
}, {
    B: "accidental",
    C: "[æksɪ'dent(ə)l]",
    D: "adj.意外的，偶然的",
    E: "accident+al",
    F: "accident事故(熟词)+al阿狸(拼音)",
    G: "一场意外事故导致阿狸瘫痪",
    H: `It was an accidental meeting.  
`,
    I: "这完全是一次偶然的相会。"
}, {
    B: "circle",
    C: "['sə:kl]",
    D: "n.圆圈",
    E: "cir+cle",
    F: "cir此人+cle常乐",
    G: "此人知足常乐所以胖得像圆圈",
    H: "She likes drawing circles.",
    I: "他喜欢画圆圈。"
}, {
    B: "believable",
    C: "[bɪ'lɪ:vəbl]",
    D: "adj.可信任的",
    E: "believ+able",
    F: "believ(e)相信+able能干的",
    G: "我相信这个能干的人是可信任的",
    H: "This book is full of believable, interesting characters.",
    I: "这本书里充满了真实可信的有趣人物。"
}, {
    B: "tradition",
    C: "[trə'dɪʃ(ə)n]",
    D: "n.传统，风俗",
    E: "tr+adi+tion",
    F: "tr土人(拼音)+adi阿弟(拼音)+tion神(谐音)",
    G: "土人向阿弟和神讲解传统风俗",
    H: "We respect tradition but will not be controlled by it.",
    I: "我们尊重传统，但不被传统所束缚。"
}, {
    B: "napkin",
    C: "['næpkɪn]",
    D: "n.餐巾纸，餐巾",
    E: "nap+kin",
    F: "nap小睡+kin(g)国王",
    G: "小睡醒来后国王到处找餐巾纸",
    H: "This napkin is dirty.",
    I: "这条餐巾脏了。"
}, {
    B: "teammate",
    C: "['ti:mmeɪt] ",
    D: "n.同伴，伙伴",
    E: "team+mate",
    F: "team团队+mate助手",
    G: "团队助手是你的同伴",
    H: "He is my teammate.",
    I: "他是我的同伴。"
}, {
    B: "chemistry",
    C: "['kemɪstrɪ]",
    D: "n.化学",
    E: "che+mis+try",
    F: "che车(拼音)+mis(s)小姐(熟词)+try尝试(熟词)",
    G: "车上的小姐在尝试学化学",
    H: "I prefer chemistry to physics.",
    I: "我喜欢化学多于物理。"
}, {
    B: "electronic",
    C: "[ɪlek'trɔnɪk]",
    D: "adj.电子的",
    E: "elect+ron+ic",
    F: "elect选举(熟词)+ron容(拼音)+icIC卡(编码)",
    G: "选举很容易因为IC卡是电子的",
    H: "The first electronic computer was called ENICA.	",
    I: "第一台电子计算机叫做ENICA。"
}, {
    B: "sadness",
    C: "['sædnəs]",
    D: "n.悲伤，悲哀",
    E: "sad+ne+ss",
    F: "sad悲伤的(熟词)+ne哪(吒)(拼音)+ss两个美女(编码)",
    G: "悲伤的哪吒打得两个美女更悲伤",
    H: "He felt a great sadness for this little girl. ",
    I: "他为这个小女孩深感悲伤。"
}, {
    B: "Britain",
    C: "['brɪt(ə)n]",
    D: "n.英国，不列颠",
    E: "Br+i+tain",
    F: "Br病人(拼音)+i骨头(编码)+tain疼(谐音)",
    G: "去了英国病人的骨头就会疼",
    H: "He is the richest person in Britain.",
    I: "他是英国首富。"
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
    B: "process",
    C: "['prəʊses]",
    D: "vt.处理，加工；n.过程，程序，步骤",
    E: "pro+ce+ss",
    F: "pro飘柔(拼音)+ce厕(拼音)+ss两个美女(编码)",
    G: "飘柔在厕所被两个美女处理了",
    H: "The factory processes leather.",
    I: "这个工厂加工皮革。"
}, {
    B: "coal",
    C: "[kəʊl]",
    D: "n.煤，煤块",
    E: "co+al",
    F: "co一氧化碳(编码)+al阿狸(拼音)",
    G: "煤燃烧产生的一氧化碳毒死了阿狸",
    H: "I put more coal on the fire.",
    I: "我往火里再加了些煤。"
}, {
    B: "creativity",
    C: "[ˌkrɪ:eɪ'tɪvɪtɪ]",
    D: "n.创造力，创造性",
    E: "creativ+it+y",
    F: "creativ(e)有创造力的(熟词)+itIT(编码)+y树杈(编码)",
    G: "有创造力的IT男爬上树杈写程序",
    H: "How do you encourage creativity and innovation in your home?",
    I: "在你的家里，你怎么鼓励创新和创造性？"
}, {
    B: "agreement",
    C: "[əˈgri:mənt]",
    D: "n.同意，一致",
    E: "agree+ment",
    F: "agree同意(熟词)+ment门徒(拼音)",
    G: "门徒都一致同意签定协议",
    H: "Are we in agreement about the price?",
    I: "对这个价格我们是否意见一致？"
}, {
    B: "ancestor",
    C: "['ænsestə]",
    D: "n.祖先，始祖",
    E: "an+ce+st+or",
    F: "an一个(熟词)+ce测(拼音)+st石头(拼音)+or偶人(拼音)",
    G: "我们的祖先是一个喜欢测量石头的偶人",
    H: `This machine is the ancestor of the modern computer.  
`,
    I: "这台机器是现代电脑的始祖。"
}, {
    B: "ecosystem",
    C: "['i:kəʊsɪstəm]",
    D: "n.生态系统",
    E: "eco+system",
    F: "eco生态(词缀)+system系统(熟词)",
    G: "生态系统快失去平衡了",
    H: `What about the ecosystem of a city?
 					`,
    I: "一个城市的生态系统是怎样的？"
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
    B: "website",
    C: "['websaɪt]",
    D: "n.网站",
    E: "web+site",
    F: "web网+site地点",
    G: "这个网站可搜到热门旅游地点",
    H: "You can find more information on the website.",
    I: "从这个网站你能找到更多信息。"
}, {
    B: "normally",
    C: "['nɔ:məlɪ]",
    D: "adv.通常地，正常地，平常地",
    E: "normal+ly",
    F: "normal正常的(熟词)+ly老爷(拼音)",
    G: "精神正常时老爷通常很友善",
    H: "Is the phone working normally again?",
    I: "这部电话又能正常使用了吗？"
}, {
    B: "hoax",
    C: "[həʊks]",
    D: "vt./n.戏弄，欺骗",
    E: "ho+ax",
    F: "ho后(谐音)+ax斧头(熟词)",
    G: "王后拿着斧头戏弄人",
    H: "I wish this was a hoax.",
    I: "我希望这是一次恶作剧。"
}, {
    B: "laboratory",
    C: "[lə'bɒrətrɪ]",
    D: "n.实验室，研究室，实验楼",
    E: "labor+at+or+y",
    F: "labor劳工(熟词)+at在(熟词)+or偶人(拼音)+y衣叉(编码)",
    G: "实验室的劳工在研究偶人的衣叉",
    H: "Scientists work in the laboratory.",
    I: "科学家在实验室工作。"
}, {
    B: "brand",
    C: "[brænd]",
    D: "n.品牌，商标",
    E: "bra+nd",
    F: "bra胸罩(熟词)+nd难得(拼音)",
    G: "好品牌的胸罩很难得",
    H: "That  brand  dyes  well.",
    I: "那种牌子的染料染色好。"
}, {
    B: "gentleman",
    C: "['dʒent(ə)lmən]",
    D: "n.绅士，先生",
    E: "gentle+man",
    F: "gentle温和的+man男人",
    G: "举止温和的男人被称为绅士",
    H: "Try to be a gentleman.",
    I: "试着做个绅士。"
}, {
    B: "inspiration",
    C: "[ɪnspɪ'reɪʃ(ə)n]",
    D: "n.灵感，鼓舞",
    E: "inspir+ation",
    F: "inspir(e)鼓舞(熟词)+ation阿婶(谐音)",
    G: "鼓舞下阿婶，她就有灵感了",
    H: "I cannot write without inspiration. ",
    I: "没有灵感我写不出东西。"
}, {
    B: "perform",
    C: "[pəˈfɔ:m]",
    D: "vt.表演，履行；vi.行动",
    E: "per+form",
    F: "per每个+form表格",
    G: "每个表格都在表演",
    H: "This play was first performed in 411 BC.",
    I: "该剧于公元前411年首演。"
}, {
    B: "historian",
    C: "[hɪ'stɔ:rɪən]",
    D: "n.历史学家",
    E: "histor+i+an",
    F: "histor(y)历史+i我(I)+an一个",
    G: "研究历史的我是一个历史学家",
    H: "My father was a historian of repute. His speciality was the history of Germany.  ",
    I: "我的父亲是一名颇有名气的历史学家，他专门研究德国历史。"
}, {
    B: "divide",
    C: "[dɪ'vaɪd]",
    D: "vt.分，划分，使产生分歧",
    E: "di+vi+de",
    F: "di弟(拼音)+vi歪(谐音)+de德(拼音)",
    G: "弟弟在和歪脖子的德国人分蛋糕",
    H: "Divide the pizza with your sister.",
    I: "和你妹妹分吃这块披萨。"
}, {
    B: "Mexico",
    C: "['meksɪkəʊ]",
    D: "n.墨西哥（拉丁美洲国家）",
    E: "Me+xi+co",
    F: "Me我(熟词)+xi喜(拼音)+co可乐(熟词coke)",
    G: "在墨西哥我喜欢喝可乐",
    H: "I was to leave for Mexico City the next day.	",
    I: "明天我要离开去墨西哥市。"
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
    B: "coast",
    C: "[kəʊst]",
    D: "n.海岸，滑坡",
    E: "co+as+t",
    F: "co可乐(熟词coke)+as像..一样(熟词)+t踢(谐音)",
    G: "可乐像球一样被踢到了海岸",
    H: "They walked on the coast.",
    I: "他们沿岸散步。"
}, {
    B: "lantern",
    C: "['læntən]",
    D: "n.灯笼，提灯",
    E: "lan+tern",
    F: "lan烂(拼音)+tern疼(谐音)",
    G: "灯笼烂了好心疼",
    H: "I made a lantern. ",
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
    B: "instrument",
    C: "['ɪnstrʊm(ə)nt]",
    D: "n.乐器，仪器，工具",
    E: "in+stru+ment",
    F: "in里面(熟词)+stru死抓(谐音)+ment门徒(拼音)",
    G: "在里面死抓门徒学乐器",
    H: "He can play nearly every musical instrument.",
    I: "他几乎能演奏每一件乐器。"
}, {
    B: "professional",
    C: "[prə'feʃ(ə)n(ə)l]",
    D: "adj.职业的，专门的",
    E: "pro+fession+al",
    F: "pro飘柔(拼音)+fession飞神(谐音)+al阿狸(拼音)",
    G: "卖飘柔的飞神是阿狸的职业的身份",
    H: "Most of the people on the course were professional women.",
    I: "参加本课程的大多数人是职业女性。"
}, {
    B: "relief",
    C: "[rɪ'liːf]",
    D: "n.轻松，宽慰，减轻",
    E: "re+lief",
    F: "re热(拼音)+lief礼服(谐音)",
    G: "热的礼服穿着让人感到轻松",
    H: "The pills gave her some relief.",
    I: "药片减轻她一些痛苦。"
}, {
    B: "electricity",
    C: "[ˌɪlek'trɪsɪtɪ]",
    D: "n.电力，电流",
    E: "electric+ity",
    F: "electric电的(熟词)+ity议题(谐音)",
    G: "他提出电力相关议题",
    H: "The electricity had been cut off.",
    I: "停电了。"
}, {
    B: "clay",
    C: "[kleɪ]",
    D: "n.黏土",
    E: "c+lay",
    F: "c月(编码)+lay放置(熟词)",
    G: "把黏土做的月牙放置在那里",
    H: "Bricks are made from clay. ",
    I: "砖是用黏土制成的。"
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
    B: "wooden",
    C: "['wʊd(ə)n]",
    D: "adj.木制的",
    E: "w+oo+den",
    F: "w皇冠(编码)+oo望远镜(象形)+den凳(谐音)",
    G: "木制的皇冠和望远镜放在凳子上了",
    H: "The house was surrounded by a tall, wooden fence. ",
    I: "这所房子被一道高高的木制篱笆围了起来。"
}, {
    B: "fairy",
    C: "['feərɪ]",
    D: "n.仙女，小精灵",
    E: "f+ai+ry",
    F: "f斧头(编码)+ai爱(拼音)+ry人妖(拼音)",
    G: "仙女被斧头砸中后爱上了人妖",
    H: "Please  retell  the  fairy  story  in  English.",
    I: "请用英语复述这篇童话故事。"
}, {
    B: "spaghetti",
    C: "[spə'getɪ]",
    D: "n.意大利式细面条",
    E: "spa+gh+et+ti",
    F: "spa水疗(熟词)+gh干活(拼音)+et外星人(编码)+ti踢(拼音)",
    G: "水疗馆干活的外星人踢走了意大利细面条",
    H: "I like hot dogs more than spaghetti. ",
    I: "比起意大利细面条，我更喜欢吃热狗。"
}, {
    B: "Colombia",
    C: "[kə'lʌmbɪə]",
    D: "n.哥伦比亚（南美洲国家）",
    E: "Colo+m+bia",
    F: "Colo(r)颜色(熟词)+m麦当劳(编码)+bia表(拼音)",
    G: "哥伦比亚彩色的麦当劳里卖表",
    H: "Colombia's main crop is coffee.",
    I: "哥伦比亚的主要作物是咖啡。"
}, {
    B: "goddess",
    C: "[ˈɡɒdes]",
    D: "n.女神",
    E: "god+de+ss",
    F: "god神(熟词)+de的(拼音)+ss两个美女(编码)",
    G: "拜神的两个美女变成了女神",
    H: "She dreamed of becoming a Hollywood screen goddess.",
    I: "她梦想成为好莱坞的银幕女神。"
}, {
    B: "scoop",
    C: "[sku:p]",
    D: "n.勺子，抢先获得的新闻、利润等，铲子",
    E: "sc+oo+p",
    F: "sc商场(拼音)+oo望远镜(象形)+p皮鞋(编码)",
    G: "用勺子在商场换了望远镜和皮鞋",
    H: "She gave him an extra scoop of ice cream.",
    I: "她多给他加了一勺冰激凌。"
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
    B: "Mars",
    C: "[mɑ:z]",
    D: "n.火星",
    E: "M+ar+s",
    F: "M麦当劳(编码)+ar矮人(拼音)+s美女(编码)",
    G: "麦当劳里的矮人和美女私奔到火星",
    H: "Is there life on Mars?",
    I: "火星上有生物吗？"
}, {
    B: "interest",
    C: "['ɪnt(ə)rɪst]",
    D: "n.利息，有趣",
    E: "inte+rest",
    F: "inte英特(谐音)+rest休息(熟词)",
    G: "英特休息时算借钱的利息",
    H: "The money was repaid with interest.",
    I: "这笔钱是带息偿还的。"
}, {
    B: "flame",
    C: "[fleɪm]",
    D: "n.火焰，光辉，热情",
    E: "fl+a+me",
    F: "fl俘虏(拼音)+a苹果(编码)+me我(熟词)",
    G: "俘虏摘苹果时我点燃了火焰",
    H: "The plane crashed in ball of flame.",
    I: "飞机撞毁后，烧起一个火球。"
}, {
    B: "century",
    C: "['sentʃuri]",
    D: "n.世纪",
    E: "cen+tu+ry",
    F: "cen森(谐音)+tu土(拼音)+ry人妖(拼音)",
    G: "上世纪的森林里有土著人妖",
    H: "Dr.Tom lived to the 16th century.",
    I: "汤姆博士生活在16世纪。"
}, {
    B: "recite",
    C: "[rɪ'saɪt]",
    D: "vt.背诵，叙述，列举；vi.背诵，叙述",
    E: "reci+te",
    F: "reci热词+te特",
    G: "热词特难背诵",
    H: "They recite texts to one another.",
    I: "他们互相背诵课文。"
}, {
    B: "mainly",
    C: "['meɪnlɪ]",
    D: "adv.主要地，大体上",
    E: "main+ly",
    F: "main主要的(熟词)+ly老爷(拼音)",
    G: "主要是因为老爷爱骂人",
    H: "It is mainly because of my fault.",
    I: "这主要是由于我的过错。"
}, {
    B: "republic",
    C: "[rɪ'pʌblɪk]",
    D: "n.共和国，共和政体",
    E: "re+public",
    F: "re热(拼音)+public公众(熟词)",
    G: "热血公众成立了共和国",
    H: "In 1918, Austria became a republic. ",
    I: "1918年，奥地利成为共和国。"
}, {
    B: "easy-going",
    C: "[ˌi:zi:'gəuiŋ]",
    D: "adj.随和的，容易相处的",
    E: "easy+going",
    F: "easy容易的+going进展",
    G: "随和的人很容易把工作做出进展",
    H: "He was easy-going and good-natured.",
    I: "他随和且脾气好。"
}, {
    B: "rude",
    C: "[ru:d]",
    D: "adj.无礼的，粗鲁的",
    E: "ru+de",
    F: "ru入+de的",
    G: "进入房间的男人粗暴无礼",
    H: "He is rude to her friends.",
    I: "他对她的朋友很无礼。"
}, {
    B: "shelter",
    C: "['ʃeltə(r)]",
    D: "n.隐蔽处，掩蔽，庇护",
    E: "she+lt+er",
    F: "she她(熟词)+lt老头(拼音)+er儿(拼音)",
    G: "在隐蔽处她被老头的儿子吓到了",
    H: "Refugees need food and shelter.",
    I: "难民需要食物和住所。"
}, {
    B: "sort",
    C: "[sɔ:t]",
    D: "vt.分类，整理；n.种类，类别",
    E: "so+rt",
    F: "so50(象形)+rt软糖(拼音)",
    G: "把50颗软糖分类",
    H: "What sort of book do you want?",
    I: "你要哪一类的书？"
}, {
    B: "German",
    C: "['dʒɜːmən]",
    D: "adj.德国的，德语的，德国人的",
    E: "Ge+r+man",
    F: "Ge哥(拼音)+r草(编码)+man男人(熟词)",
    G: "哥哥旁边吃草的男人是德国人",
    H: "Half of the books are in German.",
    I: "这些书有一半是德语的。"
}, {
    B: "law",
    C: "[lɔ:]",
    D: "n.法律，法规，法学",
    E: "la+w",
    F: "la拉(拼音)+w皇冠(编码)",
    G: "手拉手去偷皇冠触犯了法律",
    H: "He is studying law.",
    I: "他在研读法学。"
}, {
    B: "lay",
    C: "[leɪ]",
    D: "vt.放置，铺，产卵；adj.外行的",
    E: "l+ay",
    F: "l棍子(编码)+ay阿姨(拼音)",
    G: "棍子被阿姨放置在地上",
    H: "He laid a hand on my arm.",
    I: "他把手搭在我的胳膊上。"
}, {
    B: "examine",
    C: "[ɪɡ'zæmɪn]",
    D: "vt.调查，检查",
    E: "ex+a+mine",
    F: "ex前夫(熟词)+a苹果(编码)+mine我的(熟词)",
    G: "调查前夫的苹果树是我的主意",
    H: "The doctor examined her carefully.",
    I: "医生仔细检查了她的身体。"
}, {
    B: "achieve",
    C: "[ə'tʃi:v]",
    D: "vt.实现，取得，获得",
    E: "a+chi+eve",
    F: "a一(熟词)+chi吃(拼音)+eve前夕(熟词)",
    G: "一个吃货在圣诞前夕实现减肥目标",
    H: "He had finally achieved success.",
    I: "他终于获得了成功。"
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
    B: "quality",
    C: "[ˈkwɒləti]",
    D: "n.质量，品质，性质",
    E: "qu+ali+ty",
    F: "qu去(拼音)+ali阿狸(拼音)+ty提(谐音)",
    G: "去阿狸那里提的货质量很好",
    H: "Everyone can greatly improve the quality of life.",
    I: "人人都能大幅提高生活质量。"
}, {
    B: "accent",
    C: "[ˈæksənt]",
    D: "n.口音，重音",
    E: "ac+cent",
    F: "ac艾克(谐音)+cent一分钱(熟词)",
    G: "艾克在说一分钱这个单词时口音很重",
    H: "She spoke English with an accent.",
    I: "她说英语带有口音。"
}, {
    B: "vocabulary",
    C: "[və(ʊ)'kæbjʊlərɪ]",
    D: "n.词汇，词表",
    E: "voca+bula+ry",
    F: "voca我开(谐音)+bula布拉(拼音)+ry日语(拼音)",
    G: "我开始教布拉学习日语词汇",
    H: "There is a vocabulary at the back of our English book.",
    I: "我们英语课本的后面附有词汇表。"
}, {
    B: "marry",
    C: "['mæri]",
    D: "vi./vt.（和某人）结婚，嫁，娶",
    E: "carry",
    F: "carry携带",
    G: "携带戒指去麦当劳(m)结婚",
    H: "Will you marry me?",
    I: "我们结婚好吗？"
}, {
    B: "blanket",
    C: "['blæŋkɪt]",
    D: "n.毯子，毛毯",
    E: "blank+et",
    F: "blank空白的(熟词)+et外星人(编码)",
    G: "眼前一片空白的外星人盖着毯子",
    H: "They rolled the child up in a blanket.",
    I: "他们用毯子把孩子裹了起来。"
}, {
    B: "rescue",
    C: "['reskju:]",
    D: "vt./n.营救，援救",
    E: "res+cu+e",
    F: "res热搜+cu醋+e鹅",
    G: "热搜榜首是掉醋缸的鹅被营救的新闻",
    H: "He dived from the bridge to rescue the drowning child.",
    I: "他从桥上跳入水中去抢救那溺水儿童。"
}, {
    B: "violence",
    C: "['vaɪələns]",
    D: "n.暴力，猛烈，激烈",
    E: "violen+ce",
    F: "violen(t)暴力的(熟词)+ce册(拼音)",
    G: "暴力的他撕掉了册子",
    H: "The wind blew with great violence.",
    I: "风异常猛烈地吹着。"
}, {
    B: "brick",
    C: "[brɪk]",
    D: "n.砖块，砖",
    E: "b+ri+ck",
    F: "b蜜蜂(熟词bee)+ri日(拼音)+ck厨师(熟词cook)",
    G: "蜜蜂看见日光下的厨师在搬砖块",
    H: "There are three bricks on the ground.",
    I: "地上有3块砖。"
}, {
    B: "husband",
    C: "['hʌzbənd]",
    D: "n.丈夫",
    E: "hus+band",
    F: "hus护士+band绊倒",
    G: "护士绊倒了她的丈夫",
    H: "This is my husband.",
    I: "这是我丈夫。"
}, {
    B: "gradually",
    C: "['grædʒʊlɪ]",
    D: "adv.逐渐地，渐渐地",
    E: "gradual+ly",
    F: "gradual逐渐的(熟词)+ly老爷(拼音)",
    G: "少爷逐渐变成了老爷",
    H: "Gradually it gets dark.",
    I: "渐渐地天黑了。"
}, {
    B: "entire",
    C: "[ɪn'taɪə]",
    D: "adj.全部的，整个的，全体的",
    E: "en+tire",
    F: "en鹰(谐音)+tire疲劳(熟词)",
    G: "全部的鹰一起追踪疲劳的兔子",
    H: "She travelled with her entire family.",
    I: "她与她的全部家人去旅行。"
}, {
    B: "period",
    C: "['pɪərɪəd]",
    D: "n.期间，周期",
    E: "pe+rio+d",
    F: "pe体育课(编码)+rio鸡尾酒(编码)+d弟(编码)",
    G: "体育课期间鸡尾酒被弟弟喝光了",
    H: "There were many important events in this period.                    					 ",
    I: "在这一时期里发生了许多重大的事件。"
}, {
    B: "prevent",
    C: "[prɪ'vent]",
    D: "vt.阻止，预防",
    E: "pr+event",
    F: "pr仆人(拼音)+event事件(熟词)",
    G: "仆人阻止了杀人事件的发生",
    H: "A dentist may decide to extract the tooth to prevent recurrent trouble. ",
    I: "牙医可能会决定拔掉那颗牙，以免反复发作。"
}, {
    B: "key",
    C: "[ki:]",
    D: "n.钥匙，键盘；adj.关键的",
    E: "key",
    F: "key可以",
    G: "这把钥匙可以开这把锁",
    H: "He concealed the key inside his tie.",
    I: "他把钥匙藏在领带里面。"
}, {
    B: "normal",
    C: "['nɔ:m(ə)l]",
    D: "adj.正常的，正规的；n.正常，标准，常态",
    E: "nor+mal",
    F: "nor也不(熟词)+mal马路(拼音)",
    G: "正常情况下我也不走马路",
    H: "Everything is normal here.",
    I: "这里一切正常。"
}, {
    B: "supply",
    C: "[sə'plaɪ]",
    D: "vt.提供，供应，供给；n.供应量，供给量，储备",
    E: "su+pp+ly",
    F: "su素+pp婆婆+ly老爷",
    G: "提供素菜给婆婆的是老爷",
    H: "The school supplies books for the children.",
    I: "学校为儿童提供书本。"
}, {
    B: "thick",
    C: "[θɪk]",
    D: "adj.厚的，稠密的",
    E: "th+ic+k",
    F: "th土豪(拼音)+icIC卡(编码)+k国王(编码king）",
    G: "土豪把一沓很厚的IC卡送给国王",
    H: "The folder was two inches thick.",
    I: "那个文件夹有两英寸厚。"
}, {
    B: "recognize",
    C: "['rekəɡnaɪz]",
    D: "vt.识别，认出，承认",
    E: "re+co+gn+ize",
    F: "re热(拼音)+co可乐(熟词coke)+gn钙奶(拼音)+ize艾滋(谐音)",
    G: "机器识别出热可乐和钙奶含有艾滋病毒",
    H: "I recognized him as soon as he came in the room.",
    I: "他一进屋我就认出了他。"
}, {
    B: "nation",
    C: "['neɪʃ(ə)n]",
    D: "n.国家，国民",
    E: "na+tion",
    F: "na那(拼音)+tion神(谐音)",
    G: "那个神是我们国家的",
    H: "Australia is an English speaking nation. ",
    I: "澳大利亚是一个讲英语的国家。"
}, {
    B: "shortcoming",
    C: "['ʃɔ:tkʌmɪŋ]",
    D: "n.缺点",
    E: "short+coming",
    F: "short短的+coming来",
    G: "他的缺点是腿短，走过来时太慢了",
    H: "That's his shortcoming.",
    I: "那是他的缺点。"
}, {
    B: "principle",
    C: "['prɪnsəpl]",
    D: "n.原则，原理，规范",
    E: "pr+in+ci+ple",
    F: "pr仆人(拼音)+in里(熟词)+ci瓷(拼音)+ple破了(拼音)",
    G: "讲原则的仆人承认里面的真瓷器已经破了",
    H: "The principle behind it is very simple.",
    I: "其中的原理十分简单。"
}, {
    B: "selfish",
    C: "['selfɪʃ]",
    D: "adj.自私的",
    E: "sel+fish",
    F: "sel(l)卖+fish鱼",
    G: "卖鱼的商人很自私",
    H: "I think I've been very selfish.",
    I: "我觉得我一直很自私。"
}, {
    B: "disaster",
    C: "[dɪ'zɑ:stə]",
    D: "n.灾难，灾祸",
    E: "dis+as+ter",
    F: "dis的士(拼音)+as像(熟词)+ter天鹅肉(拼音)",
    G: "灾难现场救援的的士像天鹅肉一样珍贵",
    H: `It was the second air disaster in the region in less than two months.
`,
    I: "这是不到两个月内该地区内的第二次空难。"
}, {
    B: "canal",
    C: "[kəˈnæl]",
    D: "n.运河，水道，管道",
    E: "can+al",
    F: "can能够(熟词)+al阿狸(拼音)",
    G: "阿狸能修建运河",
    H: "The canal is blocked.",
    I: "该运河阻塞不通。"
}, {
    B: "hopeful",
    C: "['həʊpfʊl]",
    D: "adj.有希望的",
    E: "hope+ful",
    F: "hope期待(熟词)+ful俘虏(拼音)",
    G: "期待出狱的俘虏觉得生活是有希望的",
    H: "I feel hopeful that we'll find a suitable house very soon.  ",
    I: "我对很快找到合适的房子抱有希望。"
}, {
    B: "trouble",
    C: "['trʌbl]",
    D: "n.麻烦，烦恼；vt.麻烦，使烦恼",
    E: "tr+ou+ble",
    F: "tr土人(拼音)+ou呕(拼音)+ble伯(谐音)",
    G: "土人呕吐到伯伯头上惹了麻烦",
    H: "Mike has a lot of trouble.",
    I: "Mike有很多麻烦。"
}, {
    B: "determine",
    C: "[dɪ'tə:mɪn]",
    D: "vt.决定，确定，下定决心",
    E: "de+ter+mine",
    F: "de弟(谐音)+ter天鹅肉(拼音)+mine我的(熟词)",
    G: "弟弟决定把天鹅肉分给我",
    H: "The size of the chicken pieces will determine the cooking time.",
    I: "鸡块的大小将决定烹饪时间的长短。"
}, {
    B: "persuade",
    C: "[pə'sweɪd]",
    D: "vt.说服，劝说",
    E: "per+su+ade",
    F: "per每(熟词)+su苏(拼音)+ade阿德(拼音)",
    G: "每次苏都能把阿德说服了",
    H: "My husband persuaded me to come.",
    I: "我丈夫说服我来的。"
}, {
    B: "enrich",
    C: "[ɪn'rɪtʃ]",
    D: "vt.充实，使丰富，使富有",
    E: "en+rich",
    F: "en鹰(谐音)+rich有钱的(熟词)",
    G: "过着充实生活的老鹰很有钱",
    H: `By identifying the purpose of your goals, you enrich your perspective.
 					`,
    I: "通过确定目标的用意，你就充实了你的愿景。"
}, {
    B: "entirely",
    C: "[ɪn'taɪəlɪ]",
    D: "adv.完全的，全部的",
    E: "en+tire+ly",
    F: "en摁(拼音)+tire累(熟词)+ly老爷(拼音)",
    G: "摁住劳累的老爷让他完全无法动弹",
    H: "I agree entirely.",
    I: "我完全同意。"
}, {
    B: "catfish",
    C: "['kætfɪʃ]",
    D: "n.鲶鱼",
    E: "cat+fish",
    F: "cat猫+fish鱼",
    G: "猫抓到的鱼是鲶鱼",
    H: "Why should we care about catfish? ",
    I: "我们为什么要关注鲶鱼。"
}, {
    B: "conquer",
    C: "['kɒŋkə]",
    D: "vt.征服",
    E: "con+que+r",
    F: "con康(谐音)+que缺(拼音)+r草(编码)",
    G: "征服别国时康熙缺少粮草",
    H: "We all have to conquer some fears.",
    I: "我们都必须克服某些恐惧。"
}, {
    B: "reliable",
    C: "[rɪ'laɪəb(ə)l]",
    D: "adj.可靠的，可信赖的",
    E: "re+li+able",
    F: "re热(拼音)+li丽(拼音)+able能够(熟词)",
    G: "可靠热心的丽丽能够胜任这份工作",
    H: "Judging by the ordinary standards, he was reliable.",
    I: "用一般标准来衡量，他是可信赖的。"
}, {
    B: "bend",
    C: "[bend]",
    D: "vt.使弯曲；vi.弯腰，弯身",
    E: "ben+d",
    F: "ben笨(拼音)+d弟(编码)",
    G: "笨蛋弟弟弯曲身体做运动",
    H: "I bent over and kissed her cheek.",
    I: "我弯腰亲吻了她的面颊。"
}, {
    B: "terror",
    C: "['terə(r)]",
    D: "n.惊恐，恐惧，恐怖的事",
    E: "te+rr+or",
    F: "te特(拼音)+rr两根草(编码)+or偶人(拼音)",
    G: "特别高的两根草下躲着的偶人很惊恐",
    H: "The war terror was honeycombed among the people.",
    I: "在民众中充满了战争的恐怖。"
}, {
    B: "boil",
    C: "[bɒɪl]",
    D: "vi.指（液体）沸腾，水开",
    E: "b6+oil",
    F: "b6(象形)+oil油(熟词)",
    G: "6桶油在沸腾",
    H: "The water in the pot boils.",
    I: "水壶里的水开了。"
}, {
    B: "suffering",
    C: "['sʌf(ə)rɪŋ]",
    D: "n.痛苦，苦难",
    E: "suffer+ing",
    F: "suffer遭受(熟词)+ing鹰(谐音)",
    G: "遭受老鹰袭击的人很痛苦",
    H: "It has caused terrible suffering to animals.",
    I: "那给动物们带来了可怕的灾难。"
}, {
    B: "devoted",
    C: "[dɪ'votɪd]",
    D: "adi.忠实的，深爱的",
    E: "de+vote+d",
    F: "de得(拼音)+vote选票(熟词)+d狗(编码dog)",
    G: "得到选票最多的狗很忠实",
    H: "When you can drag him away from his work, he can also be a devoted father.",
    I: "如果你能把他硬从工作中拉回来，他也会是个尽心尽责的父亲。"
}, {
    B: "beneath",
    C: "[bɪ'ni:θ]",
    D: "prep.在…之下",
    E: "ben+eat+h",
    F: "ben笨(拼音)+eat吃(熟词)+h椅子(编码)",
    G: "笨蛋吃东西时要趴在椅子",
    H: "On a shelf beneath he spotted a photo album.",
    I: "在下方的书架上他发现了一本相册。"
}, {
    B: "selfless",
    C: "['selflɪs]",
    D: "adj.无私的，忘我的",
    E: "self+less",
    F: "self自己+less少的",
    G: "为自己考虑少的人是无私的",
    H: "As a soldier, he showed selfless devotion to duty.",
    I: "作为战士，他表现出了对其天职的无私奉献。"
}, {
    B: "dialect",
    C: "['daɪəlekt]",
    D: "n.方言，土语，地方话",
    E: "dia+le+ct",
    F: "dia嗲+le乐+ct餐厅",
    G: "讲方言很嗲的乐乐正在餐厅吃饭",
    H: "They began to speak rapidly in dialect.",
    I: "他们开始叽里呱啦地说起地方话来。"
}, {
    B: "gradual",
    C: "[ˈgrædʒuəl]",
    D: "adj.逐渐的，逐步的",
    E: "gr+adu+al",
    F: "gr工人+adu阿杜+al阿狸",
    G: "工人阿杜和阿狸逐渐成了好朋友",
    H: "The roads are built to accommodate gradual temperature changes.  ",
    I: "修建这些道路时考虑到了温度的逐渐变化。"
}, {
    B: "partner",
    C: "['pɑ:tnə]",
    D: "n.搭档，合作者",
    E: "part+n+er",
    F: "part部分(熟词)+n门(编码)+er儿(拼音)",
    G: "一部分的铁门是儿子的搭档做的",
    H: "Clare is my tennis partner. ",
    I: "克莱尔是我的网球搭档。"
}, {
    B: "altitude",
    C: "['æltɪtju:d]",
    D: "n.高地，高处，海拔",
    E: "al+ti+tude",
    F: "al阿狸+ti踢+tude秃的",
    G: "阿狸把球踢到光秃的高地",
    H: "We are flying at an altitude of 6000 metres.",
    I: "我们的飞行高度是6000米。"
}, {
    B: "generous",
    C: "['dʒen(ə)rəs]",
    D: "adj.慷慨的，大方的",
    E: "ge+ne+rous",
    F: "ge哥+ne哪+rous肉丝",
    G: "慷慨的哥哥喂给哪吒好多肉丝",
    H: "He's generous and very nice.",
    I: "他很大方而且很友善。"
}, {
    B: "quake",
    C: "[kweɪk]",
    D: "n.地震",
    E: "qu+a+ke",
    F: "qu区(拼音)+a苹果(编码)+ke磕(拼音)",
    G: "地震区的苹果都磕破了",
    H: `The quake destroyed mud buildings in many remote villages.
`,
    I: "地震摧毁了许多偏远村庄的泥土房屋。"
}, {
    B: "lightning",
    C: "['laɪtnɪŋ]",
    D: "n.闪电",
    E: "light+ning",
    F: "light光(熟词)+ning宁(拼音)",
    G: "闪电的光划破宁静的天空",
    H: "One man died when he was struck by lightning.",
    I: "一个人遭雷击身亡。"
}, {
    B: "guidance",
    C: "[ˈgaɪdns]",
    D: "n.指导，引导，领导",
    E: "gui+dance",
    F: "gui鬼(拼音)+dance跳舞(熟词)",
    G: "鬼指导灵魂跳舞",
    H: "Parents need to provide their children with firm guidance.",
    I: "家长要对孩子有力地指导。"
}, {
    B: "check",
    C: "[tʃek]",
    D: "v.检查，核实",
    E: "che+ck",
    F: "che车(拼音)+ck蛋糕(熟词cake)",
    G: "检查车上的蛋糕是否还在",
    H: "I will check your keys.",
    I: "我将检查你的答案。"
}, {
    B: "extra",
    C: "['ekstrə]",
    D: "adj.额外的，外加的",
    E: "ex+tr+a",
    F: "ex前夫/妻(熟词)+tr土人(拼音)+a苹果(编码)",
    G: "前妻额外给了土人一个苹果",
    H: "She won't pay any extra money.",
    I: "她不会付任何额外费用。"
}, {
    B: "fool",
    C: "[fu:l]",
    D: "n.傻瓜，愚人；vi./vt.欺骗，愚弄",
    E: "foot",
    F: "foot脚",
    G: "傻瓜拿棍子(l)打自己的脚",
    H: "He's a fool if he thinks she still loves him. ",
    I: "如果他以为她还爱着自己，那他就是个傻瓜。"
}, {
    B: "farmyard",
    C: "['fɑ:mjɑ:d]",
    D: "n.农场，农家",
    E: "farm+yard",
    F: "farm农场+yard院子",
    G: "农场的院子里种满了花",
    H: "The road passes a farmyard.",
    I: "那条路经过一个农家场院。"
}, {
    B: "dusty",
    C: "['dʌstɪ]",
    D: "adj.落满灰尘的",
    E: "dust+y",
    F: "dust灰尘(熟词)+y衣叉(编码)",
    G: "落满灰尘的衣叉被我擦干净了",
    H: "It's very windy and dusty here in winter.",
    I: "这里冬天风沙很大。"
}, {
    B: "frequent",
    C: "['fri:kwənt]",
    D: "adj.时常发生的，经常的",
    E: "fre+que+nt",
    F: "fre夫人+que雀+nt奶糖",
    G: "夫人发现麻雀来家里啄奶糖是时常发生的",
    H: "Your shirts have faded from frequent washing.",
    I: "你的衬衣由于经常洗涤已经褪色。"
}, {
    B: "cyclist",
    C: "['saɪklɪst]",
    D: "n.骑自行车的人",
    E: "cycl+ist",
    F: "cycl(e)自行车(熟词)+ist...的人(词缀)",
    G: "骑自行车的人要注意安全",
    H: "I like making friends with cyclists.",
    I: "我喜欢和骑自行车的人做朋友。"
}, {
    B: "gossip",
    C: "['gɒsɪp]",
    D: "n.流言蜚语，闲话，爱说闲话的人；v.闲聊",
    E: "goss+ip",
    F: "goss9055(象形)+ipIP地址(编码)",
    G: "流言蜚语来自9055个不同IP地址",
    H: "She's a great one for idle gossip.",
    I: "她很喜欢说别人闲话。"
}, {
    B: "cruelty",
    C: "['krʊəltɪ]",
    D: "n.残忍，残酷",
    E: "cruel+ty",
    F: "cruel残忍的(熟词)+ty踢(谐音)",
    G: "这个残忍的人把他踢走了",
    H: `Britain had laws against cruelty to animals.
`,
    I: "英国曾有反对虐待动物的法律。"
}, {
    B: "journal",
    C: "['dʒɜ:n(ə)l]",
    D: "n.日记",
    E: "j+our+nal",
    F: "j钩子(编码)+our我们的(熟词)+nal拿了(拼音)",
    G: "谁用钩子把我们的日记拿走了",
    H: "He write journals everyday.",
    I: "他每天都写日记。"
}, {
    B: "Netherlands",
    C: "['neðələndz]",
    D: "n.荷兰",
    E: "Nether+lands",
    F: "Ne(i)ther都不+lands土地",
    G: "我们俩都不想去的地方就是荷兰",
    H: "The Netherlands is a lowlying country.  ",
    I: "荷兰是一个低地的国家。"
}, {
    B: "livelihood",
    C: "['laɪvlɪhʊd]",
    D: "n.谋生，生计",
    E: "live+li+hood",
    F: "live居住(熟词)+li里(拼音)+hood虎的(谐音)",
    G: "居住在里面的人以卖老虎的肉谋生",
    H: "It affords a livelihood to a great number of people.  ",
    I: "这给许多人提供了生计。"
}, {
    B: "native",
    C: "['neɪtɪv]",
    D: "n.本地人，土产，当地居民；adj.本地的，土著的，天然的",
    E: "na+tive",
    F: "na那(拼音)+tive踢我(谐音)",
    G: "那个踢我的人是本地人",
    H: "Our native land is as pretty as a picture. ",
    I: "祖国河山美丽如画。"
}, {
    B: "loneliness",
    C: "['ləʊnlɪnɪs]",
    D: "n.孤单，寂寞，孤独",
    E: "lone+li+ness",
    F: "lone孤单的(熟词)+li李(拼音)+ness尼斯(谐音)",
    G: "孤单的李雷和尼斯成了朋友",
    H: "I'm used to loneliness.",
    I: "我已习惯于孤独。"
}, {
    B: "afford",
    C: "[ə'fɔːd]",
    D: "vt.买得起，给予，提供",
    E: "af+ford",
    F: "af爱妃(拼音)+ford福特车(熟词Ford)",
    G: "我给爱妃买得起福特车",
    H: "Can we afford a new car?",
    I: "我们买得起一辆新车吗？"
}, {
    B: "league",
    C: "[li:g]",
    D: "n.联盟，同盟，联合会",
    E: "lea+gu+e",
    F: "lea利(熟词Lea)+gu姑(拼音)+e鹅(编码)",
    G: "利和姑姑的鹅结成联盟了",
    H: "Thus the first workers' league came into being.",
    I: "第一个工人联盟就这样诞生了。"
}, {
    B: "extreme",
    C: "[ɪk'striːm]",
    D: "adj.极端的，极度的；n.极端，末端",
    E: "ex+tre+me",
    F: "ex前夫(熟词)+tre(e)树(熟词)+me我(熟词)",
    G: "极端的前夫拿树扔我",
    H: "The policy was followed to an absurd extreme.",
    I: "这项政策被执行到了极端荒谬。"
}, {
    B: "imagine",
    C: "[ɪ'mædʒɪn]",
    D: "vt.想象猜想，臆断",
    E: "im+ag+in+e",
    F: "im姨母(谐音)+ag阿哥(拼音)+in里面(熟词)+e鹅(编码)",
    G: "姨母想象阿哥在里面抓鹅",
    H: "I cannot imagine the world without phone.",
    I: "我无法想象没有手机的世界。"
}, {
    B: "frightening",
    C: "['fraɪtnɪŋ]",
    D: "adj.令人恐惧的",
    E: "frighten+ing",
    F: "frighten惊吓(熟词)+ing鹰(谐音)",
    G: "受惊吓的鹰叫声令人恐惧",
    H: "It was a very frightening experience.",
    I: "那是一次非常令人恐惧的经历。"
}, {
    B: "determined",
    C: "[dɪ'tə:mɪnd]",
    D: "adj.坚决，有决心的",
    E: "determine+d",
    F: "determine决定(熟词)+d弟(编码)",
    G: "做决定的弟弟很坚决",
    H: "He made determined efforts to overcome the scandal.",
    I: "他作出了坚持不懈的努力去克服丑闻造成的不良影响。"
}, {
    B: "vote",
    C: "[vəʊt]",
    D: "vi./vt.投票，选举；n.选票，投票，投票权",
    E: "vo+te",
    F: "vo我(谐音)+te特(拼音)",
    G: "我特别想给政府投票",
    H: "They took a vote and decided not to do it.  ",
    I: "他们进行了表决并决定放弃。"
}, {
    B: "release",
    C: "[rɪ'liːs]",
    D: "vt.释放，发射，发表；n.释放，发布",
    E: "rel+ease",
    F: "rel热量(拼音)+ease减轻",
    G: "释放热量后痛苦就减轻了",
    H: "He still had a lot of pent-up anger to release. ",
    I: "他还有很多强压的愤怒要发泄。"
}, {
    B: "settle",
    C: "[ˈsetl]",
    D: "vi.解决，定居；vt.解决，安排",
    E: "se+tt+le",
    F: "se色(拼音)+tt两把伞(编码)+le了(拼音)",
    G: "色狼在两把伞下定居了",
    H: "One day I'll want to settle down and have a family. ",
    I: "总有一天，我会想安定下来，成个家。"
}, {
    B: "petrol",
    C: "['petr(ə)l]",
    D: "n.（英）汽油",
    E: "pet+rol",
    F: "pet宠物+rol(l)滚",
    G: "宠物滚到了汽油里",
    H: "The petrol is running out.",
    I: "汽油快要耗尽了。"
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
    B: "survivor",
    C: "[sə'vaɪvə]",
    D: "n.幸存者，生还者",
    E: "sur+vivo+r",
    F: "sur俗人(拼音)+vivo手机(熟词)+r草(编码)",
    G: "幸存者把俗人的vivo手机扔进草丛",
    H: `Officials said there were no survivors of the plane crash.
`,
    I: "官员们说这次飞机失事中没有幸存者。"
}, {
    B: "stubborn",
    C: "['stʌbən]",
    D: "adj.顽强的，顽固的，难处理的",
    E: "s+tub+born",
    F: "s5(象形)+tub浴缸(熟词)+born出生(熟词)",
    G: "这5个在浴缸出生的婴儿很顽强",
    H: "He is a stubborn character used to getting his own way.",
    I: "他性格固执，惯于一意孤行。"
}, {
    B: "peaceful",
    C: "['pi:sfʊl]",
    D: "adj.平静的，和平的，安宁的",
    E: "peace+ful",
    F: "peace平静(熟词)+ful俘虏(拼音)",
    G: "这个内心平静的俘虏爱好和平",
    H: "He has attempted to find a peaceful solution to the conflict.",
    I: "他曾试图找到一个解决冲突的和平的办法。"
}, {
    B: "recover",
    C: "[rɪˈkʌvə]",
    D: "vt./vi.恢复，复原",
    E: "re+cover",
    F: "re热(拼音)+cover覆盖(熟词)",
    G: "热天盖被子恢复得快",
    H: "He's still recovering from his operation.",
    I: "手术后，他仍在恢复之中。"
}, {
    B: "agog",
    C: "[əˈgɒg]",
    D: "adj./adv.热切的，兴奋的，渴望地",
    E: "ago+g",
    F: "ago以前(熟词)+g哥(拼音)",
    G: "哥哥以前总是热切地盼望假期到来",
    H: "The children were all agog to hear the story.  ",
    I: "孩子们都渴望着要听这个故事。"
}, {
    B: "injure",
    C: "['ɪndʒə]",
    D: "vt.伤害，损害",
    E: "in+ju+re",
    F: "in在里面(熟词)+ju局(拼音)+re热(拼音)",
    G: "里面的局里太热会对身体有伤害",
    H: "This incident could seriously injure the company’s reputation.",
    I: "这个事件能对公司名声造成巨大的损害。"
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
    B: "those",
    C: "[ðəʊz]",
    D: "adj.那些的；pron.那些",
    E: "th+o+se",
    F: "th土豪(拼音)+o蛋(编码)+se色(拼音)",
    G: "那些土豪卖的鸡蛋都是红色的",
    H: "I want to buy those books.",
    I: "我想买那些书。"
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
    B: "whose",
    C: "[hu:z]",
    D: "pron.谁的",
    E: "who+se",
    F: "who谁(熟词)+se色(拼音)",
    G: "谁穿红色衣服，奖金就是谁的",
    H: "Whose book is this?",
    I: "这本书是谁的？"
}, {
    B: "outstanding",
    C: "[aʊt'stændɪŋ]",
    D: "adj.杰出的，显著的，未解决的",
    E: "out+stand+ing",
    F: "out外面(熟词)+stand站立(熟词)+ing鹰(谐音)",
    G: "外面站着的那只鹰很杰出",
    H: "This is an outstanding example of strict economy.",
    I: "这是厉行节约的一个杰出范例。"
}, {
    B: "package",
    C: "['pækɪdʒ]",
    D: "n.包裹，包装盒，一组建议；vt.包装，把…装箱",
    E: "pack+age",
    F: "pack包裹+age年龄",
    G: "他把包裹送给年老的人",
    H: "He planked down the package. ",
    I: "他猛然放下包裹。"
}, {
    B: "particular",
    C: "[pəˈtɪkjələ(r)]",
    D: "adj.特别的，特殊的；n.细节，细目",
    E: "part+icu+lar",
    F: "part部分(熟词)+icu重症监护室(编码)+lar腊肉(拼音)",
    G: "部分在重症监护室吃腊肉的人很特别",
    H: "I have nothing particular to do this evening.",
    I: "今晚我没有什么特殊的事要做。"
}, {
    B: "politely",
    C: "[pə'laɪtlɪ]",
    D: "adv.有礼貌地，客气地",
    E: "polite+ly",
    F: "polite有礼貌的(熟词)+ly老爷(拼音)",
    G: "有礼貌地招待老爷",
    H: " I gave it back politely. ",
    I: "我很客气地把它还了回去。"
}, {
    B: "hunger",
    C: "['hʌŋgə]",
    D: "n.饥饿，欲望",
    E: "hun+ge+r",
    F: "hun馄(拼音)+ge哥(拼音)+r草(编码)",
    G: "饥饿时吃完馄饨哥哥才去拔草",
    H: "There are too many hungry people.",
    I: "世界上有太多的人在挨饿。"
}, {
    B: "impress",
    C: "[ɪm'pres]",
    D: "vt.使印象深刻，使铭记",
    E: "im+press",
    F: "im姨母(谐音)+press按(熟词)",
    G: "姨母按住的大蜘蛛让我印象深刻",
    H: "She did not impress me at all. ",
    I: "她没给我留下丝毫印象。"
}, {
    B: "information",
    C: "[ˌɪnfə'meɪʃn]",
    D: "n.资料，信息",
    E: "in+form+ation",
    F: "in里面(熟词)+form表格(熟词)+ation爱神(谐音)",
    G: "表格里有很多爱神的资料",
    H: "He collects a lot of information.",
    I: "他收集了很多信息。"
}, {
    B: "knowledgeable",
    C: "['nɒlɪdʒəb(ə)l]",
    D: "adj.知识渊博的，有见识的，聪明的",
    E: "knowledge+able",
    F: "knowledge知识+able能",
    G: "知识渊博的人很能干",
    H: "My dad is more knowledgeable than the average person.",
    I: "我爸爸比普通人在更有知识。"
}, {
    B: "litter",
    C: "['lɪtə]",
    D: "n.垃圾",
    E: "li+tt+er",
    F: "li李(拼音)+tt两把伞(编码)+er儿(拼音)",
    G: "李先生的两把伞被儿子当做垃圾扔了",
    H: "Don't throw litter about!",
    I: "别乱丢垃圾！"
}, {
    B: "many",
    C: "['menɪ]",
    D: "pron.很多，许多人；adj.许多的",
    E: "ma+ny",
    F: "ma妈+ny女友",
    G: "妈妈的女友很多",
    H: "She has many books.",
    I: "她有很多书。"
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
    B: "style",
    C: "[staɪl]",
    D: "n.风格，风度，类型",
    E: "s+ty+le",
    F: "s美女(编码)+ty太阳(拼音)+le乐(拼音)",
    G: "穿衣风格时尚的美女在太阳下很快乐",
    H: "I do not like his style.",
    I: "我不喜欢他的风格。"
}, {
    B: "sudden",
    C: "['sʌdn]",
    D: "adj.突然的",
    E: "sud+d+en",
    F: "sud苏丹(拼音)+d狗(编码dog)+en摁(拼音)",
    G: "突然把苏丹的狗摁倒",
    H: "He felt a sudden sense of calm, of contentment. ",
    I: "他突然感到一种安宁和满足。"
}, {
    B: "sweep",
    C: "[swi:p]",
    D: "vt./vi.打扫，清除，（风、汹涌的海水等）席卷",
    E: "sweet",
    F: "sweet甜的",
    G: "小甜心在打扫停车场(p)",
    H: "The owner of the store was sweeping his floor when I walked in.",
    I: "我进去的时候这家商店的店主正在扫地。"
}, {
    B: "theater",
    C: "['θɪətə]",
    D: "n.剧院，电影院",
    E: "the+at+er",
    F: "the这(熟词)+at在(熟词)+er儿(拼音)",
    G: "这个剧院在儿子家旁边",
    H: "Are you going to thee theater with me tonight?",
    I: "今晚你计划和我一块去电影院吗？"
}, {
    B: "devote",
    C: "[dɪ'vəut]",
    D: "vt.致力于，奉献",
    E: "de+vote",
    F: "de德(拼音)+vote投票(熟词)",
    G: "德国总统是民众投票选举出来致力于国家事业的",
    H: "He decided to devote the rest of his life to scientific investigation.",
    I: "他决定将自己的余生献给科学研究事业。"
}, {
    B: "pillow",
    C: "['pɪləʊ]",
    D: "n.枕头",
    E: "pill+ow",
    F: "pill药片(熟词)+owwo我(形似)",
    G: "药片被我放在枕头下面了",
    H: "She  fluffed  up the  pillow.",
    I: "她把枕头拍松。"
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
    B: "appreciate",
    C: "[ə'prɪ:ʃɪeɪt]",
    D: "vt.欣赏，感激，领会；vi.增值，升值",
    E: "app+re+ci+ate",
    F: "app手机应用(编码)+re热(拼音)+ci词(拼音)+ate吃(熟词)",
    G: "手机应用中最热门的背单词软件让吃货很欣赏",
    H: "In order to appreciate the novel, one must be able to enter the spirit of the work.",
    I: "要想欣赏这部小说，你必须领悟这部作品的精神。"
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
    B: "donate",
    C: "[dəʊ'neɪt]",
    D: "vt.捐赠",
    E: "do+nate",
    F: "do都+nate那特",
    G: "书本都是那个特务捐赠的",
    H: "Others donated secondhand clothes.",
    I: "其他人捐赠了一些旧衣服。"
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
    B: "greet",
    C: "[gri:t]",
    D: "vi./vt.迎接，问候",
    E: "gr+ee+t",
    F: "gr工人(拼音)+ee两只鹅(编码)+t伞(编码)",
    G: "工人让两只鹅打伞迎接你",
    H: "He greeted me at the door. ",
    I: "他在门口迎接我。"
}];

export default datas;
