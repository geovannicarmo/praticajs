import axios from 'axios'

export default async function servece(firstUser: string, secondUser:string){

    try{

        
        let datauser1 =  await axios.get(`https://api.github.com/users/${firstUser}/repos`)
        console.log(datauser1.data[0].stargazers_count)
        datauser1 = datauser1.data[0].stargazers_count
        
        let datauser2 =  await axios.get(`https://api.github.com/users/${secondUser}/repos`)
        console.log(datauser2.data[0].stargazers_count)
        datauser2 = datauser2.data[0].stargazers_count

        if(datauser1>datauser2){
            return{	"winner": firstUser, // nulo se empate
            "loser": secondUser, //nulo se empate
              "draw": false // true se empate
            }
        }
             if(datauser1<datauser2){
            return{	"winner": secondUser, // nulo se empate
            "loser": firstUser, //nulo se empate
              "draw": false // true se empate
            }   
            
        }else{
            return{	"winner": null, // nulo se empate
            "loser": null, //nulo se empate
              "draw": true // true se empate
            }   
        }

    }catch(error){
        throw Error('Not found');
    }
    }

