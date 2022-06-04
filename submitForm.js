//get Element By Id which is in submission.html
const title = document.getElementById('title');
const cName = document.getElementById('cName');
const num = document.getElementById('num');
const meat = document.getElementById('meat');
const soupp = document.getElementById('soupp');
const cook = document.getElementById('cook');

const param = new URLSearchParams(window.location.search);
//URLSearchParams.get() 獲取指定搜索參數的第一個值
const titles = param.get('titles');
const cusName = param.get('cusName');
const amount = param.get('amount');
const meats = param.get('meats');
const soup = param.get('soup');
const cooked = param.get('cooked');

//URLSearchParams.toString() 返回搜索參數組成的字符串
title.innerHTML = titles.toString();
cName.innerHTML = ' ' + cusName.toString();
num.innerHTML = amount.toString();
meat.innerHTML = meats.toString();
soupp.innerHTML = soup.toString();

if(cooked == 1){
  cook.innerHTML = 'You would like to cooked Rare';
}
else if(cooked == 2){
  cook.innerHTML = 'You would like to cooked Medium Rare';
}
else if(cooked == 3){
  cook.innerHTML = 'You would like to cooked Medium';
}
else if(cooked == 4){
  cook.innerHTML = 'You would like to cooked Medium Well';
}
else {
  cook.innerHTML = 'You would like to cooked Well-done';
}

//Checkbox and Textarea not done yet