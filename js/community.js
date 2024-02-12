document.addEventListener("DOMContentLoaded", function () {
  mapCommunityData();
});

function mapCommunityData() {
  let communities = [
    {
      name: "Himpunan Mahasiswa Islam (HMI), Faculty of Computer Science.",
      role: "Head Of Research Departement",
      session: "November 2022 - January 2023",
      logo: "images/community/HMI.png",
      link: "https://www.instagram.com/hmikomfikom.umi/",
      details: "HMI - Acquiring and shaping new Human Resources thinking to continue the organizational momentum.",
    },
    {
      name: "Badan Legislatif Mahasiswa (BLM), Faculty of Computer Science",
      role: "Chairperson of the Oversight Commission",
      session: "January 2023 - Present",
      logo: "images/community/Logo BLM.png",
      link: "https://fikom.umi.ac.id/",
      details: "BLM - Overseeing all the performance of the Badan Eksekutif Mahasiswa (BEM) in terms of work programs as well as individual performance of the officials.",
    },
  ];

  for (var i = 0; i < communities.length; i++) {
    var com = communities[i];
    var name = com.name;
    var role = com.role;
    var session = com.session;
    var logo = com.logo;
    var link = com.link;
    var details = com.details;

    var card = document.createElement("a");
    card.className = "community-card";

    var image = document.createElement("img");
    image.className = "community-logo";
    image.src = logo;
    image.alt = name;

    var info = document.createElement("div");
    info.className = "community-info";

    var cName = document.createElement("p");
    cName.className = "body1 c-title";
    cName.textContent = name;

    var cRole = document.createElement("span");
    cRole.className = "body2 c-position";
    cRole.innerHTML = role;

    var cSession = document.createElement("p");
    cSession.className = "label c-session";
    cSession.textContent = session;

    info.appendChild(cName);
    info.appendChild(cRole);
    info.appendChild(cSession);

    card.appendChild(image);
    card.appendChild(info);

    card.href = link;
    card.target = "_blank";

    var communitiesDiv = document.getElementById("communities");
    communitiesDiv.append(card);

    var point = document.createElement("li");
    point.className = "body2 cw-point";
    point.innerHTML = details;

    var points = document.getElementById("cw-points");
    points.appendChild(point);
  }
}
