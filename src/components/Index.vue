<script setup lang="ts">
import { ref, onMounted } from 'vue'
// defineProps<{ msg: string }>()
// function update(){
//   count.value=count.value+1
// }
onMounted(() => {
  var viewer:any = new Cesium.Viewer('cesiumContainer');
  // 添加天地图图层和天地图注记图层
  // var labelImagery = new Cesium.TiandituImageryProvider({
  //   mapStyle: Cesium.TiandituMapsStyle.CIA_C,//天地图全球中文注记服务
  //   token: "f5f540e277f65383edab9a2804e7eb2d" //由天地图官网申请的密钥
  // });
  // var vecImagery = new Cesium.TiandituImageryProvider({
  //   mapStyle: Cesium.TiandituMapsStyle.VEC_C,//天地图全球矢量地图服务
  //   token: "f5f540e277f65383edab9a2804e7eb2d" //由天地图官网申请的密钥
  // });
  // viewer.imageryLayers.addImageryProvider(vecImagery);
  // viewer.imageryLayers.addImageryProvider(labelImagery);
})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>
