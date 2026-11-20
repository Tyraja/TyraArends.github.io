<template>
  <section id="fieldcourse" class="section-block section-light">
    <div class="site-wrap">
      <h2 class="section-title">
        {{ fieldCourse.title }}
      </h2>

      <div class="fc-grid" :class="{ 'fc-no-photo': !photo }">
        <img
          v-if="photo"
          :src="photo"
          :alt="fieldCourse.title"
          class="fc-photo"
        />
        <div class="fc-body">
          <div class="fc-meta font-mono">
            {{ fieldCourse.location }} · {{ fieldCourse.dates }}
          </div>
          <div v-if="fieldCourse.host" class="fc-host">{{ fieldCourse.host }}</div>
          <p v-for="(para, i) in fieldCourse.blurb" :key="i" class="fc-desc">
            {{ para }}
          </p>
          <div v-if="fieldCourse.tags?.length" class="row q-gutter-sm q-mt-sm">
            <span v-for="tag in fieldCourse.tags" :key="tag" class="tech-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { fieldCourse } from 'src/data/resume'
import { resolveCruiseImage } from 'src/data/media'

const photo = computed(() => resolveCruiseImage(fieldCourse.image))
</script>

<style lang="scss" scoped>
.fc-grid {
  display: grid;
  grid-template-columns: minmax(0, 22rem) 1fr;
  gap: 1.5rem 2rem;
  align-items: start;

  &.fc-no-photo {
    grid-template-columns: 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

.fc-photo {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border: 1px solid rgba(12, 44, 52, 0.12);
  border-radius: 10px;
}

.fc-meta {
  font-size: 0.78rem;
  color: #5c736e;
}

.fc-host {
  margin: 0.35rem 0 0.75rem;
  font-weight: 600;
  color: #2a7a6e;
}

.fc-desc {
  margin: 0 0 0.75rem;
  font-size: 0.98rem;
  line-height: 1.7;
  color: #3d524e;
  max-width: 46rem;
}
</style>
