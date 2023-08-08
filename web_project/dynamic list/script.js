const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'dynamic list.';

document.body.appendChild(info);
document.body.appendChild(list);

let plus = document.querySelector("#plus");


html.onclick = function(){

const listItem = document.createElement('li');
plus.onclick = function() {
  
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);
}    

//e.stopPropagation();：在列表项点击事件中，使用 e.stopPropagation() 来阻止事件冒泡。这意味着点击列表项时不会触发父元素或祖先元素上的点击事件。
listItem.onclick = function() {
    const listContent = prompt('Enter new content for your list item or delete this item');
    if (!listContent) {
        list.removeChild(listItem);
    } else {
        this.textContent = listContent;
    }
  }
}