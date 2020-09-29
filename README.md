# project_repo_CSE_455 BackEnd Branch
Project Team Repo for COVID 19 project

**This graph uses redux** 
The section to add to the payload or parameters/extra calls(sources) is below:

![api_call](https://github.com/r0meroh/project_repo_CSE_455/blob/BackEnd/dynamic_graph_images/api_action_redux.PNG)

Here is where the source api call was taken from and reformated:

![source](https://github.com/r0meroh/project_repo_CSE_455/blob/BackEnd/dynamic_graph_images/datasource.PNG)

*here is the middleware to allow async return calls to payload*:

![middleware](https://github.com/r0meroh/project_repo_CSE_455/blob/BackEnd/dynamic_graph_images/middleware.PNG)


***Below are images of the graph rendering initally empty then being populated by all sources***

![both](https://github.com/r0meroh/project_repo_CSE_455/blob/BackEnd/dynamic_graph_images/both_graphs.PNG)

***The graph re-renders dynamically(changing graph axis labels) depending upon which parameter is selected***

![deaths](https://github.com/r0meroh/project_repo_CSE_455/blob/BackEnd/dynamic_graph_images/deaths_only.PNG)

![cases](https://github.com/r0meroh/project_repo_CSE_455/blob/BackEnd/dynamic_graph_images/cases_only.PNG)

