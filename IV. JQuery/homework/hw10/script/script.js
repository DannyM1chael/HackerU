$(document).ready(function(){
    $('#AJAXGetBtn').click(function(){
        $(this).hide(500);
        $.ajax({
            url: 'https://reqres.in/api/users',
            dataType: 'json',
            success: function(data, textStatus){
                console.log(data);
                dataHandler(data);
            },
            error: function(){
                console.log('There is mistake')
            }
        });
    });

    function dataHandler(data) {
        var existUser = [
            '<div>',
                `<img>${data.avatar}`,
                `<p>${data.first_name}</p>`,
                `<p>${data.last_name}</p>`,
                '<div id="AJAXChooseBtn">CHOOSE TEAM MEMBER',
                '</div>',
                '<div id="AJAXDeleteBtn">DELETE TEAM MEMBER',
                '</div>',
            '</div>'
        ].join('');
        var newUser = [
            '<div id="AJAXPostBtn">ADD NEW TEAM MEMBER',
            '</div>',
        ].join('');
        $('.container').append(existUser);
        $('.container').append(newUser);
    };

    $('#AJAXPostBtn').click(function(){
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
                dataHandlerUser(response);
            },
            error: function(){
                console.log('There is mistake')
            }
        });
    });

    function dataHandlerUser(response) {
        console.log('вывод новых пользователей');
    };

    $('#AJAXDeleteBtn').click(function(){
        $.ajax({
            type: 'DELETE',
            url: 'https://reqres.in/api/users',
            success: function(response){
                dataHandlerUser(response);
            },
            error: function(){
                console.log('There is mistake')
            }
        });
    });

    function dataHandlerUser(response) {
        console.log('удаление новых пользователей');
    };



})