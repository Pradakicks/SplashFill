const axios = require('axios');
const cheerio = require('cheerio');
const $ = cheerio.load('json')


async function getStock () {
const {data} = await axios.get("https://www.supremenewyork.com/mobile_stock.json");
const $ = await cheerio.load(data)

console.log(JSON.)
} getStock()
console.log('Stock received')




// async function getProdLink () {
//        setRunningStatus('Getting Product')
//        const {data} = await axios.get(productUrl2);
//        const $ = await cheerio.load(data)
    
//        // Finding ALL LINKS 
//        // LINK ARRAY
//        var x = 0
//        var linkArr = []
//        $('li.sku-item').each((i, element) => {
//           x++
//           const link = $(element)
//              .find('a')
//              .attr("href");
//           //console.log(link.cyan);
//           linkArr.push(link)
//           // console.log('------------------------\n')
    
//        });
    
//        var i = 0
//        // FIND Product
//        $('li.sku-item').each((i, element) => {
//           i++
//           const skuNum = $(element)
//              .find('div.sku-model')
//              .text();
//           if (skuNum.includes('6429569')) {
//            //  const findLink = $('li.sku-item').find('a').attr("href");
//              console.log(linkArr[i].cyan)
    
//           }
//           // for (let i = 0 ;  i < 30; i++){
//           //    console.log(skuNum.includes('6429569'));
//           // console.log('------------------------\n')
//           // }
    
//        });
//       $('#data-sku-id').each((i, element) => {
    
//      // const skuidnum = $(element).find('data-sku-id').text();
    
//      // console.log(skuidnum);
//        console.log('ran')
//       })
//     } await getProdLink().then(() =>{
//     })