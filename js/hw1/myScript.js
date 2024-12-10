const data = [
    {region: 'US', model: 'A', sales: 150},
    {region: 'US', model: 'B', sales: 120},
    {region: 'US', model: 'C', sales: 350},
    {region: 'EU', model: 'A', sales: 200},
    {region: 'EU', model: 'B', sales: 100},
    {region: 'EU', model: 'C', sales: 250},
    {region: 'CA', model: 'A', sales: 200},
    {region: 'CA', model: 'B', sales: 100},
    {region: 'CA', model: 'C', sales: 230},
    {region: 'CA', model: 'D', sales: 400},
];

function convertJsonToTable(data){
    data.forEach(element => {
        let tr = document.createElement("tr");
        let vals = Object.values(element);
        vals.forEach((item)=>{
            let td = document.createElement("td");
            td.innerText = item;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}

convertJsonToTable(data);