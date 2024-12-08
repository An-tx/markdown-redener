// 定义一个基类
class Base {
    // 公共方法，非虚
    public operation(): string {
        // 调用私有方法，这里可以执行一些公共逻辑
        return this.doOperation();
    }

    // 私有方法，可以被子类覆盖
    protected doOperation(): string {
        // 基类的默认实现
        return "Base operation";
    }
}

// 定义一个派生类
class Derived extends Base {
    public operation(): string {
        return "this is Derived";
    }
    // 覆盖私有方法
    protected doOperation(): string {
        // 派生类的实现
        return "Derived operation";
    }
}

// 使用
var base = new Base();
console.log(base.operation()); // 输出 "Base operation"

const t = new Derived();
base = t;
console.log(base.operation()); // 输出 "Derived operation"