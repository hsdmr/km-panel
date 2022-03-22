<script>
  import { Route } from "svelte-navigator";
  import Breadcrump from "src/components/Breadcrump.svelte";

  let title = "Dashboard";
  let active = title;
  let links = [];
</script>

<Route path="/">
  <Breadcrump {title} {active} {links} />
  <div class="container-fluid dashboard">Dashboard</div>
  <!-- /.container-fluid -->
</Route>
