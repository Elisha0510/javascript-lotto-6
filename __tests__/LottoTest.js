import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 2개가 1~45 사이 숫자가 아닐 때 length는 2일까 ?", () => {
    const testNumbers = [3,56,4,7,9,89];
    expect(() => {
      new Lotto(testNumbers);
    }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  test("로또 번호 2개가 1~45 사이 숫자가 아닐 때 length는 2일까 ?", () => {
    const testNumbers = [];
    expect(() => {
      new Lotto(testNumbers);
    }).toThrow('[ERROR] 로또 번호를 입력하세요.');
  });
  
});
