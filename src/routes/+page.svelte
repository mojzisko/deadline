<script>
  import ProjetItem from "../components/ProjectItem.svelte";
  import Carousel from "../components/Carousel.svelte";

  const items = [
    {
      imagePath: "images/prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
    {
      imagePath: "images/prevoznik.png",
      title: "Převozník",
      href: "/prevoznik",
    },
  ];
</script>

<Carousel />
<div
  class="max-w-[1440px] m-auto w-full p-[24px] grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[20px] "
>
  {#each items as item}
    <ProjetItem
      href={item.href}
      imagePath={item.imagePath}
      title={item.title}
    />
  {/each}
</div>
