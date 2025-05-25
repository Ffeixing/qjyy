document.addEventListener('DOMContentLoaded', function() {
    /**
     * 资源对象，包含了各种软件和工具的下载链接。
     * 每个类别下有多个条目，每个条目包含标题、图片 URL 和对应的下载 URL。
     * 注意：部分 URL 可能已失效或为占位符，需要实际验证和更新。
     */
    const resources = {
        "Office软件": [
            { title: "Office2003完美版", url: "https://www.123684.com/s/sBhZVv-5SZ4H", imageUrl: "https://static.codemao.cn/pickduck/SJeg-TP8yx.jpeg?hash=Fvm8HRVhNspI7Bib15eOqhNnhhl1" },
            { title: "Office2007三合一完美版", url: "https://www.123684.com/s/sBhZVv-iSZ4H", imageUrl: "https://static.codemao.cn/pickduck/SJeg-TP8yx.jpeg?hash=Fvm8HRVhNspI7Bib15eOqhNnhhl1" },
            { title: "Office2010三合一完美版", url: "https://www.123684.com/s/sBhZVv-LSZ4H", imageUrl: "https://static.codemao.cn/pickduck/B1CAlawIJg.jpeg?hash=FoPCQiA0kGPS6RL3cde4np7ESeer" },
            { title: "Office2013三合一完美版", url: "https://www.123684.com/s/sBhZVv-tSZ4H", imageUrl: "https://static.codemao.cn/pickduck/Hy93xaDUke.jpeg?hash=FgZL5SaN3JiYVqHPcm2JC4A_May6" },
            { title: "Office2016三合一完美版", url: "https://www.123684.com/s/sBhZVv-zSZ4H", imageUrl: "https://static.codemao.cn/pickduck/Hy93xaDUke.jpeg?hash=FgZL5SaN3JiYVqHPcm2JC4A_May6" },
            { title: "Office1997标准版", url: "https://www.123684.com/s/sBhZVv-BcZ4H", imageUrl: "https://static.codemao.cn/pickduck/B1rWMaPIye.jpeg?hash=FtZFcVJiw8bvk5vRIaj0LC1-6j7C" },
            { title: "Office2000标准版", url: "https://www.123684.com/s/sBhZVv-acZ4H", imageUrl: "https://static.codemao.cn/pickduck/B1rWMaPIye.jpeg?hash=FtZFcVJiw8bvk5vRIaj0LC1-6j7C" },
            { title: "Office2003标准版", url: "https://www.123684.com/s/sBhZVv-pcZ4H", imageUrl: "https://static.codemao.cn/pickduck/S1OueTv81g.jpeg?hash=Fvm8HRVhNspI7Bib15eOqhNnhhl1" },
            { title: "Office2007专业增强版", url: "https://www.123684.com/s/sBhZVv-fcZ4H", imageUrl: "https://static.codemao.cn/pickduck/S1OueTv81g.jpeg?hash=Fvm8HRVhNspI7Bib15eOqhNnhhl1" },
            { title: "Office2010专业增强版", url: "https://www.123684.com/s/sBhZVv-FtZ4H", imageUrl: "https://static.codemao.cn/pickduck/HyrigTvI1g.jpeg?hash=FoPCQiA0kGPS6RL3cde4np7ESeer" },
            { title: "Office2013专业增强版", url: "https://www.123684.com/s/sBhZVv-JcZ4H", imageUrl: "https://static.codemao.cn/pickduck/r1Rm1TPIJe.jpeg?hash=FgZL5SaN3JiYVqHPcm2JC4A_May6" },
            { title: "Office2016专业增强版", url: "https://www.123684.com/s/sBhZVv-gtZ4H", imageUrl: "https://static.codemao.cn/pickduck/r1Rm1TPIJe.jpeg?hash=FgZL5SaN3JiYVqHPcm2JC4A_May6" },
            { title: "Office2019专业增强版", url: "https://www.123684.com/s/sBhZVv-wtZ4H", imageUrl: "https://static.codemao.cn/pickduck/r1Rm1TPIJe.jpeg?hash=FgZL5SaN3JiYVqHPcm2JC4A_May6" },
            { title: "Office2021专业增强版", url: "https://www.123684.com/s/sBhZVv-ItZ4H", imageUrl: "https://static.codemao.cn/pickduck/BJ2L1TvLye.jpeg?hash=Fs25Q8QcXwcAnR1RF3cYj-WI-5Uu" },
            { title: "神龙激活工具", url: "https://wwpa.lanzouo.com/iHDsz2iqblih", imageUrl: "https://static.codemao.cn/pickduck/rksnkpDL1x.jpeg?hash=Fgynv-MLXALSvOwL_FMR49Qod4cI" },
            { title: "WPS2019专业版（教育部专用）", url: "https://www.123684.com/s/sBhZVv-6SZ4H", imageUrl: "https://static.codemao.cn/pickduck/rkZ-lpPUJl.jpeg?hash=FlQ-RlEETrQwPN6SjFRxxsxAG5Pt" },
            { title: "WPS2016专业版（中国石油）", url: "https://www.123684.com/s/sBhZVv-Z5Z4H", imageUrl: "https://static.codemao.cn/pickduck/B1TA16wIkg.jpeg?hash=FnXTPtP0ZC3HLHiNgoqXkzxiEHV3" },
        ],
        "Adoble软件": [
            { title: "Photoshop 2017", url: "https://www.123684.com/s/sBhZVv-YtZ4H", imageUrl: "https://static.codemao.cn/pickduck/HyTYbavI1x.jpeg?hash=Fj6r0szDlbuKywTbBFZYYqdXYvdd" },
            { title: "Photoshop 2018", url: "https://www.123684.com/s/sBhZVv-GtZ4H", imageUrl: "https://static.codemao.cn/pickduck/HyTYbavI1x.jpeg?hash=Fj6r0szDlbuKywTbBFZYYqdXYvdd" },
            { title: "Photoshop 2019", url: "https://www.123684.com/s/sBhZVv-y3c4H", imageUrl: "https://static.codemao.cn/pickduck/HyTYbavI1x.jpeg?hash=Fj6r0szDlbuKywTbBFZYYqdXYvdd" },
            { title: "Photoshop 2020", url: "https://www.123684.com/s/sBhZVv-PtZ4H", imageUrl: "https://static.codemao.cn/pickduck/HyTYbavI1x.jpeg?hash=Fj6r0szDlbuKywTbBFZYYqdXYvdd" },
            { title: "Photoshop 2021", url: "https://www.123684.com/s/sBhZVv-XtZ4H", imageUrl: "https://static.codemao.cn/pickduck/HyTYbavI1x.jpeg?hash=Fj6r0szDlbuKywTbBFZYYqdXYvdd" },
            { title: "Photoshop 2022", url: "https://www.123684.com/s/sBhZVv-Thc4H", imageUrl: "https://static.codemao.cn/pickduck/HyTYbavI1x.jpeg?hash=Fj6r0szDlbuKywTbBFZYYqdXYvdd" },
            { title: "Photoshop 2023", url: "https://www.123684.com/s/sBhZVv-3hc4H", imageUrl: "https://static.codemao.cn/pickduck/HyTYbavI1x.jpeg?hash=Fj6r0szDlbuKywTbBFZYYqdXYvdd" },
            { title: "Premiere Pro 2017", url: "https://www.123865.com/s/sBhZVv-dhc4H", imageUrl: "https://static.codemao.cn/pickduck/Hkvw-pwI1x.jpeg?hash=FhWrCkQd7MDI4v02nq6-6g9oWcuo" },
            { title: "Premiere Pro 2018", url: "https://www.123684.com/s/sBhZVv-63c4H", imageUrl: "https://static.codemao.cn/pickduck/Hkvw-pwI1x.jpeg?hash=FhWrCkQd7MDI4v02nq6-6g9oWcuo" },
            { title: "Premiere Pro 2019", url: "https://www.123684.com/s/sBhZVv-vhc4H", imageUrl: "https://static.codemao.cn/pickduck/Hkvw-pwI1x.jpeg?hash=FhWrCkQd7MDI4v02nq6-6g9oWcuo" },
            { title: "Premiere Pro 2020", url: "https://www.123684.com/s/sBhZVv-j3c4H", imageUrl: "https://static.codemao.cn/pickduck/Hkvw-pwI1x.jpeg?hash=FhWrCkQd7MDI4v02nq6-6g9oWcuo" },
            { title: "Premiere Pro 2021", url: "https://www.123684.com/s/sBhZVv-V3c4H", imageUrl: "https://static.codemao.cn/pickduck/Hkvw-pwI1x.jpeg?hash=FhWrCkQd7MDI4v02nq6-6g9oWcuo" },
            { title: "Premiere Pro 2022", url: "https://www.123684.com/s/sBhZVv-Hhc4H", imageUrl: "https://static.codemao.cn/pickduck/Hkvw-pwI1x.jpeg?hash=FhWrCkQd7MDI4v02nq6-6g9oWcuo" },
            { title: "Premiere Pro 2023", url: "", imageUrl: "https://static.codemao.cn/pickduck/Hkvw-pwI1x.jpeg?hash=FhWrCkQd7MDI4v02nq6-6g9oWcuo" },
            { title: " Adobe After Effects 2022", url: "https://www.123684.com/s/sBhZVv-hhc4H", imageUrl: "https://static.codemao.cn/pickduck/r1msWaPU1e.jpeg?hash=FuzisC8mEcjjzmOuV57EB8aMMG--" },
            { title: " Adobe After Effects 2023", url: "https://www.123684.com/s/sBhZVv-hhc4H", imageUrl: "https://static.codemao.cn/pickduck/r1msWaPU1e.jpeg?hash=FuzisC8mEcjjzmOuV57EB8aMMG--" },
        ],
        "音视频处理工具": [
            { title: "Tiniwow--免费PDF、视频、图像和其他在线工具", url: "https://tinywow.com", imageUrl: "https://static.codemao.cn/pickduck/ry0L1obllx.jpeg?hash=Fvm1JMDJNalNkWcevNtbsbjndp5x" },
            { title: "MP4转MP3", url: "https://www.mp4tomp3.org/", imageUrl: "https://via.placeholder.com/150/999999" },
            { title: "MP3升降调", url: "https://audio.worthsee.com/pitch/format-MP3", imageUrl: "https://via.placeholder.com/150/999999" },
            { title: "视频转GIF", url: "http://tutieshi.com/video/", imageUrl: "https://via.placeholder.com/150/888888" },
            { title: "m3u8视频在线提取", url: "http://tutieshi.com/tools/imgToBase64", imageUrl: "https://via.placeholder.com/150/777777" }
        ],
        "图片处理工具": [
            
            { title: "Tiniwow--免费PDF、视频、图像和其他在线工具", url: "https://tinywow.com", imageUrl: "https://static.codemao.cn/pickduck/ry0L1obllx.jpeg?hash=Fvm1JMDJNalNkWcevNtbsbjndp5x" },
            { title: "图片压缩", url: "http://tutieshi.com", imageUrl: "https://via.placeholder.com/150/666666" },
            { title: "视频转GIF", url: "http://tutieshi.com/video/", imageUrl: "https://via.placeholder.com/150/555555" },
            { title: " GIF合成", url: "http://tutieshi.com/compose/", imageUrl: "https://via.placeholder.com/150/444444" },
            { title: " GIF裁剪", url: "http://tutieshi.com/cut", imageUrl: "https://via.placeholder.com/150/333333" },
            { title: " 图片马赛克", url: "http://tutieshi.com/mosaic/", imageUrl: "https://via.placeholder.com/150/222222" },
            { title: " 朋友圈九宫格", url: "http://tutieshi.com/tools/gongge2", imageUrl: "https://via.placeholder.com/150/111111" },
            { title: " 图片转Base64", url: "http://tutieshi.com/tools/imgToBase64", imageUrl: "https://via.placeholder.com/150/DDDDDD" },
            { title: " 一键抠图", url: "http://remove.photos", imageUrl: "https://static.codemao.cn/pickduck/S1_YwIPAyx.jpeg?hash=FonqIoBKgeHorfpf4nwbw64dItkE" },
            { title: " 一键文字识别", url: "https://remove.photos/zh-cn/image-to-text", imageUrl: "https://static.codemao.cn/pickduck/S1_YwIPAyx.jpeg?hash=FonqIoBKgeHorfpf4nwbw64dItkE" },
             { title: "在线消除笔", url: "https://remove.photos/zh-cn/remove-unwanted-object", imageUrl: "https://static.codemao.cn/pickduck/S1_YwIPAyx.jpeg?hash=FonqIoBKgeHorfpf4nwbw64dItkE" },
             { title: " 黑白图片一键上色", url: "https://remove.photos/zh-cn/colorize", imageUrl: "https://static.codemao.cn/pickduck/S1_YwIPAyx.jpeg?hash=FonqIoBKgeHorfpf4nwbw64dItkE" },
             { title: " 图片格式转换", url: "https://remove.photos/zh-cn/image-converter", imageUrl: "https://static.codemao.cn/pickduck/S1_YwIPAyx.jpeg?hash=FonqIoBKgeHorfpf4nwbw64dItkE" },
             { title: " 增强色彩", url: "https://remove.photos/zh-cn/enhance-color", imageUrl: "https://static.codemao.cn/pickduck/S1_YwIPAyx.jpeg?hash=FonqIoBKgeHorfpf4nwbw64dItkE" },
             { title: " AI无损放大", url: "https://remove.photos/zh-cn/super-resolution", imageUrl: "https://static.codemao.cn/pickduck/S1_YwIPAyx.jpeg?hash=FonqIoBKgeHorfpf4nwbw64dItkE" },
             { title: " 一键替换新天空", url: "https://remove.photos/zh-cn/remove-sky", imageUrl: "https://static.codemao.cn/pickduck/S1_YwIPAyx.jpeg?hash=FonqIoBKgeHorfpf4nwbw64dItkE" },
             { title: " 一键擦除图片前景", url: "https://remove.photos/zh-cn/remove-foreground", imageUrl: "https://static.codemao.cn/pickduck/S1_YwIPAyx.jpeg?hash=FonqIoBKgeHorfpf4nwbw64dItkE" },
        ],

        "文档处理工具": [
            
            { title: "Tiniwow--免费PDF、视频、图像和其他在线工具", url: "https://tinywow.com", imageUrl: "https://static.codemao.cn/pickduck/ry0L1obllx.jpeg?hash=Fvm1JMDJNalNkWcevNtbsbjndp5x" },
            { title: "PDF转PPT", url: "https://www.pdfpai.com/pdf-to-powerpoint", imageUrl: "https://www.pdfpai.com/statics/images/functionToPPTX.png" },
            { title: "PDF转Word", url: "https://www.pdfpai.com/pdf-to-word", imageUrl: "https://www.pdfpai.com/statics/images/funcation_title_to_word.png" },
            { title: "PDF转Excel", url: "https://www.pdfpai.com/pdf-to-excel", imageUrl: "https://www.pdfpai.com/statics/images/functionToExcel.png" },
            { title: "PDF转图片", url: "https://www.pdfpai.com/pdf-to-images", imageUrl: "https://www.pdfpai.com/statics/images/functionToImages.png" },
            { title: "Word转PDF", url: "https://www.pdfpai.com/word-to-pdf", imageUrl: "https://via.placeholder.com/150/666666" },
            { title: "Excel转PDF", url: "https://www.pdfpai.com/excel-to-pdf", imageUrl: "https://via.placeholder.com/150/555555" },
            { title: "PPT转PDF", url: "https://www.pdfpai.com/powerpoint-to-pdf", imageUrl: "https://via.placeholder.com/150/444444" },
            { title: "图片转PDF", url: "https://www.pdfpai.com/images-to-pdf", imageUrl: "https://via.placeholder.com/150/333333" },
            { title: "加密PDF", url: "https://www.pdfpai.com/encrypt-pdf", imageUrl: "https://via.placeholder.com/150/222222" },
            { title: "解密PDF", url: "https://www.pdfpai.com/unlock-pdf", imageUrl: "https://via.placeholder.com/150/111111" },
            { title: "编辑PDF", url: "https://www.pdfpai.com/combine-pdf", imageUrl: "https://via.placeholder.com/150/DDDDDD" },
            { title: "文件DM5计算", url: "http://tutieshi.com/tools/getFileMd5", imageUrl: "https://via.placeholder.com/150/BBBBBB" }
        ],
        "免费影音": [
            { title: "可可影视", url: "https://www.kkys01.com/", imageUrl: "https://static.codemao.cn/pickduck/HkW-z2RF1e.jpeg?hash=Fgxfplu8PKe1-ljFHltKGFTJSQ_h" },
            { title: "Myfreemp3", url: "https://tools.liumingye.cn/music/#/", imageUrl: "https://static.codemao.cn/pickduck/SkmffnAt1l.jpeg?hash=FlWp9tvEd1roi4adi0cYUvThyl8u" },
            { title: "超算平台-DeepSeek", url: "https://chat.scnet.cn/#/home", imageUrl: "https://static.codemao.cn/pickduck/HkuQWnAYyl.jpeg?hash=Fm7Na6S7zdnYVZrHWfxe8OFjPxeJ" },
            
        ],
        "常见问题": [
            { title: "下载1G以上大文件", url: "https://blog.csdn.net/a13879442471/article/details/146482725", imageUrl: "" },
            { title: "检测到病毒无法下载", url: "http://app.qujiayingyong.online/other/question/", imageUrl: "" },
            { title: "「趣加应用APP」致力于优质安卓资源分享", url: "https://qjyy.mysxl.cn", imageUrl: "" }
            
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
            resourceLink.textContent = '打开';
            resourceBox.appendChild(resourceTitle);
            resourceBox.appendChild(resourceLink);
            // 添加迅雷下载按钮
            const downloadButton = document.createElement('a');
            downloadButton.href = 'https://pan.xunlei.com/s/VOHLbqhS0fCwSSUSS8zAOYWKA1?pwd=xaj3';
            //downloadButton.textContent = '迅雷下载';
            downloadButton.target = '_blank'; // 在新标签页中打开
            resourceBox.appendChild(downloadButton);
            // 添加图片
            if (resource.imageUrl) {
                const resourceImage = document.createElement('img');
                resourceImage.src = resource.imageUrl;
                resourceImage.alt = resource.title;
                resourceImage.style.width = '20px';
                resourceImage.style.borderRadius = '10px';
                resourceBox.insertBefore(resourceImage, resourceTitle);
            }
            resourceContainer.appendChild(resourceBox);
        });
    }
    // ... (existing code)
     
     // 加载资源
     function loadResources(category) {
         resourceContainer.innerHTML = '';
         resources[category].forEach(resource => {
             const resourceBox = document.createElement('div');
             resourceBox.className = 'resource-box';
     
             const resourceTitle = document.createElement('h3');
             resourceTitle.textContent = resource.title;
             resourceBox.appendChild(resourceTitle);
     
             const resourceLink = document.createElement('a');
             resourceLink.href = resource.url;
             resourceLink.target = '_blank'; //new 在新标签页中打开
             resourceLink.textContent = '✔️打开';
             resourceBox.appendChild(resourceLink);
     
             // 添加迅雷下载按钮
             const downloadButton = document.createElement('a');
             downloadButton.href = 'https://pan.xunlei.com/s/VOHLbqhS0fCwSSUSS8zAOYWKA1?pwd=xaj3';
             //downloadButton.textContent = ' （🔥备用迅雷）';
             downloadButton.target = '_blank'; // 在新标签页中打开
             resourceBox.appendChild(downloadButton);
     
             // 添加图片
             if (resource.imageUrl) {
                 const resourceImage = document.createElement('img');
                 resourceImage.src = resource.imageUrl;
                 resourceImage.alt = resource.title;
                 resourceImage.style.width = '20px';
                 resourceImage.style.borderRadius = '10px';
                 resourceBox.insertBefore(resourceImage, resourceTitle);
             }
     
             resourceContainer.appendChild(resourceBox);
         });
     }
     
     // ... (rest of your existing code)
     

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
            resourceLink.textContent = '✔️打开';
            resourceLink.target = '_blank'; //new 在新标签页中打开
            const resourceLink2 = document.createElement('a');
            

            resourceBox.appendChild(resourceTitle);
            resourceBox.appendChild(resourceLink);

            https://bfnkzy-loawyp-8080.preview.cloudstudio.work/newresource/

            resourceContainer.appendChild(resourceBox);
        });
    }
});
