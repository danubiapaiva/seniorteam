$(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
});

$("#btnFormEmail").on("click", () => {
    var nome        = $("#name").val();
    var email       = $("#email").val();
    var subject     = $("#subject").val();
    var message     = $("#message").val();

    $.ajax({
        type: 'POST',
        url: "http://localhost:3000/sendEmail",
        data: JSON.stringify({
            "nome": nome,
            "email": email,
            "subject": subject,
            "message": message
        }),
        success: function(e) {
            console.log("sucesso")
        },
        error: function(e) {
            console.log(e.responseJSON.error.message);
            console.log(e.responseJSON.error.code);
        },
        dataType: "json",
        contentType: "application/json"
    });
})
