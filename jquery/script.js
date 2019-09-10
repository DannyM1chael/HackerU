
// $ (document).ready(function(){
//     main()
// })

// function main() {
//     $ ('div').click(
//     function() {
//         $('p').hide()
//         }
//     )
// }

$ ("input").on({
        mouseenter:function(event){
        $(this).css("font-size","20px");
    },
        blur:function(){     
        this.value = validation(this)
    },
        focus:function(){
        $(this).css("background-color", "25px");
    }
 });

$("button").click(function(event) {
    $(this).slideToggle();
});

function validation(obj) {
    var value  = obj.value
    if (value === '') {
    $(obj).css("background-color", "red");
    value = 'Error'
    }
    return value
}
