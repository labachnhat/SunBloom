let currentStep = 0;
let goal = "";
let steps = [];

function startTracking() {
  const goalInput = document.getElementById("goalName");
  goal = goalInput.value.trim();

  const stepInputs = document.querySelectorAll(".step-input");
  steps = Array.from(stepInputs).map(input => input.value.trim());

  if (!goal || steps.some(s => s === "")) {
    alert("Please fill out your goal and all 4 steps.");
    return;
  }

  document.getElementById("setup").style.display = "none";
  document.getElementById("tracker").style.display = "block";

  document.getElementById("goalDisplay").textContent = goal;
  document.getElementById("stepLabel").textContent = `Step 1: ${steps[0]}`;
  updateFlowerIcon();
}

function completeStep() {
  if (currentStep >= steps.length) return;

  currentStep++;
  updateFlowerIcon();

  if (currentStep >= steps.length) {
    document.getElementById("stepLabel").textContent = `🌺 Goal Completed! Well done!`;
    launchFireworks(); // ← Chỗ gọi pháo hoa đúng thời điểm 🎇
    // 👉 Thêm lời động viên ngay dưới bông hoa
const message = document.createElement("p");
message.textContent = "✨ You're amazing – this flower blooms because of your effort!";
message.style.textAlign = "center";
message.style.color = "#c95e49";
message.style.marginTop = "0.8em";
message.style.fontWeight = "500";

const flowerWrapper = document.getElementById("flowerWrapper");
flowerWrapper.insertBefore(message, document.getElementById("flowerIcon"));


  } else {
    document.getElementById("stepLabel").textContent = `Step ${currentStep + 1}: ${steps[currentStep]}`;
  }
}

function updateFlowerIcon() {
  const iconElement = document.getElementById("flowerIcon");
  const icons = ["🌱", "🌿", "🌼", "🌸", "🌺"];
  iconElement.textContent = icons[Math.min(currentStep, icons.length - 1)];
}

function launchFireworks() {
  const container = document.getElementById("flowerWrapper"); // ← Gắn pháo hoa vào khu vực hoa
  const fireworks = new Fireworks.default(container, {
    speed: 3,
    acceleration: 1.05,
    friction: 0.95,
    gravity: 1.5,
    particles: 100,
    trace: 4,
    explosion: 6,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: { min: 0, max: 360 },
    delay: { min: 20, max: 50 }
  });

  fireworks.start();

  setTimeout(() => {
    fireworks.stop();
  }, 5000);
}

