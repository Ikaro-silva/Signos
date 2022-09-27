function home(){
    let main = document.querySelector('.main')
    if (main.classList.contains('hide')){
        main.classList.add('showw')
        main.classList.remove('hide')
    }
    else{
        main.classList.add('hide')
        main.classList.remove('showw')
    }
}
function saibaMais(attr){
    let obj = document.getElementById(attr)
    if (obj.classList.contains('hide')){
        obj.classList.add('show')
        obj.classList.remove('hide')
    }
    else{
        obj.classList.add('hide')
        obj.classList.remove('show')
    }
}
