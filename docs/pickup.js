'use strict'


//画面の要素の取得
const display_area= document.getElementsByClassName('display_area')[0];

window.onload = () => {
    display_img(idol_data);
}

//配列の中身を全て表示する
const display_img = (idol_picked) =>{
    display_area.textContent = null;
    idol_picked.forEach(idol =>{
        let icon = document.createElement("img");
        let func = "changeTmpIdol(" + idol_data.indexOf(idol) + ")";
        icon.setAttribute('src',idol.imgs[0].icon);
        icon.setAttribute('class',"icon");
        icon.setAttribute('onclick', func);
        display_area.appendChild(icon);    
    });
}

//検索欄のテキストから検索する
const filter = () => {
    let name= document.getElementsByClassName('name_input')[0].value;
    let reg = new RegExp(name)
    let arr = []
    idol_data.forEach(idol =>{
    	if (idol.name.match(reg) ||idol.kana.match(reg)){
    		arr.push(idol)
    	}
    });
    display_img(arr);
}

const changeTmpIdol = (i) =>{
    let tmp_idol = idol_data[i];
    let idx = tmp_idol.imgs.indexOf(tmp_idol.imgs[tmp_idol.imgs.length - 1]);
    let state = 'fullsize';
    let obj = {
        'idol': tmp_idol,
        'idx': idx,
        'state':state
    }
    localStorage.setItem('tmp_idol', JSON.stringify(obj));
    window.location.href = './index.html';
}

