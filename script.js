var label = document.createElement('label')
label.innerText = "Name: "
document.body.append(label)
label.setAttribute('for','nationalityName')

var input = document.createElement('input')
input.setAttribute('type','search')
document.body.append(input)
input.setAttribute('id','nationalityName')

var button = document.createElement('button');
button.innerText="Search";
document.body.append(button);
button.addEventListener('click', nationality);
button.setAttribute('id','button')

var horizontalLine = document.createElement("hr")
document.body.append(horizontalLine)
    
async function nationality(){

    try{
        let nationalityName = document.getElementById("nationalityName").value
        console.log(nationalityName)

        let fetchUrl = await fetch(`https://api.nationalize.io/?name=${nationalityName}`)
        let data = await fetchUrl.json()
            console.log(data)
            // .then(data => data.json())
            // .then(res => console.log(res)) 

        let name = data.name;
        let country1 = data.country[0].country_id;
        let country2 = data.country[1].country_id;
        let probability1 = data.country[0].probability;
        let probability2 = data.country[1].probability;

        let table = document.createElement('table')
        table.setAttribute('id','table')
        table.style.border = 'green 2px solid'
        table.style.width = '100%' 

        let rowA = table.insertRow()
        let tdA = rowA.insertCell()
        tdA.innerHTML = "<h3>Country</h3>"
        rowA.style.textAlign = 'center'

        let row1 = table.insertRow()
        let td1 = row1.insertCell()
        td1.innerHTML = `${country1}`
        row1.style.textAlign = 'center'

        let td2 = row1.insertCell()
        td2.innerHTML = `${probability1}`

        let tdB = rowA.insertCell()
        tdB.innerHTML = "<h3>Probability</h3>"

        let row2 = table.insertRow()
        let td3 = row2.insertCell()
        td3.innerHTML = `${country2}`
        row2.style.textAlign = 'center'

        let td4 = row2.insertCell()
        td4.innerHTML = `${probability2}`

        document.body.append(table);
        
        console.log(name);
        console.log(country1);
        console.log(country2);
        console.log(probability1);
        console.log(probability2);
    }
    catch(err){
        console.log(err)
    }
    
} 

