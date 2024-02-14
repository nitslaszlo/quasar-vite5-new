<script setup lang="ts">
  import { computed } from "vue";
  import { useUserStore } from "stores/userStore";
  import { useAppStore } from "stores/appStore";
  import LoginDialogComponent from "components/LoginDialogComponent.vue";

  const usersStore = useUserStore();
  const appStore = useAppStore();

  const anyLoggedUser = computed(() => (usersStore.getLoggedUser ? true : false));
</script>

<template>
  <q-page>
    <div class="row window-height flex-center justify-evenly">
      <q-btn
        v-if="!appStore.showLoginDialog"
        class="shadow-10"
        color="info"
        data-cy="btnLoginLogout"
        data-test="btnLoginLogout"
        :label="anyLoggedUser ? 'Show logout dialog' : 'Show login dialog'"
        no-caps
        @click="appStore.showLoginDialog = true"
      />
      <LoginDialogComponent email="student001@jedlik.eu" password="student001" :show-dialog="appStore.showLoginDialog" />
    </div>
  </q-page>
</template>

<style scoped></style>
