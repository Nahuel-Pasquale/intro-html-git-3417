
const logoutBtn = document.getElementById('logout-message');
const userName = document.getElementById('user-name');

const activeUser = JSON.parse(sessionStorage.getItem('activeUser'));

const showUserName = () => {
  userName.textContent = `${activeUser.name} ${activeUser.lastName}`
}

const logout = () => {
  if(window.confirm('¿Estás seguro que querés cerrar sesión')){
    sessionStorage.removeItem('activeUser');
    window.location.href = './login.html'
  }
}

const init = () => {
  if(!activeUser) {
    window.location.href = './login.html'
    return;
  }
  showUserName();
  logoutBtn.addEventListener('click', logout);
}

init();