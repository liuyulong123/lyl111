import { Sprite } from "../base/Sprite.js";

// 小鸟类
export class Birds extends Sprite{
  constructor(){
    const img = Sprite.getImage('birds');
    super(img,0,0,img.width,img.height,0,300,img.width,img.height);
  }
}