$(document).ready(function(){
    $('#AJAXbtn').click(function(){
        $.ajax({
            url: 'https://reqres.in/api/users',
            dataType: 'json',
            success: function(data, textStatus){
                console.log(textStatus)
                console.log(data)
            },
            error: function(){
                console.log('Bad news:(')
            }
        })
    })
})