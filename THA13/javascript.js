const urlmeme = 'https://meme-api.herokuapp.com/gimme';
const Button = document.querySelector(".buttons");
const memes = document.querySelector('.image');

async function getData() {
    const res = await fetch(urlmeme);
    const data = await res.json()
    return data
}
Button.addEventListener('click', async() => {
    let response = getData();
    let meme = await response;
    console.log(meme);
    var img = document.createElement('img')
    img.src = meme.url;
    memes.appendChild(img);
    img.classList.add('designMeme');
})
