function customRender(reactElement, container) {
    const domElement = document.createElement
    (react.type)
    document.innerHtml = reactElement.children
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

