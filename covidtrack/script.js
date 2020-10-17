$(document).ready(function(){
    var url="https://api.covid19india.org/data.json"

    $.getJSON(url,function(data){
        console.log(data)
        var tot_active,tot_rec,tot_dead,tot_confirmed

        var state=[]
        var confirmed =[]
        var recovered=[]
        var death=[]

        $.each(data.statewise,function(id,obj){
            state.push(obj.state)
            recovered.push(obj.recovered)
            confirmed.push(obj.confirmed)
            death.push(obj.deaths)

        })
        // removing Total obj
        state.shift()
        confirmed.shift()
        recovered.shift()
        death.shift()

        console.log(state)
        tot_active      = data.statewise[0].active
        tot_confirmed   = data.statewise[0].confirmed
        tot_rec         = data.statewise[0].recovered
        tot_dead        = data.statewise[0].deaths

        $("#active").append(tot_active)
        $("#confirmed").append(tot_confirmed)
        $("#recovered").append(tot_rec)
        $("#deaths").append(tot_dead)

        var mychart = document.getElementById("mychart").getContext('2d');

        var chart = new Chart(mychart,{
            type:'line',
            data:{
                labels:state,
                datasets:[
                    {
                       label:"Confirmed Cases",
                       data:confirmed,
                       backgroundColor:"#f1c40f",
                       minBarLength:100,
                    },
                    {
                        label:"Recovered Cases",
                        data:recovered,
                        backgroundColor:"green",
                        minBarLength:100,
                     },
                     {
                        label:"Deaths",
                        data:death,
                        backgroundColor:"red",
                        minBarLength:100,
                     },

                ]
            },
            options:{}
        })
    })
})
