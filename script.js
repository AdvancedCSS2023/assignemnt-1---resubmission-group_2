const options = {
    root: null,
    treshold: 0,
    rootMargin: "-250px",
  };

  function observeScene(sceneClass, toggleClass) {
    const scenes = document.querySelectorAll(sceneClass);
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        console.log(entry.target);
        entry.target.classList.toggle(toggleClass);
        observer.unobserve(entry.target);
      });
    }, options);
    scenes.forEach((section) => {
      observer.observe(section);
    });
  }

  observeScene(".sky__sceneOne", "morning");
  observeScene(".sky__sceneTwo", "day");
  observeScene(".sky__sceneThree", "evening");
  observeScene(".sky__sceneFour", "night");