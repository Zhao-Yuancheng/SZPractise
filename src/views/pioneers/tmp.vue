<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
   <v-fab icon="mdi-arrow-left" size="small" style="position:fixed; top:20px;left:10px" @click="router.back()"></v-fab>
</template>

