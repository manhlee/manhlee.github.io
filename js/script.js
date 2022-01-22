$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Chào bạn!',
        text: 'Manh Lê muốn gửi lời chúc đến bạn!',
        imageUrl: 'img/my-img.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#000055',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button pÃ³ition
function moveButton() {
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
});

$('#yes').click(function() {
    $('.content').hide(200);
    Swal.fire({
        width: 900,
        confirmButtonText: 'Nhận lời chúc!',
        background: "#da2c2c",
        title: 'Năm mới không nên tham lam nha :))',
        text: "Kính chúc anh chị em một năm mới tràn đầy niềm vui và hạnh phúc .Vui trong sức khỏe, trẻ trong tâm hồn, khôn trong lý tưởng, trưởng thành trong mọi lĩnh vực!",
        confirmButtonColor: '##cbb42d',
        onClose: () => {
            $('.content').show(200);
            }
    })
})
