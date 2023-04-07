const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
const Handlebars = require("handlebars");
const {source1} = require("./template/source1");
const {source2} = require("./template/source2");
var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());

var templateAresult;
var font_family;

// custom handlebar functions
Handlebars.registerHelper('isnoneorEnable' , function(value){
  return value === 'none' || value === 'Enable';
})

Handlebars.registerHelper('isnoneorDisablecolor' , function(value){
  return value === 'none' || value === 'Disable';
})


app.post("/onsubmit", async (req, res) => {
  console.log(req.body);
  const template_type = req.body.template_val;
  font_family = req.body.select_font;
  if(template_type === "TemplateA")
  {
      var source = source2;
      var template = Handlebars.compile(source);
      var result = template(req.body);
      templateAresult = result;
      return res.json({ status: "200", data: result });
  }else{
    var source = source1;
  var template = Handlebars.compile(source);
  var result = template(req.body);
  templateAresult = result;
  return res.json({ status: "200", data: result });
  }
});

app.get("/getres", (req, res) => {
  console.log(templateAresult);
  if (templateAresult === undefined) {
    return res.json({ status: "400", data: null });
  }
  return res.json({ status: "200", data: templateAresult  , font : font_family});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
