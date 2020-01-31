document.addEventListener('DOMContentLoaded', function () {
    const animBg = new AnimBg('.anim-bg')

    document.addEventListener('mousedown', (event) => animBg.listenCursorMove(event)) 
    
})