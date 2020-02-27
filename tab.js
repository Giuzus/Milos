
let sources = [
    "https://media1.tenor.com/images/25ec03203265dee174003d8557e7c668/tenor.gif",
    "https://media.tenor.com/images/2057f20854ca8a9fc52de07839cc60a1/tenor.gif",
    "https://media1.tenor.com/images/be2fd4b54d257d15941d13bfb47f6f70/tenor.gif",
    "https://media.tenor.com/images/2aee168fedac14b4322bc73e220fda93/tenor.gif",
    "https://media.tenor.com/images/69bf8701a6a47b28f885332e0ebedffc/tenor.gif",
    "https://media1.tenor.com/images/bfb08e5fd39a5eb980675090c691d773/tenor.gif",
    "https://media.tenor.com/images/8ca6d0257921f06f066f8ae8be444422/tenor.gif",
    "https://media.tenor.com/images/e896677af3e0c475c8f220e78a3fee7e/tenor.gif",
    "https://media1.tenor.com/images/7eee90d55ea714249579f99df247c47e/tenor.gif",
    "https://media1.tenor.com/images/076670d47b6e0c606aa29b0ad0cac08f/tenor.gif",
    "https://media1.tenor.com/images/38047e4ecaaab95d8ae38b8d9850e447/tenor.gif",
    "https://media1.tenor.com/images/00d0c06f447916b4f98bd69c5510ae5e/tenor.gif",
    "https://media.tenor.com/images/0f3eecfee415f383ecbb466c88d25f49/tenor.gif",
    "https://media1.tenor.com/images/94f94c87989b71766ac222e7654652c0/tenor.gif",
    "https://art.ngfiles.com/thumbnails/800000/800468_full.png",
    "https://steamuserimages-a.akamaihd.net/ugc/835891153846254572/8588CF22FAB011ADF5603F0F5E32B5CAE6A37155/",
    "https://scontent.fbfh12-1.fna.fbcdn.net/v/t1.0-0/p480x480/81181261_1471146079701903_2125645057854799872_n.jpg?_nc_cat=105&_nc_ohc=lt-vB3gShiUAQl5_iGC4zLs2aR96-41FDlruOySPFyCAK8iFqqCT6m2JA&_nc_ht=scontent.fbfh12-1.fna&oh=48819a06d721b0bc4e301d8ac1729869&oe=5EA17072",
    "https://scontent.fbfh12-1.fna.fbcdn.net/v/t1.0-0/s600x600/80696375_2716520485052665_3649778356766900224_o.jpg?_nc_cat=110&_nc_ohc=GE8FKktJPlsAQnp_hWJAfa6O6GTDdEcXvolnBxl_WcBcHTAss5Ox1VZ-w&_nc_ht=scontent.fbfh12-1.fna&oh=abcaefcdf0f09246756640b8efb9c0ed&oe=5EAA9125"

]

document.addEventListener('load', function (event) {

    if (event.srcElement.tagName == "IMG" && !sources.includes(event.srcElement.src)) {
        event.srcElement.src = sources[Math.floor(Math.random() * sources.length)];
        event.srcElement.style.cssText = event.srcElement.style.cssText + "object-fit: scale-down;"
    }
}, true);