export {main};

function main() {
    window.addEventListener('click', (e) => {
        let body = document.querySelector('body');
        body.classList.toggle('working');
        localStorage.setItem('working', JSON.stringify({"X":e.pageX,"Y": e.pageY}));
        //console.log(JSON.stringify(e));
    })
    console.log(123);
}

/* window.addEventListener('storage', (e)=>{
        console.log(e);
    }
) */
main();

