document.addEventListener("DOMContentLoaded", () => {
  const autoplayVideos = Array.from(document.querySelectorAll("video[autoplay]:not(.comparison-video)"));
  const comparisonVideos = Array.from(document.querySelectorAll(".comparison-video"));
  const comparisonPrev = document.querySelector(".comparison-nav.prev");
  const comparisonNext = document.querySelector(".comparison-nav.next");

  autoplayVideos.forEach((video) => {
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  });

  if (!comparisonVideos.length) {
    return;
  }

  let activeComparisonIndex = comparisonVideos.findIndex((video) => video.classList.contains("is-active"));
  if (activeComparisonIndex < 0) {
    activeComparisonIndex = 0;
  }

  function showComparison(index) {
    comparisonVideos.forEach((video, videoIndex) => {
      const isActive = videoIndex === index;
      video.classList.toggle("is-active", isActive);

      if (isActive) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });

    activeComparisonIndex = index;
  }

  comparisonPrev?.addEventListener("click", () => {
    showComparison((activeComparisonIndex - 1 + comparisonVideos.length) % comparisonVideos.length);
  });

  comparisonNext?.addEventListener("click", () => {
    showComparison((activeComparisonIndex + 1) % comparisonVideos.length);
  });

  showComparison(activeComparisonIndex);
});
