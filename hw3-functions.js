/**
 * Created by Hans Dulimarta
 * 
 * Dustin Thurston
 */

/**
 * Given the ID of a node {rootId}, find all its descendant elements having
 * its attribute id set and then change their class to {klazName}.
 * The function returns the number of such elements found.
 *
 * @param rootId    the ID of the "root" element to begin searching
 * @param klazName  the class to assign to each descendant whose id attrib 
 *                  is set.
 * @returns {number}
 */
function findElementsWithId(rootId, klazName) {
  /* complete this function */
  
  //The parent node
  var parentElement = document.getElementById(rootId);

  //The array of descendants of the parent element
  var elements = parentElement.querySelectorAll("*");

  //Number of elements found/changed
  var numChanged = 0;

  //For each element found, if it has an ID, change it to parameter klazName
  elements.forEach(element => {
    if(element.id !== ""){
      element.id = klazName;
      numChanged++;
    }
  });

  return numChanged;
}

/**
 * The following function finds all elements with attribute 'data-gv-row' (or
 * 'data-gv-column') and create a table of the desired dimension as a child of
 * the element.
 *
 * @returns NONE
 */
function createTable() {
  /* complete this function */

  var tableDiv = document.getElementsByClassName("table-home");
  rows = tableDiv[0].getAttribute("data-gv-row");
  cols = tableDiv[0].getAttribute("data-gv-column");
  
  var table = document.createElement("table");
  tableDiv[0].appendChild(table);
  
  //Random word generator
  const lips = new LoremIpsum();

  for(var i = 0; i <= rows; i++){
    var row = table.insertRow();
    for(var j = 0; j<cols; j++){
      var cell = row.insertCell();
      if(i == 0){
        var temp = j+1;
        cell.innerText = "Heading " + temp
      }else{
        let word = lips.generate(3);
        cell.innerText = word;
      }
    }
  }

  console.log(rows)
  console.log(cols)

}
