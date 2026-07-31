"use strict";

/*========================================
    DOM
========================================*/

const sliderTrack=document.querySelector(".slider-track");
const prevButton=document.querySelector(".slider-arrow.prev");
const nextButton=document.querySelector(".slider-arrow.next");

const menuTabs=document.querySelectorAll(".menu-tab");
const subMenus=document.querySelectorAll(".submenu");
const subMenuButtons=document.querySelectorAll(".submenu-btn");

/*========================================
    State
========================================*/

let currentCategory="food";
let currentSubCategory="breakfast";

let currentProducts=[];

const visibleCards=3;

let trackIndex = 1;      // ایندکس داخل آرایه‌ی گسترش‌یافته (با کپی‌ها)
let isAnimating = false;

let infiniteLoop = true;

/*========================================
    Touch / Swipe State
========================================*/

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

let isTouching = false;

const swipeThreshold = 50;


/*========================================
    Initialize
========================================*/

document.addEventListener("DOMContentLoaded",initializeMenu);

function initializeMenu(){

    bindEvents();

    loadProducts();

}

/*========================================
    Render Track (با کپی برای حلقه بی‌نهایت)
========================================*/

function renderTrack(){

    sliderTrack.innerHTML = "";

    if(currentProducts.length === 0) return;

    let extended;

    if(infiniteLoop){

        extended=[
            currentProducts[currentProducts.length-1],
            ...currentProducts,
            currentProducts[0]
        ];

    }else{

        extended=[...currentProducts];

    }

    extended.forEach(product=>{
        sliderTrack.appendChild(createCardElement(product));
    });

    if(infiniteLoop){

        if(trackIndex<1 || trackIndex>currentProducts.length){

            trackIndex=1;

        }

    }else{

        if(trackIndex<0 || trackIndex>=currentProducts.length){

            trackIndex=0;

        }

    }

    updateTrackPosition(false);
    updateActiveCard();
}

function createCardElement(product){

    const template = document.querySelector("#menu-card-template");
    const node = template.content.cloneNode(true);

    const image = node.querySelector(".item-image");
    const imageContainer = node.querySelector(".menu-card__image");

    image.alt = product.name;

    image.addEventListener("load", () => {

        imageContainer.classList.add("loaded");

    });

    image.src = product.image;

    
    node.querySelector(".item-name").textContent = product.name;
    node.querySelector(".item-price").textContent = product.price.toLocaleString("en-US") + " تومان";

    const list = node.querySelector(".ingredients-list");
    product.ingredients.forEach(ing=>{
        const li = document.createElement("li");
        li.textContent = ing;
        list.appendChild(li);
    });

    const card = node.querySelector(".menu-card");

    card.addEventListener("click", () => {

        const cards = [...sliderTrack.children];
        const clickedIndex = cards.indexOf(card);

        // اگر کارت وسطه
        if(clickedIndex === trackIndex){

            card.classList.toggle("flipped");
            return;

        }

        // اگر انیمیشن در حال اجراست
        if(isAnimating) return;

        cards.forEach(c=>c.classList.remove("flipped"));

        // فقط کارت رو بیار وسط
        trackIndex = clickedIndex;

        updateTrackPosition(true);
        updateActiveCard();

    });

    return card;
}

/*========================================
    Position & Active Card
========================================*/

function updateTrackPosition(animate = true){

    const viewportWidth = document.querySelector(".slider-viewport").offsetWidth;
    const cardWidth = sliderTrack.children[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(sliderTrack).gap) || 45;

    const offset = trackIndex * (cardWidth + gap) - (viewportWidth / 2) + (cardWidth / 2);

    sliderTrack.style.transition = animate ? "transform .6s ease" : "none";
    sliderTrack.style.transform = `translateX(${-offset}px)`;
}

function updateActiveCard(){

    [...sliderTrack.children].forEach((card, i)=>{
        card.classList.remove("left","center","right");

        if(i === trackIndex) card.classList.add("center");
        else if(i === trackIndex - 1) card.classList.add("left");
        else if(i === trackIndex + 1) card.classList.add("right");
    });
}

/*========================================
    Arrows (حلقه بی‌نهایت)
========================================*/

function goNext(){

    if(isAnimating) return;

    if(!infiniteLoop){

        if(trackIndex < currentProducts.length-1){

            trackIndex++;

            sliderTrack.querySelectorAll(".menu-card").forEach(card=>{
                card.classList.remove("flipped");
            });

            updateTrackPosition(true);
            updateActiveCard();

        }

        return;

    }

    isAnimating = true;

    trackIndex++;

    sliderTrack.querySelectorAll(".menu-card").forEach(card=>{
        card.classList.remove("flipped");
    });

    updateTrackPosition(true);

    updateActiveCard();

    sliderTrack.addEventListener("transitionend",()=>{

        if(trackIndex===sliderTrack.children.length-1){

            trackIndex=1;

            sliderTrack.querySelectorAll(".menu-card").forEach(card=>{
                card.classList.remove("flipped");
            });

            updateTrackPosition(false);

            updateActiveCard();

        }

        isAnimating=false;

    },{once:true});

}

function goPrev(){

    if(isAnimating) return;

    if(!infiniteLoop){

        if(trackIndex>0){

            trackIndex--;

            sliderTrack.querySelectorAll(".menu-card").forEach(card=>{
                card.classList.remove("flipped");
            });

            updateTrackPosition(true);

            updateActiveCard();

        }

        return;

    }

    isAnimating=true;

    trackIndex--;

    sliderTrack.querySelectorAll(".menu-card").forEach(card=>{
        card.classList.remove("flipped");
    });

    updateTrackPosition(true);

    updateActiveCard();

    sliderTrack.addEventListener("transitionend",()=>{

        if(trackIndex===0){

            trackIndex=sliderTrack.children.length-2;

            sliderTrack.querySelectorAll(".menu-card").forEach(card=>{
                card.classList.remove("flipped");
            });

            updateTrackPosition(false);

            updateActiveCard();

        }

        isAnimating=false;

    },{once:true});

}


/*========================================
    Mobile Swipe
========================================*/

function handleTouchStart(e){

    if(e.touches.length !== 1) return;

    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;

    isTouching = true;

}

function handleTouchEnd(e){

    if(!isTouching) return;

    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;

    isTouching = false;

    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // اگر حرکت بیشتر عمودی بود، Swipe محسوب نشود
    if(Math.abs(diffY) > Math.abs(diffX)) return;

    // حرکت خیلی کوتاه را نادیده بگیر
    if(Math.abs(diffX) < swipeThreshold) return;

    if(isAnimating) return;

    // کشیدن به چپ → کارت بعدی
    if(diffX < 0){

        goNext();

    }

    // کشیدن به راست → کارت قبلی
    else{

        goPrev();

    }

}



function bindEvents(){

    prevButton.addEventListener("click", goPrev);
    nextButton.addEventListener("click", goNext);

    sliderTrack.addEventListener("touchstart", handleTouchStart, {passive:true});
    sliderTrack.addEventListener("touchend", handleTouchEnd, {passive:true});

    menuTabs.forEach(tab=>{
        tab.addEventListener("click", ()=>{

            menuTabs.forEach(t=>t.classList.remove("active"));
            tab.classList.add("active");

            currentCategory = tab.dataset.category;

            subMenus.forEach(sm=>sm.classList.remove("active"));
            document.querySelector(`.submenu[data-menu="${currentCategory}"]`).classList.add("active");

            const activeSub = document.querySelector(
                `.submenu[data-menu="${currentCategory}"] .submenu-btn[data-sub="${currentSubCategory}"]`
            );

            subMenuButtons.forEach(b=>b.classList.remove("active"));

            if(activeSub){

                activeSub.classList.add("active");

            }else{

                const firstSubBtn = document.querySelector(
                    `.submenu[data-menu="${currentCategory}"] .submenu-btn`
                );

                firstSubBtn.classList.add("active");
                currentSubCategory = firstSubBtn.dataset.sub;

            }
            filterAndRender();
        });
    });

    subMenuButtons.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            subMenuButtons.forEach(b=>b.classList.remove("active"));
            btn.classList.add("active");
            currentSubCategory = btn.dataset.sub;
            filterAndRender();
        });
    });
}

function loadProducts(){
    filterAndRender();
}

function filterAndRender(){
    currentProducts = products.filter(product=>
        product.category===currentCategory &&
        product.subCategory===currentSubCategory
    );

    infiniteLoop = currentProducts.length > 3;

    renderTrack();
}

/*========================================
    Window Resize
========================================*/

window.addEventListener("resize", () => {

    if(!sliderTrack || !sliderTrack.children.length) return;

    updateTrackPosition(false);
    updateActiveCard();

});