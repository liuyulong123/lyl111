import { ResourceLoader } from "./js/base/ResourceLoader.js";

// 程序主类
export class Main{
  constructor(){
    console.log('game start!');
    // 获取canvas
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    // 获取资源加载器
    this.loader = new ResourceLoader();
    // 调用ResourceLoader的onloaded方法获取已经加载成功的图片
    this.loader.onloaded(map=>this.onResourceLoaded(map));

    // 画图
    /* const img = new Image();
    img.src = './res/background.png';
    img.onload = ()=>{
      this.ctx.drawImage(img,0,0,img.width,img.height);
    } */
  }

  // 资源加载成功后的方法
  onResourceLoaded(map){
    
  }

}
