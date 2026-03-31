(function () {
  "use strict";

  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-target");

      tabs.forEach(function (t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      document.querySelectorAll(".tab-panel").forEach(function (panel) {
        panel.classList.remove("active");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      var panel = document.getElementById(target);
      if (panel) {
        panel.classList.add("active");
      }
    });
  });

  function markMissing(slot) {
    if (!slot.classList.contains("missing")) {
      slot.classList.add("missing");
    }
  }

  document.querySelectorAll(".media-slot img").forEach(function (img) {
    var slot = img.closest(".media-slot");
    if (!slot) {
      return;
    }

    img.addEventListener("error", function () {
      markMissing(slot);
    });

    if (img.complete && img.naturalWidth === 0) {
      markMissing(slot);
    }
  });

  document.querySelectorAll(".media-slot video").forEach(function (video) {
    var slot = video.closest(".media-slot");
    if (!slot) {
      return;
    }

    video.addEventListener("error", function () {
      markMissing(slot);
    });

    setTimeout(function () {
      if (video.networkState === 3 || (video.readyState === 0 && video.currentSrc)) {
        markMissing(slot);
      }
    }, 1200);
  });
})();
