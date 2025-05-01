








// 模拟的展示数据，每一项为字典，包含图标、名称、下载链接、密码、简介、图片一和图片二
const 展示 = [
    {
        icon: 'https://static.codemao.cn/coco/player/unstable/ry1lmVmBR.image/png?hash=FhiUR8VAw8GzPW5pUBl_WRAgo7Pq',
        name: '网络不好或浏览器版本过低，云数据加载失败',
        link: 'https://wwpa.lanzouo.com/ilRrX28trkmj',
        pwd: '7mne',
        简介: '【安卓App】趣加应用--致力于优质资源分享！！下载App吧，上千资源、分享资源、发帖子、互动交流…发现无限精彩，尽在趣加应用App～',
        图片一: 'https://static.codemao.cn/coco/player/unstable/rkzG7E7B0.image/jpeg?hash=FgwGIrFRb7UY-TcvEZZQC-gkNZc0',
        图片二: 'https://static.codemao.cn/coco/player/unstable/B1IMXNmSA.image/jpeg?hash=Flk95183JykeiVGXVsUDdfxMfYSe'
    },
    {
        icon: 'https://static.codemao.cn/coco/player/unstable/H14dzL6gR.image/jpeg?hash=FrJI06kduFrCkLh2wXFJ9UQWAMZI',
        name: '快对5.0',
        link: 'https://wwb.lanzouo.com/i2jCa1ybv9if',
        pwd: 'i1bv',
        简介: '【安卓App】无广告，官方旧版本，支持截图',
        图片一: 'https://static.codemao.cn/coco/player/unstable/rk23fL6eA.image/jpeg?hash=FknayI7GxpLIrWCWyrl2ejsHckL2',
        图片二: 'https://static.codemao.cn/coco/player/unstable/rk1TMIalR.image/jpeg?hash=FtzeO6lo7_Sp5xTte_D2jJjAzx_Y'
    },
    {
        icon: 'https://static.codemao.cn/coco/player/unstable/S1vIg-RX0.image/png?hash=FoGZfNW6Y7x9zyoLPuuEo7MXPX_z',
        name: '网飞猫',
        link: 'https://dl.ncat1.app/#app',
        pwd: '',
        简介: '【多端兼容】网飞猫官方版，免费畅看全网影视',
        图片一: 'https://static.codemao.cn/coco/player/unstable/S1kvlb07A.image/png?hash=FvbY6Jk33bAieXaxJsq6nfEgJFk6',
        图片二: 'https://static.codemao.cn/coco/player/unstable/SkrDe-C7A.image/png?hash=Fkbo-fe-r2mdhCxBeiCmzR7l5Xjd'
    },
    {
        icon: 'https://static.codemao.cn/coco/player/unstable/H1AJn1lbR.image/png?hash=FngWqISkQLOOa0ux7SVkkB7ftQDF',
        name: '百度地图10.0',
        link: 'https://wwb.lanzouo.com/iLIdI1vhlnfe',
        pwd: '1o6s',
        简介: '【安卓App】百度地图10.0小米定制版提取版，无广告，最简洁  ',
        图片一: 'https://static.codemao.cn/coco/player/unstable/HyR2oJx-R.image/png?hash=FvLlf6hqXeUVJfZVZKZt_pQah-Og',
        图片二: 'https://static.codemao.cn/coco/player/unstable/Skd0sJxbA.image/jpeg?hash=FkVhHa0hhTCM3VS5uftjbwLUk3Fq'
    },
    {
        icon: 'https://static.codemao.cn/coco/player/unstable/BJ62ZCkZA.image/png?hash=FjJcioGE3BmpuEJN-7UMtdtydrHo',
        name: '抖音大屏版',
        link: 'https://wwb.lanzouo.com/iumGU1vhlpef',
        pwd: 'babb',
        简介: '【安卓App】本应用为抖音9.9大屏版，提取自小爱音箱，可扫码登录，支持安卓4版本所有旧设备，也可覆盖其他版本',
        图片一: 'https://static.codemao.cn/coco/player/unstable/BkVT-0yZC.image/png?hash=FpPypn-Dyuiy2ByWcYz4WHw0EKd4',
        图片二: 'https://static.codemao.cn/coco/player/unstable/BkupbCk-R.image/png?hash=FpPypn-Dyuiy2ByWcYz4WHw0EKd4'
    },

    {
        icon: 'https://static.codemao.cn/coco/player/unstable/Hym153pf0.image/png?hash=FrOaclLQyC_Ta_eMTzKnVi-pucWh',
        name: '快手10.5官方精简版',
        link: 'https://wwb.lanzouo.com/iD4cM1yh6y8b',
        pwd: 'h8pb',
        简介: '【安卓App】快手 官方内部版 v10.5.31基本功能正常 10m，可登录',
        图片一: 'https://static.codemao.cn/coco/player/unstable/ByNTK2pGR.image/png?hash=FgGxLLByEt15oOEPjcybPGUhmN7-',
        图片二: 'https://static.codemao.cn/coco/player/unstable/SJ_aYhpGC.image/png?hash=FhvLOpZa1Q-PY8RdBguG3M5MtjN6'
    },


    {
        icon: 'https://static.codemao.cn/coco/player/unstable/H12xk7ZBA.image/png?hash=FgyK4fhzrNnvKyMXLb1aUl7sWqeF',
        name: '「推广」趣加应用官方QQ群',
        link: 'https://qm.qq.com/q/logPbDZGNi',
        
        简介: '手机打开本页点击下载直达',
        图片一: '',
        图片二: '',
    },

    {
        icon: 'https://static.codemao.cn/coco/player/unstable/HJ3D2TrSC.image/jpeg?hash=FrKBraNzxRPfJW_cSV1eTCf2kQzd',
        name: ' WPS Office Pro',
        link: 'https://wwb.lanzouo.com/iidBq21l2aeb',
        pwd: 'cb6i',
        简介: '【安卓App】WPS Office企业版的安卓移动端。首次安装打开后可以试用30天，需要激活码激活。7G2HE-JR8KL-ABB9D-Y7789-GLNFL',
        图片一: 'https://static.codemao.cn/coco/player/unstable/rylunpHHC.image/jpeg?hash=FsIT9zJAHUXXyQjdLkGdZS1uGJzX',
        图片二: 'https://static.codemao.cn/coco/player/unstable/ryXOhTrBC.image/jpeg?hash=FmkgZqNzok3mJhhPLbMfCDbMkzVK'
    },

    {
        icon: 'https://static.codemao.cn/pickduck/SJujcSn60.jpeg?hash=FlAagEo0yl_Pgq5ZyAHUN-33k2VW',
        name: '趣加音乐0.0.4',
        link: 'https://wwpa.lanzouo.com/i4Hqh2864ybg',
        pwd: 'as7c',
        简介: '【安卓App】听--趣加音乐   官方免费音乐App，畅听全网音乐',
        图片一: 'https://static.codemao.cn/pickduck/B1rbsH36R.jpeg?hash=FkfwtMl96re5gYxuBlwsqsRDdLTf',
        图片二: 'https://static.codemao.cn/pickduck/rkwzoHhaC.jpeg?hash=Foxqd0T4g1SsStBUMKhGum1ibU1O'
    },

    {
        icon: '',
        name: '下载App，体验完整版',
        link: 'https://wwpa.lanzouo.com/ilRrX28trkmj',
        pwd: '7mne',
        简介: '出于多重因素考虑，网页端无法同步资源的时时最新更新，仅展示部分优质资源。        上千优质资源、分享资源、互动评论、发帖子…下载App，享完整体验',
        图片一: '',
        图片二: ''
    },

    // 可以继续添加其他项
];

// 初始化应用列表
function initAppList() {
    const appList = document.getElementById('appList');
    appList.innerHTML = ''; // 清空列表

    展示.forEach(item => {
        // 创建一个列表项
        const listItem = document.createElement('div');
        listItem.className = 'app-item';
        
        // 图标
        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.className = 'app-icon';
        
        // 名称
        const name = document.createElement('div');
        name.className = 'app-name';
        name.textContent = item.name;

        listItem.appendChild(icon);
        listItem.appendChild(name);

        // 点击事件，点击后跳转到app.html并传递数据
        listItem.onclick = function() {
            const params = new URLSearchParams();
            params.append('icon', item.icon);
            params.append('name', item.name);
            params.append('link', item.link);
            params.append('pwd', item.pwd);
            params.append('简介', item.简介);
            params.append('图片一', item.图片一);
            params.append('图片二', item.图片二);

            // 跳转到app.html并传递参数
            window.location.href = 'app.html?' + params.toString();
        };

        // 将列表项添加到应用列表中
        appList.appendChild(listItem);
    });
}

// 搜索功能
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredData = 展示.filter(item => item.name.toLowerCase().includes(searchTerm));
    
    // 更新列表显示
    const appList = document.getElementById('appList');
    appList.innerHTML = ''; // 清空列表
    filteredData.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'app-item';

        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.className = 'app-icon';
        
        const name = document.createElement('div');
        name.className = 'app-name';
        name.textContent = item.name;

        listItem.appendChild(icon);
        listItem.appendChild(name);
        
        listItem.onclick = function() {
            const params = new URLSearchParams();
            params.append('icon', item.icon);
            params.append('name', item.name);
            params.append('link', item.link);
            params.append('pwd', item.pwd);
            params.append('简介', item.简介);
            params.append('图片一', item.图片一);
            params.append('图片二', item.图片二);

            window.location.href = 'app.html?' + params.toString();
        };

        appList.appendChild(listItem);
    });
});

// 初始化时显示所有应用
initAppList();