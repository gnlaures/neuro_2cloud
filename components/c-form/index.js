const cForm = document.querySelectorAll('.c-form');
const cForm__selects = document.querySelectorAll('.c-form select');

// feedbacks
function cForm__submit(e) {
    e.preventDefault();
}
function cForm__selectPlaceholderColor(select) {
    if (select.value.toLowerCase() === 'selecione') {
        select.closest('.c-field').classList.add('is-placeholder-option-selected')
        select.closest('.c-field').classList.remove('isnt-placeholder-option-selected')
    } else {
        select.closest('.c-field').classList.add('isnt-placeholder-option-selected')
        select.closest('.c-field').classList.remove('is-placeholder-option-selected')
    }
}
cForm.forEach((form) => {
    form.addEventListener('submit', cForm__submit);
});

// select
cForm__selects.forEach((select) => {
    select.addEventListener('focusin', () => {
        select.closest('.c-field').classList.add('is-focus')
        cForm__selectPlaceholderColor(select)
    })
    select.addEventListener('change', () => {
        select.closest('.c-field').classList.remove('is-focus')
        cForm__selectPlaceholderColor(select)
    })
    select.addEventListener('focusout', () => {
        select.closest('.c-field').classList.remove('is-focus')
        cForm__selectPlaceholderColor(select)
    })
});

// input type file
const cForm__attach = document.querySelectorAll('.cForm .js-field__attach');
cForm__attach.forEach((input) => {
    input.addEventListener('change', function () {
        let t = input.value.split('fakepath')[1];
        input.closest('.--file').querySelectorAll('.js-field__text')[0].value = t
    })
})