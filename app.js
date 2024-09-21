// 获取传入的数据
const urlParams = new URLSearchParams(window.location.search);
const appIcon = urlParams.get('icon');
const appName = urlParams.get('name');
const downloadLink = urlParams.get('link');
const password = urlParams.get('pwd');
const imageOne = urlParams.get('图片一');
const imageTwo = urlParams.get('图片二');
const description = urlParams.get('简介');

// 设置图标和名称
document.getElementById('appIcon').src = appIcon;
document.getElementById('appName').textContent = appName;

// 设置图片和简介
document.getElementById('imageOne').src = imageOne;
document.getElementById('imageTwo').src = imageTwo;
document.getElementById('appDescription').textContent = description;

let downloadUrlTemp = downloadLink; // 默认下载链接为传入的下载链接

// 检查下载链接是否包含 'lan'
if (downloadLink.includes('lan')) {
    // 调用 API 获取临时下载链接
    fetch(`https://api.pearktrue.cn/api/lanzou/api.php?url=${downloadLink}&pwd=${password}`)
        .then(response => response.json())
        .then(data => {
            if (data.code === 200 && data.data && data.data.downloadurl) {
                downloadUrlTemp = data.data.downloadurl; // 更新临时下载链接
            }
        })
        .catch(error => console.error('Error fetching download link:', error));
}

// 设置下载按钮点击事件
document.getElementById('downloadLink').addEventListener('click', function (e) {
    e.preventDefault();
    // 如果包含 'lan'，使用 API 返回的下载链接；否则使用原始下载链接
    window.open(downloadUrlTemp, '_blank');
});