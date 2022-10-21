let find = new XMLHttpRequest
        find.open("GET","https://restcountries.com/v2/all", true)
        find.send()
        find.onload = function(){
            let data = JSON.parse(find.response)
            console.log(data);
            for(let i =0; i<data.length;i++){
                console.log(data[i].flags)           

            console.log(data[i]. name)           
             console.log(data[i].region)
             console.log(data[i].subregion)
             console.log(data[i].population)

            }
        }
