function changeshape() {
    const shape = document.getElementById('shape');

    if (shape.textContent === 'Square') {
        shape.style.borderRadius = '50%';
        shape.textContent = 'Circle';
        shape.style.setProperty('background-color','green')
    } else {
        shape.style.borderRadius = '0%';
        shape.textContent = 'Square';
        shape.style.setProperty('background-color','red')
    }
}
