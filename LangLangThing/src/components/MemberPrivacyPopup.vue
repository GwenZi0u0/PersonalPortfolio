<script>
import IconX from './icons/IconX.vue';

export default {
    components: {
        IconX
    },
    props: {
        isShow: Boolean,
    },
    data() {
        return {

        }
    },
    methods: {
        //  將關閉視窗的值傳給父層
        closePopup() {
            this.$emit('close');
        }
    },
}
</script>
<template>
    <!-- v-show="isShow" -->
    <main>
        <!-- 顯示視窗v-show -->
        <div class="informationPopupFrame">
            <div class="informationTitle">
                <span>隱私權政策與會員服務條款</span>
                <!-- 點擊關閉 -->
                <IconX class="x" @click.stop="closePopup" />
            </div>
            <section class="information">
                <span>浪浪的事平台（以下稱我們），為了讓您能夠安心的使用我們的各項服務與資訊，特此向您說明我們的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</span>
                <article class="text">
                    <ol type="1">
                        <li>隱私權保護政策的適用範圍：</li>
                        <p>隱私權保護政策內容，包括我們如何處理在您使用網站服務時蒐集到的個人識別資料。隱私權保護政策不適用於我們以外的相關連結網站，也不適用於非我們所委託或參與管理的人員。</p>
                        <li>個人資料的蒐集、處理及利用方式：</li>
                        <p>我們遵守所有台灣有關隱私資料保護及個人資料安全的相關法令，瀏覽或是使用本網站所提供的相關服務時，即代表您同意本隱私權規範中對個人資料的蒐集、處理、儲存、或是其他使用等。</p>
                        <p>部分服務可能會要求您提供相關的個人資訊，像是您的姓名、電話、居住地址、電子郵件等或是其他所需的個人資訊，以利相關人員在最短的時間內提供您最佳的服務或是解決方案。
                            除此之外，我們也會在不定期舉辦的活動中，像是抽獎活動、競賽等，蒐集由參與者自願提供的個人資料。</p>
                        <p>蒐集的個人資料將主要用於調查、統計與研究分析，如符合您個人需求的支援服務、問題回覆或是最新活動資訊等。</p>
                        <p>另外，我們也將根據使用者所提供的資料，進行相關研究，幫助我們更加貼近使用者，讓我們能在未來提供更加完善的服務。</p>
                        <span>我們網站內蒐集的個人資料包括如下：</span>
                        <ul>
                            <li>C001辨識個人者： 如會員之姓名、地址、電話、電子郵件等資訊。</li>
                            <li>C011個人描述：例如：性別、出生年月日等。</li>
                            <span>利用期間、地區、對象及方式：</span>
                            <li>期間：會員當事人要求停止之日為止。</li>
                            <li>地區：會員之個人資料將用於台灣地區。</li>
                            <li>利用對象及方式：會員之個人資料蒐集用於辨識身份、行銷廣宣、消費之調查研究等。</li>
                            <span>會員就個人資料之權利：我們蒐集個人資料之會員，依個人資料保護法得對我們行使以下權利：</span>
                            <li>查詢或請求閱覽。</li>
                            <li>請求製給複製本。</li>
                            <li>請求補充或更正。</li>
                            <li>請求停止蒐集、處理或利用。</li>
                            <li>請求刪除。</li>
                            <p>會員如欲行使上述權利，可透過網站內的「聯絡我們」進行申請。如沒有蒐集個人資料之必要，我們會停止蒐集或是使用您的個人資料。</p>
                            <p>於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，以及資訊安全預防，決不對外公佈。
                            </p>
                            <p>為提供精確的服務，我們會將蒐集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。</p>
                            <br>
                            <span>兒童隱私權原則</span>
                            <p>為了保障兒童的隱私權，我們不會在知情的情況且未知會監護人或是法定代理人的情況之下，蒐集或是使用兒童的個人資料。如果我們發現我們的資料庫中有兒童的個資，我們也會將其刪除，以保障兒童的相關權益。我們也鼓勵兒童在父母或是監護人的陪伴下，使用網路服務，並只有在法定代理人知情且同意的情況下，將個人資料提交給我們。
                            </p>
                        </ul>
                        <li>資料之保護</li>
                        <p>在收集、儲存、傳遞、使用您的個人資料時，我們採用嚴格的隱私安全措施，以避免您的個人資料遭到有心人士的偷取、洩漏、毀損或是竄改，也敬請您配合相關安全措施，例如：定期更換密碼...。</p>
                        <p>落實嚴格的審查措施，經過授權的人員擁有觀看、查詢您個人資料的權限，除此之外我們也定期維護我們的系統，杜絕外來駭客或是惡意軟體的入侵，讓您的個人資料不論是在網路上或是實體都受到完整的保護。</p>
                        <p>相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。</p>
                        <li>網站對外的相關連結</li>
                        <p>我們提供其他網站的網路連結，您也可經由我們所提供的連結，點選進入其他網站。但該連結網站不適用我們的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</p>
                        <li>與第三人共用個人資料之政策</li>
                        <p>我們絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。</p>
                        <p>如因業務需要有必要委託其他單位提供服務時，我們亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。</p>
                        <span>前項但書之情形包括不限於：</span>
                        <ul>
                            <li>經由您確認同意。</li>
                            <li>法律明文規定。</li>
                            <li>為免除您生命、身體、自由或財產上之危險。</li>
                            <li>當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。</li>
                            <li>有利於您的權益。</li>
                            <li>我們委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。</li>
                        </ul>
                        <li>Cookie之使用</li>
                        <p>「Cookies」是指儲存於您電腦中，蒐集您如何使用網頁，並在您下一次登錄該網頁時，提供您更加個人化、流暢瀏覽體驗的技術。</p>
                        <p>目前大多數的網站，都將Cookies視為標準的技術。我們使用Cookies儲存您使用過我們網頁的資訊，讓我們能夠持續優化我們網頁，提供您一個更加舒適良好的上網環境。如果您擔心Cookies的使用會造成您的負擔或是疑慮，目前大多數的瀏覽器都能幫助您清除電腦中的Cookies資料、拒絕接收Cookies或是在發現Cookies時發出提醒告知您該網頁有使用Cookies。
                        </p>
                        <p>您可以將您的瀏覽器設定為拒絕Cookies，不過請注意，如此一來，部份網頁的功能無法使用。</p>
                        <li>隱私權保護政策之修正</li>
                        <p>我們隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>
                    </ol>
                </article>
            </section>
        </div>
    </main>
</template>
<style scoped>
ul {
    list-style: inside;
    padding-left: 0;
}

ol>li {
    margin-left: 12px;
    line-height: 80px;
}

main {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(260, 255, 255, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
}

.informationPopupFrame {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1135px;
    height: 770px;
    font-style: normal;
    font-weight: 400;
    border-radius: 2.5rem;
    border: 1px solid #FFF;
    background: linear-gradient(102deg, rgba(255, 255, 255, 0.30) -5.18%, rgba(255, 255, 255, 0.12) 108.27%);
    box-shadow: 0px 4px 6px 0px rgba(82, 160, 56, 0.15);
    backdrop-filter: blur(12.5px);
    padding: 59px 83px;
    gap: 36px;
}

.x {
    position: absolute;
    top: 38px;
    right: 23px;
    width: 36px;
    height: 36px;
    cursor: pointer;
}

.informationTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52A038;
    font-size: 2.25rem;
    line-height: normal;
    letter-spacing: 9px;
    padding: 15px 0;
}

.information {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 150%;
    letter-spacing: 6px;
    gap: 36px;
}

.information span {
    font-size: 1.5rem;
}

.text {
    display: flex;
    flex-direction: column;
    width: 879px;
    height: 400px;
    overflow: scroll;
}

.text::-webkit-scrollbar {
    display: none;
}

@media screen and (max-width:720px) {

    ol>li {
        margin-left: 10px;
        line-height: 50px;
    }

    .informationPopupFrame {
        width: 328px;
        height: 613px;
        padding: 50px 0;
    }

    .x {
        top: 16px;
        right: 14px;
    }

    .informationTitle {
        width: 150px;
        font-size: 1.25rem;
        letter-spacing: 5px;
        padding: 0 0 10px 0;
    }

    .information {
        font-size: 1rem;
        letter-spacing: 4px;
        line-height: 120%;
        gap: 20px;
    }

    .information span {
        width: 278px;
        font-size: 1rem;
        padding: 0 25px;
    }

    .text {
        width: 279px;
        height: 294px;
    }
}

@media screen and (max-width:1280px) and (min-width:769px) {
    .informationPopupFrame {
        width: 1000px;
    }
}

@media screen and (max-width:768px) and (min-width:720px) {
    .informationPopupFrame {
        width: 650px;
        height: 710px;
        padding: 30px 50px 40px 50px;
        gap: 30px;
    }

    .informationTitle {
        font-size: 1.5rem;
        letter-spacing: 6px;
        padding: 10px 0;
    }

    .information {
        font-size: 1.25rem;
        gap: 20px;
    }

    .information span {
        font-size: 1.25rem;
    }

    .text {
        width: 540px;
    }
}
</style>