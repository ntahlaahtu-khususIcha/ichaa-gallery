let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
// event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
//auto run slider
let refreshInterval = setInterval(() => {
    next.click();
},5000)
function showSlider(){
    //remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailsActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailsActiveOld.classList.remove('active');

    //active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active'); 
    
    //clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    },5000)
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () =>{
        itemActive = index;
        showSlider();
    })
})

let tombol = document.getElementById('tombol');
let pesan = document.getElementById('hiddenPesan');

function showPesan() {
    pesan.classList.remove('hidden');
    tombol.classList.add('hidden');
}

let coverPesan = document.getElementById('coverPesan');
function tampilPesan() {
    coverPesan.classList.add('span-active')
}