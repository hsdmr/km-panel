<script>
    import { Route } from "svelte-navigator";
    import Breadcrump from "src/components/Breadcrump.svelte";

    let title = "Layouts";
    let active = title;
    let links = [
        {pageUrl: "/", pageTitle: "Dashboard"}
    ];
</script>

<Route path="layouts">
    <Breadcrump {title} {active} {links} />
    <div class="container-fluid layouts">Layouts</div>
</Route>
