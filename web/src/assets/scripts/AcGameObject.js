const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
    }

    start() {   // 只执行一次
    }

    update() {  //每一帧执行一次，除了第一帧之外
    }
    destroy() {     // 删除之前执行
        this.on_destroy();
        for (let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

// eslint-disable-next-line no-unused-vars
const step = () => {
    requestAnimationFrame(step)
}

requestAnimationFrame(step)