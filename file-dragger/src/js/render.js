let holder = document.querySelector('#holder')

holder.addEventListener('drop', (e) => {
    e.preventDefault(); //取消默认
    e.stopPropagation(); //阻止冒泡
    for(const file of e.dataTransfer.files) {
        console.log(file)
        console.log('文件路径：', file.path)
    }
})

holder.addEventListener('dragover', (e) => {
    e.preventDefault(); //取消默认
    e.stopPropagation(); //阻止冒泡
})