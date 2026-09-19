<template>
  <main class="HomeView">
    <main class="main">
      <Logo class="logo" />
    </main>
    <section class="footer">
      <p class="name">
        2026 - <strong>uBorn</strong> :: Engenharia de Software
      </p>
      <a href="mailto:contato@uborn.com.br" class="contact"
        >contato@uborn.com.br</a
      >
      <p class="companyid">CNPJ: <strong>51.975.973/0001-87</strong></p>
    </section>
  </main>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
</script>

<style>
.HomeView {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
}

.main {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
}
.main > .logo {
  height: 70vh;
}

.footer {
  flex: 0 0 80px;
  text-align: center;
}
.footer strong {
  font-weight: 700;
}
.footer > .contact {
  color: var(--color-text);
}
.footer > .companyid {
  font-size: 0.8rem;
}
</style>
