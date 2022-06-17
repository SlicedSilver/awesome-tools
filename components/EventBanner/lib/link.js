function setUTM(link, source, campaign = Date.now()) {
    let url = new URL(link);

    url.searchParams.set('utm_medium', 'purple');
    url.searchParams.set('utm_source', source);
    url.searchParams.set('utm_campaign', campaign);

    return url;
}

export { setUTM }
