
    console.log('Hello World!');

    const button = document.getElementById('test');
    const button_hide = document.getElementById('test-hide');
    const container = document.getElementById('test-target');

    button.addEventListener('click', () => {
        container.classList.add('show');
        console.log('¡Muestra el div oculto!');
    });
    
    button_hide.addEventListener('click', () =>{
        container.classList.remove('show');
        console.log('¡Oculta el div!');
    });

    console.log('Bye World!');
    console.log('Test!!!');

