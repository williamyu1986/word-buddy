const PET_WORDS = [
  {
    "id": "pet-1",
    "library": "pet",
    "word": "advance",
    "meaning": "前进,进展,行过的路程；前进,进展,提高,上涨；使前进,促进,提出,提高,使提前,预付",
    "example": "I learned the word \"advance\" today.",
    "part": "n"
  },
  {
    "id": "pet-2",
    "library": "pet",
    "word": "advanced",
    "meaning": "a.在前的,高级的,先进的,年老的；[法]预付的,预支的,垫付的",
    "example": "I learned the word \"advanced\" today.",
    "part": "adj"
  },
  {
    "id": "pet-3",
    "library": "pet",
    "word": "a",
    "meaning": "第一个字母A；一个；第一的\\r",
    "example": "I learned the word \"a\" today.",
    "part": "det",
    "aliases": [
      "a/an",
      "an"
    ]
  },
  {
    "id": "pet-4",
    "library": "pet",
    "word": "advantage",
    "meaning": "优点,便利,好处,优势；有助于",
    "example": "I learned the word \"advantage\" today.",
    "part": "n"
  },
  {
    "id": "pet-5",
    "library": "pet",
    "word": "ability",
    "meaning": "能力,才干；[经]能力,才能",
    "example": "I learned the word \"ability\" today.",
    "part": "n"
  },
  {
    "id": "pet-6",
    "library": "pet",
    "word": "adventure",
    "meaning": "冒险,冒险经历；冒险",
    "example": "I learned the word \"adventure\" today.",
    "part": "n"
  },
  {
    "id": "pet-7",
    "library": "pet",
    "word": "able",
    "meaning": "a.能干的,能够的",
    "example": "I learned the word \"able\" today.",
    "part": "adj"
  },
  {
    "id": "pet-8",
    "library": "pet",
    "word": "advert",
    "meaning": "提出看法,引起注意,留意；广告",
    "example": "I learned the word \"advert\" today.",
    "part": "n"
  },
  {
    "id": "pet-9",
    "library": "pet",
    "word": "advertise",
    "meaning": "做广告,通知,公布；做广告",
    "example": "I learned the word \"advertise\" today.",
    "part": "v"
  },
  {
    "id": "pet-10",
    "library": "pet",
    "word": "about",
    "meaning": "在...周围,大约,有关,关于；大约,四处,在附近,周围",
    "example": "I learned the word \"about\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-11",
    "library": "pet",
    "word": "advertisement",
    "meaning": "广告,启事,广告宣传；[法]广告,公告,告示",
    "example": "I learned the word \"advertisement\" today.",
    "part": "n"
  },
  {
    "id": "pet-12",
    "library": "pet",
    "word": "advice",
    "meaning": "忠告,劝告,意见,报道,通知；[经]通知书,通知,建议",
    "example": "I learned the word \"advice\" today.",
    "part": "n"
  },
  {
    "id": "pet-13",
    "library": "pet",
    "word": "advise",
    "meaning": "劝告,给...出主意,通知,建议；提意见,商量",
    "example": "I learned the word \"advise\" today.",
    "part": "v"
  },
  {
    "id": "pet-14",
    "library": "pet",
    "word": "aeroplane",
    "meaning": "飞机；[机]飞机",
    "example": "I learned the word \"aeroplane\" today.",
    "part": "n"
  },
  {
    "id": "pet-15",
    "library": "pet",
    "word": "above",
    "meaning": "在上方,超出；在上面；a.上述的,上面的",
    "example": "I learned the word \"above\" today.",
    "part": "adj, adv & prep"
  },
  {
    "id": "pet-16",
    "library": "pet",
    "word": "abroad",
    "meaning": "往国外,到室外,到处；a.往国外的,在室外的,广泛四散的",
    "example": "I learned the word \"abroad\" today.",
    "part": "adv"
  },
  {
    "id": "pet-17",
    "library": "pet",
    "word": "affect",
    "meaning": "影响,感动,假装,模仿,爱好,倾向于；自觉感情",
    "example": "I learned the word \"affect\" today.",
    "part": "v"
  },
  {
    "id": "pet-18",
    "library": "pet",
    "word": "afford",
    "meaning": "买得起,足以,给予",
    "example": "I learned the word \"afford\" today.",
    "part": "v"
  },
  {
    "id": "pet-19",
    "library": "pet",
    "word": "absent",
    "meaning": "a.缺席的,不在的,缺乏的,漫不经心的；使缺席",
    "example": "I learned the word \"absent\" today.",
    "part": "adj"
  },
  {
    "id": "pet-20",
    "library": "pet",
    "word": "afraid",
    "meaning": "a.害怕的,恐怕的,遗憾的",
    "example": "I learned the word \"afraid\" today.",
    "part": "adj"
  },
  {
    "id": "pet-21",
    "library": "pet",
    "word": "absolutely",
    "meaning": "完全地,绝对地,确确实实地",
    "example": "I learned the word \"absolutely\" today.",
    "part": "adv"
  },
  {
    "id": "pet-22",
    "library": "pet",
    "word": "after",
    "meaning": "在...之后,由于；在...之后；后来",
    "example": "I learned the word \"after\" today.",
    "part": "adv, conj & prep"
  },
  {
    "id": "pet-23",
    "library": "pet",
    "word": "afternoon",
    "meaning": "午后,下午",
    "example": "I learned the word \"afternoon\" today.",
    "part": "n"
  },
  {
    "id": "pet-24",
    "library": "pet",
    "word": "accent",
    "meaning": "重音,口音,特点,注重点；重读,加重音号于,强调",
    "example": "I learned the word \"accent\" today.",
    "part": "n"
  },
  {
    "id": "pet-25",
    "library": "pet",
    "word": "afterwards",
    "meaning": "然后,后来",
    "example": "I learned the word \"afterwards\" today.",
    "part": "adv"
  },
  {
    "id": "pet-26",
    "library": "pet",
    "word": "again",
    "meaning": "再一次,又,到原处",
    "example": "I learned the word \"again\" today.",
    "part": "adv"
  },
  {
    "id": "pet-27",
    "library": "pet",
    "word": "accept",
    "meaning": "接受,承认,同意,相信,赞成,承担,承兑,采纳,接纳,容忍；同意",
    "example": "I learned the word \"accept\" today.",
    "part": "v"
  },
  {
    "id": "pet-28",
    "library": "pet",
    "word": "against",
    "meaning": "反对,对着,倚靠",
    "example": "I learned the word \"against\" today.",
    "part": "prep"
  },
  {
    "id": "pet-29",
    "library": "pet",
    "word": "acceptable",
    "meaning": "a.可接受的,合意的,可忍受的",
    "example": "I learned the word \"acceptable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-30",
    "library": "pet",
    "word": "age",
    "meaning": "年龄,老年,成年,寿命,时代,时期；变老,成熟",
    "example": "I learned the word \"age\" today.",
    "part": "n"
  },
  {
    "id": "pet-31",
    "library": "pet",
    "word": "access",
    "meaning": "通路,入口,接近,进入,使用权,发作；访问,存取,接近,使用；[计]访问,存取",
    "example": "I learned the word \"access\" today.",
    "part": "n"
  },
  {
    "id": "pet-32",
    "library": "pet",
    "word": "aged",
    "meaning": "a.老的,陈的,有...岁的；[化]老化的；老化了的",
    "example": "I learned the word \"aged\" today.",
    "part": "adj"
  },
  {
    "id": "pet-33",
    "library": "pet",
    "word": "agency",
    "meaning": "代理机构,经销商,中介；[化]办事处",
    "example": "I learned the word \"agency\" today.",
    "part": "n"
  },
  {
    "id": "pet-34",
    "library": "pet",
    "word": "accident",
    "meaning": "意外事件,机遇,事故,次要方面；[化]意外事故；事故",
    "example": "I learned the word \"accident\" today.",
    "part": "n"
  },
  {
    "id": "pet-35",
    "library": "pet",
    "word": "ages",
    "meaning": "晚期糖基化终末产物（AdvancedGlycationEndProducts）",
    "example": "I learned the word \"ages\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-36",
    "library": "pet",
    "word": "accommodation",
    "meaning": "膳宿,预订铺位,适应性调节,调和,贷款；[医]调节(眼)；适应",
    "example": "I learned the word \"accommodation\" today.",
    "part": "n"
  },
  {
    "id": "pet-37",
    "library": "pet",
    "word": "accompany",
    "meaning": "陪伴,伴随,补充,为...伴奏；伴奏,伴唱",
    "example": "I learned the word \"accompany\" today.",
    "part": "v"
  },
  {
    "id": "pet-38",
    "library": "pet",
    "word": "ago",
    "meaning": "以前",
    "example": "I learned the word \"ago\" today.",
    "part": "adv"
  },
  {
    "id": "pet-39",
    "library": "pet",
    "word": "according to",
    "meaning": "根据,按照；取决于；据…所说",
    "example": "Try to use \"according to\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-40",
    "library": "pet",
    "word": "agree",
    "meaning": "同意,赞成,应允,适合；承认,认定,同意",
    "example": "I learned the word \"agree\" today.",
    "part": "v"
  },
  {
    "id": "pet-41",
    "library": "pet",
    "word": "account",
    "meaning": "报告,解释,估价,理由,利润,算账,帐目；报帐,解释,导致,报偿,占,杀死；认为",
    "example": "I learned the word \"account\" today.",
    "part": "n"
  },
  {
    "id": "pet-42",
    "library": "pet",
    "word": "ahead",
    "meaning": "a.领先的,预先的,向前的；领先,预先,向前,胜于,在前面,在将来",
    "example": "I learned the word \"ahead\" today.",
    "part": "adv"
  },
  {
    "id": "pet-43",
    "library": "pet",
    "word": "accountant",
    "meaning": "会计人员,会计师；[经]会计师,会计人员",
    "example": "I learned the word \"accountant\" today.",
    "part": "n"
  },
  {
    "id": "pet-44",
    "library": "pet",
    "word": "aim",
    "meaning": "目标,瞄准,击中目标的能力；对准目标,致力,打算；瞄准",
    "example": "I learned the word \"aim\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-45",
    "library": "pet",
    "word": "accurate",
    "meaning": "a.正确的,精确的；[经]准确的,精确的",
    "example": "I learned the word \"accurate\" today.",
    "part": "adj"
  },
  {
    "id": "pet-46",
    "library": "pet",
    "word": "air",
    "meaning": "空气,旋律,态度；晾,使通风,夸耀",
    "example": "I learned the word \"air\" today.",
    "part": "n"
  },
  {
    "id": "pet-47",
    "library": "pet",
    "word": "ache",
    "meaning": "疼痛；痛,哀怜,渴望",
    "example": "I learned the word \"ache\" today.",
    "part": "n"
  },
  {
    "id": "pet-48",
    "library": "pet",
    "word": "air conditioning",
    "meaning": "用空调设备调节空气,空调设备；[计]空调；空气调节",
    "example": "Try to use \"air conditioning\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-49",
    "library": "pet",
    "word": "achieve",
    "meaning": "完成,达到；如愿以偿",
    "example": "I learned the word \"achieve\" today.",
    "part": "v"
  },
  {
    "id": "pet-50",
    "library": "pet",
    "word": "air force",
    "meaning": "空军,美国航空队",
    "example": "Try to use \"air force\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-51",
    "library": "pet",
    "word": "achievement",
    "meaning": "完成,成就,功业",
    "example": "I learned the word \"achievement\" today.",
    "part": "n"
  },
  {
    "id": "pet-52",
    "library": "pet",
    "word": "airline",
    "meaning": "航线,航线的设备,航空公司",
    "example": "I learned the word \"airline\" today.",
    "part": "n"
  },
  {
    "id": "pet-53",
    "library": "pet",
    "word": "across",
    "meaning": "越过,穿过,与...相交叉,在...的对面；交叉,到另一边,在对面,成十字",
    "example": "I learned the word \"across\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-54",
    "library": "pet",
    "word": "airport",
    "meaning": "飞机场；[机]航空站,机场",
    "example": "I learned the word \"airport\" today.",
    "part": "n"
  },
  {
    "id": "pet-55",
    "library": "pet",
    "word": "act",
    "meaning": "行动,行为,幕,法案；行动,表演,假装,见效,表现,担当；扮演,装作",
    "example": "I learned the word \"act\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-56",
    "library": "pet",
    "word": "alarm",
    "meaning": "惊恐,警报,警钟；使惊恐,警告；[计]报警信号",
    "example": "I learned the word \"alarm\" today.",
    "part": "n"
  },
  {
    "id": "pet-57",
    "library": "pet",
    "word": "alarm clock",
    "meaning": "闹钟",
    "example": "Try to use \"alarm clock\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-58",
    "library": "pet",
    "word": "album",
    "meaning": "粘贴簿,唱片套；[医]白色物",
    "example": "I learned the word \"album\" today.",
    "part": "n"
  },
  {
    "id": "pet-59",
    "library": "pet",
    "word": "alike",
    "meaning": "a.相似的,同样的；一样,以同样的方式",
    "example": "I learned the word \"alike\" today.",
    "part": "adv"
  },
  {
    "id": "pet-60",
    "library": "pet",
    "word": "action",
    "meaning": "行动,活动,动作,作用,战斗,行为,诉讼；对...起诉；[计]方式",
    "example": "I learned the word \"action\" today.",
    "part": "n"
  },
  {
    "id": "pet-61",
    "library": "pet",
    "word": "alive",
    "meaning": "a.活着的,活泼的,敏感的,热闹的",
    "example": "I learned the word \"alive\" today.",
    "part": "adj"
  },
  {
    "id": "pet-62",
    "library": "pet",
    "word": "active",
    "meaning": "a.活跃的,起作用的,积极的,有效的,主动的,活性的,现行的,现役的；主动语态,积极分子",
    "example": "I learned the word \"active\" today.",
    "part": "adj"
  },
  {
    "id": "pet-63",
    "library": "pet",
    "word": "all",
    "meaning": "a.所有的,全部的,一切的；全部,全然；全部",
    "example": "I learned the word \"all\" today.",
    "part": "adj, adv, det & pron"
  },
  {
    "id": "pet-64",
    "library": "pet",
    "word": "activity",
    "meaning": "活动,行动,活跃,活力；[计]活动",
    "example": "I learned the word \"activity\" today.",
    "part": "n"
  },
  {
    "id": "pet-65",
    "library": "pet",
    "word": "all right",
    "meaning": "好,顺利,良好的,正确的",
    "example": "Try to use \"all right\" in a short sentence.",
    "part": "adj, adv & exclam",
    "aliases": [
      "all right/alright",
      "alright"
    ]
  },
  {
    "id": "pet-66",
    "library": "pet",
    "word": "actor",
    "meaning": "男演员,行动者；[医]作用物,反应物",
    "example": "I learned the word \"actor\" today.",
    "part": "n"
  },
  {
    "id": "pet-67",
    "library": "pet",
    "word": "allow",
    "meaning": "允许,同意给予,承认；容许,猜想；[计]允许命令",
    "example": "I learned the word \"allow\" today.",
    "part": "v"
  },
  {
    "id": "pet-68",
    "library": "pet",
    "word": "actress",
    "meaning": "女演员",
    "example": "I learned the word \"actress\" today.",
    "part": "n"
  },
  {
    "id": "pet-69",
    "library": "pet",
    "word": "almost",
    "meaning": "几乎,差不多",
    "example": "I learned the word \"almost\" today.",
    "part": "adv"
  },
  {
    "id": "pet-70",
    "library": "pet",
    "word": "actually",
    "meaning": "事实上,竟然,如今,现在",
    "example": "I learned the word \"actually\" today.",
    "part": "adv"
  },
  {
    "id": "pet-71",
    "library": "pet",
    "word": "alone",
    "meaning": "a.孤独的,单独的,独自的；独自地",
    "example": "I learned the word \"alone\" today.",
    "part": "adv & adj"
  },
  {
    "id": "pet-72",
    "library": "pet",
    "word": "along",
    "meaning": "平行地,向前；沿着",
    "example": "I learned the word \"along\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-73",
    "library": "pet",
    "word": "aloud",
    "meaning": "出声地,大声地",
    "example": "I learned the word \"aloud\" today.",
    "part": "adv"
  },
  {
    "id": "pet-74",
    "library": "pet",
    "word": "alphabet",
    "meaning": "字母；[计]字母表",
    "example": "I learned the word \"alphabet\" today.",
    "part": "n"
  },
  {
    "id": "pet-75",
    "library": "pet",
    "word": "already",
    "meaning": "已经,早已",
    "example": "I learned the word \"already\" today.",
    "part": "adv"
  },
  {
    "id": "pet-76",
    "library": "pet",
    "word": "add",
    "meaning": "增加,添加,附带说明,计算...总和；做加法,积累而成,增添；[计]加法",
    "example": "I learned the word \"add\" today.",
    "part": "v"
  },
  {
    "id": "pet-77",
    "library": "pet",
    "word": "also",
    "meaning": "也,并且,同样地",
    "example": "I learned the word \"also\" today.",
    "part": "adv"
  },
  {
    "id": "pet-78",
    "library": "pet",
    "word": "addition",
    "meaning": "加法,增加的人(或物)；[计]加法",
    "example": "I learned the word \"addition\" today.",
    "part": "n"
  },
  {
    "id": "pet-79",
    "library": "pet",
    "word": "although",
    "meaning": "虽然,尽管",
    "example": "I learned the word \"although\" today.",
    "part": "conj"
  },
  {
    "id": "pet-80",
    "library": "pet",
    "word": "altogether",
    "meaning": "完全地,总而言之",
    "example": "I learned the word \"altogether\" today.",
    "part": "adv"
  },
  {
    "id": "pet-81",
    "library": "pet",
    "word": "address",
    "meaning": "住址,演说,举止,灵巧,求爱；发表(演说或讲话),对付,写地址；[计]地址,寻址",
    "example": "I learned the word \"address\" today.",
    "part": "n"
  },
  {
    "id": "pet-82",
    "library": "pet",
    "word": "always",
    "meaning": "总是,始终",
    "example": "I learned the word \"always\" today.",
    "part": "adv"
  },
  {
    "id": "pet-83",
    "library": "pet",
    "word": "admire",
    "meaning": "赞美,钦佩,爱慕；称赞,惊奇",
    "example": "I learned the word \"admire\" today.",
    "part": "v"
  },
  {
    "id": "pet-84",
    "library": "pet",
    "word": "a.m",
    "meaning": "（拉）午前；早上（antemeridiem）",
    "example": "I learned the word \"a.m\" today.",
    "part": "adv"
  },
  {
    "id": "pet-85",
    "library": "pet",
    "word": "admission",
    "meaning": "准许进入,入场费,录用,承认；[经]加入,入股",
    "example": "I learned the word \"admission\" today.",
    "part": "n"
  },
  {
    "id": "pet-86",
    "library": "pet",
    "word": "amazed",
    "meaning": "a.吃惊的,惊奇的",
    "example": "I learned the word \"amazed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-87",
    "library": "pet",
    "word": "amazing",
    "meaning": "a.令人惊异的",
    "example": "I learned the word \"amazing\" today.",
    "part": "adj"
  },
  {
    "id": "pet-88",
    "library": "pet",
    "word": "admit",
    "meaning": "承认,接受,允许进入,容许；开向,容许,承认",
    "example": "I learned the word \"admit\" today.",
    "part": "v"
  },
  {
    "id": "pet-89",
    "library": "pet",
    "word": "ambition",
    "meaning": "野心,志向",
    "example": "I learned the word \"ambition\" today.",
    "part": "n"
  },
  {
    "id": "pet-90",
    "library": "pet",
    "word": "adult",
    "meaning": "成人,成虫；a.成年的,成熟的",
    "example": "I learned the word \"adult\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-91",
    "library": "pet",
    "word": "ambulance",
    "meaning": "救护车；[医]救护车",
    "example": "I learned the word \"ambulance\" today.",
    "part": "n"
  },
  {
    "id": "pet-92",
    "library": "pet",
    "word": "arrest",
    "meaning": "逮捕,监禁；拘捕,抑制,吸引,阻止",
    "example": "I learned the word \"arrest\" today.",
    "part": "v"
  },
  {
    "id": "pet-93",
    "library": "pet",
    "word": "amount",
    "meaning": "总数,总额；总计,等同",
    "example": "I learned the word \"amount\" today.",
    "part": "n"
  },
  {
    "id": "pet-94",
    "library": "pet",
    "word": "arrival",
    "meaning": "到达,抵达,到达者；[经]到达,到达物",
    "example": "I learned the word \"arrival\" today.",
    "part": "n"
  },
  {
    "id": "pet-95",
    "library": "pet",
    "word": "amusing",
    "meaning": "a.有趣的,引人发笑的",
    "example": "I learned the word \"amusing\" today.",
    "part": "adj"
  },
  {
    "id": "pet-96",
    "library": "pet",
    "word": "arrive",
    "meaning": "到达,抵达",
    "example": "I learned the word \"arrive\" today.",
    "part": "v"
  },
  {
    "id": "pet-97",
    "library": "pet",
    "word": "an",
    "meaning": "art.一",
    "example": "I learned the word \"an\" today.",
    "part": "det"
  },
  {
    "id": "pet-98",
    "library": "pet",
    "word": "art",
    "meaning": "艺术,人文科学,技术,巧妙,诡计,美术；[计]实际保持时间,特许权和资源表,平均检索时间,平均运行时间",
    "example": "I learned the word \"art\" today.",
    "part": "n"
  },
  {
    "id": "pet-99",
    "library": "pet",
    "word": "ancient",
    "meaning": "a.古代的,古老的,年老的,旧的",
    "example": "I learned the word \"ancient\" today.",
    "part": "adj"
  },
  {
    "id": "pet-100",
    "library": "pet",
    "word": "article",
    "meaning": "文章,冠词,物品,物件,条款,契约；[计]信件",
    "example": "I learned the word \"article\" today.",
    "part": "n"
  },
  {
    "id": "pet-101",
    "library": "pet",
    "word": "and",
    "meaning": "和,与；[计]与",
    "example": "I learned the word \"and\" today.",
    "part": "conj"
  },
  {
    "id": "pet-102",
    "library": "pet",
    "word": "artist",
    "meaning": "艺术家,画家",
    "example": "I learned the word \"artist\" today.",
    "part": "n"
  },
  {
    "id": "pet-103",
    "library": "pet",
    "word": "angry",
    "meaning": "a.生气的,愤怒的",
    "example": "I learned the word \"angry\" today.",
    "part": "adj"
  },
  {
    "id": "pet-104",
    "library": "pet",
    "word": "as",
    "meaning": "同样地,例如；做为,当作；当...之时,以...的方式,像...一样,因为",
    "example": "I learned the word \"as\" today.",
    "part": "conj & prep"
  },
  {
    "id": "pet-105",
    "library": "pet",
    "word": "animal",
    "meaning": "动物；[医]动物",
    "example": "I learned the word \"animal\" today.",
    "part": "n"
  },
  {
    "id": "pet-106",
    "library": "pet",
    "word": "ashamed",
    "meaning": "a.惭愧的,羞耻的",
    "example": "I learned the word \"ashamed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-107",
    "library": "pet",
    "word": "ankle",
    "meaning": "踝；[医]踝,踝关节",
    "example": "I learned the word \"ankle\" today.",
    "part": "n"
  },
  {
    "id": "pet-108",
    "library": "pet",
    "word": "ask",
    "meaning": "问,要求；问,要求,邀请,需要",
    "example": "I learned the word \"ask\" today.",
    "part": "v"
  },
  {
    "id": "pet-109",
    "library": "pet",
    "word": "anniversary",
    "meaning": "周年纪念",
    "example": "I learned the word \"anniversary\" today.",
    "part": "n"
  },
  {
    "id": "pet-110",
    "library": "pet",
    "word": "asleep",
    "meaning": "a.睡着的,长眠的,麻木的；熟睡地",
    "example": "I learned the word \"asleep\" today.",
    "part": "adj"
  },
  {
    "id": "pet-111",
    "library": "pet",
    "word": "announce",
    "meaning": "宣布,声称,显示,预告；当报幕员,宣布参加竞选",
    "example": "I learned the word \"announce\" today.",
    "part": "v"
  },
  {
    "id": "pet-112",
    "library": "pet",
    "word": "announcement",
    "meaning": "公告,发表,告知；[经]通告,布告,公告",
    "example": "I learned the word \"announcement\" today.",
    "part": "n"
  },
  {
    "id": "pet-113",
    "library": "pet",
    "word": "aspirin",
    "meaning": "阿斯匹林；[化]乙酰水杨酸；阿司匹灵",
    "example": "I learned the word \"aspirin\" today.",
    "part": "n"
  },
  {
    "id": "pet-114",
    "library": "pet",
    "word": "annoy",
    "meaning": "使恼怒,骚扰",
    "example": "I learned the word \"annoy\" today.",
    "part": "v"
  },
  {
    "id": "pet-115",
    "library": "pet",
    "word": "assist",
    "meaning": "帮助,协助；帮助,促进；协助,参加",
    "example": "I learned the word \"assist\" today.",
    "part": "v"
  },
  {
    "id": "pet-116",
    "library": "pet",
    "word": "annual",
    "meaning": "年刊,年报；a.每年的,一年一次的,全年的,一年生的",
    "example": "I learned the word \"annual\" today.",
    "part": "adj"
  },
  {
    "id": "pet-117",
    "library": "pet",
    "word": "assistant",
    "meaning": "助手,助理,助教；a.有帮助的,辅助的,助理的",
    "example": "I learned the word \"assistant\" today.",
    "part": "n"
  },
  {
    "id": "pet-118",
    "library": "pet",
    "word": "another",
    "meaning": "a.另外的,再一的,不同的；又一个,另一个,类似的另一个",
    "example": "I learned the word \"another\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-119",
    "library": "pet",
    "word": "astronaut",
    "meaning": "太空旅行者,宇航员；[法]美国太空人",
    "example": "I learned the word \"astronaut\" today.",
    "part": "n"
  },
  {
    "id": "pet-120",
    "library": "pet",
    "word": "answer",
    "meaning": "答案,回答,回报,答辩；回答,反驳,适应,响应,符合；回答,答应,负责,符合,成功",
    "example": "I learned the word \"answer\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-121",
    "library": "pet",
    "word": "answerphone",
    "meaning": "电话答录机",
    "example": "I learned the word \"answerphone\" today.",
    "part": "n"
  },
  {
    "id": "pet-122",
    "library": "pet",
    "word": "at",
    "meaning": "在,向,对；[计]地址转换器,异常传输,自动订票",
    "example": "I learned the word \"at\" today.",
    "part": "prep"
  },
  {
    "id": "pet-123",
    "library": "pet",
    "word": "ant",
    "meaning": "蚂蚁",
    "example": "I learned the word \"ant\" today.",
    "part": "n"
  },
  {
    "id": "pet-124",
    "library": "pet",
    "word": "at sign",
    "meaning": "@ 符号",
    "example": "Try to use \"at sign\" in a short sentence.",
    "part": "n",
    "aliases": [
      "@",
      "at",
      "at/@"
    ]
  },
  {
    "id": "pet-125",
    "library": "pet",
    "word": "antique",
    "meaning": "古董,古物；a.古老的,古风的,旧式的,过时的",
    "example": "I learned the word \"antique\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-126",
    "library": "pet",
    "word": "anxious",
    "meaning": "a.忧虑的,发愁的,渴望的",
    "example": "I learned the word \"anxious\" today.",
    "part": "adj"
  },
  {
    "id": "pet-127",
    "library": "pet",
    "word": "any",
    "meaning": "a.任何的；任何",
    "example": "I learned the word \"any\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-128",
    "library": "pet",
    "word": "at all",
    "meaning": "根本,完全",
    "example": "Try to use \"at all\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-129",
    "library": "pet",
    "word": "anybody",
    "meaning": "任何人；重要人物",
    "example": "I learned the word \"anybody\" today.",
    "part": "pron"
  },
  {
    "id": "pet-130",
    "library": "pet",
    "word": "at first",
    "meaning": "起先",
    "example": "Try to use \"at first\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-131",
    "library": "pet",
    "word": "anymore",
    "meaning": "再也不,不再",
    "example": "I learned the word \"anymore\" today.",
    "part": "adv"
  },
  {
    "id": "pet-132",
    "library": "pet",
    "word": "athlete",
    "meaning": "运动员,运动选手；[医]运动员",
    "example": "I learned the word \"athlete\" today.",
    "part": "n"
  },
  {
    "id": "pet-133",
    "library": "pet",
    "word": "anyone",
    "meaning": "任何人",
    "example": "I learned the word \"anyone\" today.",
    "part": "pron"
  },
  {
    "id": "pet-134",
    "library": "pet",
    "word": "athletics",
    "meaning": "体育运动",
    "example": "I learned the word \"athletics\" today.",
    "part": "n"
  },
  {
    "id": "pet-135",
    "library": "pet",
    "word": "anything",
    "meaning": "任何事",
    "example": "I learned the word \"anything\" today.",
    "part": "pron"
  },
  {
    "id": "pet-136",
    "library": "pet",
    "word": "at last",
    "meaning": "终于",
    "example": "Try to use \"at last\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-137",
    "library": "pet",
    "word": "anyway",
    "meaning": "无论如何,至少",
    "example": "I learned the word \"anyway\" today.",
    "part": "adv"
  },
  {
    "id": "pet-138",
    "library": "pet",
    "word": "at least",
    "meaning": "至少；[法]至少",
    "example": "Try to use \"at least\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-139",
    "library": "pet",
    "word": "anywhere",
    "meaning": "无论何处",
    "example": "I learned the word \"anywhere\" today.",
    "part": "adv"
  },
  {
    "id": "pet-140",
    "library": "pet",
    "word": "atmosphere",
    "meaning": "大气,空气,气氛；[医]大气；大气压",
    "example": "I learned the word \"atmosphere\" today.",
    "part": "n"
  },
  {
    "id": "pet-141",
    "library": "pet",
    "word": "apart",
    "meaning": "成零碎,成距离,分别地,分离着；a.分离的",
    "example": "I learned the word \"apart\" today.",
    "part": "adv"
  },
  {
    "id": "pet-142",
    "library": "pet",
    "word": "at once",
    "meaning": "立刻",
    "example": "Try to use \"at once\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-143",
    "library": "pet",
    "word": "apart from",
    "meaning": "除了...之外",
    "example": "Try to use \"apart from\" in a short sentence.",
    "part": "adv"
  },
  {
    "id": "pet-144",
    "library": "pet",
    "word": "at present",
    "meaning": "现在,目前",
    "example": "Try to use \"at present\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-145",
    "library": "pet",
    "word": "apartment",
    "meaning": "房间,公寓",
    "example": "I learned the word \"apartment\" today.",
    "part": "n"
  },
  {
    "id": "pet-146",
    "library": "pet",
    "word": "attach",
    "meaning": "附上,使依附,使附属,使喜爱,系,缚；附属,归属,联系在一起；[计]挂接服务器命令,关联,挂接,附加",
    "example": "I learned the word \"attach\" today.",
    "part": "v"
  },
  {
    "id": "pet-147",
    "library": "pet",
    "word": "apartment building",
    "meaning": "<美>公寓大楼",
    "example": "Try to use \"apartment building\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-148",
    "library": "pet",
    "word": "attack",
    "meaning": "攻击,抨击；攻击,抨击,动手干；攻击",
    "example": "I learned the word \"attack\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-149",
    "library": "pet",
    "word": "apologise",
    "meaning": "道歉（等于apologize）",
    "example": "I learned the word \"apologise\" today.",
    "part": "v"
  },
  {
    "id": "pet-150",
    "library": "pet",
    "word": "attempt",
    "meaning": "尝试,企图；尝试,企图",
    "example": "I learned the word \"attempt\" today.",
    "part": "v"
  },
  {
    "id": "pet-151",
    "library": "pet",
    "word": "apology",
    "meaning": "道歉,辩护；[法]道歉,谢罪,辩解者",
    "example": "I learned the word \"apology\" today.",
    "part": "n"
  },
  {
    "id": "pet-152",
    "library": "pet",
    "word": "attend",
    "meaning": "参加,照料,伴随；专心于,照顾,服侍,出席",
    "example": "I learned the word \"attend\" today.",
    "part": "v"
  },
  {
    "id": "pet-153",
    "library": "pet",
    "word": "app",
    "meaning": "[计]应用,应用程序；相联并行处理器",
    "example": "I learned the word \"app\" today.",
    "part": "n"
  },
  {
    "id": "pet-154",
    "library": "pet",
    "word": "attention",
    "meaning": "注意,注意力；[计]引起注意信号",
    "example": "I learned the word \"attention\" today.",
    "part": "n"
  },
  {
    "id": "pet-155",
    "library": "pet",
    "word": "at the same time",
    "meaning": "同时,但是",
    "example": "Try to use \"at the same time\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-156",
    "library": "pet",
    "word": "appear",
    "meaning": "出现,显得,来到；[法]出庭,到案,出现",
    "example": "I learned the word \"appear\" today.",
    "part": "v"
  },
  {
    "id": "pet-157",
    "library": "pet",
    "word": "attitude",
    "meaning": "态度,看法,姿势；[医]体态,姿势,态度",
    "example": "I learned the word \"attitude\" today.",
    "part": "n"
  },
  {
    "id": "pet-158",
    "library": "pet",
    "word": "appearance",
    "meaning": "出现,露面,外观,外表,出版；[计]外观,版面",
    "example": "I learned the word \"appearance\" today.",
    "part": "n"
  },
  {
    "id": "pet-159",
    "library": "pet",
    "word": "attract",
    "meaning": "吸引,诱惑；有吸引力",
    "example": "I learned the word \"attract\" today.",
    "part": "v"
  },
  {
    "id": "pet-160",
    "library": "pet",
    "word": "apple",
    "meaning": "苹果,家伙；[医]苹果",
    "example": "I learned the word \"apple\" today.",
    "part": "n"
  },
  {
    "id": "pet-161",
    "library": "pet",
    "word": "attraction",
    "meaning": "吸引,吸引人的事物,吸引力；[医]吸引",
    "example": "I learned the word \"attraction\" today.",
    "part": "n"
  },
  {
    "id": "pet-162",
    "library": "pet",
    "word": "application",
    "meaning": "应用,申请,志愿书,应用程序；[计]应用,应用程序",
    "example": "I learned the word \"application\" today.",
    "part": "n"
  },
  {
    "id": "pet-163",
    "library": "pet",
    "word": "attractive",
    "meaning": "a.吸引人的,有魅力的；[法]有吸引力的,有迷惑力的",
    "example": "I learned the word \"attractive\" today.",
    "part": "adj"
  },
  {
    "id": "pet-164",
    "library": "pet",
    "word": "audience",
    "meaning": "听众,观众,读者；[法]听讼,观众,听众",
    "example": "I learned the word \"audience\" today.",
    "part": "n"
  },
  {
    "id": "pet-165",
    "library": "pet",
    "word": "aunt",
    "meaning": "阿姨,姨妈,舅妈,姑妈,伯母",
    "example": "I learned the word \"aunt\" today.",
    "part": "n"
  },
  {
    "id": "pet-166",
    "library": "pet",
    "word": "author",
    "meaning": "作家,作家的著作,创始人；[法]作者,著作人,本人",
    "example": "I learned the word \"author\" today.",
    "part": "n"
  },
  {
    "id": "pet-167",
    "library": "pet",
    "word": "apply",
    "meaning": "涂,应用；申请,适用",
    "example": "I learned the word \"apply\" today.",
    "part": "v"
  },
  {
    "id": "pet-168",
    "library": "pet",
    "word": "autumn",
    "meaning": "秋天,成熟期",
    "example": "I learned the word \"autumn\" today.",
    "part": "n"
  },
  {
    "id": "pet-169",
    "library": "pet",
    "word": "appointment",
    "meaning": "约会,委任的职位,委派；[经]任命,派,指定",
    "example": "I learned the word \"appointment\" today.",
    "part": "n"
  },
  {
    "id": "pet-170",
    "library": "pet",
    "word": "approach",
    "meaning": "接近,入门；接近,近似,找...商量；靠近",
    "example": "I learned the word \"approach\" today.",
    "part": "v"
  },
  {
    "id": "pet-171",
    "library": "pet",
    "word": "available",
    "meaning": "a.可利用的,可获得的,有效的；[医]有效的,可得的",
    "example": "I learned the word \"available\" today.",
    "part": "adj"
  },
  {
    "id": "pet-172",
    "library": "pet",
    "word": "approve",
    "meaning": "赞同,核准,为...提供证据；赞许",
    "example": "I learned the word \"approve\" today.",
    "part": "v"
  },
  {
    "id": "pet-173",
    "library": "pet",
    "word": "average",
    "meaning": "平均,平均数,一般水平,海损；a.平均的,中等的,平常的；算出...平均数,平均做,均分,使平衡",
    "example": "I learned the word \"average\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-174",
    "library": "pet",
    "word": "avoid",
    "meaning": "避免,防止,撤消；[法]避免,回避,躲开",
    "example": "I learned the word \"avoid\" today.",
    "part": "v"
  },
  {
    "id": "pet-175",
    "library": "pet",
    "word": "approximately",
    "meaning": "大约,大致,近于；[经]大约,近似",
    "example": "I learned the word \"approximately\" today.",
    "part": "adv"
  },
  {
    "id": "pet-176",
    "library": "pet",
    "word": "awake",
    "meaning": "a.醒着的；唤醒,唤起,使意识到；醒来,被唤起,意识到",
    "example": "I learned the word \"awake\" today.",
    "part": "adj"
  },
  {
    "id": "pet-177",
    "library": "pet",
    "word": "architect",
    "meaning": "建筑师,设计者,缔造者",
    "example": "I learned the word \"architect\" today.",
    "part": "n"
  },
  {
    "id": "pet-178",
    "library": "pet",
    "word": "away",
    "meaning": "离去",
    "example": "I learned the word \"away\" today.",
    "part": "adv"
  },
  {
    "id": "pet-179",
    "library": "pet",
    "word": "architecture",
    "meaning": "建筑学,建筑式样；[计]体系结构",
    "example": "I learned the word \"architecture\" today.",
    "part": "n"
  },
  {
    "id": "pet-180",
    "library": "pet",
    "word": "area",
    "meaning": "区域,面积,范围,空地；[计]区域",
    "example": "I learned the word \"area\" today.",
    "part": "n"
  },
  {
    "id": "pet-181",
    "library": "pet",
    "word": "awesome",
    "meaning": "a.引起敬畏的,可怕的",
    "example": "I learned the word \"awesome\" today.",
    "part": "adj"
  },
  {
    "id": "pet-182",
    "library": "pet",
    "word": "argue",
    "meaning": "提出理由,争论,辩论；主张,辩论,证明,说服",
    "example": "I learned the word \"argue\" today.",
    "part": "v"
  },
  {
    "id": "pet-183",
    "library": "pet",
    "word": "awful",
    "meaning": "a.可怕的,庄严的,虔敬的",
    "example": "I learned the word \"awful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-184",
    "library": "pet",
    "word": "argument",
    "meaning": "争论,论证,论据,自变量；[计]参数",
    "example": "I learned the word \"argument\" today.",
    "part": "n"
  },
  {
    "id": "pet-185",
    "library": "pet",
    "word": "arm",
    "meaning": "手臂,袖子,狭长港湾,武器；武装,装备；武装起来",
    "example": "I learned the word \"arm\" today.",
    "part": "n"
  },
  {
    "id": "pet-186",
    "library": "pet",
    "word": "armchair",
    "meaning": "扶手椅",
    "example": "I learned the word \"armchair\" today.",
    "part": "n"
  },
  {
    "id": "pet-187",
    "library": "pet",
    "word": "army",
    "meaning": "军队,陆军",
    "example": "I learned the word \"army\" today.",
    "part": "n"
  },
  {
    "id": "pet-188",
    "library": "pet",
    "word": "baby",
    "meaning": "婴孩；[医]婴儿",
    "example": "I learned the word \"baby\" today.",
    "part": "n"
  },
  {
    "id": "pet-189",
    "library": "pet",
    "word": "around",
    "meaning": "包围,在...周围,四处；兜着圈子,在附近,到处",
    "example": "I learned the word \"around\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-190",
    "library": "pet",
    "word": "babysit",
    "meaning": "(代人临时)照看婴孩",
    "example": "I learned the word \"babysit\" today.",
    "part": "v"
  },
  {
    "id": "pet-191",
    "library": "pet",
    "word": "arrange",
    "meaning": "安排,排列,达成协议；[计]重排",
    "example": "I learned the word \"arrange\" today.",
    "part": "v"
  },
  {
    "id": "pet-192",
    "library": "pet",
    "word": "arrangement",
    "meaning": "排列,整齐,安排；[计]排列",
    "example": "I learned the word \"arrangement\" today.",
    "part": "n"
  },
  {
    "id": "pet-193",
    "library": "pet",
    "word": "babysitter",
    "meaning": "临时照顾幼儿者",
    "example": "I learned the word \"babysitter\" today.",
    "part": "n"
  },
  {
    "id": "pet-194",
    "library": "pet",
    "word": "back",
    "meaning": "a.后面的；使后退,支持；倒退,背靠",
    "example": "I learned the word \"back\" today.",
    "part": "adv, adj & n"
  },
  {
    "id": "pet-195",
    "library": "pet",
    "word": "begin",
    "meaning": "开始；[计]开始",
    "example": "I learned the word \"begin\" today.",
    "part": "v"
  },
  {
    "id": "pet-196",
    "library": "pet",
    "word": "background",
    "meaning": "背景,背景资料；[计]背景,后台",
    "example": "I learned the word \"background\" today.",
    "part": "n"
  },
  {
    "id": "pet-197",
    "library": "pet",
    "word": "beginner",
    "meaning": "初学者",
    "example": "I learned the word \"beginner\" today.",
    "part": "n"
  },
  {
    "id": "pet-198",
    "library": "pet",
    "word": "backpack",
    "meaning": "远足用的背包；双肩背包,背包",
    "example": "I learned the word \"backpack\" today.",
    "part": "n"
  },
  {
    "id": "pet-199",
    "library": "pet",
    "word": "beginning",
    "meaning": "开始",
    "example": "I learned the word \"beginning\" today.",
    "part": "n"
  },
  {
    "id": "pet-200",
    "library": "pet",
    "word": "backpacker",
    "meaning": "背包旅行者",
    "example": "I learned the word \"backpacker\" today.",
    "part": "n"
  },
  {
    "id": "pet-201",
    "library": "pet",
    "word": "behave",
    "meaning": "举止端正,行为规矩；检点(自己的)行为,使表现好",
    "example": "I learned the word \"behave\" today.",
    "part": "v"
  },
  {
    "id": "pet-202",
    "library": "pet",
    "word": "backpacking",
    "meaning": "徒步旅行",
    "example": "I learned the word \"backpacking\" today.",
    "part": "n"
  },
  {
    "id": "pet-203",
    "library": "pet",
    "word": "behaviour",
    "meaning": "行为,举止；[计]特性,性能,特点,行为,动作,状态",
    "example": "I learned the word \"behaviour\" today.",
    "part": "n"
  },
  {
    "id": "pet-204",
    "library": "pet",
    "word": "backwards",
    "meaning": "向后",
    "example": "I learned the word \"backwards\" today.",
    "part": "adv"
  },
  {
    "id": "pet-205",
    "library": "pet",
    "word": "behind",
    "meaning": "在后地；在...背后",
    "example": "I learned the word \"behind\" today.",
    "part": "prep & adv"
  },
  {
    "id": "pet-206",
    "library": "pet",
    "word": "bad",
    "meaning": "a.坏的；坏；坏地",
    "example": "I learned the word \"bad\" today.",
    "part": "adj"
  },
  {
    "id": "pet-207",
    "library": "pet",
    "word": "believe",
    "meaning": "相信",
    "example": "I learned the word \"believe\" today.",
    "part": "v"
  },
  {
    "id": "pet-208",
    "library": "pet",
    "word": "badly",
    "meaning": "严重地,恶劣地,极度地",
    "example": "I learned the word \"badly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-209",
    "library": "pet",
    "word": "bell",
    "meaning": "铃,钟；[计]响铃命令",
    "example": "I learned the word \"bell\" today.",
    "part": "n"
  },
  {
    "id": "pet-210",
    "library": "pet",
    "word": "badminton",
    "meaning": "羽毛球运动",
    "example": "I learned the word \"badminton\" today.",
    "part": "n"
  },
  {
    "id": "pet-211",
    "library": "pet",
    "word": "belong",
    "meaning": "属于,合适",
    "example": "I learned the word \"belong\" today.",
    "part": "v"
  },
  {
    "id": "pet-212",
    "library": "pet",
    "word": "bag",
    "meaning": "袋子,袋状物；使膨大,装袋,猎获",
    "example": "I learned the word \"bag\" today.",
    "part": "n"
  },
  {
    "id": "pet-213",
    "library": "pet",
    "word": "below",
    "meaning": "在下面；在下面",
    "example": "I learned the word \"below\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-214",
    "library": "pet",
    "word": "baggage",
    "meaning": "行李；[经]行李",
    "example": "I learned the word \"baggage\" today.",
    "part": "n"
  },
  {
    "id": "pet-215",
    "library": "pet",
    "word": "belt",
    "meaning": "带子,地带；[医]带,腰带,束带,地带,区",
    "example": "I learned the word \"belt\" today.",
    "part": "n"
  },
  {
    "id": "pet-216",
    "library": "pet",
    "word": "bake",
    "meaning": "烘焙,烤；烤面包；烘焙,烤",
    "example": "I learned the word \"bake\" today.",
    "part": "v"
  },
  {
    "id": "pet-217",
    "library": "pet",
    "word": "beneath",
    "meaning": "在...下方；在...下方",
    "example": "I learned the word \"beneath\" today.",
    "part": "prep"
  },
  {
    "id": "pet-218",
    "library": "pet",
    "word": "baker",
    "meaning": "面包师；[医]烤箱(骨科用)",
    "example": "I learned the word \"baker\" today.",
    "part": "n"
  },
  {
    "id": "pet-219",
    "library": "pet",
    "word": "benefit",
    "meaning": "利益；有益于；受益",
    "example": "I learned the word \"benefit\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-220",
    "library": "pet",
    "word": "balcony",
    "meaning": "阳台,戏院楼厅",
    "example": "I learned the word \"balcony\" today.",
    "part": "n"
  },
  {
    "id": "pet-221",
    "library": "pet",
    "word": "be over",
    "meaning": "完了,结束",
    "example": "Try to use \"be over\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-222",
    "library": "pet",
    "word": "bald",
    "meaning": "a.秃头的,光秃的,单调的,赤裸的；变秃",
    "example": "I learned the word \"bald\" today.",
    "part": "adj"
  },
  {
    "id": "pet-223",
    "library": "pet",
    "word": "ball",
    "meaning": "球,舞会,球状物；捏成球形",
    "example": "I learned the word \"ball\" today.",
    "part": "n"
  },
  {
    "id": "pet-224",
    "library": "pet",
    "word": "beside",
    "meaning": "在旁边",
    "example": "I learned the word \"beside\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-225",
    "library": "pet",
    "word": "ballet",
    "meaning": "芭蕾舞",
    "example": "I learned the word \"ballet\" today.",
    "part": "n"
  },
  {
    "id": "pet-226",
    "library": "pet",
    "word": "besides",
    "meaning": "除...之外；而且,此外",
    "example": "I learned the word \"besides\" today.",
    "part": "prep"
  },
  {
    "id": "pet-227",
    "library": "pet",
    "word": "balloon",
    "meaning": "气球；使成气球状；膨胀如气球,激增",
    "example": "I learned the word \"balloon\" today.",
    "part": "n"
  },
  {
    "id": "pet-228",
    "library": "pet",
    "word": "best",
    "meaning": "a.最好的；最好地；最好的人",
    "example": "I learned the word \"best\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-229",
    "library": "pet",
    "word": "banana",
    "meaning": "香蕉",
    "example": "I learned the word \"banana\" today.",
    "part": "n"
  },
  {
    "id": "pet-230",
    "library": "pet",
    "word": "bestseller",
    "meaning": "畅销书",
    "example": "I learned the word \"bestseller\" today.",
    "part": "n"
  },
  {
    "id": "pet-231",
    "library": "pet",
    "word": "band",
    "meaning": "带子,队,乐队；联合,结合；[计]频带",
    "example": "I learned the word \"band\" today.",
    "part": "n"
  },
  {
    "id": "pet-232",
    "library": "pet",
    "word": "better",
    "meaning": "a.较好的；比较好",
    "example": "I learned the word \"better\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-233",
    "library": "pet",
    "word": "bandage",
    "meaning": "绷带；[化]帘布筒；实心轮胎",
    "example": "I learned the word \"bandage\" today.",
    "part": "n"
  },
  {
    "id": "pet-234",
    "library": "pet",
    "word": "between",
    "meaning": "在...之间",
    "example": "I learned the word \"between\" today.",
    "part": "prep & adv"
  },
  {
    "id": "pet-235",
    "library": "pet",
    "word": "bank",
    "meaning": "银行,堤,岸；[医]库",
    "example": "I learned the word \"bank\" today.",
    "part": "n"
  },
  {
    "id": "pet-236",
    "library": "pet",
    "word": "beyond",
    "meaning": "超过,在那一边,迟于；在远处；更远处",
    "example": "I learned the word \"beyond\" today.",
    "part": "prep & adv"
  },
  {
    "id": "pet-237",
    "library": "pet",
    "word": "bank account",
    "meaning": "银行存款；银行往来帐户",
    "example": "Try to use \"bank account\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-238",
    "library": "pet",
    "word": "bicycle",
    "meaning": "自行车",
    "example": "I learned the word \"bicycle\" today.",
    "part": "n"
  },
  {
    "id": "pet-239",
    "library": "pet",
    "word": "banking",
    "meaning": "银行业务；[经]银行业,银行事务",
    "example": "I learned the word \"banking\" today.",
    "part": "n"
  },
  {
    "id": "pet-240",
    "library": "pet",
    "word": "big",
    "meaning": "a.大的,重要的；大量地",
    "example": "I learned the word \"big\" today.",
    "part": "adj"
  },
  {
    "id": "pet-241",
    "library": "pet",
    "word": "bar",
    "meaning": "条,棒,酒吧,栅,障碍物；禁止,阻挡,妨碍；[计]棒形图",
    "example": "I learned the word \"bar\" today.",
    "part": "n"
  },
  {
    "id": "pet-242",
    "library": "pet",
    "word": "bike",
    "meaning": "自行车,脚踏车",
    "example": "I learned the word \"bike\" today.",
    "part": "n"
  },
  {
    "id": "pet-243",
    "library": "pet",
    "word": "barbecue",
    "meaning": "烤肉；烤肉,烧烤",
    "example": "I learned the word \"barbecue\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-244",
    "library": "pet",
    "word": "bill",
    "meaning": "帐单,清单,钞票,鸟嘴,广告,法案,票据；开帐单,(用招贴)宣布",
    "example": "I learned the word \"bill\" today.",
    "part": "n"
  },
  {
    "id": "pet-245",
    "library": "pet",
    "word": "barber",
    "meaning": "理发师",
    "example": "I learned the word \"barber\" today.",
    "part": "n"
  },
  {
    "id": "pet-246",
    "library": "pet",
    "word": "baseball",
    "meaning": "棒球；[计]棒球系统",
    "example": "I learned the word \"baseball\" today.",
    "part": "n"
  },
  {
    "id": "pet-247",
    "library": "pet",
    "word": "bin",
    "meaning": "(贮存谷物等的)容器,箱子；[计]二进制,商业信息网",
    "example": "I learned the word \"bin\" today.",
    "part": "n"
  },
  {
    "id": "pet-248",
    "library": "pet",
    "word": "base on",
    "meaning": "基于",
    "example": "Try to use \"base on\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-249",
    "library": "pet",
    "word": "biography",
    "meaning": "传记",
    "example": "I learned the word \"biography\" today.",
    "part": "n"
  },
  {
    "id": "pet-250",
    "library": "pet",
    "word": "basic",
    "meaning": "基本原理,要素,基本规律；a.基本的,碱性的；(计算机)BASIC语言",
    "example": "I learned the word \"basic\" today.",
    "part": "adj"
  },
  {
    "id": "pet-251",
    "library": "pet",
    "word": "biology",
    "meaning": "生物学；[化]生物；生物学",
    "example": "I learned the word \"biology\" today.",
    "part": "n"
  },
  {
    "id": "pet-252",
    "library": "pet",
    "word": "basin",
    "meaning": "盆,盆地；[医]第三脑室,骨盆",
    "example": "I learned the word \"basin\" today.",
    "part": "n"
  },
  {
    "id": "pet-253",
    "library": "pet",
    "word": "bird",
    "meaning": "鸟,羽毛球；打鸟",
    "example": "I learned the word \"bird\" today.",
    "part": "n"
  },
  {
    "id": "pet-254",
    "library": "pet",
    "word": "basket",
    "meaning": "篮,篮子；装入篮",
    "example": "I learned the word \"basket\" today.",
    "part": "n"
  },
  {
    "id": "pet-255",
    "library": "pet",
    "word": "birth",
    "meaning": "出生,起源；[医]生产,分娩",
    "example": "I learned the word \"birth\" today.",
    "part": "n"
  },
  {
    "id": "pet-256",
    "library": "pet",
    "word": "basketball",
    "meaning": "篮球",
    "example": "I learned the word \"basketball\" today.",
    "part": "n"
  },
  {
    "id": "pet-257",
    "library": "pet",
    "word": "birthday",
    "meaning": "生日",
    "example": "I learned the word \"birthday\" today.",
    "part": "n"
  },
  {
    "id": "pet-258",
    "library": "pet",
    "word": "bat",
    "meaning": "蝙蝠,球棒；用球棒打,眨眼；[计]成批",
    "example": "I learned the word \"bat\" today.",
    "part": "n"
  },
  {
    "id": "pet-259",
    "library": "pet",
    "word": "biscuit",
    "meaning": "饼干；[化]素坯；饼干",
    "example": "I learned the word \"biscuit\" today.",
    "part": "n"
  },
  {
    "id": "pet-260",
    "library": "pet",
    "word": "bath",
    "meaning": "沐浴,浴室；[医]浴",
    "example": "I learned the word \"bath\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-261",
    "library": "pet",
    "word": "bit",
    "meaning": "少量,马嚼子,辅币；给马上嚼子,控制；bite的过去式和过去分词",
    "example": "I learned the word \"bit\" today.",
    "part": "n"
  },
  {
    "id": "pet-262",
    "library": "pet",
    "word": "bathing suit",
    "meaning": "游泳衣",
    "example": "Try to use \"bathing suit\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-263",
    "library": "pet",
    "word": "bite",
    "meaning": "咬,一口；咬,刺痛,穿透",
    "example": "I learned the word \"bite\" today.",
    "part": "v"
  },
  {
    "id": "pet-264",
    "library": "pet",
    "word": "bathroom",
    "meaning": "浴室,厕所",
    "example": "I learned the word \"bathroom\" today.",
    "part": "n"
  },
  {
    "id": "pet-265",
    "library": "pet",
    "word": "bitter",
    "meaning": "a.苦的,痛苦的,怀恨的；刺骨；(使)变苦",
    "example": "I learned the word \"bitter\" today.",
    "part": "adj"
  },
  {
    "id": "pet-266",
    "library": "pet",
    "word": "bathtub",
    "meaning": "浴缸",
    "example": "I learned the word \"bathtub\" today.",
    "part": "n"
  },
  {
    "id": "pet-267",
    "library": "pet",
    "word": "black",
    "meaning": "黑色,黑颜料；a.黑色的",
    "example": "I learned the word \"black\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-268",
    "library": "pet",
    "word": "battery",
    "meaning": "电池,殴打；[化]蓄电池",
    "example": "I learned the word \"battery\" today.",
    "part": "n"
  },
  {
    "id": "pet-269",
    "library": "pet",
    "word": "blackboard",
    "meaning": "黑板",
    "example": "I learned the word \"blackboard\" today.",
    "part": "n"
  },
  {
    "id": "pet-270",
    "library": "pet",
    "word": "battle",
    "meaning": "战役；战斗",
    "example": "I learned the word \"battle\" today.",
    "part": "n"
  },
  {
    "id": "pet-271",
    "library": "pet",
    "word": "blame",
    "meaning": "过失,责备；责备,归咎于",
    "example": "I learned the word \"blame\" today.",
    "part": "v"
  },
  {
    "id": "pet-272",
    "library": "pet",
    "word": "bay",
    "meaning": "海湾,狗吠声,月桂；吠,使走投无路；吠",
    "example": "I learned the word \"bay\" today.",
    "part": "n"
  },
  {
    "id": "pet-273",
    "library": "pet",
    "word": "blank",
    "meaning": "空格,空白；a.空白的,空虚的,完全的,无色的；消失,成为空白",
    "example": "I learned the word \"blank\" today.",
    "part": "adj"
  },
  {
    "id": "pet-274",
    "library": "pet",
    "word": "be",
    "meaning": "是,表示,在；[计]后端,总线允许",
    "example": "I learned the word \"be\" today.",
    "part": "av & v"
  },
  {
    "id": "pet-275",
    "library": "pet",
    "word": "beach",
    "meaning": "海滩",
    "example": "I learned the word \"beach\" today.",
    "part": "n"
  },
  {
    "id": "pet-276",
    "library": "pet",
    "word": "blanket",
    "meaning": "毛毯,毯子；掩盖,覆盖；a.总共的",
    "example": "I learned the word \"blanket\" today.",
    "part": "n"
  },
  {
    "id": "pet-277",
    "library": "pet",
    "word": "bean",
    "meaning": "豆子；[化]油嘴；豆",
    "example": "I learned the word \"bean\" today.",
    "part": "n"
  },
  {
    "id": "pet-278",
    "library": "pet",
    "word": "bleed",
    "meaning": "流血,悲痛,渗出；使出血,榨取",
    "example": "I learned the word \"bleed\" today.",
    "part": "v"
  },
  {
    "id": "pet-279",
    "library": "pet",
    "word": "bear",
    "meaning": "熊；忍受,支承,产生,怀有,通过卖空使跌价；忍受,结果实,压挤,行进,转向",
    "example": "I learned the word \"bear\" today.",
    "part": "n"
  },
  {
    "id": "pet-280",
    "library": "pet",
    "word": "blind",
    "meaning": "蒙蔽物,窗帘；a.盲目的,瞎的,不加思考的；使失明,蒙蔽,遮暗",
    "example": "I learned the word \"blind\" today.",
    "part": "adj"
  },
  {
    "id": "pet-281",
    "library": "pet",
    "word": "beard",
    "meaning": "胡须；抓住胡须,公开反对",
    "example": "I learned the word \"beard\" today.",
    "part": "n"
  },
  {
    "id": "pet-282",
    "library": "pet",
    "word": "block",
    "meaning": "街区,木块,石块,块；阻塞,封锁,使成块状；[计]块,数据块",
    "example": "I learned the word \"block\" today.",
    "part": "n"
  },
  {
    "id": "pet-283",
    "library": "pet",
    "word": "beat",
    "meaning": "心跳(声),打,敲打声,拍子；打,拍打,打败；a.疲乏的,颓废的",
    "example": "I learned the word \"beat\" today.",
    "part": "v"
  },
  {
    "id": "pet-284",
    "library": "pet",
    "word": "beautiful",
    "meaning": "a.美丽的",
    "example": "I learned the word \"beautiful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-285",
    "library": "pet",
    "word": "beauty",
    "meaning": "美,美人",
    "example": "I learned the word \"beauty\" today.",
    "part": "n"
  },
  {
    "id": "pet-286",
    "library": "pet",
    "word": "blog",
    "meaning": "博客；部落格；网络日志",
    "example": "I learned the word \"blog\" today.",
    "part": "n"
  },
  {
    "id": "pet-287",
    "library": "pet",
    "word": "because",
    "meaning": "因为",
    "example": "I learned the word \"because\" today.",
    "part": "conj"
  },
  {
    "id": "pet-288",
    "library": "pet",
    "word": "blogger",
    "meaning": "写博客的人；博客使用者",
    "example": "I learned the word \"blogger\" today.",
    "part": "n"
  },
  {
    "id": "pet-289",
    "library": "pet",
    "word": "because of",
    "meaning": "因为",
    "example": "Try to use \"because of\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-290",
    "library": "pet",
    "word": "become",
    "meaning": "变成,变得；适合",
    "example": "I learned the word \"become\" today.",
    "part": "v"
  },
  {
    "id": "pet-291",
    "library": "pet",
    "word": "blood",
    "meaning": "血,血统,流血,气质,生命；使出血,用血涂",
    "example": "I learned the word \"blood\" today.",
    "part": "n"
  },
  {
    "id": "pet-292",
    "library": "pet",
    "word": "bed",
    "meaning": "床,睡眠处,河床,底座,路基,一层；提供宿处,栽种,安装；睡,形成坚实的一层",
    "example": "I learned the word \"bed\" today.",
    "part": "n"
  },
  {
    "id": "pet-293",
    "library": "pet",
    "word": "blouse",
    "meaning": "宽松的上衣",
    "example": "I learned the word \"blouse\" today.",
    "part": "n"
  },
  {
    "id": "pet-294",
    "library": "pet",
    "word": "bedroom",
    "meaning": "卧室",
    "example": "I learned the word \"bedroom\" today.",
    "part": "n"
  },
  {
    "id": "pet-295",
    "library": "pet",
    "word": "blow",
    "meaning": "吹,打击,殴打,花开；吹,风吹,吹响,开花",
    "example": "I learned the word \"blow\" today.",
    "part": "v"
  },
  {
    "id": "pet-296",
    "library": "pet",
    "word": "bee",
    "meaning": "蜜蜂,聚会",
    "example": "I learned the word \"bee\" today.",
    "part": "n"
  },
  {
    "id": "pet-297",
    "library": "pet",
    "word": "blue",
    "meaning": "蓝色；a.蓝色的,下流的,忧郁的；染成蓝色",
    "example": "I learned the word \"blue\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-298",
    "library": "pet",
    "word": "beef",
    "meaning": "牛肉,肌肉；养(牛),宰(牛)；抱怨,告发",
    "example": "I learned the word \"beef\" today.",
    "part": "n"
  },
  {
    "id": "pet-299",
    "library": "pet",
    "word": "board",
    "meaning": "木板,甲板,膳食,会议桌；乘船,供膳食,用板覆盖；搭伙",
    "example": "I learned the word \"board\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-300",
    "library": "pet",
    "word": "before",
    "meaning": "在...之前；在...之前；在前",
    "example": "I learned the word \"before\" today.",
    "part": "prep, adv & conj"
  },
  {
    "id": "pet-301",
    "library": "pet",
    "word": "board game",
    "meaning": "用棋盘玩的游戏",
    "example": "Try to use \"board game\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-302",
    "library": "pet",
    "word": "boarding pass",
    "meaning": "登机卡,飞机票",
    "example": "Try to use \"boarding pass\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-303",
    "library": "pet",
    "word": "breath",
    "meaning": "呼吸,气息,瞬间；[医]呼气,呵气,口气,呼吸",
    "example": "I learned the word \"breath\" today.",
    "part": "n"
  },
  {
    "id": "pet-304",
    "library": "pet",
    "word": "boat",
    "meaning": "船；乘船；以船运",
    "example": "I learned the word \"boat\" today.",
    "part": "n"
  },
  {
    "id": "pet-305",
    "library": "pet",
    "word": "breathe",
    "meaning": "呼吸,生存,低语；呼吸,使喘息,发散,低声说",
    "example": "I learned the word \"breathe\" today.",
    "part": "v"
  },
  {
    "id": "pet-306",
    "library": "pet",
    "word": "body",
    "meaning": "身体,人,尸体,主要部分,团体；赋以形体；[计]体",
    "example": "I learned the word \"body\" today.",
    "part": "n"
  },
  {
    "id": "pet-307",
    "library": "pet",
    "word": "breeze",
    "meaning": "微风,煤屑,轻而易举的事；吹微风,逃走",
    "example": "I learned the word \"breeze\" today.",
    "part": "n"
  },
  {
    "id": "pet-308",
    "library": "pet",
    "word": "boil",
    "meaning": "煮沸,沸腾,疖；煮沸,激动",
    "example": "I learned the word \"boil\" today.",
    "part": "v"
  },
  {
    "id": "pet-309",
    "library": "pet",
    "word": "bride",
    "meaning": "新娘",
    "example": "I learned the word \"bride\" today.",
    "part": "n"
  },
  {
    "id": "pet-310",
    "library": "pet",
    "word": "boiled",
    "meaning": "a.煮沸的,(非正式)喝醉的,烧滚的",
    "example": "I learned the word \"boiled\" today.",
    "part": "adj"
  },
  {
    "id": "pet-311",
    "library": "pet",
    "word": "bridge",
    "meaning": "桥,舰桥,桥梁,桥牌；架桥于,跨越；[计]桥,网桥,桥接器",
    "example": "I learned the word \"bridge\" today.",
    "part": "n"
  },
  {
    "id": "pet-312",
    "library": "pet",
    "word": "bold",
    "meaning": "a.大胆的；粗体；[计]粗体",
    "example": "I learned the word \"bold\" today.",
    "part": "adj"
  },
  {
    "id": "pet-313",
    "library": "pet",
    "word": "brief",
    "meaning": "摘要,简报；a.简短的,短暂的；对...作简报,摘要,节录",
    "example": "I learned the word \"brief\" today.",
    "part": "adj"
  },
  {
    "id": "pet-314",
    "library": "pet",
    "word": "bomb",
    "meaning": "炸弹；轰炸,投弹于；失败",
    "example": "I learned the word \"bomb\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-315",
    "library": "pet",
    "word": "bright",
    "meaning": "a.明亮的,聪明的,鲜明的,欢快的；明亮地,欢快地",
    "example": "I learned the word \"bright\" today.",
    "part": "adj"
  },
  {
    "id": "pet-316",
    "library": "pet",
    "word": "bone",
    "meaning": "骨头,骨,骨制品；剔骨；专心致志",
    "example": "I learned the word \"bone\" today.",
    "part": "n"
  },
  {
    "id": "pet-317",
    "library": "pet",
    "word": "brilliant",
    "meaning": "a.光辉的,灿烂的,有才气的；[机]亮的",
    "example": "I learned the word \"brilliant\" today.",
    "part": "adj"
  },
  {
    "id": "pet-318",
    "library": "pet",
    "word": "book",
    "meaning": "书,书籍,帐簿,名册,工作簿；登记,预订；[计]工作簿",
    "example": "I learned the word \"book\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-319",
    "library": "pet",
    "word": "bring",
    "meaning": "带来,产生,促使,提出；生产",
    "example": "I learned the word \"bring\" today.",
    "part": "v"
  },
  {
    "id": "pet-320",
    "library": "pet",
    "word": "bookcase",
    "meaning": "书架,书柜",
    "example": "I learned the word \"bookcase\" today.",
    "part": "n"
  },
  {
    "id": "pet-321",
    "library": "pet",
    "word": "bring up",
    "meaning": "教育,培养,提出,停下,呕出",
    "example": "Try to use \"bring up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-322",
    "library": "pet",
    "word": "booking",
    "meaning": "预约演出合同；[机]书型模法",
    "example": "I learned the word \"booking\" today.",
    "part": "n"
  },
  {
    "id": "pet-323",
    "library": "pet",
    "word": "broad",
    "meaning": "a.宽广的,辽阔的,广大的,显著的；宽阔地；宽阔部分",
    "example": "I learned the word \"broad\" today.",
    "part": "adj"
  },
  {
    "id": "pet-324",
    "library": "pet",
    "word": "booking office",
    "meaning": "售票处；[经]订票处",
    "example": "Try to use \"booking office\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-325",
    "library": "pet",
    "word": "broccoli",
    "meaning": "花椰菜",
    "example": "I learned the word \"broccoli\" today.",
    "part": "n"
  },
  {
    "id": "pet-326",
    "library": "pet",
    "word": "bookshelf",
    "meaning": "书架",
    "example": "I learned the word \"bookshelf\" today.",
    "part": "n"
  },
  {
    "id": "pet-327",
    "library": "pet",
    "word": "brochure",
    "meaning": "小册子,小册",
    "example": "I learned the word \"brochure\" today.",
    "part": "n"
  },
  {
    "id": "pet-328",
    "library": "pet",
    "word": "bookshop",
    "meaning": "书店",
    "example": "I learned the word \"bookshop\" today.",
    "part": "n"
  },
  {
    "id": "pet-329",
    "library": "pet",
    "word": "broken",
    "meaning": "a.坏掉的,打破的,断掉的；break的过去分词",
    "example": "I learned the word \"broken\" today.",
    "part": "adj"
  },
  {
    "id": "pet-330",
    "library": "pet",
    "word": "bookstore",
    "meaning": "书店",
    "example": "I learned the word \"bookstore\" today.",
    "part": "n"
  },
  {
    "id": "pet-331",
    "library": "pet",
    "word": "brother",
    "meaning": "兄弟",
    "example": "I learned the word \"brother\" today.",
    "part": "n"
  },
  {
    "id": "pet-332",
    "library": "pet",
    "word": "boot",
    "meaning": "长靴,踢,解雇,效用；使穿靴,踢,解雇,有用；[计]引导,自举",
    "example": "I learned the word \"boot\" today.",
    "part": "n"
  },
  {
    "id": "pet-333",
    "library": "pet",
    "word": "brown",
    "meaning": "褐色；a.褐色的；(使)变褐色",
    "example": "I learned the word \"brown\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-334",
    "library": "pet",
    "word": "brush",
    "meaning": "刷子,毛笔,争吵；刷；擦过,掠过",
    "example": "I learned the word \"brush\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-335",
    "library": "pet",
    "word": "bucket",
    "meaning": "桶；[计]存储桶；桶",
    "example": "I learned the word \"bucket\" today.",
    "part": "n"
  },
  {
    "id": "pet-336",
    "library": "pet",
    "word": "bug",
    "meaning": "错误,虫,病菌,缺陷,窃听器,癖好,防盗报警器,双座小汽车,要人；装防盗报警器,装窃听器,激怒；捉虫,暴突",
    "example": "I learned the word \"bug\" today.",
    "part": "n"
  },
  {
    "id": "pet-337",
    "library": "pet",
    "word": "border",
    "meaning": "边缘,边境,边界,花坛；在...上镶边,接近；接界,近似",
    "example": "I learned the word \"border\" today.",
    "part": "n"
  },
  {
    "id": "pet-338",
    "library": "pet",
    "word": "bored",
    "meaning": "a.无聊的；烦人的；无趣的",
    "example": "I learned the word \"bored\" today.",
    "part": "adj"
  },
  {
    "id": "pet-339",
    "library": "pet",
    "word": "boring",
    "meaning": "a.烦人的,无聊的,无趣的；[机]成孔期,搪孔",
    "example": "I learned the word \"boring\" today.",
    "part": "adj"
  },
  {
    "id": "pet-340",
    "library": "pet",
    "word": "build",
    "meaning": "建立,建筑；构造,体格",
    "example": "I learned the word \"build\" today.",
    "part": "v"
  },
  {
    "id": "pet-341",
    "library": "pet",
    "word": "building",
    "meaning": "建筑物,建筑；[法]营造,建筑,建筑物",
    "example": "I learned the word \"building\" today.",
    "part": "n"
  },
  {
    "id": "pet-342",
    "library": "pet",
    "word": "born",
    "meaning": "a.天生的；bear的过去分词",
    "example": "I learned the word \"born\" today.",
    "part": "adj"
  },
  {
    "id": "pet-343",
    "library": "pet",
    "word": "borrow",
    "meaning": "借,借入,借用；借；[计]借位",
    "example": "I learned the word \"borrow\" today.",
    "part": "v"
  },
  {
    "id": "pet-344",
    "library": "pet",
    "word": "bulb",
    "meaning": "球茎,电灯泡；[医]球,鳞茎,球茎",
    "example": "I learned the word \"bulb\" today.",
    "part": "n"
  },
  {
    "id": "pet-345",
    "library": "pet",
    "word": "boss",
    "meaning": "老板,上司,岩瘤,浮雕,母牛；指挥,控制,浮雕",
    "example": "I learned the word \"boss\" today.",
    "part": "n"
  },
  {
    "id": "pet-346",
    "library": "pet",
    "word": "both",
    "meaning": "a.两者的；两者都；两者",
    "example": "I learned the word \"both\" today.",
    "part": "pron & det"
  },
  {
    "id": "pet-347",
    "library": "pet",
    "word": "bull",
    "meaning": "公牛；[法]买方,买空者",
    "example": "I learned the word \"bull\" today.",
    "part": "n"
  },
  {
    "id": "pet-348",
    "library": "pet",
    "word": "bother",
    "meaning": "烦扰,迷惑；烦恼,操心；麻烦,纠纷,讨厌的人",
    "example": "I learned the word \"bother\" today.",
    "part": "v"
  },
  {
    "id": "pet-349",
    "library": "pet",
    "word": "bunch",
    "meaning": "串,束；[医]骨肿块(马)",
    "example": "I learned the word \"bunch\" today.",
    "part": "n"
  },
  {
    "id": "pet-350",
    "library": "pet",
    "word": "burger",
    "meaning": "汉堡包（等于hamburger）",
    "example": "I learned the word \"burger\" today.",
    "part": "n"
  },
  {
    "id": "pet-351",
    "library": "pet",
    "word": "burn",
    "meaning": "烧,烧毁,烧伤；燃烧,发热,烧毁；烧伤,烙印",
    "example": "I learned the word \"burn\" today.",
    "part": "v"
  },
  {
    "id": "pet-352",
    "library": "pet",
    "word": "burning",
    "meaning": "a.燃烧的,象燃烧一样的；烧,燃烧",
    "example": "I learned the word \"burning\" today.",
    "part": "adj"
  },
  {
    "id": "pet-353",
    "library": "pet",
    "word": "bury",
    "meaning": "埋葬,埋藏",
    "example": "I learned the word \"bury\" today.",
    "part": "v"
  },
  {
    "id": "pet-354",
    "library": "pet",
    "word": "bus",
    "meaning": "公共汽车；[计]总线；汇流条",
    "example": "I learned the word \"bus\" today.",
    "part": "n"
  },
  {
    "id": "pet-355",
    "library": "pet",
    "word": "bottle",
    "meaning": "瓶子,酒瓶；装瓶,抑制,围困",
    "example": "I learned the word \"bottle\" today.",
    "part": "n"
  },
  {
    "id": "pet-356",
    "library": "pet",
    "word": "bottom",
    "meaning": "底部；a.底部的；给...装底,查明真相",
    "example": "I learned the word \"bottom\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-357",
    "library": "pet",
    "word": "business",
    "meaning": "生意,事情,业务,商业,商行,职责；[经]企业,商业,营业",
    "example": "I learned the word \"business\" today.",
    "part": "n"
  },
  {
    "id": "pet-358",
    "library": "pet",
    "word": "bowl",
    "meaning": "碗,木球,大酒杯；滚木球,快而稳地行驶",
    "example": "I learned the word \"bowl\" today.",
    "part": "n"
  },
  {
    "id": "pet-359",
    "library": "pet",
    "word": "businessman",
    "meaning": "商人,实业家,工商业家",
    "example": "I learned the word \"businessman\" today.",
    "part": "n"
  },
  {
    "id": "pet-360",
    "library": "pet",
    "word": "box",
    "meaning": "盒子,箱,方框,一巴掌；装...入盒中,装箱,打耳光；拳击",
    "example": "I learned the word \"box\" today.",
    "part": "n"
  },
  {
    "id": "pet-361",
    "library": "pet",
    "word": "businesswoman",
    "meaning": "商人,办理实务的人,经商者",
    "example": "I learned the word \"businesswoman\" today.",
    "part": "n"
  },
  {
    "id": "pet-362",
    "library": "pet",
    "word": "bus station",
    "meaning": "公交车站",
    "example": "Try to use \"bus station\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-363",
    "library": "pet",
    "word": "boy",
    "meaning": "男孩；[法]男孩,少年,儿子",
    "example": "I learned the word \"boy\" today.",
    "part": "n"
  },
  {
    "id": "pet-364",
    "library": "pet",
    "word": "boyfriend",
    "meaning": "男朋友",
    "example": "I learned the word \"boyfriend\" today.",
    "part": "n"
  },
  {
    "id": "pet-365",
    "library": "pet",
    "word": "bus stop",
    "meaning": "公共汽车站",
    "example": "Try to use \"bus stop\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-366",
    "library": "pet",
    "word": "bracelet",
    "meaning": "手镯；[医]手镯,腕带,腕纹(掌侧横列腕部的线纹)",
    "example": "I learned the word \"bracelet\" today.",
    "part": "n"
  },
  {
    "id": "pet-367",
    "library": "pet",
    "word": "busy",
    "meaning": "a.忙碌的,热闹的,没空的；使忙；忙碌",
    "example": "I learned the word \"busy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-368",
    "library": "pet",
    "word": "brain",
    "meaning": "脑；打碎脑部",
    "example": "I learned the word \"brain\" today.",
    "part": "n"
  },
  {
    "id": "pet-369",
    "library": "pet",
    "word": "but",
    "meaning": "除了；但是；仅仅",
    "example": "I learned the word \"but\" today.",
    "part": "conj & prep"
  },
  {
    "id": "pet-370",
    "library": "pet",
    "word": "brake",
    "meaning": "刹车,阻碍,丛林；刹车",
    "example": "I learned the word \"brake\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-371",
    "library": "pet",
    "word": "butcher",
    "meaning": "屠夫,肉商,小贩；屠宰,屠杀",
    "example": "I learned the word \"butcher\" today.",
    "part": "n"
  },
  {
    "id": "pet-372",
    "library": "pet",
    "word": "butter",
    "meaning": "奶油,黄油；涂黄油于",
    "example": "I learned the word \"butter\" today.",
    "part": "n"
  },
  {
    "id": "pet-373",
    "library": "pet",
    "word": "branch",
    "meaning": "树枝,支店,支流,分部；分支,出枝；分割,用枝状叶脉刺绣花纹装饰",
    "example": "I learned the word \"branch\" today.",
    "part": "n"
  },
  {
    "id": "pet-374",
    "library": "pet",
    "word": "brand new",
    "meaning": "崭新的,全新的",
    "example": "Try to use \"brand new\" in a short sentence.",
    "part": "adj"
  },
  {
    "id": "pet-375",
    "library": "pet",
    "word": "butterfly",
    "meaning": "蝴蝶；[医]蝶式棉块,翼形皮癣,纸蝶",
    "example": "I learned the word \"butterfly\" today.",
    "part": "n"
  },
  {
    "id": "pet-376",
    "library": "pet",
    "word": "brave",
    "meaning": "a.勇敢的,美好的,华丽的；勇敢者；勇敢地面对",
    "example": "I learned the word \"brave\" today.",
    "part": "adj"
  },
  {
    "id": "pet-377",
    "library": "pet",
    "word": "button",
    "meaning": "钮扣,按钮；扣住；钉钮扣于,扣紧",
    "example": "I learned the word \"button\" today.",
    "part": "n"
  },
  {
    "id": "pet-378",
    "library": "pet",
    "word": "bread",
    "meaning": "面包,生计,食物；裹以面包屑",
    "example": "I learned the word \"bread\" today.",
    "part": "n"
  },
  {
    "id": "pet-379",
    "library": "pet",
    "word": "buy",
    "meaning": "买,获得；买；购买,买得的东西",
    "example": "I learned the word \"buy\" today.",
    "part": "v"
  },
  {
    "id": "pet-380",
    "library": "pet",
    "word": "buyer",
    "meaning": "买主,买方；[经]买主,买方,买手",
    "example": "I learned the word \"buyer\" today.",
    "part": "n"
  },
  {
    "id": "pet-381",
    "library": "pet",
    "word": "break",
    "meaning": "休息,中断,破裂处,绝交,破晓,突变；打破,弄破,弄坏,破坏,违反,打断,削弱,放弃；破碎,决裂,破晓,突变,变弱,暂停",
    "example": "I learned the word \"break\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-382",
    "library": "pet",
    "word": "by",
    "meaning": "被,经,由,在...之旁；经过,在近处",
    "example": "I learned the word \"by\" today.",
    "part": "prep"
  },
  {
    "id": "pet-383",
    "library": "pet",
    "word": "break down",
    "meaning": "毁掉,制服,压倒,倒塌,垮掉,分解；[化]发生故障",
    "example": "Try to use \"break down\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-384",
    "library": "pet",
    "word": "by accident",
    "meaning": "偶然",
    "example": "Try to use \"by accident\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-385",
    "library": "pet",
    "word": "breakfast",
    "meaning": "早餐",
    "example": "I learned the word \"breakfast\" today.",
    "part": "n"
  },
  {
    "id": "pet-386",
    "library": "pet",
    "word": "by hand",
    "meaning": "用手",
    "example": "Try to use \"by hand\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-387",
    "library": "pet",
    "word": "by mistake",
    "meaning": "由于差错",
    "example": "Try to use \"by mistake\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-388",
    "library": "pet",
    "word": "break in",
    "meaning": "训练,使经使用逐渐合用,闯入,打断",
    "example": "Try to use \"break in\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-389",
    "library": "pet",
    "word": "by name",
    "meaning": "名叫...,用名字,凭名字",
    "example": "Try to use \"by name\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-390",
    "library": "pet",
    "word": "bye",
    "meaning": "interj.再会,回头见；[计]结束命令",
    "example": "I learned the word \"bye\" today.",
    "part": "exclam"
  },
  {
    "id": "pet-391",
    "library": "pet",
    "word": "break up",
    "meaning": "打碎,破碎,分裂,分解,驱散,结束,衰退,衰落,变坏",
    "example": "Try to use \"break up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-392",
    "library": "pet",
    "word": "carry",
    "meaning": "进位,射程,运载；携带,运送,支持,传送,包含；被携带,能达到",
    "example": "I learned the word \"carry\" today.",
    "part": "v"
  },
  {
    "id": "pet-393",
    "library": "pet",
    "word": "carry on",
    "meaning": "继续开展,行为愚蠢(或越轨)；[经]继续发展(经营)下去",
    "example": "Try to use \"carry on\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-394",
    "library": "pet",
    "word": "cab",
    "meaning": "出租车,出租汽车,出租马车；乘出租马车(或汽车)",
    "example": "I learned the word \"cab\" today.",
    "part": "n"
  },
  {
    "id": "pet-395",
    "library": "pet",
    "word": "carry out",
    "meaning": "进行,实现,贯彻,执行；[经]进行(到底),执行,落实",
    "example": "Try to use \"carry out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-396",
    "library": "pet",
    "word": "cabbage",
    "meaning": "卷心菜；[医]卷心菜,甘兰",
    "example": "I learned the word \"cabbage\" today.",
    "part": "n"
  },
  {
    "id": "pet-397",
    "library": "pet",
    "word": "cabin",
    "meaning": "小屋,客舱；关在小屋",
    "example": "I learned the word \"cabin\" today.",
    "part": "n"
  },
  {
    "id": "pet-398",
    "library": "pet",
    "word": "cabinet",
    "meaning": "橱柜,内阁；a.内阁的,细木工做的；[计]机柜",
    "example": "I learned the word \"cabinet\" today.",
    "part": "n"
  },
  {
    "id": "pet-399",
    "library": "pet",
    "word": "cartoon",
    "meaning": "卡通画,漫画；画漫画",
    "example": "I learned the word \"cartoon\" today.",
    "part": "n"
  },
  {
    "id": "pet-400",
    "library": "pet",
    "word": "cable",
    "meaning": "电缆,海底电报,缆,索；打海底电报；发海底电报,缚住",
    "example": "I learned the word \"cable\" today.",
    "part": "n"
  },
  {
    "id": "pet-401",
    "library": "pet",
    "word": "case",
    "meaning": "情形,情况,箱,容器,事实,病例,案例,框子；装箱,包盖",
    "example": "I learned the word \"case\" today.",
    "part": "n"
  },
  {
    "id": "pet-402",
    "library": "pet",
    "word": "cafe",
    "meaning": "咖啡馆,酒店",
    "example": "I learned the word \"cafe\" today.",
    "part": "n",
    "aliases": [
      "cafe/cafe"
    ]
  },
  {
    "id": "pet-403",
    "library": "pet",
    "word": "cafeteria",
    "meaning": "自助餐厅；[经]自助餐厅",
    "example": "I learned the word \"cafeteria\" today.",
    "part": "n"
  },
  {
    "id": "pet-404",
    "library": "pet",
    "word": "cage",
    "meaning": "笼,牢房,战俘营；关进笼内",
    "example": "I learned the word \"cage\" today.",
    "part": "n"
  },
  {
    "id": "pet-405",
    "library": "pet",
    "word": "cash",
    "meaning": "现金；兑现",
    "example": "I learned the word \"cash\" today.",
    "part": "n"
  },
  {
    "id": "pet-406",
    "library": "pet",
    "word": "cake",
    "meaning": "蛋糕,块,饼；使结块,加块状物于；结块",
    "example": "I learned the word \"cake\" today.",
    "part": "n"
  },
  {
    "id": "pet-407",
    "library": "pet",
    "word": "cashpoint",
    "meaning": "[经]一种电脑化的付现机",
    "example": "I learned the word \"cashpoint\" today.",
    "part": "n"
  },
  {
    "id": "pet-408",
    "library": "pet",
    "word": "calculator",
    "meaning": "计算者,计算器；[计]计算器",
    "example": "I learned the word \"calculator\" today.",
    "part": "n"
  },
  {
    "id": "pet-409",
    "library": "pet",
    "word": "castle",
    "meaning": "城堡,象棋中的车；置于城堡中,盘踞于",
    "example": "I learned the word \"castle\" today.",
    "part": "n"
  },
  {
    "id": "pet-410",
    "library": "pet",
    "word": "calendar",
    "meaning": "日历,日程表；列入表中；[计]日历",
    "example": "I learned the word \"calendar\" today.",
    "part": "n"
  },
  {
    "id": "pet-411",
    "library": "pet",
    "word": "casual",
    "meaning": "a.偶然的,不经意的,便装的；临时工,待命士兵",
    "example": "I learned the word \"casual\" today.",
    "part": "adj"
  },
  {
    "id": "pet-412",
    "library": "pet",
    "word": "calf",
    "meaning": "小牛,小牛皮,腓肠；[医]腓肠",
    "example": "I learned the word \"calf\" today.",
    "part": "n"
  },
  {
    "id": "pet-413",
    "library": "pet",
    "word": "call",
    "meaning": "呼叫,访问,打电话,号召,召集,要求；呼叫,召集,打电话；叫喊,访问,叫牌",
    "example": "I learned the word \"call\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-414",
    "library": "pet",
    "word": "cat",
    "meaning": "猫,恶妇；呕吐；计算机辅助教育,计算机辅助测试,计算机辅助翻译,计算机辅助排版",
    "example": "I learned the word \"cat\" today.",
    "part": "n"
  },
  {
    "id": "pet-415",
    "library": "pet",
    "word": "call for",
    "meaning": "叫(某人)来,要求,为...叫喊,为...叫",
    "example": "Try to use \"call for\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-416",
    "library": "pet",
    "word": "catch",
    "meaning": "捕捉,陷阱,捕捉之物,抓,拉手；捕捉,赶上,感染,听清楚；抓住,燃着",
    "example": "I learned the word \"catch\" today.",
    "part": "v"
  },
  {
    "id": "pet-417",
    "library": "pet",
    "word": "cathedral",
    "meaning": "大教堂",
    "example": "I learned the word \"cathedral\" today.",
    "part": "n"
  },
  {
    "id": "pet-418",
    "library": "pet",
    "word": "call in",
    "meaning": "召集,召来,来访；[电]叫入",
    "example": "Try to use \"call in\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-419",
    "library": "pet",
    "word": "cattle",
    "meaning": "牛,家畜；[法]家畜",
    "example": "I learned the word \"cattle\" today.",
    "part": "n"
  },
  {
    "id": "pet-420",
    "library": "pet",
    "word": "cave",
    "meaning": "洞,穴；凹陷,塌落；挖洞,使凹陷,损坏...的基础",
    "example": "I learned the word \"cave\" today.",
    "part": "n"
  },
  {
    "id": "pet-421",
    "library": "pet",
    "word": "calm",
    "meaning": "平稳,风平浪静；a.平静的,冷静的；平静下来,镇静",
    "example": "I learned the word \"calm\" today.",
    "part": "adj"
  },
  {
    "id": "pet-422",
    "library": "pet",
    "word": "CD",
    "meaning": "镭射碟,镭射唱片；[计]光盘,压缩盘,载波检测,DOS内部命令:显示或改变当前目录",
    "example": "I learned the word \"CD\" today.",
    "part": "n"
  },
  {
    "id": "pet-423",
    "library": "pet",
    "word": "camel",
    "meaning": "骆驼,打捞浮筒",
    "example": "I learned the word \"camel\" today.",
    "part": "n"
  },
  {
    "id": "pet-424",
    "library": "pet",
    "word": "CD player",
    "meaning": "激光唱机；CD播放器",
    "example": "Try to use \"CD player\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-425",
    "library": "pet",
    "word": "camera",
    "meaning": "照相机,摄影机,密谈室,暗箱；[计]摄影",
    "example": "I learned the word \"camera\" today.",
    "part": "n"
  },
  {
    "id": "pet-426",
    "library": "pet",
    "word": "ceiling",
    "meaning": "天花板；[经]顶点,顶线,上限",
    "example": "I learned the word \"ceiling\" today.",
    "part": "n"
  },
  {
    "id": "pet-427",
    "library": "pet",
    "word": "camp",
    "meaning": "露营,帐篷；露营,扎营；使扎营",
    "example": "I learned the word \"camp\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-428",
    "library": "pet",
    "word": "celebrate",
    "meaning": "庆祝,祝贺,举行",
    "example": "I learned the word \"celebrate\" today.",
    "part": "v"
  },
  {
    "id": "pet-429",
    "library": "pet",
    "word": "camping",
    "meaning": "野营,露营",
    "example": "I learned the word \"camping\" today.",
    "part": "n"
  },
  {
    "id": "pet-430",
    "library": "pet",
    "word": "celebration",
    "meaning": "庆祝,庆典",
    "example": "I learned the word \"celebration\" today.",
    "part": "n"
  },
  {
    "id": "pet-431",
    "library": "pet",
    "word": "campsite",
    "meaning": "营地",
    "example": "I learned the word \"campsite\" today.",
    "part": "n"
  },
  {
    "id": "pet-432",
    "library": "pet",
    "word": "celebrity",
    "meaning": "名声,名人",
    "example": "I learned the word \"celebrity\" today.",
    "part": "n"
  },
  {
    "id": "pet-433",
    "library": "pet",
    "word": "can",
    "meaning": "装罐；罐头,容器；aux.能,可以",
    "example": "I learned the word \"can\" today.",
    "part": "n & mv"
  },
  {
    "id": "pet-434",
    "library": "pet",
    "word": "cell phone",
    "meaning": "手机",
    "example": "Try to use \"cell phone\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-435",
    "library": "pet",
    "word": "canal",
    "meaning": "运河,水道,管,沟渠；开运河",
    "example": "I learned the word \"canal\" today.",
    "part": "n"
  },
  {
    "id": "pet-436",
    "library": "pet",
    "word": "cent",
    "meaning": "分；[经]美分",
    "example": "I learned the word \"cent\" today.",
    "part": "n"
  },
  {
    "id": "pet-437",
    "library": "pet",
    "word": "cancel",
    "meaning": "取消,撤消,盖销(邮票)；取消,删去,抵销,盖销；相互抵销",
    "example": "I learned the word \"cancel\" today.",
    "part": "v"
  },
  {
    "id": "pet-438",
    "library": "pet",
    "word": "candidate",
    "meaning": "候选人,投考者；[法]候选,候补者",
    "example": "I learned the word \"candidate\" today.",
    "part": "n"
  },
  {
    "id": "pet-439",
    "library": "pet",
    "word": "candle",
    "meaning": "蜡烛；对着光检查",
    "example": "I learned the word \"candle\" today.",
    "part": "n"
  },
  {
    "id": "pet-440",
    "library": "pet",
    "word": "central",
    "meaning": "a.中央的,重要的；[医]中央的,中心的,中枢的",
    "example": "I learned the word \"central\" today.",
    "part": "adj"
  },
  {
    "id": "pet-441",
    "library": "pet",
    "word": "candy",
    "meaning": "糖果,冰糖；用糖煮,使结晶为砂糖；结晶为砂糖",
    "example": "I learned the word \"candy\" today.",
    "part": "n"
  },
  {
    "id": "pet-442",
    "library": "pet",
    "word": "central heating",
    "meaning": "集中采暖(法)",
    "example": "Try to use \"central heating\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-443",
    "library": "pet",
    "word": "canteen",
    "meaning": "水壶,军中俱乐部,临时流动餐馆,小卖部",
    "example": "I learned the word \"canteen\" today.",
    "part": "n"
  },
  {
    "id": "pet-444",
    "library": "pet",
    "word": "centre",
    "meaning": "中心,中心点,中锋；a.中央的,位在正中的；集中,定中心",
    "example": "I learned the word \"centre\" today.",
    "part": "n",
    "aliases": [
      "center",
      "centre/center"
    ]
  },
  {
    "id": "pet-445",
    "library": "pet",
    "word": "cap",
    "meaning": "盖子,帽子；戴帽子,覆盖,胜过；脱帽致意",
    "example": "I learned the word \"cap\" today.",
    "part": "n"
  },
  {
    "id": "pet-446",
    "library": "pet",
    "word": "century",
    "meaning": "世纪,百年",
    "example": "I learned the word \"century\" today.",
    "part": "n"
  },
  {
    "id": "pet-447",
    "library": "pet",
    "word": "capital",
    "meaning": "首都,大写字母,资本；a.首都的,重要的",
    "example": "I learned the word \"capital\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-448",
    "library": "pet",
    "word": "cereal",
    "meaning": "谷类食品,谷类植物；a.谷类的",
    "example": "I learned the word \"cereal\" today.",
    "part": "n"
  },
  {
    "id": "pet-449",
    "library": "pet",
    "word": "ceremony",
    "meaning": "典礼,仪式,礼节；[法]典礼,仪式",
    "example": "I learned the word \"ceremony\" today.",
    "part": "n"
  },
  {
    "id": "pet-450",
    "library": "pet",
    "word": "certain",
    "meaning": "a.确定的,某一个的,必然的；[法]确凿的,无疑的,可靠的",
    "example": "I learned the word \"certain\" today.",
    "part": "adj"
  },
  {
    "id": "pet-451",
    "library": "pet",
    "word": "captain",
    "meaning": "船长,指挥官,海军上校,首领；率领,指挥",
    "example": "I learned the word \"captain\" today.",
    "part": "n"
  },
  {
    "id": "pet-452",
    "library": "pet",
    "word": "certificate",
    "meaning": "证书,证明书；发给证明书,用证书批准,用证书证明",
    "example": "I learned the word \"certificate\" today.",
    "part": "n"
  },
  {
    "id": "pet-453",
    "library": "pet",
    "word": "car",
    "meaning": "汽车,客车；[机]车",
    "example": "I learned the word \"car\" today.",
    "part": "n"
  },
  {
    "id": "pet-454",
    "library": "pet",
    "word": "chain",
    "meaning": "链,枷锁,束缚；用铁练锁住,束缚,囚禁",
    "example": "I learned the word \"chain\" today.",
    "part": "n"
  },
  {
    "id": "pet-455",
    "library": "pet",
    "word": "card",
    "meaning": "卡片,纸牌,节目单,明信片,梳棉机；备置卡片,记于卡片上,梳理；[计]卡片,卡",
    "example": "I learned the word \"card\" today.",
    "part": "n"
  },
  {
    "id": "pet-456",
    "library": "pet",
    "word": "chair",
    "meaning": "椅子,显要的席位,主席；使入座,使就任要职",
    "example": "I learned the word \"chair\" today.",
    "part": "n"
  },
  {
    "id": "pet-457",
    "library": "pet",
    "word": "challenge",
    "meaning": "挑战,盘问；向...挑战,要求,怀疑；挑战,对(证据等)表示异议",
    "example": "I learned the word \"challenge\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-458",
    "library": "pet",
    "word": "challenging",
    "meaning": "a.挑战的,引起争论的",
    "example": "I learned the word \"challenging\" today.",
    "part": "adj"
  },
  {
    "id": "pet-459",
    "library": "pet",
    "word": "champion",
    "meaning": "冠军,拥护者,战士；保卫,拥护；a.优胜的",
    "example": "I learned the word \"champion\" today.",
    "part": "n"
  },
  {
    "id": "pet-460",
    "library": "pet",
    "word": "championship",
    "meaning": "冠军身份,冠军称号,捍卫",
    "example": "I learned the word \"championship\" today.",
    "part": "n"
  },
  {
    "id": "pet-461",
    "library": "pet",
    "word": "cardboard",
    "meaning": "薄纸板；[化]咭纸；特等纸板",
    "example": "I learned the word \"cardboard\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-462",
    "library": "pet",
    "word": "chance",
    "meaning": "机会,意外,可能性；偶然发生；冒险",
    "example": "I learned the word \"chance\" today.",
    "part": "n"
  },
  {
    "id": "pet-463",
    "library": "pet",
    "word": "care",
    "meaning": "小心,照料,忧虑；关心,介意；在意,喜欢",
    "example": "I learned the word \"care\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-464",
    "library": "pet",
    "word": "change",
    "meaning": "变化,找回的零钱,找头,更换；改变,更换,兑换",
    "example": "I learned the word \"change\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-465",
    "library": "pet",
    "word": "changing room",
    "meaning": "更衣室",
    "example": "Try to use \"changing room\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-466",
    "library": "pet",
    "word": "channel",
    "meaning": "海峡,航道,频道；引导,在...上挖沟,形成河道；[计]信道,通道",
    "example": "I learned the word \"channel\" today.",
    "part": "n"
  },
  {
    "id": "pet-467",
    "library": "pet",
    "word": "chapter",
    "meaning": "章,篇,重要章节；[计]章；段",
    "example": "I learned the word \"chapter\" today.",
    "part": "n"
  },
  {
    "id": "pet-468",
    "library": "pet",
    "word": "career",
    "meaning": "事业,生涯,成功；[法]职业,专业,履历",
    "example": "I learned the word \"career\" today.",
    "part": "n"
  },
  {
    "id": "pet-469",
    "library": "pet",
    "word": "character",
    "meaning": "个性,字符,人物,性质,品格,资格；[计]字符",
    "example": "I learned the word \"character\" today.",
    "part": "n"
  },
  {
    "id": "pet-470",
    "library": "pet",
    "word": "careful",
    "meaning": "a.小心的,谨慎的",
    "example": "I learned the word \"careful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-471",
    "library": "pet",
    "word": "charge",
    "meaning": "指控,费用,冲锋,电荷,炸药,主管,被托管人,命令；控诉,加罪于,使充满,使充电,使承担；冲锋,要价,收费",
    "example": "I learned the word \"charge\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-472",
    "library": "pet",
    "word": "charity",
    "meaning": "慈悲,博爱,慈善团体,施舍；[法]宽大,宽恕,慈善机关",
    "example": "I learned the word \"charity\" today.",
    "part": "n"
  },
  {
    "id": "pet-473",
    "library": "pet",
    "word": "careless",
    "meaning": "a.粗心的,不关心的,无忧无虑的",
    "example": "I learned the word \"careless\" today.",
    "part": "adj"
  },
  {
    "id": "pet-474",
    "library": "pet",
    "word": "car park",
    "meaning": "停车场",
    "example": "Try to use \"car park\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-475",
    "library": "pet",
    "word": "charming",
    "meaning": "a.迷人的,有吸引力的",
    "example": "I learned the word \"charming\" today.",
    "part": "adj"
  },
  {
    "id": "pet-476",
    "library": "pet",
    "word": "carpet",
    "meaning": "地毯,地毯状物；铺以地毯,铺盖",
    "example": "I learned the word \"carpet\" today.",
    "part": "n"
  },
  {
    "id": "pet-477",
    "library": "pet",
    "word": "chat",
    "meaning": "闲谈；闲谈,聊天",
    "example": "I learned the word \"chat\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-478",
    "library": "pet",
    "word": "carrot",
    "meaning": "胡萝卜；[医]胡萝卜",
    "example": "I learned the word \"carrot\" today.",
    "part": "n"
  },
  {
    "id": "pet-479",
    "library": "pet",
    "word": "chatroom",
    "meaning": "（电脑网络上的）聊天室，交谈室",
    "example": "I learned the word \"chatroom\" today.",
    "part": "n"
  },
  {
    "id": "pet-480",
    "library": "pet",
    "word": "close",
    "meaning": "结束,完结；a.靠近的,亲近的,亲密的,严密的,关闭的,狭窄的,秘密的；关,结束,使靠近,封闭,使接近",
    "example": "I learned the word \"close\" today.",
    "part": "adj, adv & v"
  },
  {
    "id": "pet-481",
    "library": "pet",
    "word": "chat show",
    "meaning": "（电视或广播电台的）访谈节目",
    "example": "Try to use \"chat show\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-482",
    "library": "pet",
    "word": "closed",
    "meaning": "a.关闭的,限于少数人的；[计]关闭指令",
    "example": "I learned the word \"closed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-483",
    "library": "pet",
    "word": "cheap",
    "meaning": "a.便宜的,不值钱的,可鄙的；便宜地",
    "example": "I learned the word \"cheap\" today.",
    "part": "adj"
  },
  {
    "id": "pet-484",
    "library": "pet",
    "word": "clothes",
    "meaning": "衣服",
    "example": "I learned the word \"clothes\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-485",
    "library": "pet",
    "word": "cheat",
    "meaning": "欺骗,作弊,骗子；欺骗,逃脱,骗取",
    "example": "I learned the word \"cheat\" today.",
    "part": "v"
  },
  {
    "id": "pet-486",
    "library": "pet",
    "word": "cloud",
    "meaning": "云,阴暗,烟雾,疑团；以云遮敝,笼罩,使黯然；乌云密布,阴沉",
    "example": "I learned the word \"cloud\" today.",
    "part": "n"
  },
  {
    "id": "pet-487",
    "library": "pet",
    "word": "check",
    "meaning": "检查,支票,阻止物,寄物牌,象棋中将军；检查,阻止,核对,寄存,托运；逐项相符,开支票",
    "example": "I learned the word \"check\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-488",
    "library": "pet",
    "word": "cloudy",
    "meaning": "a.多云的,有愁容的,云的,浑浊的；[建](混)浊的",
    "example": "I learned the word \"cloudy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-489",
    "library": "pet",
    "word": "check in",
    "meaning": "登记,报到；[法]登记,报到,住宿",
    "example": "Try to use \"check in\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-490",
    "library": "pet",
    "word": "clown",
    "meaning": "小丑,乡下人",
    "example": "I learned the word \"clown\" today.",
    "part": "n"
  },
  {
    "id": "pet-491",
    "library": "pet",
    "word": "club",
    "meaning": "俱乐部,木棍,球棒；用棍棒打,缴纳；联合起来",
    "example": "I learned the word \"club\" today.",
    "part": "n"
  },
  {
    "id": "pet-492",
    "library": "pet",
    "word": "check-in",
    "meaning": "报到,抵达,签到",
    "example": "I learned the word \"check-in\" today.",
    "part": "n"
  },
  {
    "id": "pet-493",
    "library": "pet",
    "word": "coach",
    "meaning": "四轮大马车,教练；训练,指导；坐马车旅行,作指导",
    "example": "I learned the word \"coach\" today.",
    "part": "n"
  },
  {
    "id": "pet-494",
    "library": "pet",
    "word": "check out",
    "meaning": "付帐后离开,检查,符合要求,通过；[法]离开旅馆,检验,盖章",
    "example": "Try to use \"check out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-495",
    "library": "pet",
    "word": "coast",
    "meaning": "海岸,滑坡；沿海岸而行",
    "example": "I learned the word \"coast\" today.",
    "part": "n"
  },
  {
    "id": "pet-496",
    "library": "pet",
    "word": "coat",
    "meaning": "外套；外面覆盖,给...穿外套",
    "example": "I learned the word \"coat\" today.",
    "part": "n"
  },
  {
    "id": "pet-497",
    "library": "pet",
    "word": "coconut",
    "meaning": "椰子；[医]椰子(实)",
    "example": "I learned the word \"coconut\" today.",
    "part": "n"
  },
  {
    "id": "pet-498",
    "library": "pet",
    "word": "checkout",
    "meaning": "结帐台；[计]检验",
    "example": "I learned the word \"checkout\" today.",
    "part": "n"
  },
  {
    "id": "pet-499",
    "library": "pet",
    "word": "cod",
    "meaning": "鳕,欺骗,愚弄；欺骗,愚弄",
    "example": "I learned the word \"cod\" today.",
    "part": "n"
  },
  {
    "id": "pet-500",
    "library": "pet",
    "word": "coffee",
    "meaning": "咖啡,咖啡色；[医]咖啡,咖啡豆",
    "example": "I learned the word \"coffee\" today.",
    "part": "n"
  },
  {
    "id": "pet-501",
    "library": "pet",
    "word": "cheek",
    "meaning": "颊,厚颜,脸蛋；[医]颊",
    "example": "I learned the word \"cheek\" today.",
    "part": "n"
  },
  {
    "id": "pet-502",
    "library": "pet",
    "word": "coin",
    "meaning": "硬币,金钱,货币；铸币,创造,杜撰",
    "example": "I learned the word \"coin\" today.",
    "part": "n"
  },
  {
    "id": "pet-503",
    "library": "pet",
    "word": "cheerful",
    "meaning": "a.快活的,高兴的,兴高采烈的",
    "example": "I learned the word \"cheerful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-504",
    "library": "pet",
    "word": "cola",
    "meaning": "结肠,冒号,科朗；[化]可乐果；可乐果属",
    "example": "I learned the word \"cola\" today.",
    "part": "n"
  },
  {
    "id": "pet-505",
    "library": "pet",
    "word": "cheese",
    "meaning": "乳酪；[化]干酪",
    "example": "I learned the word \"cheese\" today.",
    "part": "n"
  },
  {
    "id": "pet-506",
    "library": "pet",
    "word": "cold",
    "meaning": "感冒,寒冷；a.寒冷的,冷淡的,冷静的；完全地",
    "example": "I learned the word \"cold\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-507",
    "library": "pet",
    "word": "chef",
    "meaning": "厨师",
    "example": "I learned the word \"chef\" today.",
    "part": "n"
  },
  {
    "id": "pet-508",
    "library": "pet",
    "word": "collar",
    "meaning": "衣领,颈圈；控制,扭住衣领,给...装上领子",
    "example": "I learned the word \"collar\" today.",
    "part": "n"
  },
  {
    "id": "pet-509",
    "library": "pet",
    "word": "colleague",
    "meaning": "同事,同僚",
    "example": "I learned the word \"colleague\" today.",
    "part": "n"
  },
  {
    "id": "pet-510",
    "library": "pet",
    "word": "chemist",
    "meaning": "化学家,药剂师；[化]化学家；化学师",
    "example": "I learned the word \"chemist\" today.",
    "part": "n"
  },
  {
    "id": "pet-511",
    "library": "pet",
    "word": "collect",
    "meaning": "收集,聚集,集中,搜集；a.由收到者付款的；由收到者付款地",
    "example": "I learned the word \"collect\" today.",
    "part": "v"
  },
  {
    "id": "pet-512",
    "library": "pet",
    "word": "chemistry",
    "meaning": "化学,化学过程；[化]化学",
    "example": "I learned the word \"chemistry\" today.",
    "part": "n"
  },
  {
    "id": "pet-513",
    "library": "pet",
    "word": "cheque",
    "meaning": "支票",
    "example": "I learned the word \"cheque\" today.",
    "part": "n"
  },
  {
    "id": "pet-514",
    "library": "pet",
    "word": "collection",
    "meaning": "收集,采集,(一批)收藏品,募捐；[医]收集；收集品,标本",
    "example": "I learned the word \"collection\" today.",
    "part": "n"
  },
  {
    "id": "pet-515",
    "library": "pet",
    "word": "chess",
    "meaning": "国际象棋；[建]雀麦",
    "example": "I learned the word \"chess\" today.",
    "part": "n"
  },
  {
    "id": "pet-516",
    "library": "pet",
    "word": "college",
    "meaning": "学院,大学,学会",
    "example": "I learned the word \"college\" today.",
    "part": "n"
  },
  {
    "id": "pet-517",
    "library": "pet",
    "word": "colour",
    "meaning": "颜色,面色,颜料,外貌；把...涂上颜色,粉饰,使脸红,歪曲；变色",
    "example": "I learned the word \"colour\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-518",
    "library": "pet",
    "word": "chest of drawers",
    "meaning": "五屉橱,衣柜",
    "example": "Try to use \"chest of drawers\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-519",
    "library": "pet",
    "word": "colourful",
    "meaning": "a.颜色丰富的,鲜艳的,艳丽的,多色的,丰富多彩的,吸引人的,引人入胜的；[计]有色的",
    "example": "I learned the word \"colourful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-520",
    "library": "pet",
    "word": "chicken",
    "meaning": "小鸡,鸡肉",
    "example": "I learned the word \"chicken\" today.",
    "part": "n"
  },
  {
    "id": "pet-521",
    "library": "pet",
    "word": "comb",
    "meaning": "头梳,鸡冠；梳头发,梳毛；(浪)涌起",
    "example": "I learned the word \"comb\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-522",
    "library": "pet",
    "word": "child",
    "meaning": "孩子,产物,追随者；[医]儿童",
    "example": "I learned the word \"child\" today.",
    "part": "n"
  },
  {
    "id": "pet-523",
    "library": "pet",
    "word": "childhood",
    "meaning": "孩童时期；[医]儿童期",
    "example": "I learned the word \"childhood\" today.",
    "part": "n"
  },
  {
    "id": "pet-524",
    "library": "pet",
    "word": "come",
    "meaning": "过来,来,到达,出现,开始；interj.喂",
    "example": "I learned the word \"come\" today.",
    "part": "v"
  },
  {
    "id": "pet-525",
    "library": "pet",
    "word": "chilli",
    "meaning": "红辣椒",
    "example": "I learned the word \"chilli\" today.",
    "part": "n"
  },
  {
    "id": "pet-526",
    "library": "pet",
    "word": "comedy",
    "meaning": "喜剧,有趣的事情",
    "example": "I learned the word \"comedy\" today.",
    "part": "n"
  },
  {
    "id": "pet-527",
    "library": "pet",
    "word": "come on",
    "meaning": "偶遇,进步,发生,开始,出场,快来",
    "example": "Try to use \"come on\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-528",
    "library": "pet",
    "word": "chin",
    "meaning": "下巴,颏；[医]颏",
    "example": "I learned the word \"chin\" today.",
    "part": "n"
  },
  {
    "id": "pet-529",
    "library": "pet",
    "word": "chip",
    "meaning": "屑片,薄片,碎片；削,切,削成碎片,使摔倒,凿；削下屑片",
    "example": "I learned the word \"chip\" today.",
    "part": "n"
  },
  {
    "id": "pet-530",
    "library": "pet",
    "word": "comfort",
    "meaning": "舒适,安慰,安慰者；安慰",
    "example": "I learned the word \"comfort\" today.",
    "part": "n"
  },
  {
    "id": "pet-531",
    "library": "pet",
    "word": "comfortable",
    "meaning": "a.舒服的,轻松的；盖被",
    "example": "I learned the word \"comfortable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-532",
    "library": "pet",
    "word": "chocolate",
    "meaning": "巧克力；a.巧克力制的",
    "example": "I learned the word \"chocolate\" today.",
    "part": "n"
  },
  {
    "id": "pet-533",
    "library": "pet",
    "word": "comic",
    "meaning": "连环漫画,喜剧演员,滑稽的人；a.滑稽的,有趣的,喜剧的",
    "example": "I learned the word \"comic\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-534",
    "library": "pet",
    "word": "choice",
    "meaning": "选择,精选品,选择权；a.精选的,挑三拣四的,上等的；[计]DOS内部命令:在批处理文件中",
    "example": "I learned the word \"choice\" today.",
    "part": "n"
  },
  {
    "id": "pet-535",
    "library": "pet",
    "word": "comma",
    "meaning": "逗点,逗号",
    "example": "I learned the word \"comma\" today.",
    "part": "n"
  },
  {
    "id": "pet-536",
    "library": "pet",
    "word": "choose",
    "meaning": "选择,宁愿,欲；作出选择,愿意；[计]选取",
    "example": "I learned the word \"choose\" today.",
    "part": "v"
  },
  {
    "id": "pet-537",
    "library": "pet",
    "word": "cinema",
    "meaning": "电影院,电影",
    "example": "I learned the word \"cinema\" today.",
    "part": "n"
  },
  {
    "id": "pet-538",
    "library": "pet",
    "word": "comment",
    "meaning": "注解,批评,评论,备注；评论,注解；[计]备注",
    "example": "I learned the word \"comment\" today.",
    "part": "n"
  },
  {
    "id": "pet-539",
    "library": "pet",
    "word": "circle",
    "meaning": "圆周,社交圈,循环,范围；围着,环绕；盘旋,循环",
    "example": "I learned the word \"circle\" today.",
    "part": "n"
  },
  {
    "id": "pet-540",
    "library": "pet",
    "word": "common",
    "meaning": "a.通常的,共同的,通俗的,公共的；[计]公用块",
    "example": "I learned the word \"common\" today.",
    "part": "adj"
  },
  {
    "id": "pet-541",
    "library": "pet",
    "word": "circus",
    "meaning": "马戏团,马戏,竞技场",
    "example": "I learned the word \"circus\" today.",
    "part": "n"
  },
  {
    "id": "pet-542",
    "library": "pet",
    "word": "city",
    "meaning": "城市,市；[法]都市,城市,市",
    "example": "I learned the word \"city\" today.",
    "part": "n"
  },
  {
    "id": "pet-543",
    "library": "pet",
    "word": "clap",
    "meaning": "拍手,拍手声,霹雳声,花柳病；鼓掌,(使)啪地关上",
    "example": "I learned the word \"clap\" today.",
    "part": "v"
  },
  {
    "id": "pet-544",
    "library": "pet",
    "word": "class",
    "meaning": "班级,阶级,种类,课；分类；[计]类别",
    "example": "I learned the word \"class\" today.",
    "part": "n"
  },
  {
    "id": "pet-545",
    "library": "pet",
    "word": "communicate",
    "meaning": "显露,传达,感染；通讯",
    "example": "I learned the word \"communicate\" today.",
    "part": "v"
  },
  {
    "id": "pet-546",
    "library": "pet",
    "word": "communication",
    "meaning": "交流,交通,通讯；[计]通信",
    "example": "I learned the word \"communication\" today.",
    "part": "n"
  },
  {
    "id": "pet-547",
    "library": "pet",
    "word": "company",
    "meaning": "公司,友伴,交往,连队,朋友,一群；陪伴；交往",
    "example": "I learned the word \"company\" today.",
    "part": "n"
  },
  {
    "id": "pet-548",
    "library": "pet",
    "word": "classical",
    "meaning": "a.古典的,正统派的,经典的；[医]古典的；标准的,典型的",
    "example": "I learned the word \"classical\" today.",
    "part": "adj"
  },
  {
    "id": "pet-549",
    "library": "pet",
    "word": "compare",
    "meaning": "比较,比喻,对照；相比；比较",
    "example": "I learned the word \"compare\" today.",
    "part": "v"
  },
  {
    "id": "pet-550",
    "library": "pet",
    "word": "compete",
    "meaning": "竞争,对抗",
    "example": "I learned the word \"compete\" today.",
    "part": "v"
  },
  {
    "id": "pet-551",
    "library": "pet",
    "word": "classmate",
    "meaning": "同班同学",
    "example": "I learned the word \"classmate\" today.",
    "part": "n"
  },
  {
    "id": "pet-552",
    "library": "pet",
    "word": "competition",
    "meaning": "竞争,竞赛；[经]竞争,竞销,比赛",
    "example": "I learned the word \"competition\" today.",
    "part": "n"
  },
  {
    "id": "pet-553",
    "library": "pet",
    "word": "classroom",
    "meaning": "教室",
    "example": "I learned the word \"classroom\" today.",
    "part": "n"
  },
  {
    "id": "pet-554",
    "library": "pet",
    "word": "competitor",
    "meaning": "竞争者；[经]竞争者,竞争对手",
    "example": "I learned the word \"competitor\" today.",
    "part": "n"
  },
  {
    "id": "pet-555",
    "library": "pet",
    "word": "complain",
    "meaning": "抱怨,抗议,控诉",
    "example": "I learned the word \"complain\" today.",
    "part": "v"
  },
  {
    "id": "pet-556",
    "library": "pet",
    "word": "clean",
    "meaning": "a.干净的,清白的,简洁的；清洁地,完全地；清理,使干净,出空",
    "example": "I learned the word \"clean\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-557",
    "library": "pet",
    "word": "complaint",
    "meaning": "诉苦,抱怨,控诉；[医]陈诉；病",
    "example": "I learned the word \"complaint\" today.",
    "part": "n"
  },
  {
    "id": "pet-558",
    "library": "pet",
    "word": "cleaner",
    "meaning": "清洁工人,清洁剂,干洗商；[化]滤清器；除垢器",
    "example": "I learned the word \"cleaner\" today.",
    "part": "n"
  },
  {
    "id": "pet-559",
    "library": "pet",
    "word": "complete",
    "meaning": "a.完全的,十足的,完成的；完成,完工,使圆满",
    "example": "I learned the word \"complete\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-560",
    "library": "pet",
    "word": "clear",
    "meaning": "a.清楚的,明确的,澄清的；清晰地；澄清,清除障碍",
    "example": "I learned the word \"clear\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-561",
    "library": "pet",
    "word": "clearly",
    "meaning": "清楚地",
    "example": "I learned the word \"clearly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-562",
    "library": "pet",
    "word": "complicated",
    "meaning": "a.复杂的；[医]并发的",
    "example": "I learned the word \"complicated\" today.",
    "part": "adj"
  },
  {
    "id": "pet-563",
    "library": "pet",
    "word": "clever",
    "meaning": "a.聪明的,精明的",
    "example": "I learned the word \"clever\" today.",
    "part": "adj"
  },
  {
    "id": "pet-564",
    "library": "pet",
    "word": "composition",
    "meaning": "作文,创作,组成；[化]成分；组成",
    "example": "I learned the word \"composition\" today.",
    "part": "n"
  },
  {
    "id": "pet-565",
    "library": "pet",
    "word": "computer",
    "meaning": "电脑,电子计算机；[计]计算机",
    "example": "I learned the word \"computer\" today.",
    "part": "n"
  },
  {
    "id": "pet-566",
    "library": "pet",
    "word": "click",
    "meaning": "咔哒声,啪嗒声；作咔哒声；使发咔哒声",
    "example": "I learned the word \"click\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-567",
    "library": "pet",
    "word": "concentrate",
    "meaning": "浓缩,精选；集中,专心",
    "example": "I learned the word \"concentrate\" today.",
    "part": "v"
  },
  {
    "id": "pet-568",
    "library": "pet",
    "word": "cliff",
    "meaning": "悬崖,绝壁",
    "example": "I learned the word \"cliff\" today.",
    "part": "n"
  },
  {
    "id": "pet-569",
    "library": "pet",
    "word": "climate",
    "meaning": "气候,社会趋势,气候区；[医]气候",
    "example": "I learned the word \"climate\" today.",
    "part": "n"
  },
  {
    "id": "pet-570",
    "library": "pet",
    "word": "concert",
    "meaning": "音乐会,和声,一致；协力,协调；协力",
    "example": "I learned the word \"concert\" today.",
    "part": "n"
  },
  {
    "id": "pet-571",
    "library": "pet",
    "word": "climb",
    "meaning": "攀登,上升,爬；攀登,爬升",
    "example": "I learned the word \"climb\" today.",
    "part": "v"
  },
  {
    "id": "pet-572",
    "library": "pet",
    "word": "conclusion",
    "meaning": "结论,结尾,推论；[法]缔结,结论,推论",
    "example": "I learned the word \"conclusion\" today.",
    "part": "n"
  },
  {
    "id": "pet-573",
    "library": "pet",
    "word": "climbing",
    "meaning": "a.攀缘而登的,上升的；攀登",
    "example": "I learned the word \"climbing\" today.",
    "part": "n"
  },
  {
    "id": "pet-574",
    "library": "pet",
    "word": "condition",
    "meaning": "情况,条件；使健康,以...为条件,决定,使适应；[计]条件",
    "example": "I learned the word \"condition\" today.",
    "part": "n"
  },
  {
    "id": "pet-575",
    "library": "pet",
    "word": "clinic",
    "meaning": "诊所,临床教学；[医]诊所(门诊部)；临床(讲解)",
    "example": "I learned the word \"clinic\" today.",
    "part": "n"
  },
  {
    "id": "pet-576",
    "library": "pet",
    "word": "clock",
    "meaning": "时钟,计时器,(袜子上的)绣花边花；绣花样,记时,记录；记录时间",
    "example": "I learned the word \"clock\" today.",
    "part": "n"
  },
  {
    "id": "pet-577",
    "library": "pet",
    "word": "conference",
    "meaning": "会议；[经]会议,讨论会,协商会",
    "example": "I learned the word \"conference\" today.",
    "part": "n"
  },
  {
    "id": "pet-578",
    "library": "pet",
    "word": "confident",
    "meaning": "a.有信心的,有把握的",
    "example": "I learned the word \"confident\" today.",
    "part": "adj"
  },
  {
    "id": "pet-579",
    "library": "pet",
    "word": "cover",
    "meaning": "盖子,封面,藉口；覆盖,掩饰,保护,掩护,包括；覆盖",
    "example": "I learned the word \"cover\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-580",
    "library": "pet",
    "word": "confirm",
    "meaning": "证实,确定,批准,使巩固；[计]确认",
    "example": "I learned the word \"confirm\" today.",
    "part": "v"
  },
  {
    "id": "pet-581",
    "library": "pet",
    "word": "cow",
    "meaning": "母牛,母兽；威胁",
    "example": "I learned the word \"cow\" today.",
    "part": "n"
  },
  {
    "id": "pet-582",
    "library": "pet",
    "word": "confused",
    "meaning": "a.困惑的,混乱的",
    "example": "I learned the word \"confused\" today.",
    "part": "adj"
  },
  {
    "id": "pet-583",
    "library": "pet",
    "word": "crash",
    "meaning": "哗啦声,猛撞,崩溃,粗布；撞碎,破碎,(使)...坠毁；a.速成的",
    "example": "I learned the word \"crash\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-584",
    "library": "pet",
    "word": "confusing",
    "meaning": "a.令人困惑的；混淆的；混乱的",
    "example": "I learned the word \"confusing\" today.",
    "part": "adj"
  },
  {
    "id": "pet-585",
    "library": "pet",
    "word": "crazy",
    "meaning": "a.发狂的,狂热的",
    "example": "I learned the word \"crazy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-586",
    "library": "pet",
    "word": "cream",
    "meaning": "乳酪,奶油,面霜；[医]乳油,乳皮；乳膏,霜",
    "example": "I learned the word \"cream\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-587",
    "library": "pet",
    "word": "connect",
    "meaning": "连接,联合,联系",
    "example": "I learned the word \"connect\" today.",
    "part": "v"
  },
  {
    "id": "pet-588",
    "library": "pet",
    "word": "create",
    "meaning": "创造,建造,引起,任命",
    "example": "I learned the word \"create\" today.",
    "part": "v"
  },
  {
    "id": "pet-589",
    "library": "pet",
    "word": "connection",
    "meaning": "连接,关系,前后关系；[计]连接",
    "example": "I learned the word \"connection\" today.",
    "part": "n"
  },
  {
    "id": "pet-590",
    "library": "pet",
    "word": "creative",
    "meaning": "a.有创造力的,创作的,产生的",
    "example": "I learned the word \"creative\" today.",
    "part": "adj"
  },
  {
    "id": "pet-591",
    "library": "pet",
    "word": "consider",
    "meaning": "考虑,思考,认为",
    "example": "I learned the word \"consider\" today.",
    "part": "v"
  },
  {
    "id": "pet-592",
    "library": "pet",
    "word": "creature",
    "meaning": "人,动物,创造物,生物",
    "example": "I learned the word \"creature\" today.",
    "part": "n"
  },
  {
    "id": "pet-593",
    "library": "pet",
    "word": "consist",
    "meaning": "组成,存在于,一致",
    "example": "I learned the word \"consist\" today.",
    "part": "v"
  },
  {
    "id": "pet-594",
    "library": "pet",
    "word": "credit",
    "meaning": "信用,信任,荣誉,贷款,学分；归功于,赞颂,信任,相信；[计]信用量",
    "example": "I learned the word \"credit\" today.",
    "part": "n"
  },
  {
    "id": "pet-595",
    "library": "pet",
    "word": "consonant",
    "meaning": "辅音；a.一致的,调和的",
    "example": "I learned the word \"consonant\" today.",
    "part": "n"
  },
  {
    "id": "pet-596",
    "library": "pet",
    "word": "credit card",
    "meaning": "[计]信用卡,记帐卡；[经]信用卡片,赊购证,购物信用卡",
    "example": "Try to use \"credit card\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-597",
    "library": "pet",
    "word": "contact",
    "meaning": "联系,交际,熟人,接触；接触,联系；使接触",
    "example": "I learned the word \"contact\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-598",
    "library": "pet",
    "word": "crew",
    "meaning": "全体人员,一群人,全体队员；crow的过去式",
    "example": "I learned the word \"crew\" today.",
    "part": "n"
  },
  {
    "id": "pet-599",
    "library": "pet",
    "word": "contain",
    "meaning": "包含,容纳,控制；自制",
    "example": "I learned the word \"contain\" today.",
    "part": "v"
  },
  {
    "id": "pet-600",
    "library": "pet",
    "word": "contents",
    "meaning": "目录；[计]目录",
    "example": "I learned the word \"contents\" today.",
    "part": "n"
  },
  {
    "id": "pet-601",
    "library": "pet",
    "word": "cricket",
    "meaning": "蟋蟀,板球",
    "example": "I learned the word \"cricket\" today.",
    "part": "n"
  },
  {
    "id": "pet-602",
    "library": "pet",
    "word": "contest",
    "meaning": "竞赛,争论；竞争,争取,争辩；竞争",
    "example": "I learned the word \"contest\" today.",
    "part": "n"
  },
  {
    "id": "pet-603",
    "library": "pet",
    "word": "crime",
    "meaning": "犯罪,罪行,罪恶；[法]犯罪,罪,罪恶",
    "example": "I learned the word \"crime\" today.",
    "part": "n"
  },
  {
    "id": "pet-604",
    "library": "pet",
    "word": "continent",
    "meaning": "大陆,洲；a.自制的",
    "example": "I learned the word \"continent\" today.",
    "part": "n"
  },
  {
    "id": "pet-605",
    "library": "pet",
    "word": "criminal",
    "meaning": "罪犯,犯人,刑事；a.犯了罪的,刑事的,有罪的",
    "example": "I learned the word \"criminal\" today.",
    "part": "n"
  },
  {
    "id": "pet-606",
    "library": "pet",
    "word": "continue",
    "meaning": "继续,延续,延长；使继续,使延长",
    "example": "I learned the word \"continue\" today.",
    "part": "v"
  },
  {
    "id": "pet-607",
    "library": "pet",
    "word": "crop",
    "meaning": "农作物,产量,平头；收割,修剪,种植；收获",
    "example": "I learned the word \"crop\" today.",
    "part": "n"
  },
  {
    "id": "pet-608",
    "library": "pet",
    "word": "contract",
    "meaning": "合约,婚约,契约；使皱缩,使缩短,感染,订约,缔结；皱缩,订约,收缩",
    "example": "I learned the word \"contract\" today.",
    "part": "n"
  },
  {
    "id": "pet-609",
    "library": "pet",
    "word": "cross",
    "meaning": "十字架,十字架形物件,交叉,十字标,交叉路,磨难,杂交；a.生气的,交叉的,相反的；交叉,横过,越过",
    "example": "I learned the word \"cross\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-610",
    "library": "pet",
    "word": "control",
    "meaning": "控制,管理,克制,控制器,操纵装置；控制,操纵,抑制；[计]控制",
    "example": "I learned the word \"control\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-611",
    "library": "pet",
    "word": "crossing",
    "meaning": "横越,横渡,交叉点,渡口；[经]划线",
    "example": "I learned the word \"crossing\" today.",
    "part": "n"
  },
  {
    "id": "pet-612",
    "library": "pet",
    "word": "cross out",
    "meaning": "[经]注销,删去",
    "example": "Try to use \"cross out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-613",
    "library": "pet",
    "word": "convenient",
    "meaning": "a.方便的,合宜的；[法]适当的,合理而可行的,方便的",
    "example": "I learned the word \"convenient\" today.",
    "part": "adj"
  },
  {
    "id": "pet-614",
    "library": "pet",
    "word": "conversation",
    "meaning": "会话,说话,交谈；[法]交谈,社交,性交",
    "example": "I learned the word \"conversation\" today.",
    "part": "n"
  },
  {
    "id": "pet-615",
    "library": "pet",
    "word": "crossroads",
    "meaning": "十字路口,交叉路口,聚会的中心地点,(喻)需作抉择的重要关头,紧要关头",
    "example": "I learned the word \"crossroads\" today.",
    "part": "n"
  },
  {
    "id": "pet-616",
    "library": "pet",
    "word": "convince",
    "meaning": "说服,使相信；[法]使确信,使信服,使人认识错误",
    "example": "I learned the word \"convince\" today.",
    "part": "v"
  },
  {
    "id": "pet-617",
    "library": "pet",
    "word": "crowd",
    "meaning": "群众,一伙人；拥挤,挤满,挤进",
    "example": "I learned the word \"crowd\" today.",
    "part": "n"
  },
  {
    "id": "pet-618",
    "library": "pet",
    "word": "cook",
    "meaning": "厨子,厨师；烹调,煮饭,加热；在煮着",
    "example": "I learned the word \"cook\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-619",
    "library": "pet",
    "word": "crowded",
    "meaning": "a.拥挤的,塞满的",
    "example": "I learned the word \"crowded\" today.",
    "part": "adj"
  },
  {
    "id": "pet-620",
    "library": "pet",
    "word": "cooker",
    "meaning": "炊事用具,炉灶,锅,炊具,烹饪用水果,窜改者,伪造者；[化]蒸锅",
    "example": "I learned the word \"cooker\" today.",
    "part": "n"
  },
  {
    "id": "pet-621",
    "library": "pet",
    "word": "cruel",
    "meaning": "a.残酷的,令人极痛苦的；[法]残忍的,残酷的",
    "example": "I learned the word \"cruel\" today.",
    "part": "adj"
  },
  {
    "id": "pet-622",
    "library": "pet",
    "word": "cookie",
    "meaning": "饼干,小甜点；[建]糕点",
    "example": "I learned the word \"cookie\" today.",
    "part": "n"
  },
  {
    "id": "pet-623",
    "library": "pet",
    "word": "cruise",
    "meaning": "巡航,巡弋,漫游；巡航,巡弋,漫游",
    "example": "I learned the word \"cruise\" today.",
    "part": "n"
  },
  {
    "id": "pet-624",
    "library": "pet",
    "word": "cooking",
    "meaning": "烹饪；[化]熬炼；热炼",
    "example": "I learned the word \"cooking\" today.",
    "part": "n"
  },
  {
    "id": "pet-625",
    "library": "pet",
    "word": "cry",
    "meaning": "叫声,哭声,大叫；哭,叫,喊；叫喊,大声说,哭出",
    "example": "I learned the word \"cry\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-626",
    "library": "pet",
    "word": "cool",
    "meaning": "凉爽,凉爽的空气；a.凉爽的,冷淡的,冷静的；冷却,平息",
    "example": "I learned the word \"cool\" today.",
    "part": "adj, exclam & v"
  },
  {
    "id": "pet-627",
    "library": "pet",
    "word": "cucumber",
    "meaning": "黄瓜；[医]黄瓜,胡瓜",
    "example": "I learned the word \"cucumber\" today.",
    "part": "n"
  },
  {
    "id": "pet-628",
    "library": "pet",
    "word": "copy",
    "meaning": "副本,摹仿,一册；复印,抄袭,复制；[计]副本",
    "example": "I learned the word \"copy\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-629",
    "library": "pet",
    "word": "cultural",
    "meaning": "a.文化的,教养的,修养的；[医]培养的",
    "example": "I learned the word \"cultural\" today.",
    "part": "adj"
  },
  {
    "id": "pet-630",
    "library": "pet",
    "word": "corn",
    "meaning": "玉蜀黍,谷类,谷粒,鸡眼；使成颗粒,腌",
    "example": "I learned the word \"corn\" today.",
    "part": "n"
  },
  {
    "id": "pet-631",
    "library": "pet",
    "word": "culture",
    "meaning": "文化,修养,耕种；耕种,培养",
    "example": "I learned the word \"culture\" today.",
    "part": "n"
  },
  {
    "id": "pet-632",
    "library": "pet",
    "word": "corner",
    "meaning": "角落,转角,窘境；迫至一隅,垄断,使陷入绝境；相交成角,垄断",
    "example": "I learned the word \"corner\" today.",
    "part": "n"
  },
  {
    "id": "pet-633",
    "library": "pet",
    "word": "cup",
    "meaning": "杯子,茶杯,优胜杯；使成杯状,为...拔火罐",
    "example": "I learned the word \"cup\" today.",
    "part": "n"
  },
  {
    "id": "pet-634",
    "library": "pet",
    "word": "correct",
    "meaning": "a.正确的,合适的；改正,订正",
    "example": "I learned the word \"correct\" today.",
    "part": "adj"
  },
  {
    "id": "pet-635",
    "library": "pet",
    "word": "cupboard",
    "meaning": "食橱,碗柜,餐具柜",
    "example": "I learned the word \"cupboard\" today.",
    "part": "n"
  },
  {
    "id": "pet-636",
    "library": "pet",
    "word": "correction",
    "meaning": "订正,改正,改正的地方；[化]校正",
    "example": "I learned the word \"correction\" today.",
    "part": "n"
  },
  {
    "id": "pet-637",
    "library": "pet",
    "word": "cure",
    "meaning": "治疗,治愈,治疗法；治疗,治愈,改正,腌制,加工处理,使硫化；受治疗,被加工处理,被硫化",
    "example": "I learned the word \"cure\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-638",
    "library": "pet",
    "word": "cost",
    "meaning": "代价,价值,费用；花费；使失去,值,使花费",
    "example": "I learned the word \"cost\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-639",
    "library": "pet",
    "word": "curious",
    "meaning": "a.好奇的,求知的,古怪的",
    "example": "I learned the word \"curious\" today.",
    "part": "adj"
  },
  {
    "id": "pet-640",
    "library": "pet",
    "word": "costume",
    "meaning": "装束,服装",
    "example": "I learned the word \"costume\" today.",
    "part": "n"
  },
  {
    "id": "pet-641",
    "library": "pet",
    "word": "curiously",
    "meaning": "好奇地",
    "example": "I learned the word \"curiously\" today.",
    "part": "adv"
  },
  {
    "id": "pet-642",
    "library": "pet",
    "word": "curly",
    "meaning": "a.拳曲的,卷毛的,弯曲的",
    "example": "I learned the word \"curly\" today.",
    "part": "adj"
  },
  {
    "id": "pet-643",
    "library": "pet",
    "word": "currency",
    "meaning": "货币,通货,流通,通用；[计]货币,货币型",
    "example": "I learned the word \"currency\" today.",
    "part": "n"
  },
  {
    "id": "pet-644",
    "library": "pet",
    "word": "curriculum",
    "meaning": "课程；[医]课程,学程",
    "example": "I learned the word \"curriculum\" today.",
    "part": "n"
  },
  {
    "id": "pet-645",
    "library": "pet",
    "word": "cosy",
    "meaning": "a.温暖舒适的；保暖套",
    "example": "I learned the word \"cosy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-646",
    "library": "pet",
    "word": "cottage",
    "meaning": "小屋,茅舍",
    "example": "I learned the word \"cottage\" today.",
    "part": "n"
  },
  {
    "id": "pet-647",
    "library": "pet",
    "word": "curry",
    "meaning": "咖哩粉,咖哩饭菜；用咖哩粉调味,用马梳梳,制革",
    "example": "I learned the word \"curry\" today.",
    "part": "n"
  },
  {
    "id": "pet-648",
    "library": "pet",
    "word": "cotton",
    "meaning": "棉花；和谐,有好感,理解",
    "example": "I learned the word \"cotton\" today.",
    "part": "n"
  },
  {
    "id": "pet-649",
    "library": "pet",
    "word": "curtain",
    "meaning": "帐,幕,窗帘；装帘子于,遮蔽",
    "example": "I learned the word \"curtain\" today.",
    "part": "n"
  },
  {
    "id": "pet-650",
    "library": "pet",
    "word": "cough",
    "meaning": "咳嗽；咳嗽；咳出",
    "example": "I learned the word \"cough\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-651",
    "library": "pet",
    "word": "cushion",
    "meaning": "垫子,橡皮软垫；加垫褥,缓冲,掩盖",
    "example": "I learned the word \"cushion\" today.",
    "part": "n"
  },
  {
    "id": "pet-652",
    "library": "pet",
    "word": "could",
    "meaning": "aux.可以,能",
    "example": "I learned the word \"could\" today.",
    "part": "mv"
  },
  {
    "id": "pet-653",
    "library": "pet",
    "word": "custom",
    "meaning": "习惯,风俗,海关,自定义；a.定制的；[计]定制",
    "example": "I learned the word \"custom\" today.",
    "part": "n"
  },
  {
    "id": "pet-654",
    "library": "pet",
    "word": "customer",
    "meaning": "消费者；[化]顾客",
    "example": "I learned the word \"customer\" today.",
    "part": "n"
  },
  {
    "id": "pet-655",
    "library": "pet",
    "word": "count",
    "meaning": "计算,视为；计数；计算,合计,计数,伯爵",
    "example": "I learned the word \"count\" today.",
    "part": "v"
  },
  {
    "id": "pet-656",
    "library": "pet",
    "word": "country",
    "meaning": "国家,乡村,地区,故乡；a.乡下的,农村的；[计]DOS外部命令:用于设定国家代码,包括日期时间及货币格式",
    "example": "I learned the word \"country\" today.",
    "part": "n"
  },
  {
    "id": "pet-657",
    "library": "pet",
    "word": "customs",
    "meaning": "海关,关卡,关税；[经]关税,海关",
    "example": "I learned the word \"customs\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-658",
    "library": "pet",
    "word": "countryside",
    "meaning": "乡下地方,乡下居民",
    "example": "I learned the word \"countryside\" today.",
    "part": "n"
  },
  {
    "id": "pet-659",
    "library": "pet",
    "word": "couple",
    "meaning": "对,夫妇,数个；使成双,连接,使成婚,把...联系起来；结合,成婚",
    "example": "I learned the word \"couple\" today.",
    "part": "n"
  },
  {
    "id": "pet-660",
    "library": "pet",
    "word": "cut",
    "meaning": "切口,割伤,降低,切,割,砍,削,伤口,削减,缩短,删节,通路；a.经切割的,缩减的；切,割,减少,刺痛,开辟,雕刻,删节,缩短,停止,排斥,切断,关,显出",
    "example": "I learned the word \"cut\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-661",
    "library": "pet",
    "word": "courage",
    "meaning": "勇气,胆量",
    "example": "I learned the word \"courage\" today.",
    "part": "n"
  },
  {
    "id": "pet-662",
    "library": "pet",
    "word": "cute",
    "meaning": "a.可爱的,聪明的,伶俐的；[医]品他病",
    "example": "I learned the word \"cute\" today.",
    "part": "adj"
  },
  {
    "id": "pet-663",
    "library": "pet",
    "word": "course",
    "meaning": "课程,路线,过程,一道菜,道路；追,(使)跑",
    "example": "I learned the word \"course\" today.",
    "part": "n"
  },
  {
    "id": "pet-664",
    "library": "pet",
    "word": "cut up",
    "meaning": "切碎,抨击,摧毁,使伤心,胡闹",
    "example": "Try to use \"cut up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-665",
    "library": "pet",
    "word": "cycle",
    "meaning": "周期,循环,自行车,一段时间,整套；循环,轮转,骑自行车；使循环,使轮转",
    "example": "I learned the word \"cycle\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-666",
    "library": "pet",
    "word": "court",
    "meaning": "法院,庭院,奉承；献殷勤,追求,招致；求爱",
    "example": "I learned the word \"court\" today.",
    "part": "n"
  },
  {
    "id": "pet-667",
    "library": "pet",
    "word": "cycling",
    "meaning": "骑脚踏车兜风,骑脚踏车消遣；[机]循环操作",
    "example": "I learned the word \"cycling\" today.",
    "part": "n"
  },
  {
    "id": "pet-668",
    "library": "pet",
    "word": "cyclist",
    "meaning": "骑脚踏车的人",
    "example": "I learned the word \"cyclist\" today.",
    "part": "n"
  },
  {
    "id": "pet-669",
    "library": "pet",
    "word": "cousin",
    "meaning": "堂兄弟姊妹,表兄弟姊妹；[法]同辈表亲或堂亲",
    "example": "I learned the word \"cousin\" today.",
    "part": "n"
  },
  {
    "id": "pet-670",
    "library": "pet",
    "word": "deposit",
    "meaning": "存款,定金,堆积物；存放,堆积；沉淀",
    "example": "I learned the word \"deposit\" today.",
    "part": "n"
  },
  {
    "id": "pet-671",
    "library": "pet",
    "word": "depressed",
    "meaning": "a.沮丧的,降低的；[医]抑郁的,阻抑的,压低的,凹[陷]的,扁平的",
    "example": "I learned the word \"depressed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-672",
    "library": "pet",
    "word": "dad",
    "meaning": "爸爸,爹爹",
    "example": "I learned the word \"dad\" today.",
    "part": "n"
  },
  {
    "id": "pet-673",
    "library": "pet",
    "word": "depth",
    "meaning": "深度,深处,深奥；[计]深度",
    "example": "I learned the word \"depth\" today.",
    "part": "n"
  },
  {
    "id": "pet-674",
    "library": "pet",
    "word": "daily",
    "meaning": "a.每日的,日常的；每日地,日常地；日报",
    "example": "I learned the word \"daily\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-675",
    "library": "pet",
    "word": "damage",
    "meaning": "损害,伤害；损害",
    "example": "I learned the word \"damage\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-676",
    "library": "pet",
    "word": "describe",
    "meaning": "描述,描绘,画",
    "example": "I learned the word \"describe\" today.",
    "part": "v"
  },
  {
    "id": "pet-677",
    "library": "pet",
    "word": "damaged",
    "meaning": "a.被损坏的；[建]损伤了的,损坏了的",
    "example": "I learned the word \"damaged\" today.",
    "part": "adj"
  },
  {
    "id": "pet-678",
    "library": "pet",
    "word": "description",
    "meaning": "描述,说明,种类；[经]说明书(物品),品名种类,货物名称",
    "example": "I learned the word \"description\" today.",
    "part": "n"
  },
  {
    "id": "pet-679",
    "library": "pet",
    "word": "dance",
    "meaning": "跳舞,舞蹈,舞会；跳舞",
    "example": "I learned the word \"dance\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-680",
    "library": "pet",
    "word": "desert",
    "meaning": "沙漠,应得的赏罚,功劳；a.沙漠的,不毛的；放弃,遗弃,擅离",
    "example": "I learned the word \"desert\" today.",
    "part": "n"
  },
  {
    "id": "pet-681",
    "library": "pet",
    "word": "dancer",
    "meaning": "舞蹈演员,跳舞者",
    "example": "I learned the word \"dancer\" today.",
    "part": "n"
  },
  {
    "id": "pet-682",
    "library": "pet",
    "word": "deserve",
    "meaning": "该得到,值得；应得报答",
    "example": "I learned the word \"deserve\" today.",
    "part": "v"
  },
  {
    "id": "pet-683",
    "library": "pet",
    "word": "dancing",
    "meaning": "舞蹈；[建]跳动的",
    "example": "I learned the word \"dancing\" today.",
    "part": "n"
  },
  {
    "id": "pet-684",
    "library": "pet",
    "word": "design",
    "meaning": "设计,图样,方案,企图；设计,计划",
    "example": "I learned the word \"design\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-685",
    "library": "pet",
    "word": "danger",
    "meaning": "危险,威胁；[法]危险,危险物,危机",
    "example": "I learned the word \"danger\" today.",
    "part": "n"
  },
  {
    "id": "pet-686",
    "library": "pet",
    "word": "designer",
    "meaning": "设计者,谋划者,制图者；[计]设计员",
    "example": "I learned the word \"designer\" today.",
    "part": "n"
  },
  {
    "id": "pet-687",
    "library": "pet",
    "word": "dangerous",
    "meaning": "a.危险的；[法]危险的,危害的",
    "example": "I learned the word \"dangerous\" today.",
    "part": "adj"
  },
  {
    "id": "pet-688",
    "library": "pet",
    "word": "desk",
    "meaning": "书桌,办公桌,工作台",
    "example": "I learned the word \"desk\" today.",
    "part": "n"
  },
  {
    "id": "pet-689",
    "library": "pet",
    "word": "dark",
    "meaning": "黑暗,夜,黄昏,模糊；a.黑暗的,暗的,深色的,隐密的,模糊的,无知的",
    "example": "I learned the word \"dark\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-690",
    "library": "pet",
    "word": "despite",
    "meaning": "轻视,憎恨；虽然,尽管",
    "example": "I learned the word \"despite\" today.",
    "part": "prep"
  },
  {
    "id": "pet-691",
    "library": "pet",
    "word": "data",
    "meaning": "pl.资料,数据；[计]数据；DOS内部命令:用于显示或设定系统的日期",
    "example": "I learned the word \"data\" today.",
    "part": "n"
  },
  {
    "id": "pet-692",
    "library": "pet",
    "word": "dessert",
    "meaning": "餐后甜点",
    "example": "I learned the word \"dessert\" today.",
    "part": "n"
  },
  {
    "id": "pet-693",
    "library": "pet",
    "word": "date",
    "meaning": "日期,约会,枣椰树；约会,定日期；注明日期,过时",
    "example": "I learned the word \"date\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-694",
    "library": "pet",
    "word": "destination",
    "meaning": "目的地,目标,目的；[计]目的文件,目的单元",
    "example": "I learned the word \"destination\" today.",
    "part": "n"
  },
  {
    "id": "pet-695",
    "library": "pet",
    "word": "destroy",
    "meaning": "破坏,毁坏,消灭",
    "example": "I learned the word \"destroy\" today.",
    "part": "v"
  },
  {
    "id": "pet-696",
    "library": "pet",
    "word": "daughter",
    "meaning": "女儿；a.女儿的",
    "example": "I learned the word \"daughter\" today.",
    "part": "n"
  },
  {
    "id": "pet-697",
    "library": "pet",
    "word": "detail",
    "meaning": "细节,详情；详述,选派；画详图",
    "example": "I learned the word \"detail\" today.",
    "part": "n"
  },
  {
    "id": "pet-698",
    "library": "pet",
    "word": "day",
    "meaning": "天,日子,白天,工作日；[医]日(一昼夜),昼,白天",
    "example": "I learned the word \"day\" today.",
    "part": "n"
  },
  {
    "id": "pet-699",
    "library": "pet",
    "word": "detective",
    "meaning": "侦探；a.侦探的",
    "example": "I learned the word \"detective\" today.",
    "part": "n"
  },
  {
    "id": "pet-700",
    "library": "pet",
    "word": "dead",
    "meaning": "a.死的,不活泼的,麻木的,熄灭的；死者；完全地,直接地",
    "example": "I learned the word \"dead\" today.",
    "part": "adj"
  },
  {
    "id": "pet-701",
    "library": "pet",
    "word": "develop",
    "meaning": "发展,使发达,进步,洗印,显影；发展,生长",
    "example": "I learned the word \"develop\" today.",
    "part": "v"
  },
  {
    "id": "pet-702",
    "library": "pet",
    "word": "deaf",
    "meaning": "a.聋的；[医]聋的",
    "example": "I learned the word \"deaf\" today.",
    "part": "adj"
  },
  {
    "id": "pet-703",
    "library": "pet",
    "word": "development",
    "meaning": "发展；[化]展开",
    "example": "I learned the word \"development\" today.",
    "part": "n"
  },
  {
    "id": "pet-704",
    "library": "pet",
    "word": "deal",
    "meaning": "交易,协定,数量,买卖,松木板；处理,应付,做生意；分配,发牌,给予",
    "example": "I learned the word \"deal\" today.",
    "part": "v"
  },
  {
    "id": "pet-705",
    "library": "pet",
    "word": "diagram",
    "meaning": "图表；图解",
    "example": "I learned the word \"diagram\" today.",
    "part": "n"
  },
  {
    "id": "pet-706",
    "library": "pet",
    "word": "dial",
    "meaning": "刻度盘,钟面,转盘；拨",
    "example": "I learned the word \"dial\" today.",
    "part": "v"
  },
  {
    "id": "pet-707",
    "library": "pet",
    "word": "diary",
    "meaning": "日记；[经]日记簿",
    "example": "I learned the word \"diary\" today.",
    "part": "n"
  },
  {
    "id": "pet-708",
    "library": "pet",
    "word": "dictionary",
    "meaning": "字典,词典；[计]词典",
    "example": "I learned the word \"dictionary\" today.",
    "part": "n"
  },
  {
    "id": "pet-709",
    "library": "pet",
    "word": "dear",
    "meaning": "亲爱的人；a.亲爱的,昂贵的,严重的,急迫的；interj.啊",
    "example": "I learned the word \"dear\" today.",
    "part": "adj & exclam"
  },
  {
    "id": "pet-710",
    "library": "pet",
    "word": "die",
    "meaning": "死亡,消逝,平息,熄灭,漠然,渴望；死；骰子,冲模",
    "example": "I learned the word \"die\" today.",
    "part": "v"
  },
  {
    "id": "pet-711",
    "library": "pet",
    "word": "diet",
    "meaning": "日常饮食,议会；照规定饮食；忌食",
    "example": "I learned the word \"diet\" today.",
    "part": "n"
  },
  {
    "id": "pet-712",
    "library": "pet",
    "word": "difference",
    "meaning": "不同,差异；[计]差分",
    "example": "I learned the word \"difference\" today.",
    "part": "n"
  },
  {
    "id": "pet-713",
    "library": "pet",
    "word": "different",
    "meaning": "a.不同的；[机]差动,微分的,差速器",
    "example": "I learned the word \"different\" today.",
    "part": "adj"
  },
  {
    "id": "pet-714",
    "library": "pet",
    "word": "difficult",
    "meaning": "a.困难的",
    "example": "I learned the word \"difficult\" today.",
    "part": "adj"
  },
  {
    "id": "pet-715",
    "library": "pet",
    "word": "death",
    "meaning": "死亡；[医]死亡",
    "example": "I learned the word \"death\" today.",
    "part": "n"
  },
  {
    "id": "pet-716",
    "library": "pet",
    "word": "difficulty",
    "meaning": "困难,难点",
    "example": "I learned the word \"difficulty\" today.",
    "part": "n"
  },
  {
    "id": "pet-717",
    "library": "pet",
    "word": "decide",
    "meaning": "决定,判决",
    "example": "I learned the word \"decide\" today.",
    "part": "v"
  },
  {
    "id": "pet-718",
    "library": "pet",
    "word": "dig",
    "meaning": "挖,翻土,发掘；挖掘；挖掘",
    "example": "I learned the word \"dig\" today.",
    "part": "v"
  },
  {
    "id": "pet-719",
    "library": "pet",
    "word": "decision",
    "meaning": "决定,决心,决断；[计]判定",
    "example": "I learned the word \"decision\" today.",
    "part": "n"
  },
  {
    "id": "pet-720",
    "library": "pet",
    "word": "digital",
    "meaning": "a.数字显示的,数字的；数字仪表,数字式电子表(或时钟)；[计]数字,数字式",
    "example": "I learned the word \"digital\" today.",
    "part": "adj"
  },
  {
    "id": "pet-721",
    "library": "pet",
    "word": "declare",
    "meaning": "宣布,声明,申报,断言",
    "example": "I learned the word \"declare\" today.",
    "part": "v"
  },
  {
    "id": "pet-722",
    "library": "pet",
    "word": "digital camera",
    "meaning": "数码相机",
    "example": "Try to use \"digital camera\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-723",
    "library": "pet",
    "word": "decorate",
    "meaning": "装饰",
    "example": "I learned the word \"decorate\" today.",
    "part": "v"
  },
  {
    "id": "pet-724",
    "library": "pet",
    "word": "dining room",
    "meaning": "饭厅",
    "example": "Try to use \"dining room\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-725",
    "library": "pet",
    "word": "decrease",
    "meaning": "减少,减少量；减少",
    "example": "I learned the word \"decrease\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-726",
    "library": "pet",
    "word": "dinner",
    "meaning": "晚餐,正餐,宴会",
    "example": "I learned the word \"dinner\" today.",
    "part": "n"
  },
  {
    "id": "pet-727",
    "library": "pet",
    "word": "deep",
    "meaning": "a.深的；深入地；深渊,深处",
    "example": "I learned the word \"deep\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-728",
    "library": "pet",
    "word": "dinosaur",
    "meaning": "恐龙",
    "example": "I learned the word \"dinosaur\" today.",
    "part": "n"
  },
  {
    "id": "pet-729",
    "library": "pet",
    "word": "defeat",
    "meaning": "败北,失败；击败,使落空",
    "example": "I learned the word \"defeat\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-730",
    "library": "pet",
    "word": "diploma",
    "meaning": "文凭,毕业证书；[医]文凭",
    "example": "I learned the word \"diploma\" today.",
    "part": "n"
  },
  {
    "id": "pet-731",
    "library": "pet",
    "word": "defence",
    "meaning": "防卫,防卫设备；[经](诉讼程序中的)辩护",
    "example": "I learned the word \"defence\" today.",
    "part": "n"
  },
  {
    "id": "pet-732",
    "library": "pet",
    "word": "direct",
    "meaning": "a.直接的,坦白的；指示,指挥,命令,导演；指导,指挥",
    "example": "I learned the word \"direct\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-733",
    "library": "pet",
    "word": "defend",
    "meaning": "防护,辩护,防卫；[法]作...的辩护律师,辩护,为...答辩",
    "example": "I learned the word \"defend\" today.",
    "part": "v"
  },
  {
    "id": "pet-734",
    "library": "pet",
    "word": "direction",
    "meaning": "方向,指导,趋势；[计]方向；流向",
    "example": "I learned the word \"direction\" today.",
    "part": "n"
  },
  {
    "id": "pet-735",
    "library": "pet",
    "word": "definitely",
    "meaning": "明确无疑地,清楚地",
    "example": "I learned the word \"definitely\" today.",
    "part": "adv"
  },
  {
    "id": "pet-736",
    "library": "pet",
    "word": "directly",
    "meaning": "径直地,直接地,直率地,正好地,直截了当地,(非正式)立即,马上；一...(就...),一当...就...；[计]直接的",
    "example": "I learned the word \"directly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-737",
    "library": "pet",
    "word": "degree",
    "meaning": "程度,度数,学位,度；[医]度,程度",
    "example": "I learned the word \"degree\" today.",
    "part": "n"
  },
  {
    "id": "pet-738",
    "library": "pet",
    "word": "director",
    "meaning": "主管,导演,董事；[计]寻向偶极子；指挥仪",
    "example": "I learned the word \"director\" today.",
    "part": "n"
  },
  {
    "id": "pet-739",
    "library": "pet",
    "word": "dirt",
    "meaning": "污垢,泥土；[化]污垢",
    "example": "I learned the word \"dirt\" today.",
    "part": "n"
  },
  {
    "id": "pet-740",
    "library": "pet",
    "word": "dirty",
    "meaning": "a.肮脏的,卑鄙的；弄脏；变脏",
    "example": "I learned the word \"dirty\" today.",
    "part": "adj"
  },
  {
    "id": "pet-741",
    "library": "pet",
    "word": "delay",
    "meaning": "耽搁,迟滞；耽搁,延迟；[计]延迟,延时",
    "example": "I learned the word \"delay\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-742",
    "library": "pet",
    "word": "disabled",
    "meaning": "a.残废的,有缺陷的,失效的；[计]失效的",
    "example": "I learned the word \"disabled\" today.",
    "part": "adj"
  },
  {
    "id": "pet-743",
    "library": "pet",
    "word": "delete",
    "meaning": "删除；[计]删除",
    "example": "I learned the word \"delete\" today.",
    "part": "v"
  },
  {
    "id": "pet-744",
    "library": "pet",
    "word": "disadvantage",
    "meaning": "缺点,不利,坏处",
    "example": "I learned the word \"disadvantage\" today.",
    "part": "n"
  },
  {
    "id": "pet-745",
    "library": "pet",
    "word": "delicious",
    "meaning": "a.美味的",
    "example": "I learned the word \"delicious\" today.",
    "part": "adj"
  },
  {
    "id": "pet-746",
    "library": "pet",
    "word": "disagree",
    "meaning": "不一致,不适宜；[法]抵触,不同意,争执",
    "example": "I learned the word \"disagree\" today.",
    "part": "v"
  },
  {
    "id": "pet-747",
    "library": "pet",
    "word": "delighted",
    "meaning": "a.高兴的,快乐的",
    "example": "I learned the word \"delighted\" today.",
    "part": "adj"
  },
  {
    "id": "pet-748",
    "library": "pet",
    "word": "disappear",
    "meaning": "消失,不见",
    "example": "I learned the word \"disappear\" today.",
    "part": "v"
  },
  {
    "id": "pet-749",
    "library": "pet",
    "word": "deliver",
    "meaning": "递送,陈述,释放,发表,引渡,投递,交付；[经]交运",
    "example": "I learned the word \"deliver\" today.",
    "part": "v"
  },
  {
    "id": "pet-750",
    "library": "pet",
    "word": "disappoint",
    "meaning": "使失望",
    "example": "I learned the word \"disappoint\" today.",
    "part": "v"
  },
  {
    "id": "pet-751",
    "library": "pet",
    "word": "delivery",
    "meaning": "递送,交付,分娩,交货,引渡；[化]交货额",
    "example": "I learned the word \"delivery\" today.",
    "part": "n"
  },
  {
    "id": "pet-752",
    "library": "pet",
    "word": "disappointed",
    "meaning": "a.失望的",
    "example": "I learned the word \"disappointed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-753",
    "library": "pet",
    "word": "demand",
    "meaning": "要求,需求,需要；要求,查询",
    "example": "I learned the word \"demand\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-754",
    "library": "pet",
    "word": "disappointing",
    "meaning": "a.使失望的,期待落空的,令人沮丧的",
    "example": "I learned the word \"disappointing\" today.",
    "part": "adj"
  },
  {
    "id": "pet-755",
    "library": "pet",
    "word": "dentist",
    "meaning": "牙科医生；[医]牙医师",
    "example": "I learned the word \"dentist\" today.",
    "part": "n"
  },
  {
    "id": "pet-756",
    "library": "pet",
    "word": "disappointment",
    "meaning": "失望",
    "example": "I learned the word \"disappointment\" today.",
    "part": "n"
  },
  {
    "id": "pet-757",
    "library": "pet",
    "word": "depart",
    "meaning": "离开,出发,背离,违反,去世",
    "example": "I learned the word \"depart\" today.",
    "part": "v"
  },
  {
    "id": "pet-758",
    "library": "pet",
    "word": "disc",
    "meaning": "圆盘,唱片；灌唱片",
    "example": "I learned the word \"disc\" today.",
    "part": "n",
    "aliases": [
      "disc/disk",
      "disk"
    ]
  },
  {
    "id": "pet-759",
    "library": "pet",
    "word": "department",
    "meaning": "部门,系,机关；[医]部,科",
    "example": "I learned the word \"department\" today.",
    "part": "n"
  },
  {
    "id": "pet-760",
    "library": "pet",
    "word": "department store",
    "meaning": "百货公司；[经]百货商店",
    "example": "Try to use \"department store\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-761",
    "library": "pet",
    "word": "departure",
    "meaning": "离开,出发,违背,偏离；[经]启运",
    "example": "I learned the word \"departure\" today.",
    "part": "n"
  },
  {
    "id": "pet-762",
    "library": "pet",
    "word": "discount",
    "meaning": "折扣,贴现率；打折扣；贴现",
    "example": "I learned the word \"discount\" today.",
    "part": "n"
  },
  {
    "id": "pet-763",
    "library": "pet",
    "word": "discover",
    "meaning": "发现,找到,暴露；发现",
    "example": "I learned the word \"discover\" today.",
    "part": "v"
  },
  {
    "id": "pet-764",
    "library": "pet",
    "word": "discovery",
    "meaning": "发现,被发现的事物；[法]要求告知,发现,发觉",
    "example": "I learned the word \"discovery\" today.",
    "part": "n"
  },
  {
    "id": "pet-765",
    "library": "pet",
    "word": "driving licence",
    "meaning": "驾驶执照",
    "example": "Try to use \"driving licence\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-766",
    "library": "pet",
    "word": "discuss",
    "meaning": "讨论,论述；[医]讨论,辩论",
    "example": "I learned the word \"discuss\" today.",
    "part": "v"
  },
  {
    "id": "pet-767",
    "library": "pet",
    "word": "drop",
    "meaning": "滴,微量,落下,空投；放下,掉下,下降；使滴下,放下,丢失,遗漏",
    "example": "I learned the word \"drop\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-768",
    "library": "pet",
    "word": "discussion",
    "meaning": "讨论",
    "example": "I learned the word \"discussion\" today.",
    "part": "n"
  },
  {
    "id": "pet-769",
    "library": "pet",
    "word": "drugstore",
    "meaning": "药房,杂货店",
    "example": "I learned the word \"drugstore\" today.",
    "part": "n"
  },
  {
    "id": "pet-770",
    "library": "pet",
    "word": "disease",
    "meaning": "疾病,弊病；[医][疾]病",
    "example": "I learned the word \"disease\" today.",
    "part": "n"
  },
  {
    "id": "pet-771",
    "library": "pet",
    "word": "drum",
    "meaning": "鼓,鼓声；击鼓,作鼓声；打鼓奏出",
    "example": "I learned the word \"drum\" today.",
    "part": "n"
  },
  {
    "id": "pet-772",
    "library": "pet",
    "word": "disgusting",
    "meaning": "a.令人厌恶的",
    "example": "I learned the word \"disgusting\" today.",
    "part": "adj"
  },
  {
    "id": "pet-773",
    "library": "pet",
    "word": "dry",
    "meaning": "a.干的,无酒的,枯燥无味的,干燥的；把...弄干；变干",
    "example": "I learned the word \"dry\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-774",
    "library": "pet",
    "word": "dish",
    "meaning": "盘子,碟,菜肴；[医]皿,碟",
    "example": "I learned the word \"dish\" today.",
    "part": "n"
  },
  {
    "id": "pet-775",
    "library": "pet",
    "word": "duck",
    "meaning": "鸭子；没入水中,闪避；猛按...入水,躲避",
    "example": "I learned the word \"duck\" today.",
    "part": "n"
  },
  {
    "id": "pet-776",
    "library": "pet",
    "word": "dishwasher",
    "meaning": "洗碗机,洗碗工",
    "example": "I learned the word \"dishwasher\" today.",
    "part": "n"
  },
  {
    "id": "pet-777",
    "library": "pet",
    "word": "due",
    "meaning": "应得的东西,应付款；a.到期的,应得的,应付的,约定的",
    "example": "I learned the word \"due\" today.",
    "part": "adj"
  },
  {
    "id": "pet-778",
    "library": "pet",
    "word": "disk",
    "meaning": "圆盘,磁盘；[计]磁盘",
    "example": "I learned the word \"disk\" today.",
    "part": "n"
  },
  {
    "id": "pet-779",
    "library": "pet",
    "word": "dislike",
    "meaning": "嫌恶；讨厌,不喜欢",
    "example": "I learned the word \"dislike\" today.",
    "part": "v"
  },
  {
    "id": "pet-780",
    "library": "pet",
    "word": "due to",
    "meaning": "由于,应归于",
    "example": "Try to use \"due to\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-781",
    "library": "pet",
    "word": "display",
    "meaning": "显示,陈列,炫耀,显示器；陈列,显示,表现,夸示；[计]显示器",
    "example": "I learned the word \"display\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-782",
    "library": "pet",
    "word": "dull",
    "meaning": "a.钝的,无趣的,呆滞的,阴暗的；使迟钝,使阴暗,缓和；变迟钝,减少",
    "example": "I learned the word \"dull\" today.",
    "part": "adj"
  },
  {
    "id": "pet-783",
    "library": "pet",
    "word": "distance",
    "meaning": "距离,远方,遥远；[计]位距",
    "example": "I learned the word \"distance\" today.",
    "part": "n"
  },
  {
    "id": "pet-784",
    "library": "pet",
    "word": "during",
    "meaning": "在...的时候",
    "example": "I learned the word \"during\" today.",
    "part": "prep"
  },
  {
    "id": "pet-785",
    "library": "pet",
    "word": "district",
    "meaning": "区域,地方；[医]地区,地段",
    "example": "I learned the word \"district\" today.",
    "part": "n"
  },
  {
    "id": "pet-786",
    "library": "pet",
    "word": "dust",
    "meaning": "灰尘,尘埃,粉末,花粉,土,骚乱；拂去灰尘,撒,弄成粉末；拂去灰尘,化为粉末",
    "example": "I learned the word \"dust\" today.",
    "part": "n"
  },
  {
    "id": "pet-787",
    "library": "pet",
    "word": "disturb",
    "meaning": "扰乱,妨碍,使不安；[法]滋扰,扰乱",
    "example": "I learned the word \"disturb\" today.",
    "part": "v"
  },
  {
    "id": "pet-788",
    "library": "pet",
    "word": "dustbin",
    "meaning": "垃圾箱",
    "example": "I learned the word \"dustbin\" today.",
    "part": "n"
  },
  {
    "id": "pet-789",
    "library": "pet",
    "word": "dive",
    "meaning": "潜水,跳水；跳水,俯冲,猛冲；把...突然伸入",
    "example": "I learned the word \"dive\" today.",
    "part": "v"
  },
  {
    "id": "pet-790",
    "library": "pet",
    "word": "dusty",
    "meaning": "a.灰尘多的,无聊的,含糊的,粉末状的",
    "example": "I learned the word \"dusty\" today.",
    "part": "adj"
  },
  {
    "id": "pet-791",
    "library": "pet",
    "word": "diver",
    "meaning": "潜水者",
    "example": "I learned the word \"diver\" today.",
    "part": "n"
  },
  {
    "id": "pet-792",
    "library": "pet",
    "word": "duty",
    "meaning": "责任,关税,职务,尊敬；[化]职责",
    "example": "I learned the word \"duty\" today.",
    "part": "n"
  },
  {
    "id": "pet-793",
    "library": "pet",
    "word": "divide",
    "meaning": "分开,分配,分裂；分,分开,分裂,除；分配,分水岭",
    "example": "I learned the word \"divide\" today.",
    "part": "v"
  },
  {
    "id": "pet-794",
    "library": "pet",
    "word": "duty-free",
    "meaning": "a.免税的；[法]免税的",
    "example": "I learned the word \"duty-free\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-795",
    "library": "pet",
    "word": "diving",
    "meaning": "潜水,跳水",
    "example": "I learned the word \"diving\" today.",
    "part": "n"
  },
  {
    "id": "pet-796",
    "library": "pet",
    "word": "duvet",
    "meaning": "羽绒被",
    "example": "I learned the word \"duvet\" today.",
    "part": "n"
  },
  {
    "id": "pet-797",
    "library": "pet",
    "word": "DVD",
    "meaning": "数字化视频光盘（DigitalVideoDisk）",
    "example": "I learned the word \"DVD\" today.",
    "part": "n"
  },
  {
    "id": "pet-798",
    "library": "pet",
    "word": "do",
    "meaning": "做,进行,完成",
    "example": "I learned the word \"do\" today.",
    "part": "av & v"
  },
  {
    "id": "pet-799",
    "library": "pet",
    "word": "DVD player",
    "meaning": "数字化视频光盘（DigitalVideoDisk）",
    "example": "Try to use \"DVD player\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-800",
    "library": "pet",
    "word": "Dr",
    "meaning": "博士,医生；[医]英钱",
    "example": "I learned the word \"Dr\" today.",
    "part": "n",
    "aliases": [
      "doctor",
      "doctor/Dr"
    ]
  },
  {
    "id": "pet-801",
    "library": "pet",
    "word": "document",
    "meaning": "文件,公文,文档；证明,为...引证；[计]文档",
    "example": "I learned the word \"document\" today.",
    "part": "n"
  },
  {
    "id": "pet-802",
    "library": "pet",
    "word": "documentary",
    "meaning": "记录片；a.文件的",
    "example": "I learned the word \"documentary\" today.",
    "part": "n"
  },
  {
    "id": "pet-803",
    "library": "pet",
    "word": "dog",
    "meaning": "狗,坏蛋；跟踪,尾随",
    "example": "I learned the word \"dog\" today.",
    "part": "n"
  },
  {
    "id": "pet-804",
    "library": "pet",
    "word": "doll",
    "meaning": "洋娃娃,无头脑的美丽女人",
    "example": "I learned the word \"doll\" today.",
    "part": "n"
  },
  {
    "id": "pet-805",
    "library": "pet",
    "word": "each",
    "meaning": "a.每个,每一；每个；每个,个人,各自",
    "example": "I learned the word \"each\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-806",
    "library": "pet",
    "word": "dollar",
    "meaning": "美元,元(加、澳等国货币单位)；[经]纯经济的,美元,元",
    "example": "I learned the word \"dollar\" today.",
    "part": "n"
  },
  {
    "id": "pet-807",
    "library": "pet",
    "word": "ear",
    "meaning": "耳朵,倾听,听觉,穗；抽穗",
    "example": "I learned the word \"ear\" today.",
    "part": "n"
  },
  {
    "id": "pet-808",
    "library": "pet",
    "word": "dolphin",
    "meaning": "海豚",
    "example": "I learned the word \"dolphin\" today.",
    "part": "n"
  },
  {
    "id": "pet-809",
    "library": "pet",
    "word": "earache",
    "meaning": "耳朵痛；[医]耳痛",
    "example": "I learned the word \"earache\" today.",
    "part": "n"
  },
  {
    "id": "pet-810",
    "library": "pet",
    "word": "donkey",
    "meaning": "驴子,笨蛋,顽固者,辅助发动机,辅助泵",
    "example": "I learned the word \"donkey\" today.",
    "part": "n"
  },
  {
    "id": "pet-811",
    "library": "pet",
    "word": "early",
    "meaning": "a.早的,早熟的；很早,初",
    "example": "I learned the word \"early\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-812",
    "library": "pet",
    "word": "door",
    "meaning": "门",
    "example": "I learned the word \"door\" today.",
    "part": "n"
  },
  {
    "id": "pet-813",
    "library": "pet",
    "word": "earn",
    "meaning": "赚得,获得,博得；[计]欧州科学研究网",
    "example": "I learned the word \"earn\" today.",
    "part": "v"
  },
  {
    "id": "pet-814",
    "library": "pet",
    "word": "dot",
    "meaning": "点,圆点,小数点,小东西,嫁妆；作小点记号,加小点于；打上点",
    "example": "I learned the word \"dot\" today.",
    "part": "n"
  },
  {
    "id": "pet-815",
    "library": "pet",
    "word": "earring",
    "meaning": "耳环,耳饰",
    "example": "I learned the word \"earring\" today.",
    "part": "n"
  },
  {
    "id": "pet-816",
    "library": "pet",
    "word": "earth",
    "meaning": "地球,泥土,世界,尘世；埋入土中,赶入洞内；躲入洞内",
    "example": "I learned the word \"earth\" today.",
    "part": "n"
  },
  {
    "id": "pet-817",
    "library": "pet",
    "word": "east",
    "meaning": "东方,东；a.东方的,向东的；向东方,朝东方",
    "example": "I learned the word \"east\" today.",
    "part": "adj, adv & n"
  },
  {
    "id": "pet-818",
    "library": "pet",
    "word": "double",
    "meaning": "两倍；a.两倍的,双重的；使加倍",
    "example": "I learned the word \"double\" today.",
    "part": "adj & det"
  },
  {
    "id": "pet-819",
    "library": "pet",
    "word": "eastern",
    "meaning": "东方人,东正教徒；a.东方的,向东的,自东的",
    "example": "I learned the word \"eastern\" today.",
    "part": "adj"
  },
  {
    "id": "pet-820",
    "library": "pet",
    "word": "doubt",
    "meaning": "怀疑,疑惑；怀疑,不信",
    "example": "I learned the word \"doubt\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-821",
    "library": "pet",
    "word": "easily",
    "meaning": "容易地,轻易地,流利地",
    "example": "I learned the word \"easily\" today.",
    "part": "adv"
  },
  {
    "id": "pet-822",
    "library": "pet",
    "word": "easy",
    "meaning": "a.容易的,缓缓的,舒适的,从容的,宽容的,流畅的,随便的,自在的,疲软的；容易地,慢慢地",
    "example": "I learned the word \"easy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-823",
    "library": "pet",
    "word": "down",
    "meaning": "a.向下的；下,下去,降下；往下,沿着",
    "example": "I learned the word \"down\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-824",
    "library": "pet",
    "word": "easygoing",
    "meaning": "a.脾气随和的,逍遥自在的,悠闲的,懒散的",
    "example": "I learned the word \"easygoing\" today.",
    "part": "adj"
  },
  {
    "id": "pet-825",
    "library": "pet",
    "word": "download",
    "meaning": "[计]卸载,下栽",
    "example": "I learned the word \"download\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-826",
    "library": "pet",
    "word": "eat",
    "meaning": "吃,腐蚀",
    "example": "I learned the word \"eat\" today.",
    "part": "v"
  },
  {
    "id": "pet-827",
    "library": "pet",
    "word": "downstairs",
    "meaning": "楼下；a.楼下的；在楼下",
    "example": "I learned the word \"downstairs\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-828",
    "library": "pet",
    "word": "economics",
    "meaning": "经济学；[经]经济学",
    "example": "I learned the word \"economics\" today.",
    "part": "n"
  },
  {
    "id": "pet-829",
    "library": "pet",
    "word": "dozen",
    "meaning": "打,十二个；a.一打的",
    "example": "I learned the word \"dozen\" today.",
    "part": "det & n"
  },
  {
    "id": "pet-830",
    "library": "pet",
    "word": "edge",
    "meaning": "边缘,尖锐,刀刃,优势；使锐利,挤进,镶边；缓缓移动",
    "example": "I learned the word \"edge\" today.",
    "part": "n"
  },
  {
    "id": "pet-831",
    "library": "pet",
    "word": "Dr",
    "meaning": "博士,医生；[医]英钱",
    "example": "I learned the word \"Dr\" today.",
    "part": "n"
  },
  {
    "id": "pet-832",
    "library": "pet",
    "word": "education",
    "meaning": "教育,训练,教育学；[医]教育,训练",
    "example": "I learned the word \"education\" today.",
    "part": "n"
  },
  {
    "id": "pet-833",
    "library": "pet",
    "word": "drag",
    "meaning": "拖,拖累；拖累,拖拉,沉重缓慢地走,拖动；[计]拖动",
    "example": "I learned the word \"drag\" today.",
    "part": "v"
  },
  {
    "id": "pet-834",
    "library": "pet",
    "word": "effect",
    "meaning": "结果,影响,效果,印象；实行,引起,完成；[计]效果",
    "example": "I learned the word \"effect\" today.",
    "part": "n"
  },
  {
    "id": "pet-835",
    "library": "pet",
    "word": "efficient",
    "meaning": "a.有效率的,能干的",
    "example": "I learned the word \"efficient\" today.",
    "part": "adj"
  },
  {
    "id": "pet-836",
    "library": "pet",
    "word": "effort",
    "meaning": "努力,成就",
    "example": "I learned the word \"effort\" today.",
    "part": "n"
  },
  {
    "id": "pet-837",
    "library": "pet",
    "word": "drama",
    "meaning": "戏剧,戏剧艺术",
    "example": "I learned the word \"drama\" today.",
    "part": "n"
  },
  {
    "id": "pet-838",
    "library": "pet",
    "word": "egg",
    "meaning": "蛋,卵；挑唆,煽动,调蛋黄",
    "example": "I learned the word \"egg\" today.",
    "part": "n"
  },
  {
    "id": "pet-839",
    "library": "pet",
    "word": "draw",
    "meaning": "拉,拖,拔剑；拖拉,挨近,领取,打成平局,引导,抽签决定,画,描写,制订,草拟,吸引；拉,拖,拔出,抽签,平局",
    "example": "I learned the word \"draw\" today.",
    "part": "v"
  },
  {
    "id": "pet-840",
    "library": "pet",
    "word": "either",
    "meaning": "a.(两者之中)任一的,(两者之中)各一的；(两者之中)任一；或,要么",
    "example": "I learned the word \"either\" today.",
    "part": "adv, det & pron"
  },
  {
    "id": "pet-841",
    "library": "pet",
    "word": "elbow",
    "meaning": "手肘,弯头,扶手；用手肘推开,推挤",
    "example": "I learned the word \"elbow\" today.",
    "part": "n"
  },
  {
    "id": "pet-842",
    "library": "pet",
    "word": "elder",
    "meaning": "年长者,老人,前辈；a.年长的,资深的",
    "example": "I learned the word \"elder\" today.",
    "part": "adj"
  },
  {
    "id": "pet-843",
    "library": "pet",
    "word": "elderly",
    "meaning": "a.过了中年的,稍老的",
    "example": "I learned the word \"elderly\" today.",
    "part": "adj"
  },
  {
    "id": "pet-844",
    "library": "pet",
    "word": "election",
    "meaning": "选举,当选,选择权；[法]选举,当选",
    "example": "I learned the word \"election\" today.",
    "part": "n"
  },
  {
    "id": "pet-845",
    "library": "pet",
    "word": "electric",
    "meaning": "a.电的,导电的,电动的；[医]电的",
    "example": "I learned the word \"electric\" today.",
    "part": "adj"
  },
  {
    "id": "pet-846",
    "library": "pet",
    "word": "drawer",
    "meaning": "抽屉,开票人；[计]抽屉",
    "example": "I learned the word \"drawer\" today.",
    "part": "n"
  },
  {
    "id": "pet-847",
    "library": "pet",
    "word": "electrical",
    "meaning": "a.电的,有关电的；[医]电的",
    "example": "I learned the word \"electrical\" today.",
    "part": "adj"
  },
  {
    "id": "pet-848",
    "library": "pet",
    "word": "drawing",
    "meaning": "图画,制图,拉；[计]绘图",
    "example": "I learned the word \"drawing\" today.",
    "part": "n"
  },
  {
    "id": "pet-849",
    "library": "pet",
    "word": "electricity",
    "meaning": "电,电流,电学,热情,电力供应；[化]电学；电",
    "example": "I learned the word \"electricity\" today.",
    "part": "n"
  },
  {
    "id": "pet-850",
    "library": "pet",
    "word": "dream",
    "meaning": "梦,空想,愿望；做梦,想象,梦想",
    "example": "I learned the word \"dream\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-851",
    "library": "pet",
    "word": "electronic",
    "meaning": "a.电子的；[计]电子工业协会接口",
    "example": "I learned the word \"electronic\" today.",
    "part": "adj"
  },
  {
    "id": "pet-852",
    "library": "pet",
    "word": "dress",
    "meaning": "服装,覆盖物；穿着；给...穿衣,整理",
    "example": "I learned the word \"dress\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-853",
    "library": "pet",
    "word": "elementary",
    "meaning": "a.初步的,基本的；[医]元素的,基础的,初级的",
    "example": "I learned the word \"elementary\" today.",
    "part": "adj"
  },
  {
    "id": "pet-854",
    "library": "pet",
    "word": "dressed",
    "meaning": "a.穿好衣服的；打扮好的；去内脏及分割加工好的（特指动物,如鱼,禽类等）",
    "example": "I learned the word \"dressed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-855",
    "library": "pet",
    "word": "elephant",
    "meaning": "象",
    "example": "I learned the word \"elephant\" today.",
    "part": "n"
  },
  {
    "id": "pet-856",
    "library": "pet",
    "word": "drink",
    "meaning": "饮料,酒；喝,喝酒",
    "example": "I learned the word \"drink\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-857",
    "library": "pet",
    "word": "elevator",
    "meaning": "电梯,升降机；[化]提升机",
    "example": "I learned the word \"elevator\" today.",
    "part": "n"
  },
  {
    "id": "pet-858",
    "library": "pet",
    "word": "drive",
    "meaning": "驾车,快车道,推进力,驱动,动力,击球,驱动器；开车,驱使,推动,驾驶；开车,猛击,飞跑",
    "example": "I learned the word \"drive\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-859",
    "library": "pet",
    "word": "else",
    "meaning": "a.别的,其他的；另外,否则,不然",
    "example": "I learned the word \"else\" today.",
    "part": "adv"
  },
  {
    "id": "pet-860",
    "library": "pet",
    "word": "driver",
    "meaning": "驾驶员,驱动器,驱动程序；[化]驱动器",
    "example": "I learned the word \"driver\" today.",
    "part": "n"
  },
  {
    "id": "pet-861",
    "library": "pet",
    "word": "email",
    "meaning": "电子信函",
    "example": "I learned the word \"email\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-862",
    "library": "pet",
    "word": "everyone",
    "meaning": "每个人,人人；[计]系统中的一个组名",
    "example": "I learned the word \"everyone\" today.",
    "part": "pron"
  },
  {
    "id": "pet-863",
    "library": "pet",
    "word": "embarrassed",
    "meaning": "a.尴尬的；窘迫的",
    "example": "I learned the word \"embarrassed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-864",
    "library": "pet",
    "word": "everything",
    "meaning": "每件事物,所有事物",
    "example": "I learned the word \"everything\" today.",
    "part": "pron"
  },
  {
    "id": "pet-865",
    "library": "pet",
    "word": "embarrassing",
    "meaning": "a.令人为难的,麻烦的",
    "example": "I learned the word \"embarrassing\" today.",
    "part": "adj"
  },
  {
    "id": "pet-866",
    "library": "pet",
    "word": "everywhere",
    "meaning": "各处,到处",
    "example": "I learned the word \"everywhere\" today.",
    "part": "adv"
  },
  {
    "id": "pet-867",
    "library": "pet",
    "word": "embassy",
    "meaning": "大使馆,大使馆全体人员；[经]大使馆",
    "example": "I learned the word \"embassy\" today.",
    "part": "n"
  },
  {
    "id": "pet-868",
    "library": "pet",
    "word": "exact",
    "meaning": "a.精确的,准确的,精密的；强求,急需",
    "example": "I learned the word \"exact\" today.",
    "part": "adj"
  },
  {
    "id": "pet-869",
    "library": "pet",
    "word": "emergency",
    "meaning": "紧急状况,紧急事件,紧急需要；[化]紧急情况",
    "example": "I learned the word \"emergency\" today.",
    "part": "n"
  },
  {
    "id": "pet-870",
    "library": "pet",
    "word": "exactly",
    "meaning": "确切地,精确地,恰好,完全地,确实,恰恰正是,确实如此",
    "example": "I learned the word \"exactly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-871",
    "library": "pet",
    "word": "employ",
    "meaning": "雇用；雇用,使用,使从事于",
    "example": "I learned the word \"employ\" today.",
    "part": "v"
  },
  {
    "id": "pet-872",
    "library": "pet",
    "word": "exam",
    "meaning": "考试,测验",
    "example": "I learned the word \"exam\" today.",
    "part": "n",
    "aliases": [
      "examination",
      "examination/exam"
    ]
  },
  {
    "id": "pet-873",
    "library": "pet",
    "word": "employee",
    "meaning": "职员,员工,受雇人员；[化]职工；雇员",
    "example": "I learned the word \"employee\" today.",
    "part": "n"
  },
  {
    "id": "pet-874",
    "library": "pet",
    "word": "examiner",
    "meaning": "检查人,审查人,主考者；[化]检验人；验收员",
    "example": "I learned the word \"examiner\" today.",
    "part": "n"
  },
  {
    "id": "pet-875",
    "library": "pet",
    "word": "employer",
    "meaning": "雇主,老板；[经]雇主,业主",
    "example": "I learned the word \"employer\" today.",
    "part": "n"
  },
  {
    "id": "pet-876",
    "library": "pet",
    "word": "example",
    "meaning": "例子,样本,实例；[化]实例",
    "example": "I learned the word \"example\" today.",
    "part": "n"
  },
  {
    "id": "pet-877",
    "library": "pet",
    "word": "employment",
    "meaning": "雇用,职业,工作；[经]职业,雇用,职工招请",
    "example": "I learned the word \"employment\" today.",
    "part": "n"
  },
  {
    "id": "pet-878",
    "library": "pet",
    "word": "excellent",
    "meaning": "a.优良的,杰出的,出色的",
    "example": "I learned the word \"excellent\" today.",
    "part": "adj"
  },
  {
    "id": "pet-879",
    "library": "pet",
    "word": "empty",
    "meaning": "a.空的,空虚的,空腹的,空洞的；空的东西,空车；倒空,使变空,使排出",
    "example": "I learned the word \"empty\" today.",
    "part": "adj"
  },
  {
    "id": "pet-880",
    "library": "pet",
    "word": "except",
    "meaning": "除,除外；反对；除了...之外,若不是,除非",
    "example": "I learned the word \"except\" today.",
    "part": "prep, conj"
  },
  {
    "id": "pet-881",
    "library": "pet",
    "word": "encourage",
    "meaning": "鼓励,支持,激励；[法]怂恿,煽动,助长",
    "example": "I learned the word \"encourage\" today.",
    "part": "v"
  },
  {
    "id": "pet-882",
    "library": "pet",
    "word": "exchange",
    "meaning": "交换,(电话)交换局,交换机,汇兑,交易所；交换,交易,兑换；[计]交换",
    "example": "I learned the word \"exchange\" today.",
    "part": "n"
  },
  {
    "id": "pet-883",
    "library": "pet",
    "word": "end",
    "meaning": "结束,终点,目标,末端,梢,死亡,残余；结束,终结,终止；[计]端",
    "example": "I learned the word \"end\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-884",
    "library": "pet",
    "word": "ending",
    "meaning": "终止,终了,收场；[医]末梢",
    "example": "I learned the word \"ending\" today.",
    "part": "n"
  },
  {
    "id": "pet-885",
    "library": "pet",
    "word": "end up",
    "meaning": "竖着,结束,死",
    "example": "Try to use \"end up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-886",
    "library": "pet",
    "word": "exchange rate",
    "meaning": "汇率,兑换率",
    "example": "Try to use \"exchange rate\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-887",
    "library": "pet",
    "word": "excited",
    "meaning": "a.兴奋的,已励磁的,已激发的,激昂的,激动的",
    "example": "I learned the word \"excited\" today.",
    "part": "adj"
  },
  {
    "id": "pet-888",
    "library": "pet",
    "word": "enemy",
    "meaning": "敌人,仇敌,敌军；a.敌人的",
    "example": "I learned the word \"enemy\" today.",
    "part": "n"
  },
  {
    "id": "pet-889",
    "library": "pet",
    "word": "excitement",
    "meaning": "刺激,兴奋；[医]兴奋,激动",
    "example": "I learned the word \"excitement\" today.",
    "part": "n"
  },
  {
    "id": "pet-890",
    "library": "pet",
    "word": "energy",
    "meaning": "精力,精神,活力,能量；[化]能；能量",
    "example": "I learned the word \"energy\" today.",
    "part": "n"
  },
  {
    "id": "pet-891",
    "library": "pet",
    "word": "exciting",
    "meaning": "a.令人兴奋的,刺激的；[电]激磁",
    "example": "I learned the word \"exciting\" today.",
    "part": "adj"
  },
  {
    "id": "pet-892",
    "library": "pet",
    "word": "excuse",
    "meaning": "原谅,申辩,做为...的托辞；致歉,理由,饶恕,借口",
    "example": "I learned the word \"excuse\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-893",
    "library": "pet",
    "word": "exercise",
    "meaning": "行使,执行,运动,练习,作业；运用,练习,运动；练习,锻炼",
    "example": "I learned the word \"exercise\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-894",
    "library": "pet",
    "word": "exhausted",
    "meaning": "a.耗尽的；疲惫的",
    "example": "I learned the word \"exhausted\" today.",
    "part": "adj"
  },
  {
    "id": "pet-895",
    "library": "pet",
    "word": "engaged",
    "meaning": "a.忙碌的,使用中的",
    "example": "I learned the word \"engaged\" today.",
    "part": "adj"
  },
  {
    "id": "pet-896",
    "library": "pet",
    "word": "exhibition",
    "meaning": "表现,展览会,展览品；[医]投药,展览,展出",
    "example": "I learned the word \"exhibition\" today.",
    "part": "n"
  },
  {
    "id": "pet-897",
    "library": "pet",
    "word": "exist",
    "meaning": "存在,生存,发生",
    "example": "I learned the word \"exist\" today.",
    "part": "v"
  },
  {
    "id": "pet-898",
    "library": "pet",
    "word": "exit",
    "meaning": "出口,退场,离去,去世；退出,脱离,去世；[计]退出",
    "example": "I learned the word \"exit\" today.",
    "part": "n"
  },
  {
    "id": "pet-899",
    "library": "pet",
    "word": "engine",
    "meaning": "引擎,发动机,机车；安装发动机于",
    "example": "I learned the word \"engine\" today.",
    "part": "n"
  },
  {
    "id": "pet-900",
    "library": "pet",
    "word": "expect",
    "meaning": "预期,盼望,期待",
    "example": "I learned the word \"expect\" today.",
    "part": "v"
  },
  {
    "id": "pet-901",
    "library": "pet",
    "word": "expedition",
    "meaning": "远征,探险队,迅速",
    "example": "I learned the word \"expedition\" today.",
    "part": "n"
  },
  {
    "id": "pet-902",
    "library": "pet",
    "word": "engineer",
    "meaning": "工程师,工兵；设计,监造,精明地处理,策划",
    "example": "I learned the word \"engineer\" today.",
    "part": "n"
  },
  {
    "id": "pet-903",
    "library": "pet",
    "word": "expensive",
    "meaning": "a.贵的,奢华的,费用浩大的,乱化钱的；[经]高价的,昂贵的,浪费的",
    "example": "I learned the word \"expensive\" today.",
    "part": "adj"
  },
  {
    "id": "pet-904",
    "library": "pet",
    "word": "engineering",
    "meaning": "工程学,工程,操纵；[化]机器；机器学",
    "example": "I learned the word \"engineering\" today.",
    "part": "n"
  },
  {
    "id": "pet-905",
    "library": "pet",
    "word": "experience",
    "meaning": "经历,经验,体验；经历,经验,体验",
    "example": "I learned the word \"experience\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-906",
    "library": "pet",
    "word": "enjoy",
    "meaning": "享受,喜欢,欣赏；[法]享受,享有,获得某种利益",
    "example": "I learned the word \"enjoy\" today.",
    "part": "v"
  },
  {
    "id": "pet-907",
    "library": "pet",
    "word": "enjoyable",
    "meaning": "a.可从中得到乐趣的,令人愉快的",
    "example": "I learned the word \"enjoyable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-908",
    "library": "pet",
    "word": "enormous",
    "meaning": "a.巨大的,庞大的",
    "example": "I learned the word \"enormous\" today.",
    "part": "adj"
  },
  {
    "id": "pet-909",
    "library": "pet",
    "word": "experienced",
    "meaning": "a.富有经验的,老练的,熟练的",
    "example": "I learned the word \"experienced\" today.",
    "part": "adj"
  },
  {
    "id": "pet-910",
    "library": "pet",
    "word": "enough",
    "meaning": "充足,够,很多；a.充足的,足够；足够",
    "example": "I learned the word \"enough\" today.",
    "part": "adv, det & pron"
  },
  {
    "id": "pet-911",
    "library": "pet",
    "word": "enquire",
    "meaning": "询问",
    "example": "I learned the word \"enquire\" today.",
    "part": "v"
  },
  {
    "id": "pet-912",
    "library": "pet",
    "word": "experiment",
    "meaning": "实验,试验,实验仪器；实验,尝试",
    "example": "I learned the word \"experiment\" today.",
    "part": "n"
  },
  {
    "id": "pet-913",
    "library": "pet",
    "word": "enquiry",
    "meaning": "询问；[经]询价,询盘",
    "example": "I learned the word \"enquiry\" today.",
    "part": "n"
  },
  {
    "id": "pet-914",
    "library": "pet",
    "word": "expert",
    "meaning": "专家,行家；a.老练的,内行的,专门的；[计]高级",
    "example": "I learned the word \"expert\" today.",
    "part": "n"
  },
  {
    "id": "pet-915",
    "library": "pet",
    "word": "enter",
    "meaning": "进入,参加,开始,输入,回车；进去,参加；[计]输入,回车",
    "example": "I learned the word \"enter\" today.",
    "part": "v"
  },
  {
    "id": "pet-916",
    "library": "pet",
    "word": "explain",
    "meaning": "解释,说明",
    "example": "I learned the word \"explain\" today.",
    "part": "v"
  },
  {
    "id": "pet-917",
    "library": "pet",
    "word": "explanation",
    "meaning": "解释,说明,辩解,表明；[经]解释,注释,说明",
    "example": "I learned the word \"explanation\" today.",
    "part": "n"
  },
  {
    "id": "pet-918",
    "library": "pet",
    "word": "entertain",
    "meaning": "娱乐,招待,怀抱；款待",
    "example": "I learned the word \"entertain\" today.",
    "part": "v"
  },
  {
    "id": "pet-919",
    "library": "pet",
    "word": "explode",
    "meaning": "爆炸,爆发,激增；使爆炸",
    "example": "I learned the word \"explode\" today.",
    "part": "v"
  },
  {
    "id": "pet-920",
    "library": "pet",
    "word": "entertainment",
    "meaning": "娱乐,款待,娱乐表演",
    "example": "I learned the word \"entertainment\" today.",
    "part": "n"
  },
  {
    "id": "pet-921",
    "library": "pet",
    "word": "entrance",
    "meaning": "入口,进入点,入场,入学,进入,开始(阶段),就任；使出神,使入迷；[计]入口",
    "example": "I learned the word \"entrance\" today.",
    "part": "n"
  },
  {
    "id": "pet-922",
    "library": "pet",
    "word": "explore",
    "meaning": "探险,探测,探究",
    "example": "I learned the word \"explore\" today.",
    "part": "v"
  },
  {
    "id": "pet-923",
    "library": "pet",
    "word": "entry",
    "meaning": "登录,条目,进入,入口,报关；[计]登录项,输入项,条目",
    "example": "I learned the word \"entry\" today.",
    "part": "n"
  },
  {
    "id": "pet-924",
    "library": "pet",
    "word": "explorer",
    "meaning": "探险家,探测者,勘探器；[医]探察器",
    "example": "I learned the word \"explorer\" today.",
    "part": "n"
  },
  {
    "id": "pet-925",
    "library": "pet",
    "word": "envelope",
    "meaning": "信封,封套,封袋；[医]膜,包袋",
    "example": "I learned the word \"envelope\" today.",
    "part": "n"
  },
  {
    "id": "pet-926",
    "library": "pet",
    "word": "environment",
    "meaning": "环境,外界,围绕；[计]环境",
    "example": "I learned the word \"environment\" today.",
    "part": "n"
  },
  {
    "id": "pet-927",
    "library": "pet",
    "word": "extra",
    "meaning": "额外的事物,另外的收费；a.额外的,特别的；额外地,特别地,非常地",
    "example": "I learned the word \"extra\" today.",
    "part": "adj, adv & n"
  },
  {
    "id": "pet-928",
    "library": "pet",
    "word": "environmental",
    "meaning": "a.周围的,环境的；[经]环境的,环保的",
    "example": "I learned the word \"environmental\" today.",
    "part": "adj"
  },
  {
    "id": "pet-929",
    "library": "pet",
    "word": "extraordinary",
    "meaning": "a.非常的,特别的,非凡的；[经]非常的,特别的,临时的",
    "example": "I learned the word \"extraordinary\" today.",
    "part": "adj"
  },
  {
    "id": "pet-930",
    "library": "pet",
    "word": "equal",
    "meaning": "对手,匹敌,同辈；a.相等的,平等的,胜任的,合适的,平静的,不相上下的；等于,比得上",
    "example": "I learned the word \"equal\" today.",
    "part": "adj"
  },
  {
    "id": "pet-931",
    "library": "pet",
    "word": "extremely",
    "meaning": "极端地,非常地",
    "example": "I learned the word \"extremely\" today.",
    "part": "adv"
  },
  {
    "id": "pet-932",
    "library": "pet",
    "word": "equipment",
    "meaning": "装备,设备,才能；[化]设备；装备",
    "example": "I learned the word \"equipment\" today.",
    "part": "n"
  },
  {
    "id": "pet-933",
    "library": "pet",
    "word": "extreme sport",
    "meaning": "极端,末端；a.极端的,尽头的,极度的,偏激的",
    "example": "Try to use \"extreme sport\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-934",
    "library": "pet",
    "word": "eye",
    "meaning": "眼睛,视力,看；看,注视",
    "example": "I learned the word \"eye\" today.",
    "part": "n"
  },
  {
    "id": "pet-935",
    "library": "pet",
    "word": "eraser",
    "meaning": "擦子",
    "example": "I learned the word \"eraser\" today.",
    "part": "n"
  },
  {
    "id": "pet-936",
    "library": "pet",
    "word": "escape",
    "meaning": "逃亡,避难设备,逃跑；逃脱,避开,溜走；逃避,避免,被...忘掉",
    "example": "I learned the word \"escape\" today.",
    "part": "v"
  },
  {
    "id": "pet-937",
    "library": "pet",
    "word": "especially",
    "meaning": "尤其,特别,格外",
    "example": "I learned the word \"especially\" today.",
    "part": "adv"
  },
  {
    "id": "pet-938",
    "library": "pet",
    "word": "essay",
    "meaning": "随笔,短文,评论,企图；试图",
    "example": "I learned the word \"essay\" today.",
    "part": "n"
  },
  {
    "id": "pet-939",
    "library": "pet",
    "word": "essential",
    "meaning": "要素,要点,本质；a.必要的,重要的,本质的；[计]本质冒险",
    "example": "I learned the word \"essential\" today.",
    "part": "adj"
  },
  {
    "id": "pet-940",
    "library": "pet",
    "word": "euro",
    "meaning": "欧元（欧盟的统一货币单位）",
    "example": "I learned the word \"euro\" today.",
    "part": "n"
  },
  {
    "id": "pet-941",
    "library": "pet",
    "word": "face",
    "meaning": "脸,面容,正面,外观；面对,朝,正视,面临；朝,向",
    "example": "I learned the word \"face\" today.",
    "part": "n"
  },
  {
    "id": "pet-942",
    "library": "pet",
    "word": "even",
    "meaning": "a.平坦的,相等的,连贯的,均等的,公平的,偶数的,平均的,平衡的,恰好的；使平坦,使相等；变平,成为相等",
    "example": "I learned the word \"even\" today.",
    "part": "adv"
  },
  {
    "id": "pet-943",
    "library": "pet",
    "word": "face to face",
    "meaning": "面对面",
    "example": "Try to use \"face to face\" in a short sentence.",
    "part": "adv"
  },
  {
    "id": "pet-944",
    "library": "pet",
    "word": "evening",
    "meaning": "傍晚,晚间,末期",
    "example": "I learned the word \"evening\" today.",
    "part": "n"
  },
  {
    "id": "pet-945",
    "library": "pet",
    "word": "face-to-face",
    "meaning": "面对面",
    "example": "I learned the word \"face-to-face\" today.",
    "part": "adj"
  },
  {
    "id": "pet-946",
    "library": "pet",
    "word": "event",
    "meaning": "事件,结果,事情的进程,竞赛项目；[计]事件",
    "example": "I learned the word \"event\" today.",
    "part": "n"
  },
  {
    "id": "pet-947",
    "library": "pet",
    "word": "facilities",
    "meaning": "工具,设施,设备",
    "example": "I learned the word \"facilities\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-948",
    "library": "pet",
    "word": "even though",
    "meaning": "虽然,尽管",
    "example": "Try to use \"even though\" in a short sentence.",
    "part": "conj"
  },
  {
    "id": "pet-949",
    "library": "pet",
    "word": "ever",
    "meaning": "曾经,究竟,永远",
    "example": "I learned the word \"ever\" today.",
    "part": "adv"
  },
  {
    "id": "pet-950",
    "library": "pet",
    "word": "fact",
    "meaning": "事实,真实性,真相,细节,论据",
    "example": "I learned the word \"fact\" today.",
    "part": "n"
  },
  {
    "id": "pet-951",
    "library": "pet",
    "word": "every",
    "meaning": "a.每一,所有的",
    "example": "I learned the word \"every\" today.",
    "part": "det"
  },
  {
    "id": "pet-952",
    "library": "pet",
    "word": "factory",
    "meaning": "工厂,产生地,代理店；[经]工厂,代理店,商行在国外的代理处",
    "example": "I learned the word \"factory\" today.",
    "part": "n"
  },
  {
    "id": "pet-953",
    "library": "pet",
    "word": "everybody",
    "meaning": "每个人,人人",
    "example": "I learned the word \"everybody\" today.",
    "part": "pron"
  },
  {
    "id": "pet-954",
    "library": "pet",
    "word": "fail",
    "meaning": "失败,缺乏,中断,衰退,失灵；忘记,使...失望,缺乏,不及格；不及格",
    "example": "I learned the word \"fail\" today.",
    "part": "v"
  },
  {
    "id": "pet-955",
    "library": "pet",
    "word": "fair",
    "meaning": "展览会,市集,美好的事物；a.公平的,按规则进行的,不好不坏的,晴朗的,美丽的；公平地,正面地,有教养地,清楚地",
    "example": "I learned the word \"fair\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-956",
    "library": "pet",
    "word": "fairly",
    "meaning": "美观地,公平地,相当地,清楚地",
    "example": "I learned the word \"fairly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-957",
    "library": "pet",
    "word": "film",
    "meaning": "软片,薄膜,胶卷,电影；覆以薄膜,拍摄；生薄膜,拍电影",
    "example": "I learned the word \"film\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-958",
    "library": "pet",
    "word": "fall",
    "meaning": "落下,瀑布,采伐量,下降,落差,降低,堕落,秋天；倒下,落下,来临,失守,阵亡,下跌,减弱,倾斜,垮台,轮到,变成,降低；a.秋天的",
    "example": "I learned the word \"fall\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-959",
    "library": "pet",
    "word": "film maker",
    "meaning": "电影摄制者，电影导演，电影制作人",
    "example": "Try to use \"film maker\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-960",
    "library": "pet",
    "word": "final",
    "meaning": "期末考试,结局,决赛；a.最后的,终极的,决定性的",
    "example": "I learned the word \"final\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-961",
    "library": "pet",
    "word": "finally",
    "meaning": "最后,终于",
    "example": "I learned the word \"finally\" today.",
    "part": "adv"
  },
  {
    "id": "pet-962",
    "library": "pet",
    "word": "financial",
    "meaning": "a.财政的,金融的；[经]财政的,金融的,财务的",
    "example": "I learned the word \"financial\" today.",
    "part": "adj"
  },
  {
    "id": "pet-963",
    "library": "pet",
    "word": "false",
    "meaning": "a.错误的,虚伪的,假的,不老实的；不准确地,欺诈地",
    "example": "I learned the word \"false\" today.",
    "part": "adj"
  },
  {
    "id": "pet-964",
    "library": "pet",
    "word": "find",
    "meaning": "发现,感到,找到,认为,得到；裁决；发现",
    "example": "I learned the word \"find\" today.",
    "part": "v"
  },
  {
    "id": "pet-965",
    "library": "pet",
    "word": "find out",
    "meaning": "找出,发现,想出,揭发",
    "example": "Try to use \"find out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-966",
    "library": "pet",
    "word": "family",
    "meaning": "家庭,家人,族；a.家庭的",
    "example": "I learned the word \"family\" today.",
    "part": "n"
  },
  {
    "id": "pet-967",
    "library": "pet",
    "word": "famous",
    "meaning": "a.出名的,极好的",
    "example": "I learned the word \"famous\" today.",
    "part": "adj"
  },
  {
    "id": "pet-968",
    "library": "pet",
    "word": "fine",
    "meaning": "罚款,罚金,晴天,精细；a.好的,晴朗的,健康的,细小的,精细的；罚款,精炼,澄清",
    "example": "I learned the word \"fine\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-969",
    "library": "pet",
    "word": "fan",
    "meaning": "风扇,迷,狂热者,爱好者；煽动,刺激,吹拂；飘动,成扇形散开",
    "example": "I learned the word \"fan\" today.",
    "part": "n"
  },
  {
    "id": "pet-970",
    "library": "pet",
    "word": "finger",
    "meaning": "手指,指状物,(手套的)手指部分,指针；用手指拨弄,伸出；[计]网络命令",
    "example": "I learned the word \"finger\" today.",
    "part": "n"
  },
  {
    "id": "pet-971",
    "library": "pet",
    "word": "fancy",
    "meaning": "想象力,幻想,喜好；a.想象的,精美的,新奇的,奇特的,高价的,特级的；想象,设想,相信,喜爱",
    "example": "I learned the word \"fancy\" today.",
    "part": "v"
  },
  {
    "id": "pet-972",
    "library": "pet",
    "word": "finish",
    "meaning": "完成,结束,末道漆,磨光,完美；完成,结束,用完,毁掉；结束",
    "example": "I learned the word \"finish\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-973",
    "library": "pet",
    "word": "fire",
    "meaning": "火,炉火,电炉,火灾,闪光体,炮火,热情；点燃,烧制,使发光,激动,放枪,解雇；着火,烧火,开枪,射击,激动",
    "example": "I learned the word \"fire\" today.",
    "part": "n"
  },
  {
    "id": "pet-974",
    "library": "pet",
    "word": "fantastic",
    "meaning": "a.奇妙的,稀奇的,空想的",
    "example": "I learned the word \"fantastic\" today.",
    "part": "adj"
  },
  {
    "id": "pet-975",
    "library": "pet",
    "word": "firefighter",
    "meaning": "<美>消防队员",
    "example": "I learned the word \"firefighter\" today.",
    "part": "n"
  },
  {
    "id": "pet-976",
    "library": "pet",
    "word": "far",
    "meaning": "a.远的,久远的,遥远的；甚远地,很,到很深的程度,到很远的距离",
    "example": "I learned the word \"far\" today.",
    "part": "adv"
  },
  {
    "id": "pet-977",
    "library": "pet",
    "word": "firework",
    "meaning": "烟火具,烟火,烟火信号弹,焰火,激情的表现",
    "example": "I learned the word \"firework\" today.",
    "part": "n"
  },
  {
    "id": "pet-978",
    "library": "pet",
    "word": "fare",
    "meaning": "费用,旅客,食物；进展,进步,经营,过活",
    "example": "I learned the word \"fare\" today.",
    "part": "n"
  },
  {
    "id": "pet-979",
    "library": "pet",
    "word": "firm",
    "meaning": "公司,商号；a.坚定的,坚强的,牢固的,结实的,坚硬的,坚挺的,严格的,确定的；使牢固,使坚定",
    "example": "I learned the word \"firm\" today.",
    "part": "n"
  },
  {
    "id": "pet-980",
    "library": "pet",
    "word": "farm",
    "meaning": "农场,农田；耕种；种田",
    "example": "I learned the word \"farm\" today.",
    "part": "n"
  },
  {
    "id": "pet-981",
    "library": "pet",
    "word": "farmer",
    "meaning": "农夫,农场主；[法]农民,农场主,承包者",
    "example": "I learned the word \"farmer\" today.",
    "part": "n"
  },
  {
    "id": "pet-982",
    "library": "pet",
    "word": "first",
    "meaning": "首先,第一,优先；a.第一的；num.第一",
    "example": "I learned the word \"first\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-983",
    "library": "pet",
    "word": "farming",
    "meaning": "农业,耕作",
    "example": "I learned the word \"farming\" today.",
    "part": "n"
  },
  {
    "id": "pet-984",
    "library": "pet",
    "word": "fashion",
    "meaning": "流行,风尚,时样；形成,造,作",
    "example": "I learned the word \"fashion\" today.",
    "part": "n"
  },
  {
    "id": "pet-985",
    "library": "pet",
    "word": "fashionable",
    "meaning": "a.时髦的,上流社会的,流行的",
    "example": "I learned the word \"fashionable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-986",
    "library": "pet",
    "word": "first name",
    "meaning": "名；[法]名字",
    "example": "Try to use \"first name\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-987",
    "library": "pet",
    "word": "fast",
    "meaning": "a.快速的,紧的；很快地,紧紧地,彻底地；绝食,斋戒",
    "example": "I learned the word \"fast\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-988",
    "library": "pet",
    "word": "fish",
    "meaning": "鱼,鱼肉,鱼类,接合板；钓,钓鱼,查出,用接合板连接；捕鱼,钓鱼,用钩捞取,摸索寻找",
    "example": "I learned the word \"fish\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-989",
    "library": "pet",
    "word": "fasten",
    "meaning": "拴紧,使固定,系,集中于,强加于；扣紧",
    "example": "I learned the word \"fasten\" today.",
    "part": "v"
  },
  {
    "id": "pet-990",
    "library": "pet",
    "word": "fishing",
    "meaning": "钓鱼,鱼业；a.钓鱼的",
    "example": "I learned the word \"fishing\" today.",
    "part": "n"
  },
  {
    "id": "pet-991",
    "library": "pet",
    "word": "fast food",
    "meaning": "速食；快餐",
    "example": "Try to use \"fast food\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-992",
    "library": "pet",
    "word": "fit",
    "meaning": "适宜,合身,发作,痉挛；a.适宜的,对的,准备好的；适合,安装,使合身,使适应,使合格",
    "example": "I learned the word \"fit\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-993",
    "library": "pet",
    "word": "fat",
    "meaning": "脂肪,脂油,肥肉；a.肥的,胖的,油腻的；文件分配表",
    "example": "I learned the word \"fat\" today.",
    "part": "adj"
  },
  {
    "id": "pet-994",
    "library": "pet",
    "word": "father",
    "meaning": "父亲,祖先,长辈,神父,创始者；当...的父亲,保护,创作,发明,培养",
    "example": "I learned the word \"father\" today.",
    "part": "n"
  },
  {
    "id": "pet-995",
    "library": "pet",
    "word": "fault",
    "meaning": "过错,故障,毛病；挑剔；产生断层,弄错",
    "example": "I learned the word \"fault\" today.",
    "part": "n"
  },
  {
    "id": "pet-996",
    "library": "pet",
    "word": "fitness",
    "meaning": "适合,合宜,合理,恰当,健康；[医]适合性,适应性",
    "example": "I learned the word \"fitness\" today.",
    "part": "n"
  },
  {
    "id": "pet-997",
    "library": "pet",
    "word": "favour",
    "meaning": "好感,偏爱,喜爱,相信,庇护,赞同,支持,信赖,善行,恩惠,徽章,礼物；赞成,帮助,支持,喜爱,偏袒,关切,赐与,给与,有利于,有助于,像,体恤",
    "example": "I learned the word \"favour\" today.",
    "part": "n"
  },
  {
    "id": "pet-998",
    "library": "pet",
    "word": "fix",
    "meaning": "使固定,修理,准备,安装,凝视,牢记,确定,整理；固定,注视,确定；困境,方位,维修,贿赂",
    "example": "I learned the word \"fix\" today.",
    "part": "v"
  },
  {
    "id": "pet-999",
    "library": "pet",
    "word": "favourite",
    "meaning": "喜欢的事物；a.喜爱的,宠爱的",
    "example": "I learned the word \"favourite\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1000",
    "library": "pet",
    "word": "flag",
    "meaning": "标志,旗标,旗子,信号旗,菖蒲；悬旗,打旗号,铺石板；无力地下垂",
    "example": "I learned the word \"flag\" today.",
    "part": "n"
  },
  {
    "id": "pet-1001",
    "library": "pet",
    "word": "fax",
    "meaning": "传真；发传真；[计]传真系统",
    "example": "I learned the word \"fax\" today.",
    "part": "v"
  },
  {
    "id": "pet-1002",
    "library": "pet",
    "word": "flat",
    "meaning": "a.平坦的,单调的,无力的,浅的,萧条的,干脆的,无聊的；平直地,断然地；扁平物,平面,平地,平原,平板车",
    "example": "I learned the word \"flat\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1003",
    "library": "pet",
    "word": "fear",
    "meaning": "恐怖,害怕,担心；害怕,恐惧,为...担心,敬畏",
    "example": "I learned the word \"fear\" today.",
    "part": "n"
  },
  {
    "id": "pet-1004",
    "library": "pet",
    "word": "flavour",
    "meaning": "味,调味香料,滋味,香味,气味,风味,情味,情趣,风韵；给...调味,给...增添风趣,加香料,加味于",
    "example": "I learned the word \"flavour\" today.",
    "part": "n"
  },
  {
    "id": "pet-1005",
    "library": "pet",
    "word": "fee",
    "meaning": "费用,小费,封地,所有权；付费给",
    "example": "I learned the word \"fee\" today.",
    "part": "n"
  },
  {
    "id": "pet-1006",
    "library": "pet",
    "word": "flight",
    "meaning": "飞行,射程,逃走,飞跃,飞机航程,班机,迁徙,飞逝；迁徙；射击(飞禽),为(箭)装上羽毛,使惊飞",
    "example": "I learned the word \"flight\" today.",
    "part": "n"
  },
  {
    "id": "pet-1007",
    "library": "pet",
    "word": "feed",
    "meaning": "饲料,一餐,饲养；喂,饲养,放牧,靠...为生；吃东西,用餐,流入",
    "example": "I learned the word \"feed\" today.",
    "part": "v"
  },
  {
    "id": "pet-1008",
    "library": "pet",
    "word": "float",
    "meaning": "漂流物,浮舟,漂浮,浮萍,彩车；浮动,飘动,散播,摇摆,动摇,浮动；使漂浮,容纳,淹没,发行,实行",
    "example": "I learned the word \"float\" today.",
    "part": "v"
  },
  {
    "id": "pet-1009",
    "library": "pet",
    "word": "feel",
    "meaning": "感觉,觉得,触摸,以为；有知觉,摸索,同情；感觉,觉得,触摸",
    "example": "I learned the word \"feel\" today.",
    "part": "v"
  },
  {
    "id": "pet-1010",
    "library": "pet",
    "word": "flood",
    "meaning": "洪水,大量之水,涨潮；淹没,使泛滥,注满；被淹,溢出,涌进",
    "example": "I learned the word \"flood\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1011",
    "library": "pet",
    "word": "feeling",
    "meaning": "摸,触觉,知觉,感觉,情绪,同情；a.有同情心的,有感觉的,仁慈的,动人的",
    "example": "I learned the word \"feeling\" today.",
    "part": "n"
  },
  {
    "id": "pet-1012",
    "library": "pet",
    "word": "floor",
    "meaning": "地板,楼层,底部,底价；铺地板,打倒；地面,地板,基底",
    "example": "I learned the word \"floor\" today.",
    "part": "n"
  },
  {
    "id": "pet-1013",
    "library": "pet",
    "word": "feel like",
    "meaning": "摸起来像是…,有…的感觉；想要…",
    "example": "Try to use \"feel like\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-1014",
    "library": "pet",
    "word": "flour",
    "meaning": "面粉,粉沫,碎粉；[医]面粉,麦粉",
    "example": "I learned the word \"flour\" today.",
    "part": "n"
  },
  {
    "id": "pet-1015",
    "library": "pet",
    "word": "flow",
    "meaning": "流程,流动,流量,洋溢,泛滥,涨潮；流动,流泄,畅流,川流不息,飘扬,涌出；使流动,淹没,流出",
    "example": "I learned the word \"flow\" today.",
    "part": "v"
  },
  {
    "id": "pet-1016",
    "library": "pet",
    "word": "female",
    "meaning": "女性,女人,雌性动物；a.女性的,女子的",
    "example": "I learned the word \"female\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1017",
    "library": "pet",
    "word": "flower",
    "meaning": "花,开花植物,精华,盛时；开花,发育,旺盛,成熟；用花装饰,使开花",
    "example": "I learned the word \"flower\" today.",
    "part": "n"
  },
  {
    "id": "pet-1018",
    "library": "pet",
    "word": "ferry",
    "meaning": "渡船,渡口；[法]摆渡营业权,轮渡",
    "example": "I learned the word \"ferry\" today.",
    "part": "n"
  },
  {
    "id": "pet-1019",
    "library": "pet",
    "word": "flu",
    "meaning": "流感,流行性感冒",
    "example": "I learned the word \"flu\" today.",
    "part": "n"
  },
  {
    "id": "pet-1020",
    "library": "pet",
    "word": "festival",
    "meaning": "a.节日的,喜庆的,快乐的；节日,庆祝,欢宴",
    "example": "I learned the word \"festival\" today.",
    "part": "n"
  },
  {
    "id": "pet-1021",
    "library": "pet",
    "word": "flute",
    "meaning": "笛,横笛,凹槽；吹笛子；用长笛奏,刻凹槽于",
    "example": "I learned the word \"flute\" today.",
    "part": "n"
  },
  {
    "id": "pet-1022",
    "library": "pet",
    "word": "fetch",
    "meaning": "取得,拿,诡计,魂；接来,取来,售得,带来,推出,引出,杀死,吸引,到达；取物,前进",
    "example": "I learned the word \"fetch\" today.",
    "part": "v"
  },
  {
    "id": "pet-1023",
    "library": "pet",
    "word": "fly",
    "meaning": "苍蝇,两翼昆虫,飞行；飞,飞翔,飘扬,逃走；飞,飞越,使飘扬,逃出",
    "example": "I learned the word \"fly\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1024",
    "library": "pet",
    "word": "fever",
    "meaning": "发烧,发热,热病；[医]发热,热",
    "example": "I learned the word \"fever\" today.",
    "part": "n"
  },
  {
    "id": "pet-1025",
    "library": "pet",
    "word": "few",
    "meaning": "a.很少的,不多的,少数的；少数",
    "example": "I learned the word \"few\" today.",
    "part": "adj, det & pron"
  },
  {
    "id": "pet-1026",
    "library": "pet",
    "word": "fog",
    "meaning": "雾,迷惑,(割后的)最生草,苔藓；被雾笼罩,变模糊；使困惑,以雾笼罩",
    "example": "I learned the word \"fog\" today.",
    "part": "n"
  },
  {
    "id": "pet-1027",
    "library": "pet",
    "word": "fiction",
    "meaning": "小说,虚构故事；[法]虚构的事实,捏造,拟制",
    "example": "I learned the word \"fiction\" today.",
    "part": "n"
  },
  {
    "id": "pet-1028",
    "library": "pet",
    "word": "foggy",
    "meaning": "a.雾深的,模糊的",
    "example": "I learned the word \"foggy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1029",
    "library": "pet",
    "word": "field",
    "meaning": "领域,田地,场地,战场,场,域；使...晒在场上,使上场；a.田间的,野生的,野外的,田赛的",
    "example": "I learned the word \"field\" today.",
    "part": "n"
  },
  {
    "id": "pet-1030",
    "library": "pet",
    "word": "fold",
    "meaning": "折层,折,羊栏,折痕,信徒；折叠,包,合拢,交迭；折叠起来,彻底失败",
    "example": "I learned the word \"fold\" today.",
    "part": "v"
  },
  {
    "id": "pet-1031",
    "library": "pet",
    "word": "fight",
    "meaning": "打架,争吵,斗志；对抗,打架",
    "example": "I learned the word \"fight\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1032",
    "library": "pet",
    "word": "folk",
    "meaning": "人们,家人,亲属,民族；a.民间的",
    "example": "I learned the word \"folk\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1033",
    "library": "pet",
    "word": "figure",
    "meaning": "数字,价格,图形,形状；描绘,表示,演算,认为；计算,出现,估计",
    "example": "I learned the word \"figure\" today.",
    "part": "n"
  },
  {
    "id": "pet-1034",
    "library": "pet",
    "word": "follow",
    "meaning": "跟随,沿行,遵循,追求；跟随,接着；跟随,追随",
    "example": "I learned the word \"follow\" today.",
    "part": "v"
  },
  {
    "id": "pet-1035",
    "library": "pet",
    "word": "file",
    "meaning": "档案,公文箱,文件夹,文件,卷宗,锉刀；列队行进,用锉刀做；归档,申请,锉,琢磨",
    "example": "I learned the word \"file\" today.",
    "part": "n"
  },
  {
    "id": "pet-1036",
    "library": "pet",
    "word": "following",
    "meaning": "下列各项,部下,追随者；a.下列的,其次的",
    "example": "I learned the word \"following\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1037",
    "library": "pet",
    "word": "fond",
    "meaning": "a.喜欢的,宠爱的,温柔的",
    "example": "I learned the word \"fond\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1038",
    "library": "pet",
    "word": "fill",
    "meaning": "装满,填充,弥漫,供给,满足,供应；充满,变得沉重；满足,装满,充分,填方",
    "example": "I learned the word \"fill\" today.",
    "part": "v"
  },
  {
    "id": "pet-1039",
    "library": "pet",
    "word": "food",
    "meaning": "食物,养料；[医]食物,食品",
    "example": "I learned the word \"food\" today.",
    "part": "n"
  },
  {
    "id": "pet-1040",
    "library": "pet",
    "word": "fill in",
    "meaning": "填充,填写,填满,替代",
    "example": "Try to use \"fill in\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1041",
    "library": "pet",
    "word": "fool",
    "meaning": "愚人,受骗者,奶油拌水果；愚弄,欺骗,浪费；干傻事,开玩笑,游荡",
    "example": "I learned the word \"fool\" today.",
    "part": "n"
  },
  {
    "id": "pet-1042",
    "library": "pet",
    "word": "foot",
    "meaning": "脚,步调,英尺,底部,末尾,步兵；走在...上,给...换底,支付；跳舞,步行,总计",
    "example": "I learned the word \"foot\" today.",
    "part": "n"
  },
  {
    "id": "pet-1043",
    "library": "pet",
    "word": "fill up",
    "meaning": "填补,装满,装满油；[计]向上填充",
    "example": "Try to use \"fill up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1044",
    "library": "pet",
    "word": "football",
    "meaning": "足球,橄榄球",
    "example": "I learned the word \"football\" today.",
    "part": "n"
  },
  {
    "id": "pet-1045",
    "library": "pet",
    "word": "footballer",
    "meaning": "足球员,足球选手",
    "example": "I learned the word \"footballer\" today.",
    "part": "n"
  },
  {
    "id": "pet-1046",
    "library": "pet",
    "word": "for",
    "meaning": "为,因为,至于；因为；[计]DOS批处理命令:对一组参数重复执行指定的命令",
    "example": "I learned the word \"for\" today.",
    "part": "prep"
  },
  {
    "id": "pet-1047",
    "library": "pet",
    "word": "forbidden",
    "meaning": "a.被禁止的,严禁的；forbid的过去分词",
    "example": "I learned the word \"forbidden\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1048",
    "library": "pet",
    "word": "forecast",
    "meaning": "预想,预测,预报；预想,预测,预报；[计]趋势预测",
    "example": "I learned the word \"forecast\" today.",
    "part": "n"
  },
  {
    "id": "pet-1049",
    "library": "pet",
    "word": "gain",
    "meaning": "增益,获得,利润,收获,增加；得到,增进,赚到；获利,增加",
    "example": "I learned the word \"gain\" today.",
    "part": "v"
  },
  {
    "id": "pet-1050",
    "library": "pet",
    "word": "foreign",
    "meaning": "a.外国的,外交的,外省的,外来的,不相关的；[机]外来的",
    "example": "I learned the word \"foreign\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1051",
    "library": "pet",
    "word": "foreigner",
    "meaning": "外国人,外地人；[法]外国人,进口货,外国货",
    "example": "I learned the word \"foreigner\" today.",
    "part": "n"
  },
  {
    "id": "pet-1052",
    "library": "pet",
    "word": "gallery",
    "meaning": "走廊,最高楼座,画廊,收集,图库；[计]图库",
    "example": "I learned the word \"gallery\" today.",
    "part": "n"
  },
  {
    "id": "pet-1053",
    "library": "pet",
    "word": "forest",
    "meaning": "森林,林区；植树于",
    "example": "I learned the word \"forest\" today.",
    "part": "n"
  },
  {
    "id": "pet-1054",
    "library": "pet",
    "word": "forever",
    "meaning": "永远",
    "example": "I learned the word \"forever\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1055",
    "library": "pet",
    "word": "forget",
    "meaning": "忘记,忽略,忘；忘记",
    "example": "I learned the word \"forget\" today.",
    "part": "v"
  },
  {
    "id": "pet-1056",
    "library": "pet",
    "word": "game",
    "meaning": "比赛,玩耍,比分,得胜,比赛规则,策略,游戏,野味；赌博；a.勇敢的,有胆量的,关于野味的,跛的",
    "example": "I learned the word \"game\" today.",
    "part": "n"
  },
  {
    "id": "pet-1057",
    "library": "pet",
    "word": "forgive",
    "meaning": "原谅,宽恕,免除；[法]免除,宽恕,原谅",
    "example": "I learned the word \"forgive\" today.",
    "part": "v"
  },
  {
    "id": "pet-1058",
    "library": "pet",
    "word": "gap",
    "meaning": "缝隙,缺口,间断,间距,通用汇编程序；打开缺口,造成缝隙；豁开",
    "example": "I learned the word \"gap\" today.",
    "part": "n"
  },
  {
    "id": "pet-1059",
    "library": "pet",
    "word": "fork",
    "meaning": "叉子,叉状物,分岔；分支,分歧；做成叉形,叉起",
    "example": "I learned the word \"fork\" today.",
    "part": "n"
  },
  {
    "id": "pet-1060",
    "library": "pet",
    "word": "garage",
    "meaning": "车库,汽车修理厂,机库；把车送入修车场",
    "example": "I learned the word \"garage\" today.",
    "part": "n"
  },
  {
    "id": "pet-1061",
    "library": "pet",
    "word": "form",
    "meaning": "形状,形体,类型,方式,表格,形式；形成,排列,(使)组成；表单",
    "example": "I learned the word \"form\" today.",
    "part": "n"
  },
  {
    "id": "pet-1062",
    "library": "pet",
    "word": "garden",
    "meaning": "花园,果园,菜园；栽培花木；造园",
    "example": "I learned the word \"garden\" today.",
    "part": "n"
  },
  {
    "id": "pet-1063",
    "library": "pet",
    "word": "former",
    "meaning": "a.从前的,前者的；起形成作用的人(或物),模型,样板",
    "example": "I learned the word \"former\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1064",
    "library": "pet",
    "word": "garlic",
    "meaning": "大蒜；[化]大蒜",
    "example": "I learned the word \"garlic\" today.",
    "part": "n"
  },
  {
    "id": "pet-1065",
    "library": "pet",
    "word": "fortnight",
    "meaning": "两星期",
    "example": "I learned the word \"fortnight\" today.",
    "part": "n"
  },
  {
    "id": "pet-1066",
    "library": "pet",
    "word": "gas",
    "meaning": "气体,汽油,瓦斯；[化]气体；煤气",
    "example": "I learned the word \"gas\" today.",
    "part": "n"
  },
  {
    "id": "pet-1067",
    "library": "pet",
    "word": "fortunately",
    "meaning": "幸运地,幸亏",
    "example": "I learned the word \"fortunately\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1068",
    "library": "pet",
    "word": "gas station",
    "meaning": "加油站",
    "example": "Try to use \"gas station\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1069",
    "library": "pet",
    "word": "gate",
    "meaning": "门,牌楼,大门,通道,闸；装门于；[计]门",
    "example": "I learned the word \"gate\" today.",
    "part": "n"
  },
  {
    "id": "pet-1070",
    "library": "pet",
    "word": "fountain",
    "meaning": "水源,源,喷泉,泉水,本源；[医]泉",
    "example": "I learned the word \"fountain\" today.",
    "part": "n"
  },
  {
    "id": "pet-1071",
    "library": "pet",
    "word": "general",
    "meaning": "一般,将军,大体；a.全面的,大体的,总的,一般的,普遍的；常规",
    "example": "I learned the word \"general\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1072",
    "library": "pet",
    "word": "frame",
    "meaning": "框,结构,体格；构成,设计,制定,使适合,陷害；[计]框架,图文框,帧",
    "example": "I learned the word \"frame\" today.",
    "part": "n"
  },
  {
    "id": "pet-1073",
    "library": "pet",
    "word": "generally",
    "meaning": "通常,逐渐地,普遍地",
    "example": "I learned the word \"generally\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1074",
    "library": "pet",
    "word": "free",
    "meaning": "a.自由的,享受政治权力的,允许的,免费的,丰富的；释放,解放,使自由；自由地,免费",
    "example": "I learned the word \"free\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1075",
    "library": "pet",
    "word": "freeze",
    "meaning": "冻结,冷冻,僵硬,楞住；使结冰,使冻住,使呆住；结冰,凝固",
    "example": "I learned the word \"freeze\" today.",
    "part": "v"
  },
  {
    "id": "pet-1076",
    "library": "pet",
    "word": "generation",
    "meaning": "一代,一世,产生；[医]生殖,世代",
    "example": "I learned the word \"generation\" today.",
    "part": "n"
  },
  {
    "id": "pet-1077",
    "library": "pet",
    "word": "freezer",
    "meaning": "冰库,冰箱,冷冻库",
    "example": "I learned the word \"freezer\" today.",
    "part": "n"
  },
  {
    "id": "pet-1078",
    "library": "pet",
    "word": "generous",
    "meaning": "a.慷慨的,有雅量的,大量的,丰富的",
    "example": "I learned the word \"generous\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1079",
    "library": "pet",
    "word": "freezing",
    "meaning": "a.冰冻的,冷冻用的,严寒的；[化]冻结；冻结作用",
    "example": "I learned the word \"freezing\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1080",
    "library": "pet",
    "word": "gentle",
    "meaning": "a.温和的,文雅的",
    "example": "I learned the word \"gentle\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1081",
    "library": "pet",
    "word": "French fries",
    "meaning": "炸薯条",
    "example": "Try to use \"French fries\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1082",
    "library": "pet",
    "word": "geography",
    "meaning": "地理学,地理；[医]地理",
    "example": "I learned the word \"geography\" today.",
    "part": "n"
  },
  {
    "id": "pet-1083",
    "library": "pet",
    "word": "frequent",
    "meaning": "a.时常发生的,频繁的,快速的；时常来访,常常聚集,常与...交往",
    "example": "I learned the word \"frequent\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1084",
    "library": "pet",
    "word": "get",
    "meaning": "得到,获得,变成,使得,收获,接通,抓住,染上；到达,成为,变得；(网球等)救球,生殖,幼兽",
    "example": "I learned the word \"get\" today.",
    "part": "v"
  },
  {
    "id": "pet-1085",
    "library": "pet",
    "word": "frequently",
    "meaning": "频繁,经常地",
    "example": "I learned the word \"frequently\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1086",
    "library": "pet",
    "word": "fresh",
    "meaning": "a.新鲜的,新奇的,另外的,淡的,精神饱满的,冒失的；最新地,刚刚；开始,泛滥",
    "example": "I learned the word \"fresh\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1087",
    "library": "pet",
    "word": "fridge",
    "meaning": "电冰箱",
    "example": "I learned the word \"fridge\" today.",
    "part": "n"
  },
  {
    "id": "pet-1088",
    "library": "pet",
    "word": "get back",
    "meaning": "回来,恢复,送回,重新上台",
    "example": "Try to use \"get back\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1089",
    "library": "pet",
    "word": "fried",
    "meaning": "a.油炸的",
    "example": "I learned the word \"fried\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1090",
    "library": "pet",
    "word": "friend",
    "meaning": "朋友,支持者,赞助者；[法]朋友,友人,赞助者",
    "example": "I learned the word \"friend\" today.",
    "part": "n"
  },
  {
    "id": "pet-1091",
    "library": "pet",
    "word": "friendly",
    "meaning": "a.友好的,亲切的,互助的；友善地,温和地",
    "example": "I learned the word \"friendly\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1092",
    "library": "pet",
    "word": "get down",
    "meaning": "下来,吞下,写下,使沮丧",
    "example": "Try to use \"get down\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1093",
    "library": "pet",
    "word": "friendship",
    "meaning": "友谊,友爱,友善",
    "example": "I learned the word \"friendship\" today.",
    "part": "n"
  },
  {
    "id": "pet-1094",
    "library": "pet",
    "word": "frighten",
    "meaning": "使惊吓；惊恐",
    "example": "I learned the word \"frighten\" today.",
    "part": "v"
  },
  {
    "id": "pet-1095",
    "library": "pet",
    "word": "frightened",
    "meaning": "a.受惊吓的,受惊的,(非正式)害怕...的",
    "example": "I learned the word \"frightened\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1096",
    "library": "pet",
    "word": "get fit",
    "meaning": "得到,获得,变成,使得,收获,接通,抓住,染上；到达,成为,变得；(网球等)救球,生殖,幼兽",
    "example": "Try to use \"get fit\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-1097",
    "library": "pet",
    "word": "frightening",
    "meaning": "a.令人恐惧的；引起突然惊恐的",
    "example": "I learned the word \"frightening\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1098",
    "library": "pet",
    "word": "get in",
    "meaning": "进入,到达,收获,插入,陷入",
    "example": "Try to use \"get in\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1099",
    "library": "pet",
    "word": "frog",
    "meaning": "青蛙；[医]蛙,马蹄叉",
    "example": "I learned the word \"frog\" today.",
    "part": "n"
  },
  {
    "id": "pet-1100",
    "library": "pet",
    "word": "from",
    "meaning": "从,来自,根据",
    "example": "I learned the word \"from\" today.",
    "part": "prep"
  },
  {
    "id": "pet-1101",
    "library": "pet",
    "word": "get off",
    "meaning": "下来,脱下,出发,动身,开始,被容忍",
    "example": "Try to use \"get off\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1102",
    "library": "pet",
    "word": "front",
    "meaning": "前面,开头,前线,阵线,态度；面对,朝向,对抗；朝向",
    "example": "I learned the word \"front\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1103",
    "library": "pet",
    "word": "frozen",
    "meaning": "a.冻结的,冰冷的,严寒的,冻伤的,冷酷的；freeze的过去分词",
    "example": "I learned the word \"frozen\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1104",
    "library": "pet",
    "word": "get on",
    "meaning": "生活,融洽相处,进展,穿上,上去,使前进",
    "example": "Try to use \"get on\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1105",
    "library": "pet",
    "word": "fruit",
    "meaning": "水果,果类,结果；[医]果实,种实",
    "example": "I learned the word \"fruit\" today.",
    "part": "n"
  },
  {
    "id": "pet-1106",
    "library": "pet",
    "word": "fry",
    "meaning": "油炸食物,鱼苗；油炸,煎",
    "example": "I learned the word \"fry\" today.",
    "part": "v"
  },
  {
    "id": "pet-1107",
    "library": "pet",
    "word": "frying pan",
    "meaning": "煎锅,长柄平底锅",
    "example": "Try to use \"frying pan\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1108",
    "library": "pet",
    "word": "fuel",
    "meaning": "燃料,木炭；加燃料,供燃料；得到燃料",
    "example": "I learned the word \"fuel\" today.",
    "part": "n"
  },
  {
    "id": "pet-1109",
    "library": "pet",
    "word": "full",
    "meaning": "全部,完整；a.充满的,完全的,丰富的,完美的,丰满的,详尽的；完全地,整整,十分",
    "example": "I learned the word \"full\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1110",
    "library": "pet",
    "word": "full stop",
    "meaning": "[计]句点,句号",
    "example": "Try to use \"full stop\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1111",
    "library": "pet",
    "word": "full time",
    "meaning": "专职,全部工作时间的,全日制",
    "example": "Try to use \"full time\" in a short sentence.",
    "part": "adv"
  },
  {
    "id": "pet-1112",
    "library": "pet",
    "word": "full-time",
    "meaning": "a.全部时间的,专任的",
    "example": "I learned the word \"full-time\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1113",
    "library": "pet",
    "word": "fully",
    "meaning": "十分地,完全地,充分地",
    "example": "I learned the word \"fully\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1114",
    "library": "pet",
    "word": "get rid of",
    "meaning": "摆脱,除去",
    "example": "Try to use \"get rid of\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1115",
    "library": "pet",
    "word": "fun",
    "meaning": "乐趣,玩笑,娱乐；开玩笑；a.供娱乐用的",
    "example": "I learned the word \"fun\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1116",
    "library": "pet",
    "word": "funny",
    "meaning": "a.好笑的,有趣的,滑稽的；滑稽人物",
    "example": "I learned the word \"funny\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1117",
    "library": "pet",
    "word": "get up",
    "meaning": "(使)起床,(使)起立,(使)爬上",
    "example": "Try to use \"get up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1118",
    "library": "pet",
    "word": "fur",
    "meaning": "毛皮；以毛皮制作,使生苔,使生水垢；生苔,积水垢",
    "example": "I learned the word \"fur\" today.",
    "part": "n"
  },
  {
    "id": "pet-1119",
    "library": "pet",
    "word": "giant",
    "meaning": "巨人,大力士,巨大怪物；a.庞大的,巨大的",
    "example": "I learned the word \"giant\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1120",
    "library": "pet",
    "word": "furniture",
    "meaning": "家具,帆具",
    "example": "I learned the word \"furniture\" today.",
    "part": "n"
  },
  {
    "id": "pet-1121",
    "library": "pet",
    "word": "further",
    "meaning": "a.更远的,此外的,更多的；促进,增进,助长；更进一步地,更远地,此外",
    "example": "I learned the word \"further\" today.",
    "part": "adv & adj"
  },
  {
    "id": "pet-1122",
    "library": "pet",
    "word": "gift",
    "meaning": "礼物,赠予,天才；赋予",
    "example": "I learned the word \"gift\" today.",
    "part": "n"
  },
  {
    "id": "pet-1123",
    "library": "pet",
    "word": "furthest",
    "meaning": "a.最远的,最遥远的；最远,最大,最",
    "example": "I learned the word \"furthest\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1124",
    "library": "pet",
    "word": "giraffe",
    "meaning": "长颈鹿,鹿豹座",
    "example": "I learned the word \"giraffe\" today.",
    "part": "n"
  },
  {
    "id": "pet-1125",
    "library": "pet",
    "word": "future",
    "meaning": "未来,将来；a.将来的,未来的",
    "example": "I learned the word \"future\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1126",
    "library": "pet",
    "word": "girl",
    "meaning": "女孩,少女,女佣",
    "example": "I learned the word \"girl\" today.",
    "part": "n"
  },
  {
    "id": "pet-1127",
    "library": "pet",
    "word": "girlfriend",
    "meaning": "女朋友",
    "example": "I learned the word \"girlfriend\" today.",
    "part": "n"
  },
  {
    "id": "pet-1128",
    "library": "pet",
    "word": "give",
    "meaning": "弹性,适应性；给,授予,供给,产生,发表,付出,献出,让出；捐赠,支持不住,让步",
    "example": "I learned the word \"give\" today.",
    "part": "v"
  },
  {
    "id": "pet-1129",
    "library": "pet",
    "word": "government",
    "meaning": "政府,内阁；[经]政府,政治,政体",
    "example": "I learned the word \"government\" today.",
    "part": "n"
  },
  {
    "id": "pet-1130",
    "library": "pet",
    "word": "give back",
    "meaning": "归还,恢复,后退",
    "example": "Try to use \"give back\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1131",
    "library": "pet",
    "word": "give in",
    "meaning": "屈服,让步,交上",
    "example": "Try to use \"give in\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1132",
    "library": "pet",
    "word": "grab",
    "meaning": "抓握,掠夺,强占,东方沿岸帆船；抓取,抢去；攫取,捕获,霸占",
    "example": "I learned the word \"grab\" today.",
    "part": "v"
  },
  {
    "id": "pet-1133",
    "library": "pet",
    "word": "grade",
    "meaning": "等级,年级,阶段,成绩,程度,坡度,斜坡；分等,分级,评分；属于某等级,逐渐变化",
    "example": "I learned the word \"grade\" today.",
    "part": "n"
  },
  {
    "id": "pet-1134",
    "library": "pet",
    "word": "graduation",
    "meaning": "毕业,得学位,分划,刻度,分等级；[医]刻度,分度,毕业",
    "example": "I learned the word \"graduation\" today.",
    "part": "n"
  },
  {
    "id": "pet-1135",
    "library": "pet",
    "word": "give out",
    "meaning": "分发,发出,发表,用尽,精疲力竭",
    "example": "Try to use \"give out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1136",
    "library": "pet",
    "word": "grammar",
    "meaning": "语法学,入门书；[计]语法检查",
    "example": "I learned the word \"grammar\" today.",
    "part": "n"
  },
  {
    "id": "pet-1137",
    "library": "pet",
    "word": "grandchild",
    "meaning": "孙,外孙女,外孙,孙女,孙子",
    "example": "I learned the word \"grandchild\" today.",
    "part": "n"
  },
  {
    "id": "pet-1138",
    "library": "pet",
    "word": "give up",
    "meaning": "放弃,停止,献出,抛弃,认输,把...送交；[法]放弃,停止,把...送交",
    "example": "Try to use \"give up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1139",
    "library": "pet",
    "word": "granddaughter",
    "meaning": "孙女,外孙女",
    "example": "I learned the word \"granddaughter\" today.",
    "part": "n"
  },
  {
    "id": "pet-1140",
    "library": "pet",
    "word": "give way",
    "meaning": "撤退,让路,退让,屈服,倒塌,跌价,垮掉；[经](股票)下跌",
    "example": "Try to use \"give way\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1141",
    "library": "pet",
    "word": "grandfather",
    "meaning": "祖父,始祖；[电]原始资料组",
    "example": "I learned the word \"grandfather\" today.",
    "part": "n"
  },
  {
    "id": "pet-1142",
    "library": "pet",
    "word": "grandma",
    "meaning": "奶奶,外婆",
    "example": "I learned the word \"grandma\" today.",
    "part": "n"
  },
  {
    "id": "pet-1143",
    "library": "pet",
    "word": "grandmother",
    "meaning": "祖母,女祖先",
    "example": "I learned the word \"grandmother\" today.",
    "part": "n"
  },
  {
    "id": "pet-1144",
    "library": "pet",
    "word": "grandpa",
    "meaning": "爷爷,老太爷,外公",
    "example": "I learned the word \"grandpa\" today.",
    "part": "n"
  },
  {
    "id": "pet-1145",
    "library": "pet",
    "word": "glad",
    "meaning": "a.高兴的,喜欢的,情愿的",
    "example": "I learned the word \"glad\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1146",
    "library": "pet",
    "word": "grandparent",
    "meaning": "祖父母",
    "example": "I learned the word \"grandparent\" today.",
    "part": "n"
  },
  {
    "id": "pet-1147",
    "library": "pet",
    "word": "glance",
    "meaning": "一瞥,闪光,掠过,辉矿类；扫视,闪光,掠过,提到,略说；扫视,反射,使掠过",
    "example": "I learned the word \"glance\" today.",
    "part": "v"
  },
  {
    "id": "pet-1148",
    "library": "pet",
    "word": "glass",
    "meaning": "玻璃,玻璃杯,透镜；装玻璃于,反射,反映；成玻璃状",
    "example": "I learned the word \"glass\" today.",
    "part": "n & adj"
  },
  {
    "id": "pet-1149",
    "library": "pet",
    "word": "grandson",
    "meaning": "孙子,外孙",
    "example": "I learned the word \"grandson\" today.",
    "part": "n"
  },
  {
    "id": "pet-1150",
    "library": "pet",
    "word": "granny",
    "meaning": "奶奶,老奶奶,老婆婆,外婆,婆婆妈妈的人,唠叨挑剔的人,接生婆",
    "example": "I learned the word \"granny\" today.",
    "part": "n"
  },
  {
    "id": "pet-1151",
    "library": "pet",
    "word": "glasses",
    "meaning": "眼镜；双筒望远镜；玻璃（glass的复数形式）",
    "example": "I learned the word \"glasses\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-1152",
    "library": "pet",
    "word": "grant",
    "meaning": "授予,授予物,允许；允许,承认,授与；[计]授权命令",
    "example": "I learned the word \"grant\" today.",
    "part": "n"
  },
  {
    "id": "pet-1153",
    "library": "pet",
    "word": "global warming",
    "meaning": "全球变暖",
    "example": "Try to use \"global warming\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1154",
    "library": "pet",
    "word": "glove",
    "meaning": "手套；给...戴手套",
    "example": "I learned the word \"glove\" today.",
    "part": "n"
  },
  {
    "id": "pet-1155",
    "library": "pet",
    "word": "go",
    "meaning": "去,走,达到,运转,查阅,消失,结束,放弃,花费,流传,趋于,打算,剩下；以...打赌,对付,忍受,出产,为被捕者出(保释金)；去,尝试,进行",
    "example": "I learned the word \"go\" today.",
    "part": "v & n"
  },
  {
    "id": "pet-1156",
    "library": "pet",
    "word": "Australia",
    "meaning": "澳洲,澳大利亚",
    "example": "I learned the word \"Australia\" today.",
    "part": "n"
  },
  {
    "id": "pet-1157",
    "library": "pet",
    "word": "grape",
    "meaning": "葡萄,葡萄树；[医]葡萄",
    "example": "I learned the word \"grape\" today.",
    "part": "n"
  },
  {
    "id": "pet-1158",
    "library": "pet",
    "word": "graphics",
    "meaning": "制图法,制图学,图解算法,图形显示；[计]图形；DOS外部命令:打印图形方式下的屏幕内容",
    "example": "I learned the word \"graphics\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-1159",
    "library": "pet",
    "word": "grass",
    "meaning": "草,草原,牧场；[医]草,禾本",
    "example": "I learned the word \"grass\" today.",
    "part": "n"
  },
  {
    "id": "pet-1160",
    "library": "pet",
    "word": "goal",
    "meaning": "目标,终点,得分,球门,守门员；攻门,射门得分",
    "example": "I learned the word \"goal\" today.",
    "part": "n"
  },
  {
    "id": "pet-1161",
    "library": "pet",
    "word": "grateful",
    "meaning": "a.感谢的,感激的,令人快意的,受欢迎的",
    "example": "I learned the word \"grateful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1162",
    "library": "pet",
    "word": "goalkeeper",
    "meaning": "守门员",
    "example": "I learned the word \"goalkeeper\" today.",
    "part": "n"
  },
  {
    "id": "pet-1163",
    "library": "pet",
    "word": "great",
    "meaning": "a.大的,非常的,主要的,重大的,崇高的,伟大的；顺利地,得意地；全部,大人物,大师",
    "example": "I learned the word \"great\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1164",
    "library": "pet",
    "word": "goat",
    "meaning": "山羊,替罪羊,色鬼",
    "example": "I learned the word \"goat\" today.",
    "part": "n"
  },
  {
    "id": "pet-1165",
    "library": "pet",
    "word": "green",
    "meaning": "绿色,绿色颜料；a.绿色的,未成熟的,新鲜的,青春的,无经验的,脸色发青的",
    "example": "I learned the word \"green\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1166",
    "library": "pet",
    "word": "go for",
    "meaning": "去找,努力获取,被认为,主张,拥护",
    "example": "Try to use \"go for\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1167",
    "library": "pet",
    "word": "greet",
    "meaning": "问候,致敬,欢迎,映入眼帘",
    "example": "I learned the word \"greet\" today.",
    "part": "v"
  },
  {
    "id": "pet-1168",
    "library": "pet",
    "word": "greeting",
    "meaning": "祝贺,问候",
    "example": "I learned the word \"greeting\" today.",
    "part": "n"
  },
  {
    "id": "pet-1169",
    "library": "pet",
    "word": "grey",
    "meaning": "灰色；a.灰色的,阴沉的；(使)成灰色",
    "example": "I learned the word \"grey\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1170",
    "library": "pet",
    "word": "gold",
    "meaning": "黄金,钱财,金块,金色,宝贵；a.金的,似金的,金色的,金制的",
    "example": "I learned the word \"gold\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1171",
    "library": "pet",
    "word": "grill",
    "meaning": "烤架,铁格子,烤肉；烧,烤,严加盘问,给...装栅栏",
    "example": "I learned the word \"grill\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1172",
    "library": "pet",
    "word": "golden",
    "meaning": "a.金的,含金的,金色的,贵重的,繁盛的；[法]金制的,金色的,兴隆的",
    "example": "I learned the word \"golden\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1173",
    "library": "pet",
    "word": "grilled",
    "meaning": "a.烤的,炙过的,有格子的",
    "example": "I learned the word \"grilled\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1174",
    "library": "pet",
    "word": "golf",
    "meaning": "高尔夫球；打高尔夫球",
    "example": "I learned the word \"golf\" today.",
    "part": "n"
  },
  {
    "id": "pet-1175",
    "library": "pet",
    "word": "grocery store",
    "meaning": "[经]杂货店,食品店",
    "example": "Try to use \"grocery store\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1176",
    "library": "pet",
    "word": "good",
    "meaning": "善行,好处,利益；a.好的,优良的,上等的,愉快的,有益的,好心的,慈善的,虔诚的",
    "example": "I learned the word \"good\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1177",
    "library": "pet",
    "word": "groom",
    "meaning": "马夫,新郎,男仆；喂马,使...整洁,推荐；打扮,穿戴",
    "example": "I learned the word \"groom\" today.",
    "part": "n"
  },
  {
    "id": "pet-1178",
    "library": "pet",
    "word": "ground",
    "meaning": "土地,战场,场地,地面,范围；a.土地的,地面上的；放在地上,使搁浅,打基础,给...以训练",
    "example": "I learned the word \"ground\" today.",
    "part": "n"
  },
  {
    "id": "pet-1179",
    "library": "pet",
    "word": "group",
    "meaning": "团体,组,团,群；聚合,成群；[计]创建组",
    "example": "I learned the word \"group\" today.",
    "part": "n"
  },
  {
    "id": "pet-1180",
    "library": "pet",
    "word": "good afternoon",
    "meaning": "下午好",
    "example": "Try to use \"good afternoon\" in a short sentence.",
    "part": "exclam"
  },
  {
    "id": "pet-1181",
    "library": "pet",
    "word": "grow",
    "meaning": "种植,使长满；生长,变成,发展",
    "example": "I learned the word \"grow\" today.",
    "part": "v"
  },
  {
    "id": "pet-1182",
    "library": "pet",
    "word": "goodbye",
    "meaning": "interj.再见",
    "example": "I learned the word \"goodbye\" today.",
    "part": "exclam"
  },
  {
    "id": "pet-1183",
    "library": "pet",
    "word": "grow up",
    "meaning": "成熟,成年,发展,逐渐形成",
    "example": "Try to use \"grow up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1184",
    "library": "pet",
    "word": "good evening",
    "meaning": "晚上好",
    "example": "Try to use \"good evening\" in a short sentence.",
    "part": "exclam"
  },
  {
    "id": "pet-1185",
    "library": "pet",
    "word": "good-looking",
    "meaning": "a.相貌好看的,吸引人的",
    "example": "I learned the word \"good-looking\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1186",
    "library": "pet",
    "word": "guard",
    "meaning": "守卫者,警戒,护卫队,防护装置；保卫,看守,当心；防止,警惕,警卫,看守",
    "example": "I learned the word \"guard\" today.",
    "part": "n"
  },
  {
    "id": "pet-1187",
    "library": "pet",
    "word": "good morning",
    "meaning": "早上好",
    "example": "Try to use \"good morning\" in a short sentence.",
    "part": "exclam"
  },
  {
    "id": "pet-1188",
    "library": "pet",
    "word": "guess",
    "meaning": "猜测,臆测；猜测,臆测",
    "example": "I learned the word \"guess\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1189",
    "library": "pet",
    "word": "good night",
    "meaning": "晚安,再见",
    "example": "Try to use \"good night\" in a short sentence.",
    "part": "exclam"
  },
  {
    "id": "pet-1190",
    "library": "pet",
    "word": "guest",
    "meaning": "客人,来宾,旅客；[化]客体",
    "example": "I learned the word \"guest\" today.",
    "part": "n"
  },
  {
    "id": "pet-1191",
    "library": "pet",
    "word": "goods",
    "meaning": "货物；[经]货物,商品,动产",
    "example": "I learned the word \"goods\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-1192",
    "library": "pet",
    "word": "guest-house",
    "meaning": "高级寄宿舍,宾馆,招待所",
    "example": "I learned the word \"guest-house\" today.",
    "part": "n"
  },
  {
    "id": "pet-1193",
    "library": "pet",
    "word": "go off",
    "meaning": "离开,去世,消失,爆炸,被发射,变质,进行,睡去,卖掉",
    "example": "Try to use \"go off\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1194",
    "library": "pet",
    "word": "guide",
    "meaning": "引导者,导游,指南,路标；指导,支配,管理,带领,操纵；任向导",
    "example": "I learned the word \"guide\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1195",
    "library": "pet",
    "word": "guidebook",
    "meaning": "指南,手册,要览",
    "example": "I learned the word \"guidebook\" today.",
    "part": "n"
  },
  {
    "id": "pet-1196",
    "library": "pet",
    "word": "guilty",
    "meaning": "a.犯罪的,有过失的,自觉有错的,心虚的；[法]有罪的,犯罪的,自觉有罪的",
    "example": "I learned the word \"guilty\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1197",
    "library": "pet",
    "word": "go on",
    "meaning": "继续下去,过去,发生,进行,接近,(演员)上,(运动员)上场,依靠,依据,责骂；[电]继续",
    "example": "Try to use \"go on\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1198",
    "library": "pet",
    "word": "guitar",
    "meaning": "吉他",
    "example": "I learned the word \"guitar\" today.",
    "part": "n"
  },
  {
    "id": "pet-1199",
    "library": "pet",
    "word": "guitarist",
    "meaning": "吉他弹奏者",
    "example": "I learned the word \"guitarist\" today.",
    "part": "n"
  },
  {
    "id": "pet-1200",
    "library": "pet",
    "word": "gum",
    "meaning": "树胶,橡皮,橡皮糖,牙床,老天；涂以树胶,用胶粘,使有粘性；分泌树胶,发粘",
    "example": "I learned the word \"gum\" today.",
    "part": "n"
  },
  {
    "id": "pet-1201",
    "library": "pet",
    "word": "go out",
    "meaning": "出去,熄灭,过时,辞职,倒塌,罢工",
    "example": "Try to use \"go out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1202",
    "library": "pet",
    "word": "gun",
    "meaning": "枪；[医]枪",
    "example": "I learned the word \"gun\" today.",
    "part": "n"
  },
  {
    "id": "pet-1203",
    "library": "pet",
    "word": "guy",
    "meaning": "家伙,支索；用支索撑住,取笑,嘲弄；逃跑",
    "example": "I learned the word \"guy\" today.",
    "part": "n"
  },
  {
    "id": "pet-1204",
    "library": "pet",
    "word": "gym",
    "meaning": "+体育馆,体育训练,体育课,体操",
    "example": "I learned the word \"gym\" today.",
    "part": "n"
  },
  {
    "id": "pet-1205",
    "library": "pet",
    "word": "gymnastics",
    "meaning": "体操,体育；[医]体操,体育",
    "example": "I learned the word \"gymnastics\" today.",
    "part": "n"
  },
  {
    "id": "pet-1206",
    "library": "pet",
    "word": "gorgeous",
    "meaning": "a.华丽的,灿烂的",
    "example": "I learned the word \"gorgeous\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1207",
    "library": "pet",
    "word": "hear",
    "meaning": "听到,倾听,听说,审理；听见,听",
    "example": "I learned the word \"hear\" today.",
    "part": "v"
  },
  {
    "id": "pet-1208",
    "library": "pet",
    "word": "heart",
    "meaning": "心,心脏,中心,内心,感情,精神,心情,宝贝儿；鼓励",
    "example": "I learned the word \"heart\" today.",
    "part": "n"
  },
  {
    "id": "pet-1209",
    "library": "pet",
    "word": "heat",
    "meaning": "热,热度,体温,高潮；加热,激昂,加剧；把...加热,使激动",
    "example": "I learned the word \"heat\" today.",
    "part": "n"
  },
  {
    "id": "pet-1210",
    "library": "pet",
    "word": "habit",
    "meaning": "习惯,嗜好,习性；使穿衣",
    "example": "I learned the word \"habit\" today.",
    "part": "n"
  },
  {
    "id": "pet-1211",
    "library": "pet",
    "word": "heater",
    "meaning": "加热器,灯丝,加热工；[化]加热器",
    "example": "I learned the word \"heater\" today.",
    "part": "n"
  },
  {
    "id": "pet-1212",
    "library": "pet",
    "word": "hair",
    "meaning": "头发,毛发,些微；[医]毛,发",
    "example": "I learned the word \"hair\" today.",
    "part": "n"
  },
  {
    "id": "pet-1213",
    "library": "pet",
    "word": "heating",
    "meaning": "加热,供热,暖气设备,供暖系统,暖气装置；a.加热的,供暖的",
    "example": "I learned the word \"heating\" today.",
    "part": "n"
  },
  {
    "id": "pet-1214",
    "library": "pet",
    "word": "haircut",
    "meaning": "理发,(男子的)发式",
    "example": "I learned the word \"haircut\" today.",
    "part": "n"
  },
  {
    "id": "pet-1215",
    "library": "pet",
    "word": "heavy",
    "meaning": "a.重的,巨大的,沉重的,笨重的,过度的；沉重地；重物,严肃角色",
    "example": "I learned the word \"heavy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1216",
    "library": "pet",
    "word": "heel",
    "meaning": "脚后跟,踵,后部,倾侧；尾随,装以鞋跟,倾侧,追赶；紧随,用脚后跟传球",
    "example": "I learned the word \"heel\" today.",
    "part": "n"
  },
  {
    "id": "pet-1217",
    "library": "pet",
    "word": "hairdresser",
    "meaning": "美发师,理发师",
    "example": "I learned the word \"hairdresser\" today.",
    "part": "n"
  },
  {
    "id": "pet-1218",
    "library": "pet",
    "word": "hairdryer",
    "meaning": "（吹干头发的）吹风机",
    "example": "I learned the word \"hairdryer\" today.",
    "part": "n"
  },
  {
    "id": "pet-1219",
    "library": "pet",
    "word": "half",
    "meaning": "一半,半场,不完全；a.一半的,不完全的,部分的,半场的；一半地,部分地,在某种程度上地,几乎",
    "example": "I learned the word \"half\" today.",
    "part": "adv, det, n & pron"
  },
  {
    "id": "pet-1220",
    "library": "pet",
    "word": "height",
    "meaning": "高度,海拔,高地,顶点；[化]高度",
    "example": "I learned the word \"height\" today.",
    "part": "n"
  },
  {
    "id": "pet-1221",
    "library": "pet",
    "word": "half-price",
    "meaning": "半价",
    "example": "I learned the word \"half-price\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1222",
    "library": "pet",
    "word": "helicopter",
    "meaning": "直升机；由直升机运送；乘直升机",
    "example": "I learned the word \"helicopter\" today.",
    "part": "n"
  },
  {
    "id": "pet-1223",
    "library": "pet",
    "word": "hall",
    "meaning": "门厅,走廊,会堂",
    "example": "I learned the word \"hall\" today.",
    "part": "n"
  },
  {
    "id": "pet-1224",
    "library": "pet",
    "word": "hello",
    "meaning": "interj.喂,嘿",
    "example": "I learned the word \"hello\" today.",
    "part": "exclam"
  },
  {
    "id": "pet-1225",
    "library": "pet",
    "word": "hand",
    "meaning": "手,爪,指针,掌握,协助,人手,手艺,手迹,支配,插手；交给,支持,搀扶",
    "example": "I learned the word \"hand\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1226",
    "library": "pet",
    "word": "helmet",
    "meaning": "钢盔,盔,防护帽；给...戴头盔",
    "example": "I learned the word \"helmet\" today.",
    "part": "n"
  },
  {
    "id": "pet-1227",
    "library": "pet",
    "word": "handbag",
    "meaning": "手提包",
    "example": "I learned the word \"handbag\" today.",
    "part": "n"
  },
  {
    "id": "pet-1228",
    "library": "pet",
    "word": "help",
    "meaning": "帮忙,帮助者,补救办法,有益的东西；帮助,帮忙,接济,治疗,款待；有用,救命,招待",
    "example": "I learned the word \"help\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1229",
    "library": "pet",
    "word": "hand-held",
    "meaning": "a.手提式的,便携式的；掌上型的；手提式的报话机",
    "example": "I learned the word \"hand-held\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1230",
    "library": "pet",
    "word": "her",
    "meaning": "她的,她",
    "example": "I learned the word \"her\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-1231",
    "library": "pet",
    "word": "hand in",
    "meaning": "交上；[法]缴纳,上交",
    "example": "Try to use \"hand in\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1232",
    "library": "pet",
    "word": "herb",
    "meaning": "药草,香草；[医]草,草本,草药",
    "example": "I learned the word \"herb\" today.",
    "part": "n"
  },
  {
    "id": "pet-1233",
    "library": "pet",
    "word": "here",
    "meaning": "在这里,此时,这里；这里",
    "example": "I learned the word \"here\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1234",
    "library": "pet",
    "word": "hero",
    "meaning": "英雄,超越常人者,男主角",
    "example": "I learned the word \"hero\" today.",
    "part": "n"
  },
  {
    "id": "pet-1235",
    "library": "pet",
    "word": "handkerchief",
    "meaning": "手帕,头巾,围巾",
    "example": "I learned the word \"handkerchief\" today.",
    "part": "n"
  },
  {
    "id": "pet-1236",
    "library": "pet",
    "word": "heroine",
    "meaning": "巾帼英雄,烈妇,女主角；[化]海洛因；二醋吗啡",
    "example": "I learned the word \"heroine\" today.",
    "part": "n"
  },
  {
    "id": "pet-1237",
    "library": "pet",
    "word": "handle",
    "meaning": "柄,把手,把柄,柄状物,手感；触摸,运用,买卖,处理,操作；搬运,易于操纵",
    "example": "I learned the word \"handle\" today.",
    "part": "v"
  },
  {
    "id": "pet-1238",
    "library": "pet",
    "word": "hand out",
    "meaning": "把...拿出来,分发,施舍",
    "example": "Try to use \"hand out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1239",
    "library": "pet",
    "word": "hers",
    "meaning": "她的",
    "example": "I learned the word \"hers\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1240",
    "library": "pet",
    "word": "handsome",
    "meaning": "a.英俊的,大方的,慷慨的,相当可观的,美观的,灵敏的",
    "example": "I learned the word \"handsome\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1241",
    "library": "pet",
    "word": "herself",
    "meaning": "她自己,她亲自",
    "example": "I learned the word \"herself\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1242",
    "library": "pet",
    "word": "hey",
    "meaning": "interj.嗨",
    "example": "I learned the word \"hey\" today.",
    "part": "exclam"
  },
  {
    "id": "pet-1243",
    "library": "pet",
    "word": "handwriting",
    "meaning": "笔迹",
    "example": "I learned the word \"handwriting\" today.",
    "part": "n"
  },
  {
    "id": "pet-1244",
    "library": "pet",
    "word": "hang",
    "meaning": "悬挂,诀窍,意义；悬挂,附着,装饰,垂下,踌躇,绞死,使悬而未决；悬着,垂下,被绞死,悬而不决",
    "example": "I learned the word \"hang\" today.",
    "part": "v"
  },
  {
    "id": "pet-1245",
    "library": "pet",
    "word": "hi",
    "meaning": "interj.喂",
    "example": "I learned the word \"hi\" today.",
    "part": "exclam"
  },
  {
    "id": "pet-1246",
    "library": "pet",
    "word": "hidden",
    "meaning": "a.隐藏的；hide的过去分词；[计]隐藏的",
    "example": "I learned the word \"hidden\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1247",
    "library": "pet",
    "word": "hang out",
    "meaning": "挂出",
    "example": "Try to use \"hang out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1248",
    "library": "pet",
    "word": "hide",
    "meaning": "兽皮,迹象,躲藏处；藏,隐瞒,遮避,剥...的皮,隐藏；躲藏",
    "example": "I learned the word \"hide\" today.",
    "part": "v"
  },
  {
    "id": "pet-1249",
    "library": "pet",
    "word": "high",
    "meaning": "高度,高处；a.高的,高级的,主要的,高尚的,高原的,高音的,昂贵的,傲慢的；高度地,奢侈地",
    "example": "I learned the word \"high\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1250",
    "library": "pet",
    "word": "hike",
    "meaning": "徒步旅行,远足,涨价,提高；步行,徒步旅行,上升；使高涨,拉起",
    "example": "I learned the word \"hike\" today.",
    "part": "v"
  },
  {
    "id": "pet-1251",
    "library": "pet",
    "word": "hang up",
    "meaning": "挂断,拖延,把...挂起来；[经]抵押,赊帐",
    "example": "Try to use \"hang up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1252",
    "library": "pet",
    "word": "hill",
    "meaning": "小山,丘陵,小土堆；作成土堆,堆成小丘",
    "example": "I learned the word \"hill\" today.",
    "part": "n"
  },
  {
    "id": "pet-1253",
    "library": "pet",
    "word": "him",
    "meaning": "他",
    "example": "I learned the word \"him\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1254",
    "library": "pet",
    "word": "himself",
    "meaning": "他自己,他亲自",
    "example": "I learned the word \"himself\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1255",
    "library": "pet",
    "word": "happen",
    "meaning": "发生,发生,恰巧",
    "example": "I learned the word \"happen\" today.",
    "part": "v"
  },
  {
    "id": "pet-1256",
    "library": "pet",
    "word": "hip hop",
    "meaning": "希普霍普",
    "example": "Try to use \"hip hop\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1257",
    "library": "pet",
    "word": "happy",
    "meaning": "a.快乐的,幸福的,愉快的,恰当的",
    "example": "I learned the word \"happy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1258",
    "library": "pet",
    "word": "hire",
    "meaning": "租金,租用,雇用；雇请,出租；受雇",
    "example": "I learned the word \"hire\" today.",
    "part": "v & n"
  },
  {
    "id": "pet-1259",
    "library": "pet",
    "word": "happily",
    "meaning": "幸福地,快乐地,幸好",
    "example": "I learned the word \"happily\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1260",
    "library": "pet",
    "word": "happiness",
    "meaning": "快乐,幸运,适当",
    "example": "I learned the word \"happiness\" today.",
    "part": "n"
  },
  {
    "id": "pet-1261",
    "library": "pet",
    "word": "harbour",
    "meaning": "港,避难所；庇护,藏匿,(使)入港停泊",
    "example": "I learned the word \"harbour\" today.",
    "part": "n"
  },
  {
    "id": "pet-1262",
    "library": "pet",
    "word": "hard",
    "meaning": "a.坚硬的,硬的,难的,艰苦的,困难的,坚固的,猛烈的,艰难的,结实的,确实的；坚硬地,努力地,辛苦地,接近地,猛烈地,牢固地",
    "example": "I learned the word \"hard\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1263",
    "library": "pet",
    "word": "his",
    "meaning": "他的；[化]组氨酸",
    "example": "I learned the word \"his\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-1264",
    "library": "pet",
    "word": "hardly",
    "meaning": "刚刚,几乎不,勉强是",
    "example": "I learned the word \"hardly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1265",
    "library": "pet",
    "word": "historic",
    "meaning": "a.历史上著名的,有历史性的",
    "example": "I learned the word \"historic\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1266",
    "library": "pet",
    "word": "historical",
    "meaning": "a.历史的,史实的,历史上的；[法]历史性的",
    "example": "I learned the word \"historical\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1267",
    "library": "pet",
    "word": "history",
    "meaning": "历史,过去,经历,发展过程,历史学,过去的事,历史记录；[计]历史记录",
    "example": "I learned the word \"history\" today.",
    "part": "n"
  },
  {
    "id": "pet-1268",
    "library": "pet",
    "word": "hardware",
    "meaning": "硬件,五金器具,零件；[计]硬件",
    "example": "I learned the word \"hardware\" today.",
    "part": "n"
  },
  {
    "id": "pet-1269",
    "library": "pet",
    "word": "hit",
    "meaning": "打击,打,冲撞,讽刺；打,打击,碰撞,打中,袭击,偶然碰上；打,打中,打击,碰撞,偶然碰上",
    "example": "I learned the word \"hit\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1270",
    "library": "pet",
    "word": "hat",
    "meaning": "帽子；给...戴帽子",
    "example": "I learned the word \"hat\" today.",
    "part": "n"
  },
  {
    "id": "pet-1271",
    "library": "pet",
    "word": "hate",
    "meaning": "憎恨,恨,厌恶；憎恨,憎恶；仇恨",
    "example": "I learned the word \"hate\" today.",
    "part": "v"
  },
  {
    "id": "pet-1272",
    "library": "pet",
    "word": "have",
    "meaning": "有,怀有,拿,进行；aux.已经",
    "example": "I learned the word \"have\" today.",
    "part": "av & v"
  },
  {
    "id": "pet-1273",
    "library": "pet",
    "word": "hitchhike",
    "meaning": "搭便车；要求(搭便车)",
    "example": "I learned the word \"hitchhike\" today.",
    "part": "v"
  },
  {
    "id": "pet-1274",
    "library": "pet",
    "word": "have got to",
    "meaning": "必须；不得不；非得",
    "example": "Try to use \"have got to\" in a short sentence.",
    "part": "mv"
  },
  {
    "id": "pet-1275",
    "library": "pet",
    "word": "hobby",
    "meaning": "嗜好,癖好,爱好",
    "example": "I learned the word \"hobby\" today.",
    "part": "n"
  },
  {
    "id": "pet-1276",
    "library": "pet",
    "word": "hockey",
    "meaning": "冰球,曲棍球",
    "example": "I learned the word \"hockey\" today.",
    "part": "n"
  },
  {
    "id": "pet-1277",
    "library": "pet",
    "word": "have to",
    "meaning": "不得不,只好；只得；必须",
    "example": "Try to use \"have to\" in a short sentence.",
    "part": "mv"
  },
  {
    "id": "pet-1278",
    "library": "pet",
    "word": "hold",
    "meaning": "把握,把持力,柄,控制,掌握,监禁；保存,握住,拿住,占据,持有,拥有；支持,持续,有效",
    "example": "I learned the word \"hold\" today.",
    "part": "v"
  },
  {
    "id": "pet-1279",
    "library": "pet",
    "word": "he",
    "meaning": "他；男孩,男人,雄性动物",
    "example": "I learned the word \"he\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1280",
    "library": "pet",
    "word": "head",
    "meaning": "头,头脑,领袖,脑袋,最前的部分；为首,朝向,前进,用头顶；朝特定方向行进,(作物)结穗",
    "example": "I learned the word \"head\" today.",
    "part": "n"
  },
  {
    "id": "pet-1281",
    "library": "pet",
    "word": "hold up",
    "meaning": "举起,支撑,继续下去,阻挡,拦截；[法]支撑,继续下去,阻塞",
    "example": "Try to use \"hold up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1282",
    "library": "pet",
    "word": "hole",
    "meaning": "孔,洞,穴,漏洞；挖洞,掘坑；进洞,凿洞",
    "example": "I learned the word \"hole\" today.",
    "part": "n"
  },
  {
    "id": "pet-1283",
    "library": "pet",
    "word": "holiday",
    "meaning": "假日,假期,节日；度假",
    "example": "I learned the word \"holiday\" today.",
    "part": "n"
  },
  {
    "id": "pet-1284",
    "library": "pet",
    "word": "headache",
    "meaning": "头痛,令人头痛之事；[医]头痛",
    "example": "I learned the word \"headache\" today.",
    "part": "n"
  },
  {
    "id": "pet-1285",
    "library": "pet",
    "word": "home",
    "meaning": "家,避难所,故乡；a.家庭的,国内的,打中目标的；在家,在本国,打中目标地",
    "example": "I learned the word \"home\" today.",
    "part": "adv & n"
  },
  {
    "id": "pet-1286",
    "library": "pet",
    "word": "headline",
    "meaning": "大标题,新闻摘要；为...做标题,写标题",
    "example": "I learned the word \"headline\" today.",
    "part": "n"
  },
  {
    "id": "pet-1287",
    "library": "pet",
    "word": "homepage",
    "meaning": "主页",
    "example": "I learned the word \"homepage\" today.",
    "part": "n"
  },
  {
    "id": "pet-1288",
    "library": "pet",
    "word": "headphones",
    "meaning": "听筒；耳机；头戴式受话器（headphone的复数形式）",
    "example": "I learned the word \"headphones\" today.",
    "part": "n"
  },
  {
    "id": "pet-1289",
    "library": "pet",
    "word": "homework",
    "meaning": "家庭作业,家里做的工作；[经]家庭作业",
    "example": "I learned the word \"homework\" today.",
    "part": "n"
  },
  {
    "id": "pet-1290",
    "library": "pet",
    "word": "headteacher",
    "meaning": "中小学的校长",
    "example": "I learned the word \"headteacher\" today.",
    "part": "n"
  },
  {
    "id": "pet-1291",
    "library": "pet",
    "word": "honest",
    "meaning": "a.诚实的,坦直的,可靠的",
    "example": "I learned the word \"honest\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1292",
    "library": "pet",
    "word": "health",
    "meaning": "健康,卫生,蓬勃,健康状态；[医]健康",
    "example": "I learned the word \"health\" today.",
    "part": "n"
  },
  {
    "id": "pet-1293",
    "library": "pet",
    "word": "honestly",
    "meaning": "真诚地,公正地",
    "example": "I learned the word \"honestly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1294",
    "library": "pet",
    "word": "healthy",
    "meaning": "a.健康的,有益健康的,卫生的；[医]健康的",
    "example": "I learned the word \"healthy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1295",
    "library": "pet",
    "word": "honey",
    "meaning": "蜂蜜,甜蜜,爱人；a.蜂蜜似的,甜蜜的,甘美的；加蜜使甜,对...说甜言蜜语",
    "example": "I learned the word \"honey\" today.",
    "part": "n"
  },
  {
    "id": "pet-1296",
    "library": "pet",
    "word": "imagine",
    "meaning": "想像,设想,猜测；想像起来",
    "example": "I learned the word \"imagine\" today.",
    "part": "v"
  },
  {
    "id": "pet-1297",
    "library": "pet",
    "word": "honeymoon",
    "meaning": "蜜月,蜜月假期；渡蜜月",
    "example": "I learned the word \"honeymoon\" today.",
    "part": "n"
  },
  {
    "id": "pet-1298",
    "library": "pet",
    "word": "immediately",
    "meaning": "直接地,立刻,立即",
    "example": "I learned the word \"immediately\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1299",
    "library": "pet",
    "word": "hope",
    "meaning": "希望,信心,期待；希望,期望,信赖",
    "example": "I learned the word \"hope\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1300",
    "library": "pet",
    "word": "immigration",
    "meaning": "移民,移居；[医]移民",
    "example": "I learned the word \"immigration\" today.",
    "part": "n"
  },
  {
    "id": "pet-1301",
    "library": "pet",
    "word": "hopeful",
    "meaning": "有希望之人,有前途之人；a.有希望的,怀抱希望的,保持乐观的",
    "example": "I learned the word \"hopeful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1302",
    "library": "pet",
    "word": "importance",
    "meaning": "重要,重要性,重要地位,自大；[机]重要,重要性",
    "example": "I learned the word \"importance\" today.",
    "part": "n"
  },
  {
    "id": "pet-1303",
    "library": "pet",
    "word": "hopefully",
    "meaning": "有希望地,如果希望能实现的话",
    "example": "I learned the word \"hopefully\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1304",
    "library": "pet",
    "word": "important",
    "meaning": "a.重要的,有地位的,大量的,显要的,自负的；[计]要点",
    "example": "I learned the word \"important\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1305",
    "library": "pet",
    "word": "impossible",
    "meaning": "a.不可能的,难以置信的,令人无法忍受的",
    "example": "I learned the word \"impossible\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1306",
    "library": "pet",
    "word": "hopeless",
    "meaning": "a.无希望的,绝望的,不可救药的",
    "example": "I learned the word \"hopeless\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1307",
    "library": "pet",
    "word": "improve",
    "meaning": "改良,提高...的价值,改善,利用；变得更好,增加",
    "example": "I learned the word \"improve\" today.",
    "part": "v"
  },
  {
    "id": "pet-1308",
    "library": "pet",
    "word": "horrible",
    "meaning": "a.可怕的,遭透的,极讨厌的",
    "example": "I learned the word \"horrible\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1309",
    "library": "pet",
    "word": "improvement",
    "meaning": "进步,改善,利用；[医]改善,好转,进步",
    "example": "I learned the word \"improvement\" today.",
    "part": "n"
  },
  {
    "id": "pet-1310",
    "library": "pet",
    "word": "horror",
    "meaning": "惊骇,恐怖,惨状；[医]恐怖,恐惧",
    "example": "I learned the word \"horror\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1311",
    "library": "pet",
    "word": "in",
    "meaning": "在...期间,在...之内,处于...之中,从事于,按照,穿着；进入,朝里,在里面,在屋里；a.在里面的,在朝的",
    "example": "I learned the word \"in\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-1312",
    "library": "pet",
    "word": "in advance",
    "meaning": "预先；[经]预先",
    "example": "Try to use \"in advance\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1313",
    "library": "pet",
    "word": "inch",
    "meaning": "英寸,身高,小岛；慢慢前进,慢慢移动；使缓慢地移动",
    "example": "I learned the word \"inch\" today.",
    "part": "n"
  },
  {
    "id": "pet-1314",
    "library": "pet",
    "word": "horse",
    "meaning": "马,骑兵,脚架；骑马,取笑；使骑马,系马于",
    "example": "I learned the word \"horse\" today.",
    "part": "n"
  },
  {
    "id": "pet-1315",
    "library": "pet",
    "word": "hospital",
    "meaning": "医院；[医]医院",
    "example": "I learned the word \"hospital\" today.",
    "part": "n"
  },
  {
    "id": "pet-1316",
    "library": "pet",
    "word": "include",
    "meaning": "包括,把...算入,包住；[计]DOS内部命令:在CONFIG.SYS文件的一个配置块中包含另一配置块的内容",
    "example": "I learned the word \"include\" today.",
    "part": "v"
  },
  {
    "id": "pet-1317",
    "library": "pet",
    "word": "including",
    "meaning": "包含,包括；[经]包括,算入",
    "example": "I learned the word \"including\" today.",
    "part": "prep"
  },
  {
    "id": "pet-1318",
    "library": "pet",
    "word": "hostel",
    "meaning": "青年招待所,宿舍,旅店",
    "example": "I learned the word \"hostel\" today.",
    "part": "n"
  },
  {
    "id": "pet-1319",
    "library": "pet",
    "word": "incorrect",
    "meaning": "a.不正确的；[法]不正确,错误的,不适当的",
    "example": "I learned the word \"incorrect\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1320",
    "library": "pet",
    "word": "hot",
    "meaning": "a.热的,热心的,辣的,热情的,激动的,猛烈的,紧迫的；热,紧迫地",
    "example": "I learned the word \"hot\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1321",
    "library": "pet",
    "word": "increase",
    "meaning": "增加,增进,利益；增加,加大；增加,繁殖",
    "example": "I learned the word \"increase\" today.",
    "part": "v"
  },
  {
    "id": "pet-1322",
    "library": "pet",
    "word": "hotel",
    "meaning": "旅馆,客栈",
    "example": "I learned the word \"hotel\" today.",
    "part": "n"
  },
  {
    "id": "pet-1323",
    "library": "pet",
    "word": "hour",
    "meaning": "小时,钟头,时间,...点钟,课时",
    "example": "I learned the word \"hour\" today.",
    "part": "n"
  },
  {
    "id": "pet-1324",
    "library": "pet",
    "word": "incredible",
    "meaning": "a.难以置信的",
    "example": "I learned the word \"incredible\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1325",
    "library": "pet",
    "word": "house",
    "meaning": "房子,住宅,机构,议院,家族,家庭；给...房子住,收藏；住,躲藏",
    "example": "I learned the word \"house\" today.",
    "part": "n"
  },
  {
    "id": "pet-1326",
    "library": "pet",
    "word": "incredibly",
    "meaning": "不能相信地",
    "example": "I learned the word \"incredibly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1327",
    "library": "pet",
    "word": "housewife",
    "meaning": "主妇,家庭妇女",
    "example": "I learned the word \"housewife\" today.",
    "part": "n"
  },
  {
    "id": "pet-1328",
    "library": "pet",
    "word": "indeed",
    "meaning": "的确,实在,真正地,甚至",
    "example": "I learned the word \"indeed\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1329",
    "library": "pet",
    "word": "housework",
    "meaning": "家事,家务",
    "example": "I learned the word \"housework\" today.",
    "part": "n"
  },
  {
    "id": "pet-1330",
    "library": "pet",
    "word": "how",
    "meaning": "如何,怎样,多少,多么；方式",
    "example": "I learned the word \"how\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1331",
    "library": "pet",
    "word": "independent",
    "meaning": "独立自主者,无党派者；a.独立的,有主见的,不须依赖的,不受约束的",
    "example": "I learned the word \"independent\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1332",
    "library": "pet",
    "word": "however",
    "meaning": "然而,无论如何,究竟怎样；然而,可是",
    "example": "I learned the word \"however\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1333",
    "library": "pet",
    "word": "individual",
    "meaning": "人,个人,个体；a.个别的,个人的,独特的",
    "example": "I learned the word \"individual\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1334",
    "library": "pet",
    "word": "indoor",
    "meaning": "a.户内的,室内的",
    "example": "I learned the word \"indoor\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1335",
    "library": "pet",
    "word": "how much",
    "meaning": "多少,什么价钱,到什么程度",
    "example": "Try to use \"how much\" in a short sentence.",
    "part": "adv"
  },
  {
    "id": "pet-1336",
    "library": "pet",
    "word": "indoors",
    "meaning": "在户内",
    "example": "I learned the word \"indoors\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1337",
    "library": "pet",
    "word": "hug",
    "meaning": "紧抱,拥抱；紧抱,坚持,使沾沾自喜",
    "example": "I learned the word \"hug\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1338",
    "library": "pet",
    "word": "industry",
    "meaning": "勤劳,工业,企业,产业,有组织的劳动；[经]工业,实业",
    "example": "I learned the word \"industry\" today.",
    "part": "n"
  },
  {
    "id": "pet-1339",
    "library": "pet",
    "word": "huge",
    "meaning": "a.极大的,巨大的,无限的",
    "example": "I learned the word \"huge\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1340",
    "library": "pet",
    "word": "human",
    "meaning": "人,人类；a.人类的,似人类的,人性的,有同情心的",
    "example": "I learned the word \"human\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1341",
    "library": "pet",
    "word": "in fact",
    "meaning": "事实上；[法]事实上",
    "example": "Try to use \"in fact\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1342",
    "library": "pet",
    "word": "humid",
    "meaning": "a.潮湿的,湿润的,多湿气的",
    "example": "I learned the word \"humid\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1343",
    "library": "pet",
    "word": "influence",
    "meaning": "影响力,权力,势力；影响,改变",
    "example": "I learned the word \"influence\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1344",
    "library": "pet",
    "word": "inform",
    "meaning": "通知,使了解,使充满；提供资料,告发",
    "example": "I learned the word \"inform\" today.",
    "part": "v"
  },
  {
    "id": "pet-1345",
    "library": "pet",
    "word": "hunger",
    "meaning": "饥饿,渴望,饥荒；使挨饿；挨饿,渴望",
    "example": "I learned the word \"hunger\" today.",
    "part": "n"
  },
  {
    "id": "pet-1346",
    "library": "pet",
    "word": "information",
    "meaning": "消息,知识,通知,情报,信息,问讯处,起诉；[计]信息",
    "example": "I learned the word \"information\" today.",
    "part": "n"
  },
  {
    "id": "pet-1347",
    "library": "pet",
    "word": "hungry",
    "meaning": "a.饥饿的,荒年的,渴望的,不毛的；[化]欠鞣皮",
    "example": "I learned the word \"hungry\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1348",
    "library": "pet",
    "word": "hunt",
    "meaning": "狩猎,追捕,搜寻,猎区；狩猎,打猎,搜索；打猎,猎食,搜寻",
    "example": "I learned the word \"hunt\" today.",
    "part": "v"
  },
  {
    "id": "pet-1349",
    "library": "pet",
    "word": "in front of",
    "meaning": "在...前面",
    "example": "Try to use \"in front of\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1350",
    "library": "pet",
    "word": "hurry",
    "meaning": "匆忙,急忙,急促；急派,催促；匆忙,赶快",
    "example": "I learned the word \"hurry\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1351",
    "library": "pet",
    "word": "ingredient",
    "meaning": "成分,因素；[化]配合剂；拼料",
    "example": "I learned the word \"ingredient\" today.",
    "part": "n"
  },
  {
    "id": "pet-1352",
    "library": "pet",
    "word": "hurt",
    "meaning": "伤害,创伤,损害；伤害,(使)伤心,危害,刺痛",
    "example": "I learned the word \"hurt\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-1353",
    "library": "pet",
    "word": "in half",
    "meaning": "分成两半,平分",
    "example": "Try to use \"in half\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1354",
    "library": "pet",
    "word": "husband",
    "meaning": "丈夫,管理人,节俭的人；节俭,使成丈夫,持有",
    "example": "I learned the word \"husband\" today.",
    "part": "n"
  },
  {
    "id": "pet-1355",
    "library": "pet",
    "word": "hut",
    "meaning": "小屋,茅舍,临时军营；(使)住在茅舍",
    "example": "I learned the word \"hut\" today.",
    "part": "n"
  },
  {
    "id": "pet-1356",
    "library": "pet",
    "word": "in ink",
    "meaning": "在...期间,在...之内,处于...之中,从事于,按照,穿着；进入,朝里,在里面,在屋里；a.在里面的,在朝的",
    "example": "Try to use \"in ink\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1357",
    "library": "pet",
    "word": "initial",
    "meaning": "字首,首字母；a.开始的,最初的,字首的；用姓名的首字母签名",
    "example": "I learned the word \"initial\" today.",
    "part": "n",
    "aliases": [
      "iinitial"
    ]
  },
  {
    "id": "pet-1358",
    "library": "pet",
    "word": "injure",
    "meaning": "伤害,损害,使受冤屈；[医]损伤",
    "example": "I learned the word \"injure\" today.",
    "part": "v"
  },
  {
    "id": "pet-1359",
    "library": "pet",
    "word": "ink",
    "meaning": "墨水,墨汁；涂墨水于,签署,加墨水",
    "example": "I learned the word \"ink\" today.",
    "part": "n"
  },
  {
    "id": "pet-1360",
    "library": "pet",
    "word": "I",
    "meaning": "我；[计]电流,中断,指令,指示符",
    "example": "I learned the word \"I\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1361",
    "library": "pet",
    "word": "in love",
    "meaning": "相爱；恋爱中",
    "example": "Try to use \"in love\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1362",
    "library": "pet",
    "word": "ice",
    "meaning": "冰,冰淇淋,糖衣,冷若冰霜,矜持,贿赂；使结冰,冰镇,覆以糖衣；结冰",
    "example": "I learned the word \"ice\" today.",
    "part": "n"
  },
  {
    "id": "pet-1363",
    "library": "pet",
    "word": "in pencil",
    "meaning": "在...期间,在...之内,处于...之中,从事于,按照,穿着；进入,朝里,在里面,在屋里；a.在里面的,在朝的",
    "example": "Try to use \"in pencil\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1364",
    "library": "pet",
    "word": "in order",
    "meaning": "整齐,状况良好,适宜",
    "example": "Try to use \"in order\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1365",
    "library": "pet",
    "word": "ice cream",
    "meaning": "冰淇淋；[化]冰淇淋",
    "example": "Try to use \"ice cream\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1366",
    "library": "pet",
    "word": "ice hockey",
    "meaning": "na.冰球；冰上曲棍球",
    "example": "Try to use \"ice hockey\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1367",
    "library": "pet",
    "word": "in order to",
    "meaning": "为了…",
    "example": "Try to use \"in order to\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1368",
    "library": "pet",
    "word": "ice skates",
    "meaning": "冰,冰淇淋,糖衣,冷若冰霜,矜持,贿赂；使结冰,冰镇,覆以糖衣；结冰",
    "example": "Try to use \"ice skates\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1369",
    "library": "pet",
    "word": "inquiry",
    "meaning": "质询,探索,调查,询盘；[计]询问；查询",
    "example": "I learned the word \"inquiry\" today.",
    "part": "n"
  },
  {
    "id": "pet-1370",
    "library": "pet",
    "word": "ice skating",
    "meaning": "滑冰",
    "example": "Try to use \"ice skating\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1371",
    "library": "pet",
    "word": "insect",
    "meaning": "昆虫,卑鄙的人；[医]昆虫",
    "example": "I learned the word \"insect\" today.",
    "part": "n"
  },
  {
    "id": "pet-1372",
    "library": "pet",
    "word": "inside",
    "meaning": "内部,内脏,内幕；a.内部的,秘密的,户内的；在里面",
    "example": "I learned the word \"inside\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-1373",
    "library": "pet",
    "word": "icy",
    "meaning": "a.冰的,冰冷的,冷淡的,滑溜的",
    "example": "I learned the word \"icy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1374",
    "library": "pet",
    "word": "ID",
    "meaning": "遗传素质,本能冲动；[计]识别,标识符,项目说明",
    "example": "I learned the word \"ID\" today.",
    "part": "n"
  },
  {
    "id": "pet-1375",
    "library": "pet",
    "word": "insist",
    "meaning": "坚持,坚决主张,强调",
    "example": "I learned the word \"insist\" today.",
    "part": "v"
  },
  {
    "id": "pet-1376",
    "library": "pet",
    "word": "ID card",
    "meaning": "身份证",
    "example": "Try to use \"ID card\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1377",
    "library": "pet",
    "word": "inspire",
    "meaning": "使感动,激发,启示,吸入,鼓舞,产生,使生灵感；吸入,赋予灵感",
    "example": "I learned the word \"inspire\" today.",
    "part": "v"
  },
  {
    "id": "pet-1378",
    "library": "pet",
    "word": "idea",
    "meaning": "主意,办法,理想,思想,概念,意见；[医]观念,思想",
    "example": "I learned the word \"idea\" today.",
    "part": "n"
  },
  {
    "id": "pet-1379",
    "library": "pet",
    "word": "identification",
    "meaning": "识别,身份证明,认同；[化]鉴定；鉴别",
    "example": "I learned the word \"identification\" today.",
    "part": "n"
  },
  {
    "id": "pet-1380",
    "library": "pet",
    "word": "install",
    "meaning": "安装,安置,使就职；[计]安装,安装程序；DOS内部命令:安装常驻程序",
    "example": "I learned the word \"install\" today.",
    "part": "v"
  },
  {
    "id": "pet-1381",
    "library": "pet",
    "word": "identify",
    "meaning": "识别,认为...等同于,确定,使参与；一致,认同",
    "example": "I learned the word \"identify\" today.",
    "part": "v"
  },
  {
    "id": "pet-1382",
    "library": "pet",
    "word": "instance",
    "meaning": "建议,情况,例子,场合；引以为例,举例说明",
    "example": "I learned the word \"instance\" today.",
    "part": "n"
  },
  {
    "id": "pet-1383",
    "library": "pet",
    "word": "if",
    "meaning": "如果,是否,无论何时,假设,即使；条件；[计]DOS批处理命令:根据所测试的条件决定是否执行另一条命令",
    "example": "I learned the word \"if\" today.",
    "part": "conj"
  },
  {
    "id": "pet-1384",
    "library": "pet",
    "word": "ignore",
    "meaning": "不理睬,忽视,驳回,忽略；[计]忽略",
    "example": "I learned the word \"ignore\" today.",
    "part": "v"
  },
  {
    "id": "pet-1385",
    "library": "pet",
    "word": "ill",
    "meaning": "疾病,坏事,罪恶,灾难；a.生病的,邪恶的,不吉利的,敌意的,不良的,不顺利的；有害地,不幸地,几乎不",
    "example": "I learned the word \"ill\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1386",
    "library": "pet",
    "word": "illness",
    "meaning": "疾病,恶意；[医]病",
    "example": "I learned the word \"illness\" today.",
    "part": "n"
  },
  {
    "id": "pet-1387",
    "library": "pet",
    "word": "imagination",
    "meaning": "想像,听觉,想像力；[医]想像",
    "example": "I learned the word \"imagination\" today.",
    "part": "n"
  },
  {
    "id": "pet-1388",
    "library": "pet",
    "word": "instructions",
    "meaning": "指令；说明（instruction的复数形式）",
    "example": "I learned the word \"instructions\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-1389",
    "library": "pet",
    "word": "instructor",
    "meaning": "教员,讲师；[法]指导者,教员,讲师",
    "example": "I learned the word \"instructor\" today.",
    "part": "n"
  },
  {
    "id": "pet-1390",
    "library": "pet",
    "word": "instrument",
    "meaning": "工具,手段,仪器；[化]仪器",
    "example": "I learned the word \"instrument\" today.",
    "part": "n"
  },
  {
    "id": "pet-1391",
    "library": "pet",
    "word": "joke",
    "meaning": "笑话,玩笑,笑柄；开玩笑,取笑,作弄",
    "example": "I learned the word \"joke\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1392",
    "library": "pet",
    "word": "intelligent",
    "meaning": "a.聪明的,智能的,了解的",
    "example": "I learned the word \"intelligent\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1393",
    "library": "pet",
    "word": "journalist",
    "meaning": "新闻记者,从事新闻杂志业的人",
    "example": "I learned the word \"journalist\" today.",
    "part": "n"
  },
  {
    "id": "pet-1394",
    "library": "pet",
    "word": "intend",
    "meaning": "计划,打算,意思是；[法]想要,打算,意旨",
    "example": "I learned the word \"intend\" today.",
    "part": "v"
  },
  {
    "id": "pet-1395",
    "library": "pet",
    "word": "journey",
    "meaning": "旅程,旅行,行程；旅行；游历",
    "example": "I learned the word \"journey\" today.",
    "part": "n"
  },
  {
    "id": "pet-1396",
    "library": "pet",
    "word": "judge",
    "meaning": "法官,裁判员,审判官,鉴定人；审理,鉴定,判断,判决,裁定；下判断,作评价",
    "example": "I learned the word \"judge\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1397",
    "library": "pet",
    "word": "interest",
    "meaning": "兴趣,嗜好,利息,利益,爱好,趣味,势力；使感兴趣,与...有关系",
    "example": "I learned the word \"interest\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1398",
    "library": "pet",
    "word": "jug",
    "meaning": "水壶,监牢,模仿夜莺的叫声；放入壶中,炖,关押；模仿夜莺叫",
    "example": "I learned the word \"jug\" today.",
    "part": "n"
  },
  {
    "id": "pet-1399",
    "library": "pet",
    "word": "interested",
    "meaning": "a.感兴趣的；[法]有利害关系的,有股份的,偏私的",
    "example": "I learned the word \"interested\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1400",
    "library": "pet",
    "word": "juice",
    "meaning": "汁,活力,体液；挤出汁来,加汁",
    "example": "I learned the word \"juice\" today.",
    "part": "n"
  },
  {
    "id": "pet-1401",
    "library": "pet",
    "word": "interesting",
    "meaning": "a.有趣的",
    "example": "I learned the word \"interesting\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1402",
    "library": "pet",
    "word": "jump",
    "meaning": "跳跃,跳动,暴涨,惊跳；跳跃,跃过,突升,使跳跃；跳跃,跳,跳动,暴涨",
    "example": "I learned the word \"jump\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1403",
    "library": "pet",
    "word": "intermediate",
    "meaning": "中间物,调停者,中级；a.中间的,中级的；起媒介作用",
    "example": "I learned the word \"intermediate\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1404",
    "library": "pet",
    "word": "jumper",
    "meaning": "跳跃者,工作服；[计]跳线连接器,跳接器",
    "example": "I learned the word \"jumper\" today.",
    "part": "n"
  },
  {
    "id": "pet-1405",
    "library": "pet",
    "word": "international",
    "meaning": "a.国际的；国别设定；[计]国别设定",
    "example": "I learned the word \"international\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1406",
    "library": "pet",
    "word": "jungle",
    "meaning": "丛林,杂乱的一堆,弱肉强食的地方",
    "example": "I learned the word \"jungle\" today.",
    "part": "n"
  },
  {
    "id": "pet-1407",
    "library": "pet",
    "word": "internet",
    "meaning": "[计]因特网,国际互连网,网际网络,互连网络,广域网",
    "example": "I learned the word \"internet\" today.",
    "part": "n"
  },
  {
    "id": "pet-1408",
    "library": "pet",
    "word": "just",
    "meaning": "a.正直的,合理的,正确的,应得的；刚刚,正好,仅仅",
    "example": "I learned the word \"just\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1409",
    "library": "pet",
    "word": "interrupt",
    "meaning": "中断,妨碍,插嘴；打断；中断",
    "example": "I learned the word \"interrupt\" today.",
    "part": "v"
  },
  {
    "id": "pet-1410",
    "library": "pet",
    "word": "interval",
    "meaning": "间隔,距离,间歇,间隙；[计]时间间隔",
    "example": "I learned the word \"interval\" today.",
    "part": "n"
  },
  {
    "id": "pet-1411",
    "library": "pet",
    "word": "interview",
    "meaning": "面谈,访问,接见,面试；接见,对...进行面谈(试)",
    "example": "I learned the word \"interview\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1412",
    "library": "pet",
    "word": "in the end",
    "meaning": "最后,终于",
    "example": "Try to use \"in the end\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1413",
    "library": "pet",
    "word": "kangaroo",
    "meaning": "袋鼠；[医]袋鼠(澳洲产)",
    "example": "I learned the word \"kangaroo\" today.",
    "part": "n"
  },
  {
    "id": "pet-1414",
    "library": "pet",
    "word": "in time",
    "meaning": "及时；[法]如期,按期,及时",
    "example": "Try to use \"in time\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1415",
    "library": "pet",
    "word": "keen",
    "meaning": "a.锋利的,敏锐的,强烈的,敏捷的,热心的,渴望的；挽歌,痛哭；唱挽歌,痛哭",
    "example": "I learned the word \"keen\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1416",
    "library": "pet",
    "word": "into",
    "meaning": "进入...之内,朝...,深入...之中,成为...状况",
    "example": "I learned the word \"into\" today.",
    "part": "prep"
  },
  {
    "id": "pet-1417",
    "library": "pet",
    "word": "introduce",
    "meaning": "介绍,引入,采用,输入；[法]引进,输入,介绍",
    "example": "I learned the word \"introduce\" today.",
    "part": "v"
  },
  {
    "id": "pet-1418",
    "library": "pet",
    "word": "introduction",
    "meaning": "介绍,传入,采用,初步",
    "example": "I learned the word \"introduction\" today.",
    "part": "n"
  },
  {
    "id": "pet-1419",
    "library": "pet",
    "word": "keep",
    "meaning": "生计,维持,保持；保持,保存,遵守,看守,整理,维持,履行,经营,拘留,记帐；保持,继续不断",
    "example": "I learned the word \"keep\" today.",
    "part": "v"
  },
  {
    "id": "pet-1420",
    "library": "pet",
    "word": "in two",
    "meaning": "分为两部分,一分为二",
    "example": "Try to use \"in two\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1421",
    "library": "pet",
    "word": "keeper",
    "meaning": "监护人,管理人,看守人；[机]保管人,看守人,保持片",
    "example": "I learned the word \"keeper\" today.",
    "part": "n"
  },
  {
    "id": "pet-1422",
    "library": "pet",
    "word": "invent",
    "meaning": "发明,创作,虚构；[机]发明",
    "example": "I learned the word \"invent\" today.",
    "part": "v"
  },
  {
    "id": "pet-1423",
    "library": "pet",
    "word": "keep in",
    "meaning": "抑制,隐瞒,隐藏,继续燃烧",
    "example": "Try to use \"keep in\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1424",
    "library": "pet",
    "word": "invention",
    "meaning": "发明,创作能力,虚构的故事；[经]发明",
    "example": "I learned the word \"invention\" today.",
    "part": "n"
  },
  {
    "id": "pet-1425",
    "library": "pet",
    "word": "invitation",
    "meaning": "邀请,请柬,引诱；[经]邀请,招待,吸引",
    "example": "I learned the word \"invitation\" today.",
    "part": "n"
  },
  {
    "id": "pet-1426",
    "library": "pet",
    "word": "invite",
    "meaning": "邀请,请求,引起,招致；邀请",
    "example": "I learned the word \"invite\" today.",
    "part": "v"
  },
  {
    "id": "pet-1427",
    "library": "pet",
    "word": "keep on",
    "meaning": "继续,穿着...不脱",
    "example": "Try to use \"keep on\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1428",
    "library": "pet",
    "word": "involve",
    "meaning": "包括,使陷于,潜心于,包围；[医]累及,牵涉,包含",
    "example": "I learned the word \"involve\" today.",
    "part": "v"
  },
  {
    "id": "pet-1429",
    "library": "pet",
    "word": "iron",
    "meaning": "铁,熨斗,铁器,坚强,烙铁,镣铐；烫平,熨,用铁包；烫平",
    "example": "I learned the word \"iron\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1430",
    "library": "pet",
    "word": "keep up",
    "meaning": "不低落,维持,继续；[经]坚持,保持,继续",
    "example": "Try to use \"keep up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1431",
    "library": "pet",
    "word": "ironing",
    "meaning": "熨烫",
    "example": "I learned the word \"ironing\" today.",
    "part": "n"
  },
  {
    "id": "pet-1432",
    "library": "pet",
    "word": "island",
    "meaning": "岛,岛屿,孤立地区,安全岛；使成岛状,孤立",
    "example": "I learned the word \"island\" today.",
    "part": "n"
  },
  {
    "id": "pet-1433",
    "library": "pet",
    "word": "kettle",
    "meaning": "茶壶,罐；[化]釜体釜；锅",
    "example": "I learned the word \"kettle\" today.",
    "part": "n"
  },
  {
    "id": "pet-1434",
    "library": "pet",
    "word": "issue",
    "meaning": "发行,问题,后果,流出,出口,争端；发行,流出,造成...结果,传下；使流出,放出,发行,发布,发给",
    "example": "I learned the word \"issue\" today.",
    "part": "n"
  },
  {
    "id": "pet-1435",
    "library": "pet",
    "word": "key",
    "meaning": "钥匙,键,解答,关键,要害,基调,线索,答案,暗礁；调音,锁上,提供线索；使用钥匙",
    "example": "I learned the word \"key\" today.",
    "part": "n"
  },
  {
    "id": "pet-1436",
    "library": "pet",
    "word": "it",
    "meaning": "它；[计]信息论,输入终端,智能终端,内捕获",
    "example": "I learned the word \"it\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1437",
    "library": "pet",
    "word": "item",
    "meaning": "项目,条款,一则,项；[计]项",
    "example": "I learned the word \"item\" today.",
    "part": "n"
  },
  {
    "id": "pet-1438",
    "library": "pet",
    "word": "keyboard",
    "meaning": "键盘；[计]键盘",
    "example": "I learned the word \"keyboard\" today.",
    "part": "n"
  },
  {
    "id": "pet-1439",
    "library": "pet",
    "word": "its",
    "meaning": "它的",
    "example": "I learned the word \"its\" today.",
    "part": "det"
  },
  {
    "id": "pet-1440",
    "library": "pet",
    "word": "itself",
    "meaning": "它本身,它自己",
    "example": "I learned the word \"itself\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1441",
    "library": "pet",
    "word": "kick",
    "meaning": "踢,反冲,后座力,凹底；踢,反抗,反冲；踢,反冲",
    "example": "I learned the word \"kick\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1442",
    "library": "pet",
    "word": "kid",
    "meaning": "小山羊,小山羊肉,小孩,欺骗；a.小山羊皮制的；哄骗,嘲弄",
    "example": "I learned the word \"kid\" today.",
    "part": "n"
  },
  {
    "id": "pet-1443",
    "library": "pet",
    "word": "kill",
    "meaning": "杀,杀戮,小河；杀,破坏,消灭,使终止,抵消,否决；杀死",
    "example": "I learned the word \"kill\" today.",
    "part": "v"
  },
  {
    "id": "pet-1444",
    "library": "pet",
    "word": "jacket",
    "meaning": "夹克,外套,护套；给...穿夹克,给...装护套",
    "example": "I learned the word \"jacket\" today.",
    "part": "n"
  },
  {
    "id": "pet-1445",
    "library": "pet",
    "word": "jail",
    "meaning": "监牢,监狱,拘留所；监禁,下狱",
    "example": "I learned the word \"jail\" today.",
    "part": "n"
  },
  {
    "id": "pet-1446",
    "library": "pet",
    "word": "jam",
    "meaning": "果酱,拥塞之物,堵塞,困境；挤进,使塞满,混杂,压碎,使堵塞；堵塞,轧住,拥挤",
    "example": "I learned the word \"jam\" today.",
    "part": "n"
  },
  {
    "id": "pet-1447",
    "library": "pet",
    "word": "kind",
    "meaning": "种类,性质,方式；a.亲切的,仁慈的,和蔼的",
    "example": "I learned the word \"kind\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1448",
    "library": "pet",
    "word": "jar",
    "meaning": "广口瓶,震动,刺耳声；震惊,冲突,发刺耳声,不一致；震动,刺激",
    "example": "I learned the word \"jar\" today.",
    "part": "n"
  },
  {
    "id": "pet-1449",
    "library": "pet",
    "word": "king",
    "meaning": "国王,君主；使...成为君主；君临,统治",
    "example": "I learned the word \"king\" today.",
    "part": "n"
  },
  {
    "id": "pet-1450",
    "library": "pet",
    "word": "jazz",
    "meaning": "爵士乐,喧闹；a.爵士乐的,喧吵的；演奏爵士乐,跳爵士舞,游荡",
    "example": "I learned the word \"jazz\" today.",
    "part": "n"
  },
  {
    "id": "pet-1451",
    "library": "pet",
    "word": "kiss",
    "meaning": "吻；吻；接吻",
    "example": "I learned the word \"kiss\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1452",
    "library": "pet",
    "word": "jealous",
    "meaning": "a.嫉妒的,羡慕的,留心的,戒备的",
    "example": "I learned the word \"jealous\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1453",
    "library": "pet",
    "word": "kit",
    "meaning": "装备,工具箱,成套工具；[计]成套部件；成套零件",
    "example": "I learned the word \"kit\" today.",
    "part": "n"
  },
  {
    "id": "pet-1454",
    "library": "pet",
    "word": "jeans",
    "meaning": "工装裤,牛仔裤",
    "example": "I learned the word \"jeans\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-1455",
    "library": "pet",
    "word": "kitchen",
    "meaning": "厨房,全套炊具；[医]厨房",
    "example": "I learned the word \"kitchen\" today.",
    "part": "n"
  },
  {
    "id": "pet-1456",
    "library": "pet",
    "word": "jet",
    "meaning": "喷射流,喷嘴,煤玉；射出,迸出,喷射；a.黑而发亮的,墨黑的",
    "example": "I learned the word \"jet\" today.",
    "part": "n"
  },
  {
    "id": "pet-1457",
    "library": "pet",
    "word": "kite",
    "meaning": "风筝,筝帆,空头支票,骗子；象风筝一样飞,轻快地移动,使用空头支票；使上升,骗钱",
    "example": "I learned the word \"kite\" today.",
    "part": "n"
  },
  {
    "id": "pet-1458",
    "library": "pet",
    "word": "kitten",
    "meaning": "小猫,淘气姑娘；产仔,卖弄风情",
    "example": "I learned the word \"kitten\" today.",
    "part": "n"
  },
  {
    "id": "pet-1459",
    "library": "pet",
    "word": "jewellery",
    "meaning": "宝石,贵重饰物,珠宝,宝石饰物,受珍视的人/物,宝贝,有价值的人/物",
    "example": "I learned the word \"jewellery\" today.",
    "part": "n"
  },
  {
    "id": "pet-1460",
    "library": "pet",
    "word": "knee",
    "meaning": "膝,膝盖；膝行,用膝盖碰",
    "example": "I learned the word \"knee\" today.",
    "part": "n"
  },
  {
    "id": "pet-1461",
    "library": "pet",
    "word": "job",
    "meaning": "工作,零活,职业,事情；做零工,打杂,做股票经纪,假公济私；代客买卖,批发,承包,欺骗",
    "example": "I learned the word \"job\" today.",
    "part": "n"
  },
  {
    "id": "pet-1462",
    "library": "pet",
    "word": "knife",
    "meaning": "小刀,匕首；切割,伤害,切,戳；劈开,穿过",
    "example": "I learned the word \"knife\" today.",
    "part": "n"
  },
  {
    "id": "pet-1463",
    "library": "pet",
    "word": "jog",
    "meaning": "轻推,轻撞,慢跑；轻推,(使)蹒跚行进,(使)慢跑",
    "example": "I learned the word \"jog\" today.",
    "part": "v"
  },
  {
    "id": "pet-1464",
    "library": "pet",
    "word": "knit",
    "meaning": "编织,结合",
    "example": "I learned the word \"knit\" today.",
    "part": "v"
  },
  {
    "id": "pet-1465",
    "library": "pet",
    "word": "jogging",
    "meaning": "慢跑；[电]轻摇",
    "example": "I learned the word \"jogging\" today.",
    "part": "n"
  },
  {
    "id": "pet-1466",
    "library": "pet",
    "word": "knock",
    "meaning": "敲,敲打,敲门；敲击,互撞,攻击",
    "example": "I learned the word \"knock\" today.",
    "part": "v"
  },
  {
    "id": "pet-1467",
    "library": "pet",
    "word": "join",
    "meaning": "参加,结合,加入；连接,结合,参加,加入；连接,结合,接合点",
    "example": "I learned the word \"join\" today.",
    "part": "v"
  },
  {
    "id": "pet-1468",
    "library": "pet",
    "word": "knock down",
    "meaning": "击倒,拆卸,拍卖出；[经]拍板成交",
    "example": "Try to use \"knock down\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1469",
    "library": "pet",
    "word": "know",
    "meaning": "知道,了解,认识,确信",
    "example": "I learned the word \"know\" today.",
    "part": "v"
  },
  {
    "id": "pet-1470",
    "library": "pet",
    "word": "letter",
    "meaning": "信,字母,证书,字面意义,铅字,学问,出租人；写字母于,在...上刻字母,用字母标明；写印刷体字",
    "example": "I learned the word \"letter\" today.",
    "part": "n"
  },
  {
    "id": "pet-1471",
    "library": "pet",
    "word": "knowledge",
    "meaning": "知识,学问,认识,知道",
    "example": "I learned the word \"knowledge\" today.",
    "part": "n"
  },
  {
    "id": "pet-1472",
    "library": "pet",
    "word": "lettuce",
    "meaning": "莴苣,生菜,纸币；[医]莴苣",
    "example": "I learned the word \"lettuce\" today.",
    "part": "n"
  },
  {
    "id": "pet-1473",
    "library": "pet",
    "word": "level",
    "meaning": "水平,水准,平地；a.同高的,平坦的,齐平的,水平的；弄平,夷平,使同等,瞄准,对准",
    "example": "I learned the word \"level\" today.",
    "part": "n"
  },
  {
    "id": "pet-1474",
    "library": "pet",
    "word": "library",
    "meaning": "图书馆,藏书,库；[计]库",
    "example": "I learned the word \"library\" today.",
    "part": "n"
  },
  {
    "id": "pet-1475",
    "library": "pet",
    "word": "licence",
    "meaning": "执照,许可证,特许；许可,特许,认可",
    "example": "I learned the word \"licence\" today.",
    "part": "n"
  },
  {
    "id": "pet-1476",
    "library": "pet",
    "word": "label",
    "meaning": "标签,称号,商标,标志；贴标签于,标注；[计]标志",
    "example": "I learned the word \"label\" today.",
    "part": "n"
  },
  {
    "id": "pet-1477",
    "library": "pet",
    "word": "lie",
    "meaning": "谎言,假象,位置；躺着,说谎,位于,展现,存在,停泊；谎骗",
    "example": "I learned the word \"lie\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1478",
    "library": "pet",
    "word": "lie down",
    "meaning": "躺下",
    "example": "Try to use \"lie down\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1479",
    "library": "pet",
    "word": "lack",
    "meaning": "缺乏,无,不足；缺乏,短少,不足,需要；缺乏",
    "example": "I learned the word \"lack\" today.",
    "part": "n"
  },
  {
    "id": "pet-1480",
    "library": "pet",
    "word": "life",
    "meaning": "生活,生命,人生,世事,生物,寿命,一生,生命力,灵魂,无期徒刑；[医]生活,生存,生命,寿命",
    "example": "I learned the word \"life\" today.",
    "part": "n"
  },
  {
    "id": "pet-1481",
    "library": "pet",
    "word": "ladder",
    "meaning": "梯,梯状物,发迹的途径；袜子抽丝,成名",
    "example": "I learned the word \"ladder\" today.",
    "part": "n"
  },
  {
    "id": "pet-1482",
    "library": "pet",
    "word": "lift",
    "meaning": "举起,帮助,昂扬,电梯；升高,提高,鼓舞,清偿,空运,举起,剽窃；升起,消散,耸立",
    "example": "I learned the word \"lift\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1483",
    "library": "pet",
    "word": "lady",
    "meaning": "淑女,夫人,女士,贵妇",
    "example": "I learned the word \"lady\" today.",
    "part": "n"
  },
  {
    "id": "pet-1484",
    "library": "pet",
    "word": "lake",
    "meaning": "湖,池,色淀；(使)血球溶解",
    "example": "I learned the word \"lake\" today.",
    "part": "n"
  },
  {
    "id": "pet-1485",
    "library": "pet",
    "word": "lamb",
    "meaning": "小羊,羔羊；产羊羔",
    "example": "I learned the word \"lamb\" today.",
    "part": "n"
  },
  {
    "id": "pet-1486",
    "library": "pet",
    "word": "lamp",
    "meaning": "灯；照亮；[计]逻辑模拟分析系统",
    "example": "I learned the word \"lamp\" today.",
    "part": "n"
  },
  {
    "id": "pet-1487",
    "library": "pet",
    "word": "light",
    "meaning": "光,光亮,灯,日光,发光体,光源,杰出人物,火花,眼光；a.轻的,少量的,轻微的,轻快的,轻浮的,明亮的,淡色的,容易的；点燃,照亮",
    "example": "I learned the word \"light\" today.",
    "part": "adj, n & v"
  },
  {
    "id": "pet-1488",
    "library": "pet",
    "word": "land",
    "meaning": "陆地,地面,地界,地产,国土,土地；登陆,登岸,到达；使上岸,使登陆,使到达",
    "example": "I learned the word \"land\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1489",
    "library": "pet",
    "word": "lighter",
    "meaning": "点火者,点灯工人,打火机,驳船；以驳船搬运",
    "example": "I learned the word \"lighter\" today.",
    "part": "n"
  },
  {
    "id": "pet-1490",
    "library": "pet",
    "word": "landscape",
    "meaning": "风景,山水,风景画；从事景观美化；美化...景观",
    "example": "I learned the word \"landscape\" today.",
    "part": "n"
  },
  {
    "id": "pet-1491",
    "library": "pet",
    "word": "language",
    "meaning": "语言,文字,措辞；[计]语言",
    "example": "I learned the word \"language\" today.",
    "part": "n"
  },
  {
    "id": "pet-1492",
    "library": "pet",
    "word": "lightning",
    "meaning": "闪电；闪电；a.闪电的",
    "example": "I learned the word \"lightning\" today.",
    "part": "n"
  },
  {
    "id": "pet-1493",
    "library": "pet",
    "word": "like",
    "meaning": "a.相似的,同样的；喜欢,愿意,想；喜欢,希望",
    "example": "I learned the word \"like\" today.",
    "part": "prep & v"
  },
  {
    "id": "pet-1494",
    "library": "pet",
    "word": "large",
    "meaning": "a.大的,大量的,宽大的,广博的；大大地,夸大地",
    "example": "I learned the word \"large\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1495",
    "library": "pet",
    "word": "likely",
    "meaning": "a.有可能的,合适的,前途有望的；或许,可能",
    "example": "I learned the word \"likely\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1496",
    "library": "pet",
    "word": "last",
    "meaning": "a.最后的,末尾的,最近的；持续,支持,维持；使维持,够...用",
    "example": "I learned the word \"last\" today.",
    "part": "adj, adv, det & v"
  },
  {
    "id": "pet-1497",
    "library": "pet",
    "word": "limit",
    "meaning": "界限,边界,限度,极限,限制；限制,限定",
    "example": "I learned the word \"limit\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1498",
    "library": "pet",
    "word": "late",
    "meaning": "a.迟的,晚的,已故的；很晚,很迟,晚",
    "example": "I learned the word \"late\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1499",
    "library": "pet",
    "word": "limited",
    "meaning": "a.有限制的,有限的,有限责任的；特别快车",
    "example": "I learned the word \"limited\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1500",
    "library": "pet",
    "word": "lately",
    "meaning": "近来,最近",
    "example": "I learned the word \"lately\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1501",
    "library": "pet",
    "word": "later",
    "meaning": "以后,随后",
    "example": "I learned the word \"later\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1502",
    "library": "pet",
    "word": "line",
    "meaning": "列,线,绳,电线,线路,路线,航线,作业线,界线,战线,外形,排,家系；排成一行,顺...排列,划线于,加衬里,使有线条,使起皱纹；排队",
    "example": "I learned the word \"line\" today.",
    "part": "n"
  },
  {
    "id": "pet-1503",
    "library": "pet",
    "word": "latest",
    "meaning": "a.最近的",
    "example": "I learned the word \"latest\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1504",
    "library": "pet",
    "word": "laugh",
    "meaning": "笑,笑声；笑,大笑；以笑表示",
    "example": "I learned the word \"laugh\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1505",
    "library": "pet",
    "word": "law",
    "meaning": "法律,法则,定律,法律的制约,法学,司法界,诉讼；起诉",
    "example": "I learned the word \"law\" today.",
    "part": "n"
  },
  {
    "id": "pet-1506",
    "library": "pet",
    "word": "lawyer",
    "meaning": "律师；[经]律师",
    "example": "I learned the word \"lawyer\" today.",
    "part": "n"
  },
  {
    "id": "pet-1507",
    "library": "pet",
    "word": "link",
    "meaning": "环,连结物,链接,火把；连结,联合,挽住；连接起来",
    "example": "I learned the word \"link\" today.",
    "part": "n"
  },
  {
    "id": "pet-1508",
    "library": "pet",
    "word": "lay",
    "meaning": "放置,产,铺设,布置,提出,平息；下蛋,打赌；位置,层,隐藏处",
    "example": "I learned the word \"lay\" today.",
    "part": "v"
  },
  {
    "id": "pet-1509",
    "library": "pet",
    "word": "lion",
    "meaning": "狮子,狮子(星)座,国际狮子会会员",
    "example": "I learned the word \"lion\" today.",
    "part": "n"
  },
  {
    "id": "pet-1510",
    "library": "pet",
    "word": "lazy",
    "meaning": "a.懒惰的,怠惰的,缓慢的；懒散",
    "example": "I learned the word \"lazy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1511",
    "library": "pet",
    "word": "lip",
    "meaning": "唇,口缘,唇状构造；以嘴唇碰,轻轻说出；a.口头上的",
    "example": "I learned the word \"lip\" today.",
    "part": "n"
  },
  {
    "id": "pet-1512",
    "library": "pet",
    "word": "lead",
    "meaning": "铅,铅条,领导,超前量,领引,榜样,主角,导线；引导,带领,领导,指挥,致使,加铅于,用铅包；领导,带头,导致,用测深锤测深,被铅覆盖",
    "example": "I learned the word \"lead\" today.",
    "part": "v"
  },
  {
    "id": "pet-1513",
    "library": "pet",
    "word": "liquid",
    "meaning": "液体,流体,流音；a.液体的,透明的,明亮的,流动的,易变的",
    "example": "I learned the word \"liquid\" today.",
    "part": "n"
  },
  {
    "id": "pet-1514",
    "library": "pet",
    "word": "list",
    "meaning": "目录,名单,明细表,布条,条纹,列表,序列,数据清单；列出,列于表上,记入名单内,装布条；列于表上",
    "example": "I learned the word \"list\" today.",
    "part": "n"
  },
  {
    "id": "pet-1515",
    "library": "pet",
    "word": "listen",
    "meaning": "听,倾听,听从；听,倾听",
    "example": "I learned the word \"listen\" today.",
    "part": "v"
  },
  {
    "id": "pet-1516",
    "library": "pet",
    "word": "leader",
    "meaning": "领导者,社论,指挥,领袖,领唱者,前导字符；[计]前导字符",
    "example": "I learned the word \"leader\" today.",
    "part": "n"
  },
  {
    "id": "pet-1517",
    "library": "pet",
    "word": "literature",
    "meaning": "文学,文艺,著作；[经]广告,商品介绍等文学",
    "example": "I learned the word \"literature\" today.",
    "part": "n"
  },
  {
    "id": "pet-1518",
    "library": "pet",
    "word": "leaf",
    "meaning": "叶,树叶,花瓣,页；生叶,翻书页；在...上长叶,翻...的页",
    "example": "I learned the word \"leaf\" today.",
    "part": "n"
  },
  {
    "id": "pet-1519",
    "library": "pet",
    "word": "litre",
    "meaning": "升,公升；[计]升",
    "example": "I learned the word \"litre\" today.",
    "part": "n"
  },
  {
    "id": "pet-1520",
    "library": "pet",
    "word": "league",
    "meaning": "同盟,联盟,盟约；组联盟,(使)加盟",
    "example": "I learned the word \"league\" today.",
    "part": "n"
  },
  {
    "id": "pet-1521",
    "library": "pet",
    "word": "litter",
    "meaning": "垃圾,杂乱,轿,担架；乱丢,铺草,弄乱；产仔,乱丢垃圾",
    "example": "I learned the word \"litter\" today.",
    "part": "n"
  },
  {
    "id": "pet-1522",
    "library": "pet",
    "word": "learn",
    "meaning": "学习；认识到；得知",
    "example": "I learned the word \"learn\" today.",
    "part": "v"
  },
  {
    "id": "pet-1523",
    "library": "pet",
    "word": "little",
    "meaning": "一点点,少许,一会儿,短时间；a.小的,很少的,幼小的,琐碎的,短暂的,矮小的；很少,稍微,完全不",
    "example": "I learned the word \"little\" today.",
    "part": "adj, det & pron"
  },
  {
    "id": "pet-1524",
    "library": "pet",
    "word": "least",
    "meaning": "最少,最小,最小限度；a.最少的,最小的；最小,最少",
    "example": "I learned the word \"least\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1525",
    "library": "pet",
    "word": "live",
    "meaning": "a.活的,生动的,精力充沛的,实况转播的；活,生存,居住；过着,度过,经历",
    "example": "I learned the word \"live\" today.",
    "part": "v"
  },
  {
    "id": "pet-1526",
    "library": "pet",
    "word": "leather",
    "meaning": "皮革,皮制品,马镫的皮带；覆以皮革,鞭苔,抽打；a.皮革的,皮制的",
    "example": "I learned the word \"leather\" today.",
    "part": "n"
  },
  {
    "id": "pet-1527",
    "library": "pet",
    "word": "lively",
    "meaning": "a.活泼的,鲜明的,生动的",
    "example": "I learned the word \"lively\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1528",
    "library": "pet",
    "word": "leave",
    "meaning": "许可,告别,请假,休假；离开,剩下,遗忘,委托,丢弃；出发,离开,生叶",
    "example": "I learned the word \"leave\" today.",
    "part": "v"
  },
  {
    "id": "pet-1529",
    "library": "pet",
    "word": "living room",
    "meaning": "客厅,起居室",
    "example": "Try to use \"living room\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1530",
    "library": "pet",
    "word": "lecture",
    "meaning": "演讲,谴责,讲稿；演讲,训诫,说教；讲演",
    "example": "I learned the word \"lecture\" today.",
    "part": "n"
  },
  {
    "id": "pet-1531",
    "library": "pet",
    "word": "load",
    "meaning": "负荷,担子,重担,装载量,负载,工作量,加载；装载,装填,使担负；装货,上客,装料",
    "example": "I learned the word \"load\" today.",
    "part": "n"
  },
  {
    "id": "pet-1532",
    "library": "pet",
    "word": "left",
    "meaning": "a.左边的,左倾的,左侧的,左派的；在左面；左,左面,左派",
    "example": "I learned the word \"left\" today.",
    "part": "n, adj & adv"
  },
  {
    "id": "pet-1533",
    "library": "pet",
    "word": "loan",
    "meaning": "贷款,借出；借,供应货款,借给",
    "example": "I learned the word \"loan\" today.",
    "part": "n"
  },
  {
    "id": "pet-1534",
    "library": "pet",
    "word": "left-hand",
    "meaning": "a.左侧的,左手的；[机]左手方,左侧的",
    "example": "I learned the word \"left-hand\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1535",
    "library": "pet",
    "word": "local",
    "meaning": "a.地方性的,当地的,局部的,乡土的,本地的；当地居民,本地新闻,局部；[计]本地的",
    "example": "I learned the word \"local\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1536",
    "library": "pet",
    "word": "leg",
    "meaning": "腿,假腿,路程；走,跑",
    "example": "I learned the word \"leg\" today.",
    "part": "n"
  },
  {
    "id": "pet-1537",
    "library": "pet",
    "word": "locate",
    "meaning": "找出,设于,位于；定居",
    "example": "I learned the word \"locate\" today.",
    "part": "v"
  },
  {
    "id": "pet-1538",
    "library": "pet",
    "word": "leisure",
    "meaning": "空闲,闲暇,悠闲；a.空闲的,有闲的",
    "example": "I learned the word \"leisure\" today.",
    "part": "n"
  },
  {
    "id": "pet-1539",
    "library": "pet",
    "word": "lemon",
    "meaning": "柠檬,柠檬树,柠檬色；[医]柠檬",
    "example": "I learned the word \"lemon\" today.",
    "part": "n"
  },
  {
    "id": "pet-1540",
    "library": "pet",
    "word": "location",
    "meaning": "位置,场所,特定区域；[计]位置",
    "example": "I learned the word \"location\" today.",
    "part": "n"
  },
  {
    "id": "pet-1541",
    "library": "pet",
    "word": "lemonade",
    "meaning": "柠檬水；[医]柠檬水",
    "example": "I learned the word \"lemonade\" today.",
    "part": "n"
  },
  {
    "id": "pet-1542",
    "library": "pet",
    "word": "lock",
    "meaning": "锁,刹车,水闸,一缕头发；锁,锁上,拘禁,隐藏,(用锁等)拴住,刹住；锁住,(齿轮等)啮合,(船)过闸",
    "example": "I learned the word \"lock\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1543",
    "library": "pet",
    "word": "lend",
    "meaning": "借,贷款给,增添,提供,出租；贷款",
    "example": "I learned the word \"lend\" today.",
    "part": "v"
  },
  {
    "id": "pet-1544",
    "library": "pet",
    "word": "locker",
    "meaning": "抽屉,小柜,上锁人；[机]锁柜",
    "example": "I learned the word \"locker\" today.",
    "part": "n"
  },
  {
    "id": "pet-1545",
    "library": "pet",
    "word": "length",
    "meaning": "长度,长,期间,一段；[计]记录长度；块长",
    "example": "I learned the word \"length\" today.",
    "part": "n"
  },
  {
    "id": "pet-1546",
    "library": "pet",
    "word": "logo",
    "meaning": "连合活字,商标,徽标；[计]徽标",
    "example": "I learned the word \"logo\" today.",
    "part": "n"
  },
  {
    "id": "pet-1547",
    "library": "pet",
    "word": "less",
    "meaning": "较少,较小；a.少的,小的；较少,较小,较差",
    "example": "I learned the word \"less\" today.",
    "part": "adv, det & pron"
  },
  {
    "id": "pet-1548",
    "library": "pet",
    "word": "lonely",
    "meaning": "a.孤单的,孤寂的,荒凉的",
    "example": "I learned the word \"lonely\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1549",
    "library": "pet",
    "word": "lesson",
    "meaning": "课,课业,教训",
    "example": "I learned the word \"lesson\" today.",
    "part": "n"
  },
  {
    "id": "pet-1550",
    "library": "pet",
    "word": "long",
    "meaning": "a.长的,长久的,冗长的,做多头的；渴望,热望,极想；长久,始终",
    "example": "I learned the word \"long\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1551",
    "library": "pet",
    "word": "let",
    "meaning": "让,假设,出租,排放,妨碍；出租,被承包；出租屋,障碍",
    "example": "I learned the word \"let\" today.",
    "part": "v"
  },
  {
    "id": "pet-1552",
    "library": "pet",
    "word": "look",
    "meaning": "一看,神色,样子,面容；看,注意,朝着,显得；打量,看上去与...一样,以眼色(或脸色)显示,期待",
    "example": "I learned the word \"look\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1553",
    "library": "pet",
    "word": "look after",
    "meaning": "目送,照顾,关心",
    "example": "Try to use \"look after\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1554",
    "library": "pet",
    "word": "look at",
    "meaning": "看,考虑,着眼于",
    "example": "Try to use \"look at\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1555",
    "library": "pet",
    "word": "manager",
    "meaning": "经理,管理员,管理器；[计]管理器",
    "example": "I learned the word \"manager\" today.",
    "part": "n"
  },
  {
    "id": "pet-1556",
    "library": "pet",
    "word": "look for",
    "meaning": "寻找,期待",
    "example": "Try to use \"look for\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1557",
    "library": "pet",
    "word": "mango",
    "meaning": "芒果；[化]芒果Mangiferaindica",
    "example": "I learned the word \"mango\" today.",
    "part": "n"
  },
  {
    "id": "pet-1558",
    "library": "pet",
    "word": "look forward to",
    "meaning": "期望,盼望；瞩望；属望",
    "example": "Try to use \"look forward to\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1559",
    "library": "pet",
    "word": "many",
    "meaning": "多数,多数人；a.许多的；许多",
    "example": "I learned the word \"many\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-1560",
    "library": "pet",
    "word": "map",
    "meaning": "地图,天体图,映像；映射,绘制...地图,计划；[计]实用程序,映射,制造自动化协议",
    "example": "I learned the word \"map\" today.",
    "part": "n"
  },
  {
    "id": "pet-1561",
    "library": "pet",
    "word": "look like",
    "meaning": "看起来与（某人或某物）相像[相似]；很可能出现[引起]（某事、做某事）；伣",
    "example": "Try to use \"look like\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-1562",
    "library": "pet",
    "word": "mark",
    "meaning": "标志,分数,马克,痕迹,斑点,靶子,刻度,记号,符号,戳记,标准,起跑线；做标记于,留意,打分数,表明,标志,记录；作记号,记得分",
    "example": "I learned the word \"mark\" today.",
    "part": "n"
  },
  {
    "id": "pet-1563",
    "library": "pet",
    "word": "market",
    "meaning": "市场,交易,集市,推销地区,行情,市面,销路；在市场上交易,使上市,销售；在市场上买卖",
    "example": "I learned the word \"market\" today.",
    "part": "n"
  },
  {
    "id": "pet-1564",
    "library": "pet",
    "word": "look out",
    "meaning": "面朝,留神,找出",
    "example": "Try to use \"look out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1565",
    "library": "pet",
    "word": "marriage",
    "meaning": "婚姻,结婚,婚礼,合并；[医]婚姻,结婚",
    "example": "I learned the word \"marriage\" today.",
    "part": "n"
  },
  {
    "id": "pet-1566",
    "library": "pet",
    "word": "look up",
    "meaning": "向上看,尊敬,仰望,好转,查寻,拜访；[计]查阅",
    "example": "Try to use \"look up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1567",
    "library": "pet",
    "word": "married",
    "meaning": "a.已婚的,婚姻的；[法]结了婚的,有配偶的,夫妇的",
    "example": "I learned the word \"married\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1568",
    "library": "pet",
    "word": "marry",
    "meaning": "与...结婚,娶,嫁；结婚",
    "example": "I learned the word \"marry\" today.",
    "part": "v"
  },
  {
    "id": "pet-1569",
    "library": "pet",
    "word": "marvellous",
    "meaning": "a.奇异的,神奇的,奇迹般的,惊人的,不可思议的,绝妙的,妙极的",
    "example": "I learned the word \"marvellous\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1570",
    "library": "pet",
    "word": "match",
    "meaning": "比赛,火柴,对手；使相配,使比赛,与...竞争；结婚,相配",
    "example": "I learned the word \"match\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1571",
    "library": "pet",
    "word": "loose",
    "meaning": "发射,放任,放纵；a.宽松的,松的,宽的,不牢固的,散漫的,自由的,不精确的；释放,放枪,开船",
    "example": "I learned the word \"loose\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1572",
    "library": "pet",
    "word": "lorry",
    "meaning": "卡车,货车；[化]载重汽车",
    "example": "I learned the word \"lorry\" today.",
    "part": "n"
  },
  {
    "id": "pet-1573",
    "library": "pet",
    "word": "lose",
    "meaning": "遗失,损失,丢失,使失去,错过,浪费,迷失,使迷路,输去,使沉溺于；受损失,失败",
    "example": "I learned the word \"lose\" today.",
    "part": "v"
  },
  {
    "id": "pet-1574",
    "library": "pet",
    "word": "lost",
    "meaning": "a.失去的,遗失的,迷惑的；lose的过去式和过去分词",
    "example": "I learned the word \"lost\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1575",
    "library": "pet",
    "word": "a lot",
    "meaning": "大量,很,非常",
    "example": "Try to use \"a lot\" in a short sentence.",
    "part": "n",
    "aliases": [
      "lots",
      "lots/a lot"
    ]
  },
  {
    "id": "pet-1576",
    "library": "pet",
    "word": "mate",
    "meaning": "配偶,对手,助手,(象棋)将死；使配对,使一致,结伴,(象棋)将死；成配偶,紧密配合",
    "example": "I learned the word \"mate\" today.",
    "part": "n"
  },
  {
    "id": "pet-1577",
    "library": "pet",
    "word": "lottery",
    "meaning": "奖券,彩票,运气；[经]抽彩给奖法",
    "example": "I learned the word \"lottery\" today.",
    "part": "n"
  },
  {
    "id": "pet-1578",
    "library": "pet",
    "word": "material",
    "meaning": "材料,物资,素材,布料,资料；a.物质的,肉体的,重要的",
    "example": "I learned the word \"material\" today.",
    "part": "n"
  },
  {
    "id": "pet-1579",
    "library": "pet",
    "word": "loud",
    "meaning": "a.大声的,不断的,喧吵的；高声地,大声地",
    "example": "I learned the word \"loud\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1580",
    "library": "pet",
    "word": "mathematics",
    "meaning": "数学；[机]数学",
    "example": "I learned the word \"mathematics\" today.",
    "part": "n",
    "aliases": [
      "maths",
      "maths/mathematics"
    ]
  },
  {
    "id": "pet-1581",
    "library": "pet",
    "word": "loudly",
    "meaning": "高声地,大声地,吵闹地",
    "example": "I learned the word \"loudly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1582",
    "library": "pet",
    "word": "love",
    "meaning": "爱,恋爱,爱情,爱好,性爱；爱,爱好,爱慕；爱",
    "example": "I learned the word \"love\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1583",
    "library": "pet",
    "word": "matter",
    "meaning": "事件,物质,原因,素材,实体,重要；有关系",
    "example": "I learned the word \"matter\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1584",
    "library": "pet",
    "word": "lovely",
    "meaning": "a.可爱的,有趣的",
    "example": "I learned the word \"lovely\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1585",
    "library": "pet",
    "word": "low",
    "meaning": "低点,低价,低,牛叫声；a.低的,消沉的,低等的,浅的,卑贱的；低下地,谦卑地,低",
    "example": "I learned the word \"low\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1586",
    "library": "pet",
    "word": "luck",
    "meaning": "运气,幸运,好运,侥幸；靠好运成功",
    "example": "I learned the word \"luck\" today.",
    "part": "n"
  },
  {
    "id": "pet-1587",
    "library": "pet",
    "word": "maximum",
    "meaning": "极点,最大量,极大；a.最高的,最大的,最大极限的；[计]最大值",
    "example": "I learned the word \"maximum\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1588",
    "library": "pet",
    "word": "luckily",
    "meaning": "幸运地,幸亏,侥幸",
    "example": "I learned the word \"luckily\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1589",
    "library": "pet",
    "word": "may",
    "meaning": "五月；aux.愿能,可以,愿意",
    "example": "I learned the word \"may\" today.",
    "part": "mv"
  },
  {
    "id": "pet-1590",
    "library": "pet",
    "word": "lucky",
    "meaning": "a.幸运的,吉祥的,好运的,侥幸的",
    "example": "I learned the word \"lucky\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1591",
    "library": "pet",
    "word": "maybe",
    "meaning": "也许,大概；可能性",
    "example": "I learned the word \"maybe\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1592",
    "library": "pet",
    "word": "luggage",
    "meaning": "行李,皮箱",
    "example": "I learned the word \"luggage\" today.",
    "part": "n"
  },
  {
    "id": "pet-1593",
    "library": "pet",
    "word": "me",
    "meaning": "我",
    "example": "I learned the word \"me\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1594",
    "library": "pet",
    "word": "lunch",
    "meaning": "午餐",
    "example": "I learned the word \"lunch\" today.",
    "part": "n"
  },
  {
    "id": "pet-1595",
    "library": "pet",
    "word": "meal",
    "meaning": "一餐,膳食,粗粉；进餐",
    "example": "I learned the word \"meal\" today.",
    "part": "n"
  },
  {
    "id": "pet-1596",
    "library": "pet",
    "word": "lunchtime",
    "meaning": "午餐时间",
    "example": "I learned the word \"lunchtime\" today.",
    "part": "n"
  },
  {
    "id": "pet-1597",
    "library": "pet",
    "word": "mean",
    "meaning": "a.低劣的,卑贱的,简陋的,吝啬的,惭愧的,平均的,中间的,普通的；意谓,想要,意欲,预定；用意,有意义",
    "example": "I learned the word \"mean\" today.",
    "part": "v"
  },
  {
    "id": "pet-1598",
    "library": "pet",
    "word": "luxury",
    "meaning": "奢侈,豪华；a.奢侈的,豪华的",
    "example": "I learned the word \"luxury\" today.",
    "part": "n"
  },
  {
    "id": "pet-1599",
    "library": "pet",
    "word": "meaning",
    "meaning": "意义,含义,目的,意图；a.意味深长的",
    "example": "I learned the word \"meaning\" today.",
    "part": "n"
  },
  {
    "id": "pet-1600",
    "library": "pet",
    "word": "meanwhile",
    "meaning": "其时,其间；同时,于此时",
    "example": "I learned the word \"meanwhile\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1601",
    "library": "pet",
    "word": "measure",
    "meaning": "尺寸,量度器,量度标准,测量,量具,程度,范围,限度,分寸,措施,方法；测量,测度,估量,权衡,调节,拿(自己或自己的力量等)作较量；度量",
    "example": "I learned the word \"measure\" today.",
    "part": "v"
  },
  {
    "id": "pet-1602",
    "library": "pet",
    "word": "machine",
    "meaning": "机器,机械装置,机构,自动售货机,机械般工作的人；以机器制造",
    "example": "I learned the word \"machine\" today.",
    "part": "n"
  },
  {
    "id": "pet-1603",
    "library": "pet",
    "word": "meat",
    "meaning": "肉,餐,食物；[经]肉类",
    "example": "I learned the word \"meat\" today.",
    "part": "n"
  },
  {
    "id": "pet-1604",
    "library": "pet",
    "word": "mad",
    "meaning": "a.疯狂的,发疯的,生气的,愚蠢的,狂欢的；狂怒",
    "example": "I learned the word \"mad\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1605",
    "library": "pet",
    "word": "mechanic",
    "meaning": "机械工,技工；a.手工的",
    "example": "I learned the word \"mechanic\" today.",
    "part": "n"
  },
  {
    "id": "pet-1606",
    "library": "pet",
    "word": "Madam",
    "meaning": "女士,夫人",
    "example": "I learned the word \"Madam\" today.",
    "part": "n"
  },
  {
    "id": "pet-1607",
    "library": "pet",
    "word": "medicine",
    "meaning": "药,医学,内科；给...用药",
    "example": "I learned the word \"medicine\" today.",
    "part": "n"
  },
  {
    "id": "pet-1608",
    "library": "pet",
    "word": "from",
    "meaning": "从,来自,根据",
    "example": "I learned the word \"from\" today.",
    "part": "v",
    "aliases": [
      "made of",
      "made of/from/out of",
      "out of"
    ]
  },
  {
    "id": "pet-1609",
    "library": "pet",
    "word": "medium",
    "meaning": "媒体,方法,媒介；a.半生熟的,中间的；[计]媒体,中",
    "example": "I learned the word \"medium\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1610",
    "library": "pet",
    "word": "meet",
    "meaning": "会,集会；a.适宜的,合适的；遇见,引见,认识,满足,对付",
    "example": "I learned the word \"meet\" today.",
    "part": "v"
  },
  {
    "id": "pet-1611",
    "library": "pet",
    "word": "magazine",
    "meaning": "杂志,仓库,弹盒,胶卷盒；[计]卡片箱,介质装卸程序",
    "example": "I learned the word \"magazine\" today.",
    "part": "n"
  },
  {
    "id": "pet-1612",
    "library": "pet",
    "word": "meeting",
    "meaning": "会议,会面；[法]会议,会谈,集会",
    "example": "I learned the word \"meeting\" today.",
    "part": "n"
  },
  {
    "id": "pet-1613",
    "library": "pet",
    "word": "magic",
    "meaning": "魔术,魔法；a.魔术的,有魔力的,不可思议的",
    "example": "I learned the word \"magic\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1614",
    "library": "pet",
    "word": "melon",
    "meaning": "瓜,甜瓜,红利,赃物；[化]三聚二氰亚胺",
    "example": "I learned the word \"melon\" today.",
    "part": "n"
  },
  {
    "id": "pet-1615",
    "library": "pet",
    "word": "magnificent",
    "meaning": "a.华丽的,高尚的,宏伟的",
    "example": "I learned the word \"magnificent\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1616",
    "library": "pet",
    "word": "member",
    "meaning": "成员,会员；[医]│肢,肢体",
    "example": "I learned the word \"member\" today.",
    "part": "n"
  },
  {
    "id": "pet-1617",
    "library": "pet",
    "word": "mail",
    "meaning": "邮件,邮政,邮递,盔甲；邮寄,给...穿盔甲；[计]邮件",
    "example": "I learned the word \"mail\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1618",
    "library": "pet",
    "word": "membership",
    "meaning": "会员的资格,全体会员,会员数目；[法]会员资格,成员资格,会籍",
    "example": "I learned the word \"membership\" today.",
    "part": "n"
  },
  {
    "id": "pet-1619",
    "library": "pet",
    "word": "main",
    "meaning": "主要部分,干线,体力,力量,主群组；a.主要的,重要的,全力的；[计]主群组",
    "example": "I learned the word \"main\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1620",
    "library": "pet",
    "word": "memory",
    "meaning": "记忆,记忆力,回忆,纪念,存储；内存；[计]存储器,内存,查看内存实用程序",
    "example": "I learned the word \"memory\" today.",
    "part": "n"
  },
  {
    "id": "pet-1621",
    "library": "pet",
    "word": "main course",
    "meaning": "主帆,主要课程,主菜",
    "example": "Try to use \"main course\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1622",
    "library": "pet",
    "word": "make",
    "meaning": "制造,安排,创造,构成,使得,产生,造成,整理,布置,引起,到达,进行；开始,前进,增大,被制造,被处理；制造,构造,性情",
    "example": "I learned the word \"make\" today.",
    "part": "v"
  },
  {
    "id": "pet-1623",
    "library": "pet",
    "word": "make sure",
    "meaning": "确定",
    "example": "Try to use \"make sure\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-1624",
    "library": "pet",
    "word": "make-up",
    "meaning": "捏造",
    "example": "I learned the word \"make-up\" today.",
    "part": "n"
  },
  {
    "id": "pet-1625",
    "library": "pet",
    "word": "mend",
    "meaning": "改进,修补,好转；修改,改进,加快,修理；好转,改善",
    "example": "I learned the word \"mend\" today.",
    "part": "v"
  },
  {
    "id": "pet-1626",
    "library": "pet",
    "word": "male",
    "meaning": "男人,雄性动物；a.男性的,雄性的,有力的",
    "example": "I learned the word \"male\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1627",
    "library": "pet",
    "word": "mention",
    "meaning": "提到,言及,陈述；提到,提及",
    "example": "I learned the word \"mention\" today.",
    "part": "v"
  },
  {
    "id": "pet-1628",
    "library": "pet",
    "word": "mall",
    "meaning": "林荫路",
    "example": "I learned the word \"mall\" today.",
    "part": "n"
  },
  {
    "id": "pet-1629",
    "library": "pet",
    "word": "menu",
    "meaning": "菜单,(功能)选择单；[计]菜单",
    "example": "I learned the word \"menu\" today.",
    "part": "n"
  },
  {
    "id": "pet-1630",
    "library": "pet",
    "word": "mess",
    "meaning": "食堂,伙食,用膳,一份食品,混乱,乱七八糟,困境；将...弄糟,妨碍,使紊乱,使就餐；陷入困境,搞乱,用膳",
    "example": "I learned the word \"mess\" today.",
    "part": "n"
  },
  {
    "id": "pet-1631",
    "library": "pet",
    "word": "man",
    "meaning": "男人,人类,人；为...配备人手,操纵,使振奋；[计]城域网,手册",
    "example": "I learned the word \"man\" today.",
    "part": "n"
  },
  {
    "id": "pet-1632",
    "library": "pet",
    "word": "message",
    "meaning": "消息,通讯,讯息,教训,预言,广告词；通知；通报,报告,报信",
    "example": "I learned the word \"message\" today.",
    "part": "n"
  },
  {
    "id": "pet-1633",
    "library": "pet",
    "word": "manage",
    "meaning": "处理；管理,控制,维持,达成,经营,运用",
    "example": "I learned the word \"manage\" today.",
    "part": "v"
  },
  {
    "id": "pet-1634",
    "library": "pet",
    "word": "messy",
    "meaning": "a.散乱的,污秽的,麻烦的",
    "example": "I learned the word \"messy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1635",
    "library": "pet",
    "word": "metal",
    "meaning": "金属,金属制品,合金,本质,质料；a.金属制的；以金属覆盖",
    "example": "I learned the word \"metal\" today.",
    "part": "n"
  },
  {
    "id": "pet-1636",
    "library": "pet",
    "word": "method",
    "meaning": "方法,办法,条理,秩序；[医][方]法",
    "example": "I learned the word \"method\" today.",
    "part": "n"
  },
  {
    "id": "pet-1637",
    "library": "pet",
    "word": "motorway",
    "meaning": "高速公路",
    "example": "I learned the word \"motorway\" today.",
    "part": "n"
  },
  {
    "id": "pet-1638",
    "library": "pet",
    "word": "mountain",
    "meaning": "山,山脉,大堆",
    "example": "I learned the word \"mountain\" today.",
    "part": "n"
  },
  {
    "id": "pet-1639",
    "library": "pet",
    "word": "mouse",
    "meaning": "老鼠,胆小羞怯的人,鼠标；捕鼠,窥探；探出",
    "example": "I learned the word \"mouse\" today.",
    "part": "n"
  },
  {
    "id": "pet-1640",
    "library": "pet",
    "word": "metre",
    "meaning": "公尺,格律,韵律；[医]米,公尺",
    "example": "I learned the word \"metre\" today.",
    "part": "n"
  },
  {
    "id": "pet-1641",
    "library": "pet",
    "word": "microwave",
    "meaning": "微波；[计]微波",
    "example": "I learned the word \"microwave\" today.",
    "part": "n"
  },
  {
    "id": "pet-1642",
    "library": "pet",
    "word": "moustache",
    "meaning": "髭,小胡子,触须",
    "example": "I learned the word \"moustache\" today.",
    "part": "n"
  },
  {
    "id": "pet-1643",
    "library": "pet",
    "word": "mouth",
    "meaning": "嘴,口,口腔,口状物；装腔作势说话,做鬼脸；说出,做作地说",
    "example": "I learned the word \"mouth\" today.",
    "part": "n"
  },
  {
    "id": "pet-1644",
    "library": "pet",
    "word": "move",
    "meaning": "移动,迁居,步骤；移动,开动,感动,搬(家)；移动,离开,运行,迁移,摇动,搬家,交往,进展,脱手",
    "example": "I learned the word \"move\" today.",
    "part": "v"
  },
  {
    "id": "pet-1645",
    "library": "pet",
    "word": "midday",
    "meaning": "正午,中午；a.正午的",
    "example": "I learned the word \"midday\" today.",
    "part": "n"
  },
  {
    "id": "pet-1646",
    "library": "pet",
    "word": "movie",
    "meaning": "电影",
    "example": "I learned the word \"movie\" today.",
    "part": "n"
  },
  {
    "id": "pet-1647",
    "library": "pet",
    "word": "middle",
    "meaning": "中央,中间,腰部；a.中央的,中庸的,中间的",
    "example": "I learned the word \"middle\" today.",
    "part": "n"
  },
  {
    "id": "pet-1648",
    "library": "pet",
    "word": "middle-aged",
    "meaning": "a.中年的",
    "example": "I learned the word \"middle-aged\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1649",
    "library": "pet",
    "word": "movie star",
    "meaning": "电影明星",
    "example": "Try to use \"movie star\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1650",
    "library": "pet",
    "word": "midnight",
    "meaning": "午夜,子夜,半夜；a.午夜的,半夜的",
    "example": "I learned the word \"midnight\" today.",
    "part": "n"
  },
  {
    "id": "pet-1651",
    "library": "pet",
    "word": "might",
    "meaning": "力量,权力；aux.可能,也许",
    "example": "I learned the word \"might\" today.",
    "part": "mv"
  },
  {
    "id": "pet-1652",
    "library": "pet",
    "word": "movie theater",
    "meaning": "电影院",
    "example": "Try to use \"movie theater\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1653",
    "library": "pet",
    "word": "mild",
    "meaning": "a.温和的,温柔的,淡味的,适度的,轻微的,(肥皂等)软性的；[医]轻的,缓和的",
    "example": "I learned the word \"mild\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1654",
    "library": "pet",
    "word": "mile",
    "meaning": "英里,很大距离；[机]英里,哩",
    "example": "I learned the word \"mile\" today.",
    "part": "n"
  },
  {
    "id": "pet-1655",
    "library": "pet",
    "word": "milk",
    "meaning": "奶,乳状物；挤乳,榨取；产乳",
    "example": "I learned the word \"milk\" today.",
    "part": "n"
  },
  {
    "id": "pet-1656",
    "library": "pet",
    "word": "Mr",
    "meaning": "先生；[计]存储器回收程序,多重请求",
    "example": "I learned the word \"Mr\" today.",
    "part": "n"
  },
  {
    "id": "pet-1657",
    "library": "pet",
    "word": "Mrs",
    "meaning": "太太",
    "example": "I learned the word \"Mrs\" today.",
    "part": "n"
  },
  {
    "id": "pet-1658",
    "library": "pet",
    "word": "Ms",
    "meaning": "美国微软公司；[计]主存储器,制造系统,毫秒,微软公司",
    "example": "I learned the word \"Ms\" today.",
    "part": "n"
  },
  {
    "id": "pet-1659",
    "library": "pet",
    "word": "much",
    "meaning": "大量,许多,重要的事；a.很多的,重要的；多,甚,几乎",
    "example": "I learned the word \"much\" today.",
    "part": "adv, det & pron"
  },
  {
    "id": "pet-1660",
    "library": "pet",
    "word": "million",
    "meaning": "百万,无数；num.百万",
    "example": "I learned the word \"million\" today.",
    "part": "n"
  },
  {
    "id": "pet-1661",
    "library": "pet",
    "word": "mind",
    "meaning": "思想,愿望,智力,记忆,心理,情绪,理智,主意,心意；介意,注意,留心；注意,留意,专心于,照看,介意",
    "example": "I learned the word \"mind\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1662",
    "library": "pet",
    "word": "mug",
    "meaning": "有柄大杯,脸,苦读者；给...拍照,攻击,苦读；拼命用功",
    "example": "I learned the word \"mug\" today.",
    "part": "n"
  },
  {
    "id": "pet-1663",
    "library": "pet",
    "word": "mum",
    "meaning": "菊花,沉默；a.沉默的；演哑剧",
    "example": "I learned the word \"mum\" today.",
    "part": "n"
  },
  {
    "id": "pet-1664",
    "library": "pet",
    "word": "museum",
    "meaning": "博物馆",
    "example": "I learned the word \"museum\" today.",
    "part": "n"
  },
  {
    "id": "pet-1665",
    "library": "pet",
    "word": "mushroom",
    "meaning": "蘑菇形物,蘑菇,暴发户；迅速生长,迅速增加,采蘑菇；a.蘑菇形的,迅速生长的",
    "example": "I learned the word \"mushroom\" today.",
    "part": "n"
  },
  {
    "id": "pet-1666",
    "library": "pet",
    "word": "music",
    "meaning": "音乐,乐曲",
    "example": "I learned the word \"music\" today.",
    "part": "n"
  },
  {
    "id": "pet-1667",
    "library": "pet",
    "word": "musical",
    "meaning": "音乐片,音乐舞台剧；a.音乐的,声音美妙的,喜爱音乐的",
    "example": "I learned the word \"musical\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1668",
    "library": "pet",
    "word": "musician",
    "meaning": "音乐家,乐师,作曲家",
    "example": "I learned the word \"musician\" today.",
    "part": "n"
  },
  {
    "id": "pet-1669",
    "library": "pet",
    "word": "must",
    "meaning": "必须,未发酵葡萄汁,绝对必要的事物；aux.必须",
    "example": "I learned the word \"must\" today.",
    "part": "mv"
  },
  {
    "id": "pet-1670",
    "library": "pet",
    "word": "mine",
    "meaning": "矿,矿藏,地雷；挖掘,开采,在...布雷,破坏；开矿,埋设地雷",
    "example": "I learned the word \"mine\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1671",
    "library": "pet",
    "word": "multiply",
    "meaning": "繁殖,乘,增加；[计]乘",
    "example": "I learned the word \"multiply\" today.",
    "part": "v"
  },
  {
    "id": "pet-1672",
    "library": "pet",
    "word": "mineral water",
    "meaning": "na.矿泉水,矿质水",
    "example": "Try to use \"mineral water\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1673",
    "library": "pet",
    "word": "my",
    "meaning": "我的；[医]迈尔(热容单位)",
    "example": "I learned the word \"my\" today.",
    "part": "det"
  },
  {
    "id": "pet-1674",
    "library": "pet",
    "word": "minimum",
    "meaning": "a.最小的,最低的；最小值；[计]最小值",
    "example": "I learned the word \"minimum\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1675",
    "library": "pet",
    "word": "myself",
    "meaning": "我自己,我亲自,我独自",
    "example": "I learned the word \"myself\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1676",
    "library": "pet",
    "word": "minus",
    "meaning": "负号,不足；a.减的,负的,阴性的；减,缺",
    "example": "I learned the word \"minus\" today.",
    "part": "prep"
  },
  {
    "id": "pet-1677",
    "library": "pet",
    "word": "mystery",
    "meaning": "秘密,神秘,奥秘",
    "example": "I learned the word \"mystery\" today.",
    "part": "n"
  },
  {
    "id": "pet-1678",
    "library": "pet",
    "word": "minute",
    "meaning": "分,分钟,片刻,备忘录,笔记；记录,摘录,测定时间；a.微小的,详细的",
    "example": "I learned the word \"minute\" today.",
    "part": "n"
  },
  {
    "id": "pet-1679",
    "library": "pet",
    "word": "mirror",
    "meaning": "镜子,写真,典范；反映,映出",
    "example": "I learned the word \"mirror\" today.",
    "part": "n"
  },
  {
    "id": "pet-1680",
    "library": "pet",
    "word": "miserable",
    "meaning": "a.悲惨的；痛苦的；卑鄙的",
    "example": "I learned the word \"miserable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1681",
    "library": "pet",
    "word": "miss",
    "meaning": "失误,避免,失败,小姐；未得到,未达到,未听到,未觉察,逃脱,遗漏,错过,思念；失败,击不中",
    "example": "I learned the word \"miss\" today.",
    "part": "v"
  },
  {
    "id": "pet-1682",
    "library": "pet",
    "word": "name",
    "meaning": "名字,名称,姓名,名义,名誉,文件名；命名,称呼,任命,提名,列举；a.姓名的,据以取名的",
    "example": "I learned the word \"name\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1683",
    "library": "pet",
    "word": "missing",
    "meaning": "a.不见的,缺少的；[法]行踪不明的,失踪的,遗失的",
    "example": "I learned the word \"missing\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1684",
    "library": "pet",
    "word": "narrow",
    "meaning": "狭窄部分,隘路；a.狭窄的,仔细的,有限的,勉强的,狭隘的,手紧的；变窄",
    "example": "I learned the word \"narrow\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1685",
    "library": "pet",
    "word": "mistake",
    "meaning": "错误,误会；犯错,误认；误解,弄错",
    "example": "I learned the word \"mistake\" today.",
    "part": "n"
  },
  {
    "id": "pet-1686",
    "library": "pet",
    "word": "nasty",
    "meaning": "a.污秽的,下流的,险恶的",
    "example": "I learned the word \"nasty\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1687",
    "library": "pet",
    "word": "mix",
    "meaning": "混合物,混乱,糊涂；使混合,弄混,使结合,混淆；相混合,交往,参与",
    "example": "I learned the word \"mix\" today.",
    "part": "v & n"
  },
  {
    "id": "pet-1688",
    "library": "pet",
    "word": "national",
    "meaning": "a.国家的,国立的,全国性的,民族的；[经]全国性的,国家的,国民的",
    "example": "I learned the word \"national\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1689",
    "library": "pet",
    "word": "nationality",
    "meaning": "国籍,国家,民族性；[法]国家,民族,国民",
    "example": "I learned the word \"nationality\" today.",
    "part": "n"
  },
  {
    "id": "pet-1690",
    "library": "pet",
    "word": "model",
    "meaning": "模型,模范,模特儿；a.模范的,作模型用的；做模型,做模特儿",
    "example": "I learned the word \"model\" today.",
    "part": "n"
  },
  {
    "id": "pet-1691",
    "library": "pet",
    "word": "natural",
    "meaning": "白痴；a.自然的,自然界的,本能的,天然的,物质的,正常的,原始的,自然数的",
    "example": "I learned the word \"natural\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1692",
    "library": "pet",
    "word": "nature",
    "meaning": "自然,大自然,本性,性格,性质；[医]自然,大自然；本性,性能",
    "example": "I learned the word \"nature\" today.",
    "part": "n"
  },
  {
    "id": "pet-1693",
    "library": "pet",
    "word": "navy blue",
    "meaning": "深蓝色,藏青色；a.深蓝色的,藏青色的",
    "example": "Try to use \"navy blue\" in a short sentence.",
    "part": "adj"
  },
  {
    "id": "pet-1694",
    "library": "pet",
    "word": "modern",
    "meaning": "现代人,有思想的人；a.现代的,时髦的",
    "example": "I learned the word \"modern\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1695",
    "library": "pet",
    "word": "near",
    "meaning": "a.近的,近亲的,近似的；接近,亲近；靠近,近似于",
    "example": "I learned the word \"near\" today.",
    "part": "adv, prep & adj"
  },
  {
    "id": "pet-1696",
    "library": "pet",
    "word": "moment",
    "meaning": "片刻,瞬间,重要,阶段,力矩；[医]片刻,瞬间,时机,因素,矩",
    "example": "I learned the word \"moment\" today.",
    "part": "n"
  },
  {
    "id": "pet-1697",
    "library": "pet",
    "word": "nearby",
    "meaning": "a.附近的,近旁的；在附近,近旁地；在...附近",
    "example": "I learned the word \"nearby\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1698",
    "library": "pet",
    "word": "money",
    "meaning": "金钱,一笔款,财富,货币,金额；[经]货币,金钱,财产",
    "example": "I learned the word \"money\" today.",
    "part": "n"
  },
  {
    "id": "pet-1699",
    "library": "pet",
    "word": "nearly",
    "meaning": "几乎,密切地",
    "example": "I learned the word \"nearly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1700",
    "library": "pet",
    "word": "monkey",
    "meaning": "猴子,猿,打桩锤；淘气,胡闹；嘲弄",
    "example": "I learned the word \"monkey\" today.",
    "part": "n"
  },
  {
    "id": "pet-1701",
    "library": "pet",
    "word": "neat",
    "meaning": "a.整洁的,巧妙的,匀称的,简洁的；牛",
    "example": "I learned the word \"neat\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1702",
    "library": "pet",
    "word": "monster",
    "meaning": "怪物,恶人,巨物；[医]畸胎",
    "example": "I learned the word \"monster\" today.",
    "part": "n"
  },
  {
    "id": "pet-1703",
    "library": "pet",
    "word": "necessary",
    "meaning": "a.必要的；必然的；必需的",
    "example": "I learned the word \"necessary\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1704",
    "library": "pet",
    "word": "month",
    "meaning": "月；[经]月",
    "example": "I learned the word \"month\" today.",
    "part": "n"
  },
  {
    "id": "pet-1705",
    "library": "pet",
    "word": "neck",
    "meaning": "脖子,衣领,颈；拥抱,拥吻,收缩；割颈",
    "example": "I learned the word \"neck\" today.",
    "part": "n"
  },
  {
    "id": "pet-1706",
    "library": "pet",
    "word": "monument",
    "meaning": "纪念碑,纪念物,石碑",
    "example": "I learned the word \"monument\" today.",
    "part": "n"
  },
  {
    "id": "pet-1707",
    "library": "pet",
    "word": "necklace",
    "meaning": "项链",
    "example": "I learned the word \"necklace\" today.",
    "part": "n"
  },
  {
    "id": "pet-1708",
    "library": "pet",
    "word": "mood",
    "meaning": "心情,气氛,生气,基调；[医]心境",
    "example": "I learned the word \"mood\" today.",
    "part": "n"
  },
  {
    "id": "pet-1709",
    "library": "pet",
    "word": "need",
    "meaning": "需要,必须,缺乏；需要,必需；贫困,有必要",
    "example": "I learned the word \"need\" today.",
    "part": "v"
  },
  {
    "id": "pet-1710",
    "library": "pet",
    "word": "moon",
    "meaning": "月亮,月球,月光；闲荡；虚度",
    "example": "I learned the word \"moon\" today.",
    "part": "n"
  },
  {
    "id": "pet-1711",
    "library": "pet",
    "word": "negative",
    "meaning": "否定,否定语,负数,底片；a.否定的,消极的,负的,阴性的；负数,负值",
    "example": "I learned the word \"negative\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1712",
    "library": "pet",
    "word": "more",
    "meaning": "更多；a.多的,程度较大的,更大的；多,更多,进一步",
    "example": "I learned the word \"more\" today.",
    "part": "adv, det & pron"
  },
  {
    "id": "pet-1713",
    "library": "pet",
    "word": "neighbour",
    "meaning": "邻居,邻接的东西,邻国,邻座,邻人,世人；a.邻接的,邻近的；邻近,与...结邻,邻接",
    "example": "I learned the word \"neighbour\" today.",
    "part": "n"
  },
  {
    "id": "pet-1714",
    "library": "pet",
    "word": "morning",
    "meaning": "早晨,早上,初期",
    "example": "I learned the word \"morning\" today.",
    "part": "n"
  },
  {
    "id": "pet-1715",
    "library": "pet",
    "word": "neighbourhood",
    "meaning": "邻接,周围,附近一带,邻近,邻居关系,地区,街道,街坊,四邻；[计]邻域",
    "example": "I learned the word \"neighbourhood\" today.",
    "part": "n"
  },
  {
    "id": "pet-1716",
    "library": "pet",
    "word": "mosquito",
    "meaning": "蚊子；[医]蚊",
    "example": "I learned the word \"mosquito\" today.",
    "part": "n"
  },
  {
    "id": "pet-1717",
    "library": "pet",
    "word": "neither",
    "meaning": "皆不,两个都不；a.(两者)都不的；两者都不",
    "example": "I learned the word \"neither\" today.",
    "part": "adv, det, pron"
  },
  {
    "id": "pet-1718",
    "library": "pet",
    "word": "most",
    "meaning": "最多,最大；a.大多数的,几乎全部的,最多的；最,最多,极其",
    "example": "I learned the word \"most\" today.",
    "part": "adv, det & pron"
  },
  {
    "id": "pet-1719",
    "library": "pet",
    "word": "mother",
    "meaning": "母亲,修女院长；产生,照看,收养",
    "example": "I learned the word \"mother\" today.",
    "part": "n"
  },
  {
    "id": "pet-1720",
    "library": "pet",
    "word": "motorbike",
    "meaning": "机动脚踏两用车,摩托车",
    "example": "I learned the word \"motorbike\" today.",
    "part": "n"
  },
  {
    "id": "pet-1721",
    "library": "pet",
    "word": "motorcycle",
    "meaning": "摩托车；[机]机动车,机踏车,摩托车",
    "example": "I learned the word \"motorcycle\" today.",
    "part": "n"
  },
  {
    "id": "pet-1722",
    "library": "pet",
    "word": "motor-racing",
    "meaning": "赛车运动",
    "example": "I learned the word \"motor-racing\" today.",
    "part": "n"
  },
  {
    "id": "pet-1723",
    "library": "pet",
    "word": "nephew",
    "meaning": "侄子,外甥",
    "example": "I learned the word \"nephew\" today.",
    "part": "n"
  },
  {
    "id": "pet-1724",
    "library": "pet",
    "word": "nervous",
    "meaning": "a.神经紧张的,不安的,神经的；[医]神经的；神经质的,神经过敏的",
    "example": "I learned the word \"nervous\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1725",
    "library": "pet",
    "word": "object",
    "meaning": "物体,目标,目的,对象,宾语,客体；反对,抱反感；提出...来反对",
    "example": "I learned the word \"object\" today.",
    "part": "n"
  },
  {
    "id": "pet-1726",
    "library": "pet",
    "word": "net",
    "meaning": "网,网状物,罗网,净利,净价；a.净的,最终的；用网捕,撒网,净赚,得到",
    "example": "I learned the word \"net\" today.",
    "part": "n"
  },
  {
    "id": "pet-1727",
    "library": "pet",
    "word": "obvious",
    "meaning": "a.明显的,明白的,显然的,平淡无奇的",
    "example": "I learned the word \"obvious\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1728",
    "library": "pet",
    "word": "obviously",
    "meaning": "显而易见地,明显地",
    "example": "I learned the word \"obviously\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1729",
    "library": "pet",
    "word": "network",
    "meaning": "网络,广播网,网状物；[计]网络",
    "example": "I learned the word \"network\" today.",
    "part": "n"
  },
  {
    "id": "pet-1730",
    "library": "pet",
    "word": "never",
    "meaning": "从不,决不,不曾；[法]永不,决不,从来没有",
    "example": "I learned the word \"never\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1731",
    "library": "pet",
    "word": "occasion",
    "meaning": "场合,时机,机会,诱因,理由；惹起,引起",
    "example": "I learned the word \"occasion\" today.",
    "part": "n"
  },
  {
    "id": "pet-1732",
    "library": "pet",
    "word": "new",
    "meaning": "a.新的,陌生的,最近的,不熟悉的；[法]新发现的,新的,重新开始的",
    "example": "I learned the word \"new\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1733",
    "library": "pet",
    "word": "occasionally",
    "meaning": "有时候,偶而",
    "example": "I learned the word \"occasionally\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1734",
    "library": "pet",
    "word": "news",
    "meaning": "新闻,消息,报导；[法]新闻,消息,新闻报导",
    "example": "I learned the word \"news\" today.",
    "part": "n"
  },
  {
    "id": "pet-1735",
    "library": "pet",
    "word": "occupation",
    "meaning": "职业,占有,占有期,占领,占领军；[经]占有,占用,职业",
    "example": "I learned the word \"occupation\" today.",
    "part": "n"
  },
  {
    "id": "pet-1736",
    "library": "pet",
    "word": "newspaper",
    "meaning": "报纸",
    "example": "I learned the word \"newspaper\" today.",
    "part": "n"
  },
  {
    "id": "pet-1737",
    "library": "pet",
    "word": "ocean",
    "meaning": "海洋,广阔,许多,一大片；[法]海洋,海",
    "example": "I learned the word \"ocean\" today.",
    "part": "n"
  },
  {
    "id": "pet-1738",
    "library": "pet",
    "word": "o'clock",
    "meaning": "...点钟,钟头",
    "example": "I learned the word \"o'clock\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1739",
    "library": "pet",
    "word": "next",
    "meaning": "下一个；a.下一个的,其次的,贴近的；然后,下次,次于",
    "example": "I learned the word \"next\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1740",
    "library": "pet",
    "word": "next to",
    "meaning": "几乎",
    "example": "Try to use \"next to\" in a short sentence.",
    "part": "prep"
  },
  {
    "id": "pet-1741",
    "library": "pet",
    "word": "of",
    "meaning": "的,属于",
    "example": "I learned the word \"of\" today.",
    "part": "prep"
  },
  {
    "id": "pet-1742",
    "library": "pet",
    "word": "nice",
    "meaning": "a.美好的,和蔼的,正派的,做得好的,精密的,细微的,挑剔的,谨慎的",
    "example": "I learned the word \"nice\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1743",
    "library": "pet",
    "word": "of course",
    "meaning": "当然",
    "example": "Try to use \"of course\" in a short sentence.",
    "part": "adv"
  },
  {
    "id": "pet-1744",
    "library": "pet",
    "word": "niece",
    "meaning": "侄女,甥女",
    "example": "I learned the word \"niece\" today.",
    "part": "n"
  },
  {
    "id": "pet-1745",
    "library": "pet",
    "word": "off",
    "meaning": "a.关着的,不再生效的,处于...境况的,休假的,空闲的；走开,...掉,...下,休息,出发,隔断；离开,脱落,不在从事......,在...之外",
    "example": "I learned the word \"off\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-1746",
    "library": "pet",
    "word": "night",
    "meaning": "夜,夜晚,晚上,黑暗,夜晚的工作；[法]夜,黑夜,黑暗",
    "example": "I learned the word \"night\" today.",
    "part": "n"
  },
  {
    "id": "pet-1747",
    "library": "pet",
    "word": "nightclub",
    "meaning": "夜总会",
    "example": "I learned the word \"nightclub\" today.",
    "part": "n"
  },
  {
    "id": "pet-1748",
    "library": "pet",
    "word": "nightlife",
    "meaning": "夜生活",
    "example": "I learned the word \"nightlife\" today.",
    "part": "n"
  },
  {
    "id": "pet-1749",
    "library": "pet",
    "word": "nightmare",
    "meaning": "梦魇,恶梦,可怕的事物(或情景、人物)；[医]梦魇,恶梦",
    "example": "I learned the word \"nightmare\" today.",
    "part": "n"
  },
  {
    "id": "pet-1750",
    "library": "pet",
    "word": "offer",
    "meaning": "给予(物),出价,提议,意图,报价；提供,出价,奉献,试图,使出现,演出；出现,献祭,提议,求婚",
    "example": "I learned the word \"offer\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1751",
    "library": "pet",
    "word": "no",
    "meaning": "不,拒绝,否决票；a.没有,不是,绝非；不",
    "example": "I learned the word \"no\" today.",
    "part": "adv, det & pron"
  },
  {
    "id": "pet-1752",
    "library": "pet",
    "word": "office",
    "meaning": "办公室,部,公职,职责；[化]办公室",
    "example": "I learned the word \"office\" today.",
    "part": "n"
  },
  {
    "id": "pet-1753",
    "library": "pet",
    "word": "nobody",
    "meaning": "小人物,无名小卒；无人,没有人",
    "example": "I learned the word \"nobody\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1754",
    "library": "pet",
    "word": "officer",
    "meaning": "军官,主管,官员,公务员；指挥",
    "example": "I learned the word \"officer\" today.",
    "part": "n"
  },
  {
    "id": "pet-1755",
    "library": "pet",
    "word": "noise",
    "meaning": "噪音,杂音,响声,喧闹；谣传；喧闹",
    "example": "I learned the word \"noise\" today.",
    "part": "n"
  },
  {
    "id": "pet-1756",
    "library": "pet",
    "word": "often",
    "meaning": "时常,常常",
    "example": "I learned the word \"often\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1757",
    "library": "pet",
    "word": "noisy",
    "meaning": "a.嘈杂的,喧闹的；[机]噪声的,嘈杂的",
    "example": "I learned the word \"noisy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1758",
    "library": "pet",
    "word": "oh",
    "meaning": "interj.(表示惊讶、恐怖、赞叹)哦",
    "example": "I learned the word \"oh\" today.",
    "part": "exclam"
  },
  {
    "id": "pet-1759",
    "library": "pet",
    "word": "none",
    "meaning": "一点也不,毫不；没有人,无一物,并无一个；a.没有的",
    "example": "I learned the word \"none\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1760",
    "library": "pet",
    "word": "noon",
    "meaning": "正午,中午,全盛期",
    "example": "I learned the word \"noon\" today.",
    "part": "n"
  },
  {
    "id": "pet-1761",
    "library": "pet",
    "word": "oil",
    "meaning": "油,石油,油画颜料；涂油于,使融化成油状,加油于；加燃油,融化",
    "example": "I learned the word \"oil\" today.",
    "part": "n"
  },
  {
    "id": "pet-1762",
    "library": "pet",
    "word": "no one",
    "meaning": "没有人",
    "example": "Try to use \"no one\" in a short sentence.",
    "part": "pron"
  },
  {
    "id": "pet-1763",
    "library": "pet",
    "word": "OK",
    "meaning": "好的；可以",
    "example": "I learned the word \"OK\" today.",
    "part": "adj & exclam",
    "aliases": [
      "O.K.",
      "OK/O.K./okay",
      "okay"
    ]
  },
  {
    "id": "pet-1764",
    "library": "pet",
    "word": "normal",
    "meaning": "常态,标准,正常,普通；a.正常的,正规的,标准的,师范的,正态的；[计]标准,普通",
    "example": "I learned the word \"normal\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1765",
    "library": "pet",
    "word": "old",
    "meaning": "以前,往昔；a.老的,旧的,古老的,年长的,老练的",
    "example": "I learned the word \"old\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1766",
    "library": "pet",
    "word": "normally",
    "meaning": "正规地,合规则,正常地",
    "example": "I learned the word \"normally\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1767",
    "library": "pet",
    "word": "old-fashioned",
    "meaning": "a.旧式的,过时的,保守的,大人模样的",
    "example": "I learned the word \"old-fashioned\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1768",
    "library": "pet",
    "word": "north",
    "meaning": "北方,北；a.北的,北方的；向北方,在北方",
    "example": "I learned the word \"north\" today.",
    "part": "adj, adv & n"
  },
  {
    "id": "pet-1769",
    "library": "pet",
    "word": "olive",
    "meaning": "橄榄,橄榄树,橄榄色,橄榄枝；a.黄绿色的,黄褐色的,橄榄色的",
    "example": "I learned the word \"olive\" today.",
    "part": "n"
  },
  {
    "id": "pet-1770",
    "library": "pet",
    "word": "northeast",
    "meaning": "东北；a.东北的,向东北的,来自东北的；向东北,来自东北",
    "example": "I learned the word \"northeast\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1771",
    "library": "pet",
    "word": "omelette",
    "meaning": "煎蛋卷,炒蛋",
    "example": "I learned the word \"omelette\" today.",
    "part": "n"
  },
  {
    "id": "pet-1772",
    "library": "pet",
    "word": "northern",
    "meaning": "北方人；a.北方的,向北的,自北方来的",
    "example": "I learned the word \"northern\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1773",
    "library": "pet",
    "word": "on",
    "meaning": "在...之上；...上去；a.正起作用的",
    "example": "I learned the word \"on\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-1774",
    "library": "pet",
    "word": "northwest",
    "meaning": "西北,西北方；a.西北的,在西北的,来自西北的；向西北",
    "example": "I learned the word \"northwest\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1775",
    "library": "pet",
    "word": "on board",
    "meaning": "在船/车/飞机上,在公共交通车辆上；[经]已装船",
    "example": "Try to use \"on board\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1776",
    "library": "pet",
    "word": "nose",
    "meaning": "鼻子,突出部分,嗅觉；嗅到,探出,用鼻子触；闻,嗅,探听,告密",
    "example": "I learned the word \"nose\" today.",
    "part": "n"
  },
  {
    "id": "pet-1777",
    "library": "pet",
    "word": "on business",
    "meaning": "因公",
    "example": "Try to use \"on business\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1778",
    "library": "pet",
    "word": "not",
    "meaning": "不,非,未；[计]非",
    "example": "I learned the word \"not\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1779",
    "library": "pet",
    "word": "once",
    "meaning": "一次,曾经,一旦；一旦,一经；一次",
    "example": "I learned the word \"once\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1780",
    "library": "pet",
    "word": "note",
    "meaning": "笔记,记录,注解,票据,符号,显要,注重,便笺,照会；记录,注解,注意",
    "example": "I learned the word \"note\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1781",
    "library": "pet",
    "word": "one",
    "meaning": "一(个)；一,任何人；num.一,一个",
    "example": "I learned the word \"one\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-1782",
    "library": "pet",
    "word": "on fire",
    "meaning": "起火,非常激动",
    "example": "Try to use \"on fire\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1783",
    "library": "pet",
    "word": "notebook",
    "meaning": "笔记本,手册,期票簿",
    "example": "I learned the word \"notebook\" today.",
    "part": "n"
  },
  {
    "id": "pet-1784",
    "library": "pet",
    "word": "on foot",
    "meaning": "步行,在进行中",
    "example": "Try to use \"on foot\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1785",
    "library": "pet",
    "word": "notepaper",
    "meaning": "信纸,便条纸,笔记用纸",
    "example": "I learned the word \"notepaper\" today.",
    "part": "n"
  },
  {
    "id": "pet-1786",
    "library": "pet",
    "word": "on holiday",
    "meaning": "在度假",
    "example": "Try to use \"on holiday\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1787",
    "library": "pet",
    "word": "nothing",
    "meaning": "无,不关紧要之事,零；毫不,决不；interj.什么也没有,无",
    "example": "I learned the word \"nothing\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1788",
    "library": "pet",
    "word": "onion",
    "meaning": "洋葱；因洋葱使掉泪",
    "example": "I learned the word \"onion\" today.",
    "part": "n"
  },
  {
    "id": "pet-1789",
    "library": "pet",
    "word": "notice",
    "meaning": "注意,布告,通知,预告,短评；注意,通知,评论,提及,关注；注意",
    "example": "I learned the word \"notice\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1790",
    "library": "pet",
    "word": "online",
    "meaning": "[计]联机",
    "example": "I learned the word \"online\" today.",
    "part": "adv & adj"
  },
  {
    "id": "pet-1791",
    "library": "pet",
    "word": "only",
    "meaning": "a.唯一的,仅有的,最佳的；只有,仅仅,只能；但是,不过",
    "example": "I learned the word \"only\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1792",
    "library": "pet",
    "word": "noticeboard",
    "meaning": "布告牌",
    "example": "I learned the word \"noticeboard\" today.",
    "part": "n"
  },
  {
    "id": "pet-1793",
    "library": "pet",
    "word": "on purpose",
    "meaning": "故意；[法]故意地",
    "example": "Try to use \"on purpose\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1794",
    "library": "pet",
    "word": "novel",
    "meaning": "小说,长篇故事；a.新奇的,异常的",
    "example": "I learned the word \"novel\" today.",
    "part": "n"
  },
  {
    "id": "pet-1795",
    "library": "pet",
    "word": "on request",
    "meaning": "被请求时",
    "example": "Try to use \"on request\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1796",
    "library": "pet",
    "word": "now",
    "meaning": "现在,刚才,目前；现在；a.现在的",
    "example": "I learned the word \"now\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1797",
    "library": "pet",
    "word": "on sale",
    "meaning": "廉售的,拍卖的",
    "example": "Try to use \"on sale\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1798",
    "library": "pet",
    "word": "nowadays",
    "meaning": "现在,现时,当今；时下,现今",
    "example": "I learned the word \"nowadays\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1799",
    "library": "pet",
    "word": "on time",
    "meaning": "准时；[法]准时,按时,按时付款",
    "example": "Try to use \"on time\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1800",
    "library": "pet",
    "word": "nowhere",
    "meaning": "无处,到处都无",
    "example": "I learned the word \"nowhere\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1801",
    "library": "pet",
    "word": "onto",
    "meaning": "在...之上",
    "example": "I learned the word \"onto\" today.",
    "part": "prep"
  },
  {
    "id": "pet-1802",
    "library": "pet",
    "word": "number",
    "meaning": "数,数字,数目,号码；数,计算,共计；计算,报数",
    "example": "I learned the word \"number\" today.",
    "part": "n"
  },
  {
    "id": "pet-1803",
    "library": "pet",
    "word": "open",
    "meaning": "公开,户外,空旷；a.开着的,开放的,开阔的,营业着的,公开的,悬而未决的；打开,公开,开放",
    "example": "I learned the word \"open\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-1804",
    "library": "pet",
    "word": "opening hours",
    "meaning": "图书馆开放时间,书店营业时间",
    "example": "Try to use \"opening hours\" in a short sentence.",
    "part": "n pl"
  },
  {
    "id": "pet-1805",
    "library": "pet",
    "word": "opera",
    "meaning": "歌剧",
    "example": "I learned the word \"opera\" today.",
    "part": "n"
  },
  {
    "id": "pet-1806",
    "library": "pet",
    "word": "operate",
    "meaning": "操作,运转,动手术,活动",
    "example": "I learned the word \"operate\" today.",
    "part": "v"
  },
  {
    "id": "pet-1807",
    "library": "pet",
    "word": "nurse",
    "meaning": "护士,保姆,奶妈；看护,照顾,培养；喂奶,看护病人",
    "example": "I learned the word \"nurse\" today.",
    "part": "n"
  },
  {
    "id": "pet-1808",
    "library": "pet",
    "word": "operation",
    "meaning": "操作,动作,手术,运算,作用,业务；[计]运算",
    "example": "I learned the word \"operation\" today.",
    "part": "n"
  },
  {
    "id": "pet-1809",
    "library": "pet",
    "word": "opinion",
    "meaning": "意见,评价,主张；[经]意见",
    "example": "I learned the word \"opinion\" today.",
    "part": "n"
  },
  {
    "id": "pet-1810",
    "library": "pet",
    "word": "opportunity",
    "meaning": "机会,时机",
    "example": "I learned the word \"opportunity\" today.",
    "part": "n"
  },
  {
    "id": "pet-1811",
    "library": "pet",
    "word": "opposite",
    "meaning": "a.相对的,相反的,对面的；对面；对立面",
    "example": "I learned the word \"opposite\" today.",
    "part": "adj, n, prep & adv"
  },
  {
    "id": "pet-1812",
    "library": "pet",
    "word": "pale",
    "meaning": "栅栏,界线,范围；a.苍白的,暗淡的,无力的；变苍白,变暗,失色",
    "example": "I learned the word \"pale\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1813",
    "library": "pet",
    "word": "option",
    "meaning": "选择权,挑选,选项；[计]选项",
    "example": "I learned the word \"option\" today.",
    "part": "n"
  },
  {
    "id": "pet-1814",
    "library": "pet",
    "word": "or",
    "meaning": "或,或者；[计]或",
    "example": "I learned the word \"or\" today.",
    "part": "conj"
  },
  {
    "id": "pet-1815",
    "library": "pet",
    "word": "pan",
    "meaning": "平锅,浅盘,盆地,硬土层,拍摄全景；上下左右移动,摇镜头,淘洗,淘金",
    "example": "I learned the word \"pan\" today.",
    "part": "n"
  },
  {
    "id": "pet-1816",
    "library": "pet",
    "word": "orange",
    "meaning": "柑橘,桔子,橘色；a.橘色的",
    "example": "I learned the word \"orange\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1817",
    "library": "pet",
    "word": "pants",
    "meaning": "裤子,长裤,短衬裤,女式运动短裤",
    "example": "I learned the word \"pants\" today.",
    "part": "n"
  },
  {
    "id": "pet-1818",
    "library": "pet",
    "word": "orchestra",
    "meaning": "管弦乐队,乐队演奏处",
    "example": "I learned the word \"orchestra\" today.",
    "part": "n"
  },
  {
    "id": "pet-1819",
    "library": "pet",
    "word": "paper",
    "meaning": "纸,文件,文章,报纸,证券,证件；用纸糊,贴壁纸于,用纸包装；贴壁纸",
    "example": "I learned the word \"paper\" today.",
    "part": "n"
  },
  {
    "id": "pet-1820",
    "library": "pet",
    "word": "order",
    "meaning": "次序,规则,命令；命令,定货；整理,命令,定购",
    "example": "I learned the word \"order\" today.",
    "part": "conj, n & v"
  },
  {
    "id": "pet-1821",
    "library": "pet",
    "word": "paragraph",
    "meaning": "段落,短评；将...分段,分段落；写短讯",
    "example": "I learned the word \"paragraph\" today.",
    "part": "n"
  },
  {
    "id": "pet-1822",
    "library": "pet",
    "word": "parcel",
    "meaning": "包裹,部分,片；分配,打包；a.部分的",
    "example": "I learned the word \"parcel\" today.",
    "part": "n"
  },
  {
    "id": "pet-1823",
    "library": "pet",
    "word": "ordinary",
    "meaning": "a.平常的,普通的,平凡的；平常的人(或事)",
    "example": "I learned the word \"ordinary\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1824",
    "library": "pet",
    "word": "pardon",
    "meaning": "原谅,赦免；宽恕,原谅",
    "example": "I learned the word \"pardon\" today.",
    "part": "exclam"
  },
  {
    "id": "pet-1825",
    "library": "pet",
    "word": "organisation",
    "meaning": "组织,团体,体制,编制",
    "example": "I learned the word \"organisation\" today.",
    "part": "n"
  },
  {
    "id": "pet-1826",
    "library": "pet",
    "word": "organise",
    "meaning": "组织,有机化,给予生机",
    "example": "I learned the word \"organise\" today.",
    "part": "v"
  },
  {
    "id": "pet-1827",
    "library": "pet",
    "word": "parent",
    "meaning": "父母,父母亲,根源；[法]父亲,母亲,根源",
    "example": "I learned the word \"parent\" today.",
    "part": "n"
  },
  {
    "id": "pet-1828",
    "library": "pet",
    "word": "original",
    "meaning": "a.最初的,原始的,有创意的；原物,原作",
    "example": "I learned the word \"original\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1829",
    "library": "pet",
    "word": "park",
    "meaning": "公园,停车处；停车,置于；停车",
    "example": "I learned the word \"park\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1830",
    "library": "pet",
    "word": "other",
    "meaning": "a.其他的,另外的,从前的；其他的,他人,另外一个",
    "example": "I learned the word \"other\" today.",
    "part": "adj, pron & det"
  },
  {
    "id": "pet-1831",
    "library": "pet",
    "word": "otherwise",
    "meaning": "否则,不同地,别的方式",
    "example": "I learned the word \"otherwise\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1832",
    "library": "pet",
    "word": "ought",
    "meaning": "aux.应该,大概；责任",
    "example": "I learned the word \"ought\" today.",
    "part": "mv"
  },
  {
    "id": "pet-1833",
    "library": "pet",
    "word": "parking",
    "meaning": "停车；a.停车的",
    "example": "I learned the word \"parking\" today.",
    "part": "n"
  },
  {
    "id": "pet-1834",
    "library": "pet",
    "word": "our",
    "meaning": "我们的",
    "example": "I learned the word \"our\" today.",
    "part": "det"
  },
  {
    "id": "pet-1835",
    "library": "pet",
    "word": "parking lot",
    "meaning": "停车场",
    "example": "Try to use \"parking lot\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1836",
    "library": "pet",
    "word": "ours",
    "meaning": "我们的",
    "example": "I learned the word \"ours\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1837",
    "library": "pet",
    "word": "parrot",
    "meaning": "鹦鹉,应声虫；学舌,机械地模仿",
    "example": "I learned the word \"parrot\" today.",
    "part": "n"
  },
  {
    "id": "pet-1838",
    "library": "pet",
    "word": "ourselves",
    "meaning": "我们自己",
    "example": "I learned the word \"ourselves\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1839",
    "library": "pet",
    "word": "part",
    "meaning": "部分,局部,零件,要素,等分,职责,角色,部位；分开,分离,断绝,区别,分配；分开,断裂,分手",
    "example": "I learned the word \"part\" today.",
    "part": "n"
  },
  {
    "id": "pet-1840",
    "library": "pet",
    "word": "out",
    "meaning": "a.外面的,熄灭的,结束的；在外,熄灭,出现；出自,离去,向",
    "example": "I learned the word \"out\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1841",
    "library": "pet",
    "word": "outdoor",
    "meaning": "a.户外的,屋外的,露天的",
    "example": "I learned the word \"outdoor\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1842",
    "library": "pet",
    "word": "partly",
    "meaning": "部分地,在一定程度上",
    "example": "I learned the word \"partly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1843",
    "library": "pet",
    "word": "outdoors",
    "meaning": "户外,野外活动；在户外,在野外",
    "example": "I learned the word \"outdoors\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1844",
    "library": "pet",
    "word": "particular",
    "meaning": "一项(或条、点),个别项目,详细说明；a.特别的,独有的,挑剔的,详尽的",
    "example": "I learned the word \"particular\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1845",
    "library": "pet",
    "word": "out of",
    "meaning": "在...外,离开...,从...里面,出于,由于,因为,缺乏,没有,放弃,丧失",
    "example": "Try to use \"out of\" in a short sentence.",
    "part": "prep"
  },
  {
    "id": "pet-1846",
    "library": "pet",
    "word": "out of date",
    "meaning": "过时的,废弃的；[化]过期的；过时的",
    "example": "Try to use \"out of date\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1847",
    "library": "pet",
    "word": "out of order",
    "meaning": "次序颠倒,不整齐；[化]有故障的；故障的",
    "example": "Try to use \"out of order\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1848",
    "library": "pet",
    "word": "particularly",
    "meaning": "特别,格外,尤其,详细地,细致地",
    "example": "I learned the word \"particularly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1849",
    "library": "pet",
    "word": "out of work",
    "meaning": "失业,机器有毛病；[化]不能工作的；工作有妨碍的",
    "example": "Try to use \"out of work\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-1850",
    "library": "pet",
    "word": "partner",
    "meaning": "合伙人,股东,伙伴,伴侣；与...合伙,组成一对；做伙伴,当助手",
    "example": "I learned the word \"partner\" today.",
    "part": "n"
  },
  {
    "id": "pet-1851",
    "library": "pet",
    "word": "outside",
    "meaning": "外面,外表,外界；a.外面的,外表的,外界的；外面,外表,外界",
    "example": "I learned the word \"outside\" today.",
    "part": "adv, adj & prep"
  },
  {
    "id": "pet-1852",
    "library": "pet",
    "word": "part time",
    "meaning": "兼任，部分时间",
    "example": "Try to use \"part time\" in a short sentence.",
    "part": "adv"
  },
  {
    "id": "pet-1853",
    "library": "pet",
    "word": "oven",
    "meaning": "烤箱,灶,子宫；[化]烘箱",
    "example": "I learned the word \"oven\" today.",
    "part": "n"
  },
  {
    "id": "pet-1854",
    "library": "pet",
    "word": "part-time",
    "meaning": "a.兼任的,半工半读的,部分时间的；部分时间,兼任地",
    "example": "I learned the word \"part-time\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1855",
    "library": "pet",
    "word": "over",
    "meaning": "结束,越过,从头到尾；在...之上,遍于...之上,越过；a.上面的",
    "example": "I learned the word \"over\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-1856",
    "library": "pet",
    "word": "party",
    "meaning": "宴会,党,政党,团体,当事人,聚会；举办聚会",
    "example": "I learned the word \"party\" today.",
    "part": "n"
  },
  {
    "id": "pet-1857",
    "library": "pet",
    "word": "pass",
    "meaning": "经过,要隘,途径,通行,护照,及格；经过,越过,通过,批准,度过,传递,忽略；经过,变化,流通,及格,宣判,终止,消逝,被忽略,不叫牌,传递",
    "example": "I learned the word \"pass\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1858",
    "library": "pet",
    "word": "of the school",
    "meaning": "的,属于",
    "example": "Try to use \"of the school\" in a short sentence.",
    "part": "prep"
  },
  {
    "id": "pet-1859",
    "library": "pet",
    "word": "overnight",
    "meaning": "前一天晚上,一夜的逗留；a.通宵的,晚上的,前夜的；在前一夜,整夜,昨晚一晚上",
    "example": "I learned the word \"overnight\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1860",
    "library": "pet",
    "word": "owe",
    "meaning": "亏欠,负...债,归功于,怀有,应给予,感恩；欠钱",
    "example": "I learned the word \"owe\" today.",
    "part": "v"
  },
  {
    "id": "pet-1861",
    "library": "pet",
    "word": "passenger",
    "meaning": "乘客,旅客；[经]乘客,旅客",
    "example": "I learned the word \"passenger\" today.",
    "part": "n"
  },
  {
    "id": "pet-1862",
    "library": "pet",
    "word": "own",
    "meaning": "自己的；a.自己的,嫡亲的,同胞的；拥有,支配,自认,承认,顺从于",
    "example": "I learned the word \"own\" today.",
    "part": "adj, pron & v"
  },
  {
    "id": "pet-1863",
    "library": "pet",
    "word": "passport",
    "meaning": "护照,手段,通行证；[法]通行证,护照",
    "example": "I learned the word \"passport\" today.",
    "part": "n"
  },
  {
    "id": "pet-1864",
    "library": "pet",
    "word": "password",
    "meaning": "密码,口令,通行手段；[计]口令",
    "example": "I learned the word \"password\" today.",
    "part": "n"
  },
  {
    "id": "pet-1865",
    "library": "pet",
    "word": "past",
    "meaning": "过去,昔时,往事,早年经历,过去时；a.过去的,结束的,卸任的,过去时的；越过,晚于,超越,超出...的可能性(能力、范围等)",
    "example": "I learned the word \"past\" today.",
    "part": "adj, n & prep"
  },
  {
    "id": "pet-1866",
    "library": "pet",
    "word": "owner",
    "meaning": "拥有者,物主,所有人；[经]所有者,物主,业主",
    "example": "I learned the word \"owner\" today.",
    "part": "n"
  },
  {
    "id": "pet-1867",
    "library": "pet",
    "word": "pasta",
    "meaning": "意大利面食；[医]糊剂,泥膏剂",
    "example": "I learned the word \"pasta\" today.",
    "part": "n"
  },
  {
    "id": "pet-1868",
    "library": "pet",
    "word": "path",
    "meaning": "路径,小路,道路,途径,路线,轨道；[计]路径；DOS内部命令:设定DOS读取程序的路径",
    "example": "I learned the word \"path\" today.",
    "part": "n"
  },
  {
    "id": "pet-1869",
    "library": "pet",
    "word": "patient",
    "meaning": "病人,承受者；a.忍耐的,容忍的,有耐性的,坚忍的",
    "example": "I learned the word \"patient\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1870",
    "library": "pet",
    "word": "pack",
    "meaning": "包裹,一伙,一副,背包,包装；包装,捆扎,塞满,压紧,挑选；包装货物,挤,群集,被包装",
    "example": "I learned the word \"pack\" today.",
    "part": "v"
  },
  {
    "id": "pet-1871",
    "library": "pet",
    "word": "a hospital patient",
    "meaning": "第一个字母A；一个；第一的\\r",
    "example": "Try to use \"a hospital patient\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1872",
    "library": "pet",
    "word": "packet",
    "meaning": "小包,一批信件,大量,信息包；打包,装进小包；[计]分组,分组报文,数据分组",
    "example": "I learned the word \"packet\" today.",
    "part": "n"
  },
  {
    "id": "pet-1873",
    "library": "pet",
    "word": "pattern",
    "meaning": "模范,典型,式样,样品,图案,格调,模式；模仿,仿造,以图案装饰；形成图案",
    "example": "I learned the word \"pattern\" today.",
    "part": "n"
  },
  {
    "id": "pet-1874",
    "library": "pet",
    "word": "pause",
    "meaning": "暂停,中止,停顿,间歇,踌躇,休止符；暂停,中止,停顿,踌躇；[计]DOS内部命令:暂时停止批处理文件的执行",
    "example": "I learned the word \"pause\" today.",
    "part": "v"
  },
  {
    "id": "pet-1875",
    "library": "pet",
    "word": "pain",
    "meaning": "痛苦,疼痛,辛苦；使痛苦,痛苦；作痛,疼",
    "example": "I learned the word \"pain\" today.",
    "part": "n"
  },
  {
    "id": "pet-1876",
    "library": "pet",
    "word": "pavement",
    "meaning": "路面,人行道,铺面路,铺路材料",
    "example": "I learned the word \"pavement\" today.",
    "part": "n"
  },
  {
    "id": "pet-1877",
    "library": "pet",
    "word": "painful",
    "meaning": "a.痛苦的,困难的,令人烦恼的；[医]疼痛的",
    "example": "I learned the word \"painful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1878",
    "library": "pet",
    "word": "pay",
    "meaning": "薪资,付款,补偿；支付,付清,补偿,偿还,对...有利,为...涂防水物；付款,付出代价,偿还,得到报应,获得好处",
    "example": "I learned the word \"pay\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1879",
    "library": "pet",
    "word": "paint",
    "meaning": "油漆,颜料,绘画作品,涂漆；油漆,绘,画,描绘,装饰,点缀；绘画,涂漆",
    "example": "I learned the word \"paint\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1880",
    "library": "pet",
    "word": "painter",
    "meaning": "画家,油漆匠；[机]油漆匠,喷漆匠",
    "example": "I learned the word \"painter\" today.",
    "part": "n"
  },
  {
    "id": "pet-1881",
    "library": "pet",
    "word": "pea",
    "meaning": "豌豆,似豌豆的东西",
    "example": "I learned the word \"pea\" today.",
    "part": "n"
  },
  {
    "id": "pet-1882",
    "library": "pet",
    "word": "painting",
    "meaning": "画,绘画,油漆；[化]涂漆",
    "example": "I learned the word \"painting\" today.",
    "part": "n"
  },
  {
    "id": "pet-1883",
    "library": "pet",
    "word": "peace",
    "meaning": "和平,和约,治安,和睦,安宁,静寂；安静下来,不作声",
    "example": "I learned the word \"peace\" today.",
    "part": "n"
  },
  {
    "id": "pet-1884",
    "library": "pet",
    "word": "pair",
    "meaning": "一双,一对,一副；(使)成对",
    "example": "I learned the word \"pair\" today.",
    "part": "n"
  },
  {
    "id": "pet-1885",
    "library": "pet",
    "word": "peaceful",
    "meaning": "a.平静的,和平的,和平时期的,爱好和平的,喜爱安静的；[法]和平的,爱好和平的,和平时期的",
    "example": "I learned the word \"peaceful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1886",
    "library": "pet",
    "word": "palace",
    "meaning": "宫,宫殿,华丽大厦",
    "example": "I learned the word \"palace\" today.",
    "part": "n"
  },
  {
    "id": "pet-1887",
    "library": "pet",
    "word": "peach",
    "meaning": "桃子,桃树,桃色,美人儿,极好的事物；告发；告密,检举",
    "example": "I learned the word \"peach\" today.",
    "part": "n"
  },
  {
    "id": "pet-1888",
    "library": "pet",
    "word": "peak",
    "meaning": "山峰,巅,山顶,顶点,尖峰,帽舌；a.最高的,最大值的；到达最高点,消瘦,变憔悴,逐渐缩小",
    "example": "I learned the word \"peak\" today.",
    "part": "n"
  },
  {
    "id": "pet-1889",
    "library": "pet",
    "word": "peanut",
    "meaning": "花生,小人物,极小的数额；a.渺小的,微不足道的",
    "example": "I learned the word \"peanut\" today.",
    "part": "n"
  },
  {
    "id": "pet-1890",
    "library": "pet",
    "word": "pear",
    "meaning": "梨子,梨树,梨木；[机]梨木",
    "example": "I learned the word \"pear\" today.",
    "part": "n"
  },
  {
    "id": "pet-1891",
    "library": "pet",
    "word": "pedestrian",
    "meaning": "行人,步行者；a.人行的,徒步的,呆板的,通俗的,平淡无奇的",
    "example": "I learned the word \"pedestrian\" today.",
    "part": "n"
  },
  {
    "id": "pet-1892",
    "library": "pet",
    "word": "pig",
    "meaning": "猪,猪肉,贪婪的人,猪一样的人；生小猪,象猪般地生活",
    "example": "I learned the word \"pig\" today.",
    "part": "n"
  },
  {
    "id": "pet-1893",
    "library": "pet",
    "word": "peel",
    "meaning": "皮,外壳；削...皮,剥去...的壳；蜕皮,剥落,脱皮,脱去衣服",
    "example": "I learned the word \"peel\" today.",
    "part": "v"
  },
  {
    "id": "pet-1894",
    "library": "pet",
    "word": "pile",
    "meaning": "堆,大堆,大厦,建筑群,电池,大量,桥桩,软毛,痔疮；堆起,堆积,积累,挤,猛烈攻击；堆于,累积,堆叠,打桩于,用桩支撑",
    "example": "I learned the word \"pile\" today.",
    "part": "n"
  },
  {
    "id": "pet-1895",
    "library": "pet",
    "word": "pen",
    "meaning": "钢笔,笔,笔调,笔杆子,作家,围栏,栅栏,禽畜；写,关入栏中,囚禁；动笔,写作",
    "example": "I learned the word \"pen\" today.",
    "part": "n"
  },
  {
    "id": "pet-1896",
    "library": "pet",
    "word": "pill",
    "meaning": "药丸,弹丸,屈辱,胡说；做成药丸,形成丸状,服药丸,挫败,抢劫",
    "example": "I learned the word \"pill\" today.",
    "part": "n"
  },
  {
    "id": "pet-1897",
    "library": "pet",
    "word": "pence",
    "meaning": "pl.(非正式)copper便士,(美)分,分币",
    "example": "I learned the word \"pence\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-1898",
    "library": "pet",
    "word": "pillow",
    "meaning": "枕头,靠垫,枕状岩；作...的枕头,垫,枕于；靠在枕上",
    "example": "I learned the word \"pillow\" today.",
    "part": "n"
  },
  {
    "id": "pet-1899",
    "library": "pet",
    "word": "pencil",
    "meaning": "铅笔,色笔,眉笔,画笔,光线束；用铅笔写或涂,草拟",
    "example": "I learned the word \"pencil\" today.",
    "part": "n"
  },
  {
    "id": "pet-1900",
    "library": "pet",
    "word": "pilot",
    "meaning": "飞行员,领航员,航船者,导向器,驾驶仪,向导,领导人；领航,驾驶,引导,试用；a.引导的,控制的,试点的",
    "example": "I learned the word \"pilot\" today.",
    "part": "n"
  },
  {
    "id": "pet-1901",
    "library": "pet",
    "word": "pencil case",
    "meaning": "铅笔盒",
    "example": "Try to use \"pencil case\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1902",
    "library": "pet",
    "word": "pin",
    "meaning": "大头针,针,别针,栓,销子,图钉,插头,管脚,品(液量单位)；将...用针别住,钉住,压住,牵制,使不能动,归罪于；a.针的,销子的,闩的",
    "example": "I learned the word \"pin\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1903",
    "library": "pet",
    "word": "penfriend",
    "meaning": "<英>笔友",
    "example": "I learned the word \"penfriend\" today.",
    "part": "n"
  },
  {
    "id": "pet-1904",
    "library": "pet",
    "word": "pineapple",
    "meaning": "凤梨,菠萝,失业救济金；[医]凤梨,波萝",
    "example": "I learned the word \"pineapple\" today.",
    "part": "n"
  },
  {
    "id": "pet-1905",
    "library": "pet",
    "word": "penguin",
    "meaning": "企鹅,空军地勤人员",
    "example": "I learned the word \"penguin\" today.",
    "part": "n"
  },
  {
    "id": "pet-1906",
    "library": "pet",
    "word": "pink",
    "meaning": "粉红色,石竹花,化身,典范,头面人物,极度；a.粉红的,石竹科的,比较激进的,脸色发红的,精致的,有点下流的；刺,扎,刺痛,射伤,使面红耳赤,使变粉红色",
    "example": "I learned the word \"pink\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1907",
    "library": "pet",
    "word": "penny",
    "meaning": "便士,一分,小钱,点滴；[经]便士",
    "example": "I learned the word \"penny\" today.",
    "part": "n"
  },
  {
    "id": "pet-1908",
    "library": "pet",
    "word": "pipe",
    "meaning": "管,导管,输送管,管状器官,声带,尖细的声音,烟斗,笛,管乐器；以管输送,吹哨子,吹奏,尖声唱；吹笛,尖叫,吹长哨发令",
    "example": "I learned the word \"pipe\" today.",
    "part": "n"
  },
  {
    "id": "pet-1909",
    "library": "pet",
    "word": "people",
    "meaning": "人,人民,民族,平民；使住满人,居住于",
    "example": "I learned the word \"people\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-1910",
    "library": "pet",
    "word": "pirate",
    "meaning": "海盗,盗印者,侵犯专利权者；盗印,掠夺,翻印；做海盗,从事劫掠",
    "example": "I learned the word \"pirate\" today.",
    "part": "n"
  },
  {
    "id": "pet-1911",
    "library": "pet",
    "word": "pepper",
    "meaning": "胡椒粉,胡椒,辣椒；[化]胡椒；辣椒",
    "example": "I learned the word \"pepper\" today.",
    "part": "n"
  },
  {
    "id": "pet-1912",
    "library": "pet",
    "word": "pitch",
    "meaning": "程度,坡度,顶点,前倾,倾斜,投掷,音高,螺距,节距,摊位,树脂,沥青；投,掷,向前倾跌,扎营,竭力推销,为...定调,定位于,用沥青涂；搭帐篷,投掷,向前跌,猛然摔倒,坠落,倾斜",
    "example": "I learned the word \"pitch\" today.",
    "part": "n"
  },
  {
    "id": "pet-1913",
    "library": "pet",
    "word": "pity",
    "meaning": "遗憾,同情,怜悯,憾事,可惜；同情,怜悯；觉得可怜,有同情心",
    "example": "I learned the word \"pity\" today.",
    "part": "n"
  },
  {
    "id": "pet-1914",
    "library": "pet",
    "word": "per",
    "meaning": "每一,通过,经,按照；[经]每,按照",
    "example": "I learned the word \"per\" today.",
    "part": "prep"
  },
  {
    "id": "pet-1915",
    "library": "pet",
    "word": "percent",
    "meaning": "百分比,百分数,部分；[机]百分率",
    "example": "I learned the word \"percent\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1916",
    "library": "pet",
    "word": "perfect",
    "meaning": "完成时；a.完美的,完好的,理想的,熟练的,精确的,完成式的；使完美,修改,使精通,改善,使熟练",
    "example": "I learned the word \"perfect\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1917",
    "library": "pet",
    "word": "pizza",
    "meaning": "比萨饼",
    "example": "I learned the word \"pizza\" today.",
    "part": "n"
  },
  {
    "id": "pet-1918",
    "library": "pet",
    "word": "perfectly",
    "meaning": "完全地,无瑕疵地,完整地",
    "example": "I learned the word \"perfectly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1919",
    "library": "pet",
    "word": "place",
    "meaning": "地方,地点,位置,住所,座位,地位,处境,特权,空间,余地,职务,位；放置,寄予,认出,评定,任命；名次列前",
    "example": "I learned the word \"place\" today.",
    "part": "n"
  },
  {
    "id": "pet-1920",
    "library": "pet",
    "word": "perform",
    "meaning": "进行,履行,完成,执行,表演；行动,工作,执行,演出",
    "example": "I learned the word \"perform\" today.",
    "part": "v"
  },
  {
    "id": "pet-1921",
    "library": "pet",
    "word": "performance",
    "meaning": "施行,工作情况,成绩,行为,表现,演出；[电]绩效,性能",
    "example": "I learned the word \"performance\" today.",
    "part": "n"
  },
  {
    "id": "pet-1922",
    "library": "pet",
    "word": "performer",
    "meaning": "表演者,执行者,完成者；[法]执行者,履行者,实行者",
    "example": "I learned the word \"performer\" today.",
    "part": "n"
  },
  {
    "id": "pet-1923",
    "library": "pet",
    "word": "perfume",
    "meaning": "香水,香气,(悦人的)气氛,美名；洒香水于,薰香,使充满香气",
    "example": "I learned the word \"perfume\" today.",
    "part": "n"
  },
  {
    "id": "pet-1924",
    "library": "pet",
    "word": "perhaps",
    "meaning": "也许,大概",
    "example": "I learned the word \"perhaps\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1925",
    "library": "pet",
    "word": "plain",
    "meaning": "平原,草原,朴实无华的东西,无格式；a.简单的,明白的,平常的,不好看的,朴素的,清晰的,普通的,平坦的,十足的；清楚地,显然地",
    "example": "I learned the word \"plain\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1926",
    "library": "pet",
    "word": "period",
    "meaning": "时期,节段,节,句点,学时,周期；a.当时特有的,过去某段时期的；interj.就是这话,就是这么回事",
    "example": "I learned the word \"period\" today.",
    "part": "n"
  },
  {
    "id": "pet-1927",
    "library": "pet",
    "word": "permanent",
    "meaning": "a.永久的,不变的,固定的,持久的；烫发；[计]永久的",
    "example": "I learned the word \"permanent\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1928",
    "library": "pet",
    "word": "permission",
    "meaning": "许可,允许；[计]许可,认可",
    "example": "I learned the word \"permission\" today.",
    "part": "n"
  },
  {
    "id": "pet-1929",
    "library": "pet",
    "word": "plan",
    "meaning": "计划,方案,策略,方法,进度表,程序表,平面图,设计图,轮廓,示意图；计划,设计,意欲；订计划",
    "example": "I learned the word \"plan\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1930",
    "library": "pet",
    "word": "permit",
    "meaning": "许可证,许可,执照,通行证；允许,容许,可能,使放手做；容许,给以机会,提供可能",
    "example": "I learned the word \"permit\" today.",
    "part": "v"
  },
  {
    "id": "pet-1931",
    "library": "pet",
    "word": "permitted",
    "meaning": "允许(permit的过去式和过去分词)；许可；许用",
    "example": "I learned the word \"permitted\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1932",
    "library": "pet",
    "word": "plane",
    "meaning": "平面,扁平物,机翼,飞机,水准,地位；a.平的,平面的；将...刨平,刨平,掠过水面",
    "example": "I learned the word \"plane\" today.",
    "part": "n"
  },
  {
    "id": "pet-1933",
    "library": "pet",
    "word": "person",
    "meaning": "人,人身,人称；[法]人,法人,人身",
    "example": "I learned the word \"person\" today.",
    "part": "n"
  },
  {
    "id": "pet-1934",
    "library": "pet",
    "word": "planet",
    "meaning": "行星,命运星辰,杰出的人,重大影响的事",
    "example": "I learned the word \"planet\" today.",
    "part": "n"
  },
  {
    "id": "pet-1935",
    "library": "pet",
    "word": "personal",
    "meaning": "a.私人的,涉及隐私的,有人性的,人称的,亲自的,身体的；[医]人的；个人的,自身的",
    "example": "I learned the word \"personal\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1936",
    "library": "pet",
    "word": "plant",
    "meaning": "植物,作物,工厂,树枝,生长,设施,成套设备；种植,栽培,播种,培养,安置,殖民于,使位于；种植",
    "example": "I learned the word \"plant\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1937",
    "library": "pet",
    "word": "personally",
    "meaning": "亲自地,个别地,当面,就本人而言,针对个人地",
    "example": "I learned the word \"personally\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1938",
    "library": "pet",
    "word": "plastic",
    "meaning": "塑料,可塑体,可塑性物质；a.塑料的,塑造的,有可塑性的,造型的,易受影响的,有创造力的",
    "example": "I learned the word \"plastic\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-1939",
    "library": "pet",
    "word": "persuade",
    "meaning": "劝,使相信,恳求,敦促,说服；劝服,被说服",
    "example": "I learned the word \"persuade\" today.",
    "part": "v"
  },
  {
    "id": "pet-1940",
    "library": "pet",
    "word": "plate",
    "meaning": "碟,盘子,盆中物,金属板,图版,金银餐具,印版,金属牌(照)；镀金,电镀,用金属板固定,给...装钢板,为...制印版",
    "example": "I learned the word \"plate\" today.",
    "part": "n"
  },
  {
    "id": "pet-1941",
    "library": "pet",
    "word": "pet",
    "meaning": "宠物,受宠爱的人,宠坏的孩子,不悦,生气；a.宠爱的,表示亲昵的,养着观赏的,特别珍爱的,格外的；宠爱,溺爱,抚摸",
    "example": "I learned the word \"pet\" today.",
    "part": "n"
  },
  {
    "id": "pet-1942",
    "library": "pet",
    "word": "platform",
    "meaning": "站台,月台,讲台,论坛,平台；[计]平台",
    "example": "I learned the word \"platform\" today.",
    "part": "n"
  },
  {
    "id": "pet-1943",
    "library": "pet",
    "word": "petrol",
    "meaning": "汽油；[经]汽油,挥发油,石油",
    "example": "I learned the word \"petrol\" today.",
    "part": "n"
  },
  {
    "id": "pet-1944",
    "library": "pet",
    "word": "play",
    "meaning": "游戏,游玩,玩笑,运动,比赛,赌博,跳动,表演,剧本；玩,游戏,假装,开玩笑,比赛,扮演,演奏,演戏,传摇曳,(使)跳动；[计]播放",
    "example": "I learned the word \"play\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1945",
    "library": "pet",
    "word": "petrol station",
    "meaning": "加油站",
    "example": "Try to use \"petrol station\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1946",
    "library": "pet",
    "word": "pharmacy",
    "meaning": "药房,配药学,制药业；[医]药学,药剂学,调剂学,药房",
    "example": "I learned the word \"pharmacy\" today.",
    "part": "n"
  },
  {
    "id": "pet-1947",
    "library": "pet",
    "word": "phone",
    "meaning": "电话,受话器,耳机；打电话给；打电话",
    "example": "I learned the word \"phone\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1948",
    "library": "pet",
    "word": "photo",
    "meaning": "相片,照片,逼真的描绘；照相；a.照相的,摄影用的,详细记录的,逼真的,酷似的",
    "example": "I learned the word \"photo\" today.",
    "part": "n"
  },
  {
    "id": "pet-1949",
    "library": "pet",
    "word": "photocopy",
    "meaning": "影印,复印件；影印",
    "example": "I learned the word \"photocopy\" today.",
    "part": "n"
  },
  {
    "id": "pet-1950",
    "library": "pet",
    "word": "photograph",
    "meaning": "相片,照片,逼真的描绘；照相,摄影",
    "example": "I learned the word \"photograph\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1951",
    "library": "pet",
    "word": "photographer",
    "meaning": "摄影师,摄影者",
    "example": "I learned the word \"photographer\" today.",
    "part": "n"
  },
  {
    "id": "pet-1952",
    "library": "pet",
    "word": "player",
    "meaning": "竞赛者,上场队员,游戏者,演员；[经]交易者",
    "example": "I learned the word \"player\" today.",
    "part": "n"
  },
  {
    "id": "pet-1953",
    "library": "pet",
    "word": "playground",
    "meaning": "运动场,操场,度假胜地,活动场所",
    "example": "I learned the word \"playground\" today.",
    "part": "n"
  },
  {
    "id": "pet-1954",
    "library": "pet",
    "word": "photography",
    "meaning": "摄影,摄影术；[化]照相术",
    "example": "I learned the word \"photography\" today.",
    "part": "n"
  },
  {
    "id": "pet-1955",
    "library": "pet",
    "word": "phrase",
    "meaning": "惯用语,词组,成语,措词,乐句；用短语表达,把(乐曲)分成短句；[计]短语",
    "example": "I learned the word \"phrase\" today.",
    "part": "n"
  },
  {
    "id": "pet-1956",
    "library": "pet",
    "word": "pleasant",
    "meaning": "a.愉快的,可爱的,活泼的,亲切的",
    "example": "I learned the word \"pleasant\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1957",
    "library": "pet",
    "word": "physics",
    "meaning": "物理学,物理过程,物理现象；[化]物理；物理学",
    "example": "I learned the word \"physics\" today.",
    "part": "n"
  },
  {
    "id": "pet-1958",
    "library": "pet",
    "word": "please",
    "meaning": "请；使高兴,合...的心意,取悦；使人满意,讨好,愿意,敬请",
    "example": "I learned the word \"please\" today.",
    "part": "exclam & v"
  },
  {
    "id": "pet-1959",
    "library": "pet",
    "word": "piano",
    "meaning": "钢琴",
    "example": "I learned the word \"piano\" today.",
    "part": "n"
  },
  {
    "id": "pet-1960",
    "library": "pet",
    "word": "pick",
    "meaning": "精选,选择,掘,精华,牙签,鹤嘴锄；摘,掘,凿,挖,挑选；[计]拾取",
    "example": "I learned the word \"pick\" today.",
    "part": "v"
  },
  {
    "id": "pet-1961",
    "library": "pet",
    "word": "pick up",
    "meaning": "掘地,捡起,获得,学会,看到,中途带,搭乘,重新找到,振作,加快,好转,整理",
    "example": "Try to use \"pick up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-1962",
    "library": "pet",
    "word": "pleased",
    "meaning": "a.高兴的,喜欢的,满足的",
    "example": "I learned the word \"pleased\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1963",
    "library": "pet",
    "word": "pleasure",
    "meaning": "快乐,愉快,令人高兴的事,娱乐,希望；(使)高兴",
    "example": "I learned the word \"pleasure\" today.",
    "part": "n"
  },
  {
    "id": "pet-1964",
    "library": "pet",
    "word": "plenty",
    "meaning": "充分,很多,丰富；a.很多的,足够的,丰富的",
    "example": "I learned the word \"plenty\" today.",
    "part": "pron"
  },
  {
    "id": "pet-1965",
    "library": "pet",
    "word": "picnic",
    "meaning": "野餐,远足,愉快的经历；去野餐,远足",
    "example": "I learned the word \"picnic\" today.",
    "part": "n"
  },
  {
    "id": "pet-1966",
    "library": "pet",
    "word": "plug",
    "meaning": "塞子,栓,插头；插入,塞住,接插头；被塞住",
    "example": "I learned the word \"plug\" today.",
    "part": "n"
  },
  {
    "id": "pet-1967",
    "library": "pet",
    "word": "picture",
    "meaning": "图画,照片,景色,美丽如画的人(或物),化身,生动的描述,想像,形象思维；画,拍摄,用图说明,描写,想像；[计]图象",
    "example": "I learned the word \"picture\" today.",
    "part": "n"
  },
  {
    "id": "pet-1968",
    "library": "pet",
    "word": "pie",
    "meaning": "馅饼,财富,总额,贪污受贿,杂乱,喜鹊；[计]饼图",
    "example": "I learned the word \"pie\" today.",
    "part": "n"
  },
  {
    "id": "pet-1969",
    "library": "pet",
    "word": "piece",
    "meaning": "块,片,篇,碎片,部分,部件,标准量；修补,修理,拼合,接线头；吃零食",
    "example": "I learned the word \"piece\" today.",
    "part": "n"
  },
  {
    "id": "pet-1970",
    "library": "pet",
    "word": "plus",
    "meaning": "加上,加,外加；a.正的,附加的；正号,加号,附加额,正数,增益",
    "example": "I learned the word \"plus\" today.",
    "part": "prep & conj"
  },
  {
    "id": "pet-1971",
    "library": "pet",
    "word": "p.m",
    "meaning": "下午",
    "example": "I learned the word \"p.m\" today.",
    "part": "adv"
  },
  {
    "id": "pet-1972",
    "library": "pet",
    "word": "prepare",
    "meaning": "准备,筹备,使在思想上有准备,制造,调制；预备",
    "example": "I learned the word \"prepare\" today.",
    "part": "v"
  },
  {
    "id": "pet-1973",
    "library": "pet",
    "word": "pocket",
    "meaning": "口袋,钱袋,钱,容器；装...在口袋里,隐藏,抑制,私吞,搁置,击...入袋；a.袖珍的,小型的,压缩的,金钱上的",
    "example": "I learned the word \"pocket\" today.",
    "part": "n"
  },
  {
    "id": "pet-1974",
    "library": "pet",
    "word": "prepared",
    "meaning": "a.准备好的,特制的",
    "example": "I learned the word \"prepared\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1975",
    "library": "pet",
    "word": "pocket money",
    "meaning": "零用钱；[经]零用钱",
    "example": "Try to use \"pocket money\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1976",
    "library": "pet",
    "word": "prescription",
    "meaning": "处方,命令,指定；[医]处方,药方",
    "example": "I learned the word \"prescription\" today.",
    "part": "n"
  },
  {
    "id": "pet-1977",
    "library": "pet",
    "word": "podcast",
    "meaning": "播客",
    "example": "I learned the word \"podcast\" today.",
    "part": "n"
  },
  {
    "id": "pet-1978",
    "library": "pet",
    "word": "poem",
    "meaning": "诗,诗般美的事物",
    "example": "I learned the word \"poem\" today.",
    "part": "n"
  },
  {
    "id": "pet-1979",
    "library": "pet",
    "word": "present",
    "meaning": "现在,礼品,瞄准；a.现在的,出席的；介绍,引见,赠送,提出,呈现,上演",
    "example": "I learned the word \"present\" today.",
    "part": "adj & n & v"
  },
  {
    "id": "pet-1980",
    "library": "pet",
    "word": "poet",
    "meaning": "诗人",
    "example": "I learned the word \"poet\" today.",
    "part": "n"
  },
  {
    "id": "pet-1981",
    "library": "pet",
    "word": "poetry",
    "meaning": "诗,韵文,诗歌艺术",
    "example": "I learned the word \"poetry\" today.",
    "part": "n"
  },
  {
    "id": "pet-1982",
    "library": "pet",
    "word": "point",
    "meaning": "点,小数点,标点,地点,要点,特点,尖端,分数,得分,穴位；弄尖,强调,指出,加标点于,瞄准；指,指向,表明",
    "example": "I learned the word \"point\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-1983",
    "library": "pet",
    "word": "police",
    "meaning": "警察,警察当局,治安；维持治安,管辖",
    "example": "I learned the word \"police\" today.",
    "part": "n"
  },
  {
    "id": "pet-1984",
    "library": "pet",
    "word": "prizes",
    "meaning": "奖赏(prize的名词复数)；值得竞争的东西；难能可贵的事物",
    "example": "I learned the word \"prizes\" today.",
    "part": "v"
  },
  {
    "id": "pet-1985",
    "library": "pet",
    "word": "policeman",
    "meaning": "警察；[化]淀帚",
    "example": "I learned the word \"policeman\" today.",
    "part": "n"
  },
  {
    "id": "pet-1986",
    "library": "pet",
    "word": "police officer",
    "meaning": "警察",
    "example": "Try to use \"police officer\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1987",
    "library": "pet",
    "word": "presentation",
    "meaning": "赠与,描述,介绍；[计]简报",
    "example": "I learned the word \"presentation\" today.",
    "part": "n"
  },
  {
    "id": "pet-1988",
    "library": "pet",
    "word": "police station",
    "meaning": "警察分局；[法]警察分局,派出所",
    "example": "Try to use \"police station\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-1989",
    "library": "pet",
    "word": "presenter",
    "meaning": "节目主持人,奉献者,提出者；[法]告发者,提出者,推荐者",
    "example": "I learned the word \"presenter\" today.",
    "part": "n"
  },
  {
    "id": "pet-1990",
    "library": "pet",
    "word": "polite",
    "meaning": "a.有礼貌的,文雅的,客气的,有教养的",
    "example": "I learned the word \"polite\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1991",
    "library": "pet",
    "word": "political",
    "meaning": "a.政治的,政治上的,政党的,从事政治的；[法]政治的,政治上的,党派政治的",
    "example": "I learned the word \"political\" today.",
    "part": "adj"
  },
  {
    "id": "pet-1992",
    "library": "pet",
    "word": "president",
    "meaning": "总统,总裁,董事长,(学院)院长,(大学)校长,主管人,主持人；[经]总经理,董事长,总裁",
    "example": "I learned the word \"president\" today.",
    "part": "n"
  },
  {
    "id": "pet-1993",
    "library": "pet",
    "word": "politician",
    "meaning": "政客,政治家,从事党派政治的人；[法]政客,政治家",
    "example": "I learned the word \"politician\" today.",
    "part": "n"
  },
  {
    "id": "pet-1994",
    "library": "pet",
    "word": "press",
    "meaning": "压,揿,按,人群,印刷机,压力,出版社,记者,报刊,新闻舆论,紧迫；压,压榨,紧抱,逼迫,推进,强迫征募,催逼；压,重压,催促,拥挤,奋力前进,受压",
    "example": "I learned the word \"press\" today.",
    "part": "v"
  },
  {
    "id": "pet-1995",
    "library": "pet",
    "word": "politics",
    "meaning": "政治,政治学,政见,政治活动；[法]政治,政治学,政纲",
    "example": "I learned the word \"politics\" today.",
    "part": "n"
  },
  {
    "id": "pet-1996",
    "library": "pet",
    "word": "pollution",
    "meaning": "污染,玷污；[化]污染",
    "example": "I learned the word \"pollution\" today.",
    "part": "n"
  },
  {
    "id": "pet-1997",
    "library": "pet",
    "word": "pool",
    "meaning": "池,水塘,石油层,联营；合伙经营,共享,采掘,汇聚成；汇合成塘,淤积,联营",
    "example": "I learned the word \"pool\" today.",
    "part": "n"
  },
  {
    "id": "pet-1998",
    "library": "pet",
    "word": "pretty",
    "meaning": "a.漂亮的,优美的,机灵的,狡猾的,恰当的；相当,颇",
    "example": "I learned the word \"pretty\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-1999",
    "library": "pet",
    "word": "prevent",
    "meaning": "预防,防止,阻止,妨碍",
    "example": "I learned the word \"prevent\" today.",
    "part": "v"
  },
  {
    "id": "pet-2000",
    "library": "pet",
    "word": "poor",
    "meaning": "a.贫穷的,贫乏的,不幸的,可怜的,拙劣的,卑鄙的；[经]低劣的,不良的",
    "example": "I learned the word \"poor\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2001",
    "library": "pet",
    "word": "previous",
    "meaning": "a.早先的,前面的,过急的；[法]以前的,生前的,前述的",
    "example": "I learned the word \"previous\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2002",
    "library": "pet",
    "word": "previously",
    "meaning": "先,先前,以前,前,(非正式)过早,过急,在前,在...以前,在先；[计]先前地",
    "example": "I learned the word \"previously\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2003",
    "library": "pet",
    "word": "price",
    "meaning": "价格,代价,价值；定...的价格",
    "example": "I learned the word \"price\" today.",
    "part": "n"
  },
  {
    "id": "pet-2004",
    "library": "pet",
    "word": "pop",
    "meaning": "砰然声,枪击,含气饮料,流行音乐,通俗艺术；a.流行的,热门的,通俗的；使发出爆裂声,开枪打,突然伸出",
    "example": "I learned the word \"pop\" today.",
    "part": "n"
  },
  {
    "id": "pet-2005",
    "library": "pet",
    "word": "primary school",
    "meaning": "小学,初等学校；参见：elementaryschool",
    "example": "Try to use \"primary school\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2006",
    "library": "pet",
    "word": "prince",
    "meaning": "王子,亲王,国君,贵族,诸侯,有权势的大人物",
    "example": "I learned the word \"prince\" today.",
    "part": "n"
  },
  {
    "id": "pet-2007",
    "library": "pet",
    "word": "popular",
    "meaning": "a.通俗的,流行的,受欢迎的,大众的,人民的,普及的；[经]大众的,通俗的,普及的",
    "example": "I learned the word \"popular\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2008",
    "library": "pet",
    "word": "princess",
    "meaning": "公主,王妃,女巨头",
    "example": "I learned the word \"princess\" today.",
    "part": "n"
  },
  {
    "id": "pet-2009",
    "library": "pet",
    "word": "population",
    "meaning": "人口,人口数；[化]群体；总体",
    "example": "I learned the word \"population\" today.",
    "part": "n"
  },
  {
    "id": "pet-2010",
    "library": "pet",
    "word": "principal",
    "meaning": "校长,首长,本金,主犯,资本,委托人；a.主要的,最重要的,首要的",
    "example": "I learned the word \"principal\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2011",
    "library": "pet",
    "word": "port",
    "meaning": "港口,埠,舱门,避风港,左舷,炮眼,姿势,意义；左转舵,持(枪)；左转舵",
    "example": "I learned the word \"port\" today.",
    "part": "n"
  },
  {
    "id": "pet-2012",
    "library": "pet",
    "word": "print",
    "meaning": "打印,版,印刷物,痕迹,印刷业,印刷字体,图片,印花布,印章；打印,印刷,铭记,留印记于,用印刷体写；[计]DOS外部命令:在打印机上打印文件,可一边打印文件一边执行其他工作",
    "example": "I learned the word \"print\" today.",
    "part": "v"
  },
  {
    "id": "pet-2013",
    "library": "pet",
    "word": "position",
    "meaning": "位置,地位,身分,形势,姿势,立场,职位,状态,阵地；安置,决定...的位置；[计]位置",
    "example": "I learned the word \"position\" today.",
    "part": "n"
  },
  {
    "id": "pet-2014",
    "library": "pet",
    "word": "positive",
    "meaning": "a.肯定的,积极的,有把握的；[医]正的,阳性的",
    "example": "I learned the word \"positive\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2015",
    "library": "pet",
    "word": "printer",
    "meaning": "印刷工,打印机；[计]打印机",
    "example": "I learned the word \"printer\" today.",
    "part": "n"
  },
  {
    "id": "pet-2016",
    "library": "pet",
    "word": "possibility",
    "meaning": "可能性,可能的事；[法]可能性,可能发生的事,不确定权",
    "example": "I learned the word \"possibility\" today.",
    "part": "n"
  },
  {
    "id": "pet-2017",
    "library": "pet",
    "word": "prison",
    "meaning": "监狱,监禁,拘留所；监禁",
    "example": "I learned the word \"prison\" today.",
    "part": "n"
  },
  {
    "id": "pet-2018",
    "library": "pet",
    "word": "possible",
    "meaning": "a.可能的,潜在的,合适的；可能性,可能的事物",
    "example": "I learned the word \"possible\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2019",
    "library": "pet",
    "word": "prisoner",
    "meaning": "囚犯,犯人,战俘；[法]犯人,囚犯,扣押犯",
    "example": "I learned the word \"prisoner\" today.",
    "part": "n"
  },
  {
    "id": "pet-2020",
    "library": "pet",
    "word": "possibly",
    "meaning": "可能,也许",
    "example": "I learned the word \"possibly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2021",
    "library": "pet",
    "word": "private",
    "meaning": "a.私人的,秘密的,私立的,隐蔽的；士兵,隐士,阴部；[计]私人的",
    "example": "I learned the word \"private\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2022",
    "library": "pet",
    "word": "post",
    "meaning": "柱,杆,准星,邮件,邮政,标竿,职位,岗位,哨所,兵营；张帖,邮递,公布,登入帐,使熟悉,布置；快速行进",
    "example": "I learned the word \"post\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2023",
    "library": "pet",
    "word": "prize",
    "meaning": "奖赏,奖金,奖品,战利品,捕获；a.得奖的；珍视,估价,捕获,撬,撬动",
    "example": "I learned the word \"prize\" today.",
    "part": "n"
  },
  {
    "id": "pet-2024",
    "library": "pet",
    "word": "probably",
    "meaning": "大概,或许",
    "example": "I learned the word \"probably\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2025",
    "library": "pet",
    "word": "problem",
    "meaning": "问题,难题；a.成问题的,难处理的",
    "example": "I learned the word \"problem\" today.",
    "part": "n"
  },
  {
    "id": "pet-2026",
    "library": "pet",
    "word": "postcard",
    "meaning": "明信片",
    "example": "I learned the word \"postcard\" today.",
    "part": "n"
  },
  {
    "id": "pet-2027",
    "library": "pet",
    "word": "produce",
    "meaning": "生产品,物产,后代；产生,生产,提出,出示；生产,制造",
    "example": "I learned the word \"produce\" today.",
    "part": "v"
  },
  {
    "id": "pet-2028",
    "library": "pet",
    "word": "poster",
    "meaning": "海报,招贴,驿马",
    "example": "I learned the word \"poster\" today.",
    "part": "n"
  },
  {
    "id": "pet-2029",
    "library": "pet",
    "word": "product",
    "meaning": "产品,结果,乘积；[化]生产物",
    "example": "I learned the word \"product\" today.",
    "part": "n"
  },
  {
    "id": "pet-2030",
    "library": "pet",
    "word": "postman",
    "meaning": "邮递员；[法]邮递员,理财法庭的高级律师",
    "example": "I learned the word \"postman\" today.",
    "part": "n"
  },
  {
    "id": "pet-2031",
    "library": "pet",
    "word": "production",
    "meaning": "制造,生产,产物；[医]产生,生成",
    "example": "I learned the word \"production\" today.",
    "part": "n"
  },
  {
    "id": "pet-2032",
    "library": "pet",
    "word": "post office",
    "meaning": "邮局；[法]邮局",
    "example": "Try to use \"post office\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2033",
    "library": "pet",
    "word": "postpone",
    "meaning": "延迟,使延期,缓办,搁延；延缓,延缓发作",
    "example": "I learned the word \"postpone\" today.",
    "part": "v"
  },
  {
    "id": "pet-2034",
    "library": "pet",
    "word": "pot",
    "meaning": "盆,罐,壶,坩埚,奖杯；装入盆中,在锅中煮,随手射击；随手射击",
    "example": "I learned the word \"pot\" today.",
    "part": "n"
  },
  {
    "id": "pet-2035",
    "library": "pet",
    "word": "potato",
    "meaning": "马铃薯",
    "example": "I learned the word \"potato\" today.",
    "part": "n"
  },
  {
    "id": "pet-2036",
    "library": "pet",
    "word": "profession",
    "meaning": "职业,表白,声明；[化]工种；职业",
    "example": "I learned the word \"profession\" today.",
    "part": "n"
  },
  {
    "id": "pet-2037",
    "library": "pet",
    "word": "professional",
    "meaning": "专业人才；a.专业的,职业的",
    "example": "I learned the word \"professional\" today.",
    "part": "n"
  },
  {
    "id": "pet-2038",
    "library": "pet",
    "word": "pour",
    "meaning": "流出,倾泻,骤雨；倒,灌,注,倾泻,诉说,倾吐；倾泻,蜂涌而来,下大雨",
    "example": "I learned the word \"pour\" today.",
    "part": "v"
  },
  {
    "id": "pet-2039",
    "library": "pet",
    "word": "professor",
    "meaning": "教授",
    "example": "I learned the word \"professor\" today.",
    "part": "n"
  },
  {
    "id": "pet-2040",
    "library": "pet",
    "word": "powder",
    "meaning": "粉,粉末,火药；搽粉于,搽粉,撒粉,使成粉末；搽粉,变成粉末",
    "example": "I learned the word \"powder\" today.",
    "part": "n"
  },
  {
    "id": "pet-2041",
    "library": "pet",
    "word": "power",
    "meaning": "力,体力,力量,势力,动力,权力,强国,乘方,强度,幂,功率；使...有力量,供以动力,激励；[计]乘幂",
    "example": "I learned the word \"power\" today.",
    "part": "n"
  },
  {
    "id": "pet-2042",
    "library": "pet",
    "word": "powerful",
    "meaning": "a.有力的,有权力的,强大的；[机]强力的",
    "example": "I learned the word \"powerful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2043",
    "library": "pet",
    "word": "practice",
    "meaning": "实践,练习,实行,惯例,习惯,开业；实践,实行,练习,实习,业务",
    "example": "I learned the word \"practice\" today.",
    "part": "n"
  },
  {
    "id": "pet-2044",
    "library": "pet",
    "word": "progress",
    "meaning": "进步,发展,前进；进步,进行",
    "example": "I learned the word \"progress\" today.",
    "part": "n"
  },
  {
    "id": "pet-2045",
    "library": "pet",
    "word": "practise",
    "meaning": "实践,实行,练习,实习,从事(职业)",
    "example": "I learned the word \"practise\" today.",
    "part": "v"
  },
  {
    "id": "pet-2046",
    "library": "pet",
    "word": "prohibited",
    "meaning": "禁止,被禁止的（prohibite的过去分词形式）",
    "example": "I learned the word \"prohibited\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2047",
    "library": "pet",
    "word": "pray",
    "meaning": "祈祷,恳求,请",
    "example": "I learned the word \"pray\" today.",
    "part": "v"
  },
  {
    "id": "pet-2048",
    "library": "pet",
    "word": "project",
    "meaning": "计划,设计,事业；计划,设计,投掷,发射,使凸出,放映；凸出",
    "example": "I learned the word \"project\" today.",
    "part": "n"
  },
  {
    "id": "pet-2049",
    "library": "pet",
    "word": "prayer",
    "meaning": "祈祷,恳求,祷辞,祈祷者",
    "example": "I learned the word \"prayer\" today.",
    "part": "n"
  },
  {
    "id": "pet-2050",
    "library": "pet",
    "word": "predict",
    "meaning": "预知,预言,预报",
    "example": "I learned the word \"predict\" today.",
    "part": "v"
  },
  {
    "id": "pet-2051",
    "library": "pet",
    "word": "promise",
    "meaning": "诺言,约定的事情,有指望；允诺,约定,预示；允诺,有前途,有指望",
    "example": "I learned the word \"promise\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2052",
    "library": "pet",
    "word": "prefer",
    "meaning": "宁可,较喜欢,提出；[法]给予优先权,优先偿还,提出",
    "example": "I learned the word \"prefer\" today.",
    "part": "v"
  },
  {
    "id": "pet-2053",
    "library": "pet",
    "word": "pregnant",
    "meaning": "a.怀孕的,充满的,思想丰富的,成果丰硕的；[医]妊娠的,有孕的",
    "example": "I learned the word \"pregnant\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2054",
    "library": "pet",
    "word": "preparation",
    "meaning": "准备,预备,预习；[化]制剂",
    "example": "I learned the word \"preparation\" today.",
    "part": "n"
  },
  {
    "id": "pet-2055",
    "library": "pet",
    "word": "promote",
    "meaning": "促进,晋升,创办,推销；[经]促进,推广,推销",
    "example": "I learned the word \"promote\" today.",
    "part": "v"
  },
  {
    "id": "pet-2056",
    "library": "pet",
    "word": "quality",
    "meaning": "品质,特性,才能,质量；a.优质的；[计]品质",
    "example": "I learned the word \"quality\" today.",
    "part": "n"
  },
  {
    "id": "pet-2057",
    "library": "pet",
    "word": "pronounce",
    "meaning": "发音,宣告,断言",
    "example": "I learned the word \"pronounce\" today.",
    "part": "v"
  },
  {
    "id": "pet-2058",
    "library": "pet",
    "word": "quantity",
    "meaning": "量,数量,总量；[计]数量；量",
    "example": "I learned the word \"quantity\" today.",
    "part": "n"
  },
  {
    "id": "pet-2059",
    "library": "pet",
    "word": "quarter",
    "meaning": "四分之一,一刻钟,季度,地区；四等分,肢解；驻扎,住宿",
    "example": "I learned the word \"quarter\" today.",
    "part": "n"
  },
  {
    "id": "pet-2060",
    "library": "pet",
    "word": "pronunciation",
    "meaning": "发音,读法",
    "example": "I learned the word \"pronunciation\" today.",
    "part": "n"
  },
  {
    "id": "pet-2061",
    "library": "pet",
    "word": "queen",
    "meaning": "王后,女王；立为女王；做女王",
    "example": "I learned the word \"queen\" today.",
    "part": "n"
  },
  {
    "id": "pet-2062",
    "library": "pet",
    "word": "proper",
    "meaning": "a.适当的,固有的,高尚的,专属的；完全地,彻底地",
    "example": "I learned the word \"proper\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2063",
    "library": "pet",
    "word": "question",
    "meaning": "问题,询问；询问,审问,怀疑；[计]询问",
    "example": "I learned the word \"question\" today.",
    "part": "n"
  },
  {
    "id": "pet-2064",
    "library": "pet",
    "word": "property",
    "meaning": "财产,所有权,性质,属性；[计]属性",
    "example": "I learned the word \"property\" today.",
    "part": "n"
  },
  {
    "id": "pet-2065",
    "library": "pet",
    "word": "protect",
    "meaning": "防卫,保护,警戒；[法]庇护,保护,警戒",
    "example": "I learned the word \"protect\" today.",
    "part": "v"
  },
  {
    "id": "pet-2066",
    "library": "pet",
    "word": "proud",
    "meaning": "a.骄傲的,自大的,自豪的,辉煌的,壮丽的",
    "example": "I learned the word \"proud\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2067",
    "library": "pet",
    "word": "questionnaire",
    "meaning": "调查表,问卷；[经]调查表",
    "example": "I learned the word \"questionnaire\" today.",
    "part": "n"
  },
  {
    "id": "pet-2068",
    "library": "pet",
    "word": "prove",
    "meaning": "证明,查验,检验,勘探,显示；证明是",
    "example": "I learned the word \"prove\" today.",
    "part": "v"
  },
  {
    "id": "pet-2069",
    "library": "pet",
    "word": "queue",
    "meaning": "辫子,一队人,队列；使排队,将...梳成辫子；排队",
    "example": "I learned the word \"queue\" today.",
    "part": "n"
  },
  {
    "id": "pet-2070",
    "library": "pet",
    "word": "provide",
    "meaning": "提供,供应,规定,预备；作准备,抚养,规定",
    "example": "I learned the word \"provide\" today.",
    "part": "v"
  },
  {
    "id": "pet-2071",
    "library": "pet",
    "word": "quick",
    "meaning": "a.快的,迅速的,敏捷的,灵敏的,急速的；快；新长出的肉,要害,核心,感觉敏锐部位",
    "example": "I learned the word \"quick\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2072",
    "library": "pet",
    "word": "public",
    "meaning": "公众,民众；a.公众的,公共的,公立的,公用的",
    "example": "I learned the word \"public\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2073",
    "library": "pet",
    "word": "quickly",
    "meaning": "很快地",
    "example": "I learned the word \"quickly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2074",
    "library": "pet",
    "word": "quiet",
    "meaning": "安静,闲适,平静；a.安静的,静止的,寂静的,朴素的,从容的,暗中的；平静下来",
    "example": "I learned the word \"quiet\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2075",
    "library": "pet",
    "word": "quietly",
    "meaning": "安静地,沉着地,秘密地",
    "example": "I learned the word \"quietly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2076",
    "library": "pet",
    "word": "quit",
    "meaning": "离开,辞职,停止；离开,放弃,使解除,停止；离开",
    "example": "I learned the word \"quit\" today.",
    "part": "v"
  },
  {
    "id": "pet-2077",
    "library": "pet",
    "word": "public transport",
    "meaning": "公共交通,公共交通工具,公交车辆",
    "example": "Try to use \"public transport\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2078",
    "library": "pet",
    "word": "quite",
    "meaning": "相当,完全,十分",
    "example": "I learned the word \"quite\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2079",
    "library": "pet",
    "word": "publish",
    "meaning": "出版,发行,公开,发表,宣传,公布；出版,发行",
    "example": "I learned the word \"publish\" today.",
    "part": "v"
  },
  {
    "id": "pet-2080",
    "library": "pet",
    "word": "pull",
    "meaning": "拉,拖,拔,牵,撕开,吸引；拉,拖,拔,有吸引力；拉,拖,拔,拉力,牵引力,划船,吸引",
    "example": "I learned the word \"pull\" today.",
    "part": "v"
  },
  {
    "id": "pet-2081",
    "library": "pet",
    "word": "pullover",
    "meaning": "套衫；a.套穿的",
    "example": "I learned the word \"pullover\" today.",
    "part": "n"
  },
  {
    "id": "pet-2082",
    "library": "pet",
    "word": "quiz",
    "meaning": "考查,课堂测验,恶作剧,智力测验；戏弄,考查,恶作剧",
    "example": "I learned the word \"quiz\" today.",
    "part": "n"
  },
  {
    "id": "pet-2083",
    "library": "pet",
    "word": "pump",
    "meaning": "抽水机,打气筒,泵,抽吸；用唧筒抽水,打气,盘问,倾注,使疲惫；抽水,上下(或往复)运动",
    "example": "I learned the word \"pump\" today.",
    "part": "n"
  },
  {
    "id": "pet-2084",
    "library": "pet",
    "word": "punish",
    "meaning": "处罚,惩罚,严厉对待；惩罚",
    "example": "I learned the word \"punish\" today.",
    "part": "v"
  },
  {
    "id": "pet-2085",
    "library": "pet",
    "word": "pupil",
    "meaning": "学生,门生,未成年人,瞳孔；[医]瞳孔",
    "example": "I learned the word \"pupil\" today.",
    "part": "n"
  },
  {
    "id": "pet-2086",
    "library": "pet",
    "word": "puppy",
    "meaning": "小狗,小动物,自负的年轻人",
    "example": "I learned the word \"puppy\" today.",
    "part": "n"
  },
  {
    "id": "pet-2087",
    "library": "pet",
    "word": "rabbit",
    "meaning": "兔子；猎兔；让...见鬼去",
    "example": "I learned the word \"rabbit\" today.",
    "part": "n"
  },
  {
    "id": "pet-2088",
    "library": "pet",
    "word": "pure",
    "meaning": "a.纯的,纯净的,纯洁的,清白的,完美的,无瑕的,抽象的；[医]的,纯净的",
    "example": "I learned the word \"pure\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2089",
    "library": "pet",
    "word": "race",
    "meaning": "种族,人种,赛跑,比赛,急流,人类,同道,姜根；赛跑,竞赛,疾走；与...赛跑,使疾走,使猛转",
    "example": "I learned the word \"race\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2090",
    "library": "pet",
    "word": "purple",
    "meaning": "紫色,帝位；a.紫色的,帝王的,华而不实的；(使)成紫色",
    "example": "I learned the word \"purple\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2091",
    "library": "pet",
    "word": "purpose",
    "meaning": "目的,意向,决心,用途,效果,论题；意欲,企图,计划",
    "example": "I learned the word \"purpose\" today.",
    "part": "n"
  },
  {
    "id": "pet-2092",
    "library": "pet",
    "word": "purse",
    "meaning": "钱包,小钱袋,金钱,募捐款,囊状物；缩拢,皱起",
    "example": "I learned the word \"purse\" today.",
    "part": "n"
  },
  {
    "id": "pet-2093",
    "library": "pet",
    "word": "push",
    "meaning": "推,推动,奋斗,攻击,进取心；推,推动,使伸出,推行,逼迫,增加；推,推进,增加,努力争取",
    "example": "I learned the word \"push\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2094",
    "library": "pet",
    "word": "racket",
    "meaning": "球拍,喧闹,杂乱无章；喧闹；用球拍打",
    "example": "I learned the word \"racket\" today.",
    "part": "n"
  },
  {
    "id": "pet-2095",
    "library": "pet",
    "word": "put",
    "meaning": "放,摆,安置,移动,发射,投掷,写上,表达,使从事,使受到,驱使,赋予；出发,航行,发芽；掷,股票出售权,笨蛋",
    "example": "I learned the word \"put\" today.",
    "part": "v"
  },
  {
    "id": "pet-2096",
    "library": "pet",
    "word": "put away",
    "meaning": "放好,储存...备用,抛弃,放弃",
    "example": "Try to use \"put away\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2097",
    "library": "pet",
    "word": "radio",
    "meaning": "无线电,收音机,无线电报,无线电广播,无线电台；用无线电发送",
    "example": "I learned the word \"radio\" today.",
    "part": "n"
  },
  {
    "id": "pet-2098",
    "library": "pet",
    "word": "rail",
    "meaning": "横杆,围栏,栏杆,铁轨,扶手,秧鸡；以横木围栏,给...铺铁轨；责骂,抱怨",
    "example": "I learned the word \"rail\" today.",
    "part": "n"
  },
  {
    "id": "pet-2099",
    "library": "pet",
    "word": "put down",
    "meaning": "放下,不赞成,镇压,取缔,制止,记下,贬低,羞辱,削减；[法]放下,遏止",
    "example": "Try to use \"put down\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2100",
    "library": "pet",
    "word": "railway",
    "meaning": "铁路,轨道；[经]铁路",
    "example": "I learned the word \"railway\" today.",
    "part": "n"
  },
  {
    "id": "pet-2101",
    "library": "pet",
    "word": "put off",
    "meaning": "推迟,拖延,搪塞,阻止,脱掉,扔掉,使分心,使厌恶,出航；[经]推迟",
    "example": "Try to use \"put off\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2102",
    "library": "pet",
    "word": "rain",
    "meaning": "雨,下雨,雨天；下雨；使大量落下",
    "example": "I learned the word \"rain\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2103",
    "library": "pet",
    "word": "the raincoat",
    "meaning": "art.那",
    "example": "Try to use \"the raincoat\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2104",
    "library": "pet",
    "word": "rainforest",
    "meaning": "[生态]雨林",
    "example": "I learned the word \"rainforest\" today.",
    "part": "n"
  },
  {
    "id": "pet-2105",
    "library": "pet",
    "word": "put on",
    "meaning": "把...放上去,穿上,假装,增加,上演,使...上场,使起作用,施加于",
    "example": "Try to use \"put on\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2106",
    "library": "pet",
    "word": "raise",
    "meaning": "上升,高地,增高；升起,举起,唤起,提高,使出现,使复活,提出,筹集,饲养",
    "example": "I learned the word \"raise\" today.",
    "part": "v"
  },
  {
    "id": "pet-2107",
    "library": "pet",
    "word": "range",
    "meaning": "排,行,山脉,范围,行列,射程；排列,归类于,使并列,放牧；平行,延伸,漫游",
    "example": "I learned the word \"range\" today.",
    "part": "n"
  },
  {
    "id": "pet-2108",
    "library": "pet",
    "word": "put out",
    "meaning": "放出,伸出,生产,出版,发布,熄灭,消除,使困扰,使脱臼,把...杀出局,出航；[化]关；停止",
    "example": "Try to use \"put out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2109",
    "library": "pet",
    "word": "rap",
    "meaning": "轻敲,拍击,责骂,无价值的东西；轻敲,厉声说出,叱责,抢走,使着迷；敲击,发敲击声,交谈,同情",
    "example": "I learned the word \"rap\" today.",
    "part": "n"
  },
  {
    "id": "pet-2110",
    "library": "pet",
    "word": "put through",
    "meaning": "搞成,接通",
    "example": "Try to use \"put through\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2111",
    "library": "pet",
    "word": "rare",
    "meaning": "a.稀罕的,罕有的,珍奇的,稀薄的,半熟的,非常好的；非常",
    "example": "I learned the word \"rare\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2112",
    "library": "pet",
    "word": "rarely",
    "meaning": "很少地,罕有地",
    "example": "I learned the word \"rarely\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2113",
    "library": "pet",
    "word": "rather",
    "meaning": "宁可,稍微,相当",
    "example": "I learned the word \"rather\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2114",
    "library": "pet",
    "word": "put up",
    "meaning": "举起,抬起,进行,推举,参加竞选,提供,建造,接待,包装,公布,上演；[化]搭架",
    "example": "Try to use \"put up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2115",
    "library": "pet",
    "word": "puzzle",
    "meaning": "难题,迷惑；使困惑,使为难；迷惑,苦思",
    "example": "I learned the word \"puzzle\" today.",
    "part": "n"
  },
  {
    "id": "pet-2116",
    "library": "pet",
    "word": "pyjamas",
    "meaning": "睡衣裤,宽松裤",
    "example": "I learned the word \"pyjamas\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-2117",
    "library": "pet",
    "word": "raw",
    "meaning": "擦伤处,半成品；a.生的,未加工的,生疏的,不成熟的,阴冷的,刺痛的,擦掉皮的；擦伤",
    "example": "I learned the word \"raw\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2118",
    "library": "pet",
    "word": "reach",
    "meaning": "伸出,延伸,区域,范围,流域,岬；到达,达到,伸出,延伸,影响；达到,延伸,伸出手,传到",
    "example": "I learned the word \"reach\" today.",
    "part": "v"
  },
  {
    "id": "pet-2119",
    "library": "pet",
    "word": "qualification",
    "meaning": "资格,条件,限制；[计]限定",
    "example": "I learned the word \"qualification\" today.",
    "part": "n"
  },
  {
    "id": "pet-2120",
    "library": "pet",
    "word": "react",
    "meaning": "起反应,起作用,反攻；[医]应答,发生反应",
    "example": "I learned the word \"react\" today.",
    "part": "v"
  },
  {
    "id": "pet-2121",
    "library": "pet",
    "word": "qualified",
    "meaning": "a.有资格的；[经]合格的,有条件的,有限制的",
    "example": "I learned the word \"qualified\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2122",
    "library": "pet",
    "word": "read",
    "meaning": "读,阅读,理解；a.有学问的；读取,阅读",
    "example": "I learned the word \"read\" today.",
    "part": "v"
  },
  {
    "id": "pet-2123",
    "library": "pet",
    "word": "reliable",
    "meaning": "a.可靠的,可信赖的；[法]可靠的,可信赖的,确实的",
    "example": "I learned the word \"reliable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2124",
    "library": "pet",
    "word": "reader",
    "meaning": "读者,读物,文选,校对人,讲师；[计]阅读程序；阅读器",
    "example": "I learned the word \"reader\" today.",
    "part": "n"
  },
  {
    "id": "pet-2125",
    "library": "pet",
    "word": "relieved",
    "meaning": "a.宽慰的,解除的,减轻的",
    "example": "I learned the word \"relieved\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2126",
    "library": "pet",
    "word": "reading",
    "meaning": "阅读,知识,读物；a.阅读的",
    "example": "I learned the word \"reading\" today.",
    "part": "n"
  },
  {
    "id": "pet-2127",
    "library": "pet",
    "word": "religion",
    "meaning": "宗教,信仰；[法]宗教,宗教信仰,信仰",
    "example": "I learned the word \"religion\" today.",
    "part": "n"
  },
  {
    "id": "pet-2128",
    "library": "pet",
    "word": "ready",
    "meaning": "预备好的状态,现款；a.准备好的,备用的,可以使用的；预先,迅速",
    "example": "I learned the word \"ready\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2129",
    "library": "pet",
    "word": "real",
    "meaning": "a.真的,真实的,实际的,实在的,不动(产)的,实数的；实数,现实；真正地",
    "example": "I learned the word \"real\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2130",
    "library": "pet",
    "word": "remain",
    "meaning": "保持,逗留,剩余；[法]停留,居住,继续",
    "example": "I learned the word \"remain\" today.",
    "part": "v"
  },
  {
    "id": "pet-2131",
    "library": "pet",
    "word": "realise",
    "meaning": "实现,认识到,体会到,了解,认清,使显得逼真,变卖财产为现钱",
    "example": "I learned the word \"realise\" today.",
    "part": "v"
  },
  {
    "id": "pet-2132",
    "library": "pet",
    "word": "remember",
    "meaning": "记得,回忆起,记住,铭记,纪念；记得",
    "example": "I learned the word \"remember\" today.",
    "part": "v"
  },
  {
    "id": "pet-2133",
    "library": "pet",
    "word": "remind",
    "meaning": "提醒,使想起",
    "example": "I learned the word \"remind\" today.",
    "part": "v"
  },
  {
    "id": "pet-2134",
    "library": "pet",
    "word": "realistic",
    "meaning": "a.现实的,逼真的,现实主义的,实在论的",
    "example": "I learned the word \"realistic\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2135",
    "library": "pet",
    "word": "remote control",
    "meaning": "[计]遥控；[化]远程操纵；遥控",
    "example": "Try to use \"remote control\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2136",
    "library": "pet",
    "word": "reality",
    "meaning": "实在,事实,实体,逼真；[法]现实,实在存在的事物,实在性",
    "example": "I learned the word \"reality\" today.",
    "part": "n"
  },
  {
    "id": "pet-2137",
    "library": "pet",
    "word": "remove",
    "meaning": "移动,调动,除去,迁移,开除,移交；迁移,移动,搬家；班级,升级,移动,搬家,间距",
    "example": "I learned the word \"remove\" today.",
    "part": "v"
  },
  {
    "id": "pet-2138",
    "library": "pet",
    "word": "really",
    "meaning": "实际上,真实地,实在",
    "example": "I learned the word \"really\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2139",
    "library": "pet",
    "word": "rent",
    "meaning": "租金,房租,出租物,裂缝,破裂处,分裂；租用,租出；出租",
    "example": "I learned the word \"rent\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2140",
    "library": "pet",
    "word": "reason",
    "meaning": "理由,原因,理智,道理,前提,理性；说服,推论,辩论；推论,劝说,思考",
    "example": "I learned the word \"reason\" today.",
    "part": "n"
  },
  {
    "id": "pet-2141",
    "library": "pet",
    "word": "repair",
    "meaning": "修理,补救,修复；修理,修补,补救,恢复,补偿；修理,修补,补救,恢复,去,常去,集合",
    "example": "I learned the word \"repair\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2142",
    "library": "pet",
    "word": "repeat",
    "meaning": "重复,反复；重做,重复,复述,使再现,复制；重复",
    "example": "I learned the word \"repeat\" today.",
    "part": "v"
  },
  {
    "id": "pet-2143",
    "library": "pet",
    "word": "reasonable",
    "meaning": "a.合理的,明理的,适当的；[法]合理的,公道的,正当的",
    "example": "I learned the word \"reasonable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2144",
    "library": "pet",
    "word": "reasonably",
    "meaning": "适度地,相当地",
    "example": "I learned the word \"reasonably\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2145",
    "library": "pet",
    "word": "replace",
    "meaning": "代替,替换,放回,归还；[计]替换；DOS外部命令:取代或更新文件",
    "example": "I learned the word \"replace\" today.",
    "part": "v"
  },
  {
    "id": "pet-2146",
    "library": "pet",
    "word": "rebuild",
    "meaning": "改建,重建,改造；重建",
    "example": "I learned the word \"rebuild\" today.",
    "part": "v"
  },
  {
    "id": "pet-2147",
    "library": "pet",
    "word": "reply",
    "meaning": "答复,回答,答辩；答复,回答,回击,反响,答辩；回答",
    "example": "I learned the word \"reply\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2148",
    "library": "pet",
    "word": "receipt",
    "meaning": "收据,收入,收到；开...的收据",
    "example": "I learned the word \"receipt\" today.",
    "part": "n"
  },
  {
    "id": "pet-2149",
    "library": "pet",
    "word": "report",
    "meaning": "报告,报道,传说,案情报告,爆炸声,成绩单；报告,汇报,转述,报道,揭发,使报到；报告,写报道,报到",
    "example": "I learned the word \"report\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2150",
    "library": "pet",
    "word": "reporter",
    "meaning": "记者,报告者；[化]指示器",
    "example": "I learned the word \"reporter\" today.",
    "part": "n"
  },
  {
    "id": "pet-2151",
    "library": "pet",
    "word": "receive",
    "meaning": "收到,接到,得到,接待,迎接,承受；收到,会客；[计]接收",
    "example": "I learned the word \"receive\" today.",
    "part": "v"
  },
  {
    "id": "pet-2152",
    "library": "pet",
    "word": "recent",
    "meaning": "a.最近的,近代的,最新的；[经]最近的,新进的",
    "example": "I learned the word \"recent\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2153",
    "library": "pet",
    "word": "request",
    "meaning": "请求,需要,申请书；请求,要求,邀请；[计]请求",
    "example": "I learned the word \"request\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2154",
    "library": "pet",
    "word": "reception",
    "meaning": "接待,接受,招待会；[医]接受,感受",
    "example": "I learned the word \"reception\" today.",
    "part": "n"
  },
  {
    "id": "pet-2155",
    "library": "pet",
    "word": "require",
    "meaning": "需要,命令,要求；[法]需要,要求,命令",
    "example": "I learned the word \"require\" today.",
    "part": "v"
  },
  {
    "id": "pet-2156",
    "library": "pet",
    "word": "receptionist",
    "meaning": "接待员",
    "example": "I learned the word \"receptionist\" today.",
    "part": "n"
  },
  {
    "id": "pet-2157",
    "library": "pet",
    "word": "rescue",
    "meaning": "援救,解救,营救；援救,救出,营救",
    "example": "I learned the word \"rescue\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2158",
    "library": "pet",
    "word": "recipe",
    "meaning": "食谱,处方,秘诀；[医]取(处方头语),处方",
    "example": "I learned the word \"recipe\" today.",
    "part": "n"
  },
  {
    "id": "pet-2159",
    "library": "pet",
    "word": "research",
    "meaning": "研究,调查,考察；研究,调查",
    "example": "I learned the word \"research\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2160",
    "library": "pet",
    "word": "reservation",
    "meaning": "保留,预定,保留品,保留地；[经]预定,预约,权益保留",
    "example": "I learned the word \"reservation\" today.",
    "part": "n"
  },
  {
    "id": "pet-2161",
    "library": "pet",
    "word": "recognise",
    "meaning": "认识,辩认,认出,承认,认可,清楚地认识到,自认,公认,赏识,准许某人发言",
    "example": "I learned the word \"recognise\" today.",
    "part": "v"
  },
  {
    "id": "pet-2162",
    "library": "pet",
    "word": "recommend",
    "meaning": "推荐,介绍,劝告,使受欢迎,托付；[经]建议,推荐",
    "example": "I learned the word \"recommend\" today.",
    "part": "v"
  },
  {
    "id": "pet-2163",
    "library": "pet",
    "word": "reserve",
    "meaning": "储备品,贮量,后备军,自然保护区,保留,拘谨,节制,储备金；保留,保存,预订,延期,推迟",
    "example": "I learned the word \"reserve\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2164",
    "library": "pet",
    "word": "record",
    "meaning": "记录,履历,档案,审判记录,最高纪录,唱片；记录,记载,标明,将...录音；记录,录音,可被录音",
    "example": "I learned the word \"record\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2165",
    "library": "pet",
    "word": "resort",
    "meaning": "度假胜地,手段,凭借,常去之地；诉诸,常去",
    "example": "I learned the word \"resort\" today.",
    "part": "n"
  },
  {
    "id": "pet-2166",
    "library": "pet",
    "word": "respect",
    "meaning": "尊敬,尊重,问候；尊敬,注意,遵守",
    "example": "I learned the word \"respect\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2167",
    "library": "pet",
    "word": "responsible",
    "meaning": "a.有责任的,负责的,责任重大的；[法]应负责任的,有责任的,能履行责任的",
    "example": "I learned the word \"responsible\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2168",
    "library": "pet",
    "word": "rest",
    "meaning": "休息,睡眠,安息,稍息,静止,支架,休息处,其余者,剩余部分；休息,睡,长眠,安心,静止,停止,安置,依赖；使休息,使支撑,把...寄托于",
    "example": "I learned the word \"rest\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2169",
    "library": "pet",
    "word": "recording",
    "meaning": "a.记录的,记录用的；录音",
    "example": "I learned the word \"recording\" today.",
    "part": "n"
  },
  {
    "id": "pet-2170",
    "library": "pet",
    "word": "recover",
    "meaning": "重新获得,恢复,复原,拯救；痊愈,复原,胜诉；[计]恢复",
    "example": "I learned the word \"recover\" today.",
    "part": "v"
  },
  {
    "id": "pet-2171",
    "library": "pet",
    "word": "recycle",
    "meaning": "使再循环,重新利用,再制；再循环",
    "example": "I learned the word \"recycle\" today.",
    "part": "v"
  },
  {
    "id": "pet-2172",
    "library": "pet",
    "word": "restaurant",
    "meaning": "餐馆,饭店",
    "example": "I learned the word \"restaurant\" today.",
    "part": "n"
  },
  {
    "id": "pet-2173",
    "library": "pet",
    "word": "result",
    "meaning": "结果,成绩,答案；产生,结果,致使；[计]结果",
    "example": "I learned the word \"result\" today.",
    "part": "n"
  },
  {
    "id": "pet-2174",
    "library": "pet",
    "word": "recycled",
    "meaning": "回收利用(recycle的过去式和过去分词)；再利用；再次应用",
    "example": "I learned the word \"recycled\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2175",
    "library": "pet",
    "word": "retire",
    "meaning": "隐居；引退,退役,退休,退去,撤退,退却；使...撤退,辞退",
    "example": "I learned the word \"retire\" today.",
    "part": "v"
  },
  {
    "id": "pet-2176",
    "library": "pet",
    "word": "recycling",
    "meaning": "[电]再循环",
    "example": "I learned the word \"recycling\" today.",
    "part": "n"
  },
  {
    "id": "pet-2177",
    "library": "pet",
    "word": "red",
    "meaning": "a.红的,红色的,红肿的,流血的；红色,红颜料,赤字；[计]简化,减少",
    "example": "I learned the word \"red\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2178",
    "library": "pet",
    "word": "return",
    "meaning": "回来,返回,来回票,归还,报答,利润率,报告书；a.返回的,回程的,报答的,反向的,重现的,复原的；返回,归还,回来",
    "example": "I learned the word \"return\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2179",
    "library": "pet",
    "word": "reduce",
    "meaning": "减少,分解,降低,使衰退,把...分解,把...归纳；减少,减肥,缩小；[计]缩小",
    "example": "I learned the word \"reduce\" today.",
    "part": "v"
  },
  {
    "id": "pet-2180",
    "library": "pet",
    "word": "refreshments",
    "meaning": "茶点；点心；小吃",
    "example": "I learned the word \"refreshments\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-2181",
    "library": "pet",
    "word": "refrigerator",
    "meaning": "电冰箱,冷藏库；[计]冷冻机；致冷器",
    "example": "I learned the word \"refrigerator\" today.",
    "part": "n"
  },
  {
    "id": "pet-2182",
    "library": "pet",
    "word": "review",
    "meaning": "检讨,复习,回顾,检阅,评论；温习,检讨,评论,再检察,复审；复习功课,写评论",
    "example": "I learned the word \"review\" today.",
    "part": "n"
  },
  {
    "id": "pet-2183",
    "library": "pet",
    "word": "refund",
    "meaning": "偿还；付还,偿还借款；归还,偿还",
    "example": "I learned the word \"refund\" today.",
    "part": "n"
  },
  {
    "id": "pet-2184",
    "library": "pet",
    "word": "revise",
    "meaning": "校订,修正,改样；校订,修正,校正",
    "example": "I learned the word \"revise\" today.",
    "part": "v"
  },
  {
    "id": "pet-2185",
    "library": "pet",
    "word": "refuse",
    "meaning": "拒绝,谢绝；拒绝；废物",
    "example": "I learned the word \"refuse\" today.",
    "part": "v"
  },
  {
    "id": "pet-2186",
    "library": "pet",
    "word": "revision",
    "meaning": "校订,修正,修订本,修订版；[计]修订版",
    "example": "I learned the word \"revision\" today.",
    "part": "n"
  },
  {
    "id": "pet-2187",
    "library": "pet",
    "word": "regarding",
    "meaning": "关于",
    "example": "I learned the word \"regarding\" today.",
    "part": "prep"
  },
  {
    "id": "pet-2188",
    "library": "pet",
    "word": "reward",
    "meaning": "报酬,酬谢,赏金；奖赏,酬谢,给...应有报应",
    "example": "I learned the word \"reward\" today.",
    "part": "n"
  },
  {
    "id": "pet-2189",
    "library": "pet",
    "word": "regards",
    "meaning": "问候,致意",
    "example": "I learned the word \"regards\" today.",
    "part": "n"
  },
  {
    "id": "pet-2190",
    "library": "pet",
    "word": "rice",
    "meaning": "米,米饭,稻；将...压成米粒状",
    "example": "I learned the word \"rice\" today.",
    "part": "n"
  },
  {
    "id": "pet-2191",
    "library": "pet",
    "word": "region",
    "meaning": "区域,地带,地区,领域,范围,区；[计]区,区域",
    "example": "I learned the word \"region\" today.",
    "part": "n"
  },
  {
    "id": "pet-2192",
    "library": "pet",
    "word": "rich",
    "meaning": "a.富裕的,富饶的,浓厚的,贵重的",
    "example": "I learned the word \"rich\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2193",
    "library": "pet",
    "word": "register",
    "meaning": "寄存器,记录,登记簿,注册；记录,注册,提示,表达,把...挂号；登记,注册,挂号",
    "example": "I learned the word \"register\" today.",
    "part": "v"
  },
  {
    "id": "pet-2194",
    "library": "pet",
    "word": "ride",
    "meaning": "骑马,乘坐,乘车,搭便车；骑,乘坐,压迫,控制；骑马,乘车,漂游",
    "example": "I learned the word \"ride\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2195",
    "library": "pet",
    "word": "rider",
    "meaning": "骑手,(文件后的)附件,扶手；[化]游码",
    "example": "I learned the word \"rider\" today.",
    "part": "n"
  },
  {
    "id": "pet-2196",
    "library": "pet",
    "word": "registration",
    "meaning": "登记,挂号,注册；[计]登记；定位",
    "example": "I learned the word \"registration\" today.",
    "part": "n"
  },
  {
    "id": "pet-2197",
    "library": "pet",
    "word": "right",
    "meaning": "权利,右边,正义,右派,公正；a.正确的,对的,恰当的,正常的,正直的,正面的,右方的；正确地,以有利结果,一直,直接,向右",
    "example": "I learned the word \"right\" today.",
    "part": "adj, adv & n"
  },
  {
    "id": "pet-2198",
    "library": "pet",
    "word": "regret",
    "meaning": "遗憾,后悔,悔恨,抱歉,歉意；为...感到遗憾,后悔,惋惜,懊悔,抱歉；感到抱歉",
    "example": "I learned the word \"regret\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2199",
    "library": "pet",
    "word": "regular",
    "meaning": "a.规则的,常例的,有秩序的,整齐的,等边的,定期的,经常的,合格的,常备军的；正规军,正式队员；经常地",
    "example": "I learned the word \"regular\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2200",
    "library": "pet",
    "word": "relation",
    "meaning": "关系,联系,叙述,故事,家属,亲戚；[计]关系",
    "example": "I learned the word \"relation\" today.",
    "part": "n"
  },
  {
    "id": "pet-2201",
    "library": "pet",
    "word": "relationship",
    "meaning": "关系,关联；[医]关系",
    "example": "I learned the word \"relationship\" today.",
    "part": "n"
  },
  {
    "id": "pet-2202",
    "library": "pet",
    "word": "relative",
    "meaning": "亲戚,关系词；a.有关系的,相对的,比较的",
    "example": "I learned the word \"relative\" today.",
    "part": "n"
  },
  {
    "id": "pet-2203",
    "library": "pet",
    "word": "relax",
    "meaning": "放松,松懈,松弛,变从容,休息,休养；使松弛,缓和,使松懈,使休息",
    "example": "I learned the word \"relax\" today.",
    "part": "v"
  },
  {
    "id": "pet-2204",
    "library": "pet",
    "word": "relaxation",
    "meaning": "松弛,放松,减轻,缓和,休息,休养；[化]松弛；驰豫",
    "example": "I learned the word \"relaxation\" today.",
    "part": "n"
  },
  {
    "id": "pet-2205",
    "library": "pet",
    "word": "relaxed",
    "meaning": "a.松懈的,不严密的,不严格的,放松的,得到休息的,随意的,不拘束的,自在的",
    "example": "I learned the word \"relaxed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2206",
    "library": "pet",
    "word": "right-hand",
    "meaning": "a.用右手的,右侧的",
    "example": "I learned the word \"right-hand\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2207",
    "library": "pet",
    "word": "ring",
    "meaning": "环,环形物,拳击场,戒指,角逐,小集团,铃声,钟声,声调；包围,套住,按铃,敲钟；成环形,响,鸣,按铃,敲钟,回响",
    "example": "I learned the word \"ring\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2208",
    "library": "pet",
    "word": "ruler",
    "meaning": "统治者,管理者,尺,直尺；划线板；[计]标尺",
    "example": "I learned the word \"ruler\" today.",
    "part": "n"
  },
  {
    "id": "pet-2209",
    "library": "pet",
    "word": "run",
    "meaning": "跑,赛跑,奔跑,奔跑的路程,趋向,流出,运转时间,连续；跑,奔跑,跑步,赛跑,竞赛,行驶,运转,进行,蔓延；使跑,参赛,追究,驾驶,开动,管理,经营,使流出,运行",
    "example": "I learned the word \"run\" today.",
    "part": "v"
  },
  {
    "id": "pet-2210",
    "library": "pet",
    "word": "ring back",
    "meaning": "回电话,再打电话",
    "example": "Try to use \"ring back\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2211",
    "library": "pet",
    "word": "runner",
    "meaning": "跑步者,赛跑者,送信人,走私船,操作者,滑槽；[化]碾碎机；压碎机",
    "example": "I learned the word \"runner\" today.",
    "part": "n"
  },
  {
    "id": "pet-2212",
    "library": "pet",
    "word": "ring up",
    "meaning": "(英)打电话,(美)把款项打在现金收入记录机上,在现金收入机上记录所付钱款；[计]环,圈",
    "example": "Try to use \"ring up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2213",
    "library": "pet",
    "word": "running",
    "meaning": "赛跑,流出,运转；a.流动的,跑着的,连续的",
    "example": "I learned the word \"running\" today.",
    "part": "n"
  },
  {
    "id": "pet-2214",
    "library": "pet",
    "word": "run out",
    "meaning": "跑出,离开,流逝,期满,被用完,被放出去,伸向,逐出；[法]背弃,遗弃,逃避",
    "example": "Try to use \"run out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2215",
    "library": "pet",
    "word": "rise",
    "meaning": "上升,增加,上涨,高地,升高,出现；升起,起身,起立,上升,上涨,增长,高耸,起义,浮现；使飞起",
    "example": "I learned the word \"rise\" today.",
    "part": "v"
  },
  {
    "id": "pet-2216",
    "library": "pet",
    "word": "river",
    "meaning": "河,江；[法]河流,江河,内河",
    "example": "I learned the word \"river\" today.",
    "part": "n"
  },
  {
    "id": "pet-2217",
    "library": "pet",
    "word": "road",
    "meaning": "路,道路,公路,途径,方法；[法]公路,道路,行车道",
    "example": "I learned the word \"road\" today.",
    "part": "n"
  },
  {
    "id": "pet-2218",
    "library": "pet",
    "word": "sad",
    "meaning": "a.忧愁的,悲哀的",
    "example": "I learned the word \"sad\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2219",
    "library": "pet",
    "word": "roast",
    "meaning": "烤肉,烘烤,嘲笑；a.烘烤的,烤过的；烤,炙,烘焙,嘲笑",
    "example": "I learned the word \"roast\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-2220",
    "library": "pet",
    "word": "safe",
    "meaning": "保险箱,冷藏室；a.安全的,可靠的,平安的,稳健的,有把握的",
    "example": "I learned the word \"safe\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2221",
    "library": "pet",
    "word": "rob",
    "meaning": "抢夺,抢掠,剥夺",
    "example": "I learned the word \"rob\" today.",
    "part": "v"
  },
  {
    "id": "pet-2222",
    "library": "pet",
    "word": "robot",
    "meaning": "机械人,自动机械,机械般工作的人；[计]机器人；自动机",
    "example": "I learned the word \"robot\" today.",
    "part": "n"
  },
  {
    "id": "pet-2223",
    "library": "pet",
    "word": "rock",
    "meaning": "岩石,岩礁,石头,基石,暗礁,摇动,摇滚乐；摇摆,摇动,使摇晃,使动摇；摇,摇动",
    "example": "I learned the word \"rock\" today.",
    "part": "n"
  },
  {
    "id": "pet-2224",
    "library": "pet",
    "word": "safely",
    "meaning": "安全地,确实地",
    "example": "I learned the word \"safely\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2225",
    "library": "pet",
    "word": "sail",
    "meaning": "帆,篷,帆船,航程,帆状物；航行,启航,张帆而行；航行于,驾船",
    "example": "I learned the word \"sail\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2226",
    "library": "pet",
    "word": "sailing",
    "meaning": "航行,航海术,启航；a.航行的",
    "example": "I learned the word \"sailing\" today.",
    "part": "n"
  },
  {
    "id": "pet-2227",
    "library": "pet",
    "word": "rocket",
    "meaning": "火箭,烟火；急升,猛涨,飞驰；用火箭运载",
    "example": "I learned the word \"rocket\" today.",
    "part": "n"
  },
  {
    "id": "pet-2228",
    "library": "pet",
    "word": "salad",
    "meaning": "色拉",
    "example": "I learned the word \"salad\" today.",
    "part": "n"
  },
  {
    "id": "pet-2229",
    "library": "pet",
    "word": "salary",
    "meaning": "薪水；给...加薪",
    "example": "I learned the word \"salary\" today.",
    "part": "n"
  },
  {
    "id": "pet-2230",
    "library": "pet",
    "word": "sale",
    "meaning": "出售,卖,拍卖,销售额,廉价出售；[经]卖,出售；销售(货)",
    "example": "I learned the word \"sale\" today.",
    "part": "n"
  },
  {
    "id": "pet-2231",
    "library": "pet",
    "word": "role",
    "meaning": "角色,职责,任务；[医]作用,功用",
    "example": "I learned the word \"role\" today.",
    "part": "n"
  },
  {
    "id": "pet-2232",
    "library": "pet",
    "word": "salesman",
    "meaning": "售货员,推销员；[经]售货员,店员,推销员",
    "example": "I learned the word \"salesman\" today.",
    "part": "n",
    "aliases": [
      "salesman/saleswoman",
      "saleswoman"
    ]
  },
  {
    "id": "pet-2233",
    "library": "pet",
    "word": "roll",
    "meaning": "卷,滚动,名单,案卷,压路机；滚,滚动,飘流,起伏,卷,绕；使滚动,卷,绕",
    "example": "I learned the word \"roll\" today.",
    "part": "n"
  },
  {
    "id": "pet-2234",
    "library": "pet",
    "word": "salmon",
    "meaning": "鲑鱼,大麻哈鱼；[医]鲑",
    "example": "I learned the word \"salmon\" today.",
    "part": "n"
  },
  {
    "id": "pet-2235",
    "library": "pet",
    "word": "salt",
    "meaning": "盐,风趣,刺激；a.含盐的,咸的,风趣的,辛辣的；加盐于,用盐腌",
    "example": "I learned the word \"salt\" today.",
    "part": "n"
  },
  {
    "id": "pet-2236",
    "library": "pet",
    "word": "same",
    "meaning": "a.相同的,同样的；相同的人(或事物)；同样地",
    "example": "I learned the word \"same\" today.",
    "part": "adj, pron & adv"
  },
  {
    "id": "pet-2237",
    "library": "pet",
    "word": "romance",
    "meaning": "冒险故事,浪漫史,传奇文学；写传奇,作空想,虚构",
    "example": "I learned the word \"romance\" today.",
    "part": "n"
  },
  {
    "id": "pet-2238",
    "library": "pet",
    "word": "romantic",
    "meaning": "a.浪漫的,风流的,传奇性的,夸大的,空想的,浪漫派的",
    "example": "I learned the word \"romantic\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2239",
    "library": "pet",
    "word": "roof",
    "meaning": "屋顶,室顶；给...盖屋顶,遮蔽",
    "example": "I learned the word \"roof\" today.",
    "part": "n"
  },
  {
    "id": "pet-2240",
    "library": "pet",
    "word": "room",
    "meaning": "房间,空位,场所；住宿,居住；留宿",
    "example": "I learned the word \"room\" today.",
    "part": "n"
  },
  {
    "id": "pet-2241",
    "library": "pet",
    "word": "sand",
    "meaning": "沙,沙子,沙滩,光阴,生涯；撒沙,以沙掩盖",
    "example": "I learned the word \"sand\" today.",
    "part": "n"
  },
  {
    "id": "pet-2242",
    "library": "pet",
    "word": "rope",
    "meaning": "绳,索,粗绳,绞索,决窍；捆,缚,绑,圈起,以绳将...系住；拧成绳状",
    "example": "I learned the word \"rope\" today.",
    "part": "n"
  },
  {
    "id": "pet-2243",
    "library": "pet",
    "word": "sandal",
    "meaning": "凉鞋,拖鞋,檀香木；穿以便鞋",
    "example": "I learned the word \"sandal\" today.",
    "part": "n"
  },
  {
    "id": "pet-2244",
    "library": "pet",
    "word": "rose",
    "meaning": "玫瑰,蔷薇,玫瑰色；a.玫瑰色的,玫瑰花的；使成玫瑰色",
    "example": "I learned the word \"rose\" today.",
    "part": "n"
  },
  {
    "id": "pet-2245",
    "library": "pet",
    "word": "sandwich",
    "meaning": "三明治,夹心面包,夹层板；插入,夹入,把...制成三明治",
    "example": "I learned the word \"sandwich\" today.",
    "part": "n"
  },
  {
    "id": "pet-2246",
    "library": "pet",
    "word": "rough",
    "meaning": "粗糙的东西,毛坯,未加工品,梗概,草图,暴徒,艰难；a.粗糙的,粗暴的,蓬乱的,草率的,大致的,简陋的,暴风雨的,艰难的；使粗糙,使不平,使蓬乱,粗制,草拟,粗暴对待,对...动粗",
    "example": "I learned the word \"rough\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2247",
    "library": "pet",
    "word": "satisfactory",
    "meaning": "a.满意的,赎罪的；[法]令人满意的,令当事人满意的,充分的",
    "example": "I learned the word \"satisfactory\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2248",
    "library": "pet",
    "word": "satisfied",
    "meaning": "a.感到满意的",
    "example": "I learned the word \"satisfied\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2249",
    "library": "pet",
    "word": "sauce",
    "meaning": "酱油,调味汁,酱；给...调味,使增加趣味",
    "example": "I learned the word \"sauce\" today.",
    "part": "n"
  },
  {
    "id": "pet-2250",
    "library": "pet",
    "word": "saucepan",
    "meaning": "(长柄有盖)深平底锅,炖锅",
    "example": "I learned the word \"saucepan\" today.",
    "part": "n"
  },
  {
    "id": "pet-2251",
    "library": "pet",
    "word": "round",
    "meaning": "圆,圆形物,巡回,循环,一轮,一回合,一局,范围,轮唱；a.圆的,球形的,丰满的,肥胖的,完全的,大概的,完美的,圆润的；围着,附近,绕过,在...周围",
    "example": "I learned the word \"round\" today.",
    "part": "adj, adv & prep"
  },
  {
    "id": "pet-2252",
    "library": "pet",
    "word": "saucer",
    "meaning": "茶碟,茶托；[医]碟",
    "example": "I learned the word \"saucer\" today.",
    "part": "n"
  },
  {
    "id": "pet-2253",
    "library": "pet",
    "word": "sausage",
    "meaning": "香肠,腊肠",
    "example": "I learned the word \"sausage\" today.",
    "part": "n"
  },
  {
    "id": "pet-2254",
    "library": "pet",
    "word": "save",
    "meaning": "救球；解救,挽救,储蓄,保存,节省,保留；挽救,节省,救球",
    "example": "I learned the word \"save\" today.",
    "part": "v"
  },
  {
    "id": "pet-2255",
    "library": "pet",
    "word": "roundabout",
    "meaning": "a.迂回的,委婉的；迂回路线",
    "example": "I learned the word \"roundabout\" today.",
    "part": "n"
  },
  {
    "id": "pet-2256",
    "library": "pet",
    "word": "route",
    "meaning": "路径,途径,路线；确定路线,按规定路线发送；[计]传递,路由设定程序",
    "example": "I learned the word \"route\" today.",
    "part": "n"
  },
  {
    "id": "pet-2257",
    "library": "pet",
    "word": "routine",
    "meaning": "常规,日常工作,惯例,例行公事；a.日常的,常规的；[计]例程",
    "example": "I learned the word \"routine\" today.",
    "part": "n"
  },
  {
    "id": "pet-2258",
    "library": "pet",
    "word": "say",
    "meaning": "说,讲,念,说明,指明；说,讲；意见,发言权",
    "example": "I learned the word \"say\" today.",
    "part": "v"
  },
  {
    "id": "pet-2259",
    "library": "pet",
    "word": "row",
    "meaning": "排,行,街道,划船,吵闹；使成排,划,划船,参加(赛船),痛骂；划船,划动,争吵",
    "example": "I learned the word \"row\" today.",
    "part": "n"
  },
  {
    "id": "pet-2260",
    "library": "pet",
    "word": "rubber",
    "meaning": "橡皮,橡胶,做摩擦动作的人,按摩师,决胜盘；用橡胶制造,涂橡胶于",
    "example": "I learned the word \"rubber\" today.",
    "part": "n"
  },
  {
    "id": "pet-2261",
    "library": "pet",
    "word": "scared",
    "meaning": "a.害怕的,担惊受怕的,惊慌的,吓坏了的",
    "example": "I learned the word \"scared\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2262",
    "library": "pet",
    "word": "scarf",
    "meaning": "围巾,头巾,领带,领巾,嵌接；用围巾围,嵌接",
    "example": "I learned the word \"scarf\" today.",
    "part": "n"
  },
  {
    "id": "pet-2263",
    "library": "pet",
    "word": "rubbish",
    "meaning": "废物,垃圾,胡说",
    "example": "I learned the word \"rubbish\" today.",
    "part": "n"
  },
  {
    "id": "pet-2264",
    "library": "pet",
    "word": "scary",
    "meaning": "a.容易受惊的,胆小的,提心吊胆的",
    "example": "I learned the word \"scary\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2265",
    "library": "pet",
    "word": "rude",
    "meaning": "a.粗鲁无礼的,粗陋的,粗暴的,原始的,未开化的,大略的,崎岖不平的,狂暴的",
    "example": "I learned the word \"rude\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2266",
    "library": "pet",
    "word": "scene",
    "meaning": "场,情景,镜头,发生地点,道具,布景,景色；[化]现场",
    "example": "I learned the word \"scene\" today.",
    "part": "n"
  },
  {
    "id": "pet-2267",
    "library": "pet",
    "word": "rug",
    "meaning": "小块地毯,揭露某人",
    "example": "I learned the word \"rug\" today.",
    "part": "n"
  },
  {
    "id": "pet-2268",
    "library": "pet",
    "word": "scenery",
    "meaning": "风景,景色,舞台布景",
    "example": "I learned the word \"scenery\" today.",
    "part": "n"
  },
  {
    "id": "pet-2269",
    "library": "pet",
    "word": "rugby",
    "meaning": "橄榄球,橄榄球赛",
    "example": "I learned the word \"rugby\" today.",
    "part": "n"
  },
  {
    "id": "pet-2270",
    "library": "pet",
    "word": "school",
    "meaning": "学校,鱼群,门派,学派；教育,训练,培养；成群地游",
    "example": "I learned the word \"school\" today.",
    "part": "n"
  },
  {
    "id": "pet-2271",
    "library": "pet",
    "word": "ruin",
    "meaning": "毁灭,推翻,废墟；毁灭,衰败,破坏,破产,堕落；使毁灭,毁坏,使破产",
    "example": "I learned the word \"ruin\" today.",
    "part": "n"
  },
  {
    "id": "pet-2272",
    "library": "pet",
    "word": "schoolchild",
    "meaning": "学童",
    "example": "I learned the word \"schoolchild\" today.",
    "part": "n"
  },
  {
    "id": "pet-2273",
    "library": "pet",
    "word": "rule",
    "meaning": "规则,统治,控制,支配,规律,标准,章程,破折号,铅线；规定,统治,管理,控制,支配,裁决；统治,管辖,裁定",
    "example": "I learned the word \"rule\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2274",
    "library": "pet",
    "word": "science",
    "meaning": "科学,学科,学问,自然科学；[医]科学",
    "example": "I learned the word \"science\" today.",
    "part": "n"
  },
  {
    "id": "pet-2275",
    "library": "pet",
    "word": "science fiction",
    "meaning": "科幻,科学幻想小说；科幻小说",
    "example": "Try to use \"science fiction\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2276",
    "library": "pet",
    "word": "scientific",
    "meaning": "a.科学的,系统的,符合科学规律的；[计]科学记数法",
    "example": "I learned the word \"scientific\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2277",
    "library": "pet",
    "word": "scientist",
    "meaning": "科学家；[医]科学家",
    "example": "I learned the word \"scientist\" today.",
    "part": "n"
  },
  {
    "id": "pet-2278",
    "library": "pet",
    "word": "service",
    "meaning": "服务,贡献,雇佣,公职,服役,功劳,仪式,送达,行政部门；保养,维修；a.武装部队的,服务性的,仆人的,耐用的",
    "example": "I learned the word \"service\" today.",
    "part": "n"
  },
  {
    "id": "pet-2279",
    "library": "pet",
    "word": "scissors",
    "meaning": "pl.剪刀；[医]剪",
    "example": "I learned the word \"scissors\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-2280",
    "library": "pet",
    "word": "scooter",
    "meaning": "小型摩托车,踏板车；[机]机车",
    "example": "I learned the word \"scooter\" today.",
    "part": "n"
  },
  {
    "id": "pet-2281",
    "library": "pet",
    "word": "score",
    "meaning": "得分,抓痕,二十个,刻痕,帐目,乐谱,起跑线,终点线,大量；刻划,划线,获得,评价,把...记下；刻痕,记分,得分",
    "example": "I learned the word \"score\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2282",
    "library": "pet",
    "word": "session",
    "meaning": "期间,开庭期,会议,学期；[计]会话,对话,会晤,通用任务程序",
    "example": "I learned the word \"session\" today.",
    "part": "n"
  },
  {
    "id": "pet-2283",
    "library": "pet",
    "word": "set",
    "meaning": "日落,同伙,组合,集合,装置；放,安置,放置,设定,使凝结,点燃,确定,点缀,使就位,树立,分配,调整；日落,凝固,定型,搁住,结果,适合",
    "example": "I learned the word \"set\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2284",
    "library": "pet",
    "word": "scream",
    "meaning": "尖叫声；尖叫,大笑,尖啸,令人震惊；尖叫着说,大叫大嚷着要求",
    "example": "I learned the word \"scream\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2285",
    "library": "pet",
    "word": "set off",
    "meaning": "出发,开始,引起,衬托,点缀,抵销,分开,划分；[法]抵销",
    "example": "Try to use \"set off\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2286",
    "library": "pet",
    "word": "screen",
    "meaning": "幕,银幕,屏风,掩蔽物,屏蔽,筛子；掩蔽,放映,拍摄,掩护,筛,甄别；拍电影",
    "example": "I learned the word \"screen\" today.",
    "part": "n"
  },
  {
    "id": "pet-2287",
    "library": "pet",
    "word": "sculpture",
    "meaning": "雕刻,雕塑；雕刻,雕塑；当雕刻师",
    "example": "I learned the word \"sculpture\" today.",
    "part": "n"
  },
  {
    "id": "pet-2288",
    "library": "pet",
    "word": "set out",
    "meaning": "出发,开始,陈列,宣布,陈述,栽种,设计...的布局,测定；[法]发表,宣布,打算",
    "example": "Try to use \"set out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2289",
    "library": "pet",
    "word": "sea",
    "meaning": "海,海洋,海浪,大量；[法]海,海洋",
    "example": "I learned the word \"sea\" today.",
    "part": "n"
  },
  {
    "id": "pet-2290",
    "library": "pet",
    "word": "search",
    "meaning": "搜寻,查究；搜寻,搜查,探求,调查,搜索；[计]搜索,路径检索程序",
    "example": "I learned the word \"search\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2291",
    "library": "pet",
    "word": "set up",
    "meaning": "设立；[化]调定；装置妥",
    "example": "Try to use \"set up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2292",
    "library": "pet",
    "word": "seaside",
    "meaning": "a.海边的,海滨的；海滨",
    "example": "I learned the word \"seaside\" today.",
    "part": "n"
  },
  {
    "id": "pet-2293",
    "library": "pet",
    "word": "season",
    "meaning": "季节,时节,当令期,时期；给...调味,使成熟,使老练,缓和；变干燥",
    "example": "I learned the word \"season\" today.",
    "part": "n"
  },
  {
    "id": "pet-2294",
    "library": "pet",
    "word": "seat",
    "meaning": "座,座位,位子,席位,所在地；使坐下,使就座,为...设座于,使就职；安装在底座上",
    "example": "I learned the word \"seat\" today.",
    "part": "n"
  },
  {
    "id": "pet-2295",
    "library": "pet",
    "word": "several",
    "meaning": "a.几个的,一些的,各自的；几个",
    "example": "I learned the word \"several\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-2296",
    "library": "pet",
    "word": "seat belt",
    "meaning": "安全带",
    "example": "Try to use \"seat belt\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2297",
    "library": "pet",
    "word": "sew",
    "meaning": "缝纫,缝合,缝；缝纫",
    "example": "I learned the word \"sew\" today.",
    "part": "v"
  },
  {
    "id": "pet-2298",
    "library": "pet",
    "word": "second",
    "meaning": "秒,瞬间,第二名,支持者,助手；a.第二的,其次的,次要的,附加的,辅助的；num.第二",
    "example": "I learned the word \"second\" today.",
    "part": "adv, det & n"
  },
  {
    "id": "pet-2299",
    "library": "pet",
    "word": "sex",
    "meaning": "性别,性欲；区别...的性别,引起...的性欲",
    "example": "I learned the word \"sex\" today.",
    "part": "n"
  },
  {
    "id": "pet-2300",
    "library": "pet",
    "word": "shade",
    "meaning": "荫,阴暗,遮光物,灯罩,帘,浓淡,微量,底纹；渐变；使阴暗,使渐变,遮蔽,微减",
    "example": "I learned the word \"shade\" today.",
    "part": "n"
  },
  {
    "id": "pet-2301",
    "library": "pet",
    "word": "shadow",
    "meaning": "阴影,荫,影子,影像,阴暗,幽灵,少许,隐蔽处,庇护；遮蔽,使朦胧,预示,尾随；渐变,变阴暗",
    "example": "I learned the word \"shadow\" today.",
    "part": "n"
  },
  {
    "id": "pet-2302",
    "library": "pet",
    "word": "shake",
    "meaning": "摇动,震动；摇动,动摇,使震动,挥舞；震动,发抖,动摇",
    "example": "I learned the word \"shake\" today.",
    "part": "v"
  },
  {
    "id": "pet-2303",
    "library": "pet",
    "word": "secondary",
    "meaning": "a.中级的,中等的,次要的,第二的,从属的,辅助的；[化]仲(指CH-3...CH(CH-3)-型支链烃基或指二元胺及R-2CHOH型的醇)；第二",
    "example": "I learned the word \"secondary\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2304",
    "library": "pet",
    "word": "shall",
    "meaning": "aux.将",
    "example": "I learned the word \"shall\" today.",
    "part": "mv"
  },
  {
    "id": "pet-2305",
    "library": "pet",
    "word": "shame",
    "meaning": "羞耻,羞愧,耻辱；使羞愧,侮辱",
    "example": "I learned the word \"shame\" today.",
    "part": "n"
  },
  {
    "id": "pet-2306",
    "library": "pet",
    "word": "second-hand",
    "meaning": "a.用过的,旧货的,旧的,间接的,传来的,第二手的；[机]半新的,旧货",
    "example": "I learned the word \"second-hand\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-2307",
    "library": "pet",
    "word": "shampoo",
    "meaning": "洗头,洗发剂；洗头,洗发",
    "example": "I learned the word \"shampoo\" today.",
    "part": "n"
  },
  {
    "id": "pet-2308",
    "library": "pet",
    "word": "secret",
    "meaning": "秘密,机密,秘诀,秘方；a.秘密的,极机密的,隐蔽的,暗中的,神秘的,偏僻的",
    "example": "I learned the word \"secret\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2309",
    "library": "pet",
    "word": "shape",
    "meaning": "形状,形态,外形,形式,身材；定形,使成形,塑造,计划,使符合；成形,形成,成长",
    "example": "I learned the word \"shape\" today.",
    "part": "n"
  },
  {
    "id": "pet-2310",
    "library": "pet",
    "word": "secretary",
    "meaning": "秘书,书记,大臣；[经]秘书",
    "example": "I learned the word \"secretary\" today.",
    "part": "n"
  },
  {
    "id": "pet-2311",
    "library": "pet",
    "word": "share",
    "meaning": "部分,参与,一份,参股,份额；均分,分担,分享,分配,共有；分享",
    "example": "I learned the word \"share\" today.",
    "part": "v"
  },
  {
    "id": "pet-2312",
    "library": "pet",
    "word": "section",
    "meaning": "区段,部分,区域,节,截面,处,科,区,扇区；把...分段,把...切片；被切成片",
    "example": "I learned the word \"section\" today.",
    "part": "n"
  },
  {
    "id": "pet-2313",
    "library": "pet",
    "word": "shark",
    "meaning": "鲨鱼,骗子；诈骗",
    "example": "I learned the word \"shark\" today.",
    "part": "n"
  },
  {
    "id": "pet-2314",
    "library": "pet",
    "word": "security",
    "meaning": "安全,安全性,防护物,保安,可靠性,担保人,抵押品,保证金；[计]安全性,保密性,安全检查程序",
    "example": "I learned the word \"security\" today.",
    "part": "n"
  },
  {
    "id": "pet-2315",
    "library": "pet",
    "word": "sharp",
    "meaning": "半升音调,利刃,骗子；a.锋利的,明显的,敏锐的,急剧的,尖刻的,严厉的,刺耳的,精明的；锐利地,急速地",
    "example": "I learned the word \"sharp\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2316",
    "library": "pet",
    "word": "see",
    "meaning": "看见,查看,参观,游览,理解,知道,同意；看,观看,注意,知道,考虑；主教的职位",
    "example": "I learned the word \"see\" today.",
    "part": "v"
  },
  {
    "id": "pet-2317",
    "library": "pet",
    "word": "shave",
    "meaning": "修面,刮胡子,幸免,剃刀；修面,剃,修剪,掠过；刮脸,勉强通过",
    "example": "I learned the word \"shave\" today.",
    "part": "v"
  },
  {
    "id": "pet-2318",
    "library": "pet",
    "word": "she",
    "meaning": "她",
    "example": "I learned the word \"she\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2319",
    "library": "pet",
    "word": "seem",
    "meaning": "象是,似乎",
    "example": "I learned the word \"seem\" today.",
    "part": "v"
  },
  {
    "id": "pet-2320",
    "library": "pet",
    "word": "sheep",
    "meaning": "羊,胆小者",
    "example": "I learned the word \"sheep\" today.",
    "part": "n"
  },
  {
    "id": "pet-2321",
    "library": "pet",
    "word": "select",
    "meaning": "a.挑选出来的,极好的；选择,挑选；被挑选者,精萃",
    "example": "I learned the word \"select\" today.",
    "part": "v"
  },
  {
    "id": "pet-2322",
    "library": "pet",
    "word": "sheet",
    "meaning": "床单,张,纸张,印刷品,裹尸布,薄片；盖上被单,遍布；大片落下",
    "example": "I learned the word \"sheet\" today.",
    "part": "n"
  },
  {
    "id": "pet-2323",
    "library": "pet",
    "word": "selfie",
    "meaning": "自拍照",
    "example": "I learned the word \"selfie\" today.",
    "part": "n"
  },
  {
    "id": "pet-2324",
    "library": "pet",
    "word": "selfish",
    "meaning": "a.自私的,利己主义的,自我中心的",
    "example": "I learned the word \"selfish\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2325",
    "library": "pet",
    "word": "self-service",
    "meaning": "自我服务,自助式销售；[法]自助,顾客自理,无人售货",
    "example": "I learned the word \"self-service\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2326",
    "library": "pet",
    "word": "shelf",
    "meaning": "架子,搁板；[化]架子",
    "example": "I learned the word \"shelf\" today.",
    "part": "n"
  },
  {
    "id": "pet-2327",
    "library": "pet",
    "word": "sell",
    "meaning": "卖,背叛,销售,出卖；卖,销售；卖,推销术,失望",
    "example": "I learned the word \"sell\" today.",
    "part": "v"
  },
  {
    "id": "pet-2328",
    "library": "pet",
    "word": "shine",
    "meaning": "光泽,阳光；使发光；照耀,发光,发亮",
    "example": "I learned the word \"shine\" today.",
    "part": "v"
  },
  {
    "id": "pet-2329",
    "library": "pet",
    "word": "send",
    "meaning": "发送,使进入,寄,派遣,发射,使陷于；寄信,派人,播送；(船的)上升运动",
    "example": "I learned the word \"send\" today.",
    "part": "v"
  },
  {
    "id": "pet-2330",
    "library": "pet",
    "word": "shiny",
    "meaning": "a.有光泽的,发光的,辉煌的,磨光的,磨损的",
    "example": "I learned the word \"shiny\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2331",
    "library": "pet",
    "word": "sense",
    "meaning": "感应,感觉,感官,意识,观念,情理,知觉,理智；感觉,觉察,检测；[计]阅读",
    "example": "I learned the word \"sense\" today.",
    "part": "n"
  },
  {
    "id": "pet-2332",
    "library": "pet",
    "word": "ship",
    "meaning": "船,舰；以船运送,装船,运送；上船,乘船",
    "example": "I learned the word \"ship\" today.",
    "part": "n"
  },
  {
    "id": "pet-2333",
    "library": "pet",
    "word": "sensible",
    "meaning": "a.有感觉的,敏感的,明智的；[医]可感觉的",
    "example": "I learned the word \"sensible\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2334",
    "library": "pet",
    "word": "shirt",
    "meaning": "衬衫,内衣,汗衫",
    "example": "I learned the word \"shirt\" today.",
    "part": "n"
  },
  {
    "id": "pet-2335",
    "library": "pet",
    "word": "sentence",
    "meaning": "句子,命题,宣判；宣判,判决；[计]句子",
    "example": "I learned the word \"sentence\" today.",
    "part": "n"
  },
  {
    "id": "pet-2336",
    "library": "pet",
    "word": "shock",
    "meaning": "震动,冲突,震惊,冲击,突击,禾束堆,休克,长毛狗；使震动,使休克,使受电击,震惊得；震动,吓人",
    "example": "I learned the word \"shock\" today.",
    "part": "n"
  },
  {
    "id": "pet-2337",
    "library": "pet",
    "word": "separate",
    "meaning": "独立件,抽印本；a.分开的,各别的,单独的,分隔的；分开,隔开,分居",
    "example": "I learned the word \"separate\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2338",
    "library": "pet",
    "word": "shocked",
    "meaning": "a.震撼的；震惊的",
    "example": "I learned the word \"shocked\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2339",
    "library": "pet",
    "word": "series",
    "meaning": "串联,序列,连续,系列,丛书,套,级数,组；[计]系列",
    "example": "I learned the word \"series\" today.",
    "part": "n"
  },
  {
    "id": "pet-2340",
    "library": "pet",
    "word": "shocking",
    "meaning": "a.令人震惊的,极坏的,不正当的",
    "example": "I learned the word \"shocking\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2341",
    "library": "pet",
    "word": "shoe",
    "meaning": "鞋,靴,外胎；给...穿鞋,为马钉蹄铁",
    "example": "I learned the word \"shoe\" today.",
    "part": "n"
  },
  {
    "id": "pet-2342",
    "library": "pet",
    "word": "serious",
    "meaning": "a.严肃的,认真的,重要的,严重的；[电]严重的",
    "example": "I learned the word \"serious\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2343",
    "library": "pet",
    "word": "shoot",
    "meaning": "射击,狩猎,芽,射伤,发射,发芽,急流,推力,摄影,急送,滑运道,浪费；射击,射中,损毁,拍摄,喷出,投射,挥出,飞速行进,挥霍,给...注射；射出,射击,发出,拍电影,射门,发芽",
    "example": "I learned the word \"shoot\" today.",
    "part": "v"
  },
  {
    "id": "pet-2344",
    "library": "pet",
    "word": "shop",
    "meaning": "商店,工厂,车间；购物,到处寻找；选购",
    "example": "I learned the word \"shop\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2345",
    "library": "pet",
    "word": "seriously",
    "meaning": "严肃地,认真地,严重地",
    "example": "I learned the word \"seriously\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2346",
    "library": "pet",
    "word": "shop assistant",
    "meaning": "店员",
    "example": "Try to use \"shop assistant\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2347",
    "library": "pet",
    "word": "serve",
    "meaning": "可作...用,服务,经历,招待,供应,送交,对待；服务,服役,侍应,适合,有用,开球；发球,轮到发球",
    "example": "I learned the word \"serve\" today.",
    "part": "v"
  },
  {
    "id": "pet-2348",
    "library": "pet",
    "word": "shopping",
    "meaning": "买东西,购物；[经]购物,买东西",
    "example": "I learned the word \"shopping\" today.",
    "part": "n"
  },
  {
    "id": "pet-2349",
    "library": "pet",
    "word": "server",
    "meaning": "服伺者,上菜用具,发球员；服务器；[计]服务器,服务器启动程序,服务台程序",
    "example": "I learned the word \"server\" today.",
    "part": "n"
  },
  {
    "id": "pet-2350",
    "library": "pet",
    "word": "shore",
    "meaning": "海岸,海滨,斜撑柱；把...送上岸,支撑,支持",
    "example": "I learned the word \"shore\" today.",
    "part": "n"
  },
  {
    "id": "pet-2351",
    "library": "pet",
    "word": "short",
    "meaning": "a.短的,近的,矮的,短期的,简短的,少量的；简短地,突然；扼要,短片,缺乏",
    "example": "I learned the word \"short\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2352",
    "library": "pet",
    "word": "sit",
    "meaning": "坐,就座,坐落；使就座,骑；坐,衣服合身",
    "example": "I learned the word \"sit\" today.",
    "part": "v"
  },
  {
    "id": "pet-2353",
    "library": "pet",
    "word": "shortly",
    "meaning": "不久,简短,唐突地",
    "example": "I learned the word \"shortly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2354",
    "library": "pet",
    "word": "sit down",
    "meaning": "坐下,占据,参加静坐罢工(或示威)",
    "example": "Try to use \"sit down\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2355",
    "library": "pet",
    "word": "shorts",
    "meaning": "短裤,(美)男人的短衬裤；[经]空头户,空头,短期债券",
    "example": "I learned the word \"shorts\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-2356",
    "library": "pet",
    "word": "site",
    "meaning": "位置,场所,地点；给...择址",
    "example": "I learned the word \"site\" today.",
    "part": "n"
  },
  {
    "id": "pet-2357",
    "library": "pet",
    "word": "sitting room",
    "meaning": "起居室",
    "example": "Try to use \"sitting room\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2358",
    "library": "pet",
    "word": "should",
    "meaning": "aux.应该,将要",
    "example": "I learned the word \"should\" today.",
    "part": "mv"
  },
  {
    "id": "pet-2359",
    "library": "pet",
    "word": "situated",
    "meaning": "a.位于...的,坐落在...的,处于某种境地的；[法]坐落...的,位于...的,处于某种境地的",
    "example": "I learned the word \"situated\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2360",
    "library": "pet",
    "word": "shoulder",
    "meaning": "肩,肩膀,衣肩；肩负,负担,担任；用肩推挤",
    "example": "I learned the word \"shoulder\" today.",
    "part": "n"
  },
  {
    "id": "pet-2361",
    "library": "pet",
    "word": "situation",
    "meaning": "情形,境遇,位置；[医]情境,处境",
    "example": "I learned the word \"situation\" today.",
    "part": "n"
  },
  {
    "id": "pet-2362",
    "library": "pet",
    "word": "size",
    "meaning": "大小,尺寸,规模,尺码,能力,浆料；上浆,依大小排列；可比拟",
    "example": "I learned the word \"size\" today.",
    "part": "n"
  },
  {
    "id": "pet-2363",
    "library": "pet",
    "word": "shout",
    "meaning": "呼喊,喊声；呼喊,喊叫,嚷；高喊",
    "example": "I learned the word \"shout\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2364",
    "library": "pet",
    "word": "show",
    "meaning": "显示,表现,展览,卖弄,炫耀,外观,演出,洋相；表示,显示,展现,陈列,演出,表明,指出,带领；露面,显现,演出",
    "example": "I learned the word \"show\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2365",
    "library": "pet",
    "word": "skate",
    "meaning": "溜冰,冰鞋；滑冰,滑过",
    "example": "I learned the word \"skate\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2366",
    "library": "pet",
    "word": "skateboard",
    "meaning": "溜冰板",
    "example": "I learned the word \"skateboard\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2367",
    "library": "pet",
    "word": "skateboarding",
    "meaning": "滑板运动",
    "example": "I learned the word \"skateboarding\" today.",
    "part": "n"
  },
  {
    "id": "pet-2368",
    "library": "pet",
    "word": "skating",
    "meaning": "溜冰",
    "example": "I learned the word \"skating\" today.",
    "part": "n"
  },
  {
    "id": "pet-2369",
    "library": "pet",
    "word": "ski",
    "meaning": "滑雪橇；滑雪",
    "example": "I learned the word \"ski\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2370",
    "library": "pet",
    "word": "skiing",
    "meaning": "滑雪运动,滑雪术",
    "example": "I learned the word \"skiing\" today.",
    "part": "n"
  },
  {
    "id": "pet-2371",
    "library": "pet",
    "word": "shower",
    "meaning": "阵雨,淋浴,一阵,展出者,显示者；淋浴,下阵雨；淋湿,倾注",
    "example": "I learned the word \"shower\" today.",
    "part": "n"
  },
  {
    "id": "pet-2372",
    "library": "pet",
    "word": "skill",
    "meaning": "技术,技巧,技能,熟练,熟练工人；[化]技能",
    "example": "I learned the word \"skill\" today.",
    "part": "n"
  },
  {
    "id": "pet-2373",
    "library": "pet",
    "word": "skin",
    "meaning": "皮肤,皮；剥皮,在...植皮；长皮,愈合,蜕皮",
    "example": "I learned the word \"skin\" today.",
    "part": "n"
  },
  {
    "id": "pet-2374",
    "library": "pet",
    "word": "skirt",
    "meaning": "裙子,下摆,边缘,郊区；位于...边缘,绕过,回避；位于边缘",
    "example": "I learned the word \"skirt\" today.",
    "part": "n"
  },
  {
    "id": "pet-2375",
    "library": "pet",
    "word": "shut",
    "meaning": "关闭；关上,闭起,幽禁,合拢,轧住；关上,停止营业",
    "example": "I learned the word \"shut\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-2376",
    "library": "pet",
    "word": "sky",
    "meaning": "天空,天色,天堂；击向空中,挂在高处；高涨",
    "example": "I learned the word \"sky\" today.",
    "part": "n"
  },
  {
    "id": "pet-2377",
    "library": "pet",
    "word": "shy",
    "meaning": "惊跳,惊避；a.胆怯的,畏缩的,迟疑的,羞怯的；惊退,乱投,乱掷,厌恶,避开",
    "example": "I learned the word \"shy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2378",
    "library": "pet",
    "word": "sleep",
    "meaning": "睡眠,静止,昏迷,麻木,长眠,冬眠；睡觉,睡眠,静止；睡",
    "example": "I learned the word \"sleep\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2379",
    "library": "pet",
    "word": "sick",
    "meaning": "病人；a.不舒服,有病的,恶心的,厌恶的,渴望的,病态的；呕吐,追击,使(狗)去攻击",
    "example": "I learned the word \"sick\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2380",
    "library": "pet",
    "word": "side",
    "meaning": "旁边,侧,方面,胁,侧边,血统；a.旁的,侧的,次要的；同意,支持",
    "example": "I learned the word \"side\" today.",
    "part": "n"
  },
  {
    "id": "pet-2381",
    "library": "pet",
    "word": "sleeve",
    "meaning": "袖子,套管；缝上袖子",
    "example": "I learned the word \"sleeve\" today.",
    "part": "n"
  },
  {
    "id": "pet-2382",
    "library": "pet",
    "word": "sight",
    "meaning": "景观,视力,眼界,阅读,见解,意见；看见,瞄准；瞄准,观看",
    "example": "I learned the word \"sight\" today.",
    "part": "n"
  },
  {
    "id": "pet-2383",
    "library": "pet",
    "word": "slice",
    "meaning": "薄的切片,一部分,菜刀；切成薄片,切下；切",
    "example": "I learned the word \"slice\" today.",
    "part": "n"
  },
  {
    "id": "pet-2384",
    "library": "pet",
    "word": "slightly",
    "meaning": "些微地,苗条地",
    "example": "I learned the word \"slightly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2385",
    "library": "pet",
    "word": "slim",
    "meaning": "a.瘦的,苗条的,微小的,稀少的,微薄的；变苗条；使苗条",
    "example": "I learned the word \"slim\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2386",
    "library": "pet",
    "word": "sightseeing",
    "meaning": "观光,游览；a.观光的,游览的",
    "example": "I learned the word \"sightseeing\" today.",
    "part": "n"
  },
  {
    "id": "pet-2387",
    "library": "pet",
    "word": "slip",
    "meaning": "滑,滑行,事故,溜,差错,滑台,下降,插条,后裔,板条,瘦长的年轻人；滑动,滑倒,失足,溜走,滑落,犯错,变坏；使滑动,滑过,摆脱,闪开,塞入,从...取接枝",
    "example": "I learned the word \"slip\" today.",
    "part": "v"
  },
  {
    "id": "pet-2388",
    "library": "pet",
    "word": "sign",
    "meaning": "符号,招牌,征兆,正负号,手势；签名,打手势表达；签名",
    "example": "I learned the word \"sign\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2389",
    "library": "pet",
    "word": "slow",
    "meaning": "a.慢的,缓慢的,迟缓的,迟钝的,冷漠的,落后的；慢地,迟缓地；(使)慢下来",
    "example": "I learned the word \"slow\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2390",
    "library": "pet",
    "word": "slowly",
    "meaning": "慢慢地,迟缓地",
    "example": "I learned the word \"slowly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2391",
    "library": "pet",
    "word": "small",
    "meaning": "a.小的,少的,小型的,低微的,小气的,细微的；些微地；狭小部分",
    "example": "I learned the word \"small\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2392",
    "library": "pet",
    "word": "smart",
    "meaning": "a.聪明的,漂亮的,刺痛的,剧烈的,敏捷的,巧妙的,伶俐的,潇洒的；刺痛,痛苦；刺痛",
    "example": "I learned the word \"smart\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2393",
    "library": "pet",
    "word": "signal",
    "meaning": "信号,暗号,近因,导火线；向...作信号,标志,用信号通知；发信号",
    "example": "I learned the word \"signal\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2394",
    "library": "pet",
    "word": "signature",
    "meaning": "签字,识别标志,调号；[计]签名附件",
    "example": "I learned the word \"signature\" today.",
    "part": "n"
  },
  {
    "id": "pet-2395",
    "library": "pet",
    "word": "signpost",
    "meaning": "招牌柱,广告柱,路标",
    "example": "I learned the word \"signpost\" today.",
    "part": "n"
  },
  {
    "id": "pet-2396",
    "library": "pet",
    "word": "smartphone",
    "meaning": "智能手机",
    "example": "I learned the word \"smartphone\" today.",
    "part": "n"
  },
  {
    "id": "pet-2397",
    "library": "pet",
    "word": "sign up",
    "meaning": "签约参加工作,签约雇用",
    "example": "Try to use \"sign up\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-2398",
    "library": "pet",
    "word": "smell",
    "meaning": "味道,气味,嗅觉,嗅,臭味,气息；闻,探出,察觉,发出...的气味；嗅,散发气味,发臭",
    "example": "I learned the word \"smell\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2399",
    "library": "pet",
    "word": "smile",
    "meaning": "微笑,喜色,笑容；微笑,觉得好笑；微笑着表示",
    "example": "I learned the word \"smile\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2400",
    "library": "pet",
    "word": "silence",
    "meaning": "沉默,无声,静寂,湮没,无声息；使缄默；interj.安静",
    "example": "I learned the word \"silence\" today.",
    "part": "n"
  },
  {
    "id": "pet-2401",
    "library": "pet",
    "word": "smoke",
    "meaning": "烟,雾气,烟熏剂,抽烟,烟色；吸烟,冒烟,弥漫；以烟熏,抽烟而导致...",
    "example": "I learned the word \"smoke\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2402",
    "library": "pet",
    "word": "silent",
    "meaning": "a.沉默的,安静的,无声的,静止的；[医]静止的,无症状的",
    "example": "I learned the word \"silent\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2403",
    "library": "pet",
    "word": "smoking",
    "meaning": "抽烟,冒烟；[医]烟熏；吸烟",
    "example": "I learned the word \"smoking\" today.",
    "part": "n"
  },
  {
    "id": "pet-2404",
    "library": "pet",
    "word": "silk",
    "meaning": "丝,绸,绸锻类,丝织品；a.丝的,丝织的",
    "example": "I learned the word \"silk\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2405",
    "library": "pet",
    "word": "smooth",
    "meaning": "a.平滑的,平稳的,流畅的,和蔼的,安祥的,圆滑的,调匀的,无毛的；使光滑,烫平,使平和,消除；变平滑,变平静",
    "example": "I learned the word \"smooth\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2406",
    "library": "pet",
    "word": "silly",
    "meaning": "a.愚蠢的,糊涂的",
    "example": "I learned the word \"silly\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2407",
    "library": "pet",
    "word": "silver",
    "meaning": "银,银币,银器；a.银的,银制的,银器的；镀银",
    "example": "I learned the word \"silver\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2408",
    "library": "pet",
    "word": "similar",
    "meaning": "a.相似的,类似的；相似的东西",
    "example": "I learned the word \"similar\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2409",
    "library": "pet",
    "word": "simple",
    "meaning": "a.简单的,普通的,朴素的,单纯的,绝对的,初级的,原始的,迟钝的；出身低微者,傻子",
    "example": "I learned the word \"simple\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2410",
    "library": "pet",
    "word": "snack",
    "meaning": "小吃,点心,快餐；吃零食,吃快餐",
    "example": "I learned the word \"snack\" today.",
    "part": "n"
  },
  {
    "id": "pet-2411",
    "library": "pet",
    "word": "since",
    "meaning": "自...以后,自...以来；自那时以后；既然,自...以后,自...以来",
    "example": "I learned the word \"since\" today.",
    "part": "conj & prep"
  },
  {
    "id": "pet-2412",
    "library": "pet",
    "word": "snake",
    "meaning": "蛇,阴险的人；曲折行进；迂回,拉,急抽",
    "example": "I learned the word \"snake\" today.",
    "part": "n"
  },
  {
    "id": "pet-2413",
    "library": "pet",
    "word": "sincerely",
    "meaning": "真诚地",
    "example": "I learned the word \"sincerely\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2414",
    "library": "pet",
    "word": "snow",
    "meaning": "雪,积雪,下雪,雪花形干扰；下雪,似雪般落下；使雪白,用雪覆盖,使像雪般落下",
    "example": "I learned the word \"snow\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2415",
    "library": "pet",
    "word": "snowboard",
    "meaning": "滑雪板",
    "example": "I learned the word \"snowboard\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2416",
    "library": "pet",
    "word": "snowboarding",
    "meaning": "测雪板(snowboard的现在分词)；单板滑雪；滑板滑雪",
    "example": "I learned the word \"snowboarding\" today.",
    "part": "n"
  },
  {
    "id": "pet-2417",
    "library": "pet",
    "word": "singer",
    "meaning": "歌手",
    "example": "I learned the word \"singer\" today.",
    "part": "n"
  },
  {
    "id": "pet-2418",
    "library": "pet",
    "word": "so",
    "meaning": "如此,如是,如...那样；所以,因此；这样",
    "example": "I learned the word \"so\" today.",
    "part": "adv & conj"
  },
  {
    "id": "pet-2419",
    "library": "pet",
    "word": "singing",
    "meaning": "歌唱,歌声；[计]振鸣；蜂鸣",
    "example": "I learned the word \"singing\" today.",
    "part": "n"
  },
  {
    "id": "pet-2420",
    "library": "pet",
    "word": "soap",
    "meaning": "肥皂,阿谀；以肥皂洗,阿谀；[计]评语",
    "example": "I learned the word \"soap\" today.",
    "part": "n"
  },
  {
    "id": "pet-2421",
    "library": "pet",
    "word": "single",
    "meaning": "a.单身的,单程的,单一的,个别的,孤独的,专一的；一个,单打,单程票；选出",
    "example": "I learned the word \"single\" today.",
    "part": "n & adj"
  },
  {
    "id": "pet-2422",
    "library": "pet",
    "word": "soap opera",
    "meaning": "肥皂剧",
    "example": "Try to use \"soap opera\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2423",
    "library": "pet",
    "word": "soccer",
    "meaning": "英式足球",
    "example": "I learned the word \"soccer\" today.",
    "part": "n"
  },
  {
    "id": "pet-2424",
    "library": "pet",
    "word": "sociable",
    "meaning": "a.好交际的,社交的,过社会生活的；联谊会",
    "example": "I learned the word \"sociable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2425",
    "library": "pet",
    "word": "social",
    "meaning": "a.社会的,群居的,社交的；联欢会",
    "example": "I learned the word \"social\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2426",
    "library": "pet",
    "word": "sink",
    "meaning": "藏垢的场所,沟渠,污水槽；下沉,沉没,下陷,减弱,衰退,消沉,堕落,渗透；使低落,使下沉,陷于,投入(资金等),挖掘",
    "example": "I learned the word \"sink\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2427",
    "library": "pet",
    "word": "social media",
    "meaning": "a.社会的,群居的,社交的；联欢会",
    "example": "Try to use \"social media\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2428",
    "library": "pet",
    "word": "society",
    "meaning": "社会；社交界；交往",
    "example": "I learned the word \"society\" today.",
    "part": "n"
  },
  {
    "id": "pet-2429",
    "library": "pet",
    "word": "sock",
    "meaning": "短袜,鞋垫,一击；重击,猛投,给...穿袜；打击",
    "example": "I learned the word \"sock\" today.",
    "part": "n"
  },
  {
    "id": "pet-2430",
    "library": "pet",
    "word": "sir",
    "meaning": "先生,阁下",
    "example": "I learned the word \"sir\" today.",
    "part": "n"
  },
  {
    "id": "pet-2431",
    "library": "pet",
    "word": "sofa",
    "meaning": "沙发",
    "example": "I learned the word \"sofa\" today.",
    "part": "n"
  },
  {
    "id": "pet-2432",
    "library": "pet",
    "word": "soft",
    "meaning": "a.软的,温和的,柔和的,柔滑的,温柔的,软弱的,坡度小的,笨的,纸币的；柔软的东西,笨人,纸币；柔软地,温和地",
    "example": "I learned the word \"soft\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2433",
    "library": "pet",
    "word": "sister",
    "meaning": "姐妹,姐,妹,护士,修女；姐妹般对待",
    "example": "I learned the word \"sister\" today.",
    "part": "n"
  },
  {
    "id": "pet-2434",
    "library": "pet",
    "word": "spelling",
    "meaning": "拼,拼字,拼法；[计]拼写检查",
    "example": "I learned the word \"spelling\" today.",
    "part": "n"
  },
  {
    "id": "pet-2435",
    "library": "pet",
    "word": "spend",
    "meaning": "花费,浪费,度过,消耗,消磨；花费,用尽",
    "example": "I learned the word \"spend\" today.",
    "part": "v"
  },
  {
    "id": "pet-2436",
    "library": "pet",
    "word": "software",
    "meaning": "软件；[计]软设备",
    "example": "I learned the word \"software\" today.",
    "part": "n"
  },
  {
    "id": "pet-2437",
    "library": "pet",
    "word": "soldier",
    "meaning": "军人,士兵,兵蚁；从军,尽职,偷懒,磨洋工",
    "example": "I learned the word \"soldier\" today.",
    "part": "n"
  },
  {
    "id": "pet-2438",
    "library": "pet",
    "word": "solution",
    "meaning": "解决,解答,溶液；[化]溶液",
    "example": "I learned the word \"solution\" today.",
    "part": "n"
  },
  {
    "id": "pet-2439",
    "library": "pet",
    "word": "spice",
    "meaning": "香料,药料,香气,调味品,情趣,少许；加香料,使添趣味",
    "example": "I learned the word \"spice\" today.",
    "part": "n"
  },
  {
    "id": "pet-2440",
    "library": "pet",
    "word": "solve",
    "meaning": "解决,付给,溶解；求解；求解",
    "example": "I learned the word \"solve\" today.",
    "part": "n"
  },
  {
    "id": "pet-2441",
    "library": "pet",
    "word": "spicy",
    "meaning": "a.香的,多香料的,辛辣的,下流的",
    "example": "I learned the word \"spicy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2442",
    "library": "pet",
    "word": "some",
    "meaning": "一些,一部分,若干；大约；a.一些的,少许的,某一的",
    "example": "I learned the word \"some\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-2443",
    "library": "pet",
    "word": "spill",
    "meaning": "溢出,溅出,摔下,溢出量,木片,小塞子；使溢出,使散落,洒,使流出,倒出,使摔下；溢出,涌流,摔下",
    "example": "I learned the word \"spill\" today.",
    "part": "v"
  },
  {
    "id": "pet-2444",
    "library": "pet",
    "word": "somebody",
    "meaning": "了不起的人,大人物；有人,某人",
    "example": "I learned the word \"somebody\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2445",
    "library": "pet",
    "word": "spinach",
    "meaning": "菠菜,货币,胡说八道",
    "example": "I learned the word \"spinach\" today.",
    "part": "n"
  },
  {
    "id": "pet-2446",
    "library": "pet",
    "word": "somehow",
    "meaning": "不知何故",
    "example": "I learned the word \"somehow\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2447",
    "library": "pet",
    "word": "spite",
    "meaning": "恶意,怨恨,使人烦恼的事物；故意刁难,欺侮",
    "example": "I learned the word \"spite\" today.",
    "part": "n"
  },
  {
    "id": "pet-2448",
    "library": "pet",
    "word": "split up",
    "meaning": "<非正>瓜分；劈成；（使）分成若干小部分",
    "example": "Try to use \"split up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2449",
    "library": "pet",
    "word": "sometimes",
    "meaning": "有时,时常,往往",
    "example": "I learned the word \"sometimes\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2450",
    "library": "pet",
    "word": "somewhere",
    "meaning": "到某处,在某处",
    "example": "I learned the word \"somewhere\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2451",
    "library": "pet",
    "word": "spoil",
    "meaning": "战利品,赃物,奖品,变质,次品；损坏,破坏,溺爱；腐坏,掠夺",
    "example": "I learned the word \"spoil\" today.",
    "part": "v"
  },
  {
    "id": "pet-2452",
    "library": "pet",
    "word": "son",
    "meaning": "儿子,女婿,子孙；[法]儿子,女婿,养子",
    "example": "I learned the word \"son\" today.",
    "part": "n"
  },
  {
    "id": "pet-2453",
    "library": "pet",
    "word": "spoon",
    "meaning": "匙,调羹,匙形工具；以匙舀起,调情,使成匙状",
    "example": "I learned the word \"spoon\" today.",
    "part": "n"
  },
  {
    "id": "pet-2454",
    "library": "pet",
    "word": "song",
    "meaning": "歌,曲,鸣声,歌唱,歌曲,诗歌",
    "example": "I learned the word \"song\" today.",
    "part": "n"
  },
  {
    "id": "pet-2455",
    "library": "pet",
    "word": "sport",
    "meaning": "运动,游戏,娱乐,消遣,玩笑；a.运动的,户外穿戴的；游戏,参加体育运动,戏弄,产生变种",
    "example": "I learned the word \"sport\" today.",
    "part": "n"
  },
  {
    "id": "pet-2456",
    "library": "pet",
    "word": "soon",
    "meaning": "不久,早,快,宁可",
    "example": "I learned the word \"soon\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2457",
    "library": "pet",
    "word": "sports centre",
    "meaning": "体育运动中心,运动场",
    "example": "Try to use \"sports centre\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2458",
    "library": "pet",
    "word": "spot",
    "meaning": "污点,地点,斑点,点,娱乐场所,处境,少量；a.当场的,现场的,现货买卖的,现金交易的,抽样的；点缀,玷污,认出,准确定...的位,用灯光照射",
    "example": "I learned the word \"spot\" today.",
    "part": "n"
  },
  {
    "id": "pet-2459",
    "library": "pet",
    "word": "spy",
    "meaning": "间谍,侦探,侦察；侦察,找出,发现；做密探,侦查",
    "example": "I learned the word \"spy\" today.",
    "part": "n"
  },
  {
    "id": "pet-2460",
    "library": "pet",
    "word": "sore",
    "meaning": "a.悲伤的,痛的,引起痛苦的；痛处,溃疡,疮",
    "example": "I learned the word \"sore\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2461",
    "library": "pet",
    "word": "square",
    "meaning": "正方形,街区,广场,平方,直角尺；a.正方形的,正直的,公正的,平方的,方正的,结清的；成直角地,对准地",
    "example": "I learned the word \"square\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2462",
    "library": "pet",
    "word": "sorry",
    "meaning": "a.难过的,悲哀的,遗憾的",
    "example": "I learned the word \"sorry\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2463",
    "library": "pet",
    "word": "sort",
    "meaning": "种类,方式,品质,态度,举止；分类,排序,挑选；交往,协调",
    "example": "I learned the word \"sort\" today.",
    "part": "n"
  },
  {
    "id": "pet-2464",
    "library": "pet",
    "word": "squash",
    "meaning": "挤压,压碎的东西,南瓜属植物,拥挤的人群；压扁,镇压,压制；被压扁,发溅泼声,挤入",
    "example": "I learned the word \"squash\" today.",
    "part": "n"
  },
  {
    "id": "pet-2465",
    "library": "pet",
    "word": "so-so",
    "meaning": "a.平常的,还过得去的,马马虎虎的,一般的；平常地,还过得去地,马马虎虎地,一般地",
    "example": "I learned the word \"so-so\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2466",
    "library": "pet",
    "word": "stadium",
    "meaning": "露天大型运动场；[医]期,病期",
    "example": "I learned the word \"stadium\" today.",
    "part": "n"
  },
  {
    "id": "pet-2467",
    "library": "pet",
    "word": "soul",
    "meaning": "灵魂,心灵,精神,精髓,人,化身,典型,鬼魂；a.黑人的",
    "example": "I learned the word \"soul\" today.",
    "part": "n"
  },
  {
    "id": "pet-2468",
    "library": "pet",
    "word": "staff",
    "meaning": "全体人员,工作班子,棍棒,杆,拐杖,支柱,权杖；a.职员的,雇员的,参谋的；为...配备人员",
    "example": "I learned the word \"staff\" today.",
    "part": "n"
  },
  {
    "id": "pet-2469",
    "library": "pet",
    "word": "sound",
    "meaning": "声音,语音,吵闹,声调,听力范围,探条,海峡；a.健全的,可靠的,合理的,健康的,彻底的,资金充实的；彻底地,充分地",
    "example": "I learned the word \"sound\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2470",
    "library": "pet",
    "word": "stage",
    "meaning": "阶段,舞台,场所,戏剧,站,驿站,级,层,脚手架；上演,表演,筹划；适于上演,乘驿车旅行",
    "example": "I learned the word \"stage\" today.",
    "part": "n"
  },
  {
    "id": "pet-2471",
    "library": "pet",
    "word": "stairs",
    "meaning": "楼梯",
    "example": "I learned the word \"stairs\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-2472",
    "library": "pet",
    "word": "soundtrack",
    "meaning": "声迹,声槽,声带",
    "example": "I learned the word \"soundtrack\" today.",
    "part": "n"
  },
  {
    "id": "pet-2473",
    "library": "pet",
    "word": "stall",
    "meaning": "厩,停车处,牧师职位,货摊,托辞,拖延；关入厩,停顿,推托,支吾,使陷于泥中；被关在厩内,陷于泥中,停止,支吾",
    "example": "I learned the word \"stall\" today.",
    "part": "n"
  },
  {
    "id": "pet-2474",
    "library": "pet",
    "word": "stamp",
    "meaning": "印,邮票,打印器,戳子,图章,印花税票,标志,特征,类型,跺脚；盖章于,顿足,贴上邮票,铭刻,捣碎,扑灭；捣碎,跺脚",
    "example": "I learned the word \"stamp\" today.",
    "part": "n"
  },
  {
    "id": "pet-2475",
    "library": "pet",
    "word": "soup",
    "meaning": "汤,马力；加速,增加马力",
    "example": "I learned the word \"soup\" today.",
    "part": "n"
  },
  {
    "id": "pet-2476",
    "library": "pet",
    "word": "sour",
    "meaning": "a.酸的,酸臭的,发酵的,愠怒的,讨厌的,拙劣的,不健全的；变酸,发酵,厌烦,变坏；使变酸,使失望",
    "example": "I learned the word \"sour\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2477",
    "library": "pet",
    "word": "stand",
    "meaning": "站立,站住,停顿,讲台,看台,立场,法院证人席；站,立,坐落,停滞,位于,坚持,维持原状；忍受,使站立,抵挡",
    "example": "I learned the word \"stand\" today.",
    "part": "v"
  },
  {
    "id": "pet-2478",
    "library": "pet",
    "word": "star",
    "meaning": "星,恒星,星形物,运气,明星；以星状物装饰,用星号标,使成为明星；变成明星",
    "example": "I learned the word \"star\" today.",
    "part": "n"
  },
  {
    "id": "pet-2479",
    "library": "pet",
    "word": "south",
    "meaning": "南方,南；a.南的,向南的；在南方",
    "example": "I learned the word \"south\" today.",
    "part": "adj & adv, n"
  },
  {
    "id": "pet-2480",
    "library": "pet",
    "word": "southeast",
    "meaning": "东南,东南地区；a.东南的,向东南的,来自东南的；往东南,来自东南",
    "example": "I learned the word \"southeast\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2481",
    "library": "pet",
    "word": "southern",
    "meaning": "南方人,男风；a.向南方的,来自南方的",
    "example": "I learned the word \"southern\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2482",
    "library": "pet",
    "word": "start",
    "meaning": "惊起,出发,开端,起点,吃惊,有利条件；开始,出发,启动,跳起,吃惊,出现,松动,脱落,起价,参赛；使惊起,开动,发动,启动,开始,创办,提议,使松动,使脱落,起用",
    "example": "I learned the word \"start\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2483",
    "library": "pet",
    "word": "southwest",
    "meaning": "西南,西南方,西南地区；a.西南的,来自西南方的；往西南,来自西南",
    "example": "I learned the word \"southwest\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2484",
    "library": "pet",
    "word": "souvenir",
    "meaning": "纪念品",
    "example": "I learned the word \"souvenir\" today.",
    "part": "n"
  },
  {
    "id": "pet-2485",
    "library": "pet",
    "word": "space",
    "meaning": "位置,空间,距离,太空,空白,间隔,(期刊等的)篇幅；隔开,分隔；留间隔",
    "example": "I learned the word \"space\" today.",
    "part": "n"
  },
  {
    "id": "pet-2486",
    "library": "pet",
    "word": "station",
    "meaning": "车站,站,局,驻地,位置,身分,地位；安置,配置,驻扎；[计]站",
    "example": "I learned the word \"station\" today.",
    "part": "n"
  },
  {
    "id": "pet-2487",
    "library": "pet",
    "word": "statue",
    "meaning": "以雕像装饰；雕像",
    "example": "I learned the word \"statue\" today.",
    "part": "n"
  },
  {
    "id": "pet-2488",
    "library": "pet",
    "word": "stay",
    "meaning": "停留,逗留,制止,延缓,停止,支柱,支撑物,支索；制止,延缓,坚持,支持,支撑,用支索固定；停留,逗留,暂停,坚持,中止",
    "example": "I learned the word \"stay\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2489",
    "library": "pet",
    "word": "spaceship",
    "meaning": "宇宙飞船",
    "example": "I learned the word \"spaceship\" today.",
    "part": "n"
  },
  {
    "id": "pet-2490",
    "library": "pet",
    "word": "spare",
    "meaning": "剩余,备用品,备件,备用零件,备用轮胎；a.多余的,备用的,空闲的,节约的,瘦的；节约,省掉,宽恕",
    "example": "I learned the word \"spare\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-2491",
    "library": "pet",
    "word": "stay behind",
    "meaning": "停留,逗留,制止,延缓,停止,支柱,支撑物,支索；制止,延缓,坚持,支持,支撑,用支索固定；停留,逗留,暂停,坚持,中止",
    "example": "Try to use \"stay behind\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2492",
    "library": "pet",
    "word": "sparkling",
    "meaning": "a.闪闪发光的,闪烁的,闪烁着才华的",
    "example": "I learned the word \"sparkling\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2493",
    "library": "pet",
    "word": "speak",
    "meaning": "说,说话,演说,发言；说,讲,说出",
    "example": "I learned the word \"speak\" today.",
    "part": "v"
  },
  {
    "id": "pet-2494",
    "library": "pet",
    "word": "steak",
    "meaning": "牛排,鱼排,肉排",
    "example": "I learned the word \"steak\" today.",
    "part": "n"
  },
  {
    "id": "pet-2495",
    "library": "pet",
    "word": "speaker",
    "meaning": "说话人,讲演者,发言人,喇叭,扬声器；[计]扬声器",
    "example": "I learned the word \"speaker\" today.",
    "part": "n"
  },
  {
    "id": "pet-2496",
    "library": "pet",
    "word": "steal",
    "meaning": "剽窃；偷偷地做；偷窃",
    "example": "I learned the word \"steal\" today.",
    "part": "v"
  },
  {
    "id": "pet-2497",
    "library": "pet",
    "word": "special",
    "meaning": "专辑,专车,号外,特别的东西,负有特别任务的人员；a.特别的,专门的,特殊的,额外的,附加的,特别亲密的",
    "example": "I learned the word \"special\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2498",
    "library": "pet",
    "word": "steep",
    "meaning": "浸渍,悬崖；a.险峻的,陡峭的,急剧升降的,夸大的；浸,泡",
    "example": "I learned the word \"steep\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2499",
    "library": "pet",
    "word": "species",
    "meaning": "种,类,外形；[医]茶剂；种",
    "example": "I learned the word \"species\" today.",
    "part": "n"
  },
  {
    "id": "pet-2500",
    "library": "pet",
    "word": "step",
    "meaning": "步骤,步,步幅,脚步声,踏级,步伐,短距离,步态,手段,等级；踏,以步测量,跨步,使成阶梯状；跨步,轻快地走,跳舞,踩,踏上,行走",
    "example": "I learned the word \"step\" today.",
    "part": "n"
  },
  {
    "id": "pet-2501",
    "library": "pet",
    "word": "spectacular",
    "meaning": "a.公开展示的,惊人的,壮观的；奇观,惊人之举,展览物",
    "example": "I learned the word \"spectacular\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2502",
    "library": "pet",
    "word": "speech",
    "meaning": "演讲,说话,谈话,言语,引语,民族语言；[医]言语,语言",
    "example": "I learned the word \"speech\" today.",
    "part": "n"
  },
  {
    "id": "pet-2503",
    "library": "pet",
    "word": "speed",
    "meaning": "速率,速度,迅速；加速,超速,快进；快速传送,促进,使加速",
    "example": "I learned the word \"speed\" today.",
    "part": "n"
  },
  {
    "id": "pet-2504",
    "library": "pet",
    "word": "spell",
    "meaning": "符咒,魅力,轮值,轮班,工作时间,一次发作；拼写,拼成,琢磨,理解,招致,轮换,迷住；轮换,拼字",
    "example": "I learned the word \"spell\" today.",
    "part": "v"
  },
  {
    "id": "pet-2505",
    "library": "pet",
    "word": "stick",
    "meaning": "棍,棒,刺,枯枝,茎,条状物；插进,刺入,钉住,伸出,粘贴,停止；粘住,停留,坚持,陷住,伸出",
    "example": "I learned the word \"stick\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2506",
    "library": "pet",
    "word": "a walking stick",
    "meaning": "第一个字母A；一个；第一的\\r",
    "example": "Try to use \"a walking stick\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2507",
    "library": "pet",
    "word": "subtract",
    "meaning": "减去,扣掉,减少；做减法；[计]减",
    "example": "I learned the word \"subtract\" today.",
    "part": "v"
  },
  {
    "id": "pet-2508",
    "library": "pet",
    "word": "sticky",
    "meaning": "a.粘的,有粘性的,顽固的",
    "example": "I learned the word \"sticky\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2509",
    "library": "pet",
    "word": "subway",
    "meaning": "地铁,地道；乘地铁",
    "example": "I learned the word \"subway\" today.",
    "part": "n"
  },
  {
    "id": "pet-2510",
    "library": "pet",
    "word": "still",
    "meaning": "蒸馏室,寂静,剧照；蒸馏,(使)平静,(使)静止；a.静止的,不动的,静寂的,不起泡的,静物摄影的",
    "example": "I learned the word \"still\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-2511",
    "library": "pet",
    "word": "succeed",
    "meaning": "成功,继承,继续；继承,接替",
    "example": "I learned the word \"succeed\" today.",
    "part": "v"
  },
  {
    "id": "pet-2512",
    "library": "pet",
    "word": "success",
    "meaning": "成功,成就,胜利",
    "example": "I learned the word \"success\" today.",
    "part": "n"
  },
  {
    "id": "pet-2513",
    "library": "pet",
    "word": "successful",
    "meaning": "a.成功的,一帆风顺的,顺利的；[经]成功的",
    "example": "I learned the word \"successful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2514",
    "library": "pet",
    "word": "such",
    "meaning": "a.如此的,这样的",
    "example": "I learned the word \"such\" today.",
    "part": "det"
  },
  {
    "id": "pet-2515",
    "library": "pet",
    "word": "sudden",
    "meaning": "突然,忽然；a.突然的,意外的,快速的",
    "example": "I learned the word \"sudden\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2516",
    "library": "pet",
    "word": "stir",
    "meaning": "骚动,轰动,搅动,监狱；移动,摇动,激起,惹起,搅拌；走动,传播,搅拌",
    "example": "I learned the word \"stir\" today.",
    "part": "v"
  },
  {
    "id": "pet-2517",
    "library": "pet",
    "word": "suddenly",
    "meaning": "突然,意外,忽然,迅速,即席作成,即刻,急速",
    "example": "I learned the word \"suddenly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2518",
    "library": "pet",
    "word": "stomach",
    "meaning": "胃,食欲,欲望,肚子；吃下,忍受",
    "example": "I learned the word \"stomach\" today.",
    "part": "n"
  },
  {
    "id": "pet-2519",
    "library": "pet",
    "word": "stomach ache",
    "meaning": "胃痛；肚子痛",
    "example": "Try to use \"stomach ache\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2520",
    "library": "pet",
    "word": "suffer",
    "meaning": "遭受,经历,忍受；受痛苦,受损害",
    "example": "I learned the word \"suffer\" today.",
    "part": "v"
  },
  {
    "id": "pet-2521",
    "library": "pet",
    "word": "sugar",
    "meaning": "糖,糖块,甜言蜜语；加糖于,使甜蜜,粉饰,美化；制成糖",
    "example": "I learned the word \"sugar\" today.",
    "part": "n"
  },
  {
    "id": "pet-2522",
    "library": "pet",
    "word": "stone",
    "meaning": "石头,宝石,果核,纪念碑,结石；投扔石子,铺石头；a.石的,石制的,完全的",
    "example": "I learned the word \"stone\" today.",
    "part": "n"
  },
  {
    "id": "pet-2523",
    "library": "pet",
    "word": "suggest",
    "meaning": "提议,建议,促成,暗示,启发,使人想起；[法]建议,提出,提议",
    "example": "I learned the word \"suggest\" today.",
    "part": "v"
  },
  {
    "id": "pet-2524",
    "library": "pet",
    "word": "suggestion",
    "meaning": "提议,意见；[医]暗示",
    "example": "I learned the word \"suggestion\" today.",
    "part": "n"
  },
  {
    "id": "pet-2525",
    "library": "pet",
    "word": "suit",
    "meaning": "套装,诉讼,请求,起诉,套,组；适合,使适应；合适,相称",
    "example": "I learned the word \"suit\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2526",
    "library": "pet",
    "word": "stop",
    "meaning": "停止,车站,逗留,填塞,障碍,(风琴的)音栓；停止,被塞住；塞住,堵塞,阻止,击落,停止,终止,断绝",
    "example": "I learned the word \"stop\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2527",
    "library": "pet",
    "word": "suitable",
    "meaning": "a.适当的,相配的；[法]合适的,适宜的,适当的",
    "example": "I learned the word \"suitable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2528",
    "library": "pet",
    "word": "suitcase",
    "meaning": "手提箱",
    "example": "I learned the word \"suitcase\" today.",
    "part": "n"
  },
  {
    "id": "pet-2529",
    "library": "pet",
    "word": "sum",
    "meaning": "总数,总和,金额,概要,顶点；总计,概括；合计",
    "example": "I learned the word \"sum\" today.",
    "part": "n"
  },
  {
    "id": "pet-2530",
    "library": "pet",
    "word": "store",
    "meaning": "商店,贮藏,仓库,备用品,存储器；储存,贮藏,供给；贮藏",
    "example": "I learned the word \"store\" today.",
    "part": "n"
  },
  {
    "id": "pet-2531",
    "library": "pet",
    "word": "sun",
    "meaning": "太阳,日,日光,阳光；晒；晒太阳",
    "example": "I learned the word \"sun\" today.",
    "part": "n"
  },
  {
    "id": "pet-2532",
    "library": "pet",
    "word": "sunbathe",
    "meaning": "日光浴",
    "example": "I learned the word \"sunbathe\" today.",
    "part": "v"
  },
  {
    "id": "pet-2533",
    "library": "pet",
    "word": "storm",
    "meaning": "暴风雨,骚动,风波,风暴,猛攻；起风,猛冲,怒吼；猛攻",
    "example": "I learned the word \"storm\" today.",
    "part": "n"
  },
  {
    "id": "pet-2534",
    "library": "pet",
    "word": "sunglasses",
    "meaning": "太阳镜,墨镜,太阳眼镜",
    "example": "I learned the word \"sunglasses\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-2535",
    "library": "pet",
    "word": "story",
    "meaning": "故事,小说,传奇,描述,阅历,经历,层",
    "example": "I learned the word \"story\" today.",
    "part": "n"
  },
  {
    "id": "pet-2536",
    "library": "pet",
    "word": "sunny",
    "meaning": "a.阳光充足的,乐观的,快乐的,像太阳的",
    "example": "I learned the word \"sunny\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2537",
    "library": "pet",
    "word": "straight",
    "meaning": "直线,直；a.直的,笔直的,正直的,直接的,连续的,整齐的；直接地,立即,不断地",
    "example": "I learned the word \"straight\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-2538",
    "library": "pet",
    "word": "sunrise",
    "meaning": "日出,黎明,拂晓",
    "example": "I learned the word \"sunrise\" today.",
    "part": "n"
  },
  {
    "id": "pet-2539",
    "library": "pet",
    "word": "sunset",
    "meaning": "日落,晚年",
    "example": "I learned the word \"sunset\" today.",
    "part": "n"
  },
  {
    "id": "pet-2540",
    "library": "pet",
    "word": "sunshine",
    "meaning": "阳光,光明,晴天",
    "example": "I learned the word \"sunshine\" today.",
    "part": "n"
  },
  {
    "id": "pet-2541",
    "library": "pet",
    "word": "strange",
    "meaning": "a.奇怪的,陌生的,生疏的,不熟悉的,不可思议的,外行的,外地的,异乡的",
    "example": "I learned the word \"strange\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2542",
    "library": "pet",
    "word": "superhero",
    "meaning": "超级英雄",
    "example": "I learned the word \"superhero\" today.",
    "part": "n"
  },
  {
    "id": "pet-2543",
    "library": "pet",
    "word": "stranger",
    "meaning": "陌生人,门外汉；[法]局外人,非当事人,第三者",
    "example": "I learned the word \"stranger\" today.",
    "part": "n"
  },
  {
    "id": "pet-2544",
    "library": "pet",
    "word": "supermarket",
    "meaning": "超级市场；[经]超级市场,自助售货商店",
    "example": "I learned the word \"supermarket\" today.",
    "part": "n"
  },
  {
    "id": "pet-2545",
    "library": "pet",
    "word": "strawberry",
    "meaning": "草莓",
    "example": "I learned the word \"strawberry\" today.",
    "part": "n"
  },
  {
    "id": "pet-2546",
    "library": "pet",
    "word": "supper",
    "meaning": "晚餐",
    "example": "I learned the word \"supper\" today.",
    "part": "n"
  },
  {
    "id": "pet-2547",
    "library": "pet",
    "word": "stream",
    "meaning": "水流,小河,流出,趋势,人潮；流出,流动,展开；流,涌,飘扬",
    "example": "I learned the word \"stream\" today.",
    "part": "n"
  },
  {
    "id": "pet-2548",
    "library": "pet",
    "word": "supply",
    "meaning": "补给,供给,供应品；补给,供给,提供,补充；替代",
    "example": "I learned the word \"supply\" today.",
    "part": "v"
  },
  {
    "id": "pet-2549",
    "library": "pet",
    "word": "street",
    "meaning": "街道,马路,街区；a.街道的",
    "example": "I learned the word \"street\" today.",
    "part": "n"
  },
  {
    "id": "pet-2550",
    "library": "pet",
    "word": "stress",
    "meaning": "压力,紧迫,强调,重音,重点,应力；加压力于,着重,重读",
    "example": "I learned the word \"stress\" today.",
    "part": "n"
  },
  {
    "id": "pet-2551",
    "library": "pet",
    "word": "support",
    "meaning": "支持,支撑,援助,供养,支撑物；支援,支撑,帮助,支持,忍受,供养,证实；[计]后援",
    "example": "I learned the word \"support\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2552",
    "library": "pet",
    "word": "stressed",
    "meaning": "a.感到有压力的；紧张的",
    "example": "I learned the word \"stressed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2553",
    "library": "pet",
    "word": "stressful",
    "meaning": "a.着重,强调,重读,使受应力",
    "example": "I learned the word \"stressful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2554",
    "library": "pet",
    "word": "during my exams",
    "meaning": "在...的时候",
    "example": "Try to use \"during my exams\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2555",
    "library": "pet",
    "word": "strict",
    "meaning": "a.严厉的,绝对的,详尽的,严格的,精确的；[法]严格的,精确的,绝对的",
    "example": "I learned the word \"strict\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2556",
    "library": "pet",
    "word": "strike",
    "meaning": "罢工,打击,殴打；打,撞击,冲击,侵袭,取消,结算,打掉,罢工,刺透,使生根,遇见；打,打击,抓,罢工,搏动,触礁,敲,响,穿透,打动",
    "example": "I learned the word \"strike\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2557",
    "library": "pet",
    "word": "supporter",
    "meaning": "支持者,后盾,迫随者,护身织物；[法]支持者,赡养者,抚养者",
    "example": "I learned the word \"supporter\" today.",
    "part": "n"
  },
  {
    "id": "pet-2558",
    "library": "pet",
    "word": "suppose",
    "meaning": "推想,假设,以为,想像,假定；料想",
    "example": "I learned the word \"suppose\" today.",
    "part": "v"
  },
  {
    "id": "pet-2559",
    "library": "pet",
    "word": "stripe",
    "meaning": "斑纹,条纹；[医]纹,条纹",
    "example": "I learned the word \"stripe\" today.",
    "part": "n"
  },
  {
    "id": "pet-2560",
    "library": "pet",
    "word": "strong",
    "meaning": "a.强壮的,坚固的,坚强的,强烈的,有力的,优良的；强劲地,有力地,猛烈地",
    "example": "I learned the word \"strong\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2561",
    "library": "pet",
    "word": "student",
    "meaning": "学生,研究者,学者",
    "example": "I learned the word \"student\" today.",
    "part": "n"
  },
  {
    "id": "pet-2562",
    "library": "pet",
    "word": "studio",
    "meaning": "工作室,画室,演播室,电影制片厂",
    "example": "I learned the word \"studio\" today.",
    "part": "n"
  },
  {
    "id": "pet-2563",
    "library": "pet",
    "word": "sure",
    "meaning": "a.确信,必然的,必定的；当然,确实地,无疑地",
    "example": "I learned the word \"sure\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-2564",
    "library": "pet",
    "word": "studies",
    "meaning": "研究；学习；学业（study的复数）",
    "example": "I learned the word \"studies\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-2565",
    "library": "pet",
    "word": "study",
    "meaning": "学习,研究,学科,论文,求学,书房,试作；学习,读书,研究,考虑,计划；学习,思索",
    "example": "I learned the word \"study\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2566",
    "library": "pet",
    "word": "surf",
    "meaning": "海浪,拍岸浪；作冲浪运动",
    "example": "I learned the word \"surf\" today.",
    "part": "v"
  },
  {
    "id": "pet-2567",
    "library": "pet",
    "word": "surfboard",
    "meaning": "冲浪板,用冲浪板滑水",
    "example": "I learned the word \"surfboard\" today.",
    "part": "n"
  },
  {
    "id": "pet-2568",
    "library": "pet",
    "word": "surfing",
    "meaning": "冲浪运动",
    "example": "I learned the word \"surfing\" today.",
    "part": "n"
  },
  {
    "id": "pet-2569",
    "library": "pet",
    "word": "surname",
    "meaning": "姓,别号,绰号；呼以姓氏,起绰号",
    "example": "I learned the word \"surname\" today.",
    "part": "n"
  },
  {
    "id": "pet-2570",
    "library": "pet",
    "word": "stuff",
    "meaning": "原料,要素,东西,材料,素质,织品,废物,废话；装填；狼吞虎咽",
    "example": "I learned the word \"stuff\" today.",
    "part": "n"
  },
  {
    "id": "pet-2571",
    "library": "pet",
    "word": "surprise",
    "meaning": "惊奇,奇袭,诧异；使惊奇,撞见,奇袭",
    "example": "I learned the word \"surprise\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2572",
    "library": "pet",
    "word": "stupid",
    "meaning": "a.愚蠢的,麻木的",
    "example": "I learned the word \"stupid\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2573",
    "library": "pet",
    "word": "surprised",
    "meaning": "a.感到惊讶的",
    "example": "I learned the word \"surprised\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2574",
    "library": "pet",
    "word": "style",
    "meaning": "风格,时尚,文体,风度,字体,类型；称呼,(根据新款式)设计,使合潮流；风格,样式",
    "example": "I learned the word \"style\" today.",
    "part": "n"
  },
  {
    "id": "pet-2575",
    "library": "pet",
    "word": "suprising",
    "meaning": "(suprise的现在分词)惊讶,惊奇<br/>使…惊讶",
    "example": "I learned the word \"suprising\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2576",
    "library": "pet",
    "word": "stylish",
    "meaning": "a.现代风格的,流行的,潇洒的",
    "example": "I learned the word \"stylish\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2577",
    "library": "pet",
    "word": "surround",
    "meaning": "包围,环绕,围绕；围绕物",
    "example": "I learned the word \"surround\" today.",
    "part": "v"
  },
  {
    "id": "pet-2578",
    "library": "pet",
    "word": "subject",
    "meaning": "科目,主题,臣民,主语,题目,(事物的)经受者,学科,受治疗者,原因,理由；a.服从的,易患...的,隶属的,受支配的；在...条件下",
    "example": "I learned the word \"subject\" today.",
    "part": "n"
  },
  {
    "id": "pet-2579",
    "library": "pet",
    "word": "taste",
    "meaning": "味道,品味,味觉,感受,体验,爱好,审美,少量；尝,察觉...的味道,体会；品尝,察觉味道,有某种味道",
    "example": "I learned the word \"taste\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2580",
    "library": "pet",
    "word": "sweater",
    "meaning": "毛衣,毛线衫,运动衫,出汗者；[化]发汗器",
    "example": "I learned the word \"sweater\" today.",
    "part": "n"
  },
  {
    "id": "pet-2581",
    "library": "pet",
    "word": "sweatshirt",
    "meaning": "园领长袖运动衫",
    "example": "I learned the word \"sweatshirt\" today.",
    "part": "n"
  },
  {
    "id": "pet-2582",
    "library": "pet",
    "word": "sweet",
    "meaning": "甜蜜,糖果,情人；a.甜的,芳香的,悦耳的,漂亮的,和蔼的,不咸的,灵活的,轻快的",
    "example": "I learned the word \"sweet\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2583",
    "library": "pet",
    "word": "tasty",
    "meaning": "a.好吃的,可口的",
    "example": "I learned the word \"tasty\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2584",
    "library": "pet",
    "word": "tax",
    "meaning": "税,税款,重负,会费；课以税,使负重荷,斥责",
    "example": "I learned the word \"tax\" today.",
    "part": "n"
  },
  {
    "id": "pet-2585",
    "library": "pet",
    "word": "taxi",
    "meaning": "出租车；乘出租车；用出租车送",
    "example": "I learned the word \"taxi\" today.",
    "part": "n"
  },
  {
    "id": "pet-2586",
    "library": "pet",
    "word": "tea",
    "meaning": "茶,茶叶；[医]茶,茶剂,浸剂",
    "example": "I learned the word \"tea\" today.",
    "part": "n"
  },
  {
    "id": "pet-2587",
    "library": "pet",
    "word": "teach",
    "meaning": "教,讲授,教导,教育；教书,教学,可以教",
    "example": "I learned the word \"teach\" today.",
    "part": "v"
  },
  {
    "id": "pet-2588",
    "library": "pet",
    "word": "swim",
    "meaning": "游泳,漂浮,潮流,眩晕；游泳,游,漂浮,浸,覆盖,充溢,大量拥有,旋转,眩晕；游过,使浮起",
    "example": "I learned the word \"swim\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2589",
    "library": "pet",
    "word": "teacher",
    "meaning": "教师,老师,导师",
    "example": "I learned the word \"teacher\" today.",
    "part": "n"
  },
  {
    "id": "pet-2590",
    "library": "pet",
    "word": "swimmer",
    "meaning": "游泳者",
    "example": "I learned the word \"swimmer\" today.",
    "part": "n"
  },
  {
    "id": "pet-2591",
    "library": "pet",
    "word": "teaching",
    "meaning": "教学,学说,教导",
    "example": "I learned the word \"teaching\" today.",
    "part": "n"
  },
  {
    "id": "pet-2592",
    "library": "pet",
    "word": "team",
    "meaning": "队,组；把马(牛)套在同一辆车上,把...编成一组；驾驶卡车,协作",
    "example": "I learned the word \"team\" today.",
    "part": "n"
  },
  {
    "id": "pet-2593",
    "library": "pet",
    "word": "swimming",
    "meaning": "游泳,眩晕",
    "example": "I learned the word \"swimming\" today.",
    "part": "n"
  },
  {
    "id": "pet-2594",
    "library": "pet",
    "word": "tear",
    "meaning": "泪滴,眼泪,撕,扯,裂缝,激怒,飞奔；流泪,撕破,赶快,飞奔,被撕破；撕裂,戳破,拉掉,撕掉,使分裂,使精神不安,折磨",
    "example": "I learned the word \"tear\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2595",
    "library": "pet",
    "word": "swimming costume",
    "meaning": "游泳衣",
    "example": "Try to use \"swimming costume\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2596",
    "library": "pet",
    "word": "swimming pool",
    "meaning": "游泳池",
    "example": "Try to use \"swimming pool\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2597",
    "library": "pet",
    "word": "swimsuit",
    "meaning": "游泳衣",
    "example": "I learned the word \"swimsuit\" today.",
    "part": "n"
  },
  {
    "id": "pet-2598",
    "library": "pet",
    "word": "technique",
    "meaning": "技巧,技术,方法；[化]工艺方法；技巧",
    "example": "I learned the word \"technique\" today.",
    "part": "n"
  },
  {
    "id": "pet-2599",
    "library": "pet",
    "word": "switch",
    "meaning": "开关,电闸,转换,软枝,鞭子,道岔；转变,切换,摆动,转换,使转轨；转换,变换,摆动",
    "example": "I learned the word \"switch\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2600",
    "library": "pet",
    "word": "technology",
    "meaning": "技术,工业技术,术语；[医]技术学,工艺学",
    "example": "I learned the word \"technology\" today.",
    "part": "n"
  },
  {
    "id": "pet-2601",
    "library": "pet",
    "word": "teenager",
    "meaning": "十三岁到十九岁的少年",
    "example": "I learned the word \"teenager\" today.",
    "part": "n"
  },
  {
    "id": "pet-2602",
    "library": "pet",
    "word": "telephone",
    "meaning": "电话,电话机；打电话",
    "example": "I learned the word \"telephone\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2603",
    "library": "pet",
    "word": "system",
    "meaning": "系统,体系,制度,方式,秩序,分类原则；[计]系统；体制",
    "example": "I learned the word \"system\" today.",
    "part": "n"
  },
  {
    "id": "pet-2604",
    "library": "pet",
    "word": "tell",
    "meaning": "告诉,说,吩咐,断定,知道；讲述,泄密,告发,表明",
    "example": "I learned the word \"tell\" today.",
    "part": "v"
  },
  {
    "id": "pet-2605",
    "library": "pet",
    "word": "table",
    "meaning": "桌子,餐桌,工作台,铭文,表格,表,高原,平地层；搁置,嵌合,制表,把...列入议事日程；[计]表格,模拟运算表",
    "example": "I learned the word \"table\" today.",
    "part": "n"
  },
  {
    "id": "pet-2606",
    "library": "pet",
    "word": "table-cloth",
    "meaning": "台布",
    "example": "I learned the word \"table-cloth\" today.",
    "part": "n"
  },
  {
    "id": "pet-2607",
    "library": "pet",
    "word": "temperature",
    "meaning": "温度,发烧,热度；[化]温度",
    "example": "I learned the word \"temperature\" today.",
    "part": "n"
  },
  {
    "id": "pet-2608",
    "library": "pet",
    "word": "tablet",
    "meaning": "平板,门牌,笔记簿,碑,匾,药片；[化]片剂",
    "example": "I learned the word \"tablet\" today.",
    "part": "n"
  },
  {
    "id": "pet-2609",
    "library": "pet",
    "word": "table tennis",
    "meaning": "乒乓球",
    "example": "Try to use \"table tennis\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2610",
    "library": "pet",
    "word": "take",
    "meaning": "拿,取,抓,带领,获得,就座,接受,吃,吸引,采取,乘,需要,花费；吃掉对方棋子,抓住,起作用,依法获得财产；拿,取,收成,奏效",
    "example": "I learned the word \"take\" today.",
    "part": "v"
  },
  {
    "id": "pet-2611",
    "library": "pet",
    "word": "temporary",
    "meaning": "a.暂时的,临时的；临时工,临时雇员；[计]临时",
    "example": "I learned the word \"temporary\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2612",
    "library": "pet",
    "word": "tennis",
    "meaning": "网球",
    "example": "I learned the word \"tennis\" today.",
    "part": "n"
  },
  {
    "id": "pet-2613",
    "library": "pet",
    "word": "tense",
    "meaning": "a.紧张的,拉紧的；(使)紧张,(使)拉紧；时态",
    "example": "I learned the word \"tense\" today.",
    "part": "n"
  },
  {
    "id": "pet-2614",
    "library": "pet",
    "word": "tent",
    "meaning": "帐篷,帷幕,住处,塞条,塞子；住帐蓬,宿营,暂时居住；用帐篷遮盖,使住帐篷,用塞条嵌入",
    "example": "I learned the word \"tent\" today.",
    "part": "n"
  },
  {
    "id": "pet-2615",
    "library": "pet",
    "word": "term",
    "meaning": "术语,专有名词,期限,学期,任期,条件,价钱,关系,地位,项,界石；称,呼；[计]检索词",
    "example": "I learned the word \"term\" today.",
    "part": "n"
  },
  {
    "id": "pet-2616",
    "library": "pet",
    "word": "terrible",
    "meaning": "a.可怕的,令人恐惧的,极坏的",
    "example": "I learned the word \"terrible\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2617",
    "library": "pet",
    "word": "terribly",
    "meaning": "可怕地,甚为,非常",
    "example": "I learned the word \"terribly\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2618",
    "library": "pet",
    "word": "terrific",
    "meaning": "a.非常好的,极端的,可怕的",
    "example": "I learned the word \"terrific\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2619",
    "library": "pet",
    "word": "takeaway",
    "meaning": "a.外吃的,外卖的；外卖食品的餐馆,外卖食品的商店",
    "example": "I learned the word \"takeaway\" today.",
    "part": "n"
  },
  {
    "id": "pet-2620",
    "library": "pet",
    "word": "take away",
    "meaning": "取走",
    "example": "Try to use \"take away\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-2621",
    "library": "pet",
    "word": "terrified",
    "meaning": "a.受惊吓的；感到恐惧的",
    "example": "I learned the word \"terrified\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2622",
    "library": "pet",
    "word": "test",
    "meaning": "测试,试验,化验,检验,考验,甲壳；测试,试验,化验；接受测验,进行测试",
    "example": "I learned the word \"test\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2623",
    "library": "pet",
    "word": "text",
    "meaning": "文本,正文,课文,主题,圣经文句,乐谱；[计]电文；文本",
    "example": "I learned the word \"text\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2624",
    "library": "pet",
    "word": "take care of",
    "meaning": "照顾；[法]抚养,赡养,扶养",
    "example": "Try to use \"take care of\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-2625",
    "library": "pet",
    "word": "textbook",
    "meaning": "教科书",
    "example": "I learned the word \"textbook\" today.",
    "part": "n"
  },
  {
    "id": "pet-2626",
    "library": "pet",
    "word": "text message",
    "meaning": "正文消息",
    "example": "Try to use \"text message\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2627",
    "library": "pet",
    "word": "take off",
    "meaning": "拿掉,取消,脱下,领走,减去,复制,起飞,离开,岔开；[经]取消",
    "example": "Try to use \"take off\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2628",
    "library": "pet",
    "word": "than",
    "meaning": "比,除...外；比",
    "example": "I learned the word \"than\" today.",
    "part": "conj & prep"
  },
  {
    "id": "pet-2629",
    "library": "pet",
    "word": "thank",
    "meaning": "谢意,感谢；谢谢,感谢",
    "example": "I learned the word \"thank\" today.",
    "part": "v"
  },
  {
    "id": "pet-2630",
    "library": "pet",
    "word": "thanks",
    "meaning": "感谢,谢意,谢忱；interj.谢谢,谢谢你",
    "example": "I learned the word \"thanks\" today.",
    "part": "exclam"
  },
  {
    "id": "pet-2631",
    "library": "pet",
    "word": "thank you",
    "meaning": "谢谢你",
    "example": "Try to use \"thank you\" in a short sentence.",
    "part": "exclam"
  },
  {
    "id": "pet-2632",
    "library": "pet",
    "word": "that",
    "meaning": "a.那,那个；以致,因为；那",
    "example": "I learned the word \"that\" today.",
    "part": "conj, det & pron"
  },
  {
    "id": "pet-2633",
    "library": "pet",
    "word": "take place",
    "meaning": "发生",
    "example": "Try to use \"take place\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-2634",
    "library": "pet",
    "word": "the",
    "meaning": "art.那",
    "example": "I learned the word \"the\" today.",
    "part": "det"
  },
  {
    "id": "pet-2635",
    "library": "pet",
    "word": "theatre",
    "meaning": "戏院,电影院,剧场,全体观众,戏剧,戏剧效果,阶梯式讲堂,场所",
    "example": "I learned the word \"theatre\" today.",
    "part": "n"
  },
  {
    "id": "pet-2636",
    "library": "pet",
    "word": "take up",
    "meaning": "拿起,开始从事,继续,接纳,吸收,占据,拘捕,承兑,认购,绷紧；[经]付清,承兑(汇票),认购(债券等)",
    "example": "Try to use \"take up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2637",
    "library": "pet",
    "word": "their",
    "meaning": "他们的",
    "example": "I learned the word \"their\" today.",
    "part": "det"
  },
  {
    "id": "pet-2638",
    "library": "pet",
    "word": "theirs",
    "meaning": "他们的",
    "example": "I learned the word \"theirs\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2639",
    "library": "pet",
    "word": "talent",
    "meaning": "天才,才能,有才干的人,天资",
    "example": "I learned the word \"talent\" today.",
    "part": "n"
  },
  {
    "id": "pet-2640",
    "library": "pet",
    "word": "them",
    "meaning": "他们,她们,它们",
    "example": "I learned the word \"them\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2641",
    "library": "pet",
    "word": "talented",
    "meaning": "a.天资高的,有才能的",
    "example": "I learned the word \"talented\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2642",
    "library": "pet",
    "word": "themselves",
    "meaning": "他们自己,她们自己,它们自己",
    "example": "I learned the word \"themselves\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2643",
    "library": "pet",
    "word": "talk",
    "meaning": "谈话,交谈,会谈,讲话,演讲,空谈,谣言,方言,语言；讲话,演讲,说话,谈话,交流,闲聊,说闲话；讲,说,讨论,谈论",
    "example": "I learned the word \"talk\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2644",
    "library": "pet",
    "word": "then",
    "meaning": "然后,当时；然后,当时；那时",
    "example": "I learned the word \"then\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2645",
    "library": "pet",
    "word": "talk show",
    "meaning": "访谈节目",
    "example": "Try to use \"talk show\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2646",
    "library": "pet",
    "word": "there",
    "meaning": "在那里",
    "example": "I learned the word \"there\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2647",
    "library": "pet",
    "word": "tall",
    "meaning": "a.高的,长的,夸大的；夸大地",
    "example": "I learned the word \"tall\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2648",
    "library": "pet",
    "word": "therefore",
    "meaning": "因此,所以",
    "example": "I learned the word \"therefore\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2649",
    "library": "pet",
    "word": "tap",
    "meaning": "轻打,水龙头；轻打,轻敲,敲打出,选择,装上嘴子,使流出,开发,分接,向...乞讨；轻叩,轻拍,啪塔啪塔地走",
    "example": "I learned the word \"tap\" today.",
    "part": "n"
  },
  {
    "id": "pet-2650",
    "library": "pet",
    "word": "these",
    "meaning": "这些",
    "example": "I learned the word \"these\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-2651",
    "library": "pet",
    "word": "they",
    "meaning": "他们,它们",
    "example": "I learned the word \"they\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2652",
    "library": "pet",
    "word": "thick",
    "meaning": "a.厚的,粗壮的,浓的,迟钝的,浑浊的,多雾的,过分的,口齿不清的；厚地,密地,浓浓地；最浓处,最厚处,最密集处",
    "example": "I learned the word \"thick\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2653",
    "library": "pet",
    "word": "tired",
    "meaning": "a.疲累的,疲乏的,厌倦的",
    "example": "I learned the word \"tired\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2654",
    "library": "pet",
    "word": "thief",
    "meaning": "小偷,贼；[化]取样",
    "example": "I learned the word \"thief\" today.",
    "part": "n"
  },
  {
    "id": "pet-2655",
    "library": "pet",
    "word": "tiring",
    "meaning": "a.引起疲劳的,累人的；[医]轮箍术(髌骨骨折时)",
    "example": "I learned the word \"tiring\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2656",
    "library": "pet",
    "word": "thin",
    "meaning": "a.薄的,细的,瘦的,稀疏的,稀薄的,淡的,弱的,空洞的；使变薄,使变细,使稀少,使淡；变薄,变细,变少,变淡",
    "example": "I learned the word \"thin\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2657",
    "library": "pet",
    "word": "tissue",
    "meaning": "薄的织物,薄纱,棉纸,组织,一套；[化]组织",
    "example": "I learned the word \"tissue\" today.",
    "part": "n"
  },
  {
    "id": "pet-2658",
    "library": "pet",
    "word": "thing",
    "meaning": "事物,东西,物,用品,事,事件,情况,行为,特征",
    "example": "I learned the word \"thing\" today.",
    "part": "n"
  },
  {
    "id": "pet-2659",
    "library": "pet",
    "word": "title",
    "meaning": "头衔,名称,标题,书名,扉页,权利,资格,冠军,字幕；授予头衔,加标题于；[计]标题",
    "example": "I learned the word \"title\" today.",
    "part": "n"
  },
  {
    "id": "pet-2660",
    "library": "pet",
    "word": "think",
    "meaning": "想,考虑,想起,想像,打算,认为；思考,料想；想法",
    "example": "I learned the word \"think\" today.",
    "part": "v"
  },
  {
    "id": "pet-2661",
    "library": "pet",
    "word": "to",
    "meaning": "到,向,趋于；向前",
    "example": "I learned the word \"to\" today.",
    "part": "prep"
  },
  {
    "id": "pet-2662",
    "library": "pet",
    "word": "toast",
    "meaning": "吐司,烤面包,干杯；敬酒,烤,使暖和；烤,烘",
    "example": "I learned the word \"toast\" today.",
    "part": "n"
  },
  {
    "id": "pet-2663",
    "library": "pet",
    "word": "today",
    "meaning": "今天,当今,现在；今天,当今",
    "example": "I learned the word \"today\" today.",
    "part": "adv & n"
  },
  {
    "id": "pet-2664",
    "library": "pet",
    "word": "toe",
    "meaning": "足趾,趾部,脚趾；以趾踏触,用脚尖走；动脚尖",
    "example": "I learned the word \"toe\" today.",
    "part": "n"
  },
  {
    "id": "pet-2665",
    "library": "pet",
    "word": "together",
    "meaning": "一起,共同,彼此",
    "example": "I learned the word \"together\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2666",
    "library": "pet",
    "word": "toilet",
    "meaning": "厕所,梳妆；梳妆,打扮,上厕所；给...梳妆打扮",
    "example": "I learned the word \"toilet\" today.",
    "part": "n"
  },
  {
    "id": "pet-2667",
    "library": "pet",
    "word": "thirsty",
    "meaning": "a.口渴的,渴望的,干燥的",
    "example": "I learned the word \"thirsty\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2668",
    "library": "pet",
    "word": "tomato",
    "meaning": "番茄,西红柿",
    "example": "I learned the word \"tomato\" today.",
    "part": "n"
  },
  {
    "id": "pet-2669",
    "library": "pet",
    "word": "this",
    "meaning": "这,本；a.这,本；这么",
    "example": "I learned the word \"this\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-2670",
    "library": "pet",
    "word": "tomorrow",
    "meaning": "明天,未来；明天,未来地",
    "example": "I learned the word \"tomorrow\" today.",
    "part": "adv & n"
  },
  {
    "id": "pet-2671",
    "library": "pet",
    "word": "those",
    "meaning": "那些",
    "example": "I learned the word \"those\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-2672",
    "library": "pet",
    "word": "though",
    "meaning": "然而,可是；虽然,纵然",
    "example": "I learned the word \"though\" today.",
    "part": "conj"
  },
  {
    "id": "pet-2673",
    "library": "pet",
    "word": "tongue",
    "meaning": "舌,语言能力,讲话方式,语言；舔,斥责,发...的音；使用舌头,吹管乐器",
    "example": "I learned the word \"tongue\" today.",
    "part": "n"
  },
  {
    "id": "pet-2674",
    "library": "pet",
    "word": "tonight",
    "meaning": "今晚,今夜；今晚,今夜",
    "example": "I learned the word \"tonight\" today.",
    "part": "adv & n"
  },
  {
    "id": "pet-2675",
    "library": "pet",
    "word": "thought",
    "meaning": "想法,思想,思维,关心,挂念；think的过去式和过去分词",
    "example": "I learned the word \"thought\" today.",
    "part": "n"
  },
  {
    "id": "pet-2676",
    "library": "pet",
    "word": "too",
    "meaning": "也,非常,太",
    "example": "I learned the word \"too\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2677",
    "library": "pet",
    "word": "thriller",
    "meaning": "使人激动的东西,使人毛骨悚然的东西,使人毛骨悚然的小说",
    "example": "I learned the word \"thriller\" today.",
    "part": "n"
  },
  {
    "id": "pet-2678",
    "library": "pet",
    "word": "teeth",
    "meaning": "pl.牙齿；[医]牙",
    "example": "I learned the word \"teeth\" today.",
    "part": "n",
    "aliases": [
      "tooth",
      "tooth/teeth"
    ]
  },
  {
    "id": "pet-2679",
    "library": "pet",
    "word": "throat",
    "meaning": "咽喉,喉咙,嗓音；用喉音说,开沟于",
    "example": "I learned the word \"throat\" today.",
    "part": "n"
  },
  {
    "id": "pet-2680",
    "library": "pet",
    "word": "toothache",
    "meaning": "牙痛；[医]牙痛",
    "example": "I learned the word \"toothache\" today.",
    "part": "n"
  },
  {
    "id": "pet-2681",
    "library": "pet",
    "word": "through",
    "meaning": "穿越,从头至尾,到底,因为；经过,穿过；a.对穿的,直达的,完结的",
    "example": "I learned the word \"through\" today.",
    "part": "prep"
  },
  {
    "id": "pet-2682",
    "library": "pet",
    "word": "throw",
    "meaning": "投,掷,抛,发射,摔下,匆匆穿上(或脱下),抛弃,摆脱；丢,掷,抛；投掷,掷骰子,冒险",
    "example": "I learned the word \"throw\" today.",
    "part": "v"
  },
  {
    "id": "pet-2683",
    "library": "pet",
    "word": "toothbrush",
    "meaning": "牙刷",
    "example": "I learned the word \"toothbrush\" today.",
    "part": "n"
  },
  {
    "id": "pet-2684",
    "library": "pet",
    "word": "toothpaste",
    "meaning": "牙膏；[化]牙膏",
    "example": "I learned the word \"toothpaste\" today.",
    "part": "n"
  },
  {
    "id": "pet-2685",
    "library": "pet",
    "word": "throw away",
    "meaning": "丢弃",
    "example": "Try to use \"throw away\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2686",
    "library": "pet",
    "word": "top",
    "meaning": "顶部,顶端,极点,上面,上部,顶篷,最高地位,首位,陀螺；a.最高的,顶上的,头等的；盖,加以顶,高达,超越",
    "example": "I learned the word \"top\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2687",
    "library": "pet",
    "word": "thumb",
    "meaning": "拇指；以拇指拨弄,笨拙地摆弄,用拇指翻旧,迅速翻阅,作搭车手势",
    "example": "I learned the word \"thumb\" today.",
    "part": "n"
  },
  {
    "id": "pet-2688",
    "library": "pet",
    "word": "thunder",
    "meaning": "雷,雷声；打雷,轰隆地响,怒喝；大声喊出,轰隆地发出",
    "example": "I learned the word \"thunder\" today.",
    "part": "n"
  },
  {
    "id": "pet-2689",
    "library": "pet",
    "word": "topic",
    "meaning": "主题,论题,话题",
    "example": "I learned the word \"topic\" today.",
    "part": "n"
  },
  {
    "id": "pet-2690",
    "library": "pet",
    "word": "thunderstorm",
    "meaning": "雷暴雨",
    "example": "I learned the word \"thunderstorm\" today.",
    "part": "n"
  },
  {
    "id": "pet-2691",
    "library": "pet",
    "word": "torch",
    "meaning": "火把,启发之物；[化]火炬",
    "example": "I learned the word \"torch\" today.",
    "part": "n"
  },
  {
    "id": "pet-2692",
    "library": "pet",
    "word": "tick",
    "meaning": "滴答声,一瞬间,壁虱,褥套,信用,赊欠；滴答响,活动；滴答地记录,标记号于",
    "example": "I learned the word \"tick\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2693",
    "library": "pet",
    "word": "ticket",
    "meaning": "票,券,车票,标签,入场券,证明书；加标签于,为...购票",
    "example": "I learned the word \"ticket\" today.",
    "part": "n"
  },
  {
    "id": "pet-2694",
    "library": "pet",
    "word": "total",
    "meaning": "a.全体的,总的,全然的；计算...的总和,共计为；合计",
    "example": "I learned the word \"total\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2695",
    "library": "pet",
    "word": "tidy",
    "meaning": "椅子的背罩,装杂物的容器；a.整齐的,有条理的；弄整齐,收拾,整理",
    "example": "I learned the word \"tidy\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-2696",
    "library": "pet",
    "word": "totally",
    "meaning": "完全地",
    "example": "I learned the word \"totally\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2697",
    "library": "pet",
    "word": "touch",
    "meaning": "触觉,碰,触,机灵,轻触,格调,少许,缺点,弹力；接触,触摸,触及,使接触,达到,涉及,影响到,使轻度受害,感动；触摸,接近,涉及,提到",
    "example": "I learned the word \"touch\" today.",
    "part": "v"
  },
  {
    "id": "pet-2698",
    "library": "pet",
    "word": "tidy up",
    "meaning": "整理",
    "example": "Try to use \"tidy up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2699",
    "library": "pet",
    "word": "tour",
    "meaning": "旅游,观光旅行,任期；旅行,周游,巡回；周游,观光,游历,使巡回演出",
    "example": "I learned the word \"tour\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2700",
    "library": "pet",
    "word": "tour guide",
    "meaning": "旅游向导,导游",
    "example": "Try to use \"tour guide\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2701",
    "library": "pet",
    "word": "tie",
    "meaning": "带子,线,鞋带,领带,领结,关系,束缚,平局,不分胜负；系,打结,扎,约束,与...成平局；结合,打结,不分胜负",
    "example": "I learned the word \"tie\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2702",
    "library": "pet",
    "word": "tourism",
    "meaning": "观光业,游览；[经]旅游业",
    "example": "I learned the word \"tourism\" today.",
    "part": "n"
  },
  {
    "id": "pet-2703",
    "library": "pet",
    "word": "tourist",
    "meaning": "观光客,旅行者；a.旅游的",
    "example": "I learned the word \"tourist\" today.",
    "part": "n"
  },
  {
    "id": "pet-2704",
    "library": "pet",
    "word": "tourist information centre",
    "meaning": "观光客,旅行者；a.旅游的",
    "example": "Try to use \"tourist information centre\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2705",
    "library": "pet",
    "word": "tiger",
    "meaning": "老虎,虎,凶暴的人",
    "example": "I learned the word \"tiger\" today.",
    "part": "n"
  },
  {
    "id": "pet-2706",
    "library": "pet",
    "word": "tournament",
    "meaning": "比赛,竞赛,锦标赛,联赛",
    "example": "I learned the word \"tournament\" today.",
    "part": "n"
  },
  {
    "id": "pet-2707",
    "library": "pet",
    "word": "tight",
    "meaning": "a.紧的,密封的,吝啬的,严厉的；紧紧地",
    "example": "I learned the word \"tight\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2708",
    "library": "pet",
    "word": "towel",
    "meaning": "手巾,毛巾；擦干身子",
    "example": "I learned the word \"towel\" today.",
    "part": "n"
  },
  {
    "id": "pet-2709",
    "library": "pet",
    "word": "tights",
    "meaning": "紧身衣裤",
    "example": "I learned the word \"tights\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-2710",
    "library": "pet",
    "word": "tower",
    "meaning": "塔,高楼,堡垒；高耸,翱翔",
    "example": "I learned the word \"tower\" today.",
    "part": "n"
  },
  {
    "id": "pet-2711",
    "library": "pet",
    "word": "town",
    "meaning": "城镇,市,镇；[法]城镇,城市,闹市",
    "example": "I learned the word \"town\" today.",
    "part": "n"
  },
  {
    "id": "pet-2712",
    "library": "pet",
    "word": "till",
    "meaning": "直到,在...以前,迄；直到...为止；耕种",
    "example": "I learned the word \"till\" today.",
    "part": "conj & prep"
  },
  {
    "id": "pet-2713",
    "library": "pet",
    "word": "toy",
    "meaning": "玩具,小玩艺儿,小型的东西,消遣；a.供玩耍的,作为玩具的；玩弄,戏弄,调情",
    "example": "I learned the word \"toy\" today.",
    "part": "n"
  },
  {
    "id": "pet-2714",
    "library": "pet",
    "word": "track",
    "meaning": "轨迹,足迹,径迹,小道,轨道,磁轨,途径；循路而行,追踪,通过,用纤拉；追踪,留下足迹,沿轨道运行",
    "example": "I learned the word \"track\" today.",
    "part": "n"
  },
  {
    "id": "pet-2715",
    "library": "pet",
    "word": "time",
    "meaning": "时间,时侯,时机,时期,期限,次数,节拍,暂停,规定时间；测定...的时间,记录...的时间,计时,定时；a.时间的,记时的,定时的,定期的,分期的",
    "example": "I learned the word \"time\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2716",
    "library": "pet",
    "word": "tracksuit",
    "meaning": "运动服",
    "example": "I learned the word \"tracksuit\" today.",
    "part": "n"
  },
  {
    "id": "pet-2717",
    "library": "pet",
    "word": "trade",
    "meaning": "贸易,商业,交易,生意,职业,顾客,信风；进行交易,做买卖,经商,对换,购物；用...进行交换",
    "example": "I learned the word \"trade\" today.",
    "part": "n"
  },
  {
    "id": "pet-2718",
    "library": "pet",
    "word": "traditional",
    "meaning": "a.传统的,惯例的；[经]传统的,惯例的",
    "example": "I learned the word \"traditional\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2719",
    "library": "pet",
    "word": "the last time",
    "meaning": "art.那",
    "example": "Try to use \"the last time\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2720",
    "library": "pet",
    "word": "traffic",
    "meaning": "交通,通行,运输,交通量,贸易,交易,交往,通信量；交易,做买卖；用...作交换",
    "example": "I learned the word \"traffic\" today.",
    "part": "n"
  },
  {
    "id": "pet-2721",
    "library": "pet",
    "word": "traffic jam",
    "meaning": "塞车,交通阻塞",
    "example": "Try to use \"traffic jam\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2722",
    "library": "pet",
    "word": "timetable",
    "meaning": "时间表",
    "example": "I learned the word \"timetable\" today.",
    "part": "n"
  },
  {
    "id": "pet-2723",
    "library": "pet",
    "word": "train",
    "meaning": "火车,列车,行列,长队,一连串的后果,顺序；训练,教育,对准；受训练,锻炼",
    "example": "I learned the word \"train\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2724",
    "library": "pet",
    "word": "tin",
    "meaning": "锡,马口铁,罐头；在...镀锡于；a.锡制的",
    "example": "I learned the word \"tin\" today.",
    "part": "n"
  },
  {
    "id": "pet-2725",
    "library": "pet",
    "word": "trainer",
    "meaning": "训练员,驯马师；[电]列车器",
    "example": "I learned the word \"trainer\" today.",
    "part": "n"
  },
  {
    "id": "pet-2726",
    "library": "pet",
    "word": "tiny",
    "meaning": "a.很少的,微小的",
    "example": "I learned the word \"tiny\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2727",
    "library": "pet",
    "word": "tip",
    "meaning": "顶,尖端,梢,末端,倾斜,垃圾场,小费,轻击,指点,秘密消息；装顶端,使倾斜,使翻倒,泄露,告诫,暗示,给...小费,轻击；倾斜,翻倒,倾覆,踮脚走,给小费",
    "example": "I learned the word \"tip\" today.",
    "part": "n"
  },
  {
    "id": "pet-2728",
    "library": "pet",
    "word": "training",
    "meaning": "训练,培养；[医]训练",
    "example": "I learned the word \"training\" today.",
    "part": "n"
  },
  {
    "id": "pet-2729",
    "library": "pet",
    "word": "twin",
    "meaning": "双胞胎中一人,一对非常相像的人(或物)中的一个；a.双胞胎的,成对的,孪生的；生双胞胎,成对",
    "example": "I learned the word \"twin\" today.",
    "part": "n"
  },
  {
    "id": "pet-2730",
    "library": "pet",
    "word": "tram",
    "meaning": "电车轨道,煤车,纬纱,纬丝；用煤车运载；乘电车",
    "example": "I learned the word \"tram\" today.",
    "part": "n"
  },
  {
    "id": "pet-2731",
    "library": "pet",
    "word": "type",
    "meaning": "类型,样式,典型,榜样,标志,符号,型,式；打字；作为代表,测定类型,用打字机打",
    "example": "I learned the word \"type\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2732",
    "library": "pet",
    "word": "transfer",
    "meaning": "迁移,移动,传递,转让,转移,过户,汇兑,换车；使转移,调转,调任,改变,传递,转让；转移,转学,转职,换车",
    "example": "I learned the word \"transfer\" today.",
    "part": "v"
  },
  {
    "id": "pet-2733",
    "library": "pet",
    "word": "translate",
    "meaning": "翻译,解释,转化,转变为,调动；翻译,被译；[计]转换",
    "example": "I learned the word \"translate\" today.",
    "part": "v"
  },
  {
    "id": "pet-2734",
    "library": "pet",
    "word": "translation",
    "meaning": "翻译,译文,转化,调任,平移,转译；[计]转换",
    "example": "I learned the word \"translation\" today.",
    "part": "n"
  },
  {
    "id": "pet-2735",
    "library": "pet",
    "word": "typical",
    "meaning": "a.典型的,象征性的；[医]典型的",
    "example": "I learned the word \"typical\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2736",
    "library": "pet",
    "word": "transport",
    "meaning": "运输,运输工具,激动,狂喜,流放犯；传送,运输,流放；[计]传送",
    "example": "I learned the word \"transport\" today.",
    "part": "n"
  },
  {
    "id": "pet-2737",
    "library": "pet",
    "word": "typically",
    "meaning": "代表性地；作为特色地",
    "example": "I learned the word \"typically\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2738",
    "library": "pet",
    "word": "trash can",
    "meaning": "垃圾桶",
    "example": "Try to use \"trash can\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2739",
    "library": "pet",
    "word": "tyre",
    "meaning": "轮胎；装轮胎于",
    "example": "I learned the word \"tyre\" today.",
    "part": "n"
  },
  {
    "id": "pet-2740",
    "library": "pet",
    "word": "travel",
    "meaning": "旅行,游历,行进；旅行,行进,移动,被传播；旅行,通过,使移动",
    "example": "I learned the word \"travel\" today.",
    "part": "v"
  },
  {
    "id": "pet-2741",
    "library": "pet",
    "word": "travel agent",
    "meaning": "旅行代理人；[法]旅行业者,旅行社职员",
    "example": "Try to use \"travel agent\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2742",
    "library": "pet",
    "word": "tree",
    "meaning": "树,木料,树状物；把...赶上树；[计]树",
    "example": "I learned the word \"tree\" today.",
    "part": "n"
  },
  {
    "id": "pet-2743",
    "library": "pet",
    "word": "trend",
    "meaning": "趋势,倾向,走向；倾向,转向；[计]趋势",
    "example": "I learned the word \"trend\" today.",
    "part": "n"
  },
  {
    "id": "pet-2744",
    "library": "pet",
    "word": "trick",
    "meaning": "诡计,欺诈,谋略,恶作剧,习惯,决窍；愚弄,欺骗,装饰；哄骗,戏弄",
    "example": "I learned the word \"trick\" today.",
    "part": "n"
  },
  {
    "id": "pet-2745",
    "library": "pet",
    "word": "trip",
    "meaning": "旅行,绊倒,摔倒,失足,差错,旅程；使跌倒,使犯错,使失败；轻快地走,绊倒,失误,犯错,结巴,旅行,远足",
    "example": "I learned the word \"trip\" today.",
    "part": "n"
  },
  {
    "id": "pet-2746",
    "library": "pet",
    "word": "ugly",
    "meaning": "a.丑陋的,邪恶的,险恶的,不祥的；丑陋的人(或物)",
    "example": "I learned the word \"ugly\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2747",
    "library": "pet",
    "word": "umbrella",
    "meaning": "伞,雨伞,保护伞；a.伞的,包罗万象的；用伞遮掩",
    "example": "I learned the word \"umbrella\" today.",
    "part": "n"
  },
  {
    "id": "pet-2748",
    "library": "pet",
    "word": "trouble",
    "meaning": "烦恼,麻烦,困难,动乱,故障；困扰,麻烦,使烦恼,折磨；烦恼,费心",
    "example": "I learned the word \"trouble\" today.",
    "part": "n"
  },
  {
    "id": "pet-2749",
    "library": "pet",
    "word": "unable",
    "meaning": "a.不能的,不会的；[法]无能力的,无资格的,没有办法的",
    "example": "I learned the word \"unable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2750",
    "library": "pet",
    "word": "trousers",
    "meaning": "pl.裤子,长裤",
    "example": "I learned the word \"trousers\" today.",
    "part": "n pl"
  },
  {
    "id": "pet-2751",
    "library": "pet",
    "word": "unbelievable",
    "meaning": "a.难以置信的",
    "example": "I learned the word \"unbelievable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2752",
    "library": "pet",
    "word": "uncle",
    "meaning": "叔父,伯父,姨丈",
    "example": "I learned the word \"uncle\" today.",
    "part": "n"
  },
  {
    "id": "pet-2753",
    "library": "pet",
    "word": "trunk",
    "meaning": "树干,干线,躯干,主干,象鼻,箱子；把...放入旅行箱内；a.树干的,躯干的,干线的,箱形的",
    "example": "I learned the word \"trunk\" today.",
    "part": "n"
  },
  {
    "id": "pet-2754",
    "library": "pet",
    "word": "uncomfortable",
    "meaning": "a.不舒服的,不自在的,不安的",
    "example": "I learned the word \"uncomfortable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2755",
    "library": "pet",
    "word": "under",
    "meaning": "在...之下,低于；a.下面的,从属的；在下面",
    "example": "I learned the word \"under\" today.",
    "part": "prep"
  },
  {
    "id": "pet-2756",
    "library": "pet",
    "word": "true",
    "meaning": "a.真实的,正确的,忠诚的,可靠的,纯粹的,正式的；真实,准确；真实地,准确地",
    "example": "I learned the word \"true\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2757",
    "library": "pet",
    "word": "underground",
    "meaning": "地下,地铁,地道,秘密活动；a.地下的,秘密的；在地下,秘密地",
    "example": "I learned the word \"underground\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2758",
    "library": "pet",
    "word": "trumpet",
    "meaning": "喇叭,小号,喇叭声；吹喇叭；用喇叭吹出,吹嘘",
    "example": "I learned the word \"trumpet\" today.",
    "part": "n"
  },
  {
    "id": "pet-2759",
    "library": "pet",
    "word": "trust",
    "meaning": "信任,信赖,相信,受托,职责,信心,托拉斯；a.信托的,托拉斯的；信赖,信任,相信,盼望,赊卖给",
    "example": "I learned the word \"trust\" today.",
    "part": "v"
  },
  {
    "id": "pet-2760",
    "library": "pet",
    "word": "underline",
    "meaning": "在...下面划线,作...的衬里,强调；下划线,图下说明文字；[计]加下划线",
    "example": "I learned the word \"underline\" today.",
    "part": "v"
  },
  {
    "id": "pet-2761",
    "library": "pet",
    "word": "truth",
    "meaning": "事实,实情；[法]真实,真相,事实",
    "example": "I learned the word \"truth\" today.",
    "part": "n"
  },
  {
    "id": "pet-2762",
    "library": "pet",
    "word": "underneath",
    "meaning": "在下面；在...的下面",
    "example": "I learned the word \"underneath\" today.",
    "part": "prep"
  },
  {
    "id": "pet-2763",
    "library": "pet",
    "word": "try",
    "meaning": "尝试,试验,审理,审判；试,尝试,试验,考验,审问,提炼；尝试,试图",
    "example": "I learned the word \"try\" today.",
    "part": "v"
  },
  {
    "id": "pet-2764",
    "library": "pet",
    "word": "underpants",
    "meaning": "衬裤,短衬裤",
    "example": "I learned the word \"underpants\" today.",
    "part": "n"
  },
  {
    "id": "pet-2765",
    "library": "pet",
    "word": "understand",
    "meaning": "理解,了解,领会,听说,懂；懂得,认为",
    "example": "I learned the word \"understand\" today.",
    "part": "v"
  },
  {
    "id": "pet-2766",
    "library": "pet",
    "word": "underwear",
    "meaning": "内衣",
    "example": "I learned the word \"underwear\" today.",
    "part": "n"
  },
  {
    "id": "pet-2767",
    "library": "pet",
    "word": "try on",
    "meaning": "试穿,试验",
    "example": "Try to use \"try on\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2768",
    "library": "pet",
    "word": "undress",
    "meaning": "使脱衣服,暴露,使卸去装饰；脱衣服",
    "example": "I learned the word \"undress\" today.",
    "part": "v"
  },
  {
    "id": "pet-2769",
    "library": "pet",
    "word": "unemployed",
    "meaning": "a.失业的,未被利用的；[经]没有被雇用的,失业的,没有被利用的",
    "example": "I learned the word \"unemployed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2770",
    "library": "pet",
    "word": "T-shirt",
    "meaning": "圆领汗衫,T恤",
    "example": "I learned the word \"T-shirt\" today.",
    "part": "n"
  },
  {
    "id": "pet-2771",
    "library": "pet",
    "word": "unemployment",
    "meaning": "失业,失业人数；[经]失业",
    "example": "I learned the word \"unemployment\" today.",
    "part": "n"
  },
  {
    "id": "pet-2772",
    "library": "pet",
    "word": "tube",
    "meaning": "管,软管,隧道；把...装管,使通过管子；[计]管子",
    "example": "I learned the word \"tube\" today.",
    "part": "n"
  },
  {
    "id": "pet-2773",
    "library": "pet",
    "word": "unexpected",
    "meaning": "a.料想不到的,突然的,意外的；[法]不能预料的,意外的",
    "example": "I learned the word \"unexpected\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2774",
    "library": "pet",
    "word": "unfair",
    "meaning": "a.不公平的,不正直的,不正当的；[法]不正直的,不公平的,偏颇的",
    "example": "I learned the word \"unfair\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2775",
    "library": "pet",
    "word": "unfit",
    "meaning": "a.不适当的,不胜任的,不健康的；使不相宜,使不合格",
    "example": "I learned the word \"unfit\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2776",
    "library": "pet",
    "word": "tuna",
    "meaning": "金枪鱼,金枪鱼肉",
    "example": "I learned the word \"tuna\" today.",
    "part": "n"
  },
  {
    "id": "pet-2777",
    "library": "pet",
    "word": "unforgettable",
    "meaning": "a.忘不了的,令人难忘的",
    "example": "I learned the word \"unforgettable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2778",
    "library": "pet",
    "word": "tune",
    "meaning": "歌曲,主旋律,心情,声调,和谐,一致,语调,程度；为...调音,调整,调谐,使一致；协调,调谐",
    "example": "I learned the word \"tune\" today.",
    "part": "n"
  },
  {
    "id": "pet-2779",
    "library": "pet",
    "word": "tunnel",
    "meaning": "隧道,地下道；挖隧道；掘隧道于",
    "example": "I learned the word \"tunnel\" today.",
    "part": "n"
  },
  {
    "id": "pet-2780",
    "library": "pet",
    "word": "unfortunately",
    "meaning": "恐怕,不幸的是",
    "example": "I learned the word \"unfortunately\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2781",
    "library": "pet",
    "word": "turkey",
    "meaning": "火鸡,无用的家伙,土耳其",
    "example": "I learned the word \"turkey\" today.",
    "part": "n"
  },
  {
    "id": "pet-2782",
    "library": "pet",
    "word": "unfriendly",
    "meaning": "不友善地",
    "example": "I learned the word \"unfriendly\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2783",
    "library": "pet",
    "word": "unhappy",
    "meaning": "a.不快乐的,不幸的,不适当的",
    "example": "I learned the word \"unhappy\" today.",
    "part": "n"
  },
  {
    "id": "pet-2784",
    "library": "pet",
    "word": "turn",
    "meaning": "转弯,转动,旋转,翻转,一圈,顺次,改动,变化,性格,特色,形状,转折；使旋转,转弯,转动,使转向,驱赶,阻挡,兑换,改写,使作对,绕过,使流通；转动,转弯,转向,翻转,回转,改变,转身,变成,变质,晕眩,易脱手",
    "example": "I learned the word \"turn\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2785",
    "library": "pet",
    "word": "unhealthy",
    "meaning": "a.不健康的",
    "example": "I learned the word \"unhealthy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2786",
    "library": "pet",
    "word": "uniform",
    "meaning": "制服；a.统一的,一律的,始终如一的",
    "example": "I learned the word \"uniform\" today.",
    "part": "n"
  },
  {
    "id": "pet-2787",
    "library": "pet",
    "word": "union",
    "meaning": "联盟,联合,结合,工会；[化]联合；联管节",
    "example": "I learned the word \"union\" today.",
    "part": "n"
  },
  {
    "id": "pet-2788",
    "library": "pet",
    "word": "unit",
    "meaning": "单位,分队,部队,单元,部件,装置；a.单位的,单元的；[计]单元常数",
    "example": "I learned the word \"unit\" today.",
    "part": "n"
  },
  {
    "id": "pet-2789",
    "library": "pet",
    "word": "unkind",
    "meaning": "a.不仁慈的,不亲切的",
    "example": "I learned the word \"unkind\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2790",
    "library": "pet",
    "word": "turn down",
    "meaning": "拒绝；[法]拒绝,摒斥",
    "example": "Try to use \"turn down\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2791",
    "library": "pet",
    "word": "unknown",
    "meaning": "a.不知道的,未知的,陌生的；未知物,未知数",
    "example": "I learned the word \"unknown\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2792",
    "library": "pet",
    "word": "unimportant",
    "meaning": "a.不重要的",
    "example": "I learned the word \"unimportant\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2793",
    "library": "pet",
    "word": "turning",
    "meaning": "旋转,转弯处,车削工作；[化]车削",
    "example": "I learned the word \"turning\" today.",
    "part": "n"
  },
  {
    "id": "pet-2794",
    "library": "pet",
    "word": "uninterested",
    "meaning": "a.不感兴趣的,无利害关系的",
    "example": "I learned the word \"uninterested\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2795",
    "library": "pet",
    "word": "uninteresting",
    "meaning": "a.引不起兴趣的,无趣味的,乏味的",
    "example": "I learned the word \"uninteresting\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2796",
    "library": "pet",
    "word": "turn into",
    "meaning": "进入,(使)变成",
    "example": "Try to use \"turn into\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2797",
    "library": "pet",
    "word": "universe",
    "meaning": "宇宙,星系,(思想等)范围",
    "example": "I learned the word \"universe\" today.",
    "part": "n"
  },
  {
    "id": "pet-2798",
    "library": "pet",
    "word": "university",
    "meaning": "大学",
    "example": "I learned the word \"university\" today.",
    "part": "n"
  },
  {
    "id": "pet-2799",
    "library": "pet",
    "word": "turn off",
    "meaning": "关掉,卖掉,使转变方向,解雇,生产,制造,车削成,使厌烦,拐弯,变成",
    "example": "Try to use \"turn off\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2800",
    "library": "pet",
    "word": "unless",
    "meaning": "除非；除...之外",
    "example": "I learned the word \"unless\" today.",
    "part": "conj"
  },
  {
    "id": "pet-2801",
    "library": "pet",
    "word": "unlikely",
    "meaning": "a.不太可能的",
    "example": "I learned the word \"unlikely\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2802",
    "library": "pet",
    "word": "turn on",
    "meaning": "开,开始,变得兴奋,突然显出",
    "example": "Try to use \"turn on\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2803",
    "library": "pet",
    "word": "unlucky",
    "meaning": "a.不吉利的,不祥的,不幸的",
    "example": "I learned the word \"unlucky\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2804",
    "library": "pet",
    "word": "unnecessary",
    "meaning": "a.不必要的",
    "example": "I learned the word \"unnecessary\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2805",
    "library": "pet",
    "word": "turn up",
    "meaning": "开大,找到,发现,出现,突然发生,翻掘出,翘起,折起,卷起,拐入,使仰卧",
    "example": "Try to use \"turn up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2806",
    "library": "pet",
    "word": "unpack",
    "meaning": "从包裹中取出,卸下,打开；打开包裹；[计]拆开",
    "example": "I learned the word \"unpack\" today.",
    "part": "v"
  },
  {
    "id": "pet-2807",
    "library": "pet",
    "word": "unpleasant",
    "meaning": "a.使人不愉快的,使人厌恶的,煞风景的",
    "example": "I learned the word \"unpleasant\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2808",
    "library": "pet",
    "word": "twice",
    "meaning": "两次,两倍",
    "example": "I learned the word \"twice\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2809",
    "library": "pet",
    "word": "untidy",
    "meaning": "a.不整齐的,懒散的,混乱的",
    "example": "I learned the word \"untidy\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2810",
    "library": "pet",
    "word": "until",
    "meaning": "直到,在...以前；直到...时,在...以前",
    "example": "I learned the word \"until\" today.",
    "part": "prep & conj"
  },
  {
    "id": "pet-2811",
    "library": "pet",
    "word": "via",
    "meaning": "经由,经过,通过；[医]病毒灭活剂",
    "example": "I learned the word \"via\" today.",
    "part": "prep"
  },
  {
    "id": "pet-2812",
    "library": "pet",
    "word": "unusual",
    "meaning": "a.不寻常的,罕见的,与众不同的",
    "example": "I learned the word \"unusual\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2813",
    "library": "pet",
    "word": "video",
    "meaning": "影像,电视；a.图像的,电视的",
    "example": "I learned the word \"video\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2814",
    "library": "pet",
    "word": "unwell",
    "meaning": "a.不舒服的,生病的,身体不好的",
    "example": "I learned the word \"unwell\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2815",
    "library": "pet",
    "word": "video clip",
    "meaning": "视频片段",
    "example": "Try to use \"video clip\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2816",
    "library": "pet",
    "word": "up",
    "meaning": "a.向上的,起床的,涨的；向上,上涨；在...上面,向...的较高处",
    "example": "I learned the word \"up\" today.",
    "part": "adv & prep"
  },
  {
    "id": "pet-2817",
    "library": "pet",
    "word": "video game",
    "meaning": "[计]电视游戏",
    "example": "Try to use \"video game\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2818",
    "library": "pet",
    "word": "view",
    "meaning": "视野,风景,见解,视力,观看,视图,指望,意图,印象；看,考虑,视察,查看,估量；[计]视图",
    "example": "I learned the word \"view\" today.",
    "part": "n"
  },
  {
    "id": "pet-2819",
    "library": "pet",
    "word": "village",
    "meaning": "村庄；a.乡村的,村庄的",
    "example": "I learned the word \"village\" today.",
    "part": "n"
  },
  {
    "id": "pet-2820",
    "library": "pet",
    "word": "violin",
    "meaning": "小提琴",
    "example": "I learned the word \"violin\" today.",
    "part": "n"
  },
  {
    "id": "pet-2821",
    "library": "pet",
    "word": "virus",
    "meaning": "病毒,滤过性病毒,毒害；[化]病毒",
    "example": "I learned the word \"virus\" today.",
    "part": "n"
  },
  {
    "id": "pet-2822",
    "library": "pet",
    "word": "update",
    "meaning": "更新,使现代化；更新；[计]更新",
    "example": "I learned the word \"update\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2823",
    "library": "pet",
    "word": "upload",
    "meaning": "[计]上装,加载,储入",
    "example": "I learned the word \"upload\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2824",
    "library": "pet",
    "word": "visa",
    "meaning": "签证；签发",
    "example": "I learned the word \"visa\" today.",
    "part": "n"
  },
  {
    "id": "pet-2825",
    "library": "pet",
    "word": "upon",
    "meaning": "在...之上,迫近,紧接着",
    "example": "I learned the word \"upon\" today.",
    "part": "prep"
  },
  {
    "id": "pet-2826",
    "library": "pet",
    "word": "visit",
    "meaning": "拜访,访问,游览,视察；拜访,访问,参观,视察,降临；访问,参观,闲谈",
    "example": "I learned the word \"visit\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2827",
    "library": "pet",
    "word": "visitor",
    "meaning": "参观者,游客,访客；[法]视察人,检视人,检查员",
    "example": "I learned the word \"visitor\" today.",
    "part": "n"
  },
  {
    "id": "pet-2828",
    "library": "pet",
    "word": "vocabulary",
    "meaning": "词汇(量),词汇表；[计]词表",
    "example": "I learned the word \"vocabulary\" today.",
    "part": "n"
  },
  {
    "id": "pet-2829",
    "library": "pet",
    "word": "voice",
    "meaning": "声音,嗓音,嗓子,愿望,发言权,表达,喉舌,语态；表达,吐露,调音",
    "example": "I learned the word \"voice\" today.",
    "part": "n"
  },
  {
    "id": "pet-2830",
    "library": "pet",
    "word": "upper",
    "meaning": "a.上面的,较高的,上级的,上院的,穿在外面的,北部的,地表的,后期的；鞋帮,上齿",
    "example": "I learned the word \"upper\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2831",
    "library": "pet",
    "word": "volleyball",
    "meaning": "排球",
    "example": "I learned the word \"volleyball\" today.",
    "part": "n"
  },
  {
    "id": "pet-2832",
    "library": "pet",
    "word": "upset",
    "meaning": "a.弄翻的,混乱的,心烦的；弄翻,颠覆,推翻,打乱,使不适,使心烦；翻倒",
    "example": "I learned the word \"upset\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2833",
    "library": "pet",
    "word": "volume",
    "meaning": "册,卷,体积,容量,大量,许多,份量,音量；成团卷起；把...收集成卷",
    "example": "I learned the word \"volume\" today.",
    "part": "n"
  },
  {
    "id": "pet-2834",
    "library": "pet",
    "word": "upstairs",
    "meaning": "a.楼上的；在楼上,向楼上,处于更高地位；楼层",
    "example": "I learned the word \"upstairs\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-2835",
    "library": "pet",
    "word": "volunteer",
    "meaning": "志愿者；a.志愿的；自愿",
    "example": "I learned the word \"volunteer\" today.",
    "part": "n"
  },
  {
    "id": "pet-2836",
    "library": "pet",
    "word": "up to",
    "meaning": "从事于(坏事),忙于,胜任,能做,适合,适于",
    "example": "Try to use \"up to\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-2837",
    "library": "pet",
    "word": "vote",
    "meaning": "投票,选举,选票,表决,选举权,得票数；投票,选举；投票选举,投票决定,公认,使投票",
    "example": "I learned the word \"vote\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2838",
    "library": "pet",
    "word": "vowel",
    "meaning": "元音；a.元音的",
    "example": "I learned the word \"vowel\" today.",
    "part": "n"
  },
  {
    "id": "pet-2839",
    "library": "pet",
    "word": "up to date",
    "meaning": "最近的,最新的；[经]直到最近的,现代的",
    "example": "Try to use \"up to date\" in a short sentence.",
    "part": "prep phr"
  },
  {
    "id": "pet-2840",
    "library": "pet",
    "word": "urgent",
    "meaning": "a.紧急的,急迫的,催逼的；[经]紧急的,急迫的",
    "example": "I learned the word \"urgent\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2841",
    "library": "pet",
    "word": "urgently",
    "meaning": "急切地；迫切地；紧急地",
    "example": "I learned the word \"urgently\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2842",
    "library": "pet",
    "word": "us",
    "meaning": "我们；[经]美国",
    "example": "I learned the word \"us\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2843",
    "library": "pet",
    "word": "use",
    "meaning": "使用,习惯,使用价值,用法,使用权；使用,利用,运用,耗费；惯常",
    "example": "I learned the word \"use\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2844",
    "library": "pet",
    "word": "wait",
    "meaning": "等待,等候；等候,期待,延缓,伺候,推迟；等,等候,耽搁,伺候用餐",
    "example": "I learned the word \"wait\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2845",
    "library": "pet",
    "word": "waiter",
    "meaning": "侍者",
    "example": "I learned the word \"waiter\" today.",
    "part": "n"
  },
  {
    "id": "pet-2846",
    "library": "pet",
    "word": "waiting room",
    "meaning": "候车室,等候室；[医]侯诊室,等待室",
    "example": "Try to use \"waiting room\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2847",
    "library": "pet",
    "word": "used to",
    "meaning": "过去经常(做)...,过去有规律地发生",
    "example": "Try to use \"used to\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-2848",
    "library": "pet",
    "word": "waitress",
    "meaning": "女侍者,女服务员",
    "example": "I learned the word \"waitress\" today.",
    "part": "n"
  },
  {
    "id": "pet-2849",
    "library": "pet",
    "word": "wake",
    "meaning": "叫醒,激发；醒来,醒着,觉醒,活跃起来；守侯,守夜,尾迹,痕迹",
    "example": "I learned the word \"wake\" today.",
    "part": "v"
  },
  {
    "id": "pet-2850",
    "library": "pet",
    "word": "wake up",
    "meaning": "醒来",
    "example": "Try to use \"wake up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2851",
    "library": "pet",
    "word": "walk",
    "meaning": "走,散步,步行,行走的路程,竞走,散步场所；走路,步行,处世；走过,遛,使走,护送...走",
    "example": "I learned the word \"walk\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2852",
    "library": "pet",
    "word": "useful",
    "meaning": "a.有用的,有益的；[机]有用的,有效的",
    "example": "I learned the word \"useful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2853",
    "library": "pet",
    "word": "walking",
    "meaning": "步行,步态；a.步行的,步行用的",
    "example": "I learned the word \"walking\" today.",
    "part": "n"
  },
  {
    "id": "pet-2854",
    "library": "pet",
    "word": "user",
    "meaning": "使用者；[计]用户",
    "example": "I learned the word \"user\" today.",
    "part": "n"
  },
  {
    "id": "pet-2855",
    "library": "pet",
    "word": "wall",
    "meaning": "墙,墙壁,垣,内壁,分界物,屏障；a.墙的；给...建墙,禁闭,用墙围住",
    "example": "I learned the word \"wall\" today.",
    "part": "n"
  },
  {
    "id": "pet-2856",
    "library": "pet",
    "word": "usual",
    "meaning": "a.平常的,通常的",
    "example": "I learned the word \"usual\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2857",
    "library": "pet",
    "word": "wallet",
    "meaning": "皮夹；[法]皮包,皮夹,钱袋",
    "example": "I learned the word \"wallet\" today.",
    "part": "n"
  },
  {
    "id": "pet-2858",
    "library": "pet",
    "word": "usually",
    "meaning": "通常,大抵",
    "example": "I learned the word \"usually\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2859",
    "library": "pet",
    "word": "want",
    "meaning": "需要的东西,缺乏,贫困,需要；要,希望,应该,缺少；生活困苦,需要,缺少",
    "example": "I learned the word \"want\" today.",
    "part": "v"
  },
  {
    "id": "pet-2860",
    "library": "pet",
    "word": "war",
    "meaning": "战争,战争状态,战术,军事,冲突,斗争,竞争；进行战争,作战,打仗,战斗；a.战争的,战时用的",
    "example": "I learned the word \"war\" today.",
    "part": "n"
  },
  {
    "id": "pet-2861",
    "library": "pet",
    "word": "wardrobe",
    "meaning": "衣橱,衣室,全部衣服",
    "example": "I learned the word \"wardrobe\" today.",
    "part": "n"
  },
  {
    "id": "pet-2862",
    "library": "pet",
    "word": "warm",
    "meaning": "a.暖和的,暖的,温暖的,热烈的,兴奋的,激烈的,多情的,色情的；使温暖,弄热,使兴奋,使充满仇恨；变暖和,变温暖,取暖,激动,同情,爱好",
    "example": "I learned the word \"warm\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2863",
    "library": "pet",
    "word": "warn",
    "meaning": "警告,提醒,通知；发出警告",
    "example": "I learned the word \"warn\" today.",
    "part": "v"
  },
  {
    "id": "pet-2864",
    "library": "pet",
    "word": "v",
    "meaning": "[计]溢出,变量,向量,检验,虚拟,垂直；[医]钒(23号元素)",
    "example": "I learned the word \"v\" today.",
    "part": "prep",
    "aliases": [
      "v/versus",
      "versus"
    ]
  },
  {
    "id": "pet-2865",
    "library": "pet",
    "word": "warning",
    "meaning": "警告,预告,预兆,通知；[法]警告,警戒,预告；警告的,注意的",
    "example": "I learned the word \"warning\" today.",
    "part": "n"
  },
  {
    "id": "pet-2866",
    "library": "pet",
    "word": "wash",
    "meaning": "洗,洗涤,冲洗,洗的衣服,冲积物,洼地；洗,洗涤,洗清,用水冲洗,流过,弄湿,粉刷,镀金属薄层于；洗涤,洗澡,被冲蚀,漂浮",
    "example": "I learned the word \"wash\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2867",
    "library": "pet",
    "word": "valley",
    "meaning": "山谷,溪谷,流域,凹地；[医]谷",
    "example": "I learned the word \"valley\" today.",
    "part": "n"
  },
  {
    "id": "pet-2868",
    "library": "pet",
    "word": "wash up",
    "meaning": "洗手洗脸,洗餐具",
    "example": "Try to use \"wash up\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2869",
    "library": "pet",
    "word": "valuable",
    "meaning": "a.有价值的,贵重的,宝贵的,可估价的；[经]有价值的,可估价的,贵重的",
    "example": "I learned the word \"valuable\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2870",
    "library": "pet",
    "word": "washing machine",
    "meaning": "洗衣机；[化]洗胶机；洗涤机",
    "example": "Try to use \"washing machine\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2871",
    "library": "pet",
    "word": "value",
    "meaning": "价值,价格,购买力,评价,估价,计算结果；评价,估价,重视；[计]计算结果",
    "example": "I learned the word \"value\" today.",
    "part": "n"
  },
  {
    "id": "pet-2872",
    "library": "pet",
    "word": "washing-up",
    "meaning": "洗餐具,待洗餐具",
    "example": "I learned the word \"washing-up\" today.",
    "part": "n"
  },
  {
    "id": "pet-2873",
    "library": "pet",
    "word": "van",
    "meaning": "货车,篷车,先锋,前驱,前卫；用货车搬运；[计]增值网",
    "example": "I learned the word \"van\" today.",
    "part": "n"
  },
  {
    "id": "pet-2874",
    "library": "pet",
    "word": "vanilla",
    "meaning": "香草,香子兰",
    "example": "I learned the word \"vanilla\" today.",
    "part": "n"
  },
  {
    "id": "pet-2875",
    "library": "pet",
    "word": "waste",
    "meaning": "浪费,废物,损耗,消耗,荒地,垃圾,地面风化物；a.废弃的,荒芜的,多余的；浪费,消耗,使荒芜",
    "example": "I learned the word \"waste\" today.",
    "part": "adj & v"
  },
  {
    "id": "pet-2876",
    "library": "pet",
    "word": "variety",
    "meaning": "多样,种类,变种,杂耍；[化]变种",
    "example": "I learned the word \"variety\" today.",
    "part": "n"
  },
  {
    "id": "pet-2877",
    "library": "pet",
    "word": "watch",
    "meaning": "观察,手表,看守,守护,监视,值班人；看,注视,照顾,看守,守护,监视；观看,注视,守侯",
    "example": "I learned the word \"watch\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2878",
    "library": "pet",
    "word": "various",
    "meaning": "a.不同的,各种的,多方面的,许多的,个别的,杂色的；[法]不同的,种种的,各式各样的",
    "example": "I learned the word \"various\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2879",
    "library": "pet",
    "word": "vase",
    "meaning": "花瓶,瓶",
    "example": "I learned the word \"vase\" today.",
    "part": "n"
  },
  {
    "id": "pet-2880",
    "library": "pet",
    "word": "vegetable",
    "meaning": "蔬菜,植物,无精打采之人；a.蔬菜的,植物的",
    "example": "I learned the word \"vegetable\" today.",
    "part": "n"
  },
  {
    "id": "pet-2881",
    "library": "pet",
    "word": "water",
    "meaning": "水,雨水,海水,水位,水面,流水；给...浇水,供以水,注入水,使湿；流泪,流口水,加水",
    "example": "I learned the word \"water\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2882",
    "library": "pet",
    "word": "vegetarian",
    "meaning": "素食者,食草动物；a.素食的",
    "example": "I learned the word \"vegetarian\" today.",
    "part": "n & adj"
  },
  {
    "id": "pet-2883",
    "library": "pet",
    "word": "waterfall",
    "meaning": "瀑布",
    "example": "I learned the word \"waterfall\" today.",
    "part": "n"
  },
  {
    "id": "pet-2884",
    "library": "pet",
    "word": "vehicle",
    "meaning": "交通工具,车辆,传播媒介；[化]载体；运载体",
    "example": "I learned the word \"vehicle\" today.",
    "part": "n"
  },
  {
    "id": "pet-2885",
    "library": "pet",
    "word": "wave",
    "meaning": "波,波浪,波动,起伏,高潮,潮涌,挥手致意,(气压)突变；波动,飘动,挥手示意,起伏；使波动,使飘扬,挥舞,使成波浪形",
    "example": "I learned the word \"wave\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2886",
    "library": "pet",
    "word": "version",
    "meaning": "一种描述,版本,译文；[计]版本",
    "example": "I learned the word \"version\" today.",
    "part": "n"
  },
  {
    "id": "pet-2887",
    "library": "pet",
    "word": "very",
    "meaning": "a.真正的,恰好的,十足的,特有的；非常,完全",
    "example": "I learned the word \"very\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2888",
    "library": "pet",
    "word": "way",
    "meaning": "路,路线,路途,方法,道路,情形,规模,习惯,行业,方面；远远地,非常",
    "example": "I learned the word \"way\" today.",
    "part": "n"
  },
  {
    "id": "pet-2889",
    "library": "pet",
    "word": "vet",
    "meaning": "兽医；当兽医；诊断,检审",
    "example": "I learned the word \"vet\" today.",
    "part": "n"
  },
  {
    "id": "pet-2890",
    "library": "pet",
    "word": "whether",
    "meaning": "是否,不论；两个中的哪一个",
    "example": "I learned the word \"whether\" today.",
    "part": "conj"
  },
  {
    "id": "pet-2891",
    "library": "pet",
    "word": "which",
    "meaning": "哪一个,那一个",
    "example": "I learned the word \"which\" today.",
    "part": "pron & det"
  },
  {
    "id": "pet-2892",
    "library": "pet",
    "word": "white",
    "meaning": "白色,洁白,眼白,白种人,蛋白；a.白色的,纯洁的,白种的,苍白的,空白的,幸运的",
    "example": "I learned the word \"white\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2893",
    "library": "pet",
    "word": "who",
    "meaning": "谁",
    "example": "I learned the word \"who\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2894",
    "library": "pet",
    "word": "whole",
    "meaning": "全部,全体,整体,完全之体系；a.所有的,完整的,完全的,纯粹的",
    "example": "I learned the word \"whole\" today.",
    "part": "adj & n"
  },
  {
    "id": "pet-2895",
    "library": "pet",
    "word": "whose",
    "meaning": "谁的",
    "example": "I learned the word \"whose\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-2896",
    "library": "pet",
    "word": "we",
    "meaning": "我们",
    "example": "I learned the word \"we\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2897",
    "library": "pet",
    "word": "why",
    "meaning": "为什么；原因,理由",
    "example": "I learned the word \"why\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2898",
    "library": "pet",
    "word": "weak",
    "meaning": "a.不牢固的,弱的,虚弱的,软弱的,无力的,无权力的,(论据等)不充分的；[经]疲软的",
    "example": "I learned the word \"weak\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2899",
    "library": "pet",
    "word": "wide",
    "meaning": "a.宽的,广阔的,普遍的,宽阔的,广泛的,一般的；广阔地,遍及各处地,广泛地；大千世界",
    "example": "I learned the word \"wide\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2900",
    "library": "pet",
    "word": "wife",
    "meaning": "妻子,太太,夫人；[法]妻子,已婚妇女",
    "example": "I learned the word \"wife\" today.",
    "part": "n"
  },
  {
    "id": "pet-2901",
    "library": "pet",
    "word": "wear",
    "meaning": "穿着,戴,使用,耗损,服装,耐久性；穿着,戴,留(须、发等),呈现,磨损,磨成,耗损,使疲乏,消磨；磨损,变旧,耐久,渐变,渐渐消失",
    "example": "I learned the word \"wear\" today.",
    "part": "v"
  },
  {
    "id": "pet-2902",
    "library": "pet",
    "word": "wild",
    "meaning": "荒野,荒地；a.野性的,野蛮的,野生的,失控的,任性的,杂乱的,轻率的,狂热的,疯狂的；狂暴地,失控地",
    "example": "I learned the word \"wild\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2903",
    "library": "pet",
    "word": "wildlife",
    "meaning": "野生动植物",
    "example": "I learned the word \"wildlife\" today.",
    "part": "n"
  },
  {
    "id": "pet-2904",
    "library": "pet",
    "word": "wear out",
    "meaning": "穿破,用坏,疲劳,经受住,消磨",
    "example": "Try to use \"wear out\" in a short sentence.",
    "part": "phr v & adj"
  },
  {
    "id": "pet-2905",
    "library": "pet",
    "word": "will",
    "meaning": "意志,决心,意愿,意向,干劲,遗嘱；用意志的力量驱使,决意,愿意,立遗嘱；下决心,愿意",
    "example": "I learned the word \"will\" today.",
    "part": "mv"
  },
  {
    "id": "pet-2906",
    "library": "pet",
    "word": "willing",
    "meaning": "a.乐意的,自愿的,甘愿的",
    "example": "I learned the word \"willing\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2907",
    "library": "pet",
    "word": "win",
    "meaning": "赢得,打胜,成功；获胜,达到,影响；胜利,赢,收益",
    "example": "I learned the word \"win\" today.",
    "part": "v"
  },
  {
    "id": "pet-2908",
    "library": "pet",
    "word": "weather",
    "meaning": "天气,气象,处境；a.迎风的；使受风吹雨打,侵蚀,使风化,经受住",
    "example": "I learned the word \"weather\" today.",
    "part": "n"
  },
  {
    "id": "pet-2909",
    "library": "pet",
    "word": "wind",
    "meaning": "风,气息,气味,呼吸,风声,趋势,空谈,卷绕,弯曲；使通风,嗅出,使喘气,吹号角,上发条,缠绕,包,绞起,吊起,使弯曲,使迂回；嗅出猎物,吹响号角,卷曲,蜿蜒,迂回,缠绕",
    "example": "I learned the word \"wind\" today.",
    "part": "n"
  },
  {
    "id": "pet-2910",
    "library": "pet",
    "word": "weather forecast",
    "meaning": "天气预报",
    "example": "Try to use \"weather forecast\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2911",
    "library": "pet",
    "word": "web",
    "meaning": "网,蛛丝,蹼,织物,圈套,卷筒纸；结网,形成网；织蜘蛛网于,使落入圈套",
    "example": "I learned the word \"web\" today.",
    "part": "n"
  },
  {
    "id": "pet-2912",
    "library": "pet",
    "word": "window",
    "meaning": "窗户,窗子,窗口；给...开窗；[计]窗口",
    "example": "I learned the word \"window\" today.",
    "part": "n"
  },
  {
    "id": "pet-2913",
    "library": "pet",
    "word": "webcam",
    "meaning": "网络摄像头",
    "example": "I learned the word \"webcam\" today.",
    "part": "n"
  },
  {
    "id": "pet-2914",
    "library": "pet",
    "word": "windscreen",
    "meaning": "汽车的挡风玻璃",
    "example": "I learned the word \"windscreen\" today.",
    "part": "n"
  },
  {
    "id": "pet-2915",
    "library": "pet",
    "word": "web page",
    "meaning": "WEB页,(WEB浏览器可读取的文件,一个WEBPAGE可以有许多复杂的版面变化)",
    "example": "Try to use \"web page\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2916",
    "library": "pet",
    "word": "windsurfing",
    "meaning": "[体]帆板运动",
    "example": "I learned the word \"windsurfing\" today.",
    "part": "n"
  },
  {
    "id": "pet-2917",
    "library": "pet",
    "word": "website",
    "meaning": "网站（全球资讯网的主机站）",
    "example": "I learned the word \"website\" today.",
    "part": "n"
  },
  {
    "id": "pet-2918",
    "library": "pet",
    "word": "windy",
    "meaning": "a.多风的,风强的,腹胀的,吹牛的",
    "example": "I learned the word \"windy\" today.",
    "part": "n"
  },
  {
    "id": "pet-2919",
    "library": "pet",
    "word": "wedding",
    "meaning": "婚礼,结婚,结婚周年纪念日,结合；[法]结婚,婚礼,结婚纪念日",
    "example": "I learned the word \"wedding\" today.",
    "part": "n"
  },
  {
    "id": "pet-2920",
    "library": "pet",
    "word": "wing",
    "meaning": "翅膀,翼,机翼,派别；给...装上翼,飞过,使飞,空运,增加...速度；飞行",
    "example": "I learned the word \"wing\" today.",
    "part": "n"
  },
  {
    "id": "pet-2921",
    "library": "pet",
    "word": "week",
    "meaning": "星期,周",
    "example": "I learned the word \"week\" today.",
    "part": "n"
  },
  {
    "id": "pet-2922",
    "library": "pet",
    "word": "weekday",
    "meaning": "周日,平日；[计]工作日",
    "example": "I learned the word \"weekday\" today.",
    "part": "n"
  },
  {
    "id": "pet-2923",
    "library": "pet",
    "word": "weekend",
    "meaning": "周末,周末休假",
    "example": "I learned the word \"weekend\" today.",
    "part": "n"
  },
  {
    "id": "pet-2924",
    "library": "pet",
    "word": "winner",
    "meaning": "胜利者,优胜者；[法]取胜者",
    "example": "I learned the word \"winner\" today.",
    "part": "n"
  },
  {
    "id": "pet-2925",
    "library": "pet",
    "word": "weekly",
    "meaning": "周刊,周报；a.每周的,一周一次的,周刊的；每周,一周一次",
    "example": "I learned the word \"weekly\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-2926",
    "library": "pet",
    "word": "wise",
    "meaning": "a.明智的,慎虑的,聪明的,博学的,狡猾的,机灵的；知道；教导,告诉,劝导",
    "example": "I learned the word \"wise\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2927",
    "library": "pet",
    "word": "wish",
    "meaning": "希望,愿望,祝愿,命令,请求；愿,想要,希望,祝愿；希望",
    "example": "I learned the word \"wish\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2928",
    "library": "pet",
    "word": "weigh",
    "meaning": "称...重量,衡量,把...压弯,考虑,权衡,起锚；称分量,有意义,重压,起锚；过秤,称分量",
    "example": "I learned the word \"weigh\" today.",
    "part": "v"
  },
  {
    "id": "pet-2929",
    "library": "pet",
    "word": "weight",
    "meaning": "重,重量,体重,砝码,重大,影响,力量；加重量于,压迫,使加权,称重量；[计]粗细",
    "example": "I learned the word \"weight\" today.",
    "part": "n"
  },
  {
    "id": "pet-2930",
    "library": "pet",
    "word": "welcome",
    "meaning": "欢迎,欢迎词；a.受欢迎的,可随意的,可喜的；欢迎,接待",
    "example": "I learned the word \"welcome\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2931",
    "library": "pet",
    "word": "with",
    "meaning": "和...在一起,以,由于",
    "example": "I learned the word \"with\" today.",
    "part": "prep"
  },
  {
    "id": "pet-2932",
    "library": "pet",
    "word": "within",
    "meaning": "内部,里头；在内部,在内心里；在...之内",
    "example": "I learned the word \"within\" today.",
    "part": "prep"
  },
  {
    "id": "pet-2933",
    "library": "pet",
    "word": "without",
    "meaning": "没有,不,在...之外；在外面,户外；外面,外部",
    "example": "I learned the word \"without\" today.",
    "part": "prep"
  },
  {
    "id": "pet-2934",
    "library": "pet",
    "word": "well",
    "meaning": "井,泉水,源泉,好；涌出；a.健康的,良好的,适宜的,恰当的",
    "example": "I learned the word \"well\" today.",
    "part": "adj, adv & exclam"
  },
  {
    "id": "pet-2935",
    "library": "pet",
    "word": "woman",
    "meaning": "女人,妇女,女仆；a.女用的,女性的,妇女的；贬称...为女人,使成女人腔",
    "example": "I learned the word \"woman\" today.",
    "part": "n"
  },
  {
    "id": "pet-2936",
    "library": "pet",
    "word": "wonder",
    "meaning": "奇迹,惊奇,惊愕；惊奇,想知道；惊讶,怀疑",
    "example": "I learned the word \"wonder\" today.",
    "part": "v"
  },
  {
    "id": "pet-2937",
    "library": "pet",
    "word": "wonderful",
    "meaning": "a.令人惊奇的,奇妙的,极好的",
    "example": "I learned the word \"wonderful\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2938",
    "library": "pet",
    "word": "wood",
    "meaning": "木材,木制品；植林于,给...添加木柴；收集木材",
    "example": "I learned the word \"wood\" today.",
    "part": "n"
  },
  {
    "id": "pet-2939",
    "library": "pet",
    "word": "well-dressed",
    "meaning": "a.穿得很体面的",
    "example": "I learned the word \"well-dressed\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2940",
    "library": "pet",
    "word": "well-known",
    "meaning": "a.众所周知的,有名的",
    "example": "I learned the word \"well-known\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2941",
    "library": "pet",
    "word": "wooden",
    "meaning": "a.木制的,呆笨的,木然的",
    "example": "I learned the word \"wooden\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2942",
    "library": "pet",
    "word": "well made",
    "meaning": "井,泉水,源泉,好；涌出；a.健康的,良好的,适宜的,恰当的",
    "example": "Try to use \"well made\" in a short sentence.",
    "part": "adv & adj",
    "aliases": [
      "well made/well-made",
      "well-made"
    ]
  },
  {
    "id": "pet-2943",
    "library": "pet",
    "word": "wool",
    "meaning": "羊毛,毛织物,毛线,绒线；[医]羊毛,绒毛,棉[花]",
    "example": "I learned the word \"wool\" today.",
    "part": "n"
  },
  {
    "id": "pet-2944",
    "library": "pet",
    "word": "west",
    "meaning": "西方,西部；a.西方的,向西的；向西,自西方,在西方",
    "example": "I learned the word \"west\" today.",
    "part": "adj, adv & n"
  },
  {
    "id": "pet-2945",
    "library": "pet",
    "word": "western",
    "meaning": "西方人,西部片,西部小说；a.向西方的,来自西方的,西方的,西洋的,西部的",
    "example": "I learned the word \"western\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2946",
    "library": "pet",
    "word": "wet",
    "meaning": "湿气,潮湿,水分,雨天；a.湿的,潮的,搞错的,下雨的,反对禁酒的；变湿",
    "example": "I learned the word \"wet\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2947",
    "library": "pet",
    "word": "work",
    "meaning": "工作,劳动,职业,行为,功,作品,成果,产品,工程；工作,劳动,做,运转,起作用,被加工；使工作,使转动,开动,使用,经营,使逐渐变得,造成",
    "example": "I learned the word \"work\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2948",
    "library": "pet",
    "word": "whale",
    "meaning": "鲸；捕鲸；使惨败,猛揍",
    "example": "I learned the word \"whale\" today.",
    "part": "n"
  },
  {
    "id": "pet-2949",
    "library": "pet",
    "word": "what",
    "meaning": "什么；interj.怎么,多么；a.什么的",
    "example": "I learned the word \"what\" today.",
    "part": "det & pron"
  },
  {
    "id": "pet-2950",
    "library": "pet",
    "word": "whatever",
    "meaning": "无论什么",
    "example": "I learned the word \"whatever\" today.",
    "part": "pron & det"
  },
  {
    "id": "pet-2951",
    "library": "pet",
    "word": "wheel",
    "meaning": "轮子,车轮,轮,方向盘,旋转,机构,重要人物；使旋转,转动,使转向；旋转,转弯,盘旋",
    "example": "I learned the word \"wheel\" today.",
    "part": "n"
  },
  {
    "id": "pet-2952",
    "library": "pet",
    "word": "worker",
    "meaning": "工人,劳动者；[经]工人,劳工,劳动者",
    "example": "I learned the word \"worker\" today.",
    "part": "n"
  },
  {
    "id": "pet-2953",
    "library": "pet",
    "word": "wheelchair",
    "meaning": "轮椅",
    "example": "I learned the word \"wheelchair\" today.",
    "part": "n"
  },
  {
    "id": "pet-2954",
    "library": "pet",
    "word": "working",
    "meaning": "工作,运转,劳动；a.工作的,劳动的,经营的,抽搐的,运转的",
    "example": "I learned the word \"working\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2955",
    "library": "pet",
    "word": "when",
    "meaning": "当...的时候；何时,什么时候；什么时侯",
    "example": "I learned the word \"when\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2956",
    "library": "pet",
    "word": "workout",
    "meaning": "试验,试用,锻炼",
    "example": "I learned the word \"workout\" today.",
    "part": "n"
  },
  {
    "id": "pet-2957",
    "library": "pet",
    "word": "whenever",
    "meaning": "每当；不论何时,每逢",
    "example": "I learned the word \"whenever\" today.",
    "part": "conj"
  },
  {
    "id": "pet-2958",
    "library": "pet",
    "word": "where",
    "meaning": "在哪里；哪里；地点",
    "example": "I learned the word \"where\" today.",
    "part": "adv & conj"
  },
  {
    "id": "pet-2959",
    "library": "pet",
    "word": "work out",
    "meaning": "设计出,作出,计算出,做工抵偿；[化]编制",
    "example": "Try to use \"work out\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2960",
    "library": "pet",
    "word": "wherever",
    "meaning": "无论哪里",
    "example": "I learned the word \"wherever\" today.",
    "part": "conj"
  },
  {
    "id": "pet-2961",
    "library": "pet",
    "word": "yeah",
    "meaning": "(非正式)是,是的",
    "example": "I learned the word \"yeah\" today.",
    "part": "exclam"
  },
  {
    "id": "pet-2962",
    "library": "pet",
    "word": "year",
    "meaning": "年,年度,年龄；[经]年度",
    "example": "I learned the word \"year\" today.",
    "part": "n"
  },
  {
    "id": "pet-2963",
    "library": "pet",
    "word": "world",
    "meaning": "世界,地球,宇宙,万物,世人,人间,领域,世事,世故,社会生活,大量；[法]世界,地球,世人",
    "example": "I learned the word \"world\" today.",
    "part": "n"
  },
  {
    "id": "pet-2964",
    "library": "pet",
    "word": "yellow",
    "meaning": "黄色；a.黄色的",
    "example": "I learned the word \"yellow\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2965",
    "library": "pet",
    "word": "worried",
    "meaning": "a.担心的,闷闷不乐的",
    "example": "I learned the word \"worried\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2966",
    "library": "pet",
    "word": "worry",
    "meaning": "担心,烦恼,忧虑,苦恼,撕咬；使烦恼,使焦虑,使苦恼,困扰,折磨,撕咬；烦恼,担心,撕咬",
    "example": "I learned the word \"worry\" today.",
    "part": "n & v"
  },
  {
    "id": "pet-2967",
    "library": "pet",
    "word": "yes",
    "meaning": "是；是,同意；同意",
    "example": "I learned the word \"yes\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2968",
    "library": "pet",
    "word": "worse",
    "meaning": "更坏的事,更恶劣的事,败局；a.更坏的,更恶劣的；更坏地,更恶劣地",
    "example": "I learned the word \"worse\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-2969",
    "library": "pet",
    "word": "yesterday",
    "meaning": "昨天；昨天",
    "example": "I learned the word \"yesterday\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2970",
    "library": "pet",
    "word": "worst",
    "meaning": "最坏,最坏的时候；a.最坏的,最恶劣的,最不利的；最坏,最糟",
    "example": "I learned the word \"worst\" today.",
    "part": "adj & adv"
  },
  {
    "id": "pet-2971",
    "library": "pet",
    "word": "yet",
    "meaning": "还,尚,仍然,已经,然而；然而",
    "example": "I learned the word \"yet\" today.",
    "part": "adv"
  },
  {
    "id": "pet-2972",
    "library": "pet",
    "word": "yoga",
    "meaning": "瑜珈",
    "example": "I learned the word \"yoga\" today.",
    "part": "n"
  },
  {
    "id": "pet-2973",
    "library": "pet",
    "word": "worth",
    "meaning": "价值,财产；a.值...的,值得的",
    "example": "I learned the word \"worth\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2974",
    "library": "pet",
    "word": "would",
    "meaning": "aux.将,愿意",
    "example": "I learned the word \"would\" today.",
    "part": "mv"
  },
  {
    "id": "pet-2975",
    "library": "pet",
    "word": "wow",
    "meaning": "interj.(非正式)哇；巨大的成功,轰动一时的成功,十分有趣的事物；[计]WIn32上的Windows",
    "example": "I learned the word \"wow\" today.",
    "part": "exclam"
  },
  {
    "id": "pet-2976",
    "library": "pet",
    "word": "you",
    "meaning": "你,你们",
    "example": "I learned the word \"you\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2977",
    "library": "pet",
    "word": "you know",
    "meaning": "你懂的（网络热词,这句从英文youknow翻译过来的,乍一听来让人不清不楚的话却成了网友们所有“心照不宣”的最佳表达,如果你知道他知道,就可以说上一句“你懂的”来表达你的所有要求和所有心情。）；（所说的话对方已知道或了解）你是知道的；（加强语气）你要知道！",
    "example": "Try to use \"you know\" in a short sentence.",
    "part": "exclam"
  },
  {
    "id": "pet-2978",
    "library": "pet",
    "word": "young",
    "meaning": "a.年轻的,无经验的,朝气蓬勃的；青年们,幼小动物,崽",
    "example": "I learned the word \"young\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2979",
    "library": "pet",
    "word": "your",
    "meaning": "你的,你们的",
    "example": "I learned the word \"your\" today.",
    "part": "det"
  },
  {
    "id": "pet-2980",
    "library": "pet",
    "word": "write",
    "meaning": "书写,著述,写,写满,写信给；写,写字,写信,写作,作曲；[计]书写器",
    "example": "I learned the word \"write\" today.",
    "part": "v"
  },
  {
    "id": "pet-2981",
    "library": "pet",
    "word": "write down",
    "meaning": "写下,写文章贬低,降低地位,减低帐面价值；[法]记录,记下,以文字诋毁",
    "example": "Try to use \"write down\" in a short sentence.",
    "part": "phr v"
  },
  {
    "id": "pet-2982",
    "library": "pet",
    "word": "yours",
    "meaning": "你的(东西),你们的(东西)",
    "example": "I learned the word \"yours\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2983",
    "library": "pet",
    "word": "yourself",
    "meaning": "你自己",
    "example": "I learned the word \"yourself\" today.",
    "part": "pron"
  },
  {
    "id": "pet-2984",
    "library": "pet",
    "word": "youth",
    "meaning": "年轻,青年时代,青年们,青春；[法]青年,青年时期,青春时期",
    "example": "I learned the word \"youth\" today.",
    "part": "n"
  },
  {
    "id": "pet-2985",
    "library": "pet",
    "word": "writer",
    "meaning": "作家,撰稿者,抄写员；[化]记录器",
    "example": "I learned the word \"writer\" today.",
    "part": "n"
  },
  {
    "id": "pet-2986",
    "library": "pet",
    "word": "writing",
    "meaning": "书写,著作,笔迹,作品；[医]书写",
    "example": "I learned the word \"writing\" today.",
    "part": "n"
  },
  {
    "id": "pet-2987",
    "library": "pet",
    "word": "written",
    "meaning": "a.书面的,写成文字的；write的过去分词",
    "example": "I learned the word \"written\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2988",
    "library": "pet",
    "word": "wrong",
    "meaning": "a.错误的,不正当的,失常的；错误地",
    "example": "I learned the word \"wrong\" today.",
    "part": "adj"
  },
  {
    "id": "pet-2989",
    "library": "pet",
    "word": "zero",
    "meaning": "零,零点,零度,无,乌有,最低点；a.零的,没有的；调零,对(炮火等)作协调校正",
    "example": "I learned the word \"zero\" today.",
    "part": "n"
  },
  {
    "id": "pet-2990",
    "library": "pet",
    "word": "zone",
    "meaning": "地带,带,地区；环绕,使分成地带；分成区",
    "example": "I learned the word \"zone\" today.",
    "part": "n"
  },
  {
    "id": "pet-2991",
    "library": "pet",
    "word": "zoo",
    "meaning": "动物园",
    "example": "I learned the word \"zoo\" today.",
    "part": "n"
  },
  {
    "id": "pet-2992",
    "library": "pet",
    "word": "yard",
    "meaning": "码,庭院,工场；[化]堆置场",
    "example": "I learned the word \"yard\" today.",
    "part": "n"
  },
  {
    "id": "pet-2993",
    "library": "pet",
    "word": "fashion match",
    "meaning": "流行,风尚,时样；形成,造,作",
    "example": "Try to use \"fashion match\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-2994",
    "library": "pet",
    "word": "calculator download",
    "meaning": "计算者,计算器；[计]计算器",
    "example": "Try to use \"calculator download\" in a short sentence.",
    "part": "n & v"
  },
  {
    "id": "pet-2995",
    "library": "pet",
    "word": "online sign up",
    "meaning": "[计]联机",
    "example": "Try to use \"online sign up\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-2996",
    "library": "pet",
    "word": "pencil case study",
    "meaning": "铅笔,色笔,眉笔,画笔,光线束；用铅笔写或涂,草拟",
    "example": "Try to use \"pencil case study\" in a short sentence.",
    "part": "v"
  },
  {
    "id": "pet-2997",
    "library": "pet",
    "word": "recycled volunteer",
    "meaning": "回收利用(recycle的过去式和过去分词)；再利用；再次应用",
    "example": "Try to use \"recycled volunteer\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-2998",
    "library": "pet",
    "word": "jam roast",
    "meaning": "果酱,拥塞之物,堵塞,困境；挤进,使塞满,混杂,压碎,使堵塞；堵塞,轧住,拥挤",
    "example": "Try to use \"jam roast\" in a short sentence.",
    "part": "v & adj"
  },
  {
    "id": "pet-2999",
    "library": "pet",
    "word": "main course slice",
    "meaning": "主要部分,干线,体力,力量,主群组；a.主要的,重要的,全力的；[计]主群组",
    "example": "Try to use \"main course slice\" in a short sentence.",
    "part": "n"
  },
  {
    "id": "pet-3000",
    "library": "pet",
    "word": "onion sweet",
    "meaning": "洋葱；因洋葱使掉泪",
    "example": "Try to use \"onion sweet\" in a short sentence.",
    "part": "adj & n"
  },
  {
    "id": "pet-3001",
    "library": "pet",
    "word": "chilli grill",
    "meaning": "红辣椒",
    "example": "Try to use \"chilli grill\" in a short sentence.",
    "part": "n & v"
  }
];
