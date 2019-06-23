// ==UserScript==
// @name         LinkedInDeAnnoyance
// @namespace    https://itchyeyes.net/
// @version      0.2
// @description  Remove annoying design elements from LinkedIn mobile site.
// @author       Donald Johnson
// @match        https://*.linkedin.com/*
// @match        https://linkedin.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function find_hostile_design_app_banner() {
        let tags = document.getElementsByTagName("span");
        for (let i = 0; i < tags.length; ++i) {
            if (tags[i].innerText === "Continue with mobile web") {
                return tags[i].parentElement;
            }
        }
        return null;
    }

    function find_and_kill_banners() {
        let hostile_banner_1 = find_hostile_design_app_banner();
        if (hostile_banner_1 !== null) {
            hostile_banner_1.click();
            console.log("Hostile banner found and removed.");
            clearInterval(kill_interval);
        }
    }

    let kill_interval = setInterval(find_and_kill_banners, 500);
})();