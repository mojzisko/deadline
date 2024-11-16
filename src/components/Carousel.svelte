<script>
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";

  const slides = [
    {
      id: 1,
      image: "images/main_images/D_projects_2560x1440_ACS.png",
      alt: "Sparta",
    },
    {
      id: 2,
      image: "images/main_images/D_projects_2560x1440_BASELINER.png",
      alt: "Project 2",
    },
    {
      id: 3,
      image: "images/main_images/D_projects_2560x1440_BIATLON.png",
      alt: "Project 3",
    },
    // Add more slides as needed
  ];

  let currentIndex = 0;
  let intervalId;
  let slideElements = [];

  // Autoplay settings
  const autoplayInterval = 2500;

  onMount(() => {
    startAutoplay();
    animateSlide(currentIndex);
  });

  onDestroy(() => {
    stopAutoplay();
  });

  function startAutoplay() {
    stopAutoplay();
    intervalId = setInterval(() => {
      nextSlide();
    }, autoplayInterval);
  }

  function stopAutoplay() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    animateSlide(nextIndex);
  }

  function animateSlide(newIndex) {
    gsap.to(slideElements[currentIndex], { opacity: 0, duration: 0.6 });
    gsap.to(slideElements[newIndex], { opacity: 1, duration: 0.6 });
    currentIndex = newIndex;
  }

  // Manual Swiping
  let isDragging = false;
  let startX = 0;
  let offsetX = 0;

  function handlePanStart(event) {
    stopAutoplay();
    isDragging = true;
    startX = event.touches[0].screenX;
  }

  function handlePanMove(event) {
    if (!isDragging) return;
    offsetX = event.touches[0].screenX - startX;
  }

  function handlePanEnd(event) {
    isDragging = false;
    const endX = event.changedTouches[0].screenX;
    const diffX = endX - startX;
    const threshold = 50; // Minimum drag distance in pixels
    if (diffX > threshold && currentIndex > 0) {
      animateSlide(currentIndex - 1);
    } else if (diffX < -threshold && currentIndex < slides.length - 1) {
      animateSlide(currentIndex + 1);
    }
    startAutoplay();
  }
</script>

<div
  class="carousel-container w-screen mt-[-85px] md-[-76px] h-[300px] md:h-[800px] 3xl:h-[1080px] max-w-[1920px] m-auto overflow-hidden relative"
  on:touchstart={handlePanStart}
  on:touchmove={handlePanMove}
  on:touchend={handlePanEnd}
>
  {#each slides as slide, i}
    <div
      class="carousel-slide absolute inset-0 opacity-0"
      bind:this={slideElements[i]}
    >
      <img
        src={slide.image}
        alt={slide.alt}
        class="object-cover w-full h-full"
        loading="lazy"
      />
    </div>
  {/each}
</div>

<style>
  .carousel-container {
    /* position: relative; */
    overflow: hidden;
  }
  .carousel-slide {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .carousel-slide:first-child {
    opacity: 1;
  }
</style>
