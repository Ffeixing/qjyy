document.addEventListener('DOMContentLoaded', function() {
    const resources = {
        "Office软件(待补全）": [
            { title: "Office2003完美版", url: "https://www.123684.com/s/sBhZVv-5SZ4H" },
            { title: "Office2007三合一完美版", url: "https://www.123684.com/s/sBhZVv-iSZ4H" },
            { title: "Office2010三合一完美版", url: "https://www.123684.com/s/sBhZVv-LSZ4H" },
            { title: "Office2013三合一完美版", url: "https://www.123684.com/s/sBhZVv-tSZ4H" },
            { title: "Office2016三合一完美版", url: "https://www.123684.com/s/sBhZVv-zSZ4H" },
            { title: "Office1997标准版", url: "https://www.123684.com/s/sBhZVv-BcZ4H" },
            { title: "Office2000标准版", url: "https://www.123684.com/s/sBhZVv-acZ4H" },
            { title: "Office2003标准版", url: "https://www.123684.com/s/sBhZVv-pcZ4H" },            
            { title: "Office2007专业增强版", url: "https://www.123684.com/s/sBhZVv-fcZ4H:" },
            { title: "Office2010专业增强版", url: "https:" },
            { title: "Office2013专业增强版", url: "https://www.123684.com/s/sBhZVv-JcZ4H" },
            { title: "Office2016专业增强版", url: "https:" },
            { title: "Office2019专业增强版", url: "https:" },
            { title: "Office2021专业增强版", url: "https:" },
            { title: "神龙激活工具", url: "https://wwpa.lanzouo.com/iHDsz2iqblih" },
            { title: "WPS2019专业版（教育部专用）", url: "https://www.123684.com/s/sBhZVv-6SZ4H" },
            { title: "WPS2016专业版（中国石油）", url: "https://www.123684.com/s/sBhZVv-ySZ4H" },
        ],
        "Adoble软件(待补全）": [
            { title: "Photoshop 2017", url: "https://www.office.com/word" },
            { title: "Photoshop 2018", url: "https://www.office.com/excel" },
            { title: "Photoshop 2019", url: "https://www.office.com/powerpoint" },
            { title: "Photoshop 2020", url: "https://www.office.com/powerpoint" },
            { title: "Photoshop 2021", url: "https://www.office.com/powerpoint" },
            { title: "Photoshop 2022", url: "https://www.office.com/powerpoint" },
            { title: "Photoshop 2023", url: "https://www.office.com/powerpoint" },
            { title: "Photoshop 2024", url: "https://www.office.com/powerpoint" },
            { title: "Premiere Pro 2017", url: "https://www.office.com/word" },
            { title: "Premiere Pro 2018", url: "https://www.office.com/excel" },
            { title: "Premiere Pro 2019", url: "https://www.office.com/powerpoint" },
            { title: "Premiere Pro 2020", url: "https://www.office.com/powerpoint" },
            { title: "Premiere Pro 2021", url: "https://www.office.com/powerpoint" },
            { title: "Premiere Pro 2022", url: "https://www.office.com/powerpoint" },
            { title: "Premiere Pro 2023", url: "https://www.office.com/powerpoint" },
            { title: "Premiere Pro 2024", url: "https://www.office.com/powerpoint" }
        ],
        "音视频处理工具": [
            { title: "MP4转MP3", url: "https://www.mp4tomp3.org/" },
            { title: "视频转GIF", url: "http://tutieshi.com/video/" },
            { title: "m3u8视频在线提取", url: "http://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html" }
        ],
        "图片处理工具": [
            { title: "图片压缩", url: "http://tutieshi.com" },
            { title: "视频转GIF", url: "http://tutieshi.com/video/" },
            { title: "Premiere Pro", url: "https://www.adobe.com/cn/products/premiere.html" }
        ],
        "图片处理工具": [
            { title: "图片压缩", url: "http://tutieshi.com" },
            { title: "视频转GIF", url: "http://tutieshi.com/video/" },
            { title: " GIF合成", url: "http://tutieshi.com/compose/" },
            { title: " GIF裁剪", url: "http://tutieshi.com/cut" },
            { title: " 图片马赛克", url: "http://tutieshi.com/mosaic/" },
            { title: " 朋友圈九宫格", url: "http://tutieshi.com/tools/gongge2" },
            { title: " 图片转Base64", url: "http://tutieshi.com/tools/imgToBase64" },
            
        ],

        "文档处理工具": [
            { title: "PDF转PPT", url: "https://www.pdfpai.com/pdf-to-powerpoint" },
            { title: "PDF转Word", url: "https://www.pdfpai.com/pdf-to-word" },
            { title: "PDF转Excel", url: "https://www.pdfpai.com/pdf-to-excel" },
            { title: "PDF转图片", url: "https://www.pdfpai.com/pdf-to-images" },
            { title: "Word转PDF", url: "https://www.pdfpai.com/word-to-pdf" },
            { title: "Excel转PDF", url: "https://www.pdfpai.com/excel-to-pdf" },
            { title: "PPT转PDF", url: "https://www.pdfpai.com/powerpoint-to-pdf" },
            { title: "图片转PDF", url: "https://www.pdfpai.com/images-to-pdf" },
            { title: "加密PDF", url: "https://www.pdfpai.com/encrypt-pdf" },
            { title: "解密PDF", url: "https://www.pdfpai.com/unlock-pdf" },
            { title: "编辑PDF", url: "https://www.pdfpai.com/combine-pdf" },
            { title: "文件DM5计算", url: "http://tutieshi.com/tools/getFileMd5" }
        ],
        "免费影音": [
            { title: "可可影视", url: "https://www.kkys01.com/" },
            { title: "Myfreemp3", url: "https://tools.liumingye.cn/music/#/" }
            
        ],
        "「趣加应用APP」": [
            
            { title: "趣加应用<br>致力于优质安卓软件资源分享<br>2024旧版", url: "https://qujia.us.kg" }
            
        ],
    };

    const nav = document.getElementById('main-nav');
    const resourceContainer = document.getElementById('resource-container');
    const searchBox = document.getElementById('search-box');

    // 动态生成导航栏
    for (const category in resources) {
        const navItem = document.createElement('a');
        navItem.href = '#';
        navItem.textContent = category;
        navItem.onclick = function() {
            loadResources(category);
            return false;
        };
        nav.appendChild(navItem);
    }

    // 加载资源
    function loadResources(category) {
        resourceContainer.innerHTML = '';
        resources[category].forEach(resource => {
            const resourceBox = document.createElement('div');
            resourceBox.className = 'resource-box';
            const resourceTitle = document.createElement('h3');
            resourceTitle.textContent = resource.title;
            const resourceLink = document.createElement('a');
            resourceLink.href = resource.url;
            resourceLink.textContent = 'open';
            resourceBox.appendChild(resourceTitle);
            resourceBox.appendChild(resourceLink);
            resourceContainer.appendChild(resourceBox);
        });
    }

    // 默认加载第一个分类的资源
    const firstCategory = Object.keys(resources)[0];
    loadResources(firstCategory);

    // 搜索功能
    searchBox.oninput = function() {
        const searchTerm = searchBox.value.toLowerCase();
        const allResources = [];
        for (const category in resources) {
            allResources.push(...resources[category]);
        }
        const filteredResources = allResources.filter(resource => 
            resource.title.toLowerCase().includes(searchTerm)
        );
        displaySearchResults(filteredResources);
    };

    // 显示搜索结果
    function displaySearchResults(results) {
        resourceContainer.innerHTML = '';
        results.forEach(resource => {
            const resourceBox = document.createElement('div');
            resourceBox.className = 'resource-box';
            const resourceTitle = document.createElement('h3');
            resourceTitle.textContent = resource.title;
            const resourceLink = document.createElement('a');
            resourceLink.href = resource.url;
            resourceLink.textContent = 'open';
            resourceBox.appendChild(resourceTitle);
            resourceBox.appendChild(resourceLink);
            resourceContainer.appendChild(resourceBox);
        });
    }
});
