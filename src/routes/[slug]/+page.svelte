<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ImageItemDetail from "../../components/ImageItemDetail.svelte";
  import ProjectItem from "../../components/ProjectItem.svelte";
  import Grid from "../../components/Grid.svelte";

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
          scale: 1.03,
          filter: "blur(3px)",
        },
        {
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
        },
      );
    }
  });

  const items = [
    {
      imagePath: "images/D_projects_prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/D_projects_800x600.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/D_projects_800x600.png",
      title: "Převozník",
      href: "/prevoznik",
    },
  ];
</script>

<section class="w-full">
  <img
    bind:this={imageElement}
    src={project.heroImage.src}
    alt="Hero image"
    loading="lazy"
    class="w-full mt-[-85px] md-[-76px] h-[300px] m-auto md:h-[800px] 3xl:h-[1080px] max-w-[1920px] object-cover"
  />
</section>

<section class="max-w-[1440px] mt-8 m-auto w-full p-[24px] text-white">
  <div class="flex flex-col gap-[55px]">
    <div class="flex font-basicSemibold justify-between items-center">
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
    <div class="flex flex-col gap-[10px] md:flex-row justify-between">
      <p class="text-[25px] flex-1 font-indivisibleBold">{project.subTitle}</p>
      <p class="text-[20px] flex-1 font-indivisibleMedium">{project.desc}</p>
    </div>
    <Grid>
      {#each items as item}
        <ImageItemDetail imagePath={item.imagePath} title={item.title} />
      {/each}
    </Grid>
  </div>
</section>

<section class="w-full mt-[30px] m-auto bg-greyBackground">
  <div
    class="flex flex-col font-basicSemibold max-w-[1440px] m-auto w-full p-[24px] gap-[30px]"
  >
    <h1 class="text-[20px] lg:text-[25px]">Další projekty</h1>
    <Grid>
      {#each items as item}
        <ProjectItem
          href={item.href}
          imagePath={item.imagePath}
          title={item.title}
        />
      {/each}
    </Grid>
  </div>
</section>
