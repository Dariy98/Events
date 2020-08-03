window.onload = () => {
    let angleY = 0;
    const grear = document.querySelector(".gear");
    const whellMouse = (e) => {
        e.preventDefault()
        if(e.deltaY > 0) {
            angleY = angleY + 15
        } else {
            angleY = angleY - 15
        }
        grear.style.transform = `rotate(${angleY}deg)`
    }
    grear.addEventListener('wheel', whellMouse)
}