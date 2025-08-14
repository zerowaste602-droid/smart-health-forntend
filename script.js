// Basic demo: simulate vitals and simple alert
const el = (id) => document.getElementById(id);

function randomInt(min, max){ return Math.floor(Math.random()*(max-min+1))+min; }

function simulateReadings(){
  const hr = randomInt(60, 110);
  const sys = randomInt(95, 160);
  const dia = randomInt(60, 100);
  const glu = randomInt(70, 220);

  el('hr').textContent = hr;
  el('bp').textContent = `${sys}/${dia}`;
  el('glucose').textContent = glu;

  // naive alert thresholds
  const alerts = [];
  if(hr < 60 || hr > 100) alerts.push(`Heart Rate abnormal: ${hr} bpm`);
  if(sys > 140 || dia > 90) alerts.push(`High Blood Pressure: ${sys}/${dia} mmHg`);
  if(glu < 70 || glu > 180) alerts.push(`Glucose out of range: ${glu} mg/dL`);

  if(alerts.length){
    alert("⚠️ Alerts:\n\n" + alerts.join("\n"));
  }else{
    alert("✅ All readings look normal.");
  }
}

document.getElementById('simulateBtn').addEventListener('click', simulateReadings);
document.getElementById('loginBtn').addEventListener('click', () => alert('Login page coming soon'));
document.getElementById('signupBtn').addEventListener('click', () => alert('Signup page coming soon'));
