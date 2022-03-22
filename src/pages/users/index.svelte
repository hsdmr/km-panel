<script>
    import { Route } from "svelte-navigator";
    import Breadcrump from "src/components/Breadcrump.svelte";

    let title = "Users";
    let active = title;
    let links = [
        {pageUrl: "/", pageTitle: "Dashboard"}
    ];
</script>

<Route path="users">
    <Breadcrump {title} {active} {links} />
    <div class="container-fluid user">User</div>
</Route>
