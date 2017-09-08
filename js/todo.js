$(document).ready(function(){
  submitForm()
});

function submitForm(){
  $('form').on('submit', (e)=>{
    e.preventDefault()
    let item = $('#item').val()
    $('#list ol')[0].innerHTML +=
    `<li>${item}</li>`
  })
}
