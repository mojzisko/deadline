<script>
  import ProjectItem from "../components/ProjectItem.svelte";
  import Carousel from "../components/Carousel.svelte";
  import projects from "../lib/projects";
</script>

<Carousel />
<div
  class="max-w-[1440px] m-auto w-full p-[24px] grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[20px]"
>
  {#each projects as item}
    <ProjectItem
      href={item.href}
      imagePath={item.imagePath}
      title={item.title}
    />
  {/each}
</div>
