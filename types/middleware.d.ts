import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/home/leto/Documentos/UTN-Gestor-equipos-investigacion-main (1)/UTN-Gestor-equipos-investigacion-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}