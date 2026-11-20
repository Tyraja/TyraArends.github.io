<template>
  <section v-if="press.length" id="press" class="section-block section-light">
    <div class="site-wrap">
      <h2 class="section-title">
        Articles &amp; Interviews
      </h2>

      <div class="press-grid">
        <article
          v-for="(item, i) in press"
          :key="i"
          class="press-card"
        >
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="press-card-link"
          >
            <img
              v-if="resolvePressImage(item.image)"
              :src="resolvePressImage(item.image)"
              :alt="item.title"
              class="press-thumbnail"
            />

            <div class="press-card-body">
              <div class="press-meta font-mono">
                <span>{{ item.date }}</span>
                <span v-if="item.type">{{ item.type }}</span>
              </div>

              <h3 class="font-display press-title">
                {{ item.title }}

                <q-icon
                  name="mdi-arrow-top-right"
                  size="16px"
                  class="q-ml-xs"
                />
              </h3>

              <div v-if="item.outlet" class="press-outlet">
                {{ item.outlet }}
              </div>

              <p v-if="item.description" class="press-desc">
                {{ item.description }}
              </p>
            </div>
          </a>

          <div v-else class="press-card-link">
            <img
              v-if="resolvePressImage(item.image)"
              :src="resolvePressImage(item.image)"
              :alt="item.title"
              class="press-thumbnail"
            />

            <div class="press-card-body">
              <div class="press-meta font-mono">
                <span>{{ item.date }}</span>
                <span v-if="item.type">{{ item.type }}</span>
              </div>

              <h3 class="font-display press-title">
                {{ item.title }}
              </h3>

              <div v-if="item.outlet" class="press-outlet">
                {{ item.outlet }}
              </div>

              <p v-if="item.description" class="press-desc">
                {{ item.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { press } from 'src/data/resume'
import { resolvePressImage } from 'src/data/media'
</script>

<style lang="scss" scoped>
.press-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.press-card {
  border: 1px solid rgba(12, 44, 52, 0.12);
  border-radius: 10px;
  overflow: hidden;
  background: white;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(12, 44, 52, 0.12);
  }
}

.press-card-link {
  display: block;
  color: inherit;
  text-decoration: none;
  height: 100%;
}

.press-thumbnail {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.press-card-body {
  padding: 1rem 1.1rem 1.2rem;
}

.press-meta {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  font-size: 0.72rem;
  color: #5c736e;
  margin-bottom: 0.55rem;
}

.press-title {
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0c2c34;
  margin: 0 0 0.45rem;
  line-height: 1.3;
}

.press-outlet {
  font-weight: 600;
  color: #2a7a6e;
  margin-bottom: 0.55rem;
}

.press-desc {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: #3d524e;
}

@media (max-width: 900px) {
  .press-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .press-grid {
    grid-template-columns: 1fr;
  }
}
</style>
