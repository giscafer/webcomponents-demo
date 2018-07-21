/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2018-07-21 14:58:17
 * @description: 演示如何使用template定义web component
 */



class MyParagraph extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById('my-paragraph');
        let tempContent = template.content;

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(tempContent.cloneNode(true));
    }
}

customElements.define('my-paragraph', MyParagraph);