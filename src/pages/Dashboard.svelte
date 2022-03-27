<script>
  import { Route } from "svelte-navigator";
  import { __ } from "src/i18n.js";
  import Breadcrump from "src/components/Breadcrump.svelte";

  $: title = $__("title.dashboard");
  $: active = title;
  $: links = [];
</script>

<Route path="admin">
  <Breadcrump {title} {active} {links} />
  <div class="container-fluid dashboard">
    {$__("title.dashboard")}
  </div>
</Route>
