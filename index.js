document.addEventListener('DOMContentLoaded', () => {
    init()
  })


const projectCardDiv = document.querySelector('#project-cards')




const projectCards = (projects) => {

    projects.map(project => {
        const projectDiv = document.createElement('div')
        projectDiv.className ="card"
        projectDiv.innerHTML =
        `

                <div class="image">
                    <img src="./${project.image}">
                </div>
            <div class="content">
                <div class="header">
                    ${project.name}
                </div>
                <div class="meta">
                    <a>${project.blurb}</a>
                </div>
                <div class="description">
                    ${project.description}
                </div>
            </div>
            <div class="extra content">
                <span class="left floated">
                ${project.stack}
                </span>
            </div>

        `
        projectCardDiv.append(projectDiv)
    })
}

const init = () => {
    projectCards(projects)
}

