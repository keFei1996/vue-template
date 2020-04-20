<template>
  <div :style="{width: `${systemInfo.width}px`, height: `${systemInfo.height}px`, backgroundColor: `${bgcolor}`, position: 'absolute', left: 0, top:0, zIndex:9998, overflow: 'hidden'}">

    <div v-for="(item, index) in skeletonRectLists" :key="index" :class="[loading == 'chiaroscuro' ? 'chiaroscuro' : '']"
         :style="{width: `${item.width}${unit}`, height: `${item.height}${unit}`, backgroundColor: 'rgb(194, 207, 214)', position: 'absolute', left: `${item.left}px`, top: `${item.top}px`}">

    </div>
    <div v-for="(item, index) in skeletonCircleLists" :key="`${index}c`" :class="[loading == 'chiaroscuro' ? 'chiaroscuro' : '']"
          :style="{ width: `${item.width}${unit}`, height: `${item.height}${unit}`, backgroundColor: 'rgb(194, 207, 214)', borderRadius: `${item.width}${unit}`, position: 'absolute', left: `${item.left}px`, top: `${item.top}px` }">

    </div>
    <div class="spinbox" v-if="loading == 'spin'">
      <div class="spin"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "skeleton",
    props: {
      bgcolor: {
        type: String,
        value: 'transparent'
      },
      selector: {
        type: String,
        value: 'skeleton'
      },
      loading: {
        type: String,
        value: 'spin'
      },
      unit: {
        type: String,
        value: 'px'
      }
    },
    data() {
      return {
        loadingAni: ['spin', 'chiaroscuro'],
        systemInfo: {},
        skeletonRectLists: [],
        skeletonCircleLists: []
      }
    },
    methods: {
      rectHandle: function () {
        let rectArr = document.querySelectorAll(`.${this.selector} .${this.selector}-rect`);
        rectArr.forEach(ev => {
          this.skeletonRectLists.push({
            width: ev.offsetWidth,
            height: ev.offsetHeight,
            top: ev.offsetTop,
            left: ev.offsetLeft
          })
        })
      },
      radiusHandle: function () {
        let radiusArr = document.querySelectorAll(`.${this.selector} .${this.selector}-radius`);
        radiusArr.forEach(ev => {
          this.skeletonCircleLists.push({
            width: ev.offsetWidth,
            height: ev.offsetHeight,
            top: ev.offsetTop,
            left: ev.offsetLeft
          })
        })
      },
    },
    created: function () {
      //默认的首屏宽高，防止内容闪现
      this.systemInfo = {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
      this.loading = this.loadingAni.includes(this.loading) ? this.loading : 'spin'
    },
    mounted: function () {
      // const that = this;
      // //绘制背景
      let skeletonDOM = document.querySelectorAll(`.${this.selector}`);
      this.systemInfo.height = skeletonDOM[0].scrollHeight + skeletonDOM[0].scrollTop;
      // //绘制矩形
      this.rectHandle();
      // //绘制圆形
      this.radiusHandle();

    },
  }
</script>

<style scoped lang="scss">
 @import "./skeleton";
</style>