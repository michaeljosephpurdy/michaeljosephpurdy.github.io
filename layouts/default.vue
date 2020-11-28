<template>
  <div class="app">
    <Header class="header" />
    <Nuxt class="container" />
    <Footer class="footer" />
  </div>
</template>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-C4GZNTYBRF');
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: inline-block;

  margin: 0;
  padding: 1rem;
}
@media only screen and (min-width : 1000px) {
  .container {
    padding-left: 18rem;
    padding-right: 18rem;
  }
}
a {
  text-decoration: none !important;
  color: black !important;
}
.footer {
  margin-top: auto !important;
}
</style>
