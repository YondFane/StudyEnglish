// 高一必修
const datas = [{
    B: "reporter",
    C: "[rɪ'pɔ:tə]",
    D: "n.记者",
    E: "re+port+er",
    F: "re热(拼音)+port港口(熟词)+er儿(拼音)",
    G: "记者在大热天去港口采访了儿子",
    H: "He wants to be a reporter.",
    I: "他想成为一名记者。"
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
    B: "valley",
    C: "['vælɪ]",
    D: "n.山谷，流域，溪谷",
    E: "v+all+ey",
    F: "v维生素(编码)+all所有(熟词)+ey鳄鱼(拼音)",
    G: "维生素被所有的鳄鱼在山谷里吃掉了",
    H: "He has a large farm near the valley.",
    I: "他在山谷旁拥有一个大农场。"
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
    B: "finally",
    C: "['faɪnəlɪ]",
    D: "adv.最后，终于，决定性地",
    E: "fin+all+y",
    F: "fin贩(谐音)+all所有的(熟词)+y衣叉(编码)",
    G: "最后小贩卖光了所有的衣叉",
    H: "Finally, after an hour, I went up to Jeremy's room. ",
    I: "一个小时后，我终于去了杰里米的房间。"
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
    B: "waterfall",
    C: "['wɔ:təfɔ:l]",
    D: "n.瀑布",
    E: "water+fall",
    F: "water水+fall掉下来",
    G: "水从高处掉下来形成了瀑布",
    H: "Let's have our picnic by the waterfall.",
    I: "咱们在瀑布旁野餐吧！"
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
    B: "pack",
    C: "[pæk]",
    D: "n.背包，包装；vt.包装",
    E: "pa+ck",
    F: "pa趴+ck仓库",
    G: "趴在仓库找背包",
    H: "These books need to be packed into a box.",
    I: "这些书得装进箱子里。"
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
    B: "command",
    C: "[kə'mɑːnd]",
    D: "vi.指挥，命令，控制",
    E: "com+man+d",
    F: "com(e)来(熟词)+man男人(熟词)+d狗(编码dog)",
    G: "来了一个男人牵着狗在做指挥",
    H: "You should subject yourself to my command.",
    I: "你必须听从我的命令。"
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
    B: "found",
    C: "[faʊnd]",
    D: "vt.建立，建设",
    E: "fo+un+d",
    F: "fo佛(拼音)+un联合国(编码)+d狗(编码dog)",
    G: "佛在联合国建立了爱狗协会",
    H: "She founded the company in 1990.",
    I: "她于1990年成立这家公司。"
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
    B: "highway",
    C: "['haɪweɪ]",
    D: "n.（尤指城市间的）公路",
    E: "high+way",
    F: "high高的+way道路",
    G: "高处的那条道路是通向北京的公路",
    H: "He barreled along the highway.          					 ",
    I: "他沿公路高速行驶。"
}, {
    B: "power",
    C: "['paʊə(r)]",
    D: "n.能量",
    E: "po+we+r",
    F: "po坡(拼音)+we我们(熟词)+r草(编码)",
    G: "山坡上的我们像小草一样充满了能量",
    H: "The stars are full of vast power.",
    I: "恒星饱含了巨大的能量。"
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
    B: "reward",
    C: "[riˈwɔ:d]",
    D: "n./vt.赏金，报酬，报答",
    E: "re+ward",
    F: "re热(拼音)+ward病房(熟词)",
    G: "太热了我们去病房领赏金吧",
    H: "He will expect some reward after working so hard. ",
    I: "他工作很努力，会得到报偿的。"
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
    B: "teenager",
    C: "['ti:neɪdʒə]",
    D: "n.少年，青少年",
    E: "t+ee+nager",
    F: "t伞(编码)+ee眼睛(象形)+nager那个人(拼音)",
    G: "少年打着伞，眼睛看不到那个人",
    H: "He is a teenager.",
    I: "他是个青少年。"
}, {
    B: "useless",
    C: "['ju:sləs]",
    D: "adj.无用的，无效的",
    E: "use+less",
    F: "use使用+less较少",
    G: "这个无用的东西使用得较少",
    H: "The car is useless.",
    I: "这辆小汽车没有用处。"
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
    B: "earthquake",
    C: "['ə:θkweɪk]",
    D: "n.地震",
    E: "earth+quake",
    F: "earth地球+quake震动",
    G: "地球震动是地震",
    H: "An earthquake hit the city.",
    I: "这座城市发生了地震。"
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
    B: "forecast",
    C: "['fɔ:kɑ:st]",
    D: "n./vt.预报，预测",
    E: "fore+cast",
    F: "fore在前的+cast抛",
    G: "在前面抛个石子做预报",
    H: "The interest is in line with the forecast.",
    I: "利率与预告的一致。"
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
    B: "detail",
    C: "['dɪi:teɪl]",
    D: "n.细节，详情",
    E: "de+tail",
    F: "de弟(谐音)+tail尾巴(熟词)",
    G: "弟弟说了狐狸露尾巴的细节",
    H: `The details of the plan should be discussed again.
`,
    I: "计划的细节还需要再讨论一下。"
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
    B: "active",
    C: "['æktɪv]",
    D: "adj.积极的，活跃的，主动的",
    E: "act+i+ve",
    F: "act表演(熟词)+i我(熟词I)+ve维E(编码)",
    G: "表演时我在积极地推销维E",
    H: "You have an active mind.",
    I: "你的思想很积极。"
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
    B: "fluent",
    C: " ['flu:ənt]",
    D: "adj.流利的，流畅的",
    E: "flue+nt",
    F: "flue烟道(熟词)+nt奶糖(拼音)",
    G: "吃了烟道里的奶糖就能流利说英语",
    H: "Please use fluent English to encourage others!",
    I: "请用流利的英语去鼓励别人！"
}, {
    B: "damage",
    C: "[ˈdæmɪdʒ]",
    D: "vt.毁坏，破坏",
    E: "dama+ge",
    F: "dama大麻+ge哥",
    G: "大麻被哥哥毁坏了",
    H: "He damaged his younger brother's car.",
    I: "他损坏了他弟弟的车。"
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
    B: "escape",
    C: "[ɪ'skeɪp]",
    D: "vi.逃跑，逃走，泄露",
    E: "es+cap+e",
    F: "es饿死(拼音)+cap帽子(熟词)+e鹅(编码)",
    G: "逃跑的时候饿死了戴帽子的鹅",
    H: "To my surprise, he could escape from that big fire.",
    I: "令我惊讶的是，他能够从那场大火里逃脱出来。"
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
    B: "temple",
    C: "[ˈtempl]",
    D: "n.庙宇，寺院",
    E: "te+m+ple",
    F: "te特(拼音)+m麦当劳(编码)+ple劈了(拼音)",
    G: "特别的麦当劳叔叔劈了一座庙",
    H: "We went to the temple of Atlantis and saw it by moonlight.",
    I: "我们去了亚特兰蒂斯神殿，在月光下游览了一番。"
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
    B: "relative",
    C: "['relətɪv]",
    D: "n.亲戚",
    E: "re+lat+ive",
    F: "re热(拼音)+lat(e)迟到(熟词)+ive衣服(谐音)",
    G: "亲戚在热天迟到时没穿衣服",
    H: "Get a relative to look after the children. ",
    I: "找一个亲戚来照看孩子。"
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
    B: "gas",
    C: "[gæs]",
    D: "n. 汽油，气体",
    E: "g+as",
    F: "g哥(拼音)+as像(熟词)",
    G: "哥哥喝的饮料像汽油",
    H: "You might try the gas station down the street. ",
    I: "可以到街那头的加油站试试。"
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
    B: "identity",
    C: "[aɪ'dentətɪ]",
    D: "n.身份",
    E: "i+denti+ty",
    F: "i我(熟词I)+denti等梯(拼音)+ty踢(谐音)",
    G: "我的身份证在等电梯时被踢走了",
    H: "The identity of the killer is still unknown.",
    I: "杀手的身份仍然是未知的。"
}, {
    B: "pipe",
    C: "[paɪp]",
    D: "n.管道",
    E: "pi+pe",
    F: "pi皮(拼音)+pe体育课(熟词)",
    G: "穿皮鞋上体育课被罚钻管道",
    H: "Gas escapes  from the  pipe.",
    I: "煤气从管道里漏出来。"
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
    B: "midnight",
    C: "['mɪdnaɪt]",
    D: "n.午夜",
    E: "mid+night",
    F: "mid在...中间+night黑夜",
    G: "午夜月亮升到天空的正中间四周都是黑夜",
    H: "They left at midnight.",
    I: "他们在午夜离开。"
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
    B: "organize",
    C: "['ɔ:gənaɪz]",
    D: "vi.组织，筹备",
    E: "or+gan+ize",
    F: "or偶人(拼音)+gan感(拼音)+ize艾滋(谐音)",
    G: "组织活动时偶人感染了艾滋病",
    H: "They organized a meeting between teachers and students. ",
    I: "他们组织了一次师生之间的会议。"
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
    B: "event",
    C: "[ɪ'vent]",
    D: "n.事件，公开活动",
    E: "even+t",
    F: "even甚至(熟词)+t踢(编码)",
    G: "甚至踢倒总统都不是大事件",
    H: "The sport meeting is a big event in our school.",
    I: "运动会是我们学校的大事。"
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
    B: "congratulation",
    C: "[kənˌgrætʃʊˈleɪʃn]",
    D: "n.祝贺",
    E: "con+gr+atu+lation",
    F: "con啃(谐音)+gr工人(拼音)+atu爱徒(拼音)+lation雷神(谐音)",
    G: "祝贺啃老工人的爱徒雷神进步了",
    H: "Congratulations on your exam results!",
    I: "祝贺你考出了好成绩！"
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
    B: "steam",
    C: "[sti:m]",
    D: "n.蒸汽，蒸汽动力",
    E: "s+team",
    F: "s蛇(编码)+team队伍(熟词)",
    G: "蒸汽推动蛇穿过队伍",
    H: "This machine is driven by steam. ",
    I: "这部机器是用水蒸气推进的。"
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
    B: "fee",
    C: "[fi:]",
    D: "n.费用（加入组织或做某事付的）",
    E: "f+ee",
    F: "f佛(编码)+ee眼睛(象形)",
    G: "要挖出佛像的眼睛是要付费的",
    H: "Their fees are quite reasonable.",
    I: "他们的收费非常合理。"
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
    B: "survey",
    C: "['sɜ:veɪ]",
    D: "vt./n.调查，审视，测量",
    E: "sur+ve+y",
    F: "sur俗人(拼音)+ve维E(编码)+y树杈(编码)",
    G: "俗人吃了维E后爬上树杈调查情况",
    H: "I will make a survey.",
    I: "我将会做一个调查。"
}, {
    B: "dislike",
    C: "[dɪs'laɪk]",
    D: "vt.不喜欢，厌恶",
    E: "dis+like",
    F: "dis的士(拼音)+like喜欢(熟词)",
    G: "的士司机不喜欢等红灯",
    H: "Why do you dislike him so much?",
    I: "你为什么那么不喜欢他呢？"
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
    B: "route",
    C: "[ruːt]",
    D: "n.路线，航线，通道",
    E: "r+out+e",
    F: "r草(编码)+out出来(熟词)+e鹅(编码)",
    G: "草出来后指引鹅找路线",
    H: "He lined out the route for the sightseers.",
    I: "他给游客们画出了路线图。"
}, {
    B: "disadvantage",
    C: "[dɪsəd'vɑ:ntɪdʒ]",
    D: "n.不利条件，不便之处",
    E: "dis+advantage",
    F: "dis不(词缀)+advantage有利条件(熟词)",
    G: "不利条件对我很不利",
    H: "This is a disadvantage when he looked for a job.",
    I: "在他找工作时这是一个不利条件。"
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
    B: "sincerely",
    C: "[sɪn'sɪəlɪ]",
    D: "adv.真诚地，真挚地",
    E: "sincere+ly",
    F: "sincere真诚的(熟词)+ly老爷(拼音)",
    G: "这是一位真诚的老爷",
    H: "I sincerely hope that you can be here.",
    I: "我衷心希望你能来。"
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
    B: "title",
    C: "['taɪtl]",
    D: "n.标题，题目；vt.为…加上题目（或标题）",
    E: "ti+tle",
    F: "ti题+tle谈了",
    G: "围绕如何确定标题谈论了很久",
    H: "What is the title of the book?",
    I: "这本书的标题是什么？"
}, {
    B: "calm",
    C: "[kɑ:m]",
    D: "adj.静的；vt.使平静",
    E: "ca+lm",
    F: "ca擦+lm老妈",
    G: "我安静地擦老妈的桌子",
    H: "Try to keep calm down.",
    I: "尽量保持冷静。"
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
    B: "shock",
    C: "[ʃɒk]",
    D: "n.休克；vt.使震惊",
    E: "sh+o+ck",
    F: "sh上海(拼音)+o蛋(编码)+ck蛋糕(熟词cake)",
    G: "上海人吃了鸡蛋和蛋糕就休克了",
    H: "She died of shock.",
    I: "她死于休克。"
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
    B: "unfair",
    C: "[ʌn'feə]",
    D: "adj.不公平的，不公正的",
    E: "un+fair",
    F: "un不(词缀)+fair公平(熟词)",
    G: "这件事一点都不公平",
    H: "It is unfair.",
    I: "这不公平。"
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
    B: "base",
    C: "[beɪs]",
    D: "n.底部，基础",
    E: "ba+se",
    F: "ba爸+se色",
    G: "底部被爸爸涂了色",
    H: "The lamp has a heavy base.",
    I: "这盏灯的底座很沉。"
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
    B: "German",
    C: "['dʒɜːmən]",
    D: "adj.德国的，德语的，德国人的",
    E: "Ge+r+man",
    F: "Ge哥(拼音)+r草(编码)+man男人(熟词)",
    G: "哥哥旁边吃草的男人是德国人",
    H: "Half of the books are in German.",
    I: "这些书有一半是德语的。"
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
    B: "source",
    C: "[sɔ:s]",
    D: "n.来源，根源",
    E: "s+our+ce",
    F: "s蛇(编码)+our我们的(熟词)+ce厕(拼音)",
    G: "蛇来源于我们的厕所",
    H: "Where is the source of Nile?",
    I: "尼罗河发源于何处？"
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
    B: "youth",
    C: "[ju:θ]",
    D: "n.青年，青年时期",
    E: "you+th",
    F: "you你(熟词)+th土豪(拼音)",
    G: "那个青年说你是土豪",
    H: "In my youth my ambition had been to be an inventor.",
    I: "在我年轻时我的抱负曾是当一名发明家。"
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
    B: "northwestern",
    C: "[ˌnɔ:θˈwɛstən]",
    D: "adj.西北方的，来自西北的，在西北部的",
    E: "north+west+er+n",
    F: "north北方(熟词)+west西方(熟词)+er儿(拼音)+n门(编码)",
    G: "从北方来到西方的儿子最后去了西北方的门",
    H: "He was from northwestern Russia.",
    I: "他来自俄罗斯西北部。"
}, {
    B: "flow",
    C: "[fləʊ]",
    D: "vt.流动，流出；n.流动，流量",
    E: "f+low",
    F: "f佛(编码)+low低(熟词)",
    G: "佛像在低处被流动的洪水冲走了",
    H: "The river flows into the sea.",
    I: "这条河流入大海。"
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
    B: "willing",
    C: "['wɪlɪŋ]",
    D: "adj.乐意的，自愿的",
    E: "will+ing",
    F: "will意志(熟词)+ing鹰(谐音)",
    G: "这只意志力强的鹰乐意帮助别人",
    H: "I'm perfectly willing to discuss the problem.",
    I: "我十分乐意讨论这个问题。"
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
    B: "latter",
    C: "['lætə(r)]",
    D: "n.后者，末位；adj.后者的，后面的",
    E: "letter",
    F: "letter信",
    G: "两张信纸中后者有苹果(a)的图案",
    H: "This article focuses on the latter.",
    I: "这篇文章的重点在后者。"
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
    B: "outline",
    C: "['aʊtlaɪn]",
    D: "n.轮廓",
    E: "out+line",
    F: "out外面+line线",
    G: "外面的线就是轮廓",
    H: "She pencilled the rough outline of the mountain in front of her house.",
    I: "她用铅笔画出房屋前的山的轮廓图。"
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
    B: "usage",
    C: "[ˈju:zidʒ]",
    D: "n.用法，使用",
    E: "us+age",
    F: "us我们+age年龄",
    G: "我们的年龄的用法就是卖老",
    H: "The usage is now firmly established.",
    I: "这种用法现已得到确认。"
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
    B: "legal",
    C: "['li:g(ə)l]",
    D: "adj.法律的，依照法律的",
    E: "leg+al",
    F: "leg腿(熟词)+al阿狸(拼音)",
    G: "瘸腿的阿狸是遵守法律的",
    H: "He vowed to take legal action.",
    I: "他发誓要诉诸法律行动。"
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
    B: "Spanish",
    C: "['spænɪʃ]",
    D: "n.西班牙人，西班牙语；adj.西班牙的，西班牙人的",
    E: "Spa+ni+sh",
    F: "Spa水疗(熟词)+ni你(拼音)+sh上海(拼音)",
    G: "西班牙人做完水疗和你去上海",
    H: "His mother tongue is Spanish.",
    I: "他的母语是西班牙语。"
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
    B: "equal",
    C: "['i:kwəl]",
    D: "adj.平等的，相等的",
    E: "e+qu+al",
    F: "e鹅(编码)+qu去(拼音)+al阿狸(拼音)",
    G: "鹅去找阿狸谈人人平等的条件",
    H: "They are now trying to compete on an equal footing.",
    I: "他们现在想要公平竞争。"
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
    B: "African",
    C: "['æfrɪk(ə)n]",
    D: "adj.非洲的，非洲人的；n.非洲人",
    E: "Af+ri+can",
    F: "Af爱妃(拼音)+ri日(拼音)+can罐头(熟词)",
    G: "非洲的爱妃日日吃罐头",
    H: "I live in an African country.",
    I: "我住在一个非洲国家。"
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
    B: "farmyard",
    C: "['fɑ:mjɑ:d]",
    D: "n.农场，农家",
    E: "farm+yard",
    F: "farm农场+yard院子",
    G: "农场的院子里种满了花",
    H: "The road passes a farmyard.",
    I: "那条路经过一个农家场院。"
}, {
    B: "southeastern",
    C: "[,sauθ'i:stən]",
    D: "adj.东南方的，来自东南的",
    E: "south+east+er+n",
    F: "south南方(熟词)+east东方(熟词)+er儿(拼音)+n门(编码)",
    G: "从南方来到东方的儿子最后去了东南门",
    H: "We were staying in southeastern Kansas.",
    I: "我们当时呆在堪萨斯的东南部。"
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
    H: "Our native land is as pretty as a picture.                					 ",
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
    B: "bar",
    C: "[bɑ:]",
    D: "n.棒，条状物",
    E: "b+ar",
    F: "b6(象形)+ar矮人(拼音)",
    G: "六个矮人在抢一根棒子",
    H: "A bar of chocolate is enough to stop his crying.",
    I: "一条巧克力就可以让他不哭了。"
}, {
    B: "mankind",
    C: "[,mæn'kaɪnd]",
    D: "n.人类",
    E: "man+kind",
    F: "man人+kind种类",
    G: "人类包括哪些种类呢？",
    H: "A new age for mankind is dawning.  ",
    I: "一个人类的新时代正在出现。"
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
    B: "frightening",
    C: "['fraɪtnɪŋ]",
    D: "adj.令人恐惧的",
    E: "frighten+ing",
    F: "frighten惊吓(熟词)+ing鹰(谐音)",
    G: "受惊吓的鹰叫声令人恐惧",
    H: "It was a very frightening experience.",
    I: "那是一次非常令人恐惧的经历。"
}, {
    B: "ignore",
    C: "[ɪg'nɔ:]",
    D: "vt.忽略，驳回诉讼，忽视，",
    E: "ig+no+re",
    F: "ig一哥(谐音)+no不(熟词)+re热(拼音)",
    G: "一哥不热，忽略他吧",
    H: "We can not ignore it.  ",
    I: "我们不能忽视它。"
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
    B: "beg",
    C: "[beg]",
    D: "vi.乞求，请求",
    E: "be+g",
    F: "be是(熟词)+g哥(编码)",
    G: "正在乞求原谅的是哥哥",
    H: "We are not going to beg for help anymore.",
    I: "我们将不再请求帮助。"
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
    B: "injure",
    C: "['ɪndʒə]",
    D: "vt.伤害，损害",
    E: "in+ju+re",
    F: "in在里面(熟词)+ju局(拼音)+re热(拼音)",
    G: "里面的局里太热会对身体有伤害",
    H: "This incident could seriously injure the company’s reputation.",
    I: "这个事件能对公司名声造成巨大的损害。"
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
    B: "headline",
    C: "[ˈhedlaɪn]",
    D: "n.大字标题，新闻提要",
    E: "head+line",
    F: "head头+line线条",
    G: "把头切成线条上了大字标题",
    H: "She's always in the headlines.",
    I: "她经常上头条。"
}, {
    B: "thunder",
    C: "['θʌndə(r)]",
    D: "vi.打雷；n.雷",
    E: "th+under",
    F: "th土豪(拼音)+under下面(熟词)",
    G: "打雷时土豪躲在树下面",
    H: `The thunder rumbled in the distance.
`,
    I: "远处雷声隆隆。"
}, {
    B: "tip",
    C: "[tɪp]",
    D: "n.指导，尖端，小费；vt./vi.倾斜，倾倒，给…小费",
    E: "top",
    F: "top顶",
    G: "我(i)站在屋顶指导他",
    H: "The sleeves covered his hands to the tips of his fingers .",
    I: "袖子遮住了他的手，一直盖到指尖。"
}, {
    B: "nationalism",
    C: "['næʃn(ə)lɪz(ə)m]",
    D: "n.民族主义，国际主义",
    E: "national+ism",
    F: "national民族的(熟词)+ism主义(词缀)",
    G: "民族的主义就是民族主义",
    H: `This kind of fierce nationalism is a powerful force.
`,
    I: "这种强劲的民族主义势力是一股强大的力量。"
}, {
    B: "wool",
    C: "[wul]",
    D: "n.羊毛；毛线，绒线",
    E: "wool",
    F: "woo五(谐音)+l两(拼音)",
    G: "五两羊毛；毛线，绒线",
    H: "The coat was made of pure wool.",
    I: "这件外套是用纯羊毛做的。"
}, {
    B: "Houston",
    C: "['hju:stən]",
    D: "n.休斯顿（美国城市）",
    E: "Hou+st+on",
    F: "Hou厚(拼音)+st石头(拼音)+on在上面(熟词)",
    G: "厚重的石头上面有张休斯顿地图",
    H: "Houston was chosen as the site for the convention.",
    I: "休斯敦被选作大会的会址。"
}, {
    B: "cab",
    C: "[kæb]",
    D: "n.出租车，驾驶室",
    E: "ca+b",
    F: "ca擦(拼音)+b6(象形)",
    G: "他在擦洗6辆出租车",
    H: "He tried to hail a cab but none would stop.",
    I: "他想打个车但是没有停的。"
}, {
    B: "Mekong",
    C: "['meɪ'kɔŋ]",
    D: "n.湄公河（位于东南亚）",
    E: "Me+kong",
    F: "Me我(熟词)+kong空(拼音)",
    G: "我有空就去湄公河",
    H: "Vientiane, the capital of Laos, nestles on the banks of the Mekong River. ",
    I: "老挝的首都万象就座落在湄公河岸上。"
}, {
    B: "pace",
    C: "[peɪs]",
    D: "vi.踱步，缓慢而行；n.一步",
    E: "pa+ce",
    F: "pa怕+ce厕",
    G: "怕上公共厕所的他来回踱步",
    H: "She stood up and began to pace to and fro. ",
    I: "她站起身，开始来回踱步。"
}, {
    B: "loose",
    C: "[luːs]",
    D: "adj.宽松的，松的",
    E: "loo+se",
    F: "loo100(象形)+se色(拼音)",
    G: "100个色狼穿一条宽松的裤子",
    H: "I have a loose tooth.",
    I: "我的一个牙齿松动了。"
}, {
    B: "glacier",
    C: "['glæsɪə]",
    D: "n.冰川，冰河",
    E: "gla+ci+er",
    F: "gla过来+ci刺+er儿",
    G: "他过来刺杀站在冰川上的儿子",
    H: "The glacier calved a large iceberg.",
    I: "冰川崩解而产生一个大冰山。"
}, {
    B: "Tibetan",
    C: "[tɪ'betən]",
    D: "adj.藏族的，西藏的；n.藏语，西藏人",
    E: "Ti+be+tan",
    F: "Ti踢(拼音)+be是(熟词)+tan弹(拼音)",
    G: "被踢走的是正在弹琴的藏族人",
    H: "After all these years, you still do not understand Tibetan ways.",
    I: "经过了这些年,你仍然不明白藏民的习俗。"
}, {
    B: "track",
    C: "[træk]",
    D: "n.轨道，足迹，痕迹",
    E: "tr+a+ck",
    F: "tr土人(拼音)+a一个(熟词)+ck蛋糕(熟词cake)",
    G: "轨道上的土人吃了一个蛋糕",
    H: "A cow stood on the tracks.",
    I: "一头奶牛站在铁轨上。"
}, {
    B: "miner",
    C: "['maɪnə]",
    D: "n.矿工",
    E: "min+er",
    F: "min(e)我的(熟词)+er儿(拼音)",
    G: "我的儿子是个矿工",
    H: "He was a miner all his working life.",
    I: "他一辈子都是矿工。"
}, {
    B: "judge",
    C: "[dʒʌdʒ]",
    D: "n.法官，裁判员",
    E: "ju+dge",
    F: "ju局+dge大哥",
    G: "在司法局工作的大哥是法官",
    H: "The judge has made a wrong decision.",
    I: "法官做出了错误的决定。"
}, {
    B: "warm-hearted",
    C: "[,wɔ:m'ha:tɪd]",
    D: "adj.热心肠的",
    E: "warm+heart+ed",
    F: "warm温暖的(熟词)+heart心(熟词)+ed二弟(拼音)",
    G: "温暖好心的二弟很热心",
    H: "She is warm-hearted and kind to everyone and everything.",
    I: "她对每个人每件事都很热心、宽厚。"
}, {
    B: "self",
    C: "[self]",
    D: "n.自我，自身",
    E: "se+lf",
    F: "se色+lf礼服",
    G: "彩色的礼服掩盖了真实的自我",
    H: "I want to explore and get in touch with my inner self.",
    I: "我想认真探寻、了解内心的自我。"
}, {
    B: "invader",
    C: "[ɪn'veɪdə(r)]",
    D: "n.侵略者",
    E: "in+va+der",
    F: "in在里面(熟词)+va喂(谐音)+der的人(拼音)",
    G: "在里面喂狗的人被侵略者杀了",
    H: "The city was destroyed by foreign invaders.",
    I: "这座城市被外国侵略者毁坏了。"
}, {
    B: "passbook",
    C: "['pɑːsbʊk]",
    D: "n.南非有色人种的身份证",
    E: "pass+book",
    F: "pass经过+book书",
    G: "经过时拿着书的人都有南非身份证",
    H: "What if he can't find the passbook?",
    I: "要是他不能找到南非身份证，该怎么办？"
}, {
    B: "dusk",
    C: "[dʌsk]",
    D: "n.黄昏，薄暮",
    E: "dust",
    F: "dust灰尘",
    G: "黄昏时机枪(k)扫起一片灰尘",
    H: "Spreading shades of dusk cover the earth.",
    I: "暮色笼住了大地。"
}, {
    B: "curtain",
    C: "['kə:tn]",
    D: "n.窗帘，门帘",
    E: "cur+tain",
    F: "cur粗人+tain太难",
    G: "挂窗帘对粗人来说太难",
    H: "Hearing someone come in, he hid himself behind the curtain.",
    I: "听见有人进来了，他一闪身藏在了窗帘的后面。"
}, {
    B: "grateful",
    C: "[ˈgreitful]",
    D: "adj.感激的",
    E: "gr+ate+ful",
    F: "gr工人(拼音)+ate吃(熟词)+ful(l)饱(熟词)",
    G: "工人吃饱了很感激",
    H: "He was so grateful that the tears pricked.",
    I: "他感激得泪珠滚滚。"
}, {
    B: "swap",
    C: "[swɒp]",
    D: "vi.交换；vt.用…替换，把…换成，掉换",
    E: "swan",
    F: "swan天鹅",
    G: "天鹅用羽毛交换皮鞋(p)",
    H: "Why not swap homes with your friends?",
    I: "何不与你的朋友交换房子？"
}, {
    B: "item",
    C: "['aɪtəm]",
    D: "n.项目，条款，一件商品（物品）",
    E: "it+em",
    F: "it它(熟词)+em恶魔(拼音)",
    G: "它是恶魔写的项目书",
    H: "This rule has many items.",
    I: "这项规定包含很多条款。"
}, {
    B: "elevator",
    C: "['elɪveɪtə]",
    D: "n.升降机，电梯",
    E: "elevat+or",
    F: "elevat(e)抬高(熟词)+or偶人(拼音)",
    G: "用升降机抬高偶人",
    H: "I go up by the elevator.",
    I: "我搭电梯上去。"
}, {
    B: "lorry",
    C: "['lɒrɪ]",
    D: "n.卡车，运货汽车",
    E: "sorry",
    F: "sorry抱歉",
    G: "卡车司机撞倒了棍子(l)感到很抱歉",
    H: "Don't tell me that your car fell off the back of a lorry?",
    I: "不要告诉我你的车是白赚的？"
}, {
    B: "fare",
    C: "[feə]",
    D: "n.费用，票价",
    E: "fa+re",
    F: "fa发+re热",
    G: "发热需要支付费用",
    H: "So, then we  had to select our fare.",
    I: "然后我们需要选择我们的费用。"
}, {
    B: "parcel",
    C: "['pɑ:s(ə)l]",
    D: "n.包裹，小包",
    E: "pa+rc+el",
    F: "pa趴+rc人才+el饿狼",
    G: "趴在地上的人才把包裹给了饿狼",
    H: "They also sent parcels of food and clothing.",
    I: "他们还寄送了成包的食物和衣物。"
}, {
    B: "insurance",
    C: "[ɪn'ʃʊər(ə)ns]",
    D: "n.保险费，保险",
    E: "insur+ance",
    F: "insur(e)确保(熟词)+ance摁死(谐音)",
    G: "确保摁死他了，才能骗保险费",
    H: "Can you claim for the loss on your insurance?",
    I: "你能向你投保的公司要求赔偿这一损失吗？"
}, {
    B: "ruin",
    C: "['ru:ɪn]",
    D: "vt.毁坏，糟蹋；n.毁灭，废墟，遗迹",
    E: "ru+in",
    F: "ru入(拼音)+in里面(熟词)",
    G: "我躲入废墟里面探查敌情",
    H: "Why let the cars ruin your drive? ",
    I: "为何让车子破坏你的驾驶过程？"
}, {
    B: "trap",
    C: "[træp]",
    D: "n.陷阱，圈套；vt.诱捕，使…陷入困境",
    E: "tr+ap",
    F: "tr土人+ap阿婆",
    G: "土人掉进阿婆的陷阱",
    H: "The deer was beguiled into a trap.",
    I: "那只鹿被诱入陷阱。"
}, {
    B: "Bible",
    C: "['baɪb(ə)l]",
    D: "n.圣经",
    E: "Bi+ble",
    F: "Bi闭(拼音)+ble伯(谐音)",
    G: "闭关的伯伯在背圣经",
    H: "He can fluently study The Bible from Z to A.",
    I: "他能倒背如流地背诵整部《圣经》。"
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
    B: "release",
    C: "[rɪ'liːs]",
    D: "vt.释放，发射",
    E: "rel+ease",
    F: "rel热量(拼音)+ease减轻(熟词)",
    G: "释放热量后，痛苦就减轻了",
    H: "He still had a lot of pent-up anger to release. ",
    I: "他还有很多强压的愤怒要发泄。"
}, {
    B: "pillow",
    C: "['pɪləʊ]",
    D: "n.枕头",
    E: "pill+ow",
    F: "pill药片(熟词)+ow我(形似wo)",
    G: "药片被我放在枕头下面了",
    H: "She  fluffed  up the  pillow.",
    I: "她把枕头拍松。"
}, {
    B: "Texas",
    C: "['teksəs]",
    D: "n.德克萨斯州（美国州名）",
    E: "te+x+as",
    F: "te特(拼音)+x剪刀(编码)+as像(熟词)",
    G: "德克萨斯州的形状很特别，和剪刀像吗？",
    H: "Texas has a long history of trade with Mexico.",
    I: "得克萨斯州与墨西哥的贸易往来历史悠久。"
}, {
    B: "rapids",
    C: "['ræpɪdz]",
    D: "n.急流",
    E: "rap+id+s",
    F: "rap说唱音乐(熟词)+id身份(编码)+s美女(编码)",
    G: "说唱歌手的身份证被美女扔进了急流",
    H: "The canoe shot the rapids.",
    I: "独木舟飞速地冲入急流。"
}, {
    B: "delta",
    C: "['deltə]",
    D: "n.（河流的）三角洲",
    E: "de+lt+a",
    F: "de的(拼音)+lt骆驼(拼音)+a苹果(编码)",
    G: "三角洲的骆驼爱吃苹果",
    H: "The Nile divides at its mouth and forms a delta.",
    I: "尼罗河在河口分岔，形成了一个三角洲。"
}, {
    B: "yak",
    C: "[jæk]",
    D: "n.牦牛",
    E: "ya+k",
    F: "ya牙(拼音)+k机关枪(编码)",
    G: "牦牛的牙被机关枪打掉了",
    H: "I have never eaten yak meat before.",
    I: "我以前从未吃过牦牛肉。"
}, {
    B: "smelly",
    C: "['smelɪ]",
    D: "adj.有臭味的，发臭的",
    E: "smell+y",
    F: "smell闻(熟词)+y树杈(编码)",
    G: "闻到树杈是有有臭味的",
    H: "He had extremely smelly feet.",
    I: "他的脚奇臭无比。"
}, {
    B: "dam",
    C: "[dæm]",
    D: "n.水坝，堤；vt.在（河）上筑坝",
    E: "d+am",
    F: "d弟(编码)+am是(熟词)",
    G: "弟弟是从水坝上掉下去的",
    H: "Here is the picture of the Aswan Dam in Egypt.",
    I: "这是埃及阿斯旺大坝的照片。"
}, {
    B: "fond",
    C: "[fɒnd]",
    D: "adj.喜爱的，慈爱的，宠爱的",
    E: "f+on+d",
    F: "f佛(编码)+on在上面(熟词)+d狗(编码dog)",
    G: "我很喜爱佛像上面的狗",
    H: "I am very fond of Michael.",
    I: "我很喜欢迈克尔。"
}, {
    B: "cave",
    C: "[keɪv]",
    D: "n.洞穴，地窖",
    E: "ca+ve",
    F: "ca钙(熟词)+ve维E(编码)",
    G: "他们在洞穴里面吃钙片和维E",
    H: "The force of the water washed him back into the cave.",
    I: "大水把他冲回到洞里。"
}, {
    B: "crack",
    C: "[kræk]",
    D: "n.裂缝，噼啪声；vt.使....破裂",
    E: "cr+a+ck",
    F: "cr超人(拼音)+a苹果(编码)+ck蛋糕(熟词cake)",
    G: "超人用苹果把蛋糕砸出裂缝了",
    H: "Thunder cracked in the sky.",
    I: "空中雷声咔嚓作响。"
}, {
    B: "quote",
    C: "[kwəʊt]",
    D: "vt.引用，引证，报价",
    E: "qu+o+te",
    F: "qu去(拼音)+o洞(编码)+te特(拼音)",
    G: "他引用去山洞找特务的例子拉选票",
    H: "He's always quoting from the Bible.",
    I: "他总是引用圣经上的话。"
}, {
    B: "meander",
    C: "[mɪ'ændə]",
    D: "n.（指河流等）蜿蜒流动",
    E: "me+and+er",
    F: "me我(熟词)+and和(熟词)+er儿(拼音)",
    G: "我和儿子在缓慢流动的溪流旁散步",
    H: "We took a gravel road that meandered through farmland.",
    I: "我们走上了一条蜿蜒穿越农田的石子路。"
}, {
    B: "educated",
    C: "['edjʊkeɪtɪd]",
    D: "adj.受过教育的，有教养的",
    E: "educate+d",
    F: "educate教育(熟词)+d弟(拼音)",
    G: "受过教育的弟弟很有学问",
    H: "The new CEO is an educated man.",
    I: "新的首席执行官是一位受过良好教育的人。"
}, {
    B: "vet",
    C: "[vet]",
    D: "n.兽医，退伍老兵；vt.审查，仔细检查",
    E: "bet",
    F: "bet打赌",
    G: "兽医打赌比赛会胜利(v)",
    H: "The New England Shelter in Boston will serve Christmas dinner for 200 vets.",
    I: "波士顿的新英格兰收容所将为200名老兵提供圣诞晚餐。"
}, {
    B: "series",
    C: "['sɪəri:z]",
    D: "n.连续，系列节目",
    E: "seri+es",
    F: "seri(al)连续的(熟词)+es饿死(拼音)",
    G: "连续很多天没饭吃饿死好多人",
    H: " He was carrying on about some stupid television series. ",
    I: "他喋喋不休地说着某个无聊的电视连续剧。"
},
// 1
{
    B: "fine",
    C: "[faɪn]",
    D: "adj.美好的，纤细的",
    E: "five",
    F: "five五",
    G: "门(n)口的五只猪过着美好的生活",
    H: "There is a fine view of the countryside.",
    I: "这里可以看到乡村的美景。"
}, {
    B: "too",
    C: "[tu:]",
    D: "adv.也，太，很",
    E: "t+oo",
    F: "t伞(编码)+oo望远镜(象形)",
    G: "伞下面放着望远镜也太傻了",
    H: "Nice to meet you ,too.",
    I: "我也很高兴见到你。"
}, {
    B: "some",
    C: "[sʌm]",
    D: "adj.一些",
    E: `so+me
`,
    F: "so因此+me我",
    G: "因此我有一些钱",
    H: "Daddy, can I have some money?",
    I: "爸，能给我点钱吗？"
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
    B: "also",
    C: "['ɔ:lsəʊ]",
    D: "adv.同样地，也",
    E: "al+so",
    F: "al阿狸(拼音)+so因此(熟词)",
    G: "阿狸因此也同样地照做了",
    H: "Jack's father is also a doctor.",
    I: "杰克的父亲也是医生。"
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
    B: "invitation",
    C: "[ˌɪnvɪˈteɪʃn]",
    D: "n.邀请",
    E: "invit+ation",
    F: "invit(e)邀请(熟词)+ation爱神(谐音)",
    G: "邀请爱神跳舞",
    H: "Thank you for your kind invitation.",
    I: "谢谢你的盛情邀请。"
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
    B: "actor",
    C: "['æktə(r)]",
    D: "n.演员",
    E: "act+or",
    F: "act表演(熟词)+or偶人(拼音)",
    G: "正在表演的偶人是演员",
    H: "I want to be an actor.",
    I: "我想当一名演员。"
}, {
    B: "fur",
    C: "[fɜ:(r)]",
    D: "n.（动物的）皮毛",
    E: "fur",
    F: "fur夫人",
    G: "夫人穿着动物皮毛做的大衣",
    H: "Its fur is short, dense and silky.",
    I: "它的毛又短又密，柔软光洁。"
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
    B: "goal",
    C: "[gəʊl]",
    D: "n.目标，目的，球门；vi.进球得分",
    E: "go+al",
    F: "go去(熟词)+al阿狸(拼音)",
    G: "我去找阿狸完成目标",
    H: "It's a matter of setting your own goals and following them.",
    I: "这是一个设定自己的目标并努力实现它们的问题。"
}, {
    B: "amazing",
    C: "[ə'meɪzɪŋ]",
    D: "adj.令人大为惊奇的",
    E: "ama+z+ing",
    F: "ama阿妈(拼音)+z鸭子(编码)+ing鹰(谐音)",
    G: "阿妈养的鸭子被鹰吃了真是令人惊奇",
    H: "It was amazing how much we managed to do in a day.",
    I: "真想不到我们在一天之内做了这么多事情。"
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
    B: "if",
    C: "[ɪf]",
    D: "conj.如果",
    E: "i+f",
    F: "i蜡烛+f斧头",
    G: "如果蜡烛被斧头砍了会怎样",
    H: "You can stay for the weekend if you like.",
    I: "你如果愿意就留在这里过周末吧。"
}, {
    B: "affect",
    C: "[ə'fekt]",
    D: "vt.感动，影响，感染",
    E: "effect",
    F: "effect效果",
    G: "效果太好我被感动了",
    H: "Your opinion will not affect my decision.",
    I: "你的意见不会影响我的决定。"
}, {
    B: "application",
    C: "[ˌæplɪ'keɪʃ(ə)n]",
    D: "n.申请，应用，应用程序",
    E: "app+li+cation",
    F: "app手机应用(编码)+li里(拼音)+cationK神(谐音)",
    G: "我申请用手机应用里的软件跟K神对战",
    H: "De Gaulle vetoed Britain's application to join the EEC.",
    I: "戴高乐驳回了英国加入欧洲经济共同体的申请。"
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
    B: "powerful",
    C: "['paʊəfl]",
    D: "adj.强大的，有力的",
    E: "power+ful",
    F: "power权利(熟词)+ful福利(拼音)",
    G: "拥有强大的权利才会有福利",
    H: "Teacher is powerful in a child's eyes forever.",
    I: "老师在孩子们的心中永远是强者。"
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
    B: "remove",
    C: "[rɪ'mu:v]",
    D: "vt.移动，搬开",
    E: "re+move",
    F: "re再次(词缀)+move搬家(熟词)",
    G: "再次搬家要移动很多家具",
    H: "As soon as the cake is done, remove it from the oven.",
    I: "蛋糕一烤好，就把它从烤箱里移出来。"
}, {
    B: "respond",
    C: "[rɪ'spɒnd]",
    D: "vt.（口头或书面）回答，回应",
    E: "re+sp+on+d",
    F: "re热(拼音)+sp视频(拼音)+on在...上面(熟词)+d狗(编码dog)",
    G: "热门视频上面的狗在回答问题",
    H: "How should I respond?",
    I: "我该如何回答？"
}, {
    B: "technology",
    C: "[tekˈnɒlədʒɪ]",
    D: "n.工艺，技术",
    E: "tech+no+lo+gy",
    F: "tech特产(拼音)+no不(熟词)+lo10(象形)+gy工艺(拼音)",
    G: "制作这种特产不需要10道工艺",
    H: "Technology is changing fast.",
    I: "科技日新月异。"
}, {
    B: "troop",
    C: "[tru:p]",
    D: "n.军队，群，组",
    E: "tr+oo+p",
    F: "tr土人(拼音)+oo望远镜(象形)+p皮鞋(编码)",
    G: "土人拿着望远镜观察穿皮鞋的军队",
    H: "All troops will be withdrawn by the end of the year.",
    I: "年底前所有部队都将撤回。"
}, {
    B: "unexpected",
    C: "[ˌʌnɪk'spektɪd]",
    D: "adj.意外的，没料到的",
    E: "un+expect+ed",
    F: "un联合国(编码)+expect期望(熟词)+ed二弟(拼音)",
    G: "联合国期望二弟能收到意外惊喜",
    H: "His reaction on this matter is unexpected.",
    I: "他对这件事情的反应是没料到的。"
}, {
    B: "universal",
    C: "[ˌju:nɪ'vɜ:sl]",
    D: "adj.宇宙的，普遍的，全体的",
    E: "uni+vers+al",
    F: "uni一(词缀)+vers(e)诗(熟词)+al阿狸(拼音)",
    G: "写了一篇诗后阿狸成为了宇宙英雄",
    H: "Social development suggests universal exploration.",
    I: "社会的进步促使人类做出对宇宙空间的探索。"
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
    B: "Dinosaur",
    C: "['daɪnəsɔ:]",
    D: "n.恐龙，过时、落伍的人或事物",
    E: "di+no+saur",
    F: "di弟(拼音)+no没有(熟词)+saur锁(谐音)",
    G: "弟弟没有锁门恐龙跑出来了",
    H: "My son likes dinosaurs very much.",
    I: "我儿子非常喜欢恐龙。"
}, {
    B: "character",
    C: "['kærəktə]",
    D: "n.性格，特性",
    E: "ch+ar+act+er",
    F: "ch吃(拼音)+ar矮人(拼音)+act表演(熟词)+er儿子(拼音)",
    G: "吃货矮人在表演儿子性格",
    H: "The boy has a strong character.",
    I: "这男孩个性很强。"
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
    B: "athlete",
    C: "['æθli:t]",
    D: "n.运动员，运动选手",
    E: "a+th+let+e",
    F: "a一个(熟词)+th土豪(拼音)+let让(熟词)+e鹅(编码)",
    G: "一个土豪让鹅当运动员",
    H: "He is an athlete.",
    I: "他是运动员。"
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
    B: "earn",
    C: "[ə:n]",
    D: "vt.赚，获得，挣得",
    E: "ear+n",
    F: "ear耳朵(熟词)+n门(编码)",
    G: "耳朵贴在门上就能赚钱",
    H: "He earns about $40,000 a year.",
    I: "他一年大约挣4万美元。"
}, {
    B: "protection",
    C: "[prə'tekʃn]",
    D: "n.保护",
    E: "pro+tec+tion",
    F: "pro飘柔(拼音)+tec特产(拼音)+tion神(谐音)",
    G: "飘柔是特产，受神保护",
    H: "The witnesses demand police protection.",
    I: "目击者需要警察保护。"
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
    B: "solve",
    C: "[sɒlv]",
    D: "vt.解决，处理",
    E: "sol+ve",
    F: "sol501(象形)+ve维E(编码)",
    G: "501颗维E解决所有问题",
    H: "Who can solve this problem?",
    I: "谁能解决这个问题？"
}, {
    B: "entrance",
    C: "['entr(ə)ns]",
    D: "n.入口",
    E: "en+tr+ance",
    F: "en摁+tr土人+ance暗厕",
    G: "摁住土人把他堵在暗厕的入口",
    H: "Beside the entrance to the church, turn right.",
    I: "在教堂入口边向右转。"
}, {
    B: "distant",
    C: "['dɪstənt]",
    D: "adj.远处的，远的",
    E: "dis+t+ant",
    F: "dis的士(拼音)+t伞(编码)+ant蚂蚁(熟词)",
    G: "远处的的士司机打着伞抓蚂蚁",
    H: "She could hear the distant sound of fireworks.",
    I: "她能听到远处放焰火的声音。"
}, {
    B: "doubt",
    C: "[daʊt]",
    D: "vt.怀疑，不能肯定",
    E: "dou+bt",
    F: "dou都+bt变态",
    G: "怀疑他们都是变态",
    H: "I had no reason to doubt him.",
    I: "我没有理由怀疑他。"
}, {
    B: "attractive",
    C: "[ə'træktɪv]",
    D: "adj.吸引人的，有魅力的",
    E: "attract+ive",
    F: "attract吸引(熟词)+ive伊芙(谐音)",
    G: "吸引人的游戏才能吸引伊芙的注意",
    H: "She is so attractive.",
    I: "她非常有魅力。"
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
    B: "importance",
    C: "[ɪm'pɔ:tns]",
    D: "n.重要性",
    E: "im+port+ance",
    F: "im姨母(谐音)+port港口(熟词)+ance暗厕(拼音)",
    G: "姨母在港口才意识到暗厕的重要性",
    H: "He is a man of great importance.",
    I: "他是一位非常重要的人物。"
}, {
    B: "succeed",
    C: "[sək'si:d]",
    D: "vt./vi.达到目的，成功，继承",
    E: "su+cc+ee+d",
    F: "su苏(拼音)+cc两只耳朵(编码)+ee两只眼睛(编码)+d弟(编码)",
    G: "苏只要动动两只耳朵和眼睛就可以帮弟弟达到目的",
    H: "The experiment has succeeded.",
    I: "试验已成功。"
}, {
    B: "familiar",
    C: "[fə'mɪlɪə]",
    D: "adj.熟悉的，常见的，亲近的",
    E: "famili+ar",
    F: "famili发米粒+ar矮人",
    G: "发米粒的矮人我很熟悉",
    H: "They are already familiar faces on our TV screens.",
    I: "他们已经是电视屏幕上熟悉的面孔了。"
}, {
    B: "ancient",
    C: "['eɪnʃ(ə)nt]",
    D: "adj.古代的，古老的",
    E: "an+cien+t",
    F: "an安(拼音)+cien神(谐音)+t伞(编码)",
    G: "在古代要安神就打伞",
    H: "The journey ends in the ancient city of Marrakesh.",
    I: "旅行的终点是马拉喀什古城。"
}, {
    B: "brief",
    C: "[briːf]",
    D: "adj.简短的，简洁的",
    E: "br+ie+f",
    F: "br病人(拼音)+ie浏览器(谐音)+f斧头(编码)",
    G: "简短的说病人的IE浏览器被斧头砸坏了",
    H: "The article is brief.",
    I: "这篇文章很简短。"
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
    B: "design",
    C: "[dɪ'zaɪn]",
    D: "vt.图案，构思；n.设计，设计",
    E: "d+e+sign",
    F: "d狗(编码)+e鹅(编码)+sign记号(熟词)",
    G: "狗和鹅都在这个记号的图案上",
    H: "There are many designs on the wall.",
    I: "墙上有很多图案。"
}, {
    B: "designer",
    C: "[dɪ'zaɪnə]",
    D: "n.设计师",
    E: "de+sign+er",
    F: "de弟(谐音)+sign签名(熟词)+er儿(拼音)",
    G: "设计师弟弟将签名写在儿子脸上",
    H: "Carolyne is a fashion designer.",
    I: "卡罗琳是位时装设计师。"
}, {
    B: "Lily",
    C: "['lɪlɪ]",
    D: "n.百合花",
    E: "li+ly",
    F: "li梨+ly老爷",
    G: "梨树旁边老爷种了一盆百合花",
    H: "She is as fair as lily.",
    I: "她像百合花一样美。"
}, {
    B: "Berlin",
    C: "[bə:'lɪn]",
    D: "n.柏林（德国首都）",
    E: "B+er+lin",
    F: "B蜜蜂(熟词bee)+er儿(拼音)+lin拎(拼音)",
    G: "蜜蜂的儿子拎蜂蜜飞往柏林",
    H: "She left by plane for Berlin.",
    I: "她乘飞机去柏林了。"
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
    B: "foolish",
    C: "['fu:lɪʃ]",
    D: "adj.愚蠢的",
    E: "fool+is+h",
    F: "fool傻瓜(熟词)+is是(熟词)+h椅子(编码)",
    G: "愚蠢的傻瓜是椅子下面那个人",
    H: "It's foolish of me to make such a mistake.",
    I: "犯这样的错误，我真是太傻了。"
}, {
    B: "host",
    C: "[həʊst]",
    D: "n.主人",
    E: "lost",
    F: "lost失去",
    G: "小狗失去了主人",
    H: "The host made a big dinner for us.",
    I: "主人为我们做了一顿丰富的晚餐。"
}, {
    B: "form",
    C: "[fɔ:m]",
    D: "vt.形成，构成",
    E: "farm",
    F: "farm农场",
    G: "农场上的苹果(a)围起来形成一个圈(o)",
    H: "A plan began to form in his head.",
    I: "一项计划在他脑子中形成。"
}, {
    B: "prince",
    C: "[prɪns]",
    D: "n.王子",
    E: "price",
    F: "price代价",
    G: "破门救王子的代价很大",
    H: "The Prince won warm applause for his ideas.",
    I: "王子的想法赢得了热烈的掌声。"
}, {
    B: "dust",
    C: "[dʌst]",
    D: "n.灰尘",
    E: "du+st",
    F: "du大(谐音)+st石头(拼音)",
    G: "大石头上有好多灰尘",
    H: "Strong winds blew away most of the dust.",
    I: "风卷走了大部分的尘土。"
}, {
    B: "calculate",
    C: "[ˈkælkjʊleɪt]",
    D: "vt.核算，计算",
    E: "cal+cu+late",
    F: "cal(l)打电话(熟词)+cu粗(拼音)+late迟的(熟词)",
    G: "他边打电话边粗略计算迟到时间",
    H: "I'll calculate what it will cost.",
    I: "我要估计一下那要花多少钱。"
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
    B: "intelligence",
    C: "[ɪn'telɪdʒəns]",
    D: "n.才智",
    E: "inte+ll+i+gen+ce",
    F: "inte英特(谐音)+ll11(形象)+i蜡烛(编码)+gen跟(拼音)+ce厕(拼音)",
    G: "有才智的英特拿着11只蜡烛跟踪到厕所搜集情报",
    H: "Black bears' intelligence is similar to that of a three-year-old child.",
    I: "黑熊的智商和人类三岁的孩子很像。"
}, {
    B: "Greek",
    C: "[gri:k]",
    D: "n.希腊人",
    E: "Gr+ee+k",
    F: "Gr工人(拼音)+ee眼睛(编码)+k机关枪(编码)",
    G: "希腊人把工人的眼睛用机枪打瞎了",
    H: "The Greek lives a comfortable life.",
    I: "希腊人过着舒适的生活。"
}, {
    B: "pain",
    C: "[peɪn]",
    D: "n.疼痛",
    E: "pai+n",
    F: "pai拍+n脑",
    G: "拍脑门很疼",
    H: "She was in constant pain.",
    I: "她一直疼个不停。"
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
    B: "faithfully",
    C: "['feɪθfəlɪ]",
    D: "adv.忠实地，忠诚地",
    E: "faith+fully",
    F: "faith忠诚+fully充分地",
    G: "他的忠诚被充分地利用了",
    H: "He loves her faithfully.",
    I: "他忠实地爱着她。"
}, {
    B: "wild",
    C: "[waɪld]",
    D: "n.自然环境，野生状态",
    E: "will",
    F: "will愿意",
    G: "我愿意去野外感受自然环境",
    H: "Fewer than a thousand pandas still live in the wild.",
    I: "只有不到1,000只大熊猫仍然在自然环境中生活。"
}, {
    B: "responsibility",
    C: "[rɪˌspɒnsə'bɪlətɪ]",
    D: "n.责任",
    E: "res+ponsi+bili+ty",
    F: "res热死(拼音)+ponsi胖子(谐音)+bili比利(拼音)+ty题(谐音)",
    G: "热死的胖子比利做题时很有责任心",
    H: "The responsibility for her family bears down on a young woman.",
    I: "家庭的责任沉重地落在一个年轻女人的肩上。"
}, {
    B: "virus",
    C: "[ˈvairəs]",
    D: "n.病毒",
    E: "vi+r+us",
    F: "vi歪(谐音)+r草(编码)+us我们(熟词)",
    G: "这颗歪草让我们染上了病毒",
    H: "The virus has infected the operating system of his computer.",
    I: "病毒已使他的计算机操作系统受到传染。"
}, {
    B: "pretend",
    C: "[prɪˈtend]",
    D: "vi.假装，佯装",
    E: "pr+et+end",
    F: "pr仆人(拼音)+et外星人(熟词)+end结束(熟词)",
    G: "假装成仆人的外星人结束了生命",
    H: "Don't pretend to know!",
    I: "不要不懂装懂！"
}, {
    B: "humorous",
    C: "['hju:mərəs]",
    D: "adj.幽默的，滑稽有趣的",
    E: "humo+rous",
    F: "humo胡某+rous肉丝",
    G: "幽默的胡某爱吃肉丝",
    H: "He was quite humorous, and I liked that about him.",
    I: "他很幽默，我喜欢他这一点。"
}, {
    B: "studio",
    C: "['stju:dɪəʊ]",
    D: "n.工作室，演播室",
    E: "stu+di+o",
    F: "stu学生(熟词student)+di弟(拼音)+o蛋(编码)",
    G: "工作室里，学生弟弟在煮鸡蛋",
    H: "The actor has signed with a film studio.",
    I: "这位演员已与电影制片厂草签。"
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
    B: "rapid",
    C: "['ræpɪd]",
    D: "adj.迅速的",
    E: "rap+id",
    F: "rap饶舌说唱(熟词)+id身份(编码)",
    G: "迅速查明饶舌说唱者的身份",
    H: "The disease is spreading at a rapid rate.",
    I: "这种疾病正在迅速蔓延。"
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
    B: "ivory",
    C: "['aɪv(ə)rɪ]",
    D: "n.象牙",
    E: "i+vo+ry",
    F: "i爱(编码)+vo我(谐音)+ry人妖(拼音)",
    G: "爱我的人妖在买象牙",
    H: "It is carved from ivory.",
    I: "它是用象牙雕成的。"
}, {
    B: "honey",
    C: "['hʌnɪ]",
    D: "n.蜂蜜，甜蜜，蜜",
    E: "h+one+y",
    F: "h椅子(编码)+one一(熟词)+y树杈(编码)",
    G: "站在椅子上用一根树杈取树顶的蜂蜜",
    H: "Honey is so sweet.",
    I: "蜂蜜非常甜。"
}, {
    B: "personal",
    C: "['pɜːs(ə)n(ə)l]",
    D: "adj.个人的，身体的",
    E: "person+al",
    F: "person人(熟词)+al暗恋(拼音)",
    G: "一个人的暗恋是她个人的事情",
    H: "Of course, this is just a personal opinion.",
    I: "当然了，这只是个人意见。"
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
    B: "fame",
    C: "[feɪm]",
    D: "n.名声，名望",
    E: "fa+me",
    F: "fa发(拼音)+me我(熟词)",
    G: "发财后我的名声大涨",
    H: "The film earned him international fame.",
    I: "这部影片为他赢得了国际声誉。"
}, {
    B: "teammate",
    C: "['ti:mmeɪt]",
    D: "n.同伴，伙伴",
    E: "team+mate",
    F: "team团队+mate助手",
    G: "团队助手是你的同伴",
    H: "He is my teammate.",
    I: "他是我的同伴。"
}, {
    B: "electronic",
    C: "[ɪlek'trɔnɪk]",
    D: "adj.电子的",
    E: "elect+ron+ic",
    F: "elect选举(熟词)+ron容(拼音)+icIC卡(编码)",
    G: "选举很容易因为IC卡是电子的",
    H: "The first electronic computer was called ENICA.",
    I: "第一台电子计算机叫做ENICA。"
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
    B: "insect",
    C: "['ɪnsekt]",
    D: "n.昆虫",
    E: "in+se+ct",
    F: "in里面(熟词)+se色(拼音)+ct餐厅(拼音)",
    G: "里面的色狼在餐厅吃昆虫",
    H: "He was bitten by an insect in the garden.",
    I: "他在花园里被虫子咬了一口。"
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
    B: "relief",
    C: "[rɪ'liːf]",
    D: "n.轻松，宽慰，减轻",
    E: "re+lief",
    F: "re热(拼音)+lief礼服(谐音)",
    G: "热的礼服穿着让人感到轻松",
    H: "The pills gave her some relief.",
    I: "药片减轻她一些痛苦。"
}, {
    B: "ending",
    C: "['endɪŋ]",
    D: "n.结局，结尾",
    E: "end+ing",
    F: "end结局(熟词)+ing鹰(谐音)",
    G: "故事的结局是老鹰死了",
    H: "This is a happy ending.",
    I: "这是个好结局。"
}, {
    B: "wooden",
    C: "['wʊd(ə)n]",
    D: "adj.木制的",
    E: "w+oo+den",
    F: "w皇冠(编码)+oo望远镜(象形)+den凳(谐音)",
    G: "木制的皇冠和望远镜放在凳子上了",
    H: "The house was surrounded by a tall, wooden fence.",
    I: "这所房子被一道高高的木制篱笆围了起来。"
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
    B: "Mars",
    C: "[mɑ:z]",
    D: "n.火星",
    E: "M+ar+s",
    F: "M麦当劳(编码)+ar矮人(拼音)+s美女(编码)",
    G: "麦当劳里的矮人和美女私奔到火星",
    H: "Is there life on Mars?",
    I: "火星上有生物吗？"
}, {
    B: "decorate",
    C: "['dekəreɪt]",
    D: "vt.布置，装饰",
    E: "de+co+rate",
    F: "de得(拼音)+co可乐(熟词coke)+rate速度(熟词)",
    G: "得到可乐后我布置房间的速度大大提高了",
    H: "My mother likes to decorate rooms.",
    I: "我妈妈非常喜欢装饰房间。"
}, {
    B: "happiness",
    C: "[ˈhæpinəs]",
    D: "n.幸福",
    E: "happ+in+ess",
    F: "happ(y)高兴的(熟词)+in里面(熟词)+ess饿死(谐音)",
    G: "只要高兴了，在里面饿死也幸福",
    H: "I've always believed that happiness counts more than money.",
    I: "我一直相信幸福比金钱重要。"
}, {
    B: "rebuild",
    C: "[ri:'bɪld]",
    D: "vt.重建",
    E: "re+build",
    F: "re再次(词缀)+build建造(熟词)",
    G: "想要再次建造就需要重建",
    H: "Workers are rebuilding our homes.",
    I: "工人们正在重建我们的家园。"
}, {
    B: "harm",
    C: "[hɑ:m]",
    D: "n.受伤；vt.伤害",
    E: "h+ar+m",
    F: "h椅子(编码)+ar矮人(拼音)+m山(编码)",
    G: "椅子上的矮人在山里受伤了",
    H: "No harm would come to us.",
    I: "我们不会受到伤害。"
}, {
    B: "nowadays",
    C: "['naʊədeɪz]",
    D: "adv.现在，现今",
    E: "now+a+days",
    F: "now现在+a一个+days天(熟词day复数)",
    G: "现在过一天是一天",
    H: "Nowadays people like travelling on foot.",
    I: "现在人们喜欢徒步旅行。"
}, {
    B: "motto",
    C: "['mɒtəʊ]",
    D: "n.座右铭，格言，警句",
    E: "mot+to",
    F: "mot摩托(拼音)+to去(熟词)",
    G: "骑摩托去流浪是我的座右铭",
    H: '"Think before you speak" is a good motto.',
    I: "“三思而后言”是句很好的座右铭。"
}, {
    B: "confident",
    C: "['kɒnfɪd(ə)nt]",
    D: "adj.自信的，确信的",
    E: "confi+dent",
    F: "confi咖啡(谐音coffee)+dent等他(拼音)",
    G: "自信地喝着咖啡等他",
    H: "He is a confident boy.",
    I: "他是一个自信的男孩。"
}, {
    B: "former",
    C: "['fɔ:mə]",
    D: "adj.前任的，从前的，前者的",
    E: "for+me+r",
    F: "for给(熟词)+me我(熟词)+r小草(编码)",
    G: "前任给我一颗小草",
    H: "The former headmaster was a very old man.",
    I: "前任校长是位年长者。"
}, {
    B: "republic",
    C: "[rɪ'pʌblɪk]",
    D: "n.共和国，共和政体",
    E: "re+public",
    F: "re热(拼音)+public公众(熟词)",
    G: "热血公众成立了共和国",
    H: "In 1918, Austria became a republic.",
    I: "1918年，奥地利成为共和国。"
}, {
    B: "explore",
    C: "[ɪk'splɔː]",
    D: "vt.探险，探索，探测",
    E: "ex+plore",
    F: "ex前夫(熟词)+plore不老(谐音)",
    G: "喜欢探险的前夫不老",
    H: "Do you want to explore the island?",
    I: "你想不想去这座小岛探险？"
}, {
    B: "signal",
    C: "['sɪgn(ə)l]",
    D: "n.信号；vt./vi.发信号",
    E: "sign+al",
    F: "sign签名(熟词)+al阿狸(拼音)",
    G: "签名时，阿狸发出信号",
    H: "As soon as it was dark, Mrs Evans gave the signal.",
    I: "天一黑，埃文斯夫人就发出了信号。"
}, {
    B: "laptop",
    C: "['læptɒp]",
    D: "n.手提电脑",
    E: "lap+top",
    F: "lap膝盖+top上面",
    G: "膝盖上面放了部手提电脑",
    H: "Why don't you bring your laptop?",
    I: "你为什么不带着你的手提电脑呢？"
}, {
    B: "bite",
    C: "[baɪt]",
    D: "vt./vi.咬",
    E: "bi+te",
    F: "bi笔+te特",
    G: "这只笔很特别像被咬过",
    H: "Does your dog bite?",
    I: "你的狗咬人吗？"
}, {
    B: "cultural",
    C: "['kʌltʃ(ə)r(ə)l]",
    D: "adj.文化的",
    E: "cultur+al",
    F: "cultur(e)文化(熟词)+al阿狸(拼音)",
    G: "这是一只有文化的阿狸",
    H: "There are many cultural attractions in Beijing.",
    I: "北京有很多文化古迹。"
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
    B: "loss",
    C: "[lɒs]",
    D: "n.遗失，损失，丧失",
    E: "lo+ss",
    F: "lo10(象形)+ss两个美女(编码)",
    G: "10块钱是两个美女遗失的",
    H: "It would be a great loss to the company if you left.",
    I: "如果你离开将是该公司的巨大损失。"
}, {
    B: "totally",
    C: "['təutəlɪ]",
    D: "adv.完全地，整个地",
    E: "to+tall+y",
    F: "to到(熟词)+tall高的(熟词)+y树杈(编码)",
    G: "爬到高处树杈就完全地断了",
    H: "They come from totally different cultures.",
    I: "他们来自完全不同的文化。"
}, {
    B: "excitement",
    C: "[ɪk'saɪtmənt]",
    D: "n.兴奋，刺激",
    E: "ex+cit+e+ment",
    F: "ex前夫(熟词)+cit辞退(拼音)+e鹅(编码)+ment门徒(拼音)",
    G: "前夫辞退鹅的时候门徒很兴奋",
    H: "The boys were running in excitement.",
    I: "男孩们兴奋地跑来跑去。"
}, {
    B: "magical",
    C: "['mædʒɪk(ə)l]",
    D: "adj.有魔力的，魔术的，魔术的",
    E: "mag+ic+al",
    F: "mag马褂(拼音)+icIC卡(编码)+al阿狸(拼音)",
    G: "有魔力的马褂把IC卡变成了阿狸",
    H: "Diamonds have magical powers.",
    I: "钻石具有魔力。"
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
    B: "download",
    C: "[daʊn'ləʊd]",
    D: "vt.下载",
    E: "down+load",
    F: "down向下+load装载",
    G: "向下加载就是下载",
    H: "You can download music on the Internet.",
    I: "你可以在网上下载音乐。"
}, {
    B: "replace",
    C: "[rɪ'pleɪs]",
    D: "vt.代替，取代，替换",
    E: "re+place",
    F: "re再次(词缀)+place位置(熟词)",
    G: "他再次取代了我的位置",
    H: "Teachers will never be replaced by computers in the classroom.",
    I: "课堂上电脑永远不会取代老师。"
}, {
    B: "hunt",
    C: "[hʌnt]",
    D: "vt.狩猎，打猎，搜寻",
    E: "hurt",
    F: "hurt受伤",
    G: "狩猎时撞到门(n)受伤了",
    H: "Cats like to hunt mice and birds.",
    I: "猫喜欢捕食老鼠和鸟类。"
}, {
    B: "sink",
    C: "[sɪŋk]",
    D: "vi.下沉，沉下",
    E: "sing",
    F: "sing唱歌",
    G: "扛着机枪(K)唱歌，船就会下沉",
    H: "A fresh egg will sink and an old egg will float.",
    I: "新鲜鸡蛋会沉下去而不新鲜的会浮在上面。"
}, {
    B: "appearance",
    C: "[ə'pɪərəns]",
    D: "n.出现，露面",
    E: "appear+an+ce",
    F: "appear出现(熟词)+an一个(熟词)+ce厕(拼音)",
    G: "出现了一个厕所",
    H: "Flowering plants were making their first appearance last year.",
    I: "去年显花植物开始出现了。"
}, {
    B: "glory",
    C: "['glɔ:rɪ]",
    D: "n.荣誉，光荣",
    E: "glo+ry",
    F: "glo910(象形)+ry人妖(拼音)",
    G: "910个人妖获得荣誉",
    H: "You've gained the glory.",
    I: "你已获得荣誉。"
}, {
    B: "devotion",
    C: "[dɪ'vəʊʃ(ə)n]",
    D: "n.奉献，投入，热爱",
    E: "devot+i+on",
    F: "devot(e)奉献(熟词)+i蜡烛(编码)+on上面(熟词)",
    G: "乐于奉献的蜡烛在烛台上",
    H: "As a soldier, he showed the devotion to his duty.",
    I: "作为战士,他表现出了对其天职的奉献。"
}, {
    B: "slave",
    C: "[sleɪv]",
    D: "n.奴隶",
    E: "s+la+ve",
    F: "s美女(编码)+la拉(拼音)+ve维E(编码)",
    G: "美女拉着吃维E的奴隶玩",
    H: "I'm tired of being treated like a slave!",
    I: "我讨厌被当作奴隶来对待！"
}, {
    B: "sailor",
    C: "['seɪlə]",
    D: "n.水手，海员",
    E: "sai+lo+r",
    F: "sai赛(拼音)+lo10(象形)+r草(编码)",
    G: "水手在比赛中赢了10根草",
    H: "In the after years the sailor did not get home often.",
    I: "在往后的几年里这个水手经常不回家。"
}, {
    B: "charge",
    C: "[tʃɑ:dʒ]",
    D: "n.控告，命令，负载；vt.使充电",
    E: "change",
    F: "change改变",
    G: "不改变就控告你",
    H: "Who is in charge here?",
    I: "谁是这里的主管？"
}, {
    B: "physical",
    C: "['fɪzɪk(ə)l]",
    D: "adj.身体的，物理的",
    E: "ph+ys+ic+al",
    F: "ph屁孩(拼音)+ys医生(拼音)+icIC卡(编码)+al阿狸(拼音)",
    G: "屁孩给医生IC卡让阿狸做身体检查",
    H: "Physical activity promotes good health.",
    I: "身体运动促进健康。"
}, {
    B: "reality",
    C: "[rɪ'ælɪtɪ]",
    D: "n.现实，真实，事实",
    E: "real+i+ty",
    F: "real真实的(熟词)+i我(熟词I)+ty踢(谐音)",
    G: "现实中真实的我爱踢人",
    H: "She refuses to face reality.",
    I: "她不肯面对现实。"
}, {
    B: "select",
    C: "[sɪ'lekt]",
    D: "vt.挑选",
    E: "se+le+ct",
    F: "se色+le乐+ct餐厅",
    G: "色狼把可乐拿到餐厅挑选",
    H: "She lets her son select his own Christmas present.",
    I: "她让儿子自己选择圣诞礼物。"
}, {
    B: "income",
    C: "['ɪnkʌm]",
    D: "n.收入",
    E: "in+come",
    F: "in里面+come来",
    G: "从里面走过来的人收入很高",
    H: "His income is well below the average.",
    I: "他的收入大大低于平均水平。"
}, {
    B: "medal",
    C: "['med(ə)l]",
    D: "n.奖章，勋章",
    E: "me+dal",
    F: "me我(熟词)+dal大脸(拼音)",
    G: "我有大脸奖章",
    H: "She won a medal.",
    I: "她赢得了一枚奖牌。"
}, {
    B: "survive",
    C: "[sə'vaɪv]",
    D: "vt.幸免于；vi.活下来",
    E: "sur+vi+ve",
    F: "sur俗人(拼音)+vi歪(谐音)+ve维E(编码)",
    G: "俗人斜歪着吃了维E幸免于死",
    H: "Few people survived the fire.",
    I: "很少有人在火灾中逃生。"
}, {
    B: "carpet",
    C: "['kɑːpɪt]",
    D: "n.地毯",
    E: "car+pet",
    F: "car车+pet宠物",
    G: "玩具车追着宠物在地毯上跑",
    H: "The carpet was a wedding present from the Prime Minister.",
    I: "这张地毯是首相送的结婚礼物。"
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
    B: "settle",
    C: "[ˈsetl]",
    D: "vi.解决，定居；vt.解决，安排",
    E: "se+tt+le",
    F: "se色(拼音)+tt两把伞(编码)+le了(拼音)",
    G: "色狼在两把伞下定居了",
    H: "One day I'll want to settle down and have a family.",
    I: "总有一天，我会想安定下来，成个家。"
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
    B: "appreciate",
    C: "[ə'prɪ:ʃɪeɪt]",
    D: "vt.欣赏，感激，领会；vi.增值，升值",
    E: "app+re+ci+ate",
    F: "app手机应用(编码)+re热(拼音)+ci词(拼音)+ate吃(熟词)",
    G: "手机应用中最热门的背单词软件让吃货很欣赏",
    H: "In order to appreciate the novel, one must be able to enter the spirit of the work.",
    I: "要想欣赏这部小说，你必须领悟这部作品的精神。"
}, {
    B: "rely",
    C: "[rɪ'laɪ]",
    D: "vi.依赖，指望，信任",
    E: "re+ly",
    F: "re热+ly老爷",
    G: "怕热的老爷依赖我",
    H: "We don't rely on blessings from Heaven.",
    I: "我们不靠老天保佑。"
}, {
    B: "reserve",
    C: "[rɪ'zɜ:v]",
    D: "n.保护区",
    E: "re+serve",
    F: "re热(拼音)+serve服务(熟词)",
    G: "保护区很热，但服务不错",
    H: "I went to a nature reserve for pandas during last summer vacation.",
    I: "我去年暑假去了大熊猫自然保护区。"
}, {
    B: "reunite",
    C: "[ri:jʊ'naɪt]",
    D: "vt.再联合，再统一，重新联合",
    E: "re+unite",
    F: "re再(词缀)+unite联合(熟词)",
    G: "再联合的队伍无人能敌",
    H: "His first job will be to reunite the army.",
    I: "他的第一项任务将是重新统一军队。"
}, {
    B: "revolution",
    C: "[revə'lu:ʃ(ə)n]",
    D: "n.革命",
    E: "re+vo+lution",
    F: "re热(拼音)+vo我(谐音)+lution路神(谐音)",
    G: "热天我跟着路神闹革命",
    H: "This is the beginning of a true energy revolution.",
    I: "这是一个真正的能源革命的开始。"
}, {
    B: "secure",
    C: "[sɪ'kjʊə]",
    D: "adj.安全的，无虑的",
    E: "se+cure",
    F: "se色(拼音)+cure治疗(熟词)",
    G: "色狼被治疗后安全了",
    H: "I couldn't remember ever having felt so safe and secure.",
    I: "我从未有过如此安全的感觉。"
}, {
    B: "simplify",
    C: "['sɪmplɪfaɪ]",
    D: "vt.简化",
    E: "sim+pli+fy",
    F: "sim师母(谐音)+pli破例(拼音)+fy放羊(拼音)",
    G: "师母破例放羊简化生活",
    H: "That will simplify my task.",
    I: "那可简化我的工作。"
}, {
    B: "supporting",
    C: "[sə'pɔ:tɪŋ]",
    D: "adj.支持的，支撑的",
    E: "support+ing",
    F: "support支持(熟词)+ing鹰(谐音)",
    G: "这是一只受支持的鹰",
    H: "He must provide supporting evidence.",
    I: "他必须提供支持的证据。"
}, {
    B: "amber",
    C: "['æmbə]",
    D: "n.琥珀，琥珀色",
    E: "am+b+er",
    F: "am上午(熟词)+b6(象形)+er儿(拼音)",
    G: "上午6点，儿子捡到一块琥珀",
    H: "For every hundred baskets we gave them a bead of amber.",
    I: "每收齐一百篮子，我们便付给他们一粒琥珀珠。"
}, {
    B: "apart",
    C: "[əˈpɑ:t]",
    D: "adj.分开的",
    E: "a+part",
    F: "a一+part部分",
    G: "一部分是分开的",
    H: "Their two faces were hardly more than eighteen inches apart.",
    I: "他俩的脸相隔还不到18英寸。"
}, {
    B: "bargain",
    C: "[ˈbɑ:gən]",
    D: "n.便宜货，交易",
    E: "bar+gain",
    F: "bar酒吧+gain得到",
    G: "这便宜货是在酒吧得到的",
    H: "Fresh salmon is a bargain at the supermarket this week.",
    I: "这周超市的新鲜鲑鱼特价销售。"
}, {
    B: "belong",
    C: "[bɪ'lɒŋ]",
    D: "vi.属于，为…的一员",
    E: "be+long",
    F: "be是+long长的",
    G: "属于我的是那个长的",
    H: "I really think that we belong together.",
    I: "我真的觉得我们属于彼此。"
}, {
    B: "calculator",
    C: "['kælkjʊleɪtə]",
    D: "n.计算器",
    E: "cal+cu+lat+or",
    F: "cal(l)打电话(熟词)+cu粗(拼音)+lat辣条(拼音)+or偶人(拼音)",
    G: "打电话买粗辣条的偶人没带计算器",
    H: "It's a pocket calculator.",
    I: "这是一个袖珍计算器。"
}, {
    B: "cash",
    C: "[kæʃ]",
    D: "n.现金",
    E: "ca+sh",
    F: "ca擦+sh上海",
    G: "用现金擦上海的玻璃",
    H: "I have two thousand dollars in cash.",
    I: "我有2000美元现金。"
}, {
    B: "castle",
    C: "['kɑ:s(ə)l]",
    D: "n.城堡",
    E: "cast+le",
    F: "cast投(熟词)+le了(拼音)",
    G: "投了一块石头到城堡里",
    H: "We advanced towards the castle.",
    I: "我们朝城堡前进。"
}, {
    B: "debate",
    C: "[dɪ'beɪt]",
    D: "vt.辩论，争论，讨论",
    E: "de+ba+te",
    F: "de弟(谐音)+ba爸(拼音)+te特(拼音)",
    G: "弟弟和爸爸与特工在辩论",
    H: "He bowled down his opponent in the debate.",
    I: "他在辩论中彻底驳倒了对方。"
}, {
    B: "deserve",
    C: "[dɪ'zəːv]",
    D: "vi.应得，应受",
    E: "de+serve",
    F: "de弟(谐音)+serve服务(熟词)",
    G: "这是弟弟服务应得的钱",
    H: "The players deserve a pat on the back.",
    I: "球员们值得表扬。"
}, {
    B: "endanger",
    C: "[ɪn'deɪndʒə(r)]",
    D: "vt.使受到危害，危害",
    E: "en+danger",
    F: "en鹰(谐音)+danger危险(熟词)",
    G: "受危害的鹰遇到了危险",
    H: "It was foolish to endanger your life in that way.",
    I: "用那种方式危及你的生命是愚蠢的。"
}, {
    B: "explode",
    C: "[ɪk'spləʊd]",
    D: "vi./vt.引爆，爆炸，（感情）爆发",
    E: "ex+plo+de",
    F: "ex前夫(熟词)+plo破楼(拼音)+de德(拼音)",
    G: "前夫在破楼里引爆炸药炸死了德国人",
    H: "They were clearing up when the second bomb exploded.",
    I: "他们正在清理时，第二颗炸弹爆炸了。"
}, {
    B: "extinction",
    C: "[ɪk'stɪŋkʃn]",
    D: "n.灭绝，消亡",
    E: "ex+tinc+tion",
    F: "ex媳妇(拼音)+tinc听课(谐音)+tion神(谐音)",
    G: "媳妇听课时梦见灭绝了的神马",
    H: "An operation is beginning to try to save crocodiles from extinction.",
    I: "一项行动正在展开为拯救鳄鱼使其免遭灭绝。"
}, {
    B: "fierce",
    C: "[fɪəs]",
    D: "adj.凶猛的，狂热的",
    E: "fi+er+ce",
    F: "fi飞(谐音)+er儿(拼音)+ce厕(拼音)",
    G: "凶猛的鹰飞过吓得儿子躲进厕所",
    H: "The house is guarded by a fierce dog.",
    I: "一头凶恶的狗守护着那房子。"
}, {
    B: "habitat",
    C: "['hæbɪtæt]",
    D: "n.栖息地，（动植物的）自然环境",
    E: "habit+at",
    F: "habit习惯+at在",
    G: "习惯在栖息地居住",
    H: "A lot of wildlife is losing its natural habitat.",
    I: "很多野生动物在失去它们的天然栖息地。"
}, {
    B: "homeland",
    C: "['həʊmlænd]",
    D: "n.祖国，本国",
    E: "home+land",
    F: "home家+land土地",
    G: "祖国有我的家和土地",
    H: "Many are planning to return to their homeland.",
    I: "很多人正计划回到自己的祖国去。"
}, {
    B: "hopeless",
    C: "['həʊpləs]",
    D: "adj.绝望的",
    E: "hope+less",
    F: "hope希望+less更少",
    G: "希望更少，也不能绝望",
    H: "She felt totally hopeless about the future.",
    I: "她觉得未来毫无希望。"
}, {
    B: "informal",
    C: "[ɪn'fɔ:m(ə)l]",
    D: "adj.非正式的",
    E: "in+formal",
    F: "in不(词缀)+formal正式的(熟词)",
    G: "非正式的场合不用穿正式的服装",
    H: "I would like it to be an informal occasion.",
    I: "我希望把它办得不那么正式。"
}, {
    B: "network",
    C: "[ˈnetwɜːk]",
    D: "n.网络，网状物，广播网",
    E: "net+work",
    F: "net网络+work运作",
    G: "网络要运作才能形成网络",
    H: "The ultimate aim is to expand the network further.",
    I: "最终目的是为了进一步拓展该网络。"
}, {
    B: "amaze",
    C: "[ə'meɪz]",
    D: "vt.使吃惊，惊讶",
    E: "ama+ze",
    F: "ama阿妈+ze择",
    G: "阿妈的选择让我很吃惊",
    H: "He amazed us by his knowledge of Chinese history.",
    I: "他对于中国历史的了解让我们吃惊。"
}, {
    B: "afterwards",
    C: "['ɑ:ftəwədz]",
    D: "adv.后来，然后",
    E: "after+war+ds",
    F: "after后来(熟词)+war战争(熟词)+ds多少(拼音)",
    G: "后来战争打了多少年",
    H: "I’ll tell you what happened afterwards.",
    I: "我会告诉你后来发生的事的。"
}, {
    B: "technological",
    C: "[teknə'lɒdʒɪk(ə)l]",
    D: "adj.科技的",
    E: "te+ch+no+logical",
    F: "te特(拼音)+ch吃(拼音)+no没有(熟词)+logical逻辑的(熟词)",
    G: "懂高科技的特务吃东西没有逻辑",
    H: "This is an era of very rapid technological change.",
    I: "这是一个技术飞速变革的时代。"
}, {
    B: "tube",
    C: "[tju:b]",
    D: "n.管子，管，电子管",
    E: "tu+be",
    F: "tu土(拼音)+be是(熟词)",
    G: "土是用来放进管子的",
    H: "He is fed by a tube that enters his nose.",
    I: "他通过一根插入鼻子的管子进食。"
}, {
    B: "millionaire",
    C: "[mɪljə'neə]",
    D: "n.百万富翁，大富豪；adj.100万以上人口的",
    E: "millio+naire",
    F: "millio(n)百万(熟词)+naire耐热(拼音)",
    G: "百万富翁都耐热",
    H: "By the time he died, he was a millionaire.",
    I: "到他去世的时候，他已经是一位百万富翁了。"
}, {
    B: "czar",
    C: "[zɑ:]",
    D: "n.沙皇，皇帝，独裁者",
    E: "cz+ar",
    F: "cz橙子+ar矮人",
    G: "吃橙子的矮人是沙皇",
    H: "The czar was the king of Russia.",
    I: "沙皇是俄国国王。"
}, {
    B: "eyewitness",
    C: "['aɪwɪtnɪs]",
    D: "n.目击者，见证人",
    E: "eye+wit++ness",
    F: "eye眼睛(熟词)+wit智慧(熟词)++ness你死(谐音)",
    G: "目击者眼看着有智慧的你死了",
    H: "Eyewitnesses say the police then opened fire on the crowd.",
    I: "目击者说警察随即向人群开了火。"
}, {
    B: "mascot",
    C: "['mæskɒt]",
    D: "n.吉祥物",
    E: "ma+sc+ot",
    F: "ma妈+sc商场+ot呕吐",
    G: "看到吉祥物妈妈在商场就呕吐了",
    H: "The Olympic Games always has an official mascot.",
    I: "每届奥运会总会有一个官方吉祥物。"
}, {
    B: "abacus",
    C: "['æbəkəs]",
    D: "n.算盘",
    E: "aba+cus",
    F: "aba阿爸+cus出色",
    G: "阿爸最出色的地方就是算盘打得好",
    H: "Do you know how to work an abacus?",
    I: "你会打算盘吗？"
}, {
    B: "operator",
    C: "['ɒpəreɪtə]",
    D: "n.（电脑）操作员，接线员",
    E: "operat+or",
    F: "operat(e)操作(熟词)+or偶人(拼音)",
    G: "操作员正在操作偶人的电脑",
    H: "Operator, you've connected me to the wrong person again!",
    I: "接线员,你又把我的电话接错啦！"
}, {
    B: "Nagoya",
    C: "['nɑ:ɡɔ:'jɑ:]",
    D: "n.名古屋（日本本州岛中南岸港市）",
    E: "Na+go+ya",
    F: "Na那(拼音)+go去(熟词)+ya鸭(拼音)",
    G: "那人去名古屋养鸭子",
    H: "Hopefully the agreement reached in Nagoya will change all that.",
    I: "在名古屋达成的协议将有望改变这一切。"
}, {
    B: "wildlife",
    C: "['waɪldlaɪf]",
    D: "n.野生动植物",
    E: "wild+life",
    F: "wild野生的+life生命",
    G: "野生动植物都是有生命的",
    H: "This area was once a wildlife reserve.",
    I: "该地区曾是一个野生动物保护区。"
}, {
    B: "choral",
    C: "['kɔ:rəl]",
    D: "adj.唱诗班的，合唱队的",
    E: "ch+or+al",
    F: "ch吃+or偶人+al暗恋",
    G: "唱诗班的吃货偶人暗恋我",
    H: "The choral society sang the new cantata composed by its leader.",
    I: "该合唱队演唱了他们领队编写的清唱剧。"
}, {
    B: "passer-by",
    C: "['pɑ:sə'baɪ]",
    D: "n.过路人，行人",
    E: "passer+by",
    F: "passer过路人+by经过",
    G: "过路人经过一个时空隧道",
    H: "A snow ball caught the passer-by on the shoulder.",
    I: "一个雪球正打在过路人的肩上。"
}, {
    B: "dynasty",
    C: "['dɪnəstɪ]",
    D: "n.朝代，王朝",
    E: "dy+na+sty",
    F: "dy大爷+na那+sty晒太阳",
    G: "所有朝代的大爷都在那里晒太阳",
    H: "The Tang Dynasty made Chang'an its capital.",
    I: "唐代建都长安。"
}, {
    B: "swift",
    C: "[swɪft]",
    D: "adj.迅速的，快的",
    E: "sw+i+ft",
    F: "sw丝袜(拼音)+i我(熟词I)+ft斧头(拼音)",
    G: "穿丝袜的我看到斧头从天而降迅速躲开了",
    H: "He made a very swift recovery.",
    I: "他恢复得很快。"
}, {
    B: "finance",
    C: "[faɪ'næns]",
    D: "n.金融，财政，财政学",
    E: "fin+an+ce",
    F: "fin(d)找到(熟词)+an一(熟词)+ce厕(拼音)",
    G: "找到一个厕所学金融",
    H: "The budget of the finance has been hacked  almost in half.",
    I: "财政预算几乎被削减了一半。"
}, {
    B: "anyhow",
    C: "['enɪhaʊ]",
    D: "adv.无论如何，即使如此",
    E: "any+how",
    F: "any任何+how方法",
    G: "无论如何，任何方法都没用",
    H: `"Thanks very much anyhow."— "It's a pleasure."`,
    I: "“无论怎样，非常感谢。”——“别客气。”"
}, {
    B: "niece",
    C: "[ni:s]",
    D: "n.侄女，外甥女",
    E: "nie+ce",
    F: "nie捏+ce册",
    G: "侄女喜欢捏着册子玩",
    H: "Her niece works as a nurse.",
    I: "她侄女当护士。"
}, {
    B: "decrease",
    C: "[dɪ'kri:s]",
    D: "vt./vi.减少，（使）变小，或变少",
    E: "de+cr+ease",
    F: "de弟(谐音)+cr超人(拼音)+ease减轻(熟词)",
    G: "使弟弟",
    H: "The population of the area has decreased.",
    I: "这一地区的人口减少了。"
}, {
    B: "fund",
    C: "[fʌnd]",
    D: "n.资金，基金",
    E: "fond",
    F: "fond喜欢",
    G: "我喜欢资金",
    H: "The concert will raise funds for research into AIDS.",
    I: "这场音乐会将为艾滋病研究筹款。"
}, {
    B: "mop",
    C: "[mɒp]",
    D: "n.拖把；vt.用拖把拖",
    E: "mo+p",
    F: "mo磨(拼音)+p皮鞋(编码)",
    G: "用拖把磨皮鞋",
    H: "There was a woman mopping the stairs.",
    I: "有个女人正在拖楼梯。"
}, {
    B: "zone",
    C: "[zəʊn]",
    D: "n.地区，区域，范围",
    E: "z+one",
    F: "z鸭子(编码)+one一(熟词)",
    G: "鸭子只在这一地区出现",
    H: "The U.N. has declared it to be a safe zone.",
    I: "联合国已宣布它为安全区。"
}, {
    B: "species",
    C: "['spi:ʃi:z]",
    D: "n.（动植物的）物种，种",
    E: "sp+e+ci+es",
    F: "sp视频(拼音)+e衣(编码)+ci雌(拼音)+es饿死(拼音)",
    G: "视频里穿衣服的雌鸟饿死后这个物种就灭绝了",
    H: "The giant panda has become an endangered species.",
    I: "大熊猫已成了一种濒临灭绝的动物。"
}, {
    B: "rub",
    C: "[rʌb]",
    D: "vt.摩擦，擦",
    E: "r+u+b",
    F: "r草+u桶+b笔",
    G: "草在桶里和笔摩擦",
    H: "Rub the surface of the wood in preparation for the varnish.",
    I: "打磨木头的表面，为刷清漆做准备。"
}, {
    B: "contain",
    C: "[kən'teɪn]",
    D: "vt.容忍，容纳，包含",
    E: "co+n+tain",
    F: "co可乐(熟词coke)+n门(编码)+tain太难(拼音)",
    G: "容忍他喝着可乐进门太难了",
    H: "The hall can contain two hundred people.",
    I: "大厅可以容纳200人。"
}, {
    B: "classical",
    C: "['klæsɪkl]",
    D: "adj.古典的，古典文艺的",
    E: "class+ic+al",
    F: "class班(熟词)+icIC卡(编码)+al阿狸(拼音)",
    G: "班上拿着IC卡的阿狸在唱古典歌",
    H: "I like classical music.",
    I: "我喜欢古典音乐。"
}, {
    B: "roll",
    C: "[rəʊl]",
    D: "vt./vi.滚动，使摇摆；n.摇晃，卷",
    E: "r+o+ll",
    F: "r草(编码)+o蛋(编码)+ll11(象形)",
    G: "小草把鸡蛋滚了11圈",
    H: "The ball rolled into the net.",
    I: "球滚进了网中。"
}, {
    B: "folk",
    C: "[fəʊk]",
    D: "adj.民间的",
    E: "fo+l+k",
    F: "fo佛(拼音)+l1(象形)+k机关枪(编码)",
    G: "民间的佛拿着一把机关枪",
    H: "This is an South American folk art.",
    I: "这是一种南美民间艺术。"
}, {
    B: "jazz",
    C: "[dʒæz]",
    D: "n.爵士音乐",
    E: "j+a+zz",
    F: "j周杰伦(编码Jay)+a一(熟词)+zz22(象形)",
    G: "周杰伦一口气学会了22首爵士乐",
    H: "I like jazz.",
    I: "我喜欢爵士乐。"
}, {
    B: "dip",
    C: "[dɪp]",
    D: "vt.泡，浸，蘸，舀取，把伸入",
    E: "di+p",
    F: "di弟(拼音)+p皮鞋(编码)",
    G: "弟弟把皮鞋泡进水里",
    H: "Then we could go dip ourselves in any color we wanted.",
    I: "那样我们就可以想要什么颜色就浸在什么颜色。"
}, {
    B: "beard",
    C: "[bɪəd]",
    D: "n.胡须",
    E: "bear+d",
    F: "bear熊(熟词)+d狗(编码dog)",
    G: "熊把狗的胡须都拔了",
    H: "He has decided to grow a beard.",
    I: "他已经决定蓄胡须。"
}, {
    B: "spoil",
    C: "[spɒɪl]",
    D: "vt.糟蹋，溺爱",
    E: "sp+oil",
    F: "sp赛跑(拼音)+oil油(熟词)",
    G: "赛跑时穿的衣服被油糟蹋了",
    H: "It's important not to let mistakes spoil your life.",
    I: "重要的是不要让错误毁了你的生活。"
}, {
    B: "ballad",
    C: "['bæləd]",
    D: "n.民谣，歌谣，情歌",
    E: "ball+ad",
    F: "ball球(熟词)+ad阿弟(拼音)",
    G: "拿着球的阿弟在唱民谣",
    H: "I love the ballad he wrote.",
    I: "我喜欢他写的这首民谣。"
}, {
    B: "transistor",
    C: "[træn'zɪstə(r)]",
    D: "n.晶体管",
    E: "tran+sist+or",
    F: "tran船(谐音)+sist(er)姐妹(熟词)+or偶人(拼音)",
    G: "船上的姐妹送给偶人晶体管",
    H: "Every transistor has at least three electrodes.",
    I: "每个晶体管至少有三个电极。"
}, {
    B: "Atlanta",
    C: "[æt'læntə]",
    D: "n.亚特兰大（女名，城市名）",
    E: "At+lan+ta",
    F: "At在(熟词)+lan拦(拼音)+ta他(拼音)",
    G: "亚特兰大在马路上拦住了他",
    H: "I had to catch a plane up to Atlanta that next day.",
    I: "第二天我就得赶飞机前往亚特兰大。"
}, {
    B: "mathematical",
    C: "[mæθ(ə)'mætɪk(ə)l]",
    D: "adj.数学的",
    E: "math+e+mati+cal",
    F: "math数学(熟词)+e鹅(编码)+mati马蹄(拼音)+cal(l)打电话(熟词)",
    G: "数学课上鹅被马蹄踩到后打电话报警",
    H: "He is a mathematical genius.",
    I: "他是一个数学方面的天才。"
}, {
    B: "compete",
    C: "[kəm'pi:t]",
    D: "vi.比赛，竞争，对抗",
    E: "com+pet+e",
    F: "com计算机(编码)+pet宠物(熟词)+e鹅(编码)",
    G: "计算机上有个宠物和鹅在比赛",
    H: "We can't compete with them on price.",
    I: "我们在价格上无法与他们竞争。"
}, {
    B: "incident",
    C: "[ˈɪnsɪd(ə)nt]",
    D: "n.事变，事件",
    E: "in+ci+dent",
    F: "in在里面(熟词)+ci刺(拼音)+dent等他(谐音)",
    G: "里面的刺客等他发生事变",
    H: "The incident increased the contradictions between the two countries.",
    I: "这一事件加深了两个国家之间的矛盾。"
}, {
    B: "rap",
    C: "[ræp]",
    D: "n.说唱音乐；vt.轻敲",
    E: "rat",
    F: "rat老鼠",
    G: "老鼠在表演说唱",
    H: "There was a sharp rap on the door.",
    I: "有人在重重地急促敲门。"
}, {
    B: "performance",
    C: "[pə'fɔ:m(ə)ns]",
    D: "n.表演，性能，绩效",
    E: "perform+an+ce",
    F: "perform表演(熟词)+an安(拼音)+ce厕(拼音)",
    G: "表演结束后安以轩去上厕所了",
    H: "They  laid on an  acrobatic  performance  for the children.",
    I: "他们为孩子们安排了一场杂技表演。"
}, {
    B: "broadcast",
    C: "['brɔ:dkɑ:st]",
    D: "vi./vt./n.广播，播放",
    E: "broad+ca+st",
    F: "broad宽阔的(熟词)+ca擦(拼音)+st石头(拼音)",
    G: "他在宽阔的大河里擦石头边听广播",
    H: "The concert will be broadcast live on television and radio.",
    I: "音乐会将通过电视和电台现场直播。"
}, {
    B: "overnight",
    C: "[əʊvə'naɪt]",
    D: "adv.在晚上，在夜里",
    E: "over+night",
    F: "over在上面+night晚上",
    G: "住在上面的他经常在晚上吼叫",
    H: "The decision was reached overnight.",
    I: "这个决定是夜间做出的。"
}, {
    B: "tadpole",
    C: "['tædpəʊl]",
    D: "n.蝌蚪",
    E: "tad+pole",
    F: "tad他的+pole破了",
    G: "蝌蚪把他的手咬破了",
    H: "The tadpole has become a frog.",
    I: "这个蝌蚪已长成青蛙。"
}, {
    B: "painful",
    C: "['peɪnfʊl]",
    D: "adj.痛苦的，疼痛的",
    E: "pain+ful",
    F: "pain疼痛(熟词)+ful俘虏(拼音)",
    G: "全身的疼痛让俘虏痛苦不堪",
    H: "Teething can be painful and make your baby irritable.",
    I: "长牙会很难受，婴儿会烦躁不安。"
}, {
    B: "vase",
    C: "[vɑ:z]",
    D: "n.花瓶，瓶",
    E: "va+se",
    F: "va娃(谐音)+se色(拼音)",
    G: "娃娃喜欢彩色的花瓶",
    H: "It's a vase of red roses.",
    I: "这是一个插着红玫瑰的花瓶。"
}, {
    B: "striker",
    C: "['straɪkə]",
    D: "n.（足球的）前锋，敲击者",
    E: "st+rik+er",
    F: "st石头+rik日寇+er儿",
    G: "踢球时前锋拿石头扔日寇却打到儿子",
    H: "The striker scored his sixth goal of the season.",
    I: "这位前锋进了他本赛季的第6个球。"
}, {
    B: "analytical",
    C: "[ænə'lɪtɪk(ə)l]",
    D: "adj.分析的",
    E: "ana+ly+ti+cal",
    F: "ana阿娜(拼音)+ly老爷(拼音)+ti踢(拼音)+cal(l)打电话(熟词)",
    G: "阿娜分析的是老爷踢了打电话的人",
    H: "He has a very analytical mind.",
    I: "他善于分析问题。"
}, {
    B: "Zimbabwe",
    C: "[zim'bɑ:bweɪ]",
    D: "n.津巴布韦（非洲南部一国家）",
    E: "Zi+mb+ab+we",
    F: "Zi自(拼音)+mb面包(拼音)+ab阿爸(拼音)+we我们(熟词)",
    G: "自面包被阿爸吃了后我们就去了津巴布韦",
    H: "Zimbabwe is a beautiful country.",
    I: "津巴布韦是一个美丽的国度。"
}, {
    B: "basis",
    C: "['beɪsɪs]",
    D: "n.基础",
    E: "ba+sis",
    F: "ba爸(拼音)+sis(ter)姐妹(熟词)",
    G: "爸和姐妹的幸福是我人生的基础",
    H: "He  quarried  in  various  books for scientific  basis.",
    I: "他从各种书籍中搜寻科学根据。"
}, {
    B: "artificial",
    C: "[ɑːtɪ'fɪʃ(ə)l]",
    D: "adj.人造的",
    E: "ar+ti+ficial",
    F: "ar矮人(拼音)+ti提(拼音)+ficial肥手(谐音)",
    G: "矮人提着的肥手是人造的",
    H: "How about this artificial leather purse?",
    I: "这款人造皮革钱包怎么样？"
}, {
    B: "relic",
    C: "['relɪk]",
    D: "n.遗迹，遗物，纪念物",
    E: "re+li+c",
    F: "re热(拼音)+li李(拼音)+c月(编码)",
    G: "热天小李在月光下参观历史遗迹",
    H: "During the dig, we found some relics from the Stone Age.",
    I: "在发掘过程中，我们发现了一些石器时代的遗迹。"
}, {
    B: "rare",
    C: "[reə]",
    D: "adj.稀罕的，稀有的，珍贵的",
    E: "r+are",
    F: "r草(编码)+are是(熟词)",
    G: "这种草是很稀罕的",
    H: "It's very rare to find these birds in England in winter.",
    I: "在英国，冬天很少能看到这种鸟。"
}, {
    B: "reception",
    C: "[rɪ'sepʃ(ə)n]",
    D: "n.接待，招待会，接收",
    E: "rece+p+tion",
    F: "rece热厕(拼音)+p皮鞋(编码)+tion神(谐音)",
    G: "在很热的厕所穿皮鞋受到了神的接待",
    H: "They gave him a cool reception.",
    I: "他们冷淡地接待他。"
}, {
    B: "valued",
    C: "['vælju:d]",
    D: "adj.宝贵的，重要的，贵重的",
    E: "v+alu+ed",
    F: "v维生素(编码)+alu阿鲁(拼音)+ed耳朵(拼音)",
    G: "维生素对治好阿鲁的耳朵是很宝贵的",
    H: "He is a valued member of staff.",
    I: "他是一个受器重的职员。"
}, {
    B: "Greece",
    C: "[ɡri:s]",
    D: "n.希腊",
    E: "Gr+ee+ce",
    F: "Gr工人(拼音)+ee两只鹅(编码)+ce厕(拼音)",
    G: "工人带两只鹅掉进厕所穿越到希腊",
    H: "Greece was the cradle of western civilization.",
    I: "希腊是西方文明的发源地。"
}, {
    B: "gymnasium",
    C: "[dʒɪm'neɪzɪəm]",
    D: "n.健身房，体育馆",
    E: "gym+nasi+u+m",
    F: "gym吉姆(谐音)+nasi拿四(拼音)+u桶(编码)+m山(编码)",
    G: "吉姆拿四个桶去山里的健身房锻炼",
    H: "I have found a new gymnasium.",
    I: "我找到一个新的健身房。"
}, {
    B: "wreath",
    C: "[ri:θ]",
    D: "n.花圈，花冠，圈状物",
    E: "wr+eat+h",
    F: "wr蛙人(拼音)+eat吃(熟词)+h椅子(编码)",
    G: "蛙人吃了椅子上的花圈",
    H: "The bride wore a veil with a wreath of silk flowers.",
    I: "新娘戴着一块饰有丝绸花环的面纱。"
}, {
    B: "similarity",
    C: "[sɪmə'lærətɪ]",
    D: "n.相似点，相像性",
    E: "similar+i+ty",
    F: "similar相似的(熟词)+i蜡烛(编码)+ty太阳(拼音)",
    G: "长的相似的蜡烛和太阳有相似点",
    H: "I can see the similarity between you and your mother.",
    I: "我能看出你和你母亲的相似之处。"
}, {
    B: "Athens",
    C: "['æθɪnz]",
    D: "n.雅典（希腊首都）",
    E: "A+then+s",
    F: "A苹果(编码)+then那时(熟词)+s美女(编码)",
    G: "雅典的苹果在那时都被美女吃了",
    H: "Can you tell me something about the Acropolis in Athens?",
    I: "你能给我讲一些关于雅典卫城的事吗?"
}, {
    B: "princess",
    C: "[ˌprɪnˈses]",
    D: "n.公主",
    E: "pr+in+ce+ss",
    F: "pr仆人(拼音)+in里面(熟词)+ce厕(拼音)+ss两个美女(编码)",
    G: "仆人去里面上厕所见到两个美女公主",
    H: "Princess Anne topped the guest list.",
    I: "安妮公主的名字位于来宾名单之首。"
}, {
    B: "PC",
    C: "[,pi:'si:]",
    D: "abbr.(personal computer)个人电脑，个人计算机",
    E: "p+c",
    F: "p皮鞋(编码)+c看见(熟词see)",
    G: "穿着皮鞋看见个人电脑被偷了",
    H: "Go over to your PC and boot it up.",
    I: "去启动你的个人电脑。"
}, {
    B: "PDA",
    C: "[ˌpi:di:ˈeɪ]",
    D: "abbr.掌上电脑，个人数码助理",
    E: "P+D+A",
    F: "P皮鞋+D弟+A苹果",
    G: "穿皮鞋的弟弟买了苹果掌上电脑",
    H: "A typical PDA can function as a mobile phone and a personal organizer.",
    I: "一部典型的个人数字助理可以兼具手机和个人记事簿功能。"
}, {
    B: "sum",
    C: "[sʌm]",
    D: "n.算术题，总数，金额",
    E: "su+m",
    F: "su苏(拼音)+m麦当劳(编码)",
    G: "苏在麦当劳做算术题",
    H: "Large sums of money were lost.",
    I: "大笔大笔的钱损失了。"
}, {
    B: "logical",
    C: "['lɒdʒɪk(ə)l]",
    D: "adj.合逻辑的",
    E: "log+ic+al",
    F: "log109(象形)+icIC卡(编码)+al阿狸(拼音)",
    G: "109张IC卡都发给阿狸是合逻辑的吗？",
    H: "It was the logical thing to do.",
    I: "这样做才合乎逻辑。"
}, {
    B: "personally",
    C: "['pɜ:s(ə)n(ə)lɪ]",
    D: "adv.就本人而论，亲自地",
    E: "person+all+y",
    F: "person个人(熟词)+all全部(熟词)+y树杈(编码)",
    G: "就本人而论，个人喜欢把房子全部用树杈装饰",
    H: "Personally I think it's a waste of time.",
    I: "在我看来，我认为这是浪费时间。"
}, {
    B: "web",
    C: "[web]",
    D: "n.网",
    E: "we+b",
    F: "we我们(熟词)+b蜜蜂(编码bee)",
    G: "我们用网抓蜜蜂",
    H: "The handbook is available on the Web.",
    I: "这本手册互联网上有。"
}, {
    B: "programmer",
    C: "['prəʊgræmə]",
    D: "n.程序师",
    E: "program+m+er",
    F: "program程序(熟词)+m山(编码)+er儿(拼音)",
    G: "程序是山里儿子的程序师设计的",
    H: "Her brother is a programmer.",
    I: "她的弟弟是个程序师。"
}, {
    B: "android",
    C: "['ændrɒɪd]",
    D: "n.机器人",
    E: "an+dro+id",
    F: "an安(拼音)+dro卓(谐音)+id身份(编码)",
    G: "机器人的安卓系统可以识别身份",
    H: "Actually, I like being an android.",
    I: "事实上，我喜欢做个机器人。"
}, {
    B: "Seattle",
    C: "[sɪ'ætl]",
    D: "n.西雅图（美国一港市）",
    E: "Sea+tt+le",
    F: "Sea海(熟词)+tt两把伞(编码)+le了(拼音)",
    G: "西雅图海岸上有两把伞被偷了",
    H: "I live in Seattle.",
    I: "我住在西雅图。"
}, {
    B: "threaten",
    C: "['θretn]",
    D: "vt.威胁，恐吓",
    E: "th+r+eat+en",
    F: "th土豪(拼音)+r草(编码)+eat吃(熟词)+en摁(拼音)",
    G: "土豪没草吃威胁说要摁住我打",
    H: "They threatened the shopkeeper with a gun.",
    I: "他们用枪威胁店主。"
}, {
    B: "antelope",
    C: "['æntɪləʊp]",
    D: "n.羚羊",
    E: "ant+e+lope",
    F: "ant蚂蚁(熟词)+e鹅(编码)+lope老婆(谐音)",
    G: "蚂蚁说鹅的老婆是羚羊",
    H: "The hunter found a herd of antelope.",
    I: "猎人发现了一群羚羊。"
}, {
    B: "laughter",
    C: "['lɑ:ftə]",
    D: "n.笑，笑声",
    E: "laugh+te+r",
    F: "laugh笑(熟词)+te特(拼音)+r草(编码)",
    G: "爱笑的特务在吃草",
    H: "We couldn't withhold our laughter.",
    I: "我们忍不住大笑起来。"
}, {
    B: "mercy",
    C: "['mɜ:sɪ]",
    D: "n.怜悯，仁慈，宽恕",
    E: "me+r+cy",
    F: "me我(熟词)+r草(编码)+cy成员(拼音)",
    G: "我种的草是对成员的怜悯",
    H: "They showed their enemies no mercy.",
    I: "他们不给敌人半点仁慈。"
}, {
    B: "mosquito",
    C: "[mɒ'ski:təʊ]",
    D: "n.蚊子",
    E: "mos+quit+o",
    F: "mos魔术(拼音)+quit放弃(熟词)+o呼啦圈(编码)",
    G: "魔术中放弃用呼啦圈打死蚊子",
    H: "I was awake all night scratching my mosquito bites.",
    I: "我被蚊子咬，搔了一夜没睡着。"
}, {
    B: "millipede",
    C: "['mɪlɪpi:d]",
    D: "n.千足虫",
    E: "milli+pe+de",
    F: "milli米丽(谐音)+pe体育课(编码)+de得(拼音)",
    G: "艾米丽在体育课上得到一只千足虫",
    H: "Normally, a millipede looks like a harmless creature to humans.",
    I: "平时，千足虫看起来像是对人类无害的生。"
}, {
    B: "rhino",
    C: "['raɪnəʊ]",
    D: "n.犀牛",
    E: "r+hi+no",
    F: "r草(编码)+hi嗨(熟词)+no不(熟词)",
    G: "犀牛在草地上嗨得不愿离开",
    H: "The rhino's most acute sense is smell.",
    I: "犀牛最敏锐的感觉器官是嗅觉。"
}, {
    B: "county",
    C: "['kaʊntɪ]",
    D: "n.县，郡",
    E: "co+un+ty",
    F: "co可乐(熟词coke)+un联合国(编码)+ty踢(谐音)",
    G: "县里的可乐瓶是从联合国踢来的",
    H: "She is the most popular girl in the county.",
    I: "她是这个县里最受欢迎的女孩。"
}, {
    B: "inspect",
    C: "[ɪn'spekt]",
    D: "vt.检查，视察",
    E: "in+s+pe+ct",
    F: "in里面(熟词)+s美女(编码)+pe体育课(编码)+ctCT(编码)",
    G: "检查里面的美女是否在体育课上做CT扫描",
    H: "Police were called out to inspect the arriving planes.",
    I: "警察被召集起来去检查抵达的飞机。"
}, {
    B: "karaoke",
    C: "[ˌkæri'əʊkɪ]",
    D: "n.卡拉OK",
    E: "kara+ok+e",
    F: "kara卡拉(谐音)+okOK(熟词)+e鹅(编码)",
    G: "在卡拉OK唱歌的鹅是麦霸",
    H: "I want to sing at a karaoke bar.",
    I: "我想去卡拉OK酒吧唱歌。"
}, {
    B: "pub",
    C: "[pʌb]",
    D: "n.酒馆，酒吧",
    E: "pu+b",
    F: "pu扑(拼音)+b蜜蜂(编码bee)",
    G: "在酒馆里他扑倒一只巨型蜜蜂",
    H: "He was in the pub until closing time.",
    I: "他在酒馆里待到打烊。"
}, {
    B: "addition",
    C: "[ə'dɪʃn]",
    D: "n.加，加法，添加物",
    E: "add+i+tion",
    F: "add加(熟词)+i蜡烛(编码)+tion神(谐音)",
    G: "加点蜡烛油供神",
    H: "We have made several additions to the collection.",
    I: "我们的收藏又增添了几件。"
}, {
    B: "briefly",
    C: "['bri:flɪ]",
    D: "adv.简要地，短暂地",
    E: "br+ie+fly",
    F: "br病人(拼音)+ieIE浏览器(编码)+fly飞(熟词)",
    G: "简要地说就是病人借助IE浏览器飞走了",
    H: "He smiled briefly.",
    I: "他短暂地微微一笑。"
}, {
    B: "trial",
    C: "['traiəl]",
    D: "n.试验，审讯，磨炼；adj.试验的",
    E: "tr+i+al",
    F: "tr土人(拼音)+i蜡烛(编码)+al暗流(拼音)",
    G: "土人拿着蜡烛在暗流里做试验",
    H: "Trial and error is the source of our knowledge.",
    I: "尝试和失败同是学识之源。"
}, {
    B: "evidence",
    C: "['evɪd(ə)ns]",
    D: "n.证据，根据",
    E: "e+vi+dence",
    F: "e鹅(编码)+vi胜利(谐音V)+dence等死(谐音)",
    G: "没有证据，鹅胜利后也只能等死",
    H: "Several experts are to give evidence on the subject.",
    I: "数位专家将就这个问题给出证据。"
}, {
    B: "maid",
    C: "[meɪd]",
    D: "n.女佣，女仆，少女",
    E: "mai+d",
    F: "mai买(拼音)+d狗(编码dog)",
    G: "女佣买了只狗狗",
    H: "Her maid helped her to dress for the party.",
    I: "她的女仆帮她梳妆打扮以参加派对。"
}, {
    B: "competitor",
    C: "[kəm'petɪtə]",
    D: "n.竞争者",
    E: "compet+it+or",
    F: "compet(e)竞争(熟词)+itIT(编码)+or偶人(拼音)",
    G: "竞争者抢走了IT男的偶人",
    H: "The bank isn't performing as well as some of its competitors.",
    I: "这家银行没有它的一些竞争对手表现好。"
}, {
    B: "olive",
    C: "['ɒlɪv]",
    D: "n.橄榄，橄榄树；adj.橄榄的，橄榄色的",
    E: "o+live",
    F: "o鸡蛋(编码)+live活的(熟词)",
    G: "橄榄树上的鸡蛋是活的",
    H: "Soon we left the coolness of the olive groves.",
    I: "很快我们就离开了凉爽的橄榄树林。"
}, {
    B: "PE",
    C: "[ˌpiˈɪ]",
    D: "abbr.体育（=PhysicalEducation）",
    E: "p+e",
    F: "p皮鞋+e鹅",
    G: "穿皮鞋的鹅在上体育课",
    H: "I like PE class.",
    I: "我喜欢体育课。"
}, {
    B: "chip",
    C: "[tʃip]",
    D: "vt.削成碎片，凿，削",
    E: "chi+p",
    F: "chi吃(拼音)+p皮(编码)",
    G: "吃掉了削成碎片的皮鞋",
    H: "The blow chipped the woman's tooth.",
    I: "那一击把那个女人的一颗牙打掉了一块。"
}, {
    B: "arise",
    C: "[əˈraɪz]",
    D: "vi.上升，出现，发生",
    E: "a+rise",
    F: "a苹果(编码)+rise上升(熟词)",
    G: "一个苹果在上升",
    H: `Accidents arise from carelessness.  
`,
    I: "疏忽大意往往会引起事故的发生。"
},
// 2
{
    B: "celebration",
    C: "[selɪ'breɪʃ(ə)n]",
    D: "n.庆祝，祝贺",
    E: "celebrat+i+on",
    F: "celebrat(e)庆祝(熟词)+i蜡烛(编码)+on上(熟词)",
    G: "庆祝时需把蜡烛点上",
    H: "We had a birthday celebration yesterday.",
    I: "昨天我们有场生日庆祝会。"
}, {
    B: "Halloween",
    C: "[ˌhæləʊ'i:n]",
    D: "n.万圣节前夕",
    E: "hall+ow+ee+n",
    F: "hall大厅(熟词)+ow欧文(拼音)+ee两只鹅(编码)+n门(编码)",
    G: "大厅里的欧文看两只鹅在门外过万圣节",
    H: "We need some chocolate and some pumpkins for Halloween.",
    I: "在万圣节前夕，我们需要一些巧克力和南瓜。"
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
    B: "ahead",
    C: "[ə'hed]",
    D: "adv.向前地",
    E: "a+head",
    F: "a苹果(编码)+head头(熟词)",
    G: "向前地走的时候苹果砸到了头",
    H: "Go ahead this street.",
    I: "沿着这条街直走。"
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
    B: "diet",
    C: "['daɪət]",
    D: "n.饮食，食物，规定饮食",
    E: "di+et",
    F: "di弟(拼音)+et外星人(编码)",
    G: "弟弟被外星人控制了饮食",
    H: "We should have a healthy diet.",
    I: "我们应该有一个健康的饮食。"
}, {
    B: "crash",
    C: "[kræʃ]",
    D: "n.撞碎，坠毁",
    E: "cr+ash",
    F: "cr超人(拼音)+ash灰尘(熟词)",
    G: "撞碎超人会变成灰尘",
    H: "Her husband was killed in a car crash.",
    I: "她的丈夫死于一场车祸。"
}, {
    B: "harbour",
    C: "['hɑ:bə]",
    D: "n.（=habor）海港，避难所；vt/vi.隐匿，怀着，包含",
    E: "ha+rb+our",
    F: "ha哈(拼音)+rb日本(拼音)+our我们的(熟词)",
    G: "哈哈，日本的海港没我们的大",
    H: "This harbour is a natural harbour.",
    I: "这个港口是天然港。"
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
    B: "beauty",
    C: "['bju:tɪ]",
    D: "n.美人，美丽，美",
    E: "be+au+ty",
    F: "be是(熟词)+au澳大利亚(编码)+ty太阳(拼音)",
    G: "这位美人就是澳大利亚的太阳女神",
    H: "My sister is a beauty.",
    I: "我姐姐是个美女。"
}, {
    B: "sign",
    C: "[saɪn]",
    D: "n.符号，标牌，招牌",
    E: "sig+n",
    F: "sig四哥(拼音)+n门(编码)",
    G: "四哥在门上画符号",
    H: "This is a shop sign.",
    I: "这是一个商店招牌。"
}, {
    B: "carrot",
    C: "['kærət]",
    D: "n.胡萝卜",
    E: "car+rot",
    F: "car小车+rot腐烂",
    G: "小车里装满了腐烂的胡萝卜",
    H: "I like eating carrot.",
    I: "我喜欢吃胡萝卜。"
}, {
    B: "Easter",
    C: "['i:stə]",
    D: "n.复活节",
    E: "east+er",
    F: "east东方(熟词)+er儿(拼音)",
    G: "东方的儿子都过复活节",
    H: "Today is Easter.",
    I: "今天是复活节。"
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
    B: "businessman",
    C: "[ˈbɪznəsmæn]",
    D: "n.商人",
    E: "business+man",
    F: "business生意+man男人",
    G: "那个做生意的男人是个外国商人",
    H: "He was born to be a successful businessman.",
    I: "他注定会成为一个成功的商人。"
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
    B: "chain",
    C: "[tʃeɪn]",
    D: "n.链子",
    E: "cha+in",
    F: "cha茶(拼音)+in里面(熟词)",
    G: "茶杯里有条链子",
    H: "She has a silver chain.",
    I: "她有一根银链。"
}, {
    B: "distance",
    C: "['dɪst(ə)ns]",
    D: "n.路程，距离，疏远",
    E: "dis+tance",
    F: "dis的士+tance探测",
    G: "开的士去探测路程",
    H: "We suddenly saw her in the distance.",
    I: "我们突然看见她在远处。"
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
    B: "produce",
    C: "[prə'dju:s]",
    D: "vt./vi.生产，产生",
    E: "pro+du+ce",
    F: "pro飘柔+du堵+ce厕",
    G: "生产飘柔时堵了厕所",
    H: "We need to produce more shoes.",
    I: "我们需要多生产鞋子。"
}, {
    B: "protein",
    C: "['prəʊti:n]",
    D: "n.蛋白质，朊；adj.蛋白质的",
    E: "pro+te+in",
    F: "pro飘柔(拼音)+te特(拼音)+in里面(熟词)",
    G: "飘柔特好，里面含有蛋白质",
    H: "Peas, beans and lentils are a good source of vegetable protein.",
    I: "豌豆、豆荚和扁豆是植物蛋白质的大好来源。"
}, {
    B: "raw",
    C: "[rɔ:]",
    D: "adj.生的，天然的",
    E: "saw",
    F: "saw看",
    G: "看见他在吃生的草(r)",
    H: "Half of it is burned and half of it is raw.",
    I: "一半烧焦了，另一半还是生的。"
}, {
    B: "spaceship",
    C: "['speɪsʃɪp]",
    D: "n.宇宙飞船",
    E: "space+ship",
    F: "space太空+ship船",
    G: "太空的船就是宇宙飞船",
    H: "I will go there by spaceship.",
    I: "我要乘宇宙飞船去那里。"
}, {
    B: "system",
    C: "[ˈsɪstəm]",
    D: "n.系统，制度，体制",
    E: "sys+tem",
    F: "sys实验室+tem特萌",
    G: "实验室里研发出一套特萌的系统",
    H: "Their system is different to us.",
    I: "他们的制度和我们不一样。"
}, {
    B: "theory",
    C: "['θɪərɪ]",
    D: "n.理论，学说",
    E: "the+o+ry",
    F: "the这(熟词)+o鸡蛋(编码)+ry人妖(拼音)",
    G: "这个吃鸡蛋的人妖在学习理论",
    H: "This scientist has put forth a new theory in his research field.",
    I: "这位科学家在他的研究领域提出了一种新理论。"
}, {
    B: "worldwide",
    C: "['wɝldwaɪd]",
    D: "adj.遍及全世界的，世界性的",
    E: "world+wide",
    F: "world世界+wide宽阔的",
    G: "遍及全世界的人证明了世界很宽阔",
    H: "The story has attracted worldwide attention.",
    I: "这件事已经引起了全世界的关注。"
}, {
    B: "Dinosaur",
    C: "['daɪnəsɔ:]",
    D: "n.恐龙，过时、落伍的人或事物",
    E: "di+no+saur",
    F: "di弟(拼音)+no没有(熟词)+saur锁(谐音)",
    G: "弟弟没有锁门恐龙跑出来了",
    H: "My son likes dinosaurs very much.",
    I: "我儿子非常喜欢恐龙。"
}, {
    B: "hostess",
    C: "['hostəs]",
    D: "n.女主人，女主持人",
    E: "host+es+s",
    F: "host主持人(熟词)+es饿死(拼音)+s美女(编码)",
    G: "主持人饿死后，美女成为新女主人",
    H: "The hostess set a lamp on the table.",
    I: "女主人把一盏灯放在桌子上。"
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
    B: "author",
    C: "['ɔːθə]",
    D: "n.作家，作者，创始人",
    E: "au+th+or",
    F: "au澳大利亚(编码)+th土豪(拼音)+or或者(熟词)",
    G: "澳大利亚人都是土豪或者作家",
    H: "The author's intention is to keep everyone guessing until the bitter end.",
    I: "这位作家打算把悲惨结局的悬念一直保留到最后。"
}, {
    B: "barber",
    C: "[ˈbɑ:bə(r)]",
    D: "n.理发师",
    E: "bar+b+er",
    F: "bar酒吧(熟词)+b6(象形)+er耳(拼音)",
    G: "酒吧里有6个人的耳朵被理发师剪了",
    H: `She asked the barber to crop her hair short.  
`,
    I: "她叫理发师把她的头发剪短了。"
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
    B: "climate",
    C: "['klaɪmət]",
    D: "n.气候",
    E: "clim+ate",
    F: "clim(b)爬+ate吃",
    G: "在气候好的时候爬到山顶吃小笼包",
    H: "I don't like the hot climate here.",
    I: "我不喜欢这里炎热的气候。"
}, {
    B: "fashion",
    C: "['fæʃn]",
    D: "n.时尚，样子，方式",
    E: "fashi+on",
    F: "fashi发饰(拼音)+on在...上(熟词)",
    G: "这款发饰在国际上都是一种时尚",
    H: "Jeans are still in fashion.",
    I: "牛仔裤仍然流行。"
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
    B: "patience",
    C: "[ˈpeɪʃns]",
    D: "n.耐心，忍耐",
    E: "pati+en+ce",
    F: "pati爬梯+en摁+ce厕",
    G: "有耐心的人爬上梯子被摁在厕所里",
    H: "He doesn't have the patience to wait.",
    I: "他没有耐心等待。"
}, {
    B: "arrival",
    C: "[ə'raɪv(ə)l]",
    D: "n.到来，到达，到达者",
    E: "ar+ri+val",
    F: "ar矮人(拼音)+ri日(拼音)+val我(谐音)",
    G: "矮人每日都在等我的到来",
    H: "His arrival caused a great stir.",
    I: "他的到来引起了很大的骚动。"
}, {
    B: "mushroom",
    C: "['mʌʃru:m]",
    D: "n.蘑菇，伞菌",
    E: "mu+sh+room",
    F: "mu母(拼音)+sh上海(拼音)+room房间(熟词)",
    G: "母亲上海的房间长满了蘑菇",
    H: "The stem of the mushroom is broken.",
    I: "这只蘑菇的梗折断了。"
}, {
    B: "cherry",
    C: "['tʃerɪ]",
    D: "n.樱桃，樱桃树",
    E: "che+r+ry",
    F: "che车(拼音)+r草(编码)+ry人妖(拼音)",
    G: "车上吃草的人妖跳上了樱桃树",
    H: "They all went to enjoy the cherry blossoms.",
    I: "他们都去观赏樱花了。"
}, {
    B: "eggplant",
    C: "['egplɑ:nt]",
    D: "n.茄子",
    E: "egg+plant",
    F: "egg鸡蛋+plant植物",
    G: "茄子和鸡蛋都不是植物",
    H: "There are Chinese cabbage, spinage, and eggplant for your choice.",
    I: "有卷心菜，菠菜和茄子供您选择。"
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
    B: "pineapple",
    C: "['paɪnæp(ə)l]",
    D: "n.菠萝",
    E: "pine+apple",
    F: "pine松树+apple苹果",
    G: "松树下有一堆苹果和菠萝",
    H: "Cut some pineapple for your sister.",
    I: "给你姐姐切几片菠萝吧。"
}, {
    B: "eagle",
    C: "['i:g(ə)l]",
    D: "n.鹰，鹰状标饰",
    E: "ea+gle",
    F: "ea(r)耳朵(熟词)+gle割了(拼音)",
    G: "鹰的耳朵被割了",
    H: "It was an eagle that he shot dead yesterday.",
    I: "他昨天射死的是一只鹰。"
}, {
    B: "float",
    C: "[fləʊt]",
    D: "vi.漂浮",
    E: "f+lo+at",
    F: "f拐杖(编码)+lo10(象形)+at在(熟词)",
    G: "拐杖有10个漂浮在水面上",
    H: "A fresh egg will sink and an old egg will float.",
    I: "新鲜鸡蛋会沉下去而不新鲜的会浮在上面。"
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
    B: "vapour",
    C: "['veɪpə(r)]",
    D: "n.蒸汽，雾气",
    E: "v+ap+our",
    F: "v维生素(编码)+ap阿婆(拼音)+our我们(熟词)",
    G: "蒸汽做的维生素被阿婆和我们吃光了",
    H: "Liquid water changes to vapour, which is called evaporating.",
    I: "液态水变成蒸汽，这叫蒸发。"
}, {
    B: "topic",
    C: "['tɒpɪk]",
    D: "n.话题",
    E: "top+ic",
    F: "top顶(熟词)+icIC卡(编码)",
    G: "头顶插IC卡已经成为话题",
    H: "No one touched on this topic.",
    I: "没人谈及这个话题。"
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
    B: "scene",
    C: "[si:n]",
    D: "n.（戏剧或歌剧）场",
    E: "sc+en+e",
    F: "sc四川(拼音)+en摁(拼音)+e鹅(编码)",
    G: "戏剧的第一场里，四川人摁住了一只鹅",
    H: "I like the first scene.",
    I: "我喜欢第一场戏。"
}, {
    B: "bush",
    C: "[bʊʃ]",
    D: "n.灌木",
    E: "bu+sh",
    F: "bu不+sh上海",
    G: "不要去上海的灌木丛中",
    H: "The rabbit started from the bush.",
    I: "野兔从灌木丛中窜出来。"
}, {
    B: "mix",
    C: "[mɪks]",
    D: "vt.（使）混合",
    E: "mi+x",
    F: "mi米(拼音)+x剪刀(编码)",
    G: "在那袋米中混合了一把剪刀",
    H: "Oil and water don't mix.",
    I: "油和水不相溶。"
}, {
    B: "permission",
    C: "[pə'mɪʃn]",
    D: "n.准许，批准",
    E: "p+er+mis+sion",
    F: "p屁(编码)+er儿(拼音)+mis(s)思念(熟词)+sion神(谐音)",
    G: "准许放屁的儿子思念女神",
    H: "No one is to leave the building without the police's permission.",
    I: "没有警方的允许，没有一个人可以离开楼房。"
}, {
    B: "astronomer",
    C: "[ə'strɒnəmə(r)]",
    D: "n.天文学家",
    E: "astro+no+me+r",
    F: "astro饿死桌(谐音)+no不(熟词)+me我(熟词)+r草(编码)",
    G: "天文学家饿死一桌生物，但不包括我的草",
    H: "My ideal is to be an astronomer.",
    I: "我的理想是当一个天文学家。"
}, {
    B: "novel",
    C: "['nɒvl]",
    D: "n.（长篇）小说",
    E: "no+v+el",
    F: "no没有(熟词)+v胜利(编码V)+el饿狼(拼音)",
    G: "小说中没人能胜过饿狼",
    H: "I like reading novels.",
    I: "我喜欢读小说。"
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
    B: "atmosphere",
    C: "['ætməsfɪə(r)]",
    D: "n.大气层",
    E: "atm+o+sp+here",
    F: "atm奥特曼(拼音)+o蛋(编码)+sp薯片(拼音)+here这儿(熟词)",
    G: "奥特曼吃鸡蛋味薯片在这污染大气层",
    H: "They left the lights down to create a comfortable atmosphere.",
    I: "他们让灯光保持暗淡以创造一种舒适的气氛。"
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
    B: "continent",
    C: "['kɒntɪnənt]",
    D: "n.大陆",
    E: "con+tin+ent",
    F: "con康(谐音)+tin罐头(熟词)+ent恩特(拼音)",
    G: "康熙的罐头被恩特甩离了大陆",
    H: "Chinese settlers helped tame the American continent during the 19th century.",
    I: "中国移民在19世纪为开拓美洲大陆作出了贡献。"
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
    B: "prediction",
    C: "[prɪ'dɪkʃ(ə)n]",
    D: "n.预言，预报，预告",
    E: "pre+dic+tion",
    F: "pre仆人(拼音)+dic迪克(谐音)+tion神(谐音)",
    G: "仆人谋杀迪克是神留下的预言",
    H: "This great prediction is coming true.",
    I: "这一伟大的预言正在成为现实。"
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
    B: "globe",
    C: "[gləʊb]",
    D: "n.地球，地球仪",
    E: "glo+be",
    F: "glo910(象形)+be(e)蜜蜂(熟词)",
    G: "910只蜜蜂飞遍地球",
    H: "We use a globe in our geography class.",
    I: "我们在地理课上使用地球仪。"
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
    B: "sadness",
    C: "['sædnəs]",
    D: "n.悲伤，悲哀",
    E: "sad+ne+ss",
    F: "sad悲伤的(熟词)+ne哪(吒)(拼音)+ss两个美女(编码)",
    G: "悲伤的哪吒打得两个美女更悲伤",
    H: "He felt a great sadness for this little girl.",
    I: "他为这个小女孩深感悲伤。"
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
    B: "prime",
    C: "[praɪm]",
    D: "adj.主要的，首要的，基础的",
    E: "pri+me",
    F: "pri扑来(谐音)+me我(熟词)",
    G: "这位主要的人物扑向我",
    H: "This is a matter of prime importance.",
    I: "这是一个首要的问题。"
}, {
    B: "Mexico",
    C: "['meksɪkəʊ]",
    D: "n.墨西哥（拉丁美洲国家）",
    E: "Me+xi+co",
    F: "Me我(熟词)+xi喜(拼音)+co可乐(熟词coke)",
    G: "在墨西哥我喜欢喝可乐",
    H: "I was to leave for Mexico City the next day.",
    I: "明天我要离开去墨西哥市。"
}, {
    B: "spaghetti",
    C: "[spə'getɪ]",
    D: "n.意大利式细面条",
    E: "spa+gh+et+ti",
    F: "spa水疗(熟词)+gh干活(拼音)+et外星人(编码)+ti踢(拼音)",
    G: "水疗馆干活的外星人踢走了意大利细面条",
    H: "I like hot dogs more than spaghetti.",
    I: "比起意大利细面条，我更喜欢吃热狗。"
}, {
    B: "harvest",
    C: "['hɑ:vɪst]",
    D: "n./vt./vi.收割，收获",
    E: "ha+r+vest",
    F: "ha哈(拼音)+r草(编码)+vest背心(熟词)",
    G: "哈哈穿着草做的背心在收割粮食",
    H: "Farmers are very busy during the harvest.",
    I: "农民在收获季节里很忙碌。"
}, {
    B: "lunar",
    C: "['luːnə]",
    D: "adj.月球的，月亮的，银的",
    E: "lun+ar",
    F: "lun轮+ar爱人",
    G: "车轮把爱人载到月球上",
    H: "He is on the lunar surface.",
    I: "他在月球表面。"
}, {
    B: "religious",
    C: "[rɪ'lɪdʒəs]",
    D: "adj.虔诚的，宗教的",
    E: "reli+g+i+ous",
    F: "reli热力(拼音)+g哥(编码)+i蜡烛(编码)+ous藕丝(拼音)",
    G: "虔诚研究热力的哥哥用蜡烛烧藕丝",
    H: "That is a religious question.",
    I: "那是一个宗教问题。"
}, {
    B: "roast",
    C: "[rəʊst]",
    D: "vt./vi.烤，炙，烘",
    E: "roa+st",
    F: "roa(d)路(熟词)+st石头(拼音)",
    G: "拿路上的石头来烤肉",
    H: "It was always roast lamb and canned peas for Sunday lunch.",
    I: "星期天午餐总是吃烤羔羊肉和豌豆罐头。"
}, {
    B: "passage",
    C: "[ˈpæsɪdʒ]",
    D: "n.通道，船费(包括食宿)，（一）段",
    E: "pass+age",
    F: "pass经过+age年龄",
    G: "从这个通道经过的人年龄都很大",
    H: "Go along this passage to the library.",
    I: "顺着这条通道可到图书馆。"
}, {
    B: "bone",
    C: "[bəʊn]",
    D: "n.骨头",
    E: "bo+ne",
    F: "bo60(象形)+ne呢(拼音)",
    G: "骨头一共有60根呢",
    H: "My dog likes eating bones.",
    I: "我的狗喜欢吃骨头。"
}, {
    B: "ingredient",
    C: "[ɪn'griːdɪənt]",
    D: "n.（烹饪）原料，组成部分",
    E: "ing+re+dien+t",
    F: "ing鹦哥(谐音)+re惹(拼音)+dien迪恩(谐音)+t踢(编码)",
    G: "鹦哥惹迪恩生气，踢翻了烹饪原料",
    H: "I mixed other ingredients into the food.",
    I: "我往食物里混入其他原料。"
}, {
    B: "steak",
    C: "[steɪk]",
    D: "n.（供煎烤的）牛排，肉块，鱼排",
    E: "s+tea+k",
    F: "s美女(编码)+tea茶(熟词)+k机关枪(编码)",
    G: "美女喝完茶用机关枪煎牛排",
    H: "I like to eat steak.",
    I: "我喜欢吃牛扒。"
}, {
    B: "slim",
    C: "[slɪm]",
    D: "adj.苗条的，纤细的；vi.变细，减肥",
    E: "sl+im",
    F: "sl森林(拼音)+im姨母(谐音)",
    G: "住在森林的姨母是很苗条的",
    H: "She retains her slim figure and is free of wrinkles.",
    I: "她保持着苗条的身材，脸上也没有皱纹。"
}, {
    B: "birthplace",
    C: "['bɜ:θpleɪs]",
    D: "n.出生地，故乡，发源地",
    E: "birth+place",
    F: "birth出生+place地方",
    G: "你出生的地方就是你的出生地",
    H: "Here is my birthplace.",
    I: "这儿是我的出生地。"
}, {
    B: "fry",
    C: "[fraɪ]",
    D: "vt./vi.油炸，油煎",
    E: "fly",
    F: "fly飞",
    G: "飞走的油炸食物掉在了草(r)上",
    H: "Please fry the fish until golden brown.",
    I: "请把鱼炸至金棕色。"
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
    B: "workplace",
    C: "['wɜ:kpleɪs]",
    D: "n.车间，工作场所",
    E: "work+place",
    F: "work工作+place地方",
    G: "爸爸工作的地方有个大车间",
    H: "He lives in the workplace.",
    I: "他住在车间。"
}, {
    B: "billion",
    C: "['bɪljən]",
    D: "n.十亿",
    E: "bil+lion",
    F: "bil(l)比尔(Bill)+lion狮子",
    G: "比尔杀了狮子被罚十亿",
    H: "Worldwide sales reached 2.5 billion.",
    I: "全球销售额达到了25亿。"
}, {
    B: "oxygen",
    C: "['ɒksɪdʒ(ə)n]",
    D: "n.氧气，氧",
    E: "ox+y+gen",
    F: "ox牛(熟词)+y衣叉(编码)+gen根(拼音)",
    G: "牛用衣叉松开根土放进氧气",
    H: "Oxygen is very important to people.",
    I: "氧气对人类非常重要。"
}, {
    B: "limit",
    C: "['lɪmɪt]",
    D: "vt.限制，限定；n.限制，限度，界限",
    E: "limi+t",
    F: "limi厘米(拼音)+t特(编码)",
    G: "一厘米高的特务被限制在厕所里",
    H: "There isn't a limit to everything.",
    I: "对每件事情没有什么限制。"
}, {
    B: "gravity",
    C: "['grævətɪ]",
    D: "n.重力",
    E: "gr+a+vi+ty",
    F: "gr工人(拼音)+a苹果(编码)+vi胜利(谐音V)+ty提(谐音)",
    G: "工人被苹果砸了后胜利提出重力定律",
    H: "An apple falls down because of gravity.",
    I: "由于重力的关系，苹果往下掉。"
}, {
    B: "measure",
    C: "[ˈmeʒə(r)]",
    D: "vt./vi.衡量，测量；n.计量制，计量单位",
    E: "me+a+sure",
    F: "me我(熟词)+a苹果(编码)+sure确实(熟词)",
    G: "我种的苹果确实不能用金钱衡量",
    H: "He is measuring how tall the desk is.",
    I: "他在量桌子的高度。"
}, {
    B: "surround",
    C: "[səˈraʊnd]",
    D: "vt/vi.围绕，包围",
    E: "su+r+round",
    F: "su苏(拼音)+r草(编码)+round圆的(熟词)",
    G: "苏苏在草地上被蚂蚁围绕了一个圆圈",
    H: "Trees surround the lake.",
    I: "树木围绕着湖泊。"
}, {
    B: "bow",
    C: "[baʊ]",
    D: "vi.鞠躬，弯腰",
    E: "bo+w",
    F: "bo60(象形)+w皇冠(编码)",
    G: "60个带着皇冠的人在鞠躬",
    H: "They bowed to the Queen.",
    I: "他们向女王鞠躬。"
}, {
    B: "rooster",
    C: "['ru:stə]",
    D: "n.公鸡，雄禽",
    E: "roo+st+er",
    F: "roo(m)房间(熟词)+st石头(拼音)+er儿(拼音)",
    G: "房间里的石头被儿子拿去喂公鸡了",
    H: "The rooster disappeared under the car.",
    I: "公鸡消失在车子底下。"
}, {
    B: "phrase",
    C: "[freɪz]",
    D: "n.短语，词组，惯用语",
    E: "ph+ra+se",
    F: "ph屁孩(拼音)+ra瑞(谐音)+se色(拼音)",
    G: "屁孩教瑞瑞学习红色标记的短语",
    H: "He read the phrase slowly.",
    I: "他缓慢地读着短语。"
}, {
    B: "satellite",
    C: "['sætəlaɪt]",
    D: "n.卫星，人造卫星",
    E: "sate+ll+i+te",
    F: "sate赛特(谐音)+ll筷子(象形)+i我(熟词I)+te特(拼音)",
    G: "赛特用筷子把我和特务夹上了卫星",
    H: "The moon is a satellite of the earth.",
    I: "月球是地球的一颗卫星。"
}, {
    B: "indeed",
    C: "[ɪnˈdi:d]",
    D: "adv.实在，真正地，确实",
    E: "in+de+ed",
    F: "in里面(熟词)+de的(拼音)+ed二弟(拼音)",
    G: "里面的二弟实在太能吃",
    H: "He did indeed keep important documents inside his hat.",
    I: "他确实把重要文件放在了他的帽子里。"
}, {
    B: "poet",
    C: "['pəʊɪt]",
    D: "n.诗人",
    E: "po+et",
    F: "po破(拼音)+et外星人(熟词)",
    G: "诗人打破了外星人的船",
    H: "He was a painter and poet.",
    I: "他既是画家又是诗人。"
}, {
    B: "scenery",
    C: "[ˈsi:nərɪ]",
    D: "n.风景，景色",
    E: "scene+ry",
    F: "scene风景(熟词)+ry人妖(拼音)",
    G: "看风景发现了一个人妖",
    H: "We admired the splendor of the mountain scenery.",
    I: "我们赞赏着壮丽的山景。"
}, {
    B: "unlike",
    C: "[ˌʌnˈlaɪk]",
    D: "prep.不像，不同",
    E: "un+like",
    F: "un不(词缀)+like像(熟词)",
    G: "我和我父亲长得不像",
    H: "Music is quite unlike any other art form.",
    I: "音乐与其他艺术形式迥然不同。"
}, {
    B: "narrator",
    C: "[nə'reɪtə]",
    D: "n.叙述者，讲述者",
    E: "nar+rat+or",
    F: "nar那人(拼音)+rat鼠(熟词)+or偶人(拼音)",
    G: "叙述者说那人把老鼠变成了偶人",
    H: "The story's narrator is an actress.",
    I: "故事的叙述者是位女演员。"
}, {
    B: "vinegar",
    C: "['vɪnɪgə]",
    D: "n.醋",
    E: "vine+g+ar",
    F: "vine藤(熟词)+g鸽(编码)+ar矮人(拼音)",
    G: "藤上的鸽子喝了矮人的醋",
    H: "Vinegar is used in preserving food.",
    I: "醋可用来保存食物。"
}, {
    B: "rag",
    C: "[ræg]",
    D: "n.破布，碎布",
    E: "r+ag",
    F: "r草(编码)+ag阿哥(拼音)",
    G: "小草被阿哥用破布包住了",
    H: "I keep these rags for cleaning the car.",
    I: "我把这些旧布留下来擦汽车用。"
}, {
    B: "award",
    C: "[ə'wɔ:d]",
    D: "vt.授予，判定，n.奖品，判决",
    E: "a+war+d",
    F: "a一(熟词)+war战争(熟词)+d狗(编码dog)",
    G: "一只战争搜救狗被授予奖励",
    H: "She was awarded the prize for both films.",
    I: "她的两部电影被授予奖项。"
}, {
    B: "violent",
    C: "['vaɪələnt]",
    D: "adj.暴力的，猛烈的，狂暴的",
    E: "vi+ol+ent",
    F: "vi歪(谐音)+ol职业女性(编码)+ent恩特(拼音)",
    G: "打歪职业女性脖子的恩特很暴力",
    H: "The speaker lashed the young people into violent action.",
    I: "那个演讲者煽动青年人搞暴力行动。"
}, {
    B: "within",
    C: "[wɪˈðɪn]",
    D: "adv.在里面，在内",
    E: "with+in",
    F: "with和+in在",
    G: "我和他在里面的房间学习",
    H: "Within 24 hours the deal was completed.",
    I: "交易在24小时内完成。"
}, {
    B: "gain",
    C: "[geɪn]",
    D: "vt.取得，获得，增加",
    E: "gai+n",
    F: "gai钙+n奶",
    G: "卖AD钙奶取得了成功",
    H: "White wines tend to gain depth of colour with age.",
    I: "葡萄酒年头愈久，颜色愈深。"
}, {
    B: "independent",
    C: "[,indi'pendənt]",
    D: "adj.单独的，独立的",
    E: "in+depend+ent",
    F: "in不(词缀)+depend依靠(熟词)+ent(er)进入(熟词)",
    G: "不依靠别人，单独进入",
    H: "Morocco is a sovereign independent monartery.",
    I: "摩洛哥是个有主权的独立君主国。"
}, {
    B: "mixture",
    C: "[ˈmɪkstʃə]",
    D: "n.混合，混合物",
    E: "mix+ture",
    F: "mix混合(熟词)+ture尺(谐音)",
    G: "混合时用尺子混合",
    H: "Smooth the mixture with the back of a soup spoon.",
    I: "用汤勺的背面把混合料抹平。"
}, {
    B: "wealthy",
    C: "[ˈwelθɪ]",
    D: "adj.富裕的",
    E: "healthy",
    F: "healthy健康的",
    G: "富裕的人都很健康",
    H: "There came a wealthy stock broker who cast sheep's eyes at the beautiful girl.",
    I: "那儿来了一个富有的证券经纪人，他含情脉脉地看着这位漂亮的姑娘。"
}, {
    B: "clothing",
    C: "['kləʊðɪŋ]",
    D: "n.衣服",
    E: "c+lo+thing",
    F: "c看见(编码see)+lo10(象形)+thing东西(熟词)",
    G: "看见衣服上挂着10件东西",
    H: "All of us need clothing.",
    I: "我们都需要衣服。"
}, {
    B: "confirm",
    C: "[kən'fɜ:m]",
    D: "vt.证实，证明，确认",
    E: "c+on+firm",
    F: "c月(编码)+on上(熟词)+firm坚固的(熟词)",
    G: "证实月球上有坚固的岩石",
    H: "The plans were officially confirmed only yesterday.",
    I: "直到昨天那些计划才被正式确认。"
}, {
    B: "exist",
    C: "[ɪgˈzɪst]",
    D: "vi.生存，存在",
    E: "exi+st",
    F: "exi儿媳+st石头",
    G: "儿媳靠卖石头生存",
    H: "Man cannot exist without oxygen.",
    I: "人没有氧气就不能生存。"
}, {
    B: "fault",
    C: "[fɔ:lt]",
    D: "n.过错，缺点，故障",
    E: "fa+u+lt",
    F: "fa罚(拼音)+u你(编码you)+lt辣条(拼音)",
    G: "犯错就罚你吃辣条",
    H: "He could never accept that he had been at fault.",
    I: "他怎么也无法承认是他的错。"
}, {
    B: "fool",
    C: "[fu:l]",
    D: "n.傻瓜，愚人；vi./vt.欺骗，愚弄",
    E: "foot",
    F: "foot脚",
    G: "傻瓜拿棍子(l)打自己的脚",
    H: "He's a fool if he thinks she still loves him.",
    I: "如果他以为她还爱着自己，那他就是个傻瓜。"
}, {
    B: "account",
    C: "[ə'kaʊnt]",
    D: "n.账目，账户；vt.认为是，视为",
    E: "ac+count",
    F: "acAC米兰(编码)+count数(熟词)",
    G: "AC米兰球员数数核对账目",
    H: "He wants to transfer some money to the account of his daughter.",
    I: "他想把一些钱转到女儿的账户上。"
}, {
    B: "balance",
    C: "['bæl(ə)ns]",
    D: "n.平衡，余额；vt.使平衡，结算，使相称",
    E: "ba+lan+ce",
    F: "ba爸+lan懒+ce厕所",
    G: "爸爸懒得在厕所保持平衡",
    H: "Can you balance on one foot?",
    I: "你能独脚站着保持平衡吗？"
}, {
    B: "bean",
    C: "[biːn]",
    D: "n.豆，嘴峰，毫无价值的东西",
    E: "be+an",
    F: "be是+an一",
    G: "这是一粒豆子",
    H: "This is a bean.",
    I: "这是一粒豆子。"
}, {
    B: "belief",
    C: "[bɪ'li:f]",
    D: "n.信心，信仰，信任",
    E: "be+lie+f",
    F: "be是(熟词)+lie谎言(熟词)+f佛(编码)",
    G: "是谎言动摇了佛的信心",
    H: "He holds right this belief.",
    I: "他就持有这种信念。"
}, {
    B: "impress",
    C: "[ɪm'pres]",
    D: "vt.使印象深刻，使铭记",
    E: "im+press",
    F: "im姨母(谐音)+press按(熟词)",
    G: "姨母按住的大蜘蛛让我印象深刻",
    H: "She did not impress me at all.",
    I: "她没给我留下丝毫印象。"
}, {
    B: "newton",
    C: "[ˈnju:tən]",
    D: "n.牛顿（力的单位）",
    E: "new+ton",
    F: "new新+ton吨",
    G: "牛顿提出新理论前被一吨苹果砸了",
    H: "A newton is a unit of measurement named after Sir Isaac Newton.",
    I: "牛顿是一个以艾萨克·牛顿爵士的名字起名的测量单位。"
}, {
    B: "presence",
    C: "[ˈprezns]",
    D: "n.出席，到场，存在",
    E: "pre+sen+ce",
    F: "pre仆人+sen森+ce厕",
    G: "仆人逃到森林的厕所拒绝出席宴会",
    H: "Her presence greatly brightened up the evening party.",
    I: "她的出席使晚会大为活跃。"
}, {
    B: "fake",
    C: "[feɪk]",
    D: "adj.假的；n.假货，欺骗",
    E: "fa+ke",
    F: "fa发+ke可",
    G: "假的头发用可乐洗",
    H: "These are fake diamonds.",
    I: "这些是假钻石。"
}, {
    B: "energetic",
    C: "[ˌenə'dʒetɪk]",
    D: "adj.精力充沛的，积极的，充满活力的",
    E: "en+erge+tic",
    F: "en摁+erge二哥+tic体操",
    G: "摁住二哥的体操员精力充沛",
    H: "He was hardworking and energetic.",
    I: "他工作努力，精力充沛。"
}, {
    B: "cabin",
    C: "['kæbɪn]",
    D: "n.小屋",
    E: "ca+bin",
    F: "ca擦+bin宾",
    G: "擦干净桌子后宾客来到了小屋",
    H: "The cabin was built of logs.",
    I: "这小屋是用圆木造的。"
}, {
    B: "fathom",
    C: "['fæð(ə)m]",
    D: "n.长度单位（六英尺）",
    E: "fa+th+om",
    F: "fa发+th土豪+om欧美",
    G: "发现土豪在欧美有个六英尺深的泳池",
    H: "We sailed into the bay and dropped anchor in five fathoms of water.",
    I: "我们航行进入海湾，在水深5英寻处抛锚。"
}, {
    B: "cowboy",
    C: "[ˈkaʊbɔɪ]",
    D: "n.牧童，牛仔",
    E: "cow+boy",
    F: "cow奶牛+boy男孩",
    G: "骑奶牛的男孩是牧童",
    H: "He loved to see cowboy movies.",
    I: "他爱看牛仔影片。"
}, {
    B: "broad",
    C: "[brɔ:d]",
    D: "adj.宽阔的，广泛的",
    E: "b+road",
    F: "b6(象形)+road公路(熟词)",
    G: "6条公路并在一起非常宽阔",
    H: "The street is broad.",
    I: "这条街道很宽阔。"
}, {
    B: "grave",
    C: "[ɡreɪv]",
    D: "n.坟墓；adj.重大的，严肃的，庄重的",
    E: "brave",
    F: "brave勇敢的",
    G: "勇敢的哥哥(g)走进坟墓区域",
    H: "She tore the rose apart and scattered the petals over the grave.",
    I: "她掰开玫瑰花，将花瓣撒在坟墓上。"
}, {
    B: "drown",
    C: "[draʊn]",
    D: "vi./vt.淹死，淹没，溺死",
    E: "dr+own",
    F: "dr敌人(拼音)+own自己的(熟词)",
    G: "敌人被自己的人淹死了",
    H: "A child can drown in only a few inches of water.",
    I: "儿童在仅仅几英寸深的水中就能溺死。"
}, {
    B: "border",
    C: "['bɔːdə]",
    D: "n.边界，边境；vt.接近，与…接壤",
    E: "b+order",
    F: "b6(象形)+order命令(熟词)",
    G: "第6项命令规定不得闯过边境",
    H: "He was never able to get past the border guards.",
    I: "他从未能够通过边防哨兵的检查。"
}, {
    B: "shellfish",
    C: "[ˈʃelfɪʃ]",
    D: "n.水生有壳动物",
    E: "she+ll+fish",
    F: "she她(熟词)+ll11(象形)+fish鱼(熟词)",
    G: "她养的11条鱼不属于水生有壳动物",
    H: "The lobster is a shellfish.",
    I: "龙虾是水生贝壳动物。"
}, {
    B: "rosebud",
    C: "['rəʊzbʌd]",
    D: "n.玫瑰花蕾",
    E: "rose+bud",
    F: "rose玫瑰+bud芽",
    G: "玫瑰发芽后就成了玫瑰花蕾",
    H: "These rosebuds haven't fully opened.",
    I: "这些玫瑰花蕾还没有完全开放。"
}, {
    B: "misty",
    C: "[ˈmɪstɪ]",
    D: "adj.有薄雾的，模糊的",
    E: "mis+ty",
    F: "mis(s)小姐(熟词)+ty太阳(拼音)",
    G: "小姐在有薄雾的早晨晒太阳",
    H: "It's a bit misty this morning.",
    I: "今晨有薄雾。"
}, {
    B: "dawn",
    C: "[dɔ:n]",
    D: "n.黎明，开端，破晓",
    E: "da+wn",
    F: "da大+wn蜗牛",
    G: "大蜗牛在黎明时爬到终点",
    H: "Dawn was breaking over the valley.",
    I: "在峡谷上方已见拂晓。"
}, {
    B: "seasonal",
    C: "['si:z(ə)n(ə)l]",
    D: "adj.季节性的，季节的",
    E: "sea+son+al",
    F: "sea海(熟词)+son儿子(熟词)+al阿狸(拼音)",
    G: "季节性的海风会帮儿子找到阿狸",
    H: "The town relies on the seasonal tourist industry for jobs.",
    I: "这个城镇依靠季节性旅游业提供就业机会。"
}, {
    B: "solar",
    C: "['səʊlə(r)]",
    D: "adj.太阳的，日光的",
    E: "sol+ar",
    F: "sol501(象形)+ar矮人(拼音)",
    G: "501个矮人在安装太阳能热水器",
    H: "Saturn is the second biggest planet in the solar system.",
    I: "土星是太阳系中的第二大行星。"
}, {
    B: "mammal",
    C: "[ˈmæml]",
    D: "n.哺乳动物",
    E: "ma+mm+al",
    F: "ma妈+mm妹妹+al阿狸",
    G: "妈妈和妹妹发现阿狸是哺乳动物",
    H: "Its hairy body suggests a mammal.",
    I: "它毛茸茸的身体表明它是哺乳动物。"
}, {
    B: "gather",
    C: "['gæðə]",
    D: "vt./vi./n.搜集，集合，聚集",
    E: "father",
    F: "father父亲",
    G: "父亲的哥哥(g)在搜集证据",
    H: "I go out to gather the flowers.",
    I: "我出去采花。"
}, {
    B: "limited",
    C: "['lɪmɪtɪd]",
    D: "adj.有限的",
    E: "limit+ed",
    F: "limit限制(熟词)+ed二弟(拼音)",
    G: "限制二弟饭量的方法是有限的",
    H: "We had only limited communion with the natives.",
    I: "我们与本地人的交往有限。"
}, {
    B: "thus",
    C: "[ðʌs]",
    D: "adv.因此，于是",
    E: "th+us",
    F: "th土豪(拼音)+us我们(熟词)",
    G: "因此土豪和我们成了朋友",
    H: "Thus we see that plants need light.",
    I: "因此,我们知道了植物需要阳光。"
}, {
    B: "agricultural",
    C: "[ˌæɡrɪ'kʌltʃərəl]",
    D: "adj.农业的，农学的",
    E: "ag+ri+cultural",
    F: "ag阿哥(拼音)+ri日(拼音)+cultural文化的(熟词)",
    G: "阿哥研究日本农业文化",
    H: "Our country must drive at increasing agricultural production.",
    I: "我国必须力求农业增产。"
}, {
    B: "kebab",
    C: "[kɪ'bæb]",
    D: "n.（印）烤肉串，烤腌羊肉串（等于kabob）",
    E: "keba+b",
    F: "keba磕巴(拼音)+b6(象形)",
    G: "磕巴的他吃了6串烤肉串",
    H: "How about some kebab?",
    I: "吃些肉串怎么样？"
}, {
    B: "downtown",
    C: "[ˌdaʊn'taʊn]",
    D: "adj.市区的；adv.在市区，往市区",
    E: "down+town",
    F: "down向下+town城镇",
    G: "向下一直走去城镇就能看到市区的路标",
    H: "A new skyscraper has been put up downtown.",
    I: "市中心又建起了一座摩天大厦。"
}, {
    B: "Cantonese",
    C: "[ˌkæntə'ni:z]",
    D: "n./adj.广东人（的），广州人（的），广东话（的）",
    E: "Can+tone+se",
    F: "Can能(熟词)+tone音调(熟词)+se色(拼音)",
    G: "广东人能区分出各种音调音色",
    H: "The Cantonese are people who live in or come from Guangdong province.",
    I: "广东人是指居住在或来自广东省的人。"
}, {
    B: "Columbus",
    C: "[kə'lʌmbəs]",
    D: "n.哥伦布（意大利航海家），哥伦布（美国一座城市）",
    E: "Co+lum+bus",
    F: "Co可乐(熟词coke)+lum路面(拼音)+bus公交车(熟词)",
    G: "哥伦布的可乐掉路面上被公交车压碎了",
    H: "America was discovered by Columbus in 1492.",
    I: "美洲大陆是哥伦布在1492年发现的。"
}, {
    B: "booth",
    C: "[bu:ð]",
    D: "n.货摊，公用电话亭",
    E: "tooth",
    F: "tooth牙齿",
    G: "货摊卖的都是牙齿",
    H: "The booth is very useful for students.",
    I: "这个公用电话亭对学生非常有用。"
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
    B: "nitrogen",
    C: "['naɪtrədʒən]",
    D: "n.氮",
    E: "ni+tro+gen",
    F: "ni你+tro兔肉+gen根",
    G: "吸入氮气的你狂吃兔肉和树根",
    H: "Nitrogen forms most of the earth’s air.",
    I: "氮构成地球空气的大部分内容。"
}, {
    B: "multicultural",
    C: "[ˌmʌltɪˈkʌltʃərəl]",
    D: "adj.多种文化的",
    E: "multi+cultural",
    F: "multi多样的(词缀)+cultural文化的(熟词)",
    G: "中国是个多种文化共存的国家",
    H: "We live in a multicultural society.",
    I: "我们生活在一个多元文化的社会中。"
}, {
    B: "polar",
    C: "[ˈpəʊlə(r)]",
    D: "adj.极地的，近极地的",
    E: "pol+ar",
    F: "pol泼辣+ar矮人",
    G: "泼辣的矮人参加了极地的冒险",
    H: "Warmth melted some of the polar ice.",
    I: "温暖的天气融化了一些极地的冰雪。"
}, {
    B: "terrified",
    C: "['terɪfaɪd]",
    D: "adj.受惊吓的，恐惧的",
    E: "terrif+i+ed",
    F: "terrif(y)恐吓(熟词)+i我(熟词I)+ed二弟(拼音)",
    G: "恐吓我的二弟自己却受惊吓",
    H: "He terrified me.",
    I: "他把我吓坏了。"
}, {
    B: "muscle",
    C: "['mʌs(ə)l]",
    D: "n.肌肉，力量；vt.加强；vi.使劲前进",
    E: "mu+sc+le",
    F: "mu母+sc四川+le乐",
    G: "母亲在四川快乐地锻炼肌肉",
    H: "Keeping your muscles strong and in tone helps you to avoid back problems.",
    I: "保持强壮有力的肌肉有助于防范背疾。"
}, {
    B: "puzzle",
    C: "[ˈpʌzl]",
    D: "n.难题，谜；vt/vi.使...迷惑，使...为难",
    E: "pu+zz+le",
    F: "pu扑(拼音)+zz22(象形)+le了(拼音)",
    G: "扑来的22个人解决了这个难题",
    H: "She was a puzzle.",
    I: "她是个谜。"
}, {
    B: "lessen",
    C: "[ˈlesn]",
    D: "vi./vt.减少，减轻",
    E: "lesson",
    F: "lesson课程",
    G: "鹅(e)上课的次数减少了",
    H: "The noise began to lessen.",
    I: "噪音开始减弱。"
}, {
    B: "embassy",
    C: "['embəsɪ]",
    D: "n.大使馆，大使及其官员",
    E: "em+bas+sy",
    F: "em恶魔+bas巴士+sy实验",
    G: "大使馆的恶魔在巴士上做实验",
    H: "She was attached to the Chinese Embassy.",
    I: "她隶属中国大使馆。"
}, {
    B: "digest",
    C: "[daɪ'dʒest]",
    D: "vt./vi.消化；n摘要",
    E: "di+ge+st",
    F: "di弟+ge哥+st石头",
    G: "弟弟和哥哥把石头消化掉了",
    H: "She couldn't digest food properly.",
    I: "她无法正常消化食物。"
}, {
    B: "discount",
    C: "['dɪskaʊnt]",
    D: "n.（价格）折扣",
    E: "dis+count",
    F: "dis不(词缀)+count计算(熟词)",
    G: "不计算在内的部分就是折扣",
    H: "We shouldn't discount the effect of AIDS.",
    I: "我们不应低估艾滋病的影响。"
}, {
    B: "parade",
    C: "[pə'reɪd]",
    D: "n./vt.阅兵，游行，炫耀",
    E: "pa+rade",
    F: "pa怕(拼音)+(g)rade成绩(熟词)",
    G: "怕阅兵得到差的成绩",
    H: "She was dressed up for the Easter parade.",
    I: "她为参加复活节游行精心打扮。"
}, {
    B: "strength",
    C: "[streŋθ]",
    D: "n.力量，强项，长处",
    E: "st+reng+th",
    F: "st石头+reng扔+th土豪",
    G: "用尽全身力量把石头扔向土豪",
    H: "He threw it forward with all his strength.",
    I: "他使尽全力把它扔向前方。"
}, {
    B: "issue",
    C: "['ɪʃuː]",
    D: "n.议题，要点，（杂志或报刊的）期",
    E: "is+sue",
    F: "is是+sue苏(Sue)",
    G: "这期的议题是苏确定的",
    H: "We have different views on this issue.",
    I: "我们在这个问题上有不同的看法。"
}, {
    B: "obvious",
    C: "['ɒbvɪəs]",
    D: "adj.显而易见的，明显的",
    E: "ob+vi+ous",
    F: "ob欧巴(拼音)+vi胜利(谐音V)+ous藕丝(拼音)",
    G: "显而易见，欧巴胜利后会吃藕丝",
    H: "It's obvious that she doesn't like him.",
    I: "显然她不喜欢他。"
}, {
    B: "schoolmate",
    C: "['skuːlmeɪt]",
    D: "n.同学，校友",
    E: "school+mate",
    F: "school学校+mate伙伴",
    G: "学校的伙伴就是同学",
    H: "He started the magazine with a schoolmate.",
    I: "他和一个同学创办了那份杂志。"
}, {
    B: "breast",
    C: "[brest]",
    D: "n.胸怀，乳房，胸部，心情",
    E: "br+east",
    F: "br病人(拼音)+east东(熟词)",
    G: "病人的胸怀像东方红一样",
    H: "The coat is too tight at the breast.",
    I: "这件衣服胸部太紧了。"
}, {
    B: "nightfall",
    C: "[ˈnaɪtfɔ:l]",
    D: "n.黄昏",
    E: "night+fall",
    F: "night晚上+fall落下",
    G: "黄昏到晚上，太阳渐渐落下了",
    H: "I need to get to Guangzhou by nightfall.",
    I: "我需要在黄昏前到达广州。"
}, {
    B: "weave",
    C: "[wiːv]",
    D: "vi./vt.织，",
    E: "leave",
    F: "leave离开",
    G: "她离开的时候一直在编",
    H: "Spiders weave webs.",
    I: "蜘蛛结网。"
}, {
    B: "forgive",
    C: "[fə'gɪv]",
    D: "vt./vi.原谅，饶恕",
    E: "for+give",
    F: "for因为+give给",
    G: "因为给了钱，所以得到了原谅",
    H: "Hopefully Jane will understand and forgive you, if she really loves you.",
    I: "如果简真的爱你，希望她会理解并原谅你。"
}, {
    B: "reaction",
    C: "[rɪ'ækʃ(ə)n]",
    D: "n.反应，感应，反作用",
    E: "re+action",
    F: "re再(词缀)+action行动(熟词)",
    G: "再次行动的时候要做出反应",
    H: "His reaction of swiftness surprised us.",
    I: "他快速的反应能力让我们吃了一惊。"
}, {
    B: "wipe",
    C: "[waɪp]",
    D: "vt.擦，揩，擦去",
    E: "wide",
    F: "wide宽的",
    G: "这双很宽的皮鞋(p)被擦干净了",
    H: "I'll just wipe the table.",
    I: "我只擦擦桌子。"
}, {
    B: "extinct",
    C: "[ɪk'stɪŋkt]",
    D: "adj.绝种的，灭绝的；vt.使熄灭",
    E: "ex+in+ct",
    F: "ex前夫(熟词)+in在里面(熟词)+ct餐厅(拼音)",
    G: "前夫在里面的餐厅看到恐龙绝种了",
    H: "It is 250 years since the wolf became extinct in Britain.",
    I: "狼在英国已经灭绝250年了。"
}, {
    B: "beaver",
    C: "[ˈbi:və(r)]",
    D: "n.河狸",
    E: "bea+v+er",
    F: "bea(r)熊(熟词)+v胜利(编码)+er耳(拼音)",
    G: "熊胜利后把河狸的耳朵吃了",
    H: "The hat is made of beaver.",
    I: "这顶帽子是海狸毛皮制的。"
}, {
    B: "slight",
    C: "[slaɪt]",
    D: "adj.轻微的，微小的",
    E: "s+light",
    F: "s蛇(编码)+light光(熟词)",
    G: "蛇在灯光下轻微地摆动",
    H: "I've got a slight headache.",
    I: "我有点儿头痛。"
}, {
    B: "global",
    C: "['gləʊb(ə)l]",
    D: "adj.全球的，总体的，球形的",
    E: "glo+ba+l",
    F: "glo910(象形)+ba爸(拼音)+l棍子(编码)",
    G: "910岁的爸爸拿着棍子做全球旅行",
    H: "Many people are worryingly ignorant of the facts about global warming.",
    I: "许多人竟然不知道地球变暖的事实，实在令人担忧。"
}, {
    B: "westward",
    C: "['westwəd]",
    D: "adj.向西的；n.西部",
    E: "west+war+d",
    F: "west西(熟词)+war战争(熟词)+d狗(编码dog)",
    G: "西方国家有战争狗却向西逃",
    H: "He sailed westward from Paris.",
    I: "他从巴黎向西航行。"
}, {
    B: "scream",
    C: "[skri:m]",
    D: "vi.尖叫；n.尖叫声，喊叫声",
    E: "s+cream",
    F: "s美女(编码)+cream奶油(熟词)",
    G: "美女掉进奶油里尖叫起来",
    H: "A scream broke the silence.",
    I: "一声惊叫声打破了寂静。"
}, {
    B: "urban",
    C: "['ɜ:bən]",
    D: "adj.城市的，都市的，城镇的",
    E: "u+r+ban",
    F: "u你(编码you)+r草(编码)+ban板(拼音)",
    G: "在城市里你看不到青草只能看到有钱的老板",
    H: "The directions of urban development have been marked out.",
    I: "城市发展的规划已制定出来了。"
}, {
    B: "mass",
    C: "[mæs]",
    D: "n.一堆，大量，群众，多数",
    E: "ma+ss",
    F: "ma马(拼音)+ss两个美女(编码)",
    G: "一堆马里站着两个美女",
    H: "On his desk is a mass of books and papers.",
    I: "他的书桌上有大堆的书籍和文件。"
}, {
    B: "stampede",
    C: "[stæmˈpi:d]",
    D: "n.（美国西部或者加拿大西部）大西部赛马会",
    E: "stamp+ed+e",
    F: "stamp邮票(熟词)+ed二弟(拼音)+e鹅(编码)",
    G: "去大西部赛马会买邮票的二弟买了只鹅",
    H: "He won the ticket to the Stampede.",
    I: "他赢得西部赛马会的入场券。"
}, {
    B: "contrary",
    C: "[ˈkɒntrərɪ]",
    D: "adj.对立的，相反的，违反的；n.反面，对立面",
    E: "con+tr+ar+y",
    F: "con康(谐音)+tr土人(拼音)+ar矮人(拼音)+y衣叉(编码)",
    G: "和康熙对立的土人带着矮人用衣叉决斗",
    H: "My sister's taste in dresses is contrary to my own.",
    I: "在服装方面，我妹妹的爱好和我完全不同。"
}, {
    B: "glare",
    C: "[gleə]",
    D: "vi.怒目而视；n.怒视，炫目的光",
    E: "gl+ar+e",
    F: "gl91(象形)+ar矮人(拼音)+e鹅(编码)",
    G: "91岁的矮人对着鹅怒目而视",
    H: "The old woman glared at him.",
    I: "那个老妇人怒视着他。"
}, {
    B: "scurvy",
    C: "['skɜ:vɪ]",
    D: "n.坏血病",
    E: "s+cur+v+y",
    F: "s美女(编码)+cur粗人(拼音)+v维生素(编码)+y衣叉(编码)",
    G: "美女吃完粗人的维生素和衣叉就得了坏血病",
    H: "Oranges, lemons and limes were found to cure scurvy.",
    I: "人们发现橙子、柠檬和酸橙能治疗坏血病。"
}, {
    B: "quiz",
    C: "[kwɪz]",
    D: "n.测试",
    E: "qu+i+z",
    F: "qu去(拼音)+i蜡烛(编码)+z鸭子(编码)",
    G: "测试时，去把蜡烛拿给鸭子",
    H: "We will have an English quiz tonight.",
    I: "今晚我们将会进行一个英语测试。"
}, {
    B: "unbelievable",
    C: "[ˌʌnbɪˈli:vəbl]",
    D: "adj.难以置信的",
    E: "un+believ+able",
    F: "un联合国(编码)+believ(e)相信(熟词)+able能(熟词)",
    G: "难以置信的是联合国相信他能看到上帝",
    H: "It is unbelievable, but I like that.",
    I: "这很难以置信，但是我喜欢它。"
}, {
    B: "reptile",
    C: "[ˈreptaɪl]",
    D: "n.爬行动物",
    E: "re+p+tile",
    F: "re热(拼音)+p皮鞋(编码)+tile踢了(拼音)",
    G: "热天穿皮鞋踢走了爬行动物",
    H: "Snakes and crocodiles are reptiles.",
    I: "蛇和鳄鱼都是爬行动物。"
}, {
    B: "flavour",
    C: "['fleɪvə]",
    D: "n.（食物的）味道，气味",
    E: "fla+v+our",
    F: "fla蜂蜡(拼音)+v维生素(编码)+our我们的(熟词)",
    G: "蜂蜡牌维生素是我们要的味道",
    H: "Too much salt masks the true flavour of the food.",
    I: "太多的盐会盖住食物本来的味道。"
}, {
    B: "skull",
    C: "[skʌl]",
    D: "n.头骨，头脑",
    E: "sk+u+ll",
    F: "sk伤口(拼音)+u你(编码you)+ll11(象形)",
    G: "头骨上的伤口是被你缝了11针",
    H: "Her husband was later treated for a fractured skull.",
    I: "她丈夫后来因颅骨碎裂而接受治疗。"
}, {
    B: "poisonous",
    C: "['pɒɪzənəs]",
    D: "adj.有毒的，恶毒的，讨厌的",
    E: "poison+ou+s",
    F: "poison毒药(熟词)+ou呕(拼音)+s蛇(编码)",
    G: "吃完毒药他呕吐出一条蛇",
    H: "Some mushrooms are poisonous.",
    I: "有些蘑菇有毒。"
}, {
    B: "maple",
    C: "[ˈmeɪpl]",
    D: "n.枫树，枫",
    E: "ma+p+le",
    F: "ma妈(拼音)+p屁(编码)+le了(拼音)",
    G: "枫树下妈妈放屁了",
    H: "The maple leaf is the emblem of Canada.",
    I: "枫叶是加拿大的象征。"
}, {
    B: "physicist",
    C: "[ˈfɪzɪsɪst]",
    D: "n.物理学家",
    E: "ph+y+sici+st",
    F: "ph屁孩(拼音)+y弹弓(编码)+sici四次(拼音)+st石头(拼音)",
    G: "屁孩玩弹弓时四次都把石头砸向物理学家",
    H: "He is a physicist of the first rank.",
    I: "他是一流的物理学家。"
}, {
    B: "governor",
    C: "[ˈgʌvənə(r)]",
    D: "n.州长，总督",
    E: "g+over+no+r",
    F: "g鸽(编码)+over结束(熟词)+no不(熟词)+r草(编码)",
    G: "州长养的鸽子结束了生命因为不吃草",
    H: "He was governor of the province in the late 1970s.",
    I: "他在20世纪70年代末担任该省的州长。"
}, {
    B: "combine",
    C: "[kəm'baɪn]",
    D: "vt./vi.使联合，使结合",
    E: "com+bin+e",
    F: "com公司(熟词company)+bin宾(拼音)+e鹅(编码)",
    G: "公司来的宾客把所有鹅联合在一起",
    H: "None of us has much money so let's combine what we've got.",
    I: "我们谁都没多少钱，因此就把我们所有的钱凑在一起吧。"
}, {
    B: "eastward",
    C: "['i:stwəd]",
    D: "adv.向东，朝东方；adj.向东的，朝东的",
    E: "east+war+d",
    F: "east东(熟词)+war战争(熟词)+d狗(编码dog)",
    G: "东方国家有战争狗却向东逃",
    H: "A powerful snow storm is moving eastward.",
    I: "一场强暴风雪正在东移。"
}, {
    B: "frost",
    C: "[frɒst]",
    D: "n.霜，冰冻，严寒",
    E: "fr+o+st",
    F: "fr夫人(拼音)+o洞(编码)+st石头(拼音)",
    G: "夫人坐在洞里的石头上忍受风霜",
    H: "The young plants all died in the late frost.",
    I: "在那次晚霜中幼苗都死了。"
}, {
    B: "terrify",
    C: "['terɪfaɪ]",
    D: "vt.恐吓，使恐怖，使害怕",
    E: "t+erri+fy",
    F: "t特(编码)+erri二日(拼音)+fy风衣(拼音)",
    G: "特务第二日遭到风衣女子的恐吓",
    H: "Flying terrifies him.",
    I: "坐飞机让他非常害怕。"
}, {
    B: "aboard",
    C: "[əˈbɔ:d]",
    D: "prep.在（船、飞机、车）上，上（船、飞机、车），上车",
    E: "abo+a+rd",
    F: "abo阿伯(拼音)+a一(熟词)+rd柔道(拼音)",
    G: "阿伯一个人在船上练柔道",
    H: "A large stash of drugs had been found aboard the yacht.",
    I: "在游艇上找到了一大批藏匿的毒品。"
}, {
    B: "biology",
    C: "[baɪ'ɒlədʒɪ]",
    D: "n.（一个地区全部的）生物，生物学",
    E: "bi+olo+gy",
    F: "bi笔(拼音)+olo010(象形)+gy公园(拼音)",
    G: "我带着笔坐010路公交车来公园研究生物",
    H: "We have the biology class on Monday.",
    I: "周一我们有生物课。"
}, {
    B: "stir",
    C: "[stə:(r)]",
    D: "vt.搅拌，搅动",
    E: "star",
    F: "star明星",
    G: "明星在给我(i)搅拌咖啡",
    H: "Mix this oil with the paint and stir well.",
    I: "把这油和漆搀在一起，好好搅拌。"
}, {
    B: "wander",
    C: "[ˈwɒndə]",
    D: "vi.闲逛，漫游",
    E: "wonder",
    F: "wonder惊奇",
    G: "他一直在闲逛太让我惊奇了",
    H: "She allowed her mind to wander.",
    I: "她任由思绪徘徊。"
}, {
    B: "pearl",
    C: "[pɜ:l]",
    D: "n.珍珠，珍珠色",
    E: "pear+l",
    F: "pear梨(熟词)+l1(象形)",
    G: "把梨做成一条珍珠项链",
    H: "I put on the pearl earrings Daddy had bought me.",
    I: "我戴上了爸爸给我买的珍珠耳环。"
}, {
    B: "bay",
    C: "[beɪ]",
    D: "n.海湾",
    E: "ba+y",
    F: "ba爸(拼音)+y弹弓(编码)",
    G: "爸爸把弹弓扔到海湾去了",
    H: "Lights twinkled across the bays.",
    I: "海湾到处灯光闪闪。"
}, {
    B: "baggage",
    C: "[ˈbægɪdʒ]",
    D: "n.行李",
    E: "ba+gg+age",
    F: "ba爸(拼音)+gg两只鸽子(编码)+age年龄(熟词)",
    G: "爸爸行李箱里装的两只鸽子年龄很大",
    H: "How many pieces of baggage do you have?",
    I: "你有几件行李？"
}, {
    B: "peach",
    C: "[pi:tʃ]",
    D: "n.桃树，桃子",
    E: "p+each",
    F: "p皮鞋(编码)+each每个(熟词)",
    G: "皮鞋在每个桃树下",
    H: "The monkey made a long arm for the peach.",
    I: "猴子伸臂去摘桃子。"
}, {
    B: "cooperation",
    C: "[kəʊ,ɒpə'reɪʃ(ə)n]",
    D: "n.合作，协作",
    E: "co+operation",
    F: "co一起(词缀)+operation操作(熟词)",
    G: "一起操作，合作共赢",
    H: "The success of our plan rests on your cooperation.",
    I: "我们的计划成功与否取决于你的合作。"
}, {
    B: "charity",
    C: "[ˈtʃærətɪ]",
    D: "n.慈善团体，施舍",
    E: "cha+ri+ty",
    F: "cha茶+ri日+ty太阳",
    G: "慈善团体的茶农日日晒太阳",
    H: "He gave the money to charity.",
    I: "他把钱捐给了慈善机构。"
}, {
    B: "independence",
    C: "[ɪndɪ'pend(ə)ns]",
    D: "n.独立性，自立性",
    E: "in+dependence",
    F: "in里面+dependence依靠",
    G: "我独立性强，里面的人都依靠我",
    H: "The superpower often tramples on the independence and sovereignty of other countries.",
    I: "这个超级大国经常无视别国的独立和主权。"
}, {
    B: "location",
    C: "[ləʊˈkeɪʃn]",
    D: "n.位置，地方",
    E: "lo+ca+tion",
    F: "lo10(象形)+ca擦(拼音)+tion神(谐音)",
    G: "10次擦肩而过后才找到神的位置",
    H: "The first thing he looked at was his office's location.",
    I: "他首先看的是自己办公室的位置。"
}, {
    B: "agriculture",
    C: "[ˈægrɪkʌltʃə(r)]",
    D: "n.农业，农艺",
    E: "ag+ri+culture",
    F: "ag阿哥(拼音)+ri日(拼音)+culture文化(熟词)",
    G: "阿哥在日头下研究农业文化",
    H: "The development of the food industry depends on that of agriculture.",
    I: "食品工业的发展有赖于农业的发展。"
}, {
    B: "starve",
    C: "[stɑːv]",
    D: "vi.挨饿，饿",
    E: "star+ve",
    F: "star星星(熟词)+ve维E(谐音)",
    G: "星星吃了维E就不用挨饿",
    H: "We gave them bread, lest they should starve.",
    I: "我们给他们面包，以免他们饿死。"
}, {
    B: "Ottawa",
    C: "['ɔtəwə]",
    D: "n.渥太华（加拿大首都）",
    E: "Ot+tawa",
    F: "Ot呕吐+tawa他娃",
    G: "在渥太华呕吐的那人是他的娃",
    H: "When will you be back in Ottawa?",
    I: "下次什么时候到渥太华？"
}, {
    B: "blossom",
    C: "['blɒs(ə)m]",
    D: "vi.开花，兴旺",
    E: "blosso+m",
    F: "blosso610550(象形)+m米(熟词)",
    G: "610550米的树全都开花了",
    H: "There is no blossom this year on the plum.",
    I: "今年李子树不开花。"
}, {
    B: "ought",
    C: "[ɔ:t]",
    D: "aux./vi.应该，应当，大概",
    E: "bought",
    F: "bought买",
    G: "你应该不买这支笔",
    H: "You ought to work hard.",
    I: "你应该努力工作。"
}, {
    B: "consult",
    C: "[kən'sʌlt]",
    D: "vt.请教，咨询，商量",
    E: "con+sult",
    F: "con啃(谐音)+sult塑料桶(拼音)",
    G: "请教老鼠怎么啃塑料桶",
    H: "Consult your doctor about how much exercise you should get.",
    I: "咨询你的医生你应做多少运动。"
}, {
    B: "parking",
    C: "['pɑ:kɪŋ]",
    D: "n.（汽车等）停放",
    E: "park+ing",
    F: "park公园(熟词)+ing鹰(谐音)",
    G: "公园里的汽车是老鹰停放的",
    H: "In many towns parking is allowed only on one side of the street.",
    I: "在很多小镇里，只能允许在街道的一侧停车。"
}, {
    B: "Christian",
    C: "['krɪstʃən]",
    D: "n.基督徒，信徒；adj.基督教的，信基督教的",
    E: "Chris+tian",
    F: "Chris克里斯(谐音)+tian天(拼音)",
    G: "基督徒克里斯在向天祈祷",
    H: "He was a devout Christian.",
    I: "他曾是一个虔诚的基督教徒。"
}, {
    B: "carnival",
    C: "['kɑ:nɪv(ə)l]",
    D: "n.狂欢节，嘉年华会，饮宴狂欢",
    E: "car+ni+val",
    F: "car车(熟词)+ni你(拼音)+val我(谐音)",
    G: "在车库里你和我开狂欢节",
    H: "There is a local carnival every year.",
    I: "当地每年都举行狂欢节。"
}, {
    B: "grizzly",
    C: "['grɪzlɪ]",
    D: "n.（北美洲）灰熊；adj.灰色的，有灰斑的",
    E: "gr+i+zz+ly",
    F: "gr工人(拼音)+i我(熟词I)+zz22(象形)+ly梨(谐音)",
    G: "工人让我喂22个梨给灰熊吃",
    H: "Grizzly bears are not generally social creatures.",
    I: "一般说来，灰熊不是社交型动物。"
}, {
    B: "protective",
    C: "[prə'tektɪv]",
    D: "adj.保护的，给予保护的",
    E: "protect+ive",
    F: "protect保护(熟词)+ive衣服(谐音)",
    G: "这是一件受保护的金丝衣服",
    H: "Workers should wear full protective clothing.",
    I: "工人应该穿着全套防护服。"
}, {
    B: "impressive",
    C: "[ɪm'presɪv]",
    D: "adj.给人以深刻印象的，感人的",
    E: "im+press+ive",
    F: "im姨母(谐音)+press按(熟词)+ive衣服(谐音)",
    G: "印象深刻的是姨母按着衣服不撒手",
    H: "It is an impressive achievement.",
    I: "这是一项让人印象深刻的成就。"
}, {
    B: "bacon",
    C: "['beɪk(ə)n]",
    D: "n.咸肉，腌肉，熏猪肉",
    E: "ba+con",
    F: "ba爸(拼音)+con啃(谐音)",
    G: "爸爸在啃咸肉",
    H: "We had bacon and eggs for breakfast.",
    I: "我们早餐吃咸肉和煎蛋。"
}, {
    B: "cucumber",
    C: "['kju:kʌmbə]",
    D: "n.黄瓜",
    E: "cu+cumb+er",
    F: "cuQ(谐音)+cumb粗面包(拼音)+er儿(拼音)",
    G: "阿Q用粗面包换了儿子的黄瓜",
    H: "Cucumber is good for soothing tired eyes.",
    I: "黄瓜有助于舒缓眼部疲劳。"
}, {
    B: "fundamental",
    C: "[fʌndə'ment(ə)l]",
    D: "adj.基本的，根本的",
    E: "fun+da+ment+al",
    F: "fun有趣(熟词)+da的(谐音)+ment门徒(谐音)+al阿狸(拼音)",
    G: "有趣的是，门徒认为抚养阿狸是最基本的",
    H: "Clothes are a fundamental form of self-expression.",
    I: "衣服是一种基本的自我表现形式。"
}, {
    B: "boyhood",
    C: "['bɒɪhʊd]",
    D: "n.少年时代，男孩们",
    E: "boy+hood",
    F: "boy男孩(熟词)+hood虎的(谐音)",
    G: "少年时代，男孩都喜欢老虎的玩具",
    H: "Boyhood is a happy time of life.",
    I: "少年时代是人生的一个幸福阶段。"
}, {
    B: "benefit",
    C: "['benɪfɪt]",
    D: "n.好处，利益",
    E: "bene+fit",
    F: "bene奔你(谐音)+fit合适(熟词)",
    G: "好处是投奔着你是合适的",
    H: "The new railway will benefit the district.",
    I: "新铁路将使这地区得益。"
}, {
    B: "curiosity",
    C: "[kjʊərɪ'ɒsətɪ]",
    D: "n.好奇心",
    E: "cur+ios+ity",
    F: "cur粗人(拼音)+ios苹果系统(谐音)+ity议题(谐音)",
    G: "有好奇心的粗人用ios系统写议题",
    H: "He gave in to curiosity and opened my letter.",
    I: "他抑制不住好奇心，拆开了我的信。"
}, {
    B: "biologist",
    C: "[baɪˈɒlədʒɪst]",
    D: "n.生物学家",
    E: "bi+olo+gi+st",
    F: "bi鼻(拼音)+olo010(象形北京区号)+gi纸(谐音)+st尸体(拼音)",
    G: "生物学家用鼻子闻到北京买的纸里有尸体味",
    H: "Susi Arnott is a biologist.",
    I: "苏茜·阿诺特是一位生物学家。"
}, {
    B: "multiply",
    C: "['mʌltɪplaɪ]",
    D: "vt.乘，增加，繁殖；adv.多样地，复合地",
    E: "mul+tip+ly",
    F: "mul妈(谐音)+tip小费(熟词)+ly理由(拼音)",
    G: "妈给小费的理由是乘法好算",
    H: "Square measurements are calculated by multiply length by width.",
    I: "面积是通过长乘以宽来计算的。"
}, {
    B: "incense",
    C: "['ɪnsens]",
    D: "n.熏香，熏香的烟",
    E: "incen+se",
    F: "incen阴森(谐音)+se色(拼音)",
    G: "阴森的房间里点着红色的熏香",
    H: "I love the smell of the incense.",
    I: "我喜欢这个熏香的味道。"
}, {
    B: "geologist",
    C: "[dʒiˈɒlədʒɪst]",
    D: "n.地质学家",
    E: "ge+olo+gi+st",
    F: "ge鸽(拼音)+olo010(象形北京区号)+gi纸(谐音)+st尸体(拼音)",
    G: "地质学家的鸽子发现北京买的纸里裹着尸体",
    H: "The geologist found many uncovered fossils in the valley.",
    I: "在那山谷里，地质学家发现了许多裸露的化石。"
}, {
    B: "religion",
    C: "[rɪ'lɪdʒ(ə)n]",
    D: "n.宗教信仰，宗教",
    E: "re+li+gion",
    F: "re热(拼音)+li梨(拼音)+gion真(谐音)",
    G: "热梨真的有宗教信仰，会是什么？",
    H: "Maybe  religion  should help to straighten him out.",
    I: "也许宗教信仰可以使他改邪归正。"
}, {
    B: "acid",
    C: "['æsɪd]",
    D: "n.酸；adj.酸的，酸性的",
    E: "a+ci+d",
    F: "a苹果(编码)+ci赐(拼音)+d弟(编码)",
    G: "把酸苹果赐给弟弟",
    H: "Battery acid had eroded the engine.",
    I: "电池酸腐蚀了发动机。"
}, {
    B: "atom",
    C: "[ˈætəm]",
    D: "n.原子",
    E: "a+tom",
    F: "a苹果(编码)+tom汤姆(熟词Tom)",
    G: "吃着苹果的汤姆在研究原子",
    H: "A molecule of water consists of two atoms of hydrogen and one atom of oxygen.",
    I: "水分子由两个氢原子和一个氧原子构成。"
}, {
    B: "pavement",
    C: "[ˈpeɪvmənt]",
    D: "n.人行道",
    E: "pa+ve+ment",
    F: "pa趴(拼音)+ve维E(编码)+ment门徒(拼音)",
    G: "人行道上有个趴在地上吃维E的门徒",
    H: "He was hurrying along the pavement.",
    I: "他在人行道上疾行。"
}, {
    B: "bet",
    C: "[bet]",
    D: "n.打赌，赌注；vt.打赌，敢断定",
    E: "b+et",
    F: "b男孩(boy)+et外星人",
    G: "男孩打赌说他见过外星人",
    H: "You can put a bet on almost anything these days.",
    I: "如今几乎可以对任何东西下赌注。"
}, {
    B: "mist",
    C: "[mɪst]",
    D: "n.薄雾，水汽",
    E: "mis+t",
    F: "mis密室(拼音)+t特(编码)",
    G: "逃出密室的特务在薄雾中迷路",
    H: "She peered through the mist, trying to find the right way.",
    I: "她透过雾仔细看，想找到正确的路。"
}, {
    B: "amphibian",
    C: "[æmˈfɪbɪən]",
    D: "n.两栖动物",
    E: "am+ph+i+bian",
    F: "am早上(熟词)+ph屁孩(拼音)+i骨头(编码)+bian变(拼音)",
    G: "早上屁孩吃完骨头变成了两栖动物",
    H: "Both the toad and frog are amphibian.",
    I: "蟾蜍和青蛙都是两栖动物。"
}, {
    B: "penguin",
    C: "[ˈpeŋgwɪn]",
    D: "n.企鹅",
    E: "pen+gui+n",
    F: "pen笔(熟词)+gui柜(拼音)+n门(编码)",
    G: "企鹅用笔打开了柜门",
    H: "The penguin is a flightless bird.",
    I: "企鹅是一种不会飞的鸟。"
}, {
    B: "permit",
    C: "[pəˈmɪt]",
    D: "vt./vi.许可，允许，准许",
    E: "per+mi+t",
    F: "per每次(熟词)+mi米(拼音)+t特(编码)",
    G: "每次买米都要得到特务的许可",
    H: "Permit me to give you some advice.",
    I: "请允许我给你提点建议。"
}, {
    B: "dioxide",
    C: "[daɪ'ɒksaɪd]",
    D: "n.二氧化碳",
    E: "di+o+xide",
    F: "di弟(拼音)+o洞(编码)+xide吸的(拼音)",
    G: "弟弟在洞里吸进去的是二氧化碳",
    H: "Coke burns with oxygen to give carbon dioxide.",
    I: "焦碳用氧气燃烧,产生二氧化碳。"
}, {
    B: "spot",
    C: "[spɒt]",
    D: "n.斑点，点，地点",
    E: "s+po+t",
    F: "s蛇(编码)+po破(拼音)+t伞(编码)",
    G: "斑点蛇咬破了伞",
    H: "His glance stayed posited on the spot.",
    I: "他的目光盯住那一点不动。"
}, {
    B: "dissolve",
    C: "[dɪ'zɒlv]",
    D: "vt./vi.(使)溶解，解散",
    E: "dis+sol+ve",
    F: "dis的士(拼音)+sol501(象形)+ve维E(编码)",
    G: "的士司机把501颗维E放进水里溶解了",
    H: "Dissolve the sugar in water.",
    I: "将糖溶于水中。"
}, {
    B: "Missouri",
    C: "[mɪ'zʊrɪ]",
    D: "n.密苏里（美国州名）",
    E: "Miss+our+i",
    F: "Miss小姐(熟词)+our我们的(熟词)+i蜡烛(编码)",
    G: "密苏里的小姐买了我们的蜡烛",
    H: "We live in Missouri.",
    I: "我们住在密苏里州。"
}, {
    B: "chat",
    C: "[tʃæt]",
    D: "vi./n.聊天，闲聊",
    E: "cha+t",
    F: "cha茶(拼音)+t伞(编码)",
    G: "喝茶时在伞下聊天",
    H: "He chats with his mother every day.",
    I: "他每天都跟他妈妈聊天。"
}, {
    B: "nut",
    C: "[nʌt]",
    D: "n.坚果，果仁",
    E: "nu+t",
    F: "nu怒(拼音)+t伞(编码)",
    G: "发怒的他用伞打坚果",
    H: "Nuts and seeds are good sources of vitamin E.",
    I: "坚果和种子是维生素E的良好来源。"
}, {
    B: "acre",
    C: "['eɪkə(r)]",
    D: "n.英亩",
    E: "ac+re",
    F: "acAC米兰(编码)+re热(拼音)",
    G: "AC米兰球员在两英亩足球场上狂热地比赛",
    H: "They own 200 acres of farmland.",
    I: "他们拥有200英亩农田。"
}, {
    B: "minister",
    C: "[ˈmɪnɪstə(r)]",
    D: "n.部长，大臣",
    E: "mini+s+ter",
    F: "mini迷你(熟词)+s蛇(编码)+ter天鹅肉(拼音)",
    G: "部长养的迷你蛇吃天鹅肉",
    H: "The new Defence Minister is Senator Robert Ray.",
    I: "新任国防部部长是参议员罗伯特·雷。"
}, {
    B: "penniless",
    C: "['penɪlɪs]",
    D: "adj.贫困的，身无分文的",
    E: "pen+nile+ss",
    F: "pen钢笔(熟词)+nile腻了(拼音)+ss两个美女(编码)",
    G: "钢笔用腻了就送给两个贫困的美女",
    H: "She fell in love with a penniless artist.",
    I: "她爱上了一个一贫如洗的画家。"
}, {
    B: "fibre",
    C: "['faɪbə]",
    D: "n.纤维，纤维制品",
    E: "f+i+bre",
    F: "f佛(编码)+i爱(编码)+bre不热(拼音)",
    G: "佛爱穿不热的纤维制的衣服",
    H: "Most vegetables contain fibre.",
    I: "大多数蔬菜都含有纤维。"
}, {
    B: "slightly",
    C: "[ˈslaɪtlɪ]",
    D: "adv.轻微地，稍稍，细长地",
    E: "s+light+ly",
    F: "s蛇(编码)+light光(熟词)+ly老爷(拼音)",
    G: "蛇在灯光下对着老爷轻微地摆动",
    H: "She's slightly taller than her sister.",
    I: "她比她姐姐稍高一点儿。"
}, {
    B: "vitamin",
    C: "['vɪtəmɪn]",
    D: "n.维生素",
    E: "v+it+amin",
    F: "v胜利(编码)+it它(熟词)+amin阿敏(拼音)",
    G: "胜利后，它把阿敏的维生素吃光了",
    H: "Vitamin C will be destroyed when overheated.",
    I: "维生素C受热过度就会被破坏。"
}, {
    B: "Florida",
    C: "['flɔrɪdə]",
    D: "n.佛罗里达（美国东南部的州）",
    E: "F+lo+rida",
    F: "F斧头(编码)+lo10(象形)+rida日大(拼音)",
    G: "佛罗里达的斧头有10个日本那么大",
    H: "Dolphins and sharks are showing up in surprisingly shallow water just off the Florida coast.",
    I: "海豚和鲨鱼很惊奇的出现在弗洛里达海岸的浑水海岸。"
}, {
    B: "Trinidad",
    C: "['trɪnɪˌdæd]",
    D: "n.特立尼达拉岛",
    E: "Tr+i+ni+dad",
    F: "Tr土人(拼音)+i爱(编码)+ni你(拼音)+dad爸爸(熟词)",
    G: "特立尼达拉岛的土人爱上了你的爸爸",
    H: "She was born in Trinidad.",
    I: "她出生在特立尼达岛。"
}, {
    B: "herd",
    C: "[hɜ:d]",
    D: "n.兽群，畜群；vi./vt.使集在一起，牧放（畜群）",
    E: "her+d",
    F: "her她的(熟词)+d狗(编码dog)",
    G: "她的狗混在兽群里",
    H: "A herd of elephants lolloped across the plains towards a watering hole.",
    I: "一群大象缓慢而笨拙地穿过平原，朝水潭走去。"
}, {
    B: "unpaid",
    C: "[ˌʌnˈpeɪd]",
    D: "adj.未付款的，不受报酬的",
    E: "un+paid",
    F: "un联合国(编码)+paid拍的(拼音)",
    G: "联合国在天猫上拍的单未付款",
    H: "Even unpaid work for charity is better than nothing.",
    I: "即便是给慈善机构做义工也比什么都不做要好。"
}, {
    B: "rocky",
    C: "[ˈrɒkɪ]",
    D: "adj.坚如磐石的，多岩石的，麻木的",
    E: "rock+y",
    F: "rock石头(熟词)+y树杈(编码)",
    G: "石头上的树杈坚如磐石",
    H: "She scrambled along the rocky path.",
    I: "她沿着一条崎岖的小道攀爬。"
}, {
    B: "seek",
    C: "[si:k]",
    D: "vt./vi.寻找，搜索，寻求",
    E: "see+k",
    F: "see看(熟词)+k机枪(编码)",
    G: "看见他在寻找机关枪",
    H: "I will seek them out.",
    I: "我一定要把他们找出来。"
}, {
    B: "weakness",
    C: "['wi:knɪs]",
    D: "n.弱点，缺点，虚弱",
    E: "weak+ne+ss",
    F: "weak虚弱的(熟词)+ne哪(拼音)+ss两个美女(编码)",
    G: "虚弱的哪吒看出了两个美女的弱点",
    H: "You should know your weakness.",
    I: "你应清楚自己的弱点。"
}, {
    B: "genuine",
    C: "['dʒenjʊɪn]",
    D: "adj.真正的，真实的，诚恳的",
    E: "ge+nu+in+e",
    F: "ge哥(拼音)+nu怒(拼音)+in里面(熟词)+e鹅(编码)",
    G: "哥哥真的怒了在里面杀鹅",
    H: "This was a genuine mistake, but it did cause me some worry.",
    I: "这是好心办错事，可是确实让我担心了一阵子。"
}, {
    B: "announcer",
    C: "[ə'naʊnsə]",
    D: "n.[广播]广播员，宣告者",
    E: "announce+r",
    F: "announce宣布(熟词)+r草(编码)",
    G: "广播员宣布草地的建成",
    H: "The announcer apologised for the delay.",
    I: "播报员就晚点表示歉意。"
}, {
    B: "comet",
    C: "[ˈkɒmɪt]",
    D: "n.彗星",
    E: "come+t",
    F: "come来(熟词)+t伞(编码)",
    G: "彗星来时砸到了我的伞",
    H: "Recently they have discovered a comet.",
    I: "最近他们发现了一颗彗星。"
}, {
    B: "buffet",
    C: "['bʊfeɪ]",
    D: "n.自助餐，饮食柜台",
    E: "bu+ff+et",
    F: "bu不(拼音)+ff两把斧头(编码)+et外星人(编码)",
    G: "自助餐餐厅里不能拿两把斧头砍外星人",
    H: "We have a buffet lunch today.",
    I: "我们今天吃了自助午餐。"
}, {
    B: "upward",
    C: "[ˈʌpwəd]",
    D: "adj.向上的，升高的；adv.向上地",
    E: "up+war+d",
    F: "up上(熟词)+war战争(熟词)+d狗(编码dog)",
    G: "在树上看到战争的狗向上逃",
    H: "We must keep a healthy and upward mood.",
    I: "要保持健康向上的心态。"
}, {
    B: "sugary",
    C: "['ʃʊg(ə)rɪ]",
    D: "adj.甜的，含糖的，糖状的",
    E: "sugar+y",
    F: "sugar糖(熟词)+y衣叉(编码)",
    G: "甜的糖掉在了衣叉上",
    H: "Do you eat sweets, cakes or sugary snacks?",
    I: "你吃糖果、蛋糕或甜点吗？"
}, {
    B: "exhaust",
    C: "[ɪg'zɔ:st]",
    D: "vt./vi.使筋疲力尽，使疲惫不堪，耗尽",
    E: "ex+ha+u+st",
    F: "ex前夫(熟词)+ha哈(拼音)+u桶(编码)+st石头(拼音)",
    G: "前夫的二哈搬完一桶石头后感到筋疲力尽",
    H: "He took to walking long distances in an attempt to physically exhaust himself.",
    I: "他开始长距离步行，试图耗尽自己的体力。"
}, {
    B: "stir-fry",
    C: "['stə:fraɪ]",
    D: "vt.用旺火炒",
    E: "sti+r+fry",
    F: "sti死踢(拼音)+r草(编码)+fry煎(熟词)",
    G: "死踢草的他把面煎了然后用旺火炒",
    H: "Stir-fry the vegetables until crisp.",
    I: "煸炒蔬菜直至变脆。"
}, {
    B: "hunter",
    C: "['hʌntə]",
    D: "n.猎人，狩猎者",
    E: "h+un+ter",
    F: "h椅子(编码)+un联合国(编码)+ter天鹅肉(拼音)",
    G: "猎人坐在椅子上在联合国里吃天鹅肉",
    H: "The hunter hit at a deer with his gun.",
    I: "猎人举枪向鹿射去。"
}, {
    B: "carbon",
    C: "[ˈkɑ:bən]",
    D: "n.碳",
    E: "car+bo+n",
    F: "car汽车(熟词)+bo60(象形)+n门(编码)",
    G: "汽车载着60吨碳经过大门",
    H: "Carbon is the sixth element in the periodic table.",
    I: "碳是元素周期表中的第六个元素。"
},
// 3
{
    B: "bored",
    C: "[bɔ:d]",
    D: "adj.（对某人、某物）厌倦的，烦闷的",
    E: "bo+red",
    F: "bo伯(拼音)+red红色的(熟词)",
    G: "伯伯红着脸说自己对这件事情感到很厌倦",
    H: "I am getting bored with maths.",
    I: "我开始厌烦数学了。"
}, {
    B: "pancake",
    C: "['pænkeɪk]",
    D: "n.薄饼，烙饼",
    E: "pan+cake",
    F: "pan盘(拼音)+cake蛋糕(熟词)",
    G: "盘里有蛋糕和薄饼",
    H: "I want a vegetable pancake.",
    I: "我要一份蔬菜薄饼。"
}, {
    B: "athletic",
    C: "[æθ'letɪk]",
    D: "adj.运动的",
    E: "athlet+ic",
    F: "athlet(e)运动员(熟词)+icIC卡(编码)",
    G: "运动员跑步时踩到了IC卡",
    H: "Wade was a hearty, bluff, athletic sort of guy.",
    I: "韦德是个精力充沛、率直、运动型的人。"
}, {
    B: "battle",
    C: "['bæt(ə)l]",
    D: "n.战斗，战役，斗争",
    E: "ba+tt+le",
    F: "ba爸(拼音)+tt两把伞(编码)+le乐(拼音)",
    G: "爸爸打着两把伞快乐地在战斗",
    H: "He was killed in battle.",
    I: "他在战斗中阵亡了。"
}, {
    B: "producer",
    C: "[prə'dju:sə]",
    D: "n.生产者，制片人",
    E: "pro+duce+r",
    F: "pro飘柔(拼音)+duce堵厕(拼音)+r草(编码)",
    G: "飘柔的生产者被堵在厕所吃草",
    H: "He is the producer of the new movie.",
    I: "他是这部新电影的制片人。"
}, {
    B: "production",
    C: "[prə'dʌkʃ(ə)n]",
    D: "n.生产，制造",
    E: "produc+tion",
    F: "produc(t)产品(熟词)+tion神(谐音)",
    G: "产品是神生产的",
    H: "The car went out of production in 2002.",
    I: "这种汽车已于2002年停产。"
}, {
    B: "rate",
    C: "[reɪt]",
    D: "n.速度，比率",
    E: "rat+e",
    F: "rat老鼠(熟词)+e鹅(编码)",
    G: "老鼠比鹅的速度快",
    H: "The drug has a high success rate.",
    I: "这种药物治疗疾病的成功率很高。"
}, {
    B: "audience",
    C: "['ɔ:dɪəns]",
    D: "n.听众，观众，读者",
    E: "au+di+ence",
    F: "au澳大利亚(编码)+di弟(拼音)+ence摁厕(拼音)",
    G: "听众在澳大利亚被弟弟摁倒在厕所",
    H: "The museum is trying to attract a wide audience.",
    I: "博物馆正努力地吸引众多的观众。"
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
    B: "actress",
    C: "['æktrɪs]",
    D: "n.女演员",
    E: "act+re+ss",
    F: "act表演(熟词)+re热(拼音)+ss两位美女(编码)",
    G: "表演很热情的两位美女是女演员",
    H: "She wants to be an actress.",
    I: "她想当个女演员。"
}, {
    B: "regret",
    C: "[rɪ'gret]",
    D: "vt.后悔，懊悔",
    E: "re+gr+et",
    F: "re惹(拼音)+gr工人(拼音)+et外星人(编码)",
    G: "惹怒工人的外星人后悔了",
    H: "I might well regret it later.",
    I: "我很可能以后会对此后悔的。"
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
    B: "kindness",
    C: "['kaɪn(d)nɪs]",
    D: "n.仁慈，好意，友好的行为",
    E: "kind+ne+ss",
    F: "kind友好的(熟词)+ne哪(吒)(拼音)+ss两个美女(编码)",
    G: "友好的哪吒对两个美女很仁慈",
    H: "He did it all out of kindness.",
    I: "他做这事完全出于好意。"
}, {
    B: "humour",
    C: "['hju:mə(r)]",
    D: "n.幽默",
    E: "humou+r",
    F: "humou胡某(拼音)+r草(编码)",
    G: "胡某吃了小草的幽默细胞",
    H: "There is a wry sense of humour in his work.",
    I: "他的作品带有一种讽刺意味的幽默。"
}, {
    B: "career",
    C: "[kə'rɪə(r)]",
    D: "n.事业，职业，生涯；adj.作为毕生职业的",
    E: "car+eer",
    F: "car车(熟词)+eer耳朵(形比ear)",
    G: "车撞掉我的耳朵，导致失去了事业",
    H: "During his career, he wrote two hundred poets.",
    I: "在他的职业生涯中，他写了200首诗。"
}, {
    B: "anger",
    C: "['æŋgə]",
    D: "n.生气，怒，愤怒；vt.使发怒，激怒",
    E: "ang+er",
    F: "ang昂+er儿",
    G: "生气后打了昂首挺胸的儿子",
    H: "Ellen felt both despair and anger at her mother.",
    I: "埃伦对她的母亲感到既绝望又生气。"
}, {
    B: "freedom",
    C: "['fri:dəm]",
    D: "n.自由，自主",
    E: "free+do+m",
    F: "free免费(熟词)+do做(熟词)+m麦当劳(编码)",
    G: "免费做麦当劳兼职是我的自由",
    H: "Children are allowed much more freedom these days.",
    I: "现在孩子们的自由大得多了。"
}, {
    B: "discovery",
    C: "[dɪ'skʌv(ə)rɪ]",
    D: "n.发现",
    E: "dis+cover+y",
    F: "dis的士(拼音)+cover遮盖(熟词)+y树杈(编码)",
    G: "的士覆盖的树杈被发现了",
    H: "I thought I'd made an important discovery.",
    I: "我认为自己有了一个重要的发现。"
}, {
    B: "amusing",
    C: "[ə'mju:zɪŋ]",
    D: "adj.好笑的，有趣的",
    E: "am+u+sing",
    F: "am阿妈(拼音)+u桶(编码)+sing唱歌(熟词)",
    G: "阿妈头顶着桶唱歌很好笑",
    H: "His wit made even troubles seem amusing.",
    I: "他的风趣能使麻烦事也变得似乎有趣。"
}, {
    B: "curious",
    C: "['kjʊərɪəs]",
    D: "adj.好奇的",
    E: "cu+rio+us",
    F: "cu粗(拼音)+rio鸡尾酒(编码)+us我们(熟词)",
    G: "粗人喝鸡尾酒使我们感到好奇",
    H: "Babies are curious about everything around them.",
    I: "婴儿对周围的一切都很好奇。"
}, {
    B: "drunk",
    C: "[drʌŋk]",
    D: "adj.醉的",
    E: "d+run+k",
    F: "d弟(编码)+run跑(熟词)+k机关枪(编码)",
    G: "喝醉的弟弟边跑边开机关枪",
    H: "He must be either mad or drunk.",
    I: "他要么是疯了，要么是喝醉了。"
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
    B: "employee",
    C: "[emplɒɪ'i:]",
    D: "n.雇员",
    E: "employ+ee",
    F: "employ雇佣(熟词)+ee两只鹅(编码)",
    G: "雇佣两只鹅当雇员",
    H: "The boss dismissed the employee.",
    I: "老板解雇了那个雇员。"
}, {
    B: "argue",
    C: "['ɑ:gju:]",
    D: "vt./vi.争论，讨论，辩论",
    E: "ar+gu+e",
    F: "ar矮人(拼音)+gu鼓(拼音)+e鹅(编码)",
    G: "矮人敲鼓与鹅争论",
    H: "The children are always arguing.",
    I: "孩子们老是吵个不休。"
}, {
    B: "intend",
    C: "[ɪn'tend]",
    D: "vt.打算，计划",
    E: "in+ten+d",
    F: "in里面(熟词)+ten十(熟词)+d狗(编码dog)",
    G: "打算放了里面的十只狗",
    H: "We intend to go to Australia next year.",
    I: "我们打算明年去澳大利亚。"
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
    B: "Spain",
    C: "[speɪn]",
    D: "n.西班牙（欧洲国家）",
    E: "S+pain",
    F: "S美女(编码)+pain疼痛(熟词)",
    G: "西班牙美女肚子痛",
    H: "They are touring in Spain.",
    I: "他们正在西班牙旅游。"
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
    B: "chemical",
    C: "['kemɪkl]",
    D: "n.化学品",
    E: "chemi+cal",
    F: "chemi车迷(拼音)+cal(l)打电话(熟词)",
    G: "车迷打电话买了大量化学品",
    H: "The chemical is very dangerous.",
    I: "化学品很危险。"
}, {
    B: "ordinary",
    C: "['ɔ:dɪn(ə)rɪ]",
    D: "adj.平凡的，普通的",
    E: "or+di+na+ry",
    F: "or偶人+di弟+na那+ry人妖",
    G: "平凡的偶人弟弟变成了那个人妖",
    H: "It's just an ordinary camera.",
    I: "它只是一个普通的相机。"
}, {
    B: "root",
    C: "[ru:t]",
    D: "n.根",
    E: "r+oo+t",
    F: "r草(编码)+oo望远镜(编码)+t伞(编码)",
    G: "在草地上用望远镜看到伞下的树根",
    H: "The roots of this plant go deep.",
    I: "这种植物的根扎得很深。"
}, {
    B: "support",
    C: "[sə'pɔ:t]",
    D: "n.支持",
    E: "s+up+port",
    F: "s美女(编码)+up起来(熟词)+port港口(熟词)",
    G: "美女起来站在港口边支持我们",
    H: "I need your support.",
    I: "我需要你的支持。"
}, {
    B: "respect",
    C: "[rɪ'spekt]",
    D: "vt.尊重，慎重",
    E: "re+sp+e+ct",
    F: "re热(拼音)+sp视频(拼音)+e鹅(编码)+ctCT(编码)",
    G: "热门视频中的鹅做CT检查很受人尊重",
    H: "The young should respect the old.",
    I: "年轻人应尊重老年人。"
}, {
    B: "organization",
    C: "[ˌɔ:gənaɪ'zeɪʃn]",
    D: "n.组织，机构",
    E: "organiz+ation",
    F: "organiz(e)组织(熟词)+ation爱神(谐音)",
    G: "组织爱神一起比赛",
    H: "China entered the World Trade Organization.",
    I: "中国加入了世界贸易组织。"
}, {
    B: "behaviour",
    C: "[bɪ'heɪvjə(r)]",
    D: "n.表现，（动植物的）活动方式，表现方式",
    E: "behav+i+our",
    F: "behav(e)表现(熟词)+i爱(编码)+our我们的(熟词)",
    G: "我们表现太好，他很爱我们",
    H: "What comments have you about my son's behaviour?",
    I: "你对我儿子的行为有什么意见？"
}, {
    B: "creature",
    C: "['kri:tʃə(r)]",
    D: "n.动物，生物",
    E: "cr+eat+u+re",
    F: "cr超人(拼音)+eat吃(熟词)+u你(编码you)+re热(拼音)",
    G: "超人吃的那些动物是你从热带弄来的",
    H: "This creature lives in the depth of the ocean.",
    I: "这种生物生活在海洋深处。"
}, {
    B: "reduce",
    C: "[rɪ'dju:s]",
    D: "vt./vi.降低，减少，缩小",
    E: "redu+ce",
    F: "redu热度+ce厕",
    G: "为降低热度，去厕所洗澡",
    H: "She tried to reduce her weight.",
    I: "她设法降低她的体重。"
}, {
    B: "mess",
    C: "[mes]",
    D: "n.杂乱，不整洁",
    E: "miss",
    F: "miss思念",
    G: "在杂乱中他开始思念家人",
    H: "You've made a mess of the matter.",
    I: "你把事情弄糟了。"
}, {
    B: "soil",
    C: "[sɒɪl]",
    D: "n.土壤，土地",
    E: "s+oil",
    F: "s蛇(编码)+oil油(熟词)",
    G: "蛇把油倒在土壤里",
    H: "The soil is fat.",
    I: "土地很肥沃。"
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
    B: "performer",
    C: "[pə'fɔ:mə]",
    D: "n.表演者，演出者",
    E: "per+former",
    F: "per普洱(拼音)+former以前的(熟词)",
    G: "喝普洱茶的人以前是表演者",
    H: "He's a brilliant performer.",
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
    B: "comment",
    C: "['kɒment]",
    D: "n.评论，意见，批评",
    E: "com+ment",
    F: "com公司(编码)+ment门徒(拼音)",
    G: "公司禁止门徒写评论",
    H: "Mike made no comment on the report.",
    I: "Mike没有对这个报告作出评价。"
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
    C: "[pə'tɪkjʊləlɪ]",
    D: "adv.特别，尤其",
    E: "part+icu+lar+ly",
    F: "part部分(熟词)+icu重症监护室(编码)+lar腊肉(拼音)+ly老爷(拼音)",
    G: "部分重症监护室病人特别喜欢吃腊肉的老爷",
    H: "He was not a particularly good shot because of his eyesight.",
    I: "他视力不好，算不上是一个出色的射手。"
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
    B: "theme",
    C: "[θi:m]",
    D: "n.主题，题目，主题思想",
    E: "the+me",
    F: "the这+me我",
    G: "这就是我今天要演讲的主题",
    H: "This article marries theme and style well.",
    I: "这篇文章的主题和风格结合得很好。"
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
    B: "hug",
    C: "[hʌg]",
    D: "vt.拥抱，紧抱",
    E: "huge",
    F: "huge巨大的",
    G: "我给鹅(e)一个巨大的拥抱",
    H: "If you love someone, give them a hug.",
    I: "如果你有爱的人，请别吝啬给他们一个拥抱。"
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
    B: "inspiration",
    C: "[ɪnspɪ'reɪʃ(ə)n]",
    D: "n.灵感，鼓舞",
    E: "inspir+ation",
    F: "inspir(e)鼓舞(熟词)+ation阿婶(谐音)",
    G: "鼓舞下阿婶，她就有灵感了",
    H: "I cannot write without inspiration.",
    I: "没有灵感我写不出东西。"
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
    B: "snowstorm",
    C: "[ˈsnəʊstɔ:m]",
    D: "n.暴风雪",
    E: "snow+storm",
    F: "snow雪+storm暴风雨",
    G: "暴风雪会带来大雪和暴风雨",
    H: "He died in a snowstorm.",
    I: "他在暴风雪中丧命。"
}, {
    B: "childhood",
    C: "['tʃaɪldhʊd]",
    D: "n.童年，幼年时代",
    E: "child+hood",
    F: "child小孩(熟词)+hood虎的(谐音)",
    G: "童年时孩子爱看老虎的动画片",
    H: "I had a happy childhood.",
    I: "我的童年很快乐。"
}, {
    B: "function",
    C: "['fʌŋ(k)ʃ(ə)n]",
    D: "n.功能",
    E: "fun+c+tion",
    F: "fun有趣(熟词)+c月亮(编码)+tion神(谐音)",
    G: "有趣的月神有什么特殊功能呢",
    H: "This phone has many functions.",
    I: "这款手机有许多功能。"
}, {
    B: "leather",
    C: "['leðə]",
    D: "n.皮革，皮革制品",
    E: "lea+th+er",
    F: "lea利(熟词Lea)+th土豪(拼音)+er儿(拼音)",
    G: "利送给土豪的儿子一条皮裤",
    H: "I bought a pair of leather shoes.",
    I: "我买了一双皮鞋。"
}, {
    B: "gesture",
    C: "[ˈdʒestʃə]",
    D: "n.姿势，手势",
    E: "ge+s+ture",
    F: "ge哥(拼音)+s美女(编码)+ture扯(谐音)",
    G: "哥哥被美女扯过来摆姿势",
    H: "I don't understand her gesture.",
    I: "我不明白她的手势。"
}, {
    B: "homeless",
    C: "['həʊmləs]",
    D: "adj.无家可归的，无家的",
    E: "home+less",
    F: "home家+less更少",
    G: "无家可归的人回家次数更少",
    H: "The earthquake left them homeless.",
    I: "地震让他们无家可归。"
}, {
    B: "sunlight",
    C: "['sʌnlaɪt]",
    D: "n.阳光",
    E: "sun+light",
    F: "sun太阳+light灯",
    G: "太阳光像灯一样亮",
    H: "Don't read in the sunlight.",
    I: "别在阳光下看书。"
}, {
    B: "entertainment",
    C: "[entə'teɪnm(ə)nt]",
    D: "n.娱乐，消遣，款待",
    E: "enter+tai+n+ment",
    F: "enter进入(熟词)+tai泰(拼音)+n门(编码)+ment门徒(拼音)",
    G: "进入泰山的门后，门徒在搞娱乐活动",
    H: "A cinema is a place of entertainment.",
    I: "电影院是个娱乐场所。"
}, {
    B: "tourism",
    C: "['tʊərɪz(ə)m]",
    D: "n.旅游业",
    E: "tour+is+m",
    F: "tour旅游(熟词)+is是(熟词)+m麦当劳(编码)",
    G: "旅游业的繁荣是麦当劳带来的",
    H: "The area is heavily dependent on tourism.",
    I: "这个地区非常依赖旅游业。"
}, {
    B: "various",
    C: "['veərɪəs]",
    D: "adj.不同的，各种各样的",
    E: "v+a+ri+ous",
    F: "v胜利(编码)+a苹果(编码)+ri日(拼音)+ous藕丝(拼音)",
    G: "胜利获得苹果后日本人用藕丝做不同的菜",
    H: "She took the job for various reasons.",
    I: "她由于各种不同的原因接受了这份工作。"
}, {
    B: "project",
    C: "['prɒdʒekt]",
    D: "n.项目，工程，计划",
    E: "pro+jec+t",
    F: "pro飘柔(拼音)+jec杰克(谐音)+t特(编码)",
    G: "飘柔的项目被杰克这个特务偷走了",
    H: "This project is so important.",
    I: "这个项目非常重要。"
}, {
    B: "struggle",
    C: "['strʌg(ə)l]",
    D: "n.斗争，拼搏，努力",
    E: "str+u+gg+le",
    F: "str街道(熟词street)+u桶(编码)+gg哥哥(拼音)+le了(拼音)",
    G: "斗争中街道上的桶被哥哥扔了",
    H: "Let's join hands and struggle together.",
    I: "咱们携起手来共同斗争。"
}, {
    B: "cloth",
    C: "[klɒθ]",
    D: "n.布",
    E: "c+lo+th",
    F: "c看见(编码see)+lo10(象形)+th土豪(拼音)",
    G: "看见10个土豪身上缠满布",
    H: "She began cleaning the wound with a piece of cloth.",
    I: "她开始用一块布清洗伤口。"
}, {
    B: "underline",
    C: "[ʌndə'laɪn]",
    D: "n.强调，划底线标出",
    E: "under+line",
    F: "under下面+line线",
    G: "在文字下面划线强调一下",
    H: "The report underlines the importance of education.",
    I: "这份报告强调教育的重要性。"
}, {
    B: "throughout",
    C: "[θru:'aʊt]",
    D: "adv.到处，始终，全部；prep.遍及，贯穿",
    E: "through+out",
    F: "through穿过+out外面",
    G: "穿过外面到处都是高楼",
    H: "The house was painted white throughout.",
    I: "这所房子到处都粉刷成了白色。"
}, {
    B: "misunderstanding",
    C: "[ˌmɪsʌndə'stændɪŋ]",
    D: "n.误解，误会",
    E: "misunderstand+ing",
    F: "misunderstand误解(熟词)+ing鹰(谐音)",
    G: "误解了鹰的意思",
    H: "There must be some misunderstanding.",
    I: "这当中一定有什么误会。"
}, {
    B: "length",
    C: "[leŋθ]",
    D: "n.长，长度",
    E: "leng+th",
    F: "leng冷+th土豪",
    G: "很长的冷面被土豪吃了",
    H: "The river is 300 miles in length.",
    I: "这条河长300英里。"
}, {
    B: "unique",
    C: "[ju'ni:k]",
    D: "adj.唯一的，独一无二的，独有的",
    E: "uni+que",
    F: "uni单(词缀)+que缺(拼音)",
    G: "每个单独的个体虽然有缺点但却是唯一的",
    H: "Each person's signature is unique.",
    I: "每个人的签名都是独一无二的。"
}, {
    B: "unfortunately",
    C: "[ʌnˈfɔ:tʃənɪtlɪ]",
    D: "adv.不幸地",
    E: "un+fortunate+ly",
    F: "un不(词缀)+fortunate幸运的(熟词)+ly老爷(拼音)",
    G: "不幸的老爷不幸地去世了",
    H: "Unfortunately, my time is limited.",
    I: "可惜的是，我的时间有限。"
}, {
    B: "institute",
    C: "['ɪnstɪtju:t]",
    D: "n.学院，学会，协会",
    E: "in+sti+tute",
    F: "in里面(熟词)+sti死踢(拼音)+tute图特(拼音)",
    G: "他在学院里死踢图特",
    H: "I'm only a part time teacher in the institute.",
    I: "我只是这个学院的兼职教师。"
}, {
    B: "achievement",
    C: "[ə'tʃiːvm(ə)nt]",
    D: "n.完成，成就，达到",
    E: "a+chi+eve+ment",
    F: "a啊(拼音)+chi吃(拼音)+eve前夜(熟词)+ment门徒(拼音)",
    G: "啊！光顾着吃没注意到前夜门徒已完成任务",
    H: "Only the achievement of these goals will bring lasting peace.",
    I: "只有完成这些目标才会带来持久的和平。"
}, {
    B: "argument",
    C: "['ɑ:gjʊm(ə)nt]",
    D: "n.争论，争辩，争吵",
    E: "argu+ment",
    F: "argu(e)争论(熟词)+ment门徒(拼音)",
    G: "爱争论的门徒很能说",
    H: "She got into an argument with the teacher.",
    I: "她和老师争论了起来。"
}, {
    B: "overcome",
    C: "[ˌəʊvəˈkʌm]",
    D: "vt./vi.克服，战胜",
    E: "over+come",
    F: "over越过+come来",
    G: "跨越过来才能克服困难",
    H: "We can overcome any difficulty.",
    I: "我们能战胜任何困难。"
}, {
    B: "charming",
    C: "['tʃɑ:mɪŋ]",
    D: "adj.迷人的，有魅力的",
    E: "charm+ing",
    F: "charm魅力(熟词)+ing鹰(谐音)",
    G: "有魅力的鹰很迷人",
    H: "Her colorful character makes her very charming.",
    I: "她生动活泼的性格使她非常富有魅力。"
}, {
    B: "therefore",
    C: "[ˈðɛəfɔ:]",
    D: "adv.因此",
    E: "there+for+e",
    F: "there那里(熟词)+for为(熟词)+e鹅(编码)",
    G: "因此那里是给鹅留的地方",
    H: "Muscle cells need lots of fuel and therefore burn lots of calories.",
    I: "肌肉细胞需要很多能量，所以会燃烧大量卡路里。"
}, {
    B: "advance",
    C: "[əd'vɑ:ns]",
    D: "vt./vi.前进，促进，提前；n.前进，进步",
    E: "ad+v+ance",
    F: "ad阿弟(拼音)+v胜利(编码)+ance暗厕(拼音)",
    G: "阿弟胜利后向黑暗的厕所前进",
    H: "Keep advance or you will be late.",
    I: "继续前进否则你将会迟到。"
}, {
    B: "content",
    C: "[kən'tent]",
    D: "adj.满足的，满意的；n.满足；vt.使满足",
    E: "con+ten+t",
    F: "con啃(谐音)+ten十(熟词)+t特(编码)",
    G: "啃完十根骨头后特务觉得很满足",
    H: "The content of the article is very easy.",
    I: "这篇文章的内容很简单。"
}, {
    B: "comedy",
    C: "['kɒmɪdɪ]",
    D: "n.喜剧，喜剧性，有趣的事情",
    E: "come+dy",
    F: "come来(熟词)+dy导演(拼音)",
    G: "来看导演拍喜剧",
    H: "I like to see comedies.",
    I: "我喜欢看喜剧。"
}, {
    B: "export",
    C: "['ekspɔ:t]",
    D: "n./vt.出口，输出",
    E: "ex+port",
    F: "ex向外(词缀)+port港口(熟词)",
    G: "向外输出的港口可以出口",
    H: "He is familiar with export.",
    I: "他熟悉出口。"
}, {
    B: "failure",
    C: "['feɪljə(r)]",
    D: "n.失败(者)",
    E: "fail+u+re",
    F: "fail失败(熟词)+u桶(编码)+re热(拼音)",
    G: "失败者在桶里洗热水澡",
    H: "Their marriage was a failure.",
    I: "他们的婚姻很失败。"
}, {
    B: "likely",
    C: "['laɪklɪ]",
    D: "adj.可能的",
    E: "like+ly",
    F: "like喜欢(熟词)+ly老爷(拼音)",
    G: "他喜欢老爷是可能的",
    H: "Do remind me because I'm likely to forget.",
    I: "一定要提醒我，因为我可能会忘记。"
}, {
    B: "observe",
    C: "[əb'zɜ:v]",
    D: "vt.注意到，观察",
    E: "ob+serve",
    F: "ob欧巴(拼音)+serve服务(熟词)",
    G: "我注意到欧巴服务很周到",
    H: "We have to observe carefully what's going on there.",
    I: "我们必须仔细观察那里的动静。"
}, {
    B: "simply",
    C: "['sɪmplɪ]",
    D: "adv.只，简单地",
    E: "sim+p+ly",
    F: "sim四米(拼音)+p皮鞋(编码)+ly老爷(拼音)",
    G: "我只是想把四米长的皮鞋送给老爷",
    H: "They're simply trying to get your stocks away from you.",
    I: "他们只是夺去你的股票而已。"
}, {
    B: "whisper",
    C: "['wɪspə]",
    D: "vt./vi.小声说，低语；n.耳语，低语",
    E: "w+his+per",
    F: "w皇冠(编码)+his他的(熟词)+per普洱(拼音)",
    G: "他小声说皇冠在他的普洱茶里",
    H: "What are you two girls whispering about?",
    I: "你们两个女孩子在窃窃私语些什么？"
}, {
    B: "consideration",
    C: "[kənsɪdə'reɪʃ(ə)n]",
    D: "n.考虑，体谅",
    E: "consider+ation",
    F: "consider考虑(熟词)+ation爱神(谐音)",
    G: "你要考虑爱神的感受",
    H: "The matter is under consideration.",
    I: "这件事正在考虑中。"
}, {
    B: "defend",
    C: "[dɪ'fend]",
    D: "vt.保护，保卫",
    E: "de+f+end",
    F: "de弟(谐音)+f斧头(编码)+end最终(熟词)",
    G: "弟弟拿着斧头最终保护了我",
    H: "Our duty is to defend the country against its enemies.",
    I: "我们的职责是保卫国家不受敌人侵犯。"
}, {
    B: "direct",
    C: "[də'rekt]",
    D: "vt./vi.指挥，导演，指示；adj.直的，直接的",
    E: "di+re+ct",
    F: "di弟(拼音)+re热(拼音)+ctCT(编码)",
    G: "指挥弟弟在热天去做CT检查",
    H: "He directed various TV shows.",
    I: "他执导过多种题材的电视节目。"
}, {
    B: "engine",
    C: "['endʒɪn]",
    D: "n.引擎，发动机",
    E: "en+g+in+e",
    F: "en摁(拼音)+g哥(编码)+in在里面(熟词)+e鹅(编码)",
    G: "摁住哥哥后里面的鹅发动了引擎",
    H: "Press this button to start the engine.",
    I: "要开动发动机就按这个按钮。"
}, {
    B: "focus",
    C: "['fəʊkəs]",
    D: "n.焦点，中心；vi.集中，聚焦",
    E: "fo+cus",
    F: "fo佛+cus猝死",
    G: "佛猝死成为了新闻焦点",
    H: "He always wants to be the focus of attention.",
    I: "他总想成为注意力的焦点。"
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
    B: "particular",
    C: "[pəˈtɪkjələ(r)]",
    D: "adj.特别的，特殊的；n.细节，细目",
    E: "part+icu+lar",
    F: "part部分(熟词)+icu重症监护室(编码)+lar腊肉(拼音)",
    G: "部分在重症监护室吃腊肉的人很特别",
    H: "I have nothing particular to do this evening.",
    I: "今晚我没有什么特殊的事要做。"
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
    B: "greet",
    C: "[gri:t]",
    D: "vi./vt.迎接，问候",
    E: "gr+ee+t",
    F: "gr工人(拼音)+ee两只鹅(编码)+t伞(编码)",
    G: "工人让两只鹅打伞迎接你",
    H: "He greeted me at the door.",
    I: "他在门口迎接我。"
}, {
    B: "summary",
    C: "['sʌm(ə)rɪ]",
    D: "n.总结，概要，摘要",
    E: "su+m+mary",
    F: "su苏(拼音)+m麦当劳(编码)+mary玛丽(熟词Mary)",
    G: "苏在麦当劳帮玛丽写总结",
    H: "Is that a fair summary of the situation?",
    I: "这是形势的公平的总结吗？"
}, {
    B: "cheek",
    C: "[tʃiːk]",
    D: "n.脸颊",
    E: "ch+ee+k",
    F: "ch吃(拼音)+ee两只鹅(编码)+k国王(编码)",
    G: "吃了两只鹅，国王的脸颊变大了",
    H: "She kissed her baby on the cheek.",
    I: "她在她孩子的脸颊上亲了一下。"
}, {
    B: "facial",
    C: "['feɪʃ(ə)l]",
    D: "adj.面部的",
    E: "fac+i+al",
    F: "fac(e)面部(熟词)+i蜡烛(编码)+al阿狸(拼音)",
    G: "在面部用蜡烛画阿狸",
    H: "I do the facial exercises every day.",
    I: "我每天都做面部运动。"
}, {
    B: "fist",
    C: "[fɪst]",
    D: "n.拳头",
    E: "f+is+t",
    F: "f佛(编码)+is是(熟词)+t伞(编码)",
    G: "被佛握在拳头里的是伞",
    H: "I struck him with my fist.",
    I: "我用拳头揍他。"
}, {
    B: "subjective",
    C: "[səb'dʒektɪv]",
    D: "adj.自觉的，主观的，个人的",
    E: "sub+jec+tive",
    F: "sub下面(词缀)+jec杰克(谐音)+tive踢我(编码)",
    G: "下面的杰克自觉地踢我",
    H: "His arguments were never subjective.",
    I: "他的论点从来不是主观的。"
}, {
    B: "deed",
    C: "[di:d]",
    D: "n.事迹，行动",
    E: "d+ee+d",
    F: "d弟+ee两只鹅+d狗(dog)",
    G: "弟弟讲述了两只鹅救狗的事迹",
    H: "He is all talk and no deed.",
    I: "他光说空话，没有行动。"
}, {
    B: "sword",
    C: "[sɔ:d]",
    D: "n.剑",
    E: "s+word",
    F: "s美女(编码)+word单词(熟词)",
    G: "美女把单词写在剑上",
    H: "Fame can be a two-edged sword.",
    I: "名声是把双刃剑。"
}, {
    B: "settler",
    C: "['setlə]",
    D: "n.殖民者，移居",
    E: "se+tt+le+r",
    F: "se色(拼音)+tt两把伞(编码)+le了(拼音)+r草(编码)",
    G: "色狼打着两把伞撞了戴草帽的殖民者",
    H: "The settler got the house at a nominal price.",
    I: "移居者象征性地花点钱买下了这栋房子。"
}, {
    B: "dash",
    C: "[dæʃ]",
    D: "vi.猛冲，飞奔",
    E: "da+sh",
    F: "dash打湿",
    G: "他猛冲过来被打湿了",
    H: "Must you dash off ? Why not stay for a cup of tea?",
    I: "你一定要急急忙忙走吗？为何不留下喝杯茶？"
}, {
    B: "worn-out",
    C: "['wɔ:n'aʊt]",
    D: "adj.磨破的，穿旧的",
    E: "worn+out",
    F: "worn破烂的+out外面",
    G: "磨破的衣服太破烂就扔外面",
    H: "My shoes are worn-out.",
    I: "我的鞋子穿坏了。"
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
    B: "bald",
    C: "[bɔ:ld]",
    D: "adj.秃头的",
    E: "ba+ld",
    F: "ba爸+ld铃铛",
    G: "秃头的爸爸挂着一个铃铛",
    H: "He's getting bald.",
    I: "他的头开始秃了。"
}, {
    B: "jungle",
    C: "[ˈdʒʌŋgl]",
    D: "n.丛林，密林",
    E: "jun+gle",
    F: "jun军+gle过了",
    G: "军队穿过了丛林",
    H: "The area was covered in dense jungle.",
    I: "这个地区丛林密布。"
}, {
    B: "chimp",
    C: "[tʃɪmp]",
    D: "n.（非洲）黑猩猩",
    E: "chi+mp",
    F: "chi吃+mp麦片",
    G: "黑猩猩在吃麦片",
    H: "She shoots the chimp to stop the attack.",
    I: "她向黑猩猩射击以阻止它的攻击。"
}, {
    B: "lace",
    C: "[leɪs]",
    D: "n.鞋带，系带，花边",
    E: "la+ce",
    F: "la拉+ce厕",
    G: "拉紧鞋带后上厕所",
    H: "Liu Xiang is tying the laces of his running shoes.",
    I: "刘翔正在系跑鞋鞋带。"
}, {
    B: "wherever",
    C: "[weər'evə]",
    D: "adv./conj.无论什么地方，各处",
    E: "wher+ever",
    F: "wher(e)地方+ever永远",
    G: "无论你在",
    H: "We can go wherever you like.",
    I: "你想去哪儿我们就去哪儿。"
}, {
    B: "bacteria",
    C: "[bæk'tɪərɪə]",
    D: "n.细菌",
    E: "bac+ter+i+a",
    F: "bac(k)背(熟词back)+ter天鹅肉(拼音)+i我(熟词I)+a一(熟词)",
    G: "背上扛着天鹅肉的我染了一身细菌",
    H: "Bacteria will not breed in alcohol.",
    I: "细菌在酒精里不会繁殖。"
}, {
    B: "pest",
    C: "[pest]",
    D: "n.害虫，讨厌的人（或物）",
    E: "test",
    F: "test测验",
    G: "测验时把害虫捉住放皮(p)鞋里",
    H: "Rabbits are great pests to the farmers.",
    I: "兔子对农民来说是大害。"
}, {
    B: "react",
    C: "[rɪ'ækt]",
    D: "vi.回应，作出反应",
    E: "re+act",
    F: "re热(拼音)+act表演(熟词)",
    G: "他热情地表演却没人回应他",
    H: "To do this you need to react quickly.",
    I: "要做到这一点，你需要快速反应。"
}, {
    B: "yawn",
    C: "[jɔ:n]",
    D: "vi./n.打呵欠，呵欠",
    E: "ya+wn",
    F: "ya牙+wn无奈",
    G: "打呵欠露出假牙的我很无奈",
    H: "He stood up, stretched and yawned.",
    I: "他站起身来，伸了个懒腰，打了个哈欠。"
}, {
    B: "pirate",
    C: "['paɪrət]",
    D: "n.海盗，盗版",
    E: "pi+rate",
    F: "pi皮(拼音)+rate速度(熟词)",
    G: "海盗抢到貂皮后飞速逃跑",
    H: "In the nineteenth century, pirates roamed the seas.",
    I: "19世纪，海盗很猖獗。"
}, {
    B: "brochure",
    C: "['brəʊʃə]",
    D: "n.小册子，手册",
    E: "bro+chu+re",
    F: "bro兄弟(熟词)+chu出(拼音)+re热(拼音)",
    G: "兄弟俩外出很热用小册子扇风",
    H: "Can I have a tour brochure?",
    I: "能给我一个观光册子吗?"
}, {
    B: "welfare",
    C: "[ˈwelfeə]",
    D: "n.福利",
    E: "wel+fare",
    F: "wel(l)井(熟词)+fare费用(熟词)",
    G: "挖井的费用就是福利",
    H: "Child welfare services are well established and comprehensive.",
    I: "儿童福利机构发展成熟，体系完善。"
}, {
    B: "represent",
    C: "[ˌreprɪ'zent]",
    D: "vt.代表，描绘，象征",
    E: "re+present",
    F: "re热(拼音)+present礼物(熟词)",
    G: "用装满热狗的礼物代表谢意",
    H: "These proposals represent a realistic starting point for negotiation.",
    I: "这些建议是谈判的现实出发点。"
}, {
    B: "campaign",
    C: "[kæm'peɪn]",
    D: "n.运动，战役；vi.作战，参加运动",
    E: "camp+ai+gn",
    F: "camp露营(熟词)+ai爱(拼音)+gn钙奶(拼音)",
    G: "露营运动者都爱喝钙奶",
    H: "She's the campaign organizer.",
    I: "她是此次运动的组织者。"
}, {
    B: "landmine",
    C: "['lændmaɪn]",
    D: "n.地雷（等于landmine）",
    E: "land+mine",
    F: "land地+mine我的",
    G: "地上的地雷是我的",
    H: "We had all done a lot of training with landmines.",
    I: "我们做了很多关于地雷的培训。"
}, {
    B: "outspoken",
    C: "[aʊt'spəʊk(ə)n]",
    D: "adj.坦诚，直言的",
    E: "out+spoken",
    F: "out外面+spoken说",
    G: "外面的人说话都很坦诚",
    H: "I like a man for being outspoken.",
    I: "我喜欢直言不讳的人。"
}, {
    B: "circulate",
    C: "['sɜ:kjəleɪt]",
    D: "vt./vi.循环，传播，散布",
    E: "cir+cu+late",
    F: "cir此人(拼音)+cu粗(拼音)+late迟到(熟词)",
    G: "广告循环播放此人因买粗辣条迟到了",
    H: "The heart circulates blood around the body.",
    I: "心脏使血液周身循环。"
}, {
    B: "soybean",
    C: "['sɒɪbi:n]",
    D: "n.大豆",
    E: "soy+bean",
    F: "soy酱油+bean豆子",
    G: "大豆是可制作酱油的豆子",
    H: "Do not drink soybean milk on an empty stomach.",
    I: "不要空腹喝豆浆。"
}, {
    B: "nonverbal",
    C: "[ˌnɒn'vɜ:bl]",
    D: "adj.不用语言的",
    E: "non+verbal",
    F: "non不(词缀)+verbal口头的(熟词)",
    G: "不用语言的的表达不用口头阐述",
    H: "Gestures are a nonverbal means of expression.",
    I: "打手势是一种非言语的表达方式。"
}, {
    B: "optimism",
    C: "[ˈɒptɪmɪzəm]",
    D: "n.乐观，乐观主义",
    E: "op+timi+sm",
    F: "op藕片+timi提米+sm神马",
    G: "吃着藕片提着米的神马很乐观",
    H: "They ended the discussion on a note of optimism.",
    I: "他们在乐观的调子中结束了讨论。"
}, {
    B: "underdog",
    C: "[ˈʌndədɒg]",
    D: "n.失败者，处于劣势的一方",
    E: "under+dog",
    F: "under在…下面+dog狗",
    G: "在失败者的身下躺着一只狗",
    H: "My mom gave me an appreciation for the underdog.",
    I: "我的妈妈给了一颗让我欣赏失败者的心。"
}, {
    B: "enjoyment",
    C: "[ɪn'dʒɒɪmənt]",
    D: "n.欢乐，享受，乐趣",
    E: "enjoy+ment",
    F: "enjoy享受(熟词)+ment门徒(拼音)",
    G: "享受生活的门徒每天充满欢乐",
    H: `Your company adds to the enjoyment of our visit.
`,
    I: "有你的陪同，我们这次访问更加愉快了。"
}, {
    B: "explanation",
    C: "[ˌekspləˈneɪʃn]",
    D: "n.解释，说明，辩解",
    E: "ex+pla+nation",
    F: "ex前夫+pla(n)计划+nation国家",
    G: "我前夫解释说他计划离开这个国家",
    H: "The most likely explanation was that his plan was delayed.",
    I: "最可能的解释是他的计划被延迟了。"
}, {
    B: "mountainous",
    C: "[ˈmaʊntənəs]",
    D: "adj.多山的，山一般的",
    E: "mountain+ous",
    F: "mountain山(熟词)+ous殴死(拼音)",
    G: "他在多山的山区被殴死了",
    H: "I live in a very mountainous area.",
    I: "我居住在一个多山地区。"
}, {
    B: "Muslim",
    C: "[ˈmʊzlɪm]",
    D: "adj.穆斯林（的），伊斯兰教信徒（的）",
    E: "Mus+lim",
    F: "Mus暮色+lim礼貌",
    G: "暮色下的穆斯林信徒很有礼貌",
    H: "Friday is a holiday in Muslim countries.",
    I: "在穆斯林国家星期五是假日。"
}, {
    B: "unspoken",
    C: "[ˌʌn'spokən]",
    D: "adj.非口语的，未说出口的",
    E: "un+spoken",
    F: "un非(词缀)+spoken口语的(熟词)",
    G: "非口语的语言是正式的",
    H: "But the unspoken theme of the article is that no one arrives.",
    I: "然而，这篇文章的潜在主题是没有顾客光临。"
}, {
    B: "misread",
    C: "[mɪs'ri:d]",
    D: "vt.误解，读错",
    E: "mis+read",
    F: "mis错误的(词缀)+read阅读(熟词)",
    G: "错误的阅读方式会造成误解",
    H: "She had misread a date in the Tour Book.",
    I: "她看错了旅游手册上的一个日期。"
}, {
    B: "respectful",
    C: "[rɪ'spektfl]",
    D: "adj.恭敬的",
    E: "respect+ful",
    F: "respect尊重(熟词)+ful俘虏(拼音)",
    G: "尊重人的俘虏恭敬地站着",
    H: "Gradually, they began to look at me with respectful eyes.",
    I: "渐渐地，他们开始用尊敬的眼光看待我。"
}, {
    B: "cassette",
    C: "[kə'set]",
    D: "n.磁带",
    E: "cas+set+te",
    F: "cas擦手(拼音)+set放置(熟词)+te特(拼音)",
    G: "擦完手后把磁带放置在特别的地方",
    H: "I think I've broken your cassette recorder.",
    I: "我想我已弄坏了你的盒式磁带录音机了。"
}, {
    B: "whichever",
    C: "[wɪtʃ'evə]",
    D: "pron.无论哪一个，任何一个",
    E: "which+ever",
    F: "which哪一个+ever永远",
    G: "无论哪一个是你选的，我都永远支持你",
    H: "Choose whichever day is best for you.",
    I: "选一个你最方便的日子。"
}, {
    B: "carpenter",
    C: "[ˈkɑ:pəntə(r)]",
    D: "n.木匠",
    E: "car+pen+ter",
    F: "car汽车(熟词)+pen笔(熟词)+ter天鹅肉(拼音)",
    G: "木匠在汽车上用笔换了天鹅肉",
    H: "He is a carpenter by profession.",
    I: "他以木工为业。"
}, {
    B: "craftsman",
    C: "['krɑ:f(t)smən]",
    D: "n.能工巧匠，匠人",
    E: "crafts+man",
    F: "crafts工艺品+man人",
    G: "会做工艺品的人都是能工巧匠",
    H: "The table in the kitchen was made by a local craftsman.",
    I: "厨房里的桌子是本地一位工匠制作的。"
}, {
    B: "translator",
    C: "[træns'leɪtə]",
    D: "n.译者，翻译",
    E: "translat+or",
    F: "translat(e)翻译(熟词)+or偶人(拼音)",
    G: "这个译者在翻译偶人说的话",
    H: "I am your guide and translator.",
    I: "我是你们的导游兼翻译。"
}, {
    B: "freeway",
    C: "['fri:weɪ]",
    D: "n.高速公路",
    E: "free+way",
    F: "free自由+way道路",
    G: "能在上面自由行驶的道路是高速公路",
    H: "I like to drive on freeway.",
    I: "我喜欢在高速公路上开车。"
}, {
    B: "specialist",
    C: "[ˈspeʃəlist]",
    D: "n.专家，专门医师；adj.专家的，专业的",
    E: "specia+list",
    F: "specia(l)特别+list清单",
    G: "这份特别的清单是专家写的",
    H: "Her mother is an eye specialist.",
    I: "她母亲是眼科专家。"
}, {
    B: "worthwhile",
    C: "[wɜ:θ'waɪl]",
    D: "adj.值得做的，值得的",
    E: "worth+while",
    F: "worth值得+while一会",
    G: "值得做的事就值得多做一会儿",
    H: "She considers teaching a worthwhile career.",
    I: "她把教书看成是一项值得从事的事业。"
}, {
    B: "nest",
    C: "[nest]",
    D: "n.窝，巢，安乐窝",
    E: "ne+st",
    F: "ne哪+st石头",
    G: "哪吒用石头建了一个窝",
    H: "The bird is building a nest of straw and twigs.",
    I: "这只鸟在用稻草和小树枝筑巢。"
}, {
    B: "inspire",
    C: "[ɪn'spaɪə]",
    D: "vt.鼓舞，激发",
    E: "in+sp+i+re",
    F: "in里面(熟词)+sp赛跑(拼音)+i我(熟词I)+re热(拼音)",
    G: "在里面赛跑时，我热血沸腾，备受鼓舞",
    H: "These herbs will inspire you to try out all sorts of exotic-flavoured dishes!",
    I: "这些香草会激发你去品尝各种异国风味的菜肴！"
}, {
    B: "decade",
    C: "[ˈdekeɪd]",
    D: "n.十年",
    E: "de+ca+de",
    F: "de嘚+ca嚓+de嘚",
    G: "在马儿嘚嚓嘚的声音中十年过去了",
    H: "A decade later, the company has gone from strength to strength.",
    I: "十年后，该公司已经逐渐壮大。"
}, {
    B: "output",
    C: "['aʊtpʊt]",
    D: "n.产量，输出",
    E: "out+put",
    F: "out外面+put放",
    G: "产量大的输出品都往外放",
    H: "Industry output for the third quarter rose 3%.",
    I: "第三季度工业产量增长3%。"
}, {
    B: "peanut",
    C: "['pi:nʌt]",
    D: "n.花生",
    E: "pea+nut",
    F: "pea豌豆+nut坚果",
    G: "花生和豌豆是坚果吗？",
    H: "A peanut is a very small food.",
    I: "花生就是一种很小的食物。"
}, {
    B: "fortunate",
    C: "[ˈfɔ:tʃənɪt]",
    D: "adj.幸运的，吉利的",
    E: "for+tun+ate",
    F: "for为(熟词)+tun屯(拼音)+ate吃(熟词)",
    G: "为能去屯里吃饭感到很幸运",
    H: "It was fortunate that they had left in plenty of time.",
    I: "幸运的是他们留出了充足的时间。"
}, {
    B: "subtle",
    C: "['sʌtl]",
    D: "adj.微妙的，精巧的，技艺精湛的",
    E: "sub+tle",
    F: "sub苏伯+tle偷了",
    G: "苏伯偷了钱后感觉很微妙",
    H: "I noticed a subtle change in his attitude.",
    I: "我注意到他的态度发生了微妙的变化。"
}, {
    B: "entertain",
    C: "[ˌentə'teɪn]",
    D: "vt./vi.使欢乐，款待",
    E: "enter+tain",
    F: "enter进入(熟词)+tain太难(拼音)",
    G: "款待进入房间的人太难",
    H: "The television program is designed to educate and not merely to entertain.",
    I: "这个电视节目不仅是为了娱乐而且是为了教育而设计的。"
}, {
    B: "moustache",
    C: "[mə'stɑ:ʃ]",
    D: "n.小胡子",
    E: "mou+st+ache",
    F: "mou某(拼音)+st石头(拼音)+ache疼(熟词)",
    G: "留小胡子的某人扔石头砸疼了我",
    H: "His lips are roofed by a moustache.",
    I: "他的嘴唇被小胡子遮盖住了。"
}, {
    B: "mouthful",
    C: "[ˈmaʊθfʊl]",
    D: "n.一口，满口",
    E: "mouth+ful",
    F: "mouth嘴巴+ful(l)满的",
    G: "一口下去，嘴巴就塞满了",
    H: "She took a mouthful of water.",
    I: "她喝了一大口水。"
}, {
    B: "costume",
    C: "['kɒstju:m]",
    D: "n.服装，戏装",
    E: "co+stu+me",
    F: "co可乐(熟词coke)+stu司徒(拼音)+me我(熟词)",
    G: "喝可乐的司徒送我服装",
    H: "I have many costumes.",
    I: "我有很多服装。"
}, {
    B: "amuse",
    C: "[ə'mju:z]",
    D: "vt.使发笑，使愉快",
    E: "am+use",
    F: "am阿妈(拼音)+use使用(熟词)",
    G: "阿妈使用的方法使人",
    H: "His jokes amused the crying child.",
    I: "他的笑话逗笑了那个正在哭闹的孩子。"
}, {
    B: "association",
    C: "[əˌsəʊʃɪ'eɪʃn]",
    D: "n.协会，社团，关联",
    E: "associat+i+on",
    F: "associat(e)联系+i我(I)+on上面",
    G: "与我有联系的是上面的协会",
    H: "Members of the association kick over 40 dollars a month for a common fund.",
    I: "该协会成员每月交纳40美元来建立一项共同基金。"
}, {
    B: "approach",
    C: "[ə'prəʊtʃ]",
    D: "n.方法，途径，接近；vt./vi.接近，靠近",
    E: "ap+pro+a+ch",
    F: "ap阿婆(拼音)+pro飘柔(拼音)+a一(熟词)+ch菜花(拼音)",
    G: "阿婆想尽方法用飘柔换了一个菜花",
    H: "I like her approach to the problem.",
    I: "我喜欢她解决这个问题的方法。"
}, {
    B: "misunderstand",
    C: "[ˌmɪsʌndə'stænd]",
    D: "vt.误解，误会",
    E: "mis+understand",
    F: "mis错误的(词缀)+understand理解(熟词)",
    G: "错误的理解就是误解",
    H: "Do not misunderstand me.",
    I: "不要误解我的意思。"
}, {
    B: "frown",
    C: "[fraʊn]",
    D: "v./n.皱眉",
    E: "fr+own",
    F: "fr夫人(拼音)+own自己(熟词)",
    G: "夫人自已皱起",
    H: "A frown creased his forehead.",
    I: "眉头一皱使他的前额出现很多皱纹。"
}, {
    B: "fantasy",
    C: "['fæntəsɪ]",
    D: "n.幻想，怪念头",
    E: "fanta+sy",
    F: "fanta烦他+sy室友",
    G: "总烦扰他的室友很爱幻想",
    H: "She lives in a world of fantasy.",
    I: "她生活在幻想之中。"
}, {
    B: "preserve",
    C: "[prɪ'zɜːv]",
    D: "vt.保护，保存；n.保护区，禁猎地",
    E: "pre+serve",
    F: "pre仆人(拼音)+serve服务(熟词)",
    G: "仆人服务的时候是受到保护的",
    H: "It is highly important to preserve the environment.",
    I: "保护自然环境至关重要。"
}, {
    B: "tournament",
    C: "['tʊənəm(ə)nt]",
    D: "n.锦标赛，联赛",
    E: "tour+na+ment",
    F: "tour旅游(熟词)+na那(拼音)+ment门徒(拼音)",
    G: "旅游时那个门徒参加了锦标赛",
    H: "She is aching to join in the tournament.",
    I: "她渴望参加比赛。"
}, {
    B: "shade",
    C: "[ʃeɪd]",
    D: "n.荫，阴凉处；vt.遮住光线",
    E: "sha+de",
    F: "sha傻+de的",
    G: "傻傻的站在树荫下",
    H: "The children played in the shade of a large beach umbrella.",
    I: "孩子们在一把巨大的沙滩遮阳伞下的阴凉处玩耍。"
}, {
    B: "disturbing",
    C: "[dɪ'stə:bɪŋ]",
    D: "adj.令人不安的，引起烦恼的",
    E: "dis+tur+bing",
    F: "dis的士+tur土人+bing病",
    G: "令人不安的是的士上的土人有病",
    H: "There was something about him she found disturbing.",
    I: "她发现他身上有些东西让她觉得不安。"
}, {
    B: "brighten",
    C: "[ˈbraɪtn]",
    D: "vt.使更愉快，使更有希望",
    E: "bright+en",
    F: "bright发光的(熟词)+en摁(拼音)",
    G: "发光的玩具摁一下会使人",
    H: "What can we do to brighten the lives of the poor?",
    I: "我们怎样使穷人生活幸福愉快？"
}, {
    B: "false",
    C: "[fɔ:ls]",
    D: "adj.假的，错误的",
    E: "fal+se",
    F: "fal(l)掉(熟词)+se色(拼音)",
    G: "天上掉下来的色狼是假的",
    H: "You do not know whether what you're told is true or false.",
    I: "你不知道听到的是真还是假。"
}, {
    B: "mime",
    C: "[maɪm]",
    D: "n.哑剧",
    E: "mi+me",
    F: "mi米(拼音)+me我(熟词)",
    G: "米饭是我看哑剧时吃的",
    H: "They will perform a short mime later.",
    I: "待会他们将表演一出短的哑剧。"
}, {
    B: "worn",
    C: "[wɔ:n]",
    D: "adj.破烂的，用旧的，用坏的",
    E: "word",
    F: "word单词",
    G: "这个单词使我想起那扇破烂的门(n)",
    H: "Worn parts must be replaced.",
    I: "用旧的部件必须更换。"
}, {
    B: "curiously",
    C: "['kjʊrɪəslɪ]",
    D: "adv.好奇地",
    E: "curious+ly",
    F: "curious好奇的(熟词)+ly老爷(拼音)",
    G: "好奇的老爷好奇地看着我",
    H: "He looked curiously at the people.",
    I: "他好奇地看着那些人。"
}, {
    B: "considerate",
    C: "[kən'sɪd(ə)rət]",
    D: "adj.体贴的，体谅的，考虑周到的",
    E: "conside+rate",
    F: "conside(r)考虑+rate速度",
    G: "考虑到奶奶速度慢，狗狗体贴照顾",
    H: "The patient has the right to considerate and respectful care.",
    I: "病人有权得到周到而礼貌的照顾。"
}, {
    B: "confuse",
    C: "[kən'fju:z]",
    D: "vt.使迷惑，使为难",
    E: "co+nf+use",
    F: "co可乐(熟词coke)+nf南方(拼音)+use使用(熟词)",
    G: "可乐在南方的用法使我很",
    H: "I think it's a serious mistake to confuse books with life.",
    I: "我认为把书本同生活混为一谈是大错特错。"
}, {
    B: "budget",
    C: "[ˈbʌdʒɪt]",
    D: "n.预算；vt.安排；vi.编预算",
    E: "bud+get",
    F: "bud坏的(形比bad)+get得到(熟词)",
    G: "要得到发芽的日期需要通过预算",
    H: "The congress approved the budget.",
    I: "国会批准了国家预算。"
}, {
    B: "determination",
    C: "[dɪ,tə:mɪ'neɪʃ(ə)n]",
    D: "n.决心，果断",
    E: "de+ter+mi+nation",
    F: "de弟(谐音)+ter天鹅肉(拼音)+mi米(拼音)+nation国家(熟词)",
    G: "弟弟卖天鹅肉和米给国家的决心很大",
    H: "What counts is determination and confidence.",
    I: "关键在于要有决心和信心。"
}, {
    B: "astonishing",
    C: "[ə'stɒnɪʃɪŋ]",
    D: "adj.令人感到惊讶的",
    E: "astonish+ing",
    F: "astonish使惊讶(熟词)+ing鹰(谐音)",
    G: "令人感到惊讶的是老鹰飞下来了",
    H: "Her first novel enjoyed an astonishing success.",
    I: "她的第一部小说取得了惊人的成功。"
}, {
    B: "entertaining",
    C: "[ˌentə'teɪnɪŋ]",
    D: "adj.愉快的，有趣的",
    E: "entertain+ing",
    F: "entertain款待(熟词)+ing鹰(谐音)",
    G: "受到款待的鹰过得很愉快",
    H: "This is actually a very entertaining book.",
    I: "这实际上是一本非常有趣的书。"
}, {
    B: "convincing",
    C: "[kən'vɪnsɪŋ]",
    D: "adj.令人信服的",
    E: "convinc+ing",
    F: "convinc(e)使信服(熟词)+ing鹰(谐音)",
    G: "令人信服的是老鹰飞的很高",
    H: "I didn't find the ending of the film very convincing.",
    I: "我觉得电影的结局难以令人信服。"
}, {
    B: "defence",
    C: "[dɪ'fens]",
    D: "n.防御，防卫",
    E: "de+fence",
    F: "de弟(谐音)+fence粪厕(拼音)",
    G: "弟弟在装满粪的厕所里防御敌人",
    H: "Offensive is the best defence.",
    I: "进攻是最好的防御。"
}, {
    B: "outing",
    C: "['aʊtɪŋ]",
    D: "n.远足，外出，短途旅行",
    E: "out+ing",
    F: "out外面(熟词)+ing鹰(谐音)",
    G: "外面有只鹰在远足",
    H: "We can't go without you for this outing.",
    I: "这次远足少不了你。"
}, {
    B: "specialize",
    C: "['speʃəlaɪz]",
    D: "vi.成为……专家，专攻",
    E: "special+ize",
    F: "special专门的(熟词)+ize艾滋(谐音)",
    G: "他成为专门研究艾滋病的",
    H: "He specializes in oriental history.",
    I: "他专门研究东方史。"
}, {
    B: "observation",
    C: "[ɒbzə'veɪʃ(ə)n]",
    D: "n.观察，观测",
    E: "observ+ation",
    F: "observ(e)观察(熟词)+ation爱神(谐音)",
    G: "要观察爱神的举动",
    H: "The police are keeping the suspect under observation.",
    I: "警方监视着犯罪嫌疑人。"
}, {
    B: "emergency",
    C: "[ɪ'mə:dʒ(ə)nsɪ]",
    D: "n.紧急情况，突发事件",
    E: "em+er+gen+cy",
    F: "em恶魔(拼音)+er儿(拼音)+gen跟(拼音)+cy西(谐音)",
    G: "恶魔的儿子跟别人向西去处理紧急情况了",
    H: "We always regard him as a friend, but he showed his colours in the current emergency.",
    I: "我们一贯把他看作朋友，但在当前的紧急关头中，他原形毕露了。"
}, {
    B: "generation",
    C: "[dʒenə'reɪʃ(ə)n]",
    D: "n.一代，一辈",
    E: "gen+er+ation",
    F: "gen根(拼音)+er儿(拼音)+ation爱神(谐音)",
    G: "上一代人的根儿起源于爱神",
    H: "They belonged to a younger generation.",
    I: "他们属于年轻的一代。"
}, {
    B: "crop",
    C: "[krɒp]",
    D: "n.庄稼，农作物，产量",
    E: "cr+op",
    F: "cr超人(拼音)+op阿婆(谐音)",
    G: "超人帮阿婆收庄稼",
    H: "The main crops grown for export are coffee and rice.",
    I: "主要的出口作物是咖啡和大米。"
}, {
    B: "nationality",
    C: "[næʃə'nælɪtɪ]",
    D: "n.国籍",
    E: "nation+ali+ty",
    F: "nation国家(熟词)+ali阿狸(拼音)+ty踢(谐音)",
    G: "国家队的阿狸踢人会被撤消国籍",
    H: "What nationality are you?",
    I: "你是什么国籍？"
}, {
    B: "personality",
    C: "[pɜ:sə'nælɪtɪ]",
    D: "n.个性，性格，人格",
    E: "person+ali+ty",
    F: "person人(熟词)+ali阿狸(拼音)+ty踢(谐音)",
    G: "有人说阿狸踢球很有个性",
    H: "She has a very warm personality.",
    I: "她个性非常热情。"
}, {
    B: "nutrition",
    C: "[njʊ'trɪʃ(ə)n]",
    D: "n.营养，营养学",
    E: "nut+ri+tion",
    F: "nut坚果(熟词)+ri日(拼音)+tion神(谐音)",
    G: "坚果每日吃，神仙都营养",
    H: "Plants get the nutrition from the soil in which they grow.",
    I: "植物从它们赖以生存的土壤中吸收养分。"
}, {
    B: "industrial",
    C: "[ɪn'dʌstrɪəl]",
    D: "adj.工业的，产业的",
    E: "in+dust+rial",
    F: "in里面(熟词)+dust灰尘(熟词)+rial瑞儿(谐音)",
    G: "工业区里的灰尘是瑞儿制造的",
    H: "Shanghai is the most important industrial base of China.",
    I: "上海是中国最重要的工业基地。"
}, {
    B: "depressed",
    C: "[dɪ'prest]",
    D: "adj.沮丧的，忧愁的",
    E: "de+press+ed",
    F: "de弟(谐音)+press按(熟词)+ed耳朵(拼音)",
    G: "沮丧的弟弟按着耳朵",
    H: "He was then depressed and in despair.",
    I: "他那时沮丧郁闷，情绪低落。"
}, {
    B: "vast",
    C: "[vɑ:st]",
    D: "adj.巨大的，广阔的，大量的；n.浩瀚",
    E: "va+st",
    F: "va哇(谐音)+st石头(拼音)",
    G: "哇，这么巨大的石头",
    H: "The vast majority of the eggs would be cracked.",
    I: "绝大部分鸡蛋都会被打碎。"
}, {
    B: "canteen",
    C: "[kæn'tiːn]",
    D: "n.食堂",
    E: "can+teen",
    F: "can餐(拼音)+teen厅(谐音)",
    G: "食堂里有很多餐厅",
    H: "After work they made a hearty meal in the worker's canteen.",
    I: "工作完了,他们在工人食堂饱餐了一顿。"
}, {
    B: "swing",
    C: "[swɪŋ]",
    D: "n.秋千，摇摆；vt./vi.摇摆，摆动",
    E: "sw+ing",
    F: "sw丝袜(拼音)+ing鹰(谐音)",
    G: "穿丝袜的鹰在荡秋千",
    H: "There they can swing and slide and go round and round for hours.",
    I: "他们可以荡秋千、滑滑梯、到处跑，玩上好几个小时。"
}, {
    B: "minority",
    C: "[maɪ'nɒrɪtɪ]",
    D: "n.少数民族，少数派；adj.少数的，属于少数派的",
    E: "min+or+ity",
    F: "min民(谐音)+or偶人(拼音)+ity一体(谐音)",
    G: "少数民族的偶人结成一体",
    H: "Our country has many minorities.",
    I: "我国有很多少数民族。"
}, {
    B: "admission",
    C: "[əd'mɪʃ(ə)n]",
    D: "n.入场费，承认",
    E: "ad+mi+ssion",
    F: "ad阿弟(拼音)+mi米(拼音)+ssion婶(谐音)",
    G: "阿弟把米给婶婶作为入场费",
    H: "He has applied for admission to the local college.",
    I: "他申请到当地一家大学就读。"
}, {
    B: "Quaker",
    C: "['kweɪkə]",
    D: "n.贵格会会员，教友派信徒",
    E: "Qu+ak+er",
    F: "Qu取(拼音)+akAK47枪(编码)+er儿(拼音)",
    G: "贵格会会员取了AK47枪后杀了儿子",
    H: "Do you know anything about the Quakers?",
    I: "你知道教友派信徒吗？"
}, {
    B: "connection",
    C: "[kəˈnekʃn]",
    D: "n.连接，关系",
    E: "connect+i+on",
    F: "connect连接(熟词)+i蜡烛(编码)+on在...上(熟词)",
    G: "把连接在蜡烛上的东西拿掉",
    H: "What is the connection between the two ideas?",
    I: "这两个想法之间有何联系?"
}, {
    B: "bond",
    C: "[bɒnd]",
    D: "n.联系，关系，结合",
    E: "bo+n+d",
    F: "bo伯(拼音)+n门(编码)+d弟(编码)",
    G: "伯伯出门与弟弟建立联系",
    H: "She felt a bond of affection for the other girls.",
    I: "她对其他女生有着很深的感情。"
}, {
    B: "sickness",
    C: "['sɪknɪs]",
    D: "n.恶心，疾病",
    E: "sick+ne+ss",
    F: "sick病(熟词)+ne哪(吒)(拼音)+ss两个美女(编码)",
    G: "生病的哪吒看到两个美女就恶心",
    H: "There's a lot of sickness around this winter.",
    I: "今年冬天患病的人很多。"
}, {
    B: "sunburnt",
    C: "['sʌnbɜ:nt]",
    D: "adj.晒黑的",
    E: "sun+burn+t",
    F: "sun太阳(熟词)+burn燃烧(熟词)+t特(编码)",
    G: "在太阳下燃烧的特务被晒黑了",
    H: "You would be sunburnt quickly on the beach.",
    I: "在海滨你很快就能晒黑。"
}, {
    B: "hybrid",
    C: "['haɪbrɪd]",
    D: "n.杂交种，混血儿；adj.混合的，杂种的",
    E: "hy+br+id",
    F: "hy海洋(拼音)+br病人(拼音)+id身份(编码)",
    G: "杂交海洋物种可还原病人身份",
    H: "The garden strawberry is a large-fruited hybrid.",
    I: "人工栽培的草莓是一种果实较大的杂交品种。"
}, {
    B: "Vietnam",
    C: "[ˌvjet'næm]",
    D: "n.越南（东南亚国家）",
    E: "Vi+et+nam",
    F: "Vi胜利(谐音V)+et外星人(编码)+nam纳闷(拼音)",
    G: "越南胜利了，外星人就纳闷了",
    H: "This is a map of Vietnam.",
    I: "这是越南地图。"
}, {
    B: "sorghum",
    C: "['sɔ:gəm]",
    D: "n.高粱",
    E: "so+rghu+m",
    F: "so50(象形)+rghu人工湖(拼音)+m麦当劳(编码)",
    G: "50个人工湖被麦当劳填满了高粱",
    H: "They made sorghum into pig feed.",
    I: "他们把高粱做成了猪饲料。"
}, {
    B: "grain",
    C: "[greɪn]",
    D: "n.谷粒",
    E: "g+rain",
    F: "g哥(编码)+rain雨(熟词)",
    G: "哥哥在雨中拾起谷粒",
    H: "There are a few grains of rice in a bowl.",
    I: "碗中有几颗米粒。"
}, {
    B: "punchline",
    C: "['pʌn(t)ʃlaɪn]",
    D: "n.故事、笑话中的妙语，关键语",
    E: "pu+n+ch+line",
    F: "pu扑(拼音)+n门(编码)+ch吃(拼音)+line线(熟词)",
    G: "扑进门吃米线是这个笑话的妙语",
    H: "His humour did not depend on punchlines.",
    I: "他的幽默不依靠笑话妙语。"
}, {
    B: "verbal",
    C: "['vɜ:b(ə)l]",
    D: "adj.口头的",
    E: "ve+rb+al",
    F: "ve维E(编码)+rb日本(拼音)+al阿狸(拼音)",
    G: "贩卖维E去日本是阿狸的口头禅",
    H: "They made a verbal agreement.",
    I: "他们缔结了口头协议。"
}, {
    B: "tramp",
    C: "[træmp]",
    D: "n.流浪汉，行乞者",
    E: "tr+am+p",
    F: "tr土人(拼音)+am阿妈(拼音)+p皮鞋(编码)",
    G: "土人把阿妈的皮鞋送给了流浪汉",
    H: "The tramp produced a stump of candle from his deep pockets.",
    I: "流浪汉从深口袋里掏出了一截蜡烛。"
}, {
    B: "convince",
    C: "[kən'vɪns]",
    D: "vt.使信服",
    E: "con+v+in+ce",
    F: "con啃(谐音)+v维生素(编码)+in里面(熟词)+ce测(拼音)",
    G: "啃完维生素片在里面做测试使人",
    H: "It requires a lot of talking to convince him.",
    I: "要说服他很费口舌。"
}, {
    B: "Oscar",
    C: "['ɒskə]",
    D: "n.奥斯卡",
    E: "O+s+car",
    F: "O蛋(编码)+s美女(编码)+car汽车(熟词)",
    G: "吃鸡蛋的美女坐汽车领奥斯卡奖",
    H: "This is her first Oscar nomination.",
    I: "这是她的首次奥斯卡提名。"
}, {
    B: "Jordan",
    C: "['dʒɔrdn]",
    D: "n.约旦（西亚国家）",
    E: "J+or+dan",
    F: "J钩子(编码)+or偶人(拼音)+dan蛋(拼音)",
    G: "用钩子的偶人把蛋运到了约旦",
    H: "Jordan reopened its border with Iraq.",
    I: "约旦重新开放了与伊拉克的边界。"
}, {
    B: "spoken",
    C: "['spəʊk(ə)n]",
    D: "adj.口语的",
    E: "s+po+ken",
    F: "s美女(编码)+po破(拼音)+ken肯(拼音)",
    G: "口语流利的美女破口大骂了肯",
    H: "He speaks a fluent spoken English.",
    I: "他英语口语很流利。"
}, {
    B: "posture",
    C: "['pɒstʃə]",
    D: "n.姿势，体态",
    E: "po+s+ture",
    F: "po婆(拼音)+s美女(编码)+ture扯(谐音)",
    G: "婆婆把美女扯过来摆姿势",
    H: "This was his fighting posture.",
    I: "这就是他的战斗姿态。"
}, {
    B: "crossroads",
    C: "['krɒsrəʊdz]",
    D: "n.十字路口",
    E: "cross+road+s",
    F: "cross穿过(熟词)+road道路(熟词)+s美女(编码)",
    G: "穿过道路的美女走到了十字路口",
    H: "Now I have come to the crossroads in my life.",
    I: "我现在来到了我生命的十字路口。"
}, {
    B: "ease",
    C: "[i:z]",
    D: "n.安逸，舒适；vt.减轻（痛苦，忧虑）",
    E: "e+a+se",
    F: "e鹅(编码)+a苹果(编码)+se色(拼音)",
    G: "鹅发现吃苹果的色狼很安逸",
    H: "He is at ease about the matter.",
    I: "他对这事很放心。"
}, {
    B: "rank",
    C: "[ræŋk]",
    D: "n.等级，军衔",
    E: "ran+k",
    F: "ran跑(熟词)+k机关枪(编码)",
    G: "他跑来把机关枪按等级排列",
    H: "He eventually rose to the rank of captain.",
    I: "他最终升到了船长的职位。"
}, {
    B: "knight",
    C: "[naɪt]",
    D: "n.骑士，爵士",
    E: "k+night",
    F: "k机关枪(编码)+night夜晚(熟词)",
    G: "骑士用机关枪打破了夜晚的宁静",
    H: "He hopes to be made a knight for his work.",
    I: "他希望因为自己的工作被封为骑士。"
}, {
    B: "joust",
    C: "[dʒaʊst]",
    D: "vi.（指中世纪骑士）骑着马用长矛打斗",
    E: "j+oust",
    F: "j钩子(编码)+oust殴死他(拼音)",
    G: "骑着马打斗时用钩子殴死他",
    H: "Two knights jousted on horseback.",
    I: "骑士们骑马比武。"
}, {
    B: "diver",
    C: "['daɪvə]",
    D: "n.潜水员",
    E: "di+ve+r",
    F: "di弟(拼音)+ve维E(编码)+r草(编码)",
    G: "弟弟吃完维E后遇到吃草的潜水员",
    H: "The diver poised on the edge of the high board.",
    I: "跳水者在高台边上站稳。"
}, {
    B: "sneaker",
    C: "['sni:kə]",
    D: "n.运动鞋，卑鄙者",
    E: "s+neaker",
    F: "s美女(编码)+neaker尼克(谐音)",
    G: "美女帮尼克穿运动鞋",
    H: "I have a sneaker factory in Canada.",
    I: "我还有个在加拿大的帆布运动鞋厂。"
}, {
    B: "refer",
    C: "[rɪ'fɜ:]",
    D: "vi.谈到，查阅，参考",
    E: "re+f+er",
    F: "re热(拼音)+f拐杖(编码)+er儿(拼音)",
    G: "他谈到了天一热就拄拐杖的儿子",
    H: "I always refer to a dictionary when I come upon a new word.",
    I: "在遇到新单词时我经常查字典。"
}, {
    B: "deliver",
    C: "[dɪ'lɪvə]",
    D: "vi.发表（演说），递送，生（小孩儿）",
    E: "de+live+r",
    F: "de弟(谐音)+live生活(熟词)+r草(编码)",
    G: "弟弟生活在草原上以发表演讲为生",
    H: "Mail is delivered to our office twice a day.",
    I: "邮差每天给我们办公室投递两次邮件。"
}, {
    B: "strain",
    C: "[streɪn]",
    D: "n.压力，拉紧，负担；vi.拉紧；vt.拉紧",
    E: "s+train",
    F: "s美女(编码)+train火车(熟词)",
    G: "美女坐火车很有压力",
    H: "The prison service is already under considerable strain.",
    I: "监狱系统已经承受了巨大的压力。"
}, {
    B: "expand",
    C: "[ɪk'spænd]",
    D: "vt./vi.扩展，扩充，扩大",
    E: "ex+pan+d",
    F: "ex前夫(熟词)+pan平底锅(熟词)+d弟(编码)",
    G: "扩展地盘时前夫用平底锅赶走了弟弟",
    H: "The popular ceramics industry expanded towards the middle of the 19th century.",
    I: "到19世纪中期，大众制陶业得到了发展。"
}, {
    B: "rid",
    C: "[rɪd]",
    D: "vt.除掉，摆脱",
    E: "ri+d",
    F: "ri日(拼音)+d狗(编码dog)",
    G: "我们除掉了那个日本走狗",
    H: "You must rid yourself of this gloomy mood.",
    I: "你必须使自己摆脱这种忧郁情绪。"
}, {
    B: "organic",
    C: "[ɔ:'gænɪk]",
    D: "adj.有机的，生物体的，器官的",
    E: "organ+ic",
    F: "organ器官(熟词)+icIC卡(编码)",
    G: "卖了器官后用IC卡买有机食品",
    H: "I am not good at organic chemistry.",
    I: "我的有机化学学得不好。"
}, {
    B: "fertile",
    C: "['fɜ:taɪl]",
    D: "adj.肥沃的，多产的",
    E: "f+er+tile",
    F: "f斧(编码)+er儿(拼音)+tile瓷砖(熟词)",
    G: "斧儿劈开瓷砖露出肥沃的土地",
    H: "The plants luxuriated in the fertile soil.",
    I: "植物在肥沃的土壤里茂盛生长。"
}, {
    B: "fertilizer",
    C: "['fɜːtɪlaɪzə]",
    D: "n.肥料",
    E: "f+er+tilizer",
    F: "f佛(编码)+er儿(拼音)+tilizer提来这(谐音)",
    G: "肥料是佛的儿子提来这的",
    H: "The tractor hauled the fertilizer away.",
    I: "拖拉机把肥料拉走了。"
}, {
    B: "mineral",
    C: "['mɪn(ə)r(ə)l]",
    D: "n.矿石，矿物",
    E: "mine+r+al",
    F: "mine我的(熟词)+r草(编码)+al阿狸(拼音)",
    G: "我的草被阿狸种在矿石堆了",
    H: "The country possesses rich mineral resources.",
    I: "这个国家有丰富的矿产资源。"
}, {
    B: "skim",
    C: "[skɪm]",
    D: "vt.掠过，搬（去），浏览",
    E: "ski+m",
    F: "ski滑雪(熟词)+m山(编码)",
    G: "滑雪时掠过一座山",
    H: "It took me an hour to skim the book.",
    I: "我费了一个小时把这本书浏览了一遍。"
}, {
    B: "chew",
    C: "[tʃu:]",
    D: "vt./vi.嚼碎，咀嚼（食物）",
    E: "che+w",
    F: "che车(拼音)+w皇冠(编码)",
    G: "坐在车里把皇冠嚼碎了",
    H: "Chew your food well before you swallow it.",
    I: "食物在吞咽前要仔细咀嚼。"
}, {
    B: "Switzerland",
    C: "['swɪtsələnd]",
    D: "n.瑞士（欧洲中部国家）",
    E: "Sw+it+zer+land",
    F: "Sw丝袜(拼音)+itIT(编码)+zer责任(拼音)+land土地(熟词)",
    G: "穿丝袜的IT男有责任保护瑞士的土地",
    H: "The River Rhine rises in Switzerland.",
    I: "莱茵河发源于瑞士。"
}, {
    B: "occasion",
    C: "[əˈkeɪʒn]",
    D: "n.时刻，场合",
    E: "o+cc+asion",
    F: "o蛋(编码)+cc草丛(拼音)+asion爱人(谐音)",
    G: "吃鸡蛋躺在草丛里是爱人的休闲时刻",
    H: "The occasion requires formal dress.",
    I: "这场合要求穿礼服。"
}, {
    B: "slide",
    C: "[slaɪd]",
    D: "vi.滑动，滑落；n.滑动，幻灯片",
    E: "s+lide",
    F: "s美女(编码)+lide懒得(谐音)",
    G: "美女懒得滑动一下",
    H: "Let's slide down this grassy slope.",
    I: "咱们顺着这草坡滑下去。"
}, {
    B: "rhythm",
    C: "['rɪð(ə)m]",
    D: "n.节奏，韵律",
    E: "rhy+th+m",
    F: "rhy润滑油(拼音)+th土豪(拼音)+m山(编码)",
    G: "喝了润滑油的土豪在山里打节奏",
    H: "They drummed a rhythm for dancers.",
    I: "他们为跳舞者敲出节奏。"
}];

export default datas;
