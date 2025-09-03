// script.js - 香氣人格測驗 (最終修復版本)
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
  woody: {
    title: "木質沉穩型",
    image: "images/result_woody.jpg",
    hashtags: ["#安定可靠", "#沉靜內斂", "#溫潤理性"],
    description: "你是個思緒清晰、腳踏實地的務實派，內心世界像一片遼闊的森林，寧靜而深邃。你擁有強大的內在力量，不隨波逐流，總能保持冷靜，用理性的方式分析問題。你的存在本身就是一種安定，像紮根的大樹般給人依靠。朋友們或許覺得你話不多，但你的每一句建議都充滿重量與溫度。",
    analysis: "你的選擇顯示你追求的是一種內在的平和與安定感。你重視事物的深度與本質，喜歡沉浸在書本、音樂或靜謐的環境中，透過獨處來為自己充電。木質調香氣，如**雪松**、**檀香**、**岩蘭草**，能完美襯托你穩健的個性。這些香氣從大地而來，散發著沉著而溫暖的氣息，讓你感到被環抱的安心與力量，同時也向世界傳達你那深不可測的迷人魅力。"
  },
  citrus: {
    title: "柑橘清新型",
    image: "images/result_citrus.jpg",
    hashtags: ["#熱情開朗", "#樂觀正向", "#自由灑脫"],
    description: "你充滿熱情與活力，天生是個樂觀主義者，就像初晨的陽光，明亮而溫暖。你不喜歡被束縛，樂於探索新事物和未知領域，對生活中的每一刻都抱持著好奇心與冒險精神。在社交場合，你是自然而然的氣氛製造者，總是能用你的正能量感染身邊的人。你享受在動態中找尋自我，相信每一次的嘗試都是一場值得的冒險。",
    analysis: "你的選擇反映出你外向、喜愛社交的靈魂。你傾向於輕盈、明亮的選項，因為它們能激發你的熱情與創造力。柑橘調，例如**葡萄柚**、**檸檬**、**佛手柑**，能完美地與你的個性契合。它們清新、明快的氣息，就像是為你量身定做的「快樂靈藥」，能讓你隨時保持清醒，精神煥發，讓你的每一天都充滿積極活力的氣息。"
  },
  floral: {
    title: "花香柔和型",
    image: "images/result_floral.jpg",
    hashtags: ["#感性細膩", "#溫暖療癒", "#優雅浪漫"],
    description: "你擁有一顆溫暖、細膩的心，能夠敏銳地感知他人的情緒與需求。你的氣質優雅而親切，充滿同理心，在人際關係中扮演著溫和的協調者和療癒者。你重視情感的連結，善於營造舒適與和諧的氛圍。你的感性與內在力量，使你總能成為別人尋求慰藉的對象，總是以最溫柔的方式給予支持與陪伴，就像春日裡一朵悄然綻放的白玫瑰。",
    analysis: "你的選擇傾向於感性、浪漫且溫馨的體驗。你相信美好的事物能滋養心靈，並享受生活中的儀式感。花香調，如**玫瑰**、**茉莉**、**橙花**，能凸顯你柔美且充滿內在力量的特質。這些香氣不僅增添你的個人魅力，更能傳達出你溫柔而堅定的性格，讓人們因為你的存在而感到美好。"
  },
  musk: {
    title: "麝香神秘型",
    image: "images/result_musk.jpg",
    hashtags: ["#高雅內斂", "#神秘直覺", "#獨立思考"],
    description: "你是一位安靜、內斂卻充滿深度的人。你的氣場獨特而高雅，不需言語便能傳達出強烈的個人風格。你擁有敏銳的直覺和獨立的思考能力，不隨波逐流，總是保持著一份神秘感，讓人們忍不住想更深入地了解你。你重視個人空間，從獨處中汲取靈感與力量，不輕易表達但內心世界豐富。",
    analysis: "你的選擇反映出你獨特的審美觀和對純粹的追求。你重視個人空間，從獨處中汲取靈感與力量。麝香，結合**琥珀**、**廣藿香**等後調，能完美烘托你乾淨俐落、高雅內斂的特質。這些香氣低調而持久，像你的個性一樣，雖然不喧鬧，卻能留下深刻且令人難忘的印記。它是一種專屬於你的「氣場」，無須張揚，卻足以震撼人心。"
  }
};
// 首頁文字內容
const introText = "好聞的香氛是感官的享受\n\n它以氣味、情感與記憶調和我們的情緒與心境\n\n增添個人的風格，提振與轉換心情\n\n有的人喜歡隨著每天不同的心情變換香氛\n\n有的人則會鍾情某款香調鮮少變換\n\n想找到專屬你此時的風格香";

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
// 修正錯誤：將目標元素指向正確的 class
const introTextElement = document.querySelector('.lead');

const logo = document.querySelector('.site-header .logo');
const introTitleContainer = document.querySelector('.intro-title-container');
const introTitleLeft = document.querySelector('.intro-title-left');
const introTitleRight = document.querySelector('.intro-title-right');
const introTextWrapper = document.querySelector('.intro-text-wrapper');

function typeText(element, text, speed = 50, callback) {
  element.textContent = '';
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
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
        // 在這裡將文字注入到正確的元素中
        introTextElement.textContent = introText;
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
  progressText.textContent = `第 ${current + 1} 題 / ${total} 題`;
  answersDiv.innerHTML = '';
  currentSelection = null;

  questionImage.src = q.image;
  questionImage.style.opacity = 1;
  
  typeText(questionTitle, q.question);
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

  resultImage.src = r.image;
  resultImage.style.opacity = 1;
  
  resultTitle.textContent = r.title;
  
  resultHashtags.innerHTML = r.hashtags.map(tag => `<div>${tag}</div>`).join('');
  
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
