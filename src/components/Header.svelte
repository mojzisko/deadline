<script>
  import { onMount, onDestroy } from "svelte";
  import Lottie from "./Lottie.svelte";

  let isMenuOpen = false;
  let isScrolled = false;

  // Toggle mobile menu open/close
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  // Function to detect scroll position and set header background
  function handleScroll() {
    isScrolled = window.scrollY > 0;
  }

  // Listen to the scroll event
  onMount(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<!-- <div class="max-w-[1440px] m-auto w-full"> -->

<header
  class="sticky top-0 z-50 transition-colors duration-300 z-40 rounded-[1px] font-basicSemibold"
  class:bg-transparent={!isScrolled}
  class:bg-black={isScrolled}
>
  <div
    class="flex justify-between items-center px-6 py-3 max-w-[1440px] largeDesktop:max-w-[1920px] m-auto w-full"
  >
    <!-- Logo Section -->
    <div class="text-xl font-bold">
      <a href="/"><div class="w-[100px] md:w-[120px]"><Lottie /></div></a>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-12 tracking-wide">
      <a
        href="/"
        class="text-gray-900 dark:text-white capitalize hover:text-blue-500"
        >WORK</a
      >
      <a href="/about" class="text-gray-900 dark:text-white hover:text-blue-500"
        >ABOUT</a
      >
      <a
        href="/contact"
        class="text-gray-900 dark:text-white hover:text-blue-500">CONTACT</a
      >
    </nav>

    <!-- Hamburger Menu Icon for Mobile -->
    <button
      class="md:hidden flex flex-col justify-center items-center text-gray-900 dark:text-white"
      on:click={toggleMenu}
      aria-label="Menu"
    >
      <!-- Top Line -->
      <div
        class="w-6 h-[0.175rem] bg-current my-1 transform transition-all duration-300"
        class:rotate-45={isMenuOpen}
        class:translate-y-[0.83rem]={isMenuOpen}
      ></div>

      <!-- Middle Line -->
      <div
        class="w-6 h-[0.175rem] bg-current my-1 transform transition-all duration-300"
        class:opacity-0={isMenuOpen}
      ></div>

      <!-- Bottom Line -->
      <div
        class="w-6 h-[0.175rem] bg-current my-1 transform transition-all duration-300"
        class:-rotate-45={isMenuOpen}
        class:-translate-y-2={isMenuOpen}
      ></div>
    </button>
  </div>
</header>

<!-- Mobile Menu -->
<div
  class={`md:hidden fixed top-0 left-0 h-full w-full bg-lightBackground dark:bg-darkBackground transform transition-transform duration-300 ease-in-out z-40 ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <nav class="flex flex-col justify-center items-center h-full space-y-8">
    <a
      href="/"
      class="text-2xl text-gray-900 dark:text-white hover:text-blue-500">Work</a
    >
    <a
      href="/about"
      class="text-2xl text-gray-900 dark:text-white hover:text-blue-500"
      >About</a
    >
    <a
      href="/contact"
      class="text-2xl text-gray-900 dark:text-white hover:text-blue-500"
      >Contact</a
    >
  </nav>
</div>
