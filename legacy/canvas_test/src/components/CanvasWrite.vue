<template>
  <div>
    <h3>this is canvas vue</h3>
    <input type="text" v-model="qr_text">
    <canvas id="qrCanvas" width="300" height="350"></canvas>
    <button @click="makeQR">make QR</button>
  </div>
</template>

<script>
var QRCode = require('qrcode')

export default {
  name: 'CanvasWrite',
  data(){
    return {
      qr_canvas:"",
      qr_text :"",
    }
  },
  mounted:function (){
    this.qr_canvas = this.$el.childNodes[2]
    console.log(this.qr_canvas)
  },
  methods:{
    makeQR:function(){
      let this_ = this
      let ctx = this_.qr_canvas.getContext("2d");
      ctx.clearRect(0, 0, 300, 350);
      QRCode.toDataURL(this_.qr_text,{ errorCorrectionLevel: 'H' ,width:200})
      .then(function(url){
        let img = new Image();
        img.src = url
        ctx.fillStyle = 'rgb(255,0,255)';
        ctx.fillRect(0, 0, 300, 350);
        return img
      }).then((img)=>{
        ctx.drawImage(img,50,20)
      }).then(()=>{
        ctx.font = "25px 'ＭＳ ゴシック'";
        let txw = ctx.measureText("Test");
        console.log(txw)
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillRect(50,250,200,40);
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillText("Test", 150-txw.width/2,250+30,200)
      })
    }
  },
}
</script>
