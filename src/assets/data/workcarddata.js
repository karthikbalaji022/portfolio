import portfolio from "../../assets/images/workcard/portfolio.PNG";
import planyourday from "../../assets/images/workcard/planyourday.PNG";
import jobs from "../../assets/images/workcard/jobs.PNG";
import simon from "../../assets/images/workcard/simon.PNG";
import todo from "../../assets/images/workcard/todo.PNG";
import zomato from "../../assets/images/workcard/zomato.png";
import calculator from "../../assets/images/workcard/calculator.PNG";

const carddata=[
    {
        img:portfolio,
        title:"Portfolio",
        description:"This project consists of information about Karthik Balaji and all the projects and work he has done or contributed.",
        techStack:["HTML","CSS","SASS","Javascript","React","Context API","React forms"],
        deployed:true,
        github:"https://github.com/karthikbalaji022/portfolio",
        deployLink:""
    },
    {
        img:planyourday,
        title:"Plan your day",
        description:"Planyourday is a application whuch lets you plan your day by finding nearby restaurants, attractions and hotels.(If you are seeing no data then the api call limit is exceeded)",
        techStack:["HTML","CSS","SASS","Javascript","React","Context API","google maps react","Rapid Api"],
        deployed:true,
        github:"https://github.com/karthikbalaji022/planyourday",
        deployLink:"https://karthikbalaji022.github.io/planyourday/"
    },
    {
        img:jobs,
        title:"Job manager",
        description:"This appliation lets you manage your job applications and keep track of the status of the application",
        techStack:["HTML","SASS","Javascript","React","Context API","NodeJs","Express","Jwt","MongoDb","Web Security"],
        deployed:false,
        github:"https://github.com/karthikbalaji022/jobsapi",
        deployLink:""
    },
    {
        img:simon,
        title:"Simon game",
        description:"A memory game with with the functionalities of arrays and memoization",
        techStack:["HTML","CSS","Javascript"],
        deployed:true,
        github:"https://github.com/karthikbalaji022/KB_Simon_game",
        deployLink:"https://karthikbalaji022.github.io/KB_Simon_game/"
    },
    {
        img:todo,
        title:"Todo app",
        description:"This is a basic todo application to set your todolist and stay on track in your day to day life.",
        techStack:["HTML","CSS","Javascript","LocalStorage"],
        deployed:true,
        github:"https://github.com/karthikbalaji022/ToDo-web-app",
        deployLink:"https://karthikbalaji022.github.io/ToDo-web-app/"
    },
    {
        img:zomato,
        title:"Zomato clone",
        description:"A zomato clone application with basic functionalities.",
        techStack:["HTML","CSS","Javascript","Reactjs", "SASS"],
        deployed:false,
        github:"https://karthikbalaji022.github.io/",
        deployLink:""
    },
    {
        img:calculator,
        title:"Calculator app",
        description:"A basic calculator application",
        techStack:["HTML","CSS","Javascript"],
        deployed:true,
        github:"https://github.com/karthikbalaji022/Calculator",
        deployLink:"https://karthikbalaji022.github.io/Calculator/"
    }


]

export default carddata;