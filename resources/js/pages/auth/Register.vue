<script setup lang="ts">
import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import AuthBase from '@/layouts/AuthLayout.vue';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/vue3';
</script>

<template>
    <AuthBase title="Create an account" description="Enter your details below to create your account">
        <Head title="Register" />

        <Form
            v-bind="RegisteredUserController.store.form()"
            :reset-on-success="['password', 'password_confirmation']"
            v-slot="{ errors, processing }"
            class="d-flex flex-column ga-6"
        >
            <div class="ga-6">
                <div class="ga-2">
                    <v-text-field
                        label="Name"
                        id="name"
                        type="text"
                        required
                        autofocus
                        autocomplete="name"
                        name="name"
                        placeholder="Full name"
                        :error-messages="errors.name"
                    />
                </div>

                <div class="ga-2">
                    <v-text-field
                        label="Email address"
                        id="email"
                        type="email"
                        required
                        autocomplete="email"
                        name="email"
                        placeholder="email@example.com"
                        :error-messages="errors.email"
                    />
                </div>

                <div class="ga-2">
                    <v-text-field
                        label="Password"
                        id="password"
                        type="password"
                        required
                        autocomplete="new-password"
                        name="password"
                        placeholder="Password"
                        :error-messages="errors.password"
                    />
                </div>

                <div class="ga-2">
                    <v-text-field
                        label="Confirm password"
                        id="password_confirmation"
                        type="password"
                        required
                        autocomplete="new-password"
                        name="password_confirmation"
                        placeholder="Confirm password"
                        :error-messages="errors.password_confirmation"
                    />
                </div>

                <Button type="submit" class="mt-2 w-100" :disabled="processing" data-test="register-user-button">
                    <LoaderCircle v-if="processing" class="h-4 w-4 animate-spin" />
                    Create account
                </Button>
            </div>

            <div class="text-sm text-center">
                Already have an account?
                <TextLink :href="login()" class="underline" :tabindex="6">Log in</TextLink>
            </div>
        </Form>
    </AuthBase>
</template>
