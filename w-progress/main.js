/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2018-07-19 16:30:41
 * @description: 工单进度条 work progress
 */

class WorkProgress extends HTMLElement {

    // Specify observed attributes so that
    // attributeChangedCallback will work
    static get observedAttributes() { return ['status']; }

    constructor() {
        super();
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom square element attributes changed.');
        this.updateStyle(this.shadowRoot);
    }

    render() {
        // 创建一个shadow root
        const shadow = this.attachShadow({ mode: 'open' });
        let wrapper = document.createElement('div');
        wrapper.classList.add('progress_out');
        wrapper.insertAdjacentHTML('afterbegin', `
        <div class="prolayout">
            <div class="progress ">
                <div class="progress2 progress_status4"></div>
            </div>
        </div>
        <div class="pro_status">
            <span class="bcolor">等待回复</span>
            <span class="bcolor marginleft">已转主管</span>
            <span class="bcolor marginleft">&nbsp;已经处理</span>
            <span class="bcolor marginleft">已经查看</span>
            <span class="bcolor marginleft">等待评价</span>
        </div>
        `);

        // style content

        let style = document.createElement('style');
        style.textContent = `
        h2 {
            text-align: center;
        }
        
        .progress_out {
            width: 960px;
            margin: 50px auto;
        }
        
        .prolayout {
            /*width:837px;*/
            width: 940px;
            margin: 0 auto;
        }
        
        .progress,
        .progress2 {
            height: 33px;
            background: url(./images/progress.gif) no-repeat left bottom;
            width: 940px;
        }
        
        .progress2 {
            background-position: left top;
        }
        
        .progress_status1 {
            width: 32px;
        }
        
        .progress_status2 {
            width: 256px;
        }
        
        .progress_status3 {
            width: 479px;
        }
        
        .progress_status4 {
            width: 703px;
        }
        
        .progress_status5 {
            width: 940px;
        }
        
        .pro_status {
            padding-top: 5px;
            font-size: 14px;
        }
        
        .pro_status .marginleft {
            margin-left: 160px;
        }
        
        .pro_status .marginleft2 {
            margin-left: 160px;
            *margin-left: 145px;
            _margin-left: 150px;
        }
        `;

        // attach the created elements to the shadow dom
        shadow.appendChild(style);
        console.log(style.isConnected);
        shadow.appendChild(wrapper);

    }


    updateStyle(elem) {
        const status = this.getAttribute('status');
        if (!status) {
            return;
        }
        const div = elem.querySelector('.progress2');
        const cls = [...div.classList];
        cls.forEach(item => {
            div.classList.remove(item);
        });
        div.classList.add('progress2', 'progress_status' + status);
    }
}

// Define the new element
customElements.define('w-progress', WorkProgress);