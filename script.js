// script.js - 香氣人格測驗 (Single Page, 6 questions + 打字效果 + 深色字體)
const questions = [
  {
    question: "Q1. 清晨起床的你，最需要什麼來開啟新的一天？",
    image: "images/q1.png",
    answers: [
      {text: "A. 一杯剛沖好的黑咖啡，喚醒思緒", type: "woody"},
      {text: "B. 一場晨間瑜伽或暖身運動，激發能量", type: "citrus"},
      {text: "C. 溫熱的水澡與音樂，緩緩開展", type: "floral"},
      {text: "D. 打開窗簾，陽光與植物香迎接你", type: "musk"}
    ]
  },
  {
    question: "Q2. 在不經意的空氣中，你最難忘的是哪種氣味記憶？",
    image: "images/q2.png",
    answers: [
      {text: "A. 熱帶果香與汗水交織的旅行午後", type: "citrus"},
      {text: "B. 雨後濕潤的森林氣息", type: "woody"},
      {text: "C. 恰到好處的白玫瑰香水味", type: "floral"},
      {text: "D. 甜點店飄出的奶油與焦糖香", type: "musk"}
    ]
  },
  {
    question: "Q3. 朋友們最常形容你的特質是？",
    image: "images/q3.jpg",
    answers: [
      {text: "A. 安定可靠，像棵老樹般給人依靠", type: "woody"},
      {text: "B. 活潑有趣，總是能炒熱氣氛", type: "citrus"},
      {text: "C. 靜靜聆聽，像月亮陪伴在側", type: "floral"},
      {text: "D. 細膩感性，總能說中別人心事", type: "musk"}
    ]
  },
  {
    question: "Q4. 你最想要自己的氣味是⋯⋯",
    image: "images/q4.jpg",
    answers: [
      {text: "A. 一種讓人安心、沉靜的香味", type: "woody"},
      {text: "B. 像走進綠色植物園的清新氣息", type: "citrus"},
      {text: "C. 令人一靠近就覺得療癒的甜味", type: "floral"},
      {text: "D. 淡淡又若有似無的高級氣場", type: "musk"}
    ]
  },
  {
    question: "Q5. 如果週末只有一天獨處時光，你會選擇？",
    image: "images/q5.jpg",
    answers: [
      {text: "A. 去書店泡一整個下午", type: "woody"},
      {text: "B. 一個人衝去山裡或海邊放風", type: "citrus"},
      {text: "C. 躲在家點香氛蠟燭耍廢", type: "floral"},
      {text: "D. 和熟悉朋友小酌聚聚聊心事", type: "musk"}
    ]
  },
  {
    question: "Q6. 如果你是一支香氣，你希望別人怎麼記住你？",
    image: "images/q6.jpg",
    answers: [
      {text: "A. 神秘、有層次，會越聞越著迷", type: "woody"},
      {text: "B. 溫柔、舒服，像一段美好記憶", type: "floral"},
      {text: "C. 明亮、開朗，讓人瞬間提起精神", type: "citrus"},
      {text: "D. 乾淨、俐落，簡單卻令人難忘", type: "musk"}
    ]
  }
];

const results = {
  woody: {
    title: "木質沉穩型",
    image: "images/result_woody.jpg",
    description: "你是個沈穩內斂的思考者，內心有著豐富而安靜的宇宙。你像森林中的大樹，給人一種可靠、值得信賴的感覺，不隨波逐流，腳踏實地地走自己的路。",
    analysis: "你在乎事物的深度與本質，喜歡沉浸在書本、音樂或靜謐的環境中。你的選擇顯示你追求的是一種內在的平和與安定感。木質調香氣，如**檀香**、**雪松**、**岩蘭草**，能完美襯托你踏實可靠的性格，讓你感到被大地所環抱的安心與力量。"
  },
  citrus: {
    title: "柑橘清新型",
    image: "images/result_citrus.jpg",
    description: "你充滿活力與朝氣，是朋友眼中的陽光發電機。你總能用樂觀的態度面對挑戰，樂於探索新事物，為周圍的人帶來新鮮感與正能量。",
    analysis: "你的選擇傾向輕盈、明亮的選項，反映出你熱愛自由、無拘無束的靈魂。你享受戶外活動，喜歡在動態中找尋自我。柑橘調，例如**葡萄柚**、**檸檬**、**佛手柑**，能激發你的熱情與創造力，讓你的每一天都充滿清新活力的氣息。"
  },
  floral: {
    title: "花香柔和型",
    image: "images/result_floral.jpg",
    description: "你擁有溫柔細膩的特質，能敏銳地捕捉他人的情感，是個極具同理心的傾聽者。你的氣質優雅而親切，像盛開的花朵般充滿療癒人心的魅力。",
    analysis: "你傾向浪漫與情感連結的選擇，在人際關係中扮演著溫暖、滋養的角色。你的感性與內在力量，使你總能成為別人尋求慰藉的對象。花香調，如**玫瑰**、**茉莉**、**橙花**，能凸顯你的柔美與優雅，同時增強你的個人魅力。"
  },
  musk: {
    title: "麝香神秘型",
    image: "images/result_musk.jpg",
    description: "你是一位安靜卻充滿深度的人，擁有內斂氣質與感性直覺。你的存在像月光般神秘而引人遐想，不張揚，卻有種讓人忍不住想靠近的吸引力。",
    analysis: "你偏好內省、獨處的選項，擁有強烈的個人風格與敏銳的直覺。你喜歡觀察與感受，不輕易表達但內心世界豐富。麝香、**琥珀**、**廣藿香**等調性，能完美烘托你乾淨俐落、高雅內斂的特質，讓人對你的神秘感留下深刻印象。"
  }
};

// State
let current = 0;
let scores = { woody:0, citrus:0, floral:0, musk:0 };
const total = questions.length;

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
const resultAnalysis = document.getElementById('resultAnalysis');
const restartBtn = document.getElementById('restartBtn');

// 打字機效果
function typeText(element, text, speed = 30, callback){
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
  q.answers.forEach((a) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = a.text;
    btn.style.color = "#3b2f2f"; // 深色字
    btn.addEventListener('click', ()=> selectAnswer(a.type));
    answersDiv.appendChild(btn);
  });
  nextBtn.style.display = 'none';
  
  // 用打字效果顯示題目
  typeText(questionTitle, q.question);
}

function selectAnswer(type){
  scores[type]++;
  answersDiv.querySelectorAll('button').forEach(b=>b.disabled=true);
  if(current < total-1){
    nextBtn.style.display = 'inline-block';
  } else {
    showResult();
  }
  nextBtn.onclick = ()=>{
    current++;
    if(current < total) renderQuestion();
    nextBtn.style.display = 'none';
  };
}

function showResult(){
  quiz.classList.add('hidden');
  resultSection.classList.remove('hidden');
  let highest = 'woody';
  let max = -1;
  for(const k in scores){
    if(scores[k] > max){ max = scores[k]; highest = k; }
  }
  const r = results[highest];
  resultTitle.textContent = r.title;
  resultImage.src = r.image;
  resultDesc.textContent = r.description;
  resultAnalysis.innerHTML = `屬於你的風格是 <strong>${r.title}</strong>，<br>${r.analysis}`;
}

restartBtn.addEventListener('click', ()=>{
  resultSection.classList.add('hidden');
  intro.classList.remove('hidden');
});

