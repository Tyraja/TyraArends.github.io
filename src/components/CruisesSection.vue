<template>
  <section id="cruises" class="section-block section-light">
    <div class="site-wrap">
      <h2 class="section-title">
        Research Cruises
      </h2>
      <p class="cruise-total font-mono">
        {{ totalDays }} days at sea · {{ cruises.length }} cruises
      </p>

      <div class="cruise-list">
        <article
          v-for="(cruise, i) in displayedCruises"
          :key="i"
          class="cruise-item"
        >
          <div class="cruise-meta font-mono">
            <div>{{ cruise.year }}</div>
            <div v-if="cruise.days">{{ cruise.days }} days</div>
          </div>
          <div class="cruise-body">
            <h3 class="font-display cruise-title">
              {{ cruise.title }}
              <span v-if="cruise.vessel" class="cruise-sub"> — {{ cruise.vessel }}</span>
            </h3>
            <p class="cruise-desc">{{ cruise.description }}</p>
            <div v-if="cruise.tags?.length" class="row q-gutter-sm q-mt-sm">
              <span v-for="tag in cruise.tags" :key="tag" class="tech-tag">{{ tag }}</span>
            </div>
            <button
              v-if="cruiseImage(cruise)"
              type="button"
              class="cruise-photo"
              :aria-label="`View photo from ${cruise.title}`"
              @click="openPhoto(cruise)"
            >
              <img
                :src="cruiseImage(cruise)"
                :alt="`${cruise.title} ${cruise.year}`"
              />
              <span class="cruise-photo-hint font-mono">View photo</span>
            </button>
          </div>
        </article>
      </div>

      <div v-if="canToggle" class="row justify-center q-mt-xl">
        <button type="button" class="expand-btn font-mono" @click="expanded = !expanded">
          {{ expanded ? 'Show fewer cruises' : 'Show all cruises' }}
          <q-icon :name="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'" size="18px" class="q-ml-xs" />
        </button>
      </div>
    </div>

    <q-dialog v-model="photoOpen" maximized transition-show="fade" transition-hide="fade">
      <div class="photo-backdrop flex flex-center" @click="photoOpen = false">
        <q-btn
          flat
          round
          dense
          icon="close"
          color="white"
          size="lg"
          class="photo-close"
          @click.stop="photoOpen = false"
        />
        <img
          v-if="activePhoto"
          :src="activePhoto.src"
          :alt="activePhoto.alt"
          class="photo-full"
          @click.stop
        />
      </div>
    </q-dialog>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { cruises, cruiseSettings } from 'src/data/resume'
import { resolveCruiseImage } from 'src/data/media'

const expanded = ref(false)
const photoOpen = ref(false)
const activePhoto = ref(null)

const cruiseLimit = cruiseSettings.collapsedCount ?? 4

const totalDays = computed(() =>
  cruises.reduce((sum, c) => sum + (c.days || 0), 0)
)

const displayedCruises = computed(() => {
  if (expanded.value) return cruises
  return cruises.slice(0, cruiseLimit)
})

const canToggle = computed(() => cruises.length > cruiseLimit)

function cruiseImage (cruise) {
  return resolveCruiseImage(cruise.image)
}

function openPhoto (cruise) {
  const src = cruiseImage(cruise)
  if (!src) return
  activePhoto.value = { src, alt: `${cruise.title} ${cruise.year}` }
  photoOpen.value = true
}
</script>

<style lang="scss" scoped>
.cruise-total {
  margin: -0.5rem 0 1.5rem;
  font-size: 0.8rem;
  color: #5c736e;
}

.cruise-list {
  display: flex;
  flex-direction: column;
}

.cruise-item {
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

.cruise-meta {
  font-size: 0.76rem;
  color: #5c736e;
  padding-top: 0.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.cruise-title {
  font-size: clamp(1.1rem, 2.2vw, 1.35rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0c2c34;
  margin: 0 0 0.5rem;
  line-height: 1.25;
}

.cruise-sub {
  font-weight: 500;
  color: #2a7a6e;
}

.cruise-desc {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.7;
  color: #3d524e;
  max-width: 46rem;
}

.cruise-photo {
  appearance: none;
  display: block;
  margin-top: 1rem;
  padding: 0;
  border: 1px solid rgba(12, 44, 52, 0.12);
  border-radius: 10px;
  overflow: hidden;
  background: #eef4f2;
  max-width: min(100%, 22rem);
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  &:hover {
    border-color: rgba(42, 122, 110, 0.45);
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(12, 44, 52, 0.12);
  }
}

.cruise-photo-hint {
  display: block;
  padding: 0.55rem 0.75rem;
  font-size: 0.72rem;
  color: #5c736e;
  background: rgba(255, 255, 255, 0.65);
}

.expand-btn {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(42, 122, 110, 0.35);
  background: transparent;
  color: #2a7a6e;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #2a7a6e;
    background: rgba(42, 122, 110, 0.08);
  }
}

.photo-backdrop {
  background: rgba(12, 44, 52, 0.96);
  width: 100%;
  height: 100%;
  position: relative;
  padding: 3.5rem 1.25rem 1.5rem;
}

.photo-close {
  position: absolute;
  top: 16px;
  right: 24px;
  z-index: 10;
}

.photo-full {
  max-width: min(92vw, 1100px);
  max-height: 88vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 6px;
}
</style>
