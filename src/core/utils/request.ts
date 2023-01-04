export function request(url: string): Promise<XMLHttpRequest> {
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', url);

    req.send(null);
    return new Promise((resolve) => {
        req.addEventListener('loadend', () => {
            resolve(req);
        });
    });
}