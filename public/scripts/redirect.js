setTimeout(()=> {
    const queryString = location.search;
    location.href = `http://127.0.0.1:5500/study${queryString}`;
}, 1500);
