let pageLink = document.getElementById("pageLink");

const page = [
    {
        link: "./htmlPages/page01.html",
        pageName: "page 01",
    },
    {
        link: "./htmlPages/page02.html",
        pageName: "page 02",
    },
    {
        link: "./htmlPages/page03.html",
        pageName: "page 03",
    },
    {
        link: "./htmlPages/page04.html",
        pageName: "page 04",
    },
];

page.map(function (x) {
    pageLink.innerHTML += `
        <ul>
            <li><a href="${x.link}">${x.pageName}</a></li>
        </ul>
    `
})