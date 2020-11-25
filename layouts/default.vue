<template>
  <div class="app">
    <Header />
    <Nuxt class="container"/>
    <Footer />
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
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0;
  min-height: 100vh;
  padding: 1rem;
  padding-bottom: 3.5rem;
  
  --margin-top: 7.5rem;
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
