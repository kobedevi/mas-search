const form = document.querySelector("#form");
const list = document.querySelector("#list");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    list.innerHTML = "";
    const data = new FormData(form);
    for (const [name,value] of data) {
        // sitesMapper(value);
        window.open(`https://www.google.com/search?q=${value}+site%3Awrecksite.eu+OR+site%3Ashipsnostalgia.com+OR+site%3Aclydeships.co.uk+OR+site%3Atynebuiltships.co.uk+OR+site%3Amarhisdata.nl+OR+site%3Atheshipslist.com+OR+site%3Ashippingtandy.com+OR+site%3Auboat.net+OR+site%3Asunderlandships.com+OR+site%3Anavalmarinearchive.com&sca_esv=582945116&rlz=1C1GCEA_enBE1040BE1041&sxsrf=AM9HkKkKys8pbrgwy0MFHjIwMpMiHzX3zA%3A1700136882424&ei=sgdWZZLAGZKii-gPjsyqgAU&ved=0ahUKEwiS4ci3v8iCAxUS0QIHHQ6mClAQ4dUDCBA&uact=5&oq=test+site%3Awrecksite.eu+OR+site%3Ashipsnostalgia.com+OR+site%3Aclydeships.co.uk+OR+site%3Atynebuiltships.co.uk+OR+site%3Amarhisdata.nl+OR+site%3Atheshipslist.com+OR+site%3Ashippingtandy.com+OR+site%3Auboat.net+OR+site%3Asunderlandships.com+OR+site%3Anavalmarinearchive.com&gs_lp=Egxnd3Mtd2l6LXNlcnAi_QF0ZXN0IHNpdGU6d3JlY2tzaXRlLmV1IE9SIHNpdGU6c2hpcHNub3N0YWxnaWEuY29tIE9SIHNpdGU6Y2x5ZGVzaGlwcy5jby51ayBPUiBzaXRlOnR5bmVidWlsdHNoaXBzLmNvLnVrIE9SIHNpdGU6bWFyaGlzZGF0YS5ubCBPUiBzaXRlOnRoZXNoaXBzbGlzdC5jb20gT1Igc2l0ZTpzaGlwcGluZ3RhbmR5LmNvbSBPUiBzaXRlOnVib2F0Lm5ldCBPUiBzaXRlOnN1bmRlcmxhbmRzaGlwcy5jb20gT1Igc2l0ZTpuYXZhbG1hcmluZWFyY2hpdmUuY29tSABQAFgAcAB4AJABAJgBAKABAKoBALgBA8gBAOIDBBgAIEE&sclient=gws-wiz-serp`, '_blank').focus();
    }
})

// const sitesMapper = (value) => {
//     const sites = [];
//     sites.push(`https://www.google.com/search?q=${value}+site%3Awrecksite.eu+OR+site%3Ashipsnostalgia.com+OR+site%3Aclydeships.co.uk+OR+site%3Atynebuiltships.co.uk+OR+site%3Amarhisdata.nl+OR+site%3Atheshipslist.com+OR+site%3Ashippingtandy.com+OR+site%3Auboat.net+OR+site%3Asunderlandships.com+OR+site%3Anavalmarinearchive.com&sca_esv=582945116&rlz=1C1GCEA_enBE1040BE1041&sxsrf=AM9HkKkKys8pbrgwy0MFHjIwMpMiHzX3zA%3A1700136882424&ei=sgdWZZLAGZKii-gPjsyqgAU&ved=0ahUKEwiS4ci3v8iCAxUS0QIHHQ6mClAQ4dUDCBA&uact=5&oq=test+site%3Awrecksite.eu+OR+site%3Ashipsnostalgia.com+OR+site%3Aclydeships.co.uk+OR+site%3Atynebuiltships.co.uk+OR+site%3Amarhisdata.nl+OR+site%3Atheshipslist.com+OR+site%3Ashippingtandy.com+OR+site%3Auboat.net+OR+site%3Asunderlandships.com+OR+site%3Anavalmarinearchive.com&gs_lp=Egxnd3Mtd2l6LXNlcnAi_QF0ZXN0IHNpdGU6d3JlY2tzaXRlLmV1IE9SIHNpdGU6c2hpcHNub3N0YWxnaWEuY29tIE9SIHNpdGU6Y2x5ZGVzaGlwcy5jby51ayBPUiBzaXRlOnR5bmVidWlsdHNoaXBzLmNvLnVrIE9SIHNpdGU6bWFyaGlzZGF0YS5ubCBPUiBzaXRlOnRoZXNoaXBzbGlzdC5jb20gT1Igc2l0ZTpzaGlwcGluZ3RhbmR5LmNvbSBPUiBzaXRlOnVib2F0Lm5ldCBPUiBzaXRlOnN1bmRlcmxhbmRzaGlwcy5jb20gT1Igc2l0ZTpuYXZhbG1hcmluZWFyY2hpdmUuY29tSABQAFgAcAB4AJABAJgBAKABAKoBALgBA8gBAOIDBBgAIEE&sclient=gws-wiz-serp`);
//     sites.push(`https://www.clydeships.co.uk/list.php?vessel=${value}&year_built=&builder=`);
//     sites.push(`http://search.freefind.com/find.html?oq=test&id=25190955&pageid=r&_charset_=UTF-8&bcd=%C3%B7&scs=1&query=${value}&Find=Search&mode=ALL`);
//     lister(sites);
// }

// const lister = (sites) => {
//     sites.forEach(site => {
//         const item = document.createElement('li');
//         const link = document.createElement('a');
//         link.innerHTML = site;
//         link.href = site;
//         link.target = "_blank";
//         list.appendChild(item);
//         item.appendChild(link);
//     });
// }