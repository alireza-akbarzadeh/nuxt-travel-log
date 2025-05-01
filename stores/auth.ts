import { createAuthClient } from "better-auth/client";
import { defineStore } from "pinia";

const authClient = createAuthClient();

export const useAuthStore = defineStore("authStore", () => {
  const loading = ref<boolean>(false);
  async function signIn() {
    loading.value = true;
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
    });
    loading.value = false;
  }
  return { signIn, loading };
});
