import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('form'),
    textarea: document.querySelector('.feedback-form textarea')
}

const STORAGE_KEY = "feedback-form-state";
const formData = {};
const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY));


refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
});

populateTextarea();

function onTextareaInput(evt){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function populateTextarea(){
    if(parseData){
        const formKeys = Object.keys(parseData);
        formKeys.map(key => {
            refs.form.elements[key].value = parseData[key]
        })
    }}