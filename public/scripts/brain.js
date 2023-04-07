const submit_button = document.querySelector(".MainPageButton");
const name = document.querySelector("#name");
const intro = document.querySelector("#introduction");
const gitlink = document.querySelector("#GithubLink");
const tweetlink = document.querySelector("#TwitterLink");
const email = document.querySelector("#email");
const template_type = document.querySelector("#cars");
const image_link = document.querySelector("#imgLink");
const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
const  Color_enable = document.querySelector("#Color_enable");
const disable_pic = document.querySelector("#disable_pic");
const disable_media = document.querySelector("#disable_media");
const prime_color = document.querySelector("#prime_color");
const secon_color = document.querySelector("#secon_color");
const submit_button2 = document.querySelector("#submit2");

Color_enable.addEventListener("click" , ()=>{
  if(Color_enable.value === "Enable"){
    document.querySelectorAll(".colordiv").forEach((E)=>{
      E.classList.add("invis");
    })
  }else{
    document.querySelectorAll(".colordiv").forEach((E)=>{
      E.classList.remove("invis");
    })
  }
})

submit_button.addEventListener("click", async (e) => {
  e.preventDefault();
  const name_val = name.value;
  const email_val = email.value;
  const intro_val = intro.value;
  const gitlink_val = gitlink.value;
  const tweetlink_val = tweetlink.value;
  const image_val = image_link.value;
  const template_val = template_type.value;
  if( email_val === "" || gitlink_val === "" || name_val === "" || tweetlink_val === "" || image_val === "" || intro_val === "" || template_type.value === "none")
  {
      window.alert("Kindly fill all the details!!");
      return;
  }
  form.style.display = "none";
  form2.style.display = "flex";

  submit_button2.addEventListener("click" ,async(e)=>{
    e.preventDefault();
    const disable_media_val = disable_media.value;
    const disable_pic_val = disable_pic.value;
    const Color_enable_val = Color_enable.value;
    const prime_color_val = prime_color.value;
    const secon_color_val = secon_color.value;
    const select_font = document.querySelector("#select_font").value;
      var response;
   await fetch("http://localhost:3000/onsubmit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name_val,
      email_val,
      intro_val,
      gitlink_val,
      tweetlink_val,
      image_val,
      template_val,
      disable_media_val,
      disable_pic_val ,
      Color_enable_val,
      prime_color_val,
      secon_color_val,
      select_font
    }),
  })
    .then((rep) => rep.json())
    .catch((err) => console.log(err))
    .then((rep) => response = rep);
    if(response.status === "200")
    {
      var a= document.createElement("a");
      var link = document.createTextNode("Go the Template");
      a.append(link);
      a.title = "Go the Template";
      a.href = "http://localhost:3000/pages/templateA.html";
      a.target = "_blank";
      a.style.padding = "10px";
      a.style.background = "#000";
      a.style.zIndex = 20;
      a.style.textDecoration = "none";
      a.style.color = "#fff";
      a.style.fontSize = "1.5rem";
      a.id = "a_tag";
      // if there is already a tag in the form
      if(document.querySelector("#a_tag") !== null)
      {
        document.querySelector("#a_tag").remove();
      }
      document.querySelector(".formcontainer").appendChild(a);
      window.alert("Form Submiited");
    } else{
      window.alert("try again!! There is problem with data");
      return;
    }
  })
});





