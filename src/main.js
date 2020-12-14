const $a=$('.lastItem')
const $container=$('.container')
let color
const random=function randomHexColor() {	//随机生成十六进制颜色
	return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}
const x=localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap= xObject ||[
    {logo:'Q',color: '#fd4f49', url:'https://qq.com'},
]
console.log(hashMap)
const render =()=>{
    $a.siblings().remove()
    hashMap.forEach((node,index)=>{
        console.log(index)
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
             console.log('这里')
            e.stopPropagation()
            hashMap.splice(index, 1)
            render()
        })
    })
}
render()

$('.logo-Peng') .on('click',(e)=>{
    window.alert('你搁这点兵点将呢？')
})

$('.addButton') .on('click',()=>{
    let url = window.prompt("请问你输入的网址是傻？")
    if(url.indexOf('http')!==0){
        url= 'https://' + url
    }
    const urlfirst= url.replace("https://","")
    console .log(urlfirst[0])
    const uf= urlfirst[0]
    console.log(url)
    color= random()
    hashMap.push({logo:uf,color: color, url:url})
    render()
});
// window.onbeforeunload = () =>{
//     console.log('页面要关闭了')
//     const string  =JSON.stringify(hashMap)
//     localStorage.setItem('x',string)
// }
$(document).on('keypress',(e)=>{
    console.log(e)
    const key = e.key
    for(let i=0;i<hashMap.length;i++){
        if(hashMap[i].logo.toLowerCase() ===key){
            // window.open(hashMap[i].url)
        }
    }
})
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