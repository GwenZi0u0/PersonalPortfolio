let locationList = [
    { chiName: "嘉義縣", svgClass: "chiayi_county", engName: "Chiayi County", area: "southern" },
    { chiName: "新北市", svgClass: "new_taipei_city", engName: "New Taipei City", area: "northern" },
    { chiName: "嘉義市", svgClass: "chiayi_city", engName: "Chiayi City", area: "southern" },
    { chiName: "新竹縣", svgClass: "hsinchu_county", engName: "Hsinchu County", area: "northern" },
    { chiName: "新竹市", svgClass: "hsinchu_city", engName: "Hsinchu City", area: "northern" },
    { chiName: "臺北市", svgClass: "taipei_city", engName: "Taipei City", area: "northern" },
    { chiName: "臺南市", svgClass: "tainan_city", engName: "Tainan City", area: "southern" },
    { chiName: "宜蘭縣", svgClass: "yilan_county", engName: "Yilan County", area: "northern" },
    { chiName: "苗栗縣", svgClass: "miaoli_county", engName: "Miaoli County", area: "central" },
    { chiName: "雲林縣", svgClass: "yunlin_county", engName: "Yunlin County", area: "central" },
    { chiName: "花蓮縣", svgClass: "hualien_county", engName: "Hualien County", area: "eastern" },
    { chiName: "臺中市", svgClass: "taichung_city", engName: "Taichung City", area: "central" },
    { chiName: "臺東縣", svgClass: "taitung_county", engName: "Taitung County", area: "eastern" },
    { chiName: "桃園市", svgClass: "taoyuan_city", engName: "Taoyuan City", area: "northern" },
    { chiName: "南投縣", svgClass: "nantou_county", engName: "Nantou County", area: "central" },
    { chiName: "高雄市", svgClass: "kaohsiung_city", engName: "Kaohsiung City", area: "southern" },
    { chiName: "金門縣", svgClass: "kinmen_county", engName: "Kinmen County", area: "islands" },
    { chiName: "屏東縣", svgClass: "pingtung_county", engName: "Pingtung County", area: "southern" },
    { chiName: "基隆市", svgClass: "keelung_city", engName: "Keelung City", area: "northern" },
    { chiName: "澎湖縣", svgClass: "penghu_county_9_", engName: "Penghu County", area: "southern" },
    { chiName: "彰化縣", svgClass: "changhua_county", engName: "Changhua County", area: "central" },
    { chiName: "連江縣", svgClass: "lienchiang_county", engName: "Lienchiang County", area: "islands" }
];

let areas = ["northern", "central", "southern", "eastern", "islands"]

//導入資料
let apiData = "";
fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-99B3FF60-0BC1-4597-BE10-7B7E5977F109')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        apiData = data.records.location;
    });

