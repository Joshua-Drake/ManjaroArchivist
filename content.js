const checkIfNewForum = document.getElementsByClassName('page-not-found');
if(checkIfNewForum.length === 1){
let forumAddress = document.URL.split("forum");
window.location.replace(forumAddress[0] + 'archived.forum' + forumAddress[1]);
};