import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

export class Land extends Sprite{
  constructor(){
    // 获取land图片
    const img = Sprite.getImage('land');
    // 获取canvas的宽高
    const width = DataStore.getInstance().canvas.width;
    const height = DataStore.getInstance().canvas.height;
    // 地板起点y坐标
    const y = height-img.height;
    super(img,0,0,img.width,img.height,0,y,img.width,img.height);
  }
}