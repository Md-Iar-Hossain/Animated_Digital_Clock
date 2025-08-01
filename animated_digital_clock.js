const circles = document.querySelectorAll('.circle'),
  hour = document.querySelector('.hour'),
  minute = document.querySelector('.minute'),
  second = document.querySelector('.second'),
  am_pm = document.querySelector('.am-pm'),
  toggle = document.querySelector('.toggle'),
  settings = document.querySelector('.settings'),
  colorList = ['#66b95c', '#fa5b0f', '#6495ed', '#cc00cc', '#ff5e94', '#9200ee'];

circles.forEach((circle, ind) => {
  circle.onclick = function () { document.documentElement.style.setProperty('--color', colorList[ind]) }
})
setInterval(() => {
  let date = new Date(),
    hr = date.getHours(),
    mn = date.getMinutes(),
    ss = date.getSeconds(),
    ampm = 'am';

  if (hr == 0) { hr = 24 }
  if (toggle.checked) {
    if (hr == 24) {
      ampm = 'am'
      hr -= 12
    } else if (hr >= 12) {
      ampm = 'pm'
      hr -= 12
    }
   setTimeout(()=> am_pm.classList.add('show'),300)
  } else {am_pm.classList.remove('show') }
  
  hr = (hr < 10) ? hr = "0" + hr : hr;
  mn = (mn < 10) ? mn = "0" + mn : mn;
  ss = (ss < 10) ? ss = "0" + ss : ss;
  hour.textContent = hr;
  minute.textContent = mn;
  second.textContent = ss;
  am_pm.textContent = ampm;
}, 1000)
function addClass(e) {
  e.onclick = () => { e.classList.toggle('active'); }
}
addClass(settings)