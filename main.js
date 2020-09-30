// kita buat sebuah fungsi yang akan memunculkan modal
const showModal = ()=>{
    // kita ambil element yang akan di show
    let modal = document.querySelector('.modalMenu')

    // kita atur STYLE dari element tersebut
    // jadikan dia terlihat

    modal.style.display = 'flex'
}

// kita buat sebuah fungsi yang akan dihide element modal
const hideModal = ()=>{
    // kita ambil element yang akan di hide
    let modal = document.querySelector('.modalMenu')

    // kita atur STYLE dari element tersebut
    // jadikan dia tersembunyi
    modal.style.display = 'none'
}

// kita buat sebuah fungsi yang akan hide aboutalert
const hideAboutAlert = ()=>{
    // kita ambil element yang akan di hide
    let aboutAlert = document.querySelector('.aboutAlert')

    // kita atur STYLE dari element tersebut jadikan di tersembunyi
    aboutAlert.style.display = 'none'
}