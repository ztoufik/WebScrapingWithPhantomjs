"use strict";

function WriteToFile(FileName, Data) {
  try {
    var fs = require("fs");

    Data.forEach(function (job) {
      var job_offer = "\n/////////////////////////\npage:" + job.page_number + "\ntitle:" + job.title + "\ntext:" + job.text_content + "\n      \n      ";
      fs.write("../" + FileName, job_offer, 'a');
    });
  } catch (e) {
    console.log(e);
    phantom.exit();
  }
}

exports.WriteToFile = WriteToFile;
