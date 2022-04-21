const htmlBtn = document.querySelector('#htmlCss-btn');
const jsBtn = document.querySelector('#js-btn');
const reactBtn = document.querySelector('#react-btn');

const htmlDiv = document.querySelector('#htmlCss')
const jsDiv = document.querySelector('#js')
const reactDiv = document.querySelector('#react')

htmlDiv.style.display = 'none';
jsDiv.style.display = 'none';

htmlBtn.addEventListener('click', () => {
    htmlDiv.style.display = 'block';
    jsDiv.style.display = 'none';
    reactDiv.style.display = 'none';
})

jsBtn.addEventListener('click', () => {
    htmlDiv.style.display = 'none';
    jsDiv.style.display = 'block';
    reactDiv.style.display = 'none';
})

reactBtn.addEventListener('click', () => { 
    htmlDiv.style.display = 'none';
    jsDiv.style.display = 'none';
    reactDiv.style.display = 'block';
})