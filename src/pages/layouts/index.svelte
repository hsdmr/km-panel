<script>
  import { Route } from "svelte-navigator";
  import { __ } from "src/i18n.js";
  import Breadcrump from "src/components/Breadcrump.svelte";

  $: title = $__("title.layouts");
  $: active = title;
  $: links = [{ pageUrl: "/", pageTitle: $__("title.dashboard") }];
</script>

<Route path="layouts">
  <Breadcrump {title} {active} {links} />
  <div class="container-fluid layouts">
    {$__("title.layouts")}
  </div>
</Route>
