document.addEventListener("DOMContentLoaded", function () {
  mapExperienceData();
});

function mapExperienceData() {
  let exp = [
    {
      org: "Student",
      position: "Mobile Developer",
      duration: "Feb 2023 - Jul 2023",
      technologies: ["Flutter", "Laravel"],
      details: ["Developed user-friendly e-commerce front-end applications similar to SahabatMt using Flutter, compatible with both iOS and Android platforms."],
    },
    {
      org: "Freelance",
      position: "Web Developer",
      duration: "Jan 2024 - Feb 2024 ",
      technologies: ["HTML", "PHP", "JavaScript", "CSS"],
      details: ["Developing a website for a help desk reporting damages to public facilities at the Faculty of Computer Science, Universitas Muslim Indonesia."],
    },
    {
      org: "Contractual Employee",
      position: "IT-Support",
      duration: "Sept 2023 - Dec 2023",
      technologies: ["Microsoft Word", "Microsoft Excel"],
      details: ["Maintaining and operating all types of technological devices at Kapasa Community Health Center.", "Managing the administration of several civil servants in the health sector."],
    },
  ];

  for (var i = 0; i < exp.length; i++) {
    var expCard = document.createElement("div");
    expCard.className = "exp-card";

    var expMetaDiv = document.createElement("div");
    expMetaDiv.className = "exp-meta";

    var orgName = document.createElement("h2");
    orgName.className = "heading2 exp-org";
    orgName.innerHTML = exp[i]["org"];

    var position = document.createElement("span");
    position.className = "label exp-position";
    position.innerHTML = exp[i]["position"];

    var session = document.createElement("p");
    session.className = "body2 exp-session";
    session.innerHTML = exp[i]["duration"];

    var technologiesHeading = document.createElement("span");
    technologiesHeading.className = "body2 exp-tech";
    technologiesHeading.innerHTML = "Technologies";

    var technologiesList = document.createElement("ul");
    technologiesList.className = "exp-tech-list";

    for (var k = 0; k < exp[i]["technologies"].length; k++) {
      var techName = document.createElement("li");
      techName.className = "body2 exp-tech-item";
      techName.innerHTML = exp[i]["technologies"][k];
      technologiesList.appendChild(techName);
    }
    expMetaDiv.appendChild(orgName);
    expMetaDiv.appendChild(position);
    expMetaDiv.appendChild(session);
    expMetaDiv.appendChild(technologiesHeading);
    expMetaDiv.appendChild(technologiesList);
    expCard.appendChild(expMetaDiv);

    var detailsList = document.createElement("ul");
    detailsList.className = "exp-detail";

    for (var k = 0; k < exp[i]["details"].length; k++) {
      var detail = document.createElement("li");
      detail.className = "body2 exp-detail-item";
      detail.innerHTML = exp[i]["details"][k];
      detailsList.appendChild(detail);
    }

    expCard.appendChild(detailsList);

    var experiences = document.getElementById("exp");
    experiences.appendChild(expCard);
  }
}
