function checkEligibility() {
    const age = document.getElementById('age').value;
    const term = document.getElementById('term').value;
    const result = document.getElementById('result');

    if (age < 20) {
        result.textContent = 'ผู้สมัครต้องมีอายุอย่างน้อย 20 ปี';
        result.style.color = 'red';
        return;
    }

    const totalAge = parseInt(age) + parseInt(term);

    if (totalAge <= 70) {
        result.textContent = 'ผู้สมัครมีคุณสมบัติผ่านเกณฑ์การอนุมัติสินเชื่อ';
        result.style.color = 'green';
    } else if (totalAge <= 75) {
        result.textContent = 'ผู้สมัครอาจมีสิทธิ์ได้รับการอนุมัติสินเชื่อในบางกรณี';
        result.style.color = 'orange';
    } else {
        result.textContent = 'ผู้สมัครไม่มีคุณสมบัติผ่านเกณฑ์การอนุมัติสินเชื่อ';
        result.style.color = 'red';
    }
}
