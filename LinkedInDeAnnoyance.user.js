// ==UserScript==
// @name         LinkedInDeAnnoyance
// @namespace    https://itchyeyes.net/
// @version      0.3
// @description  Remove annoying design elements from LinkedIn mobile site.
// @author       Donald Johnson
// @match        https://*.linkedin.com/*
// @match        https://linkedin.com/*
// @grant        none
// ==/UserScript==

// Copyright 2019 Donald 'kandiyohi' Johnson
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

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
