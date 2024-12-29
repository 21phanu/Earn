document.getElementById('submit').addEventListener('click', function () {
    const answer = document.getElementById('answer').value.trim();
    if (answer === 'เอิร์น') {
        document.getElementById('surprise').classList.remove('hidden');
    } else {
        alert('☄ยังไม่ถูกน้าลองใหม่น้าค้าบ☄!');
    }
});
