const $a=$('.lastItem')
const $container=$('.container')
let color
const random=function randomHexColor() {	//随机生成十六进制颜色
	return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}
const x=localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap= xObject ||[
    {logo: "b", color: "#7dc726", url: "https://baidu.com"},
    {logo: "m", color: "#8873e4", url: "https://music.163.com/#"},
    {logo: "z", color: "#dafeea", url: "https://www.zhangxinxu.com/"},
    {logo: "j", color: "#5a6dad", url: "https://juejin.cn/"},
    {logo: "t", color: "#c1005b", url: "https://taobao.com"},
    {logo: "m", color: "#2eae92", url: "https://music.163.com/"},
    {logo: "q", color: "#6914c6", url: "https://qq.com"},
    {logo: "g", color: "#187894", url: "https://github.com/"},
]
console.log(hashMap)
const render =()=>{
    $a.siblings().remove()
    hashMap.forEach((node,index)=>{
        const $b =$(`
        <div class="item item-x" style="background: ${node.color};">
            
            <div class="close">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                    </svg>
            </div>
            <div class="logo-first">${node.logo}</div>
            
        </div>
        `).insertBefore($a)
        $b.on('click',()=>{
            window.open(node.url)
        })
        $b.on('click','.close',(e)=>{
            e.stopPropagation()
            if (window.confirm("是否删除该站点?")) { 
                hashMap.splice(index, 1)
                render()
            }else{ }    
        })
    })
}
render()

$('.logo-Peng') .on('click',(e)=>{
    window.alert('你搁这点兵点将呢？')
})





$('.addButton') .on('click',()=>{
    let url = window.prompt("请问你输入的网址是啥？")
    if(url.indexOf('http')!==0){
        url= 'https://' + url
    }
    const urlfirst= url.replace("https://","")
    .replace('http://', '')
    .replace('www.', '')
    .replace(/\/.*/, '')

    console .log(urlfirst)
    const uf= urlfirst[0]
    color= random()
    hashMap.push({logo:uf,color: color, url:url})
    render()
});
window.onbeforeunload = () =>{
    console.log('页面要关闭了')
    const string  =JSON.stringify(hashMap)
    localStorage.setItem('x',string)
}
$(document).on('keypress',(e)=>{
    console.log(e)
    const key = e.key
    for(let i=0;i<hashMap.length;i++){
        if(hashMap[i].logo.toLowerCase() ===key){
             window.open(hashMap[i].url)
        }
    }
})

$('.searchForm') .on('keypress',(e)=>{
 e.stopPropagation()
})
