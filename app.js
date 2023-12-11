const search = document.querySelector('input')
const list = document.querySelector('.list')
const btn = document.querySelector('button')

const drinks = [
        {title:'Maksym', price:85, size:'1 litr', img:'https://globus-online.kg/upload/iblock/603/6036d3c91adc615aaf813ed18114f643.png'},
        {title:'Sultan Chai', price:47, size:'1 litr', img:'https://static.tildacdn.com/tild6336-3130-4162-a633-613964636233/____1_.png'},
        {title:'Sherbet', price:70, size:'1 litr', img:'https://globus-online.kg/upload/iblock/04e/04ed7fc4142c6f30345cafc9987e98e3.png'}, 
        {title:'Bonaqua', price:31, size:'1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/820/198_208_140cd750bba9870f18aada2478b24840a/820e266870cbc11dc8e3504e761baa4f.png'},
        {title:'Cristal', price:51, size:'1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/aa9/198_208_140cd750bba9870f18aada2478b24840a/aa99fb10b57800f1e5a575fce35eaf65.png'},
        {title:'Legend', price:28, size:'1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/595/198_208_140cd750bba9870f18aada2478b24840a/5951a90a9e93e31472ba8804c02ee225.png'},
        {title:'Baytik', price:29, size:'1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/181/198_208_140cd750bba9870f18aada2478b24840a/181999a19a22d4eb5b540e12aef7b559.png'},
        {title:'Issyk-Ata', price:29, size: '1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/7d4/198_208_140cd750bba9870f18aada2478b24840a/7d4f27561745656f170036ab6a7620e7.png'},
        {title:'Kompot', price:50, size: '1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/d0d/198_208_140cd750bba9870f18aada2478b24840a/d0d459564167bd62e84f68cf8c702ec8.png'},
        {title: 'Dyshes', price:30, size: '1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/4c3/198_208_140cd750bba9870f18aada2478b24840a/4c34cb7ddf32b56f5f3a5d65df12c906.png'},
        {title:'Chalap', price:73, size:'1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/738/198_208_140cd750bba9870f18aada2478b24840a/73821d6504bc4f845e8e395b4b251add.png'},
        {title:'Talkan kurut', price:73, size:'1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/631/198_208_140cd750bba9870f18aada2478b24840a/631cfe10e09c645c3ffd61c8479e0f92.png'},
        {title:'Sekret', price:40, size:'1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/624/198_208_140cd750bba9870f18aada2478b24840a/624a200ed64cd78e734d143be95d1dec.png'},
        {title:'Toi', price:78, size:'1 litr', img:'https://globus-online.kg/upload/iblock/125/12584a85228241f2b572d7dd8673ac53.png'},
        {title:'Organic', price:156, size: '1 litr', img:'https://globus-online.kg/upload/resize_cache/iblock/e80/198_208_140cd750bba9870f18aada2478b24840a/e80eade1f2c42265f156e321ef1668ef.png'}
    ]

function showDrink(array){
        list.innerHTML=''

         for (const drinks of array) {
       list.innerHTML+=`
       <li>
       <h1>${drinks.title}</h1>
       <img width='100px' height='200px' src='${drinks.img}'/>
       <p>${drinks.price} som</p>
       <h4>${drinks.size}</h4>
       </li>
       `;
    
    
};
    }
   


search.onchange=()=> {
    const showFilter = drinks.filter(res=> res.title.toLowerCase()===search.value.toLowerCase());

    if (showFilter.length>0) {
        showDrink(showFilter);
        
    } else {
        list.innerHTML=''
        alert('Кечиресиз азырынча бизде бул маалымат жок')

    }

}


btn.onclick=()=>{
    const drinkList=list.querySelectorAll('li')
    if (drinkList.length === 0) {
        showDrink(drinks);
    } else {
        list.innerHTML = '';
    }
};
    


