<script>
  import { Route } from "svelte-navigator";
  import { __ } from "src/i18n.js";
  import Breadcrump from "src/components/Breadcrump.svelte";

  $: title = $__("title.users");
  $: active = title;
  $: links = [{ pageUrl: "admin", pageTitle: $__("title.dashboard") }];
</script>

<Route path="admin/users">
  <Breadcrump {title} {active} {links} />
  <div class="container-fluid users">
    {$__("title.users")}
  </div>
</Route>
