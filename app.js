const WORDS = [
  ["ability", "能力", "She has the ability to solve the problem."],
  ["abroad", "在国外", "My cousin studies abroad."],
  ["accept", "接受", "Please accept my thanks."],
  ["accident", "事故", "He was late because of a traffic accident."],
  ["achieve", "实现", "Work hard and you can achieve your dream."],
  ["activity", "活动", "The school activity starts at nine."],
  ["address", "地址", "Write your address on the form."],
  ["advice", "建议", "Can you give me some advice?"],
  ["afford", "负担得起", "They cannot afford a new car."],
  ["agree", "同意", "I agree with your idea."],
  ["allow", "允许", "Our teacher does not allow phones in class."],
  ["almost", "几乎", "Dinner is almost ready."],
  ["alone", "独自", "She walked home alone."],
  ["although", "虽然", "Although it rained, we went out."],
  ["ancient", "古代的", "Xi'an is an ancient city."],
  ["appear", "出现", "A smile appeared on his face."],
  ["area", "地区", "This area is quiet at night."],
  ["arrive", "到达", "We will arrive at the station soon."],
  ["article", "文章", "I read an article about health."],
  ["attention", "注意", "Please pay attention to the lesson."],
  ["available", "可获得的", "The book is available in the library."],
  ["avoid", "避免", "You should avoid making the same mistake."],
  ["balance", "平衡", "A good balance of study and rest matters."],
  ["believe", "相信", "I believe you can do it."],
  ["borrow", "借入", "May I borrow your dictionary?"],
  ["brave", "勇敢的", "The brave boy helped the old man."],
  ["business", "生意", "His parents run a small business."],
  ["careful", "仔细的", "Be careful when you cross the road."],
  ["chance", "机会", "This is a good chance to practise English."],
  ["choice", "选择", "You made the right choice."],
  ["collect", "收集", "I collect stamps after school."],
  ["common", "普通的", "This is a common problem."],
  ["communicate", "交流", "We communicate with each other in English."],
  ["compare", "比较", "Compare the two pictures carefully."],
  ["complete", "完成", "Please complete the task today."],
  ["condition", "状况", "The patient is in good condition."],
  ["connect", "连接", "The bridge connects the two villages."],
  ["consider", "考虑", "We should consider his feelings."],
  ["continue", "继续", "Let's continue our discussion."],
  ["control", "控制", "It is hard to control the machine."],
  ["culture", "文化", "Chinese culture has a long history."],
  ["decision", "决定", "They made a decision yesterday."],
  ["develop", "发展", "Good habits develop slowly."],
  ["difference", "不同", "There is a big difference between them."],
  ["difficult", "困难的", "The question is difficult but interesting."],
  ["direction", "方向", "Can you tell me the direction to the museum?"],
  ["discover", "发现", "Scientists discover new things every day."],
  ["discussion", "讨论", "We had a discussion in class."],
  ["education", "教育", "Education is important for everyone."],
  ["effort", "努力", "Your effort will bring progress."],
  ["encourage", "鼓励", "My parents encourage me to try again."],
  ["energy", "精力", "Breakfast gives us energy."],
  ["enough", "足够的", "We have enough time to finish it."],
  ["environment", "环境", "We should protect the environment."],
  ["especially", "尤其", "I like fruit, especially apples."],
  ["experience", "经历", "It was a special experience for me."],
  ["explain", "解释", "Can you explain this sentence?"],
  ["famous", "著名的", "The city is famous for its lake."],
  ["foreign", "外国的", "He is learning a foreign language."],
  ["future", "未来", "What do you want to be in the future?"],
  ["general", "总体的", "This is a general rule."],
  ["habit", "习惯", "Reading is a good habit."],
  ["health", "健康", "Health is more important than money."],
  ["history", "历史", "We learned Chinese history today."],
  ["honest", "诚实的", "An honest person tells the truth."],
  ["imagine", "想象", "Imagine a world without water."],
  ["important", "重要的", "Sleep is important for students."],
  ["improve", "提高", "Practice can improve your speaking."],
  ["include", "包括", "The price includes breakfast."],
  ["increase", "增加", "The number of visitors increased."],
  ["influence", "影响", "Friends can influence our choices."],
  ["interest", "兴趣", "He shows great interest in science."],
  ["introduce", "介绍", "Let me introduce my friend to you."],
  ["journey", "旅行", "The journey took three hours."],
  ["knowledge", "知识", "Books give us knowledge."],
  ["language", "语言", "English is a useful language."],
  ["local", "当地的", "We visited a local market."],
  ["manage", "管理", "She can manage her time well."],
  ["matter", "要紧", "It does not matter if you try again."],
  ["medical", "医学的", "He needs medical help."],
  ["method", "方法", "This method works well."],
  ["mistake", "错误", "Everyone makes mistakes."],
  ["modern", "现代的", "Shanghai is a modern city."],
  ["necessary", "必要的", "It is necessary to drink enough water."],
  ["notice", "注意到", "Did you notice the sign?"],
  ["offer", "提供", "They offered me a cup of tea."],
  ["opinion", "观点", "What's your opinion about the film?"],
  ["ordinary", "普通的", "It was an ordinary school day."],
  ["organize", "组织", "We will organize a class meeting."],
  ["patient", "有耐心的", "Our English teacher is very patient."],
  ["perfect", "完美的", "Practice makes perfect."],
  ["period", "时期", "This was a difficult period for her."],
  ["personal", "个人的", "This is my personal opinion."],
  ["popular", "受欢迎的", "The song is popular with students."],
  ["possible", "可能的", "Everything is possible if you try."],
  ["practice", "练习", "You need more practice."],
  ["prepare", "准备", "We prepare for the exam every day."],
  ["present", "礼物", "I bought a present for my mother."],
  ["pressure", "压力", "Students sometimes feel pressure."],
  ["prevent", "阻止", "Exercise can prevent some illnesses."],
  ["probably", "可能", "He will probably arrive late."],
  ["progress", "进步", "You have made great progress."],
  ["protect", "保护", "We must protect wild plants."],
  ["provide", "提供", "The hotel provides free breakfast."],
  ["purpose", "目的", "What is the purpose of the meeting?"],
  ["realize", "意识到", "I realized my mistake."],
  ["receive", "收到", "I received a letter from my friend."],
  ["recent", "最近的", "Recent news made us excited."],
  ["record", "记录", "Keep a record of new words."],
  ["refuse", "拒绝", "She refused the invitation politely."],
  ["remain", "保持", "Please remain quiet in the library."],
  ["remember", "记得", "Remember to turn off the light."],
  ["require", "需要", "The job requires careful work."],
  ["research", "研究", "They did research on water pollution."],
  ["respect", "尊重", "We should respect our parents."],
  ["result", "结果", "The result made us happy."],
  ["review", "复习", "Review your notes before the test."],
  ["safety", "安全", "Road safety is important."],
  ["search", "搜索", "Search for the answer online."],
  ["several", "几个", "I have been there several times."],
  ["similar", "相似的", "The two answers are similar."],
  ["simple", "简单的", "The story is simple but moving."],
  ["situation", "情况", "We must understand the situation."],
  ["society", "社会", "Everyone is part of society."],
  ["solution", "解决办法", "We found a solution to the problem."],
  ["special", "特别的", "Today is a special day."],
  ["standard", "标准", "The school has high standards."],
  ["success", "成功", "Success comes from hard work."],
  ["suggest", "建议", "I suggest taking a short break."],
  ["support", "支持", "My family always support me."],
  ["surprise", "惊喜", "The party was a big surprise."],
  ["technology", "技术", "Technology changes our lives."],
  ["though", "虽然", "Though he is young, he works hard."],
  ["traditional", "传统的", "Dumplings are traditional Chinese food."],
  ["understand", "理解", "I understand the story now."],
  ["valuable", "有价值的", "This is a valuable lesson."],
  ["volunteer", "志愿者", "She works as a volunteer on weekends."],
  ["whether", "是否", "I don't know whether he will come."],
  ["wonderful", "精彩的", "We had a wonderful time."]
].map(([word, meaning, example], index) => ({
  id: `zk-${index + 1}`,
  library: "zhongkao",
  word,
  meaning,
  example
}));

const EXAM_BANKS = typeof EXAM_WORD_BANKS === "undefined" ? {} : EXAM_WORD_BANKS;
const FULL_WORD_BANKS = {
  zhongkao: typeof ZHONGKAO_WORDS === "undefined" ? [] : ZHONGKAO_WORDS,
  gaokao: typeof GAOKAO_WORDS === "undefined" ? [] : GAOKAO_WORDS,
  ket: typeof KET_WORDS === "undefined" ? [] : KET_WORDS,
  pet: typeof PET_WORDS === "undefined" ? [] : PET_WORDS,
  core2000: typeof CORE2000_WORDS === "undefined" ? [] : CORE2000_WORDS,
  eew4000: typeof EEW4000_WORDS === "undefined" ? [] : EEW4000_WORDS
};
const FULL_WORDS = Object.values(FULL_WORD_BANKS).flat();
const EXAM_WORDS = Object.entries(EXAM_BANKS).flatMap(([library, words]) =>
  words.map(([word, meaning, example], index) => ({
    id: `${library}-${index + 1}`,
    library,
    word,
    meaning,
    example
  }))
);

const STORAGE_KEY = "word-buddy-state-v1";
const ANONYMOUS_STORAGE_KEY = "word-buddy-anonymous-state-v1";
const PROFILE_STORAGE_PREFIX = "word-buddy-profile-state-v1:";
const CLOUD_AUTH_KEY = "word-buddy-cloud-auth-v1";
const todayKey = () => new Date().toISOString().slice(0, 10);
let cachedVoices = [];

const defaultState = {
  view: "home",
  selectedLibrary: "zhongkao",
  selectedUnicornUnit: "all",
  selectedCore2000Book: "all",
  selectedCore2000Unit: "all",
  selectedEEW4000Book: "all",
  selectedEEW4000Unit: "all",
  customWords: [],
  settings: { dailyGoal: 15 },
  progress: {},
  daily: {},
  auth: { token: "", user: null, status: "未登录", lastSynced: "", error: "" },
  audio: { ready: false, status: "", error: "" },
  session: null,
  message: ""
};

let state = loadState();
let syncTimer = null;

function loadState() {
  try {
    const auth = JSON.parse(localStorage.getItem(CLOUD_AUTH_KEY) || "{}");
    const anonymous = JSON.parse(localStorage.getItem(ANONYMOUS_STORAGE_KEY) || "null");
    const legacy = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    const profile = auth.user ? loadLearningProfile(auth.user) : null;
    const saved = profile || anonymous || legacy;
    const loaded = saved ? { ...defaultState, ...saved } : structuredClone(defaultState);
    return {
      ...loaded,
      auth: { ...defaultState.auth, ...auth, status: auth.token ? "已登录" : "未登录", error: "" },
      session: null
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function profileStorageKey(user) {
  const id = user?.id || user?.name || "unknown";
  return `${PROFILE_STORAGE_PREFIX}${String(id).trim().toLowerCase()}`;
}

function learningSnapshot(source = state) {
  return {
    selectedLibrary: source.selectedLibrary,
    selectedUnicornUnit: source.selectedUnicornUnit,
    selectedCore2000Book: source.selectedCore2000Book,
    selectedCore2000Unit: source.selectedCore2000Unit,
    selectedEEW4000Book: source.selectedEEW4000Book,
    selectedEEW4000Unit: source.selectedEEW4000Unit,
    customWords: source.customWords,
    settings: source.settings,
    progress: source.progress,
    daily: source.daily
  };
}

function loadLearningProfile(user) {
  try {
    return JSON.parse(localStorage.getItem(profileStorageKey(user)) || "null");
  } catch {
    return null;
  }
}

function applyLearningSnapshot(snapshot) {
  const loaded = snapshot ? { ...defaultState, ...snapshot } : structuredClone(defaultState);
  state.selectedLibrary = loaded.selectedLibrary;
  state.selectedUnicornUnit = loaded.selectedUnicornUnit;
  state.selectedCore2000Book = loaded.selectedCore2000Book;
  state.selectedCore2000Unit = loaded.selectedCore2000Unit;
  state.selectedEEW4000Book = loaded.selectedEEW4000Book;
  state.selectedEEW4000Unit = loaded.selectedEEW4000Unit;
  state.customWords = loaded.customWords || [];
  state.settings = { ...defaultState.settings, ...(loaded.settings || {}) };
  state.progress = loaded.progress || {};
  state.daily = loaded.daily || {};
  state.session = null;
}

function saveLocalState() {
  const snapshot = learningSnapshot();
  if (state.auth?.user) {
    localStorage.setItem(profileStorageKey(state.auth.user), JSON.stringify(snapshot));
  } else {
    localStorage.setItem(ANONYMOUS_STORAGE_KEY, JSON.stringify(snapshot));
  }
  localStorage.setItem(CLOUD_AUTH_KEY, JSON.stringify({
    token: state.auth.token,
    user: state.auth.user,
    lastSynced: state.auth.lastSynced
  }));
}

function loadAnonymousProfile() {
  try {
    return JSON.parse(localStorage.getItem(ANONYMOUS_STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function saveState() {
  saveLocalState();
  scheduleCloudSave();
}

function syncPayload() {
  return learningSnapshot();
}

function mergeArraysBy(items, keyFn) {
  const map = new Map();
  for (const item of items || []) {
    map.set(keyFn(item), item);
  }
  return [...map.values()];
}

function mergeProgress(local = {}, remote = {}) {
  const merged = { ...remote, ...local };
  for (const id of Object.keys(remote)) {
    const left = local[id] || {};
    const right = remote[id] || {};
    merged[id] = {
      seen: Math.max(Number(left.seen) || 0, Number(right.seen) || 0),
      correct: Math.max(Number(left.correct) || 0, Number(right.correct) || 0),
      wrong: Math.max(Number(left.wrong) || 0, Number(right.wrong) || 0),
      status: left.status === "wrong" || right.status === "wrong" ? "wrong" : (left.status || right.status || "new"),
      lastSeen: [left.lastSeen, right.lastSeen].filter(Boolean).sort().pop() || ""
    };
  }
  return merged;
}

function mergeDaily(local = {}, remote = {}) {
  const merged = { ...remote, ...local };
  for (const key of Object.keys(remote)) {
    const left = local[key] || {};
    const right = remote[key] || {};
    merged[key] = {
      completed: Math.max(Number(left.completed) || 0, Number(right.completed) || 0),
      learnedIds: [...new Set([...(right.learnedIds || []), ...(left.learnedIds || [])])],
      stars: Math.max(Number(left.stars) || 0, Number(right.stars) || 0)
    };
  }
  return merged;
}

function applyCloudState(remote) {
  if (!remote) return;
  state.selectedLibrary = remote.selectedLibrary || state.selectedLibrary;
  state.selectedUnicornUnit = remote.selectedUnicornUnit || state.selectedUnicornUnit;
  state.selectedCore2000Book = remote.selectedCore2000Book || state.selectedCore2000Book;
  state.selectedCore2000Unit = remote.selectedCore2000Unit || state.selectedCore2000Unit;
  state.selectedEEW4000Book = remote.selectedEEW4000Book || state.selectedEEW4000Book;
  state.selectedEEW4000Unit = remote.selectedEEW4000Unit || state.selectedEEW4000Unit;
  state.customWords = mergeArraysBy(
    [...(remote.customWords || []), ...state.customWords],
    item => `${item.word}::${item.meaning}`
  );
  state.settings = { ...state.settings, ...(remote.settings || {}) };
  state.progress = mergeProgress(state.progress, remote.progress);
  state.daily = mergeDaily(state.daily, remote.daily);
}

async function cloudRequest(path, options = {}) {
  const headers = {
    "content-type": "application/json",
    ...(options.headers || {})
  };
  if (state.auth.token) headers.authorization = `Bearer ${state.auth.token}`;
  const response = await fetch(path, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "云同步暂时不可用。");
  return data;
}

async function cloudLogin(name, password) {
  saveLocalState();
  state.auth.status = "登录中...";
  state.auth.error = "";
  render();
  const data = await cloudRequest("/api/auth", {
    method: "POST",
    body: JSON.stringify({ name, password })
  });
  applyLearningSnapshot(loadLearningProfile(data.user));
  state.auth.token = data.token;
  state.auth.user = data.user;
  state.auth.status = "同步中...";
  localStorage.setItem(CLOUD_AUTH_KEY, JSON.stringify(state.auth));
  const remote = await cloudRequest("/api/state");
  applyCloudState(remote.state);
  state.auth.status = "已登录";
  await saveCloudStateNow(true);
  saveState();
  render();
}

function cloudLogout() {
  saveLocalState();
  state.auth = { ...defaultState.auth };
  localStorage.removeItem(CLOUD_AUTH_KEY);
  applyLearningSnapshot(loadAnonymousProfile());
  saveState();
  render();
}

function scheduleCloudSave() {
  if (!state.auth?.token) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    saveCloudStateNow(true);
  }, 800);
}

async function saveCloudStateNow(silent = false) {
  if (!state.auth?.token) return;
  try {
    if (!silent) {
      state.auth.status = "同步中...";
      render();
    }
    await cloudRequest("/api/state", {
      method: "POST",
      body: JSON.stringify({ state: syncPayload() })
    });
    state.auth.status = "已同步";
    state.auth.lastSynced = new Date().toLocaleString();
    state.auth.error = "";
    localStorage.setItem(CLOUD_AUTH_KEY, JSON.stringify(state.auth));
    if (!silent) render();
  } catch (error) {
    state.auth.status = "同步失败";
    state.auth.error = error.message;
    if (!silent) render();
  }
}

function allWords() {
  const fullLibraries = new Set(Object.keys(FULL_WORD_BANKS).filter(library => FULL_WORD_BANKS[library].length));
  const baseWords = FULL_WORD_BANKS.zhongkao.length ? [] : WORDS;
  const starterWords = EXAM_WORDS.filter(word => !fullLibraries.has(word.library));
  return [...baseWords, ...starterWords, ...FULL_WORDS, ...UNICORN_WORDS, ...state.customWords];
}

function filteredByBookAndUnit(words, book, unit) {
  return words.filter(word => {
    const bookMatches = book === "all" || word.book === book;
    const unitMatches = unit === "all" || word.unit === unit;
    return bookMatches && unitMatches;
  });
}

function activeWords() {
  if (state.selectedLibrary === "custom") return state.customWords;
  if (state.selectedLibrary === "unicorn") {
    if (state.selectedUnicornUnit === "all") return UNICORN_WORDS;
    return UNICORN_WORDS.filter(word => word.unit?.split("; ").includes(state.selectedUnicornUnit));
  }
  if (state.selectedLibrary === "core2000") {
    return filteredByBookAndUnit(FULL_WORD_BANKS.core2000, state.selectedCore2000Book, state.selectedCore2000Unit);
  }
  if (state.selectedLibrary === "eew4000") {
    return filteredByBookAndUnit(FULL_WORD_BANKS.eew4000, state.selectedEEW4000Book, state.selectedEEW4000Unit);
  }
  if (FULL_WORD_BANKS[state.selectedLibrary]?.length) return FULL_WORD_BANKS[state.selectedLibrary];
  const examWords = EXAM_WORDS.filter(word => word.library === state.selectedLibrary);
  if (examWords.length) return examWords;
  return WORDS;
}

function libraryMeta() {
  const unitLabel = unicornUnitLabel(state.selectedUnicornUnit);
  const coreRange = layeredRangeLabel("core2000", state.selectedCore2000Book, state.selectedCore2000Unit);
  const eewRange = layeredRangeLabel("eew4000", state.selectedEEW4000Book, state.selectedEEW4000Unit);
  const metas = {
    zhongkao: {
      title: "黑龙江中考词库",
      short: "黑龙江中考",
      badge: "黑龙江中考",
      subtitle: `黑龙江中考基础版 · 每日 ${Number(state.settings.dailyGoal) || 15} 个 · 错词优先复习`,
      empty: "可以切换到黑龙江中考词库，或在家长设置里导入自定义词。",
    },
    gaokao: {
      title: "高考新课标词库",
      short: "高考新课标",
      badge: "高考新课标",
      subtitle: `高考新课标完整版 · 每日 ${Number(state.settings.dailyGoal) || 15} 个 · 错词优先复习`,
      empty: "高考新课标词库暂时没有词，可以切换其他词库。",
    },
    ket: {
      title: "KET 常用词",
      short: "KET 常用词",
      badge: "KET",
      subtitle: `KET 常用词 · 每日 ${Number(state.settings.dailyGoal) || 15} 个 · 错词优先复习`,
      empty: "KET 词库暂时没有词，可以切换其他词库。",
    },
    pet: {
      title: "PET 2020 词表",
      short: "PET 2020",
      badge: "PET",
      subtitle: `PET 2020 词表 · 每日 ${Number(state.settings.dailyGoal) || 15} 个 · 错词优先复习`,
      empty: "PET 词库暂时没有词，可以切换其他词库。",
    },
    core2000: {
      title: "2000 Core English Words",
      short: `2000词 · ${coreRange}`,
      badge: `2000词 · ${coreRange}`,
      subtitle: `2000 Core English Words · ${coreRange} · 每日 ${Number(state.settings.dailyGoal) || 15} 个`,
      empty: "当前 2000 词范围暂时没有词，可以切换其他册或单元。",
    },
    eew4000: {
      title: "4000 Essential English Words",
      short: `4000词 · ${eewRange}`,
      badge: `4000词 · ${eewRange}`,
      subtitle: `4000 Essential English Words · ${eewRange} · 每日 ${Number(state.settings.dailyGoal) || 15} 个`,
      empty: "当前 4000 词范围暂时没有词，可以切换其他册或单元。",
    },
    unicorn: {
      title: "独角兽背单词",
      short: `Unlock 3${state.selectedUnicornUnit === "all" ? "" : ` · ${unitLabel}`}`,
      badge: `Unlock 3${state.selectedUnicornUnit === "all" ? "" : ` · ${unitLabel}`}`,
      subtitle: `Unlock 3 Reading & Writing · ${unitLabel} · 每日 ${Number(state.settings.dailyGoal) || 15} 个`,
      empty: "当前单元暂时没有可学习的词，可以切换独角兽其他单元。",
    },
    custom: {
      title: "自定义词库",
      short: "自定义词库",
      badge: "自定义",
      subtitle: `自定义词库 · 每日 ${Number(state.settings.dailyGoal) || 15} 个 · 错词优先复习`,
      empty: "自定义词库还没有词，可以在家长设置里批量导入。",
    },
  };
  return metas[state.selectedLibrary] || metas.zhongkao;
}

function bookLabel(book) {
  if (book === "all") return "全部册";
  const match = String(book).match(/\d+/);
  return match ? `第${match[0]}册` : "全部册";
}

function unitLabel(unit) {
  if (unit === "all") return "全部单元";
  const match = String(unit).match(/\d+/);
  return match ? `U${match[0]}` : "全部单元";
}

function layeredRangeLabel(library, book, unit) {
  if (library === "core2000" || library === "eew4000") {
    if (book === "all") return "全部册";
    if (unit === "all") return `${bookLabel(book)} · 全部单元`;
    return `${bookLabel(book)} · ${unitLabel(unit)}`;
  }
  return "全部词";
}

function unicornUnitLabel(unit) {
  return {
    all: "全部单元",
    unit1: "第一单元",
    unit2: "第二单元",
    unit3: "第三单元",
    unit4: "第四单元",
    unit5: "第五单元",
    unknown: "未分单元",
  }[unit] || "全部单元";
}

function unicornUnitCount(unit) {
  if (unit === "all") return UNICORN_WORDS.length;
  return UNICORN_WORDS.filter(word => word.unit?.split("; ").includes(unit)).length;
}

function getProgress(wordId) {
  if (!state.progress[wordId]) {
    state.progress[wordId] = { seen: 0, correct: 0, wrong: 0, status: "new", lastSeen: "" };
  }
  return state.progress[wordId];
}

function todayStats() {
  const key = todayKey();
  if (!state.daily[key]) {
    state.daily[key] = { completed: 0, learnedIds: [], stars: 0 };
  }
  return state.daily[key];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function wordPart(word) {
  const raw = String(word.part || word.pos || inferredPartFromMeaning(word.meaning) || "").trim();
  if (!raw) return "";
  return normalizedPartLabels(raw)[0] || "";
}

function normalizedPartLabels(raw) {
  return String(raw || "")
    .replaceAll("preposition", "prep.")
    .replaceAll("determiner", "det.")
    .replace(/\b(phr v|prep phr|exclam|adj|adv|prep|conj|pron|det|num|n|v)\b\.?/g, "$1.")
    .replace(/\s+/g, " ")
    .split(/[,/&]+|\s+and\s+|\s+or\s+/i)
    .map(part => part.trim().replace(/\.$/, "") + ".")
    .filter(part => /^(phr v|prep phr|exclam|adj|adv|prep|conj|pron|det|num|n|v)\.$/.test(part));
}

function inferredPartFromMeaning(meaning) {
  const text = String(meaning || "").trim();
  const suffix = text.match(/\s+(n|v|adj|adv|prep|conj|pron|det|phr)\.?$/i);
  if (suffix) return suffix[1].toLowerCase();
  const prefix = text.match(/^(n|v|vi|vt|adj|adv|a|prep|conj|pron|det)\.\s*/i);
  if (!prefix) return "";
  const value = prefix[1].toLowerCase();
  if (value === "a") return "adj";
  if (value === "vt" || value === "vi") return "v";
  return value;
}

function cleanMeaningForDisplay(word) {
  let meaning = String(word.meaning || "").trim();
  if (wordPart(word)) {
    meaning = meaning
      .replace(/^(n|v|vi|vt|adj|adv|a|prep|conj|pron|det)\.\s*/i, "")
      .replace(/\s+(n|v|adj|adv|prep|conj|pron|det|phr)\.?$/i, "")
      .trim();
  }
  return meaning;
}

function formattedMeaning(word) {
  const part = wordPart(word);
  return `${part ? `${part} ` : ""}${cleanMeaningForDisplay(word)}`;
}

function phoneticLine(word) {
  const phonetic = String(word.phonetic || "").trim();
  return phonetic ? `<p class="phonetic">/${escapeHtml(phonetic.replace(/^\/|\/$/g, ""))}/</p>` : "";
}

function isPlaceholderHint(value) {
  const text = String(value || "").trim();
  return !text
    || /^I learned the word ".+" today\.$/.test(text)
    || /^I can use the word ".+" in (?:an English sentence|English)\.$/.test(text)
    || /^I can use ".+" in a short sentence\.$/.test(text)
    || /^Try to use ".+" in a short sentence\.$/.test(text)
    || /^Try to use .+ in a sentence\.$/.test(text)
    || /^Review the word: .+\.$/.test(text);
}

function promptLine(word) {
  const definition = isPlaceholderHint(word.definition) ? "" : word.definition;
  const example = isPlaceholderHint(word.example) ? "" : word.example;
  return definition || example || "";
}

function renderSentenceAudio(text, extraClass = "") {
  if (!text) return "";
  return `
    <div class="sentence-audio ${extraClass}">
      <p>${escapeHtml(text)}</p>
      <button class="tiny-sound-btn" data-action="speak" data-text="${escapeHtml(text)}" aria-label="朗读句子">▶</button>
    </div>
  `;
}

function initSpeechVoices() {
  if (!("speechSynthesis" in window)) return [];
  cachedVoices = window.speechSynthesis.getVoices();
  return cachedVoices;
}

if ("speechSynthesis" in window) {
  initSpeechVoices();
  window.speechSynthesis.addEventListener?.("voiceschanged", initSpeechVoices);
}

function stats() {
  const progressValues = Object.values(state.progress);
  const learned = progressValues.filter(item => item.seen > 0).length;
  const wrong = progressValues.filter(item => item.status === "wrong").length;
  const completedDays = Object.values(state.daily).filter(day => day.completed > 0).length;
  return {
    learned,
    wrong,
    completedDays,
    stars: Object.values(state.daily).reduce((sum, day) => sum + (day.stars || 0), 0),
    today: todayStats()
  };
}

function normalizedHeadword(word) {
  return word.word.toLowerCase().replace(/[^a-z]/g, "");
}

function isAlphabeticalWordList(words) {
  if (words.length < 8) return false;
  let orderedPairs = 0;
  let comparablePairs = 0;
  for (let index = 1; index < words.length; index += 1) {
    const previous = normalizedHeadword(words[index - 1]);
    const current = normalizedHeadword(words[index]);
    if (!previous || !current || previous === current) continue;
    comparablePairs += 1;
    if (previous <= current) orderedPairs += 1;
  }
  return comparablePairs > 0 && orderedPairs / comparablePairs > 0.9;
}

function shuffledWords(words) {
  const result = [...words];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function buildQueue(onlyWrong = false) {
  const words = activeWords();
  const shouldShuffle = isAlphabeticalWordList(words);
  const wrongWords = words.filter(word => getProgress(word.id).status === "wrong");
  const newWords = words.filter(word => getProgress(word.id).seen === 0);
  const reviewWords = words.filter(word => getProgress(word.id).seen > 0 && getProgress(word.id).status !== "wrong");
  const orderedWrongWords = shouldShuffle ? shuffledWords(wrongWords) : wrongWords;
  const orderedNewWords = shouldShuffle ? shuffledWords(newWords) : newWords;
  const orderedReviewWords = shouldShuffle ? shuffledWords(reviewWords) : reviewWords;
  const pool = onlyWrong ? orderedWrongWords : [...orderedWrongWords, ...orderedNewWords, ...orderedReviewWords];
  return pool.slice(0, Math.max(1, Number(state.settings.dailyGoal) || 15));
}

function startSession(onlyWrong = false) {
  const queue = buildQueue(onlyWrong);
  state.session = {
    queue,
    index: 0,
    stage: "choice",
    correct: 0,
    wrong: 0,
    answer: "",
    feedback: "",
    choices: queue[0] ? makeMeaningChoices(queue[0]) : [],
    selectedChoice: "",
    pendingNext: "",
    completedIds: [],
    currentMistake: false
  };
  state.view = "study";
  render();
}

function currentWord() {
  return state.session?.queue[state.session.index];
}

function isCorrectSpelling(input, word) {
  const answer = input.trim().toLowerCase();
  const accepted = [word.word, ...(word.aliases || [])].map(item => String(item).toLowerCase());
  return accepted.includes(answer);
}

function markWord(word, correct) {
  const item = getProgress(word.id);
  item.seen += 1;
  item.lastSeen = todayKey();
  if (correct) {
    item.correct += 1;
    item.status = item.wrong > 0 && item.correct < item.wrong + 2 ? "reviewing" : "known";
    state.session.correct += 1;
  } else {
    item.wrong += 1;
    item.status = "wrong";
    state.session.wrong += 1;
  }
}

function completeWord(correct) {
  const word = currentWord();
  if (!word) return;
  if (state.session.completedIds.includes(word.id)) return;
  state.session.completedIds.push(word.id);
  markWord(word, correct);
  const day = todayStats();
  if (!day.learnedIds.includes(word.id)) {
    day.learnedIds.push(word.id);
    day.completed += 1;
    day.stars += correct ? 2 : 1;
  }
  saveState();
}

function nextStage() {
  const session = state.session;
  if (!session) return;
  clearAutoAdvance();
  const word = currentWord();
  if (session.stage === "card") {
    setStage(nextStageName("card", word), word);
  } else {
    const next = nextStageName(session.stage, word);
    if (next) {
      setStage(next, word);
    } else {
      advanceWord();
    }
  }
  render();
}

function setStage(stage, word) {
  const session = state.session;
  clearAutoAdvance();
  session.stage = stage;
  session.feedback = "";
  session.pendingNext = "";
  session.answer = "";
  session.selectedChoice = "";
  if (stage === "choice") {
    session.choices = makeMeaningChoices(word);
  } else if (stage === "reverse-choice") {
    session.choices = makeWordChoices(word);
  } else {
    session.choices = [];
  }
}

function clearAutoAdvance() {
  if (state.session?.autoAdvanceTimer) {
    clearTimeout(state.session.autoAdvanceTimer);
    state.session.autoAdvanceTimer = null;
  }
}

function autoAdvanceToCard(wordId, selectedChoice) {
  clearAutoAdvance();
  state.session.autoAdvanceTimer = setTimeout(() => {
    const word = currentWord();
    if (
      state.session
      && state.session.stage === "choice"
      && word?.id === wordId
      && state.session.selectedChoice === selectedChoice
    ) {
      setStage("card", word);
      render();
    }
  }, 2000);
}

function stageSequence(word) {
  if (word.library === "unicorn" && promptLine(word)) return ["choice", "card", "spell"];
  if (word.library === "unicorn") return ["choice", "card", "reverse-choice"];
  return ["choice", "card", "spell"];
}

function nextStageName(stage, word) {
  const sequence = stageSequence(word);
  const index = sequence.indexOf(stage);
  return index >= 0 ? sequence[index + 1] : "";
}

function advanceWord() {
  const session = state.session;
  clearAutoAdvance();
  session.index += 1;
  session.stage = session.index >= session.queue.length ? "result" : "choice";
  session.feedback = "";
  session.answer = "";
  session.choices = [];
  session.selectedChoice = "";
  session.pendingNext = "";
  session.currentMistake = false;
  if (session.stage === "choice") {
    setStage("choice", currentWord());
  }
}

function makeMeaningChoices(word) {
  const scopedWords = activeWords().filter(item => item.id !== word.id);
  const fallbackWords = allWords().filter(item => item.id !== word.id && item.library === word.library);
  const broaderFallbackWords = allWords().filter(item => item.id !== word.id);
  const seenMeanings = new Set([word.meaning]);
  const otherChoices = [];
  for (const pool of [shuffledWords(scopedWords), shuffledWords(fallbackWords), shuffledWords(broaderFallbackWords)]) {
    for (const item of pool) {
      if (otherChoices.length >= 3) break;
      if (seenMeanings.has(item.meaning)) continue;
      seenMeanings.add(item.meaning);
      otherChoices.push({ value: item.meaning, label: formattedMeaning(item) });
    }
    if (otherChoices.length >= 3) break;
  }
  return [{ value: word.meaning, label: formattedMeaning(word) }, ...otherChoices].sort(() => Math.random() - 0.5);
}

function makeWordChoices(word) {
  const otherWords = activeWords()
    .filter(item => item.id !== word.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(item => item.word);
  return [word.word, ...otherWords].sort(() => Math.random() - 0.5);
}

function bestEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = cachedVoices.length ? cachedVoices : initSpeechVoices();
  const preferred = [
    "samantha",
    "google us english",
    "microsoft jenny",
    "microsoft aria",
    "microsoft guy",
    "daniel",
    "karen",
    "alex"
  ];
  return preferred
    .map(name => voices.find(voice => voice.name.toLowerCase().includes(name)))
    .find(Boolean)
    || voices.find(voice => /^en-(US|GB|AU|CA)/i.test(voice.lang))
    || voices.find(voice => voice.lang?.toLowerCase().startsWith("en"))
    || null;
}

function speak(text, audioSrc = "") {
  if (!text) return;
  if (audioSrc) {
    const audio = new Audio(audioSrc);
    audio.setAttribute("playsinline", "");
    audio.play().catch(() => speak(text));
    return;
  }
  if (!("speechSynthesis" in window)) {
    state.audio = { ready: false, status: "不可用", error: "当前浏览器暂不支持朗读。" };
    state.message = state.audio.error;
    render();
    return;
  }
  initSpeechVoices();
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = bestEnglishVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || "en-US";
  utterance.rate = 0.82;
  utterance.pitch = 1.03;
  let started = false;
  utterance.onstart = () => {
    started = true;
    state.audio = { ready: true, status: "声音已开启", error: "" };
  };
  utterance.onerror = () => {
    state.audio = {
      ready: false,
      status: "声音未开启",
      error: "手机浏览器没有放出声音，请先点“启用声音”，并确认手机没有静音。"
    };
    state.message = state.audio.error;
    render();
  };
  window.speechSynthesis.resume?.();
  window.speechSynthesis.speak(utterance);
  setTimeout(() => {
    if (!started && !window.speechSynthesis.speaking) {
      state.audio = {
        ready: false,
        status: "声音未开启",
        error: "如果手机没声音，请点“启用声音”，并调高媒体音量。"
      };
      state.message = state.audio.error;
      render();
    }
  }, 900);
}

function renderAudioHelp() {
  if (state.audio?.ready) return "";
  return `
    <article class="audio-help">
      <span>手机没声音时，先点一次启用声音。</span>
      <button class="tiny-action-btn" data-action="enable-audio">启用声音</button>
    </article>
  `;
}

function enableAudio() {
  state.message = "";
  speak("Sound is ready.");
}

function parseCustomWords(raw) {
  return raw
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      const parts = line.includes("\t")
        ? line.split("\t")
        : line.includes(",")
          ? line.split(",")
          : line.split(/\s+-\s+/);
      if (parts.length < 2) return null;
      const word = parts[0].trim();
      const meaning = parts[1].trim();
      return {
        id: `custom-${Date.now()}-${index}`,
        library: "custom",
        word,
        meaning,
        example: (parts[2] || `Try to use ${word} in a sentence.`).trim()
      };
    })
    .filter(item => item && item.word && item.meaning);
}

function render() {
  const root = document.querySelector("#app");
  root.innerHTML = `${renderView()}${renderNav()}`;
}

function renderView() {
  if (state.view === "library") return renderLibrary();
  if (state.view === "study") return renderStudy();
  if (state.view === "wrong") return renderWrong();
  if (state.view === "settings") return renderSettings();
  return renderHome();
}

function renderHome() {
  const data = stats();
  const goal = Number(state.settings.dailyGoal) || 15;
  const percent = Math.min(100, Math.round((data.today.completed / goal) * 100));
  const meta = libraryMeta();
  return `
    <section class="screen">
      <header class="topbar">
        <div>
          <p class="eyebrow">奥利奥学英语</p>
          <h1>今天也收集一点进步</h1>
          <p class="muted">${meta.subtitle}</p>
        </div>
        <div class="sticker">${data.stars}★</div>
      </header>

      <article class="card hero-card">
        <h2>今日任务</h2>
        <span class="pill blue">${meta.short}</span>
        <p class="muted">已完成 ${data.today.completed} / ${goal} 个词</p>
        <div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>
        <div class="hero-grid">
          <div class="mini-card"><span class="mini-label">连续学习</span><span class="mini-value">${data.completedDays} 天</span></div>
          <div class="mini-card"><span class="mini-label">错词待复习</span><span class="mini-value">${data.wrong} 个</span></div>
        </div>
        <button class="primary-btn" data-action="start">开始学习</button>
      </article>

      <div class="section-title">
        <h3>本周小贴纸</h3>
        <span class="pill peach">完成后加星星</span>
      </div>
      <div class="confetti-note">先看懂，再选对，最后拼出来。不会的词会自动回到复习清单里。</div>
      ${state.message ? `<p class="muted">${state.message}</p>` : ""}
    </section>
  `;
}

function renderLibrary() {
  const selectedCount = activeWords().length;
  const meta = libraryMeta();
  return `
    <section class="screen">
      <header class="topbar">
        <div>
          <p class="eyebrow">选择词库</p>
          <h1>今天背哪一本？</h1>
          <p class="muted">先选大类，再选册或单元。页面只展开当前词库，保持短一点。</p>
        </div>
        <div class="sticker">本</div>
      </header>
      <article class="card library-summary">
        <span class="pill">${meta.badge}</span>
        <h2>${meta.title}</h2>
        <p class="muted">当前范围：${selectedCount} 个词</p>
        <button class="primary-btn" data-action="start">开始学习这个范围</button>
      </article>
      ${renderLibraryTabs()}
      ${renderSelectedLibraryPanel()}
    </section>
  `;
}

function renderLibraryTabs() {
  const tabs = [
    ["zhongkao", "中考"],
    ["gaokao", "高考"],
    ["ket", "KET"],
    ["pet", "PET"],
    ["unicorn", "独角兽"],
    ["core2000", "2000词"],
    ["eew4000", "4000词"],
    ["custom", "自定义"]
  ];
  return `
    <div class="library-tabs" role="tablist" aria-label="词库大类">
      ${tabs.map(([id, label]) => `
        <button class="library-tab ${state.selectedLibrary === id ? "active" : ""}" data-action="select-library" data-library="${id}">
          ${label}
        </button>
      `).join("")}
    </div>
  `;
}

function renderSelectedLibraryPanel() {
  if (state.selectedLibrary === "unicorn") return renderUnicornUnitPicker();
  if (state.selectedLibrary === "core2000") {
    return renderBookUnitPicker({
      library: "core2000",
      title: "选择 2000 词范围",
      words: FULL_WORD_BANKS.core2000,
      selectedBook: state.selectedCore2000Book,
      selectedUnit: state.selectedCore2000Unit,
      bookAction: "select-core2000-book",
      unitAction: "select-core2000-unit"
    });
  }
  if (state.selectedLibrary === "eew4000") {
    return renderBookUnitPicker({
      library: "eew4000",
      title: "选择 4000 词范围",
      words: FULL_WORD_BANKS.eew4000,
      selectedBook: state.selectedEEW4000Book,
      selectedUnit: state.selectedEEW4000Unit,
      bookAction: "select-eew4000-book",
      unitAction: "select-eew4000-unit"
    });
  }
  return renderSimpleLibraryPanel();
}

function renderSimpleLibraryPanel() {
  const meta = libraryMeta();
  const count = activeWords().length;
  const notes = {
    zhongkao: "后续可以继续扩展：真题高频、短语、熟词生义。",
    gaokao: "后续可以继续扩展：考纲词、派生词、真题高频。",
    ket: "后续可以继续扩展：生活、学校、运动、旅行等主题。",
    pet: "后续可以继续扩展：生活、学校、运动、旅行等主题。",
    custom: "老师新讲的词可以在设置里导入，导入后会出现在这里。"
  };
  return `
    <article class="card setting-card">
      <h3>${meta.title}</h3>
      <p class="muted">当前可学习 ${count} 个词。${notes[state.selectedLibrary] || ""}</p>
    </article>
  `;
}

function renderUnicornUnitPicker() {
  const units = ["all", "unit1", "unit2", "unit3", "unit4", "unit5"];
  return `
    <article class="card setting-card">
      <h3>选择 Unlock 3 单元</h3>
      <div class="unit-grid">
        ${units.map(unit => `
          <button class="${state.selectedUnicornUnit === unit ? "secondary-btn" : "ghost-btn"}" data-action="select-unicorn-unit" data-unit="${unit}">
            ${unicornUnitLabel(unit)} · ${unicornUnitCount(unit)}
          </button>
        `).join("")}
      </div>
    </article>
  `;
}

function uniqueSortedLayerValues(words, field) {
  return [...new Set(words.map(word => word[field]).filter(Boolean))]
    .sort((left, right) => (Number(left.match(/\d+/)?.[0]) || 0) - (Number(right.match(/\d+/)?.[0]) || 0));
}

function bookCount(words, book) {
  if (book === "all") return words.length;
  return words.filter(word => word.book === book).length;
}

function unitCount(words, book, unit) {
  return words.filter(word => {
    const bookMatches = book === "all" || word.book === book;
    const unitMatches = unit === "all" || word.unit === unit;
    return bookMatches && unitMatches;
  }).length;
}

function unitOptionsForBook(words, book) {
  const scoped = book === "all" ? words : words.filter(word => word.book === book);
  return uniqueSortedLayerValues(scoped, "unit");
}

function renderBookUnitPicker({ title, words, selectedBook, selectedUnit, bookAction, unitAction }) {
  const books = ["all", ...uniqueSortedLayerValues(words, "book")];
  const units = ["all", ...unitOptionsForBook(words, selectedBook)];
  return `
    <article class="card setting-card layered-panel">
      <h3>${title}</h3>
      <p class="muted">先选册，再选单元。选“全部”时会按当前范围学习。</p>
      <div class="chip-row">
        ${books.map(book => `
          <button class="chip-btn ${selectedBook === book ? "active" : ""}" data-action="${bookAction}" data-book="${book}">
            ${bookLabel(book)} · ${bookCount(words, book)}
          </button>
        `).join("")}
      </div>
      <div class="unit-grid compact">
        ${units.map(unit => `
          <button class="${selectedUnit === unit ? "secondary-btn" : "ghost-btn"}" data-action="${unitAction}" data-unit="${unit}">
            ${unitLabel(unit)} · ${unitCount(words, selectedBook, unit)}
          </button>
        `).join("")}
      </div>
    </article>
  `;
}

function libraryCard(id, title, desc, badge) {
  const selected = state.selectedLibrary === id;
  return `
    <article class="card library-card">
      <div>
        <h3>${title}</h3>
        <p class="muted">${desc}</p>
        <span class="pill ${selected ? "" : "blue"}">${badge}</span>
      </div>
      <button class="${selected ? "secondary-btn" : "ghost-btn"}" data-action="select-library" data-library="${id}">
        ${selected ? "使用中" : "选择"}
      </button>
    </article>
  `;
}

function lockedCard(title, desc) {
  return `
    <article class="card library-card locked">
      <div>
        <h3>${title}</h3>
        <p class="muted">${desc}</p>
        <span class="pill peach">待开放</span>
      </div>
      <button class="ghost-btn" disabled>锁定</button>
    </article>
  `;
}

function renderStudy() {
  const session = state.session;
  if (!session || session.queue.length === 0) {
    return `
      <section class="screen">
        <div class="card empty">
          <h2>还没有可学习的词</h2>
          <p class="muted">${libraryMeta().empty}</p>
          <button class="primary-btn" data-view="library">去选词库</button>
        </div>
      </section>
    `;
  }
  if (session.stage === "result") return renderResult();
  const word = currentWord();
  const count = `${session.index + 1} / ${session.queue.length}`;
  if (session.stage === "choice") return renderChoice(word, count);
  if (session.stage === "reverse-choice") return renderReverseChoice(word, count);
  if (session.stage === "spell") return renderSpell(word, count);
  return renderCard(word, count);
}

function renderCard(word, count) {
  const meta = libraryMeta();
  const definition = isPlaceholderHint(word.definition) ? "" : word.definition;
  const example = isPlaceholderHint(word.example) ? "" : word.example;
  const cardPrompt = definition ? example : promptLine(word);
  return `
    <section class="screen">
      ${renderAudioHelp()}
      <header class="topbar">
        <div>
          <p class="eyebrow">学习卡 ${count}</p>
          <h1>先把它看熟</h1>
        </div>
        <button class="sound-btn" data-action="speak" data-word="${word.word}" aria-label="朗读 ${word.word}">▶</button>
      </header>
      <article class="card study-card">
        <div>
          <span class="pill">${meta.badge}</span>
          <div class="word-main">${word.word}</div>
          ${phoneticLine(word)}
          <div class="meaning-box">${formattedMeaning(word)}</div>
          ${definition ? renderSentenceAudio(definition, "definition-box") : ""}
          ${cardPrompt ? renderSentenceAudio(cardPrompt, "example") : ""}
        </div>
        <div class="button-row">
          <button class="ghost-btn" data-action="back-to-choice">回到选择题</button>
          <button class="secondary-btn" data-action="next-stage">继续练习</button>
          <button class="ghost-btn" data-action="skip-word">跳过，稍后复习</button>
        </div>
      </article>
    </section>
  `;
}

function choiceButtonClass(choice, word) {
  if (!state.session.feedback) return "choice-btn";
  if (choice.value === word.meaning) return "choice-btn correct";
  if (choice.value === state.session.selectedChoice) return "choice-btn wrong";
  return "choice-btn dimmed";
}

function renderChoice(word, count) {
  const prompt = promptLine(word);
  return `
    <section class="screen">
      ${renderAudioHelp()}
      <header class="topbar">
        <div>
          <p class="eyebrow">选择题 ${count}</p>
          <h1>${word.word}</h1>
          ${phoneticLine(word)}
          <p class="muted">选择最合适的中文释义。</p>
        </div>
        <button class="sound-btn" data-action="speak" data-word="${word.word}" aria-label="朗读 ${word.word}">▶</button>
      </header>
      <article class="card quiz-card">
        ${prompt ? renderSentenceAudio(prompt, "example quiz-prompt") : ""}
        <div class="choice-list">
          ${state.session.choices.map(choice => `<button class="${choiceButtonClass(choice, word)}" data-action="answer-choice" data-choice="${escapeHtml(choice.value)}" ${state.session.feedback ? "disabled" : ""}>${escapeHtml(choice.label)}</button>`).join("")}
        </div>
        <p class="feedback ${state.session.feedback ? (state.session.feedback.includes("正确") ? "good" : "bad") : ""}">${state.session.feedback}</p>
        ${renderFeedbackActions()}
        ${state.session.feedback ? "" : `<button class="ghost-btn" data-action="skip-word">不会，放进错词本</button>`}
      </article>
    </section>
  `;
}

function renderReverseChoice(word, count) {
  return `
    <section class="screen">
      <header class="topbar">
        <div>
          <p class="eyebrow">中英互选 ${count}</p>
          <h1>${word.meaning}</h1>
          <p class="muted">根据中文意思，选择对应的英文单词或短语。</p>
        </div>
      </header>
      <article class="card quiz-card">
        <div class="choice-list">
          ${state.session.choices.map(choice => `<button class="choice-btn" data-action="answer-word-choice" data-choice="${choice}" ${state.session.feedback ? "disabled" : ""}>${choice}</button>`).join("")}
        </div>
        <p class="feedback ${state.session.feedback ? (state.session.feedback.includes("正确") ? "good" : "bad") : ""}">${state.session.feedback}</p>
        ${renderFeedbackActions()}
        ${state.session.feedback ? "" : `<div class="button-row">
          <button class="ghost-btn" data-action="back-to-card">回到单词卡</button>
          <button class="ghost-btn" data-action="skip-word">跳过</button>
        </div>`}
      </article>
    </section>
  `;
}

function renderSpell(word, count) {
  const definition = isPlaceholderHint(word.definition) ? "" : word.definition;
  const isDefinitionPrompt = word.library === "unicorn" && definition;
  const spellHint = String(promptLine(word) || "").replace(word.word, "_____");
  return `
    <section class="screen">
      ${renderAudioHelp()}
      <header class="topbar">
        <div>
          <p class="eyebrow">${isDefinitionPrompt ? "英文释义拼写" : "拼写题"} ${count}</p>
          <h1>${isDefinitionPrompt ? "根据英文释义写单词" : word.meaning}</h1>
          <p class="muted">${isDefinitionPrompt ? "先读懂英文解释，再输入对应单词。" : escapeHtml(spellHint)}</p>
        </div>
        <button class="sound-btn" data-action="speak" data-word="${word.word}" aria-label="朗读 ${word.word}">▶</button>
      </header>
      <article class="card quiz-card">
        ${isDefinitionPrompt ? `${renderSentenceAudio(definition, "definition-box large")}<div class="meaning-hint">中文提示：${word.meaning}</div>` : ""}
        <input class="spell-input" id="spellInput" placeholder="输入英文单词" autocomplete="off" ${state.session.feedback ? "disabled" : ""} />
        <p class="feedback ${state.session.feedback ? (state.session.feedback.includes("正确") ? "good" : "bad") : ""}">${state.session.feedback}</p>
        ${renderFeedbackActions()}
        ${state.session.feedback ? "" : `<div class="button-row three-actions">
          <button class="primary-btn" data-action="answer-spell">检查答案</button>
          <button class="ghost-btn" data-action="back-to-card">回到单词卡</button>
          <button class="ghost-btn" data-action="skip-word">跳过</button>
        </div>`}
      </article>
    </section>
  `;
}

function renderFeedbackActions() {
  if (!state.session?.feedback) return "";
  if (state.session.stage === "choice") {
    return `
      <div class="feedback-actions">
        <button class="primary-btn" data-action="continue-after-feedback">查看单词卡</button>
        <button class="ghost-btn" data-action="back-to-choice">重新选择</button>
      </div>
    `;
  }
  return `
    <div class="feedback-actions">
      <button class="primary-btn" data-action="continue-after-feedback">下一步</button>
      <button class="ghost-btn" data-action="back-to-card">回看单词卡</button>
    </div>
  `;
}

function renderResult() {
  const session = state.session;
  return `
    <section class="screen">
      <header class="topbar">
        <div>
          <p class="eyebrow">今日收尾</p>
          <h1>完成一轮啦</h1>
          <p class="muted">正确 ${session.correct} 次，不熟 ${session.wrong} 次。</p>
        </div>
        <div class="sticker">+★</div>
      </header>
      <article class="card hero-card">
        <h2>小结贴纸</h2>
        <p class="muted">答错和跳过的词已经放进错词本，下次会优先出现。</p>
        <div class="hero-grid">
          <div class="mini-card"><span class="mini-label">本轮词数</span><span class="mini-value">${session.queue.length}</span></div>
          <div class="mini-card"><span class="mini-label">今日完成</span><span class="mini-value">${todayStats().completed}</span></div>
        </div>
        <button class="primary-btn" data-view="home">回到首页</button>
      </article>
    </section>
  `;
}

function renderWrong() {
  const wrongWords = activeWords().filter(word => getProgress(word.id).status === "wrong");
  return `
    <section class="screen">
      <header class="topbar">
        <div>
          <p class="eyebrow">错词优先复习</p>
          <h1>把不熟的词再贴牢</h1>
          <p class="muted">跳过和答错都会出现在这里。</p>
        </div>
        <div class="sticker">${wrongWords.length}</div>
      </header>
      ${wrongWords.length ? `<button class="primary-btn" data-action="review-wrong">复习错词</button>` : ""}
      <div class="word-list" style="margin-top:14px">
        ${wrongWords.length ? wrongWords.map(word => `
          <article class="card word-row">
            <h3>${word.word}</h3>
            <p class="muted">${word.meaning} · ${promptLine(word) || "暂无提示句"}</p>
            <button class="ghost-btn" data-action="mark-known" data-id="${word.id}">标记已掌握</button>
          </article>
        `).join("") : `
          <article class="card empty">
            <h2>错词本是空的</h2>
            <p class="muted">很好，今天先从新词开始。</p>
            <button class="primary-btn" data-action="start">开始学习</button>
          </article>
        `}
      </div>
    </section>
  `;
}

function renderSettings() {
  const data = stats();
  return `
    <section class="screen">
      <header class="topbar">
        <div>
          <p class="eyebrow">家长设置</p>
          <h1>管理学习节奏</h1>
          <p class="muted">本地记录会按登录名字分开保存，登录后也会同步到云端。</p>
        </div>
        <div class="sticker">设</div>
      </header>
      <div class="stats-list">
        ${renderCloudSyncCard()}
        <article class="card setting-card">
          <h3>每日新词数量</h3>
          <select id="dailyGoal">
            ${[10, 15, 20, 25, 30].map(num => `<option value="${num}" ${Number(state.settings.dailyGoal) === num ? "selected" : ""}>每天 ${num} 个</option>`).join("")}
          </select>
        </article>
        <article class="card setting-card">
          <h3>加入老师新词</h3>
          <p class="muted">一行一个词，支持：word - 中文释义 - 例句，也支持用逗号或表格粘贴。</p>
          <textarea id="customInput" placeholder="heritage - 遗产；传统 - The city has a rich cultural heritage.&#10;ceremony,仪式,The ceremony started at nine.&#10;preserve	保护；保留	We should preserve old buildings."></textarea>
          <button class="secondary-btn" data-action="import-custom" style="width:100%;margin-top:10px">导入到自定义词库</button>
          ${state.message ? `<p class="feedback good">${state.message}</p>` : ""}
        </article>
        <article class="card setting-card">
          <h3>本地统计</h3>
          <div class="hero-grid">
            <div class="mini-card"><span class="mini-label">累计学习</span><span class="mini-value">${data.learned}</span></div>
            <div class="mini-card"><span class="mini-label">错词数量</span><span class="mini-value">${data.wrong}</span></div>
            <div class="mini-card"><span class="mini-label">学习天数</span><span class="mini-value">${data.completedDays}</span></div>
            <div class="mini-card"><span class="mini-label">星星</span><span class="mini-value">${data.stars}</span></div>
          </div>
        </article>
        <article class="card setting-card">
          <h3>清空本地数据</h3>
          <p class="muted">这里只清空当前浏览器里当前使用者的学习记录和自定义词库，不会清空其他名字的本地记录。</p>
          <button class="danger-btn" data-action="clear-data" style="width:100%">一键清空</button>
        </article>
      </div>
    </section>
  `;
}

function renderCloudSyncCard() {
  const user = state.auth.user;
  return `
    <article class="card setting-card">
      <h3>云同步登录</h3>
      ${user ? `
        <p class="muted">当前使用者：<strong>${escapeHtml(user.name)}</strong></p>
        <div class="sync-row">
          <span class="pill blue">${state.auth.status}</span>
          ${state.auth.lastSynced ? `<span class="muted">上次同步：${state.auth.lastSynced}</span>` : ""}
        </div>
        ${state.auth.error ? `<p class="feedback bad">${state.auth.error}</p>` : ""}
        <div class="button-row">
          <button class="secondary-btn" data-action="cloud-sync-now">立即同步</button>
          <button class="ghost-btn" data-action="cloud-logout">退出登录</button>
        </div>
      ` : `
        <p class="muted">输入孩子名字和密码后，进度会自动同步到云端。第一次使用会自动创建档案。</p>
        <div class="form-grid">
          <input class="text-input" id="cloudName" placeholder="孩子名字，例如 yoyo" autocomplete="username" />
          <input class="text-input" id="cloudPassword" placeholder="密码，至少 4 位" type="password" autocomplete="current-password" />
        </div>
        ${state.auth.error ? `<p class="feedback bad">${state.auth.error}</p>` : ""}
        <button class="primary-btn" data-action="cloud-login" style="margin-top:10px">登录 / 创建档案</button>
      `}
    </article>
  `;
}

function renderNav() {
  const items = [
    ["home", "⌂", "首页"],
    ["library", "□", "词库"],
    ["wrong", "☆", "错词"],
    ["settings", "⚙", "设置"]
  ];
  return `
    <nav class="nav">
      ${items.map(([view, icon, label]) => `
        <button class="nav-btn ${state.view === view ? "active" : ""}" data-view="${view}">
          <span class="nav-icon">${icon}</span><span>${label}</span>
        </button>
      `).join("")}
    </nav>
  `;
}

document.addEventListener("click", async event => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.view) {
    state.view = target.dataset.view;
    render();
    return;
  }

  const action = target.dataset.action;
  if (action === "start") startSession(false);
  if (action === "review-wrong") startSession(true);
  if (action === "speak") {
    const word = currentWord();
    speak(target.dataset.text || target.dataset.word, target.dataset.text ? "" : (word?.audio || ""));
  }
  if (action === "enable-audio") enableAudio();
  if (action === "next-stage") nextStage();
  if (action === "skip-word") {
    completeWord(false);
    advanceWord();
    render();
  }
  if (action === "answer-choice") {
    if (state.session.feedback) return;
    const word = currentWord();
    const correct = target.dataset.choice === word.meaning;
    const next = nextStageName(state.session.stage, word);
    state.session.selectedChoice = target.dataset.choice;
    state.session.feedback = correct ? "正确，马上进入单词卡。" : `不熟，正确释义是：${formattedMeaning(word)}`;
    state.session.pendingNext = next ? "next-stage" : "advance";
    if (!correct) state.session.currentMistake = true;
    if (correct) autoAdvanceToCard(word.id, target.dataset.choice);
    render();
  }
  if (action === "answer-word-choice") {
    if (state.session.feedback) return;
    const word = currentWord();
    const correct = target.dataset.choice === word.word;
    const mastered = correct && !state.session.currentMistake;
    state.session.feedback = mastered ? "选择正确，已经记下这次进步。" : `还差一点，答案是 ${word.word}`;
    state.session.pendingNext = "advance";
    completeWord(mastered);
    render();
  }
  if (action === "answer-spell") {
    if (state.session.feedback) return;
    const input = document.querySelector("#spellInput");
    const word = currentWord();
    const spelledRight = isCorrectSpelling(input.value, word);
    const mastered = spelledRight && !state.session.currentMistake;
    state.session.feedback = mastered ? "拼写正确，已经记下这次进步。" : `还差一点，答案是 ${word.word}`;
    state.session.pendingNext = "advance";
    completeWord(mastered);
    render();
  }
  if (action === "continue-after-feedback") {
    clearAutoAdvance();
    if (state.session.pendingNext === "next-stage") {
      nextStage();
    } else {
      advanceWord();
      render();
    }
  }
  if (action === "back-to-card") {
    const session = state.session;
    session.stage = "card";
    session.feedback = "";
    session.pendingNext = "";
    session.choices = [];
    session.selectedChoice = "";
    clearAutoAdvance();
    render();
  }
  if (action === "back-to-choice") {
    const word = currentWord();
    setStage("choice", word);
    render();
  }
  if (action === "select-library") {
    state.selectedLibrary = target.dataset.library;
    saveState();
    render();
  }
  if (action === "select-unicorn-unit") {
    state.selectedUnicornUnit = target.dataset.unit;
    saveState();
    render();
  }
  if (action === "select-core2000-book") {
    state.selectedCore2000Book = target.dataset.book;
    state.selectedCore2000Unit = "all";
    saveState();
    render();
  }
  if (action === "select-core2000-unit") {
    state.selectedCore2000Unit = target.dataset.unit;
    saveState();
    render();
  }
  if (action === "select-eew4000-book") {
    state.selectedEEW4000Book = target.dataset.book;
    state.selectedEEW4000Unit = "all";
    saveState();
    render();
  }
  if (action === "select-eew4000-unit") {
    state.selectedEEW4000Unit = target.dataset.unit;
    saveState();
    render();
  }
  if (action === "mark-known") {
    const item = getProgress(target.dataset.id);
    item.status = "known";
    saveState();
    render();
  }
  if (action === "import-custom") {
    const input = document.querySelector("#customInput");
    const imported = parseCustomWords(input.value);
    state.customWords.push(...imported);
    state.selectedLibrary = "custom";
    state.message = imported.length ? `已导入 ${imported.length} 个自定义词。` : "没有识别到有效词条，请检查格式。";
    saveState();
    render();
  }
  if (action === "cloud-login") {
    const name = document.querySelector("#cloudName")?.value || "";
    const password = document.querySelector("#cloudPassword")?.value || "";
    try {
      await cloudLogin(name, password);
    } catch (error) {
      state.auth.status = "登录失败";
      state.auth.error = error.message;
      render();
    }
  }
  if (action === "cloud-sync-now") {
    await saveCloudStateNow(false);
  }
  if (action === "cloud-logout") {
    cloudLogout();
  }
  if (action === "clear-data") {
    if (confirm("确认清空当前使用者在这台浏览器里的学习记录和自定义词库吗？")) {
      if (state.auth?.user) {
        localStorage.removeItem(profileStorageKey(state.auth.user));
      } else {
        localStorage.removeItem(ANONYMOUS_STORAGE_KEY);
      }
      applyLearningSnapshot(null);
      state.message = "已清空当前使用者的本地学习记录。";
      saveLocalState();
      render();
    }
  }
});

document.addEventListener("change", event => {
  if (event.target.id === "dailyGoal") {
    state.settings.dailyGoal = Number(event.target.value);
    saveState();
    render();
  }
});

render();
