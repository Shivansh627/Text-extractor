function submission(event) {
    event.preventDefault();

    let resultshow = document.getElementsByClassName('result')[0];
    resultshow.innerHTML = 'Loading...'
    var formData = new FormData();
    formData.append('image', $('#fileInput')[0].files[0]);
    $.ajax({
        method: 'POST',
        url: 'https://api.api-ninjas.com/v1/imagetotext',
        headers: {'X-Api-Key': 'RDw7cooEfA6/iN9TugVAYQ==43XKRg6W2JrovDkI'},
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (result) {
            let texts = result.map(item => item.text)
            let text = texts.join(' ')
            resultshow.innerHTML = text;
        },
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);
            resultshow.innerHTML = 'Failed to load'
        }
    });
}