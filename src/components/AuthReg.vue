<template>
  <div v-if="!accessToken" class="mb-5">
    {{ accessToken }}
    <el-button
      @click="authOrReg('auth')"
    >
      Login
    </el-button>
    <el-button
      @click="authOrReg('reg')"
    >
      Registration
    </el-button>
  </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '@/store/modules/auth.store'
const authStore = useAuthStore()

const { accessToken } = storeToRefs(authStore)

const { $routeNames } = useGlobalProperties()
const router = useRouter()

function authOrReg (type: string) {
  if (type === 'auth') {
    router.push({ name: $routeNames.login })
  }
  if (type === 'reg') {
    router.push({ name: $routeNames.registration })
  }
}

</script>
