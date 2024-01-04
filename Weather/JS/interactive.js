//從locationList取各縣市的英文名字 > .countyAndCityTabs
function countyAndCityData() {
    let tabsContainer = document.querySelector('.countyAndCityTabs');
    locationList.forEach(location => {
        let tabsDiv = document.createElement('div');
        tabsDiv.className = 'tab';
        //建立ID
        tabsDiv.id = location.svgClass;
        //點擊呼叫focusOnLoc
        tabsDiv.onclick = function () {
            focusOnLoc(location.engName);
        };
        tabsDiv.textContent = location.engName;
        //把tabsDiv > .countyAndCityTabs
        tabsContainer.appendChild(tabsDiv);
    });
}

//從areas取各區域的名稱 > .areaTabs
function areaData() {
    let tabsContainer = document.querySelector('.areaTabs');
    areas.forEach(area => {
        let tabsDiv = document.createElement('div');
        tabsDiv.className = 'areaTab';
        //賦予area id
        tabsDiv.id = area;
        //點擊呼叫focusOnArea
        tabsDiv.onclick = function () {
            focusOnArea(area);
        };
        tabsDiv.textContent = area;
        //把tabsDiv > .areaTabs
        tabsContainer.appendChild(tabsDiv);
    });
}
//網頁一進入時所有的標籤顯示出來
function init() {
    countyAndCityData();
    areaData();
}
init();

//縣市小卡資訊
function apiLocParse(location) {
    let chiloc = locationList.filter(loc => loc.engName == location)[0].chiName;
    let returnData = "";
    apiData.forEach(apiLoc => {
        if (apiLoc.locationName === chiloc)
            returnData = apiLoc
        return;
    })
    return returnData;
}
//區域小卡資訊
function apiRegionParse(area) {
    //不重複
    let inAreaLoc = new Set();
    locationList.forEach((loc) => {
        if (loc.area === area) {
            inAreaLoc.add(loc.engName);
        }
    })
    //暫存
    let tmp = [];
    inAreaLoc.forEach((loc) => {
        tmp.push(apiLocParse(loc))
    })
    return tmp;
}

//countyAndCityTabs
function focusOnLoc(location) {
    //API 資訊
    let apiLoc = apiLocParse(location);
    // console.log(apiLoc);

    //插入card的DIV
    const cardAllContainer = document.querySelector(".cardAll");
    cardAllContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const carDiv = document.createElement('div');
        carDiv.className = 'card';
        carDiv.innerHTML =
            `
            <div class="cardheader">
                <div class="cardTime">${apiLoc.weatherElement[2].time[i].startTime}</div>
                <img class="weatherImg" src="./stylesheet/daytime/01CLEAR晴天.svg" alt="">
            </div>
            <div class="cardBody">
                <div class="place">${apiLoc.locationName}</div>
                <div class="Weather MaxT MinT">${apiLoc.weatherElement[2].time[i].parameter.parameterName}℃ ~ ${apiLoc.weatherElement[4].time[i].parameter.parameterName}℃</div>
                <div class="Weather PoP">rain${apiLoc.weatherElement[1].time[i].parameter.parameterName}%</div>
            </div>
            <div class="cardFooter">
                <div class="WeatherDescription">Comfort index
                    <br>${apiLoc.weatherElement[3].time[i].parameter.parameterName}
                </div>
            </div>
        `;
        cardAllContainer.appendChild(carDiv);
    }
    //消失.rollcardAll
    let disappearDiv = document.querySelector('.rollcardAll');
    disappearDiv.style.display = "none";
    //顯示.cardAll
    let appearDiv = document.querySelector('.cardAll');
    appearDiv.style.display = "flex";

    //改變loc標籤顏色
    locationList.forEach((loc) => {
        if (loc.engName === location) {
            let el = document.querySelector('#' + loc.svgClass);
            console.log(el);
            el.classList.add("options");
        } else {
            let el = document.querySelector('#' + loc.svgClass);
            el.classList.remove("options");
        }
    })


    //engName標籤 =>map的svgClass
    locationList.forEach((loc) => {
        if (loc.engName === location) {
            elems = document.querySelectorAll('.' + loc.svgClass);
            elems.forEach((elem) => {
                elem.classList.add('watching');
            })
        } else {
            elems = document.querySelectorAll('.' + loc.svgClass);
            elems.forEach((elem) => {
                elem.classList.remove('watching');
            })
        }
    })
    //清除area標籤顏色
    let notAreas = document.querySelectorAll('.areaTab');
    notAreas.forEach((notArea) => {
        notArea.classList.remove('active');
    })
}

//area
function focusOnArea(area) {
    //API 資訊
    let apiRegion = apiRegionParse(area);
    // console.log(apiRegion);

    //插入rollcard的DIV
    const rollcardAllContainer = document.querySelector('.rollcardAll');
    rollcardAllContainer.innerHTML = '';

    apiRegion.forEach((loc) => {
        //div
        const rollcardDiv = document.createElement('div');
        //CSS
        rollcardDiv.className = 'rollcard';
        rollcardDiv.innerHTML =
            `
            <div class="rollcardheader">
                <img class="rollweatherImg" src="./stylesheet/daytime/02MOSTLY CLEAR晴時多雲.svg" alt="">
                <div class="rollplace">${loc.locationName}</div>
            </div>
            <div class="rollcardBody">
                <div class="rollWeather MaxT MinT">${loc.weatherElement[2].time[0].parameter.parameterName}℃~${loc.weatherElement[4].time[0].parameter.parameterName}℃</div>
                <div class="rollWeather PoP">rain ${loc.weatherElement[1].time[0].parameter.parameterName}%</div>
                <div class="rollWeather Description">${loc.weatherElement[3].time[0].parameter.parameterName}</div>
            </div>
            `;
        rollcardAllContainer.appendChild(rollcardDiv);
    })

    // 消失.cardAll
    let disappearDiv = document.querySelector('.cardAll');
    disappearDiv.style.display = "none";
    //顯示.rollcardAll
    let appearDiv = document.querySelector('.rollcardAll');
    appearDiv.style.display = "flex";

    //改變area標籤顏色
    let areaId = document.querySelector('#' + area);
    areaId.classList.add("active");
    let notAreas = document.querySelectorAll('.areaTab');
    notAreas.forEach((notArea) => {
        if (notArea.id != area) {
            notArea.classList.remove('active');
        }
    })
    // 讓area顯示於地圖上
    locationList.forEach((loc) => {
        if (loc.area === area) {
            elems = document.querySelectorAll('.' + loc.svgClass);
            elems.forEach((elem) => {
                elem.classList.add('watching');
            })
        } else {
            elems = document.querySelectorAll('.' + loc.svgClass);
            elems.forEach((elem) => {
                elem.classList.remove('watching');
            })
        }
    })
}