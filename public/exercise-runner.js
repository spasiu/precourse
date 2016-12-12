window.init = function(appToken, userId) {
    iterate(document.getElementsByClassName('exercise'));

    function iterate(list) {
        for (let i = 0; i < list.length; i++) {
            init(list[i]);
        }
    }

    function init(element) {
        const name = element.getAttribute('data-name');
        const size = element.getAttribute('data-size');
        const data = element.getAttribute('data-expects').split('::');
        const type = data[0];
        let expects = window[type](data[1]);
        if (type === 'Object' || type === 'Array') {
            expects = format(JSON.parse(expects));
        }

        const text = element.innerText.split('---');
        element.innerText = '';

        const source = (text[1] || '').trim();

        const description = document.createElement('p');
        description.innerText = text[0].trim();

        const failure = document.createElement('p');
        failure.className = 'failure';

        const success = document.createElement('p');
        success.className = 'success';

        const textArea = document.createElement(size === 'small' ? 'input' : 'textArea');
        textArea.value = source;

        const button = document.createElement('button');
        button.innerText = 'Run';
        button.onclick = () => {
            success.innerText = '';
            failure.innerText = '';
            const source = textArea.value;
            try {
                let result = eval(source);
                if (typeof result === 'object') {
                    result = format(result);
                }
                chai.expect(result).to.equal(expects);
                result += ' ✅';
                success.innerHTML = result;
                postExercise(name, source, result);
            } catch (err) {
                const error = err.message + ' ☠';
                failure.innerHTML = error;
                postExercise(name, source, error);
            }

        };
        const header = document.createElement('h3');
        header.innerText = name;

        element.appendChild(header);
        element.appendChild(description);
        element.appendChild(textArea);
        element.appendChild(button);
        element.appendChild(success);
        element.appendChild(failure);
    }

    function postExercise(name, source, result) {
        return fetch(`https://api.smooch.io/v1/appusers/${userId}/messages`, {
            method: 'POST',
            headers: {
                'app-token': appToken,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                avatarUrl: 'http://code.emc.com/images/code_icon.png',
                role: 'appUser',
                name: 'exercise',
                type: 'text',
                text: `${name}\n\`\`\`\n${source}\n\`\`\`\n${result}`
            })
        });
    }

    function format(value) {
        return JSON.stringify(value);
    }

}
