<script setup lang="ts">
import { dashboard, login, register } from '@/routes';
import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Welcome" />

    <div class="pa-6 justify-lg-center pa-lg-8 d-flex flex-column align-center h-screen">
        <header class="mb-6 w-100 welcome-width">
            <nav class="d-flex align-center justify-end">
                <Link v-if="$page.props.auth.user" :href="dashboard()" as="button">
                    <v-btn variant="outlined">Dashboard</v-btn>
                </Link>
                <template v-else>
                    <Link :href="login()" as="button">
                        <v-btn variant="text">Log in</v-btn>
                    </Link>
                    <Link :href="register()" as="button">
                        <v-btn variant="outlined">Register</v-btn>
                    </Link>
                </template>
            </nav>
        </header>

        <div class="flex-lg-grow-1 d-flex w-100 align-center justify-center">
            <v-card rounded="lg" class="welcome-width flex-lg-row d-flex w-100 flex-column flex-lg-row-reverse">
                <v-img height="376px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover />
                <div class="w-lg-50">
                    <v-card-item>
                        <v-card-title>Let's get started</v-card-title>
                        <v-card-subtitle>
                            Laravel has an incredibly rich ecosystem.<br />
                            We suggest starting with the following.
                        </v-card-subtitle>
                    </v-card-item>
                    <v-card-text>
                        <v-timeline truncate-line="both" size="10" side="end" density="compact" line-inset="5">
                            <v-timeline-item>
                                <span>
                                    Read the
                                    <a href="https://laravel.com/docs" target="_blank">
                                        <span>Documentation</span>
                                    </a>
                                </span>
                            </v-timeline-item>
                            <v-timeline-item>
                                <span>
                                    Watch video tutorials at
                                    <a href="https://laracasts.com" target="_blank">
                                        <span>Laracasts</span>
                                    </a>
                                </span>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn variant="flat" class="mb-9" color="primary">Deploy now</v-btn>
                    </v-card-actions>
                </div>
            </v-card>
        </div>
    </div>
</template>

<style scoped lang="scss">
.welcome-width {
    max-width: 335px;
    @media screen and (min-width: 1279px) {
        max-width: 896px;
    }
}
</style>
