window.addEventListener('keydown', changeState);
window.addEventListener('mousemove', changeState);

function changeState(e) {
    const keyCode = e.keyCode ? e.keyCode : false;
    if (
        keyCode === false ||
        keyCode === 9 ||
        keyCode === 13 ||
        keyCode === 27 ||
        keyCode === 37 ||
        keyCode === 38 ||
        keyCode === 39 ||
        keyCode === 40
    ) {
        document.documentElement.setAttribute('data-state', e.type);
    }
}
