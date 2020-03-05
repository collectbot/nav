let data = [{
    'tag': '技术',
    name: 'GitHub',
    link: 'https://github.com'
}, {
    'tag': '技术',
    name: 'Node官网',
    link: 'https://nodejs.org/en/'
}, {
    'tag': '技术',
    name: 'Node中文网',
    link: 'http://nodejs.cn/'
}, {
    'tag': '技术',
    name: 'CNode社区',
    link: 'https://cnodejs.org/'
}, {
    'tag': '技术',
    name: 'Coding',
    link: 'http://nodejs.cn/'
}]

let actions = {
    'baidu': {
        'href': 'https://www.baidu.com/s',
        'name': 'word',
        'placeholder': '百度一下，你就知道'
    },
    'google': {
        'href': 'https://www.google.com/search',
        'name': 'q',
        'placeholder': 'Google 搜索'
    },
    'magi': {
        'href': 'https://magi.com/search',
        'name': 'q',
        'placeholder': 'Magi 搜索'
    },
    'sougou': {
        'href': 'https://www.sogou.com/web',
        'name': 'query',
        'placeholder': '搜狗 搜索'
    },
    'so': {
        'href': 'https://www.so.com/s',
        'name': 'q',
        'placeholder': '360 搜索'
    },
    'bing': {
        'href': 'https://cn.bing.com/search',
        'name': 'q',
        'placeholder': '微软 Bing 搜索'
    }
}



let form = document.getElementById('search-form');
let keyword = document.getElementById('keyword');

let list = document.getElementById('works-list');
let div = document.createElement('div');
div.style.width = '100%'
div.style.display = 'flex';
div.style['flex-direction'] = 'row';
div.style['justify-content'] = 'space-between'
data.forEach(function(item) {
    let a = document.createElement('a');
    a.style['font-size'] = '7rem';
    a.style['padding'] = '3rem 4rem ';
    a.target = "_blank";
    a.innerHTML = item.name;
    a.href = item.link;
    div.appendChild(a);
});
list.appendChild(div);

function searchTabClick(element) {
    console.log(element.id);
    resetSearchTab();
    element.style.color = '#484848';
    element.style['border-bottom'] = '2px solid #484848';

    form.action = actions[element.id]['href'];
    keyword.name = actions[element.id]['name'];
    keyword.placeholder = actions[element.id]['placeholder'];
}

function resetSearchTab() {
    let searchTab = document.getElementById('search-tab');
    let spans = searchTab.getElementsByTagName('span');
    for (let x = 0; x < spans.length; x++) {
        span = spans[x];
        span.style.color = '#A9A9A9';
        span.style['border-bottom'] = '2px solid transparent';
    }
}

function worksTabClick(element) {
    resetWorksTab();
    element.style.color = 'white';
    element.style.background = '#484848';
}

function resetWorksTab() {
    let searchTab = document.getElementById('works-tab');
    let spans = searchTab.getElementsByTagName('span');
    for (let x = 0; x < spans.length; x++) {
        span = spans[x];
        span.style.color = '#484848';
        span.style.background = '#F8F8F8';
    }
}