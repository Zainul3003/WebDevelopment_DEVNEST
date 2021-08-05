const list = document.getElementbyId('list');
const form = document.querySelector('form');
const item = document.getElementbyId('item');


form.addEventListener('submit',(e) =>{
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value ="";
});

list.addEventListener('click' , (e) => {
  if(e.target.classList.conatins('checked'))
    {
      e.target.rmove();
    }
  else{
    e.target.classList.add('checked');
  }
  storage();
});
