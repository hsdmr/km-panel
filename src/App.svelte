<script>
  import Translator from "src/Translator.svelte";
  import { __ } from "src/i18n.js";
  import { Router } from "svelte-navigator";
  import Nav from "src/layouts/Nav.svelte";
  import MainSidebar from "src/layouts/MainSidebar.svelte";
  import ControlSidebar from "src/layouts/ControlSidebar.svelte";
  import Footer from "src/layouts/Footer.svelte";
  import Users from "src/pages/users/index.svelte";
  import Layouts from "src/pages/layouts/index.svelte";
  import Dashboard from "src/pages/Dashboard.svelte";
</script>

<div class="wrapper">
  <Translator>
    <Router>
      <!-- Navbar -->
      <Nav />
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <MainSidebar />

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <div class="content">
          <Dashboard />
          <Users />
          <Layouts />
        </div>
      </div>
      <!-- /.content-wrapper -->

      <!-- Control Sidebar -->
      <ControlSidebar />
      <!-- /.control-sidebar -->

      <!-- Main Footer -->
      <Footer />
    </Router>
  </Translator>
</div>
