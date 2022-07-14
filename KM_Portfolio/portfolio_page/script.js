function dropdownMenu(){
    let dropdown = document.querySelector('.dropdown-menu-wrapper');

    dropdown.addEventListener('click', ()=>{
        document.querySelector('.nav-button').classList.toggle('hide');

    });
}
