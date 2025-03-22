const btn_menu_home = document.getElementById('BTN-Menu-Home');
const btn_menu_programacao = document.getElementById('BTN-Menu-Programacao');
const btn_menu_sobremim = document.getElementById('BTN-Menu-SobreMim');

btn_menu_home.addEventListener('click', () => {
    window.location.href = './index.html';
});

btn_menu_programacao.addEventListener('click', () => {
    // window.location.href = './Programmition/index.html';
    alert("Site em desenvolvimento")
});

btn_menu_sobremim.addEventListener('click', () => {
    // window.location.href = './WithMe/index.html';
    alert("Site em desenvolvimento")
});
