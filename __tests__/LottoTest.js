import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 내가 작성한 test code
  test("로또 번호 2개가 1~45 사이 숫자가 아닐 때 length는 2일까 ?", () => {
    const testNumbers = [3,56,4,7,9,89];
    expect(() => {
      new Lotto(testNumbers);
    }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  test("로또 번호를 입력하지 않으면 오류를 발생할까 ?", () => {
    const testNumbers = [];
    expect(() => {
      new Lotto(testNumbers);
    }).toThrow('[ERROR] 로또 번호를 입력하세요.');
  });
  
});

describe("Class Lotto - method test" , () => {
  test('두 배열을 인수로 보냈을 때 같은 요소의 개수를 구할 수 있는가 ?', () => {
    const testArray = [1,2,3,4,5,6];
    const lotto = new Lotto(testArray);
    const randomNumbers = [1,5,8,6,3,2];
    const userLottoNumbers = [2,6,4,13,42,1];
    const equalNumber = lotto.countEqualNumbers(randomNumbers, userLottoNumbers);
    expect(equalNumber).toBe(3);
  });
});
