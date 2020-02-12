const webPage = require('webpage');
var page = webPage.create();
var system=require("system");
var DAL=require(phantom.libraryPath + './IOES5.js');

const url="https://www.ouedkniss.com/emploi_offres?agent=2";
const periode_ms=4000;
const n_pages=2;
let page_index=1;
page.settings.loadImages=false;

// page.onUrlChanged  = function() {
//   console.log(page.url);
// }

page.onConsoleMessage = (msg)=> {
  system.stdout.writeLine( msg );
};

function TimeoutCallBack()
{
  let data=page.evaluate(()=>{
    let titre=document.getElementsByClassName("annonce_titre");
    let text=document.getElementsByClassName("annonce_text");

    let data_length=titre.length<=text.length?titre.length:text.length;
    let data=new Array();
    
    for (let index = 0; index < data_length; index++) {
      data.push({
        title:titre[index].innerText,
        text_content:text[index].innerText
      });
    }
    return data;
  });
  data.forEach(element => {
    element.page_number=page_index;
  });

  page_index++;
  DAL.WriteToFile("jobs.txt",data);
  console.log("jobs are logged");

  if(page_index<=n_pages)
  {
    page.evaluate(()=>{
      document.querySelector("#divPages > a.page_arrow").click();
    });
    window.setTimeout(TimeoutCallBack,periode_ms);
  }
  else
  {
    phantom.exit();
  }
}

function FilterFunctionCallBack()
{
  try
  {
    document.getElementById("sous_menu_wilaya_oran").click();
    document.getElementById("sous_menu_diplome_5").click();
    document.getElementById("sous_menu_permis_0").click();
    document.getElementById("sous_menu_vehicule_0").click();
    document.getElementById("submit_filtre").click();
    console.log("filter is selected");
  }
  catch(e)
  {
    console.log(e);
    phantom.exit();
  }
}

function PageOpeningCallBack(status)
{
  console.log('Status: ' + status);

  if(status=="success")
  {
    page.evaluate(FilterFunctionCallBack);
    window.setTimeout(TimeoutCallBack,periode_ms);
  }
  else
  {
    phantom.exit();
  }
}

page.open(url, PageOpeningCallBack);
