window.onload = function () {

    let idCounter = 5;

    addFirstProducts("Помідори", 2);
    addFirstProducts("Печиво", 3);
    addFirstProducts("Сир", 4);

    $(".my-addition-button").click(
        function () {
            // $(this).parent().children("input").val(parseInt($(this).parent().children("input").val()) + 1);
            $(this).siblings("input").val(parseInt($(this).siblings("input").val()) + 1);
            $("#" + $(this).parent().parent().attr("id") + "buy").find("span").html(parseInt($(this).siblings("input").val()));
            if ($(this).siblings("input").val() > 1) {
                $(this).siblings(".my-subtraction-button").css("opacity", "1");
            }
        });

    $(".my-subtraction-button").click(
        function () {
            if ($(this).siblings("input").val() > 1) {
                $(this).siblings("input").val(parseInt($(this).parent().children("input").val()) - 1);
                $("#" + $(this).parent().parent().attr("id") + "buy").find("span").html(parseInt($(this).siblings("input").val()));
            }

            if ($(this).siblings("input").val() == 1) {
                $(this).css("opacity", "0.5");
            }
        });


    $(".my-delete-button").click(function () {

        var a = $(this).parent().parent();
        $(this).parent().parent().slideUp(200);

        setTimeout(function () {
            a.remove()
        }, 200);


        $("#" + $(this).parent().parent().attr("id") + "buy").remove();
    });

    $(".my-button").click(
        function () {

            if ($("#input-field").val() !== "") {
                let product_on_the_left = $("#1").clone(true);
                product_on_the_left.find("label").find("input").val($("#input-field").val());
                product_on_the_left.attr("id", idCounter);

                $(".my-sub-container-left-side").append(product_on_the_left);
                product_on_the_left.slideDown();
                product_on_the_left.css("display", "flex");


                let product_on_the_right = $("#1buy").clone(true);
                product_on_the_right.find("div").html($("#input-field").val());
                product_on_the_right.css("display", "flex");
                product_on_the_right.attr("id", idCounter + "buy");

                idCounter++;

                product_on_the_right.appendTo("#left");


                $("#input-field").val("");
            }
        }
    );

    $(".my-buy-button").click(
        function () {
            var a = $(this);

            if ($(this).html() === "Куплено") {

                $(this).parent().parent().find("label").find("input").fadeOut(300);

                setTimeout(function () {
                    a.parent().parent().find("label").find("input").css("text-decoration", "line-through");
                }, 300);

                $(this).parent().parent().find("label").find("input").fadeIn(300);

                $(this).parent().parent().find(".my-minus-textarea-plus-container").fadeOut(300);

                setTimeout(function () {
                    a.parent().parent().find(".my-minus-textarea-plus-container").css("display", "flex");
                    a.parent().parent().find(".my-addition-button").hide();
                    a.parent().parent().find(".my-subtraction-button").hide();
                    a.parent().parent().find(".my-textarea-counter").hide().fadeIn(300);
                }, 300);

                $(this).fadeOut(300);
                $(this).siblings(".my-delete-button").fadeOut(300);

                setTimeout(function () {
                    a.html("Не куплено")
                }, 300);

                $(this).fadeIn(300);

                let id = $(this).parent().parent().attr("id") + "buy";
                let element = $("#" + id).clone(true);
                $("#" + id).remove();
                element.css("text-decoration", "line-through");
                element.appendTo("#bought");

            } else {
                $(this).parent().parent().find("label").find("input").fadeOut(300);

                setTimeout(function () {
                    a.parent().parent().find("label").find("input").css("text-decoration", "none");
                }, 300);

                $(this).parent().parent().find("label").find("input").fadeIn(300);

                a.parent().parent().find(".my-textarea-counter").fadeOut(300);

                setTimeout(function () {
                    a.parent().parent().find(".my-addition-button").fadeIn(300);
                    a.parent().parent().find(".my-subtraction-button").fadeIn(300);
                    a.parent().parent().find(".my-textarea-counter").fadeIn(300);
                }, 300);


                $(this).fadeOut(300);

                setTimeout(function () {
                    a.html("Куплено")
                    a.siblings(".my-delete-button").fadeIn(300);
                }, 300);

                $(this).fadeIn(300);

                let id = $(this).parent().parent().attr("id") + "buy";
                let element = $("#" + id).clone(true);
                $("#" + id).remove();
                element.css("text-decoration", "none");
                element.appendTo("#left");
            }

        });

    function addFirstProducts(product_name, id) {
        let product_on_the_left = $("#1").clone(true);

        // product_on_the_left.css("visibility", "visible");
        product_on_the_left.find("label").find("input").val(product_name);
        product_on_the_left.attr("id", id);
        $(".my-sub-container-left-side").append(product_on_the_left);
        product_on_the_left.slideDown();
        product_on_the_left.css("display", "flex");

        let product_on_the_right = $("#1buy").clone(true);
        product_on_the_right.find("div").html(product_name);
        product_on_the_right.css("display", "flex");
        product_on_the_right.attr("id", id + "buy");
        $("#left").append(product_on_the_right);
    }
    // function f() {
    //     if (($(this).siblings("input").val() > 1)) {
    //         $(this).css("opacity", "1");
    //     }
    // }

};
