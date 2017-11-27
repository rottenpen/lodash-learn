'use strict';

import slice from './slice.js'

function chunk(array, size) {
    size = Math.max(size, 0) //选最大值 即size为负值的时候 size为0
    const length = array == null ? 0 : array.length
    if (!length || size < 1) {
        return []            //如果array不是数组length为undefined 所以!length排除了length为0跟array为数组外类型的情况
    }
    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))

    while (index < length) {
        result[resIndex++] = slice(array, index, (index += size))
    }
    return result
}

// var arr=['a','b','c','d','e','f']
// var newarr=chunk(arr,2)
// console.log(newarr)

export default chunk