<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { home } from '@/routes';
import { Link } from '@inertiajs/vue3';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div class="d-flex flex-column align-center ga-6 p-a6 pa-md-10 min-h-svh justify-center">
        <div class="w-100 max-w-sm">
            <div class="d-flex flex-column ga-8">
                <div class="d-flex flex-column align-center ga-4">
                    <Link :href="home()" class="d-flex flex-column align-center ga-2">
                        <div class="mb-1 d-flex h-9 w-9 align-center rounded-md justify-center">
                            <AppLogoIcon class="size-9" />
                        </div>
                    </Link>
                    <div class="text-center">
                        <h1 class="text-h6">{{ title }}</h1>
                        <p class="text-subtitle-2 text-center">{{ description }}</p>
                    </div>
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.min-h-svh {
    min-height: 100svh;
}

.max-w-sm {
    max-width: 24rem;
}

.h-9 {
    height: 2.25rem;
}
.w-9 {
    width: 2.25rem;
}

.size-9 {
    height: 2.25rem;
    width: 2.25rem;
}
</style>
