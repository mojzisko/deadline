<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { goto } from "$app/navigation";
  import gsap from "gsap";

  export let imagePath;
  export let title;
  export let href;

  let titleElement;

  function handleClick(event) {
    event.preventDefault();
    goto(href);
  }

  function handleMouseEnter() {
    gsap.to(titleElement, { x: 5, duration: 1.5, ease: "power2.out" });
  }

  function handleMouseLeave() {
    gsap.to(titleElement, { x: 0, duration: 1.5, ease: "power2.out" });
  }

  function inViewport(node) {
    const opacity = tweened(0, { duration: 1500, easing: cubicOut });
    const scale = tweened(1.05, { duration: 1500, easing: cubicOut });
    const blur = tweened(5, { duration: 1500, easing: cubicOut });

    opacity.subscribe((value) => (node.style.opacity = value));
    scale.subscribe((value) => (node.style.transform = `scale(${value})`));
    blur.subscribe((value) => (node.style.filter = `blur(${value}px)`));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            opacity.set(1);
            scale.set(1);
            blur.set(0);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      },
    };
  }

  function hoverEffect(node) {
    const handleMouseEnter = () => {
      node.style.transition = "transform 1s ease-in-out";
      node.style.transform = "scale(1.04)";
    };
    const handleMouseLeave = () => {
      node.style.transition = "transform 1s ease-in-out";
      node.style.transform = "scale(1)";
    };
    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return {
      destroy() {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      },
    };
  }
</script>

<button
  on:click={handleClick}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  sveltekit:prefetch
  sveltekit:navigate
  class="relative rounded-[15px] font-basicSemibold group overflow-hidden"
>
  <img
    use:hoverEffect
    use:inViewport
    src={imagePath}
    alt={title}
    class="w-full h-auto hover:cursor-pointer"
  />

  <div
    bind:this={titleElement}
    class="absolute bottom-4 rounded-[5px] left-4 px-3 py-3 text-white bg-black bg-opacity-70"
    style="background: rgba(0, 0, 0, 0.7);"
  >
    <p class="text-sm !leading-none md:text-base">{title}</p>
  </div>
</button>

<style>
  img {
    opacity: 0; /* Maintain initial opacity to 0 for the fade-in effect */
  }
</style>
