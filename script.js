const projects = [
  {
    index: "01",
    title: "GitHub Portfolio",
    description:
      "The main destination for my code, repositories, and future project work. Recruiters can review my technical profile directly from here.",
    link: "./redirect.html?to=github",
    label: "Visit GitHub"
  },
  {
    index: "02",
    title: "Repository Section",
    description:
      "A direct path to the repositories section where upcoming academic and personal projects will be published and maintained.",
    link: "./redirect.html?to=repositories",
    label: "Open Repositories"
  },
  {
    index: "03",
    title: "LinkedIn Profile",
    description:
      "A networking link for recruiters and connections who want to view my profile and reach out directly.",
    link: "https://www.linkedin.com/in/rahul-singh-1a29013a2",
    label: "Visit LinkedIn"
  },
  {
    index: "04",
    title: "Email Contact",
    description:
      "A direct email link for internship, placement, and collaboration conversations.",
    link: "./redirect.html?to=email",
    label: "Send Email"
  }
];

const projectGrid = document.querySelector("#project-grid");

projects.forEach((project) => {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = project.link;

  card.innerHTML =                                         `<div class="project-card-top">
      <span class="project-index">${project.index}</span>
      <span class="project-link">${project.label}</span>
    </div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>`;

  projectGrid.appendChild(card);
});

document.querySelectorAll('[data-direct-link="linkedin"]').forEach((link) => {
  link.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/rahul-singh-1a29013a2";
  });
});
