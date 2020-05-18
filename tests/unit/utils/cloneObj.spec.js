import { cloneObj } from "../../../src/utils/public-method";

describe('Utils:cloneObj', () => {
  it('obj', () => {
    const obj = {name: '张三'}
    expect(cloneObj(obj)).toStrictEqual(obj)
  })
})