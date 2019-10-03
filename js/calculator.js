// DP로 미리 피보나치 계산
const dp = [0, 1];
pibo(30);

const inputPeopleEl = document.querySelector('input');
function calculate() {
    const people = inputPeopleEl.value;

    if (!people) {
        window.alert('인원수를 입력하세요.');
    } else if (people == 0) {
        window.alert('최소 1명 이상의 인원수를 입력해주세요.');
    } else if (people > 832040) {
        window.alert('주문 가능한 치킨집이 없습니닭!!');
    } else {
        const numberList = [];
        zeckendorf(people, 30, numberList);

        // 합 구하기
        let result = 0;
        numberList.forEach(number => {
            result += dp[number - 1];
        });

        renderResult(result);
    }
}

function zeckendorf(number, idx, numberList) {
    if (number === 0 || idx === 0) return;
    if (dp[idx] > number) {
        zeckendorf(number, idx - 1, numberList);
        return;
    }
    numberList.push(idx);
    zeckendorf(number - dp[idx], idx - 1, numberList);
}

function pibo(number) {
    for (let i = 2; i <= number; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log('dp:', dp);
}

const resultEl = document.querySelector('.result');
function renderResult(result) {
    resultEl.innerHTML = `치킨 <strong>${result}</strong>마리가 필요합니닭`;
}