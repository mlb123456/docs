---
title: 'Vue实例常用的属性和方法'
date: 2022-9-20
categories:
 - frontEnd
tags:
 - vue
---

## 6.1 Vue实例常用属性  

+ vm.$el和vm.$data  
在new Vue()实例中经常设置el、data选项，data选项里又可以定义很多属性。
通过使用Vue实例属性vm.$el可获取到Vue实例挂载的DOM元素，返回的是一个Dom对象，（如div），获取DOM后可为其设置样式等。
使用Vue实例属性vm.$data可获取到Vue实例的data选项数据对象，返回的是一个对象。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js"></script>
    <title>Document</title>
</head>

<body>
    <div id="app">{{msg}}</div>
</body>
<script>
    let vm = new Vue({
        el: '#app',
        data: {
            msg: 'hello Vue'
        }
    })
    vm.$el.style.color = 'red';
    vm.$data.msg = 'hello world'
</script>

</html>
```

上例中的vm可以改成this吗？
不可以，在new Vue()内部才可以使用this。

+ vm.$options和vm.$refs
前面已经学习了如以下选项设置：el、data、methods、computed、wacth、钩子函数等。此外，也可以自定义一些选项，如简单属性或方法，然后通过vm.$options获取自定义选项。当然，vm.options也可以获取默认选项值，只不过el、data等有更简单的获取方式。

vm.$refs 属性可以用来获取页面中所有具有ref属性的元素，返回的时DOM元素集合对象。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js"></script>
    <title>Document</title>
</head>

<body>
    <div id="app">
        {{msg}}
        <h2 ref="hello">你好</h2>
        <p ref="world">世界</p>
    </div>
</body>
<script>
    let vm = new Vue({
        el: '#app',
        data: {
            msg: 'hello Vue'
        },
        methods: {
            show() {
                alert('11111')
            }
        },
        // 也可以自定义一些Vue选项，然后通过vm.$options.获取自定义选项
        name: 'zhangsan',
        age: 29,
        show1: function () {
            console.log('自定义选项show方法');
        }
    })
    console.log(vm.$options.name);
    console.log(vm.$options.show1());
    console.log(vm.$options.methods);

    // vm.$refs获取页面中所有具有ref属性的元素，返回的是DOM元素集合对象
    console.log(vm.$refs);
    console.log(vm.$refs.hello);
    vm.$refs.hello.style.color = 'blue'
    
</script>

</html>
```

## Vue 实例常用方法  

+ 与Vue实例生命周期相关的方法  

1. vm.$mount()  
vm.$mount()用来实现手动挂载vm实例到某个DOM元素上。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js"></script>
    <title>Document</title>
</head>

<body>
    <div id="app"></div>
</body>
<script>
    let vm = new Vue({
        // el: '#app',
        data: {
            msg: 'hello world'
        }
    })

    // Vue实例方法
    // vm.$mount()用来实现手动挂载vm实例。如果上面是通过el: "#app"告知挂载到app元素上，如果注释掉该句，则可以通过下面手动挂载
    vm.$mount('#app')
</script>

</html>
```

上面代码也可写成

```js
new Vue({
    data: {
        msg: 'hello world'
    }
}).$mount('#app')
```

2. vm.$nextTick()  
vm.$nextTick(callback)在挂载到页面DOM元素更新完成之后再执行此回调函数，一般是在修改数据之后使用该方法，以便获取更新之后的DOM元素。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js"></script>
    <title>Document</title>
</head>

<body>
    <div id="app">
        <h1 ref="title">{{name}}</h1>
    </div>
</body>
<script>
    let vm = new Vue({
        // el: '#app',
        data: {
            msg: 'hello world',
            name: '张三'
        }
    })

    // Vue实例方法
    // vm.$mount()用来实现手动挂载vm实例。如果上面是通过el: "#app"告知挂载到app元素上，如果注释掉该句，则可以通过下面手动挂载
    vm.$mount('#app')
    vm.name = '李四'
    // console.log(vm.$refs.title); 
    // console.log('======' + vm.$refs.title.textContent);//这句执行比DOM更新快 所以控制台显示的是旧值，所以要把这句放到$nextTick中执行:

    vm.$nextTick(function () {
        console.log('======' + vm.$refs.title.textContent);
    });
</script>

</html>
```

改变在data中定义的属性值，会发现在DOM已经是改变后最新的值了，而控制台打印的textContent仍然是旧值，原因是DOM还没有更新完成。Vue实现响应式并不是数据发生改变之后DOM立即变化，需要按照一定的策略进行DOM更新。而执行完vm.name = '李四'后，立即执行console.log(vm.$refs.title)代码，这个执行速度很快，比DOM更新速度要快，即下面语句先执行了，然后才更新DOM，所以控制台显示还是未更新前的数据。  
那么如何可以让console.log(vm.$refs.title.textContent);在DOM更新完成之后再执行呢？使用vm.$nextTick(callback)方法。该方法里面有一个回调函数，这个回调函数会等到DOM更新之后再执行。  

+ 为对象添加和删除属性的方法  

1. vm.$set()  
vm.$set(object,key,value)的作用是为对象添加属性key,并指定给属性值value.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js"></script>
    <title>Document</title>
</head>

<body>
    <div id="app">
        <button @click="update">修改属性</button>
        <button @click="add">添加属性</button>
        <hr>
        <h1>{{user.name}}</h1>
        <!-- dom里面获取不到 -->
        <h1>{{'---'+user.age}}</h1>
    </div>
</body>
<script>
    let vm = new Vue({
        el: '#app',
        data: {
            user: {
                name: 'jack',
                id: 1001
            }
        },
        methods: {
            update() {
                // 修改属性 dom元素也可以同步到修改的新值
                this.user.name = 'rose';
                console.log('修改成功' + this.user.name);
            },
            add() {
                // 添加属性age dom就获取不到了 可以用vm.$set()方法实现
                // this.user.age = '19'
                // console.log(this.user);

                // 这样就实现了
                this.$set(this.user, 'age', 18);
                console.log(this.user);
            }

        }
    })
</script>

</html>
```

上面添加属性时，对象里已有了属性age，但在页面没有，也就是说这张添加属性的方式不是响应式的，可以用vm.$set()方法实现响应。this.$set(this.user, 'age', 18);
这里vm可以写成this，写在new Vue()内部就行。

2. vm.$delete()  
vm.$delete(object,key)的作用是删除object对象的属性key

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js"></script>
    <title>Document</title>
</head>

<body>
    <div id="app">
        <button @click="update">修改属性</button>
        <button @click="add">添加属性</button>
        <button @click="deleteage">删除属性</button>
        <hr>
        <h1>{{user.name}}</h1>
        <h1>{{'---'+user.age}}</h1>
    </div>
</body>
<script>
    let vm = new Vue({
        el: '#app',
        data: {
            user: {
                name: 'jack',
                id: 1001
            }
        },
        methods: {
            update() {
                // 修改属性 dom元素也可以同步到修改的新值
                this.user.name = 'rose';
                console.log('修改成功' + this.user.name);
            },
            add() {
                // 添加属性age dom就获取不到了 可以用vm.$set()方法实现
                // this.user.age = '19'
                // console.log(this.user);

                // 这样就实现了
                // this.$set(this.user, 'age', 18);
                // console.log(this.user);
                if (this.user.age) {
                    this.user.age++;
                } else {
                    this.$set(this.user, 'age', 22);
                }
            },
            deleteage() {
                if (this.user.age) {
                    this.$delete(this.user, 'age');
                }
                console.log(this.user);
            }

        }

    })
</script>

</html>
```

另外，vm.delete是全局Vue.delete的别名，即可以用Vue.delete来实现，也可以vm.$delete()
