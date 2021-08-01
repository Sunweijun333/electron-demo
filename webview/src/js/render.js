const wv = document.querySelector('#wv');

wv.addEventListener('did-start-loading', ()=> {
    console.log('正在加载中...');
});

wv.addEventListener('did-stop-loading', ()=>{
    console.log('加载完毕...');
    console.log([wv]);
    wv.insertCSS(`#su{background:red!important}`);

    wv.executeJavaScript(`
        setTimeout(() => {
            let input = document.querySelector('#kw');
            let btn = document.querySelector('#su');
            input.value = "trendmicro";
            btn.click();
        }, 2000)
    `)
})