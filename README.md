# web-
尚硅谷中htmlcssjsReact代码。第二次使用git，记录一下

### JavaScript

##### 遍历相关

- ```js
  - for          最基本的循环    用来专门遍历数组的      可以使用break和continue
  
  - for in       专门用来遍历对象的属性的，这个属性能遍历到还是遍历不到要看这个属性是不是
    ​     // for in 效率最低，因为除了遍历自身以外还要遍历原型
  
  - for of       
    - ​     // 专门遍历可迭代的数据  ...  (能用可迭代，就用三点) 
    - ​     // 数组有迭代器
    - ​     // 对象没有
  
  - forEach      是一个数组的方法，效率极高  但是不可以使用break和continue
  ```



##### React打基础

- ```
  map
  - 参数
  - `callback`
    - 生成新数组元素的函数，使用三个参数：   
    - `currentValue`
      -   `callback` 数组中正在处理的当前元素。 
    - `index`可选  
      - `callback` 数组中正在处理的当前元素的索引。  
    - `array`可选  
      - `map` 方法调用的数组。  
  - `thisArg`可选
    - 执行 `callback` 函数时值被用作`this`。
    
  ```

  

##### Vue打基础

- ```js
  object.keys(obj)   //返回的是参数对象的属性组成的数组，可以用数组的方法forEach去遍历对象
  
  //例如
  Object.keys(obj).forEach(item => console.log(item,obj[item]))
  
  ```

- ```js
  // Object.defineProperty
          // 这个方法在为对象添加或者修改     属性为响应式属性
          /* 
          语法
              Object.defineProperty(obj, prop, descriptor)
                参数
                  obj
                      要定义属性的对象。
                  prop
                      要定义或修改的属性的名称或 Symbol 。
                  descriptor
                      要定义或修改的属性描述符。
  
                 返回值
                      被传递给函数的对象。
          */
  ```

  

##### 数组方法

- **sort()**

  - **描述**

    ```
    sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
    
    ```

  - **语法及参数**

    ```
    arr.sort([compareFunction])
    
    参数
    compareFunction 可选
        用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
    
        firstEl
            第一个用于比较的元素。
        secondEl
            第二个用于比较的元素。
    
    返回值
    排序后的数组。请注意，数组已原地排序，并且不进行复制。
    ```

  - **注意**

    ```
    - 也会影响原数组，默认会按照Unicode编码进行排序
    
    带有compareFunction 参数时,
        如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
        如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
        如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
        compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
        
    所以，比较函数格式如下：
    ```

    [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

    [简单使用](https://www.cnblogs.com/saifei/p/9043821.html)

- **filter()**

  - filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

  - **语法以及参数**

    ```
    array.filter(function(currentValue,index,arr), thisValue)
    
    function(currentValue, index,arr) 	
    必须。函数，数组中的每个元素都会执行这个函数
    函数参数:
    	currentValue 	必须。当前元素的值
    	index 			可选。当前元素的索引值
    	arr 			可选。当前元素属于的数组对象
    thisValue 		可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
    	如果省略了 thisValue ，"this" 的值为 "undefined"
    
    返回值
    一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
    ```

  - **注意：** filter() 不会对空数组进行检测。

  - **注意：** filter() 不会改变原始数组。

- **reduce**

  - 语法:arr.reduce((preValue, current**, **index, arr)=>f),initialValue)

  - arr:当前操作的数组

  - ==**preValue**:**第一次**执行回调时为给定的**初始值initialValue**,**以后是上一次执行回调时的返回值**。==

    ​					==备注:若**没有传入initialValue**,则第一次的preValue值是数组中**第一个元素的值**。==

  - **current 表示当前正在处理的元素;**

  - index 表示当前正在处理的数组元素的索引,若传入了initialValue值,则为0,否则为1;

  - array  当前操作的数组(就是arr)

  - **initialValue 表示初始值。一般做数学时设置为0,若为筛选最值可以不传。**

  - **用于数据分析**

  - ```
    	let arr = [1,2,3,4,5,6,7,8,9,10,9]
    
                // 数组求和 
                /* const x = arr.reduce((preValue,current)=>{
                  console.log(preValue,current);
                  return preValue+current
                })
                console.log(x); */
    
                // 数组中偶数的和----(条件求和)
                // const x = arr.reduce((preValue,current)=>preValue+(current % 2 === 0 ? current:0),0)
                // console.log(x);
    
                //数组中偶数有几个---(条件统计)
                // const x = arr.reduce((preValue,current)=>preValue+(current%2===0 ? 1:0),0)
                // console.log(x);
    
                // 数组中所有偶数的积
                // const x = arr.reduce((preValue,current)=>preValue*(current%2===0 ? current:1),1)
                // console.log(x);
    
                // 数组中最小值----(筛选最值)
                /* const x = arr.reduce((preValue,current)=>
                {
                    console.log(preValue,current);
                    return Math.max(preValue,current)
                },1)
                console.log(x);
    ```




- **map**


  - **描述**

    ```
    map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
    ```


  - **语法**

    ```js
    var new_array = arr.map(function callback(currentValue[, index[, array]]) {
     // Return element for new_array 
    }[, thisArg])
    ```


  - **参数**

    ```
    `callback`
    生成新数组元素的函数，使用三个参数：   
    
    `currentValue`
    
    	`callback` 数组中正在处理的当前元素。 
    
    	`index`可选  
    
    	`callback` 数组中正在处理的当前元素的索引。  
    
    `array`可选  
    
    	`map` 方法调用的数组。  
    
    `thisArg`可选
    
    执行 `callback` 函数时值被用作`this`。
    ```


  - **返回值**

    - ```
      一个由原数组每个元素执行回调函数的结果组成的新数组。
      ```

  - [官方文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

  -   - **返回值**
        - 一个由原数组每个元素执行回调函数的结果组成的新数组。
      - **注意：** map() 不会对空数组进行检测。

      - **注意：** map() 不会改变原始数组。


  - **push()**
    - 该方法可以向数组的末尾添加一个或多个元素，并返回数组的新的长度

    - 可以将要添加的元素作为方法的参数传递，

    - 这样这些元素将会自动添加到数组的末尾 

    - 该方法会将数组新的长度作为返回值返回

  - **pop()**
    - 该方法可以删除数组的最后一个元素,并将被删除的元素作为返回值返回


  - **unshift()**
    - 向数组开头添加一个或多个元素，并返回新的数组长度

    - 向前边插入元素以后，其他的元素索引会依次调整


  - **shift()**

     可以删除数组的第一个元素，并将被删除的元素作为返回值返回


  - **slice()**

     可以用来从数组提取指定元素
      	- 该方法不会改变元素数组，而是将截取到的元素封装到一个新数组中返回
      	- 参数：
      		1.截取开始的位置的索引,  包含  开始索引
      		2.截取结束的位置的索引,  不包含  结束索引
      			- 第二个参数可以省略不写,此时会截取从开始索引往后的所有元素
      		- 索引可以传递一个负值，如果传递一个负值，则从后往前计算
      			-1 倒数第一个
      			-2 倒数第二个


  - **splice()**


    - 描述（增删改一体化）

          可以用于删除数组中的指定元素

         

      

      	- 参数：
      	  		第一个，表示开始位置的索引
      	  		第二个，表示删除的数量
      	  		第三个  及以后。。
      	  			可以传递一些新的元素，这些元素将会自动插入到开始位置索引前边

       - 注意

         ```
         使用splice()会影响到原数组，会将指定元素从原数组中删除，被删除的元素作为返回值返回
         
         ```

         


  - **concat()**
    - 可以连接两个或多个数组，并将新的数组返回

      - 该方法不会对原数组产生影响


  - **join()**

     该方法可以将数组转换为一个字符串
      	- 该方法不会对原数组产生影响，而是将转换后的字符串作为结果返回
      	- 在join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符
      		如果不指定连接符，则默认使用,作为连接符


  - **reverse()**

     该方法用来反转数组（前边的去后边，后边的去前边）
      	- 该方法会直接修改原数组



##### 字符串方法

- **indexOf()**

  - 描述

    ```
    indexOf()方法返回调用它的 String 对象中**第一次出现的指定值的索引**，从 **fromIndex** 处进行搜索。如果未找到该值，则返回 -1。
    ```

  - **语法**

    ```
    str.indexOf(searchValue [, fromIndex])
    ```

  - **参数**

    - ```
      searchValue
          要被查找的字符串值。如果没有提供确切地提供字符串，searchValue 会被强制设置为 "undefined"， 然后在当前字符串中查找这个值。举个例子：'undefined'.indexOf() 将会返回0，因为 undefined 在位置0处被找到，但是 'undefine'.indexOf() 将会返回 -1 ，因为字符串 'undefined' 未被找到。
          
      fromIndex 可选
          数字表示开始查找的位置。可以是任意整数，默认值为 0。如果 fromIndex 的值小于 0，或者大于 str.length ，那么查找分别从 0 和str.length 开始。（译者注：  fromIndex 的值小于 0，等同于为空情况； fromIndex 的值大于或等于 str.length ，那么结果会直接返回 -1 。）举个例子，'hello world'.indexOf('o', -5) 返回 4 ，因为它是从位置0处开始查找，然后 o 在位置4处被找到。另一方面，'hello world'.indexOf('o', 11) （或 fromIndex 填入任何大于11的值）将会返回 -1 ，因为开始查找的位置11处，已经是这个字符串的结尾了。 
      ```

  - **返回值**

    ```
    查找的字符串 searchValue 的第一次出现的索引，如果没有找到，则返回 -1。
    
    若被查找的字符串 searchValue 是一个空字符串，将会产生“奇怪”的结果。如果 fromIndex 值为空，或者 fromIndex 值小于被查找的字符串的长度，返回值和以下的 fromIndex 值一样：
    			'hello world'.indexOf('') // 返回 0
    			'hello world'.indexOf('', 0) // 返回 0
    			'hello world'.indexOf('', 3) // 返回 3
    			'hello world'.indexOf('', 8) // 返回 8
    			
    另外，如果 fromIndex 值大于等于字符串的长度，将会直接返回字符串的长度（str.length）：
    			'hello world'.indexOf('', 11) // 返回 11
    			'hello world'.indexOf('', 13) // 返回 11
    			'hello world'.indexOf('', 22) // 返回 11
    			
    从前面一个例子可以看出，被查找的值是空值时，Javascript将直接返回指定的索引值。从后面一个例子可以看出，被查找的值是空值时，Javascript将直接返回字符串的长度。
    ```

  - **注意**

    ```
    字符串中的字符被从左向右索引。第一个字符的索引（index）是 0，变量名为 stringName 的字符串的最后一个字符的索引是 stringName.length - 1
    
    indexOf 方法是区分大小写的
    
    注意 0 并不会被当成 true ，-1 不会被当成 false 。所以当检测某个字符串是否存在于另一个字符串中时，可使用下面的方法：
    		'Blue Whale'.indexOf('Blue') !== -1    // true
    		'Blue Whale'.indexOf('Bloe') !== -1    // false
    		~('Blue Whale'.indexOf('Bloe'))        // 0, 这是一种错误用法
    ```

  - [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
