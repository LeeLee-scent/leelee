// script.js - 香氣人格測驗 (Single Page, 6 questions + 打字效果 + 深色字體)
const questions = [
  {
    question: "Q1. 清晨起床的你，最需要什麼來開啟新的一天？",
    image: "images/q1.jpg",
    answers: [
      {text: "A.一杯剛沖好的黑咖啡，喚醒思緒", type: "woody"},
      {text: "B.一場晨間瑜伽或暖身運動，激發能量", type: "citrus"},
      {text: "C.溫熱的水澡與音樂，緩緩開展", type: "floral"},
      {text: "D.打開窗簾，陽光與植物香迎接你", type: "musk"}
    ]
  },
  {
    question: "Q2. 在不經意的空氣中，你最難忘的是哪種氣味記憶？",
    image: "images/q2.jpg",
    answers: [
      {text: "A.熱帶果香與汗水交織的旅行午後", type: "citrus"},
      {text: "B.雨後濕潤的森林氣息", type: "woody"},
      {text: "C.恰到好處的白玫瑰香水味", type: "floral"},
      {text: "D.甜點店飄出的奶油與焦糖香", type: "musk"}
    ]
  },
  {
    question: "Q3. 朋友們最常形容你的特質是？",
    image: "images/q3.jpg",
    answers: [
      {text: "A.安定可靠，像棵老樹般給人依靠", type: "woody"},
      {text: "B.活潑有趣，總是能炒熱氣氛", type: "citrus"},
      {text: "C.靜靜聆聽，像月亮陪伴在側", type: "floral"},
      {text: "D.細膩感性，總能說中別人心事", type: "musk"}
    ]
  },
  {
    question: "Q4. 你最想要自己的氣味是⋯⋯",
    image: "images/q4.jpg",
    answers: [
      {text: "A.一種讓人安心、沉靜的香味", type: "woody"},
      {text: "B.像走進綠色植物園的清新氣息", type: "citrus"},
      {text: "C.令人一靠近就覺得療癒的甜味", type: "floral"},
      {text: "D.淡淡又若有似無的高級氣場", type: "musk"}
    ]
  },
  {
    question: "Q5. 如果週末只有一天獨處時光，你會選擇？",
    image: "images/q5.jpg",
    answers: [
      {text: "A.去書店泡一整個下午", type: "woody"},
      {text: "B.一個人衝去山裡或海邊放風", type: "citrus"},
      {text: "C.躲在家點香氛蠟燭耍廢", type: "floral"},
      {text: "D.和熟悉朋友小酌聚聚聊心事", type: "musk"}
    ]
  },
  {
    question: "Q6. 如果你是一支香氣，你希望別人怎麼記住你？",
    image: "images/q6.jpg",
    answers: [
      {text: "A.神秘、有層次，會越聞越著迷", type: "woody"},
      {text: "B.溫柔、舒服，像一段美好記憶", type: "floral"},
      {text: "C.明亮、開朗，讓人瞬間提起精神", type: "citrus"},
      {text: "D.乾淨、俐落，簡單卻令人難忘", type: "musk"}
    ]
  }
];

const results = {
  woody: {
    title: "木質沉穩型",
    image: "images/result_woody.jpg",
    hashtags: ["#安定可靠", "#沉穩內斂", "#腳踏實地"],
    description: "你是個沈穩內斂的思考者，內心有著豐富而安靜的宇宙。你像森林中的大樹，給人一種可靠、值得信賴的感覺，不隨波逐流，腳踏實地地走自己的路。",
    analysis: "你在乎事物的深度與本質，喜歡沉浸在書本、音樂或靜謐的環境中。你的選擇顯示你追求的是一種內在的平和與安定感。木質調香氣，如**檀香**、**雪松**、**岩蘭草**，能完美襯托你踏實可靠的性格，讓你感到被大地所環抱的安心與力量。"
  },
  citrus: {
    title: "柑橘清新型",
    image: "images/result_citrus.jpg",
    hashtags: ["#活潑開朗", "#樂觀正向", "#自由無拘"],
    description: "你充滿活力與朝氣，是朋友眼中的陽光發電機。你總能用樂觀的態度面對挑戰，樂於探索新事物，為周圍的人帶來新鮮感與正能量。",
    analysis: "你的選擇傾向輕盈、明亮的選項，反映出你熱愛自由、無拘無束的靈魂。你享受戶外活動，喜歡在動態中找尋自我。柑橘調，例如**葡萄柚**、**檸檬**、**佛手柑**，能激發你的熱情與創造力，讓你的每一天都充滿清新活力的氣息。"
  },
  floral: {
    title: "花香柔和型",
    image: "images/result_floral.jpg",
    hashtags: ["#溫柔細膩", "#療癒人心", "#浪漫優雅"],
    description: "你擁有溫柔細膩的特質，能敏銳地捕捉他人的情感，是個極具同理心的傾聽者。你的氣質優雅而親切，像盛開的花朵般充滿療癒人心的魅力。",
    analysis: "你傾向浪漫與情感連結的選擇，在人際關係中扮演著溫暖、滋養的角色。你的感性與內在力量，使你總能成為別人尋求慰藉的對象。花香調，如**玫瑰**、**茉莉**、**橙花**，能凸顯你的柔美與優雅，同時增強你的個人魅力。"
  },
  musk: {
    title: "麝香神秘型",
    image: "images/result_musk.jpg",
    hashtags: ["#高雅內斂", "#神秘直覺", "#簡單俐落"],
    description: "你是一位安靜卻充滿深度的人，擁有內斂氣質與感性直覺。你的存在像月光般神秘而引人遐想，不張揚，卻有種讓人忍不住想靠近的吸引力。",
    analysis: "你偏好內省、獨處的選項，擁有強烈的個人風格與敏銳的直覺。你喜歡觀察與感受，不輕易表達但內心世界豐富。麝香、**琥珀**、**廣藿香**等調性，能完美烘托你乾淨俐落、高雅內斂的特質，讓人對你的神秘感留下深刻印象。"
  }
};

// State
let current = 0;
let scores = { woody:0, citrus:0, floral:0, musk:0 };
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

function typeText(element, text, speed = 50, callback){
  element.textContent = '';
  let i = 0;
  function typing(){
    if(i < text.length){
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if(callback){
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
        
        introTextWrapper.style.animation = 'fadeIn 1s forwards';
        startBtn.style.animation = 'fadeIn 1s forwards';
      });
    });
  }, { once: true });
}

document.addEventListener('DOMContentLoaded', animateIntroPage);

startBtn.addEventListener('click', ()=>{
  intro.classList.add('hidden');
  quiz.classList.remove('hidden');
  current = 0;
  scores = { woody:0, citrus:0, floral:0, musk:0 };
  renderQuestion();
});

function renderQuestion(){
  const q = questions[current];
  questionImage.src = q.image;
  progressText.textContent = `第 ${current+1} 題 / ${total} 題`;
  answersDiv.innerHTML = '';
  currentSelection = null;
  q.answers.forEach((a) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = a.text;
    btn.style.color = "#3b2f2f";
    btn.dataset.type = a.type;
    btn.addEventListener('click', ()=> selectAnswer(btn));
    answersDiv.appendChild(btn);
  });
  nextBtn.style.display = 'none';
  typeText(questionTitle, q.question);
}

function selectAnswer(selectedBtn){
  const selectedType = selectedBtn.dataset.type;

  answersDiv.querySelectorAll('button').forEach(b => {
    b.classList.remove('selected');
  });

  selectedBtn.classList.add('selected');
  currentSelection = selectedType;

  if(currentSelection && current < total-1){
    nextBtn.style.display = 'inline-block';
  } else if (currentSelection && current === total-1) {
    nextBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'none';
  }
}

nextBtn.addEventListener('click', ()=>{
  if (currentSelection) {
    scores[currentSelection]++;
    current++;
    if(current < total) {
      renderQuestion();
    } else {
      showResult();
    }
  }
});


function showResult(){
  quiz.classList.add('hidden');
  resultSection.classList.remove('hidden');
  let highest = 'woody';
  let max = -1;
  for(const k in scores){
    if(scores[k] > max){ max = scores[k]; highest = k; }
  }
  const r = results[highest];
  
  // 更新結果頁面
  resultTitle.textContent = r.title;
  resultImage.src = r.image;
  
  // 顯示標籤
  resultHashtags.innerHTML = r.hashtags.map(tag => `<div>${tag}</div>`).join('');
  
  // 結合描述和分析
  resultDesc.innerHTML = `<p>${r.description}</p><p>${r.analysis}</p>`;
}

restartBtn.addEventListener('click', ()=>{
  resultSection.classList.add('hidden');
  intro.classList.remove('hidden');
});

shareBtn.addEventListener('click', ()=>{
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
