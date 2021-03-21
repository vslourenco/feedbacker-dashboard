<template>
  <content-loader
    class="flex flex-col items-center rounded"
    width="100%"
    height="300px"
  >
    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="40px"
      animation-duration="2s"
    />
    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="40px"
      animation-duration="2.4s"
    />
    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="40px"
      animation-duration="2.8s"
    />
    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="40px"
      animation-duration="3.2s"
    />
  </content-loader>
</template>

<script>
import ContentLoader from '../../components/ContentLoader/index.vue';

export default {
  components: { ContentLoader },
};
</script>

<style>

</style>
