// script.js - 香氣人格測驗 (調整版本)
const questions = [
  // ... (問題內容不變)
  {
    question: "Q1. 清晨起床的你，最需要什麼來開啟新的一天？",
    image: "images/q1.jpg",
    answers: [
      { text: "A.一杯剛沖好的黑咖啡，喚醒思緒", type: "woody" },
      { text: "B.一場晨間瑜伽或暖身運動，激發能量", type: "citrus" },
      { text: "C.溫熱的水澡與音樂，緩緩開展", type: "floral" },
      { text: "D.打開窗簾，陽光與植物香迎接你", type: "musk" }
    ]
  },
  {
    question: "Q2. 在不經意的空氣中，你最難忘的是哪種氣味記憶？",
    image: "images/q2.jpg",
    answers: [
      { text: "A.熱帶果香與汗水交織的旅行午後", type: "citrus" },
      { text: "B.雨後濕潤的森林氣息", type: "woody" },
      { text: "C.恰到好處的白玫瑰香水味", type: "floral" },
      { text: "D.甜點店飄出的奶油與焦糖香", type: "musk" }
    ]
  },
  {
    question: "Q3. 朋友們最常形容你的特質是？",
    image: "images/q3.jpg",
    answers: [
      { text: "A.安定可靠，像棵老樹般給人依靠", type: "woody" },
      { text: "B.活潑有趣，總是能炒熱氣氛", type: "citrus" },
      { text: "C.靜靜聆聽，像月亮陪伴在側", type: "floral" },
      { text: "D.細膩感性，總能說中別人心事", type: "musk" }
    ]
  },
  {
    question: "Q4. 你最想要自己的氣味是⋯⋯",
    image: "images/q4.jpg",
    answers: [
      { text: "A.一種讓人安心、沉靜的香味", type: "woody" },
      { text: "B.像走進綠色植物園的清新氣息", type: "citrus" },
      { text: "C.令人一靠近就覺得療癒的甜味", type: "floral" },
      { text: "D.淡淡又若有似無的高級氣場", type: "musk" }
    ]
  },
  {
    question: "Q5. 如果週末只有一天獨處時光，你會選擇？",
    image: "images/q5.jpg",
    answers: [
      { text: "A.去書店泡一整個下午", type: "woody" },
      { text: "B.一個人衝去山裡或海邊放風", type: "citrus" },
      { text: "C.躲在家點香氛蠟燭耍廢", type: "floral" },
      { text: "D.和熟悉朋友小酌聚聚聊心事", type: "musk" }
    ]
  },
  {
    question: "Q6. 如果你是一支香氣，你希望別人怎麼記住你？",
    image: "images/q6.jpg",
    answers: [
      { text: "A.神秘、有層次，會越聞越著迷", type: "woody" },
      { text: "B.溫柔、舒服，像一段美好記憶", type: "floral" },
      { text: "C.明亮、開朗，讓人瞬間提起精神", type: "citrus" },
      { text: "D.乾淨、俐落，簡單卻令人難忘", type: "musk" }
    ]
  }
];

const results = {
  // ... (結果內容將於下次回覆中提供)
};

// State
let current = 0;
let scores = { woody: 0, citrus: 0, floral: 0, musk: 0 };
const total = questions.length;
let currentSelection = null;

// Elements
const intro = document.getElementById('intro');
const startBtn = document.getElementById('startBtn');
const quiz = document.getElementById('quiz');
const questionTitle = document.getElementById('questionTitle');
const answersDiv = document.getElementById('answers');
const questionImage = document.getElementById('questionImage');
const progressText = document.getElementById('progressText');
const nextBtn = document.getElementById('nextBtn');
const resultSection = document.getElementById('result');
const resultTitle = document.getElementById('resultTitle');
const resultImage = document.getElementById('resultImage');
const resultDesc = document.getElementById('resultDesc');
const resultHashtags = document.getElementById('resultHashtags');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');

const logo = document.querySelector('.site-header .logo');
const introTitleContainer = document.querySelector('.intro-title-container');
const introTitleLeft = document.querySelector('.intro-title-left');
const introTitleRight = document.querySelector('.intro-title-right');
const introTextWrapper = document.querySelector('.intro-text-wrapper');

function typeText(element, text, speed = 50, callback) {
  element.textContent = '';
  // 新增：在打字效果開始時就設定字體樣式
  element.style.fontFamily = "Noto Serif TC, serif";
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      // 在打字結束後移除字體樣式，讓 CSS 規則重新接管
      element.style.fontFamily = ''; 
      if (callback) {
        callback();
      }
    }
  }
  typing();
}

function animateIntroPage() {
  logo.style.animation = 'fadeInUp 1s forwards';

  logo.addEventListener('animationend', () => {
    introTitleContainer.style.opacity = 1;
    typeText(introTitleLeft, '測一測', 100, () => {
      typeText(introTitleRight, '屬於你的風格香', 100, () => {

        introTextWrapper.style.animation = 'fadeIn 1s forwards';
        startBtn.style.animation = 'fadeIn 1s forwards';
      });
    });
  }, { once: true });
}

document.addEventListener('DOMContentLoaded', animateIntroPage);

startBtn.addEventListener('click', () => {
  intro.classList.add('hidden');
  quiz.classList.remove('hidden');
  current = 0;
  scores = { woody: 0, citrus: 0, floral: 0, musk: 0 };
  renderQuestion();
});

function renderQuestion() {
  const q = questions[current];
  questionImage.src = q.image;
  progressText.textContent = `第 ${current + 1} 題 / ${total} 題`;
  answersDiv.innerHTML = '';
  currentSelection = null;
  q.answers.forEach((a) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = a.text;
    btn.style.color = "#3b2f2f";
    btn.dataset.type = a.type;
    btn.addEventListener('click', () => selectAnswer(btn));
    answersDiv.appendChild(btn);
  });
  nextBtn.style.display = 'none';
  typeText(questionTitle, q.question);
}

function selectAnswer(selectedBtn) {
  const selectedType = selectedBtn.dataset.type;

  answersDiv.querySelectorAll('button').forEach(b => {
    b.classList.remove('selected');
  });

  selectedBtn.classList.add('selected');
  currentSelection = selectedType;

  if (currentSelection && current < total - 1) {
    nextBtn.style.display = 'inline-block';
  } else if (currentSelection && current === total - 1) {
    nextBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'none';
  }
}

nextBtn.addEventListener('click', () => {
  if (currentSelection) {
    scores[currentSelection]++;
    current++;
    if (current < total) {
      renderQuestion();
    } else {
      showResult();
    }
  }
});


function showResult() {
  quiz.classList.add('hidden');
  resultSection.classList.remove('hidden');
  let highest = 'woody';
  let max = -1;
  for (const k in scores) {
    if (scores[k] > max) { max = scores[k]; highest = k; }
  }
  const r = results[highest];

  // 更新結果頁面
  resultTitle.textContent = r.title;
  resultImage.src = r.image;

  // 顯示標籤
  resultHashtags.innerHTML = r.hashtags.map(tag => `<div class="hashtag">${tag}</div>`).join('');

  // 結合描述和分析
  resultDesc.innerHTML = `<p>${r.description}</p><p>${r.analysis}</p>`;
}

restartBtn.addEventListener('click', () => {
  resultSection.classList.add('hidden');
  intro.classList.remove('hidden');
});

shareBtn.addEventListener('click', () => {
  const highest = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  const resultText = results[highest].title;
  const shareText = `我的香氣人格是【${resultText}】！快來測測看你是哪一種吧！\n${window.location.href}`;

  if (navigator.share) {
    navigator.share({
      title: '香氣人格測驗',
      text: shareText,
      url: window.location.href
    }).catch((error) => console.log('分享失敗', error));
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('結果已複製到剪貼簿，可以去貼給朋友囉！');
    }).catch((err) => {
      console.error('無法複製到剪貼簿', err);
    });
  }
});
