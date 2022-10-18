$(function () {
    var url = window.location.search;
    console.log(url);
    var id = url.slice(4);


    $.ajax({
        type: "GET",
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,

    }).done(function (data) {
        $(".title-info").val(data.title);
        $(".PostContent").val(data.body);
    });


    $("form").submit(function (e) {
        e.preventDefault();
        if ($('.title-info').val() === '' || $('.PostContent').val() === '') {
            alert(`The Data Is Empty Please Enter in The Fildes`);
        } 
        else{
            $.ajax({
                type: "PUT",
    
                url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    
                success: function (res, status) {
                    if (status === "success") {
                        alert(`Your New Update Is:  (${$(".title-info").val()})\n Your Data is Updated succsessfuly`);
                        window.location.href = "index.html";
                    }
                },
            });
        }
    });

    $(".cancel").click(function () {
        alert("Data didnt change");
        window.location.href = "index.html";
    });
});