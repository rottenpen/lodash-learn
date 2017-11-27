// 从start位置到 end（但不包含end位置），截取 array数组 
// Note: 此方法是用来在IE9以下版本替代 Array#slice来支持节点列表，确保密集数组返回
// 参数
// array (Array): 需要截取的数组.
// [start=0] (number): 截取开始位置
// [end=array.length] (number): 结束位置（不包含）
// 返回值
// (Array): 返回截取后的数组 array.

function slice(array, start, end) {
    let length = array == null ? 0 : array.length
    if (!length) {
        return []
    }
    start = start == null ? 0 : start
    end = end == undefined ? length : end

    if (start < 0) {
        start = -start > length ? 0 : (length + start)
    }
    end = end > length ? length : end

    if (end < 0) {
        end += length
    }
    length = start > end ? 0:((end - start)>>>0)//>>>0  1.所有非数值转换成0    2.所有大于等于 0 等数取整数部分
    start >>>= 0

    let index = -1
    const result = new Array(length)
    while(++index < length){
        result[index] = array[index+start]
    }
    return result
}

export default slice