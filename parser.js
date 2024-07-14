const fetchSheet = async (id) => {
    s = fetch(`https://docs.google.com/spreadsheets/d/${id}/gviz/tq?gid=0`).then(
        response => { return response.text() }
    )
    return s;
}

async function start() {
    tablejson = await fetchSheet("1LARUmYrRE92iLFoG9aPNj73x0Tgbu8lDWbCu8jXOLek")
    //console.log(tablejson);
    tablejson = tablejson.slice(47, -2);


    //console.log(JSON.parse(tablejson).table);
    tablejson = JSON.parse(tablejson).table;
    console.log(tablejson);
    tablejson.rows.forEach(element => {
        if (element.c[0].v == "NOME") {} else {
            var containter = document.createElement("div");
            var elnome = document.createElement("div");
            elnome.textContent = element.c[0].v;
            var eldata = document.createElement("div");
            eldata.textContent = element.c[1].v;
            var elmat = document.createElement("div");
            elmat.textContent = element.c[2].v;
            var elstats = document.createElement("div");
            elstats.textContent = tablejson.rows[1].c[3].v;
            containter.classList.add("created");
            containter.appendChild(elnome);
            containter.appendChild(eldata);
            containter.appendChild(elmat);
            containter.appendChild(elstats);
            document.body.appendChild(containter);
        }
    });

}

start();