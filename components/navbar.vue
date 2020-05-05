<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-navbar border-main">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand">
        MCHEAP
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link to="/" class="nav-link">
              Home <span class="sr-only">(current)</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="" class="nav-link">
              Link
            </nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <nuxt-link
              id="navbarDropdown"
              to=""
              class="nav-link dropdown-toggle"

              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </nuxt-link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <nuxt-link to="" class="dropdown-item">
                Action
              </nuxt-link>
              <nuxt-link to="" class="dropdown-item">
                Another action
              </nuxt-link>
              <div class="dropdown-divider" />
              <nuxt-link to="" class="dropdown-item">
                Something else here
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {

}
</script>

<style scrope>
.bg-navbar{
    background: #000103;
    color: white;
}
.bg-main {
    background: #d90429 !important;
    color: white;
}
.border-main{
    border-bottom: 3px solid #d90429 !important;
}
</style>
