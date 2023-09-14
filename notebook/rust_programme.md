### Rc 与 Arc

通过**引用计数**的方式，允许**一个数据**资源在**同一时刻**拥有**多个所有者**

#### Rc(reference counting)

1. `Rc<T>` 是指向底层数据的**不可变的引用**，因此你无法通过它来修改数据
2. `Rc` 只能用于**同一线程**内部，想要用于线程之间的对象共享，你需要使用 `Arc`
3. `Rc<T>`是一个智能指针，实现了 **`Deref` 特征**，因此你无需先解开 `Rc` 指针，再使用里面的 `T`，而是可以直接使用 `T`

```rust
use std::rc::Rc;
fn main() {
    let a = Rc::new(String::from("hello, world"));
    //Rc::new 创建了一个指向底层字符串的智能指针  Rc<String>
    //在创建时，会将 引用计数 +1 Rc::strong_count
    
    let b = Rc::clone(&a);
	//Rc::clone()克隆了一份智能指针，此时 计数为2 ---- 浅拷贝
    //这里的clone仅仅复制了智能指针并增加计数，没有克隆底层数据
    assert_eq!(2, Rc::strong_count(&a));
    assert_eq!(Rc::strong_count(&a), Rc::strong_count(&b))
    //当a,b超出作用域后，计数会变为0
}
```



#### Arc(Atomic Rc)

1. 为什么不用Arc代替Rc？

原子化或者其它锁虽然可以带来的线程安全，但是都会伴随着性能损耗，而且这种性能损耗还不小

```rust
use std::sync::Arc;
use std::thread;

fn main() {
    let s = Arc::new(String::from("多线程漫游者"));
    for _ in 0..10 {
        let s = Arc::clone(&s);
        let handle = thread::spawn(move || {
           println!("{}", s)
        });
    }
}	
```





### Cell 和 RefCell 内部可变性

可以在拥有**不可变引用**的同时**修改**目标数据

#### Cell

1. `Cell` 和 `RefCell` 在功能上没有区别，区别在于 `Cell<T>` 适用于 `T` 实现 **`Copy`** 的情况

```rust
use std::cell::Cell;
fn main() {
  let c = Cell::new("asdf");
  let one = c.get();
  c.set("qwer");
  let two = c.get();
  println!("{},{}", one, two);
}
```

- 注意只适用于实现copy特征的类型



#### RefCella

![image-20230727154857598](assets/image-20230727154857598.png)