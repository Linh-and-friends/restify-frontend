import { useUserStore } from "~/stores/user"

const noAuthRoute: Record<string,boolean> = {
  '/login': true,
  '/signup': true,
}
export default defineNuxtRouteMiddleware( (to, from) => {
  const userStore = useUserStore();
  if (!noAuthRoute[to.path]) {
     userStore.checkLoggedIn(true);
  }
})
  