<style>
    .top_btn {
        position: fixed;
        right: 0;
        bottom: 45%;
        height: 30px;
        width: 30px;
        background: #353535;
        border: 1px solid #fff;
        -webkit-transition: -webkit-transform .4s ease, opacity .4s ease;
        -webkit-transition: opacity .4s ease, -webkit-transform .4s ease;
        transition: opacity .4s ease, -webkit-transform .4s ease;
        transition: transform .4s ease, opacity .4s ease;
        transition: transform .4s ease, opacity .4s ease, -webkit-transform .4s ease;
        -webkit-transform: translate(30px);
        -ms-transform: translate(30px);
        transform: translate(30px);
        cursor: pointer;
        z-index: 9
    }

    .top_btn a,
    .top_btn span {
        text-decoration: none;
        font-size: 16px;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        position: absolute;
        left: 50%;
        top: 60%;
        color: #fff
    }
</style>

<div class="top_btn"><span>^</span></div>