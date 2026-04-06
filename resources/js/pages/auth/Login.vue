<script setup lang="ts">
import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import TextLink from '@/components/TextLink.vue';
import AuthBase from '@/layouts/AuthLayout.vue';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/vue3';

defineProps<{
    status?: string;
    canResetPassword: boolean;
}>();
</script>

<template>
    <AuthBase title="Log in to your account" description="Enter your email and password below to log in">
        <Head title="Log in" />

        <div v-if="status" class="mb-4 text-green-600 text-center">
            {{ status }}
        </div>

        <Form
            v-bind="AuthenticatedSessionController.store.form()"
            :reset-on-success="['password']"
            v-slot="{ errors, processing }"
            class="d-flex flex-column ga-6"
        >
            <div class="ga-6">
                <div class="ga-2">
                    <v-text-field
                        label="Email address"
                        id="email"
                        type="email"
                        name="email"
                        required
                        autofocus
                        autocomplete="email"
                        placeholder="email@example.com"
                        :error-messages="errors.email"
                    />
                </div>

                <div class="ga-2">
                    <div class="d-flex align-center justify-end">
                        <TextLink v-if="canResetPassword" :href="request()" class="text-sm" :tabindex="5"> Forgot password? </TextLink>
                    </div>
                    <v-text-field
                        id="password"
                        type="password"
                        name="password"
                        required
                        autocomplete="current-password"
                        placeholder="Password"
                        label="Password"
                        :error-messages="errors.password"
                    />
                </div>

                <div class="d-flex align-center justify-between">
                    <v-checkbox label="Remember me" />
                </div>

                <v-btn type="submit" class="mt-4 w-100 text-none" :disabled="processing" data-test="login-button" color="black">Log in</v-btn>
            </div>

            <div class="text-sm text-center">
                Don't have an account?
                <TextLink :href="register()">Sign up</TextLink>
            </div>
        </Form>
    </AuthBase>
</template>
