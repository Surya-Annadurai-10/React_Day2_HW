let root = document.getElementById("root");

const div = React.createElement("div" ,{className:"main-container"} ,
    React.createElement("h1" , {className:"heading"} , "Topics Covered") ,
React.createElement("p" , {} , "The Following is a list of all the topis we cover in the MDN learning area."),
React.createElement("div" , {className:"para-div"} , 
    React.createElement("a" , {href:"www.google.com" , className:"anchor"} , "Getting started with the web"),
React.createElement("p" , {className:"para"} , "Provides a practical introduction to web development for complete beginners")),
React.createElement("div" , {className:"para-div"} , React.createElement("a" , {href:"www.google.com", className:"anchor"} , "HTML--Structuring the web"),
React.createElement("p" , {className:"para"} , "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.")),
React.createElement("div" , {className:"para-div"} , React.createElement("a" , {href:"www.google.com", className:"anchor"} , "CSS--Styling the web"),
React.createElement("p" , {className:"para"} , "CSS is the language that we use to control our web content's style and layout , as well as addng behaviour like animation. This topic provides comprehensive coverage of CSS.")),
React.createElement("h4" , {className:"tag"} , "Created By Surya Annadurai"))


const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(div);