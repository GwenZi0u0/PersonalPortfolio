<script>
import FooterPage from '@/components/FooterPage.vue';
import NavPage from '@/components/NavPage.vue';

export default {
    components: {
        NavPage,
        FooterPage,
    },
    data() {
        return {
            formData: {
                account: '', // 帳號
                password: '', // 密碼
            },
        }
    },
    methods: {
        logIn() {
            // 讀取localStorage.user
            const tmp = localStorage.user;
            // 如果有資料
            let usertable = '';
            if (tmp) {
                usertable = JSON.parse(tmp);
            }
            // console.log(usertable)
            if (usertable.email == this.formData.account || usertable.phone == this.formData.account) {
                if (usertable.password == this.formData.password) {
                    sessionStorage.token = this.formData.account;
                    this.goToPage();
                } else {
                    this.formData.account = '';
                    this.formData.password = '';
                    alert('登入失敗');
                }
            } else {
                this.formData.account = '';
                this.formData.password = '';
                alert('登入失敗');
            }
        },
        autoLogIn() {
            if (sessionStorage.token) {
                this.goToPage();
            }
        },
        goToSignUp() {
            this.$router.push('/memberregistration'); //導到[會員註冊]
        },
        goToForget() {
            this.$router.push('/memberpassword'); //導到[忘記密碼]
        },
        goToPage() {
            this.$router.push('/members'); //導到[會員頁面]
        },
    },
    mounted() {
        this.autoLogIn();
    },
}
</script>
<template>
    <NavPage />
    <main>
        <div class="container">
            <form action="" @submit.prevent="logIn">
                <div class="title">會員登入</div>
                <div class="accountbox">
                    <div class="inputArea">
                        <div class="account">
                            <label>帳號</label>
                            <input type="text" placeholder="手機號碼 / 帳號 / 信箱" v-model="formData.account">
                        </div>
                        <div class="account">
                            <label>密碼</label>
                            <input type="password" v-model="formData.password">
                        </div>
                    </div>
                    <!-- 768 -->
                    <div class="otherTwo">
                        <span @click="goToForget">忘記密碼<img src="../assets/Image/MemberImage/Icon-forget.svg"></span>
                        <span @click="goToSignUp">註冊帳號 <img src="../assets/Image/MemberImage/Icon-signup.svg"></span>
                    </div>
                    <button type="submit" class="login">
                        登入
                    </button>
                </div>
            </form>
            <div class="other">
                <span @click="goToForget">忘記密碼<img src="../assets/Image/MemberImage/Icon-forget.svg"></span>
                <span @click="goToSignUp">註冊帳號 <img src="../assets/Image/MemberImage/Icon-signup.svg"></span>
            </div>

            <div class="social">
                <div class="socialLine">
                    <img src="../assets/Image/MemberImage/member-line.svg">
                    <span>以社群帳號繼續</span>
                    <img src="../assets/Image/MemberImage/member-line.svg">
                </div>
                <div class="icon">
                    <img src="../assets/Image/MemberImage/member-lineapp.svg" alt="">
                    <img src="../assets/Image/MemberImage/member-email.svg" alt="">
                    <img src="../assets/Image/MemberImage/member-fb.svg" alt="">
                </div>
            </div>

        </div>
    </main>
    <FooterPage />
</template>
<style scoped>
main {
    width: 100vw;
    max-width: 100%;
    padding: 102px 0 180px;
    display: flex;
    justify-content: center;
    align-items: center
}

.container {
    width: 818px;
    height: 600px;
    background-image: url(../assets/Image/MemberImage/loginBg.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    font-family: 'ABeeZee';
    padding: 60px 103px;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    letter-spacing: 10px;
    color: var(--primary-color);
    padding-bottom: 36px;
}

.accountbox {
    display: flex;
    align-items: center;
}

.inputArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: 32px;
}

.account {
    font-size: 1.5rem;
    letter-spacing: 6px;
    display: flex;
    gap: 32px;
    align-items: center;
    color: var(--gray-color);
    margin: 20px 0;
}

input {
    width: 290px;
    height: 50px;
    background-color: rgba(217, 217, 217, 0.5);
    border: none;
    border-radius: 80px;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 4px;
}

.login {
    width: 100px;
    height: 100px;
    color: var(--gray-color);
    background-color: var(--white-color);
    border-radius: 50%;
    border: 1px solid var(--gray-color);
    font-size: 1.5rem;
    letter-spacing: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.login:hover {
    border: 4px solid var(--gray-color);
    box-shadow: none;
    transition: 0.1s linear;
}

.otherTwo {
    display: none;
    visibility: hidden;
}

.other {
    display: flex;
    gap: 60px;
    color: var(--gray-color);
    margin-right: 35px;
    margin-bottom: 35px;
}

.other span {
    text-decoration: underline;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
}

.social {
    width: 616px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    letter-spacing: 5px;
    padding-bottom: 40px;
}

.socialLine {
    display: flex;
    flex-direction: row;
    gap: 20px;
    font-size: 1.25rem;
}

.socialLine img {
    width: 200px;
}

.icon {
    width: 452px;
    display: flex;
    gap: 106px;
}

.icon img {
    width: 80px;
    height: 80px;
    cursor: pointer;
}

@media screen and (max-width:720px) {
    main {
        padding: 57px 0 103px;
    }

    .container {
        width: 318px;
        height: 600px;
        padding: 28px 0 62px;
    }

    .title {
        font-size: 1.25rem;
        letter-spacing: 5px;
        padding-bottom: 30px;
    }

    .accountbox {
        flex-direction: column;
    }

    .inputArea {
        padding-right: 0;
    }

    .account {
        align-items: flex-start;
        flex-direction: column;
        font-size: 1rem;
        letter-spacing: 4px;
        gap: 5px;
        margin: 0;
    }

    input {
        width: 259px;
    }

    .login {
        width: 70px;
        height: 70px;
        font-size: 1rem;
        letter-spacing: 4px;
        margin: 25px 0 20px 0;
    }

    .other {
        gap: 67px;
        margin-right: 0;
        margin-bottom: 0;
    }

    .social {
        width: 316px;
        gap: 30px;
        letter-spacing: 4px;
        padding-bottom: 0;
        padding-top: 40px;
    }

    .socialLine {
        font-size: 1rem;
    }

    .socialLine img {
        width: 50px;

    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 316px;
        gap: 34px;
    }

    .icon img {
        width: 51px;
        height: 51px;
    }
}

@media screen and (max-width:1280px) and (min-width:769px) {
    main {
        padding: 83px 0 156px;
    }
}

@media screen and (max-width:768px) and (min-width:720px) {
    main {
        padding: 62px 108px 157px;
    }

    .container {
        width: 535px;
        height: 695px;
        padding: 60px 48px 55px;
    }

    .title {
        font-size: 2.25rem;
        letter-spacing: 9px;
        padding-bottom: 10px;
    }

    .accountbox {
        display: flex;
        flex-direction: column;
    }

    .inputArea {
        padding: 0;
    }

    .account {
        font-size: 1.25rem;
        letter-spacing: 5px;
        gap: 44px;
        margin: 20px 0;
    }

    .other {
        display: none;
        visibility: hidden;
    }

    .otherTwo {
        display: flex;
        visibility: visible;
        display: flex;
        gap: 32px;
        color: #626262;
        padding: 30px 0 41px 0;
    }

    .otherTwo span {
        text-decoration: underline;
        display: flex;
        gap: 7px;
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
    }

    .social {
        width: 437px;
        padding-top: 32px;
    }

    .socialLine {
        gap: 31px;
    }

    .socialLine img {
        width: 100px;
    }

    .icon {
        padding: 0 59px;
        gap: 68px;
    }

    .icon img {
        width: 53px;
        height: 53px;
    }


}
</style>