document.addEventListener('DOMContentLoaded', () => {
    init()
  })


const projectCardDiv = document.querySelector('#project-cards')

const getTechName = (string) => {
    return string.split('.')[0]
}

(() => {
    const form = document.querySelector('form');
    const formResponse = document.querySelector('js-form-response');
  
    form.onsubmit = e => {
      e.preventDefault();
  
      // Prepare data to send
      const data = {};
      const formElements = Array.from(form);
      formElements.map(input => (data[input.name] = input.value));
  
      // Log what our lambda function will receive
      console.log(JSON.stringify(data));
  
      // Construct an HTTP request
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action, true);
      xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  
      // Send the collected data as JSON
      xhr.send(JSON.stringify(data));
  
      // Callback function
      xhr.onloadend = response => {
        if (response.target.status === 200) {
          // The form submission was successful
          form.reset();
          formResponse.innerHTML = 'Thanks for the message. I’ll be in touch shortly.';
        } else {
          // The form submission failed
          formResponse.innerHTML = 'Something went wrong';
          console.error(JSON.parse(response.target.response).message);
        }
      };
    };
  })();
  

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
            <img id='thumbnail' src="./${project.image}">
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
                <span class="centered">
                    <ul class="tech-icon-container">
                ${project.stack.map(tech => {
                    return (
                        `
                    <li id="html-icon" class="tech-icon-small">
                        <img class="tech-icon-small" src="public/img/${tech}" alt="${getTechName(tech)}"
                    </li>
                    `
                    )
                    
             
                }).join('')}
                </ul>
                </span>
            </div>

        `

        projectCardDiv.append(projectLink)
    })
    
}

const init = () => {
    projectCards(projects)
}

