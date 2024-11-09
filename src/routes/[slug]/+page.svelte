<script>
  import { onMount } from "svelte";
  import gsap from "gsap";

  export let data;

  let project = data.project;

  // happy happy haaaaaappyyyy

  console.log("project", project);

  let imageElement;

  onMount(() => {
    if (imageElement) {
      gsap.fromTo(
        imageElement,
        {
          scale: 1.04,
          filter: "blur(5px)",
          y: 30,
        },
        {
          scale: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        }
      );
    }
  });
</script>

<section class="w-full">
  <img
    src={project.heroImage.src}
    alt="Hero image"
    loading="lazy"
    class="w-full mt-[-76px] h-[300px] md:h-[900px] 3xl:h-[1080px] object-cover "
  />
</section>

<section class="max-w-[1440px] mt-8  m-auto w-full p-[24px] text-white">
  <div class="flex flex-col gap-[55px]">
    <div class="flex font-basicSemibold  justify-between items-center">
      <h1 class="text-[40px] lg:text-[48px]">
        {project.title}
      </h1>
      <a
        href="/"
        class="rounded-[5px] left-4 px-3 pb-3 pt-2 text-white bg-white bg-opacity-30 leading-none"
      >
        zpět
      </a>
    </div>
    <div class="flex flex-col gap-[10px] md:flex-row justify-between ">
      <p class="text-[25px] flex-1 font-indivisibleBold">{project.subTitle}</p>
      <p class="text-[20px] flex-1 font-indivisibleMedium">{project.desc}</p>
    </div>
  </div>
</section>
