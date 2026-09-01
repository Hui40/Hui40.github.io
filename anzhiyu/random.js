var posts=["文章/如何从电脑上卸载软件/","文章/如何在电脑上安装卡巴斯基杀毒软件/","文章/电脑主机里都装了些什么？每样东西都是用来干什么的？/","文章/如何在电脑上下载安装软件/","文章/从零开始学会如何使用Codex/","文章/网站导航/","文章/自我介绍/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };