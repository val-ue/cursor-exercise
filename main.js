const cursor = document.querySelector('.custom-cursor.site-wide');


document.addEventListener('mouseenter', function() {
    cursor.style.display = 'block';

});

document.addEventListener('mouseleave', function() {
    cursor.style.display = 'none';
});

function trackCursor(e) {
    const width = cursor.clientWidth;
    const height = cursor.clientHeight;
    cursor.style.transform = `translate(${e.clientX - width/2}px, ${e.clientY - height/2}px)`;
}

let stopMouse;

document.addEventListener('mousemove', function (e) {
    trackCursor(e);

    cursor.classList.remove('active');
    clearTimeout(stopMouse);

    stopMouse = setTimeout(function() {
        cursor.classList.add('active'); 
    }, 150);
    
});


