const {Client} = require('pg');

const client=new Client(
    {
        host:"arjuna.db.elephantsql.com",//host name 
        user:"eekdngbe",
        post:5432,
        password:"0lh-EswLHFudnm_BZK1_9HZcRF30vJ_b",
        database:"eekdngbe"
    }
)
client.connect();
console.log("connected");
function sendQuery(input)
{
    client.query("INSERT INTO users(name) values('"+input+"')",(err)=>{
        if(err)
        {
            console.log(err.message);
        }
        client.end;
    })
}
function recieveQuery()
{
    client.query('Select * from users',(err,res)=>{
        if(!err)
        {
            console.log(res.rows);
        }
        else{
            console.log(err.message);
        }
        client.end;
    })
}
module.exports={sendQuery,recieveQuery};