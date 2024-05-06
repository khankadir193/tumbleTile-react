// import unknown from "../assests/unknown.png";

import { baseURL } from "./URL";

export const xtra = (input, count) => {
    if (input?.includes("bean bag") || input?.includes("Bean Bag")) {
        return `worth ${count} Beans`;
    } else if (input?.includes("Beans") || input?.includes("beans")) {
        return `x${count}`;
    } else if (input?.includes("gems") || input?.includes("Gems")) {
        return `x${count}`;
    } else if (input?.includes("xp") || input?.includes("XP")) {
        return `${count}`;
    } else {
        return `x${count <= 1 ? count + " day" : count + " days"}`;
    }
};
export const captureImageError = (event) => {
    event.target.src = '';
    return true;
};

export const drawGame = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    return {
        errorCode: 0,
        msg: "success",
        data: {
            scores: randomNumber,
            rewardContent:
                "VIP x 1 day + 500 Beans + Victory Slide entrance x 2 days",
            rewardDTOList: [
                {
                    type: 8,
                    id: 100001,
                    count: 1,
                    desc: "VIP",
                },
                {
                    type: 1,
                    count: 500,
                    desc: "Beans",
                },
                {
                    type: 4,
                    id: 1548,
                    count: 2,
                    desc: "Victory Slide entrance",
                },
            ],
        },
    };
};
export const bodyFixes = (check, scroll, set) => {
    if (check) {
        document.body.style.overflowY = "auto";
        document.body.style.removeProperty("top");
        document.body.style.removeProperty("position");
        window.scrollTo(0, scroll);
    } else {
        set(window.pageYOffset);
        document.body.style.position = "fixed";
        // document.body.style.top = `${scroll}vw`;
        document.body.style.overflowY = "hidden";
    }
};
export function convertToPaginatedArray(flatArray, itemsPerPage) {
    const paginatedArray = [];

    for (let i = 0; i < flatArray.length; i += itemsPerPage) {
        const page = flatArray.slice(i, i + itemsPerPage);
        paginatedArray.push(page);
    }

    return paginatedArray;
}
export function createMarkup(markUp) {
    return { __html: markUp };
}

export const getLevelUrl = (talent, level) => {
    if (talent) {
        return baseURL + "/streamkar/common/img/tlv/" + level + ".png";
    } else {
        return baseURL + "/streamkar/common/img/ulv/" + level + ".png";
    }
};

export const blockInvalidChar = (e) => {
    if (["e", "E", "+", "-", "."].includes(e.key)) {
        e.preventDefault();
    }
};


export function convertToNestedArray(arr) {
    let nestedArray = [];
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i + 1]) {
            nestedArray.push([arr[i], arr[i + 1]]);
        } else {
            nestedArray.push([arr[i]]);
        }
    }
    return nestedArray;
}
export const convertToTime = (time) => {
    let dateObject = new Date(time);
    return dateObject.toLocaleString("en-US", { timeZone: "GMT" });
};
export function getOrdinal(n) {
    let ord = "th";

    if (n % 10 == 1 && n % 100 != 11) {
        ord = "st";
    } else if (n % 10 == 2 && n % 100 != 12) {
        ord = "nd";
    } else if (n % 10 == 3 && n % 100 != 13) {
        ord = "rd";
    }

    return ord;
}
export function circularText(
    className,
    text,
    radius,
    range,
    startPos,
    css,
    bottomCss
) {
    var textArr = text.split("");
    var deg = range / textArr.length;
    var newElement = "";
    textArr.forEach(function (ch) {
        ch =
            '<p style="height:' +
            radius +
            "vw;" +
            css +
            "; transform:rotate(" +
            startPos +
            "deg); left:50%;top:" +
            (radius / 2 - radius) +
            'vw; position:absolute; transform-origin:0 100%">' +
            '<span style="' +
            bottomCss +
            '">' +
            ch +
            "</span>" +
            "</p>";
        newElement = newElement + ch;
        startPos += deg;
    });
    return `<div class="${className}">${newElement}</div>`;
}
export function goTo(isLive, userId, roomId) {
    if (window.UA.android) {
        let url = "streamkar://m.streamkar.com/route";
        if (isLive) {
            url = url + "/room?roomId=" + roomId;
        } else {
            url = url + "/user?userId=" + userId;
        }
        if (userId || roomId) {
            window.phone.routeViewPage(url);
        }
    } else {
        window.location.href = "http://www.kktv1.com/m/?roomid=" + userId + "";
    }
}
