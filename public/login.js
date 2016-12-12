window.appToken = '1z8nldxof2a9i6vcdkjc0d7zu';

(function() {
    const login = document.createElement('form');
    login.setAttribute('action', '#');

    const input = document.createElement('input');
    input.setAttribute('placeholder', 'User ID');
    login.appendChild(input);

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerText = 'submit';
    login.appendChild(button);

    const error = document.createElement('p');
    error.className = 'failure';
    login.appendChild(error);

    login.onsubmit = handle;
    document.getElementById('main').className = 'hidden';
    document.body.appendChild(login)

    function handle(e) {
        e.preventDefault();
        fetch(`https://api.smooch.io/v1/appusers/${input.value}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'app-token': appToken
            }
        })
        .then(res => res.status < 399 ? signin() : warn(res.status + ' response'))
        .catch(err => warn(err.message));
    }

    function signin() {
        const userId = input.value;
        document.getElementById('main').className = '';
        document.body.removeChild(login);
        Smooch.init({
            appToken,
            properties: {
                userId
            },
            customText: {
                headerText: 'Have a question?',
                introductionText: 'I\'m here to help you out.',
                introAppText: '',
                settingsText: ''
            }
        })
        init(appToken, userId);
    }

    function warn(message) {
        error.innerText = message;
    }
})();
