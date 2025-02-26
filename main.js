
const cursor = document.querySelector('.custom-cursor.site-wide');


document.addEventListener('mouseenter', function() {
    cursor.style.display = 'block';

});

document.addEventListener('mouseleave', function() {
    cursor.style.display = 'none';
    
});

document.addEventListener('mousemove', trackCursor);

document.addEventListener('mousedown', function() {
    cursor.classList.add('active');
});

document.addEventListener('mouseup', function() {
    cursor.classList.remove('active');
});

function trackCursor(e) {
    const width = cursor.clientWidth;
    const height = cursor.clientHeight;
    cursor.style.transform = `translate(${e.clientX - width/2}px, ${e.clientY - height/2}px)`;
}