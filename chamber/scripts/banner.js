const currentDay = (new Date()).getDay();

if (currentDay >= 1 && currentDay <= 3) {
    document.getElementById('meetAndGreet').style.display = 'block';
}

document.getElementById('closeBannerButton').addEventListener('click', function() {
    document.getElementById('meetAndGreet').style.display = 'none';
});