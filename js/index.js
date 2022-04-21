const welcome = document.getElementById('welcome');
const mainIndex = document.getElementById('mainIndex');
welcome.style.display = 'block';
mainIndex.style.display = 'none';

    function welcomeHidden() {
        setTimeout(()=> {
            welcome.style.display = 'none';
            mainIndex.style.display = 'block';
        },1500)
    }
  welcome.addEventListener("load",welcomeHidden());



