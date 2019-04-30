const axios = require('axios');
const { api } = require('./config.json');


var API = api + "/news/articles/450001"
axios.post(API, {
    "url": "HTTP://www.yonhapnews.co.kr/bulletin/2018/07/24/0200000000AKR20180724095000014.HTML",
    "isSum": "요약됨",
    "category": "정치",
    "img": "http://img.yonhapnews.co.kr/etc/inner/KR/2018/07/24/AKR20180724095000014_01_i.jpg",
    "mediaName": "연합뉴스",
    "title": "통일부 \"개성연락사무소, 서울-평양대표부로 발전 추진\"",
    "author": "이정진 기자 ",
    "publishDate": "2018-07-24 14:26:00",
    "content": "국회 업무보고 \"상반기 북중 무역액 작년比 59.2％ 감소 물가 환율은 안정적\"[연합뉴스 자료사진]     통일부는 24일 개성공단에 설치를 추진하고 있는 남북공동연락사무소를 남북관계 진전 상황에 따라 서울-평양 상주대표부로 확대 발전시키는 방안을 추진하겠다고 밝혔다.   통일부는 이날 국회 외교통일위원회 업무보고를 통해 \"8월 중 남북공동연락사무소를 개소해 당국간 상시 협의채널을 확립하겠다\"며 이렇게 보고했다.   지난 4 27 남북정상회담 당시 김정은 북한 국무위원장은 개성 공동연락사무소 외에 서울과 평양에도 연락사무소를 설치하자는 문재인 대통령의 제안에 향후 상황에 따라 협의할 수 있다는 뜻을 내비쳤다고 조명균 통일부 장관이 밝힌 바 있다.   통일부는 연락사무소에서는 \"당면해 산림협력, 한반도 신경제구상, 철도 도로 협력 등에 대한 협의부터 추진하고, 남북관계 현안으로 논의를 확대해 나가겠다\"고 밝혔다.   통일부는 또 \"남북고위급회담을 개최해 판문점선언 이행 상황을 총괄 점검하고 향후 추진방향을 협의하겠다\"면서 \"분야별 실무회담과 공동연구 및 현장조사 등을 내실 있게 추진해 가시적 성과를 도출하겠다\"고 보고했다.   아울러 \"판문점 선언에 대한 국회 비준 동의를 추진함으로써 안정적인 이행기반을 확보하겠다\"면서 \"가을 남북정상회담에서는 판문점선언의 성과의 확대 발전을 통한 한반도 평화 번영을 본격적으로 추진하는 토대를 마련하고 남북관계의 제도화를 추진하겠다\"고 밝혔다.   통일부는 아울러 8 15 계기 이산가족 상봉행사를 차질없이 진행하겠다며 \"차기 적십자회담 등을 통해 전면적 생사확인과 고향방문, 상봉 정례화 등 이산가족 문제의 근본적 해결을 추진하겠다\"고 보고했다.   통일부는 북한 경제상황과 관련, \"경제 제재의 영향으로 대외 무역규모가 감소했지만, 시장 물가와 환율은 안정적\"이라고 밝혔다.    통일부에 따르면 상반기 북 중 무역액은 작년 동기 대비 59.2％ 감소했다.수출은 88.7％, 수입은 43.1％ 각각 줄었다.    또 북한은 정세 변화에 따른 주민 동요 방지 및 내부 결속을 위해 사상교양을 강조하고 있다고 통일부는 덧붙였다.   한편 올해 들어 지난 15일까지 입국한 탈북민은 총 541명으로 작년 동기와 비교해 18％ 감소했다.현재까지 입국한 탈북민은 총 3만1천880명으로 집계됐다.",
    "summarized": "통일부에 따르면 상반기 북 중 무역액은 작년 동기 대비 59.2％ 감소했다. 한편 올해 들어 지난 15일까지 입국한 탈북민은 총 541명으로 작년 동기와 비교해 18％ 감소했다. 국회 업무보고 \"상반기 북중 무역액 작년比 59.2％ 감소 물가 환율은 안정적\"[연합뉴스 자료사진]     통일부는 24일 개성공단에 설치를 추진하고 있는 남북공동연락사무소를 남북관계 진전 상황에 따라 서울-평양 상주대표부로 확대 발전시키는 방안을 추진하겠다고 밝혔다.",
    "keyword1": "연락사무소",
    "keyword2": "남북공동",
    "keyword3": "판문점 선언",
    "sentiment": 1.30737,
    "sentiment_flag": 1,
    "errorflag": 0,
    "crawl_flag": 1,
    "reversed_id": -450000
})
.then((response) => {
    console.log(response);
})
.catch((err) => {
    console.warn(err);
})