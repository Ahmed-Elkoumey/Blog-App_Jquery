$(document).ready(function () {


    $.ajax({
        type: "get",
        url: " https://jsonplaceholder.typicode.com/posts",
    }).done(function (data, statuse) {
        console.log(data[0]);

        $(data).each(function (ind, ele) {

            $(".allPosts").append(`<section class='post-card' id=${ele.id}>
             <p class="post-title">${ele.title}</p>
             <div class="post-body"> ${ele.body}</div>
            <section class="post-footer">
            <a href=form.html?id=${ele.id}>Update</a>
            <button class="dlt">Delete</button>
            </section>

           
             </section>`);




        });


        // $(`.dlt`).click(function (e) {

        //    if(e.target).{

        //     alert("Are you Sure");

        //     $(e.target).remove();
        //    }
        // })


        $(document).click(function (e) {

            if ($(e.target).hasClass("dlt")) {
                var msg = confirm("Are you Sure ?!!");
                if (msg) {

                    $.ajax({
                        type: "DELETE",
                        url: `https://jsonplaceholder.typicode.com/posts/${$(e.target).closest(".post-card").attr("id")}`,

                    }).done(function (data, stus) {
                        if (stus === 'success') {

                            e.target.closest(".post-card").remove();
                        }else{
                            console.log("Error");
                        }
                    })
                }
            }
        });

    })
});