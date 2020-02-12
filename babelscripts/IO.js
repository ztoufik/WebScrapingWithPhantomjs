function WriteToFile(FileName,Data)
{
  try 
    {
      const fs=require("fs");

      Data.forEach(job => {
      let job_offer=`
/////////////////////////
page:${job.page_number}
title:${job.title}
text:${job.text_content}
      
      `
      fs.write("../"+FileName, job_offer, 'a');

      });
    } 
  catch(e) 
    {
      console.log(e);
      phantom.exit();
    }
}

exports.WriteToFile=WriteToFile;