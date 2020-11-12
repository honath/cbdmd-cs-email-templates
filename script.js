//function to copy relevant text on button click
function copyToClipboard(copyID)
{
  //get relevant element's text and create a new text area element
  const str = document.getElementById(copyID).innerText;
  const el = document.createElement("textarea");

  //set new text area element's text to target's text, make invisible to user
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);

  //copy to clipboard
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

//show desired category/section, hide the rest
function changeSection(tarID)
{
  //array of category section IDs, add more as needed
  var categories = ["vet-med", "shipping-issues", "warehouse-comm", "product-issue", "billing", "gen-reply"]; 
  //declare "element selector" and hide welcome section
  var currentEl = document.getElementById("welcome");
  currentEl.style.display = "none";

  //loop through sections and hide them
  for (let i = 0; i < categories.length; i++)
  {
    currentEl = document.getElementById(categories[i]);
    currentEl.style.display = "none";
  } 

  //show user's selected category
  currentEl = document.getElementById(tarID);
  currentEl.style.display = "block";
}