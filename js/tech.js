document.addEventListener("DOMContentLoaded", function () {
  mapTechData();
});

function mapTechData() {
  let tech = [
    {
      name: "HTML 5",
      icon: "images/tech/html.svg",
      type: "web-tech",
    },

    {
      name: "CSS 3",
      icon: "images/tech/css.svg",
      type: "web-tech",
    },

    {
      name: "Bootstrap",
      icon: "images/tech/bootstrap.svg",
      type: "web-tech",
    },

    {
      name: "Javascript",
      icon: "images/tech/js.svg",
      type: "web-tech",
    },

    {
      name: "SQL",
      icon: "images/tech/sql.svg",
      type: "database-tech",
    },
    {
      name: "Git & GitHub",
      icon: "images/tech/github.svg",
      type: "vc-tech",
    },

    {
      name: "Figma",
      icon: "images/tech/figma.svg",
      type: "design-tech",
    },
  ];

  for (var i = 0; i < tech.length; i++) {
    // div
    var techDiv = document.createElement("div");
    techDiv.className = "tech";

    // icon
    var techIconImg = document.createElement("img");
    techIconImg.className = "tech-icon";
    if (tech[i]["name"] == "Node.js") {
      techIconImg.style.height = "20px";
    }

    // tech name
    var techName = document.createElement("span");
    techName.className = "tech-label";

    techIconImg.src = tech[i]["icon"];
    techIconImg.alt = tech[i]["name"];

    techName.innerHTML = tech[i]["name"];

    var relatedDiv = document.getElementById(tech[i]["type"]);

    techDiv.appendChild(techIconImg);
    techDiv.appendChild(techName);
    relatedDiv.appendChild(techDiv);
  }
}
