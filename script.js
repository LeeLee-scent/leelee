// script.js - 香氣人格測驗 (功能優化版本)

const questions = [
  {
    question: "Q1. 清晨起床的你，最需要什麼來開啟新的一天？",
    image: "images/q1.jpg",
    answers: [
      { text: "A. 在安靜中，先讓自己清醒，再開始思考。", type: "woody" },
      { text: "B. 一場晨間瑜伽或暖身運動，激發能量。", type: "citrus" },
      { text: "C. 在溫暖舒適的環境中，讓心情被溫柔地撫慰。", type: "floral" },
      { text: "D. 與陽光或大自然連結，讓身心充滿平靜感。", type: "musk" }
    ]
  },
  {
    question: "Q2. 在不經意的空氣中，你最難忘的是哪種氣味記憶？",
    image: "images/q2.jpg",
    answers: [
      { text: "A. 熱帶果香與汗水交織的旅行午後", type: "citrus" },
      { text: "B. 雨後濕潤的森林氣息", type: "woody" },
      { text: "C. 恰到好處的白玫瑰香水味", type: "floral" },
      { text: "D. 甜點店飄出的奶油與焦糖香", type: "musk" }
    ]
  },
  {
    question: "Q3. 當朋友遇到困難時，你通常會怎麼做？",
    image: "images/q3.jpg",
    answers: [
      { text: "A. 默默地聽完他們說，然後給出實際的建議。", type: "woody" },
      { text: "B. 帶他們出去玩，讓他們暫時忘記煩惱。", type: "citrus" },
      { text: "C. 陪在他們身邊，給予溫暖的擁抱和安慰。", type: "floral" },
      { text: "D. 先讓他們自己冷靜，等他們準備好再找你。", type: "musk" }
    ]
  },
  {
    question: "Q4. 如果要挑一個地方獨自靜心，你會選擇？",
    image: "images/q4.jpg",
    answers: [
      { text: "A. 一個能看到群山與樹海的景觀咖啡廳。", type: "woody" },
      { text: "B. 一個充滿陽光的私人露台，能聞到新鮮花草的氣味。", type: "citrus" },
      { text: "C. 一間溫暖舒適、有壁爐的舊圖書館。", type: "floral" },
      { text: "D. 一間極簡風格的設計師公寓，能靜靜思考。", type: "musk" }
    ]
  },
  {
    question: "Q5. 如果週末只剩一天的自由時間，你會選擇？",
    image: "images/q5.jpg",
    answers: [
      { text: "A. 享受一場靜謐的藝文之旅，如參觀畫廊或博物館。", type: "woody" },
      { text: "B. 約上三五好友去戶外，嘗試一項充滿挑戰性的新運動。", type: "citrus" },
      { text: "C. 在家為朋友準備一頓豐盛的晚餐，享受相處的溫馨時光。", type: "floral" },
      { text: "D. 找間舒適的咖啡廳，帶上耳機、專注地閱讀或工作。", type: "musk" }
    ]
  },
  {
    question: "Q6. 你認為最能代表「高級感」的是什麼？",
    image: "images/q6.jpg",
    answers: [
      { text: "A. 一件能夠穿很久、質感很好的喀什米爾毛衣。", type: "woody" },
      { text: "B. 簡單俐落的設計，但細節藏著巧思。", type: "citrus" },
      { text: "C. 柔軟的絲綢或精緻的蕾絲，帶給身體美好的觸感。", type: "floral" },
      { text: "D. 一個乾淨且沒有多餘裝飾的空間。", type: "musk" }
    ]
  }
];

const results = {
  woody: {
    title: "木質沉穩型",
    image: "images/result_woody.jpg",
    hashtags: ["#務實穩健", "#沉穩內斂", "#溫潤理性"],
    description: "你是個思維清晰、腳踏實地的務實派，內心世界像一片遼闊的森林，寧靜而深邃。你擁有強大的內在力量，不隨波逐流，總能保持冷靜，用理性的方式分析問題。在工作上，你通常是團隊中值得信賴的基石；在人際關係中，你或許話不多，但總是能給予最堅實的支持和最中肯的建議。",
    analysis: "你的選擇顯示你追求的是一種內在的平和與安定感。你重視事物的深度與本質，喜歡沉浸在書本、音樂或靜謐的環境中，透過獨處來為自己充電。木質調香氣，如<strong>檀香</strong>、<strong>雪松</strong>、<strong>岩蘭草</strong>，能完美襯托你穩健的個性，這些香調從大地而來，散發著沉著而溫暖的氣息，讓你感到被環抱的安心與力量。"
  },
  citrus: {
    title: "柑橘清新型",
    image: "images/result_citrus.jpg",
    hashtags: ["#熱情開朗", "#樂觀正向", "#自由灑脫"],
    description: "你充滿熱情與活力，天生是個樂觀主義者，就像初晨的陽光，明亮而溫暖。你不喜歡被束縛，樂於探索新事物和未知領域，對生活中的每一刻都抱持著好奇心與冒險精神。在社交場合，你是自然而然的氣氛製造者，總是能用你的正能量感染身邊的人。你享受在動態中找尋自我，相信每一次的嘗試都是一場值得的冒險。",
    analysis: "你的選擇反映出你外向、喜愛社交的靈魂。你傾向於輕盈、明亮的選項，因為它們能激發你的熱情與創造力。柑橘調，例如<strong>葡萄柚</strong>、<strong>檸檬</strong>、<strong>佛手柑</strong>，能完美地與你的個性契合。它們清新、明快的氣息，能讓你隨時保持清醒，精神煥發，讓你的每一天都充滿積極活力的氣息。"
  },
  floral: {
    title: "花香柔和型",
    image: "images/result_floral.jpg",
    hashtags: ["#感性細膩", "#溫暖療癒", "#優雅浪漫"],
    description: "你擁有一顆溫暖、細膩的心，能夠敏銳地感知他人的情緒與需求。你的氣質優雅而親切，充滿同理心，在人際關係中扮演著溫和的協調者和療癒者。你重視情感的連結，善於營造舒適與和諧的氛圍。你的感性與內在力量，使你總能成為別人尋求慰藉的對象，總是以最溫柔的方式給予支持與陪伴。",
    analysis: "你的選擇傾向於感性、浪漫且溫馨的體驗。你相信美好的事物能滋養心靈，並享受生活中的儀式感。花香調，如<strong>玫瑰</strong>、<strong>茉莉</strong>、<strong>橙花</strong>，能凸顯你柔美且充滿內在力量的特質。這些香氣不僅增添你的個人魅力，更能傳達出你溫柔而堅定的性格，讓人們因為你的存在而感到美好。"
  },
  musk: {
    title: "麝香神秘型",
    image: "images/result_musk.jpg",
    hashtags: ["#高雅內斂", "#神秘直覺", "#獨立思考"],
    description: "你是一位安靜、內斂卻充滿深度的人。你的氣場獨特而高雅，不需言語便能傳達出強烈的個人風格。你擁有敏銳的直覺和獨立的思考能力，不隨波逐流，總是保持著一份神秘感，讓人們忍不住想更深入地了解你。你重視個人空間，從獨處中汲取靈感與力量，不輕易表達但內心世界豐富。",
    analysis: "你的選擇反映出你獨特的審美觀和對純粹的追求。你重視個人空間，從獨處中汲取靈感與力量。麝香，結合<strong>琥珀</strong>、<strong>廣藿香</strong>等後調，能完美烘托你乾淨俐落、高雅內斂的特質。這些香氣低調而持久，像你的個性一樣，雖然不喧鬧，卻能留下深刻且令人難忘的印記。"
  }
};

// ---------- State ----------
const total = questions.length;
let sessionQuestions = [];  // 本次測驗的題目，選項順序在開始時打亂並固定，讓「上一題」看到的順序不會跳動
let userAnswers = [];       // { type, text } | null
let current = 0;
let preloadedImages = {};

// ---------- Elements ----------
const intro = document.getElementById('intro');
const startBtn = document.getElementById('startBtn');
const quiz = document.getElementById('quiz');
const questionTitle = document.getElementById('questionTitle');
const answersDiv = document.getElementById('answers');
const questionImage = document.getElementById('questionImage');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const resultSection = document.getElementById('result');
const resultSubtitle = document.querySelector('.result-subtitle');
const resultTitle = document.getElementById('resultTitle');
const resultImageContainer = document.querySelector('.result-image-container');
const resultImage = document.getElementById('resultImage');
const resultDesc = document.getElementById('resultDesc');
const resultHashtags = document.getElementById('resultHashtags');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');
const resultElements = [resultSubtitle, resultTitle, resultImageContainer, resultHashtags, resultDesc, restartBtn, shareBtn];

const logo = document.querySelector('.site-header .logo');
const introTitleLeft = document.querySelector('.intro-title-left');
const introTitleRight = document.querySelector('.intro-title-right');
const introTextWrapper = document.querySelector('.intro-text-wrapper');

// ---------- Utilities ----------
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function typeText(element, text, speed = 50, callback) {
  element.innerHTML = '';
  element.classList.add('typewriter-effect');
  let i = 0;
  function typing() {
    if (i < text.length) {
      if (text.charAt(i) === '<') {
        let tagEnd = text.indexOf('>', i);
        element.innerHTML += text.substring(i, tagEnd + 1);
        i = tagEnd + 1;
      } else {
        element.innerHTML += text.charAt(i);
        i++;
      }
      setTimeout(typing, speed);
    } else {
      element.classList.remove('typewriter-effect');
      if (callback) callback();
    }
  }
  typing();
}

/** 預載所有圖片（題目圖 + 結果圖），避免切換時的讀取延遲/閃爍 */
function preloadImages() {
  const allSrcs = [
    ...questions.map(q => q.image),
    ...Object.values(results).map(r => r.image)
  ];
  const promises = allSrcs.map(src => new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => { preloadedImages[src] = img; resolve(); };
    img.onerror = resolve; // 單張圖失敗不擋住整個測驗
  }));
  return Promise.all(promises);
}

// ---------- Intro animation ----------
async function animateIntroPage() {
  logo.style.animation = 'fadeInUp 2s forwards';
  startBtn.disabled = true;
  await preloadImages();

  setTimeout(() => {
    introTitleLeft.style.opacity = '1';
    typeText(introTitleLeft, '測一測', 100, () => {
      introTitleRight.style.opacity = '1';
      typeText(introTitleRight, '屬於你的風格香', 100, () => {
        introTextWrapper.style.animation = 'fadeIn 2s forwards';
        setTimeout(() => {
          startBtn.style.animation = 'fadeInUp 2s forwards';
          startBtn.disabled = false;
        }, 1500);
      });
    });
  }, 1500);
}
document.addEventListener('DOMContentLoaded', animateIntroPage);

// ---------- Quiz flow ----------
startBtn.addEventListener('click', () => {
  intro.classList.add('hidden');
  quiz.classList.remove('hidden');
  sessionQuestions = questions.map(q => ({ ...q, answers: shuffle(q.answers) }));
  userAnswers = new Array(total).fill(null);
  current = 0;
  renderQuestion();
});

function renderQuestion() {
  const q = sessionQuestions[current];
  questionImage.src = preloadedImages[q.image] ? preloadedImages[q.image].src : q.image;
  progressText.textContent = `第 ${current + 1} 題 / ${total} 題`;
  progressFill.style.width = `${(current / total) * 100}%`;

  answersDiv.innerHTML = '';
  const existing = userAnswers[current];

  q.answers.forEach((a, idx) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    // 選項順序已隨機打亂，去除寫死的 A/B/C/D 前綴，避免文字與實際排列位置對不上
    btn.textContent = a.text.replace(/^[A-D]\.\s*/, '');
    btn.dataset.type = a.type;
    if (existing && existing.text === a.text) btn.classList.add('selected');
    btn.addEventListener('click', () => selectAnswer(a, idx));
    answersDiv.appendChild(btn);
  });

  backBtn.style.visibility = current > 0 ? 'visible' : 'hidden';
  nextBtn.style.display = existing ? 'inline-block' : 'none';
  nextBtn.textContent = current === total - 1 ? '看看我的風格香' : '下一題';

  typeText(questionTitle, q.question);
}

function selectAnswer(answer, idx) {
  userAnswers[current] = { type: answer.type, text: answer.text };
  answersDiv.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  answersDiv.children[idx].classList.add('selected');
  nextBtn.style.display = 'inline-block';
  nextBtn.textContent = current === total - 1 ? '看看我的風格香' : '下一題';
}

backBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if (!userAnswers[current]) return;
  if (current < total - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
});

// ---------- Result ----------
function computeScores() {
  const scores = { woody: 0, citrus: 0, floral: 0, musk: 0 };
  userAnswers.forEach(a => { if (a) scores[a.type]++; });
  return scores;
}

function animateResultPage(resultData) {
  resultSubtitle.textContent = "你的風格香是";
  resultTitle.textContent = resultData.title;
  resultImage.src = preloadedImages[resultData.image] ? preloadedImages[resultData.image].src : resultData.image;
  resultHashtags.innerHTML = resultData.hashtags.map(tag => `<div class="result-hashtag">${tag}</div>`).join('');

  const combinedText = `<p>${resultData.description}</p><div class="result-separator"></div><p>${resultData.analysis}</p>`;
  resultDesc.innerHTML = combinedText;
  resultDesc.classList.remove('typewriter-effect');

  let delay = 0;
  [resultSubtitle, resultTitle, resultImageContainer, resultHashtags, resultDesc].forEach(element => {
    setTimeout(() => { element.style.animation = 'fadeInUp 1s forwards'; }, delay);
    delay += 200;
  });

  setTimeout(() => {
    restartBtn.style.animation = 'fadeInUp 1s forwards';
    shareBtn.style.animation = 'fadeInUp 1s forwards';
  }, delay + 500);
}

function showResult() {
  quiz.classList.add('hidden');
  resultSection.classList.remove('hidden');

  const scores = computeScores();
  // 依分數排序，平手時不再固定偏向木質，而是用使用者實際的作答順序決定
  const ranked = Object.keys(scores).sort((a, b) => {
    if (scores[b] !== scores[a]) return scores[b] - scores[a];
    const lastIndexA = userAnswers.map(u => u && u.type).lastIndexOf(a);
    const lastIndexB = userAnswers.map(u => u && u.type).lastIndexOf(b);
    return lastIndexB - lastIndexA;
  });
  const highest = ranked[0];
  const r = results[highest];
  animateResultPage(r);
}

restartBtn.addEventListener('click', () => {
  resultSection.classList.add('hidden');
  intro.classList.remove('hidden');

  resultElements.forEach(element => {
    element.style.animation = 'none';
    element.style.opacity = '0';
  });

  logo.style.animation = 'none';
  introTitleLeft.textContent = '';
  introTitleRight.textContent = '';
  introTextWrapper.style.animation = 'none';
  startBtn.style.animation = 'none';

  logo.style.animation = '';
  introTitleLeft.style.opacity = '0';
  introTitleRight.style.opacity = '0';
  introTextWrapper.style.opacity = '0';
  startBtn.style.opacity = '0';

  animateIntroPage();
});

shareBtn.addEventListener('click', () => {
  const scores = computeScores();
  const highest = Object.keys(scores).sort((a, b) => scores[b] - scores[a])[0];
  const resultText = results[highest].title;
  const shareText = `我的香氣人格是【${resultText}】！快來測測看你是哪一種吧！\n${window.location.href}`;

  if (navigator.share) {
    navigator.share({ title: '香氣人格測驗', text: shareText, url: window.location.href })
      .catch((error) => console.log('分享失敗', error));
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('結果已複製到剪貼簿，可以去貼給朋友囉！');
    }).catch((err) => console.error('無法複製到剪貼簿', err));
  }
});
