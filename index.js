document.addEventListener('DOMContentLoaded', () => {
    init()
  })


const projectCardDiv = document.querySelector('#project-cards')




const projectCards = (projects) => {

    projects.map(project => {
        const projectLink = document.createElement('a')
        projectLink.setAttribute('href', project.url);
        projectLink.setAttribute('target', '_blank');
        projectLink.setAttribute('rel', 'noreferrer noopener');
        projectLink.setAttribute('class', 'ui raised card');
        projectLink.innerHTML = 
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

        projectCardDiv.append(projectLink)
    })
    
}

const init = () => {
    projectCards(projects)
}

