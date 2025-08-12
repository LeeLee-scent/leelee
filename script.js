// script.js - 香氣人格測驗 (Single Page, 6 questions + 打字效果 + 深色字體)
const questions = [
  {
    question: "Q1. 清晨起床的你，最需要什麼來開啟新的一天？",
    image: "images/q1.jpg",
    answers: [
      {text: "一杯剛沖好的黑咖啡，喚醒思緒", type: "woody"},
      {text: "一場晨間瑜伽或暖身運動，激發能量", type: "citrus"},
      {text: "溫熱的水澡與音樂，緩緩開展", type: "floral"},
      {text: "打開窗簾，陽光與植物香迎接你", type: "musk"}
    ]
  },
  {
    question: "Q2. 在不經意的空氣中，你最難忘的是哪種氣味記憶？",
    image: "images/q2.jpg",
    answers: [
      {text: "熱帶果香與汗水交織的旅行午後", type: "citrus"},
      {text: "雨後濕潤的森林氣息", type: "woody"},
      {text: "恰到好處的白玫瑰香水味", type: "floral"},
      {text: "甜點店飄出的奶油與焦糖香", type: "musk"}
    ]
  },
  {
    question: "Q3. 朋友們最常形容你的特質是？",
    image: "images/q3.jpg",
    answers: [
      {text: "安定可靠，像棵老樹般給人依靠", type: "woody"},
      {text: "活潑有趣，總是能炒熱氣氛", type: "citrus"},
      {text: "靜靜聆聽，像月亮陪伴在側", type: "floral"},
      {text: "細膩感性，總能說中別人心事", type: "musk"}
    ]
  },
  {
    question: "Q4. 你最想要自己的氣味是⋯⋯",
    image: "images/q4.jpg",
    answers: [
      {text: "一種讓人安心、沉靜的香味", type: "woody"},
      {text: "像走進綠色植物園的清新氣息", type: "citrus"},
      {text: "令人一靠近就覺得療癒的甜味", type: "floral"},
      {text: "淡淡又若有似無的高級氣場", type: "musk"}
    ]
  },
  {
    question: "Q5. 如果週末只有一天獨處時光，你會選擇？",
    image: "images/q5.jpg",
    answers: [
      {text: "去書店泡一整個下午", type: "woody"},
      {text: "一個人衝去山裡或海邊放風", type: "citrus"},
      {text: "躲在家點香氛蠟燭耍廢", type: "floral"},
      {text: "和熟悉朋友小酌聚聚聊心事", type: "musk"}
    ]
  },
  {
    question: "Q6. 如果你是一支香氣，你希望別人怎麼記住你？",
    image: "images/q6.jpg",
    answers: [
      {text: "神秘、有層次，會越聞越著迷", type: "woody"},
      {text: "溫柔、舒服，像一段美好記憶", type: "floral"},
      {text: "明亮、開朗，讓人瞬間提起精神", type: "citrus"},
      {text: "乾淨、俐落，簡單卻令人難忘", type: "musk"}
    ]
  }
];

const results = {
  woody: {
    title: "木質沉穩型",
    image: "images/result_woody.jpg",
    description: "你是沈穩內斂的人，像森林般包容而寧靜。你對生活有自己的步調，重視深度與穩定感。",
    analysis: "你多次選擇偏向穩定與自然的選項，顯示你喜歡踏實、踏根於日常的安定。建議：選擇檀香、雪松、岩蘭草等木質香，讓你感到安心與力量。"
  },
  citrus: {
    title: "柑橘清新型",
    image: "images/result_citrus.jpg",
    description: "你充滿活力與朝氣，是群體中的開朗陽光角色。你的存在總能為周圍注入新鮮能量。",
    analysis: "你偏好輕盈與明亮的選項，代表你享受自由與探索。建議：葡萄柚、檸檬、佛手柑等柑橘調，讓你保持清新動能。"
  },
  floral: {
    title: "花香柔和型",
    image: "images/result_floral.jpg",
    description: "你擁有溫柔細膩的特質，能敏銳捕捉情感，是個極富同理心的人。",
    analysis: "你傾向浪漫與療癒的選擇，擅長在關係中提供溫暖。建議：玫瑰、茉莉、橙花等花香調，增強你的柔美魅力。"
  },
  musk: {
    title: "麝香神秘型",
    image: "images/result_musk.jpg",
    description: "你是一位安靜卻充滿深度的人，擁有內斂氣質與感性直覺。你像月色般神秘卻吸引人靠近。",
    analysis: "你偏好內省、獨處的選項，擁有強烈的個人風格。建議：麝香、琥珀、廣藿香等調性，突顯你的神秘深度。"
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
  resultAnalysis.innerHTML = `因為你的選擇多偏向 <strong>${r.title}</strong>，<br>${r.analysis}`;
}

restartBtn.addEventListener('click', ()=>{
  resultSection.classList.add('hidden');
  intro.classList.remove('hidden');
});
