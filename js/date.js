const date = document.querySelector("#date");

function getDate() {
    const now = new Date();
    const nowArr = now.toUTCString().split(' ');

    const month = now.getUTCMonth() + 1;
    const dayth = nowArr[1];
    const day = nowArr[0].slice(0, 3);

    date.innerHTML = `${month}/${dayth} (${day})`;
}

getDate();
setInterval(getDate, 1000 * 60 * 60 * 24);