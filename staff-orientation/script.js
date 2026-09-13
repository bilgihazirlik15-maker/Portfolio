const teamData = {
  leadership: {
    title: "Program Leadership",
    copy: "Meet the programme leader who coordinates the strategic direction of the school and supports academic decision-making.",
    profiles: [
      { name: "Aylin Demirtaş", role: "Director, School of Foreign Languages", extension: "6101", room: "B501", face: 1 },
    ],
  },
  coordinators: {
    title: "Level Coordinators",
    copy: "Meet the level coordinators who support planning, materials, assessment, and day-to-day questions.",
    profiles: [
      { name: "Barış Arslan", role: "Level 1 Coordinator", extension: "6166", room: "B511", face: 2 },
      { name: "Selin Korkmaz", role: "Level 2 Coordinator", extension: "6436", room: "B511", face: 3 },
      { name: "Murat Özkan", role: "Level 3 Coordinator", extension: "6638", room: "B511", face: 4 },
      { name: "Ece Yalçın", role: "Level 4 Coordinator", extension: "6176", room: "B511", face: 5 },
      { name: "Kerem Aydın", role: "Level 5 Coordinator", extension: "6324", room: "B511", face: 6 },
    ],
  },
  testing: {
    title: "Testing Members",
    copy: "Meet the colleagues who coordinate testing, exam administration, grading procedures, and assessment support.",
    profiles: [
      { name: "Burcu Erdem", role: "Testing Member", extension: "6374", room: "B602", face: 7 },
      { name: "Emre Şahin", role: "Testing Member", extension: "6241", room: "B602", face: 8 },
      { name: "Gizem Aksoy", role: "Testing Member", extension: "6269", room: "B602", face: 9 },
      { name: "Can Karaca", role: "Testing Member", extension: "6234", room: "B602", face: 10 },
      { name: "Sevgi Balcı", role: "Testing Member", extension: "6336", room: "B602", face: 11 },
    ],
  },
  trainers: {
    title: "Teacher Trainers",
    copy: "Meet the trainers who support professional development, classroom practice, and reflective teaching.",
    profiles: [
      { name: "Nihat Taşçı", role: "Teacher Trainer", extension: "6258", room: "B407", face: 12 },
      { name: "Büşra Yiğit", role: "Teacher Trainer", extension: "6416", room: "B407", face: 13 },
      { name: "Eren Büyükkaya", role: "Teacher Trainer", extension: "6416", room: "B407", face: 14 },
      { name: "Ayşe Apaydın", role: "Teacher Trainer", extension: "6416", room: "B407", face: 15 },
    ],
  },
  humanResources: {
    title: "Human Resources",
    copy: "This space explains who can help with employment documents, institutional procedures, benefits, and personnel questions.",
    profiles: [
      { name: "Mert Kurtoğlu", role: "Human Resources", extension: "6325", room: "B603", face: 16 },
    ],
  },
  educationalTechnologies: {
    title: "Educational Technologies",
    copy: "Meet the team that supports digital learning platforms, classroom technologies, online tools, and technical guidance.",
    profiles: [
      { name: "Elif Çetin", role: "Learning Technologies", extension: "6167", room: "B603", face: 17 },
    ],
  },
  studentAffairs: {
    title: "Student Affairs Office",
    copy: "This section introduces the office that supports student records, attendance processes, communication, and student-facing procedures.",
    profiles: [
      { name: "Burak Kaya", role: "Student Affairs Office", extension: "6867", room: "BZ-09", face: 18 },
      { name: "Mihriban Güneş", role: "Student Affairs Office", extension: "6261", room: "BZ-09", face: 19 },
    ],
  },
  planning: {
    title: "Planning Office",
    copy: "Here, new instructors learn who coordinates timetables, classroom assignments, teaching schedules, and operational planning.",
    profiles: [
      { name: "Serdar Alkan", role: "Planning Office", extension: "6296", room: "B514", face: 20 },
      { name: "Ayşen Sezer", role: "Planning Office", extension: "6123", room: "B514", face: 21 },
    ],
  },
};

const programmeData = {
  levels: {
    title: "Levels and Courses",
    copy: "The programme structure follows a level-based path. Students move through sequenced language levels with clearly defined objectives, course routines, and classroom expectations.",
    items: [
      ["A1 / Level 1", "Foundation language and confidence-building for new English learners."],
      ["A2 / Level 2", "Core skills development through more connected language use."],
      ["B1 / Level 3", "More independent communication, reading, writing, and interaction."],
      ["B1+ / Level 4", "Semi-academic materials and stronger written production."],
      ["B2 / Level 5", "Academic readiness, independent learning, and final progression."],
    ],
  },
  assessment: {
    title: "Assessment Essentials",
    copy: "Assessment information is presented as a practical overview for new instructors, keeping the same orientation topic without changing the underlying programme schema.",
    items: [
      ["Attendance", "Attendance contributes to the overall learning process and helps instructors monitor engagement."],
      ["Class Participation", "Students are expected to arrive prepared, participate actively, and engage with lesson tasks."],
      ["Midterm Examinations", "Common examinations support consistent measurement across classes and levels."],
      ["Online Homework and Activities", "Digital work extends practice beyond class and supports independent study."],
      ["End-of-Level Progress Test", "Progress tests help determine readiness to move forward in the programme."],
    ],
  },
};

const detailPanel = document.querySelector("#detailPanel");
const buttons = document.querySelectorAll("[data-panel]");
const restartButton = document.querySelector("#restartButton");

function renderProfiles(panel) {
  return `
    <h2>${panel.title}</h2>
    <p>${panel.copy}</p>
    <div class="profile-grid">
      ${panel.profiles
        .map(
          (profile) => `
            <article class="profile-card">
              <div class="face face-${profile.face}" aria-hidden="true"></div>
              <div>
                <strong>${profile.name}</strong>
                <small>${profile.role}</small>
                <span>Ext: ${profile.extension}</span>
                <span>Room# ${profile.room}</span>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderInfo(panel) {
  return `
    <h2>${panel.title}</h2>
    <p>${panel.copy}</p>
    <div class="info-list">
      ${panel.items
        .map(
          ([title, copy]) => `
            <article class="info-card">
              <strong>${title}</strong>
              <p>${copy}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function showPanel(key) {
  const teamPanel = teamData[key];
  const programmePanel = programmeData[key];
  detailPanel.innerHTML = teamPanel ? renderProfiles(teamPanel) : renderInfo(programmePanel);
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.panel === key));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => showPanel(button.dataset.panel));
});

restartButton.addEventListener("click", () => {
  detailPanel.innerHTML = `
    <h2>Start with the team map</h2>
    <p>Select a group from the menu to see responsibilities, rooms, extensions, and the people connected to that support area.</p>
  `;
  buttons.forEach((button) => button.classList.remove("active"));
});
