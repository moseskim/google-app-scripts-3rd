/**
 * 부가세 포함 가격을 반환하는 커스텀 함수
 *
 * @param {Number} price - 가격
 * @param {Number} taxRate - 세율(부가세율 0.1）
 * @return {Number} - 부가세 포함 가격
 * @customfunction
 */
 function TAX_INCLUDE(price, taxRate = 0.1) {
  return price * (1 + taxRate);
}
