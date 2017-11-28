// 创建一个新数组并包含原数组中所有的非假值元素。例如 false、null、 0、""、undefined 和 NaN 都是“假值”。
// null==true
// false
// 0==true
// false
// ""==true
// false
// undefined == true
// false
// NaN == true
// false
// 参数
// array (Array): 数组参数.
// 返回值
// (Array): 返回过滤假值后的数组.

function compact(array){
    let reIndex = 0
    const result = []

    if(array == null){      //为null或者undefined的时候返回空数组
        return result
    }

    for (const value of array) {     //遍历数组如果元素value是真值添加到数组result里
        if (value) {
          result[resIndex++] = value
        }
      }
    return result
}