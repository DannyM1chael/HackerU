$(document).ready(function(){
    $('#AJAXGetbtn').click(function(){
        $(this).hide(500);
        $.ajax({
            url: 'https://reqres.in/api/users',
            dataType: 'json',
            success: function(data, textStatus){
                dataHandler(data);
            },
            error: function(){
                console.log('Ошибка')
            }
        });
    });

    function dataHandler(data) {
        console.log('вывод существующих пользователей');
    };

    $('#AJAXPostbtn').click(function(){
        $.ajax({
            type: 'POST',
            url: 'https://reqres.in/api/users',
            data: JSON.stringify({
                'email': 'email',
                'first_name': 'name',
                'last_name': 'surname',
                'avatar': 'avatar'
            }),
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log('Ошибка')
            }
        });
    });

    function dataHandlerUser(data) {
        console.log('вывод новых пользователей');
    };

})