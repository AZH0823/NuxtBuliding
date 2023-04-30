<template>
  <div class="container mx-auto col-span-2 ">
    <div  class="block py-5 px-3 my-12 mx-auto max-w-[500px] cursor-pointer border-dashed border rounded border-[#1351b4] hover:bg-[rgb(217,227,243)] text-[#1351b4] hover:text-white" >
      <label for="upload">
         <i class="mr-2"><fa :icon="['fas', 'cloud']" /></i>
          Click here U can upoladImages
          <input type="file" class="hidden" id="upload" accept="image" @change="ImgagehandlerChange($event)" multiple/>
      </label>
      <button @click="downloadImage" v-show="dataUrl" class="ml-2">| 下载</button>
    </div>
    <canvas ref="myCanvas" class="m-5 mx-auto">
    </canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataUrl:'',
      CANVASWIDTH:800,

    }
  },
  methods: {
    ImgagehandlerChange(e) {
      const files = [...e.target.files]
      const images = []
      for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const image = new Image();

      // 設置圖片加載完成後的回調函數
      image.onload = () => {
        images.push(image);

        // 當所有圖片都加載完成後，進行圖片合成
        if (images.length === files.length) {
          this.composeImages(images);
        }
      };

      // 使用 URL.createObjectURL 將文件轉換為 URL
        image.src = URL.createObjectURL(file);
      }
    },
    composeImages(images){
      const canvas = this.$refs.myCanvas
      const CANVASHEIGHT = this.CalcCanvasHeight(images)

      canvas.width = this.CANVASWIDTH;
      canvas.height = CANVASHEIGHT;


      const ctx = canvas.getContext('2d');
      let _dy = 0

      for(let i = 0; i < images.length; i++){
        console.log(`第${i+ 1}`)
        const MAX_WIDTH = this.CANVASWIDTH;
        const MAX_HEIGHT = 415;

        const widthRatio = MAX_WIDTH / images[i].width;
        const heightRatio = MAX_HEIGHT / images[i].height;
        const ratio = Math.min(widthRatio, heightRatio);

        const canvasWidth = images[i].width * ratio;
        const canvasHeight = images[i].height * ratio;
        console.log(canvasWidth, canvasHeight)
        ctx.drawImage(images[i], 0, 0, images[i].width, images[i].height, 0, _dy, canvasWidth, canvasHeight);
        _dy += canvasHeight
         console.log('_dy',_dy)
      }


      // 將 canvas 轉換為 Data URL
      this.dataUrl = canvas.toDataURL();

      // 將編碼後的圖片字符串發送到後端
      // 可以使用 AJAX 或表單提交等方式發送數據到後端
      console.log(this.dataUrl);
    },
     downloadImage() {
      const downloadLink = document.createElement("a");
      downloadLink.href = this.dataUrl;
      downloadLink.download = "canvas_image.png";
      downloadLink.click();
    },
    // composeImages(images){
    //   console.log(`壓縮`,images)
    //   const canvas = this.$refs.myCanvas
    //   console.log(this.$refs.myCanvas)
    //    // 創建 canvas 元素

    //   // 設置 canvas 寬度和高度
    //   canvas.width = 800;
    //   canvas.height = images.length*700;

    //   // 獲取 canvas 的繪圖上下文
    //   const ctx = canvas.getContext('2d');
    // 繪製圖片到 canvas
    // image：必須，指定要繪製的圖片或 canvas 對象。
    // sx：可選，指定源圖片的繪製起點橫坐標。
    // sy：可選，指定源圖片的繪製起點縱坐標。
    // sWidth：可選，指定源圖片的寬度。
    // sHeight：可選，指定源圖片的高度。
    // dx：可選，指定目標圖片的繪製起點橫坐標。
    // dy：可選，指定目標圖片的繪製起點縱坐標。
    // dWidth：可選，指定目標圖片的寬度。
    // dHeight：可選，指定目標圖片的高度。
    // 其中，dWidth 和 dHeight 參數可以用來對圖片進行縮放。如果將 dWidth 和 dHeight 設置為圖片的實際寬度和高度，則圖片不會被縮放。
    // 如果將 dWidth 和 dHeight 設置為比圖片實際寬度和高度小的值，則圖片會被縮小。
    // 如果將 dWidth 和 dHeight 設置為比圖片實際寬度和高度大的值，則圖片會被放大。
    //   let _dy = 0
    //   for (let i = 0; i < images.length; i++) {
    //     ctx.drawImage(images[i], 0, 0,images[i].naturalWidth, images[i].naturalHeight,0, _dy,800,600);
    //     _dy += images[i].naturalHeight
    //   }

    //   // 將 canvas 轉換為 Data URL
    //   const dataUrl = canvas.toDataURL();

    //   // 將編碼後的圖片字符串發送到後端
    //   // 可以使用 AJAX 或表單提交等方式發送數據到後端
    //   console.log(dataUrl);
    // },
    CalcCanvasHeight(images){
      let CANVASHEIGHT = 0
       for (let i = 0; i < images.length; i++) {
        const MAX_WIDTH = this.CANVASWIDTH;
        const MAX_HEIGHT = 415;

        const widthRatio = MAX_WIDTH / images[i].width;
        const heightRatio = MAX_HEIGHT / images[i].height;
        const ratio = Math.min(widthRatio, heightRatio);

        const canvasHeight = images[i].height * ratio;
        CANVASHEIGHT += canvasHeight
      }
      return CANVASHEIGHT
    }
  }
}
</script>

<style>

</style>
