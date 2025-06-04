const messages = [
  "你真的超棒的！🌟",
  "再堅持一下，成功就在眼前！🔥",
  "相信自己，夢想正在靠近！💪",
  "累了就休息一下，但不要放棄！🌈",
  "今天的你比昨天更進步了！✨",
  "每一滴汗水，都是未來閃耀的光芒！💧",
  "每次努力，都是在為未來鋪路！🛤️",
  "別怕挑戰，那是你突破的起點！⚡",
  "心懷夢想，腳踏實地，就能飛得更高！🕊️",
  "你已經走得很遠了，別輕易回頭！🚀",
];

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("luckyBtn");
  button.addEventListener("click", function () {
    const msg = document.createElement("div");
    const randomText = messages[Math.floor(Math.random() * messages.length)];

    msg.innerText = randomText;
    msg.style.position = "fixed";
    msg.style.left = "50%";
    msg.style.top = "80%";
    msg.style.transform = "translate(-50%, -50%)";
    msg.style.fontSize = "24px";
    msg.style.padding = "10px 20px";
    msg.style.backgroundColor = "rgba(255,255,255,0.9)";
    msg.style.borderRadius = "12px";
    msg.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    msg.style.transition = "opacity 7s, top 2s";
    msg.style.opacity = 1;
    msg.style.zIndex = 9999;
    msg.style.fontFamily = '"Ma Shan Zheng", cursive';

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.top = "40%";
      msg.style.opacity = 0;
    }, 50);

    setTimeout(() => {
      msg.remove();
    }, 2000);
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const ctxSkills = document.getElementById('skillsChart').getContext('2d');
  const skillsChart = new Chart(ctxSkills, {
    type: 'bar',
    data: {
      labels: ['繪畫', '設計', '程式', '剪輯'],
      datasets: [{
        label: '熟練度 (%)',
        data: [60, 75, 70, 85], 
        backgroundColor: ['#f67280', '#f8b195', '#6c5b7b', '#355c7d'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 20 }
        }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });

  const ctxMusic = document.getElementById('musicChart').getContext('2d');
  const musicChart = new Chart(ctxMusic, {
    type: 'pie',
    data: {
      labels: ['流行', '搖滾', '爵士', '古典', '嘻哈'],
      datasets: [{
        label: '音樂喜好比例',
        data: [40, 10, 15, 10, 25],
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#ffcd56',
          '#4bc0c0',
          '#9966ff'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
});



function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleString("zh-TW", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  document.getElementById("currentTime").textContent = timeString;
}

// 每秒更新一次
setInterval(updateTime, 1000);
updateTime(); // 先執行一次以防等待


