// AllColors Object
// 
function AllColors(colorArray){

    if(colorArray != null){
        this.colors = colorArray;
    } else{
        this.colors = ["white", "pink", "lightgreen","darkgrey", "rgb(255,255,0)"]
    }
    // Here are differnet ways to write colors
}

  // Table is our HTML Table Object, we can fill it, clear it, resize it and display it
  function Table(inputX, inputY){
    this.x = inputX
    this.y = inputY
    this.tableArray = []
    this.table
    
    // FillTableInOrder method takes an AllColors object and 
    // fills each of the tables cells with colours in order 
    // they appear in the AllColors.colors array, then repeats
    this.FillTableInOrder = function(allColor){
      let count = 0
      for(let i = 0; i < this.y; i++){
        this.tableArray.push([])
        for(let j = 0; j < this.x; j++){
          count++
          count = count % allColor.colors.length // % give us a remainder
          this.tableArray[i].push(allColor.colors[count])
        }
      }
    }
  
    // DisplayTable method interfaces with the HTML of the site and displays the table
    // Don't worry about its workings
    this.DisplayTable = function() {
      this.table = document.createElement("table", "border = 1")
      this.table.style.border = "1px solid #000"
      var tableBody = document.createElement('tbody')
      var context = this   // Jamie's fix
      this.tableArray.forEach(function(rowData) {
        var row = document.createElement('tr')
  
        rowData.forEach(function(cellData) {
          var cell = document.createElement('td')
          cell.style.background = cellData
          cell.width = window.innerWidth / context.x
          cell.height = window.innerHeight / context.y
          row.appendChild(cell)
                
          })
        tableBody.appendChild(row)
      })
  
      this.table.appendChild(tableBody)
      document.body.appendChild(this.table)
    }
  
    // RemoveTable removes the table from the HTML
    this.RemoveTable = function(){
      this.tableArray = []
      this.table.remove()
    }
  }

  
  // Declare our objects
  let myColors = new AllColors(["blue", "darkblue", "orange", "darkgrey"])
  let myTable = new Table(4,4)
  myTable.FillTableInOrder(myColors)
  myTable.DisplayTable()
  
  function RandomiseTableAndDisplay(){
    myColors.RemoveColor()
    myTable.RemoveTable()
    myColors.AddRandomColor()
    myTable.DisplayTable()
  }

  
  setInterval("RandomiseTableAndDisplay()", 500)

  
  