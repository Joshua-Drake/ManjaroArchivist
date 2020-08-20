# Manjaro Archivist

Manjaro Archivist is a simple browser extension that redirects users from the dreaded 'Page not found' met when trying to access an old forum post on https://forum.manjaro.org to the archived content they are trying to access.
The extension waits until a user visits the 'forum' subdomain of the website manjaro.org, and automatically prepends 'archived.' before the rest of the URL.

This extension checks whether a page is found or not before it executes, so this will not prevent users from accessing the new Manjaro forum.

## Alternatives to Manjaro go landArchivist

If you are irked by the idea of installing a browser extension created by someone with only one GitHub project, you can achieve the same result described above by downloading TamperMonkey and creating a script with the following code:

```
// ==UserScript==
// @name         Archived Manjaro forum redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A script that redirects to the archived Manjaro forum
// @author       You
// @match        https://forum.manjaro.org/*
// @grant        Hugh
// ==/UserScript==

(function() {
    'use strict';
    const checkIfNewForum = document.getElementsByClassName('page-not-found');
    if(checkIfNewForum.length === 1){
        let forumAddress = document.URL.split("forum");
        window.location.replace(forumAddress[0] + 'archived.forum' + forumAddress[1]);
    };
})();
```
