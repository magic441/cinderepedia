'use strict'

//画面の要素の取得
const img_displayed = document.getElementsByClassName('img_displayed')[0];
const icon_list = document.getElementsByClassName('variable')[0];
const unit_list = document.getElementsByClassName('unit_list')[0];
const idol_name = document.getElementsByClassName('name')[0];

//初期値
//テスト用に茄子さん、最新の画像、フルサイズ
var tmp_idol = idol_data[124];
var tmp_img = tmp_idol.imgs[tmp_idol.imgs.length - 1];
var state = 'fullsize'

//画面を開いたときの処理
window.onload = () => {
    //要素の初期化
    icon_list.textContent = null;
    unit_list.textContent = null;

    let jsonObj = localStorage.getItem('tmp_idol');
    let jsObj = JSON.parse(jsonObj);    
    //初期ロードと次以降のロードで動きを変える
    if (jsObj){
        console.log('nilじゃない');
        tmp_idol = jsObj.idol;
        console.log(jsObj.idol);
        tmp_img = tmp_idol.imgs[jsObj.idx];
        state = jsObj.state;
    }
    else{
        console.log('nilだった');
        tmp_idol = idol_data[124];
        tmp_img = tmp_idol.imgs[tmp_idol.imgs.length - 1];
        state = 'fullsize';
    }

    //名前を表示
    idol_name.innerText = tmp_idol.name;
    changeImg(tmp_img, state);
    
    //icon_listにアイドルの画像一覧を表示する処理
    tmp_idol.imgs.forEach(image =>{
        let func = "changeVariableImg(" + tmp_idol.imgs.indexOf(image) + ")";
        let icon = document.createElement("img");
        icon.setAttribute('src',image.icon);
        icon.setAttribute('title',image.title);
        icon.setAttribute('class','icon');
        icon.setAttribute('onclick',func);
        icon_list.appendChild(icon);
    });

    //unit_listにユニットの画像一覧を表示する処理
    //所属ユニットの検索
    let units_belong = [];
    unit_data.forEach(unit =>{
        if(unit.member.includes(tmp_idol.name)){
            units_belong.push(unit);
        }
    });

    //所属ユニットをunit_listに表示
    units_belong.forEach(unit =>{
        //ユニット名を表示
        let unit_name = document.createElement('p');
        unit_name.innerText = unit.name;
        unit_list.appendChild(unit_name);
        //ユニットメンバーのアイコンを表示したい
        unit.member.forEach(mem =>{
            let icon = document.createElement("img");
            //idol_dataからアイドルを探す
            let tmp_member = idol_data.find(idol => idol.name === mem);
            //tmp_idolと同じ場合は表示しないようにする
            if (tmp_member.name != tmp_idol.name){
                let func = "changeTmpIdol(" + idol_data.indexOf(tmp_member) + ")";
                icon.setAttribute('src',tmp_member.imgs[0].icon);
                icon.setAttribute('class','icon');
                icon.setAttribute('onclick',func);
                unit_list.appendChild(icon);
            }
        });        
    })
}
//画像を変更する
const changeImg = (tmp_img, state) =>{
    let obj = {
        'idol': tmp_idol,
        'idx':tmp_idol.imgs.indexOf(tmp_img),
        'state':state
    }
    localStorage.setItem('tmp_idol', JSON.stringify(obj));

    switch(state){
        case 'card':
            img_displayed.setAttribute('src', tmp_img.card);
            break;
        case 'fullsize':
            img_displayed.setAttribute('src', tmp_img.fullsize);
            break;
        case 'standalone':
            img_displayed.setAttribute('src', tmp_img.standalone);
            break;
        case 'petit':
            img_displayed.setAttribute('src', tmp_img.petit);
            break;
    };
}
//stateを切り替えて画像を変える
const changeStatetoCard = () => {
    state = 'card';
    changeImg(tmp_img, state);
}
const changeStatetoFullsize = () => {
    state = 'fullsize';
    changeImg(tmp_img, state);
}
const changeStatetoStandalone = () => {
    state = 'standalone';
    changeImg(tmp_img, state);
}
const changeStatetoPetit = () => {
    state = 'petit';
    changeImg(tmp_img, state);
}
//同一アイドル内での画像の切替
const changeVariableImg = (i) =>{
    tmp_img = tmp_idol.imgs[i];
    changeImg(tmp_img, state);
}
//表示するアイドルの変更
const changeTmpIdol = (i) =>{
    tmp_idol = idol_data[i];
    tmp_img = tmp_idol.imgs[tmp_idol.imgs.length - 1];
    changeImg(tmp_img, state);
    window.onload();
}

















