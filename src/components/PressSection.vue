<template>
  <section v-if="press.length" id="press" class="section-block section-light">
    <div class="site-wrap">
      <h2 class="section-title">
        Articles &amp; Interviews
      </h2>

      <div class="press-list">
        <article
          v-for="(item, i) in press"
          :key="i"
          class="press-item"
        >
          <div class="press-meta font-mono">
            <div>{{ item.date }}</div>
            <div v-if="item.type">{{ item.type }}</div>
          </div>
          <div class="press-body">
            <h3 class="font-display press-title">
              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="press-link"
              >
                {{ item.title }}
                <q-icon name="mdi-arrow-top-right" size="16px" class="q-ml-xs" />
              </a>
              <span v-else>{{ item.title }}</span>
            </h3>
            <div v-if="item.outlet" class="press-outlet">{{ item.outlet }}</div>
            <p v-if="item.description" class="press-desc">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { press } from 'src/data/resume'
</script>

<style lang="scss" scoped>
.press-list {
  display: flex;
  flex-direction: column;
}

.press-item {
  display: grid;
  grid-template-columns: minmax(7rem, 9rem) 1fr;
  gap: 1rem 1.75rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(12, 44, 52, 0.1);

  &:last-child {
    border-bottom: 1px solid rgba(12, 44, 52, 0.1);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }
}

.press-meta {
  font-size: 0.76rem;
  color: #5c736e;
  padding-top: 0.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.press-title {
  font-size: clamp(1.1rem, 2.2vw, 1.35rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0c2c34;
  margin: 0 0 0.35rem;
  line-height: 1.25;
}

.press-link {
  color: #0c2c34;
  text-decoration: none;

  &:hover {
    color: #1a6fb5;
  }
}

.press-outlet {
  font-weight: 600;
  color: #2a7a6e;
  margin-bottom: 0.5rem;
}

.press-desc {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.7;
  color: #3d524e;
  max-width: 46rem;
}
</style>
