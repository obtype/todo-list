
export {initPage};





function initSidebar(){
    let sidebar = document.createElement('div');
    let sidebarTitle = document.createElement('div');

    //start designing the look and structure of the page Pl0x <3
    let defaultSec= document.createElement('div');
    let defaultSecTitle = document.createElement('div');

    let projectSec = document.createElement('div');
    let projectSecTitle = document.createElement('div');
    let projectList = document.createElement('ul');
    let projectListItem1 = document.createElement('li');
    let projectListItem2 = document.createElement('li');

    

    sidebarTitle.textContent = 'Ink Scrolls'
    projectSecTitle.textContent = 'Your Projects';
    defaultSecTitle.textContent = 'Default List';
    projectListItem1.textContent = 'House Chores';
    projectListItem2.textContent = 'Wedding Anniversary';


    sidebar.classList.add('sidebar');
    sidebarTitle.classList.add('title');
    defaultSec.classList.add('default');
    defaultSecTitle.classList.add('title');
    projectSec.classList.add('project');
    projectSecTitle.classList.add('title');

    defaultSecTitle.setAttribute('data-project', 'none');
    


    projectSec.appendChild(projectSecTitle);
    projectSec.appendChild(projectList);
    
    projectList.appendChild(projectListItem1);
    projectList.appendChild(projectListItem2);

    defaultSec.appendChild(defaultSecTitle);

    sidebar.appendChild(sidebarTitle);
    sidebar.appendChild(defaultSec);    
    sidebar.appendChild(projectSec);



    return sidebar;

}




function initDashBoard(){
    let dashboard = document.createElement('div');
    let title = document.createElement('div');
    let mainContent = document.createElement('div');
    let mainContentTitle = document.createElement('div');
    let mainContentCards = document.createElement('div');
    let popupContainer = document.createElement('div');


    title.classList.add('title');
    dashboard.classList.add('dashboard');
    mainContent.classList.add('main');
    mainContentTitle.classList.add('title');
    mainContentCards.classList.add('card-list');
    popupContainer.classList.add('pop-container');

    popupContainer.style = 'display: none;';


    title.textContent = 'Welcome back, Scribe Master!';
    mainContentTitle.textContent = "Your (Project's) notes";

    mainContent.appendChild(mainContentTitle);
    mainContent.appendChild(mainContentCards);
    mainContent.appendChild(popupContainer);
    
    dashboard.appendChild(title);
    dashboard.appendChild(mainContent);
    return dashboard;

}

function initFooter(){
    let footer = document.createElement('div');
    footer.classList.add('footer');

    let center = document.createElement('div');
    center.classList.add('center');
    center.textContent = 'An Obtype creation.';

    footer.appendChild(center);


    return footer;
}




function initPage(){
    let content = document.querySelector('div.content');
    //Create the initalizing function in this file. make all the necessary functions to create the header(maybe), sidebar, footer, etc. Basically all the things that dont really need to be dynamic... ig? lol <3



    content.appendChild(initSidebar());
    content.appendChild(initDashBoard());
    content.appendChild(initFooter());

}

