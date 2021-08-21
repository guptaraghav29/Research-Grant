import XAPI from "@xapi/xapi";


//xAPI data
const endpoint = "https://mtsac-lrs.lrs.io/xapi/";
const username = process.env.LRS_USERNAME || "rilnah";
const password = process.env.LRS_PASSWORD || "mecnod";
const auth = XAPI.toBasicAuth(username, password);
const xapi = new XAPI(endpoint, auth);


export const sendXAPIStatement = (name, email, verb, objectID, object, objectDescription, activityType, userResponse) => {

    const myStatement = {
        "actor": {
            "name": name, //student name
            "mbox": "mailto:" + email //student email
        },
        "verb": {
            "id": "https://w3id.org/xapi/dod-isd/verbs/" + verb, // the verbID will be the verb URL on the list in column F
            "display": {
                "en-US": verb // verb is the english desc of the url
            }
        },
        "object": {
            "id": objectID, //course name + module ex. https://www.ucr.edu/statics/module/1/moments-of-forces
            "definition": {
                "name": { "en-US": object }, //english version of module name
                "description": { "en-US": objectDescription }, // ex. "concepts quiz Q1" .. stay consistent on decs
                "type": activityType,
                // "interactionType": interaction // only include this section when using the assesment acitivity type case
            },
            "objectType": "Activity"
        },
        "result": {
            "response": userResponse,
            // "duration": finalDuration,
            // // "score": {
            // //     "min": 0,
            // //     "max": maxScore,
            // //     "raw": userScore,//actual score so far
            // //     "scaled": scaledScore // actual over max
            // // },
            // "success": userDidPass, //>70 if user passed assesment
            // "completion": didComplete
        },
    };

    xapi.sendStatement(myStatement);
    console.log("A xAPI statement has been submitted.");
}


