var evt = new Event(),
    m = new Magnifier(evt);

m.attach({
    thumb: '#thumb',
    mode: 'inside',
    zoom: 2,
    zoomable: true
});