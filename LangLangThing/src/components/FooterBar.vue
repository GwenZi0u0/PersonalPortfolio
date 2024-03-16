
<template>
    <div class="footer-container">
        <div class="dogcat">
            <div class="dog">
                <img src="../assets/Image/HomeImage/HomeD-dog and paw.svg">
            </div>
            <div class="cat">
                <img src="../assets/Image/HomeImage/HomeD-cat and paw.svg">
            </div>
        </div>
        <div class="footer">
            <span>隱私權政策Copyright © 2019 - 2024 浪浪的事. All Rights Reserved.</span>
        </div>
    </div>
</template>

<style>
.footer-container {
    width: 100vw;
    max-width: 100%;
    height: 310px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.dogcat {
    z-index: 1;
    position: relative;
}

.dog {
    position: absolute;
    top: -10px;
    left: 83px;
}

.cat {
    position: absolute;
    top: 0px;
    right: 83px;
}

.footer {
    background-color: var(--primary-color);
    width: 100%;
    border-radius: 20px 20px 0 0;
    color: white;
    font-size: 18px;
    letter-spacing: 4px;
    padding: 76px 0px;
    text-align: center;
}

@media (max-width: 1280px) {
    .footer-container {
        height: 257px;
    }

    .dog {
        position: absolute;
        top: 14px;
        left: 83px;
    }

    .cat {
        position: absolute;
        top: 22px;
        right: 83px;
    }

    .footer {
        border-radius: 5px 5px 0 0;
        font-size: 16px;
        padding: 40px 0px;
    }
}

@media (max-width: 768px) {
    .dog {
        position: absolute;
        top: 30px;
        left: 0px;
        transform: scale(0.8);
    }

    .cat {
        position: absolute;
        top: 30px;
        right: 0;
        transform: scale(0.8);
    }

    .footer {
        border-radius: 5px 5px 0 0;
        padding: 25px 171px;
    }
}

@media (max-width: 720px) {
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 85px;
        padding: 0 40px;
        border-radius: 20px 20px 0 0;
        font-size: 0.75rem;
        letter-spacing: 3px;
    }

    .footer-container {
        height: 144px;
    }


    .dog {
        position: absolute;
        top: -52px;
        left: -65px;
        transform: scale(0.4);
    }

    .cat {
        position: absolute;
        top: -63px;
        right: -46px;
        transform: scale(0.4);
    }
}
</style>