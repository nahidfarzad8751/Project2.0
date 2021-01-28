// console.log("starting first visualization")
// console.log('this is working')
d3.json("/db").then(data => {
    console.log(data)
    data.forEach((d)=>{
        console.log(d)
        console.log(d.Happiness_Score)
        life_expectancy.append(d.country)
    var score = d.Happiness_Score
    })
console.log(score)
})

d3.json("/db").then((data) => {
    var happiness = data.happiness_data;
    var resultArray = happiness_data.filter(d => d.id == data);
    var result = resultArray[0];
    var happiness_rank = result.happiness_rank;
    var health = result.health;
    var country = result.Country
// function below sets the color based on amount
function SetColor(x) {
    if(x < 1.0);
        return "green"
    elif(x >= 0.3 | x <= 0.69);
        return "blue"
    elif(x > 0);
        return "red";
}
    var trace1 = {
  x: health,
  y: happiness_rank,
  mode: 'markers',
  type: 'scatter',
  name: 'country',
  marker: dict(color=list(map(SetColor, y)))
};
var data = [trace1];
var layout = {
  xaxis: {
    range: [ 0.75, 5.25 ]
  },
  yaxis: {
    range: [0, 8]
  },
  title:'Happiness vs Health'
};
//couldn't find the div
Plotly.newPlot('myDiv', data, layout);
}
}



// fetch("localhost:5000/db")
// .then(res=>res.json())
// .then(data=>console.log(data))