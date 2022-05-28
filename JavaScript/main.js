const toggleBtn = document.querySelector('.nav__toggleBtn');
// html node들 중 'navbar__toggleBtn'을 찾아 toggleBtn에 연결!
const menu = document.querySelector('.nav__menu')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
// click이 될 때마다 해당 클래스 상태 바꿈(없<->있))
