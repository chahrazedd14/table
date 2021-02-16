const toEdit = document.querySelector('.to-edit');
const toEditElem = document.querySelector('.text');

const editInput = document.querySelector('.edit-input');
const inputBox = document.querySelector('.edit-text');

const editBtn = document.querySelector('.edit-btn');
const submitBtn = document.querySelector('.submit');

editBtn.addEventListener('click',(e)=>editText(e));
submitBtn.addEventListener('click',(e)=>submitText(e));


function editText(e){
	toggleClass();
	inputBox.value = toEditElem.innerText;
}


function submitText(e){
	toggleClass();
	toEditElem.innerText = inputBox.value;
}

function toggleClass(){
	toEdit.classList.toggle('active');
	editInput.classList.toggle('active');
}