import { DataStore } from "./base/DataStore.js";

// 导演类，控制游戏的逻辑，主流程
export class Director{
  constructor(){
    this.dataStore = DataStore.getInstance();
  }

  // 单例，所有人获取到的都是同一个Director
  static getInstance(){
    if(!Director.instance){
      Director.instance = new Director();
    }
    return Director.instance;
  }


  // 执行方法
  run(){
    // 获取背景图
    this.dataStore.get('background').draw();
    this.dataStore.get('land').draw();
  }
}









