window.onload = function () {
    // 获取 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const icon = urlParams.get('icon');
    const name = urlParams.get('name');
    const downloadLink = urlParams.get('link');
    const password = urlParams.get('pwd');
    const img1 = urlParams.get('图片一');
    const img2 = urlParams.get('图片二');
    const description = urlParams.get('简介');

    // 设置图标和名称
    document.getElementById('iconImg').src = icon;
    document.getElementById('appName').textContent = name;

    // 设置图片和简介
    document.getElementById('img1').src = img1 || 'default_image.png'; // 设定默认图片
    document.getElementById('img2').src = img2 || 'default_image.png'; // 设定默认图片
    document.getElementById('description').textContent = description;

    let downloadUrl = downloadLink;  // 默认下载链接为传入的下载链接

    // 判断链接类型，调用不同API
    if (downloadLink.includes('lan')) {
        // 调用蓝奏云的API解析
        const lanzouApiUrl = `https://api.pearktrue.cn/api/lanzou/api.php?url=${encodeURIComponent(downloadLink)}&pwd=${encodeURIComponent(password)}`;

        fetch(lanzouApiUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.data && data.data.downloadurl) {
                    downloadUrl = data.data.downloadurl;  // 更新下载链接为API返回的链接
                }
            })
            .catch(error => {
                console.error('蓝奏云API解析错误: ', error);
            });
    } else if (downloadLink.includes('www.123')) {
        // 调用123盘的API解析
        const pan123ApiUrl = `https://api.pearktrue.cn/api/123panparse/?url=${encodeURIComponent(downloadLink)}&pwd=${encodeURIComponent(password)}`;

        fetch(pan123ApiUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.data && data.data.downloadurl) {
                    downloadUrl = data.data.downloadurl;  // 更新下载链接为API返回的链接
                }
            })
            .catch(error => {
                console.error('123盘API解析错误: ', error);
            });
    }

    // 设置下载按钮点击事件
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.onclick = function () {
        window.open(downloadUrl);  // 打开更新后的下载链接
    };
};