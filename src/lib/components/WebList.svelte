<section class="wrapper">
  <h5>Actively Maintained Project</h5>
  <div class="web-list">
    <a href="https://curatorian.id" target="_blank">
      <div class="btn-block">Curatorian Project</div>
    </a>
    <a href="https://kandaga.unpad.ac.id" target="_blank">
      <div class="btn-block">Kandaga Ecosystem</div>
    </a>
    <a href="https://github.com/curatorian/voile" target="_blank">
      <div class="btn-block">Voile Project</div>
    </a>
  </div>
</section>

<style>
  .wrapper {
    --at-apply: py-3;
  }

  h5 {
    --at-apply: text-orange dark:text-white;
  }

  .web-list {
    --at-apply: flex flex-col sm:flex-row items-center justify-center gap-5 pt-2;
  }

  a {
    --at-apply: no-underline;
  }

  .btn-block {
    --at-apply: bg-dark-50 min-w-60 p-2 rounded text-white shadow transition-all-500;
  }

  .btn-block:hover {
    --at-apply: transition-all-500 font-600 bg-orange text-white shadow-orange-3 shadow-md;
  }
</style>
