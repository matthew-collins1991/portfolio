

document.addEventListener('DOMContentLoaded', () => {
    init()
  })


const projectCardDiv = document.querySelector('#project-cards')

const projectCards = (projects) => {

    projects.map(project => {
        const projectDiv = document.createElement('div')
        projectDiv.innerHTML =
        `
        <h1>${project.name}</h1>
        <h3>${project.blurb}</h3>
        <p>${project.description}</p>
        <p>${project.stack}</p>
        <br>
        `
        projectCardDiv.append(projectDiv)
    })
}

const init = () => {
    projectCards(projects)
}

