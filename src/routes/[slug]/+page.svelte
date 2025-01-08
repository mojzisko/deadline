<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import gsap from "gsap";
  import ImageItemDetail from "../../components/ImageItemDetail.svelte";
  import ProjectItem from "../../components/ProjectItem.svelte";
  import Grid from "../../components/Grid.svelte";
  import projects from "../../lib/projects";

  export let data;

  let project = data.project;

  const filteredProjects = projects
    .filter((item) => !item.href.includes($page.params.slug))
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 5);

  let imageElement;

  onMount(() => {
    if (imageElement) {
      gsap.fromTo(
        imageElement,
        {
          scale: 1.03,
          filter: "blur(3px)",
        },
        {
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
        }
      );
    }
  });
</script>

<section class="w-full">
  <img
    bind:this={imageElement}
    src={project.heroImage.src}
    alt="Hero image"
    loading="lazy"
    class="w-full lg:mt-[-100px] mt-[-76px] md:mt-[-85px] h-auto 3xl:aspect-none aspect-[4/3] 2xl:h-[800px] 3xl:h-[1080px] max-w-[1920px] object-cover"
  />
</section>

<section class="max-w-[1440px] mt-8 m-auto w-full p-[24px] text-white">
  <div class="flex flex-col gap-[55px]">
    <div class="flex font-basicSemibold gap-2 justify-between items-center">
      <h1 class="text-[32px] lg:text-[48px] uppercase">
        {project.title}
      </h1>
      <a
        href="/"
        class="rounded-[5px] left-4 px-3 pb-3 pt-2 text-white bg-white bg-opacity-30 leading-none"
      >
        zpět
      </a>
    </div>
    <div class="flex flex-col gap-[10px] md:flex-row justify-between">
      <p class="text-[24px] flex-1 font-indivisibleBold uppercase">
        {@html project.subTitle}
      </p>
      <p class="text-[20px] flex-1 font-indivisibleMedium">{project.desc}</p>
    </div>
    {#if project.detailImages}
      <Grid>
        {#each project.detailImages as item}
          <ImageItemDetail imagePath={item.src} />
        {/each}
      </Grid>
    {/if}
  </div>
</section>

<section class="w-full mt-[30px] m-auto bg-greyBackground">
  <div
    class="flex flex-col font-basicSemibold max-w-[1440px] m-auto w-full p-[24px] gap-[30px]"
  >
    <h1 class="text-[20px] lg:text-[25px]">Další projekty</h1>
    <Grid>
      {#each filteredProjects as item}
        <ProjectItem
          href={item.href}
          imagePath={item.imagePath}
          title={item.title}
        />
      {/each}
    </Grid>
  </div>
</section>
