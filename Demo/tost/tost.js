
//暴露给外部的方法
function toast(string, time) {
    time = time || 3;
    const message = new Message(string, time);
    message.showAndHide();
}

let Message = function (message, time) {
    this.message = message;
    this.time = time;
};

Message.prototype = {
    showAndHide() {
        //为Toast创建一个包裹和一个文字容器
        const messageWR = document.createElement('div')
        const messageEl = document.createElement('p');
        //比如你的WEB_APP 的根元素的id是main
        const main = document.getElementById('main');
        messageWR.appendChild(messageEl);
        main.appendChild(messageWR);
        messageEl.innerHTML = this.message;
        messageWR.className='tip-message-wrap'
        messageEl.className = 'tip-message';
        //在指定的时间后移除
        setTimeout(() => {
            messageWR.remove();
        }, this.time * 1000);
    },
};
