$(document).ready(function(){
    $('#AJAXGetBtn').click(function(){
        $(this).hide(500);
        $.ajax({
            url: 'https://reqres.in/api/users',
            dataType: 'json',
            success: function(data, textStatus){
                dataHandler(data)
            },
            error: function(){
                console.log('There is a mistake');
            }
        });
    });

    function dataHandler(data) {
        $.each(data, function(key, i){
            if (Array.isArray(i)) {
                $.each(i, function(index, j){
                    var existUser = [
                        '<div class="profile">',
                            `<p>${j.first_name}</p>`,
                            `<p>${j.last_name}</p>`,
                            '<div id="AJAXChooseBtn">CHOOSE TEAM MEMBER',
                            '</div>',
                            '<div id="AJAXDeleteBtn">DELETE TEAM MEMBER',
                            '</div>',
                        '</div>'
                    ].join('');
                    $('.container').html(existUser);
                    $('#AJAXChooseBtn').click(function(){
                        $(this).parent().css('background-color', '#0be881');
                        $(this).hide();
                    });
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
                        console.log('удаление пользователя');
                    };
                })
            };
        });
        var addUser = [
            '<div class="profile">',
                '<div id="AJAXPostBtn">ADD NEW TEAM MEMBER',
                '</div>',
            '</div>'
        ].join('');
        $('.container').append(addUser);
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
                    console.log('There is a mistake');
                }
            });
        });
    
        function dataHandlerUser(response) {
            var addInfo = [
                '<div class="profile">',
                    '<input placeholder="first name"></input>',
                    '<input placeholder="last name"></input>',
                    '<input placeholder="email"></input>',
                    '<div id="AJAXChooseBtn">CHOOSE TEAM MEMBER',
                    '</div>',
                    '<div id="AJAXDeleteBtn">DELETE TEAM MEMBER',
                    '</div>',
                '</div>'
            ].join('');
            $('.container').append(addInfo);
        };
    };

})