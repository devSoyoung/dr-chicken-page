const metaTitleEl = document.querySelector('.meta-title');
const metaContentEl = document.querySelector('.meta-content');

const HIDE = "이 계산법의 유래가 궁금하신가요?";
const SHOW = "닫기";
function toggleDetail() {    
    if (metaTitleEl.innerText === HIDE) {
        metaContentEl.classList.remove('hidden');
        metaTitleEl.innerText = SHOW;
        return;
    }

    metaContentEl.classList.add('hidden');
    metaTitleEl.innerText = HIDE;
}