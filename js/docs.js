
(function() {

    var actions = document.getElementsByClassName('action')

    for(var i = 0; i < actions.length; ++ i) {

        (function() {

            var action = actions[i]

            var childNodes = [].slice.call(action.childNodes, 0)

            var header = childNodes.filter(n => n.tagName && n.tagName.toLowerCase() === 'h4')[0]
            var body = childNodes.filter(n => n.tagName && n.tagName.toLowerCase() === 'div')[0]

            if(body)
                body.style.display = 'none'

            header.classList.add('hoverable')

            var toggle = document.createElement('span')
            toggle.innerText = '+ '

            header.prepend(toggle)

            var hidden = true

            header.addEventListener('click', function() {
                hidden = !hidden
                if(hidden) {
                    toggle.innerText = '+ '
                    body.style.display = 'none'
                } else {
                    toggle.innerText = '- '
                    body.style.display = 'initial'
                }
            })

        })()

    }

})()