$(function () {
  /*header script*/
  $(".pc_header .big_menu").on("mouseenter", function () {
    $(".pc_header .big_menu ul").stop().fadeIn(500);
    $(".pc_header_bg").stop().fadeIn(500);
    $(".pc_header").addClass("header_line");
  });
  $(".pc_header .big_menu").on("mouseleave", function () {
    $(".pc_header .big_menu ul").stop().fadeOut(500);
    $(".pc_header_bg").stop().fadeOut(500);
    $(".pc_header").removeClass("header_line");
  });

  $(".pc_header .header_right .language").on("mouseenter", function () {
    $(".pc_header .lan_menu").show();
  });
  $(".pc_header .header_right .language").on("mouseleave", function () {
    $(".pc_header .lan_menu").hide();
  });

  /*mobile modal_box script*/
  $(".mo_bar").on("click", function () {
    $(".modal_box").toggleClass("open");
  });

  $(".modal_menu .main").on("click", function () {
    let j = $(this).index();
    console.log(j);
    $(".modal_menu .main span").eq(j).css({ color: "#000" });

    if ($(this).hasClass("change")) {
      $(".modal_menu .main").removeClass("change");
    } else {
      $(".modal_menu .main").removeClass("change");
      $(this).addClass("change");
    }

    if ($(".modal_menu .main span").eq(j).hasClass("move")) {
      $(".modal_menu .main span").removeClass("move");
    } else {
      $(".modal_menu .main span").removeClass("move");
      $(".modal_menu .main span").eq(j).toggleClass("move");
    }
    $(".modal_menu .sub").slideUp();
    $(".modal_menu .sub").eq(j).stop().slideToggle();
  });
  $(".mo_lang li").on("click", function () {
    $(".mo_lang li").removeClass("country");
    $(this).addClass("country");
  });

  /*visual script*/
  $("#visual").stop().animate({ "margin-top": "0", opacity: "1" }, 1000);
  let i = 0;
  setInterval(function () {
    if (i == 3) {
      i = 0;
    } else {
      i++;
    }
    $("#visual .vi_bg li").fadeOut();
    $("#visual .vi_bg li").eq(i).fadeIn();
  }, 2000);

  /*con01 script*/
  $("#con01").stop().animate({ "margin-left": "0", opacity: "1" });

  $("#con01 li a")
    .children("div")
    .on("mouseenter", function () {
      $(this).css({ transform: "scale(1.2)" });
    });
  $("#con01 li a")
    .children("div")
    .on("mouseleave", function () {
      $(this).css({ transform: "scale(1)" });
    });

  /*con02 script*/
  let j = 1;
  $(".next").on("click", function () {
    if (j == 6) {
      j = 1;
    } else {
      j++;
    }
    $(".now").text("0" + j);
    $(".up_right,.dw_left,.dw_right").each(function () {
      $(this).find("li").fadeOut();
      $(this)
        .find("li")
        .eq(j - "1")
        .fadeIn();
    });
    //$(".right li").fadeOut();
    //$(".right li")
    //.eq(i - "1")
    //.fadeIn();
    //$(".dw_left li").fadeOut();
    //$(".dw_left li")
    //.eq(i - "1")
    //.fadeIn();
    //$(".dw_right li").fadeOut();
    //$(".dw_right li")
    //.eq(i - "1")
    //.fadeIn();
  });

  $(".up_right li a")
    .children("div")
    .on("mouseenter", function () {
      $(this).css({ transform: "scale(1.2)" });
    });

  $(".up_right li a")
    .children("div")
    .on("mouseleave", function () {
      $(this).css({ transform: "scale(1)" });
    });

  $(".dw_left li a")
    .children("div")
    .on("mouseenter", function () {
      $(this).css({ transform: "scale(1.2)" });
    });

  $(".dw_left li a")
    .children("div")
    .on("mouseleave", function () {
      $(this).css({ transform: "scale(1)" });
    });

  $(".dw_right li a")
    .children("div")
    .on("mouseenter", function () {
      $(this).css({ transform: "scale(1.2)" });
    });

  $(".dw_right li a")
    .children("div")
    .on("mouseleave", function () {
      $(this).css({ transform: "scale(1)" });
    });

  $(".prev").on("click", function () {
    if (j == 1) {
      j = 6;
    } else {
      j--;
    }
    $(".now").text("0" + j);
    $(".up_right,.dw_left,.dw_right").each(function () {
      $(this).find("li").fadeOut();
      $(this)
        .find("li")
        .eq(j - "1")
        .fadeIn();
      //$(".right li").fadeOut();
      //$(".right li")
      //.eq(i - "1")
      //.fadeIn();
      //$(".dw_left li").fadeOut();
      //$(".dw_left li")
      //.eq(i - "1")
      //.fadeIn();
      //$(".dw_right li").fadeOut();
      //$(".dw_right li")
      //.eq(i - "1")
      //.fadeIn();
    });
  });

  /*con03 script*/
  let q = 1;
  $(".next2").on("click", function () {
    if (q == 3) {
      q = 1;
    } else {
      q++;
    }
    $(".now2").text("0" + q);
    $(".up_left2,.dw_left2,.dw_right2").each(function () {
      $(this).find("li").fadeOut();
      $(this)
        .find("li")
        .eq(q - "1")
        .fadeIn();
    });
  });

  $(".prev2").on("click", function () {
    if (j == 1) {
      j = 3;
    } else {
      j--;
    }
    $(".now2").text("0" + j);
    $(".up_left2,.dw_left2,.dw_right2").each(function () {
      $(this).find("li").fadeOut();
      $(this)
        .find("li")
        .eq(j - "1")
        .fadeIn();
    });
  });

  $(".up_left2 li a")
    .children("div")
    .on("mouseenter", function () {
      $(this).css({ transform: "scale(1.2)" });
    });

  $(".up_left2 li a")
    .children("div")
    .on("mouseleave", function () {
      $(this).css({ transform: "scale(1)" });
    });

  $(".dw_left2 li a")
    .children("div")
    .on("mouseenter", function () {
      $(this).css({ transform: "scale(1.2)" });
    });

  $(".dw_left2 li a")
    .children("div")
    .on("mouseleave", function () {
      $(this).css({ transform: "scale(1)" });
    });

  $(".dw_right2 li a")
    .children("div")
    .on("mouseenter", function () {
      $(this).css({ transform: "scale(1.2)" });
    });

  $(".dw_right2 li a")
    .children("div")
    .on("mouseleave", function () {
      $(this).css({ transform: "scale(1)" });
    });

  /*con04 script*/
  $("#con04 li a")
    .children("div")
    .on("mouseenter", function () {
      $(this).css({ transform: "scale(1.2)" });
    });
  $("#con04 li a")
    .children("div")
    .on("mouseleave", function () {
      $(this).css({ transform: "scale(1)" });
    });

  /*footer 스크립트*/
  $(".icons").on("click", function () {
    $(".ft_left .icons .minus01").toggleClass("show");
    $(".site_list").toggle();
  });

  /*fixed*/
  $(".fixed").on("click", function () {
    $("html,body").animate({ scrollTop: "0" }, 500);
    return false;
  });

  /*scroll*/
  let base = -100;
  let header = $("header").offset().top;
  let visual = $("#visual").offset().top;
  let con1 = $("#con01").offset().top + base;
  let con2 = $("#con02").offset().top + base;
  let con3 = $("#con03").offset().top + base;
  let con4 = $("#con04").offset().top + base;
  console.log(header, con1, con2, con3, con4);

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();

    if (sc < con2) {
      $(".fixed").hide();
    } else {
      $(".fixed").show();
    }

    if (sc >= con2 && sc <= con3) {
      $("#con03").stop().animate({ "margin-top": "0", opacity: "1" }, 800);
    } else {
      $("#con03").css({ "margin-top": "100px", opacity: "0" });
    }

    if (sc >= con3 && sc <= con4) {
      $("#con04").stop().animate({ "margin-left": "0" }, 800);
    } else {
      $("#con04").css({ "margin-left": "1000px" });
    }
  });
});
