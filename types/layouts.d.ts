import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/leto/Documentos/UTN-Gestor-equipos-investigacion-main (1)/UTN-Gestor-equipos-investigacion-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}