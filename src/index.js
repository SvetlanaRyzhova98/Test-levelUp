import $ from "jquery";
import "slick-carousel";
import tippy from "tippy.js";

function setVideoCenter() {
  let $box = $(".video-box");
  let height = $box.height();
  let width = $box.width();
  let new_height = width / 1.78;
  if (new_height > height) {
    $box.find("video").css({
      width: width,
      height: new_height,
      top: "-" + (new_height / 2 - height / 2) + "px",
      left: "0",
    });
  } else {
    let new_width = height * 1.78;
    $box.find("video").css({
      width: new_width,
      height: height,
      top: "0",
      left: "-" + (new_width / 2 - width / 2) + "px",
    });
  }
}

$(function () {
  setVideoCenter();
  $(window).resize(setVideoCenter);
});
//карусель
$(".reviews__sliders").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
});

// таймер
const MIN_30 = 30 * 60;
let startTimeSec = MIN_30;
setInterval(() => {
  --startTimeSec;
  if (startTimeSec < 0) {
    startTimeSec = MIN_30;
  }

  const min = Math.floor(startTimeSec / 60);
  const ostatok = startTimeSec % 60;
  const sec = ostatok < 10 ? "0" + ostatok : ostatok;
  $("#getting-started").text(min + ":" + sec);
}, 1000);

$(".scroll-button").on("click", function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".order").offset().top,
    },
    2000
  );
});
//подсказки
tippy(".name-input", {
  content: "Пример: Анастасия Киселева",
  trigger: "click",
  placement: "top-end",
});
tippy(".phone-input", {
  content: "Пример: +7 999 888 77 66",
  trigger: "click",
  placement: "top-end",
});
