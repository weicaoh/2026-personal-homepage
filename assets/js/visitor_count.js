(function () {
    var countElement = document.getElementById('visitor-count');

    if (!countElement) {
        return;
    }

    var badge = document.createElement('img');
    var site = (window.location.hostname || 'localhost').replace(/^www\./, '');

    badge.src = 'https://hits.sh/' + encodeURIComponent(site) + '.svg?label=views';
    badge.alt = 'Page views';
    badge.referrerPolicy = 'no-referrer';
    badge.addEventListener('error', function () {
        countElement.textContent = 'unavailable';
    });

    countElement.replaceChildren(badge);
}());